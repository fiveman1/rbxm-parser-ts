/**
 * @author https://github.com/fiveman1
 * @file roblox_model.ts
 * Contains the core classes to load and interact with a Roblox model.
 */

import axios from "axios";
import { ChildContainer, CoreInstance } from "./roblox_types";
import { RobloxModelDOMReader } from "./roblox_model_reader";

// Helpful resources I used:
// https://dom.rojo.space/binary - Documentation for .rbxm format
// https://github.com/MaximumADHD/Roblox-File-Format - C# .rbxm parser

export type SharedString = {
    Hash: string,
    SharedString: string
}

/**
 * Represents a Roblox model/place file. Contains all the data necessary for
 * saving/loading to a file.
 */
export class RobloxModel extends ChildContainer
{
    public readonly Metadata: Map<string, string> = new Map<string, string>();
    public readonly SharedStrings: SharedString[] = [];

    /**
     * The root instances of this model. This is a readonly array, to add or remove an instance
     * use AddToRoots and RemoveFromRoots
     */
    public get Roots(): readonly CoreInstance[]
    {
        return Array.from(this._children.values());
    }

    /**
     * Adds the given instance as a root of this model.
     * @param instance the instance
     */
    public AddToRoots(instance: CoreInstance)
    {
        this._children.add(instance);
    }

    /**
     * Removes the given instance as a root of this model.
     * @param instance the instance
     */
    public RemoveFromRoots(instance: CoreInstance)
    {
        this._children.delete(instance);
    }

    /**
     * Create a RobloxModel from an asset ID. The uses the Roblox AssetDelivery web API
     * to download the model using the given ID. If the provided asset ID is not a model,
     * this will return null. This may throw an error if there are problems accessing the API endpoint.
     * @param assetId the ID of the model
     * @returns a Roblox model object or null if the asset ID is not a valid model.
     * @example const model = await RobloxModel.ReadFromAssetId(4249137687);
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

        return RobloxModel.ReadFromBuffer(modelDomRes.data);
    }

    /**
     * Create a RobloxModel from a buffer or file. You could use fs.readFile
     * to load a .rbxm file then pass the result to this function to load it.
     * @param buffer a data buffer
     * @returns a Roblox model object
     * @example const model = RobloxModel.ReadFromBuffer(fs.readFileSync("my_model.rbxm"));
     */
    public static ReadFromBuffer(buffer: Buffer)
    {
        const data = Uint8Array.from(buffer);
        return new RobloxModelDOMReader().read(data);
    }
}