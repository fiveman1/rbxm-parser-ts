/**
 * @author https://github.com/fiveman1
 * @file roblox_model.ts
 * Contains the core classes to represent a Roblox model.
 */

export class Instance
{
    public className: string;
    public props: Map<string, any> = new Map<string, any>;
    public name: string = "";
    public parent?: Instance;
    public children: Array<Instance> = new Array<Instance>();

    public constructor(className: string)
    {
        this.className = className;
    }

    public setProp(propName: string, value: any)
    {
        if (propName === "Name")
        {
            this.name = value;
        }
        else
        {
            this.props.set(propName, value);
        }
    }

    public getTitleString()
    {
        return `${this.name} (class:${this.className})`;
    }

    public toString()
    {
        let s = `${this.getTitleString()} {`;
        this.props.forEach((value, key) => {
            s += `${key}: ${value.toString()}, `;
        });
        s += "}";
        if (s.endsWith(", }"))
        {
            s = s.slice(0, s.length - 3) + "}";
        }
        return s;
    }
}

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