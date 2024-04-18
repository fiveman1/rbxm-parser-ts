/**
 * @author https://github.com/fiveman1
 * @file util.ts
 * Contains some utility classes/enums.
 */

// https://dom.rojo.space/binary#chunks
export enum ChunkType
{
    META = "META",
    SSTR = "SSTR",
    INST = "INST",
    PROP = "PROP",
    PRNT = "PRNT",
    END = "END\0"
}

// https://dom.rojo.space/binary#data-types
export enum DataType
{
    String = 0x01,
    Bool = 0x02,
    Int32 = 0x03,
    Float32 = 0x04,
    Float64 = 0x05,
    UDim = 0x06,
    UDim2 = 0x07,
    Ray = 0x08,
    Faces = 0x09,
    Axes = 0x0a,
    BrickColor = 0x0b,
    Color3 = 0x0c,
    Vector2 = 0x0d,
    Vector3 = 0x0e,
    CFrame = 0x10,
    Enum = 0x12,
    Referent = 0x13,
    Vector3int16 = 0x14,
    NumberSequence = 0x15,
    ColorSequence = 0x16,
    NumberRange = 0x17,
    Rect = 0x18,
    PhysicalProperties = 0x19,
    Color3uint8 = 0x1a,
    Int64 = 0x1b,
    SharedString = 0x1c,
    Bytecode = 0x1d,
    OptionalCoordinateFrame = 0x1e,
    UniqueId = 0x1f,
    Font = 0x20
}

export class RobloxModelByteBuffer
{
    public data: Uint8Array;
    public idx: number = 0;

    constructor(data: Uint8Array)
    {
        this.data = data;
    }

    public getNextUint8()
    {
        const val = this.data[this.idx];
        ++this.idx;
        return val;
    }

    public getNextUintOfSize(numBytes: number)
    {
        let val = 0;
        for (let i = 0; i < numBytes; ++i)
        {
            val += this.getNextUint8() << (i * 8);
        }
        return val;
    }

    public getNextUint16()
    {
        return this.getNextUintOfSize(2);
    }

    public getNextUint32()
    {
        return this.getNextUintOfSize(4);
    }

    public static uint8ArrToInt32(uint8array: Uint8Array)
    {
        return Buffer.from(uint8array).readInt32BE(0);
    }

    public static untransformInt32(int32: number)
    {
        return (int32 >> 1) ^ -(int32 & 1);
    }

    public getNextInt32()
    {
        const uint8array = new Uint8Array(4);
        for (let i = 3; i >= 0; --i)
        {
            uint8array[i] = this.getNextUint8();
        }
        return RobloxModelByteBuffer.uint8ArrToInt32(uint8array);
    }

    public getNextBytesAsArray(numBytes: number)
    {
        const uint8array = new Uint8Array(numBytes);
        for (let i = 0; i < numBytes; ++i)
        {
            uint8array[i] = this.data[this.idx];
            ++this.idx;
        }
        return uint8array;
    }

    public getNextBytesAsString(numBytes: number)
    {
        let s = "";
        for (let i = 0; i < numBytes; ++i)
        {
            s += String.fromCharCode(this.data[this.idx]);
            ++this.idx;
        }
        return s;
    }

    public skipNextBytes(numBytes: number)
    {
        this.idx += numBytes;
    }

    public getNextString()
    {
        const length = this.getNextUint32();
        return this.getNextBytesAsString(length);
    }

    public getNextBool()
    {
        return this.getNextUint8() !== 0;
    }

    public static convertInterleaved(bytes: Uint8Array, length: number, converter: (uint8array: Uint8Array) => number)
    {
        const rotatedBytes = new Array<number>(length);
        
        // Byte interleaving, imagine the bytes as a matrix that has been transposed. We will rotate it back.
        for (let i = 0; i < length; ++i)
        {
            const transform = new Uint8Array(4);
            for (let j = 3; j >= 0; --j)
            {
                transform[j] = bytes[i + j * length];
            }
            rotatedBytes[i] = converter(transform);
        }
        return rotatedBytes;
    }

    public static convertInterleavedInt32(bytes: Uint8Array, length: number)
    {
        return RobloxModelByteBuffer.convertInterleaved(bytes, length, RobloxModelByteBuffer.uint8ArrToInt32);
    }

    // https://github.com/MaximumADHD/Roblox-File-Format/blob/main/BinaryFormat/BinaryFileReader.cs#L21
    public getReferentArray(length: number)
    {
        const rotatedBytes = this.getNextBytesAsArray(length * 4);
        
        // Convert interleaved bytes to Int32 array
        const bytes = RobloxModelByteBuffer.convertInterleavedInt32(rotatedBytes, length);
        
        // Have to untransform the ints
        const referents = bytes.map(RobloxModelByteBuffer.untransformInt32);
        
        // Referent values are "accumulated"
        for (let i = 1; i < length; ++i)
        {
            referents[i] = referents[i - 1] + referents[i];
        }

        return referents;
    }
}