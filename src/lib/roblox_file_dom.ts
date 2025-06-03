/**
 * @author https://github.com/fiveman1
 * Contains the core classes for manipulating .rbxm files.
 */

import { DataType, RobloxValue, CoreInstance, UDim, UDim2, Vector3, Ray, Faces, RBXMFace, Axes, RBXMAxis, Color3, Vector2, CFrame, 
    SharedString, SharedStringValue, NumberSequenceKeypoint, NumberSequence, ColorSequence, ColorSequenceKeypoint, NumberRange, 
    Rect, PhysicalProperties, EnumItem, UniqueId, RBXMFont } from "./roblox_types";
import { EnumFactory } from "../generated/generated_types";
import { RobloxFileByteReader, RobloxFileByteWriter } from "./roblox_file_bytes";
import { floatsEqual, narrowCopyArray } from "./util";

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
    instances: Array<CoreInstance>
    referentIdToIndex: Map<number, number>
}

/**
 * This contains the core functionality for parsing a .rbxm.
 */
export abstract class RobloxFileDOM 
{
    protected readonly MAGIC_HEADER = "<roblox!\x89\xff\x0d\x0a\x1a\x0a";
    protected readonly MAGIC_END = "</roblox>";
    protected readonly dataTypeParsers: Map<DataType, DataTypeParser> = new Map<DataType, DataTypeParser>();
    protected readonly classIdToInfo: Map<number, RobloxClass> = new Map<number, RobloxClass>();
    protected readonly referentIdToClassId: Map<number, number> = new Map<number, number>();
    
    public constructor()
    {
        // Define the methods used to parse the data types in PROP chunks
        this.dataTypeParsers.set(DataType.String, new StringParser());
        this.dataTypeParsers.set(DataType.Bool, new BoolParser());
        this.dataTypeParsers.set(DataType.Int32, new Int32Parser());
        this.dataTypeParsers.set(DataType.Float32, new Float32Parser());
        this.dataTypeParsers.set(DataType.Float64, new Float64Parser());
        this.dataTypeParsers.set(DataType.UDim, new UDimParser());
        this.dataTypeParsers.set(DataType.UDim2, new UDim2Parser());
        this.dataTypeParsers.set(DataType.Ray, new RayParser());
        this.dataTypeParsers.set(DataType.Faces, new FacesParser());
        this.dataTypeParsers.set(DataType.Axes, new AxesParser());
        this.dataTypeParsers.set(DataType.BrickColor, new BrickColorParser());
        this.dataTypeParsers.set(DataType.Color3, new Color3Parser());
        this.dataTypeParsers.set(DataType.Vector2, new Vector2Parser());
        this.dataTypeParsers.set(DataType.Vector3, new Vector3Parser());
        this.dataTypeParsers.set(DataType.CFrame, new CFrameParser());
        this.dataTypeParsers.set(DataType.Enum, new EnumParser());
        this.dataTypeParsers.set(DataType.Referent, new ReferentParser());
        this.dataTypeParsers.set(DataType.Color3uint8, new Color3uint8Parser());
        this.dataTypeParsers.set(DataType.Vector3int16, new Vector3int16Parser());
        this.dataTypeParsers.set(DataType.NumberSequence, new NumberSequenceParser());
        this.dataTypeParsers.set(DataType.ColorSequence, new ColorSequenceParser());
        this.dataTypeParsers.set(DataType.NumberRange, new NumberRangeParser());
        this.dataTypeParsers.set(DataType.Rect, new RectParser());
        this.dataTypeParsers.set(DataType.PhysicalProperties, new PhysicalPropertiesParser());
        this.dataTypeParsers.set(DataType.Int64, new Int64Parser());
        this.dataTypeParsers.set(DataType.SharedString, new SharedStringParser());
        this.dataTypeParsers.set(DataType.Bytecode, new BytecodeParser());
        this.dataTypeParsers.set(DataType.OptionalCFrame, new OptionalCFrameParser());
        this.dataTypeParsers.set(DataType.UniqueId, new UniqueIdParser());
        this.dataTypeParsers.set(DataType.Font, new FontParser());
        this.dataTypeParsers.set(DataType.SecurityCapabilities, new SecurityCapabilitiesParser());
    }
}

type InstanceFromReferent = (referent: number) => CoreInstance | null;
type ReferentFromInstance = (instance: CoreInstance) => number;

export type DataParserExtraInfo = {
    /**
     * Creates an EnumItem from a given value.
     * @param value the enum value
     */
    enumFactory?: EnumFactory
    /**
     * This only works in read mode. Gets an Instance given a referent ID.
     * @param referent the referent ID
     * @returns the instance, or null if this is the empty referent
     */
    getInstanceFromReferent?: InstanceFromReferent
    /**
     * This only works in write mode. Gets a referent ID from a given instance.
     * @param instance the instance
     * @returns the referent ID, or -1 if it doesn't exist
     */
    getReferentFromInstance?: ReferentFromInstance

    sharedStrings?: SharedString[]
}

