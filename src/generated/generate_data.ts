/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * @author https://github.com/fiveman1
 * @file generate_data.ts
 * Generates Typescript typings for Roblox classes and enums.
 * A good portion of this is based on https://github.com/MaximumADHD/Roblox-File-Format/blob/main/Plugins/GenerateApiDump/init.server.lua
 */

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
    }
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

type RedirectInfo = {
    Get: string
    Set: string
    DocString: string
}

// The core of the generation

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

    protected constructor() {}

    protected startFile()
    {
        this.stream.write(
`/**
* @author https://github.com/fiveman1
* @file generated_types.ts
* Contains generated types for Roblox classes and enums.
* Generated on ${new Date().toLocaleString()}
*/

import { DataType, Instance, EnumItem } from "../lib/roblox_types";
`
        );
    }

    protected filterClass(info: ClassInfo)
    {
        // Instance and Studio are special and we will not generate them
        if (info.Name === "Instance" || info.Name === "Studio") return true;
        
        // If the class is inherited by another class then we need it
        if (info.Inherited) return false;
        
        const tags = new Tags(info.Tags);
        
        // These singleton classes are special and we should generate them
        if (this.singletons.has(info.Name)) return false;

        // Don't need to generate settings type classes
        if (tags.Settings) return true;

        // Should generate service type classes
        if (tags.Service) return false;

        // If it's not creatable, not a service, not inherited, etc. then we don't need it
        return tags.NotCreatable;
    }

    protected startClass(info: ClassInfo)
    {
        const tags = new Tags(info.Tags);
            
        const isService = tags.Service;
        const isAbstract = tags.NotCreatable && info.Inherited && !this.singletons.has(info.Name);

        this.stream.write(`\nexport ${isAbstract ? "abstract " : ""}class ${info.Name} extends ${info.Superclass} {\n`);
        this.stream.write(`    protected constructor() {super(${isService && info.Superclass === "Instance" ? "true" : ""}); this.addClassName("${info.Name}");}\n`);
        if (!isAbstract) this.stream.write(`    public static new() {return new ${info.Name}();}\n`);
        return !isAbstract;
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

    protected writeOneProp(info: PropertyMember, redirect?: RedirectInfo)
    {
        if (redirect)
        {
            if (redirect.DocString) this.stream.write(`    ${redirect.DocString}\n`);
            this.stream.write(`    ${redirect.Get}\n`);
            if (redirect.DocString) this.stream.write(`    ${redirect.DocString}\n`);
            this.stream.write(`    ${redirect.Set}\n`);
            return;
        }

        const typeInfo = GenerateData.getTypeInfo(info);

        if (!typeInfo.DataType)
        {
            console.log("INVALID MEMBER DATATYPE: " + info.ValueType.Name);
            console.log(info);
            return;
        }

        const isDeprecated = new Tags(info.Tags).Deprecated;
        const propName = toPascalCase(GenerateData.sanitizePropName(info.Name));

        if (isDeprecated) this.stream.write("    /**@deprecated Deprecated by Roblox*/\n");
        this.stream.write(`    ${GenerateData.createPropGetString(propName, info.Name, typeInfo.DataType, typeInfo.CastString)}\n`);
        if (isDeprecated) this.stream.write("    /**@deprecated Deprecated by Roblox*/\n");
        this.stream.write(`    ${GenerateData.createPropSetString(propName, info.Name, typeInfo.DataType)}\n`);
    }

    protected static sanitizePropName(propName: string)
    {
        return propName.split(" ").join("_");
    }

    protected static getTypeInfo(info: PropertyMember)
    {
        let dataType;
        let castStr = "";
        switch (info.ValueType.Category)
        {
            case "Enum":
                dataType = "Enum";
                castStr = ` as ${info.ValueType.Name} | undefined`;
                break;
            case "Primitive":
                dataType = PrimitiveInfo.get(info.ValueType.Name);
                break;
            case "DataType":
                dataType = DataTypeInfo.get(info.ValueType.Name);
                break;
            case "Class":
                dataType = "Referent";
                castStr = ` as ${info.ValueType.Name} | undefined`;
                break;
        }
        return {DataType: dataType, CastString: castStr};
    }

    protected static createPropGetString(propName: string, propDataName: string, dataType: string, castStr: string = "")
    {
        return `public get ${propName}() {return this.GetProp("${propDataName}", DataType.${dataType})${castStr};}`;
    }

    protected static createPropSetString(propName: string, propDataName: string, dataType: string)
    {
        return `public set ${propName}(value) {this.SetProp("${propDataName}", DataType.${dataType}, value);}`;
    }

    protected static findDuplicateMemberName(name: string, validMembers: Map<string, PropertyMember>)
    {
        if (isPascalCase(name)) return undefined;
        const member = validMembers.get(name.toLowerCase());
        if (member) return member.Name;
        return undefined;
    }

    protected static createRedirect(info: PropertyMember, memberNames: Map<string, string[]>, className: string): RedirectInfo | undefined
    {
        // For some reason there are a lot of duplicate properties, like size vs. Size. We will create overrides that just redirect
        // to the PascalCase version.

        if (!isPascalCase(info.Name))
        {
            const names = memberNames.get(info.Name.toLowerCase());
            if (names && names.length > 1 && new Tags(info.Tags).Deprecated)
            {
                let redirPropName;
                for (let i = 0; i < names.length; ++i)
                {
                    if (isPascalCase(names[i])) redirPropName = GenerateData.sanitizePropName(names[i]);
                }
                if (!redirPropName) return undefined;
                const propName = GenerateData.sanitizePropName(info.Name);
                console.log("Class: " + className);
                console.log("Prop: " + propName);
                console.log("Redir prop: " + redirPropName);
                return {
                    Get: `public get ${propName}() {return this.${redirPropName};}`, 
                    Set: `public set ${propName}(value) {this.${redirPropName} = value;}`,
                    DocString: `/**@deprecated Use ${redirPropName} instead*/`
                };
            }
        }
        return undefined;
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
        this.stream.write(`    map.set("${className}", ${className}.new);\n`);
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
        this.stream.write(`    public static get items() {return [${info.Items.map((item) => info.Name + "." + item.Name).join(", ")}];}\n`);
        this.stream.write(`    public static fromValue(value: number) {return ${info.Name}.items.find((item) => item._value === value);}\n`);
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
        this.stream.write(`    map.set("${keyName}", ${enumName}.fromValue);\n`);
    }

    protected endEnumMap()
    {
        this.stream.write("    return map;\n");
        this.stream.write("}\n");
    }

    // Main function

    protected async generate()
    {
        const res = await axios.get("https://raw.githubusercontent.com/MaximumADHD/Roblox-Client-Tracker/roblox/Mini-API-Dump.json");
        const data = res.data as JsonData;
        //const data = JSON.parse(fs.readFileSync("./input_files/Mini-API-Dump.json", "utf-8")) as JsonData;
        this.startFile();

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

        const instantiableClasses = new Set<string>();
        const filteredClasses = new Set<string>();

        const allEnums = new Set<string>();
        const propertyEnums = new Map<string, string>();

        for (const classInfo of data.Classes)
        {
            if (this.filterClass(classInfo)) continue;
            
            if (this.startClass(classInfo)) instantiableClasses.add(classInfo.Name);
            filteredClasses.add(classInfo.Name);

            // All of the members that don't get filtered out due to not being readable/writeable
            const validMembers = new Map<string, PropertyMember>();
            // Some members have duplicate names in different cases. This is a map of lowercase name to all versions of the name.
            const memberNames = new Map<string, string[]>();

            for (const member of classInfo.Members)
            {
                // Only allow Properties that are readable/writeable
                if (member.MemberType !== "Property" || GenerateData.filterMember(member)) continue;

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
            }

            for (const member of validMembers.values())
            {
                this.writeOneProp(member, GenerateData.createRedirect(member, memberNames, classInfo.Name));
            }
            
            this.endClass();
        }

        this.startNameToClass();
        for (const name of filteredClasses.keys())
        {
            this.writeOneNameToClass(name);
        }
        this.endNameToClass();

        this.startClassMap();
        for (const name of instantiableClasses.keys())
        {
            this.writeOneClassMap(name);
        }
        this.endClassMap();

        for (const info of data.Enums)
        {
            if (allEnums.has(info.Name)) this.writeOneEnum(info);
        }

        this.startEnumMap();
        for (const propName of propertyEnums.keys())
        {
            this.writeOneEnumMap(propName, propertyEnums.get(propName)!);
        }
        this.endEnumMap();
        
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