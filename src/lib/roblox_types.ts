/**
 * @author https://github.com/fiveman1
 * @file roblox_types.ts
 * Contains some Roblox related types/enums.
 */

import { narrowCopyArray, formatNum } from "./util";

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
    OptionalCFrame = 0x1e,
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
    value: EnumItem
}

type RobloxReferent = {
    type: DataType.Referent,
    value: CoreInstance
}

type RobloxColor3uint8 = {
    type: DataType.Color3uint8,
    value: Color3uint8
}

type RobloxNumberSequence = {
    type: DataType.NumberSequence,
    value: NumberSequence
}

type RobloxColorSequence = {
    type: DataType.ColorSequence,
    value: ColorSequence
}

type RobloxNumberRange = {
    type: DataType.NumberRange,
    value: NumberRange
}

type RobloxRect = {
    type: DataType.Rect,
    value: Rect
}

type RobloxPhysicalProperties = {
    type: DataType.PhysicalProperties,
    value: PhysicalProperties
}

type RobloxInt64 = {
    type: DataType.Int64,
    value: bigint
}

type RobloxSharedString = {
    type: DataType.SharedString,
    value: SharedStringValue
}

type RobloxBytecode = {
    type: DataType.Bytecode,
    value: string
}

type RobloxUniqueId = {
    type: DataType.UniqueId,
    value: UniqueId
}

