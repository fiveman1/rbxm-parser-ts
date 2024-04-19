/**
 * @author https://github.com/fiveman1
 * @file roblox_types.ts
 * Contains some Roblox related types/enums.
 */

import { formatNum } from "./util";

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
    /**
     * Unsupported (seems deprecated).
     * This is the only mention I could find of it being used:
     * https://create.roblox.com/docs/reference/engine/classes/Terrain#PasteRegion
     */
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

type RobloxString = {
    type: DataType.String,
    value: string
}

type RobloxBool = {
    type: DataType.Bool,
    value: boolean
}

type RobloxInt32 = {
    type: DataType.Int32,
    value: number
}

type RobloxFloat32 = {
    type: DataType.Float32,
    value: number
}

type RobloxFloat64 = {
    type: DataType.Float64,
    value: number
}

type RobloxUDim = {
    type: DataType.UDim,
    value: UDim
}

type RobloxUDim2 = {
    type: DataType.UDim2,
    value: UDim2
}

type RobloxRay = {
    type: DataType.Ray,
    value: Ray
}

type RobloxFaces = {
    type: DataType.Faces,
    value: Faces
}

type RobloxAxes = {
    type: DataType.Axes,
    value: Axes
}

type RobloxBrickColor = {
    type: DataType.BrickColor,
    value: number
}

type RobloxColor3 = {
    type: DataType.Color3,
    value: Color3
}

type RobloxVector2 = {
    type: DataType.Vector2,
    value: Vector2
}

type RobloxVector3 = {
    type: DataType.Vector3,
    value: Vector3
}

type RobloxCFrame = {
    type: DataType.CFrame,
    value: CFrame
}

type RobloxEnum = {
    type: DataType.Enum,
    value: number
}

type RobloxReferent = {
    type: DataType.Referent,
    value: Instance
}

type RobloxColor3uint8 = {
    type: DataType.Color3uint8,
    value: Color3uint8
}

export type RobloxValue = 
    | RobloxString
    | RobloxBool
    | RobloxInt32
    | RobloxFloat32
    | RobloxFloat64
    | RobloxUDim
    | RobloxUDim2
    | RobloxRay
    | RobloxFaces
    | RobloxAxes
    | RobloxBrickColor
    | RobloxColor3
    | RobloxVector2
    | RobloxVector3
    | RobloxCFrame
    | RobloxEnum
    | RobloxReferent
    | RobloxColor3uint8
;

export class Instance
{
    public className: string;
    public props: Map<string, RobloxValue> = new Map<string, RobloxValue>();
    public name: string = "";
    public parent?: Instance;
    public children: Array<Instance> = new Array<Instance>();

    public constructor(className: string)
    {
        this.className = className;
    }

    public setProp(propName: string, value: RobloxValue)
    {
        if (propName === "Name" && value.type === DataType.String)
        {
            this.name = value.value;
        }
        else
        {
            this.props.set(propName, value);
        }
    }

    public getTitleString()
    {
        return `${this.name} (class:${this.className})`;
    }

    public toString()
    {
        const propStrings: string[] = [];
        this.props.forEach((value, key) => {
            let valueStr: string;
            if (typeof value.value === "number")
            {
                if (key === "Face")
                {
                    valueStr = NormalId[value.value];
                }
                else
                {
                    valueStr = formatNum(value.value);
                }
            }
            else if (typeof value.value === "string")
            {
                valueStr = `"${value.value}"`;
            }
            else
            {
                valueStr = value.value.toString();
            }
            propStrings.push(`${key}: ${valueStr}`);
        });
        return `${this.getTitleString()} {${propStrings.join(", ")}}`;
    }
}

export class UDim {
    public scale: number;
    public offset: number;

    public constructor(scale: number, offset: number)
    {
        this.scale = scale;
        this.offset = offset;
    }

    public toString()
    {
        return `UDim(scale: ${formatNum(this.scale)}, offset: ${formatNum(this.offset)})`;
    }
}

export class UDim2 {
    public x: UDim;
    public y: UDim;

