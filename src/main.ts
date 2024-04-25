/**
 * @author https://github.com/fiveman1
 * @file main.ts
 * Main function for testing purposes.
 */

import fs from "fs";
import { CoreInstance } from "./lib/roblox_types";
import { RobloxModel } from "./lib/roblox_model";
import { Material, PartType } from "./generated/generated_types";

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
    const assetId = 5227232138; // Numismatic
    //const assetId = 17195837905; // my test model

    //const assetId = 4249137687; // Arcane
    const model = await RobloxModel.ReadFromAssetId(assetId);

    if (!model)
    {
        console.log("Invalid model");
        return;
    }

    const root = model.Roots[0];
    const firstPart = root.FindFirstDescendantOfClass("Part");
    if (firstPart)
    {
        const size = firstPart.Size;
        if (size)
        {
            console.log(`First part's size: ${size}`);
            size.X = 33333;
            size.Y += 2;
            size.Z *= 0.3;
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

        console.log(firstPart.Color3uint8?.toString());
    }

    const mapStringValues = root.FindChildrenOfClass("StringValue", (child) => child.Name === "DisplayName" || child.Name === "Creator");
    console.log("\n" + mapStringValues.join("\n"));

    const baseParts = root.FindChildrenOfClass("BasePart");
    for (const part of baseParts)
    {
        if (part.IsA("Part"))
        {
            part.Shape = PartType.Cylinder;
        }
    }

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
}

main();