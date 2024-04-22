/* eslint-disable @typescript-eslint/no-unused-vars */

import fs from "fs";
import { DataType } from "../lib/roblox_types";
import axios from "axios";

// JSON type descriptions

type JsonData = {
    Classes: ClassInfo[]
    Enums: EnumInfo[]
}

type EnumInfo = {
    Name: string
    Items: EnumItem[]
}

type EnumItem = {
    Name: string
    Value: number
}

type ClassInfo = {
    Superclass: string
    Name: string
    Members: Array<PropertyMember | FunctionMember | EventMember | CallbackMember>
    Tags: string[] | undefined
    Inherited: boolean
}

type ClassMember = {
    Category: string
    MemberType: string
    Name: string
    Tags: string[] | undefined
    Default: undefined | string
}

type FunctionMember = ClassMember & {
    MemberType: "Function"
}

type EventMember = ClassMember & {
    MemberType: "Event"
}

type CallbackMember = ClassMember & {
    MemberType: "Callback"
}

type PropertyMember = ClassMember & {
    MemberType: "Property"
    ValueType: {Category: "Enum" | "Primitive" | "DataType" | "Class", Name: string}
    Serialization: {
        CanLoad: boolean
        CanSave: boolean
    },
}

// Some helpers

class Tags {
    public readonly NotCreatable: boolean = false;
    public readonly Service: boolean = false;
    public readonly ReadOnly: boolean = false;
    public readonly Deprecated: boolean = false;
    public readonly Settings: boolean = false;

    public constructor(tags?: string[])
    {
        if (!tags) return;
        for (const tag of tags)
        {
            switch (tag)
            {
                case "NotCreatable":
                    this.NotCreatable = true;
                    break;
                case "Service":
                    this.Service = true;
                    break;
                case "ReadOnly":
                    this.ReadOnly = true;
                    break;
                case "Deprecated":
                    this.Deprecated = true;
                    break;
                case "Settings":
                    this.Settings = true;
                    break;
            }
        }
    }
}

const dataTypes: DataType[] = [
    DataType.CFrame,
    DataType.Color3,
    DataType.NumberRange,
    DataType.SharedString,
    DataType.ColorSequence,
    DataType.NumberSequence,
    DataType.Vector3,
    DataType.BrickColor,
    DataType.Vector2,
    DataType.Font,
    DataType.UDim2,
    DataType.Rect,
    DataType.Axes,
    DataType.Faces,
    DataType.PhysicalProperties,
    DataType.Color3uint8,
    DataType.UDim,
    DataType.Ray
    // Not parsing Vector3int16
];

const DataTypeInfo = new Map<string, string>([
    ["Content", "String"],
    ["BinaryString", "String"],
    ["ProtectedString", "String"],
    ["OptionalCoordinateFrame", "OptionalCFrame"]
]);

dataTypes.forEach((type) => DataTypeInfo.set(DataType[type], DataType[type]));

const PrimitiveInfo = new Map<string, string>([
    ["int", "Int32"],
    ["int64", "Int64"],
    ["float", "Float32"],
    ["double", "Float64"],
    ["string", "String"],
    ["bool", "Bool"]
]);

// The core of the generation

function startFile(stream: fs.WriteStream)
{
    stream.write(
`/* eslint-disable @typescript-eslint/no-unused-vars */
// Generated on ${new Date().toLocaleString()}

import { DataType, CoreInstance, EnumItem} from "../lib/roblox_types";
`
    );
}

function writeOneEnum(info: EnumInfo, stream: fs.WriteStream)
{
    stream.write(`\nexport class ${info.Name} extends EnumItem {\n`);
    for (const item of info.Items)
    {
        stream.write(`    public static readonly ${item.Name} = new ${info.Name}("${item.Name}", ${item.Value});\n`);
    }
    stream.write(`    public static get items() {return [${info.Items.map((item) => info.Name + "." + item.Name).join(", ")}];}\n`);
    stream.write(`    public static fromValue(value: number) {return ${info.Name}.items.find((item) => item._value === value);}\n`);
    stream.write("}\n");
}

function convertClassName(className: string)
{
    if (className === "Instance") return "CoreInstance";
    return className;
}

const singletons = new Set<string>([
    "Speaker",
    "Terrain",
    "ParabolaAdornment",
    "StarterPlayerScripts",
    "StarterCharacterScripts",
    "BubbleChatConfiguration",
    "ChatWindowConfiguration",
    "ChatInputBarConfiguration"
]);

function filterClass(info: ClassInfo)
{
    // Instance and Studio are special and we will not generate them
    if (info.Name === "Instance" || info.Name === "Studio") return true;
    
    // If the class is inherited by another class then we need it
    if (info.Inherited) return false;
    
    const tags = new Tags(info.Tags);
    
    // These singleton classes are special and we should generate them
    if (singletons.has(info.Name)) return false;

    // Don't need to generate settings type classes
    if (tags.Settings) return true;

    // Should generate service type classes
    if (tags.Service) return false;

    // If it's not creatable, not a service, not inherited, etc. then we don't need it
    return tags.NotCreatable;
}

