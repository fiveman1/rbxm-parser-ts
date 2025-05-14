/**
 * @author https://github.com/fiveman1
 * Contains the core classes for reading a .rbxm file.
 */

import lz4 from "lz4";
import * as fzstd from "fzstd";
import { RobloxFile } from "./roblox_file";
import { DataType, RobloxValue, CoreInstance, SharedString } from "./roblox_types";
import { ChunkType, DataParserExtraInfo, RobloxFileDOM } from "./roblox_file_dom";
import { ClassMap, EnumMap } from "../generated/generated_types";
import { RobloxFileByteReader } from "./roblox_file_bytes";

/**
 * This class can read .rbxm bytes to create a RobloxFile.
 */
export class RobloxFileDOMReader extends RobloxFileDOM
{
    protected data: RobloxFileByteReader = new RobloxFileByteReader();
    protected enumMap: EnumMap = new EnumMap();
    protected classMap: ClassMap = new ClassMap();
    protected model: RobloxFile = new RobloxFile();

    /**
     * This will parse the DOM and create a RobloxModel object.
     * If the DOM is not valid, this will return null.
     * @param .rbxm bytes
     * @returns a Roblox model or null if the DOM is invalid.
     */
    public read(data: Uint8Array)
    {
        // Clear out any existing values
        this.data = new RobloxFileByteReader(data);
        this.model = new RobloxFile();
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

        this.findRoots();
        if (this.model.Roots.length === 0) return null;
        
        return this.model;
    }

    protected findRoots()
    {
        for (const classInfo of this.classIdToInfo.values())
        {
            for (const instance of classInfo.instances)
            {
                if (!instance.Parent)
                {
                    this.model.AddRoot(instance);
                }
            }
        }
    }
    
    protected readHeader()
    {
        // Must have a 32-byte header and at least 1 16-byte chunk
        if (this.data.length < 48)
        {
            return false;
        }

        const magicBytes = this.data.getBytesAsString(this.MAGIC_HEADER.length);
        if (magicBytes !== this.MAGIC_HEADER)
        {
            return false;
        }

        this.data.getUint16(); // Model version
        this.data.getInt32(); // The number of classes in the model
        this.data.getInt32(); // The number of instances in the model

        this.data.skipBytes(8); // 8 reserved bytes

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
        const chunkType = this.data.getBytesAsString(4) as ChunkType;
        const compressedLength = this.data.getUint32();
        const uncompressedLength = this.data.getUint32();
        this.data.skipBytes(4); // 4 reserved bytes
        
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
            case ChunkType.META:
                this.readMetaChunk(bytes);
                break;
            case ChunkType.SSTR:
                this.readSstrChunk(bytes);
                break;
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
        let byteArray;
        if (compressedLength !== 0)
        {
            // Load compressed bytes
            const compressedBytes = this.data.getBytes(compressedLength);
            byteArray = Buffer.allocUnsafe(uncompressedLength);

            if (compressedBytes[0] === 0x28 &&
                compressedBytes[1] === 0xb5 &&
                compressedBytes[2] === 0x2f &&
                compressedBytes[3] === 0xfd)
            {
                // Use zstd to decompress
                fzstd.decompress(compressedBytes, byteArray);
            }
            else
            {
                // Use lz4 to decompress
                lz4.decodeBlock(Buffer.from(compressedBytes), byteArray);
            }
        }
        else
        {
            // Uncompressed so load bytes directly
            byteArray = this.data.getBytes(uncompressedLength);
        }

        return new RobloxFileByteReader(byteArray);
    }

    protected readMetaChunk(bytes: RobloxFileByteReader)
    {
        const entries = bytes.getUint32();
        for (let i = 0; i < entries; ++i)
        {
            const key = bytes.getString();
            const value = bytes.getString();
            this.model.Metadata.set(key, value);
        }
    }

    protected readSstrChunk(bytes: RobloxFileByteReader)
    {
        bytes.getUint32(); // Version
        const count = bytes.getUint32();
        for (let i = 0; i < count; ++i)
        {
            const hash = bytes.getBytesAsString(16);
            const sharedString = bytes.getString();
            this.model.SharedStrings.push(new SharedString(sharedString, hash));
        }
    }

    protected readInstChunk(bytes: RobloxFileByteReader)
    {
        const classId = bytes.getUint32();
        const className = bytes.getString();
        const isService = bytes.getBool();
        const numInstances = bytes.getUint32();

        const referents = bytes.getReferentArray(numInstances);
        const referentIdToIndex = new Map<number, number>();
        const instances = new Array<CoreInstance>();
        const classFactory = this.classMap.getFactory(className);

        referents.forEach((referent, index) => {
            referentIdToIndex.set(referent, index);
            this.referentIdToClassId.set(referent, classId);
            const instance = classFactory ? classFactory() : new CoreInstance(isService, className);
            instance.ResetProps();
            instances.push(instance);
            this.model.ReferentMap.set(instance, referent);
        });

        this.classIdToInfo.set(classId, {
            name: className,
            isService: isService,
            instances: instances,
            referentIdToIndex: referentIdToIndex
        });
    }

    protected readPropChunk(bytes: RobloxFileByteReader)
    {
        const classId = bytes.getUint32();
        const propName = bytes.getString();
        const dataType = bytes.getUint8() as DataType;
        
        const parser = this.dataTypeParsers.get(dataType);
        if (!parser) return;

        const classInfo = this.classIdToInfo.get(classId);
        if (!classInfo) return;
        
        const numInstances = classInfo.instances.length;
        const values: (RobloxValue | undefined)[] = [];
        let extraInfo: DataParserExtraInfo | undefined;
        if (dataType === DataType.Enum)
        {
            extraInfo = { enumFactory: this.getEnumFactory(classInfo.name, propName) };
        }
        else if (dataType === DataType.Referent)
        {
            extraInfo = { getInstanceFromReferent: this.getInstanceFromReferent.bind(this) };
        }
        parser.read(bytes, numInstances, values, extraInfo);

        values.forEach((value: RobloxValue | undefined, index) => {
            if (value !== undefined)
            {
                const instance = classInfo.instances[index];
                instance.SetProp(propName, value.type, value.value);
            }
        });
    }

    protected getEnumFactory(className: string, propName: string)
    {
        const classFactory = this.classMap.getFactory(className);
        if (classFactory)
        {
            const fakeInstance = classFactory();
            for (const inheritedClassName of fakeInstance.ClassNameList)
            {
                const enumFactory = this.enumMap.getFactory(inheritedClassName, propName);
                if (enumFactory)
                {
                    return enumFactory;
                }
            }
        }
        return undefined;
    }

    protected readPrntChunk(bytes: RobloxFileByteReader)
    {
        bytes.getUint8(); // Version

        const numInstances = bytes.getInt32();
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

            child.Parent = parent;
        }
    }

    public getInstanceFromReferent(referent: number)
    {
        if (referent === -1) return null;

        const classId = this.referentIdToClassId.get(referent);
        if (classId === undefined) return null;

        const classInfo = this.classIdToInfo.get(classId);
        if (!classInfo) return null;

        const index = classInfo.referentIdToIndex.get(referent);
        if (index === undefined) return null;

        return classInfo.instances[index];
    }
}
