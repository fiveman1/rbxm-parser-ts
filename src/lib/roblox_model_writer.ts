/**
 * @author https://github.com/fiveman1
 * @file roblox_model_writer.ts
 * Contains the core classes for writing a .rbxm file.
 */

/* eslint-disable @typescript-eslint/no-unused-vars */

import lz4 from "lz4";
import { RobloxModel } from "./roblox_model";
import { DataType, RobloxValue, CoreInstance } from "./roblox_types";
import { ChunkType, DataParserExtraInfo, RobloxClass, RobloxModelDOM } from "./roblox_model_dom";
import { bitsToByteArray, bytesToBitArray } from "./util";
import { buffer } from "stream/consumers";

export class RobloxModelDOMWriter extends RobloxModelDOM
{
    protected model: RobloxModel;
    protected bytesArray: Uint8Array[] = [];
    protected numBytes = 0;
    protected instToRefId: Map<CoreInstance, number> = new Map<CoreInstance, number>();
    protected instToClassId: Map<CoreInstance, number> = new Map<CoreInstance, number>();
    protected sortedClassIds: number[] = [];
    protected numInstances = 0;
    protected numClasses = 0;

    public constructor(model: RobloxModel)
    {
        super();
        this.model = model;
        this.instToRefId = model.ReferentMap;
    }

    public write()
    {
        this.setup();

        this.writeHeader();

        this.writeMetaChunk();

        for (const classId of this.sortedClassIds)
        {
            this.writeInstChunk(classId, this.classIdToInfo.get(classId)!);
        }

        for (const classId of this.sortedClassIds)
        {
            const info = this.classIdToInfo.get(classId)!;
            const props = this.collectProperties(info.instances);
            for (const [name, type] of props)
            {
                this.writePropChunk(classId, info.instances, name, type);
            }
        }

        this.writeSstrChunk();

        this.writePrntChunk();

        this.writeEndChunk();

        const buf = Buffer.allocUnsafe(this.numBytes);
        let i = 0;
        for (const bytes of this.bytesArray)
        {
            for (const byte of bytes)
            {
                buf[i] = byte;
                ++i;
            }
        }
        return buf;
    }

    protected collectProperties(instances: CoreInstance[])
    {
        const props = new Map<string, DataType>();
        for (const inst of instances)
        {
            for (const [name, value] of inst.Props)
            {
                if (!props.has(name))
                {
                    props.set(name, value.type);
                }
                else if (props.get(name) !== value.type)
                {
                    throw new Error(`Found instances with non-unique property types (class ${inst.ClassName}, property: ${name}, types: ${DataType[props.get(name)!]} and ${DataType[value.type]})`);
                }
            }
        }
        return props;
    }

    protected setup()
    {
        let lastReferent = -1;
        for (const referent of this.instToRefId.values())
        {
            if (referent > lastReferent)
            {
                lastReferent = referent;
            }
        }

        const instances = this.model.GetAllDescendants();
        this.numInstances = instances.length;

        const classNameToId = new Map<string, number>();
        let lastClassId = -1;
        for (const instance of instances)
        {
            let refId: number;
            if (!this.instToRefId.has(instance))
            {
                ++lastReferent;
                this.instToRefId.set(instance, lastReferent);
                refId = lastReferent;
            }
            else
            {
                refId = this.instToRefId.get(instance)!;
            }
            if (!classNameToId.has(instance.ClassName))
            {
                ++lastClassId;
                classNameToId.set(instance.ClassName, lastClassId);
                this.classIdToInfo.set(lastClassId, {
                    name: instance.ClassName,
                    isService: instance.IsService,
                    instances: [instance],
                    referentIdToIndex: new Map<number, number>([[refId, 0]])
                });
                this.sortedClassIds.push(lastClassId);
            }
            else
            {
                const classId = classNameToId.get(instance.ClassName)!;
                const info = this.classIdToInfo.get(classId)!;
                info.instances.push(instance);
                info.referentIdToIndex.set(refId, info.instances.length - 1);
            }
            
        }

        this.numClasses = this.classIdToInfo.size;
        this.sortedClassIds.sort((id1, id2) => this.classIdToInfo.get(id1)!.name > this.classIdToInfo.get(id2)!.name ? 1 : -1);
    }

