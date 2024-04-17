import axios from "axios";

// https://dom.rojo.space/binary

class RobloxDOM
{
    public data: Uint8Array;
    public idx: number = 0;

    constructor(data: Uint8Array)
    {
        this.data = data;
    }

    public static async fromAsset(assetId: number)
    {
        const res = await axios.get("https://assetdelivery.roblox.com/v2/asset/",
            {
                params: {id: assetId},
                validateStatus: (status) => status === 404 || (status >=200 && status <300)
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
        return new RobloxDOM(domData);
    }

    public getNextUint8()
    {
        const val = this.data[this.idx];
        ++this.idx;
        return val;
    }

    protected getNextUintOfSize(numBytes: number)
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

    public getNextBytes(numBytes: number)
    {
        let s = "";
        for (let i = 0; i < numBytes; ++i)
        {
            s += String.fromCharCode(this.data[this.idx]);
            ++this.idx;
        }
        return s;
    }

    public skipNumBytes(numBytes: number)
    {
        this.idx += numBytes;
    }
    
    protected static MAGIC_HEADER = "<roblox!\x89\xff\x0d\x0a\x1a\x0a";
    public readHeader()
    {
        for (let i = 0; i < RobloxDOM.MAGIC_HEADER.length; ++i)
        {
            const val = this.getNextUint8();
            if (val !== RobloxDOM.MAGIC_HEADER.charCodeAt(i))
            {
                return false;
            }
        }

        console.log(`Version: ${this.getNextUint16()}`); // Version: always 0
        console.log(`Class count: ${this.getNextInt32()}`);
        console.log(`Instance count: ${this.getNextInt32()}`);

        this.skipNumBytes(8); // 8 reserved bytes

        return true;
    }

    public readChunkHeader()
    {
        const name = this.getNextBytes(4);
        const compressedLength = this.getNextUint32();
        const uncompressedLength = this.getNextUint32();
        const length = compressedLength === 0 ? uncompressedLength : compressedLength;
        console.log(`Chunk name: ${name}`);
        console.log(`Compressed length: ${compressedLength}`);
        console.log(`Uncompressed length: ${uncompressedLength}`);
        this.skipNumBytes(4); // 4 reserved bytes
        return {name, length};
    }
}

async function main()
{
    const assetId = 5258147910;
    const dom = await RobloxDOM.fromAsset(assetId);
    if (!dom)
    {
        return;
    }

    console.log(dom.data);
    console.log(`Is header ok? ${dom.readHeader() ? "Yes" : "No"}`);
    let isDone = false;
    do
    {
        const {name, length} = dom.readChunkHeader();
        dom.skipNumBytes(length);
        isDone = name === "END\0";
    } while (!isDone);
}

main();