/**
 * This class is used to parse data from a PROP chunk.
 */
export abstract class DataTypeParser 
{
    /**
     * Using the provided bytes, this will read and parse them into RobloxValue objects.
     * @param bytes the uncompressed bytes from the data section of a PROP chunk
     * @param numInstances the number of instances to read
     * @param outValues the output array of RobloxValue's, this should be provided as an empty array
     * @param extraInfo some extra info required by certain parsers
     */
    public abstract read(bytes: RobloxFileByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>, extraInfo?: DataParserExtraInfo): void


    public abstract write(writer: RobloxFileByteWriter, values: Array<RobloxValue | undefined>, extraInfo?: DataParserExtraInfo): void
}

export class StringParser extends DataTypeParser 
{
    public override read(bytes: RobloxFileByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        for (let i = 0; i < numInstances; ++i)
        {
            const str = bytes.getString();
            outValues.push(str ? { type: DataType.String, value: str } : undefined);
        }
    }

    public override write(writer: RobloxFileByteWriter, values: Array<RobloxValue | undefined>)
    {
        for (const value of values)
        {
            if (value?.type === DataType.String)
            {
                writer.putString(value.value);
            }
            else
            {
                writer.putString("");
            }
        }
    }
}

export class BoolParser extends DataTypeParser 
{
    public override read(bytes: RobloxFileByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        for (let i = 0; i < numInstances; ++i)
        {
            const bool = bytes.getBool();
            outValues.push({ type: DataType.Bool, value: bool });
        }
    }

    public override write(writer: RobloxFileByteWriter, values: Array<RobloxValue | undefined>)
    {
        for (const value of values)
        {
            if (value?.type === DataType.Bool)
            {
                writer.putBool(value.value);
            }
            else
            {
                writer.putBool(false);
            }
        }
    }
}

export class Int32Parser extends DataTypeParser 
{
    public override read(bytes: RobloxFileByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const ints = bytes.getInterleavedInt32Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            outValues.push({ type: DataType.Int32, value: ints[i] });
        }
    }

    public override write(writer: RobloxFileByteWriter, values: Array<RobloxValue | undefined>)
    {
        const nums: number[] = [];
        for (const value of values)
        {
            if (value?.type === DataType.Int32)
            {
                nums.push(value.value);
            }
            else
            {
                nums.push(0);
            }
        }

        writer.putInterleavedInt32Array(nums);
    }
}

export class Float32Parser extends DataTypeParser 
{
    public override read(bytes: RobloxFileByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const floats = bytes.getInterleavedFloat32Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            outValues.push({ type: DataType.Float32, value: floats[i] });
        }
    }

    public override write(writer: RobloxFileByteWriter, values: Array<RobloxValue | undefined>)
    {
        const nums: number[] = [];
        for (const value of values)
        {
            if (value?.type === DataType.Float32)
            {
                nums.push(value.value);
            }
            else
            {
                nums.push(0);
            }
        }

        writer.putInterleavedFloat32Array(nums);
    }
}

export class Float64Parser extends DataTypeParser 
{
    public override read(bytes: RobloxFileByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const floats = bytes.getFloat64Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            outValues.push({ type: DataType.Float64, value: floats[i] });
        }
    }

    public override write(writer: RobloxFileByteWriter, values: Array<RobloxValue | undefined>)
    {
        const nums: number[] = [];
        for (const value of values)
        {
            if (value?.type === DataType.Float64)
            {
                nums.push(value.value);
            }
            else
            {
                nums.push(0);
            }
        }

        writer.putFloat64Array(nums);
    }
}

export class UDimParser extends DataTypeParser 
{
    public override read(bytes: RobloxFileByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const scales = bytes.getInterleavedFloat32Array(numInstances);
        const offsets = bytes.getInterleavedInt32Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            outValues.push({ type: DataType.UDim, value: new UDim(scales[i], offsets[i]) });
        }
    }

    public override write(writer: RobloxFileByteWriter, values: Array<RobloxValue | undefined>)
    {
        const scales: number[] = [];
        const offsets: number[] = [];

        for (const value of values)
        {
            if (value?.type === DataType.UDim)
            {
                scales.push(value.value.Scale);
                offsets.push(value.value.Offset);
            }
            else
            {
                scales.push(0);
                offsets.push(0);
            }
        }

        writer.putInterleavedFloat32Array(scales);
        writer.putInterleavedInt32Array(offsets);
    }
}

