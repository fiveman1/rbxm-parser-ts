/**
 * @author https://github.com/fiveman1
 * Contains the core classes for writing a .rbxm file.
 */

import lz4 from "lz4";
import { RobloxFile } from "./roblox_file";
import { DataType, CoreInstance, RobloxValue } from "./roblox_types";
import { ChunkType, DataParserExtraInfo, RobloxClass, RobloxFileDOM } from "./roblox_file_dom";
import { RobloxFileByteWriter } from "./roblox_file_bytes";
import { ClassMap } from "../generated/generated_types";

type PropValue = {
    name: string
    type: DataType
}

/**
 * This class can write bytes in .rbxm format to a buffer from a given RobloxFile
 */
export class RobloxFileDOMWriter extends RobloxFileDOM
{
    protected model: RobloxFile;
    protected bytesArray: Uint8Array[] = [];
    protected numBytes = 0;
    protected instToRefId: Map<CoreInstance, number> = new Map<CoreInstance, number>();
    protected instToClassId: Map<CoreInstance, number> = new Map<CoreInstance, number>();
    protected sortedClassIds: number[] = [];
    protected numInstances = 0;
    protected numClasses = 0;
    protected classMap: ClassMap = new ClassMap();

    public constructor(model: RobloxFile)
    {
        super();
        this.model = model;
    }

    public write()
    {
        this.setup();

        this.writeHeader();

        const metaBytes = this.writeMetaChunk();

        const classWriter = new RobloxFileByteWriter();
        for (const classId of this.sortedClassIds)
        {
            classWriter.putBytes(this.writeInstChunk(classId, this.classIdToInfo.get(classId)!));
        }
        const classBytes = classWriter.bytes;

        const propWriter = new RobloxFileByteWriter();
        for (const classId of this.sortedClassIds)
        {
            const info = this.classIdToInfo.get(classId)!;
            const props = this.collectProperties(info.instances);
            for (const prop of props)
            {
                propWriter.putBytes(this.writePropChunk(classId, info.instances, prop.name, prop.type));
            }
        }
        const propBytes = propWriter.bytes;

        const sstrBytes = this.writeSstrChunk();

        const prntBytes = this.writePrntChunk();

        const endBytes = this.writeEndChunk();

        // Why are we doing this out of order?
        // We are using PROP chunks to load additional shared string data, but the SSTR chunk
        // should be written before it.
        this.writeBytes(metaBytes);
        this.writeBytes(sstrBytes);
        this.writeBytes(classBytes);
        this.writeBytes(propBytes);
        this.writeBytes(prntBytes);
        this.writeBytes(endBytes);

        const buf = Buffer.allocUnsafe(this.numBytes);
        let i = 0;
        for (const bytes of this.bytesArray)
        {
            for (const byte of bytes)
            {
                buf[i] = byte;
                ++i;
            }
        }
        return buf;
    }

    protected collectProperties(instances: CoreInstance[])
    {
        const props = new Map<string, DataType>();
        const sortedProps: PropValue[] = [];
        for (const inst of instances)
        {
            for (const [name, value] of inst.Props)
            {
                if (!props.has(name))
                {
                    props.set(name, value.type);
                    sortedProps.push({name: name, type: value.type});
                }
                else if (props.get(name) !== value.type)
                {
                    throw new Error(`Found instances with non-unique property types (class ${inst.ClassName}, property: ${name}, types: ${DataType[props.get(name)!]} and ${DataType[value.type]})`);
                }
            }
        }
        sortedProps.sort((prop1, prop2) => prop1.name > prop2.name ? 1 : -1);
        return sortedProps;
    }

    protected setup()
    {
        const instances = this.model.GetAllDescendants();
        this.numInstances = instances.length;

        // Assign referent IDs and class IDs
        const classNameToId = new Map<string, number>();
        let lastReferent = -1;
        let lastClassId = -1;
        for (const instance of instances)
        {
            if (instance.IsDestroyed)
            {
                continue; // Shouldn't happen but check anyway...
            }
            
            // Referent IDs
            ++lastReferent;
            this.instToRefId.set(instance, lastReferent);

            // Class IDs + extra info
            if (!classNameToId.has(instance.ClassName))
            {
                ++lastClassId;
                classNameToId.set(instance.ClassName, lastClassId);
                this.classIdToInfo.set(lastClassId, {
                    name: instance.ClassName,
                    isService: instance.IsService,
                    instances: [instance],
                    referentIdToIndex: new Map<number, number>([[lastReferent, 0]])
                });
                this.sortedClassIds.push(lastClassId);
            }
            else
            {
                const classId = classNameToId.get(instance.ClassName)!;
                const info = this.classIdToInfo.get(classId)!;
                info.instances.push(instance);
                info.referentIdToIndex.set(lastReferent, info.instances.length - 1);
            }
            
        }

        // Sort by class ID which matches how Roblox saves the file
        this.numClasses = this.classIdToInfo.size;
        this.sortedClassIds.sort((id1, id2) => this.classIdToInfo.get(id1)!.name > this.classIdToInfo.get(id2)!.name ? 1 : -1);
    }

    protected writeBytes(bytes: Uint8Array)
    {
        this.numBytes += bytes.length;
        this.bytesArray.push(bytes);
    }

