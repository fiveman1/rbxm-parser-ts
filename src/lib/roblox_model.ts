/**
 * @author https://github.com/fiveman1
 * @file roblox_model.ts
 * Contains the core classes to load and interact with a Roblox model.
 */

import axios from "axios";
import { Instance } from "./roblox_types";
import { RobloxModelDOMReader } from "./roblox_model_parser";

export class RobloxModel
{
    public roots: Instance[] = [];
    public version: number = 0;
    public numClasses: number = 0;
    public numInstances: number = 0;

    public constructor()
    {
        
    }

    /**
     * Create a RobloxModel from an asset ID. The uses the Roblox AssetDelivery web API
     * to download the model using the given ID. If the provided asset ID is not a model,
     * this will return null. This may throw an error if there are problems accessing the API endpoint.
     * @param assetId the ID of the model
     * @returns a Roblox model object or null if the asset ID is not a valid model.
     * @example const model = await RobloxModel.fromAssetId(4249137687);
     */
    public static async fromAssetId(assetId: number)
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
        const modelDomRes = await axios.get(location, {responseEncoding: "binary"});
        // https://stackoverflow.com/questions/62839519/how-convert-a-string-to-type-uint8array-in-nodejs
        const domData = Uint8Array.from(Array.from(modelDomRes.data).map(letter => (letter as string).charCodeAt(0)));
        return new RobloxModelDOMReader(domData).read();
    }

    /**
     * Create a RobloxModel from a buffer or file. You could use fs.readFile
     * to load a .rbxm file then pass the result to this function to load it.
     * @param buffer a data buffer
     * @returns a Roblox model object
     * @example const model = RobloxModel.fromBuffer(fs.readFileSync("my_model.rbxm"));
     */
    public static fromBuffer(buffer: Buffer)
    {
        const data = Uint8Array.from(buffer);
        return new RobloxModelDOMReader(data).read();
    }
}