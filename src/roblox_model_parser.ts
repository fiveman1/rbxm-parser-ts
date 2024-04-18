/**
 * @author https://github.com/fiveman1
 * @file roblox_model_parser.ts
 * Contains the core classes for loading and parsing a .rbxm file.
 */

import axios from "axios";
import lz4 from "lz4";
import fzstd from "fzstd";
import { RobloxModelByteBuffer, ChunkType, DataType } from "./util";
import { Instance, RobloxModel } from "./roblox_model";

type RobloxClass = 
{
    name: string
    isService: boolean
    instances: Array<Instance>
    referentIdToIndex: Map<number, number>
}

type DataTypeParser = (this: RobloxModelDOM, bytes: RobloxModelByteBuffer, propName: string, classInfo: RobloxClass, numInstances: number) => void;

// Helpful resources I used:
// https://dom.rojo.space/binary - Documentation for .rbxm format
// https://github.com/MaximumADHD/Roblox-File-Format - C# .rbxm parser

/**
 * This class can load a .rbxm then parse() it to create a RobloxModel.
 */
export class RobloxModelDOM extends RobloxModelByteBuffer
{
    protected model: RobloxModel | null = null;
    protected classIdToInfo: Map<number, RobloxClass> = new Map<number, RobloxClass>();
    protected dataTypeParsers: Map<DataType, DataTypeParser> = new Map<DataType, DataTypeParser>;
    protected referentIdToClassId: Map<number, number> = new Map<number, number>();

    protected constructor(data: Uint8Array)
    {
        super(data);
        // Define the methods used to parse the data types in PROP chunks
        this.dataTypeParsers.set(DataType.String, this.readStringProp);
        this.dataTypeParsers.set(DataType.Referent, this.readReferentProp);
    }

    /**
     * Create a RobloxModelDOM from an asset ID. The uses the Roblox AssetDelivery web API
     * to download the model using the given ID. If the provided asset ID is not a model,
     * this will return null. This may throw an error if there are problems accessing the API endpoint.
     * @param assetId the ID of the model
     * @returns a Roblox model DOM object or null if the asset ID is not a valid model.
     */
    public static async fromAssetId(assetId: number)
    {
        const res = await axios.get("https://assetdelivery.roblox.com/v2/asset/", {
            params: {id: assetId},
            validateStatus: (status) => status === 404 || (status >= 200 && status < 300)
        });
    
        if (res.status === 404)
        {
            return null;
        }
    
        const data = res.data;
        // https://create.roblox.com/docs/reference/engine/enums/AssetType
        if (data.assetTypeId !== 10) // Model = 10
        {
            return null;
        }
    
        const location = data.locations[0].location;
        const modelDomRes = await axios.get(location, {responseEncoding: "binary"});
        // https://stackoverflow.com/questions/62839519/how-convert-a-string-to-type-uint8array-in-nodejs
        const domData = Uint8Array.from(Array.from(modelDomRes.data).map(letter => (letter as string).charCodeAt(0)));
        return new RobloxModelDOM(domData);
    }

    /**
     * Create a RobloxModelDOM from a buffer or file. You could use fs.readFile
     * to load a .rbxm file then pass the result to this function to load it.
     * @param buffer a data buffer
     * @returns a Roblox model DOM object
     */
    public static fromBuffer(buffer: Buffer)
    {
        const data = Uint8Array.from(buffer);
        return new RobloxModelDOM(data);
    }

    /**
     * This will parse the DOM and create a RobloxModel object.
     * If the DOM is not valid, this will return null.
     * @returns a Roblox model or null if the DOM is invalid.
     */
    public parse()
    {
        // Clear out any existing values
        this.idx = 0;
        this.model = new RobloxModel();
        this.classIdToInfo.clear();
        this.referentIdToClassId.clear();

        if (!this.readHeader())
        {
            return null;
        }

        let chunkType;
        do
        {
            chunkType = this.readChunk();
        } while (chunkType !== ChunkType.END);

        const rootModel = this.findRootModel();
        if (!rootModel) return null;

        this.model.root = rootModel;
        
        return this.model;
    }

    protected findRootModel()
    {
        for (const classInfo of this.classIdToInfo.values())
        {
            for (const instance of classInfo.instances)
            {
                if (!instance.parent)
                {
                    return instance;
                }
            }
        }
        return null;
    }
    
    protected static readonly MAGIC_HEADER = "<roblox!\x89\xff\x0d\x0a\x1a\x0a";
    protected readHeader()
    {
        // Must have a 32-byte header and at least 1 16-byte chunk
        if (this.data.length < 48 || !this.model)
        {
            return false;
        }

        const magicBytes = this.getNextBytesAsString(RobloxModelDOM.MAGIC_HEADER.length);
        if (magicBytes !== RobloxModelDOM.MAGIC_HEADER)
        {
            return false;
        }

        this.model.version = this.getNextUint16();
        this.model.numClasses = this.getNextInt32();
        this.model.numInstances = this.getNextInt32();

        this.skipNextBytes(8); // 8 reserved bytes

        return true;
    }

    protected readChunk()
    {
        const {chunkType, compressedLength, uncompressedLength} = this.readChunkHeader();

        this.readChunkContent(chunkType, compressedLength, uncompressedLength);
       
        return chunkType;
    }

