/**
 * @author https://github.com/fiveman1
 * Contains some Roblox related types/enums.
 */

import { NameToClass } from "../generated/generated_types";
import { narrowCopyArray, formatNum } from "./util";
import blake2b from "blake2b";

/**
 * See https://dom.rojo.space/binary#data-types
 */
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
    OptionalCFrame = 0x1e,
    UniqueId = 0x1f,
    Font = 0x20,
    SecurityCapabilities = 0x21
}

type RobloxString = {
    type: DataType.String
    value: string
}

type RobloxBool = {
    type: DataType.Bool
    value: boolean
}

type RobloxInt32 = {
    type: DataType.Int32
    value: number
}

type RobloxFloat32 = {
    type: DataType.Float32
    value: number
}

type RobloxFloat64 = {
    type: DataType.Float64
    value: number
}

type RobloxUDim = {
    type: DataType.UDim
    value: UDim
}

type RobloxUDim2 = {
    type: DataType.UDim2
    value: UDim2
}

type RobloxRay = {
    type: DataType.Ray
    value: Ray
}

type RobloxFaces = {
    type: DataType.Faces
    value: Faces
}

type RobloxAxes = {
    type: DataType.Axes
    value: Axes
}

type RobloxBrickColor = {
    type: DataType.BrickColor
    value: number
}

type RobloxColor3 = {
    type: DataType.Color3
    value: Color3
}

type RobloxVector2 = {
    type: DataType.Vector2
    value: Vector2
}

type RobloxVector3 = {
    type: DataType.Vector3
    value: Vector3
}

type RobloxCFrame = {
    type: DataType.CFrame
    value: CFrame
}

type RobloxEnum = {
    type: DataType.Enum
    value: EnumItem
}

type RobloxReferent = {
    type: DataType.Referent
    value: CoreInstance
}

type RobloxColor3uint8 = {
    type: DataType.Color3uint8
    value: Color3
}

type RobloxVector3in16 = {
    type: DataType.Vector3int16
    value: Vector3
}

type RobloxNumberSequence = {
    type: DataType.NumberSequence
    value: NumberSequence
}

type RobloxColorSequence = {
    type: DataType.ColorSequence
    value: ColorSequence
}

type RobloxNumberRange = {
    type: DataType.NumberRange
    value: NumberRange
}

type RobloxRect = {
    type: DataType.Rect
    value: Rect
}

type RobloxPhysicalProperties = {
    type: DataType.PhysicalProperties
    value: PhysicalProperties
}

type RobloxInt64 = {
    type: DataType.Int64
    value: bigint
}

type RobloxSharedString = {
    type: DataType.SharedString
    value: SharedStringValue
}

type RobloxBytecode = {
    type: DataType.Bytecode
    value: string
}

type RobloxOptionalCFrame = {
    type: DataType.OptionalCFrame
    value: CFrame
}

type RobloxUniqueId = {
    type: DataType.UniqueId
    value: UniqueId
}

type RobloxFont = {
    type: DataType.Font
    value: RBXMFont
}

