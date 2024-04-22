/**
 * @author https://github.com/fiveman1
 * @file main.ts
 * Main function for testing purposes.
 */

import fs from "fs";
import { Instance } from "./lib/roblox_types";
import { RobloxModel } from "./lib/roblox_model";
import { Material } from "./generated/generated_types";

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
    for (const child of instance.Children)
    {
        s += depthFirstPrint(child, level + 1);
    }
    return s;
}

async function main()
{
    //const name = "test";
    //const model = RobloxModel.fromBuffer(fs.readFileSync(`input_files/${name}.rbxm`));
    //const model = RobloxModel.fromBuffer(fs.readFileSync(`input_files/${name}.rbxl`));

    //const assetId = 5258147910; // Map making starter kit
    //const assetId = 5227232138; // Numismatic
    //const assetId = 17195837905; // my test model

    const assetId = 4249137687; // Arcane
    const model = await RobloxModel.fromAssetId(assetId);

    if (!model)
    {
        console.log("Invalid model");
        return;
    }

    const root = model.roots[0];
    const firstPart = root.FindFirstDescendantOfClass("Part");
    if (firstPart)
    {
        const size = firstPart.Size;
        if (size)
        {
            console.log(`First part's size: ${size}`);
            size.x = 33333;
            size.y += 2;
            size.z *= 0.3;
            console.log(`First part's size (should not change yet): ${firstPart.Size}`);
            firstPart.Size = size;
            console.log(`First part's new size: ${firstPart.Size}`);
        }

        console.log(`First part can collide: ${firstPart.CanCollide}`);
        firstPart.CanCollide = !firstPart.CanCollide;
        console.log(`First part can collide: ${firstPart.CanCollide}`);

        console.log(`First part material: ${firstPart.Material}`);
        firstPart.Material = Material.Brick;
        console.log(`First part material: ${firstPart.Material}`);
    }

    const mapStringValues = root.FindChildrenOfClass("StringValue", (child) => child.Name === "DisplayName" || child.Name === "Creator");
    console.log("\n" + mapStringValues.join("\n"));
    
    let str = "";
    for (const root of model.roots)
    {
        str += depthFirstPrint(root, 0);
    }

    const name = assetId;
    fs.writeFileSync(`output_files/${name}.txt`, str);
}

main();