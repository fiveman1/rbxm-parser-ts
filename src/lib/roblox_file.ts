/**
 * @author https://github.com/fiveman1
 * Contains the core classes to load and interact with a Roblox model/place file.
 */

import axios from "axios";
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
    public readonly Metadata: Map<string, string> = new Map<string, string>();
    public readonly SharedStrings: SharedString[] = [];
    /**
     * This is used when loading and then saving a file to keep the references to instances consistent.
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
        this._children.add(instance);
    }

    /**
     * Removes the given instance as a root of this file.
     * @param instance the instance
     */
    public RemoveFromRoots(instance: CoreInstance)
    {
        this._children.delete(instance);
    }

    public WriteToBuffer()
    {
        return new RobloxFileDOMWriter(this).write();
    }

    /**
     * Create a RobloxFile from an asset ID. The uses the Roblox AssetDelivery web API
     * to download the model using the given ID. If the provided asset ID is not a model,
     * this will return null. This may throw an error if there are problems accessing the API endpoint.
     * @param assetId the ID of the model
     * @returns a Roblox file object or null if the asset ID is not a valid model.
     * @example const model = await RobloxFile.ReadFromAssetId(4249137687);
     */
    public static async ReadFromAssetId(assetId: number)
    {
        const res = await axios.get("https://assetdelivery.roblox.com/v2/asset/", {
            params: {id: assetId},
            validateStatus: (status) => status === 404 || (status >= 200 && status < 300)
        });
    
        if (res.status === 404)
        {
            return null;
        }
    
        const data = res.data;
        // https://create.roblox.com/docs/reference/engine/enums/AssetType
        if (data.assetTypeId !== 10) // Model = 10
        {
            return null;
        }
    
        const location = data.locations[0].location;

        const modelDomRes = await axios.get(location, { responseEncoding: "binary", responseType: "arraybuffer" });

        return RobloxFile.ReadFromBuffer(modelDomRes.data);
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