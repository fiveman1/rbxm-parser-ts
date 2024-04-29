/**
 * @author https://github.com/fiveman1
 * Contains classes for helping read and write bytes from/to .rbxm
 */

import { bitsToByteArray, bytesToBitArray } from "./util";

export class RobloxFileByteReader 
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
        return RobloxFileByteReader.bytesToInt32(bytes);
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
        return RobloxFileByteReader.convertInterleaved(interleavedBytes, length, RobloxFileByteReader.bytesToRobloxFloat32);
    }

    public getInterleavedInt32Array(length: number) 
    {
        const interleavedBytes = this.getBytes(length * 4);

        // Convert interleaved bytes to Int32 array
        const bytes = RobloxFileByteReader.convertInterleaved(interleavedBytes, length, RobloxFileByteReader.bytesToInt32);

        // Have to untransform the ints
        return bytes.map(RobloxFileByteReader.untransformInt32);
    }

    public getInterleavedUint32Array(length: number) 
    {
        const interleavedBytes = this.getBytes(length * 4);

        // Convert interleaved bytes to Uint32 array
        return RobloxFileByteReader.convertInterleaved(interleavedBytes, length, (bytes) => Buffer.from(bytes).readUint32BE(0));
    }

    public getInterleavedInt64Array(length: number) 
    {
        const interleavedBytes = this.getBytes(length * 8);

        // Convert interleaved bytes to Uint32 array
        const bytes = RobloxFileByteReader.convertInterleaved(interleavedBytes, length, (bytes) => Buffer.from(bytes).readBigInt64BE(0));

        // Have to untransform the ints
        return bytes.map(RobloxFileByteReader.untransformInt64);
    }

    public getInterleavedUint64Array(length: number) 
    {
        const interleavedBytes = this.getBytes(length * 8);

        // Convert interleaved bytes to Uint32 array
        return RobloxFileByteReader.convertInterleaved(interleavedBytes, length, (bytes) => Buffer.from(bytes).readBigUint64BE(0));
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

export class RobloxFileByteWriter
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
        const bytes = Buffer.allocUnsafe(4);
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
        this.putBytesReversed(RobloxFileByteWriter.int32ToBytes(int32));
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
            const rbxF32bytes = RobloxFileByteWriter.f32ToRobloxF32Bytes(nums[i]);
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
            const buf = Buffer.allocUnsafe(4);
            buf.writeInt32BE(RobloxFileByteWriter.transformInt32(nums[i]));
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
            const buf = Buffer.allocUnsafe(4);
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
            const buf = Buffer.allocUnsafe(8);
            buf.writeBigInt64BE(RobloxFileByteWriter.transformInt64(nums[i]));
            for (let j = 0; j < 8; ++j) 
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
            const buf = Buffer.allocUnsafe(8);
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