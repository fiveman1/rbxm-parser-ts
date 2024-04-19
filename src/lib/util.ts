/**
 * @author https://github.com/fiveman1
 * @file util.ts
 * Contains some utility classes and functions.
 */

/**
 * Converts a byte array to an array of hexadecimal strings
 * @param bytes byte array
 * @returns hex string array
 */
export function bytesToHex(bytes: Uint8Array)
{
    const hex = new Array<string>();
    bytes.forEach((val) =>
    {
        hex.push(val.toString(16));
    });
    return hex;
}

/**
 * Formats a number as a string
 * @param num a number
 * @returns a string respresentation of the number
 */
export function formatNum(num: number)
{
    // Some silly formatting tricks since JS numbers are not very accurate...
    return Number(num.toPrecision(6)).toString();
}

export class RobloxModelReader
{
    protected readonly data: Uint8Array;
    protected idx: number = 0;

    constructor(data: Uint8Array)
    {
        this.data = data;
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

    public static bytesToBitArray(bytes: Uint8Array) 
    {
        const output = new Uint8Array(bytes.length * 8);
    
        for (let i = 0; i < bytes.length; i++) 
        {
            const val = bytes[i];
            const offset = i * 8;
            // Read 1 byte at a time
            for (let j = 0; j < 8; ++j)
            {
                const bit = (val >> j) & 1;
                // The bits are being read in reverse order
                output[7 - j + offset] = bit;
            }
        }
    
        return output;
    }

    public static bytesToRobloxFloat32(bytes: Uint8Array)
    {
        // https://dom.rojo.space/binary#roblox-float-format
        // Standard format: seeeeeee emmmmmmm mmmmmmmm mmmmmmmm
        // Roblox format:   eeeeeeee mmmmmmmm mmmmmmmm mmmmmmms
        // We will swap the sign bit by interpreting the data as bits and swapping the sign bit from the back to the front.
        const robloxBitArray = RobloxModelReader.bytesToBitArray(bytes);
        const standardBitArray = new Uint8Array(32);
        for (let i = 0; i < 31; ++i)
        {
            standardBitArray[i + 1] = robloxBitArray[i];
        }
        standardBitArray[0] = robloxBitArray[31]; // Swap the sign bit!

        // Convert back to a byte array
        const outBytes = new Uint8Array(4);
        for (let i = 0; i < 4; ++i)
        {
            let val = 0;
            const offset = i * 8;
            for (let j = 0; j < 8; ++j)
            {
                val |= standardBitArray[j + offset] << (7 - j);
            }
            outBytes[i] = val;
        }

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

    public getInt32()
    {
        const bytes = this.getBytesReversed(4);
        return RobloxModelReader.bytesToInt32(bytes);
    }

    public getFloat32()
    {
        const bytes = this.getBytesReversed(4);
        return Buffer.from(bytes).readFloatBE(0);
    }

    public getFloat64()
    {
        const bytes = this.getBytesReversed(8);
        // https://dom.rojo.space/binary#float64 claims this is little-endian, but it is actually big-endian...
        return Buffer.from(bytes).readDoubleBE(0);
    }

    public getByteArray(numBytes: number)
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

    public static convertInterleaved(bytes: Uint8Array, length: number, converter: (bytes: Uint8Array) => number)
    {
        const byteSize = bytes.length / length;
        const rotatedBytes = new Array<number>(length);
        
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
        const interleavedBytes = this.getByteArray(length * 4);
        
        // Convert interleaved bytes to Float32 array
        return RobloxModelReader.convertInterleaved(interleavedBytes, length, RobloxModelReader.bytesToRobloxFloat32);
    }

    public getInterleavedInt32Array(length: number)
    {
        const interleavedBytes = this.getByteArray(length * 4);
        
        // Convert interleaved bytes to Int32 array
        const bytes = RobloxModelReader.convertInterleaved(interleavedBytes, length, RobloxModelReader.bytesToInt32);
        
        // Have to untransform the ints
        return bytes.map(RobloxModelReader.untransformInt32);
    }

    public getInterleavedUint32Array(length: number)
    {
        const interleavedBytes = this.getByteArray(length * 4);

        // Convert interleaved bytes to Uint32 array
        return RobloxModelReader.convertInterleaved(interleavedBytes, length, (bytes) => Buffer.from(bytes).readUint32BE(0));
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