/**
 * @author https://github.com/fiveman1
 * @file roblox_model_writer.ts
 * Contains the core classes for writing a .rbxm file.
 */

/* eslint-disable @typescript-eslint/no-unused-vars */

import lz4 from "lz4";
import { RobloxModel } from "./roblox_model";
import { DataType, CoreInstance } from "./roblox_types";
import { ChunkType, DataParserExtraInfo, RobloxClass, RobloxModelDOM } from "./roblox_model_dom";
import { RobloxModelByteWriter } from "./roblox_model_bytes";

type PropValue = {
    name: string
    type: DataType
}

/**
 * This class can write bytes in .rbxm format to a buffer from a given model
 */
export class RobloxModelDOMWriter extends RobloxModelDOM
{
    protected model: RobloxModel;
    protected bytesArray: Uint8Array[] = [];
    protected numBytes = 0;
    protected instToRefId: Map<CoreInstance, number> = new Map<CoreInstance, number>();
    protected instToClassId: Map<CoreInstance, number> = new Map<CoreInstance, number>();
    protected sortedClassIds: number[] = [];
    protected numInstances = 0;
    protected numClasses = 0;

    public constructor(model: RobloxModel)
    {
        super();
        this.model = model;
        this.instToRefId = model.ReferentMap;
    }

    public write()
    {
        this.setup();

        this.writeHeader();

        this.writeMetaChunk();

        for (const classId of this.sortedClassIds)
        {
            this.writeInstChunk(classId, this.classIdToInfo.get(classId)!);
        }

        for (const classId of this.sortedClassIds)
        {
            const info = this.classIdToInfo.get(classId)!;
            const props = this.collectProperties(info.instances);
            for (const prop of props)
            {
                this.writePropChunk(classId, info.instances, prop.name, prop.type);
            }
        }

        this.writeSstrChunk();

        this.writePrntChunk();

        this.writeEndChunk();

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
        let lastReferent = -1;
        for (const referent of this.instToRefId.values())
        {
            if (referent > lastReferent)
            {
                lastReferent = referent;
            }
        }

        const instances = this.model.GetAllDescendants();
        this.numInstances = instances.length;

        const classNameToId = new Map<string, number>();
        let lastClassId = -1;
        for (const instance of instances)
        {
            let refId: number;
            if (!this.instToRefId.has(instance))
            {
                ++lastReferent;
                this.instToRefId.set(instance, lastReferent);
                refId = lastReferent;
            }
            else
            {
                refId = this.instToRefId.get(instance)!;
            }
            if (!classNameToId.has(instance.ClassName))
            {
                ++lastClassId;
                classNameToId.set(instance.ClassName, lastClassId);
                this.classIdToInfo.set(lastClassId, {
                    name: instance.ClassName,
                    isService: instance.IsService,
                    instances: [instance],
                    referentIdToIndex: new Map<number, number>([[refId, 0]])
                });
                this.sortedClassIds.push(lastClassId);
            }
            else
            {
                const classId = classNameToId.get(instance.ClassName)!;
                const info = this.classIdToInfo.get(classId)!;
                info.instances.push(instance);
                info.referentIdToIndex.set(refId, info.instances.length - 1);
            }
            
        }

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
        const writer = new RobloxModelByteWriter();
        writer.putStringAsBytes(this.MAGIC_HEADER);
        writer.putUint16(0); // Version
        writer.putInt32(this.numClasses);
        writer.putInt32(this.numInstances);
        writer.putBytes(new Uint8Array(8)); // 8 empty bytes
        this.writeBytes(writer.bytes);
    }

    protected writeChunk(type: ChunkType, data: Uint8Array)
    {
        const writer = new RobloxModelByteWriter();
        const { compressedLength, uncompressedLength, bytes } = this.compressData(type, data);
        writer.putStringAsBytes(type);
        writer.putUint32(compressedLength);
        writer.putUint32(uncompressedLength);
        writer.putBytes(new Uint8Array(4)); // 4 empty bytes
        this.writeBytes(writer.bytes);
        this.writeBytes(bytes);
    }

    protected compressData(type: ChunkType, data: Uint8Array)
    {
        if (type === ChunkType.END)
        {
            // Don't compress the end chunk
            return {
                compressedLength: data.length,
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
        const writer = new RobloxModelByteWriter();

        writer.putUint32(this.model.Metadata.size);

        for (const [key, value] of this.model.Metadata)
        {
            writer.putString(key);
            writer.putString(value);
        }

        this.writeChunk(ChunkType.META, writer.bytes);
    }

    protected writeSstrChunk()
    {
        const writer = new RobloxModelByteWriter();

        writer.putUint32(0); // Version
        writer.putUint32(this.model.SharedStrings.length);

        for (const sharedString of this.model.SharedStrings)
        {
            writer.putStringAsBytes(sharedString.Hash);
            writer.putString(sharedString.SharedString);
        }

        this.writeChunk(ChunkType.SSTR, writer.bytes);
    }

    protected writeInstChunk(classId: number, info: RobloxClass)
    {
        const writer = new RobloxModelByteWriter();

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

        this.writeChunk(ChunkType.INST, writer.bytes);
    }

    protected writePropChunk(classId: number, instances: CoreInstance[], propName: string, type: DataType)
    {
        const parser = this.dataTypeParsers.get(type);
        if (!parser) return;

        const writer = new RobloxModelByteWriter();

        writer.putUint32(classId);
        writer.putString(propName);
        writer.putUint8(type);
        let info: DataParserExtraInfo | undefined;
        if (type === DataType.Referent)
        {
            info = { getReferentFromInstance: (instance) => this.instToRefId.get(instance) ?? -1 };
        }
        parser.write(writer, instances.map((inst) => inst.Props.get(propName)), info);

        this.writeChunk(ChunkType.PROP, writer.bytes);
    }

    protected writePrntChunk()
    {
        const writer = new RobloxModelByteWriter();

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

        this.writeChunk(ChunkType.PRNT, writer.bytes);
    }

    protected writeEndChunk()
    {
        const writer = new RobloxModelByteWriter();

        writer.putStringAsBytes(this.MAGIC_END);

        this.writeChunk(ChunkType.END, writer.bytes);
    }
}
