/**
 * @author https://github.com/fiveman1
 * @file generate_data.ts
 * Generates Typescript typings for Roblox classes and enums.
 * A good portion of this is based on https://github.com/MaximumADHD/Roblox-File-Format/blob/main/Plugins/GenerateApiDump/init.server.lua
 */

/* eslint-disable @typescript-eslint/no-unused-vars */

import fs from "fs";
import { Color3, DataType } from "../lib/roblox_types";
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
    Default: string
    Serialization: {
        CanLoad: boolean
        CanSave: boolean
    }
}

// Defaults JSON

type DefaultsClass = {
    Name: string
    Props: DefaultsProp[]
}

type DefaultsProp = {
    Name: string
    Value: string
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
        if (!tags) 
        {
            return;
        }

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

const DataTypeInfo = new Map<string, string>([
    ["Content", DataType[DataType.String]],
    ["BinaryString", DataType[DataType.String]],
    ["ProtectedString", DataType[DataType.String]],
    ["OptionalCoordinateFrame", DataType[DataType.OptionalCFrame]]
]);

[
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
    DataType.UDim,
    DataType.Ray,
    DataType.UniqueId,
    DataType.Vector3int16,
    DataType.SecurityCapabilities,
    DataType.Color3uint8
]
.forEach((type) => DataTypeInfo.set(DataType[type], DataType[type]));

const PrimitiveInfo = new Map<string, string>([
    ["int", "Int32"],
    ["int64", "Int64"],
    ["float", "Float32"],
    ["double", "Float64"],
    ["string", "String"],
    ["bool", "Bool"]
]);

function formatNum(num: string)
{
    if (num.toLowerCase() === "inf") return "Infinity";

    // Use up to 5 decimal points of precision, but cut it off after that
    const fixed = Number(num).toFixed(5);
    
    const array = fixed.split(".");
    const decimal = array[1];
    let lastIndex = -1;
    for (let i = 0; i < decimal.length; ++i)
    {
        if (decimal[i] !== "0") lastIndex = i;
    }
    
    // There is no value after the decimal point
    if (lastIndex === -1) return array[0];

    // Cut off the trailing zeroes
    return array[0] + "." + decimal.slice(0, lastIndex + 1);
}

// Replaces all non-text characters in a string with their unicode equivalent (i.e. \u0001)
function replaceUnicode(str: string)
{
    let output = "";
    for (const char of str)
    {
        const ascii = char.charCodeAt(0);
        if (ascii <= 0x19 || ascii >= 0x7F)
        {
            const hex = ascii.toString(16).padStart(2, "0");
            output += `\\u00${hex}`;
        }
        else
        {
            output += char;
        }
    }
    return output;
}

function formatString(str: string)
{
    if (!str) return "\"\"";
    return `"${replaceUnicode(str).replace(/"/g, "\\\"")}"`; // Replace all quotation marks (") with an escaped version (\")
}

function formatNumCommaDelimType(value: string, type: string)
{
    const converted = value.split(", ").map(formatNum).join(", ");
    return `new ${type}(${converted})`;
}

function formatColor3(value: string)
{
    const converted = value.split(", ").map((num) => `${Color3.FloatToUint8(Number(num))}`).join(", ");
    return `Color3.FromRGB(${converted})`;
}

function formatRect(value: string)
{
    const nums = value.split(", ");
    const vec1 = formatNumCommaDelimType(nums.slice(0, 2).join(", "), "Vector2");
    const vec2 = formatNumCommaDelimType(nums.slice(2, 4).join(", "), "Vector2");
    return `new Rect(${vec1}, ${vec2})`;
}

function formatDefault(value: string, info: PropertyMember, dtype: string)
{
    switch (dtype)
    {
        case "Int32":
        case "Float32":
        case "Float64":
            return formatNum(value);
        case "Bool":
            return value;
        case "Int64":
            return `BigInt(${value})`;
        case "String":
            return formatString(value);
        case "Enum":
            return `${info.ValueType.Name}.${value}`;
        case "Vector2":
        case "Vector3":
        case "UDim":
            return formatNumCommaDelimType(value, dtype);
        case "Color3":
            return formatColor3(value);
        case "Rect":
            return formatRect(value);
        default:
            console.log(`Unmapped default type "${dtype}": ${value}`);
            return "";
    }
}

function isPascalCase(str: string)
{
    return str === toPascalCase(str);
}

function toPascalCase(str: string)
{
    // https://stackoverflow.com/questions/4068573/convert-string-to-pascal-case-aka-uppercamelcase-in-javascript
    if (/^[a-z\d]+$/i.test(str)) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return str.replace(
        /([a-z\d])([a-z\d]*)/gi,
        (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase()
    ).replace(/[^a-z\d]/gi, '');
}

// The core of the generation

type MemberTypeInfo = {
    DataType: string | undefined
    CastString: string
}

class GenerateData
{
    protected stream = fs.createWriteStream("./src/generated/generated_types.ts", {encoding: "utf-8", flags: "w+"});
    protected singletons = new Set<string>([
        "Speaker",
        "Terrain",
        "ParabolaAdornment",
        "StarterPlayerScripts",
        "StarterCharacterScripts",
        "BubbleChatConfiguration",
        "ChatWindowConfiguration",
        "ChatInputBarConfiguration"
    ]);
    protected classToPropInfo = new Map<string, PropertyMember[]>();
    protected classNameMemberNameInfo = new Map<string, PropertyMember>();
    protected allClasses = new Map<string, ClassInfo>();
    protected ignoreDefaults = new Set<string>([
        "__api_dump_skipped_class__",
        "__api_dump_no_string_value__",
        "__api_dump_class_not_creatable__",
        "__api_dump_write_only_property__"
    ]);
    protected hasDefault = new Set<string>();
    protected allClassDefaultOverrides = new Map<string, Map<string, string>>();
    protected instanceDefaultOverrides = new Map<string, string>([
        ["AttributesSerialize", "\"\""],
        ["Capabilities", "BigInt(0)"],
        ["DefinesCapabilities", "false"],
        ["HistoryId", "new UniqueId(0, 0, BigInt(0))"],
        ["SourceAssetId", "BigInt(-1)"],
        ["Tags", "\"\""],
        ["UniqueId", "new UniqueId(0, 0, BigInt(0))"],
        ["archivable", "true"]
    ]);

    protected constructor() 
    {
        this.allClassDefaultOverrides.set("Instance", this.instanceDefaultOverrides);
    }

    protected startFile()
    {
        this.stream.write(
`/**
* @author https://github.com/fiveman1
* @file generated_types.ts
* Contains generated types for Roblox classes and enums.
* Generated on ${new Date().toLocaleString()}
*/

import { DataType, CoreInstance, EnumItem, Color3, Rect, Vector2, Vector3, UDim, UniqueId } from "../lib/roblox_types";
`
        );
    }

    protected filterClass(info: ClassInfo)
    {
        // Studio is special and we will not generate it
        if (info.Name === "Studio") return true;
        
        // If the class is inherited by another class then we need it
        if (info.Inherited) return false;
        
        // These singleton classes are special and we should generate them
        if (this.singletons.has(info.Name)) return false;

        const tags = new Tags(info.Tags);

        // Don't need to generate settings type classes
        if (tags.Settings) return true;

        // Should generate service type classes
        if (tags.Service) return false;

        // If it's not creatable, not a service, not inherited, etc. then we don't need it
        return tags.NotCreatable;
    }

    protected ignoreDefault(value: string)
    {
        return this.ignoreDefaults.has(value);
    }

    protected propHasDefault(info: ClassInfo, propName: string)
    {
        return this.hasDefault.has(`${info.Name},${propName}`);
    }

    protected setPropHasDefault(info: ClassInfo, propName: string)
    {
        return this.hasDefault.add(`${info.Name},${propName}`);
    }

    protected static typeSkipDefaults(member: PropertyMember)
    {
        return member.ValueType.Category === "Class" || (member.ValueType.Category === "DataType" && (member.ValueType.Name === "BrickColor" || member.ValueType.Name === "SharedString"));
    }

    protected gatherPropNamesWithDefaults(info: ClassInfo)
    {
        const propNames: string[] = [];
        let loopInfo: ClassInfo | undefined = info;
        while (loopInfo)
        {
            const members = this.classToPropInfo.get(loopInfo.Name);
            if (!members) continue;
            for (const member of members)
            {
                if (GenerateData.typeSkipDefaults(member)) continue;
                propNames.push(member.Name);
            }
            loopInfo = this.allClasses.get(loopInfo.Superclass);
        }
        return propNames;
    }

    protected gatherPropNamesNeedDefaults(info: ClassInfo)
    {
        if (this.isClassAbstract(info)) return [];

        const propNames: string[] = [];

        this.addNeedDefaultPropNamesToArray(info, propNames);

        this.gatherPropNamesNeedDefaultsHelper(propNames, this.allClasses.get(info.Superclass));

        return propNames;
    }

    protected addNeedDefaultPropNamesToArray(info: ClassInfo, propNames: string[])
    {
        const defaults = this.getDefaultsFromAPI(info, true);
        const members = this.classToPropInfo.get(info.Name);
        if (!members) return;
        for (const member of members)
        {
            if (GenerateData.typeSkipDefaults(member) || this.instanceDefaultOverrides.has(member.Name) || defaults.has(member.Name)) continue;
            propNames.push(member.Name);
        }
    }

    protected gatherPropNamesNeedDefaultsHelper(propNames: string[], info?: ClassInfo)
    {
        //if (!info || !this.isClassAbstract(info)) return;
        if (!info) return;

        this.addNeedDefaultPropNamesToArray(info, propNames);

        this.gatherPropNamesNeedDefaultsHelper(propNames, this.allClasses.get(info.Superclass));
    }

    protected getDefaultsFromAPI(info: ClassInfo, ignoreDefStr: boolean = false)
    {
        const defaults = new Map<string, string>();
        const members = this.classToPropInfo.get(info.Name)!;
        for (const member of members)
        {
            if (this.ignoreDefault(member.Default)) 
            {
                continue;
            }
            const typeInfo = GenerateData.getTypeInfo(member);
            if (!typeInfo.DataType) continue;
            const defStr = formatDefault(member.Default, member, typeInfo.DataType);
            if (!ignoreDefStr && !defStr) continue;
            this.setPropHasDefault(info, member.Name);
            defaults.set(member.Name, defStr);
        }
        return defaults;
    }

    protected addOverrideDefaultsForClass(info: ClassInfo, outOverrides: Map<string, string>)
    {
        const overrides = this.allClassDefaultOverrides.get(info.Name);
        if (!overrides) return;

        for (const [propName, value] of overrides)
        {
            this.setPropHasDefault(info, propName);
            outOverrides.set(propName, value);
        }
    }

    protected addAlreadyHasDefaults(info: ClassInfo)
    {
        let loopInfo = this.allClasses.get(info.Superclass);
        while (loopInfo)
        {
            const overrides = this.getDefaults(loopInfo);
            for (const propName of overrides.keys())
            {
                this.setPropHasDefault(info, propName);
            }
            loopInfo = this.allClasses.get(loopInfo.Superclass);
        }
    }

    protected getDefaults(info: ClassInfo)
    {
        const defaults = this.getDefaultsFromAPI(info);
        this.addOverrideDefaultsForClass(info, defaults);
        this.addAlreadyHasDefaults(info);
        return defaults;
    }

    protected writeDefaults(info: ClassInfo)
    {
        const defaults = this.getDefaults(info);
        for (const [name, value] of defaults)
        {
            const propName = GenerateData.convertPropName(name);
            this.stream.write(`        this.${propName} = ${value};\n`);
        }
        return defaults;
    }

    protected isClassAbstract(info: ClassInfo, tags?: Tags)
    {
        if (!tags) tags = new Tags(info.Tags);
        return tags.NotCreatable && info.Inherited && !this.singletons.has(info.Name);
    }

    protected startClass(info: ClassInfo)
    {
        const tags = new Tags(info.Tags);
            
        const isService = tags.Service;
        const isAbstract = this.isClassAbstract(info, tags);

        if (tags.Deprecated) this.stream.write("\n/**@deprecated Deprecated by Roblox*/");

        this.stream.write(`\nexport ${isAbstract ? "abstract " : ""}class ${info.Name} extends ${info.Superclass} {\n`);

        let defaults: Map<string, string> | undefined;
        if (info.Name === "Instance")
        {
            this.stream.write(`    protected constructor(isService: boolean = false)\n`);
            this.stream.write(`    {\n`);
            this.stream.write(`        super(isService);\n`);
            this.stream.write(`        this.addClassName("Instance");\n`);
            defaults = this.writeDefaults(info);
            this.stream.write(`    }\n`);
        }
        else
        {
            this.stream.write(`    public constructor()\n`);
            this.stream.write(`    {\n`);
            this.stream.write(`        super(${isService && info.Superclass === "Instance" ? "true" : ""});\n`);
            this.stream.write(`        this.addClassName("${info.Name}");\n`);
            if (!isAbstract) this.stream.write(`        this.Name = "${info.Name}";\n`);
            if (!isAbstract) defaults = this.writeDefaults(info);
            this.stream.write(`    }\n`);
        }
        return { isInstantiable: !isAbstract, defaults: defaults };
    }

    protected endClass()
    {
        this.stream.write(`}\n`);
    }

    protected static filterMember(info: PropertyMember)
    {
        const lowerName = info.Name.toLowerCase();
        
        // These should be inherited from our custom instance class
        if (lowerName === "name" || lowerName === "parent") return true;

        // Skip:
        // Read only
        // Not loadable
        // Not saveable
        const tags = new Tags(info.Tags);
        return tags.ReadOnly ||
            !info.Serialization.CanLoad ||
            !(info.Serialization.CanSave || tags.Deprecated);
    }

    protected writeOneProp(info: ClassInfo, member: PropertyMember)
    {
        const typeInfo = GenerateData.getTypeInfo(member);

        if (!typeInfo.DataType)
        {
            console.log("INVALID MEMBER DATATYPE: " + member.ValueType.Name);
            console.log(member);
            return;
        }

        const isDeprecated = new Tags(member.Tags).Deprecated;
        const propName = GenerateData.convertPropName(member.Name);
        const hasDefault = this.propHasDefault(info, member.Name);
        if (typeInfo.CastString && !hasDefault) typeInfo.CastString += " | undefined";

        if (isDeprecated) this.stream.write("    /**@deprecated Deprecated by Roblox*/\n");
        this.stream.write(`    ${GenerateData.createPropGetString(propName, member.Name, typeInfo.DataType, hasDefault, typeInfo.CastString)}\n`);
        if (isDeprecated) this.stream.write("    /**@deprecated Deprecated by Roblox*/\n");
        this.stream.write(`    ${GenerateData.createPropSetString(propName, member.Name, typeInfo.DataType)}\n`);
    }

    protected writeDefaultPropOverrides(defaults: Map<string, string>, members: PropertyMember[])
    {
        const memberNameSet = new Set<string>();
        for (const member of members)
        {
            memberNameSet.add(member.Name);
        }

        for (const name of defaults.keys())
        {
            if (memberNameSet.has(name))
            {
                continue;
            }
            const propName = GenerateData.convertPropName(name);
            this.stream.write(`    public override get ${propName}() {return super.${propName}!;}\n`);
            this.stream.write(`    public override set ${propName}(value) {super.${propName} = value;}\n`);
        }
    }

    protected static convertPropName(propName: string)
    {
        return toPascalCase(GenerateData.sanitizePropName(propName));
    }

    protected static sanitizePropName(propName: string)
    {
        return propName.split(" ").join("").split("_").join("");
    }

    protected static getTypeInfo(info: PropertyMember): MemberTypeInfo
    {
        let dataType: string | undefined;
        let castStr = "";
        switch (info.ValueType.Category)
        {
            case "Enum":
                dataType = "Enum";
                castStr = ` as ${info.ValueType.Name}`;
                break;
            case "Primitive":
                dataType = PrimitiveInfo.get(info.ValueType.Name);
                break;
            case "DataType":
                dataType = DataTypeInfo.get(info.ValueType.Name);
                break;
            case "Class":
                dataType = "Referent";
                castStr = ` as ${info.ValueType.Name}`;
                break;
        }
        return { DataType: dataType, CastString: castStr };
    }

    protected static createPropGetString(propName: string, propDataName: string, dataType: string, hasDefault: boolean, castStr: string = "")
    {
        return `public get ${propName}() {return this.GetProp("${propDataName}", DataType.${dataType})${hasDefault ? "!" : ""}${castStr};}`;
    }

    protected static createPropSetString(propName: string, propDataName: string, dataType: string)
    {
        return `public set ${propName}(value) {this.SetProp("${propDataName}", DataType.${dataType}, value);}`;
    }

    protected static isDuplicateName(info: PropertyMember, memberNames: Map<string, string[]>)
    {
        if (!isPascalCase(info.Name) && !info.Serialization.CanSave)
        {
            const names = memberNames.get(info.Name.toLowerCase());
            if (names && names.length > 1 && new Tags(info.Tags).Deprecated)
            {
                for (let i = 0; i < names.length; ++i)
                {
                    if (isPascalCase(names[i])) return true;
                }
            }
        }
        return false;
    }

    protected startNameToClass()
    {
        this.stream.write("\nexport type NameToClass = {\n");
    }

    protected writeOneNameToClass(className: string)
    {
        this.stream.write(`    ["${className}"]: ${className}\n`);
    }

    protected endNameToClass()
    {
        this.stream.write("}\n");
    }

    protected startClassMap()
    {
        this.stream.write(
`
export type ClassFactory = () => Instance

export class ClassMap {
    protected readonly _map: Map<string, ClassFactory> = getClassMap();
    public getFactory(className: string): ClassFactory | undefined {
        return this._map.get(className);
    }
}

function getClassMap() {
    const map = new Map<string, ClassFactory>();
`);
    }

    protected writeOneClassMap(className: string)
    {
        this.stream.write(`    map.set("${className}", () => new ${className}());\n`);
    }

    protected endClassMap()
    {
        this.stream.write("    return map;\n");
        this.stream.write("}\n");
    }

    protected writeOneEnum(info: EnumInfo)
    {
        this.stream.write(`\nexport class ${info.Name} extends EnumItem {\n`);
        for (const item of info.Items)
        {
            this.stream.write(`    public static readonly ${item.Name} = new ${info.Name}("${item.Name}", ${item.Value});\n`);
        }
        this.stream.write(`    public static get Items() {return [${info.Items.map((item) => info.Name + "." + item.Name).join(", ")}];}\n`);
        this.stream.write(`    public static FromValue(value: number) {return ${info.Name}.Items.find((item) => item._value === value);}\n`);
        this.stream.write("}\n");
    }

    protected startEnumMap()
    {
        this.stream.write(
`
export type EnumFactory = (value: number) => EnumItem | undefined

export class EnumMap {
    protected readonly _map: Map<string, EnumFactory> = getEnumMap();
    public getFactory(className: string, propName: string): EnumFactory | undefined {
        return this._map.get(\`\${className},\${propName}\`);
    }
}

function getEnumMap() {
    const map = new Map<string, EnumFactory>();
`);
    }

    protected writeOneEnumMap(keyName: string, enumName: string)
    {
        this.stream.write(`    map.set("${keyName}", ${enumName}.FromValue);\n`);
    }

    protected endEnumMap()
    {
        this.stream.write("    return map;\n");
        this.stream.write("}\n");
    }

    protected static setInheritance(info: ClassInfo | undefined, allClasses: Map<string, ClassInfo>)
    {
        if (!info) 
        {
            return;
        }
        info.Inherited = true;
        GenerateData.setInheritance(allClasses.get(info.Superclass), allClasses);
    }

    protected getMemberTypeAndInfo(className: string, memberName: string): { typeInfo?: MemberTypeInfo, memberInfo?: PropertyMember }
    {
        const classInfo = this.allClasses.get(className);
        if (!classInfo)
        {
            return { typeInfo: undefined, memberInfo: undefined };
        }
        const info = this.classNameMemberNameInfo.get(`${className},${memberName}`);
        if (info)
        {
            return { typeInfo: GenerateData.getTypeInfo(info), memberInfo: info };
        }
        return this.getMemberTypeAndInfo(classInfo.Superclass, memberName);
    }

    protected readCustomDefaults()
    {
        const data = JSON.parse(fs.readFileSync("src/generated/plugin/output.json", {encoding: "utf-8"})) as DefaultsClass[];
        for (const classData of data)
        {
            if (classData.Name === "UnionOperation")
            {
                console.log(classData);
            }
            const propMap = new Map<string, string>();
            for (const propData of classData.Props)
            {
                let value = propData.Value;
                if (value.startsWith("Enum."))
                {
                    value = value.split(".")[2]; // These are formatted like Enum.<EnumName>.<EnumValue>
                }
                const { typeInfo, memberInfo } = this.getMemberTypeAndInfo(classData.Name, propData.Name);
                if (typeInfo && typeInfo.DataType && memberInfo)
                {
                    const convertedValue = formatDefault(value, memberInfo, typeInfo.DataType);
                    if (convertedValue)
                    {
                        propMap.set(propData.Name, convertedValue);
                    }
                }
            }
            this.allClassDefaultOverrides.set(classData.Name, propMap);
        }
    }

    protected async generate()
    {
        const res = await axios.get("https://raw.githubusercontent.com/MaximumADHD/Roblox-Client-Tracker/roblox/Mini-API-Dump.json");
        const data = res.data as JsonData;

        this.startFile();

        // Classes
        this.allClasses = new Map<string, ClassInfo>();

        for (const info of data.Classes)
        {
            if (info.Superclass === "<<<ROOT>>>")
            {
                info.Superclass = "CoreInstance";
            }
            this.allClasses.set(info.Name, info);
        }

        for (const info of data.Classes)
        {
            if (!this.filterClass(info)) 
            {
                GenerateData.setInheritance(this.allClasses.get(info.Superclass),this. allClasses);
            }
        }

        const instantiableClasses = new Set<string>();
        const filteredClasses = new Set<string>();

        const allEnums = new Set<string>();
        const propertyEnums = new Map<string, string>();

        for (const classInfo of data.Classes)
        {
            if (this.filterClass(classInfo)) 
            {
                continue;
            }

            filteredClasses.add(classInfo.Name);

            // All of the members that don't get filtered out due to not being readable/writeable
            const validMembers = new Map<string, PropertyMember>();
            // Some members have duplicate names in different cases. This is a map of lowercase name to all versions of the name.
            const memberNames = new Map<string, string[]>();

            for (const member of classInfo.Members)
            {
                // Only allow Properties that are readable/writeable
                if (member.MemberType !== "Property" || GenerateData.filterMember(member)) 
                {
                    continue;
                }

                // We will need to generate this enum
                if (member.ValueType.Category === "Enum")
                {
                    allEnums.add(member.ValueType.Name);
                    propertyEnums.set(`${classInfo.Name},${member.Name}`, member.ValueType.Name);
                }
                
                // Add to the list of member names
                const lowerName = member.Name.toLowerCase();
                if (memberNames.has(lowerName))
                {
                    memberNames.get(lowerName)!.push(member.Name);
                }
                else
                {
                    memberNames.set(lowerName, [member.Name]);
                }

                // Add to the list of valid members
                validMembers.set(member.Name, member);

                // https://github.com/MaximumADHD/Roblox-File-Format/blob/d44a590bb2e814f08edae91e7ef3e20fb09416e1/Plugins/GenerateApiDump/init.server.lua#L749
                if (classInfo.Name === "Sound" && member.Name === "EmitterSize")
                {
                    member.Tags! = member.Tags!.filter((tag) => tag !== "Deprecated");
                }
            }

            const actualValidMembers = Array.from(validMembers.values()).filter((member) => !GenerateData.isDuplicateName(member, memberNames));
            this.classToPropInfo.set(classInfo.Name, actualValidMembers);
            for (const member of actualValidMembers)
            {
                this.classNameMemberNameInfo.set(`${classInfo.Name},${member.Name}`, member);
            }
        }

        this.readCustomDefaults();

        const propsNeedDefaults = new Map<string, string[]>();

        for (const [className, members] of this.classToPropInfo)
        {
            const classInfo = this.allClasses.get(className);
            if (!classInfo || this.filterClass(classInfo)) 
            {
                continue;
            }

            const { isInstantiable, defaults } = this.startClass(classInfo);
            if (isInstantiable)
            {
                instantiableClasses.add(classInfo.Name);
            }

            for (const member of members)
            {
                this.writeOneProp(classInfo, member);
            }

            if (defaults)
            {
                this.writeDefaultPropOverrides(defaults, members);
            }
            
            this.endClass();

            const propNames = this.gatherPropNamesWithDefaults(classInfo);
            for (const name of propNames)
            {
                if (!this.isClassAbstract(classInfo) && !this.propHasDefault(classInfo, name))
                {
                    console.log(`Missing default value for class ${classInfo.Name}: ${name}`);
                }
            }

            const propNamesNeedDefaults = this.gatherPropNamesNeedDefaults(classInfo);
            if (propNamesNeedDefaults.length > 0) propsNeedDefaults.set(className, propNamesNeedDefaults);
        }

        // Create a Lua table of properties that we need to use our Roblox plugin to try to determine defaults
        let propModuleStr = `-- Generated on ${new Date().toLocaleString()}\nlocal module = {}\nmodule.PropTable = {\n`;
        for (const [className, propList] of propsNeedDefaults)
        {
            propModuleStr += `    ${className} = {`;
            propModuleStr += propList.map((prop) => `"${prop}"`).join(", ");
            propModuleStr += "},\n";
        }
        fs.writeFileSync("src/generated/plugin/props_module.lua", propModuleStr.slice(0, propModuleStr.length - 2) + "\n}\nreturn module");

        // NameToClass type
        this.startNameToClass();

        for (const name of filteredClasses)
        {
            this.writeOneNameToClass(name);
        }

        this.endNameToClass();

        // Class mapper
        this.startClassMap();

        for (const name of instantiableClasses)
        {
            this.writeOneClassMap(name);
        }
        this.endClassMap();

        // Enums
        for (const info of data.Enums)
        {
            if (allEnums.has(info.Name)) this.writeOneEnum(info);
        }

        // Enum mapper
        this.startEnumMap();

        for (const propName of propertyEnums.keys())
        {
            this.writeOneEnumMap(propName, propertyEnums.get(propName)!);
        }

        this.endEnumMap();
        
        this.stream.end();
        this.stream.close();
    }

    public static async generateFiles()
    {
        await new GenerateData().generate();
    }
}

async function main()
{
    await GenerateData.generateFiles();
}

main();