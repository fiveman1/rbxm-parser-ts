# rbxm-parser

Parser for reading and writing Roblox (.rbxm) files. Written in TypeScript with strong typing automatically generated from Roblox.

This only supports .rbxm (binary format) Roblox files. Not planning to support .rbxmx (XML format).

## How To Use

### Imports

Import (ESM):

```ts
import { RobloxFile, ... } from "rbxm-parser";
```

Import (CJS):

```js
const { RobloxFile, ... } = require("rbxm-parser");
```

### Loading

From an asset/model ID (this requires the model to be distributed and free on the Roblox Creator Hub):

```ts
const file = await RobloxFile.ReadFromAssetId(4249137687);
```

From a file:

```ts
const file = RobloxFile.ReadFromBuffer(fs.readFileSync("my_roblox_file.rbxm"));
```

Note: When you load a model, it can have a return type of `null` in case the provided model was invalid, or the provided asset ID was not a model.

### Saving

`RobloxFile` has the `WriteToBuffer` method, which returns a Buffer object that represents the binary data of the file. You could then save that to a file like so:

```ts
const buffer = file.WriteToBuffer();
fs.writeFileSync("my_roblox_file.rbxm", buffer);
```

### Example

```ts
const file = RobloxFile.ReadFromBuffer(fs.readFileSync("my_roblox_file.rbxm")); // Open a file
if (!file)
{
    return; // In case the file could not be read due to being in an invalid format
}

const firstPart = file.FindFirstDescendantOfClass("Part"); // FirstPart will be strongly typed to a class of Part

if (firstPart)
{
    const size = firstPart.Size; // All property gets return a copy of the value (except for Instance types)
    size.X = 33333; // Classes with default values for properties do not require null-checks for said properties
    size.Y += 2;
    size.Z *= 0.3;
    firstPart.Size = size;
    firstPart.CanCollide = true;
    firstPart.Transparency = 0.7;
    firstPart.Material = Material.Brick; // Material is an enum that can be imported
}

const baseParts = file.FindChildrenOfClass("BasePart");
for (const part of baseParts)
{
    if (part.IsA("Part")) // Use "IsA" for type safety
    {
        part.Shape = PartType.Cylinder; // Shape is a property of the class Part, but not BasePart
    }
    
    const myTexture = new Texture(); // You can create new instances directly like so
    myTexture.Parent = part;
    myTexture.Texture = "rbxassetid://6073594015";
    myTexture.StudsPerTileU = 4;
    myTexture.StudsPerTileV = 4;
    myTexture.Face = NormalId.Top;
    // Instances have (nearly) all of their property defaults defined in order to match how they are defaulted in Roblox
}

fs.writeFileSync("my_roblox_file_updated.rbxm", file.WriteToBuffer()); // Save to a new file
```

All of the above property gets and sets are strongly typed.

## Developer Setup

`npm install`: Setup

`npm run generate`: Auto generate the Roblox types in `generated/generated_types.ts`

`npm run main`: Runs `main.ts`

## References

I used the following resources extensively to help build this. Huge thanks to MaximumADHD and the Rojo team for providing these open source resources:

[Roblox File Format](https://github.com/MaximumADHD/Roblox-File-Format): A C# library by MaximumADHD for doing basically the same thing that this does.

[Roblox Client Tracker](https://github.com/MaximumADHD/Roblox-Client-Tracker/): Another tool by MaximumADHD which provides .json dumps of the Roblox classes and enums which is used to generate the typings provided by this library.

[Roblox Binary Model Format](https://dom.rojo.space/binary): Unofficial documentation for the .rbxm binary format created by the Rojo team.