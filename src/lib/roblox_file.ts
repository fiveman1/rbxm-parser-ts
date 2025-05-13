/**
 * @author https://github.com/fiveman1
 * Contains the core classes to load and interact with a Roblox model/place file.
 */

import { ChildContainer, CoreInstance, SharedString } from "./roblox_types";
import { RobloxFileDOMReader } from "./roblox_file_reader";
import { RobloxFileDOMWriter } from "./roblox_file_writer";

// Helpful resources I used:
// https://dom.rojo.space/binary - Documentation for .rbxm format
// https://github.com/MaximumADHD/Roblox-File-Format - C# .rbxm parser

/**
 * Represents a Roblox model/place file. Contains all the data necessary for
 * saving/loading to a file.
 */
export class RobloxFile extends ChildContainer
{
    /**
     * Contains the mapping of metadata strings stored in the file. These come from the META chunk in the DOM.
     */
    public readonly Metadata: Map<string, string> = new Map<string, string>();
    
    /**
     * Contains the list of shared strings in the file. These come from the SSTR chunk in the DOM.
     */
    public readonly SharedStrings: SharedString[] = [];
    
    /**
     * This is used when loading and then saving a file to keep the reference to instance mapping consistent.
     * You probably shouldn't mess with this.
     */
    public readonly ReferentMap: Map<CoreInstance, number> = new Map<CoreInstance, number>();

    /**
     * The root instances of this file. This is a readonly array, to add or remove an instance
     * use AddToRoots and RemoveFromRoots
     */
    public get Roots(): readonly CoreInstance[]
    {
        return Array.from(this._children.values());
    }

    /**
     * Adds the given instance as a root of this file.
     * @param instance the instance
     */
    public AddRoot(instance: CoreInstance)
    {
        instance.RemoveParent();
        this._children.add(instance);
    }

    /**
     * Removes the given instance as a root of this file.
     * @param instance the instance
     */
    public RemoveFromRoots(instance: CoreInstance)
    {
        this._children.delete(instance);
        instance.Destroy();
    }

    /**
     * Writes this model to a Buffer and returns it.
     * @returns a Buffer object that contains the file data in binary form
     * @example const buffer = file.WriteToBuffer();
     * fs.writeFileSync("my_roblox_file.rbxm", buffer);
     */
    public WriteToBuffer()
    {
        return new RobloxFileDOMWriter(this).write();
    }

    /**
     * Create a RobloxFile from a buffer. You could use fs.readFile
     * to load a .rbxm file then pass the result to this function to load it.
     * @param buffer a data buffer
     * @returns a Roblox file object
     * @example const file = RobloxFile.ReadFromBuffer(fs.readFileSync("my_file.rbxm"));
     */
    public static ReadFromBuffer(buffer: Buffer)
    {
        const data = Uint8Array.from(buffer);
        return new RobloxFileDOMReader().read(data);
    }
}