    protected writeBytes(bytes: Uint8Array)
    {
        this.numBytes += bytes.length;
        this.bytesArray.push(bytes);
    }

    protected writeHeader()
    {
        const writer = new RobloxModelByteWriter();
        writer.putStringAsBytes(this.MAGIC_HEADER);
        writer.putUint16(0); // Version
        writer.putInt32(this.numClasses);
        writer.putInt32(this.numInstances);
        writer.putBytes(new Uint8Array(8)); // 8 empty bytes
        this.writeBytes(writer.bytes);
    }

    protected writeChunk(type: ChunkType, data: Uint8Array)
    {
        const writer = new RobloxModelByteWriter();
        const { compressedLength, uncompressedLength, bytes } = this.compressData(type, data);
        writer.putStringAsBytes(type);
        writer.putUint32(compressedLength);
        writer.putUint32(uncompressedLength);
        writer.putBytes(new Uint8Array(4)); // 4 empty bytes
        this.writeBytes(writer.bytes);
        this.writeBytes(bytes);
    }

    protected compressData(type: ChunkType, data: Uint8Array)
    {
        if (type === ChunkType.END)
        {
            // Don't compress the end chunk
            return {
                compressedLength: data.length,
                uncompressedLength: data.length,
                bytes: data
            };
        }

        const bytes = Buffer.alloc(lz4.encodeBound(data.length));
        const size = lz4.encodeBlock(Buffer.from(data), bytes);

        return {
            compressedLength: size,
            uncompressedLength: data.length,
            bytes: bytes.subarray(0, size)
        };
    }

    protected writeMetaChunk()
    {
        const writer = new RobloxModelByteWriter();

        writer.putUint32(this.model.Metadata.size);

        for (const [key, value] of this.model.Metadata)
        {
            writer.putString(key);
            writer.putString(value);
        }

        this.writeChunk(ChunkType.META, writer.bytes);
    }

    protected writeSstrChunk()
    {
        const writer = new RobloxModelByteWriter();

        writer.putUint32(0); // Version
        writer.putUint32(this.model.SharedStrings.length);

        for (const sharedString of this.model.SharedStrings)
        {
            writer.putStringAsBytes(sharedString.Hash);
            writer.putString(sharedString.SharedString);
        }

        this.writeChunk(ChunkType.SSTR, writer.bytes);
    }

    protected writeInstChunk(classId: number, info: RobloxClass)
    {
        const writer = new RobloxModelByteWriter();

        writer.putUint32(classId);
        writer.putString(info.name);
        writer.putBool(info.isService);
        writer.putUint32(info.instances.length);

        const refs: number[] = [];
        for (const inst of info.instances)
        {
            refs.push(this.instToRefId.get(inst)!);
        }
        
        writer.putReferentArray(refs);

        this.writeChunk(ChunkType.INST, writer.bytes);
    }

    protected writePropChunk(classId: number, instances: CoreInstance[], propName: string, type: DataType)
    {
        const parser = this.dataTypeParsers.get(type);
        if (!parser) return;

        const writer = new RobloxModelByteWriter();

        writer.putUint32(classId);
        writer.putString(propName);
        writer.putUint8(type);
        parser.write(writer, instances, propName);

        this.writeChunk(ChunkType.PROP, writer.bytes);
    }