export class UDim2Parser extends DataTypeParser 
{
    public override read(bytes: RobloxFileByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
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

    public override write(writer: RobloxFileByteWriter, values: Array<RobloxValue | undefined>)
    {
        const scalesX: number[] = [];
        const scalesY: number[] = [];
        const offsetsX: number[] = [];
        const offsetsY: number[] = [];

        for (const value of values)
        {
            if (value?.type === DataType.UDim2)
            {
                const x = value.value.X;
                const y = value.value.Y;
                scalesX.push(x.Scale);
                scalesY.push(y.Scale);
                offsetsX.push(x.Offset);
                offsetsY.push(y.Offset);
            }
            else
            {
                scalesX.push(0);
                scalesY.push(0);
                offsetsX.push(0);
                offsetsY.push(0);
            }
        }

        writer.putInterleavedFloat32Array(scalesX);
        writer.putInterleavedFloat32Array(scalesY);
        writer.putInterleavedInt32Array(offsetsX);
        writer.putInterleavedInt32Array(offsetsY);
    }
}

export class RayParser extends DataTypeParser 
{
    public override read(bytes: RobloxFileByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        for (let i = 0; i < numInstances; ++i)
        {
            const origin = new Vector3(bytes.getFloat32(), bytes.getFloat32(), bytes.getFloat32());
            const direction = new Vector3(bytes.getFloat32(), bytes.getFloat32(), bytes.getFloat32());
            outValues.push({ type: DataType.Ray, value: new Ray(origin, direction) });
        }
    }

    public override write(writer: RobloxFileByteWriter, values: Array<RobloxValue | undefined>)
    {
        for (const value of values)
        {
            if (value?.type === DataType.Ray)
            {
                const ray = value.value;
                writer.putFloat32(ray.Origin.X);
                writer.putFloat32(ray.Origin.Y);
                writer.putFloat32(ray.Origin.Z);
                writer.putFloat32(ray.Direction.X);
                writer.putFloat32(ray.Direction.Y);
                writer.putFloat32(ray.Direction.Z);
            }
            else
            {
                writer.putFloat32(0);
                writer.putFloat32(0);
                writer.putFloat32(0);
                writer.putFloat32(0);
                writer.putFloat32(0);
                writer.putFloat32(0);
            }
        }
    }
}

export class FacesParser extends DataTypeParser 
{
    protected readonly FacesList = [RBXMFace.Front, RBXMFace.Bottom, RBXMFace.Left, RBXMFace.Back, RBXMFace.Top, RBXMFace.Right];
    public override read(bytes: RobloxFileByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        for (let i = 0; i < numInstances; ++i)
        {
            const faces = new Array<RBXMFace>();
            const facesBytes = bytes.getUint8();
            for (const face of this.FacesList)
            {
                if ((facesBytes & face) > 0)
                {
                    faces.push(face);
                }
            }
            outValues.push({ type: DataType.Faces, value: new Faces(...faces) });
        }
    }

    public override write(writer: RobloxFileByteWriter, values: Array<RobloxValue | undefined>)
    {
        for (const value of values)
        {
            if (value?.type === DataType.Faces)
            {
                let bitMask = 0;
                for (const face of value.value.Faces)
                {
                    bitMask |= face;
                }
                writer.putUint8(bitMask);
            }
            else
            {
                writer.putUint8(0);
            }
        }
    }
}

export class AxesParser extends DataTypeParser 
{
    protected readonly AxisList = [RBXMAxis.X, RBXMAxis.Y, RBXMAxis.Z];
    public override read(bytes: RobloxFileByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        for (let i = 0; i < numInstances; ++i)
        {
            const axes = new Array<RBXMAxis>();
            const axesBytes = bytes.getUint8();
            for (const axis of this.AxisList)
            {
                if ((axesBytes & axis) > 0)
                {
                    axes.push(axis);
                }
            }
            outValues.push({ type: DataType.Axes, value: new Axes(...axes) });
        }
    }

    public override write(writer: RobloxFileByteWriter, values: Array<RobloxValue | undefined>)
    {
        for (const value of values)
        {
            if (value?.type === DataType.Axes)
            {
                let bitMask = 0;
                for (const axis of value.value.Axes)
                {
                    bitMask |= axis;
                }
                writer.putUint8(bitMask);
            }
            else
            {
                writer.putUint8(0);
            }
        }
    }
}

export class BrickColorParser extends DataTypeParser 
{
    public override read(bytes: RobloxFileByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const brickColors = bytes.getInterleavedUint32Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            outValues.push({ type: DataType.BrickColor, value: brickColors[i] });
        }
    }

    public override write(writer: RobloxFileByteWriter, values: Array<RobloxValue | undefined>)
    {
        const brickColors: number[] = [];

        for (const value of values)
        {
            if (value?.type === DataType.BrickColor)
            {
                brickColors.push(value.value);
            }
            else
            {
                brickColors.push(0);
            }
        }

        writer.putInterleavedUint32Array(brickColors);
    }
}