type RobloxSecurityCapabilities = {
    type: DataType.SecurityCapabilities
    value: bigint
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
    | RobloxVector3in16
    | RobloxNumberSequence
    | RobloxColorSequence
    | RobloxNumberRange
    | RobloxRect
    | RobloxPhysicalProperties
    | RobloxInt64
    | RobloxSharedString
    | RobloxBytecode
    | RobloxOptionalCFrame
    | RobloxUniqueId
    | RobloxFont
    | RobloxSecurityCapabilities
;

type PropKeyType = {
    [DataType.String]: string
    [DataType.Bool]: boolean
    [DataType.Int32]: number
    [DataType.Float32]: number
    [DataType.Float64]: number
    [DataType.UDim]: UDim
    [DataType.UDim2]: UDim2
    [DataType.Ray]: Ray
    [DataType.Faces]: Faces
    [DataType.Axes]: Axes
    [DataType.BrickColor]: number
    [DataType.Color3]: Color3
    [DataType.Vector2]: Vector2
    [DataType.Vector3]: Vector3
    [DataType.CFrame]: CFrame
    [DataType.Enum]: EnumItem
    [DataType.Referent]: CoreInstance
    [DataType.Color3uint8]: Color3
    [DataType.Vector3int16]: Vector3
    [DataType.NumberSequence]: NumberSequence
    [DataType.ColorSequence]: ColorSequence
    [DataType.NumberRange]: NumberRange
    [DataType.Rect]: Rect
    [DataType.PhysicalProperties]: PhysicalProperties
    [DataType.Int64]: bigint
    [DataType.SharedString]: SharedStringValue
    [DataType.Bytecode]: string
    [DataType.OptionalCFrame]: CFrame
    [DataType.UniqueId]: UniqueId
    [DataType.Font]: RBXMFont
    [DataType.SecurityCapabilities]: bigint
}

export abstract class ChildContainer
{
    protected readonly _children: Set<CoreInstance> = new Set<CoreInstance>();

    /**
     * Finds the first child that satisfies the given predicate.
     * @param predicate this will keep searching until the predicate returns true
     * @returns the first child that met the predicate, or undefined if none were found.
     */
    public FindFirstChild(predicate: (child: CoreInstance) => boolean)
    {
        for (const child of this._children)
        {
            if (predicate(child)) return child;
        }
        return undefined;
    }

    /**
     * Finds the first child of a given class.
     * @param className the class name
     * @param predicate this will keep searching until the predicate returns true
     * @returns the first child of the given class or undefined
     */
    public FindFirstChildOfClass<T extends keyof NameToClass>(className: T, predicate?: (child: NameToClass[T]) => boolean): NameToClass[T] | undefined
    {
        return this.FindFirstChild((child) => child.IsA(className) && (!predicate || predicate(child))) as NameToClass[T];
    }

    /**
     * Finds the first descendant that satisfies the given predicate. Performs a depth-first search.
     * @param predicate this will keep searching until the predicate returns true
     * @returns the first descendant that met the predicate, or undefined if none were found.
     */
    public FindFirstDescendant(predicate: (child: CoreInstance) => boolean): CoreInstance | undefined
    {
        for (const child of this._children)
        {
            if (predicate(child)) return child;
            const childResult = child.FindFirstDescendant(predicate);
            if (childResult) return childResult;
        }
        return undefined;
    }

    /**
     * Finds the first descendant of a given class. Performs a depth-first search.
     * @param className the class name
     * @param predicate this will keep searching until the predicate returns true
     * @returns the first descendant of the given class or undefined
     */
    public FindFirstDescendantOfClass<T extends keyof NameToClass>(className: T, predicate?: (child: NameToClass[T]) => boolean): NameToClass[T] | undefined
    {
        return this.FindFirstDescendant((child) => child.IsA(className) && (!predicate || predicate(child))) as NameToClass[T];
    }

    /**
     * Gathers a list of children that satisfy the given predicate.
     * @param predicate this will include the child if the predicate returns true
     * @returns the list of children that met the predicate, this will have a length of 0 if none were found.
     */
    public FindChildren(predicate: (child: CoreInstance) => boolean)
    {
        const children = [];
        for (const child of this._children)
        {
            if (predicate(child)) children.push(child);
        }
        return children;
    }

    /**
     * Gathers a list of children that are of the given class.
     * @param predicate this will include the child if the predicate returns true
     * @returns the list of children, this will have a length of 0 if none were found.
     */
    public FindChildrenOfClass<T extends keyof NameToClass>(className: T, predicate?: (child: NameToClass[T]) => boolean): NameToClass[T][]
    {
        return this.FindChildren((child) => child.IsA(className) && (!predicate || predicate(child))) as NameToClass[T][];
    }

    /**
     * Gathers a list of descendants that satisfy the given predicate.
     * @param predicate this will include the descendant if the predicate returns true
     * @returns the list of descendants that met the predicate, this will have a length of 0 if none were found.
     */
    public FindDescendants(predicate: (child: CoreInstance) => boolean): CoreInstance[]
    {
        const descendants = [];
        for (const child of this._children)
        {
            if (predicate(child)) descendants.push(child);
            const childResult = child.FindDescendants(predicate);
            for (const descendant of childResult)
            {
                descendants.push(descendant);
            }
        }
        return descendants;
    }

    /**
     * Returns an array of all the instances that are a descendant of this
     * @returns an array of all descendants
     */
    public GetAllDescendants(): CoreInstance[]
    {
        const descendants: CoreInstance[] = [];
        this.GetAllDescendantsHelper(descendants);
        return descendants;
    }

    protected GetAllDescendantsHelper(descendants: CoreInstance[])
    {
        for (const child of this._children)
        {
            descendants.push(child);
            child.GetAllDescendantsHelper(descendants);
        }
    }

     /**
     * Gathers a list of descendants that are of the given class.
     * @param predicate this will include the descendant if the predicate returns true
     * @returns the list of descendants, this will have a length of 0 if none were found.
     */
    public FindDescendantsOfClass<T extends keyof NameToClass>(className: T, predicate?: (child: NameToClass[T]) => boolean): NameToClass[T][]
    {
        return this.FindDescendants((child) => child.IsA(className) && (!predicate || predicate(child))) as NameToClass[T][];
    }
}

/**
 * Represents a single Roblox Instance. This is the base class of every Roblox object.
 */
export class CoreInstance extends ChildContainer
{
    protected readonly _classNameList: string[] = [];
    protected _isService: boolean;
    protected readonly _props: Map<string, RobloxValue> = new Map<string, RobloxValue>();
    protected _parent?: CoreInstance = undefined;
    protected _destroyed: boolean = false;

    /**
     * Creates a new Instance.
     * @param isService whether or not this is a service, false by default
     */
    public constructor(isService: boolean = false, className?: string)
    {
        super();
        if (className) 
        {
            this.addClassName(className);
        }
        this._isService = isService;
    }

    /**
     * Derived classes must use this to add their class name to the list of class
     * of this instance names in order for inheritance checks to work properly.
     * @param className the class name
     */
    protected addClassName(className: string)
    {
        this._classNameList.push(className);
    }

    /**
     * The children of this Instance. This is a readonly array; you cannot change children directly.
     * You must change the parent value of child instances if you want to move them.
     */
    public get Children(): readonly CoreInstance[]
    {
        return Array.from(this._children.values());
    }

    /**
     * Read-only access to the raw property data. Meant for internal use.
     */
    public get Props(): ReadonlyMap<string, RobloxValue>
    {
        return this._props;
    }

    /**
     * Clears out all property data. Meant for internal use.
     */
    public ResetProps()
    {
        this._props.clear();
    }

    /**
     * Gets a property value. This is a copy of the value.
     * @param propName the name of the property
     * @param type the DataType of the property
     * @returns The value of the property, or undefined.
     * @example
     * const size: Vector3 | undefined = part.GetProp("size", DataType.Vector3);
     */
    public GetProp<T extends DataType>(propName: string, type: T): PropKeyType[T] | undefined
    {
        const prop = this._props.get(propName);
        if (prop?.type === type)
        {
            return CoreInstance.CopyValue(prop) as PropKeyType[T];
        }
        return undefined;
    }

    protected static CopyValue(rbxValue: RobloxValue)
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
            case DataType.SecurityCapabilities:
                return rbxValue.value;
            default:
                return rbxValue.value.Copy();
        }
    }

    /**
     * Sets a property value.
     * @param propName the name of the property
     * @param type: the DataType of the property
     * @param value The RobloxValue to set, or undefined to reset the property to its default value.
     * @example
     * part.SetProp("size", DataType.Vector3, new Vector3(2, 3, 4));
     */
    public SetProp<T extends DataType>(propName: string, type: T, value: PropKeyType[T] | undefined)
    {
        if (value === undefined)
        {
            this._props.delete(propName);
            return;
        }
        const valueCopy = CoreInstance.CopyValue({ type: type, value: value } as RobloxValue) as PropKeyType[T];
        this._props.set(propName, { type: type, value: valueCopy } as RobloxValue);
    }

    /**
     * The class name.
     */
    public get ClassName(): string
    {
        return this._classNameList[this._classNameList.length - 1];
    }

    /**
     * The list of class names that this inherits from, stored in order from
     * highest base class to lowest derived class.
     */
    public get ClassNameList(): readonly string[]
    {
        return this._classNameList;
    }

    /**
     * Whether or not this is a service.
     */
    public get IsService(): boolean
    {
        return this._isService;
    }

    /**
     * The name of this instance.
     */
    public get Name(): string
    {
        return this.GetProp("Name", DataType.String) ?? "";
    }

    public set Name(newName: string)
    {
        this.SetProp("Name", DataType.String, newName);
    }

    /**
     * The parent of this instance. This is undefined if the parent is the root of the model.
     */
    public get Parent(): CoreInstance | undefined
    {
        return this._parent;
    }

    public set Parent(newParent: CoreInstance)
    {
        if (this._parent === newParent)
        {
            return;
        }

        if (this._parent)
        {
            this._parent._children.delete(this);
        }
        newParent._children.add(this);
        this._parent = newParent;
    }

    /**
     * This removes the instance that this is parented to. This is mainly to allow
     * setting an instance's parent to be the root of the model. You probably shouldn't be
     * calling this since this can lead to corruption if not used properly.
     */
    public RemoveParent()
    {
        if (this._parent)
        {
            this._parent._children.delete(this);
        }
        this._parent = undefined;
    }

    /**
     * @param className the class name
     * @returns whether or not this is an instance of the given class name.
     */
    public IsA<T extends keyof NameToClass>(className: T): this is NameToClass[T]
    {
        return this._classNameList.includes(className);
    }

    /**
     * This is like IsA but allows any string to be used. Does not provide strong typing unlike IsA.
     * @param className the class name
     * @returns whether or not this is an instance of the given class name.
     */
    public IsAUnsafe(className: string)
    {
        return this._classNameList.includes(className);
    }

    /**
     * A title string that represents this instance for debugging purposes.
     * @returns \{Class name\} "\{Name\}"
     */
    public GetTitleString()
    {
        return `${this.ClassName} "${this.Name}"`;
    }

    /**
     * This destroys the instance. Once you call this, you cannot use this instance
     * or any of its descendants again. If you try to, bad things will happen...
     */
    public Destroy()
    {
        this.RemoveParent();
        this._destroyed = true;
        for (const child of this.Children)
        {
            child.Destroy();
        }
    }

    public get IsDestroyed()
    {
        return this._destroyed;
    }

    public toString()
    {
        const propStrings: string[] = [];
        this._props.forEach((value, key) => {
            if (key.toLowerCase() === "name")
            {
                return;
            }
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
        return `${this.GetTitleString()} {${propStrings.join(", ")}}`;
    }
}

interface ICopyable
{
    /**
     * Returns a (deep) copy of this object.
     */
    Copy(): this;
}

function deepCopyArray<T extends ICopyable>(arr: T[])
{
    const copyArr = [];
    for (const val of arr)
    {
        copyArr.push(val.Copy());
    }
    return copyArr;
}

/**
 * Used to describe GUI properties.
 */
export class UDim implements ICopyable
{
    public Scale: number;
    public Offset: number;

    public constructor(scale: number, offset: number)
    {
        this.Scale = scale;
        this.Offset = offset;
    }

    public toString()
    {
        return `UDim(Scale: ${formatNum(this.Scale)}, Offset: ${formatNum(this.Offset)})`;
    }

    public Copy()
    {
        return new UDim(this.Scale, this.Offset) as this;
    }
}

/**
 * Defines the dimensions of a GUI property.
 */
export class UDim2 implements ICopyable
{
    public X: UDim;
    public Y: UDim;

    public constructor(x: UDim, y: UDim)
    {
        this.X = x;
        this.Y = y;
    }

    public toString()
    {
        return `UDim2(X: ${this.X}, Y: ${this.Y})`;
    }

    public Copy() 
    {
        return new UDim2(this.X.Copy(), this.Y.Copy()) as this;
    }
}

/**
 * A ray with a point and direction.
 */
export class Ray implements ICopyable
{
    public Origin: Vector3;
    public Direction: Vector3;

    public constructor(origin: Vector3, direction: Vector3)
    {
        this.Origin = origin;
        this.Direction = direction;
    }

    public toString()
    {
        return `Ray(Origin: ${this.Origin}, Direction: ${this.Direction})`;
    }

    public Copy() 
    {
        return new Ray(this.Origin, this.Direction) as this;
    }
}

/**
 * The enum for Face as it is stored in .rbxm format.
 */
export enum RBXMFace 
{
    Front = 0b000001,
    Bottom = 0b000010,
    Left = 0b000100,
    Back = 0b001000,
    Top = 0b010000,
    Right = 0b100000
}

/**
 * A list of Face values.
 */
export class Faces implements ICopyable
{
    public Faces: RBXMFace[];

    public constructor(...faces: RBXMFace[])
    {
        this.Faces = faces;
    }

    public toString()
    {
        if (this.Faces.length === 0)
        {
            return "Faces(<none>)";
        }
        else
        {
            return `Faces(${this.Faces.map((face) => RBXMFace[face]).join(", ")})`;
        }
    }

    public Copy() 
    {
        return new Faces(...narrowCopyArray(this.Faces)) as this;
    }
}

/**
 * The enum for Axis as it is stored in .rbxm format.
 */
export enum RBXMAxis 
{
    X = 0b001,
    Y = 0b010,
    Z = 0b100
}

/**
 * A list of Axis values
 */
export class Axes implements ICopyable
{
    public Axes: RBXMAxis[];

    public constructor(...axes: RBXMAxis[])
    {
        this.Axes = axes;
    }

    public toString()
    {
        if (this.Axes.length === 0)
        {
            return "Axes(<none>)";
        }
        else
        {
            return `Axes(${this.Axes.map((axis) => RBXMAxis[axis]).join(", ")})`;
        }
    }

    public Copy() 
    {
        return new Axes(...narrowCopyArray(this.Axes)) as this;
    }
}

/**
 * An RGB value, this treats the RGB values as floats between 0 to 1
 */
export class Color3 implements ICopyable
{
    public R: number;
    public G: number;
    public B: number;

    public constructor(r: number, g: number, b: number)
    {
        this.R = r;
        this.G = g;
        this.B = b;
    }

    /**
     * Converts a float RGB to its uint8 representation.
     * @param float a float between 0 to 1
     * @returns the uint8 form
     */
    public static FloatToUint8(float: number)
    {
        return Math.round(float * 255);
    }

    /**
     * Creates a Color3 from 0-255 RGB values.
     * @param r red
     * @param g green
     * @param b blue
     * @returns a Color3
     */
    public static FromRGB(r: number, g: number, b: number)
    {
        return new Color3(r / 255, g / 255, b / 255);
    }

    public toString()
    {
        return `Color3(R: ${Color3.FloatToUint8(this.R)}, G: ${Color3.FloatToUint8(this.G)}, B: ${Color3.FloatToUint8(this.B)})`;
    }

    public Copy()
    {
        return new Color3(this.R, this.G, this.B) as this;
    }
}

/**
 * A 2D vector.
 */
export class Vector2 implements ICopyable
{
    public X: number;
    public Y: number;

    public constructor(x: number, y: number)
    {
        this.X = x;
        this.Y = y;
    }

    /**
     * The magnitude of this Vector2.
     */
    public get Magnitude()
    {
        return Math.sqrt(this.Dot(this));
    }

    /**
     * Calculates the cross product of two Vector2's.
     * @param other the other Vector2
     * @returns the resultant cross product
     */
    public Cross(other: Vector2)
    {
        return new Vector2(this.X * other.Y, this.Y * other.X);
    }

    /**
     * Calculates the dot product of two Vector2's.
     * @param other the other Vector2
     * @returns the dot product
     */
    public Dot(other: Vector2)
    {
        const dotX = this.X * other.X;
        const dotY = this.Y * other.Y;

        return dotX + dotY;
    }

    /**
     * Adds two Vector2's, returns a new Vector2
     * @param other the other Vector2
     * @returns the result of the addition as a new Vector2
     */
    public Add(other: Vector2)
    {
        return new Vector2(this.X + other.X, this.Y + other.Y);
    }

    /**
     * Subtracts two Vector2's, returns a new Vector2
     * @param other the other Vector2
     * @returns the result of the subtraction as a new Vector2
     */
    public Subtract(other: Vector2)
    {
        return new Vector2(this.X - other.X, this.Y - other.Y);
    }

    /**
     * Multiplies this Vector2 by a scalar amount.
     * @param scalar a scalar amount
     * @returns the result of the multiplication as a new Vector2
     */
    public Multiply(scalar: number)
    {
        return new Vector2(this.X * scalar, this.Y * scalar);
    }

    /**
     * Divides this Vector2 by a scalar amount.
     * @param scalar a scalar amount
     * @returns the result of the division as a new Vector2
     */
    public Divide(scalar: number)
    {
        return new Vector2(this.X / scalar, this.Y / scalar);
    }

    public toString()
    {
        return `Vector2(X: ${formatNum(this.X)}, Y: ${formatNum(this.Y)})`;
    }

    public Copy()
    {
        return new Vector2(this.X, this.Y) as this;
    }
}

/**
 * A 3D vector.
 */
export class Vector3 implements ICopyable
{
    public X: number;
    public Y: number;
    public Z: number;

    public constructor(x: number, y: number, z: number)
    {
        this.X = x;
        this.Y = y;
        this.Z = z;
    }

    /**
     * Unit vector that points in the positive X direction
     */
    public static get XAxis() { return new Vector3(1, 0, 0); }
    
    /**
     * Unit vector that points in the positive Y direction
     */
    public static get YAxis() { return new Vector3(0, 1, 0); }
    
    /**
     * Unit vector that points in the positive Z direction
     */
    public static get ZAxis() { return new Vector3(0, 0, 1); }

    /**
     * The magnitude of this Vector3.
     */
    public get Magnitude()
    {
        return Math.sqrt(this.Dot(this));
    }

    /**
     * Calculates the cross product of two Vector3's.
     * @param other the other Vector3
     * @returns the resultant cross product
     */
    public Cross(other: Vector3)
    {
        const crossX = this.Y * other.Z - other.Y * this.Z;
        const crossY = this.Z * other.X - other.Z * this.X;
        const crossZ = this.X * other.Y - other.X * this.Y;

        return new Vector3(crossX, crossY, crossZ);
    }

    /**
     * Calculates the dot product of two Vector3's.
     * @param other the other Vector3
     * @returns the dot product
     */
    public Dot(other: Vector3)
    {
        const dotX = this.X * other.X;
        const dotY = this.Y * other.Y;
        const dotZ = this.Z * other.Z;

        return dotX + dotY + dotZ;
    }

    /**
     * Adds two Vector3's, returns a new Vector3
     * @param other the other Vector3
     * @returns the result of the addition as a new Vector3
     */
    public Add(other: Vector3)
    {
        return new Vector3(this.X + other.X, this.Y + other.Y, this.Z + other.Z);
    }

    /**
     * Subtracts two Vector3's, returns a new Vector3
     * @param other the other Vector3
     * @returns the result of the subtraction as a new Vector3
     */
    public Subtract(other: Vector3)
    {
        return new Vector3(this.X - other.X, this.Y - other.Y, this.Z - other.Z);
    }

    /**
     * Multiplies this Vector3 by a scalar amount.
     * @param scalar a scalar amount
     * @returns the result of the multiplication as a new Vector3
     */
    public Multiply(scalar: number)
    {
        return new Vector3(this.X * scalar, this.Y * scalar, this.Z * scalar);
    }

    /**
     * Divides this Vector3 by a scalar amount.
     * @param scalar a scalar amount
     * @returns the result of the division as a new Vector3
     */
    public Divide(scalar: number)
    {
        return new Vector3(this.X / scalar, this.Y / scalar, this.Z / scalar);
    }

    public toString()
    {
        return `Vector3(X: ${formatNum(this.X)}, Y: ${formatNum(this.Y)}, Z: ${formatNum(this.Z)})`;
    }

    public Copy()
    {
        return new Vector3(this.X, this.Y, this.Z) as this;
    }
}

// Shoutout to https://github.com/MaximumADHD/Roblox-File-Format/blob/main/DataTypes/CFrame.cs

/**
 * A coordinate frame.
 */
export class CFrame implements ICopyable
{
    public Position: Vector3;
    public Orientation: Array<number>;

    public constructor(position: Vector3, orientation: Array<number>)
    {
        this.Position = position;
        this.Orientation = orientation;
    }

    /**
     * The identity CFrame
     */
    public static get Identity() { return new CFrame(new Vector3(0, 0, 0), [1, 0, 0, 0, 1, 0, 0, 0, 1]); }

    public toString()
    {
        return `CFrame(Position: ${this.Position}, Orientation: [${this.Orientation.map(formatNum).join(", ")}])`;
    }

    public Copy()
    {
        return new CFrame(this.Position.Copy(), narrowCopyArray(this.Orientation)) as this;
    }
}

/**
 * A sequence of number keypoints.
 */
export class NumberSequence implements ICopyable
{
    public Keypoints: NumberSequenceKeypoint[];

    public constructor(...keypoints: NumberSequenceKeypoint[])
    {
        this.Keypoints = keypoints;
    }

    public toString()
    {
        return `NumberSequence(Keypoints: ${this.Keypoints.join(", ")})`;
    }

    public Copy()
    {
        return new NumberSequence(...deepCopyArray(this.Keypoints)) as this;
    }
}

/**
 * A keypoint in a number sequence.
 */
export class NumberSequenceKeypoint implements ICopyable
{
    public Time: number;
    public Value: number;
    public Envelope: number;

    public constructor(time: number, value: number, envelope: number)
    {
        this.Time = time;
        this.Value = value;
        this.Envelope = envelope;
    }

    public toString()
    {
        return `NumberSequenceKeypoint(Time: ${formatNum(this.Time)}, Value: ${formatNum(this.Value)}, Envelope: ${formatNum(this.Envelope)})`;
    }

    public Copy()
    {
        return new NumberSequenceKeypoint(this.Time, this.Value, this.Envelope) as this;
    }
}

/**
 * A sequence of color keypoints.
 */
export class ColorSequence implements ICopyable
{
    public Keypoints: ColorSequenceKeypoint[];

    public constructor(...keypoints: ColorSequenceKeypoint[])
    {
        this.Keypoints = keypoints;
    }

    public toString()
    {
        return `ColorSequence(Keypoints: ${this.Keypoints.join(", ")})`;
    }

    public Copy()
    {
        return new ColorSequence(...deepCopyArray(this.Keypoints)) as this;
    }
}

/**
 * A keypoint in a color sequence.
 */
export class ColorSequenceKeypoint implements ICopyable
{
    public Time: number;
    public Color: Color3;

    public constructor(time: number, color: Color3)
    {
        this.Time = time;
        this.Color = color;
    }

    public toString()
    {
        return `ColorSequenceKeypoint(Time: ${formatNum(this.Time)}, Color: ${this.Color})`;
    }

    public Copy()
    {
        return new ColorSequenceKeypoint(this.Time, this.Color.Copy()) as this;
    }
}

/**
 * Defines a range of numbers.
 */
export class NumberRange implements ICopyable
{
    public Min: number;
    public Max: number;

    public constructor(min: number, max: number)
    {
        this.Min = min;
        this.Max = max;
    }

    public toString()
    {
        return `NumberRange(Min: ${formatNum(this.Min)}, Max: ${formatNum(this.Max)})`;
    }

    public Copy()
    {
        return new NumberRange(this.Min, this.Max) as this;
    }
}

/**
 * Defines dimensions of a GUI object.
 */
export class Rect implements ICopyable
{
    public Min: Vector2;
    public Max: Vector2;

    public constructor(min: Vector2, max: Vector2)
    {
        this.Min = min;
        this.Max = max;
    }

    public toString()
    {
        return `Rect(Min: ${this.Min}, Max: ${this.Max})`;
    }

    public Copy()
    {
        return new Rect(this.Min.Copy(), this.Max.Copy()) as this;
    }
}

/**
 * Represents the physical properties of a part.
 */
export class PhysicalProperties implements ICopyable
{
    public Density: number;
    public Friction: number;
    public Elasticity: number;
    public FrictionWeight: number;
    public ElasticityWeight: number;

    public constructor(density: number, friction: number, elasticity: number, frictionWeight: number, elasticityWeight: number)
    {
        this.Density = density;
        this.Friction = friction;
        this.Elasticity = elasticity;
        this.FrictionWeight = frictionWeight;
        this.ElasticityWeight = elasticityWeight;
    }

    public toString()
    {
        return `PhysicalProperties(Density: ${formatNum(this.Density)}, Friction: ${formatNum(this.Friction)}, Elasticity: ${formatNum(this.Elasticity)}, FrictionWeight: ${formatNum(this.FrictionWeight)}, ElasticityWeight: ${formatNum(this.ElasticityWeight)})`;
    }

    public Copy()
    {
        return new PhysicalProperties(this.Density, this.Friction, this.Elasticity, this.FrictionWeight, this.ElasticityWeight) as this;
    }
}

/**
 * Used by the Roblox file format to store large strings that multiple instances
 * have the same reference to.
 */
export class SharedString
{
    public Value: string;
    public Hash: Uint8Array;

    public constructor(value: string, hash?: string)
    {
        this.Value = value;
        if (hash)
        {
            this.Hash = Buffer.from(hash, "binary");
        }
        else
        {
            const input = Buffer.from(this.Value);
            this.Hash = blake2b(16).update(input).digest();
        }
    }
}

/**
 * Represents an index in the shared string array of the .rbxm, which corresponds to a string.
 */
export class SharedStringValue implements ICopyable
{
    public Index: number;

    public constructor(index: number)
    {
        this.Index = index;
    }

    public toString()
    {
        return `SharedString(Index: ${this.Index})`;
    }

    public Copy()
    {
        return new SharedStringValue(this.Index) as this;
    }
}

/**
 * Represents a Unique ID used to refer to an instance.
 */
export class UniqueId implements ICopyable
{
    public Index: number;
    public Time: number;
    public Random: bigint;

    public constructor(index: number, time: number, random: bigint)
    {
        this.Index = index;
        this.Time = time;
        this.Random = random;
    }

    public toString()
    {
        // Formats it like how its encoded in the .xml format.
        return `${(BigInt.asUintN(63, this.Random)).toString(16).padStart(16, "0")}${this.Time.toString(16).padStart(8, "0")}${this.Index.toString(16).padStart(8, "0")}`;
    }

    public Copy()
    {
        return new UniqueId(this.Index, this.Time, this.Random) as this;
    }
}

export enum FontWeight 
{
    Thin = 100,
    ExtraLight = 200,
    Light = 300,
    Regular = 400,
    Medium = 500,
    SemiBold = 600,
    Bold = 700,
    ExtraBold = 800,
    Heavy = 900
}

export enum FontStyle
{
    Normal = 0,
    Italic = 1
}

/**
 * Represents an instance of a Roblox Font as it is stored in .rbxm format.
 */
export class RBXMFont implements ICopyable
{
    public Family: string;
    public Weight: FontWeight;
    public Style: FontStyle;
    public CachedFaceId?: string;

    public constructor(family: string, weight: FontWeight, style: FontStyle, cachedFaceId?: string)
    {
        this.Family = family;
        this.Weight = weight;
        this.Style = style;
        this.CachedFaceId = cachedFaceId;
    }

    public toString()
    {
        return `Font(Family: ${this.Family}, Weight: ${FontWeight[this.Weight]}, Style: ${FontStyle[this.Style]}, CachedFaceId: ${this.CachedFaceId || "<none>"})`;
    }

    public Copy()
    {
        return new RBXMFont(this.Family, this.Weight, this.Style, this.CachedFaceId) as this;
    }
}

/**
 * Represents an Enum with a name and value.
 */
export class EnumItem {
    protected readonly _name: string;
    protected readonly _value: number;

    protected constructor(name: string, value: number) {this._name = name, this._value = value;}

    /**
     * The name of this Enum.
     */
    public get Name() 
    {
        return this._name;
    }
    
    /**
     * The value of this Enum.
     */
    public get Value() 
    {
        return this._value;
    }
    
    public toString() 
    {
        return this._name !== "" ? this._name : this._value.toString();
    }
    
    /**
     * Allows you to construct an EnumItem that hasn't been mapped by the generated types.
     * @param value the value of the enum
     * @returns the unknown enum with the given value.
     */
    public static MakeUnknownEnum(value: number) 
    {
        return new EnumItem("", value);
    }
}
