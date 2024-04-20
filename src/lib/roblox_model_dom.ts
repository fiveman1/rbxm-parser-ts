/**
 * @author https://github.com/fiveman1
 * @file roblox_model_dom.ts
 * Contains the core classes for manipulating .rbxm file.
 */

import { RobloxModel } from "./roblox_model";
import { DataType, RobloxValue, Instance, UDim, UDim2, Vector3, Ray, Faces, Face, Axes, Axis, Color3, Vector2, CFrame, 
    Color3uint8, SharedStringValue, NumberSequenceKeypoint, NumberSequence, ColorSequence, ColorSequenceKeypoint, NumberRange } from "./roblox_types";
import { RobloxModelByteReader } from "./roblox_model_reader";

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

export type RobloxClass = {
    name: string
    isService: boolean
    instances: Array<Instance>
    referentIdToIndex: Map<number, number>
}

export abstract class RobloxModelDOM 
{
    protected model: RobloxModel = new RobloxModel();
    protected dataTypeParsers: Map<DataType, DataTypeParser> = new Map<DataType, DataTypeParser>;
    protected classIdToInfo: Map<number, RobloxClass> = new Map<number, RobloxClass>();
    protected referentIdToClassId: Map<number, number> = new Map<number, number>();

    public constructor()
    {
        // Define the methods used to parse the data types in PROP chunks
        this.dataTypeParsers.set(DataType.String, new StringParser(this));
        this.dataTypeParsers.set(DataType.Bool, new BoolParser(this));
        this.dataTypeParsers.set(DataType.Int32, new Int32Parser(this));
        this.dataTypeParsers.set(DataType.Float32, new Float32Parser(this));
        this.dataTypeParsers.set(DataType.Float64, new Float64Parser(this));
        this.dataTypeParsers.set(DataType.UDim, new UDimParser(this));
        this.dataTypeParsers.set(DataType.UDim2, new UDim2Parser(this));
        this.dataTypeParsers.set(DataType.Ray, new RayParser(this));
        this.dataTypeParsers.set(DataType.Faces, new FacesParser(this));
        this.dataTypeParsers.set(DataType.Axes, new AxesParser(this));
        this.dataTypeParsers.set(DataType.BrickColor, new BrickColorParser(this));
        this.dataTypeParsers.set(DataType.Color3, new Color3Parser(this));
        this.dataTypeParsers.set(DataType.Vector2, new Vector2Parser(this));
        this.dataTypeParsers.set(DataType.Vector3, new Vector3Parser(this));
        this.dataTypeParsers.set(DataType.CFrame, new CFrameParser(this));
        this.dataTypeParsers.set(DataType.Enum, new EnumParser(this));
        this.dataTypeParsers.set(DataType.Referent, new ReferentParser(this));
        this.dataTypeParsers.set(DataType.Color3uint8, new Color3uint8Parser(this));
        this.dataTypeParsers.set(DataType.NumberSequence, new NumberSequenceParser(this));
        this.dataTypeParsers.set(DataType.ColorSequence, new ColorSequenceParser(this));
        this.dataTypeParsers.set(DataType.SharedString, new SharedStringParser(this));
    }

    /**
     * This only works in read mode. Gets an Instance given a referent ID.
     * @param referent the referent ID
     * @returns the instance, or null if this is the empty referent
     */
    public abstract getInstanceFromReferent(referent: number): Instance | null;
}

export abstract class DataTypeParser 
{
    protected dom: RobloxModelDOM;

    public constructor(dom: RobloxModelDOM)
    {
        this.dom = dom;
    }

    public abstract read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>): void
    // there will be a write method eventually...
}

export class StringParser extends DataTypeParser 
{

    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        for (let i = 0; i < numInstances; ++i)
        {
            const str = bytes.getString();
            outValues.push(str ? { type: DataType.String, value: str } : undefined);
        }
    }
}

export class BoolParser extends DataTypeParser 
{

    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        for (let i = 0; i < numInstances; ++i)
        {
            const bool = bytes.getBool();
            outValues.push({ type: DataType.Bool, value: bool });
        }
    }
}

export class Int32Parser extends DataTypeParser 
{

    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const ints = bytes.getInterleavedInt32Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            outValues.push({ type: DataType.Int32, value: ints[i] });
        }
    }
}

export class Float32Parser extends DataTypeParser 
{

    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const floats = bytes.getInterleavedFloat32Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            outValues.push({ type: DataType.Float32, value: floats[i] });
        }
    }
}

export class Float64Parser extends DataTypeParser 
{

    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const floats = bytes.getFloat64Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            outValues.push({ type: DataType.Float64, value: floats[i] });
        }
    }
}

export class UDimParser extends DataTypeParser 
{

    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const scales = bytes.getInterleavedFloat32Array(numInstances);
        const offsets = bytes.getInterleavedInt32Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            outValues.push({ type: DataType.UDim, value: new UDim(scales[i], offsets[i]) });
        }
    }
}

export class UDim2Parser extends DataTypeParser 
{

    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const scalesX = bytes.getInterleavedFloat32Array(numInstances);
        const scalesY = bytes.getInterleavedFloat32Array(numInstances);
        const offsetsX = bytes.getInterleavedInt32Array(numInstances);
        const offsetsY = bytes.getInterleavedInt32Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            const x = new UDim(scalesX[i], offsetsX[i]);
            const y = new UDim(scalesY[i], offsetsY[i]);
            outValues.push({ type: DataType.UDim2, value: new UDim2(x, y) });
        }
    }
}

export class RayParser extends DataTypeParser 
{

    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const origin = new Vector3(bytes.getFloat32(), bytes.getFloat32(), bytes.getFloat32());
        const direction = new Vector3(bytes.getFloat32(), bytes.getFloat32(), bytes.getFloat32());