export class Color3Parser extends DataTypeParser 
{
    public override read(bytes: RobloxFileByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const rVals = bytes.getInterleavedFloat32Array(numInstances);
        const gVals = bytes.getInterleavedFloat32Array(numInstances);
        const bVals = bytes.getInterleavedFloat32Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            outValues.push({ type: DataType.Color3, value: new Color3(rVals[i], gVals[i], bVals[i]) });
        }
    }

    public override write(writer: RobloxFileByteWriter, values: Array<RobloxValue | undefined>)
    {
        const r: number[] = [];
        const g: number[] = [];
        const b: number[] = [];

        for (const value of values)
        {
            if (value?.type === DataType.Color3)
            {
                const color = value.value;
                r.push(color.R);
                g.push(color.G);
                b.push(color.B);
            }
            else
            {
                r.push(0);
                g.push(0);
                b.push(0);
            }
        }

        writer.putInterleavedFloat32Array(r);
        writer.putInterleavedFloat32Array(g);
        writer.putInterleavedFloat32Array(b);
    }
}

export class Vector2Parser extends DataTypeParser 
{
    public override read(bytes: RobloxFileByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const xVals = bytes.getInterleavedFloat32Array(numInstances);
        const yVals = bytes.getInterleavedFloat32Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            outValues.push({ type: DataType.Vector2, value: new Vector2(xVals[i], yVals[i]) });
        }
    }

    public override write(writer: RobloxFileByteWriter, values: Array<RobloxValue | undefined>)
    {
        const x: number[] = [];
        const y: number[] = [];

        for (const value of values)
        {
            if (value?.type === DataType.Vector2)
            {
                x.push(value.value.X);
                y.push(value.value.Y);
            }
            else
            {
                x.push(0);
                y.push(0);
            }
        }

        writer.putInterleavedFloat32Array(x);
        writer.putInterleavedFloat32Array(y);
    }
}

export class Vector3Parser extends DataTypeParser 
{
    public override read(bytes: RobloxFileByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const xVals = bytes.getInterleavedFloat32Array(numInstances);
        const yVals = bytes.getInterleavedFloat32Array(numInstances);
        const zVals = bytes.getInterleavedFloat32Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            outValues.push({ type: DataType.Vector3, value: new Vector3(xVals[i], yVals[i], zVals[i]) });
        }
    }

    public override write(writer: RobloxFileByteWriter, values: Array<RobloxValue | undefined>)
    {
        const x: number[] = [];
        const y: number[] = [];
        const z: number[] = [];

        for (const value of values)
        {
            if (value?.type === DataType.Vector3)
            {
                x.push(value.value.X);
                y.push(value.value.Y);
                z.push(value.value.Z);
            }
            else
            {
                x.push(0);
                y.push(0);
                z.push(0);
            }
        }

        writer.putInterleavedFloat32Array(x);
        writer.putInterleavedFloat32Array(y);
        writer.putInterleavedFloat32Array(z);
    }
}

export class CFrameParser extends DataTypeParser 
{
    protected readonly orientIdToArray = new Map<number, number[]>([
        [0x02, [1, 0, 0, 0, 1, 0, 0, 0, 1]],
        [0x03, [1, 0, 0, 0, 0, -1, 0, 1, 0]],
        [0x05, [1, 0, 0, 0, -1, 0, 0, 0, -1]],
        [0x06, [1, 0, 0, 0, 0, 1, 0, -1, 0]],
        [0x07, [0, 1, 0, 1, 0, 0, 0, 0, -1]],
        [0x09, [0, 0, 1, 1, 0, 0, 0, 1, 0]],
        [0x0a, [0, -1, 0, 1, 0, 0, 0, 0, 1]],
        [0x0c, [0, 0, -1, 1, 0, 0, 0, -1, 0]],
        [0x0d, [0, 1, 0, 0, 0, 1, 1, 0, 0]],
        [0x0e, [0, 0, -1, 0, 1, 0, 1, 0, 0]],
        [0x10, [0, -1, 0, 0, 0, -1, 1, 0, 0]],
        [0x11, [0, 0, 1, 0, -1, 0, 1, 0, 0]],
        [0x14, [-1, 0, 0, 0, 1, 0, 0, 0, -1]],
        [0x15, [-1, 0, 0, 0, 0, 1, 0, 1, 0]],
        [0x17, [-1, 0, 0, 0, -1, 0, 0, 0, 1]],
        [0x18, [-1, 0, 0, 0, 0, -1, 0, -1, 0]],
        [0x19, [0, 1, 0, -1, 0, 0, 0, 0, 1]],
        [0x1b, [0, 0, -1, -1, 0, 0, 0, 1, 0]],
        [0x1c, [0, -1, 0, -1, 0, 0, 0, 0, -1]],
        [0x1e, [0, 0, 1, -1, 0, 0, 0, -1, 0]],
        [0x1f, [0, 1, 0, 0, 0, -1, -1, 0, 0]],
        [0x20, [0, 0, 1, 0, 1, 0, -1, 0, 0]],
        [0x22, [0, -1, 0, 0, 0, 1, -1, 0, 0]],
        [0x23, [0, 0, -1, 0, -1, 0, -1, 0, 0]]
    ]);
    protected readonly orientationToId = new Map<number, number>();

