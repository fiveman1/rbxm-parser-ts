/**
 * @author https://github.com/fiveman1
 * @file roblox_model_parser.ts
 * Contains the core classes for parsing a .rbxm file.
 */

import lz4 from "lz4";
import fzstd from "fzstd";
import { RobloxModelReader } from "./util";
import { RobloxModel } from "./roblox_model";
import { DataType, RobloxValue, Instance, UDim, UDim2, Vector3, Ray, Faces, Face, Axes, Axis, Color3, Vector2, CFrame, Color3uint8 } from "./roblox_types";

// https://dom.rojo.space/binary#chunks
enum ChunkType
{
    META = "META",
    SSTR = "SSTR",
    INST = "INST",
    PROP = "PROP",
    PRNT = "PRNT",
    END = "END\0"
}

type RobloxClass = 
{
    name: string
    isService: boolean
    instances: Array<Instance>
    referentIdToIndex: Map<number, number>
}

type DataTypeParser = (this: RobloxModelDOMReader, bytes: RobloxModelReader, propName: string, classInfo: RobloxClass, numInstances: number) => void;

// Helpful resources I used:
// https://dom.rojo.space/binary - Documentation for .rbxm format
// https://github.com/MaximumADHD/Roblox-File-Format - C# .rbxm parser

/**
 * This class can load a .rbxm then read() it to create a RobloxModel.
 */
export class RobloxModelDOMReader extends RobloxModelReader
{
    protected model: RobloxModel | null = null;
    protected classIdToInfo: Map<number, RobloxClass> = new Map<number, RobloxClass>();
    protected dataTypeParsers: Map<DataType, DataTypeParser> = new Map<DataType, DataTypeParser>;
    protected referentIdToClassId: Map<number, number> = new Map<number, number>();
    protected idToRotation: Map<number, Vector3> = new Map<number, Vector3>();

    public constructor(data: Uint8Array)
    {
        super(data);
        this.initializeDataTypeParsers();
    }

    /**
     * This will parse the DOM and create a RobloxModel object.
     * If the DOM is not valid, this will return null.
     * @returns a Roblox model or null if the DOM is invalid.
     */
    public read()
    {
        // Clear out any existing values
        this.idx = 0;
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
        if (!this.model) return;

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
        if (this.data.length < 48 || !this.model)
        {
            return false;
        }

        const magicBytes = this.getNextBytesAsString(RobloxModelDOMReader.MAGIC_HEADER.length);
        if (magicBytes !== RobloxModelDOMReader.MAGIC_HEADER)
        {
            return false;
        }

        this.model.version = this.getNextUint16();
        this.model.numClasses = this.getNextInt32();
        this.model.numInstances = this.getNextInt32();

        this.skipNextBytes(8); // 8 reserved bytes

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
        const chunkType = this.getNextBytesAsString(4) as ChunkType;
        const compressedLength = this.getNextUint32();
        const uncompressedLength = this.getNextUint32();
        this.skipNextBytes(4); // 4 reserved bytes
        
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
            const compressedBytes = this.getNextBytesAsArray(compressedLength);

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
            byteArray = this.getNextBytesAsArray(uncompressedLength);
        }