        for (let i = 0; i < numInstances; ++i)
        {
            outValues.push({ type: DataType.Ray, value: new Ray(origin, direction) });
        }
    }
}

export class FacesParser extends DataTypeParser 
{

    protected static readonly FacesList = [Face.Front, Face.Bottom, Face.Left, Face.Back, Face.Top, Face.Right];
    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        for (let i = 0; i < numInstances; ++i)
        {
            const faces = new Array<Face>();
            const facesBytes = bytes.getUint8();
            for (const face of FacesParser.FacesList)
            {
                if ((facesBytes & face) > 0)
                {
                    faces.push(face);
                }
            }
            outValues.push({ type: DataType.Faces, value: new Faces(faces) });
        }
    }
}

export class AxesParser extends DataTypeParser 
{

    protected static readonly AxisList = [Axis.X, Axis.Y, Axis.Z];
    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        for (let i = 0; i < numInstances; ++i)
        {
            const axes = new Array<Axis>();
            const axesBytes = bytes.getUint8();
            for (const axis of AxesParser.AxisList)
            {
                if ((axesBytes & axis) > 0)
                {
                    axes.push(axis);
                }
            }
            outValues.push({ type: DataType.Axes, value: new Axes(axes) });
        }
    }
}

export class BrickColorParser extends DataTypeParser 
{

    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const brickColors = bytes.getInterleavedUint32Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            outValues.push({ type: DataType.BrickColor, value: brickColors[i] });
        }
    }
}

export class Color3Parser extends DataTypeParser 
{

    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const rVals = bytes.getInterleavedFloat32Array(numInstances);
        const gVals = bytes.getInterleavedFloat32Array(numInstances);
        const bVals = bytes.getInterleavedFloat32Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            outValues.push({ type: DataType.Color3, value: new Color3(rVals[i], gVals[i], bVals[i]) });
        }
    }
}

export class Vector2Parser extends DataTypeParser 
{

    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const xVals = bytes.getInterleavedFloat32Array(numInstances);
        const yVals = bytes.getInterleavedFloat32Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            outValues.push({ type: DataType.Vector2, value: new Vector2(xVals[i], yVals[i]) });
        }
    }
}

export class Vector3Parser extends DataTypeParser 
{

    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const xVals = bytes.getInterleavedFloat32Array(numInstances);
        const yVals = bytes.getInterleavedFloat32Array(numInstances);
        const zVals = bytes.getInterleavedFloat32Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            outValues.push({ type: DataType.Vector3, value: new Vector3(xVals[i], yVals[i], zVals[i]) });
        }
    }
}

export class CFrameParser extends DataTypeParser 
{

    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const orientations: number[][] = [];
        for (let i = 0; i < numInstances; ++i)
        {
            const orientId = bytes.getUint8();
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
            outValues.push({ type: DataType.CFrame, value: new CFrame(position, orientation) });
        }
    }
}

export class EnumParser extends DataTypeParser 
{

    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const enumValues = bytes.getInterleavedUint32Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            outValues.push({ type: DataType.Enum, value: enumValues[i] });
        }
    }
}

export class ReferentParser extends DataTypeParser 
{

    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const referents = bytes.getReferentArray(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            const referent = referents[i]; 
            const instance = this.dom.getInstanceFromReferent(referent);
            outValues.push(instance ? { type: DataType.Referent, value: instance } : undefined);
        }
    }
}

export class Color3uint8Parser extends DataTypeParser 
{

    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const rVals = bytes.getByteArray(numInstances);
        const gVals = bytes.getByteArray(numInstances);
        const bVals = bytes.getByteArray(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            outValues.push({ type: DataType.Color3uint8, value: new Color3uint8(rVals[i], gVals[i], bVals[i]) });
        }
    }
}

export class NumberSequenceParser extends DataTypeParser 
{

    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        for (let i = 0; i < numInstances; ++i)
        {
            const keypoints = [];
            const numKeypoints = bytes.getUint32();
            for (let j = 0; j < numKeypoints; ++j)
            {
                const time = bytes.getFloat32();
                const value = bytes.getFloat32();
                const envelope = bytes.getFloat32();
                keypoints.push(new NumberSequenceKeypoint(time, value, envelope));
            }
            
            outValues.push({ type: DataType.NumberSequence, value: new NumberSequence(keypoints) });
        }
    }
}

export class ColorSequenceParser extends DataTypeParser 
{

    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        for (let i = 0; i < numInstances; ++i)
        {
            const keypoints = [];
            const numKeypoints = bytes.getUint32();
            for (let j = 0; j < numKeypoints; ++j)
            {
                const time = bytes.getFloat32();
                const r = bytes.getFloat32();
                const g = bytes.getFloat32();
                const b = bytes.getFloat32();
                bytes.getFloat32(); // Envelope, unused
                keypoints.push(new ColorSequenceKeypoint(time, new Color3(r, g, b)));
            }
            
            outValues.push({ type: DataType.ColorSequence, value: new ColorSequence(keypoints) });
        }
    }
}

export class NumberRangeParser extends DataTypeParser 
{

    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        for (let i = 0; i < numInstances; ++i)
        {
            const min = bytes.getFloat32();
            const max = bytes.getFloat32();
            
            outValues.push({ type: DataType.NumberRange, value: new NumberRange(min, max) });
        }
    }
}

export class SharedStringParser extends DataTypeParser 
{

    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const indices = bytes.getInterleavedUint32Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            outValues.push({ type: DataType.SharedString, value: new SharedStringValue(indices[i]) });
        }
    }
}
