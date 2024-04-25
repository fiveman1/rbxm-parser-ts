/**
 * @author https://github.com/fiveman1
 * @file roblox_model_writer.ts
 * Contains the core classes for writing a .rbxm file.
 */

/* eslint-disable @typescript-eslint/no-unused-vars */

import fs from "fs";
import lz4 from "lz4";
import * as fzstd from "fzstd";
import { RobloxModel } from "./roblox_model";
import { DataType, RobloxValue, CoreInstance } from "./roblox_types";
import { ChunkType, DataParserExtraInfo, RobloxModelDOM } from "./roblox_model_dom";
import { bytesToBitArray } from "./util";

export class RobloxModelDOMWriter extends RobloxModelDOM
{
    protected readonly stream: fs.WriteStream;

    public constructor(fname: string)
    {
        super();
        this.stream = fs.createWriteStream(fname, { encoding: "binary", flags: "w+" });
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

    protected putUintOfSize(uint: number, numBytes: number) 
    {
        for (let i = 0; i < numBytes; ++i) {
            this.putUint8((uint >> (i * 8)) & 0xff);
        }
    }

    public putUint16(uint16: number) 
    {
        return this.putUintOfSize(uint16, 2);
    }

    public putUint32(uint32: number) 
    {
        return this.putUintOfSize(uint32, 4);
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

        const sharedBitArray = bytesToBitArray(bytes);
        const robloxBitArray = new Uint8Array(32);
        for (let i = 0; i < 31; ++i) {
            robloxBitArray[i + 1] = sharedBitArray[i];
        }
        robloxBitArray[0] = sharedBitArray[31]; // Swap the sign bit!


        // Convert back to a byte array
        const outBytes = new Uint8Array(4);
        for (let i = 0; i < 4; ++i) {
            let val = 0;
            const offset = i * 8;
            for (let j = 0; j < 8; ++j) {
                val |= robloxBitArray[j + offset] << (7 - j);
            }
            outBytes[i] = val;
        }

        return robloxBitArray;
    }

    protected putBytesReversed(uint: number, numBytes: number) 
    {
        for (let i = numBytes - 1; i >= 0; --i) {
            this.putUint8((uint >> (i * 8)) & 0xff);
        }
    }

    public putInt16(int16: number) 
    {
        const buf = Buffer.alloc(2);
        buf.writeInt16BE(int16);
        this.putBytes(buf);
    }

    public putInt32(int32: number) 
    {
        this.putBytes(RobloxModelByteWriter.int32ToBytes(int32));
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
        for (const byte of bytes) {
            this.putUint8(byte);
        }
    }

    public putStringAsBytes(str: string) 
    {
        for (let i = 0; i < str.length; ++i) {
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

    public writeInterleavedBytes(bytes: Uint8Array, length: number) 
    {
        const byteSize = bytes.length / length;
        const rotatedBytes = new Uint8Array(length);

        // Byte interleaving, this really just means transposing the bytes like they're in a matrix
        for (let i = 0; i < length; ++i) {
            for (let j = byteSize - 1; j >= 0; --j) {
                rotatedBytes[i * length + j] = bytes[i + j * length];
            }
        }

        this.putBytes(rotatedBytes);
    }

    public putInterleavedFloat32Array(f32array: number[]) 
    {
        const bytes = new Uint8Array(f32array.length * 4);
        for (let i = 0; i < f32array.length; ++i) {
            const rbxF32bytes = RobloxModelByteWriter.f32ToRobloxF32Bytes(f32array[i]);
            for (let j = 0; j < 4; ++j) {
                bytes[(i * 4) + j] = rbxF32bytes[j];
            }
        }
        this.writeInterleavedBytes(bytes, f32array.length);
    }

    public putInterleavedInt32Array(int32array: number[]) 
    {
        const bytes = new Uint8Array(int32array.length * 4);
        for (let i = 0; i < int32array.length; ++i) {
            const buf = Buffer.alloc(4);
            buf.writeInt32BE(RobloxModelByteWriter.transformInt32(int32array[i]));
            for (let j = 0; j < 4; ++j) {
                bytes[(i * 4) + j] = buf[j];
            }
        }
        this.writeInterleavedBytes(bytes, int32array.length);
    }

    public putInterleavedUint32Array(length: number) 
    {
        const interleavedBytes = this.putBytes(length * 4);

        // Convert interleaved bytes to Uint32 array
        return RobloxModelByteWriter.convertInterleaved(interleavedBytes, length, (bytes) => Buffer.from(bytes).readUint32BE(0));
    }

    public putInterleavedInt64Array(length: number) 
    {
        const interleavedBytes = this.putBytes(length * 8);

        // Convert interleaved bytes to Uint32 array
        const bytes = RobloxModelByteWriter.convertInterleaved(interleavedBytes, length, (bytes) => Buffer.from(bytes).readBigInt64BE(0));

        // Have to untransform the ints
        return bytes.map(RobloxModelByteWriter.untransformInt64);
    }

    public putInterleavedUint64Array(length: number) 
    {
        const interleavedBytes = this.putBytes(length * 8);

        // Convert interleaved bytes to Uint32 array
        return RobloxModelByteWriter.convertInterleaved(interleavedBytes, length, (bytes) => Buffer.from(bytes).readBigUint64BE(0));
    }

    public putFloat32Array(length: number) 
    {
        const bytes = new Array<number>(length);
        for (let i = 0; i < length; ++i) {
            bytes[i] = this.putFloat32();
        }
        return bytes;
    }

    public putFloat64Array(length: number) 
    {
        const bytes = new Array<number>(length);
        for (let i = 0; i < length; ++i) {
            bytes[i] = this.putFloat64();
        }
        return bytes;
    }

    public putReferentArray(length: number) 
    {
        const referents = this.putInterleavedInt32Array(length);

        // Referent values are "accumulated"
        for (let i = 1; i < length; ++i) {
            referents[i] = referents[i - 1] + referents[i];
        }

        return referents;
    }
}