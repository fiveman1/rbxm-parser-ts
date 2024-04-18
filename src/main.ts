/**
 * @author https://github.com/fiveman1
 * @file main.ts
 * Main function for testing purposes.
 */

import { Instance } from "./lib/roblox_types";
import { RobloxModelDOM } from "./lib/roblox_model_parser";
import fs from "fs";

function depthFirstPrint(instance: Instance, level: number)
{
    let s = "";
    for (let i = 0; i < level - 1; ++i)
    {
        s += "   ";
    }
    if (level > 0)
    {
        s += "└──";
    }
    s += `${instance.toString()}\n`;
    for (const child of instance.children)
    {
        s += depthFirstPrint(child, level + 1);
    }
    return s;
}

async function main()
{
    //const assetId = 5258147910; // Map making starter kit
    //const assetId = 4249137687; // Arcane
    const assetId = 5227232138; // Numismatic
    //const assetId = 14530379695; // random model with UI (UDim/UDim2) elements
    const dom = await RobloxModelDOM.fromAssetId(assetId);
    if (!dom)
    {
        console.log(`Invalid model ID (${assetId})`);
        return;
    }

    const model = dom.parse();
    if (!model || !model.root)
    {
        console.log("Invalid model");
        return;
    }
    
    const str = depthFirstPrint(model.root, 0);
    fs.writeFileSync(`output_files/${assetId}.txt`, str);
}

main();