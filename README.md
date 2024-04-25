# rbxm-parser

Parser for reading Roblox model (.rbxm) files. Written in TypeScript with strong typing automatically generated from Roblox.

Currently only supports reading models, but writing will be implemented in the future.

Finally, this only supports .rbxm (binary format) Roblox model files. Not planning to support .rbxmx (XML format).

## How To Use

### Imports

Import (ESM):

```ts
import { RobloxModel, ... } from "rbxm-parser";
```

Import (CJS):

```js
const RBXM = require("rbxm-parser");
const RobloxModel = RBXM.RoboxModel;
```

### Loading models

From an asset ID (this requires the model to be distributed and free on the Roblox Creator Hub):

```ts
const model = await RobloxModel.ReadFromAssetId(4249137687);
```

From a file:

```ts
const model = RobloxModel.ReadFromBuffer(fs.readFileSync("MyRobloxModel.rbxm"));
```

Note: When you load a model, it can have a return type of `null` in case the provided model was invalid, or the provided asset ID was not a model.

### Example

```ts
const root = model.Roots[0]; // Models can have multiple roots
const firstPart = root.FindFirstDescendantOfClass("Part"); // If using TS, firstPart will be strongly typed to a class of Part
if (firstPart)
{
    const size = firstPart.Size; // All property gets return a copy of the value (except for Instance types)
    if (size) // Not all properties are necessarily serialized in the DOM
    {
        size.X = 33333;
        size.Y += 2;
        size.Z *= 0.3;
        firstPart.Size = size;
    }
    firstPart.CanCollide = !firstPart.CanCollide;
    firstPart.Material = Material.Brick; // Material is an enum that can be imported
}

const baseParts = root.FindChildrenOfClass("BasePart");
for (const part of baseParts)
{
    if (part.IsA("Part")) // Use "IsA" for type safety
    {
        part.Shape = PartType.Cylinder; // Shape is a property of the class Part, but not BasePart
    }
}
```

All of the above property gets and sets are strongly typed.

## Developer Setup

`npm install`: Setup

`npm run generate`: Auto generate the Roblox types in `generated/generated_types.ts`

`npm run main`: Runs `main.ts`
