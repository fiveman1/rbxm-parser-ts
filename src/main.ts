/**
 * @author https://github.com/fiveman1
 * @file main.ts
 */

/* eslint-disable @typescript-eslint/no-unused-vars */

import fs from "fs";
import { Color3, CoreInstance, Vector3 } from "./lib/roblox_types";
import { RobloxFile } from "./lib/roblox_file";
import { Model, NormalId, Part, Texture } from "./generated/generated_types";

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
    const name = "parser";
    //const model = RobloxFile.ReadFromBuffer(fs.readFileSync(`input_files/${name}.rbxm`));
    //const model = RobloxFile.ReadFromBuffer(fs.readFileSync(`input_files/${name}.rbxl`));

    //const assetId = 5258147910; // Map making starter kit
    //const assetId = 5227232138; // Numismatic
    //const assetId = 17195837905; // my test model
    //const assetId = 17296983974;
    //const assetId = 17324776967; // orientations

    //const assetId = 4249137687; // Arcane
    //const model = await RobloxFile.ReadFromAssetId(assetId);
    
    // const res = await axios.get("https://assetdelivery.roblox.com/v2/asset/", {
    //     params: {id: assetId},
    //     validateStatus: (status) => status === 404 || (status >= 200 && status < 300)
    // });

    // if (res.status === 404)
    // {
    //     return null;
    // }

    // const data = res.data;
    // // https://create.roblox.com/docs/reference/engine/enums/AssetType
    // if (data.assetTypeId !== 10) // Model = 10
    // {
    //     return null;
    // }

    // const location = data.locations[0].location;

    // const modelDomRes = await axios.get(location, { responseEncoding: "binary", responseType: "arraybuffer" });

    console.log("first read");
    const start = Date.now();
    const model = RobloxFile.ReadFromBuffer(fs.readFileSync(`input_files/${name}.rbxl`));
    //const model = RobloxFile.ReadFromBuffer(modelDomRes.data);
    const end = Date.now();
    console.log(`Read time: ${(end - start) / 1000}s`);

    if (!model)
    {
        console.log("Invalid model");
        return;
    }
    
    let str = "";
    for (const root of model.Roots)
    {
        str += depthFirstPrint(root, 0);
    }

    //const name = assetId;
    if (!fs.existsSync("output_files"))
    {
        fs.mkdirSync("output_files");
    }
    fs.writeFileSync(`output_files/${name}.txt`, str);

    console.log("writing");
    const testPart = new Part();
    const workspace = model.FindFirstChildOfClass("Workspace")!;
    testPart.Parent = workspace;
    
    fs.writeFileSync(`output_files/${name}.rbxl`, model.WriteToBuffer());
    // console.log("reading");
    // const copyModel = RobloxFile.ReadFromBuffer(fs.readFileSync(`output_files/${name}.rbxl`));
    // if (!copyModel) 
    // {
    //     console.log("The written model was invalid..."); 
    //     return;
    // }
    
    // let copyStr = "";
    // for (const root of copyModel.Roots)
    // {
    //     copyStr += depthFirstPrint(root, 0);
    // }
    // fs.writeFileSync(`output_files/${name}_copy.txt`, copyStr);

    // if (str !== copyStr)
    // {
    //     console.log("they dont match :(");
    // }

    // const beverages = model.FindFirstDescendant((child) => child.Name === "Beverages");
    // if (beverages)
    // {
    //     beverages.Destroy();
    // }
    // fs.writeFileSync(`output_files/${name}_edited.rbxm`, model.WriteToBuffer());
    // let editStr = "";
    // for (const root of model.Roots)
    // {
    //     editStr += depthFirstPrint(root, 0);
    // }
    // fs.writeFileSync(`output_files/${name}_edited.txt`, editStr);

    const myFile = new RobloxFile();
    const myModel = new Model();
    myModel.Name = "My Model :)";
    const myPart = new Part();
    myFile.AddRoot(myModel);
    myPart.Parent = myModel;
    myPart.Color3uint8 = Color3.FromRGB(0, 128, 255);
    myPart.Transparency = 0.3;
    myPart.Size = new Vector3(16, 8, 12);
    const myTexture = new Texture();
    myTexture.Parent = myPart;
    myTexture.Texture = "rbxassetid://6073594015";
    myTexture.StudsPerTileU = 4;
    myTexture.StudsPerTileV = 4;
    myTexture.Face = NormalId.Top;
    fs.writeFileSync(`output_files/myModel.rbxm`, myFile.WriteToBuffer());

    let myStr = "";
    for (const root of myFile.Roots)
    {
        myStr += depthFirstPrint(root, 0);
    }
    fs.writeFileSync(`output_files/myModel.txt`, myStr);
}

main();