type RobloxFont = {
    type: DataType.Font,
    value: Font
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
    | RobloxNumberSequence
    | RobloxColorSequence
    | RobloxNumberRange
    | RobloxRect
    | RobloxPhysicalProperties
    | RobloxInt64
    | RobloxSharedString
    | RobloxBytecode
    | RobloxUniqueId
    | RobloxFont
;

export type SharedString = {
    hash: string,
    sharedString: string
}

/**
 * Represents a single Roblox Instance.
 * @example const part = new Instance("Part");
 */
export class CoreInstance
{
    protected readonly _className: string;
    protected readonly _isService: boolean;
    protected readonly _props: Map<string, RobloxValue> = new Map<string, RobloxValue>();
    protected _parent?: CoreInstance;
    protected readonly _children: Set<CoreInstance> = new Set<CoreInstance>();

    /**
     * Creates a new Instance.
     * @param className the class name of this instance
     * @param isService whether or not this is a service, false by default
     */
    public constructor(className: string, isService: boolean = false)
    {
        this._className = className;
        this._isService = isService;
        
    }

    /**
     * Gets a property value. This is a copy of the value.
     * @param propName the name of the property
     * @returns The RobloxValue value of the property, or undefined. Use "type" for type safety.
     * @example
     * const sizeProp = part.getProp("size");
     * if (sizeProp?.type === DataType.Vector3)
     * {
     *     const size = sizeProp.value;
     *     ...
     * }
     */
    public getProp(propName: string): RobloxValue | undefined
    {
        const rbxValue = this._props.get(propName);
        if (!rbxValue)
        {
            return undefined;
        }

        const valueCopy = CoreInstance.copyValue(rbxValue);
        // Okay, this whole "type as number" is cheating, but TypeScript just needs to trust me on this one...
        return {type: rbxValue.type as number, value: valueCopy};
    }

    protected static copyValue(rbxValue: RobloxValue)
    {
        switch (rbxValue.type)
        {
            case DataType.Float32:
            case DataType.Int32:
            case DataType.Float64:
            case DataType.BrickColor:
            case DataType.Int64:
            case DataType.String:
            case DataType.Bool:
            case DataType.Referent:
            case DataType.Enum:
            case DataType.Bytecode:
                return rbxValue.value;
            default:
                return rbxValue.value.copy();
        }
    }

    /**
     * Sets a property value.
     * @param propName the name of the property
     * @param value The RobloxValue to set.
     * @example
     * part.setProp("size", { type: DataType.Vector3, value: new Vector3(2, 3, 4) });
     */
    public setProp(propName: string, value: RobloxValue)
    {
        this._props.set(propName, value);
    }

    /**
     * Deletes a property value. This is like resetting the property to its default.
     * @param propName the name of the property
     * @returns true if the property existed, false otherwise
     */
    public deleteProp(propName: string)
    {
        return this._props.delete(propName);
    }

    /**
     * The class name.
     */
    public get className(): string
    {
        return this._className;
    }

    /**
     * Whether or not this is a service.
     */
    public get isService(): boolean
    {
        return this._isService;
    }

    /**
     * The name of this instance.
     */
    public get name(): string
    {
        return this.getProp("Name")?.value as string ?? "";
    }

    public set name(newName: string)
    {
        this.setProp("Name", {type: DataType.String, value: newName});
    }

    /**
     * The parent of this instance. This is undefined if the parent is the root of the model.
     */
    public get parent(): CoreInstance | undefined
    {
        return this._parent;
    }

    public set parent(newParent: CoreInstance | undefined)
    {
        if (this._parent)
        {
            this._parent._children.delete(this);
        }
        if (newParent)
        {
            newParent._children.add(this);
        }
        this._parent = newParent;
    }

    /**
     * The children of this instance. This is a readonly array; you cannot change children directly.
     * You must change the parent value of child instances if you want to move them.
     */
    public get children(): readonly CoreInstance[]
    {
        return Array.from(this._children.values());
    }

    /**
     * @param className the class name
     * @returns whether or not this is an instance of the given class name.
     */
    public isA(className: string)
    {
        return this._className === className;
    }

    /**
     * Finds the first child that satisfies the given predicate.
     * @param predicate this will keep searching until the predicate returns true
     * @returns the first child that met the predicate, or undefined if none were found.
     */
    public findFirstChild(predicate: (child: CoreInstance) => boolean)
    {
        for (const child of this._children)
        {
            if (predicate(child)) return child;
        }
        return undefined;
    }

    /**
     * Finds the first descendant that satisfies the given predicate. Performs a depth-first search.
     * @param predicate this will keep searching until the predicate returns true
     * @returns the first descendant that met the predicate, or undefined if none were found.
     */
    public findFirstDescendant(predicate: (child: CoreInstance) => boolean): CoreInstance | undefined
    {
        for (const child of this._children)
        {
            if (predicate(child)) return child;
            const childResult = child.findFirstDescendant(predicate);
            if (childResult) return childResult;
        }
        return undefined;
    }

    /**
     * Gathers a list of children that satisfy the given predicate.
     * @param predicate this will include the child if the predicate returns true
     * @returns the list of children that met the predicate. This will have a length of 0 if none were found.
     */
    public findChildren(predicate: (child: CoreInstance) => boolean)
    {
        const children = [];
        for (const child of this._children)
        {
            if (predicate(child)) children.push(child);
        }
        return children;
    }

    /**
     * A title string that represents this instance for debugging purposes.
     * @returns "{name} (class:{className})"
     */
    public getTitleString()
    {
        return `${this.name} (class:${this._className})`;
    }

    public toString()
    {
        const propStrings: string[] = [];
        this._props.forEach((value, key) => {
            let valueStr: string;
            if (typeof value.value === "number")
            {
                valueStr = formatNum(value.value);
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

interface ICopyable<T>
{
    copy(): T;
}

function deepCopyArray<T>(arr: ICopyable<T>[])
{
    const copyArr = [];
    for (const val of arr)
    {
        copyArr.push(val.copy());
    }
    return copyArr;
}

export class UDim implements ICopyable<UDim>
{
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

    public copy() 
    {
        return new UDim(this.scale, this.offset);
    }
}

export class UDim2 implements ICopyable<UDim2>
{
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

    public copy() 
    {
        return new UDim2(this.x.copy(), this.y.copy());
    }
}

export class Ray implements ICopyable<Ray>
{
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

    public copy() 
    {
        return new Ray(this.origin, this.direction);
    }
}

export enum Face 
{
    Front = 0b000001,
    Bottom = 0b000010,
    Left = 0b000100,
    Back = 0b001000,
    Top = 0b010000,
    Right = 0b100000
}

export class Faces implements ICopyable<Faces>
{
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

    public copy() 
    {
        return new Faces(narrowCopyArray(this.faces));
    }
}

export enum Axis 
{
    X = 0b001,
    Y = 0b010,
    Z = 0b100
}

export class Axes implements ICopyable<Axes>
{
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

    public copy() 
    {
        return new Axes(narrowCopyArray(this.axes));
    }
}

/**
 * This treats the RGB values as floats between 0 to 1. See Color3uint8 for the 0-255 version.
 */
export class Color3 implements ICopyable<Color3>
{
    public r: number;
    public g: number;
    public b: number;

    public constructor(r: number, g: number, b: number)
    {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    /**
     * Converts a float RGB to its uint8 representation.
     * @param float a float between 0 to 1
     * @returns the uint8 form
     */
    public static floatToUint8(float: number)
    {
        return Math.round(float * 255);
    }

    public toString()
    {
        return `Color3(r: ${Color3.floatToUint8(this.r)}, g: ${Color3.floatToUint8(this.g)}, b: ${Color3.floatToUint8(this.b)})`;
    }

    public copy()
    {
        return new Color3(this.r, this.g, this.b);
    }
}

export class Color3uint8 implements ICopyable<Color3uint8>
{
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

    public copy()
    {
        return new Color3uint8(this.r, this.g, this.b);
    }
}

export class Vector2 implements ICopyable<Vector2>
{
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

    public copy()
    {
        return new Vector2(this.x, this.y);
    }
}

export class Vector3 implements ICopyable<Vector3>
{
    public x: number;
    public y: number;
    public z: number;

    public constructor(x: number, y: number, z: number)
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    /**
     * Creates a Vector3 from a given Normal direction.
     * @param normalId the normal direction
     * @returns the Vector3 with a magnitude of 1 that faces in the normal direction
     */
    public static fromNormalId(normalId: NormalId)
    {
        // See FromNormalId https://github.com/MaximumADHD/Roblox-File-Format/blob/main/DataTypes/Vector3.cs
        const coords = [0, 0, 0];
        coords[normalId.value % 3] = (normalId.value > 2 ? -1 : 1);

        return new Vector3(coords[0], coords[1], coords[2]);
    }

    /**
     * Calculates the cross product of 2 Vector3's.
     * @param other the other Vector3
     * @returns the resultant cross product
     */
    public cross(other: Vector3)
    {
        const crossX = this.y * other.z - other.y * this.z;
        const crossY = this.z * other.x - other.z * this.x;
        const crossZ = this.x * other.y - other.x * this.y;

        return new Vector3(crossX, crossY, crossZ);
    }

    public toString()
    {
        return `Vector3(x: ${formatNum(this.x)}, y: ${formatNum(this.y)}, z: ${formatNum(this.z)})`;
    }

    public copy()
    {
        return new Vector3(this.x, this.y, this.z);
    }
}

export class CFrame implements ICopyable<CFrame>
{
    public position: Vector3;
    public orientation: Array<number>;

    public constructor(position: Vector3, orientation: Array<number>)
    {
        this.position = position;
        this.orientation = orientation;
    }

    public toString()
    {
        return `CFrame(position: ${this.position}, orientation: [${this.orientation.map(formatNum).join(", ")}])`;
    }

    public copy()
    {
        return new CFrame(this.position.copy(), narrowCopyArray(this.orientation));
    }
}

export class NumberSequence implements ICopyable<NumberSequence>
{
    public keypoints: NumberSequenceKeypoint[];

    public constructor(keypoints: NumberSequenceKeypoint[])
    {
        this.keypoints = keypoints;
    }

    public toString()
    {
        return `NumberSequence(keypoints: ${this.keypoints.join(", ")})`;
    }

    public copy()
    {
        return new NumberSequence(deepCopyArray(this.keypoints));
    }
}

export class NumberSequenceKeypoint implements ICopyable<NumberSequenceKeypoint>
{
    public time: number;
    public value: number;
    public envelope: number;

    public constructor(time: number, value: number, envelope: number)
    {
        this.time = time;
        this.value = value;
        this.envelope = envelope;
    }

    public toString()
    {
        return `NumberSequenceKeypoint(time: ${formatNum(this.time)}, value: ${formatNum(this.value)}, envelope: ${formatNum(this.envelope)})`;
    }

    public copy()
    {
        return new NumberSequenceKeypoint(this.time, this.value, this.envelope);
    }
}

export class ColorSequence implements ICopyable<ColorSequence>
{
    public keypoints: ColorSequenceKeypoint[];

    public constructor(keypoints: ColorSequenceKeypoint[])
    {
        this.keypoints = keypoints;
    }

    public toString()
    {
        return `ColorSequence(keypoints: ${this.keypoints.join(", ")})`;
    }

    public copy()
    {
        return new ColorSequence(deepCopyArray(this.keypoints));
    }
}

export class ColorSequenceKeypoint implements ICopyable<ColorSequenceKeypoint>
{
    public time: number;
    public color: Color3;

    public constructor(time: number, color: Color3)
    {
        this.time = time;
        this.color = color;
    }

    public toString()
    {
        return `ColorSequenceKeypoint(time: ${formatNum(this.time)}, color: ${this.color})`;
    }

    public copy()
    {
        return new ColorSequenceKeypoint(this.time, this.color.copy());
    }
}

export class NumberRange implements ICopyable<NumberRange>
{
    public min: number;
    public max: number;

    public constructor(min: number, max: number)
    {
        this.min = min;
        this.max = max;
    }

    public toString()
    {
        return `NumberRange(min: ${formatNum(this.min)}, max: ${formatNum(this.max)})`;
    }

    public copy()
    {
        return new NumberRange(this.min, this.max);
    }
}

export class Rect implements ICopyable<Rect>
{
    public min: Vector2;
    public max: Vector2;

    public constructor(min: Vector2, max: Vector2)
    {
        this.min = min;
        this.max = max;
    }

    public toString()
    {
        return `Rect(min: ${this.min}, max: ${this.max})`;
    }

    public copy()
    {
        return new Rect(this.min.copy(), this.max.copy());
    }
}

export class PhysicalProperties implements ICopyable<PhysicalProperties>
{
    public density: number;
    public friction: number;
    public elasticity: number;
    public frictionWeight: number;
    public elasticityWeight: number;

    public constructor(density: number, friction: number, elasticity: number, frictionWeight: number, elasticityWeight: number)
    {
        this.density = density;
        this.friction = friction;
        this.elasticity = elasticity;
        this.frictionWeight = frictionWeight;
        this.elasticityWeight = elasticityWeight;
    }

    public toString()
    {
        return `PhysicalProperties(density: ${formatNum(this.density)}, friction: ${formatNum(this.friction)}, elasticity: ${formatNum(this.elasticity)}, frictionWeight: ${formatNum(this.frictionWeight)}, elasticityWeight: ${formatNum(this.elasticityWeight)})`;
    }

    public copy()
    {
        return new PhysicalProperties(this.density, this.friction, this.elasticity, this.frictionWeight, this.elasticityWeight);
    }
}

export class SharedStringValue implements ICopyable<SharedStringValue>
{
    public index: number;

    public constructor(index: number)
    {
        this.index = index;
    }

    public toString()
    {
        return `SharedString(index: ${this.index})`;
    }

    public copy()
    {
        return new SharedStringValue(this.index);
    }
}

export class UniqueId implements ICopyable<UniqueId>
{
    public index: number;
    public time: number;
    public random: bigint;

    public constructor(index: number, time: number, random: bigint)
    {
        this.index = index;
        this.time = time;
        this.random = random;
    }

    public toString()
    {
        // Formats it like how its encoded in the .xml format.
        return `${(BigInt.asUintN(63, this.random)).toString(16).padStart(16, "0")}${this.time.toString(16).padStart(8, "0")}${this.index.toString(16).padStart(8, "0")}`;
    }

    public copy()
    {
        return new UniqueId(this.index, this.time, this.random);
    }
}

export class Font implements ICopyable<Font>
{
    public family: string;
    public weight: number;
    public style: number;
    public cachedFaceId: string;

    public constructor(family: string, weight: number, style: number, cachedFaceId: string)
    {
        this.family = family;
        this.weight = weight;
        this.style = style;
        this.cachedFaceId = cachedFaceId;
    }

    public toString()
    {
        return `Font(family: ${this.family}, weight: ${this.weight}, style: ${this.style}, cachedFaceId: ${this.cachedFaceId || "<none>"})`;
    }

    public copy()
    {
        return new Font(this.family, this.weight, this.style, this.cachedFaceId);
    }
}

// I will auto generate the stuff below and it will be awesome
export class EnumItem {
    protected readonly _name: string;
    public get name() {return this._name;}
    protected readonly _value: number;
    public get value() {return this._value;}
    protected constructor(name: string, value: number) {this._name = name, this._value = value;}
    public toString() {return this._name !== "" ? this._name : this._value.toString();}
    public static makeUnknownEnum(value: number) {return new EnumItem("", value);}
}

export class AccessModifierType extends EnumItem {
    public static readonly Allow = new AccessModifierType("Allow", 0);
    public static readonly Deny = new AccessModifierType("Deny", 1);
    public static get items() {return [AccessModifierType.Allow, AccessModifierType.Deny];}
    public static fromValue(value: number) { return AccessModifierType.items.find((item) => item._value === value); }
}

export class NormalId extends EnumItem {
    public static readonly Right = new NormalId("Right", 0);
    public static readonly Top = new NormalId("Top", 1);
    public static readonly Back = new NormalId("Back", 2);
    public static readonly Left = new NormalId("Left", 3);
    public static readonly Bottom = new NormalId("Bottom", 4);
    public static readonly Front = new NormalId("Front", 5);
    public static get items() {return [NormalId.Right, NormalId.Top, NormalId.Back, NormalId.Left, NormalId.Bottom, NormalId.Front];}
    public static fromValue(value: number) { return NormalId.items.find((item) => item._value === value); }
}

function getEnumMap() {
    const map = new Map<string, (value: number) => EnumItem | undefined>();
    map.set("AudioDeviceInput,AccessType", AccessModifierType.fromValue);
    map.set("Texture,Face", NormalId.fromValue);
    return map;
}

export type EnumFactory = (value: number) => EnumItem | undefined;

export class EnumMap {
    protected readonly _map: Map<string, EnumFactory> = getEnumMap();
    public getFactory(className: string, propName: string): EnumFactory | undefined {
        return this._map.get(`${className},${propName}`);
    }
}