    public constructor()
    {
        super();
        for (const [orientId, orientation] of this.orientIdToArray)
        {
            this.orientationToId.set(CFrameParser.getOrientationKey(orientation), orientId);
        }
    }

    public override read(bytes: RobloxFileByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const orientations: number[][] = [];
        for (let i = 0; i < numInstances; ++i)
        {
            const orientId = bytes.getUint8();
            if (orientId > 0)
            {
                const orientation = this.getOrientationFromId(orientId);
                orientations.push(orientation);
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

    public override write(writer: RobloxFileByteWriter, values: Array<RobloxValue | undefined>)
    {
        this.writeCFrame(writer, values, DataType.CFrame);
    }

    public writeCFrame(writer: RobloxFileByteWriter, values: Array<RobloxValue | undefined>, type: DataType.CFrame | DataType.OptionalCFrame)
    {
        const hasValueArray: boolean[] = [];
        const x: number[] = [];
        const y: number[] = [];
        const z: number[] = [];

        for (const value of values)
        {
            const hasValue = value?.type === type;
            hasValueArray.push(hasValue);

            const cframe = hasValue ? value.value : CFrame.Identity;

            const orientId = this.getOrientId(cframe.Orientation);

            if (orientId === -1)
            {
                writer.putUint8(0);
                writer.putFloat32Array(cframe.Orientation);
            }
            else
            {
                writer.putUint8(orientId);
            }

            const pos = cframe.Position;
            x.push(pos.X);
            y.push(pos.Y);
            z.push(pos.Z);
        }

        writer.putInterleavedFloat32Array(x);
        writer.putInterleavedFloat32Array(y);
        writer.putInterleavedFloat32Array(z);
        
        return hasValueArray;
    }

    public getOrientationFromId(orientId: number)
    {
        const orientation = this.orientIdToArray.get(orientId);
        if (!orientation)
        {
            return [];
        }
        return narrowCopyArray(orientation);
    }

    public getOrientId(orientation: number[])
    {
        for (let i = 0; i < 9; i += 3)
        {
            let equalsZero = 0;
            let equalsOne = 0;
            for (let j = 0; j < 3; ++j)
            {
                const val = Math.abs(orientation[i + j]);
                if (floatsEqual(val, 0))
                {
                    equalsZero += 1;
                }
                else if (floatsEqual(val, 1))
                {
                    equalsOne += 1;
                }
            }
            if (equalsZero !== 2 || equalsOne !== 1)
            {
                return -1;
            }
        }
        const key = CFrameParser.getOrientationKey(orientation);
        const id = this.orientationToId.get(key);
        return id ?? -1;
    }

    public static getOrientationKey(orientation: number[])
    {
        let key = 0;
        for (let i = 0; i < 9; ++i)
        {
            const val = Math.round(orientation[i]);
            if (val < 0)
            {
                key |= (1 << (i + 9));
            }
            else if (val > 0)
            {
                key |= (1 << i);
            }
        }
        return key;
    }
}

export class EnumParser extends DataTypeParser 
{
    public override read(bytes: RobloxFileByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>, extraInfo?: DataParserExtraInfo)
    {
        const enumValues = bytes.getInterleavedUint32Array(numInstances);
        const enumFactory = extraInfo?.enumFactory;

        for (let i = 0; i < numInstances; ++i)
        {
            outValues.push({ type: DataType.Enum, value: this.createEnumValue(enumValues[i], enumFactory) });
        }
    }

    protected createEnumValue(value: number, enumFactory?: EnumFactory)
    {
        if (enumFactory)
        {
            const enumValue = enumFactory(value);
            return enumValue ?? EnumItem.MakeUnknownEnum(value);
        }
        return EnumItem.MakeUnknownEnum(value);
    }

    public override write(writer: RobloxFileByteWriter, values: Array<RobloxValue | undefined>)
    {
        const enums: number[] = [];

        for (const value of values)
        {
            if (value?.type === DataType.Enum)
            {
                enums.push(value.value.Value);
            }
            else
            {
                enums.push(0);
            }
        }

        writer.putInterleavedUint32Array(enums);
    }
}

export class ReferentParser extends DataTypeParser 
{
    public override read(bytes: RobloxFileByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>, extraInfo?: DataParserExtraInfo)
    {
        const referents = bytes.getReferentArray(numInstances);
        const getInstance = extraInfo?.getInstanceFromReferent;

        for (let i = 0; i < numInstances; ++i)
        {
            const referent = referents[i]; 
            const instance = getInstance ? getInstance(referent) : null;
            outValues.push(instance ? { type: DataType.Referent, value: instance } : undefined);
        }
    }

    public override write(writer: RobloxFileByteWriter, values: Array<RobloxValue | undefined>, extraInfo?: DataParserExtraInfo)
    {
        const referents: number[] = [];
        const getReferent = extraInfo?.getReferentFromInstance;

        for (const value of values)
        {
            if (value?.type === DataType.Referent)
            {
                referents.push(getReferent ? getReferent(value.value) : -1);
            }
            else
            {
                referents.push(-1);
            }
        }

        writer.putReferentArray(referents);
    }
}

export class Color3uint8Parser extends DataTypeParser 
{
    public override read(bytes: RobloxFileByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const rVals = bytes.getBytes(numInstances);
        const gVals = bytes.getBytes(numInstances);
        const bVals = bytes.getBytes(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            outValues.push({ type: DataType.Color3uint8, value: Color3.FromRGB(rVals[i], gVals[i], bVals[i]) });
        }
    }

    public override write(writer: RobloxFileByteWriter, values: Array<RobloxValue | undefined>)
    {
        const r: number[] = [];
        const g: number[] = [];
        const b: number[] = [];

        for (const value of values)
        {
            if (value?.type === DataType.Color3uint8)
            {
                const color = value.value;
                r.push(Color3.FloatToUint8(color.R));
                g.push(Color3.FloatToUint8(color.G));
                b.push(Color3.FloatToUint8(color.B));
            }
            else
            {
                r.push(0);
                g.push(0);
                b.push(0);
            }
        }

        writer.putBytes(new Uint8Array(r));
        writer.putBytes(new Uint8Array(g));
        writer.putBytes(new Uint8Array(b));
    }
}

export class Vector3int16Parser extends DataTypeParser 
{
    public override read(bytes: RobloxFileByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        for (let i = 0; i < numInstances; ++i)
        {
            const x = bytes.getInt16();
            const y = bytes.getInt16();
            const z = bytes.getInt16();
            outValues.push({ type: DataType.Vector3int16, value: new Vector3(x, y, z) });
        }
    }

    public override write(writer: RobloxFileByteWriter, values: Array<RobloxValue | undefined>)
    {
        for (const value of values)
        {
            if (value?.type === DataType.Vector3int16)
            {
                const vec = value.value;
                writer.putInt16(vec.X);
                writer.putInt16(vec.Y);
                writer.putInt16(vec.Z);
            }
            else
            {
                writer.putInt16(0);
                writer.putInt16(0);
                writer.putInt16(0);
            }
        }
    }
}

export class NumberSequenceParser extends DataTypeParser 
{
    public override read(bytes: RobloxFileByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
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
            
            outValues.push({ type: DataType.NumberSequence, value: new NumberSequence(...keypoints) });
        }
    }

    public override write(writer: RobloxFileByteWriter, values: Array<RobloxValue | undefined>)
    {
        for (const value of values)
        {
            if (value?.type === DataType.NumberSequence)
            {
                const seq = value.value;
                writer.putUint32(seq.Keypoints.length);
                for (const keypt of seq.Keypoints)
                {
                    writer.putFloat32(keypt.Time);
                    writer.putFloat32(keypt.Value);
                    writer.putFloat32(keypt.Envelope);
                }
            }
            else
            {
                writer.putUint32(0);
            }
        }
    }
}

export class ColorSequenceParser extends DataTypeParser 
{
    public override read(bytes: RobloxFileByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
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
            
            outValues.push({ type: DataType.ColorSequence, value: new ColorSequence(...keypoints) });
        }
    }

    public override write(writer: RobloxFileByteWriter, values: Array<RobloxValue | undefined>)
    {
        for (const value of values)
        {
            if (value?.type === DataType.ColorSequence)
            {
                const seq = value.value;
                writer.putUint32(seq.Keypoints.length);
                for (const keypt of seq.Keypoints)
                {
                    writer.putFloat32(keypt.Time);
                    writer.putFloat32(keypt.Color.R);
                    writer.putFloat32(keypt.Color.G);
                    writer.putFloat32(keypt.Color.B);
                    writer.putFloat32(0);
                }
            }
            else
            {
                writer.putUint32(0);
            }
        }
    }
}

export class NumberRangeParser extends DataTypeParser 
{
    public override read(bytes: RobloxFileByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        for (let i = 0; i < numInstances; ++i)
        {
            const min = bytes.getFloat32();
            const max = bytes.getFloat32();
            
            outValues.push({ type: DataType.NumberRange, value: new NumberRange(min, max) });
        }
    }