    protected writePrntChunk()
    {
        const writer = new RobloxModelByteWriter();

        writer.putUint8(0);
        writer.putUint32(this.numInstances);

        const sortedInsts = Array.from(this.instToRefId.keys());
        sortedInsts.sort((inst1, inst2) => this.instToRefId.get(inst1)! - this.instToRefId.get(inst2)!);

        const childRefs: number[] = [];
        const parentRefs: number[] = [];
        for (const inst of sortedInsts)
        {   
            const ref = this.instToRefId.get(inst)!;
            childRefs.push(ref);
            const parentRef = inst.Parent ? this.instToRefId.get(inst.Parent)! : -1;
            parentRefs.push(parentRef);
        }

        writer.putReferentArray(childRefs);
        writer.putReferentArray(parentRefs);

        this.writeChunk(ChunkType.PRNT, writer.bytes);
    }

    protected writeEndChunk()
    {
        const writer = new RobloxModelByteWriter();

        writer.putStringAsBytes(this.MAGIC_END);

        this.writeChunk(ChunkType.END, writer.bytes);
    }
}

export class RobloxModelByteWriter
{
    protected readonly data: number[] = [];

    public get bytes()
    {
        return new Uint8Array(this.data);
    }

    public putUint8(uint8: number) 
    {
        this.data.push(uint8);
    }

    public putUint16(uint16: number) 
    {
        const buf = Buffer.alloc(2);
        buf.writeUInt16LE(uint16);
        this.putBytes(buf);
    }

    public putUint32(uint32: number) 
    {
        const buf = Buffer.alloc(4);
        buf.writeUInt32LE(uint32);
        this.putBytes(buf);
    }

    public static int32ToBytes(int32: number) 
    {
        const buf = Buffer.alloc(4);
        buf.writeInt32BE(int32);
        return buf;
    }

    public static transformInt32(int32: number) 
    {
        return (int32 << 1) ^ (int32 >> 31);
    }

    public static transformInt64(int64: bigint) 
    {
        return (int64 << BigInt(1)) ^ (int64 >> BigInt(63));
    }

    public static f32ToRobloxF32Bytes(f32: number) 
    {
        // https://dom.rojo.space/binary#roblox-float-format
        // Standard format: seeeeeee emmmmmmm mmmmmmmm mmmmmmmm
        // Roblox format:   eeeeeeee mmmmmmmm mmmmmmmm mmmmmmms
        // We will swap the sign bit by interpreting the data as bits and swapping the sign bit from the back to the front.
        const bytes = Buffer.alloc(4);
        bytes.writeFloatBE(f32);

        const origBitArray = bytesToBitArray(bytes);
        const robloxBitArray = new Uint8Array(32);
        for (let i = 0; i < 31; ++i) 
        {
            robloxBitArray[i] = origBitArray[i + 1];
        }
        robloxBitArray[31] = origBitArray[0]; // Swap the sign bit!


        // Convert back to a byte array
        return bitsToByteArray(robloxBitArray);
    }

    protected putBytesReversed(bytes: Uint8Array) 
    {
        for (let i = bytes.length - 1; i >= 0; --i) 
        {
            this.putUint8(bytes[i]);
        }
    }

    public putInt16(int16: number) 
    {
        const buf = Buffer.alloc(2);
        buf.writeInt16LE(int16);
        this.putBytes(buf);
    }

    public putInt32(int32: number) 
    {
        this.putBytesReversed(RobloxModelByteWriter.int32ToBytes(int32));
    }

    public putInt64(int64: bigint) 
    {
        const buf = Buffer.alloc(8);
        buf.writeBigInt64LE(int64);
        this.putBytes(buf);
    }

    public putFloat32(f32: number) 
    {
        const buf = Buffer.alloc(4);
        buf.writeFloatLE(f32);
        this.putBytes(buf);
    }

    public putFloat64(f64: number) 
    {
        const buf = Buffer.alloc(8);
        buf.writeDoubleLE(f64);
        this.putBytes(buf);
    }

    public putBytes(bytes: Uint8Array) 
    {
        for (const byte of bytes) 
        {
            this.putUint8(byte);
        }
    }

    public putStringAsBytes(str: string) 
    {
        for (let i = 0; i < str.length; ++i) 
        {
            this.putUint8(str.charCodeAt(i));
        }
    }

