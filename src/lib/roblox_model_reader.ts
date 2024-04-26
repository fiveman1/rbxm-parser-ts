/**
 * @author https://github.com/fiveman1
 * @file roblox_model_reader.ts
 * Contains the core classes for reading a .rbxm file.
 */

import lz4 from "lz4";
import * as fzstd from "fzstd";
import { RobloxModel } from "./roblox_model";
import { DataType, RobloxValue, CoreInstance } from "./roblox_types";
import { ChunkType, DataParserExtraInfo, RobloxModelDOM } from "./roblox_model_dom";
import { ClassMap, EnumMap } from "../generated/generated_types";
import { bitsToByteArray, bytesToBitArray } from "./util";

/**
 * This class can read .rbxm bytes to create a RobloxModel.
 */
export class RobloxModelDOMReader extends RobloxModelDOM
{
    protected data: RobloxModelByteReader = new RobloxModelByteReader();
    protected enumMap: EnumMap = new EnumMap();
    protected classMap: ClassMap = new ClassMap();

    /**
     * This will parse the DOM and create a RobloxModel object.
     * If the DOM is not valid, this will return null.
     * @param .rbxm bytes
     * @returns a Roblox model or null if the DOM is invalid.
     */
    public read(data: Uint8Array)
    {
        // Clear out any existing values
        this.data = new RobloxModelByteReader(data);
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
                    this.model.AddToRoots(instance);
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

        return new RobloxModelByteReader(byteArray);
    }

    protected readMetaChunk(bytes: RobloxModelByteReader)
    {
        const entries = bytes.getUint32();
        for (let i = 0; i < entries; ++i)
        {
            const key = bytes.getString();
            const value = bytes.getString();
            this.model.Metadata.set(key, value);
        }
    }

    protected readSstrChunk(bytes: RobloxModelByteReader)
    {
        bytes.getUint32(); // Version
        const count = bytes.getUint32();
        for (let i = 0; i < count; ++i)
        {
            const hash = bytes.getBytesAsString(16);
            const sharedString = bytes.getString();
            this.model.SharedStrings.push({ Hash: hash, SharedString: sharedString });
        }
    }

    protected readInstChunk(bytes: RobloxModelByteReader)
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

    protected readPropChunk(bytes: RobloxModelByteReader)
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

    protected readPrntChunk(bytes: RobloxModelByteReader)
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

export class RobloxModelByteReader 
{
    protected readonly data: Uint8Array;
    protected idx: number = 0;

    public constructor(data: Uint8Array = new Uint8Array()) 
    {
        this.data = data;
    }

    public get length() 
    {
        return this.data.length;
    }

    public get index()
    {
        return this.idx;
    }

    public get dataArray()
    {
        return this.data;
    }

    public getUint8() 
    {
        const val = this.data[this.idx];
        ++this.idx;
        return val;
    }

    protected getUintOfSize(numBytes: number) 
    {
        let val = 0;
        for (let i = 0; i < numBytes; ++i) 
        {
            val += this.getUint8() << (i * 8);
        }
        return val;
    }

    public getUint16() 
    {
        return this.getUintOfSize(2);
    }

    public getUint32() 
    {
        return this.getUintOfSize(4);
    }

    public static bytesToInt32(bytes: Uint8Array) 
    {
        return Buffer.from(bytes).readInt32BE(0);
    }

    public static untransformInt32(int32: number) 
    {
        return (int32 >> 1) ^ -(int32 & 1);
    }

    public static untransformInt64(int64: bigint) 
    {
        return (int64 >> BigInt(1)) ^ -(int64 & BigInt(1));
    }

    public static bytesToRobloxFloat32(bytes: Uint8Array) 
    {
        // https://dom.rojo.space/binary#roblox-float-format
        // Standard format: seeeeeee emmmmmmm mmmmmmmm mmmmmmmm
        // Roblox format:   eeeeeeee mmmmmmmm mmmmmmmm mmmmmmms
        // We will swap the sign bit by interpreting the data as bits and swapping the sign bit from the back to the front.
        const robloxBitArray = bytesToBitArray(bytes);
        const standardBitArray = new Uint8Array(32);
        for (let i = 0; i < 31; ++i) 
        {
            standardBitArray[i + 1] = robloxBitArray[i];
        }
        standardBitArray[0] = robloxBitArray[31]; // Swap the sign bit!


        // Convert back to a byte array
        const outBytes = bitsToByteArray(standardBitArray);

        // Use Buffer to convert to a float
        return Buffer.from(outBytes).readFloatBE(0);
    }

    protected getBytesReversed(numBytes: number) 
    {
        const bytes = new Uint8Array(numBytes);
        for (let i = numBytes - 1; i >= 0; --i) 
        {
            bytes[i] = this.getUint8();
        }
        return bytes;
    }