    public override write(writer: RobloxFileByteWriter, values: Array<RobloxValue | undefined>)
    {
        for (const value of values)
        {
            if (value?.type === DataType.NumberRange)
            {
                writer.putFloat32(value.value.Min);
                writer.putFloat32(value.value.Max);
            }
            else
            {
                writer.putFloat32(0);
                writer.putFloat32(0);
            }
        }
    }
}

export class RectParser extends DataTypeParser 
{
    public override read(bytes: RobloxFileByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const minXs = bytes.getInterleavedFloat32Array(numInstances);
        const minYs = bytes.getInterleavedFloat32Array(numInstances);
        const maxXs = bytes.getInterleavedFloat32Array(numInstances);
        const maxYs = bytes.getInterleavedFloat32Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            const min = new Vector2(minXs[i], minYs[i]);
            const max = new Vector2(maxXs[i], maxYs[i]);
            outValues.push({ type: DataType.Rect, value: new Rect(min, max) });
        }
    }

    public override write(writer: RobloxFileByteWriter, values: Array<RobloxValue | undefined>)
    {
        const minXs: number[] = [];
        const minYs: number[] = [];
        const maxXs: number[] = [];
        const maxYs: number[] = [];

        for (const value of values)
        {
            if (value?.type === DataType.Rect)
            {
                const rect = value.value;
                minXs.push(rect.Min.X);
                minYs.push(rect.Min.Y);
                maxXs.push(rect.Max.X);
                maxYs.push(rect.Max.Y);
            }
            else
            {
                minXs.push(0);
                minYs.push(0);
                maxXs.push(0);
                maxYs.push(0);
            }
        }

        writer.putInterleavedFloat32Array(minXs);
        writer.putInterleavedFloat32Array(minYs);
        writer.putInterleavedFloat32Array(maxXs);
        writer.putInterleavedFloat32Array(maxYs);
    }
}