function startClass(info: ClassInfo, stream: fs.WriteStream)
{
    const tags = new Tags(info.Tags);
        
    const isService = tags.Service;
    const isAbstract = tags.NotCreatable && info.Inherited && !singletons.has(info.Name);

    const superClass = convertClassName(info.Superclass);

    stream.write(`\nexport ${isAbstract ? "abstract " : ""}class ${info.Name} extends ${superClass} {\n`);
    stream.write(`    protected constructor(className${isAbstract ? "" : "?"}: string) {super(${isAbstract ? "className" : `className ?? "${info.Name}"`}${isService && superClass === "CoreInstance" ? ", true" : ""});}\n`);
    if (!isAbstract) stream.write(`    public static new() {return new ${info.Name}();}\n`);
}

function endClass(stream: fs.WriteStream)
{
    stream.write(`}\n`);
}

function filterMember(info: PropertyMember)
{
    // Skip:
    // Read only
    // Not loadable
    // Not saveable
    const tags = new Tags(info.Tags);
    return tags.ReadOnly ||
        !info.Serialization.CanLoad ||
        !(info.Serialization.CanSave || tags.Deprecated);
}

function isPascalCase(str: string)
{
    const firstChar = str.at(0);
    if (firstChar === undefined) return false;
    return firstChar === firstChar.toUpperCase();
}

function toCamelCase(str: string)
{
    return str.at(0)!.toLowerCase() + str.slice(1);
}

function toPascalCase(str: string)
{
    return str.at(0)!.toUpperCase() + str.slice(1);
}

function isMemberValid(info: PropertyMember, validMembers: Map<string, PropertyMember>)
{
    const lowerName = info.Name.toLowerCase();
    
    // These should be inherited from our custom instance class
    if (lowerName === "name" || lowerName === "parent") return false;
    
    // For some reason there are a lot of duplicate properties, like size vs. Size. We only want one. Usually the pascal case one is the correct one.
    if (!isPascalCase(info.Name) && validMembers.has(toPascalCase(info.Name))) return false;
    
    return true;
}

function writeOneProp(info: PropertyMember, stream: fs.WriteStream)
{
    let dataType;
    let castStr = "";
    switch (info.ValueType.Category)
    {
        case "Enum":
            dataType = "Enum";
            castStr = ` as ${convertClassName(info.ValueType.Name)} | undefined`;
            break;
        case "Primitive":
            dataType = PrimitiveInfo.get(info.ValueType.Name);
            break;
        case "DataType":
            dataType = DataTypeInfo.get(info.ValueType.Name);
            break;
        case "Class":
            dataType = "Referent";
            castStr = ` as ${convertClassName(info.ValueType.Name)} | undefined`;
            break;
    }

    if (!dataType)
    {
        console.log("INVALID MEMBER DATATYPE: " + info.ValueType.Name);
        console.log(info);
        return;
    }

    const propName = toCamelCase(info.Name).split(" ").join("_");
    stream.write(`    public get ${propName}() {return this.getProp("${info.Name}", DataType.${dataType})${castStr};}\n`);
    stream.write(`    public set ${propName}(value) {this.setProp("${info.Name}", DataType.${dataType}, value);}\n`);
}

// Main function

async function main()
{
    const res = await axios.get("https://raw.githubusercontent.com/MaximumADHD/Roblox-Client-Tracker/roblox/Mini-API-Dump.json");
    const data = res.data as JsonData;
    //const data = JSON.parse(fs.readFileSync("./input_files/Mini-API-Dump.json", "utf-8")) as JsonData;
    const stream = fs.createWriteStream("./src/generated/generated_types.ts", {encoding: "utf-8", flags: "w+"});
    startFile(stream);

    const propertyEnums = new Set<string>();

    const allClasses = new Map<string, ClassInfo>();
    for (const info of data.Classes)
    {
        allClasses.set(info.Name, info);
    }

    for (const info of data.Classes)
    {
        if (info.Superclass !== "Instance")
        {
            const superClass = allClasses.get(info.Superclass);
            if (superClass) superClass.Inherited = true;
        }
    }

    for (const info of data.Classes)
    {
        if (filterClass(info)) continue;
        
        startClass(info, stream);

        const validMembers = new Map<string, PropertyMember>();

        for (const member of info.Members)
        {
            if (member.MemberType !== "Property" || filterMember(member)) continue;
            if (member.ValueType.Category === "Enum")
            {
                propertyEnums.add(member.ValueType.Name);
            }
            validMembers.set(member.Name, member);
        }

        for (const member of validMembers.values())
        {
            if (isMemberValid(member, validMembers)) writeOneProp(member, stream);
        }
        
        endClass(stream);
    }

    for (const info of data.Enums)
    {
        if (propertyEnums.has(info.Name)) writeOneEnum(info, stream);
    }
    
    stream.close();
}

main();