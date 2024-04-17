import axios from "axios";
import lz4 from "lz4";
import fzstd from "fzstd";

// https://dom.rojo.space/binary - Documentation for .rbxm format
// https://github.com/MaximumADHD/Roblox-File-Format - C# .rbxm parser

class RobloxModel
{

}

enum ChunkType
{
    META = "META",
    SSTR = "SSTR",
    INST = "INST",
    PROP = "PROP",
    PRNT = "PRNT",
    END = "END\0"
}

class RobloxModelByteBuffer
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

    public getNextInt32()
    {
        const uint8array = new Uint8Array(4);
        for (let i = 3; i >= 0; --i)
        {
            uint8array[i] = this.getNextUint8();
        }
        return Buffer.from(uint8array).readInt32BE(0);
        //return (val >> 1) ^ -(val & 1);
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
}

class RobloxModelDOM extends RobloxModelByteBuffer
{
    constructor(data: Uint8Array)
    {
        super(data);
    }

    public static async fromAsset(assetId: number)
    {
        const res = await axios.get("https://assetdelivery.roblox.com/v2/asset/",
            {
                params: {id: assetId},
                validateStatus: (status) => status === 404 || (status >= 200 && status < 300)
            }
        );
    
        if (res.status === 404)
        {
            return undefined;
        }
    
        const data = res.data;
        if (data.assetTypeId !== 10) 
        {
            return undefined;
        }
    
        const location = data.locations[0].location;
        const modelDomRes = await axios.get(location, {responseEncoding: "binary"});
        // https://stackoverflow.com/questions/62839519/how-convert-a-string-to-type-uint8array-in-nodejs
        const domData = Uint8Array.from(Array.from(modelDomRes.data).map(letter => (letter as string).charCodeAt(0)));
        return new RobloxModelDOM(domData);
    }
    
    protected static MAGIC_HEADER = "<roblox!\x89\xff\x0d\x0a\x1a\x0a";
    protected readHeader()
    {
        // Must have a 32-byte header and at least 1 16-byte chunk
        if (this.data.length < 48)
        {
            return false;
        }

        const magicBytes = this.getNextBytesAsString(RobloxModelDOM.MAGIC_HEADER.length);
        if (magicBytes !== RobloxModelDOM.MAGIC_HEADER)
        {
            return false;
        }

        console.log(`Version: ${this.getNextUint16()}`); // Version: always 0
        console.log(`Class count: ${this.getNextInt32()}`);
        console.log(`Instance count: ${this.getNextInt32()}`);

        this.skipNextBytes(8); // 8 reserved bytes

        return true;
    }

    protected readChunk()
    {
        const {chunkType, compressedLength, uncompressedLength} = this.readChunkHeader();

        this.readChunkContent(chunkType, compressedLength, uncompressedLength);
       
        return chunkType !== ChunkType.END;
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
        const bytes = this.readChunkContentBytes(compressedLength, uncompressedLength);

        switch (chunkType)
        {
            case ChunkType.INST:
                this.readInstChunk(bytes);
        }
    }

    protected static ZSTD_HEADER = "\x28\xb5\x2f\xfd";

    protected static usesZstdCompression(bytes: Uint8Array)
    {
        return bytes.length >= 4 &&
               bytes[0] === 0x28 &&
               bytes[1] === 0xb5 &&
               bytes[2] === 0x2f &&
               bytes[3] === 0xfd;
    }

    protected readChunkContentBytes(compressedLength: number, uncompressedLength: number)
    {
        const isCompressed = compressedLength !== 0;
        
        let byteArray : Uint8Array;
        if (isCompressed)
        {
            // Load compressed bytes
            const compressedBytes = this.getNextBytesAsArray(compressedLength);

            if (RobloxModelDOM.usesZstdCompression(compressedBytes))
            {
                // Use ZSTD to decompress
                byteArray = new Uint8Array(uncompressedLength);
                fzstd.decompress(compressedBytes, byteArray);
            }
            else
            {
                // Use LZ4 to decompress
                // LZ4 requires a buffer object instead of a Uint8array
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
        console.log(`Class ID: ${classId}`);
        
        const className = bytes.getNextString();
        console.log(`Class name: ${className}`);
    }

    public parse()
    {
        console.log(this.data);

        if (!this.readHeader())
        {
            console.log("Header is invalid!");
            return undefined;
        }

        console.log("Header is valid.");
        const model = new RobloxModel();

        while (this.readChunk())
        {
            
        }
        
        return model;
    }
}

async function main()
{
    const assetId = 5258147910; // Map making starter kit
    // const assetId = 4249137687; // Arcane
    const dom = await RobloxModelDOM.fromAsset(assetId);
    if (!dom)
    {
        console.log(`Invalid model ID (${assetId})`);
        return;
    }

    const model = dom.parse();
    console.log(model);
}

main();