export class PhysicalPropertiesParser extends DataTypeParser 
{
    public override read(bytes: RobloxFileByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        for (let i = 0; i < numInstances; ++i)
        {
            if (!bytes.getBool())
            {
                outValues.push(undefined);
                continue;
            }
            
            const density = bytes.getFloat32();
            const friction = bytes.getFloat32();
            const elasticity = bytes.getFloat32();
            const frictionWeight = bytes.getFloat32();
            const elasticityWeight = bytes.getFloat32();
            
            outValues.push({ type: DataType.PhysicalProperties, value: new PhysicalProperties(density, friction, elasticity, frictionWeight, elasticityWeight) });
        }
    }

    public override write(writer: RobloxFileByteWriter, values: Array<RobloxValue | undefined>)
    {
        for (const value of values)
        {
            if (value?.type === DataType.PhysicalProperties)
            {
                const props = value.value;
                writer.putBool(true);
                writer.putFloat32(props.Density);
                writer.putFloat32(props.Friction);
                writer.putFloat32(props.Elasticity);
                writer.putFloat32(props.FrictionWeight);
                writer.putFloat32(props.ElasticityWeight);
            }
            else
            {
                writer.putBool(false);
            }
        }
    }
}

export class Int64Parser extends DataTypeParser 
{
    public override read(bytes: RobloxFileByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const int64s = bytes.getInterleavedInt64Array(numInstances);
        for (let i = 0; i < numInstances; ++i)
        {
            outValues.push({ type: DataType.Int64, value: int64s[i] });
        }
    }

    public override write(writer: RobloxFileByteWriter, values: Array<RobloxValue | undefined>)
    {
        const nums: bigint[] = [];

        for (const value of values)
        {
            if (value?.type === DataType.Int64)
            {
                nums.push(value.value);
            }
            else
            {
                nums.push(BigInt(0));
            }
        }

        writer.putInterleavedInt64Array(nums);
    }
}

export class SharedStringParser extends DataTypeParser 
{
    public override read(bytes: RobloxFileByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const indices = bytes.getInterleavedUint32Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            outValues.push({ type: DataType.SharedString, value: new SharedStringValue(indices[i]) });
        }
    }

    public override write(writer: RobloxFileByteWriter, values: Array<RobloxValue | undefined>, extraInfo?: DataParserExtraInfo)
    {
        const sharedStrings = extraInfo?.sharedStrings;
        if (sharedStrings === undefined)
        {
            throw new Error("Missing shared strings array");
        }

        const indices: number[] = [];

        for (const value of values)
        {
            if (value?.type === DataType.SharedString)
            {
                indices.push(value.value.Index);
            }
            else
            {
                sharedStrings.push(new SharedString(""));
                indices.push(sharedStrings.length - 1);
            }
        }

        writer.putInterleavedUint32Array(indices);
    }
}