    protected writeHeader()
    {
        const writer = new RobloxFileByteWriter();
        writer.putStringAsBytes(this.MAGIC_HEADER);
        writer.putUint16(0); // Version
        writer.putInt32(this.numClasses);
        writer.putInt32(this.numInstances);
        writer.putBytes(new Uint8Array(8)); // 8 empty bytes
        this.writeBytes(writer.bytes);
    }

    protected writeChunk(type: ChunkType, data: Uint8Array)
    {
        const writer = new RobloxFileByteWriter();
        const { compressedLength, uncompressedLength, bytes } = this.compressData(type, data);
        writer.putStringAsBytes(type);
        writer.putUint32(compressedLength);
        writer.putUint32(uncompressedLength);
        writer.putBytes(new Uint8Array(4)); // 4 empty bytes
        writer.putBytes(bytes);
        return writer.bytes;
    }

    protected compressData(type: ChunkType, data: Uint8Array)
    {
        if (type === ChunkType.END)
        {
            // Don't compress the end chunk
            return {
                compressedLength: 0,
                uncompressedLength: data.length,
                bytes: data
            };
        }

        const bytes = Buffer.alloc(lz4.encodeBound(data.length));
        const size = lz4.encodeBlock(Buffer.from(data), bytes);

        return {
            compressedLength: size,
            uncompressedLength: data.length,
            bytes: bytes.subarray(0, size)
        };
    }

    protected writeMetaChunk()
    {
        if (this.model.Metadata.size < 1)
        {
            return new Uint8Array();
        }

        const writer = new RobloxFileByteWriter();

        writer.putUint32(this.model.Metadata.size);

        for (const [key, value] of this.model.Metadata)
        {
            writer.putString(key);
            writer.putString(value);
        }

        return this.writeChunk(ChunkType.META, writer.bytes);
    }

    protected writeSstrChunk()
    {
        if (this.model.SharedStrings.length < 1)
        {
            return new Uint8Array();
        }

        const writer = new RobloxFileByteWriter();

        writer.putUint32(0); // Version
        writer.putUint32(this.model.SharedStrings.length);

        for (const sharedString of this.model.SharedStrings)
        {
            writer.putBytes(sharedString.Hash);
            writer.putString(sharedString.Value);
        }

        return this.writeChunk(ChunkType.SSTR, writer.bytes);
    }

    protected writeInstChunk(classId: number, info: RobloxClass)
    {
        const writer = new RobloxFileByteWriter();

        writer.putUint32(classId);
        writer.putString(info.name);
        writer.putBool(info.isService);
        writer.putUint32(info.instances.length);

        const refs: number[] = [];
        for (const inst of info.instances)
        {
            refs.push(this.instToRefId.get(inst)!);
        }
        
        writer.putReferentArray(refs);

        if (info.isService)
        {
            const serviceMarkers = new Uint8Array(info.instances.length);
            for (let i = 0; i < info.instances.length; ++i)
            {
                serviceMarkers[i] = 1;
            }
            writer.putBytes(serviceMarkers);
        }

        return this.writeChunk(ChunkType.INST, writer.bytes);
    }

    protected writePropChunk(classId: number, instances: CoreInstance[], propName: string, type: DataType)
    {
        const parser = this.dataTypeParsers.get(type);
        if (!parser) return new Uint8Array();

        const writer = new RobloxFileByteWriter();

        writer.putUint32(classId);
        writer.putString(propName);
        writer.putUint8(type);

        let info: DataParserExtraInfo | undefined;
        if (type === DataType.Referent)
        {
            info = { getReferentFromInstance: (instance) => this.instToRefId.get(instance) ?? -1 };
        }
        else if (type === DataType.SharedString)
        {
            info = { sharedStrings: this.model.SharedStrings };
        }
       
        parser.write(writer, instances.map((inst) => this.getPropFromInstance(inst, propName)), info);

        return this.writeChunk(ChunkType.PROP, writer.bytes);
    }

    protected getPropFromInstance(instance: CoreInstance, propName: string): RobloxValue | undefined
    {
        const prop = instance.Props.get(propName);
        if (prop)
        {
            return prop;
        }
        
        const classFactory = this.classMap.getFactory(instance.ClassName);
        if (classFactory)
        {
            const mockInstance = classFactory();
            const mockProp = mockInstance.Props.get(propName);
            return mockProp;
        }
        
        return undefined;
    }

    protected writePrntChunk()
    {
        const writer = new RobloxFileByteWriter();

        writer.putUint8(0);
        writer.putUint32(this.numInstances);

        const sortedInsts = Array.from(this.instToRefId.keys());
        sortedInsts.sort((inst1, inst2) => this.instToRefId.get(inst1)! - this.instToRefId.get(inst2)!);

        const childRefs: number[] = [];
        const parentRefs: number[] = [];
        for (const inst of sortedInsts)
        {   
            const ref = this.instToRefId.get(inst)!;
            childRefs.push(ref);
            const parentRef = inst.Parent ? this.instToRefId.get(inst.Parent)! : -1;
            parentRefs.push(parentRef);
        }

        writer.putReferentArray(childRefs);
        writer.putReferentArray(parentRefs);

        return this.writeChunk(ChunkType.PRNT, writer.bytes);
    }

    protected writeEndChunk()
    {
        const writer = new RobloxFileByteWriter();

        writer.putStringAsBytes(this.MAGIC_END);

        return this.writeChunk(ChunkType.END, writer.bytes);
    }
}