    protected readChunkHeader()
    {
        const chunkType = this.getNextBytesAsString(4) as ChunkType;
        const compressedLength = this.getNextUint32();
        const uncompressedLength = this.getNextUint32();
        this.skipNextBytes(4); // 4 reserved bytes
        
        return {chunkType, compressedLength, uncompressedLength};
    }
    
    protected readChunkContent(chunkType: ChunkType, compressedLength: number, uncompressedLength: number)
    {
        if (chunkType === ChunkType.END)
        {
            return;
        }
        
        const bytes = this.readChunkContentBytes(compressedLength, uncompressedLength);

        switch (chunkType)
        {
            case ChunkType.INST:
                this.readInstChunk(bytes);
                break;
            case ChunkType.PROP:
                this.readPropChunk(bytes);
                break;
            case ChunkType.PRNT:
                this.readPrntChunk(bytes);
                break;
        }
    }

    protected readChunkContentBytes(compressedLength: number, uncompressedLength: number)
    {
        let byteArray : Uint8Array;
        if (compressedLength !== 0)
        {
            // Load compressed bytes
            const compressedBytes = this.getNextBytesAsArray(compressedLength);

            if (compressedBytes[0] === 0x28 &&
                compressedBytes[1] === 0xb5 &&
                compressedBytes[2] === 0x2f &&
                compressedBytes[3] === 0xfd)
            {
                // Use zstd to decompress
                byteArray = new Uint8Array(uncompressedLength);
                fzstd.decompress(compressedBytes, byteArray);
            }
            else
            {
                // Use lz4 to decompress
                // lz4 requires a buffer object instead of a Uint8array
                const decompressedBuffer = Buffer.alloc(uncompressedLength);
                lz4.decodeBlock(Buffer.from(compressedBytes), decompressedBuffer);
                byteArray = Uint8Array.from(decompressedBuffer);
            }
        }
        else
        {
            // Uncompressed so load bytes directly
            byteArray = this.getNextBytesAsArray(uncompressedLength);
        }

        return new RobloxModelByteBuffer(byteArray);
    }

    protected readInstChunk(bytes: RobloxModelByteBuffer)
    {
        const classId = bytes.getNextUint32();
        const className = bytes.getNextString();
        const isService = bytes.getNextBool();

        const numInstances = bytes.getNextUint32();
        const referents = bytes.getReferentArray(numInstances);
        const referentIdToIndex = new Map<number, number>();
        referents.forEach((referent, index) => {
            referentIdToIndex.set(referent, index);
            this.referentIdToClassId.set(referent, classId);
        });

        const instances = new Array<Instance>(numInstances);
        for (let i = 0; i < numInstances; ++i)
        {
            instances[i] = new Instance(className);
        }

        this.classIdToInfo.set(classId, {
            name: className, 
            isService: isService, 
            instances: instances, 
            referentIdToIndex: referentIdToIndex
        });
    }

    protected readPropChunk(bytes: RobloxModelByteBuffer)
    {
        const classId = bytes.getNextUint32();
        const propName = bytes.getNextString();
        const dataType = bytes.getNextUint8() as DataType;

        const classInfo = this.classIdToInfo.get(classId);
        if (!classInfo) return;
        
        const parser = this.dataTypeParsers.get(dataType);
        if (parser)
        {
            // A little bit of JS magic to actually call this instance method
            parser.apply(this, [bytes, propName, classInfo, classInfo.instances.length]);
        }
    }

    protected getInstanceFromReferent(referent: number)
    {
        const classId = this.referentIdToClassId.get(referent);
        if (classId === undefined) return null;
        const classInfo = this.classIdToInfo.get(classId);
        if (!classInfo) return null;
        const index = classInfo.referentIdToIndex.get(referent);
        if (index === undefined) return null;
        return classInfo.instances[index];
    }

    protected setPropValue(propName: string, value: any, classInfo: RobloxClass, index: number)
    {
        const instance = classInfo.instances[index];
        instance.setProp(propName, value);
    }

    protected readStringProp(bytes: RobloxModelByteBuffer, propName: string, classInfo: RobloxClass, numInstances: number)
    {
        for (let i = 0; i < numInstances; ++i)
        {
            const value = bytes.getNextString();
            if (!value) continue;
            this.setPropValue(propName, value, classInfo, i);
        }
    }

    protected readReferentProp(bytes: RobloxModelByteBuffer, propName: string, classInfo: RobloxClass, numInstances: number)
    {
        const referents = bytes.getReferentArray(numInstances);
        for (let i = 0; i < numInstances; ++i)
        {
            const referent = referents[i];
            if (referent === -1) continue;
            const instance = this.getInstanceFromReferent(referent);
            if (!instance) continue;
            this.setPropValue(propName, instance, classInfo, i);
        }
    }

    protected readPrntChunk(bytes: RobloxModelByteBuffer)
    {
        bytes.getNextUint8(); // Version

        const numInstances = bytes.getNextInt32();
        const children = bytes.getReferentArray(numInstances);
        const parents = bytes.getReferentArray(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            const childRef = children[i];
            const parentRef = parents[i];
            // -1 means null
            if (childRef === -1 || parentRef === -1) continue;

            const child = this.getInstanceFromReferent(childRef);
            const parent = this.getInstanceFromReferent(parentRef);
            if (!child || !parent) continue;

            child.parent = parent;
            parent.children.push(child);
        }
    }
}