export class BytecodeParser extends DataTypeParser 
{
    public override read(bytes: RobloxFileByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        for (let i = 0; i < numInstances; ++i)
        {
            const byteCode = bytes.getString();
            outValues.push(byteCode ? { type: DataType.Bytecode, value: byteCode } : undefined);
        }
    }

    public override write(writer: RobloxFileByteWriter, values: Array<RobloxValue | undefined>)
    {
        for (const value of values)
        {
            if (value?.type === DataType.Bytecode)
            {
                writer.putString(value.value);
            }
            else
            {
                writer.putString("");
            }
        }
    }
}

export class OptionalCFrameParser extends DataTypeParser 
{
    public override read(bytes: RobloxFileByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        bytes.getUint8();
        const cFrameValues: (RobloxValue | undefined)[] = [];
        new CFrameParser().read(bytes, numInstances, cFrameValues);
        bytes.getUint8();
        for (let i = 0; i < numInstances; ++i)
        {
            const hasValue = bytes.getBool();
            const cFrame = cFrameValues[i];
            if (hasValue && cFrame)
            {
                outValues.push({ type: DataType.OptionalCFrame, value: cFrame.value as CFrame });
            }
            else
            {
                outValues.push(undefined);
            }
        }
    }

    public override write(writer: RobloxFileByteWriter, values: Array<RobloxValue | undefined>)
    {
        writer.putUint8(DataType.CFrame);
        const hasValueArray = new CFrameParser().writeCFrame(writer, values, DataType.OptionalCFrame);
        writer.putUint8(0x02);
        for (const hasValue of hasValueArray)
        {
            writer.putBool(hasValue);
        }
    }
}

export class UniqueIdParser extends DataTypeParser 
{
    public override read(bytes: RobloxFileByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const interleavedBytes = bytes.getBytes(numInstances * 16);

        const uniqueIds = RobloxFileByteReader.convertInterleaved(interleavedBytes, numInstances, (bytes) => {
            const reader = new RobloxFileByteReader(bytes.reverse());
            const random = RobloxFileByteReader.untransformInt64(reader.getInt64());
            const time = reader.getUint32();
            const index = reader.getUint32();
            return new UniqueId(index, time, random);
        });

        for (let i = 0; i < numInstances; ++i)
        {
            outValues.push({ type: DataType.UniqueId, value: uniqueIds[i] });
        }
    }

    public override write(writer: RobloxFileByteWriter, values: Array<RobloxValue | undefined>)
    {
        const idWriter = new RobloxFileByteWriter();

        for (let i = values.length - 1; i >= 0; --i)
        {
            const value = values[i];
            if (!value || value.type !== DataType.UniqueId)
            {
                throw new Error("Tried to write missing unique ID");
            }

            const id = value.value;
            
            idWriter.putInt64(RobloxFileByteWriter.transformInt64(id.Random));
            idWriter.putUint32(id.Time);
            idWriter.putUint32(id.Index);
        }

        writer.putBytesInterleaved(idWriter.bytes.reverse(), values.length);
    }
}

export class FontParser extends DataTypeParser 
{
    public override read(bytes: RobloxFileByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        for (let i = 0; i < numInstances; ++i)
        {
            const family = bytes.getString();
            const weight = bytes.getUint16();
            const style = bytes.getUint8();
            const cachedFaceId = bytes.getString();
            outValues.push({ type: DataType.Font, value: new RBXMFont(family, weight, style, cachedFaceId) });
        }
    }

    public override write(writer: RobloxFileByteWriter, values: Array<RobloxValue | undefined>)
    {
        for (const value of values)
        {
            if (value?.type === DataType.Font)
            {
                const font = value.value;
                writer.putString(font.Family);
                writer.putUint16(font.Weight);
                writer.putUint8(font.Style);
                writer.putString(font.CachedFaceId ?? "");
            }
            else
            {
                writer.putString("");
                writer.putUint16(0);
                writer.putUint8(0);
                writer.putString("");
            }
        }
    }
}

export class SecurityCapabilitiesParser extends DataTypeParser 
{
    public override read(bytes: RobloxFileByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const values = bytes.getInterleavedUint64Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            outValues.push({ type: DataType.SecurityCapabilities, value: values[i] });
        }
    }

    public override write(writer: RobloxFileByteWriter, values: Array<RobloxValue | undefined>)
    {
        const nums: bigint[] = [];

        for (const value of values)
        {
            if (value?.type === DataType.SecurityCapabilities)
            {
                nums.push(value.value);
            }
            else
            {
                nums.push(BigInt(0));
            }
        }

        writer.putInterleavedInt64Array(nums);
    }
}