    public getInt16() 
    {
        const bytes = this.getBytes(2);
        return Buffer.from(bytes).readInt16LE(0);
    }

    public getInt32() 
    {
        const bytes = this.getBytesReversed(4);
        return RobloxModelByteReader.bytesToInt32(bytes);
    }

    public getInt64() 
    {
        const bytes = this.getBytes(8);
        return Buffer.from(bytes).readBigInt64LE(0);
    }

    public getFloat32() 
    {
        const bytes = this.getBytes(4);
        return Buffer.from(bytes).readFloatLE(0);
    }

    public getFloat64() 
    {
        const bytes = this.getBytes(8);
        return Buffer.from(bytes).readDoubleLE(0);
    }

    public getBytes(numBytes: number) 
    {
        const bytes = new Uint8Array(numBytes);
        for (let i = 0; i < numBytes; ++i) 
        {
            bytes[i] = this.data[this.idx];
            ++this.idx;
        }
        return bytes;
    }

    public getBytesAsString(numBytes: number) 
    {
        let s = "";
        for (let i = 0; i < numBytes; ++i) 
        {
            s += String.fromCharCode(this.data[this.idx]);
            ++this.idx;
        }
        return s;
    }

    public skipBytes(numBytes: number) 
    {
        this.idx += numBytes;
    }

    public getString() 
    {
        const length = this.getUint32();
        return this.getBytesAsString(length);
    }

    public getBool() 
    {
        return this.getUint8() !== 0;
    }

    public static convertInterleaved<T>(bytes: Uint8Array, length: number, converter: (bytes: Uint8Array) => T) 
    {
        const byteSize = bytes.length / length;
        const rotatedBytes = new Array<T>(length);

        // Byte interleaving, imagine the bytes as a matrix that has been transposed. We will rotate it back.
        for (let i = 0; i < length; ++i) 
        {
            const transform = new Uint8Array(byteSize);
            for (let j = byteSize - 1; j >= 0; --j) 
            {
                transform[j] = bytes[i + j * length];
            }
            rotatedBytes[i] = converter(transform);
        }

        return rotatedBytes;
    }

    public getInterleavedFloat32Array(length: number) 
    {
        const interleavedBytes = this.getBytes(length * 4);

        // Convert interleaved bytes to Float32 array
        return RobloxModelByteReader.convertInterleaved(interleavedBytes, length, RobloxModelByteReader.bytesToRobloxFloat32);
    }

    public getInterleavedInt32Array(length: number) 
    {
        const interleavedBytes = this.getBytes(length * 4);

        // Convert interleaved bytes to Int32 array
        const bytes = RobloxModelByteReader.convertInterleaved(interleavedBytes, length, RobloxModelByteReader.bytesToInt32);

        // Have to untransform the ints
        return bytes.map(RobloxModelByteReader.untransformInt32);
    }

    public getInterleavedUint32Array(length: number) 
    {
        const interleavedBytes = this.getBytes(length * 4);

        // Convert interleaved bytes to Uint32 array
        return RobloxModelByteReader.convertInterleaved(interleavedBytes, length, (bytes) => Buffer.from(bytes).readUint32BE(0));
    }

    public getInterleavedInt64Array(length: number) 
    {
        const interleavedBytes = this.getBytes(length * 8);

        // Convert interleaved bytes to Uint32 array
        const bytes = RobloxModelByteReader.convertInterleaved(interleavedBytes, length, (bytes) => Buffer.from(bytes).readBigInt64BE(0));

        // Have to untransform the ints
        return bytes.map(RobloxModelByteReader.untransformInt64);
    }

    public getInterleavedUint64Array(length: number) 
    {
        const interleavedBytes = this.getBytes(length * 8);

        // Convert interleaved bytes to Uint32 array
        return RobloxModelByteReader.convertInterleaved(interleavedBytes, length, (bytes) => Buffer.from(bytes).readBigUint64BE(0));
    }

    public getFloat32Array(length: number) 
    {
        const bytes = new Array<number>(length);
        for (let i = 0; i < length; ++i) 
        {
            bytes[i] = this.getFloat32();
        }
        return bytes;
    }

    public getFloat64Array(length: number) 
    {
        const bytes = new Array<number>(length);
        for (let i = 0; i < length; ++i) 
        {
            bytes[i] = this.getFloat64();
        }
        return bytes;
    }

    public getReferentArray(length: number) 
    {
        const referents = this.getInterleavedInt32Array(length);

        // Referent values are "accumulated"
        for (let i = 1; i < length; ++i) 
        {
            referents[i] = referents[i - 1] + referents[i];
        }

        return referents;
    }
}
