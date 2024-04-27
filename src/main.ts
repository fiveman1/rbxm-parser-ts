/**
 * @author https://github.com/fiveman1
 * @file main.ts
 * Main function for testing purposes.
 */

/* eslint-disable @typescript-eslint/no-unused-vars */

import fs from "fs";
import { CFrame, CoreInstance, Vector3 } from "./lib/roblox_types";
import { RobloxModel } from "./lib/roblox_model";
import { Material } from "./generated/generated_types";

function depthFirstPrint(instance: CoreInstance, level: number)
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
    //const name = "v16";
    //const model = RobloxModel.ReadFromBuffer(fs.readFileSync(`input_files/${name}.rbxm`));
    //const model = RobloxModel.ReadFromBuffer(fs.readFileSync(`input_files/${name}.rbxl`));

    //const assetId = 5258147910; // Map making starter kit
    //const assetId = 5227232138; // Numismatic
    const assetId = 17195837905; // my test model
    //const assetId = 17296983974;

    //const assetId = 4249137687; // Arcane
    console.log("first read");
    const model = await RobloxModel.ReadFromAssetId(assetId);

    if (!model)
    {
        console.log("Invalid model");
        return;
    }

    // const root = model.Roots[0];
    // const firstPart = root.FindFirstDescendantOfClass("Part");
    // if (firstPart)
    // {
    //     const size = firstPart.Size;
    //     if (size)
    //     {
    //         console.log(`First part's size: ${size}`);
    //         size.X = 33333;
    //         size.Y += 2;
    //         size.Z *= 0.3;
    //         console.log(`First part's size (should not change yet): ${firstPart.Size}`);
    //         firstPart.Size = size;
    //         console.log(`First part's new size: ${firstPart.Size}`);
    //     }

    //     console.log(`First part can collide: ${firstPart.CanCollide}`);
    //     firstPart.CanCollide = !firstPart.CanCollide;
    //     console.log(`First part can collide: ${firstPart.CanCollide}`);

    //     console.log(`First part material: ${firstPart.Material}`);
    //     firstPart.Material = Material.Brick;
    //     console.log(`First part material: ${firstPart.Material}`);

    //     console.log(firstPart.Color3uint8?.toString());
    // }

    // const mapStringValues = root.FindChildrenOfClass("StringValue", (child) => child.Name === "DisplayName" || child.Name === "Creator");
    // console.log("\n" + mapStringValues.join("\n"));

    // const baseParts = root.FindDescendantsOfClass("BasePart");
    // for (const part of baseParts)
    // {
    //     if (part.IsA("Part"))
    //     {
    //         console.log(part.Shape?.toString());
    //         break;
    //     }
    // }

    // const numberValues = root.FindDescendantsOfClass("NumberValue");
    // console.log("\n" + numberValues.join("\n"));
    
    let str = "";
    for (const root of model.Roots)
    {
        str += depthFirstPrint(root, 0);
    }

    const name = assetId;
    if (!fs.existsSync("output_files"))
    {
        fs.mkdirSync("output_files");
    }
    fs.writeFileSync(`output_files/${name}.txt`, str);

    console.log("writing");
    fs.writeFileSync(`output_files/${name}.rbxm`, model.WriteToBuffer());
    console.log("reading");
    const copyModel = RobloxModel.ReadFromBuffer(fs.readFileSync(`output_files/${name}.rbxm`));
    if (!copyModel) 
    {
        console.log("The written model was invalid..."); 
        return;
    }
    
    let copyStr = "";
    for (const root of copyModel.Roots)
    {
        copyStr += depthFirstPrint(root, 0);
    }
    fs.writeFileSync(`output_files/${name}_copy.txt`, copyStr);

    if (str !== copyStr)
    {
        console.log("they dont match :(");
    }
}

main();