    public putString(str: string) 
    {
        this.putUint32(str.length);
        return this.putStringAsBytes(str);
    }

    public putBool(bool: boolean) 
    {
        this.putUint8(bool ? 1 : 0);
    }

    public putBytesInterleaved(bytes: Uint8Array, length: number) 
    {
        const byteSize = bytes.length / length;
        const rotatedBytes = new Uint8Array(bytes.length);

        // Byte interleaving, this really just means transposing the bytes like they're in a matrix
        for (let i = 0; i < length; ++i) 
        {
            for (let j = 0; j < byteSize; ++j) 
            {
                rotatedBytes[j * length + i] = bytes[i * byteSize + j];
            }
        }

        this.putBytes(rotatedBytes);
    }

    public putInterleavedFloat32Array(nums: number[]) 
    {
        const bytes = new Uint8Array(nums.length * 4);
        for (let i = 0; i < nums.length; ++i) 
        {
            const rbxF32bytes = RobloxModelByteWriter.f32ToRobloxF32Bytes(nums[i]);
            for (let j = 0; j < 4; ++j) 
            {
                bytes[(i * 4) + j] = rbxF32bytes[j];
            }
        }
        this.putBytesInterleaved(bytes, nums.length);
    }

    public putInterleavedInt32Array(nums: number[]) 
    {
        const bytes = new Uint8Array(nums.length * 4);
        for (let i = 0; i < nums.length; ++i) 
        {
            const buf = Buffer.alloc(4);
            buf.writeInt32BE(RobloxModelByteWriter.transformInt32(nums[i]));
            for (let j = 0; j < 4; ++j) 
            {
                bytes[(i * 4) + j] = buf[j];
            }
        }
        this.putBytesInterleaved(bytes, nums.length);
    }

    public putInterleavedUint32Array(nums: number[]) 
    {
        const bytes = new Uint8Array(nums.length * 4);
        for (let i = 0; i < nums.length; ++i) 
        {
            const buf = Buffer.alloc(4);
            buf.writeUint32BE(nums[i]);
            for (let j = 0; j < 4; ++j) 
            {
                bytes[(i * 4) + j] = buf[j];
            }
        }
        this.putBytesInterleaved(bytes, nums.length);
    }

    public putInterleavedInt64Array(nums: bigint[]) 
    {
        const bytes = new Uint8Array(nums.length * 8);
        for (let i = 0; i < nums.length; ++i) 
        {
            const buf = Buffer.alloc(8);
            buf.writeBigInt64BE(RobloxModelByteWriter.transformInt64(nums[i]));
            for (let j = 0; j < 4; ++j) 
            {
                bytes[(i * 8) + j] = buf[j];
            }
        }
        this.putBytesInterleaved(bytes, nums.length);
    }

    public putInterleavedUint64Array(nums: bigint[]) 
    {
        const bytes = new Uint8Array(nums.length * 8);
        for (let i = 0; i < nums.length; ++i) 
        {
            const buf = Buffer.alloc(8);
            buf.writeBigUint64BE(nums[i]);
            for (let j = 0; j < 4; ++j) 
            {
                bytes[(i * 8) + j] = buf[j];
            }
        }
        this.putBytesInterleaved(bytes, nums.length);
    }

    public putFloat32Array(nums: number[]) 
    {
        for (const num of nums) 
        {
            this.putFloat32(num);
        }
    }

    public putFloat64Array(nums: number[]) 
    {
        for (const num of nums) 
        {
            this.putFloat64(num);
        }
    }

    public putReferentArray(referents: number[]) 
    {
        if (referents.length < 1)
        {
            return;
        }

        let prevReferent = referents[0];
        const accumlated = [prevReferent];
        for (let i = 1; i < referents.length; ++i) 
        {
            const curReferent = referents[i];
            accumlated.push(curReferent - prevReferent);
            prevReferent = curReferent;
        }

        this.putInterleavedInt32Array(accumlated);
    }
}