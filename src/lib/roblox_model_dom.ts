/**
 * @author https://github.com/fiveman1
 * @file roblox_model_dom.ts
 * Contains the core classes for manipulating .rbxm files.
 */

import { RobloxModel } from "./roblox_model";
import { DataType, RobloxValue, CoreInstance, UDim, UDim2, Vector3, Ray, Faces, RBXMFace, Axes, RBXMAxis, Color3, Vector2, CFrame, 
    SharedStringValue, NumberSequenceKeypoint, NumberSequence, ColorSequence, ColorSequenceKeypoint, NumberRange, 
    Rect, PhysicalProperties, EnumItem, UniqueId, RBXMFont } from "./roblox_types";
import { RobloxModelByteReader } from "./roblox_model_reader";
import { EnumFactory, NormalId } from "../generated/generated_types";

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
export abstract class RobloxModelDOM 
{
    protected readonly MAGIC_HEADER = "<roblox!\x89\xff\x0d\x0a\x1a\x0a";
    protected readonly MAGIC_END = "</roblox>";
    protected model: RobloxModel = new RobloxModel();
    protected dataTypeParsers: Map<DataType, DataTypeParser> = new Map<DataType, DataTypeParser>();
    protected classIdToInfo: Map<number, RobloxClass> = new Map<number, RobloxClass>();
    protected referentIdToClassId: Map<number, number> = new Map<number, number>();

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

export type DataParserExtraInfo = {
    enumFactory?: EnumFactory;
    /**
     * This only works in read mode. Gets an Instance given a referent ID.
     * @param referent the referent ID
     * @returns the instance, or null if this is the empty referent
     */
    getInstanceFromReferent?: InstanceFromReferent;
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
     */
    public abstract read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>, extraInfo?: DataParserExtraInfo): void
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
    protected readonly FacesList = [RBXMFace.Front, RBXMFace.Bottom, RBXMFace.Left, RBXMFace.Back, RBXMFace.Top, RBXMFace.Right];
    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
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
            outValues.push({ type: DataType.Faces, value: new Faces(faces) });
        }
    }
}

export class AxesParser extends DataTypeParser 
{
    protected readonly AxisList = [RBXMAxis.X, RBXMAxis.Y, RBXMAxis.Z];
    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
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
                const r0 = Vector3.FromNormalId(NormalId.fromValue(Math.floor(orientId / 6))!);
                const r1 = Vector3.FromNormalId(NormalId.fromValue(orientId % 6)!);
                const r2 = r0.Cross(r1);
                orientations.push([
                    r0.X, r0.Y, r0.Z,
                    r1.X, r1.Y, r1.Z,
                    r2.X, r2.Y, r2.Z
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
    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>, extraInfo?: DataParserExtraInfo)
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
}

export class ReferentParser extends DataTypeParser 
{
    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>, extraInfo?: DataParserExtraInfo)
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
}

export class Color3uint8Parser extends DataTypeParser 
{
    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const rVals = bytes.getBytes(numInstances);
        const gVals = bytes.getBytes(numInstances);
        const bVals = bytes.getBytes(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            outValues.push({ type: DataType.Color3uint8, value: Color3.FromRGB(rVals[i], gVals[i], bVals[i]) });
        }
    }
}

export class Vector3int16Parser extends DataTypeParser 
{
    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        for (let i = 0; i < numInstances; ++i)
        {
            const x = bytes.getInt16();
            const y = bytes.getInt16();
            const z = bytes.getInt16();
            outValues.push({ type: DataType.Vector3int16, value: new Vector3(x, y, z) });
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

export class RectParser extends DataTypeParser 
{
    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
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
}

export class PhysicalPropertiesParser extends DataTypeParser 
{
    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
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
}

export class Int64Parser extends DataTypeParser 
{
    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const int64s = bytes.getInterleavedInt64Array(numInstances);
        for (let i = 0; i < numInstances; ++i)
        {
            outValues.push({ type: DataType.Int64, value: int64s[i] });
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

export class BytecodeParser extends DataTypeParser 
{
    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        for (let i = 0; i < numInstances; ++i)
        {
            const byteCode = bytes.getString();
            outValues.push(byteCode ? { type: DataType.Bytecode, value: byteCode } : undefined);
        }
    }
}

export class OptionalCFrameParser extends DataTypeParser 
{
    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
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
}

export class UniqueIdParser extends DataTypeParser 
{
    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const interleavedBytes = bytes.getBytes(numInstances * 16);

        const uniqueIds = RobloxModelByteReader.convertInterleaved(interleavedBytes, numInstances, (bytes) => {
            const reader = new RobloxModelByteReader(bytes.reverse());
            const random = RobloxModelByteReader.untransformInt64(reader.getInt64());
            const time = reader.getUint32();
            const index = reader.getUint32();
            return new UniqueId(index, time, random);
        });

        for (let i = 0; i < numInstances; ++i)
        {
            outValues.push({ type: DataType.UniqueId, value: uniqueIds[i] });
        }
    }
}

export class FontParser extends DataTypeParser 
{
    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
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
}

export class SecurityCapabilitiesParser extends DataTypeParser 
{
    public override read(bytes: RobloxModelByteReader, numInstances: number, outValues: Array<RobloxValue | undefined>)
    {
        const values = bytes.getInterleavedUint64Array(numInstances);

        for (let i = 0; i < numInstances; ++i)
        {
            outValues.push({ type: DataType.SecurityCapabilities, value: values[i] });
        }
    }
}