    public constructor(x: UDim, y: UDim)
    {
        this.x = x;
        this.y = y;
    }

    public toString()
    {
        return `UDim2(x: ${this.x}, y: ${this.y})`;
    }
}

export class Ray {
    public origin: Vector3;
    public direction: Vector3;

    public constructor(origin: Vector3, direction: Vector3)
    {
        this.origin = origin;
        this.direction = direction;
    }

    public toString()
    {
        return `Ray(origin: ${this.origin}, direction: ${this.direction})`;
    }
}

export enum Face {
    Front = 0b000001,
    Bottom = 0b000010,
    Left = 0b000100,
    Back = 0b001000,
    Top = 0b010000,
    Right = 0b100000
}

export class Faces {
    public faces: Array<Face>;

    public constructor(faces: Array<Face>)
    {
        this.faces = faces;
    }

    public toString()
    {
        if (this.faces.length === 0)
        {
            return "Faces(<none>)";
        }
        else
        {
            return `Faces(${this.faces.map((face) => Face[face]).join(", ")})`;
        }
    }
}

export enum Axis {
    X = 0b001,
    Y = 0b010,
    Z = 0b100
}

export class Axes {
    public axes: Array<Axis>;

    public constructor(axes: Array<Axis>)
    {
        this.axes = axes;
    }

    public toString()
    {
        if (this.axes.length === 0)
        {
            return "Axes(<none>)";
        }
        else
        {
            return `Axes(${this.axes.map((axis) => Axis[axis]).join(", ")})`;
        }
    }
}

/**
 * This treats the RGB values as floats between 0 to 1. See Color3uint8 for the 0-255 version.
 */
export class Color3 {
    public r: number;
    public g: number;
    public b: number;

    public constructor(r: number, g: number, b: number)
    {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    public static floatToChar(float: number)
    {
        return Math.round(float * 255);
    }

    public toString()
    {
        return `Color3(r: ${Color3.floatToChar(this.r)}, g: ${Color3.floatToChar(this.g)}, b: ${Color3.floatToChar(this.b)})`;
    }
}

export class Color3uint8 {
    public r: number;
    public g: number;
    public b: number;

    public constructor(r: number, g: number, b: number)
    {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    public toString()
    {
        return `Color3(r: ${this.r}, g: ${this.g}, b: ${this.b})`;
    }
}

export class Vector2 {
    public x: number;
    public y: number;

    public constructor(x: number, y: number)
    {
        this.x = x;
        this.y = y;
    }

    public toString()
    {
        return `Vector2(x: ${formatNum(this.x)}, y: ${formatNum(this.y)})`;
    }
}

export enum NormalId
{
    Right,
    Top,
    Back,
    Left,
    Bottom,
    Front
}

export class Vector3 {
    public x: number;
    public y: number;
    public z: number;

    public constructor(x: number, y: number, z: number)
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    // See FromNormalId https://github.com/MaximumADHD/Roblox-File-Format/blob/main/DataTypes/Vector3.cs
    public static fromNormalId(normalId: NormalId)
    {
        const coords = [0, 0, 0];
        coords[normalId % 3] = (normalId > 2 ? -1 : 1);

        return new Vector3(coords[0], coords[1], coords[2]);
    }

    public toString()
    {
        return `Vector3(x: ${formatNum(this.x)}, y: ${formatNum(this.y)}, z: ${formatNum(this.z)})`;
    }

    public cross(other: Vector3)
    {
        const crossX = this.y * other.z - other.y * this.z;
        const crossY = this.z * other.x - other.z * this.x;
        const crossZ = this.x * other.y - other.x * this.y;

        return new Vector3(crossX, crossY, crossZ);
    }
}

export class CFrame {
    public position: Vector3;
    public orientation: Array<number>;

    public constructor(position: Vector3, orientation: Array<number>)
    {
        this.position = position;
        this.orientation = orientation;
    }

    public toString()
    {
        return `CFrame(position: ${this.position}, orientation: [${this.orientation.map((val) => formatNum(val)).join(", ")}])`;
    }
}