        return new RobloxModelReader(byteArray);
    }

    protected readInstChunk(bytes: RobloxModelReader)
    {
        const classId = bytes.getNextUint32();
        const className = bytes.getNextString();
        const isService = bytes.getNextBool();

        const numInstances = bytes.getNextUint32();
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

    protected readPropChunk(bytes: RobloxModelReader)
    {
        const classId = bytes.getNextUint32();
        const propName = bytes.getNextString();
        const dataType = bytes.getNextUint8() as DataType;

        const classInfo = this.classIdToInfo.get(classId);
        if (!classInfo) return;
        
        const parser = this.dataTypeParsers.get(dataType);
        if (parser)
        {
            // A little bit of JS magic to actually call this instance method
            parser.apply(this, [bytes, propName, classInfo, classInfo.instances.length]);
        }
    }

    protected initializeDataTypeParsers()
    {
        // Define the methods used to parse the data types in PROP chunks
        this.dataTypeParsers.set(DataType.String, this.readStringProp);
        this.dataTypeParsers.set(DataType.Bool, this.readBoolProp);
        this.dataTypeParsers.set(DataType.Int32, this.readInt32Prop);
        this.dataTypeParsers.set(DataType.Float32, this.readFloat32Prop);
        this.dataTypeParsers.set(DataType.Float64, this.readFloat64Prop);
        this.dataTypeParsers.set(DataType.UDim, this.readUDimProp);
        this.dataTypeParsers.set(DataType.UDim2, this.readUDim2Prop);
        this.dataTypeParsers.set(DataType.Ray, this.readRayProp);
        this.dataTypeParsers.set(DataType.Faces, this.readFacesProp);
        this.dataTypeParsers.set(DataType.Axes, this.readAxesProp);
        this.dataTypeParsers.set(DataType.BrickColor, this.readBrickColorProp);
        this.dataTypeParsers.set(DataType.Color3, this.readColor3Prop);
        this.dataTypeParsers.set(DataType.Vector2, this.readVector2Prop);
        this.dataTypeParsers.set(DataType.Vector3, this.readVector3Prop);
        this.dataTypeParsers.set(DataType.CFrame, this.readCFrameProp);
        this.dataTypeParsers.set(DataType.Enum, this.readEnumProp);
        this.dataTypeParsers.set(DataType.Referent, this.readReferentProp);
        this.dataTypeParsers.set(DataType.Color3uint8, this.readColor3uint8Prop);
    }

    protected setPropValue(propName: string, value: RobloxValue, classInfo: RobloxClass, index: number)
    {
        const instance = classInfo.instances[index];
        instance.setProp(propName, value);
    }

    protected readStringProp(bytes: RobloxModelReader, propName: string, classInfo: RobloxClass, numInstances: number)
    {
        for (let i = 0; i < numInstances; ++i)
        {
            const str = bytes.getNextString();
            if (!str) continue;
            this.setPropValue(propName, { type: DataType.String, value: str }, classInfo, i);
        }
    }

    protected readBoolProp(bytes: RobloxModelReader, propName: string, classInfo: RobloxClass, numInstances: number)
    {
        for (let i = 0; i < numInstances; ++i)
        {
            const bool = bytes.getNextBool();
            this.setPropValue(propName, { type: DataType.Bool, value: bool }, classInfo, i);
        }
    }

    protected readInt32Prop(bytes: RobloxModelReader, propName: string, classInfo: RobloxClass, numInstances: number)
    {
        const ints = bytes.getInterleavedInt32Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            this.setPropValue(propName, { type: DataType.Int32, value: ints[i] }, classInfo, i);
        }
    }

    protected readFloat32Prop(bytes: RobloxModelReader, propName: string, classInfo: RobloxClass, numInstances: number)
    {
        const floats = bytes.getInterleavedFloat32Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            this.setPropValue(propName, { type: DataType.Float32, value: floats[i] }, classInfo, i);
        }
    }

    protected readFloat64Prop(bytes: RobloxModelReader, propName: string, classInfo: RobloxClass, numInstances: number)
    {
        const floats = bytes.getFloat64Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            this.setPropValue(propName, { type: DataType.Float64, value: floats[i] }, classInfo, i);
        }
    }

    protected readUDimProp(bytes: RobloxModelReader, propName: string, classInfo: RobloxClass, numInstances: number)
    {
        const scales = bytes.getInterleavedFloat32Array(numInstances);
        const offsets = bytes.getInterleavedInt32Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            this.setPropValue(propName, { type: DataType.UDim, value: new UDim(scales[i], offsets[i]) }, classInfo, i);
        }
    }

    protected readUDim2Prop(bytes: RobloxModelReader, propName: string, classInfo: RobloxClass, numInstances: number)
    {
        const scalesX = bytes.getInterleavedFloat32Array(numInstances);
        const scalesY = bytes.getInterleavedFloat32Array(numInstances);
        const offsetsX = bytes.getInterleavedInt32Array(numInstances);
        const offsetsY = bytes.getInterleavedInt32Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            const x = new UDim(scalesX[i], offsetsX[i]);
            const y = new UDim(scalesY[i], offsetsY[i]);
            this.setPropValue(propName, { type: DataType.UDim2, value: new UDim2(x, y) }, classInfo, i);
        }
    }

    protected readRayProp(bytes: RobloxModelReader, propName: string, classInfo: RobloxClass, numInstances: number)
    {
        const origin = new Vector3(bytes.getNextFloat32(), bytes.getNextFloat32(), bytes.getNextFloat32());
        const direction = new Vector3(bytes.getNextFloat32(), bytes.getNextFloat32(), bytes.getNextFloat32());

        for (let i = 0; i < numInstances; ++i)
        {
            this.setPropValue(propName, { type: DataType.Ray, value: new Ray(origin, direction) }, classInfo, i);
        }
    }

    protected static readonly FacesList = [Face.Front, Face.Bottom, Face.Left, Face.Back, Face.Top, Face.Right];
    protected readFacesProp(bytes: RobloxModelReader, propName: string, classInfo: RobloxClass, numInstances: number)
    {
        for (let i = 0; i < numInstances; ++i)
        {
            const faces = new Array<Face>();
            const facesBytes = bytes.getNextUint8();
            for (const face of RobloxModelDOMReader.FacesList)
            {
                if ((facesBytes & face) > 0)
                {
                    faces.push(face);
                }
            }
            this.setPropValue(propName, { type: DataType.Faces, value: new Faces(faces) }, classInfo, i);
        }
    }

    protected static readonly AxisList = [Axis.X, Axis.Y, Axis.Z];
    protected readAxesProp(bytes: RobloxModelReader, propName: string, classInfo: RobloxClass, numInstances: number)
    {
        for (let i = 0; i < numInstances; ++i)
        {
            const axes = new Array<Axis>();
            const axesBytes = bytes.getNextUint8();
            for (const axis of RobloxModelDOMReader.AxisList)
            {
                if ((axesBytes & axis) > 0)
                {
                    axes.push(axis);
                }
            }
            this.setPropValue(propName, { type: DataType.Axes, value: new Axes(axes) }, classInfo, i);
        }
    }

    protected readBrickColorProp(bytes: RobloxModelReader, propName: string, classInfo: RobloxClass, numInstances: number)
    {
        const brickColors = bytes.getInterleavedUint32Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            this.setPropValue(propName, { type: DataType.BrickColor, value: brickColors[i] }, classInfo, i);
        }
    }

    protected readColor3Prop(bytes: RobloxModelReader, propName: string, classInfo: RobloxClass, numInstances: number)
    {
        const rVals = bytes.getInterleavedFloat32Array(numInstances);
        const gVals = bytes.getInterleavedFloat32Array(numInstances);
        const bVals = bytes.getInterleavedFloat32Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            this.setPropValue(propName, { type: DataType.Color3, value: new Color3(rVals[i], gVals[i], bVals[i]) }, classInfo, i);
        }
    }

    protected readVector2Prop(bytes: RobloxModelReader, propName: string, classInfo: RobloxClass, numInstances: number)
    {
        const xVals = bytes.getInterleavedFloat32Array(numInstances);
        const yVals = bytes.getInterleavedFloat32Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            this.setPropValue(propName, { type: DataType.Vector2, value: new Vector2(xVals[i], yVals[i]) }, classInfo, i);
        }
    }

    protected readVector3Prop(bytes: RobloxModelReader, propName: string, classInfo: RobloxClass, numInstances: number)
    {
        const xVals = bytes.getInterleavedFloat32Array(numInstances);
        const yVals = bytes.getInterleavedFloat32Array(numInstances);
        const zVals = bytes.getInterleavedFloat32Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            this.setPropValue(propName, { type: DataType.Vector3, value: new Vector3(xVals[i], yVals[i], zVals[i]) }, classInfo, i);
        }
    }

    protected readCFrameProp(bytes: RobloxModelReader, propName: string, classInfo: RobloxClass, numInstances: number)
    {
        const orientations: number[][] = [];
        for (let i = 0; i < numInstances; ++i)
        {
            const orientId = bytes.getNextUint8();
            if (orientId > 0)
            {
                // Stolen from https://github.com/MaximumADHD/Roblox-File-Format/blob/main/DataTypes/CFrame FromOrientId
                const r0 = Vector3.fromNormalId(orientId / 6);
                const r1 = Vector3.fromNormalId(orientId % 6);
                const r2 = r0.cross(r1);
                orientations.push([
                    r0.x, r0.y, r0.z,
                    r1.x, r1.y, r1.z,
                    r2.x, r2.y, r2.z
                ]);
            }
            else
            {
                orientations.push(bytes.getFloat32Array(9));
            }
        }
        
        const xVals = bytes.getInterleavedFloat32Array(numInstances);
        const yVals = bytes.getInterleavedFloat32Array(numInstances);
        const zVals = bytes.getInterleavedFloat32Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            const position = new Vector3(xVals[i], yVals[i], zVals[i]);
            const orientation = orientations[i];
            this.setPropValue(propName, { type: DataType.CFrame, value: new CFrame(position, orientation) }, classInfo, i);
        }
    }

    protected readEnumProp(bytes: RobloxModelReader, propName: string, classInfo: RobloxClass, numInstances: number)
    {
        const enumValues = bytes.getInterleavedUint32Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            this.setPropValue(propName, { type: DataType.Enum, value: enumValues[i] }, classInfo, i);
        }
    }

    protected readReferentProp(bytes: RobloxModelReader, propName: string, classInfo: RobloxClass, numInstances: number)
    {
        const referents = bytes.getReferentArray(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            const referent = referents[i];
            if (referent === -1) continue;
            const instance = this.getInstanceFromReferent(referent);
            if (!instance) continue;
            this.setPropValue(propName, { type: DataType.Referent, value: instance }, classInfo, i);
        }
    }

    protected readColor3uint8Prop(bytes: RobloxModelReader, propName: string, classInfo: RobloxClass, numInstances: number)
    {
        const rVals = bytes.getNextBytesAsArray(numInstances);
        const gVals = bytes.getNextBytesAsArray(numInstances);
        const bVals = bytes.getNextBytesAsArray(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            this.setPropValue(propName, { type: DataType.Color3uint8, value: new Color3uint8(rVals[i], gVals[i], bVals[i]) }, classInfo, i);
        }
    }

    protected readPrntChunk(bytes: RobloxModelReader)
    {
        bytes.getNextUint8(); // Version

        const numInstances = bytes.getNextInt32();
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

    protected getInstanceFromReferent(referent: number)
    {
        const classId = this.referentIdToClassId.get(referent);
        if (classId === undefined) return null;
        const classInfo = this.classIdToInfo.get(classId);
        if (!classInfo) return null;
        const index = classInfo.referentIdToIndex.get(referent);
        if (index === undefined) return null;
        return classInfo.instances[index];
    }
}