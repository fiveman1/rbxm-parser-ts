/**
 * @author https://github.com/fiveman1
 * @file roblox_model_reader.ts
 * Contains the core classes for reading a .rbxm file.
 */

import lz4 from "lz4";
import fzstd from "fzstd";
import { RobloxModel } from "./roblox_model";
import { DataType, RobloxValue, Instance } from "./roblox_types";
import { ChunkType, RobloxModelDOM } from "./roblox_model_dom";

// Helpful resources I used:
// https://dom.rojo.space/binary - Documentation for .rbxm format
// https://github.com/MaximumADHD/Roblox-File-Format - C# .rbxm parser

/**
 * This class can read .rbxm bytes to create a RobloxModel.
 */
export class RobloxModelDOMReader extends RobloxModelDOM
{
    protected data: RobloxModelByteReader = new RobloxModelByteReader();

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
        if (this.model.roots.length === 0) return null;
        
        return this.model;
    }

    protected findRoots()
    {
        for (const classInfo of this.classIdToInfo.values())
        {
            for (const instance of classInfo.instances)
            {
                if (!instance.parent)
                {
                    this.model.roots.push(instance);
                }
            }
        }
    }
    
    protected static readonly MAGIC_HEADER = "<roblox!\x89\xff\x0d\x0a\x1a\x0a";
    protected readHeader()
    {
        // Must have a 32-byte header and at least 1 16-byte chunk
        if (this.data.length < 48)
        {
            return false;
        }

        const magicBytes = this.data.getBytesAsString(RobloxModelDOMReader.MAGIC_HEADER.length);
        if (magicBytes !== RobloxModelDOMReader.MAGIC_HEADER)
        {
            return false;
        }

        this.model.version = this.data.getUint16();
        this.model.numClasses = this.data.getInt32();
        this.model.numInstances = this.data.getInt32();

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
        let byteArray : Uint8Array;
        if (compressedLength !== 0)
        {
            // Load compressed bytes
            const compressedBytes = this.data.getByteArray(compressedLength);

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
            byteArray = this.data.getByteArray(uncompressedLength);
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
            this.model.metadata.set(key, value);
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
            this.model.sharedStrings.push({ hash: hash, sharedString: sharedString });
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
        const instances = new Array<Instance>(numInstances);

        referents.forEach((referent, index) => {
            referentIdToIndex.set(referent, index);
            this.referentIdToClassId.set(referent, classId);
            instances[index] = new Instance(className, isService);
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
        const values: Array<RobloxValue | undefined> = [];
        parser.read(bytes, numInstances, values);

        values.forEach((value, index) => {
            if (value)
            {
                const instance = classInfo.instances[index];
                instance.setProp(propName, value);
            }
        });
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

            child.parent = parent;
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

export class RobloxModelByteReader {
    protected readonly data: Uint8Array;
    protected idx: number = 0;

    public constructor(data: Uint8Array = new Uint8Array()) {
        this.data = data;
    }

    public get length() {
        return this.data.length;
    }

    public getUint8() {
        const val = this.data[this.idx];
        ++this.idx;
        return val;
    }

    protected getUintOfSize(numBytes: number) {
        let val = 0;
        for (let i = 0; i < numBytes; ++i) {
            val += this.getUint8() << (i * 8);
        }
        return val;
    }

    public getUint16() {
        return this.getUintOfSize(2);
    }

    public getUint32() {
        return this.getUintOfSize(4);
    }

    public static bytesToInt32(bytes: Uint8Array) {
        return Buffer.from(bytes).readInt32BE(0);
    }

    public static untransformInt32(int32: number) {
        return (int32 >> 1) ^ -(int32 & 1);
    }

    public static bytesToBitArray(bytes: Uint8Array) {
        const output = new Uint8Array(bytes.length * 8);

        for (let i = 0; i < bytes.length; i++) {
            const val = bytes[i];
            const offset = i * 8;
            // Read 1 byte at a time
            for (let j = 0; j < 8; ++j) {
                const bit = (val >> j) & 1;
                // The bits are being read in reverse order
                output[7 - j + offset] = bit;
            }
        }

        return output;
    }

    public static bytesToRobloxFloat32(bytes: Uint8Array) {
        // https://dom.rojo.space/binary#roblox-float-format
        // Standard format: seeeeeee emmmmmmm mmmmmmmm mmmmmmmm
        // Roblox format:   eeeeeeee mmmmmmmm mmmmmmmm mmmmmmms
        // We will swap the sign bit by interpreting the data as bits and swapping the sign bit from the back to the front.
        const robloxBitArray = RobloxModelByteReader.bytesToBitArray(bytes);
        const standardBitArray = new Uint8Array(32);
        for (let i = 0; i < 31; ++i) {
            standardBitArray[i + 1] = robloxBitArray[i];
        }
        standardBitArray[0] = robloxBitArray[31]; // Swap the sign bit!


        // Convert back to a byte array
        const outBytes = new Uint8Array(4);
        for (let i = 0; i < 4; ++i) {
            let val = 0;
            const offset = i * 8;
            for (let j = 0; j < 8; ++j) {
                val |= standardBitArray[j + offset] << (7 - j);
            }
            outBytes[i] = val;
        }

        // Use Buffer to convert to a float
        return Buffer.from(outBytes).readFloatBE(0);
    }

    protected getBytesReversed(numBytes: number) {
        const bytes = new Uint8Array(numBytes);
        for (let i = numBytes - 1; i >= 0; --i) {
            bytes[i] = this.getUint8();
        }
        return bytes;
    }

    public getInt32() {
        const bytes = this.getBytesReversed(4);
        return RobloxModelByteReader.bytesToInt32(bytes);
    }

    public getFloat32() {
        const bytes = this.getBytesReversed(4);
        return Buffer.from(bytes).readFloatBE(0);
    }

    public getFloat64() {
        const bytes = this.getBytesReversed(8);
        // https://dom.rojo.space/binary#float64 claims this is little-endian, but it is actually big-endian...
        return Buffer.from(bytes).readDoubleBE(0);
    }

    public getByteArray(numBytes: number) {
        const bytes = new Uint8Array(numBytes);
        for (let i = 0; i < numBytes; ++i) {
            bytes[i] = this.data[this.idx];
            ++this.idx;
        }
        return bytes;
    }

    public getBytesAsString(numBytes: number) {
        let s = "";
        for (let i = 0; i < numBytes; ++i) {
            s += String.fromCharCode(this.data[this.idx]);
            ++this.idx;
        }
        return s;
    }

    public skipBytes(numBytes: number) {
        this.idx += numBytes;
    }

    public getString() {
        const length = this.getUint32();
        return this.getBytesAsString(length);
    }

    public getBool() {
        return this.getUint8() !== 0;
    }

    public static convertInterleaved(bytes: Uint8Array, length: number, converter: (bytes: Uint8Array) => number) {
        const byteSize = bytes.length / length;
        const rotatedBytes = new Array<number>(length);

        // Byte interleaving, imagine the bytes as a matrix that has been transposed. We will rotate it back.
        for (let i = 0; i < length; ++i) {
            const transform = new Uint8Array(byteSize);
            for (let j = byteSize - 1; j >= 0; --j) {
                transform[j] = bytes[i + j * length];
            }
            rotatedBytes[i] = converter(transform);
        }

        return rotatedBytes;
    }

    public getInterleavedFloat32Array(length: number) {
        const interleavedBytes = this.getByteArray(length * 4);

        // Convert interleaved bytes to Float32 array
        return RobloxModelByteReader.convertInterleaved(interleavedBytes, length, RobloxModelByteReader.bytesToRobloxFloat32);
    }

    public getInterleavedInt32Array(length: number) {
        const interleavedBytes = this.getByteArray(length * 4);

        // Convert interleaved bytes to Int32 array
        const bytes = RobloxModelByteReader.convertInterleaved(interleavedBytes, length, RobloxModelByteReader.bytesToInt32);

        // Have to untransform the ints
        return bytes.map(RobloxModelByteReader.untransformInt32);
    }

    public getInterleavedUint32Array(length: number) {
        const interleavedBytes = this.getByteArray(length * 4);

        // Convert interleaved bytes to Uint32 array
        return RobloxModelByteReader.convertInterleaved(interleavedBytes, length, (bytes) => Buffer.from(bytes).readUint32BE(0));
    }

    public getFloat32Array(length: number) {
        const bytes = new Array<number>(length);
        for (let i = 0; i < length; ++i) {
            bytes[i] = this.getFloat32();
        }
        return bytes;
    }

    public getFloat64Array(length: number) {
        const bytes = new Array<number>(length);
        for (let i = 0; i < length; ++i) {
            bytes[i] = this.getFloat64();
        }
        return bytes;
    }

    public getReferentArray(length: number) {
        const referents = this.getInterleavedInt32Array(length);

        // Referent values are "accumulated"
        for (let i = 1; i < length; ++i) {
            referents[i] = referents[i - 1] + referents[i];
        }

        return referents;
    }
}
