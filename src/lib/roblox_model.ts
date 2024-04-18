/**
 * @author https://github.com/fiveman1
 * @file roblox_model.ts
 * Contains the core classes to represent a Roblox model.
 */

import { Instance } from "./roblox_types";

export class RobloxModel
{
    public root?: Instance;
    public version: number = 0;
    public numClasses: number = 0;
    public numInstances: number = 0;

    public constructor()
    {
        
    }
}