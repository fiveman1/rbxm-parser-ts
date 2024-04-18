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

type RobloxReferent = {
    type: DataType.Referent,
    value: Instance
}

export type RobloxValue = 
    | RobloxString
    | RobloxBool
    | RobloxInt32
    | RobloxFloat32
    | RobloxFloat64
    | RobloxUDim
    | RobloxUDim2
    | RobloxReferent
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
        let s = `${this.getTitleString()} {`;
        this.props.forEach((value, key) => {
            let valueStr;
            if (typeof value.value === "number")
            {
                valueStr = formatNum(value.value);
            }
            else
            {
                valueStr = value.value.toString();
            }
            s += `${key}: ${valueStr}, `;
        });
        s += "}";
        if (s.endsWith(", }"))
        {
            s = s.slice(0, s.length - 3) + "}";
        }
        return s;
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
        return `UDim2(x: ${this.x.toString()}, y: ${this.y.toString()})`;
    }
}