/**
* @author https://github.com/fiveman1
* Contains generated types for Roblox classes and enums.
* Generated on 5/14/2025, 5:38:53 PM
*/

import { DataType, CoreInstance, Axes, CFrame, Color3, ColorSequence, ColorSequenceKeypoint, Faces, FontStyle, FontWeight, EnumItem, NumberRange, NumberSequence, 
         NumberSequenceKeypoint, Ray, RBXMAxis, RBXMFace, RBXMFont, Rect, Vector2, Vector3, UDim, UDim2, UniqueId } from "../lib/roblox_types";

export abstract class Instance extends CoreInstance {
    protected constructor(isService: boolean = false)
    {
        super(isService);
        this.addClassName("Instance");
        this.AttributesSerialize = "";
        this.Capabilities = BigInt(0);
        this.DefinesCapabilities = false;
        this.HistoryId = new UniqueId(0, 0, BigInt(0));
        this.SourceAssetId = BigInt(-1);
        this.Tags = "";
        this.UniqueId = new UniqueId(0, 0, BigInt(0));
        this.Archivable = true;
    }
    public get AttributesSerialize() {return this.GetProp("AttributesSerialize", DataType.String)!;}
    public set AttributesSerialize(value) {this.SetProp("AttributesSerialize", DataType.String, value);}
    public get Capabilities() {return this.GetProp("Capabilities", DataType.SecurityCapabilities)!;}
    public set Capabilities(value) {this.SetProp("Capabilities", DataType.SecurityCapabilities, value);}
    public get DefinesCapabilities() {return this.GetProp("DefinesCapabilities", DataType.Bool)!;}
    public set DefinesCapabilities(value) {this.SetProp("DefinesCapabilities", DataType.Bool, value);}
    public get HistoryId() {return this.GetProp("HistoryId", DataType.UniqueId)!;}
    public set HistoryId(value) {this.SetProp("HistoryId", DataType.UniqueId, value);}
    public get SourceAssetId() {return this.GetProp("SourceAssetId", DataType.Int64)!;}
    public set SourceAssetId(value) {this.SetProp("SourceAssetId", DataType.Int64, value);}
    public get Tags() {return this.GetProp("Tags", DataType.String)!;}
    public set Tags(value) {this.SetProp("Tags", DataType.String, value);}
    public get UniqueId() {return this.GetProp("UniqueId", DataType.UniqueId)!;}
    public set UniqueId(value) {this.SetProp("UniqueId", DataType.UniqueId, value);}
    /**@deprecated Deprecated by Roblox*/
    public get Archivable() {return this.GetProp("archivable", DataType.Bool)!;}
    /**@deprecated Deprecated by Roblox*/
    public set Archivable(value) {this.SetProp("archivable", DataType.Bool, value);}
}

export class AccessoryDescription extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AccessoryDescription");
        this.Name = "AccessoryDescription";
        this.AccessoryType = AccessoryType.Unknown;
        this.AssetId = BigInt(0);
        this.IsLayered = false;
        this.Order = 0;
        this.Position = new Vector3(0, 0, 0);
        this.Puffiness = 1;
        this.Rotation = new Vector3(0, 0, 0);
        this.Scale = new Vector3(1, 1, 1);
    }
    public get AccessoryType() {return this.GetProp("AccessoryType", DataType.Enum)! as AccessoryType;}
    public set AccessoryType(value) {this.SetProp("AccessoryType", DataType.Enum, value);}
    public get AssetId() {return this.GetProp("AssetId", DataType.Int64)!;}
    public set AssetId(value) {this.SetProp("AssetId", DataType.Int64, value);}
    public get Instance() {return this.GetProp("Instance", DataType.Referent) as Instance | undefined;}
    public set Instance(value) {this.SetProp("Instance", DataType.Referent, value);}
    public get IsLayered() {return this.GetProp("IsLayered", DataType.Bool)!;}
    public set IsLayered(value) {this.SetProp("IsLayered", DataType.Bool, value);}
    public get Order() {return this.GetProp("Order", DataType.Int32)!;}
    public set Order(value) {this.SetProp("Order", DataType.Int32, value);}
    public get Position() {return this.GetProp("Position", DataType.Vector3)!;}
    public set Position(value) {this.SetProp("Position", DataType.Vector3, value);}
    public get Puffiness() {return this.GetProp("Puffiness", DataType.Float32)!;}
    public set Puffiness(value) {this.SetProp("Puffiness", DataType.Float32, value);}
    public get Rotation() {return this.GetProp("Rotation", DataType.Vector3)!;}
    public set Rotation(value) {this.SetProp("Rotation", DataType.Vector3, value);}
    public get Scale() {return this.GetProp("Scale", DataType.Vector3)!;}
    public set Scale(value) {this.SetProp("Scale", DataType.Vector3, value);}
}

export class AccountService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("AccountService");
        this.Name = "AccountService";
    }
}

export class Accoutrement extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Accoutrement");
        this.Name = "Accoutrement";
        this.AttachmentPoint = CFrame.Identity;
    }
    public get AttachmentPoint() {return this.GetProp("AttachmentPoint", DataType.CFrame)!;}
    public set AttachmentPoint(value) {this.SetProp("AttachmentPoint", DataType.CFrame, value);}
}

export class Accessory extends Accoutrement {
    public constructor()
    {
        super();
        this.addClassName("Accessory");
        this.Name = "Accessory";
        this.AccessoryType = AccessoryType.Unknown;
    }
    public get AccessoryType() {return this.GetProp("AccessoryType", DataType.Enum)! as AccessoryType;}
    public set AccessoryType(value) {this.SetProp("AccessoryType", DataType.Enum, value);}
}

/**@deprecated Deprecated by Roblox*/
export class Hat extends Accoutrement {
    public constructor()
    {
        super();
        this.addClassName("Hat");
        this.Name = "Hat";
    }
}

export class AchievementService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("AchievementService");
        this.Name = "AchievementService";
    }
}

export class ActivityHistoryEventService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ActivityHistoryEventService");
        this.Name = "ActivityHistoryEventService";
    }
}

export class AdPortal extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AdPortal");
        this.Name = "AdPortal";
    }
}

export class AdService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("AdService");
        this.Name = "AdService";
    }
}

export class AdvancedDragger extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AdvancedDragger");
        this.Name = "AdvancedDragger";
    }
}

export class AnalyticsService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("AnalyticsService");
        this.Name = "AnalyticsService";
        this.ApiKey = "";
    }
    /**@deprecated Deprecated by Roblox*/
    public get ApiKey() {return this.GetProp("ApiKey", DataType.String)!;}
    /**@deprecated Deprecated by Roblox*/
    public set ApiKey(value) {this.SetProp("ApiKey", DataType.String, value);}
}

export class Animation extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Animation");
        this.Name = "Animation";
        this.AnimationId = "";
    }
    public get AnimationId() {return this.GetProp("AnimationId", DataType.String)!;}
    public set AnimationId(value) {this.SetProp("AnimationId", DataType.String, value);}
}

export abstract class AnimationClip extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AnimationClip");
        this.Loop = true;
        this.Priority = AnimationPriority.Action;
    }
    public get GuidBinaryString() {return this.GetProp("GuidBinaryString", DataType.String);}
    public set GuidBinaryString(value) {this.SetProp("GuidBinaryString", DataType.String, value);}
    public get Loop() {return this.GetProp("Loop", DataType.Bool)!;}
    public set Loop(value) {this.SetProp("Loop", DataType.Bool, value);}
    public get Priority() {return this.GetProp("Priority", DataType.Enum)! as AnimationPriority;}
    public set Priority(value) {this.SetProp("Priority", DataType.Enum, value);}
}

export class CurveAnimation extends AnimationClip {
    public constructor()
    {
        super();
        this.addClassName("CurveAnimation");
        this.Name = "CurveAnimation";
    }
}

export class KeyframeSequence extends AnimationClip {
    public constructor()
    {
        super();
        this.addClassName("KeyframeSequence");
        this.Name = "KeyframeSequence";
        this.AuthoredHipHeight = 2;
    }
    public get AuthoredHipHeight() {return this.GetProp("AuthoredHipHeight", DataType.Float32)!;}
    public set AuthoredHipHeight(value) {this.SetProp("AuthoredHipHeight", DataType.Float32, value);}
}

export class AnimationClipProvider extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("AnimationClipProvider");
        this.Name = "AnimationClipProvider";
    }
}

export class AnimationController extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AnimationController");
        this.Name = "AnimationController";
    }
}

export class AnimationFromVideoCreatorService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("AnimationFromVideoCreatorService");
        this.Name = "AnimationFromVideoCreatorService";
    }
}

export class AnimationFromVideoCreatorStudioService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("AnimationFromVideoCreatorStudioService");
        this.Name = "AnimationFromVideoCreatorStudioService";
    }
}

export class AnimationRigData extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AnimationRigData");
        this.Name = "AnimationRigData";
        this.Label = "\u0001";
        this.PostTransform = "\u0001";
        this.PreTransform = "\u0001";
        this.Transform = "\u0001";
    }
    public get Label() {return this.GetProp("label", DataType.String)!;}
    public set Label(value) {this.SetProp("label", DataType.String, value);}
    public get PostTransform() {return this.GetProp("postTransform", DataType.String)!;}
    public set PostTransform(value) {this.SetProp("postTransform", DataType.String, value);}
    public get PreTransform() {return this.GetProp("preTransform", DataType.String)!;}
    public set PreTransform(value) {this.SetProp("preTransform", DataType.String, value);}
    public get Transform() {return this.GetProp("transform", DataType.String)!;}
    public set Transform(value) {this.SetProp("transform", DataType.String, value);}
}

export class Animator extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Animator");
        this.Name = "Animator";
        this.PreferLodEnabled = true;
    }
    public get PreferLodEnabled() {return this.GetProp("PreferLodEnabled", DataType.Bool)!;}
    public set PreferLodEnabled(value) {this.SetProp("PreferLodEnabled", DataType.Bool, value);}
}

export class Annotation extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Annotation");
        this.Name = "Annotation";
    }
}

export class WorkspaceAnnotation extends Annotation {
    public constructor()
    {
        super();
        this.addClassName("WorkspaceAnnotation");
        this.Name = "WorkspaceAnnotation";
    }
}

export class AnnotationsService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("AnnotationsService");
        this.Name = "AnnotationsService";
    }
}

export class AppLifecycleObserverService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("AppLifecycleObserverService");
        this.Name = "AppLifecycleObserverService";
    }
}

export class AppUpdateService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("AppUpdateService");
        this.Name = "AppUpdateService";
    }
}

export class AssetCounterService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("AssetCounterService");
        this.Name = "AssetCounterService";
    }
}

export class AssetDeliveryProxy extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("AssetDeliveryProxy");
        this.Name = "AssetDeliveryProxy";
        this.Interface = "";
        this.Port = 0;
        this.StartServer = false;
    }
    public get Interface() {return this.GetProp("Interface", DataType.String)!;}
    public set Interface(value) {this.SetProp("Interface", DataType.String, value);}
    public get Port() {return this.GetProp("Port", DataType.Int32)!;}
    public set Port(value) {this.SetProp("Port", DataType.Int32, value);}
    public get StartServer() {return this.GetProp("StartServer", DataType.Bool)!;}
    public set StartServer(value) {this.SetProp("StartServer", DataType.Bool, value);}
}

export class AssetImportService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("AssetImportService");
        this.Name = "AssetImportService";
    }
}

export class AssetManagerService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("AssetManagerService");
        this.Name = "AssetManagerService";
    }
}

export class AssetService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("AssetService");
        this.Name = "AssetService";
    }
}

export class Atmosphere extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Atmosphere");
        this.Name = "Atmosphere";
        this.Color = Color3.FromRGB(200, 170, 108);
        this.Decay = Color3.FromRGB(92, 60, 14);
        this.Density = 0.395;
        this.Glare = 0;
        this.Haze = 0;
        this.Offset = 0;
    }
    public get Color() {return this.GetProp("Color", DataType.Color3)!;}
    public set Color(value) {this.SetProp("Color", DataType.Color3, value);}
    public get Decay() {return this.GetProp("Decay", DataType.Color3)!;}
    public set Decay(value) {this.SetProp("Decay", DataType.Color3, value);}
    public get Density() {return this.GetProp("Density", DataType.Float32)!;}
    public set Density(value) {this.SetProp("Density", DataType.Float32, value);}
    public get Glare() {return this.GetProp("Glare", DataType.Float32)!;}
    public set Glare(value) {this.SetProp("Glare", DataType.Float32, value);}
    public get Haze() {return this.GetProp("Haze", DataType.Float32)!;}
    public set Haze(value) {this.SetProp("Haze", DataType.Float32, value);}
    public get Offset() {return this.GetProp("Offset", DataType.Float32)!;}
    public set Offset(value) {this.SetProp("Offset", DataType.Float32, value);}
}

export class Attachment extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Attachment");
        this.Name = "Attachment";
        this.Visible = false;
        this.CFrame = CFrame.Identity;
    }
    public get CFrame() {return this.GetProp("CFrame", DataType.CFrame)!;}
    public set CFrame(value) {this.SetProp("CFrame", DataType.CFrame, value);}
    public get Visible() {return this.GetProp("Visible", DataType.Bool)!;}
    public set Visible(value) {this.SetProp("Visible", DataType.Bool, value);}
}

export class Bone extends Attachment {
    public constructor()
    {
        super();
        this.addClassName("Bone");
        this.Name = "Bone";
    }
}

export class AudioAnalyzer extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AudioAnalyzer");
        this.Name = "AudioAnalyzer";
        this.SpectrumEnabled = true;
        this.WindowSize = AudioWindowSize.Medium;
    }
    public get SpectrumEnabled() {return this.GetProp("SpectrumEnabled", DataType.Bool)!;}
    public set SpectrumEnabled(value) {this.SetProp("SpectrumEnabled", DataType.Bool, value);}
    public get WindowSize() {return this.GetProp("WindowSize", DataType.Enum)! as AudioWindowSize;}
    public set WindowSize(value) {this.SetProp("WindowSize", DataType.Enum, value);}
}

export class AudioChannelMixer extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AudioChannelMixer");
        this.Name = "AudioChannelMixer";
        this.Layout = AudioChannelLayout.Stereo;
    }
    public get Layout() {return this.GetProp("Layout", DataType.Enum)! as AudioChannelLayout;}
    public set Layout(value) {this.SetProp("Layout", DataType.Enum, value);}
}

export class AudioChannelSplitter extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AudioChannelSplitter");
        this.Name = "AudioChannelSplitter";
        this.Layout = AudioChannelLayout.Stereo;
    }
    public get Layout() {return this.GetProp("Layout", DataType.Enum)! as AudioChannelLayout;}
    public set Layout(value) {this.SetProp("Layout", DataType.Enum, value);}
}

export class AudioChorus extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AudioChorus");
        this.Name = "AudioChorus";
        this.Bypass = false;
        this.Depth = 0.45;
        this.Mix = 0.85;
        this.Rate = 5;
    }
    public get Bypass() {return this.GetProp("Bypass", DataType.Bool)!;}
    public set Bypass(value) {this.SetProp("Bypass", DataType.Bool, value);}
    public get Depth() {return this.GetProp("Depth", DataType.Float32)!;}
    public set Depth(value) {this.SetProp("Depth", DataType.Float32, value);}
    public get Mix() {return this.GetProp("Mix", DataType.Float32)!;}
    public set Mix(value) {this.SetProp("Mix", DataType.Float32, value);}
    public get Rate() {return this.GetProp("Rate", DataType.Float32)!;}
    public set Rate(value) {this.SetProp("Rate", DataType.Float32, value);}
}

export class AudioCompressor extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AudioCompressor");
        this.Name = "AudioCompressor";
        this.Attack = 0.1;
        this.Bypass = false;
        this.MakeupGain = 0;
        this.Ratio = 40;
        this.Release = 0.1;
        this.Threshold = -40;
    }
    public get Attack() {return this.GetProp("Attack", DataType.Float32)!;}
    public set Attack(value) {this.SetProp("Attack", DataType.Float32, value);}
    public get Bypass() {return this.GetProp("Bypass", DataType.Bool)!;}
    public set Bypass(value) {this.SetProp("Bypass", DataType.Bool, value);}
    public get MakeupGain() {return this.GetProp("MakeupGain", DataType.Float32)!;}
    public set MakeupGain(value) {this.SetProp("MakeupGain", DataType.Float32, value);}
    public get Ratio() {return this.GetProp("Ratio", DataType.Float32)!;}
    public set Ratio(value) {this.SetProp("Ratio", DataType.Float32, value);}
    public get Release() {return this.GetProp("Release", DataType.Float32)!;}
    public set Release(value) {this.SetProp("Release", DataType.Float32, value);}
    public get Threshold() {return this.GetProp("Threshold", DataType.Float32)!;}
    public set Threshold(value) {this.SetProp("Threshold", DataType.Float32, value);}
}

export class AudioDeviceInput extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AudioDeviceInput");
        this.Name = "AudioDeviceInput";
        this.AccessType = AccessModifierType.Deny;
        this.Active = true;
        this.Muted = false;
        this.Volume = 1;
    }
    public get AccessType() {return this.GetProp("AccessType", DataType.Enum)! as AccessModifierType;}
    public set AccessType(value) {this.SetProp("AccessType", DataType.Enum, value);}
    public get Active() {return this.GetProp("Active", DataType.Bool)!;}
    public set Active(value) {this.SetProp("Active", DataType.Bool, value);}
    public get Muted() {return this.GetProp("Muted", DataType.Bool)!;}
    public set Muted(value) {this.SetProp("Muted", DataType.Bool, value);}
    public get Player() {return this.GetProp("Player", DataType.Referent) as Player | undefined;}
    public set Player(value) {this.SetProp("Player", DataType.Referent, value);}
    public get Volume() {return this.GetProp("Volume", DataType.Float32)!;}
    public set Volume(value) {this.SetProp("Volume", DataType.Float32, value);}
}

export class AudioDeviceOutput extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AudioDeviceOutput");
        this.Name = "AudioDeviceOutput";
    }
    public get Player() {return this.GetProp("Player", DataType.Referent) as Player | undefined;}
    public set Player(value) {this.SetProp("Player", DataType.Referent, value);}
}

export class AudioDistortion extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AudioDistortion");
        this.Name = "AudioDistortion";
        this.Bypass = false;
        this.Level = 0.5;
    }
    public get Bypass() {return this.GetProp("Bypass", DataType.Bool)!;}
    public set Bypass(value) {this.SetProp("Bypass", DataType.Bool, value);}
    public get Level() {return this.GetProp("Level", DataType.Float32)!;}
    public set Level(value) {this.SetProp("Level", DataType.Float32, value);}
}

export class AudioEcho extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AudioEcho");
        this.Name = "AudioEcho";
        this.Bypass = false;
        this.DelayTime = 1;
        this.DryLevel = 0;
        this.Feedback = 0.5;
        this.RampTime = 0;
        this.WetLevel = 0;
    }
    public get Bypass() {return this.GetProp("Bypass", DataType.Bool)!;}
    public set Bypass(value) {this.SetProp("Bypass", DataType.Bool, value);}
    public get DelayTime() {return this.GetProp("DelayTime", DataType.Float32)!;}
    public set DelayTime(value) {this.SetProp("DelayTime", DataType.Float32, value);}
    public get DryLevel() {return this.GetProp("DryLevel", DataType.Float32)!;}
    public set DryLevel(value) {this.SetProp("DryLevel", DataType.Float32, value);}
    public get Feedback() {return this.GetProp("Feedback", DataType.Float32)!;}
    public set Feedback(value) {this.SetProp("Feedback", DataType.Float32, value);}
    public get RampTime() {return this.GetProp("RampTime", DataType.Float32)!;}
    public set RampTime(value) {this.SetProp("RampTime", DataType.Float32, value);}
    public get WetLevel() {return this.GetProp("WetLevel", DataType.Float32)!;}
    public set WetLevel(value) {this.SetProp("WetLevel", DataType.Float32, value);}
}

export class AudioEmitter extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AudioEmitter");
        this.Name = "AudioEmitter";
        this.AngleAttenuation = "";
        this.AudioInteractionGroup = "";
        this.DistanceAttenuation = "";
        this.SimulationFidelity = AudioSimulationFidelity.Automatic;
    }
    public get AngleAttenuation() {return this.GetProp("AngleAttenuation", DataType.String)!;}
    public set AngleAttenuation(value) {this.SetProp("AngleAttenuation", DataType.String, value);}
    public get AudioInteractionGroup() {return this.GetProp("AudioInteractionGroup", DataType.String)!;}
    public set AudioInteractionGroup(value) {this.SetProp("AudioInteractionGroup", DataType.String, value);}
    public get DistanceAttenuation() {return this.GetProp("DistanceAttenuation", DataType.String)!;}
    public set DistanceAttenuation(value) {this.SetProp("DistanceAttenuation", DataType.String, value);}
    public get SimulationFidelity() {return this.GetProp("SimulationFidelity", DataType.Enum)! as AudioSimulationFidelity;}
    public set SimulationFidelity(value) {this.SetProp("SimulationFidelity", DataType.Enum, value);}
}

export class AudioEqualizer extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AudioEqualizer");
        this.Name = "AudioEqualizer";
        this.Bypass = false;
        this.HighGain = 0;
        this.LowGain = 0;
        this.MidGain = 0;
        this.MidRange = new NumberRange(400, 4000);
    }
    public get Bypass() {return this.GetProp("Bypass", DataType.Bool)!;}
    public set Bypass(value) {this.SetProp("Bypass", DataType.Bool, value);}
    public get HighGain() {return this.GetProp("HighGain", DataType.Float32)!;}
    public set HighGain(value) {this.SetProp("HighGain", DataType.Float32, value);}
    public get LowGain() {return this.GetProp("LowGain", DataType.Float32)!;}
    public set LowGain(value) {this.SetProp("LowGain", DataType.Float32, value);}
    public get MidGain() {return this.GetProp("MidGain", DataType.Float32)!;}
    public set MidGain(value) {this.SetProp("MidGain", DataType.Float32, value);}
    public get MidRange() {return this.GetProp("MidRange", DataType.NumberRange)!;}
    public set MidRange(value) {this.SetProp("MidRange", DataType.NumberRange, value);}
}

export class AudioFader extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AudioFader");
        this.Name = "AudioFader";
        this.Bypass = false;
        this.Volume = 1;
    }
    public get Bypass() {return this.GetProp("Bypass", DataType.Bool)!;}
    public set Bypass(value) {this.SetProp("Bypass", DataType.Bool, value);}
    public get Volume() {return this.GetProp("Volume", DataType.Float32)!;}
    public set Volume(value) {this.SetProp("Volume", DataType.Float32, value);}
}

export class AudioFilter extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AudioFilter");
        this.Name = "AudioFilter";
        this.Bypass = false;
        this.FilterType = AudioFilterType.Peak;
        this.Frequency = 2000;
        this.Gain = 0;
        this.Q = 0.707;
    }
    public get Bypass() {return this.GetProp("Bypass", DataType.Bool)!;}
    public set Bypass(value) {this.SetProp("Bypass", DataType.Bool, value);}
    public get FilterType() {return this.GetProp("FilterType", DataType.Enum)! as AudioFilterType;}
    public set FilterType(value) {this.SetProp("FilterType", DataType.Enum, value);}
    public get Frequency() {return this.GetProp("Frequency", DataType.Float32)!;}
    public set Frequency(value) {this.SetProp("Frequency", DataType.Float32, value);}
    public get Gain() {return this.GetProp("Gain", DataType.Float32)!;}
    public set Gain(value) {this.SetProp("Gain", DataType.Float32, value);}
    public get Q() {return this.GetProp("Q", DataType.Float32)!;}
    public set Q(value) {this.SetProp("Q", DataType.Float32, value);}
}

export class AudioFlanger extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AudioFlanger");
        this.Name = "AudioFlanger";
        this.Bypass = false;
        this.Depth = 0.45;
        this.Mix = 0.85;
        this.Rate = 5;
    }
    public get Bypass() {return this.GetProp("Bypass", DataType.Bool)!;}
    public set Bypass(value) {this.SetProp("Bypass", DataType.Bool, value);}
    public get Depth() {return this.GetProp("Depth", DataType.Float32)!;}
    public set Depth(value) {this.SetProp("Depth", DataType.Float32, value);}
    public get Mix() {return this.GetProp("Mix", DataType.Float32)!;}
    public set Mix(value) {this.SetProp("Mix", DataType.Float32, value);}
    public get Rate() {return this.GetProp("Rate", DataType.Float32)!;}
    public set Rate(value) {this.SetProp("Rate", DataType.Float32, value);}
}

export class AudioFocusService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("AudioFocusService");
        this.Name = "AudioFocusService";
    }
}

export class AudioLimiter extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AudioLimiter");
        this.Name = "AudioLimiter";
        this.Bypass = false;
        this.MaxLevel = 0;
        this.Release = 0.01;
    }
    public get Bypass() {return this.GetProp("Bypass", DataType.Bool)!;}
    public set Bypass(value) {this.SetProp("Bypass", DataType.Bool, value);}
    public get MaxLevel() {return this.GetProp("MaxLevel", DataType.Float32)!;}
    public set MaxLevel(value) {this.SetProp("MaxLevel", DataType.Float32, value);}
    public get Release() {return this.GetProp("Release", DataType.Float32)!;}
    public set Release(value) {this.SetProp("Release", DataType.Float32, value);}
}

export class AudioListener extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AudioListener");
        this.Name = "AudioListener";
        this.AngleAttenuation = "";
        this.AudioInteractionGroup = "";
        this.DistanceAttenuation = "";
        this.SimulationFidelity = AudioSimulationFidelity.Automatic;
    }
    public get AngleAttenuation() {return this.GetProp("AngleAttenuation", DataType.String)!;}
    public set AngleAttenuation(value) {this.SetProp("AngleAttenuation", DataType.String, value);}
    public get AudioInteractionGroup() {return this.GetProp("AudioInteractionGroup", DataType.String)!;}
    public set AudioInteractionGroup(value) {this.SetProp("AudioInteractionGroup", DataType.String, value);}
    public get DistanceAttenuation() {return this.GetProp("DistanceAttenuation", DataType.String)!;}
    public set DistanceAttenuation(value) {this.SetProp("DistanceAttenuation", DataType.String, value);}
    public get SimulationFidelity() {return this.GetProp("SimulationFidelity", DataType.Enum)! as AudioSimulationFidelity;}
    public set SimulationFidelity(value) {this.SetProp("SimulationFidelity", DataType.Enum, value);}
}

export class AudioPitchShifter extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AudioPitchShifter");
        this.Name = "AudioPitchShifter";
        this.Bypass = false;
        this.Pitch = 1.25;
        this.WindowSize = AudioWindowSize.Medium;
    }
    public get Bypass() {return this.GetProp("Bypass", DataType.Bool)!;}
    public set Bypass(value) {this.SetProp("Bypass", DataType.Bool, value);}
    public get Pitch() {return this.GetProp("Pitch", DataType.Float32)!;}
    public set Pitch(value) {this.SetProp("Pitch", DataType.Float32, value);}
    public get WindowSize() {return this.GetProp("WindowSize", DataType.Enum)! as AudioWindowSize;}
    public set WindowSize(value) {this.SetProp("WindowSize", DataType.Enum, value);}
}

export class AudioPlayer extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AudioPlayer");
        this.Name = "AudioPlayer";
        this.Asset = "";
        this.AssetId = "";
        this.AutoLoad = true;
        this.LoopRegion = new NumberRange(0, 60000);
        this.Looping = false;
        this.PlaybackRegion = new NumberRange(0, 60000);
        this.PlaybackSpeed = 1;
        this.TimePosition = 0;
        this.Volume = 1;
    }
    public get Asset() {return this.GetProp("Asset", DataType.String)!;}
    public set Asset(value) {this.SetProp("Asset", DataType.String, value);}
    /**@deprecated Deprecated by Roblox*/
    public get AssetId() {return this.GetProp("AssetId", DataType.String)!;}
    /**@deprecated Deprecated by Roblox*/
    public set AssetId(value) {this.SetProp("AssetId", DataType.String, value);}
    public get AutoLoad() {return this.GetProp("AutoLoad", DataType.Bool)!;}
    public set AutoLoad(value) {this.SetProp("AutoLoad", DataType.Bool, value);}
    public get LoopRegion() {return this.GetProp("LoopRegion", DataType.NumberRange)!;}
    public set LoopRegion(value) {this.SetProp("LoopRegion", DataType.NumberRange, value);}
    public get Looping() {return this.GetProp("Looping", DataType.Bool)!;}
    public set Looping(value) {this.SetProp("Looping", DataType.Bool, value);}
    public get PlaybackRegion() {return this.GetProp("PlaybackRegion", DataType.NumberRange)!;}
    public set PlaybackRegion(value) {this.SetProp("PlaybackRegion", DataType.NumberRange, value);}
    public get PlaybackSpeed() {return this.GetProp("PlaybackSpeed", DataType.Float64)!;}
    public set PlaybackSpeed(value) {this.SetProp("PlaybackSpeed", DataType.Float64, value);}
    public get TimePosition() {return this.GetProp("TimePosition", DataType.Float64)!;}
    public set TimePosition(value) {this.SetProp("TimePosition", DataType.Float64, value);}
    public get Volume() {return this.GetProp("Volume", DataType.Float32)!;}
    public set Volume(value) {this.SetProp("Volume", DataType.Float32, value);}
}

export class AudioRecorder extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AudioRecorder");
        this.Name = "AudioRecorder";
        this.IsRecording = false;
    }
    public get IsRecording() {return this.GetProp("IsRecording", DataType.Bool)!;}
    public set IsRecording(value) {this.SetProp("IsRecording", DataType.Bool, value);}
}

export class AudioReverb extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AudioReverb");
        this.Name = "AudioReverb";
        this.Bypass = false;
        this.DecayRatio = 0.5;
        this.DecayTime = 1.5;
        this.Density = 1;
        this.Diffusion = 1;
        this.DryLevel = 0;
        this.EarlyDelayTime = 0.02;
        this.HighCutFrequency = 20000;
        this.LateDelayTime = 0.04;
        this.LowShelfFrequency = 250;
        this.LowShelfGain = 0;
        this.ReferenceFrequency = 5000;
        this.WetLevel = -6;
    }
    public get Bypass() {return this.GetProp("Bypass", DataType.Bool)!;}
    public set Bypass(value) {this.SetProp("Bypass", DataType.Bool, value);}
    public get DecayRatio() {return this.GetProp("DecayRatio", DataType.Float32)!;}
    public set DecayRatio(value) {this.SetProp("DecayRatio", DataType.Float32, value);}
    public get DecayTime() {return this.GetProp("DecayTime", DataType.Float32)!;}
    public set DecayTime(value) {this.SetProp("DecayTime", DataType.Float32, value);}
    public get Density() {return this.GetProp("Density", DataType.Float32)!;}
    public set Density(value) {this.SetProp("Density", DataType.Float32, value);}
    public get Diffusion() {return this.GetProp("Diffusion", DataType.Float32)!;}
    public set Diffusion(value) {this.SetProp("Diffusion", DataType.Float32, value);}
    public get DryLevel() {return this.GetProp("DryLevel", DataType.Float32)!;}
    public set DryLevel(value) {this.SetProp("DryLevel", DataType.Float32, value);}
    public get EarlyDelayTime() {return this.GetProp("EarlyDelayTime", DataType.Float32)!;}
    public set EarlyDelayTime(value) {this.SetProp("EarlyDelayTime", DataType.Float32, value);}
    public get HighCutFrequency() {return this.GetProp("HighCutFrequency", DataType.Float32)!;}
    public set HighCutFrequency(value) {this.SetProp("HighCutFrequency", DataType.Float32, value);}
    public get LateDelayTime() {return this.GetProp("LateDelayTime", DataType.Float32)!;}
    public set LateDelayTime(value) {this.SetProp("LateDelayTime", DataType.Float32, value);}
    public get LowShelfFrequency() {return this.GetProp("LowShelfFrequency", DataType.Float32)!;}
    public set LowShelfFrequency(value) {this.SetProp("LowShelfFrequency", DataType.Float32, value);}
    public get LowShelfGain() {return this.GetProp("LowShelfGain", DataType.Float32)!;}
    public set LowShelfGain(value) {this.SetProp("LowShelfGain", DataType.Float32, value);}
    public get ReferenceFrequency() {return this.GetProp("ReferenceFrequency", DataType.Float32)!;}
    public set ReferenceFrequency(value) {this.SetProp("ReferenceFrequency", DataType.Float32, value);}
    public get WetLevel() {return this.GetProp("WetLevel", DataType.Float32)!;}
    public set WetLevel(value) {this.SetProp("WetLevel", DataType.Float32, value);}
}

export class AudioSearchParams extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AudioSearchParams");
        this.Name = "AudioSearchParams";
        this.Album = "";
        this.Artist = "";
        this.AudioSubType = AudioSubType.Music;
        this.AudioSubtype = AudioSubType.Music;
        this.MaxDuration = 2147483647;
        this.MinDuration = 0;
        this.SearchKeyword = "";
        this.Tag = "";
        this.Title = "";
    }
    public get Album() {return this.GetProp("Album", DataType.String)!;}
    public set Album(value) {this.SetProp("Album", DataType.String, value);}
    public get Artist() {return this.GetProp("Artist", DataType.String)!;}
    public set Artist(value) {this.SetProp("Artist", DataType.String, value);}
    public get AudioSubType() {return this.GetProp("AudioSubType", DataType.Enum)! as AudioSubType;}
    public set AudioSubType(value) {this.SetProp("AudioSubType", DataType.Enum, value);}
    /**@deprecated Deprecated by Roblox*/
    public get AudioSubtype() {return this.GetProp("AudioSubtype", DataType.Enum)! as AudioSubType;}
    /**@deprecated Deprecated by Roblox*/
    public set AudioSubtype(value) {this.SetProp("AudioSubtype", DataType.Enum, value);}
    public get MaxDuration() {return this.GetProp("MaxDuration", DataType.Int32)!;}
    public set MaxDuration(value) {this.SetProp("MaxDuration", DataType.Int32, value);}
    public get MinDuration() {return this.GetProp("MinDuration", DataType.Int32)!;}
    public set MinDuration(value) {this.SetProp("MinDuration", DataType.Int32, value);}
    public get SearchKeyword() {return this.GetProp("SearchKeyword", DataType.String)!;}
    public set SearchKeyword(value) {this.SetProp("SearchKeyword", DataType.String, value);}
    public get Tag() {return this.GetProp("Tag", DataType.String)!;}
    public set Tag(value) {this.SetProp("Tag", DataType.String, value);}
    public get Title() {return this.GetProp("Title", DataType.String)!;}
    public set Title(value) {this.SetProp("Title", DataType.String, value);}
}

export class AudioTextToSpeech extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AudioTextToSpeech");
        this.Name = "AudioTextToSpeech";
        this.Looping = false;
        this.Pitch = 0;
        this.PlaybackSpeed = 1;
        this.Speed = 1;
        this.Text = "";
        this.TimePosition = 0;
        this.VoiceId = "";
        this.Volume = 1;
    }
    public get Looping() {return this.GetProp("Looping", DataType.Bool)!;}
    public set Looping(value) {this.SetProp("Looping", DataType.Bool, value);}
    public get Pitch() {return this.GetProp("Pitch", DataType.Float32)!;}
    public set Pitch(value) {this.SetProp("Pitch", DataType.Float32, value);}
    public get PlaybackSpeed() {return this.GetProp("PlaybackSpeed", DataType.Float32)!;}
    public set PlaybackSpeed(value) {this.SetProp("PlaybackSpeed", DataType.Float32, value);}
    public get Speed() {return this.GetProp("Speed", DataType.Float32)!;}
    public set Speed(value) {this.SetProp("Speed", DataType.Float32, value);}
    public get Text() {return this.GetProp("Text", DataType.String)!;}
    public set Text(value) {this.SetProp("Text", DataType.String, value);}
    public get TimePosition() {return this.GetProp("TimePosition", DataType.Float64)!;}
    public set TimePosition(value) {this.SetProp("TimePosition", DataType.Float64, value);}
    public get VoiceId() {return this.GetProp("VoiceId", DataType.String)!;}
    public set VoiceId(value) {this.SetProp("VoiceId", DataType.String, value);}
    public get Volume() {return this.GetProp("Volume", DataType.Float32)!;}
    public set Volume(value) {this.SetProp("Volume", DataType.Float32, value);}
}

/**@deprecated Deprecated by Roblox*/
export class AuroraScriptService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("AuroraScriptService");
        this.Name = "AuroraScriptService";
    }
}

/**@deprecated Deprecated by Roblox*/
export class AuroraService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("AuroraService");
        this.Name = "AuroraService";
    }
}

export class AvatarAccessoryRules extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AvatarAccessoryRules");
        this.Name = "AvatarAccessoryRules";
        this.AccessoryMode = AvatarSettingsAccessoryMode.PlayerChoice;
        this.CustomAccessoryMode = AvatarSettingsCustomAccessoryMode.PlayerChoice;
        this.CustomBackAccessoryEnabled = false;
        this.CustomBackAccessoryId = BigInt(0);
        this.CustomFaceAccessoryEnabled = false;
        this.CustomFaceAccessoryId = BigInt(0);
        this.CustomFrontAccessoryEnabled = false;
        this.CustomFrontAccessoryId = BigInt(0);
        this.CustomHairAccessoryEnabled = false;
        this.CustomHairAccessoryId = BigInt(0);
        this.CustomHeadAccessoryEnabled = false;
        this.CustomHeadAccessoryId = BigInt(0);
        this.CustomNeckAccessoryEnabled = false;
        this.CustomNeckAccessoryId = BigInt(0);
        this.CustomShoulderAccessoryEnabled = false;
        this.CustomShoulderAccessoryId = BigInt(0);
        this.CustomWaistAccessoryEnabled = false;
        this.CustomWaistAccessoryId = BigInt(0);
        this.EnableSound = true;
        this.EnableVFX = true;
        this.LimitBounds = new Vector3(0, 0, 0);
        this.LimitMethod = AvatarSettingsAccessoryLimitMethod.Remove;
    }
    public get AccessoryMode() {return this.GetProp("AccessoryMode", DataType.Enum)! as AvatarSettingsAccessoryMode;}
    public set AccessoryMode(value) {this.SetProp("AccessoryMode", DataType.Enum, value);}
    public get CustomAccessoryMode() {return this.GetProp("CustomAccessoryMode", DataType.Enum)! as AvatarSettingsCustomAccessoryMode;}
    public set CustomAccessoryMode(value) {this.SetProp("CustomAccessoryMode", DataType.Enum, value);}
    public get CustomBackAccessoryEnabled() {return this.GetProp("CustomBackAccessoryEnabled", DataType.Bool)!;}
    public set CustomBackAccessoryEnabled(value) {this.SetProp("CustomBackAccessoryEnabled", DataType.Bool, value);}
    public get CustomBackAccessoryId() {return this.GetProp("CustomBackAccessoryId", DataType.Int64)!;}
    public set CustomBackAccessoryId(value) {this.SetProp("CustomBackAccessoryId", DataType.Int64, value);}
    public get CustomFaceAccessoryEnabled() {return this.GetProp("CustomFaceAccessoryEnabled", DataType.Bool)!;}
    public set CustomFaceAccessoryEnabled(value) {this.SetProp("CustomFaceAccessoryEnabled", DataType.Bool, value);}
    public get CustomFaceAccessoryId() {return this.GetProp("CustomFaceAccessoryId", DataType.Int64)!;}
    public set CustomFaceAccessoryId(value) {this.SetProp("CustomFaceAccessoryId", DataType.Int64, value);}
    public get CustomFrontAccessoryEnabled() {return this.GetProp("CustomFrontAccessoryEnabled", DataType.Bool)!;}
    public set CustomFrontAccessoryEnabled(value) {this.SetProp("CustomFrontAccessoryEnabled", DataType.Bool, value);}
    public get CustomFrontAccessoryId() {return this.GetProp("CustomFrontAccessoryId", DataType.Int64)!;}
    public set CustomFrontAccessoryId(value) {this.SetProp("CustomFrontAccessoryId", DataType.Int64, value);}
    public get CustomHairAccessoryEnabled() {return this.GetProp("CustomHairAccessoryEnabled", DataType.Bool)!;}
    public set CustomHairAccessoryEnabled(value) {this.SetProp("CustomHairAccessoryEnabled", DataType.Bool, value);}
    public get CustomHairAccessoryId() {return this.GetProp("CustomHairAccessoryId", DataType.Int64)!;}
    public set CustomHairAccessoryId(value) {this.SetProp("CustomHairAccessoryId", DataType.Int64, value);}
    public get CustomHeadAccessoryEnabled() {return this.GetProp("CustomHeadAccessoryEnabled", DataType.Bool)!;}
    public set CustomHeadAccessoryEnabled(value) {this.SetProp("CustomHeadAccessoryEnabled", DataType.Bool, value);}
    public get CustomHeadAccessoryId() {return this.GetProp("CustomHeadAccessoryId", DataType.Int64)!;}
    public set CustomHeadAccessoryId(value) {this.SetProp("CustomHeadAccessoryId", DataType.Int64, value);}
    public get CustomNeckAccessoryEnabled() {return this.GetProp("CustomNeckAccessoryEnabled", DataType.Bool)!;}
    public set CustomNeckAccessoryEnabled(value) {this.SetProp("CustomNeckAccessoryEnabled", DataType.Bool, value);}
    public get CustomNeckAccessoryId() {return this.GetProp("CustomNeckAccessoryId", DataType.Int64)!;}
    public set CustomNeckAccessoryId(value) {this.SetProp("CustomNeckAccessoryId", DataType.Int64, value);}
    public get CustomShoulderAccessoryEnabled() {return this.GetProp("CustomShoulderAccessoryEnabled", DataType.Bool)!;}
    public set CustomShoulderAccessoryEnabled(value) {this.SetProp("CustomShoulderAccessoryEnabled", DataType.Bool, value);}
    public get CustomShoulderAccessoryId() {return this.GetProp("CustomShoulderAccessoryId", DataType.Int64)!;}
    public set CustomShoulderAccessoryId(value) {this.SetProp("CustomShoulderAccessoryId", DataType.Int64, value);}
    public get CustomWaistAccessoryEnabled() {return this.GetProp("CustomWaistAccessoryEnabled", DataType.Bool)!;}
    public set CustomWaistAccessoryEnabled(value) {this.SetProp("CustomWaistAccessoryEnabled", DataType.Bool, value);}
    public get CustomWaistAccessoryId() {return this.GetProp("CustomWaistAccessoryId", DataType.Int64)!;}
    public set CustomWaistAccessoryId(value) {this.SetProp("CustomWaistAccessoryId", DataType.Int64, value);}
    public get EnableSound() {return this.GetProp("EnableSound", DataType.Bool)!;}
    public set EnableSound(value) {this.SetProp("EnableSound", DataType.Bool, value);}
    public get EnableVFX() {return this.GetProp("EnableVFX", DataType.Bool)!;}
    public set EnableVFX(value) {this.SetProp("EnableVFX", DataType.Bool, value);}
    public get LimitBounds() {return this.GetProp("LimitBounds", DataType.Vector3)!;}
    public set LimitBounds(value) {this.SetProp("LimitBounds", DataType.Vector3, value);}
    public get LimitMethod() {return this.GetProp("LimitMethod", DataType.Enum)! as AvatarSettingsAccessoryLimitMethod;}
    public set LimitMethod(value) {this.SetProp("LimitMethod", DataType.Enum, value);}
}

export class AvatarAnimationRules extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AvatarAnimationRules");
        this.Name = "AvatarAnimationRules";
        this.AnimationClipsMode = AvatarSettingsAnimationClipsMode.PlayerChoice;
        this.AnimationPacksMode = AvatarSettingsAnimationPacksMode.PlayerChoice;
        this.CustomClimbAnimationEnabled = false;
        this.CustomClimbAnimationId = BigInt(0);
        this.CustomFallAnimationEnabled = false;
        this.CustomFallAnimationId = BigInt(0);
        this.CustomIdleAlt1AnimationEnabled = false;
        this.CustomIdleAlt1AnimationId = BigInt(0);
        this.CustomIdleAlt2AnimationEnabled = false;
        this.CustomIdleAlt2AnimationId = BigInt(0);
        this.CustomIdleAnimationEnabled = false;
        this.CustomIdleAnimationId = BigInt(0);
        this.CustomJumpAnimationEnabled = false;
        this.CustomJumpAnimationId = BigInt(0);
        this.CustomRunAnimationEnabled = false;
        this.CustomRunAnimationId = BigInt(0);
        this.CustomSwimAnimationEnabled = false;
        this.CustomSwimAnimationId = BigInt(0);
        this.CustomSwimIdleAnimationEnabled = false;
        this.CustomSwimIdleAnimationId = BigInt(0);
        this.CustomWalkAnimationEnabled = false;
        this.CustomWalkAnimationId = BigInt(0);
    }
    public get AnimationClipsMode() {return this.GetProp("AnimationClipsMode", DataType.Enum)! as AvatarSettingsAnimationClipsMode;}
    public set AnimationClipsMode(value) {this.SetProp("AnimationClipsMode", DataType.Enum, value);}
    public get AnimationPacksMode() {return this.GetProp("AnimationPacksMode", DataType.Enum)! as AvatarSettingsAnimationPacksMode;}
    public set AnimationPacksMode(value) {this.SetProp("AnimationPacksMode", DataType.Enum, value);}
    public get CustomClimbAnimationEnabled() {return this.GetProp("CustomClimbAnimationEnabled", DataType.Bool)!;}
    public set CustomClimbAnimationEnabled(value) {this.SetProp("CustomClimbAnimationEnabled", DataType.Bool, value);}
    public get CustomClimbAnimationId() {return this.GetProp("CustomClimbAnimationId", DataType.Int64)!;}
    public set CustomClimbAnimationId(value) {this.SetProp("CustomClimbAnimationId", DataType.Int64, value);}
    public get CustomFallAnimationEnabled() {return this.GetProp("CustomFallAnimationEnabled", DataType.Bool)!;}
    public set CustomFallAnimationEnabled(value) {this.SetProp("CustomFallAnimationEnabled", DataType.Bool, value);}
    public get CustomFallAnimationId() {return this.GetProp("CustomFallAnimationId", DataType.Int64)!;}
    public set CustomFallAnimationId(value) {this.SetProp("CustomFallAnimationId", DataType.Int64, value);}
    public get CustomIdleAlt1AnimationEnabled() {return this.GetProp("CustomIdleAlt1AnimationEnabled", DataType.Bool)!;}
    public set CustomIdleAlt1AnimationEnabled(value) {this.SetProp("CustomIdleAlt1AnimationEnabled", DataType.Bool, value);}
    public get CustomIdleAlt1AnimationId() {return this.GetProp("CustomIdleAlt1AnimationId", DataType.Int64)!;}
    public set CustomIdleAlt1AnimationId(value) {this.SetProp("CustomIdleAlt1AnimationId", DataType.Int64, value);}
    public get CustomIdleAlt2AnimationEnabled() {return this.GetProp("CustomIdleAlt2AnimationEnabled", DataType.Bool)!;}
    public set CustomIdleAlt2AnimationEnabled(value) {this.SetProp("CustomIdleAlt2AnimationEnabled", DataType.Bool, value);}
    public get CustomIdleAlt2AnimationId() {return this.GetProp("CustomIdleAlt2AnimationId", DataType.Int64)!;}
    public set CustomIdleAlt2AnimationId(value) {this.SetProp("CustomIdleAlt2AnimationId", DataType.Int64, value);}
    public get CustomIdleAnimationEnabled() {return this.GetProp("CustomIdleAnimationEnabled", DataType.Bool)!;}
    public set CustomIdleAnimationEnabled(value) {this.SetProp("CustomIdleAnimationEnabled", DataType.Bool, value);}
    public get CustomIdleAnimationId() {return this.GetProp("CustomIdleAnimationId", DataType.Int64)!;}
    public set CustomIdleAnimationId(value) {this.SetProp("CustomIdleAnimationId", DataType.Int64, value);}
    public get CustomJumpAnimationEnabled() {return this.GetProp("CustomJumpAnimationEnabled", DataType.Bool)!;}
    public set CustomJumpAnimationEnabled(value) {this.SetProp("CustomJumpAnimationEnabled", DataType.Bool, value);}
    public get CustomJumpAnimationId() {return this.GetProp("CustomJumpAnimationId", DataType.Int64)!;}
    public set CustomJumpAnimationId(value) {this.SetProp("CustomJumpAnimationId", DataType.Int64, value);}
    public get CustomRunAnimationEnabled() {return this.GetProp("CustomRunAnimationEnabled", DataType.Bool)!;}
    public set CustomRunAnimationEnabled(value) {this.SetProp("CustomRunAnimationEnabled", DataType.Bool, value);}
    public get CustomRunAnimationId() {return this.GetProp("CustomRunAnimationId", DataType.Int64)!;}
    public set CustomRunAnimationId(value) {this.SetProp("CustomRunAnimationId", DataType.Int64, value);}
    public get CustomSwimAnimationEnabled() {return this.GetProp("CustomSwimAnimationEnabled", DataType.Bool)!;}
    public set CustomSwimAnimationEnabled(value) {this.SetProp("CustomSwimAnimationEnabled", DataType.Bool, value);}
    public get CustomSwimAnimationId() {return this.GetProp("CustomSwimAnimationId", DataType.Int64)!;}
    public set CustomSwimAnimationId(value) {this.SetProp("CustomSwimAnimationId", DataType.Int64, value);}
    public get CustomSwimIdleAnimationEnabled() {return this.GetProp("CustomSwimIdleAnimationEnabled", DataType.Bool)!;}
    public set CustomSwimIdleAnimationEnabled(value) {this.SetProp("CustomSwimIdleAnimationEnabled", DataType.Bool, value);}
    public get CustomSwimIdleAnimationId() {return this.GetProp("CustomSwimIdleAnimationId", DataType.Int64)!;}
    public set CustomSwimIdleAnimationId(value) {this.SetProp("CustomSwimIdleAnimationId", DataType.Int64, value);}
    public get CustomWalkAnimationEnabled() {return this.GetProp("CustomWalkAnimationEnabled", DataType.Bool)!;}
    public set CustomWalkAnimationEnabled(value) {this.SetProp("CustomWalkAnimationEnabled", DataType.Bool, value);}
    public get CustomWalkAnimationId() {return this.GetProp("CustomWalkAnimationId", DataType.Int64)!;}
    public set CustomWalkAnimationId(value) {this.SetProp("CustomWalkAnimationId", DataType.Int64, value);}
}

export class AvatarBodyRules extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AvatarBodyRules");
        this.Name = "AvatarBodyRules";
        this.AppearanceMode = AvatarSettingsAppearanceMode.PlayerChoice;
        this.BuildMode = AvatarSettingsBuildMode.PlayerChoice;
        this.CustomBodyBundleId = BigInt(0);
        this.CustomBodyType = AvatarSettingsCustomBodyType.AvatarReference;
        this.CustomBodyTypeScale = new NumberRange(0, 100);
        this.CustomHeadEnabled = false;
        this.CustomHeadId = BigInt(0);
        this.CustomHeadScale = new NumberRange(95, 100);
        this.CustomHeight = new NumberRange(6, 6);
        this.CustomHeightScale = new NumberRange(90, 105);
        this.CustomLeftArmEnabled = false;
        this.CustomLeftArmId = BigInt(0);
        this.CustomLeftLegEnabled = false;
        this.CustomLeftLegId = BigInt(0);
        this.CustomProportionsScale = new NumberRange(0, 100);
        this.CustomRightArmEnabled = false;
        this.CustomRightArmId = BigInt(0);
        this.CustomRightLegEnabled = false;
        this.CustomRightLegId = BigInt(0);
        this.CustomTorsoEnabled = false;
        this.CustomTorsoId = BigInt(0);
        this.CustomWidthScale = new NumberRange(70, 100);
        this.KeepPlayerHead = true;
        this.ScaleMode = AvatarSettingsScaleMode.PlayerChoice;
    }
    public get AppearanceMode() {return this.GetProp("AppearanceMode", DataType.Enum)! as AvatarSettingsAppearanceMode;}
    public set AppearanceMode(value) {this.SetProp("AppearanceMode", DataType.Enum, value);}
    public get BuildMode() {return this.GetProp("BuildMode", DataType.Enum)! as AvatarSettingsBuildMode;}
    public set BuildMode(value) {this.SetProp("BuildMode", DataType.Enum, value);}
    public get CustomBodyAvatarReference() {return this.GetProp("CustomBodyAvatarReference", DataType.Referent) as Instance | undefined;}
    public set CustomBodyAvatarReference(value) {this.SetProp("CustomBodyAvatarReference", DataType.Referent, value);}
    public get CustomBodyBundleId() {return this.GetProp("CustomBodyBundleId", DataType.Int64)!;}
    public set CustomBodyBundleId(value) {this.SetProp("CustomBodyBundleId", DataType.Int64, value);}
    public get CustomBodyType() {return this.GetProp("CustomBodyType", DataType.Enum)! as AvatarSettingsCustomBodyType;}
    public set CustomBodyType(value) {this.SetProp("CustomBodyType", DataType.Enum, value);}
    public get CustomBodyTypeScale() {return this.GetProp("CustomBodyTypeScale", DataType.NumberRange)!;}
    public set CustomBodyTypeScale(value) {this.SetProp("CustomBodyTypeScale", DataType.NumberRange, value);}
    public get CustomHeadEnabled() {return this.GetProp("CustomHeadEnabled", DataType.Bool)!;}
    public set CustomHeadEnabled(value) {this.SetProp("CustomHeadEnabled", DataType.Bool, value);}
    public get CustomHeadId() {return this.GetProp("CustomHeadId", DataType.Int64)!;}
    public set CustomHeadId(value) {this.SetProp("CustomHeadId", DataType.Int64, value);}
    public get CustomHeadScale() {return this.GetProp("CustomHeadScale", DataType.NumberRange)!;}
    public set CustomHeadScale(value) {this.SetProp("CustomHeadScale", DataType.NumberRange, value);}
    public get CustomHeight() {return this.GetProp("CustomHeight", DataType.NumberRange)!;}
    public set CustomHeight(value) {this.SetProp("CustomHeight", DataType.NumberRange, value);}
    public get CustomHeightScale() {return this.GetProp("CustomHeightScale", DataType.NumberRange)!;}
    public set CustomHeightScale(value) {this.SetProp("CustomHeightScale", DataType.NumberRange, value);}
    public get CustomLeftArmEnabled() {return this.GetProp("CustomLeftArmEnabled", DataType.Bool)!;}
    public set CustomLeftArmEnabled(value) {this.SetProp("CustomLeftArmEnabled", DataType.Bool, value);}
    public get CustomLeftArmId() {return this.GetProp("CustomLeftArmId", DataType.Int64)!;}
    public set CustomLeftArmId(value) {this.SetProp("CustomLeftArmId", DataType.Int64, value);}
    public get CustomLeftLegEnabled() {return this.GetProp("CustomLeftLegEnabled", DataType.Bool)!;}
    public set CustomLeftLegEnabled(value) {this.SetProp("CustomLeftLegEnabled", DataType.Bool, value);}
    public get CustomLeftLegId() {return this.GetProp("CustomLeftLegId", DataType.Int64)!;}
    public set CustomLeftLegId(value) {this.SetProp("CustomLeftLegId", DataType.Int64, value);}
    public get CustomProportionsScale() {return this.GetProp("CustomProportionsScale", DataType.NumberRange)!;}
    public set CustomProportionsScale(value) {this.SetProp("CustomProportionsScale", DataType.NumberRange, value);}
    public get CustomRightArmEnabled() {return this.GetProp("CustomRightArmEnabled", DataType.Bool)!;}
    public set CustomRightArmEnabled(value) {this.SetProp("CustomRightArmEnabled", DataType.Bool, value);}
    public get CustomRightArmId() {return this.GetProp("CustomRightArmId", DataType.Int64)!;}
    public set CustomRightArmId(value) {this.SetProp("CustomRightArmId", DataType.Int64, value);}
    public get CustomRightLegEnabled() {return this.GetProp("CustomRightLegEnabled", DataType.Bool)!;}
    public set CustomRightLegEnabled(value) {this.SetProp("CustomRightLegEnabled", DataType.Bool, value);}
    public get CustomRightLegId() {return this.GetProp("CustomRightLegId", DataType.Int64)!;}
    public set CustomRightLegId(value) {this.SetProp("CustomRightLegId", DataType.Int64, value);}
    public get CustomTorsoEnabled() {return this.GetProp("CustomTorsoEnabled", DataType.Bool)!;}
    public set CustomTorsoEnabled(value) {this.SetProp("CustomTorsoEnabled", DataType.Bool, value);}
    public get CustomTorsoId() {return this.GetProp("CustomTorsoId", DataType.Int64)!;}
    public set CustomTorsoId(value) {this.SetProp("CustomTorsoId", DataType.Int64, value);}
    public get CustomWidthScale() {return this.GetProp("CustomWidthScale", DataType.NumberRange)!;}
    public set CustomWidthScale(value) {this.SetProp("CustomWidthScale", DataType.NumberRange, value);}
    public get KeepPlayerHead() {return this.GetProp("KeepPlayerHead", DataType.Bool)!;}
    public set KeepPlayerHead(value) {this.SetProp("KeepPlayerHead", DataType.Bool, value);}
    public get ScaleMode() {return this.GetProp("ScaleMode", DataType.Enum)! as AvatarSettingsScaleMode;}
    public set ScaleMode(value) {this.SetProp("ScaleMode", DataType.Enum, value);}
}

export class AvatarChatService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("AvatarChatService");
        this.Name = "AvatarChatService";
    }
}

export class AvatarClothingRules extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AvatarClothingRules");
        this.Name = "AvatarClothingRules";
        this.ClothingMode = AvatarSettingsClothingMode.PlayerChoice;
        this.CustomClassicPantsAccessoryEnabled = false;
        this.CustomClassicPantsAccessoryId = BigInt(0);
        this.CustomClassicShirtsAccessoryEnabled = false;
        this.CustomClassicShirtsAccessoryId = BigInt(0);
        this.CustomClassicTShirtsAccessoryEnabled = false;
        this.CustomClassicTShirtsAccessoryId = BigInt(0);
        this.CustomClothingMode = AvatarSettingsCustomClothingMode.PlayerChoice;
        this.CustomDressSkirtAccessoryEnabled = false;
        this.CustomDressSkirtAccessoryId = BigInt(0);
        this.CustomJacketAccessoryEnabled = false;
        this.CustomJacketAccessoryId = BigInt(0);
        this.CustomLeftShoesAccessoryEnabled = false;
        this.CustomLeftShoesAccessoryId = BigInt(0);
        this.CustomPantsAccessoryEnabled = false;
        this.CustomPantsAccessoryId = BigInt(0);
        this.CustomRightShoesAccessoryEnabled = false;
        this.CustomRightShoesAccessoryId = BigInt(0);
        this.CustomShirtAccessoryEnabled = false;
        this.CustomShirtAccessoryId = BigInt(0);
        this.CustomShortsAccessoryEnabled = false;
        this.CustomShortsAccessoryId = BigInt(0);
        this.CustomSweaterAccessoryEnabled = false;
        this.CustomSweaterAccessoryId = BigInt(0);
        this.CustomTShirtAccessoryEnabled = false;
        this.CustomTShirtAccessoryId = BigInt(0);
        this.LimitBounds = new Vector3(0, 0, 0);
    }
    public get ClothingMode() {return this.GetProp("ClothingMode", DataType.Enum)! as AvatarSettingsClothingMode;}
    public set ClothingMode(value) {this.SetProp("ClothingMode", DataType.Enum, value);}
    public get CustomClassicPantsAccessoryEnabled() {return this.GetProp("CustomClassicPantsAccessoryEnabled", DataType.Bool)!;}
    public set CustomClassicPantsAccessoryEnabled(value) {this.SetProp("CustomClassicPantsAccessoryEnabled", DataType.Bool, value);}
    public get CustomClassicPantsAccessoryId() {return this.GetProp("CustomClassicPantsAccessoryId", DataType.Int64)!;}
    public set CustomClassicPantsAccessoryId(value) {this.SetProp("CustomClassicPantsAccessoryId", DataType.Int64, value);}
    public get CustomClassicShirtsAccessoryEnabled() {return this.GetProp("CustomClassicShirtsAccessoryEnabled", DataType.Bool)!;}
    public set CustomClassicShirtsAccessoryEnabled(value) {this.SetProp("CustomClassicShirtsAccessoryEnabled", DataType.Bool, value);}
    public get CustomClassicShirtsAccessoryId() {return this.GetProp("CustomClassicShirtsAccessoryId", DataType.Int64)!;}
    public set CustomClassicShirtsAccessoryId(value) {this.SetProp("CustomClassicShirtsAccessoryId", DataType.Int64, value);}
    public get CustomClassicTShirtsAccessoryEnabled() {return this.GetProp("CustomClassicTShirtsAccessoryEnabled", DataType.Bool)!;}
    public set CustomClassicTShirtsAccessoryEnabled(value) {this.SetProp("CustomClassicTShirtsAccessoryEnabled", DataType.Bool, value);}
    public get CustomClassicTShirtsAccessoryId() {return this.GetProp("CustomClassicTShirtsAccessoryId", DataType.Int64)!;}
    public set CustomClassicTShirtsAccessoryId(value) {this.SetProp("CustomClassicTShirtsAccessoryId", DataType.Int64, value);}
    public get CustomClothingMode() {return this.GetProp("CustomClothingMode", DataType.Enum)! as AvatarSettingsCustomClothingMode;}
    public set CustomClothingMode(value) {this.SetProp("CustomClothingMode", DataType.Enum, value);}
    public get CustomDressSkirtAccessoryEnabled() {return this.GetProp("CustomDressSkirtAccessoryEnabled", DataType.Bool)!;}
    public set CustomDressSkirtAccessoryEnabled(value) {this.SetProp("CustomDressSkirtAccessoryEnabled", DataType.Bool, value);}
    public get CustomDressSkirtAccessoryId() {return this.GetProp("CustomDressSkirtAccessoryId", DataType.Int64)!;}
    public set CustomDressSkirtAccessoryId(value) {this.SetProp("CustomDressSkirtAccessoryId", DataType.Int64, value);}
    public get CustomJacketAccessoryEnabled() {return this.GetProp("CustomJacketAccessoryEnabled", DataType.Bool)!;}
    public set CustomJacketAccessoryEnabled(value) {this.SetProp("CustomJacketAccessoryEnabled", DataType.Bool, value);}
    public get CustomJacketAccessoryId() {return this.GetProp("CustomJacketAccessoryId", DataType.Int64)!;}
    public set CustomJacketAccessoryId(value) {this.SetProp("CustomJacketAccessoryId", DataType.Int64, value);}
    public get CustomLeftShoesAccessoryEnabled() {return this.GetProp("CustomLeftShoesAccessoryEnabled", DataType.Bool)!;}
    public set CustomLeftShoesAccessoryEnabled(value) {this.SetProp("CustomLeftShoesAccessoryEnabled", DataType.Bool, value);}
    public get CustomLeftShoesAccessoryId() {return this.GetProp("CustomLeftShoesAccessoryId", DataType.Int64)!;}
    public set CustomLeftShoesAccessoryId(value) {this.SetProp("CustomLeftShoesAccessoryId", DataType.Int64, value);}
    public get CustomPantsAccessoryEnabled() {return this.GetProp("CustomPantsAccessoryEnabled", DataType.Bool)!;}
    public set CustomPantsAccessoryEnabled(value) {this.SetProp("CustomPantsAccessoryEnabled", DataType.Bool, value);}
    public get CustomPantsAccessoryId() {return this.GetProp("CustomPantsAccessoryId", DataType.Int64)!;}
    public set CustomPantsAccessoryId(value) {this.SetProp("CustomPantsAccessoryId", DataType.Int64, value);}
    public get CustomRightShoesAccessoryEnabled() {return this.GetProp("CustomRightShoesAccessoryEnabled", DataType.Bool)!;}
    public set CustomRightShoesAccessoryEnabled(value) {this.SetProp("CustomRightShoesAccessoryEnabled", DataType.Bool, value);}
    public get CustomRightShoesAccessoryId() {return this.GetProp("CustomRightShoesAccessoryId", DataType.Int64)!;}
    public set CustomRightShoesAccessoryId(value) {this.SetProp("CustomRightShoesAccessoryId", DataType.Int64, value);}
    public get CustomShirtAccessoryEnabled() {return this.GetProp("CustomShirtAccessoryEnabled", DataType.Bool)!;}
    public set CustomShirtAccessoryEnabled(value) {this.SetProp("CustomShirtAccessoryEnabled", DataType.Bool, value);}
    public get CustomShirtAccessoryId() {return this.GetProp("CustomShirtAccessoryId", DataType.Int64)!;}
    public set CustomShirtAccessoryId(value) {this.SetProp("CustomShirtAccessoryId", DataType.Int64, value);}
    public get CustomShortsAccessoryEnabled() {return this.GetProp("CustomShortsAccessoryEnabled", DataType.Bool)!;}
    public set CustomShortsAccessoryEnabled(value) {this.SetProp("CustomShortsAccessoryEnabled", DataType.Bool, value);}
    public get CustomShortsAccessoryId() {return this.GetProp("CustomShortsAccessoryId", DataType.Int64)!;}
    public set CustomShortsAccessoryId(value) {this.SetProp("CustomShortsAccessoryId", DataType.Int64, value);}
    public get CustomSweaterAccessoryEnabled() {return this.GetProp("CustomSweaterAccessoryEnabled", DataType.Bool)!;}
    public set CustomSweaterAccessoryEnabled(value) {this.SetProp("CustomSweaterAccessoryEnabled", DataType.Bool, value);}
    public get CustomSweaterAccessoryId() {return this.GetProp("CustomSweaterAccessoryId", DataType.Int64)!;}
    public set CustomSweaterAccessoryId(value) {this.SetProp("CustomSweaterAccessoryId", DataType.Int64, value);}
    public get CustomTShirtAccessoryEnabled() {return this.GetProp("CustomTShirtAccessoryEnabled", DataType.Bool)!;}
    public set CustomTShirtAccessoryEnabled(value) {this.SetProp("CustomTShirtAccessoryEnabled", DataType.Bool, value);}
    public get CustomTShirtAccessoryId() {return this.GetProp("CustomTShirtAccessoryId", DataType.Int64)!;}
    public set CustomTShirtAccessoryId(value) {this.SetProp("CustomTShirtAccessoryId", DataType.Int64, value);}
    public get LimitBounds() {return this.GetProp("LimitBounds", DataType.Vector3)!;}
    public set LimitBounds(value) {this.SetProp("LimitBounds", DataType.Vector3, value);}
}

export class AvatarCollisionRules extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AvatarCollisionRules");
        this.Name = "AvatarCollisionRules";
        this.CollisionMode = AvatarSettingsCollisionMode.Default;
        this.HitAndTouchDetectionMode = AvatarSettingsHitAndTouchDetectionMode.UseParts;
        this.LegacyCollisionMode = AvatarSettingsLegacyCollisionMode.R6Colliders;
        this.SingleColliderSize = new Vector3(2, 4, 1);
    }
    public get CollisionMode() {return this.GetProp("CollisionMode", DataType.Enum)! as AvatarSettingsCollisionMode;}
    public set CollisionMode(value) {this.SetProp("CollisionMode", DataType.Enum, value);}
    public get HitAndTouchDetectionMode() {return this.GetProp("HitAndTouchDetectionMode", DataType.Enum)! as AvatarSettingsHitAndTouchDetectionMode;}
    public set HitAndTouchDetectionMode(value) {this.SetProp("HitAndTouchDetectionMode", DataType.Enum, value);}
    public get LegacyCollisionMode() {return this.GetProp("LegacyCollisionMode", DataType.Enum)! as AvatarSettingsLegacyCollisionMode;}
    public set LegacyCollisionMode(value) {this.SetProp("LegacyCollisionMode", DataType.Enum, value);}
    public get SingleColliderSize() {return this.GetProp("SingleColliderSize", DataType.Vector3)!;}
    public set SingleColliderSize(value) {this.SetProp("SingleColliderSize", DataType.Vector3, value);}
}

export class AvatarCreationService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("AvatarCreationService");
        this.Name = "AvatarCreationService";
    }
}

export class AvatarEditorService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("AvatarEditorService");
        this.Name = "AvatarEditorService";
    }
}

export class AvatarImportService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("AvatarImportService");
        this.Name = "AvatarImportService";
    }
}

export class AvatarPreloader extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("AvatarPreloader");
        this.Name = "AvatarPreloader";
    }
}

export class AvatarRules extends Instance {
    public constructor()
    {
        super();
        this.addClassName("AvatarRules");
        this.Name = "AvatarRules";
        this.AvatarType = GameAvatarType.R15;
    }
    public get AvatarType() {return this.GetProp("AvatarType", DataType.Enum)! as GameAvatarType;}
    public set AvatarType(value) {this.SetProp("AvatarType", DataType.Enum, value);}
}

export class AvatarSettings extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("AvatarSettings");
        this.Name = "AvatarSettings";
    }
}

export class Backpack extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Backpack");
        this.Name = "Backpack";
    }
}

export class BadgeService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("BadgeService");
        this.Name = "BadgeService";
    }
}

export abstract class BasePlayerGui extends Instance {
    public constructor()
    {
        super();
        this.addClassName("BasePlayerGui");
    }
}

export class CoreGui extends BasePlayerGui {
    public constructor()
    {
        super();
        this._isService = true;
        this.addClassName("CoreGui");
        this.Name = "CoreGui";
    }
    public get SelectionImageObject() {return this.GetProp("SelectionImageObject", DataType.Referent) as GuiObject | undefined;}
    public set SelectionImageObject(value) {this.SetProp("SelectionImageObject", DataType.Referent, value);}
}

export class StarterGui extends BasePlayerGui {
    public constructor()
    {
        super();
        this._isService = true;
        this.addClassName("StarterGui");
        this.Name = "StarterGui";
        this.ResetPlayerGuiOnSpawn = true;
        this.ScreenOrientation = ScreenOrientation.LandscapeSensor;
        this.ShowDevelopmentGui = true;
    }
    /**@deprecated Deprecated by Roblox*/
    public get ResetPlayerGuiOnSpawn() {return this.GetProp("ResetPlayerGuiOnSpawn", DataType.Bool)!;}
    /**@deprecated Deprecated by Roblox*/
    public set ResetPlayerGuiOnSpawn(value) {this.SetProp("ResetPlayerGuiOnSpawn", DataType.Bool, value);}
    public get RtlTextSupport() {return this.GetProp("RtlTextSupport", DataType.Enum) as RtlTextSupport | undefined;}
    public set RtlTextSupport(value) {this.SetProp("RtlTextSupport", DataType.Enum, value);}
    public get ScreenOrientation() {return this.GetProp("ScreenOrientation", DataType.Enum)! as ScreenOrientation;}
    public set ScreenOrientation(value) {this.SetProp("ScreenOrientation", DataType.Enum, value);}
    public get ShowDevelopmentGui() {return this.GetProp("ShowDevelopmentGui", DataType.Bool)!;}
    public set ShowDevelopmentGui(value) {this.SetProp("ShowDevelopmentGui", DataType.Bool, value);}
    public get StudioDefaultStyleSheet() {return this.GetProp("StudioDefaultStyleSheet", DataType.Referent) as StyleSheet | undefined;}
    public set StudioDefaultStyleSheet(value) {this.SetProp("StudioDefaultStyleSheet", DataType.Referent, value);}
    public get StudioInsertWidgetLayerCollectorAutoLinkStyleSheet() {return this.GetProp("StudioInsertWidgetLayerCollectorAutoLinkStyleSheet", DataType.Referent) as StyleSheet | undefined;}
    public set StudioInsertWidgetLayerCollectorAutoLinkStyleSheet(value) {this.SetProp("StudioInsertWidgetLayerCollectorAutoLinkStyleSheet", DataType.Referent, value);}
    public get VirtualCursorMode() {return this.GetProp("VirtualCursorMode", DataType.Enum) as VirtualCursorMode | undefined;}
    public set VirtualCursorMode(value) {this.SetProp("VirtualCursorMode", DataType.Enum, value);}
}

export abstract class BaseRemoteEvent extends Instance {
    public constructor()
    {
        super();
        this.addClassName("BaseRemoteEvent");
    }
}

export class RemoteEvent extends BaseRemoteEvent {
    public constructor()
    {
        super();
        this.addClassName("RemoteEvent");
        this.Name = "RemoteEvent";
    }
}

export class UnreliableRemoteEvent extends BaseRemoteEvent {
    public constructor()
    {
        super();
        this.addClassName("UnreliableRemoteEvent");
        this.Name = "UnreliableRemoteEvent";
    }
}

export abstract class BaseWrap extends Instance {
    public constructor()
    {
        super();
        this.addClassName("BaseWrap");
        this.CageMeshId = "";
        this.CageOrigin = CFrame.Identity;
        this.ImportOrigin = CFrame.Identity;
    }
    public get CageMeshContent() {return this.GetProp("CageMeshContent", DataType.String);}
    public set CageMeshContent(value) {this.SetProp("CageMeshContent", DataType.String, value);}
    public get CageMeshId() {return this.GetProp("CageMeshId", DataType.String)!;}
    public set CageMeshId(value) {this.SetProp("CageMeshId", DataType.String, value);}
    public get CageOrigin() {return this.GetProp("CageOrigin", DataType.CFrame)!;}
    public set CageOrigin(value) {this.SetProp("CageOrigin", DataType.CFrame, value);}
    public get HSRAssetId() {return this.GetProp("HSRAssetId", DataType.String);}
    public set HSRAssetId(value) {this.SetProp("HSRAssetId", DataType.String, value);}
    public get HSRData() {return this.GetProp("HSRData", DataType.SharedString);}
    public set HSRData(value) {this.SetProp("HSRData", DataType.SharedString, value);}
    public get HSRMeshIdData() {return this.GetProp("HSRMeshIdData", DataType.SharedString);}
    public set HSRMeshIdData(value) {this.SetProp("HSRMeshIdData", DataType.SharedString, value);}
    public get ImportOrigin() {return this.GetProp("ImportOrigin", DataType.CFrame)!;}
    public set ImportOrigin(value) {this.SetProp("ImportOrigin", DataType.CFrame, value);}
    public get MaxSize() {return this.GetProp("MaxSize", DataType.Vector3);}
    public set MaxSize(value) {this.SetProp("MaxSize", DataType.Vector3, value);}
    public get Offset() {return this.GetProp("Offset", DataType.Vector3);}
    public set Offset(value) {this.SetProp("Offset", DataType.Vector3, value);}
    public get TemporaryCageMeshId() {return this.GetProp("TemporaryCageMeshId", DataType.String);}
    public set TemporaryCageMeshId(value) {this.SetProp("TemporaryCageMeshId", DataType.String, value);}
}

export class WrapDeformer extends BaseWrap {
    public constructor()
    {
        super();
        this.addClassName("WrapDeformer");
        this.Name = "WrapDeformer";
    }
}

export class WrapLayer extends BaseWrap {
    public constructor()
    {
        super();
        this.addClassName("WrapLayer");
        this.Name = "WrapLayer";
        this.AutoSkin = WrapLayerAutoSkin.Disabled;
        this.Enabled = true;
        this.Order = 1;
        this.Puffiness = 1;
        this.ReferenceMeshId = "";
        this.ShrinkFactor = 0;
        this.TemporaryReferenceId = "";
        this.BindOffset = CFrame.Identity;
        this.ReferenceOrigin = CFrame.Identity;
    }
    public get AutoSkin() {return this.GetProp("AutoSkin", DataType.Enum)! as WrapLayerAutoSkin;}
    public set AutoSkin(value) {this.SetProp("AutoSkin", DataType.Enum, value);}
    public get BindOffset() {return this.GetProp("BindOffset", DataType.CFrame)!;}
    public set BindOffset(value) {this.SetProp("BindOffset", DataType.CFrame, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get Order() {return this.GetProp("Order", DataType.Int32)!;}
    public set Order(value) {this.SetProp("Order", DataType.Int32, value);}
    public get Puffiness() {return this.GetProp("Puffiness", DataType.Float32)!;}
    public set Puffiness(value) {this.SetProp("Puffiness", DataType.Float32, value);}
    public get ReferenceMeshContent() {return this.GetProp("ReferenceMeshContent", DataType.String);}
    public set ReferenceMeshContent(value) {this.SetProp("ReferenceMeshContent", DataType.String, value);}
    public get ReferenceMeshId() {return this.GetProp("ReferenceMeshId", DataType.String)!;}
    public set ReferenceMeshId(value) {this.SetProp("ReferenceMeshId", DataType.String, value);}
    public get ReferenceOrigin() {return this.GetProp("ReferenceOrigin", DataType.CFrame)!;}
    public set ReferenceOrigin(value) {this.SetProp("ReferenceOrigin", DataType.CFrame, value);}
    public get ShrinkFactor() {return this.GetProp("ShrinkFactor", DataType.Float32)!;}
    public set ShrinkFactor(value) {this.SetProp("ShrinkFactor", DataType.Float32, value);}
    public get TemporaryReferenceId() {return this.GetProp("TemporaryReferenceId", DataType.String)!;}
    public set TemporaryReferenceId(value) {this.SetProp("TemporaryReferenceId", DataType.String, value);}
}

export class WrapTarget extends BaseWrap {
    public constructor()
    {
        super();
        this.addClassName("WrapTarget");
        this.Name = "WrapTarget";
        this.Stiffness = 0;
    }
    public get Stiffness() {return this.GetProp("Stiffness", DataType.Float32)!;}
    public set Stiffness(value) {this.SetProp("Stiffness", DataType.Float32, value);}
}

export class Beam extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Beam");
        this.Name = "Beam";
        this.Brightness = 1;
        this.Color = new ColorSequence(new ColorSequenceKeypoint(0, Color3.FromRGB(255, 255, 255)), new ColorSequenceKeypoint(1, Color3.FromRGB(255, 255, 255)));
        this.CurveSize0 = 0;
        this.CurveSize1 = 0;
        this.Enabled = true;
        this.FaceCamera = false;
        this.LightEmission = 0;
        this.LightInfluence = 0;
        this.Segments = 10;
        this.Texture = "";
        this.TextureLength = 1;
        this.TextureMode = TextureMode.Stretch;
        this.TextureSpeed = 1;
        this.Transparency = new NumberSequence(new NumberSequenceKeypoint(0, 0.5, 0), new NumberSequenceKeypoint(1, 0.5, 0));
        this.Width0 = 1;
        this.Width1 = 1;
        this.ZOffset = 0;
    }
    public get Attachment0() {return this.GetProp("Attachment0", DataType.Referent) as Attachment | undefined;}
    public set Attachment0(value) {this.SetProp("Attachment0", DataType.Referent, value);}
    public get Attachment1() {return this.GetProp("Attachment1", DataType.Referent) as Attachment | undefined;}
    public set Attachment1(value) {this.SetProp("Attachment1", DataType.Referent, value);}
    public get Brightness() {return this.GetProp("Brightness", DataType.Float32)!;}
    public set Brightness(value) {this.SetProp("Brightness", DataType.Float32, value);}
    public get Color() {return this.GetProp("Color", DataType.ColorSequence)!;}
    public set Color(value) {this.SetProp("Color", DataType.ColorSequence, value);}
    public get CurveSize0() {return this.GetProp("CurveSize0", DataType.Float32)!;}
    public set CurveSize0(value) {this.SetProp("CurveSize0", DataType.Float32, value);}
    public get CurveSize1() {return this.GetProp("CurveSize1", DataType.Float32)!;}
    public set CurveSize1(value) {this.SetProp("CurveSize1", DataType.Float32, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get FaceCamera() {return this.GetProp("FaceCamera", DataType.Bool)!;}
    public set FaceCamera(value) {this.SetProp("FaceCamera", DataType.Bool, value);}
    public get LightEmission() {return this.GetProp("LightEmission", DataType.Float32)!;}
    public set LightEmission(value) {this.SetProp("LightEmission", DataType.Float32, value);}
    public get LightInfluence() {return this.GetProp("LightInfluence", DataType.Float32)!;}
    public set LightInfluence(value) {this.SetProp("LightInfluence", DataType.Float32, value);}
    public get Segments() {return this.GetProp("Segments", DataType.Int32)!;}
    public set Segments(value) {this.SetProp("Segments", DataType.Int32, value);}
    public get Texture() {return this.GetProp("Texture", DataType.String)!;}
    public set Texture(value) {this.SetProp("Texture", DataType.String, value);}
    public get TextureLength() {return this.GetProp("TextureLength", DataType.Float32)!;}
    public set TextureLength(value) {this.SetProp("TextureLength", DataType.Float32, value);}
    public get TextureMode() {return this.GetProp("TextureMode", DataType.Enum)! as TextureMode;}
    public set TextureMode(value) {this.SetProp("TextureMode", DataType.Enum, value);}
    public get TextureSpeed() {return this.GetProp("TextureSpeed", DataType.Float32)!;}
    public set TextureSpeed(value) {this.SetProp("TextureSpeed", DataType.Float32, value);}
    public get Transparency() {return this.GetProp("Transparency", DataType.NumberSequence)!;}
    public set Transparency(value) {this.SetProp("Transparency", DataType.NumberSequence, value);}
    public get Width0() {return this.GetProp("Width0", DataType.Float32)!;}
    public set Width0(value) {this.SetProp("Width0", DataType.Float32, value);}
    public get Width1() {return this.GetProp("Width1", DataType.Float32)!;}
    public set Width1(value) {this.SetProp("Width1", DataType.Float32, value);}
    public get ZOffset() {return this.GetProp("ZOffset", DataType.Float32)!;}
    public set ZOffset(value) {this.SetProp("ZOffset", DataType.Float32, value);}
}

export class BindableEvent extends Instance {
    public constructor()
    {
        super();
        this.addClassName("BindableEvent");
        this.Name = "BindableEvent";
    }
}

export class BindableFunction extends Instance {
    public constructor()
    {
        super();
        this.addClassName("BindableFunction");
        this.Name = "BindableFunction";
    }
}

/**@deprecated Deprecated by Roblox*/
export abstract class BodyMover extends Instance {
    public constructor()
    {
        super();
        this.addClassName("BodyMover");
    }
}

/**@deprecated Deprecated by Roblox*/
export class BodyAngularVelocity extends BodyMover {
    public constructor()
    {
        super();
        this.addClassName("BodyAngularVelocity");
        this.Name = "BodyAngularVelocity";
        this.AngularVelocity = new Vector3(0, 2, 0);
        this.MaxTorque = new Vector3(4000, 4000, 4000);
        this.P = 1250;
    }
    public get AngularVelocity() {return this.GetProp("AngularVelocity", DataType.Vector3)!;}
    public set AngularVelocity(value) {this.SetProp("AngularVelocity", DataType.Vector3, value);}
    public get MaxTorque() {return this.GetProp("MaxTorque", DataType.Vector3)!;}
    public set MaxTorque(value) {this.SetProp("MaxTorque", DataType.Vector3, value);}
    public get P() {return this.GetProp("P", DataType.Float32)!;}
    public set P(value) {this.SetProp("P", DataType.Float32, value);}
}

/**@deprecated Deprecated by Roblox*/
export class BodyForce extends BodyMover {
    public constructor()
    {
        super();
        this.addClassName("BodyForce");
        this.Name = "BodyForce";
        this.Force = new Vector3(0, 1, 0);
    }
    public get Force() {return this.GetProp("Force", DataType.Vector3)!;}
    public set Force(value) {this.SetProp("Force", DataType.Vector3, value);}
}

/**@deprecated Deprecated by Roblox*/
export class BodyGyro extends BodyMover {
    public constructor()
    {
        super();
        this.addClassName("BodyGyro");
        this.Name = "BodyGyro";
        this.D = 500;
        this.MaxTorque = new Vector3(400000, 0, 400000);
        this.P = 3000;
        this.CFrame = CFrame.Identity;
    }
    public get CFrame() {return this.GetProp("CFrame", DataType.CFrame)!;}
    public set CFrame(value) {this.SetProp("CFrame", DataType.CFrame, value);}
    public get D() {return this.GetProp("D", DataType.Float32)!;}
    public set D(value) {this.SetProp("D", DataType.Float32, value);}
    public get MaxTorque() {return this.GetProp("MaxTorque", DataType.Vector3)!;}
    public set MaxTorque(value) {this.SetProp("MaxTorque", DataType.Vector3, value);}
    public get P() {return this.GetProp("P", DataType.Float32)!;}
    public set P(value) {this.SetProp("P", DataType.Float32, value);}
}

/**@deprecated Deprecated by Roblox*/
export class BodyPosition extends BodyMover {
    public constructor()
    {
        super();
        this.addClassName("BodyPosition");
        this.Name = "BodyPosition";
        this.D = 1250;
        this.MaxForce = new Vector3(4000, 4000, 4000);
        this.P = 10000;
        this.Position = new Vector3(0, 50, 0);
    }
    public get D() {return this.GetProp("D", DataType.Float32)!;}
    public set D(value) {this.SetProp("D", DataType.Float32, value);}
    public get MaxForce() {return this.GetProp("MaxForce", DataType.Vector3)!;}
    public set MaxForce(value) {this.SetProp("MaxForce", DataType.Vector3, value);}
    public get P() {return this.GetProp("P", DataType.Float32)!;}
    public set P(value) {this.SetProp("P", DataType.Float32, value);}
    public get Position() {return this.GetProp("Position", DataType.Vector3)!;}
    public set Position(value) {this.SetProp("Position", DataType.Vector3, value);}
}

/**@deprecated Deprecated by Roblox*/
export class BodyThrust extends BodyMover {
    public constructor()
    {
        super();
        this.addClassName("BodyThrust");
        this.Name = "BodyThrust";
        this.Force = new Vector3(0, 1, 0);
        this.Location = new Vector3(0, 0, 0);
    }
    public get Force() {return this.GetProp("Force", DataType.Vector3)!;}
    public set Force(value) {this.SetProp("Force", DataType.Vector3, value);}
    public get Location() {return this.GetProp("Location", DataType.Vector3)!;}
    public set Location(value) {this.SetProp("Location", DataType.Vector3, value);}
}

/**@deprecated Deprecated by Roblox*/
export class BodyVelocity extends BodyMover {
    public constructor()
    {
        super();
        this.addClassName("BodyVelocity");
        this.Name = "BodyVelocity";
        this.MaxForce = new Vector3(4000, 4000, 4000);
        this.P = 1250;
        this.Velocity = new Vector3(0, 2, 0);
    }
    public get MaxForce() {return this.GetProp("MaxForce", DataType.Vector3)!;}
    public set MaxForce(value) {this.SetProp("MaxForce", DataType.Vector3, value);}
    public get P() {return this.GetProp("P", DataType.Float32)!;}
    public set P(value) {this.SetProp("P", DataType.Float32, value);}
    public get Velocity() {return this.GetProp("Velocity", DataType.Vector3)!;}
    public set Velocity(value) {this.SetProp("Velocity", DataType.Vector3, value);}
}

/**@deprecated Deprecated by Roblox*/
export class RocketPropulsion extends BodyMover {
    public constructor()
    {
        super();
        this.addClassName("RocketPropulsion");
        this.Name = "RocketPropulsion";
        this.CartoonFactor = 0.7;
        this.MaxSpeed = 30;
        this.MaxThrust = 4000;
        this.MaxTorque = new Vector3(400000, 400000, 0);
        this.TargetOffset = new Vector3(0, 0, 0);
        this.TargetRadius = 4;
        this.ThrustD = 0.001;
        this.ThrustP = 5;
        this.TurnD = 500;
        this.TurnP = 3000;
    }
    public get CartoonFactor() {return this.GetProp("CartoonFactor", DataType.Float32)!;}
    public set CartoonFactor(value) {this.SetProp("CartoonFactor", DataType.Float32, value);}
    public get MaxSpeed() {return this.GetProp("MaxSpeed", DataType.Float32)!;}
    public set MaxSpeed(value) {this.SetProp("MaxSpeed", DataType.Float32, value);}
    public get MaxThrust() {return this.GetProp("MaxThrust", DataType.Float32)!;}
    public set MaxThrust(value) {this.SetProp("MaxThrust", DataType.Float32, value);}
    public get MaxTorque() {return this.GetProp("MaxTorque", DataType.Vector3)!;}
    public set MaxTorque(value) {this.SetProp("MaxTorque", DataType.Vector3, value);}
    public get Target() {return this.GetProp("Target", DataType.Referent) as BasePart | undefined;}
    public set Target(value) {this.SetProp("Target", DataType.Referent, value);}
    public get TargetOffset() {return this.GetProp("TargetOffset", DataType.Vector3)!;}
    public set TargetOffset(value) {this.SetProp("TargetOffset", DataType.Vector3, value);}
    public get TargetRadius() {return this.GetProp("TargetRadius", DataType.Float32)!;}
    public set TargetRadius(value) {this.SetProp("TargetRadius", DataType.Float32, value);}
    public get ThrustD() {return this.GetProp("ThrustD", DataType.Float32)!;}
    public set ThrustD(value) {this.SetProp("ThrustD", DataType.Float32, value);}
    public get ThrustP() {return this.GetProp("ThrustP", DataType.Float32)!;}
    public set ThrustP(value) {this.SetProp("ThrustP", DataType.Float32, value);}
    public get TurnD() {return this.GetProp("TurnD", DataType.Float32)!;}
    public set TurnD(value) {this.SetProp("TurnD", DataType.Float32, value);}
    public get TurnP() {return this.GetProp("TurnP", DataType.Float32)!;}
    public set TurnP(value) {this.SetProp("TurnP", DataType.Float32, value);}
}

export class BodyPartDescription extends Instance {
    public constructor()
    {
        super();
        this.addClassName("BodyPartDescription");
        this.Name = "BodyPartDescription";
        this.AssetId = BigInt(0);
        this.BodyPart = BodyPart.Head;
        this.Color = Color3.FromRGB(0, 0, 0);
    }
    public get AssetId() {return this.GetProp("AssetId", DataType.Int64)!;}
    public set AssetId(value) {this.SetProp("AssetId", DataType.Int64, value);}
    public get BodyPart() {return this.GetProp("BodyPart", DataType.Enum)! as BodyPart;}
    public set BodyPart(value) {this.SetProp("BodyPart", DataType.Enum, value);}
    public get Color() {return this.GetProp("Color", DataType.Color3)!;}
    public set Color(value) {this.SetProp("Color", DataType.Color3, value);}
    public get Instance() {return this.GetProp("Instance", DataType.Referent) as Instance | undefined;}
    public set Instance(value) {this.SetProp("Instance", DataType.Referent, value);}
}

export class Breakpoint extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Breakpoint");
        this.Name = "Breakpoint";
    }
}

export class BrowserService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("BrowserService");
        this.Name = "BrowserService";
    }
}

export class BugReporterService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("BugReporterService");
        this.Name = "BugReporterService";
    }
}

export class BulkImportService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("BulkImportService");
        this.Name = "BulkImportService";
    }
}

export abstract class CacheableContentProvider extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("CacheableContentProvider");
    }
}

export class HSRDataContentProvider extends CacheableContentProvider {
    public constructor()
    {
        super();
        this.addClassName("HSRDataContentProvider");
        this.Name = "HSRDataContentProvider";
    }
}

export class MeshContentProvider extends CacheableContentProvider {
    public constructor()
    {
        super();
        this.addClassName("MeshContentProvider");
        this.Name = "MeshContentProvider";
    }
}

export class SolidModelContentProvider extends CacheableContentProvider {
    public constructor()
    {
        super();
        this.addClassName("SolidModelContentProvider");
        this.Name = "SolidModelContentProvider";
    }
}

export class CalloutService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("CalloutService");
        this.Name = "CalloutService";
    }
}

export class CaptureService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("CaptureService");
        this.Name = "CaptureService";
    }
}

export class ChangeHistoryService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ChangeHistoryService");
        this.Name = "ChangeHistoryService";
    }
}

export abstract class CharacterAppearance extends Instance {
    public constructor()
    {
        super();
        this.addClassName("CharacterAppearance");
    }
}

export class BodyColors extends CharacterAppearance {
    public constructor()
    {
        super();
        this.addClassName("BodyColors");
        this.Name = "BodyColors";
        this.HeadColor3 = Color3.FromRGB(253, 234, 141);
        this.LeftArmColor3 = Color3.FromRGB(253, 234, 141);
        this.LeftLegColor3 = Color3.FromRGB(13, 105, 172);
        this.RightArmColor3 = Color3.FromRGB(253, 234, 141);
        this.RightLegColor3 = Color3.FromRGB(13, 105, 172);
        this.TorsoColor3 = Color3.FromRGB(40, 127, 71);
    }
    public get HeadColor3() {return this.GetProp("HeadColor3", DataType.Color3)!;}
    public set HeadColor3(value) {this.SetProp("HeadColor3", DataType.Color3, value);}
    public get LeftArmColor3() {return this.GetProp("LeftArmColor3", DataType.Color3)!;}
    public set LeftArmColor3(value) {this.SetProp("LeftArmColor3", DataType.Color3, value);}
    public get LeftLegColor3() {return this.GetProp("LeftLegColor3", DataType.Color3)!;}
    public set LeftLegColor3(value) {this.SetProp("LeftLegColor3", DataType.Color3, value);}
    public get RightArmColor3() {return this.GetProp("RightArmColor3", DataType.Color3)!;}
    public set RightArmColor3(value) {this.SetProp("RightArmColor3", DataType.Color3, value);}
    public get RightLegColor3() {return this.GetProp("RightLegColor3", DataType.Color3)!;}
    public set RightLegColor3(value) {this.SetProp("RightLegColor3", DataType.Color3, value);}
    public get TorsoColor3() {return this.GetProp("TorsoColor3", DataType.Color3)!;}
    public set TorsoColor3(value) {this.SetProp("TorsoColor3", DataType.Color3, value);}
}

export class CharacterMesh extends CharacterAppearance {
    public constructor()
    {
        super();
        this.addClassName("CharacterMesh");
        this.Name = "CharacterMesh";
        this.BaseTextureId = BigInt(0);
        this.BodyPart = BodyPart.Head;
        this.MeshId = BigInt(0);
        this.OverlayTextureId = BigInt(0);
    }
    public get BaseTextureId() {return this.GetProp("BaseTextureId", DataType.Int64)!;}
    public set BaseTextureId(value) {this.SetProp("BaseTextureId", DataType.Int64, value);}
    public get BodyPart() {return this.GetProp("BodyPart", DataType.Enum)! as BodyPart;}
    public set BodyPart(value) {this.SetProp("BodyPart", DataType.Enum, value);}
    public get MeshId() {return this.GetProp("MeshId", DataType.Int64)!;}
    public set MeshId(value) {this.SetProp("MeshId", DataType.Int64, value);}
    public get OverlayTextureId() {return this.GetProp("OverlayTextureId", DataType.Int64)!;}
    public set OverlayTextureId(value) {this.SetProp("OverlayTextureId", DataType.Int64, value);}
}

export abstract class Clothing extends CharacterAppearance {
    public constructor()
    {
        super();
        this.addClassName("Clothing");
        this.Color3 = Color3.FromRGB(255, 255, 255);
    }
    public get Color3() {return this.GetProp("Color3", DataType.Color3)!;}
    public set Color3(value) {this.SetProp("Color3", DataType.Color3, value);}
}

export class Pants extends Clothing {
    public constructor()
    {
        super();
        this.addClassName("Pants");
        this.Name = "Pants";
        this.PantsTemplate = "";
    }
    public get PantsTemplate() {return this.GetProp("PantsTemplate", DataType.String)!;}
    public set PantsTemplate(value) {this.SetProp("PantsTemplate", DataType.String, value);}
}

export class Shirt extends Clothing {
    public constructor()
    {
        super();
        this.addClassName("Shirt");
        this.Name = "Shirt";
        this.ShirtTemplate = "";
    }
    public get ShirtTemplate() {return this.GetProp("ShirtTemplate", DataType.String)!;}
    public set ShirtTemplate(value) {this.SetProp("ShirtTemplate", DataType.String, value);}
}

export class ShirtGraphic extends CharacterAppearance {
    public constructor()
    {
        super();
        this.addClassName("ShirtGraphic");
        this.Name = "ShirtGraphic";
        this.Color3 = Color3.FromRGB(255, 255, 255);
        this.Graphic = "";
    }
    public get Color3() {return this.GetProp("Color3", DataType.Color3)!;}
    public set Color3(value) {this.SetProp("Color3", DataType.Color3, value);}
    public get Graphic() {return this.GetProp("Graphic", DataType.String)!;}
    public set Graphic(value) {this.SetProp("Graphic", DataType.String, value);}
}

/**@deprecated Deprecated by Roblox*/
export class Skin extends CharacterAppearance {
    public constructor()
    {
        super();
        this.addClassName("Skin");
        this.Name = "Skin";
    }
    public get SkinColor() {return this.GetProp("SkinColor", DataType.BrickColor);}
    public set SkinColor(value) {this.SetProp("SkinColor", DataType.BrickColor, value);}
}

export class Chat extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("Chat");
        this.Name = "Chat";
        this.BubbleChatEnabled = false;
        this.IsAutoMigrated = false;
        this.LoadDefaultChat = true;
    }
    public get BubbleChatEnabled() {return this.GetProp("BubbleChatEnabled", DataType.Bool)!;}
    public set BubbleChatEnabled(value) {this.SetProp("BubbleChatEnabled", DataType.Bool, value);}
    public get IsAutoMigrated() {return this.GetProp("IsAutoMigrated", DataType.Bool)!;}
    public set IsAutoMigrated(value) {this.SetProp("IsAutoMigrated", DataType.Bool, value);}
    public get LoadDefaultChat() {return this.GetProp("LoadDefaultChat", DataType.Bool)!;}
    public set LoadDefaultChat(value) {this.SetProp("LoadDefaultChat", DataType.Bool, value);}
}

export class ChatbotUIService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ChatbotUIService");
        this.Name = "ChatbotUIService";
    }
}

export class ClickDetector extends Instance {
    public constructor()
    {
        super();
        this.addClassName("ClickDetector");
        this.Name = "ClickDetector";
        this.CursorIcon = "";
        this.MaxActivationDistance = 32;
    }
    public get CursorIcon() {return this.GetProp("CursorIcon", DataType.String)!;}
    public set CursorIcon(value) {this.SetProp("CursorIcon", DataType.String, value);}
    public get MaxActivationDistance() {return this.GetProp("MaxActivationDistance", DataType.Float32)!;}
    public set MaxActivationDistance(value) {this.SetProp("MaxActivationDistance", DataType.Float32, value);}
}

export class DragDetector extends ClickDetector {
    public constructor()
    {
        super();
        this.addClassName("DragDetector");
        this.Name = "DragDetector";
        this.ActivatedCursorIcon = "";
        this.ApplyAtCenterOfMass = false;
        this.DragStyle = DragDetectorDragStyle.TranslatePlane;
        this.Enabled = true;
        this.GamepadModeSwitchKeyCode = KeyCode.ButtonR1;
        this.KeyboardModeSwitchKeyCode = KeyCode.LeftControl;
        this.MaxDragAngle = 0;
        this.MaxDragTranslation = new Vector3(0, 0, 0);
        this.MaxForce = 10000000;
        this.MaxTorque = 10000;
        this.MinDragAngle = 0;
        this.MinDragTranslation = new Vector3(0, 0, 0);
        this.Orientation = new Vector3(0, 180, 90);
        this.PermissionPolicy = DragDetectorPermissionPolicy.Everybody;
        this.ResponseStyle = DragDetectorResponseStyle.Physical;
        this.Responsiveness = 10;
        this.RunLocally = false;
        this.TrackballRadialPullFactor = 1;
        this.TrackballRollFactor = 1;
        this.VRSwitchKeyCode = KeyCode.ButtonL2;
        this.DragFrame = CFrame.Identity;
    }
    public get ActivatedCursorIcon() {return this.GetProp("ActivatedCursorIcon", DataType.String)!;}
    public set ActivatedCursorIcon(value) {this.SetProp("ActivatedCursorIcon", DataType.String, value);}
    public get ApplyAtCenterOfMass() {return this.GetProp("ApplyAtCenterOfMass", DataType.Bool)!;}
    public set ApplyAtCenterOfMass(value) {this.SetProp("ApplyAtCenterOfMass", DataType.Bool, value);}
    public get DragFrame() {return this.GetProp("DragFrame", DataType.CFrame)!;}
    public set DragFrame(value) {this.SetProp("DragFrame", DataType.CFrame, value);}
    public get DragStyle() {return this.GetProp("DragStyle", DataType.Enum)! as DragDetectorDragStyle;}
    public set DragStyle(value) {this.SetProp("DragStyle", DataType.Enum, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get GamepadModeSwitchKeyCode() {return this.GetProp("GamepadModeSwitchKeyCode", DataType.Enum)! as KeyCode;}
    public set GamepadModeSwitchKeyCode(value) {this.SetProp("GamepadModeSwitchKeyCode", DataType.Enum, value);}
    public get KeyboardModeSwitchKeyCode() {return this.GetProp("KeyboardModeSwitchKeyCode", DataType.Enum)! as KeyCode;}
    public set KeyboardModeSwitchKeyCode(value) {this.SetProp("KeyboardModeSwitchKeyCode", DataType.Enum, value);}
    public get MaxDragAngle() {return this.GetProp("MaxDragAngle", DataType.Float32)!;}
    public set MaxDragAngle(value) {this.SetProp("MaxDragAngle", DataType.Float32, value);}
    public get MaxDragTranslation() {return this.GetProp("MaxDragTranslation", DataType.Vector3)!;}
    public set MaxDragTranslation(value) {this.SetProp("MaxDragTranslation", DataType.Vector3, value);}
    public get MaxForce() {return this.GetProp("MaxForce", DataType.Float32)!;}
    public set MaxForce(value) {this.SetProp("MaxForce", DataType.Float32, value);}
    public get MaxTorque() {return this.GetProp("MaxTorque", DataType.Float32)!;}
    public set MaxTorque(value) {this.SetProp("MaxTorque", DataType.Float32, value);}
    public get MinDragAngle() {return this.GetProp("MinDragAngle", DataType.Float32)!;}
    public set MinDragAngle(value) {this.SetProp("MinDragAngle", DataType.Float32, value);}
    public get MinDragTranslation() {return this.GetProp("MinDragTranslation", DataType.Vector3)!;}
    public set MinDragTranslation(value) {this.SetProp("MinDragTranslation", DataType.Vector3, value);}
    public get Orientation() {return this.GetProp("Orientation", DataType.Vector3)!;}
    public set Orientation(value) {this.SetProp("Orientation", DataType.Vector3, value);}
    public get PermissionPolicy() {return this.GetProp("PermissionPolicy", DataType.Enum)! as DragDetectorPermissionPolicy;}
    public set PermissionPolicy(value) {this.SetProp("PermissionPolicy", DataType.Enum, value);}
    public get ReferenceInstance() {return this.GetProp("ReferenceInstance", DataType.Referent) as Instance | undefined;}
    public set ReferenceInstance(value) {this.SetProp("ReferenceInstance", DataType.Referent, value);}
    public get ResponseStyle() {return this.GetProp("ResponseStyle", DataType.Enum)! as DragDetectorResponseStyle;}
    public set ResponseStyle(value) {this.SetProp("ResponseStyle", DataType.Enum, value);}
    public get Responsiveness() {return this.GetProp("Responsiveness", DataType.Float32)!;}
    public set Responsiveness(value) {this.SetProp("Responsiveness", DataType.Float32, value);}
    public get RunLocally() {return this.GetProp("RunLocally", DataType.Bool)!;}
    public set RunLocally(value) {this.SetProp("RunLocally", DataType.Bool, value);}
    public get TrackballRadialPullFactor() {return this.GetProp("TrackballRadialPullFactor", DataType.Float32)!;}
    public set TrackballRadialPullFactor(value) {this.SetProp("TrackballRadialPullFactor", DataType.Float32, value);}
    public get TrackballRollFactor() {return this.GetProp("TrackballRollFactor", DataType.Float32)!;}
    public set TrackballRollFactor(value) {this.SetProp("TrackballRollFactor", DataType.Float32, value);}
    public get VRSwitchKeyCode() {return this.GetProp("VRSwitchKeyCode", DataType.Enum)! as KeyCode;}
    public set VRSwitchKeyCode(value) {this.SetProp("VRSwitchKeyCode", DataType.Enum, value);}
}

export class CloudCRUDService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("CloudCRUDService");
        this.Name = "CloudCRUDService";
    }
}

export class Clouds extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Clouds");
        this.Name = "Clouds";
        this.Color = Color3.FromRGB(255, 255, 255);
        this.Cover = 0.5;
        this.Density = 0.7;
        this.Enabled = true;
    }
    public get Color() {return this.GetProp("Color", DataType.Color3)!;}
    public set Color(value) {this.SetProp("Color", DataType.Color3, value);}
    public get Cover() {return this.GetProp("Cover", DataType.Float32)!;}
    public set Cover(value) {this.SetProp("Cover", DataType.Float32, value);}
    public get Density() {return this.GetProp("Density", DataType.Float32)!;}
    public set Density(value) {this.SetProp("Density", DataType.Float32, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
}

export class ClusterPacketCache extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ClusterPacketCache");
        this.Name = "ClusterPacketCache";
    }
}

export class CollaboratorsService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("CollaboratorsService");
        this.Name = "CollaboratorsService";
    }
}

export class CollectionService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("CollectionService");
        this.Name = "CollectionService";
    }
}

export class CommandService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("CommandService");
        this.Name = "CommandService";
    }
}

export class CommerceService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("CommerceService");
        this.Name = "CommerceService";
    }
}

export class ConfigService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ConfigService");
        this.Name = "ConfigService";
    }
}

export class Configuration extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Configuration");
        this.Name = "Configuration";
    }
}

export class ConfigureServerService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ConfigureServerService");
        this.Name = "ConfigureServerService";
    }
}

export class ConnectivityService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ConnectivityService");
        this.Name = "ConnectivityService";
    }
}

export abstract class Constraint extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Constraint");
        this.Enabled = true;
        this.Visible = false;
    }
    public get Attachment0() {return this.GetProp("Attachment0", DataType.Referent) as Attachment | undefined;}
    public set Attachment0(value) {this.SetProp("Attachment0", DataType.Referent, value);}
    public get Attachment1() {return this.GetProp("Attachment1", DataType.Referent) as Attachment | undefined;}
    public set Attachment1(value) {this.SetProp("Attachment1", DataType.Referent, value);}
    public get Color() {return this.GetProp("Color", DataType.BrickColor);}
    public set Color(value) {this.SetProp("Color", DataType.BrickColor, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get Visible() {return this.GetProp("Visible", DataType.Bool)!;}
    public set Visible(value) {this.SetProp("Visible", DataType.Bool, value);}
}

export class AlignOrientation extends Constraint {
    public constructor()
    {
        super();
        this.addClassName("AlignOrientation");
        this.Name = "AlignOrientation";
        this.AlignType = AlignType.AllAxes;
        this.MaxAngularVelocity = Infinity;
        this.MaxTorque = 10000;
        this.Mode = OrientationAlignmentMode.TwoAttachment;
        this.PrimaryAxisOnly = false;
        this.ReactionTorqueEnabled = false;
        this.Responsiveness = 10;
        this.RigidityEnabled = false;
        this.CFrame = CFrame.Identity;
    }
    public get AlignType() {return this.GetProp("AlignType", DataType.Enum)! as AlignType;}
    public set AlignType(value) {this.SetProp("AlignType", DataType.Enum, value);}
    public get CFrame() {return this.GetProp("CFrame", DataType.CFrame)!;}
    public set CFrame(value) {this.SetProp("CFrame", DataType.CFrame, value);}
    public get MaxAngularVelocity() {return this.GetProp("MaxAngularVelocity", DataType.Float32)!;}
    public set MaxAngularVelocity(value) {this.SetProp("MaxAngularVelocity", DataType.Float32, value);}
    public get MaxTorque() {return this.GetProp("MaxTorque", DataType.Float32)!;}
    public set MaxTorque(value) {this.SetProp("MaxTorque", DataType.Float32, value);}
    public get Mode() {return this.GetProp("Mode", DataType.Enum)! as OrientationAlignmentMode;}
    public set Mode(value) {this.SetProp("Mode", DataType.Enum, value);}
    public get PrimaryAxisOnly() {return this.GetProp("PrimaryAxisOnly", DataType.Bool)!;}
    public set PrimaryAxisOnly(value) {this.SetProp("PrimaryAxisOnly", DataType.Bool, value);}
    public get ReactionTorqueEnabled() {return this.GetProp("ReactionTorqueEnabled", DataType.Bool)!;}
    public set ReactionTorqueEnabled(value) {this.SetProp("ReactionTorqueEnabled", DataType.Bool, value);}
    public get Responsiveness() {return this.GetProp("Responsiveness", DataType.Float32)!;}
    public set Responsiveness(value) {this.SetProp("Responsiveness", DataType.Float32, value);}
    public get RigidityEnabled() {return this.GetProp("RigidityEnabled", DataType.Bool)!;}
    public set RigidityEnabled(value) {this.SetProp("RigidityEnabled", DataType.Bool, value);}
}

export class AlignPosition extends Constraint {
    public constructor()
    {
        super();
        this.addClassName("AlignPosition");
        this.Name = "AlignPosition";
        this.ApplyAtCenterOfMass = false;
        this.ForceLimitMode = ForceLimitMode.Magnitude;
        this.ForceRelativeTo = ActuatorRelativeTo.World;
        this.MaxAxesForce = new Vector3(10000, 10000, 10000);
        this.MaxForce = 10000;
        this.MaxVelocity = Infinity;
        this.Mode = PositionAlignmentMode.TwoAttachment;
        this.Position = new Vector3(0, 0, 0);
        this.ReactionForceEnabled = false;
        this.Responsiveness = 10;
        this.RigidityEnabled = false;
    }
    public get ApplyAtCenterOfMass() {return this.GetProp("ApplyAtCenterOfMass", DataType.Bool)!;}
    public set ApplyAtCenterOfMass(value) {this.SetProp("ApplyAtCenterOfMass", DataType.Bool, value);}
    public get ForceLimitMode() {return this.GetProp("ForceLimitMode", DataType.Enum)! as ForceLimitMode;}
    public set ForceLimitMode(value) {this.SetProp("ForceLimitMode", DataType.Enum, value);}
    public get ForceRelativeTo() {return this.GetProp("ForceRelativeTo", DataType.Enum)! as ActuatorRelativeTo;}
    public set ForceRelativeTo(value) {this.SetProp("ForceRelativeTo", DataType.Enum, value);}
    public get MaxAxesForce() {return this.GetProp("MaxAxesForce", DataType.Vector3)!;}
    public set MaxAxesForce(value) {this.SetProp("MaxAxesForce", DataType.Vector3, value);}
    public get MaxForce() {return this.GetProp("MaxForce", DataType.Float32)!;}
    public set MaxForce(value) {this.SetProp("MaxForce", DataType.Float32, value);}
    public get MaxVelocity() {return this.GetProp("MaxVelocity", DataType.Float32)!;}
    public set MaxVelocity(value) {this.SetProp("MaxVelocity", DataType.Float32, value);}
    public get Mode() {return this.GetProp("Mode", DataType.Enum)! as PositionAlignmentMode;}
    public set Mode(value) {this.SetProp("Mode", DataType.Enum, value);}
    public get Position() {return this.GetProp("Position", DataType.Vector3)!;}
    public set Position(value) {this.SetProp("Position", DataType.Vector3, value);}
    public get ReactionForceEnabled() {return this.GetProp("ReactionForceEnabled", DataType.Bool)!;}
    public set ReactionForceEnabled(value) {this.SetProp("ReactionForceEnabled", DataType.Bool, value);}
    public get Responsiveness() {return this.GetProp("Responsiveness", DataType.Float32)!;}
    public set Responsiveness(value) {this.SetProp("Responsiveness", DataType.Float32, value);}
    public get RigidityEnabled() {return this.GetProp("RigidityEnabled", DataType.Bool)!;}
    public set RigidityEnabled(value) {this.SetProp("RigidityEnabled", DataType.Bool, value);}
}

export class AngularVelocity extends Constraint {
    public constructor()
    {
        super();
        this.addClassName("AngularVelocity");
        this.Name = "AngularVelocity";
        this.AngularVelocity = new Vector3(0, 0, 0);
        this.MaxTorque = 0;
        this.ReactionTorqueEnabled = false;
        this.RelativeTo = ActuatorRelativeTo.World;
    }
    public get AngularVelocity() {return this.GetProp("AngularVelocity", DataType.Vector3)!;}
    public set AngularVelocity(value) {this.SetProp("AngularVelocity", DataType.Vector3, value);}
    public get MaxTorque() {return this.GetProp("MaxTorque", DataType.Float32)!;}
    public set MaxTorque(value) {this.SetProp("MaxTorque", DataType.Float32, value);}
    public get ReactionTorqueEnabled() {return this.GetProp("ReactionTorqueEnabled", DataType.Bool)!;}
    public set ReactionTorqueEnabled(value) {this.SetProp("ReactionTorqueEnabled", DataType.Bool, value);}
    public get RelativeTo() {return this.GetProp("RelativeTo", DataType.Enum)! as ActuatorRelativeTo;}
    public set RelativeTo(value) {this.SetProp("RelativeTo", DataType.Enum, value);}
}

export class AnimationConstraint extends Constraint {
    public constructor()
    {
        super();
        this.addClassName("AnimationConstraint");
        this.Name = "AnimationConstraint";
        this.IsKinematic = false;
        this.MaxForce = 10000;
        this.MaxTorque = 10000;
        this.Transform = CFrame.Identity;
    }
    public get IsKinematic() {return this.GetProp("IsKinematic", DataType.Bool)!;}
    public set IsKinematic(value) {this.SetProp("IsKinematic", DataType.Bool, value);}
    public get MaxForce() {return this.GetProp("MaxForce", DataType.Float32)!;}
    public set MaxForce(value) {this.SetProp("MaxForce", DataType.Float32, value);}
    public get MaxTorque() {return this.GetProp("MaxTorque", DataType.Float32)!;}
    public set MaxTorque(value) {this.SetProp("MaxTorque", DataType.Float32, value);}
    public get Transform() {return this.GetProp("Transform", DataType.CFrame)!;}
    public set Transform(value) {this.SetProp("Transform", DataType.CFrame, value);}
}

export class BallSocketConstraint extends Constraint {
    public constructor()
    {
        super();
        this.addClassName("BallSocketConstraint");
        this.Name = "BallSocketConstraint";
        this.LimitsEnabled = false;
        this.MaxFrictionTorqueXml = 0;
        this.Radius = 0.15;
        this.Restitution = 0;
        this.TwistLimitsEnabled = false;
        this.TwistLowerAngle = -45;
        this.TwistUpperAngle = 45;
        this.UpperAngle = 45;
    }
    public get LimitsEnabled() {return this.GetProp("LimitsEnabled", DataType.Bool)!;}
    public set LimitsEnabled(value) {this.SetProp("LimitsEnabled", DataType.Bool, value);}
    public get MaxFrictionTorqueXml() {return this.GetProp("MaxFrictionTorqueXml", DataType.Float32)!;}
    public set MaxFrictionTorqueXml(value) {this.SetProp("MaxFrictionTorqueXml", DataType.Float32, value);}
    public get Radius() {return this.GetProp("Radius", DataType.Float32)!;}
    public set Radius(value) {this.SetProp("Radius", DataType.Float32, value);}
    public get Restitution() {return this.GetProp("Restitution", DataType.Float32)!;}
    public set Restitution(value) {this.SetProp("Restitution", DataType.Float32, value);}
    public get TwistLimitsEnabled() {return this.GetProp("TwistLimitsEnabled", DataType.Bool)!;}
    public set TwistLimitsEnabled(value) {this.SetProp("TwistLimitsEnabled", DataType.Bool, value);}
    public get TwistLowerAngle() {return this.GetProp("TwistLowerAngle", DataType.Float32)!;}
    public set TwistLowerAngle(value) {this.SetProp("TwistLowerAngle", DataType.Float32, value);}
    public get TwistUpperAngle() {return this.GetProp("TwistUpperAngle", DataType.Float32)!;}
    public set TwistUpperAngle(value) {this.SetProp("TwistUpperAngle", DataType.Float32, value);}
    public get UpperAngle() {return this.GetProp("UpperAngle", DataType.Float32)!;}
    public set UpperAngle(value) {this.SetProp("UpperAngle", DataType.Float32, value);}
}

export class HingeConstraint extends Constraint {
    public constructor()
    {
        super();
        this.addClassName("HingeConstraint");
        this.Name = "HingeConstraint";
        this.ActuatorType = ActuatorType.None;
        this.AngularResponsiveness = 45;
        this.AngularSpeed = 0;
        this.AngularVelocity = 0;
        this.LimitsEnabled = false;
        this.LowerAngle = -45;
        this.MotorMaxAcceleration = 500000;
        this.MotorMaxTorque = 0;
        this.Radius = 0.15;
        this.Restitution = 0;
        this.ServoMaxTorque = 0;
        this.SoftlockServoUponReachingTarget = false;
        this.TargetAngle = 0;
        this.UpperAngle = 45;
    }
    public get ActuatorType() {return this.GetProp("ActuatorType", DataType.Enum)! as ActuatorType;}
    public set ActuatorType(value) {this.SetProp("ActuatorType", DataType.Enum, value);}
    public get AngularResponsiveness() {return this.GetProp("AngularResponsiveness", DataType.Float32)!;}
    public set AngularResponsiveness(value) {this.SetProp("AngularResponsiveness", DataType.Float32, value);}
    public get AngularSpeed() {return this.GetProp("AngularSpeed", DataType.Float32)!;}
    public set AngularSpeed(value) {this.SetProp("AngularSpeed", DataType.Float32, value);}
    public get AngularVelocity() {return this.GetProp("AngularVelocity", DataType.Float32)!;}
    public set AngularVelocity(value) {this.SetProp("AngularVelocity", DataType.Float32, value);}
    public get LimitsEnabled() {return this.GetProp("LimitsEnabled", DataType.Bool)!;}
    public set LimitsEnabled(value) {this.SetProp("LimitsEnabled", DataType.Bool, value);}
    public get LowerAngle() {return this.GetProp("LowerAngle", DataType.Float32)!;}
    public set LowerAngle(value) {this.SetProp("LowerAngle", DataType.Float32, value);}
    public get MotorMaxAcceleration() {return this.GetProp("MotorMaxAcceleration", DataType.Float32)!;}
    public set MotorMaxAcceleration(value) {this.SetProp("MotorMaxAcceleration", DataType.Float32, value);}
    public get MotorMaxTorque() {return this.GetProp("MotorMaxTorque", DataType.Float32)!;}
    public set MotorMaxTorque(value) {this.SetProp("MotorMaxTorque", DataType.Float32, value);}
    public get Radius() {return this.GetProp("Radius", DataType.Float32)!;}
    public set Radius(value) {this.SetProp("Radius", DataType.Float32, value);}
    public get Restitution() {return this.GetProp("Restitution", DataType.Float32)!;}
    public set Restitution(value) {this.SetProp("Restitution", DataType.Float32, value);}
    public get ServoMaxTorque() {return this.GetProp("ServoMaxTorque", DataType.Float32)!;}
    public set ServoMaxTorque(value) {this.SetProp("ServoMaxTorque", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get SoftlockServoUponReachingTarget() {return this.GetProp("SoftlockServoUponReachingTarget", DataType.Bool)!;}
    /**@deprecated Deprecated by Roblox*/
    public set SoftlockServoUponReachingTarget(value) {this.SetProp("SoftlockServoUponReachingTarget", DataType.Bool, value);}
    public get TargetAngle() {return this.GetProp("TargetAngle", DataType.Float32)!;}
    public set TargetAngle(value) {this.SetProp("TargetAngle", DataType.Float32, value);}
    public get UpperAngle() {return this.GetProp("UpperAngle", DataType.Float32)!;}
    public set UpperAngle(value) {this.SetProp("UpperAngle", DataType.Float32, value);}
}

export class LineForce extends Constraint {
    public constructor()
    {
        super();
        this.addClassName("LineForce");
        this.Name = "LineForce";
        this.ApplyAtCenterOfMass = false;
        this.InverseSquareLaw = false;
        this.Magnitude = 1000;
        this.MaxForce = Infinity;
        this.ReactionForceEnabled = false;
    }
    public get ApplyAtCenterOfMass() {return this.GetProp("ApplyAtCenterOfMass", DataType.Bool)!;}
    public set ApplyAtCenterOfMass(value) {this.SetProp("ApplyAtCenterOfMass", DataType.Bool, value);}
    public get InverseSquareLaw() {return this.GetProp("InverseSquareLaw", DataType.Bool)!;}
    public set InverseSquareLaw(value) {this.SetProp("InverseSquareLaw", DataType.Bool, value);}
    public get Magnitude() {return this.GetProp("Magnitude", DataType.Float32)!;}
    public set Magnitude(value) {this.SetProp("Magnitude", DataType.Float32, value);}
    public get MaxForce() {return this.GetProp("MaxForce", DataType.Float32)!;}
    public set MaxForce(value) {this.SetProp("MaxForce", DataType.Float32, value);}
    public get ReactionForceEnabled() {return this.GetProp("ReactionForceEnabled", DataType.Bool)!;}
    public set ReactionForceEnabled(value) {this.SetProp("ReactionForceEnabled", DataType.Bool, value);}
}

export class LinearVelocity extends Constraint {
    public constructor()
    {
        super();
        this.addClassName("LinearVelocity");
        this.Name = "LinearVelocity";
        this.ForceLimitMode = ForceLimitMode.Magnitude;
        this.ForceLimitsEnabled = true;
        this.LineDirection = new Vector3(1, 0, 0);
        this.LineVelocity = 0;
        this.MaxAxesForce = new Vector3(1000, 1000, 1000);
        this.MaxForce = 1000;
        this.MaxPlanarAxesForce = new Vector2(1000, 1000);
        this.PlaneVelocity = new Vector2(0, 0);
        this.PrimaryTangentAxis = new Vector3(1, 0, 0);
        this.ReactionForceEnabled = true;
        this.RelativeTo = ActuatorRelativeTo.World;
        this.SecondaryTangentAxis = new Vector3(0, 1, 0);
        this.VectorVelocity = new Vector3(0, 0, 0);
        this.VelocityConstraintMode = VelocityConstraintMode.Vector;
    }
    public get ForceLimitMode() {return this.GetProp("ForceLimitMode", DataType.Enum)! as ForceLimitMode;}
    public set ForceLimitMode(value) {this.SetProp("ForceLimitMode", DataType.Enum, value);}
    public get ForceLimitsEnabled() {return this.GetProp("ForceLimitsEnabled", DataType.Bool)!;}
    public set ForceLimitsEnabled(value) {this.SetProp("ForceLimitsEnabled", DataType.Bool, value);}
    public get LineDirection() {return this.GetProp("LineDirection", DataType.Vector3)!;}
    public set LineDirection(value) {this.SetProp("LineDirection", DataType.Vector3, value);}
    public get LineVelocity() {return this.GetProp("LineVelocity", DataType.Float32)!;}
    public set LineVelocity(value) {this.SetProp("LineVelocity", DataType.Float32, value);}
    public get MaxAxesForce() {return this.GetProp("MaxAxesForce", DataType.Vector3)!;}
    public set MaxAxesForce(value) {this.SetProp("MaxAxesForce", DataType.Vector3, value);}
    public get MaxForce() {return this.GetProp("MaxForce", DataType.Float32)!;}
    public set MaxForce(value) {this.SetProp("MaxForce", DataType.Float32, value);}
    public get MaxPlanarAxesForce() {return this.GetProp("MaxPlanarAxesForce", DataType.Vector2)!;}
    public set MaxPlanarAxesForce(value) {this.SetProp("MaxPlanarAxesForce", DataType.Vector2, value);}
    public get PlaneVelocity() {return this.GetProp("PlaneVelocity", DataType.Vector2)!;}
    public set PlaneVelocity(value) {this.SetProp("PlaneVelocity", DataType.Vector2, value);}
    public get PrimaryTangentAxis() {return this.GetProp("PrimaryTangentAxis", DataType.Vector3)!;}
    public set PrimaryTangentAxis(value) {this.SetProp("PrimaryTangentAxis", DataType.Vector3, value);}
    public get ReactionForceEnabled() {return this.GetProp("ReactionForceEnabled", DataType.Bool)!;}
    public set ReactionForceEnabled(value) {this.SetProp("ReactionForceEnabled", DataType.Bool, value);}
    public get RelativeTo() {return this.GetProp("RelativeTo", DataType.Enum)! as ActuatorRelativeTo;}
    public set RelativeTo(value) {this.SetProp("RelativeTo", DataType.Enum, value);}
    public get SecondaryTangentAxis() {return this.GetProp("SecondaryTangentAxis", DataType.Vector3)!;}
    public set SecondaryTangentAxis(value) {this.SetProp("SecondaryTangentAxis", DataType.Vector3, value);}
    public get VectorVelocity() {return this.GetProp("VectorVelocity", DataType.Vector3)!;}
    public set VectorVelocity(value) {this.SetProp("VectorVelocity", DataType.Vector3, value);}
    public get VelocityConstraintMode() {return this.GetProp("VelocityConstraintMode", DataType.Enum)! as VelocityConstraintMode;}
    public set VelocityConstraintMode(value) {this.SetProp("VelocityConstraintMode", DataType.Enum, value);}
}

export class PlaneConstraint extends Constraint {
    public constructor()
    {
        super();
        this.addClassName("PlaneConstraint");
        this.Name = "PlaneConstraint";
    }
}

/**@deprecated Deprecated by Roblox*/
export class Plane extends PlaneConstraint {
    public constructor()
    {
        super();
        this.addClassName("Plane");
        this.Name = "Plane";
    }
}

export class RigidConstraint extends Constraint {
    public constructor()
    {
        super();
        this.addClassName("RigidConstraint");
        this.Name = "RigidConstraint";
    }
}

export class RodConstraint extends Constraint {
    public constructor()
    {
        super();
        this.addClassName("RodConstraint");
        this.Name = "RodConstraint";
        this.Length = 5;
        this.LimitAngle0 = 90;
        this.LimitAngle1 = 90;
        this.LimitsEnabled = false;
        this.Thickness = 0.1;
    }
    public get Length() {return this.GetProp("Length", DataType.Float32)!;}
    public set Length(value) {this.SetProp("Length", DataType.Float32, value);}
    public get LimitAngle0() {return this.GetProp("LimitAngle0", DataType.Float32)!;}
    public set LimitAngle0(value) {this.SetProp("LimitAngle0", DataType.Float32, value);}
    public get LimitAngle1() {return this.GetProp("LimitAngle1", DataType.Float32)!;}
    public set LimitAngle1(value) {this.SetProp("LimitAngle1", DataType.Float32, value);}
    public get LimitsEnabled() {return this.GetProp("LimitsEnabled", DataType.Bool)!;}
    public set LimitsEnabled(value) {this.SetProp("LimitsEnabled", DataType.Bool, value);}
    public get Thickness() {return this.GetProp("Thickness", DataType.Float32)!;}
    public set Thickness(value) {this.SetProp("Thickness", DataType.Float32, value);}
}

export class RopeConstraint extends Constraint {
    public constructor()
    {
        super();
        this.addClassName("RopeConstraint");
        this.Name = "RopeConstraint";
        this.Length = 5;
        this.Restitution = 0;
        this.Thickness = 0.1;
        this.WinchEnabled = false;
        this.WinchForce = 10000;
        this.WinchResponsiveness = 45;
        this.WinchSpeed = 2;
        this.WinchTarget = 5;
    }
    public get Length() {return this.GetProp("Length", DataType.Float32)!;}
    public set Length(value) {this.SetProp("Length", DataType.Float32, value);}
    public get Restitution() {return this.GetProp("Restitution", DataType.Float32)!;}
    public set Restitution(value) {this.SetProp("Restitution", DataType.Float32, value);}
    public get Thickness() {return this.GetProp("Thickness", DataType.Float32)!;}
    public set Thickness(value) {this.SetProp("Thickness", DataType.Float32, value);}
    public get WinchEnabled() {return this.GetProp("WinchEnabled", DataType.Bool)!;}
    public set WinchEnabled(value) {this.SetProp("WinchEnabled", DataType.Bool, value);}
    public get WinchForce() {return this.GetProp("WinchForce", DataType.Float32)!;}
    public set WinchForce(value) {this.SetProp("WinchForce", DataType.Float32, value);}
    public get WinchResponsiveness() {return this.GetProp("WinchResponsiveness", DataType.Float32)!;}
    public set WinchResponsiveness(value) {this.SetProp("WinchResponsiveness", DataType.Float32, value);}
    public get WinchSpeed() {return this.GetProp("WinchSpeed", DataType.Float32)!;}
    public set WinchSpeed(value) {this.SetProp("WinchSpeed", DataType.Float32, value);}
    public get WinchTarget() {return this.GetProp("WinchTarget", DataType.Float32)!;}
    public set WinchTarget(value) {this.SetProp("WinchTarget", DataType.Float32, value);}
}

export abstract class SlidingBallConstraint extends Constraint {
    public constructor()
    {
        super();
        this.addClassName("SlidingBallConstraint");
        this.ActuatorType = ActuatorType.None;
        this.LimitsEnabled = false;
        this.LinearResponsiveness = 45;
        this.LowerLimit = 0;
        this.MotorMaxAcceleration = Infinity;
        this.MotorMaxForce = 0;
        this.Restitution = 0;
        this.ServoMaxForce = 0;
        this.Size = 0.15;
        this.SoftlockServoUponReachingTarget = false;
        this.Speed = 0;
        this.TargetPosition = 0;
        this.UpperLimit = 5;
        this.Velocity = 0;
    }
    public get ActuatorType() {return this.GetProp("ActuatorType", DataType.Enum)! as ActuatorType;}
    public set ActuatorType(value) {this.SetProp("ActuatorType", DataType.Enum, value);}
    public get LimitsEnabled() {return this.GetProp("LimitsEnabled", DataType.Bool)!;}
    public set LimitsEnabled(value) {this.SetProp("LimitsEnabled", DataType.Bool, value);}
    public get LinearResponsiveness() {return this.GetProp("LinearResponsiveness", DataType.Float32)!;}
    public set LinearResponsiveness(value) {this.SetProp("LinearResponsiveness", DataType.Float32, value);}
    public get LowerLimit() {return this.GetProp("LowerLimit", DataType.Float32)!;}
    public set LowerLimit(value) {this.SetProp("LowerLimit", DataType.Float32, value);}
    public get MotorMaxAcceleration() {return this.GetProp("MotorMaxAcceleration", DataType.Float32)!;}
    public set MotorMaxAcceleration(value) {this.SetProp("MotorMaxAcceleration", DataType.Float32, value);}
    public get MotorMaxForce() {return this.GetProp("MotorMaxForce", DataType.Float32)!;}
    public set MotorMaxForce(value) {this.SetProp("MotorMaxForce", DataType.Float32, value);}
    public get Restitution() {return this.GetProp("Restitution", DataType.Float32)!;}
    public set Restitution(value) {this.SetProp("Restitution", DataType.Float32, value);}
    public get ServoMaxForce() {return this.GetProp("ServoMaxForce", DataType.Float32)!;}
    public set ServoMaxForce(value) {this.SetProp("ServoMaxForce", DataType.Float32, value);}
    public get Size() {return this.GetProp("Size", DataType.Float32)!;}
    public set Size(value) {this.SetProp("Size", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get SoftlockServoUponReachingTarget() {return this.GetProp("SoftlockServoUponReachingTarget", DataType.Bool)!;}
    /**@deprecated Deprecated by Roblox*/
    public set SoftlockServoUponReachingTarget(value) {this.SetProp("SoftlockServoUponReachingTarget", DataType.Bool, value);}
    public get Speed() {return this.GetProp("Speed", DataType.Float32)!;}
    public set Speed(value) {this.SetProp("Speed", DataType.Float32, value);}
    public get TargetPosition() {return this.GetProp("TargetPosition", DataType.Float32)!;}
    public set TargetPosition(value) {this.SetProp("TargetPosition", DataType.Float32, value);}
    public get UpperLimit() {return this.GetProp("UpperLimit", DataType.Float32)!;}
    public set UpperLimit(value) {this.SetProp("UpperLimit", DataType.Float32, value);}
    public get Velocity() {return this.GetProp("Velocity", DataType.Float32)!;}
    public set Velocity(value) {this.SetProp("Velocity", DataType.Float32, value);}
}

export class CylindricalConstraint extends SlidingBallConstraint {
    public constructor()
    {
        super();
        this.addClassName("CylindricalConstraint");
        this.Name = "CylindricalConstraint";
        this.AngularActuatorType = ActuatorType.None;
        this.AngularLimitsEnabled = false;
        this.AngularResponsiveness = 45;
        this.AngularRestitution = 0;
        this.AngularSpeed = 0;
        this.AngularVelocity = 0;
        this.InclinationAngle = 0;
        this.LowerAngle = -45;
        this.MotorMaxAngularAcceleration = 500000;
        this.MotorMaxTorque = 0;
        this.RotationAxisVisible = false;
        this.ServoMaxTorque = 0;
        this.SoftlockAngularServoUponReachingTarget = false;
        this.TargetAngle = 0;
        this.UpperAngle = 45;
    }
    public get AngularActuatorType() {return this.GetProp("AngularActuatorType", DataType.Enum)! as ActuatorType;}
    public set AngularActuatorType(value) {this.SetProp("AngularActuatorType", DataType.Enum, value);}
    public get AngularLimitsEnabled() {return this.GetProp("AngularLimitsEnabled", DataType.Bool)!;}
    public set AngularLimitsEnabled(value) {this.SetProp("AngularLimitsEnabled", DataType.Bool, value);}
    public get AngularResponsiveness() {return this.GetProp("AngularResponsiveness", DataType.Float32)!;}
    public set AngularResponsiveness(value) {this.SetProp("AngularResponsiveness", DataType.Float32, value);}
    public get AngularRestitution() {return this.GetProp("AngularRestitution", DataType.Float32)!;}
    public set AngularRestitution(value) {this.SetProp("AngularRestitution", DataType.Float32, value);}
    public get AngularSpeed() {return this.GetProp("AngularSpeed", DataType.Float32)!;}
    public set AngularSpeed(value) {this.SetProp("AngularSpeed", DataType.Float32, value);}
    public get AngularVelocity() {return this.GetProp("AngularVelocity", DataType.Float32)!;}
    public set AngularVelocity(value) {this.SetProp("AngularVelocity", DataType.Float32, value);}
    public get InclinationAngle() {return this.GetProp("InclinationAngle", DataType.Float32)!;}
    public set InclinationAngle(value) {this.SetProp("InclinationAngle", DataType.Float32, value);}
    public get LowerAngle() {return this.GetProp("LowerAngle", DataType.Float32)!;}
    public set LowerAngle(value) {this.SetProp("LowerAngle", DataType.Float32, value);}
    public get MotorMaxAngularAcceleration() {return this.GetProp("MotorMaxAngularAcceleration", DataType.Float32)!;}
    public set MotorMaxAngularAcceleration(value) {this.SetProp("MotorMaxAngularAcceleration", DataType.Float32, value);}
    public get MotorMaxTorque() {return this.GetProp("MotorMaxTorque", DataType.Float32)!;}
    public set MotorMaxTorque(value) {this.SetProp("MotorMaxTorque", DataType.Float32, value);}
    public get RotationAxisVisible() {return this.GetProp("RotationAxisVisible", DataType.Bool)!;}
    public set RotationAxisVisible(value) {this.SetProp("RotationAxisVisible", DataType.Bool, value);}
    public get ServoMaxTorque() {return this.GetProp("ServoMaxTorque", DataType.Float32)!;}
    public set ServoMaxTorque(value) {this.SetProp("ServoMaxTorque", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get SoftlockAngularServoUponReachingTarget() {return this.GetProp("SoftlockAngularServoUponReachingTarget", DataType.Bool)!;}
    /**@deprecated Deprecated by Roblox*/
    public set SoftlockAngularServoUponReachingTarget(value) {this.SetProp("SoftlockAngularServoUponReachingTarget", DataType.Bool, value);}
    public get TargetAngle() {return this.GetProp("TargetAngle", DataType.Float32)!;}
    public set TargetAngle(value) {this.SetProp("TargetAngle", DataType.Float32, value);}
    public get UpperAngle() {return this.GetProp("UpperAngle", DataType.Float32)!;}
    public set UpperAngle(value) {this.SetProp("UpperAngle", DataType.Float32, value);}
}

export class PrismaticConstraint extends SlidingBallConstraint {
    public constructor()
    {
        super();
        this.addClassName("PrismaticConstraint");
        this.Name = "PrismaticConstraint";
    }
}

export class SpringConstraint extends Constraint {
    public constructor()
    {
        super();
        this.addClassName("SpringConstraint");
        this.Name = "SpringConstraint";
        this.Coils = 3;
        this.Damping = 0;
        this.FreeLength = 1;
        this.LimitsEnabled = false;
        this.MaxForce = Infinity;
        this.MaxLength = 5;
        this.MinLength = 0;
        this.Radius = 0.4;
        this.Stiffness = 0;
        this.Thickness = 0.1;
    }
    public get Coils() {return this.GetProp("Coils", DataType.Float32)!;}
    public set Coils(value) {this.SetProp("Coils", DataType.Float32, value);}
    public get Damping() {return this.GetProp("Damping", DataType.Float32)!;}
    public set Damping(value) {this.SetProp("Damping", DataType.Float32, value);}
    public get FreeLength() {return this.GetProp("FreeLength", DataType.Float32)!;}
    public set FreeLength(value) {this.SetProp("FreeLength", DataType.Float32, value);}
    public get LimitsEnabled() {return this.GetProp("LimitsEnabled", DataType.Bool)!;}
    public set LimitsEnabled(value) {this.SetProp("LimitsEnabled", DataType.Bool, value);}
    public get MaxForce() {return this.GetProp("MaxForce", DataType.Float32)!;}
    public set MaxForce(value) {this.SetProp("MaxForce", DataType.Float32, value);}
    public get MaxLength() {return this.GetProp("MaxLength", DataType.Float32)!;}
    public set MaxLength(value) {this.SetProp("MaxLength", DataType.Float32, value);}
    public get MinLength() {return this.GetProp("MinLength", DataType.Float32)!;}
    public set MinLength(value) {this.SetProp("MinLength", DataType.Float32, value);}
    public get Radius() {return this.GetProp("Radius", DataType.Float32)!;}
    public set Radius(value) {this.SetProp("Radius", DataType.Float32, value);}
    public get Stiffness() {return this.GetProp("Stiffness", DataType.Float32)!;}
    public set Stiffness(value) {this.SetProp("Stiffness", DataType.Float32, value);}
    public get Thickness() {return this.GetProp("Thickness", DataType.Float32)!;}
    public set Thickness(value) {this.SetProp("Thickness", DataType.Float32, value);}
}

export class Torque extends Constraint {
    public constructor()
    {
        super();
        this.addClassName("Torque");
        this.Name = "Torque";
        this.RelativeTo = ActuatorRelativeTo.Attachment0;
        this.Torque = new Vector3(0, 0, 0);
    }
    public get RelativeTo() {return this.GetProp("RelativeTo", DataType.Enum)! as ActuatorRelativeTo;}
    public set RelativeTo(value) {this.SetProp("RelativeTo", DataType.Enum, value);}
    public get Torque() {return this.GetProp("Torque", DataType.Vector3)!;}
    public set Torque(value) {this.SetProp("Torque", DataType.Vector3, value);}
}

export class TorsionSpringConstraint extends Constraint {
    public constructor()
    {
        super();
        this.addClassName("TorsionSpringConstraint");
        this.Name = "TorsionSpringConstraint";
        this.Coils = 8;
        this.Damping = 0.01;
        this.LimitEnabled = false;
        this.LimitsEnabled = false;
        this.MaxAngle = 45;
        this.MaxTorque = Infinity;
        this.Radius = 0.4;
        this.Restitution = 0;
        this.Stiffness = 100;
    }
    public get Coils() {return this.GetProp("Coils", DataType.Float32)!;}
    public set Coils(value) {this.SetProp("Coils", DataType.Float32, value);}
    public get Damping() {return this.GetProp("Damping", DataType.Float32)!;}
    public set Damping(value) {this.SetProp("Damping", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get LimitEnabled() {return this.GetProp("LimitEnabled", DataType.Bool)!;}
    /**@deprecated Deprecated by Roblox*/
    public set LimitEnabled(value) {this.SetProp("LimitEnabled", DataType.Bool, value);}
    public get LimitsEnabled() {return this.GetProp("LimitsEnabled", DataType.Bool)!;}
    public set LimitsEnabled(value) {this.SetProp("LimitsEnabled", DataType.Bool, value);}
    public get MaxAngle() {return this.GetProp("MaxAngle", DataType.Float32)!;}
    public set MaxAngle(value) {this.SetProp("MaxAngle", DataType.Float32, value);}
    public get MaxTorque() {return this.GetProp("MaxTorque", DataType.Float32)!;}
    public set MaxTorque(value) {this.SetProp("MaxTorque", DataType.Float32, value);}
    public get Radius() {return this.GetProp("Radius", DataType.Float32)!;}
    public set Radius(value) {this.SetProp("Radius", DataType.Float32, value);}
    public get Restitution() {return this.GetProp("Restitution", DataType.Float32)!;}
    public set Restitution(value) {this.SetProp("Restitution", DataType.Float32, value);}
    public get Stiffness() {return this.GetProp("Stiffness", DataType.Float32)!;}
    public set Stiffness(value) {this.SetProp("Stiffness", DataType.Float32, value);}
}

export class UniversalConstraint extends Constraint {
    public constructor()
    {
        super();
        this.addClassName("UniversalConstraint");
        this.Name = "UniversalConstraint";
        this.LimitsEnabled = false;
        this.MaxAngle = 45;
        this.Radius = 0.2;
        this.Restitution = 0;
    }
    public get LimitsEnabled() {return this.GetProp("LimitsEnabled", DataType.Bool)!;}
    public set LimitsEnabled(value) {this.SetProp("LimitsEnabled", DataType.Bool, value);}
    public get MaxAngle() {return this.GetProp("MaxAngle", DataType.Float32)!;}
    public set MaxAngle(value) {this.SetProp("MaxAngle", DataType.Float32, value);}
    public get Radius() {return this.GetProp("Radius", DataType.Float32)!;}
    public set Radius(value) {this.SetProp("Radius", DataType.Float32, value);}
    public get Restitution() {return this.GetProp("Restitution", DataType.Float32)!;}
    public set Restitution(value) {this.SetProp("Restitution", DataType.Float32, value);}
}

export class VectorForce extends Constraint {
    public constructor()
    {
        super();
        this.addClassName("VectorForce");
        this.Name = "VectorForce";
        this.ApplyAtCenterOfMass = false;
        this.Force = new Vector3(1000, 0, 0);
        this.RelativeTo = ActuatorRelativeTo.Attachment0;
    }
    public get ApplyAtCenterOfMass() {return this.GetProp("ApplyAtCenterOfMass", DataType.Bool)!;}
    public set ApplyAtCenterOfMass(value) {this.SetProp("ApplyAtCenterOfMass", DataType.Bool, value);}
    public get Force() {return this.GetProp("Force", DataType.Vector3)!;}
    public set Force(value) {this.SetProp("Force", DataType.Vector3, value);}
    public get RelativeTo() {return this.GetProp("RelativeTo", DataType.Enum)! as ActuatorRelativeTo;}
    public set RelativeTo(value) {this.SetProp("RelativeTo", DataType.Enum, value);}
}

export class ContentProvider extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ContentProvider");
        this.Name = "ContentProvider";
    }
}

export class ContextActionService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ContextActionService");
        this.Name = "ContextActionService";
    }
}

export abstract class Controller extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Controller");
    }
}

export class HumanoidController extends Controller {
    public constructor()
    {
        super();
        this.addClassName("HumanoidController");
        this.Name = "HumanoidController";
    }
}

export class SkateboardController extends Controller {
    public constructor()
    {
        super();
        this.addClassName("SkateboardController");
        this.Name = "SkateboardController";
    }
}

export class VehicleController extends Controller {
    public constructor()
    {
        super();
        this.addClassName("VehicleController");
        this.Name = "VehicleController";
    }
}

export abstract class ControllerBase extends Instance {
    public constructor()
    {
        super();
        this.addClassName("ControllerBase");
        this.BalanceRigidityEnabled = false;
        this.MoveSpeedFactor = 1;
    }
    public get BalanceRigidityEnabled() {return this.GetProp("BalanceRigidityEnabled", DataType.Bool)!;}
    public set BalanceRigidityEnabled(value) {this.SetProp("BalanceRigidityEnabled", DataType.Bool, value);}
    public get MoveSpeedFactor() {return this.GetProp("MoveSpeedFactor", DataType.Float32)!;}
    public set MoveSpeedFactor(value) {this.SetProp("MoveSpeedFactor", DataType.Float32, value);}
}

export class AirController extends ControllerBase {
    public constructor()
    {
        super();
        this.addClassName("AirController");
        this.Name = "AirController";
        this.BalanceMaxTorque = 10000;
        this.BalanceSpeed = 100;
        this.MaintainAngularMomentum = true;
        this.MaintainLinearMomentum = true;
        this.MoveMaxForce = 1000;
        this.TurnMaxTorque = 10000;
        this.TurnSpeedFactor = 1;
    }
    public get BalanceMaxTorque() {return this.GetProp("BalanceMaxTorque", DataType.Float32)!;}
    public set BalanceMaxTorque(value) {this.SetProp("BalanceMaxTorque", DataType.Float32, value);}
    public get BalanceSpeed() {return this.GetProp("BalanceSpeed", DataType.Float32)!;}
    public set BalanceSpeed(value) {this.SetProp("BalanceSpeed", DataType.Float32, value);}
    public get MaintainAngularMomentum() {return this.GetProp("MaintainAngularMomentum", DataType.Bool)!;}
    public set MaintainAngularMomentum(value) {this.SetProp("MaintainAngularMomentum", DataType.Bool, value);}
    public get MaintainLinearMomentum() {return this.GetProp("MaintainLinearMomentum", DataType.Bool)!;}
    public set MaintainLinearMomentum(value) {this.SetProp("MaintainLinearMomentum", DataType.Bool, value);}
    public get MoveMaxForce() {return this.GetProp("MoveMaxForce", DataType.Float32)!;}
    public set MoveMaxForce(value) {this.SetProp("MoveMaxForce", DataType.Float32, value);}
    public get TurnMaxTorque() {return this.GetProp("TurnMaxTorque", DataType.Float32)!;}
    public set TurnMaxTorque(value) {this.SetProp("TurnMaxTorque", DataType.Float32, value);}
    public get TurnSpeedFactor() {return this.GetProp("TurnSpeedFactor", DataType.Float32)!;}
    public set TurnSpeedFactor(value) {this.SetProp("TurnSpeedFactor", DataType.Float32, value);}
}

export class ClimbController extends ControllerBase {
    public constructor()
    {
        super();
        this.addClassName("ClimbController");
        this.Name = "ClimbController";
        this.AccelerationTime = 0;
        this.BalanceMaxTorque = 10000;
        this.BalanceSpeed = 100;
        this.MoveMaxForce = 10000;
    }
    public get AccelerationTime() {return this.GetProp("AccelerationTime", DataType.Float32)!;}
    public set AccelerationTime(value) {this.SetProp("AccelerationTime", DataType.Float32, value);}
    public get BalanceMaxTorque() {return this.GetProp("BalanceMaxTorque", DataType.Float32)!;}
    public set BalanceMaxTorque(value) {this.SetProp("BalanceMaxTorque", DataType.Float32, value);}
    public get BalanceSpeed() {return this.GetProp("BalanceSpeed", DataType.Float32)!;}
    public set BalanceSpeed(value) {this.SetProp("BalanceSpeed", DataType.Float32, value);}
    public get MoveMaxForce() {return this.GetProp("MoveMaxForce", DataType.Float32)!;}
    public set MoveMaxForce(value) {this.SetProp("MoveMaxForce", DataType.Float32, value);}
}

export class GroundController extends ControllerBase {
    public constructor()
    {
        super();
        this.addClassName("GroundController");
        this.Name = "GroundController";
        this.AccelerationLean = 1;
        this.AccelerationTime = 0;
        this.BalanceMaxTorque = 10000;
        this.BalanceSpeed = 100;
        this.DecelerationTime = 0;
        this.Friction = 2;
        this.FrictionWeight = 1;
        this.GroundOffset = 1;
        this.StandForce = 10000;
        this.StandSpeed = 100;
        this.TurnSpeedFactor = 1;
    }
    public get AccelerationLean() {return this.GetProp("AccelerationLean", DataType.Float32)!;}
    public set AccelerationLean(value) {this.SetProp("AccelerationLean", DataType.Float32, value);}
    public get AccelerationTime() {return this.GetProp("AccelerationTime", DataType.Float32)!;}
    public set AccelerationTime(value) {this.SetProp("AccelerationTime", DataType.Float32, value);}
    public get BalanceMaxTorque() {return this.GetProp("BalanceMaxTorque", DataType.Float32)!;}
    public set BalanceMaxTorque(value) {this.SetProp("BalanceMaxTorque", DataType.Float32, value);}
    public get BalanceSpeed() {return this.GetProp("BalanceSpeed", DataType.Float32)!;}
    public set BalanceSpeed(value) {this.SetProp("BalanceSpeed", DataType.Float32, value);}
    public get DecelerationTime() {return this.GetProp("DecelerationTime", DataType.Float32)!;}
    public set DecelerationTime(value) {this.SetProp("DecelerationTime", DataType.Float32, value);}
    public get Friction() {return this.GetProp("Friction", DataType.Float32)!;}
    public set Friction(value) {this.SetProp("Friction", DataType.Float32, value);}
    public get FrictionWeight() {return this.GetProp("FrictionWeight", DataType.Float32)!;}
    public set FrictionWeight(value) {this.SetProp("FrictionWeight", DataType.Float32, value);}
    public get GroundOffset() {return this.GetProp("GroundOffset", DataType.Float32)!;}
    public set GroundOffset(value) {this.SetProp("GroundOffset", DataType.Float32, value);}
    public get StandForce() {return this.GetProp("StandForce", DataType.Float32)!;}
    public set StandForce(value) {this.SetProp("StandForce", DataType.Float32, value);}
    public get StandSpeed() {return this.GetProp("StandSpeed", DataType.Float32)!;}
    public set StandSpeed(value) {this.SetProp("StandSpeed", DataType.Float32, value);}
    public get TurnSpeedFactor() {return this.GetProp("TurnSpeedFactor", DataType.Float32)!;}
    public set TurnSpeedFactor(value) {this.SetProp("TurnSpeedFactor", DataType.Float32, value);}
}

export class SwimController extends ControllerBase {
    public constructor()
    {
        super();
        this.addClassName("SwimController");
        this.Name = "SwimController";
        this.AccelerationTime = 0;
        this.PitchMaxTorque = 10000;
        this.PitchSpeedFactor = 1;
        this.RollMaxTorque = 10000;
        this.RollSpeedFactor = 1;
    }
    public get AccelerationTime() {return this.GetProp("AccelerationTime", DataType.Float32)!;}
    public set AccelerationTime(value) {this.SetProp("AccelerationTime", DataType.Float32, value);}
    public get PitchMaxTorque() {return this.GetProp("PitchMaxTorque", DataType.Float32)!;}
    public set PitchMaxTorque(value) {this.SetProp("PitchMaxTorque", DataType.Float32, value);}
    public get PitchSpeedFactor() {return this.GetProp("PitchSpeedFactor", DataType.Float32)!;}
    public set PitchSpeedFactor(value) {this.SetProp("PitchSpeedFactor", DataType.Float32, value);}
    public get RollMaxTorque() {return this.GetProp("RollMaxTorque", DataType.Float32)!;}
    public set RollMaxTorque(value) {this.SetProp("RollMaxTorque", DataType.Float32, value);}
    public get RollSpeedFactor() {return this.GetProp("RollSpeedFactor", DataType.Float32)!;}
    public set RollSpeedFactor(value) {this.SetProp("RollSpeedFactor", DataType.Float32, value);}
}

export class ControllerManager extends Instance {
    public constructor()
    {
        super();
        this.addClassName("ControllerManager");
        this.Name = "ControllerManager";
        this.BaseMoveSpeed = 16;
        this.BaseTurnSpeed = 8;
        this.FacingDirection = new Vector3(0, 0, 1);
        this.MovingDirection = new Vector3(0, 0, 0);
        this.UpDirection = new Vector3(0, 1, 0);
    }
    public get ActiveController() {return this.GetProp("ActiveController", DataType.Referent) as ControllerBase | undefined;}
    public set ActiveController(value) {this.SetProp("ActiveController", DataType.Referent, value);}
    public get BaseMoveSpeed() {return this.GetProp("BaseMoveSpeed", DataType.Float32)!;}
    public set BaseMoveSpeed(value) {this.SetProp("BaseMoveSpeed", DataType.Float32, value);}
    public get BaseTurnSpeed() {return this.GetProp("BaseTurnSpeed", DataType.Float32)!;}
    public set BaseTurnSpeed(value) {this.SetProp("BaseTurnSpeed", DataType.Float32, value);}
    public get ClimbSensor() {return this.GetProp("ClimbSensor", DataType.Referent) as ControllerSensor | undefined;}
    public set ClimbSensor(value) {this.SetProp("ClimbSensor", DataType.Referent, value);}
    public get FacingDirection() {return this.GetProp("FacingDirection", DataType.Vector3)!;}
    public set FacingDirection(value) {this.SetProp("FacingDirection", DataType.Vector3, value);}
    public get GroundSensor() {return this.GetProp("GroundSensor", DataType.Referent) as ControllerSensor | undefined;}
    public set GroundSensor(value) {this.SetProp("GroundSensor", DataType.Referent, value);}
    public get MovingDirection() {return this.GetProp("MovingDirection", DataType.Vector3)!;}
    public set MovingDirection(value) {this.SetProp("MovingDirection", DataType.Vector3, value);}
    public get RootPart() {return this.GetProp("RootPart", DataType.Referent) as BasePart | undefined;}
    public set RootPart(value) {this.SetProp("RootPart", DataType.Referent, value);}
    public get UpDirection() {return this.GetProp("UpDirection", DataType.Vector3)!;}
    public set UpDirection(value) {this.SetProp("UpDirection", DataType.Vector3, value);}
}

export class ControllerService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ControllerService");
        this.Name = "ControllerService";
    }
}

export class ConversationalAIAcceptanceService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ConversationalAIAcceptanceService");
        this.Name = "ConversationalAIAcceptanceService";
    }
}

export class CookiesService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("CookiesService");
        this.Name = "CookiesService";
    }
}

export class CorePackages extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("CorePackages");
        this.Name = "CorePackages";
    }
}

export class CoreScriptDebuggingManagerHelper extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("CoreScriptDebuggingManagerHelper");
        this.Name = "CoreScriptDebuggingManagerHelper";
    }
}

export class CoreScriptSyncService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("CoreScriptSyncService");
        this.Name = "CoreScriptSyncService";
    }
}

export class CreationDBService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("CreationDBService");
        this.Name = "CreationDBService";
    }
}

export class CreatorStoreService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("CreatorStoreService");
        this.Name = "CreatorStoreService";
    }
}

export class CrossDMScriptChangeListener extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("CrossDMScriptChangeListener");
        this.Name = "CrossDMScriptChangeListener";
    }
}

/**@deprecated Deprecated by Roblox*/
export class CustomEvent extends Instance {
    public constructor()
    {
        super();
        this.addClassName("CustomEvent");
        this.Name = "CustomEvent";
        this.PersistedCurrentValue = 0;
    }
    public get PersistedCurrentValue() {return this.GetProp("PersistedCurrentValue", DataType.Float32)!;}
    public set PersistedCurrentValue(value) {this.SetProp("PersistedCurrentValue", DataType.Float32, value);}
}

/**@deprecated Deprecated by Roblox*/
export class CustomEventReceiver extends Instance {
    public constructor()
    {
        super();
        this.addClassName("CustomEventReceiver");
        this.Name = "CustomEventReceiver";
    }
    public get Source() {return this.GetProp("Source", DataType.Referent) as Instance | undefined;}
    public set Source(value) {this.SetProp("Source", DataType.Referent, value);}
}

export class CustomLog extends Instance {
    public constructor()
    {
        super();
        this.addClassName("CustomLog");
        this.Name = "CustomLog";
    }
}

export abstract class DataModelMesh extends Instance {
    public constructor()
    {
        super();
        this.addClassName("DataModelMesh");
        this.Offset = new Vector3(0, 0, 0);
        this.Scale = new Vector3(1, 1, 1);
        this.VertexColor = new Vector3(1, 1, 1);
    }
    public get Offset() {return this.GetProp("Offset", DataType.Vector3)!;}
    public set Offset(value) {this.SetProp("Offset", DataType.Vector3, value);}
    public get Scale() {return this.GetProp("Scale", DataType.Vector3)!;}
    public set Scale(value) {this.SetProp("Scale", DataType.Vector3, value);}
    public get VertexColor() {return this.GetProp("VertexColor", DataType.Vector3)!;}
    public set VertexColor(value) {this.SetProp("VertexColor", DataType.Vector3, value);}
}

/**@deprecated Deprecated by Roblox*/
export abstract class BevelMesh extends DataModelMesh {
    public constructor()
    {
        super();
        this.addClassName("BevelMesh");
    }
    public get Bevel() {return this.GetProp("Bevel", DataType.Float32);}
    public set Bevel(value) {this.SetProp("Bevel", DataType.Float32, value);}
    public get BevelRoundness() {return this.GetProp("Bevel Roundness", DataType.Float32);}
    public set BevelRoundness(value) {this.SetProp("Bevel Roundness", DataType.Float32, value);}
    public get Bulge() {return this.GetProp("Bulge", DataType.Float32);}
    public set Bulge(value) {this.SetProp("Bulge", DataType.Float32, value);}
}

export class BlockMesh extends BevelMesh {
    public constructor()
    {
        super();
        this.addClassName("BlockMesh");
        this.Name = "BlockMesh";
    }
}

/**@deprecated Deprecated by Roblox*/
export class CylinderMesh extends BevelMesh {
    public constructor()
    {
        super();
        this.addClassName("CylinderMesh");
        this.Name = "CylinderMesh";
    }
}

export class FileMesh extends DataModelMesh {
    public constructor()
    {
        super();
        this.addClassName("FileMesh");
        this.Name = "FileMesh";
        this.MeshId = "";
        this.TextureId = "";
    }
    public get MeshId() {return this.GetProp("MeshId", DataType.String)!;}
    public set MeshId(value) {this.SetProp("MeshId", DataType.String, value);}
    public get TextureId() {return this.GetProp("TextureId", DataType.String)!;}
    public set TextureId(value) {this.SetProp("TextureId", DataType.String, value);}
}

export class SpecialMesh extends FileMesh {
    public constructor()
    {
        super();
        this.addClassName("SpecialMesh");
        this.Name = "SpecialMesh";
        this.MeshType = MeshType.Head;
    }
    public get MeshType() {return this.GetProp("MeshType", DataType.Enum)! as MeshType;}
    public set MeshType(value) {this.SetProp("MeshType", DataType.Enum, value);}
}

export class DataModelPatchService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("DataModelPatchService");
        this.Name = "DataModelPatchService";
    }
}

export class DataStoreGetOptions extends Instance {
    public constructor()
    {
        super();
        this.addClassName("DataStoreGetOptions");
        this.Name = "DataStoreGetOptions";
        this.UseCache = true;
    }
    public get UseCache() {return this.GetProp("UseCache", DataType.Bool)!;}
    public set UseCache(value) {this.SetProp("UseCache", DataType.Bool, value);}
}

export class DataStoreIncrementOptions extends Instance {
    public constructor()
    {
        super();
        this.addClassName("DataStoreIncrementOptions");
        this.Name = "DataStoreIncrementOptions";
    }
}

export class DataStoreOptions extends Instance {
    public constructor()
    {
        super();
        this.addClassName("DataStoreOptions");
        this.Name = "DataStoreOptions";
        this.AllScopes = false;
    }
    public get AllScopes() {return this.GetProp("AllScopes", DataType.Bool)!;}
    public set AllScopes(value) {this.SetProp("AllScopes", DataType.Bool, value);}
}

export class DataStoreService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("DataStoreService");
        this.Name = "DataStoreService";
        this.AutomaticRetry = true;
        this.LegacyNamingScheme = false;
    }
    public get AutomaticRetry() {return this.GetProp("AutomaticRetry", DataType.Bool)!;}
    public set AutomaticRetry(value) {this.SetProp("AutomaticRetry", DataType.Bool, value);}
    /**@deprecated Deprecated by Roblox*/
    public get LegacyNamingScheme() {return this.GetProp("LegacyNamingScheme", DataType.Bool)!;}
    /**@deprecated Deprecated by Roblox*/
    public set LegacyNamingScheme(value) {this.SetProp("LegacyNamingScheme", DataType.Bool, value);}
}

export class DataStoreSetOptions extends Instance {
    public constructor()
    {
        super();
        this.addClassName("DataStoreSetOptions");
        this.Name = "DataStoreSetOptions";
    }
}

export class Debris extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("Debris");
        this.Name = "Debris";
        this.MaxItems = 1000;
    }
    /**@deprecated Deprecated by Roblox*/
    public get MaxItems() {return this.GetProp("MaxItems", DataType.Int32)!;}
    /**@deprecated Deprecated by Roblox*/
    public set MaxItems(value) {this.SetProp("MaxItems", DataType.Int32, value);}
}

export class DebuggablePluginWatcher extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("DebuggablePluginWatcher");
        this.Name = "DebuggablePluginWatcher";
    }
}

export class DebuggerConnectionManager extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("DebuggerConnectionManager");
        this.Name = "DebuggerConnectionManager";
    }
    public get Timeout() {return this.GetProp("Timeout", DataType.Float64);}
    public set Timeout(value) {this.SetProp("Timeout", DataType.Float64, value);}
}

export class DebuggerManager extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("DebuggerManager");
        this.Name = "DebuggerManager";
    }
}

export class DebuggerUIService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("DebuggerUIService");
        this.Name = "DebuggerUIService";
    }
}

export class DebuggerWatch extends Instance {
    public constructor()
    {
        super();
        this.addClassName("DebuggerWatch");
        this.Name = "DebuggerWatch";
        this.Expression = "";
    }
    public get Expression() {return this.GetProp("Expression", DataType.String)!;}
    public set Expression(value) {this.SetProp("Expression", DataType.String, value);}
}

export class DeviceIdService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("DeviceIdService");
        this.Name = "DeviceIdService";
    }
}

export class Dialog extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Dialog");
        this.Name = "Dialog";
        this.BehaviorType = DialogBehaviorType.SinglePlayer;
        this.ConversationDistance = 25;
        this.GoodbyeChoiceActive = true;
        this.GoodbyeDialog = "";
        this.InitialPrompt = "";
        this.Purpose = DialogPurpose.Help;
        this.Tone = DialogTone.Neutral;
        this.TriggerDistance = 0;
        this.TriggerOffset = new Vector3(0, 0, 0);
    }
    public get BehaviorType() {return this.GetProp("BehaviorType", DataType.Enum)! as DialogBehaviorType;}
    public set BehaviorType(value) {this.SetProp("BehaviorType", DataType.Enum, value);}
    public get ConversationDistance() {return this.GetProp("ConversationDistance", DataType.Float32)!;}
    public set ConversationDistance(value) {this.SetProp("ConversationDistance", DataType.Float32, value);}
    public get GoodbyeChoiceActive() {return this.GetProp("GoodbyeChoiceActive", DataType.Bool)!;}
    public set GoodbyeChoiceActive(value) {this.SetProp("GoodbyeChoiceActive", DataType.Bool, value);}
    public get GoodbyeDialog() {return this.GetProp("GoodbyeDialog", DataType.String)!;}
    public set GoodbyeDialog(value) {this.SetProp("GoodbyeDialog", DataType.String, value);}
    public get InitialPrompt() {return this.GetProp("InitialPrompt", DataType.String)!;}
    public set InitialPrompt(value) {this.SetProp("InitialPrompt", DataType.String, value);}
    public get Purpose() {return this.GetProp("Purpose", DataType.Enum)! as DialogPurpose;}
    public set Purpose(value) {this.SetProp("Purpose", DataType.Enum, value);}
    public get Tone() {return this.GetProp("Tone", DataType.Enum)! as DialogTone;}
    public set Tone(value) {this.SetProp("Tone", DataType.Enum, value);}
    public get TriggerDistance() {return this.GetProp("TriggerDistance", DataType.Float32)!;}
    public set TriggerDistance(value) {this.SetProp("TriggerDistance", DataType.Float32, value);}
    public get TriggerOffset() {return this.GetProp("TriggerOffset", DataType.Vector3)!;}
    public set TriggerOffset(value) {this.SetProp("TriggerOffset", DataType.Vector3, value);}
}

export class DialogChoice extends Instance {
    public constructor()
    {
        super();
        this.addClassName("DialogChoice");
        this.Name = "DialogChoice";
        this.GoodbyeChoiceActive = true;
        this.GoodbyeDialog = "";
        this.ResponseDialog = "";
        this.UserDialog = "";
    }
    public get GoodbyeChoiceActive() {return this.GetProp("GoodbyeChoiceActive", DataType.Bool)!;}
    public set GoodbyeChoiceActive(value) {this.SetProp("GoodbyeChoiceActive", DataType.Bool, value);}
    public get GoodbyeDialog() {return this.GetProp("GoodbyeDialog", DataType.String)!;}
    public set GoodbyeDialog(value) {this.SetProp("GoodbyeDialog", DataType.String, value);}
    public get ResponseDialog() {return this.GetProp("ResponseDialog", DataType.String)!;}
    public set ResponseDialog(value) {this.SetProp("ResponseDialog", DataType.String, value);}
    public get UserDialog() {return this.GetProp("UserDialog", DataType.String)!;}
    public set UserDialog(value) {this.SetProp("UserDialog", DataType.String, value);}
}

export class DraftsService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("DraftsService");
        this.Name = "DraftsService";
    }
}

export class Dragger extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Dragger");
        this.Name = "Dragger";
    }
}

export class DraggerService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("DraggerService");
        this.Name = "DraggerService";
    }
}

export class EditableService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("EditableService");
        this.Name = "EditableService";
    }
}

export class EulerRotationCurve extends Instance {
    public constructor()
    {
        super();
        this.addClassName("EulerRotationCurve");
        this.Name = "EulerRotationCurve";
        this.RotationOrder = RotationOrder.XYZ;
    }
    public get RotationOrder() {return this.GetProp("RotationOrder", DataType.Enum)! as RotationOrder;}
    public set RotationOrder(value) {this.SetProp("RotationOrder", DataType.Enum, value);}
}

export class EventIngestService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("EventIngestService");
        this.Name = "EventIngestService";
    }
}

export class ExampleService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ExampleService");
        this.Name = "ExampleService";
    }
}

export class ExperienceAuthService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ExperienceAuthService");
        this.Name = "ExperienceAuthService";
    }
}

export class ExperienceInviteOptions extends Instance {
    public constructor()
    {
        super();
        this.addClassName("ExperienceInviteOptions");
        this.Name = "ExperienceInviteOptions";
        this.InviteMessageId = "";
        this.InviteUser = BigInt(0);
        this.LaunchData = "";
        this.PromptMessage = "";
    }
    public get InviteMessageId() {return this.GetProp("InviteMessageId", DataType.String)!;}
    public set InviteMessageId(value) {this.SetProp("InviteMessageId", DataType.String, value);}
    public get InviteUser() {return this.GetProp("InviteUser", DataType.Int64)!;}
    public set InviteUser(value) {this.SetProp("InviteUser", DataType.Int64, value);}
    public get LaunchData() {return this.GetProp("LaunchData", DataType.String)!;}
    public set LaunchData(value) {this.SetProp("LaunchData", DataType.String, value);}
    public get PromptMessage() {return this.GetProp("PromptMessage", DataType.String)!;}
    public set PromptMessage(value) {this.SetProp("PromptMessage", DataType.String, value);}
}

export class ExperienceNotificationService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ExperienceNotificationService");
        this.Name = "ExperienceNotificationService";
    }
}

export class ExperienceService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ExperienceService");
        this.Name = "ExperienceService";
    }
}

export class ExperienceStateCaptureService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ExperienceStateCaptureService");
        this.Name = "ExperienceStateCaptureService";
    }
}

export class ExplorerFilter extends Instance {
    public constructor()
    {
        super();
        this.addClassName("ExplorerFilter");
        this.Name = "ExplorerFilter";
    }
}

export class ExplorerServiceVisibilityService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ExplorerServiceVisibilityService");
        this.Name = "ExplorerServiceVisibilityService";
    }
}

export class Explosion extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Explosion");
        this.Name = "Explosion";
        this.BlastPressure = 500000;
        this.BlastRadius = 4;
        this.DestroyJointRadiusPercent = 1;
        this.ExplosionType = ExplosionType.Craters;
        this.Position = new Vector3(0, 0, 0);
        this.TimeScale = 1;
        this.Visible = true;
    }
    public get BlastPressure() {return this.GetProp("BlastPressure", DataType.Float32)!;}
    public set BlastPressure(value) {this.SetProp("BlastPressure", DataType.Float32, value);}
    public get BlastRadius() {return this.GetProp("BlastRadius", DataType.Float32)!;}
    public set BlastRadius(value) {this.SetProp("BlastRadius", DataType.Float32, value);}
    public get DestroyJointRadiusPercent() {return this.GetProp("DestroyJointRadiusPercent", DataType.Float32)!;}
    public set DestroyJointRadiusPercent(value) {this.SetProp("DestroyJointRadiusPercent", DataType.Float32, value);}
    public get ExplosionType() {return this.GetProp("ExplosionType", DataType.Enum)! as ExplosionType;}
    public set ExplosionType(value) {this.SetProp("ExplosionType", DataType.Enum, value);}
    public get Position() {return this.GetProp("Position", DataType.Vector3)!;}
    public set Position(value) {this.SetProp("Position", DataType.Vector3, value);}
    public get TimeScale() {return this.GetProp("TimeScale", DataType.Float32)!;}
    public set TimeScale(value) {this.SetProp("TimeScale", DataType.Float32, value);}
    public get Visible() {return this.GetProp("Visible", DataType.Bool)!;}
    public set Visible(value) {this.SetProp("Visible", DataType.Bool, value);}
}

export class FaceAnimatorService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("FaceAnimatorService");
        this.Name = "FaceAnimatorService";
    }
}

export class FaceControls extends Instance {
    public constructor()
    {
        super();
        this.addClassName("FaceControls");
        this.Name = "FaceControls";
    }
}

export abstract class FaceInstance extends Instance {
    public constructor()
    {
        super();
        this.addClassName("FaceInstance");
        this.Face = NormalId.Front;
    }
    public get Face() {return this.GetProp("Face", DataType.Enum)! as NormalId;}
    public set Face(value) {this.SetProp("Face", DataType.Enum, value);}
}

export class Decal extends FaceInstance {
    public constructor()
    {
        super();
        this.addClassName("Decal");
        this.Name = "Decal";
        this.Color3 = Color3.FromRGB(255, 255, 255);
        this.Shiny = 20;
        this.Specular = 0;
        this.Texture = "";
        this.Transparency = 0;
        this.ZIndex = 1;
    }
    public get Color3() {return this.GetProp("Color3", DataType.Color3)!;}
    public set Color3(value) {this.SetProp("Color3", DataType.Color3, value);}
    /**@deprecated Deprecated by Roblox*/
    public get Shiny() {return this.GetProp("Shiny", DataType.Float32)!;}
    /**@deprecated Deprecated by Roblox*/
    public set Shiny(value) {this.SetProp("Shiny", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get Specular() {return this.GetProp("Specular", DataType.Float32)!;}
    /**@deprecated Deprecated by Roblox*/
    public set Specular(value) {this.SetProp("Specular", DataType.Float32, value);}
    public get Texture() {return this.GetProp("Texture", DataType.String)!;}
    public set Texture(value) {this.SetProp("Texture", DataType.String, value);}
    public get TextureContent() {return this.GetProp("TextureContent", DataType.String);}
    public set TextureContent(value) {this.SetProp("TextureContent", DataType.String, value);}
    public get Transparency() {return this.GetProp("Transparency", DataType.Float32)!;}
    public set Transparency(value) {this.SetProp("Transparency", DataType.Float32, value);}
    public get ZIndex() {return this.GetProp("ZIndex", DataType.Int32)!;}
    public set ZIndex(value) {this.SetProp("ZIndex", DataType.Int32, value);}
}

export class Texture extends Decal {
    public constructor()
    {
        super();
        this.addClassName("Texture");
        this.Name = "Texture";
        this.OffsetStudsU = 0;
        this.OffsetStudsV = 0;
        this.StudsPerTileU = 2;
        this.StudsPerTileV = 2;
    }
    public get OffsetStudsU() {return this.GetProp("OffsetStudsU", DataType.Float32)!;}
    public set OffsetStudsU(value) {this.SetProp("OffsetStudsU", DataType.Float32, value);}
    public get OffsetStudsV() {return this.GetProp("OffsetStudsV", DataType.Float32)!;}
    public set OffsetStudsV(value) {this.SetProp("OffsetStudsV", DataType.Float32, value);}
    public get StudsPerTileU() {return this.GetProp("StudsPerTileU", DataType.Float32)!;}
    public set StudsPerTileU(value) {this.SetProp("StudsPerTileU", DataType.Float32, value);}
    public get StudsPerTileV() {return this.GetProp("StudsPerTileV", DataType.Float32)!;}
    public set StudsPerTileV(value) {this.SetProp("StudsPerTileV", DataType.Float32, value);}
}

export class FacialAgeEstimationService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("FacialAgeEstimationService");
        this.Name = "FacialAgeEstimationService";
    }
}

export class FacialAnimationRecordingService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("FacialAnimationRecordingService");
        this.Name = "FacialAnimationRecordingService";
    }
}

export class FacialAnimationStreamingServiceV2 extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("FacialAnimationStreamingServiceV2");
        this.Name = "FacialAnimationStreamingServiceV2";
        this.ServiceState = 0;
    }
    public get ServiceState() {return this.GetProp("ServiceState", DataType.Int32)!;}
    public set ServiceState(value) {this.SetProp("ServiceState", DataType.Int32, value);}
}

export abstract class Feature extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Feature");
        this.FaceId = NormalId.Right;
        this.InOut = InOut.Center;
        this.LeftRight = LeftRight.Center;
        this.TopBottom = TopBottom.Center;
    }
    public get FaceId() {return this.GetProp("FaceId", DataType.Enum)! as NormalId;}
    public set FaceId(value) {this.SetProp("FaceId", DataType.Enum, value);}
    public get InOut() {return this.GetProp("InOut", DataType.Enum)! as InOut;}
    public set InOut(value) {this.SetProp("InOut", DataType.Enum, value);}
    public get LeftRight() {return this.GetProp("LeftRight", DataType.Enum)! as LeftRight;}
    public set LeftRight(value) {this.SetProp("LeftRight", DataType.Enum, value);}
    public get TopBottom() {return this.GetProp("TopBottom", DataType.Enum)! as TopBottom;}
    public set TopBottom(value) {this.SetProp("TopBottom", DataType.Enum, value);}
}

/**@deprecated Deprecated by Roblox*/
export class Hole extends Feature {
    public constructor()
    {
        super();
        this.addClassName("Hole");
        this.Name = "Hole";
    }
}

/**@deprecated Deprecated by Roblox*/
export class MotorFeature extends Feature {
    public constructor()
    {
        super();
        this.addClassName("MotorFeature");
        this.Name = "MotorFeature";
    }
}

export class FeatureRestrictionManager extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("FeatureRestrictionManager");
        this.Name = "FeatureRestrictionManager";
    }
}

export class FeedService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("FeedService");
        this.Name = "FeedService";
    }
}

export class Fire extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Fire");
        this.Name = "Fire";
        this.Color = Color3.FromRGB(236, 139, 70);
        this.Enabled = true;
        this.SecondaryColor = Color3.FromRGB(139, 80, 55);
        this.TimeScale = 1;
        this.Heatxml = 9;
        this.Size = 5;
        this.Sizexml = 5;
    }
    public get Color() {return this.GetProp("Color", DataType.Color3)!;}
    public set Color(value) {this.SetProp("Color", DataType.Color3, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get SecondaryColor() {return this.GetProp("SecondaryColor", DataType.Color3)!;}
    public set SecondaryColor(value) {this.SetProp("SecondaryColor", DataType.Color3, value);}
    public get TimeScale() {return this.GetProp("TimeScale", DataType.Float32)!;}
    public set TimeScale(value) {this.SetProp("TimeScale", DataType.Float32, value);}
    public get Heatxml() {return this.GetProp("heat_xml", DataType.Float32)!;}
    public set Heatxml(value) {this.SetProp("heat_xml", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get Size() {return this.GetProp("size", DataType.Float32)!;}
    /**@deprecated Deprecated by Roblox*/
    public set Size(value) {this.SetProp("size", DataType.Float32, value);}
    public get Sizexml() {return this.GetProp("size_xml", DataType.Float32)!;}
    public set Sizexml(value) {this.SetProp("size_xml", DataType.Float32, value);}
}

export class FlagStandService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("FlagStandService");
        this.Name = "FlagStandService";
    }
}

export class FloatCurve extends Instance {
    public constructor()
    {
        super();
        this.addClassName("FloatCurve");
        this.Name = "FloatCurve";
        this.ValuesAndTimes = "\u0001";
    }
    public get ValuesAndTimes() {return this.GetProp("ValuesAndTimes", DataType.String)!;}
    public set ValuesAndTimes(value) {this.SetProp("ValuesAndTimes", DataType.String, value);}
}

export class FlyweightService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("FlyweightService");
        this.Name = "FlyweightService";
    }
}

export class CSGDictionaryService extends FlyweightService {
    public constructor()
    {
        super();
        this.addClassName("CSGDictionaryService");
        this.Name = "CSGDictionaryService";
    }
}

export class NonReplicatedCSGDictionaryService extends FlyweightService {
    public constructor()
    {
        super();
        this.addClassName("NonReplicatedCSGDictionaryService");
        this.Name = "NonReplicatedCSGDictionaryService";
    }
}

export class Folder extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Folder");
        this.Name = "Folder";
    }
}

export class ForceField extends Instance {
    public constructor()
    {
        super();
        this.addClassName("ForceField");
        this.Name = "ForceField";
        this.Visible = true;
    }
    public get Visible() {return this.GetProp("Visible", DataType.Bool)!;}
    public set Visible(value) {this.SetProp("Visible", DataType.Bool, value);}
}

export class FriendService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("FriendService");
        this.Name = "FriendService";
    }
}

/**@deprecated Deprecated by Roblox*/
export class FunctionalTest extends Instance {
    public constructor()
    {
        super();
        this.addClassName("FunctionalTest");
        this.Name = "FunctionalTest";
        this.Description = "?";
        this.HasMigratedSettingsToTestService = false;
    }
    public get Description() {return this.GetProp("Description", DataType.String)!;}
    public set Description(value) {this.SetProp("Description", DataType.String, value);}
    public get HasMigratedSettingsToTestService() {return this.GetProp("HasMigratedSettingsToTestService", DataType.Bool)!;}
    public set HasMigratedSettingsToTestService(value) {this.SetProp("HasMigratedSettingsToTestService", DataType.Bool, value);}
}

export class GamePassService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("GamePassService");
        this.Name = "GamePassService";
    }
}

export class GamepadService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("GamepadService");
        this.Name = "GamepadService";
        this.GamepadCursorEnabled = false;
    }
    public get GamepadCursorEnabled() {return this.GetProp("GamepadCursorEnabled", DataType.Bool)!;}
    public set GamepadCursorEnabled(value) {this.SetProp("GamepadCursorEnabled", DataType.Bool, value);}
}

export class GenerationService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("GenerationService");
        this.Name = "GenerationService";
    }
}

export class GenericChallengeService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("GenericChallengeService");
        this.Name = "GenericChallengeService";
    }
}

export class Geometry extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("Geometry");
        this.Name = "Geometry";
    }
}

export class GeometryService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("GeometryService");
        this.Name = "GeometryService";
    }
}

export class GetTextBoundsParams extends Instance {
    public constructor()
    {
        super();
        this.addClassName("GetTextBoundsParams");
        this.Name = "GetTextBoundsParams";
        this.RichText = false;
        this.Size = 20;
        this.Text = "";
        this.Width = 0;
        this.Font = new RBXMFont("rbxasset://fonts/families/SourceSansPro.json", FontWeight.Regular, FontStyle.Normal);
    }
    public get Font() {return this.GetProp("Font", DataType.Font)!;}
    public set Font(value) {this.SetProp("Font", DataType.Font, value);}
    public get RichText() {return this.GetProp("RichText", DataType.Bool)!;}
    public set RichText(value) {this.SetProp("RichText", DataType.Bool, value);}
    public get Size() {return this.GetProp("Size", DataType.Float32)!;}
    public set Size(value) {this.SetProp("Size", DataType.Float32, value);}
    public get Text() {return this.GetProp("Text", DataType.String)!;}
    public set Text(value) {this.SetProp("Text", DataType.String, value);}
    public get Width() {return this.GetProp("Width", DataType.Float32)!;}
    public set Width(value) {this.SetProp("Width", DataType.Float32, value);}
}

export class GoogleAnalyticsConfiguration extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("GoogleAnalyticsConfiguration");
        this.Name = "GoogleAnalyticsConfiguration";
    }
    public get GaID() {return this.GetProp("gaID", DataType.String);}
    public set GaID(value) {this.SetProp("gaID", DataType.String, value);}
}

export class GroupService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("GroupService");
        this.Name = "GroupService";
    }
}

export abstract class GuiBase extends Instance {
    public constructor()
    {
        super();
        this.addClassName("GuiBase");
    }
}

export abstract class GuiBase2d extends GuiBase {
    public constructor()
    {
        super();
        this.addClassName("GuiBase2d");
        this.AutoLocalize = true;
        this.Localize = true;
        this.SelectionBehaviorDown = SelectionBehavior.Escape;
        this.SelectionBehaviorLeft = SelectionBehavior.Escape;
        this.SelectionBehaviorRight = SelectionBehavior.Escape;
        this.SelectionBehaviorUp = SelectionBehavior.Escape;
    }
    public get AutoLocalize() {return this.GetProp("AutoLocalize", DataType.Bool)!;}
    public set AutoLocalize(value) {this.SetProp("AutoLocalize", DataType.Bool, value);}
    /**@deprecated Deprecated by Roblox*/
    public get Localize() {return this.GetProp("Localize", DataType.Bool)!;}
    /**@deprecated Deprecated by Roblox*/
    public set Localize(value) {this.SetProp("Localize", DataType.Bool, value);}
    public get RootLocalizationTable() {return this.GetProp("RootLocalizationTable", DataType.Referent) as LocalizationTable | undefined;}
    public set RootLocalizationTable(value) {this.SetProp("RootLocalizationTable", DataType.Referent, value);}
    public get SelectionBehaviorDown() {return this.GetProp("SelectionBehaviorDown", DataType.Enum)! as SelectionBehavior;}
    public set SelectionBehaviorDown(value) {this.SetProp("SelectionBehaviorDown", DataType.Enum, value);}
    public get SelectionBehaviorLeft() {return this.GetProp("SelectionBehaviorLeft", DataType.Enum)! as SelectionBehavior;}
    public set SelectionBehaviorLeft(value) {this.SetProp("SelectionBehaviorLeft", DataType.Enum, value);}
    public get SelectionBehaviorRight() {return this.GetProp("SelectionBehaviorRight", DataType.Enum)! as SelectionBehavior;}
    public set SelectionBehaviorRight(value) {this.SetProp("SelectionBehaviorRight", DataType.Enum, value);}
    public get SelectionBehaviorUp() {return this.GetProp("SelectionBehaviorUp", DataType.Enum)! as SelectionBehavior;}
    public set SelectionBehaviorUp(value) {this.SetProp("SelectionBehaviorUp", DataType.Enum, value);}
    public get SelectionGroup() {return this.GetProp("SelectionGroup", DataType.Bool)!;}
    public set SelectionGroup(value) {this.SetProp("SelectionGroup", DataType.Bool, value);}
}

export abstract class GuiObject extends GuiBase2d {
    public constructor()
    {
        super();
        this.addClassName("GuiObject");
        this.AnchorPoint = new Vector2(0, 0);
        this.AutomaticSize = AutomaticSize.None;
        this.BackgroundColor3 = Color3.FromRGB(163, 162, 165);
        this.BackgroundTransparency = 0;
        this.BorderColor3 = Color3.FromRGB(27, 42, 53);
        this.BorderMode = BorderMode.Outline;
        this.BorderSizePixel = 1;
        this.Draggable = false;
        this.Interactable = true;
        this.LayoutOrder = 0;
        this.Position = new UDim2(new UDim(0, 0), new UDim(0, 0));
        this.Rotation = 0;
        this.SelectionOrder = 0;
        this.Size = new UDim2(new UDim(0, 0), new UDim(0, 0));
        this.SizeConstraint = SizeConstraint.RelativeXY;
        this.Visible = true;
        this.ZIndex = 1;
    }
    public get Active() {return this.GetProp("Active", DataType.Bool)!;}
    public set Active(value) {this.SetProp("Active", DataType.Bool, value);}
    public get AnchorPoint() {return this.GetProp("AnchorPoint", DataType.Vector2)!;}
    public set AnchorPoint(value) {this.SetProp("AnchorPoint", DataType.Vector2, value);}
    public get AutomaticSize() {return this.GetProp("AutomaticSize", DataType.Enum)! as AutomaticSize;}
    public set AutomaticSize(value) {this.SetProp("AutomaticSize", DataType.Enum, value);}
    /**@deprecated Deprecated by Roblox*/
    public get BackgroundColor() {return this.GetProp("BackgroundColor", DataType.BrickColor);}
    /**@deprecated Deprecated by Roblox*/
    public set BackgroundColor(value) {this.SetProp("BackgroundColor", DataType.BrickColor, value);}
    public get BackgroundColor3() {return this.GetProp("BackgroundColor3", DataType.Color3)!;}
    public set BackgroundColor3(value) {this.SetProp("BackgroundColor3", DataType.Color3, value);}
    public get BackgroundTransparency() {return this.GetProp("BackgroundTransparency", DataType.Float32)!;}
    public set BackgroundTransparency(value) {this.SetProp("BackgroundTransparency", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get BorderColor() {return this.GetProp("BorderColor", DataType.BrickColor);}
    /**@deprecated Deprecated by Roblox*/
    public set BorderColor(value) {this.SetProp("BorderColor", DataType.BrickColor, value);}
    public get BorderColor3() {return this.GetProp("BorderColor3", DataType.Color3)!;}
    public set BorderColor3(value) {this.SetProp("BorderColor3", DataType.Color3, value);}
    public get BorderMode() {return this.GetProp("BorderMode", DataType.Enum)! as BorderMode;}
    public set BorderMode(value) {this.SetProp("BorderMode", DataType.Enum, value);}
    public get BorderSizePixel() {return this.GetProp("BorderSizePixel", DataType.Int32)!;}
    public set BorderSizePixel(value) {this.SetProp("BorderSizePixel", DataType.Int32, value);}
    public get ClipsDescendants() {return this.GetProp("ClipsDescendants", DataType.Bool)!;}
    public set ClipsDescendants(value) {this.SetProp("ClipsDescendants", DataType.Bool, value);}
    /**@deprecated Deprecated by Roblox*/
    public get Draggable() {return this.GetProp("Draggable", DataType.Bool)!;}
    /**@deprecated Deprecated by Roblox*/
    public set Draggable(value) {this.SetProp("Draggable", DataType.Bool, value);}
    public get Interactable() {return this.GetProp("Interactable", DataType.Bool)!;}
    public set Interactable(value) {this.SetProp("Interactable", DataType.Bool, value);}
    public get LayoutOrder() {return this.GetProp("LayoutOrder", DataType.Int32)!;}
    public set LayoutOrder(value) {this.SetProp("LayoutOrder", DataType.Int32, value);}
    public get NextSelectionDown() {return this.GetProp("NextSelectionDown", DataType.Referent) as GuiObject | undefined;}
    public set NextSelectionDown(value) {this.SetProp("NextSelectionDown", DataType.Referent, value);}
    public get NextSelectionLeft() {return this.GetProp("NextSelectionLeft", DataType.Referent) as GuiObject | undefined;}
    public set NextSelectionLeft(value) {this.SetProp("NextSelectionLeft", DataType.Referent, value);}
    public get NextSelectionRight() {return this.GetProp("NextSelectionRight", DataType.Referent) as GuiObject | undefined;}
    public set NextSelectionRight(value) {this.SetProp("NextSelectionRight", DataType.Referent, value);}
    public get NextSelectionUp() {return this.GetProp("NextSelectionUp", DataType.Referent) as GuiObject | undefined;}
    public set NextSelectionUp(value) {this.SetProp("NextSelectionUp", DataType.Referent, value);}
    public get Position() {return this.GetProp("Position", DataType.UDim2)!;}
    public set Position(value) {this.SetProp("Position", DataType.UDim2, value);}
    public get Rotation() {return this.GetProp("Rotation", DataType.Float32)!;}
    public set Rotation(value) {this.SetProp("Rotation", DataType.Float32, value);}
    public get Selectable() {return this.GetProp("Selectable", DataType.Bool)!;}
    public set Selectable(value) {this.SetProp("Selectable", DataType.Bool, value);}
    public get SelectionImageObject() {return this.GetProp("SelectionImageObject", DataType.Referent) as GuiObject | undefined;}
    public set SelectionImageObject(value) {this.SetProp("SelectionImageObject", DataType.Referent, value);}
    public get SelectionOrder() {return this.GetProp("SelectionOrder", DataType.Int32)!;}
    public set SelectionOrder(value) {this.SetProp("SelectionOrder", DataType.Int32, value);}
    public get Size() {return this.GetProp("Size", DataType.UDim2)!;}
    public set Size(value) {this.SetProp("Size", DataType.UDim2, value);}
    public get SizeConstraint() {return this.GetProp("SizeConstraint", DataType.Enum)! as SizeConstraint;}
    public set SizeConstraint(value) {this.SetProp("SizeConstraint", DataType.Enum, value);}
    public get Visible() {return this.GetProp("Visible", DataType.Bool)!;}
    public set Visible(value) {this.SetProp("Visible", DataType.Bool, value);}
    public get ZIndex() {return this.GetProp("ZIndex", DataType.Int32)!;}
    public set ZIndex(value) {this.SetProp("ZIndex", DataType.Int32, value);}
}

export class CanvasGroup extends GuiObject {
    public constructor()
    {
        super();
        this.addClassName("CanvasGroup");
        this.Name = "CanvasGroup";
        this.GroupColor3 = Color3.FromRGB(255, 255, 255);
        this.GroupTransparency = 0;
        this.Active = false;
        this.ClipsDescendants = true;
        this.Selectable = false;
        this.SelectionGroup = false;
    }
    public get GroupColor3() {return this.GetProp("GroupColor3", DataType.Color3)!;}
    public set GroupColor3(value) {this.SetProp("GroupColor3", DataType.Color3, value);}
    public get GroupTransparency() {return this.GetProp("GroupTransparency", DataType.Float32)!;}
    public set GroupTransparency(value) {this.SetProp("GroupTransparency", DataType.Float32, value);}
}

export class Frame extends GuiObject {
    public constructor()
    {
        super();
        this.addClassName("Frame");
        this.Name = "Frame";
        this.Style = FrameStyle.Custom;
        this.Active = false;
        this.ClipsDescendants = false;
        this.Selectable = false;
        this.SelectionGroup = false;
    }
    public get Style() {return this.GetProp("Style", DataType.Enum)! as FrameStyle;}
    public set Style(value) {this.SetProp("Style", DataType.Enum, value);}
}

export abstract class GuiButton extends GuiObject {
    public constructor()
    {
        super();
        this.addClassName("GuiButton");
        this.AutoButtonColor = true;
        this.Modal = false;
        this.Selected = false;
        this.Style = ButtonStyle.Custom;
        this.Active = true;
        this.ClipsDescendants = false;
        this.Selectable = true;
        this.SelectionGroup = false;
    }
    public get AutoButtonColor() {return this.GetProp("AutoButtonColor", DataType.Bool)!;}
    public set AutoButtonColor(value) {this.SetProp("AutoButtonColor", DataType.Bool, value);}
    public get HoverHapticEffect() {return this.GetProp("HoverHapticEffect", DataType.Referent) as HapticEffect | undefined;}
    public set HoverHapticEffect(value) {this.SetProp("HoverHapticEffect", DataType.Referent, value);}
    public get Modal() {return this.GetProp("Modal", DataType.Bool)!;}
    public set Modal(value) {this.SetProp("Modal", DataType.Bool, value);}
    public get PressHapticEffect() {return this.GetProp("PressHapticEffect", DataType.Referent) as HapticEffect | undefined;}
    public set PressHapticEffect(value) {this.SetProp("PressHapticEffect", DataType.Referent, value);}
    public get Selected() {return this.GetProp("Selected", DataType.Bool)!;}
    public set Selected(value) {this.SetProp("Selected", DataType.Bool, value);}
    public get Style() {return this.GetProp("Style", DataType.Enum)! as ButtonStyle;}
    public set Style(value) {this.SetProp("Style", DataType.Enum, value);}
}

export class ImageButton extends GuiButton {
    public constructor()
    {
        super();
        this.addClassName("ImageButton");
        this.Name = "ImageButton";
        this.HoverImage = "";
        this.Image = "";
        this.ImageColor3 = Color3.FromRGB(255, 255, 255);
        this.ImageRectOffset = new Vector2(0, 0);
        this.ImageRectSize = new Vector2(0, 0);
        this.ImageTransparency = 0;
        this.PressedImage = "";
        this.ResampleMode = ResamplerMode.Default;
        this.ScaleType = ScaleType.Stretch;
        this.SliceCenter = new Rect(new Vector2(0, 0), new Vector2(0, 0));
        this.SliceScale = 1;
        this.TileSize = new UDim2(new UDim(1, 0), new UDim(1, 0));
    }
    public get HoverImage() {return this.GetProp("HoverImage", DataType.String)!;}
    public set HoverImage(value) {this.SetProp("HoverImage", DataType.String, value);}
    public get HoverImageContent() {return this.GetProp("HoverImageContent", DataType.String);}
    public set HoverImageContent(value) {this.SetProp("HoverImageContent", DataType.String, value);}
    public get Image() {return this.GetProp("Image", DataType.String)!;}
    public set Image(value) {this.SetProp("Image", DataType.String, value);}
    public get ImageColor3() {return this.GetProp("ImageColor3", DataType.Color3)!;}
    public set ImageColor3(value) {this.SetProp("ImageColor3", DataType.Color3, value);}
    public get ImageContent() {return this.GetProp("ImageContent", DataType.String);}
    public set ImageContent(value) {this.SetProp("ImageContent", DataType.String, value);}
    public get ImageRectOffset() {return this.GetProp("ImageRectOffset", DataType.Vector2)!;}
    public set ImageRectOffset(value) {this.SetProp("ImageRectOffset", DataType.Vector2, value);}
    public get ImageRectSize() {return this.GetProp("ImageRectSize", DataType.Vector2)!;}
    public set ImageRectSize(value) {this.SetProp("ImageRectSize", DataType.Vector2, value);}
    public get ImageTransparency() {return this.GetProp("ImageTransparency", DataType.Float32)!;}
    public set ImageTransparency(value) {this.SetProp("ImageTransparency", DataType.Float32, value);}
    public get PressedImage() {return this.GetProp("PressedImage", DataType.String)!;}
    public set PressedImage(value) {this.SetProp("PressedImage", DataType.String, value);}
    public get PressedImageContent() {return this.GetProp("PressedImageContent", DataType.String);}
    public set PressedImageContent(value) {this.SetProp("PressedImageContent", DataType.String, value);}
    public get ResampleMode() {return this.GetProp("ResampleMode", DataType.Enum)! as ResamplerMode;}
    public set ResampleMode(value) {this.SetProp("ResampleMode", DataType.Enum, value);}
    public get ScaleType() {return this.GetProp("ScaleType", DataType.Enum)! as ScaleType;}
    public set ScaleType(value) {this.SetProp("ScaleType", DataType.Enum, value);}
    public get SliceCenter() {return this.GetProp("SliceCenter", DataType.Rect)!;}
    public set SliceCenter(value) {this.SetProp("SliceCenter", DataType.Rect, value);}
    public get SliceScale() {return this.GetProp("SliceScale", DataType.Float32)!;}
    public set SliceScale(value) {this.SetProp("SliceScale", DataType.Float32, value);}
    public get TileSize() {return this.GetProp("TileSize", DataType.UDim2)!;}
    public set TileSize(value) {this.SetProp("TileSize", DataType.UDim2, value);}
}

export class TextButton extends GuiButton {
    public constructor()
    {
        super();
        this.addClassName("TextButton");
        this.Name = "TextButton";
        this.FontSize = FontSize.Size8;
        this.LineHeight = 1;
        this.LocalizationMatchIdentifier = "";
        this.LocalizationMatchedSourceText = "";
        this.MaxVisibleGraphemes = -1;
        this.OpenTypeFeatures = "";
        this.RichText = false;
        this.Text = "Button";
        this.TextColor3 = Color3.FromRGB(27, 42, 53);
        this.TextDirection = TextDirection.Auto;
        this.TextScaled = false;
        this.TextSize = 8;
        this.TextStrokeColor3 = Color3.FromRGB(0, 0, 0);
        this.TextStrokeTransparency = 1;
        this.TextTransparency = 0;
        this.TextTruncate = TextTruncate.None;
        this.TextWrap = false;
        this.TextWrapped = false;
        this.TextXAlignment = TextXAlignment.Center;
        this.TextYAlignment = TextYAlignment.Center;
        this.FontFace = new RBXMFont("rbxasset://fonts/families/LegacyArial.json", FontWeight.Regular, FontStyle.Normal);
    }
    public get FontFace() {return this.GetProp("FontFace", DataType.Font)!;}
    public set FontFace(value) {this.SetProp("FontFace", DataType.Font, value);}
    /**@deprecated Deprecated by Roblox*/
    public get FontSize() {return this.GetProp("FontSize", DataType.Enum)! as FontSize;}
    /**@deprecated Deprecated by Roblox*/
    public set FontSize(value) {this.SetProp("FontSize", DataType.Enum, value);}
    public get LineHeight() {return this.GetProp("LineHeight", DataType.Float32)!;}
    public set LineHeight(value) {this.SetProp("LineHeight", DataType.Float32, value);}
    public get LocalizationMatchIdentifier() {return this.GetProp("LocalizationMatchIdentifier", DataType.String)!;}
    public set LocalizationMatchIdentifier(value) {this.SetProp("LocalizationMatchIdentifier", DataType.String, value);}
    public get LocalizationMatchedSourceText() {return this.GetProp("LocalizationMatchedSourceText", DataType.String)!;}
    public set LocalizationMatchedSourceText(value) {this.SetProp("LocalizationMatchedSourceText", DataType.String, value);}
    public get MaxVisibleGraphemes() {return this.GetProp("MaxVisibleGraphemes", DataType.Int32)!;}
    public set MaxVisibleGraphemes(value) {this.SetProp("MaxVisibleGraphemes", DataType.Int32, value);}
    public get OpenTypeFeatures() {return this.GetProp("OpenTypeFeatures", DataType.String)!;}
    public set OpenTypeFeatures(value) {this.SetProp("OpenTypeFeatures", DataType.String, value);}
    public get RichText() {return this.GetProp("RichText", DataType.Bool)!;}
    public set RichText(value) {this.SetProp("RichText", DataType.Bool, value);}
    public get Text() {return this.GetProp("Text", DataType.String)!;}
    public set Text(value) {this.SetProp("Text", DataType.String, value);}
    /**@deprecated Deprecated by Roblox*/
    public get TextColor() {return this.GetProp("TextColor", DataType.BrickColor);}
    /**@deprecated Deprecated by Roblox*/
    public set TextColor(value) {this.SetProp("TextColor", DataType.BrickColor, value);}
    public get TextColor3() {return this.GetProp("TextColor3", DataType.Color3)!;}
    public set TextColor3(value) {this.SetProp("TextColor3", DataType.Color3, value);}
    public get TextDirection() {return this.GetProp("TextDirection", DataType.Enum)! as TextDirection;}
    public set TextDirection(value) {this.SetProp("TextDirection", DataType.Enum, value);}
    public get TextScaled() {return this.GetProp("TextScaled", DataType.Bool)!;}
    public set TextScaled(value) {this.SetProp("TextScaled", DataType.Bool, value);}
    public get TextSize() {return this.GetProp("TextSize", DataType.Float32)!;}
    public set TextSize(value) {this.SetProp("TextSize", DataType.Float32, value);}
    public get TextStrokeColor3() {return this.GetProp("TextStrokeColor3", DataType.Color3)!;}
    public set TextStrokeColor3(value) {this.SetProp("TextStrokeColor3", DataType.Color3, value);}
    public get TextStrokeTransparency() {return this.GetProp("TextStrokeTransparency", DataType.Float32)!;}
    public set TextStrokeTransparency(value) {this.SetProp("TextStrokeTransparency", DataType.Float32, value);}
    public get TextTransparency() {return this.GetProp("TextTransparency", DataType.Float32)!;}
    public set TextTransparency(value) {this.SetProp("TextTransparency", DataType.Float32, value);}
    public get TextTruncate() {return this.GetProp("TextTruncate", DataType.Enum)! as TextTruncate;}
    public set TextTruncate(value) {this.SetProp("TextTruncate", DataType.Enum, value);}
    /**@deprecated Deprecated by Roblox*/
    public get TextWrap() {return this.GetProp("TextWrap", DataType.Bool)!;}
    /**@deprecated Deprecated by Roblox*/
    public set TextWrap(value) {this.SetProp("TextWrap", DataType.Bool, value);}
    public get TextWrapped() {return this.GetProp("TextWrapped", DataType.Bool)!;}
    public set TextWrapped(value) {this.SetProp("TextWrapped", DataType.Bool, value);}
    public get TextXAlignment() {return this.GetProp("TextXAlignment", DataType.Enum)! as TextXAlignment;}
    public set TextXAlignment(value) {this.SetProp("TextXAlignment", DataType.Enum, value);}
    public get TextYAlignment() {return this.GetProp("TextYAlignment", DataType.Enum)! as TextYAlignment;}
    public set TextYAlignment(value) {this.SetProp("TextYAlignment", DataType.Enum, value);}
}

export abstract class GuiLabel extends GuiObject {
    public constructor()
    {
        super();
        this.addClassName("GuiLabel");
        this.Active = false;
        this.ClipsDescendants = false;
        this.Selectable = false;
        this.SelectionGroup = false;
    }
}

export class ImageLabel extends GuiLabel {
    public constructor()
    {
        super();
        this.addClassName("ImageLabel");
        this.Name = "ImageLabel";
        this.Image = "";
        this.ImageColor3 = Color3.FromRGB(255, 255, 255);
        this.ImageRectOffset = new Vector2(0, 0);
        this.ImageRectSize = new Vector2(0, 0);
        this.ImageTransparency = 0;
        this.ResampleMode = ResamplerMode.Default;
        this.ScaleType = ScaleType.Stretch;
        this.SliceCenter = new Rect(new Vector2(0, 0), new Vector2(0, 0));
        this.SliceScale = 1;
        this.TileSize = new UDim2(new UDim(1, 0), new UDim(1, 0));
    }
    public get Image() {return this.GetProp("Image", DataType.String)!;}
    public set Image(value) {this.SetProp("Image", DataType.String, value);}
    public get ImageColor3() {return this.GetProp("ImageColor3", DataType.Color3)!;}
    public set ImageColor3(value) {this.SetProp("ImageColor3", DataType.Color3, value);}
    public get ImageContent() {return this.GetProp("ImageContent", DataType.String);}
    public set ImageContent(value) {this.SetProp("ImageContent", DataType.String, value);}
    public get ImageRectOffset() {return this.GetProp("ImageRectOffset", DataType.Vector2)!;}
    public set ImageRectOffset(value) {this.SetProp("ImageRectOffset", DataType.Vector2, value);}
    public get ImageRectSize() {return this.GetProp("ImageRectSize", DataType.Vector2)!;}
    public set ImageRectSize(value) {this.SetProp("ImageRectSize", DataType.Vector2, value);}
    public get ImageTransparency() {return this.GetProp("ImageTransparency", DataType.Float32)!;}
    public set ImageTransparency(value) {this.SetProp("ImageTransparency", DataType.Float32, value);}
    public get ResampleMode() {return this.GetProp("ResampleMode", DataType.Enum)! as ResamplerMode;}
    public set ResampleMode(value) {this.SetProp("ResampleMode", DataType.Enum, value);}
    public get ScaleType() {return this.GetProp("ScaleType", DataType.Enum)! as ScaleType;}
    public set ScaleType(value) {this.SetProp("ScaleType", DataType.Enum, value);}
    public get SliceCenter() {return this.GetProp("SliceCenter", DataType.Rect)!;}
    public set SliceCenter(value) {this.SetProp("SliceCenter", DataType.Rect, value);}
    public get SliceScale() {return this.GetProp("SliceScale", DataType.Float32)!;}
    public set SliceScale(value) {this.SetProp("SliceScale", DataType.Float32, value);}
    public get TileSize() {return this.GetProp("TileSize", DataType.UDim2)!;}
    public set TileSize(value) {this.SetProp("TileSize", DataType.UDim2, value);}
}

export class TextLabel extends GuiLabel {
    public constructor()
    {
        super();
        this.addClassName("TextLabel");
        this.Name = "TextLabel";
        this.FontSize = FontSize.Size8;
        this.LineHeight = 1;
        this.LocalizationMatchIdentifier = "";
        this.LocalizationMatchedSourceText = "";
        this.MaxVisibleGraphemes = -1;
        this.OpenTypeFeatures = "";
        this.RichText = false;
        this.Text = "Label";
        this.TextColor3 = Color3.FromRGB(27, 42, 53);
        this.TextDirection = TextDirection.Auto;
        this.TextScaled = false;
        this.TextSize = 8;
        this.TextStrokeColor3 = Color3.FromRGB(0, 0, 0);
        this.TextStrokeTransparency = 1;
        this.TextTransparency = 0;
        this.TextTruncate = TextTruncate.None;
        this.TextWrap = false;
        this.TextWrapped = false;
        this.TextXAlignment = TextXAlignment.Center;
        this.TextYAlignment = TextYAlignment.Center;
        this.FontFace = new RBXMFont("rbxasset://fonts/families/LegacyArial.json", FontWeight.Regular, FontStyle.Normal);
    }
    public get FontFace() {return this.GetProp("FontFace", DataType.Font)!;}
    public set FontFace(value) {this.SetProp("FontFace", DataType.Font, value);}
    /**@deprecated Deprecated by Roblox*/
    public get FontSize() {return this.GetProp("FontSize", DataType.Enum)! as FontSize;}
    /**@deprecated Deprecated by Roblox*/
    public set FontSize(value) {this.SetProp("FontSize", DataType.Enum, value);}
    public get LineHeight() {return this.GetProp("LineHeight", DataType.Float32)!;}
    public set LineHeight(value) {this.SetProp("LineHeight", DataType.Float32, value);}
    public get LocalizationMatchIdentifier() {return this.GetProp("LocalizationMatchIdentifier", DataType.String)!;}
    public set LocalizationMatchIdentifier(value) {this.SetProp("LocalizationMatchIdentifier", DataType.String, value);}
    public get LocalizationMatchedSourceText() {return this.GetProp("LocalizationMatchedSourceText", DataType.String)!;}
    public set LocalizationMatchedSourceText(value) {this.SetProp("LocalizationMatchedSourceText", DataType.String, value);}
    public get MaxVisibleGraphemes() {return this.GetProp("MaxVisibleGraphemes", DataType.Int32)!;}
    public set MaxVisibleGraphemes(value) {this.SetProp("MaxVisibleGraphemes", DataType.Int32, value);}
    public get OpenTypeFeatures() {return this.GetProp("OpenTypeFeatures", DataType.String)!;}
    public set OpenTypeFeatures(value) {this.SetProp("OpenTypeFeatures", DataType.String, value);}
    public get RichText() {return this.GetProp("RichText", DataType.Bool)!;}
    public set RichText(value) {this.SetProp("RichText", DataType.Bool, value);}
    public get Text() {return this.GetProp("Text", DataType.String)!;}
    public set Text(value) {this.SetProp("Text", DataType.String, value);}
    /**@deprecated Deprecated by Roblox*/
    public get TextColor() {return this.GetProp("TextColor", DataType.BrickColor);}
    /**@deprecated Deprecated by Roblox*/
    public set TextColor(value) {this.SetProp("TextColor", DataType.BrickColor, value);}
    public get TextColor3() {return this.GetProp("TextColor3", DataType.Color3)!;}
    public set TextColor3(value) {this.SetProp("TextColor3", DataType.Color3, value);}
    public get TextDirection() {return this.GetProp("TextDirection", DataType.Enum)! as TextDirection;}
    public set TextDirection(value) {this.SetProp("TextDirection", DataType.Enum, value);}
    public get TextScaled() {return this.GetProp("TextScaled", DataType.Bool)!;}
    public set TextScaled(value) {this.SetProp("TextScaled", DataType.Bool, value);}
    public get TextSize() {return this.GetProp("TextSize", DataType.Float32)!;}
    public set TextSize(value) {this.SetProp("TextSize", DataType.Float32, value);}
    public get TextStrokeColor3() {return this.GetProp("TextStrokeColor3", DataType.Color3)!;}
    public set TextStrokeColor3(value) {this.SetProp("TextStrokeColor3", DataType.Color3, value);}
    public get TextStrokeTransparency() {return this.GetProp("TextStrokeTransparency", DataType.Float32)!;}
    public set TextStrokeTransparency(value) {this.SetProp("TextStrokeTransparency", DataType.Float32, value);}
    public get TextTransparency() {return this.GetProp("TextTransparency", DataType.Float32)!;}
    public set TextTransparency(value) {this.SetProp("TextTransparency", DataType.Float32, value);}
    public get TextTruncate() {return this.GetProp("TextTruncate", DataType.Enum)! as TextTruncate;}
    public set TextTruncate(value) {this.SetProp("TextTruncate", DataType.Enum, value);}
    /**@deprecated Deprecated by Roblox*/
    public get TextWrap() {return this.GetProp("TextWrap", DataType.Bool)!;}
    /**@deprecated Deprecated by Roblox*/
    public set TextWrap(value) {this.SetProp("TextWrap", DataType.Bool, value);}
    public get TextWrapped() {return this.GetProp("TextWrapped", DataType.Bool)!;}
    public set TextWrapped(value) {this.SetProp("TextWrapped", DataType.Bool, value);}
    public get TextXAlignment() {return this.GetProp("TextXAlignment", DataType.Enum)! as TextXAlignment;}
    public set TextXAlignment(value) {this.SetProp("TextXAlignment", DataType.Enum, value);}
    public get TextYAlignment() {return this.GetProp("TextYAlignment", DataType.Enum)! as TextYAlignment;}
    public set TextYAlignment(value) {this.SetProp("TextYAlignment", DataType.Enum, value);}
}

export class RelativeGui extends GuiObject {
    public constructor()
    {
        super();
        this.addClassName("RelativeGui");
        this.Name = "RelativeGui";
    }
}

export class ScrollingFrame extends GuiObject {
    public constructor()
    {
        super();
        this.addClassName("ScrollingFrame");
        this.Name = "ScrollingFrame";
        this.AutomaticCanvasSize = AutomaticSize.None;
        this.BottomImage = "rbxasset://textures/ui/Scroll/scroll-bottom.png";
        this.CanvasPosition = new Vector2(0, 0);
        this.CanvasSize = new UDim2(new UDim(0, 0), new UDim(2, 0));
        this.ElasticBehavior = ElasticBehavior.WhenScrollable;
        this.HorizontalScrollBarInset = ScrollBarInset.None;
        this.MidImage = "rbxasset://textures/ui/Scroll/scroll-middle.png";
        this.ScrollBarImageColor3 = Color3.FromRGB(255, 255, 255);
        this.ScrollBarImageTransparency = 0;
        this.ScrollBarThickness = 12;
        this.ScrollingDirection = ScrollingDirection.XY;
        this.ScrollingEnabled = true;
        this.TopImage = "rbxasset://textures/ui/Scroll/scroll-top.png";
        this.VerticalScrollBarInset = ScrollBarInset.None;
        this.VerticalScrollBarPosition = VerticalScrollBarPosition.Right;
        this.Active = false;
        this.ClipsDescendants = true;
        this.Selectable = true;
        this.SelectionGroup = true;
    }
    public get AutomaticCanvasSize() {return this.GetProp("AutomaticCanvasSize", DataType.Enum)! as AutomaticSize;}
    public set AutomaticCanvasSize(value) {this.SetProp("AutomaticCanvasSize", DataType.Enum, value);}
    public get BottomImage() {return this.GetProp("BottomImage", DataType.String)!;}
    public set BottomImage(value) {this.SetProp("BottomImage", DataType.String, value);}
    public get CanvasPosition() {return this.GetProp("CanvasPosition", DataType.Vector2)!;}
    public set CanvasPosition(value) {this.SetProp("CanvasPosition", DataType.Vector2, value);}
    public get CanvasSize() {return this.GetProp("CanvasSize", DataType.UDim2)!;}
    public set CanvasSize(value) {this.SetProp("CanvasSize", DataType.UDim2, value);}
    public get ElasticBehavior() {return this.GetProp("ElasticBehavior", DataType.Enum)! as ElasticBehavior;}
    public set ElasticBehavior(value) {this.SetProp("ElasticBehavior", DataType.Enum, value);}
    public get HorizontalScrollBarInset() {return this.GetProp("HorizontalScrollBarInset", DataType.Enum)! as ScrollBarInset;}
    public set HorizontalScrollBarInset(value) {this.SetProp("HorizontalScrollBarInset", DataType.Enum, value);}
    public get MidImage() {return this.GetProp("MidImage", DataType.String)!;}
    public set MidImage(value) {this.SetProp("MidImage", DataType.String, value);}
    public get ScrollBarImageColor3() {return this.GetProp("ScrollBarImageColor3", DataType.Color3)!;}
    public set ScrollBarImageColor3(value) {this.SetProp("ScrollBarImageColor3", DataType.Color3, value);}
    public get ScrollBarImageTransparency() {return this.GetProp("ScrollBarImageTransparency", DataType.Float32)!;}
    public set ScrollBarImageTransparency(value) {this.SetProp("ScrollBarImageTransparency", DataType.Float32, value);}
    public get ScrollBarThickness() {return this.GetProp("ScrollBarThickness", DataType.Int32)!;}
    public set ScrollBarThickness(value) {this.SetProp("ScrollBarThickness", DataType.Int32, value);}
    public get ScrollingDirection() {return this.GetProp("ScrollingDirection", DataType.Enum)! as ScrollingDirection;}
    public set ScrollingDirection(value) {this.SetProp("ScrollingDirection", DataType.Enum, value);}
    public get ScrollingEnabled() {return this.GetProp("ScrollingEnabled", DataType.Bool)!;}
    public set ScrollingEnabled(value) {this.SetProp("ScrollingEnabled", DataType.Bool, value);}
    public get TopImage() {return this.GetProp("TopImage", DataType.String)!;}
    public set TopImage(value) {this.SetProp("TopImage", DataType.String, value);}
    public get VerticalScrollBarInset() {return this.GetProp("VerticalScrollBarInset", DataType.Enum)! as ScrollBarInset;}
    public set VerticalScrollBarInset(value) {this.SetProp("VerticalScrollBarInset", DataType.Enum, value);}
    public get VerticalScrollBarPosition() {return this.GetProp("VerticalScrollBarPosition", DataType.Enum)! as VerticalScrollBarPosition;}
    public set VerticalScrollBarPosition(value) {this.SetProp("VerticalScrollBarPosition", DataType.Enum, value);}
}

export class TextBox extends GuiObject {
    public constructor()
    {
        super();
        this.addClassName("TextBox");
        this.Name = "TextBox";
        this.ClearTextOnFocus = true;
        this.FontSize = FontSize.Size8;
        this.LineHeight = 1;
        this.LocalizationMatchIdentifier = "";
        this.LocalizationMatchedSourceText = "";
        this.MaxVisibleGraphemes = -1;
        this.MultiLine = false;
        this.OpenTypeFeatures = "";
        this.PlaceholderColor3 = Color3.FromRGB(179, 179, 179);
        this.PlaceholderText = "";
        this.RichText = false;
        this.ShowNativeInput = true;
        this.Text = "TextBox";
        this.TextColor3 = Color3.FromRGB(27, 42, 53);
        this.TextDirection = TextDirection.Auto;
        this.TextEditable = true;
        this.TextScaled = false;
        this.TextSize = 8;
        this.TextStrokeColor3 = Color3.FromRGB(0, 0, 0);
        this.TextStrokeTransparency = 1;
        this.TextTransparency = 0;
        this.TextTruncate = TextTruncate.None;
        this.TextWrap = false;
        this.TextWrapped = false;
        this.TextXAlignment = TextXAlignment.Center;
        this.TextYAlignment = TextYAlignment.Center;
        this.FontFace = new RBXMFont("rbxasset://fonts/families/LegacyArial.json", FontWeight.Regular, FontStyle.Normal);
        this.Active = true;
        this.ClipsDescendants = false;
        this.Selectable = true;
        this.SelectionGroup = false;
    }
    public get ClearTextOnFocus() {return this.GetProp("ClearTextOnFocus", DataType.Bool)!;}
    public set ClearTextOnFocus(value) {this.SetProp("ClearTextOnFocus", DataType.Bool, value);}
    public get FontFace() {return this.GetProp("FontFace", DataType.Font)!;}
    public set FontFace(value) {this.SetProp("FontFace", DataType.Font, value);}
    /**@deprecated Deprecated by Roblox*/
    public get FontSize() {return this.GetProp("FontSize", DataType.Enum)! as FontSize;}
    /**@deprecated Deprecated by Roblox*/
    public set FontSize(value) {this.SetProp("FontSize", DataType.Enum, value);}
    public get LineHeight() {return this.GetProp("LineHeight", DataType.Float32)!;}
    public set LineHeight(value) {this.SetProp("LineHeight", DataType.Float32, value);}
    public get LocalizationMatchIdentifier() {return this.GetProp("LocalizationMatchIdentifier", DataType.String)!;}
    public set LocalizationMatchIdentifier(value) {this.SetProp("LocalizationMatchIdentifier", DataType.String, value);}
    public get LocalizationMatchedSourceText() {return this.GetProp("LocalizationMatchedSourceText", DataType.String)!;}
    public set LocalizationMatchedSourceText(value) {this.SetProp("LocalizationMatchedSourceText", DataType.String, value);}
    public get MaxVisibleGraphemes() {return this.GetProp("MaxVisibleGraphemes", DataType.Int32)!;}
    public set MaxVisibleGraphemes(value) {this.SetProp("MaxVisibleGraphemes", DataType.Int32, value);}
    public get MultiLine() {return this.GetProp("MultiLine", DataType.Bool)!;}
    public set MultiLine(value) {this.SetProp("MultiLine", DataType.Bool, value);}
    public get OpenTypeFeatures() {return this.GetProp("OpenTypeFeatures", DataType.String)!;}
    public set OpenTypeFeatures(value) {this.SetProp("OpenTypeFeatures", DataType.String, value);}
    public get PlaceholderColor3() {return this.GetProp("PlaceholderColor3", DataType.Color3)!;}
    public set PlaceholderColor3(value) {this.SetProp("PlaceholderColor3", DataType.Color3, value);}
    public get PlaceholderText() {return this.GetProp("PlaceholderText", DataType.String)!;}
    public set PlaceholderText(value) {this.SetProp("PlaceholderText", DataType.String, value);}
    public get RichText() {return this.GetProp("RichText", DataType.Bool)!;}
    public set RichText(value) {this.SetProp("RichText", DataType.Bool, value);}
    public get ShowNativeInput() {return this.GetProp("ShowNativeInput", DataType.Bool)!;}
    public set ShowNativeInput(value) {this.SetProp("ShowNativeInput", DataType.Bool, value);}
    public get Text() {return this.GetProp("Text", DataType.String)!;}
    public set Text(value) {this.SetProp("Text", DataType.String, value);}
    /**@deprecated Deprecated by Roblox*/
    public get TextColor() {return this.GetProp("TextColor", DataType.BrickColor);}
    /**@deprecated Deprecated by Roblox*/
    public set TextColor(value) {this.SetProp("TextColor", DataType.BrickColor, value);}
    public get TextColor3() {return this.GetProp("TextColor3", DataType.Color3)!;}
    public set TextColor3(value) {this.SetProp("TextColor3", DataType.Color3, value);}
    public get TextDirection() {return this.GetProp("TextDirection", DataType.Enum)! as TextDirection;}
    public set TextDirection(value) {this.SetProp("TextDirection", DataType.Enum, value);}
    public get TextEditable() {return this.GetProp("TextEditable", DataType.Bool)!;}
    public set TextEditable(value) {this.SetProp("TextEditable", DataType.Bool, value);}
    public get TextScaled() {return this.GetProp("TextScaled", DataType.Bool)!;}
    public set TextScaled(value) {this.SetProp("TextScaled", DataType.Bool, value);}
    public get TextSize() {return this.GetProp("TextSize", DataType.Float32)!;}
    public set TextSize(value) {this.SetProp("TextSize", DataType.Float32, value);}
    public get TextStrokeColor3() {return this.GetProp("TextStrokeColor3", DataType.Color3)!;}
    public set TextStrokeColor3(value) {this.SetProp("TextStrokeColor3", DataType.Color3, value);}
    public get TextStrokeTransparency() {return this.GetProp("TextStrokeTransparency", DataType.Float32)!;}
    public set TextStrokeTransparency(value) {this.SetProp("TextStrokeTransparency", DataType.Float32, value);}
    public get TextTransparency() {return this.GetProp("TextTransparency", DataType.Float32)!;}
    public set TextTransparency(value) {this.SetProp("TextTransparency", DataType.Float32, value);}
    public get TextTruncate() {return this.GetProp("TextTruncate", DataType.Enum)! as TextTruncate;}
    public set TextTruncate(value) {this.SetProp("TextTruncate", DataType.Enum, value);}
    /**@deprecated Deprecated by Roblox*/
    public get TextWrap() {return this.GetProp("TextWrap", DataType.Bool)!;}
    /**@deprecated Deprecated by Roblox*/
    public set TextWrap(value) {this.SetProp("TextWrap", DataType.Bool, value);}
    public get TextWrapped() {return this.GetProp("TextWrapped", DataType.Bool)!;}
    public set TextWrapped(value) {this.SetProp("TextWrapped", DataType.Bool, value);}
    public get TextXAlignment() {return this.GetProp("TextXAlignment", DataType.Enum)! as TextXAlignment;}
    public set TextXAlignment(value) {this.SetProp("TextXAlignment", DataType.Enum, value);}
    public get TextYAlignment() {return this.GetProp("TextYAlignment", DataType.Enum)! as TextYAlignment;}
    public set TextYAlignment(value) {this.SetProp("TextYAlignment", DataType.Enum, value);}
}

export class VideoDisplay extends GuiObject {
    public constructor()
    {
        super();
        this.addClassName("VideoDisplay");
        this.Name = "VideoDisplay";
        this.ResampleMode = ResamplerMode.Default;
        this.ScaleType = ScaleType.Stretch;
        this.TileSize = new UDim2(new UDim(1, 0), new UDim(1, 0));
        this.VideoColor3 = Color3.FromRGB(255, 255, 255);
        this.VideoRectOffset = new Vector2(0, 0);
        this.VideoRectSize = new Vector2(0, 0);
        this.VideoTransparency = 0;
    }
    public get ResampleMode() {return this.GetProp("ResampleMode", DataType.Enum)! as ResamplerMode;}
    public set ResampleMode(value) {this.SetProp("ResampleMode", DataType.Enum, value);}
    public get ScaleType() {return this.GetProp("ScaleType", DataType.Enum)! as ScaleType;}
    public set ScaleType(value) {this.SetProp("ScaleType", DataType.Enum, value);}
    public get TileSize() {return this.GetProp("TileSize", DataType.UDim2)!;}
    public set TileSize(value) {this.SetProp("TileSize", DataType.UDim2, value);}
    public get VideoColor3() {return this.GetProp("VideoColor3", DataType.Color3)!;}
    public set VideoColor3(value) {this.SetProp("VideoColor3", DataType.Color3, value);}
    public get VideoRectOffset() {return this.GetProp("VideoRectOffset", DataType.Vector2)!;}
    public set VideoRectOffset(value) {this.SetProp("VideoRectOffset", DataType.Vector2, value);}
    public get VideoRectSize() {return this.GetProp("VideoRectSize", DataType.Vector2)!;}
    public set VideoRectSize(value) {this.SetProp("VideoRectSize", DataType.Vector2, value);}
    public get VideoTransparency() {return this.GetProp("VideoTransparency", DataType.Float32)!;}
    public set VideoTransparency(value) {this.SetProp("VideoTransparency", DataType.Float32, value);}
}

export class VideoFrame extends GuiObject {
    public constructor()
    {
        super();
        this.addClassName("VideoFrame");
        this.Name = "VideoFrame";
        this.Looped = false;
        this.Playing = false;
        this.TimePosition = 0;
        this.Video = "";
        this.Volume = 1;
        this.Active = false;
        this.ClipsDescendants = false;
        this.Selectable = false;
        this.SelectionGroup = false;
    }
    public get Looped() {return this.GetProp("Looped", DataType.Bool)!;}
    public set Looped(value) {this.SetProp("Looped", DataType.Bool, value);}
    public get Playing() {return this.GetProp("Playing", DataType.Bool)!;}
    public set Playing(value) {this.SetProp("Playing", DataType.Bool, value);}
    public get TimePosition() {return this.GetProp("TimePosition", DataType.Float64)!;}
    public set TimePosition(value) {this.SetProp("TimePosition", DataType.Float64, value);}
    public get Video() {return this.GetProp("Video", DataType.String)!;}
    public set Video(value) {this.SetProp("Video", DataType.String, value);}
    public get VideoContent() {return this.GetProp("VideoContent", DataType.String);}
    public set VideoContent(value) {this.SetProp("VideoContent", DataType.String, value);}
    public get Volume() {return this.GetProp("Volume", DataType.Float32)!;}
    public set Volume(value) {this.SetProp("Volume", DataType.Float32, value);}
}

export class ViewportFrame extends GuiObject {
    public constructor()
    {
        super();
        this.addClassName("ViewportFrame");
        this.Name = "ViewportFrame";
        this.Ambient = Color3.FromRGB(200, 200, 200);
        this.CameraFieldOfView = 1.22173;
        this.ImageColor3 = Color3.FromRGB(255, 255, 255);
        this.ImageTransparency = 0;
        this.LightColor = Color3.FromRGB(140, 140, 140);
        this.LightDirection = new Vector3(-1, -1, -1);
        this.Active = false;
        this.ClipsDescendants = false;
        this.Selectable = false;
        this.SelectionGroup = false;
    }
    public get Ambient() {return this.GetProp("Ambient", DataType.Color3)!;}
    public set Ambient(value) {this.SetProp("Ambient", DataType.Color3, value);}
    public get CameraCFrame() {return this.GetProp("CameraCFrame", DataType.CFrame);}
    public set CameraCFrame(value) {this.SetProp("CameraCFrame", DataType.CFrame, value);}
    public get CameraFieldOfView() {return this.GetProp("CameraFieldOfView", DataType.Float32)!;}
    public set CameraFieldOfView(value) {this.SetProp("CameraFieldOfView", DataType.Float32, value);}
    public get ImageColor3() {return this.GetProp("ImageColor3", DataType.Color3)!;}
    public set ImageColor3(value) {this.SetProp("ImageColor3", DataType.Color3, value);}
    public get ImageTransparency() {return this.GetProp("ImageTransparency", DataType.Float32)!;}
    public set ImageTransparency(value) {this.SetProp("ImageTransparency", DataType.Float32, value);}
    public get LightColor() {return this.GetProp("LightColor", DataType.Color3)!;}
    public set LightColor(value) {this.SetProp("LightColor", DataType.Color3, value);}
    public get LightDirection() {return this.GetProp("LightDirection", DataType.Vector3)!;}
    public set LightDirection(value) {this.SetProp("LightDirection", DataType.Vector3, value);}
}

export abstract class LayerCollector extends GuiBase2d {
    public constructor()
    {
        super();
        this.addClassName("LayerCollector");
        this.Enabled = true;
        this.ResetOnSpawn = true;
        this.ZIndexBehavior = ZIndexBehavior.Global;
        this.SelectionGroup = false;
    }
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get ResetOnSpawn() {return this.GetProp("ResetOnSpawn", DataType.Bool)!;}
    public set ResetOnSpawn(value) {this.SetProp("ResetOnSpawn", DataType.Bool, value);}
    public get ZIndexBehavior() {return this.GetProp("ZIndexBehavior", DataType.Enum)! as ZIndexBehavior;}
    public set ZIndexBehavior(value) {this.SetProp("ZIndexBehavior", DataType.Enum, value);}
}

export class BillboardGui extends LayerCollector {
    public constructor()
    {
        super();
        this.addClassName("BillboardGui");
        this.Name = "BillboardGui";
        this.Active = false;
        this.AlwaysOnTop = false;
        this.Brightness = 1;
        this.ClipsDescendants = false;
        this.DistanceLowerLimit = 0;
        this.DistanceStep = 0;
        this.DistanceUpperLimit = -1;
        this.ExtentsOffset = new Vector3(0, 0, 0);
        this.ExtentsOffsetWorldSpace = new Vector3(0, 0, 0);
        this.LightInfluence = 0;
        this.MaxDistance = Infinity;
        this.Size = new UDim2(new UDim(0, 0), new UDim(0, 0));
        this.SizeOffset = new Vector2(0, 0);
        this.StudsOffset = new Vector3(0, 0, 0);
        this.StudsOffsetWorldSpace = new Vector3(0, 0, 0);
    }
    public get Active() {return this.GetProp("Active", DataType.Bool)!;}
    public set Active(value) {this.SetProp("Active", DataType.Bool, value);}
    public get Adornee() {return this.GetProp("Adornee", DataType.Referent) as Instance | undefined;}
    public set Adornee(value) {this.SetProp("Adornee", DataType.Referent, value);}
    public get AlwaysOnTop() {return this.GetProp("AlwaysOnTop", DataType.Bool)!;}
    public set AlwaysOnTop(value) {this.SetProp("AlwaysOnTop", DataType.Bool, value);}
    public get Brightness() {return this.GetProp("Brightness", DataType.Float32)!;}
    public set Brightness(value) {this.SetProp("Brightness", DataType.Float32, value);}
    public get ClipsDescendants() {return this.GetProp("ClipsDescendants", DataType.Bool)!;}
    public set ClipsDescendants(value) {this.SetProp("ClipsDescendants", DataType.Bool, value);}
    public get DistanceLowerLimit() {return this.GetProp("DistanceLowerLimit", DataType.Float32)!;}
    public set DistanceLowerLimit(value) {this.SetProp("DistanceLowerLimit", DataType.Float32, value);}
    public get DistanceStep() {return this.GetProp("DistanceStep", DataType.Float32)!;}
    public set DistanceStep(value) {this.SetProp("DistanceStep", DataType.Float32, value);}
    public get DistanceUpperLimit() {return this.GetProp("DistanceUpperLimit", DataType.Float32)!;}
    public set DistanceUpperLimit(value) {this.SetProp("DistanceUpperLimit", DataType.Float32, value);}
    public get ExtentsOffset() {return this.GetProp("ExtentsOffset", DataType.Vector3)!;}
    public set ExtentsOffset(value) {this.SetProp("ExtentsOffset", DataType.Vector3, value);}
    public get ExtentsOffsetWorldSpace() {return this.GetProp("ExtentsOffsetWorldSpace", DataType.Vector3)!;}
    public set ExtentsOffsetWorldSpace(value) {this.SetProp("ExtentsOffsetWorldSpace", DataType.Vector3, value);}
    public get LightInfluence() {return this.GetProp("LightInfluence", DataType.Float32)!;}
    public set LightInfluence(value) {this.SetProp("LightInfluence", DataType.Float32, value);}
    public get MaxDistance() {return this.GetProp("MaxDistance", DataType.Float32)!;}
    public set MaxDistance(value) {this.SetProp("MaxDistance", DataType.Float32, value);}
    public get PlayerToHideFrom() {return this.GetProp("PlayerToHideFrom", DataType.Referent) as Instance | undefined;}
    public set PlayerToHideFrom(value) {this.SetProp("PlayerToHideFrom", DataType.Referent, value);}
    public get Size() {return this.GetProp("Size", DataType.UDim2)!;}
    public set Size(value) {this.SetProp("Size", DataType.UDim2, value);}
    public get SizeOffset() {return this.GetProp("SizeOffset", DataType.Vector2)!;}
    public set SizeOffset(value) {this.SetProp("SizeOffset", DataType.Vector2, value);}
    public get StudsOffset() {return this.GetProp("StudsOffset", DataType.Vector3)!;}
    public set StudsOffset(value) {this.SetProp("StudsOffset", DataType.Vector3, value);}
    public get StudsOffsetWorldSpace() {return this.GetProp("StudsOffsetWorldSpace", DataType.Vector3)!;}
    public set StudsOffsetWorldSpace(value) {this.SetProp("StudsOffsetWorldSpace", DataType.Vector3, value);}
}

export class ScreenGui extends LayerCollector {
    public constructor()
    {
        super();
        this.addClassName("ScreenGui");
        this.Name = "ScreenGui";
        this.ClipToDeviceSafeArea = true;
        this.DisplayOrder = 0;
        this.SafeAreaCompatibility = SafeAreaCompatibility.FullscreenExtension;
        this.ScreenInsets = ScreenInsets.CoreUISafeInsets;
    }
    public get ClipToDeviceSafeArea() {return this.GetProp("ClipToDeviceSafeArea", DataType.Bool)!;}
    public set ClipToDeviceSafeArea(value) {this.SetProp("ClipToDeviceSafeArea", DataType.Bool, value);}
    public get DisplayOrder() {return this.GetProp("DisplayOrder", DataType.Int32)!;}
    public set DisplayOrder(value) {this.SetProp("DisplayOrder", DataType.Int32, value);}
    public get SafeAreaCompatibility() {return this.GetProp("SafeAreaCompatibility", DataType.Enum)! as SafeAreaCompatibility;}
    public set SafeAreaCompatibility(value) {this.SetProp("SafeAreaCompatibility", DataType.Enum, value);}
    public get ScreenInsets() {return this.GetProp("ScreenInsets", DataType.Enum)! as ScreenInsets;}
    public set ScreenInsets(value) {this.SetProp("ScreenInsets", DataType.Enum, value);}
}

/**@deprecated Deprecated by Roblox*/
export class GuiMain extends ScreenGui {
    public constructor()
    {
        super();
        this.addClassName("GuiMain");
        this.Name = "GuiMain";
    }
}

export abstract class SurfaceGuiBase extends LayerCollector {
    public constructor()
    {
        super();
        this.addClassName("SurfaceGuiBase");
        this.Active = true;
        this.Face = NormalId.Front;
    }
    public get Active() {return this.GetProp("Active", DataType.Bool)!;}
    public set Active(value) {this.SetProp("Active", DataType.Bool, value);}
    public get Adornee() {return this.GetProp("Adornee", DataType.Referent) as Instance | undefined;}
    public set Adornee(value) {this.SetProp("Adornee", DataType.Referent, value);}
    public get Face() {return this.GetProp("Face", DataType.Enum)! as NormalId;}
    public set Face(value) {this.SetProp("Face", DataType.Enum, value);}
}

export class AdGui extends SurfaceGuiBase {
    public constructor()
    {
        super();
        this.addClassName("AdGui");
        this.Name = "AdGui";
        this.AdShape = AdShape.HorizontalRectangle;
        this.EnableVideoAds = true;
        this.FallbackImage = "";
    }
    public get AdShape() {return this.GetProp("AdShape", DataType.Enum)! as AdShape;}
    public set AdShape(value) {this.SetProp("AdShape", DataType.Enum, value);}
    public get EnableVideoAds() {return this.GetProp("EnableVideoAds", DataType.Bool)!;}
    public set EnableVideoAds(value) {this.SetProp("EnableVideoAds", DataType.Bool, value);}
    public get FallbackImage() {return this.GetProp("FallbackImage", DataType.String)!;}
    public set FallbackImage(value) {this.SetProp("FallbackImage", DataType.String, value);}
}

export class SurfaceGui extends SurfaceGuiBase {
    public constructor()
    {
        super();
        this.addClassName("SurfaceGui");
        this.Name = "SurfaceGui";
        this.AlwaysOnTop = false;
        this.Brightness = 1;
        this.CanvasSize = new Vector2(800, 600);
        this.ClipsDescendants = false;
        this.LightInfluence = 0;
        this.MaxDistance = 0;
        this.PixelsPerStud = 50;
        this.SizingMode = SurfaceGuiSizingMode.FixedSize;
        this.ToolPunchThroughDistance = 0;
        this.ZOffset = 0;
    }
    public get AlwaysOnTop() {return this.GetProp("AlwaysOnTop", DataType.Bool)!;}
    public set AlwaysOnTop(value) {this.SetProp("AlwaysOnTop", DataType.Bool, value);}
    public get Brightness() {return this.GetProp("Brightness", DataType.Float32)!;}
    public set Brightness(value) {this.SetProp("Brightness", DataType.Float32, value);}
    public get CanvasSize() {return this.GetProp("CanvasSize", DataType.Vector2)!;}
    public set CanvasSize(value) {this.SetProp("CanvasSize", DataType.Vector2, value);}
    public get ClipsDescendants() {return this.GetProp("ClipsDescendants", DataType.Bool)!;}
    public set ClipsDescendants(value) {this.SetProp("ClipsDescendants", DataType.Bool, value);}
    public get LightInfluence() {return this.GetProp("LightInfluence", DataType.Float32)!;}
    public set LightInfluence(value) {this.SetProp("LightInfluence", DataType.Float32, value);}
    public get MaxDistance() {return this.GetProp("MaxDistance", DataType.Float32)!;}
    public set MaxDistance(value) {this.SetProp("MaxDistance", DataType.Float32, value);}
    public get PixelsPerStud() {return this.GetProp("PixelsPerStud", DataType.Float32)!;}
    public set PixelsPerStud(value) {this.SetProp("PixelsPerStud", DataType.Float32, value);}
    public get SizingMode() {return this.GetProp("SizingMode", DataType.Enum)! as SurfaceGuiSizingMode;}
    public set SizingMode(value) {this.SetProp("SizingMode", DataType.Enum, value);}
    public get ToolPunchThroughDistance() {return this.GetProp("ToolPunchThroughDistance", DataType.Float32)!;}
    public set ToolPunchThroughDistance(value) {this.SetProp("ToolPunchThroughDistance", DataType.Float32, value);}
    public get ZOffset() {return this.GetProp("ZOffset", DataType.Float32)!;}
    public set ZOffset(value) {this.SetProp("ZOffset", DataType.Float32, value);}
}

export abstract class GuiBase3d extends GuiBase {
    public constructor()
    {
        super();
        this.addClassName("GuiBase3d");
        this.Transparency = 0;
        this.Visible = true;
    }
    /**@deprecated Deprecated by Roblox*/
    public get Color() {return this.GetProp("Color", DataType.BrickColor);}
    /**@deprecated Deprecated by Roblox*/
    public set Color(value) {this.SetProp("Color", DataType.BrickColor, value);}
    public get Color3() {return this.GetProp("Color3", DataType.Color3)!;}
    public set Color3(value) {this.SetProp("Color3", DataType.Color3, value);}
    public get Transparency() {return this.GetProp("Transparency", DataType.Float32)!;}
    public set Transparency(value) {this.SetProp("Transparency", DataType.Float32, value);}
    public get Visible() {return this.GetProp("Visible", DataType.Bool)!;}
    public set Visible(value) {this.SetProp("Visible", DataType.Bool, value);}
}

/**@deprecated Deprecated by Roblox*/
export class FloorWire extends GuiBase3d {
    public constructor()
    {
        super();
        this.addClassName("FloorWire");
        this.Name = "FloorWire";
        this.CycleOffset = 0;
        this.StudsBetweenTextures = 4;
        this.Texture = "";
        this.TextureSize = new Vector2(1, 1);
        this.Velocity = 2;
        this.WireRadius = 0.0625;
        this.Color3 = Color3.FromRGB(13, 105, 172);
    }
    public get CycleOffset() {return this.GetProp("CycleOffset", DataType.Float32)!;}
    public set CycleOffset(value) {this.SetProp("CycleOffset", DataType.Float32, value);}
    public get From() {return this.GetProp("From", DataType.Referent) as BasePart | undefined;}
    public set From(value) {this.SetProp("From", DataType.Referent, value);}
    public get StudsBetweenTextures() {return this.GetProp("StudsBetweenTextures", DataType.Float32)!;}
    public set StudsBetweenTextures(value) {this.SetProp("StudsBetweenTextures", DataType.Float32, value);}
    public get Texture() {return this.GetProp("Texture", DataType.String)!;}
    public set Texture(value) {this.SetProp("Texture", DataType.String, value);}
    public get TextureSize() {return this.GetProp("TextureSize", DataType.Vector2)!;}
    public set TextureSize(value) {this.SetProp("TextureSize", DataType.Vector2, value);}
    public get To() {return this.GetProp("To", DataType.Referent) as BasePart | undefined;}
    public set To(value) {this.SetProp("To", DataType.Referent, value);}
    public get Velocity() {return this.GetProp("Velocity", DataType.Float32)!;}
    public set Velocity(value) {this.SetProp("Velocity", DataType.Float32, value);}
    public get WireRadius() {return this.GetProp("WireRadius", DataType.Float32)!;}
    public set WireRadius(value) {this.SetProp("WireRadius", DataType.Float32, value);}
}

export abstract class InstanceAdornment extends GuiBase3d {
    public constructor()
    {
        super();
        this.addClassName("InstanceAdornment");
        this.Color3 = Color3.FromRGB(13, 105, 172);
    }
    public get Adornee() {return this.GetProp("Adornee", DataType.Referent) as Instance | undefined;}
    public set Adornee(value) {this.SetProp("Adornee", DataType.Referent, value);}
}

export class SelectionBox extends InstanceAdornment {
    public constructor()
    {
        super();
        this.addClassName("SelectionBox");
        this.Name = "SelectionBox";
        this.LineThickness = 0.15;
        this.StudioSelectionBox = false;
        this.SurfaceColor3 = Color3.FromRGB(13, 105, 172);
        this.SurfaceTransparency = 1;
    }
    public get LineThickness() {return this.GetProp("LineThickness", DataType.Float32)!;}
    public set LineThickness(value) {this.SetProp("LineThickness", DataType.Float32, value);}
    public get StudioSelectionBox() {return this.GetProp("StudioSelectionBox", DataType.Bool)!;}
    public set StudioSelectionBox(value) {this.SetProp("StudioSelectionBox", DataType.Bool, value);}
    /**@deprecated Deprecated by Roblox*/
    public get SurfaceColor() {return this.GetProp("SurfaceColor", DataType.BrickColor);}
    /**@deprecated Deprecated by Roblox*/
    public set SurfaceColor(value) {this.SetProp("SurfaceColor", DataType.BrickColor, value);}
    public get SurfaceColor3() {return this.GetProp("SurfaceColor3", DataType.Color3)!;}
    public set SurfaceColor3(value) {this.SetProp("SurfaceColor3", DataType.Color3, value);}
    public get SurfaceTransparency() {return this.GetProp("SurfaceTransparency", DataType.Float32)!;}
    public set SurfaceTransparency(value) {this.SetProp("SurfaceTransparency", DataType.Float32, value);}
}

export abstract class PVAdornment extends GuiBase3d {
    public constructor()
    {
        super();
        this.addClassName("PVAdornment");
    }
    public get Adornee() {return this.GetProp("Adornee", DataType.Referent) as PVInstance | undefined;}
    public set Adornee(value) {this.SetProp("Adornee", DataType.Referent, value);}
}

export abstract class HandleAdornment extends PVAdornment {
    public constructor()
    {
        super();
        this.addClassName("HandleAdornment");
        this.AdornCullingMode = AdornCullingMode.Automatic;
        this.AlwaysOnTop = false;
        this.CFrame = CFrame.Identity;
        this.SizeRelativeOffset = new Vector3(0, 0, 0);
        this.ZIndex = -1;
    }
    public get AdornCullingMode() {return this.GetProp("AdornCullingMode", DataType.Enum)! as AdornCullingMode;}
    public set AdornCullingMode(value) {this.SetProp("AdornCullingMode", DataType.Enum, value);}
    public get AlwaysOnTop() {return this.GetProp("AlwaysOnTop", DataType.Bool)!;}
    public set AlwaysOnTop(value) {this.SetProp("AlwaysOnTop", DataType.Bool, value);}
    public get CFrame() {return this.GetProp("CFrame", DataType.CFrame)!;}
    public set CFrame(value) {this.SetProp("CFrame", DataType.CFrame, value);}
    public get SizeRelativeOffset() {return this.GetProp("SizeRelativeOffset", DataType.Vector3)!;}
    public set SizeRelativeOffset(value) {this.SetProp("SizeRelativeOffset", DataType.Vector3, value);}
    public get ZIndex() {return this.GetProp("ZIndex", DataType.Int32)!;}
    public set ZIndex(value) {this.SetProp("ZIndex", DataType.Int32, value);}
}

export class BoxHandleAdornment extends HandleAdornment {
    public constructor()
    {
        super();
        this.addClassName("BoxHandleAdornment");
        this.Name = "BoxHandleAdornment";
        this.Size = new Vector3(1, 1, 1);
        this.Color3 = Color3.FromRGB(13, 105, 172);
    }
    public get Size() {return this.GetProp("Size", DataType.Vector3)!;}
    public set Size(value) {this.SetProp("Size", DataType.Vector3, value);}
}

export class ConeHandleAdornment extends HandleAdornment {
    public constructor()
    {
        super();
        this.addClassName("ConeHandleAdornment");
        this.Name = "ConeHandleAdornment";
        this.Height = 2;
        this.Radius = 0.5;
        this.Color3 = Color3.FromRGB(13, 105, 172);
    }
    public get Height() {return this.GetProp("Height", DataType.Float32)!;}
    public set Height(value) {this.SetProp("Height", DataType.Float32, value);}
    public get Radius() {return this.GetProp("Radius", DataType.Float32)!;}
    public set Radius(value) {this.SetProp("Radius", DataType.Float32, value);}
}

export class CylinderHandleAdornment extends HandleAdornment {
    public constructor()
    {
        super();
        this.addClassName("CylinderHandleAdornment");
        this.Name = "CylinderHandleAdornment";
        this.Angle = 360;
        this.Height = 1;
        this.InnerRadius = 0;
        this.Radius = 1;
        this.Color3 = Color3.FromRGB(13, 105, 172);
    }
    public get Angle() {return this.GetProp("Angle", DataType.Float32)!;}
    public set Angle(value) {this.SetProp("Angle", DataType.Float32, value);}
    public get Height() {return this.GetProp("Height", DataType.Float32)!;}
    public set Height(value) {this.SetProp("Height", DataType.Float32, value);}
    public get InnerRadius() {return this.GetProp("InnerRadius", DataType.Float32)!;}
    public set InnerRadius(value) {this.SetProp("InnerRadius", DataType.Float32, value);}
    public get Radius() {return this.GetProp("Radius", DataType.Float32)!;}
    public set Radius(value) {this.SetProp("Radius", DataType.Float32, value);}
}

export class ImageHandleAdornment extends HandleAdornment {
    public constructor()
    {
        super();
        this.addClassName("ImageHandleAdornment");
        this.Name = "ImageHandleAdornment";
        this.Image = "rbxasset://textures/SurfacesDefault.png";
        this.Size = new Vector2(1, 1);
        this.Color3 = Color3.FromRGB(242, 243, 243);
    }
    public get Image() {return this.GetProp("Image", DataType.String)!;}
    public set Image(value) {this.SetProp("Image", DataType.String, value);}
    public get Size() {return this.GetProp("Size", DataType.Vector2)!;}
    public set Size(value) {this.SetProp("Size", DataType.Vector2, value);}
}

export class LineHandleAdornment extends HandleAdornment {
    public constructor()
    {
        super();
        this.addClassName("LineHandleAdornment");
        this.Name = "LineHandleAdornment";
        this.Length = 5;
        this.Thickness = 1;
        this.Color3 = Color3.FromRGB(13, 105, 172);
    }
    public get Length() {return this.GetProp("Length", DataType.Float32)!;}
    public set Length(value) {this.SetProp("Length", DataType.Float32, value);}
    public get Thickness() {return this.GetProp("Thickness", DataType.Float32)!;}
    public set Thickness(value) {this.SetProp("Thickness", DataType.Float32, value);}
}

export class SphereHandleAdornment extends HandleAdornment {
    public constructor()
    {
        super();
        this.addClassName("SphereHandleAdornment");
        this.Name = "SphereHandleAdornment";
        this.Radius = 1;
        this.Color3 = Color3.FromRGB(13, 105, 172);
    }
    public get Radius() {return this.GetProp("Radius", DataType.Float32)!;}
    public set Radius(value) {this.SetProp("Radius", DataType.Float32, value);}
}

export class WireframeHandleAdornment extends HandleAdornment {
    public constructor()
    {
        super();
        this.addClassName("WireframeHandleAdornment");
        this.Name = "WireframeHandleAdornment";
        this.Scale = new Vector3(1, 1, 1);
        this.Thickness = 1;
        this.Color3 = Color3.FromRGB(13, 105, 172);
    }
    public get Scale() {return this.GetProp("Scale", DataType.Vector3)!;}
    public set Scale(value) {this.SetProp("Scale", DataType.Vector3, value);}
    public get Thickness() {return this.GetProp("Thickness", DataType.Float32)!;}
    public set Thickness(value) {this.SetProp("Thickness", DataType.Float32, value);}
}

export class ParabolaAdornment extends PVAdornment {
    public constructor()
    {
        super();
        this.addClassName("ParabolaAdornment");
        this.Name = "ParabolaAdornment";
    }
}

export class SelectionSphere extends PVAdornment {
    public constructor()
    {
        super();
        this.addClassName("SelectionSphere");
        this.Name = "SelectionSphere";
        this.SurfaceColor3 = Color3.FromRGB(13, 105, 172);
        this.SurfaceTransparency = 1;
        this.Color3 = Color3.FromRGB(13, 105, 172);
    }
    /**@deprecated Deprecated by Roblox*/
    public get SurfaceColor() {return this.GetProp("SurfaceColor", DataType.BrickColor);}
    /**@deprecated Deprecated by Roblox*/
    public set SurfaceColor(value) {this.SetProp("SurfaceColor", DataType.BrickColor, value);}
    public get SurfaceColor3() {return this.GetProp("SurfaceColor3", DataType.Color3)!;}
    public set SurfaceColor3(value) {this.SetProp("SurfaceColor3", DataType.Color3, value);}
    public get SurfaceTransparency() {return this.GetProp("SurfaceTransparency", DataType.Float32)!;}
    public set SurfaceTransparency(value) {this.SetProp("SurfaceTransparency", DataType.Float32, value);}
}

export abstract class PartAdornment extends GuiBase3d {
    public constructor()
    {
        super();
        this.addClassName("PartAdornment");
        this.Color3 = Color3.FromRGB(13, 105, 172);
    }
    public get Adornee() {return this.GetProp("Adornee", DataType.Referent) as BasePart | undefined;}
    public set Adornee(value) {this.SetProp("Adornee", DataType.Referent, value);}
}

export abstract class HandlesBase extends PartAdornment {
    public constructor()
    {
        super();
        this.addClassName("HandlesBase");
    }
}

export class ArcHandles extends HandlesBase {
    public constructor()
    {
        super();
        this.addClassName("ArcHandles");
        this.Name = "ArcHandles";
        this.Axes = new Axes(RBXMAxis.X, RBXMAxis.Y, RBXMAxis.Z);
    }
    public get Axes() {return this.GetProp("Axes", DataType.Axes)!;}
    public set Axes(value) {this.SetProp("Axes", DataType.Axes, value);}
}

export class Handles extends HandlesBase {
    public constructor()
    {
        super();
        this.addClassName("Handles");
        this.Name = "Handles";
        this.Faces = new Faces(RBXMFace.Right, RBXMFace.Top, RBXMFace.Back, RBXMFace.Left, RBXMFace.Bottom, RBXMFace.Front);
        this.Style = HandlesStyle.Resize;
    }
    public get Faces() {return this.GetProp("Faces", DataType.Faces)!;}
    public set Faces(value) {this.SetProp("Faces", DataType.Faces, value);}
    public get Style() {return this.GetProp("Style", DataType.Enum)! as HandlesStyle;}
    public set Style(value) {this.SetProp("Style", DataType.Enum, value);}
}

export class SurfaceSelection extends PartAdornment {
    public constructor()
    {
        super();
        this.addClassName("SurfaceSelection");
        this.Name = "SurfaceSelection";
        this.TargetSurface = NormalId.Right;
    }
    public get TargetSurface() {return this.GetProp("TargetSurface", DataType.Enum)! as NormalId;}
    public set TargetSurface(value) {this.SetProp("TargetSurface", DataType.Enum, value);}
}

export abstract class SelectionLasso extends GuiBase3d {
    public constructor()
    {
        super();
        this.addClassName("SelectionLasso");
        this.Color3 = Color3.FromRGB(13, 105, 172);
    }
    public get Humanoid() {return this.GetProp("Humanoid", DataType.Referent) as Humanoid | undefined;}
    public set Humanoid(value) {this.SetProp("Humanoid", DataType.Referent, value);}
}

/**@deprecated Deprecated by Roblox*/
export class SelectionPartLasso extends SelectionLasso {
    public constructor()
    {
        super();
        this.addClassName("SelectionPartLasso");
        this.Name = "SelectionPartLasso";
    }
    public get Part() {return this.GetProp("Part", DataType.Referent) as BasePart | undefined;}
    public set Part(value) {this.SetProp("Part", DataType.Referent, value);}
}

/**@deprecated Deprecated by Roblox*/
export class SelectionPointLasso extends SelectionLasso {
    public constructor()
    {
        super();
        this.addClassName("SelectionPointLasso");
        this.Name = "SelectionPointLasso";
        this.Point = new Vector3(0, 0, 0);
    }
    public get Point() {return this.GetProp("Point", DataType.Vector3)!;}
    public set Point(value) {this.SetProp("Point", DataType.Vector3, value);}
}

export class Path2D extends GuiBase {
    public constructor()
    {
        super();
        this.addClassName("Path2D");
        this.Name = "Path2D";
        this.Closed = false;
        this.Color3 = Color3.FromRGB(0, 0, 0);
        this.PropertiesSerialize = "";
        this.Thickness = 1;
        this.Transparency = 0;
        this.Visible = true;
        this.ZIndex = 1;
    }
    public get Closed() {return this.GetProp("Closed", DataType.Bool)!;}
    public set Closed(value) {this.SetProp("Closed", DataType.Bool, value);}
    public get Color3() {return this.GetProp("Color3", DataType.Color3)!;}
    public set Color3(value) {this.SetProp("Color3", DataType.Color3, value);}
    public get PropertiesSerialize() {return this.GetProp("PropertiesSerialize", DataType.String)!;}
    public set PropertiesSerialize(value) {this.SetProp("PropertiesSerialize", DataType.String, value);}
    public get Thickness() {return this.GetProp("Thickness", DataType.Float32)!;}
    public set Thickness(value) {this.SetProp("Thickness", DataType.Float32, value);}
    public get Transparency() {return this.GetProp("Transparency", DataType.Float32)!;}
    public set Transparency(value) {this.SetProp("Transparency", DataType.Float32, value);}
    public get Visible() {return this.GetProp("Visible", DataType.Bool)!;}
    public set Visible(value) {this.SetProp("Visible", DataType.Bool, value);}
    public get ZIndex() {return this.GetProp("ZIndex", DataType.Int32)!;}
    public set ZIndex(value) {this.SetProp("ZIndex", DataType.Int32, value);}
}

export class GuiService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("GuiService");
        this.Name = "GuiService";
        this.AutoSelectGuiEnabled = true;
        this.GuiNavigationEnabled = true;
    }
    public get AutoSelectGuiEnabled() {return this.GetProp("AutoSelectGuiEnabled", DataType.Bool)!;}
    public set AutoSelectGuiEnabled(value) {this.SetProp("AutoSelectGuiEnabled", DataType.Bool, value);}
    public get GuiNavigationEnabled() {return this.GetProp("GuiNavigationEnabled", DataType.Bool)!;}
    public set GuiNavigationEnabled(value) {this.SetProp("GuiNavigationEnabled", DataType.Bool, value);}
    public get SelectedObject() {return this.GetProp("SelectedObject", DataType.Referent) as GuiObject | undefined;}
    public set SelectedObject(value) {this.SetProp("SelectedObject", DataType.Referent, value);}
}

export class GuidRegistryService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("GuidRegistryService");
        this.Name = "GuidRegistryService";
    }
}

export class HapticEffect extends Instance {
    public constructor()
    {
        super();
        this.addClassName("HapticEffect");
        this.Name = "HapticEffect";
        this.Looped = false;
        this.Position = new Vector3(0, 0, 0);
        this.Radius = 3;
        this.Type = HapticEffectType.UIClick;
    }
    public get Looped() {return this.GetProp("Looped", DataType.Bool)!;}
    public set Looped(value) {this.SetProp("Looped", DataType.Bool, value);}
    public get Position() {return this.GetProp("Position", DataType.Vector3)!;}
    public set Position(value) {this.SetProp("Position", DataType.Vector3, value);}
    public get Radius() {return this.GetProp("Radius", DataType.Float32)!;}
    public set Radius(value) {this.SetProp("Radius", DataType.Float32, value);}
    public get Type() {return this.GetProp("Type", DataType.Enum)! as HapticEffectType;}
    public set Type(value) {this.SetProp("Type", DataType.Enum, value);}
    public get Waveform() {return this.GetProp("Waveform", DataType.Referent) as FloatCurve | undefined;}
    public set Waveform(value) {this.SetProp("Waveform", DataType.Referent, value);}
}

export class HapticService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("HapticService");
        this.Name = "HapticService";
    }
}

export class HeapProfilerService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("HeapProfilerService");
        this.Name = "HeapProfilerService";
    }
}

export class HeatmapService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("HeatmapService");
        this.Name = "HeatmapService";
    }
}

export class HeightmapImporterService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("HeightmapImporterService");
        this.Name = "HeightmapImporterService";
    }
}

export class HiddenSurfaceRemovalAsset extends Instance {
    public constructor()
    {
        super();
        this.addClassName("HiddenSurfaceRemovalAsset");
        this.Name = "HiddenSurfaceRemovalAsset";
        this.HSRData = "";
        this.HSRMeshIdData = "";
    }
    public get HSRData() {return this.GetProp("HSRData", DataType.String)!;}
    public set HSRData(value) {this.SetProp("HSRData", DataType.String, value);}
    public get HSRMeshIdData() {return this.GetProp("HSRMeshIdData", DataType.String)!;}
    public set HSRMeshIdData(value) {this.SetProp("HSRMeshIdData", DataType.String, value);}
}

export class Highlight extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Highlight");
        this.Name = "Highlight";
        this.DepthMode = HighlightDepthMode.AlwaysOnTop;
        this.Enabled = true;
        this.FillColor = Color3.FromRGB(255, 0, 0);
        this.FillTransparency = 0.5;
        this.OutlineColor = Color3.FromRGB(255, 255, 255);
        this.OutlineTransparency = 0;
    }
    public get Adornee() {return this.GetProp("Adornee", DataType.Referent) as Instance | undefined;}
    public set Adornee(value) {this.SetProp("Adornee", DataType.Referent, value);}
    public get DepthMode() {return this.GetProp("DepthMode", DataType.Enum)! as HighlightDepthMode;}
    public set DepthMode(value) {this.SetProp("DepthMode", DataType.Enum, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get FillColor() {return this.GetProp("FillColor", DataType.Color3)!;}
    public set FillColor(value) {this.SetProp("FillColor", DataType.Color3, value);}
    public get FillTransparency() {return this.GetProp("FillTransparency", DataType.Float32)!;}
    public set FillTransparency(value) {this.SetProp("FillTransparency", DataType.Float32, value);}
    public get OutlineColor() {return this.GetProp("OutlineColor", DataType.Color3)!;}
    public set OutlineColor(value) {this.SetProp("OutlineColor", DataType.Color3, value);}
    public get OutlineTransparency() {return this.GetProp("OutlineTransparency", DataType.Float32)!;}
    public set OutlineTransparency(value) {this.SetProp("OutlineTransparency", DataType.Float32, value);}
}

/**@deprecated Deprecated by Roblox*/
export class Hopper extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("Hopper");
        this.Name = "Hopper";
    }
}

export class HttpRbxApiService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("HttpRbxApiService");
        this.Name = "HttpRbxApiService";
    }
}

export class HttpService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("HttpService");
        this.Name = "HttpService";
        this.HttpEnabled = false;
    }
    public get HttpEnabled() {return this.GetProp("HttpEnabled", DataType.Bool)!;}
    public set HttpEnabled(value) {this.SetProp("HttpEnabled", DataType.Bool, value);}
}

export class Humanoid extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Humanoid");
        this.Name = "Humanoid";
        this.AutoJumpEnabled = true;
        this.AutoRotate = true;
        this.AutomaticScalingEnabled = true;
        this.BreakJointsOnDeath = true;
        this.CollisionType = HumanoidCollisionType.OuterBox;
        this.DisplayDistanceType = HumanoidDisplayDistanceType.Viewer;
        this.DisplayName = "";
        this.EvaluateStateMachine = true;
        this.HealthDisplayDistance = 100;
        this.HealthDisplayType = HumanoidHealthDisplayType.DisplayWhenDamaged;
        this.HealthXML = 100;
        this.HipHeight = 0;
        this.InternalBodyScale = new Vector3(1, 1, 1);
        this.InternalHeadScale = 1;
        this.JumpHeight = 7.2;
        this.JumpPower = 50;
        this.MaxHealth = 100;
        this.MaxSlopeAngle = 89;
        this.NameDisplayDistance = 100;
        this.NameOcclusion = NameOcclusion.OccludeAll;
        this.RequiresNeck = true;
        this.RigType = HumanoidRigType.R6;
        this.UseJumpPower = true;
        this.WalkSpeed = 16;
    }
    public get AutoJumpEnabled() {return this.GetProp("AutoJumpEnabled", DataType.Bool)!;}
    public set AutoJumpEnabled(value) {this.SetProp("AutoJumpEnabled", DataType.Bool, value);}
    public get AutoRotate() {return this.GetProp("AutoRotate", DataType.Bool)!;}
    public set AutoRotate(value) {this.SetProp("AutoRotate", DataType.Bool, value);}
    public get AutomaticScalingEnabled() {return this.GetProp("AutomaticScalingEnabled", DataType.Bool)!;}
    public set AutomaticScalingEnabled(value) {this.SetProp("AutomaticScalingEnabled", DataType.Bool, value);}
    public get BreakJointsOnDeath() {return this.GetProp("BreakJointsOnDeath", DataType.Bool)!;}
    public set BreakJointsOnDeath(value) {this.SetProp("BreakJointsOnDeath", DataType.Bool, value);}
    /**@deprecated Deprecated by Roblox*/
    public get CollisionType() {return this.GetProp("CollisionType", DataType.Enum)! as HumanoidCollisionType;}
    /**@deprecated Deprecated by Roblox*/
    public set CollisionType(value) {this.SetProp("CollisionType", DataType.Enum, value);}
    public get DisplayDistanceType() {return this.GetProp("DisplayDistanceType", DataType.Enum)! as HumanoidDisplayDistanceType;}
    public set DisplayDistanceType(value) {this.SetProp("DisplayDistanceType", DataType.Enum, value);}
    public get DisplayName() {return this.GetProp("DisplayName", DataType.String)!;}
    public set DisplayName(value) {this.SetProp("DisplayName", DataType.String, value);}
    public get EvaluateStateMachine() {return this.GetProp("EvaluateStateMachine", DataType.Bool)!;}
    public set EvaluateStateMachine(value) {this.SetProp("EvaluateStateMachine", DataType.Bool, value);}
    public get HealthDisplayDistance() {return this.GetProp("HealthDisplayDistance", DataType.Float32)!;}
    public set HealthDisplayDistance(value) {this.SetProp("HealthDisplayDistance", DataType.Float32, value);}
    public get HealthDisplayType() {return this.GetProp("HealthDisplayType", DataType.Enum)! as HumanoidHealthDisplayType;}
    public set HealthDisplayType(value) {this.SetProp("HealthDisplayType", DataType.Enum, value);}
    public get HealthXML() {return this.GetProp("Health_XML", DataType.Float32)!;}
    public set HealthXML(value) {this.SetProp("Health_XML", DataType.Float32, value);}
    public get HipHeight() {return this.GetProp("HipHeight", DataType.Float32)!;}
    public set HipHeight(value) {this.SetProp("HipHeight", DataType.Float32, value);}
    public get InternalBodyScale() {return this.GetProp("InternalBodyScale", DataType.Vector3)!;}
    public set InternalBodyScale(value) {this.SetProp("InternalBodyScale", DataType.Vector3, value);}
    public get InternalHeadScale() {return this.GetProp("InternalHeadScale", DataType.Float32)!;}
    public set InternalHeadScale(value) {this.SetProp("InternalHeadScale", DataType.Float32, value);}
    public get JumpHeight() {return this.GetProp("JumpHeight", DataType.Float32)!;}
    public set JumpHeight(value) {this.SetProp("JumpHeight", DataType.Float32, value);}
    public get JumpPower() {return this.GetProp("JumpPower", DataType.Float32)!;}
    public set JumpPower(value) {this.SetProp("JumpPower", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get LeftLeg() {return this.GetProp("LeftLeg", DataType.Referent) as BasePart | undefined;}
    /**@deprecated Deprecated by Roblox*/
    public set LeftLeg(value) {this.SetProp("LeftLeg", DataType.Referent, value);}
    public get MaxHealth() {return this.GetProp("MaxHealth", DataType.Float32)!;}
    public set MaxHealth(value) {this.SetProp("MaxHealth", DataType.Float32, value);}
    public get MaxSlopeAngle() {return this.GetProp("MaxSlopeAngle", DataType.Float32)!;}
    public set MaxSlopeAngle(value) {this.SetProp("MaxSlopeAngle", DataType.Float32, value);}
    public get NameDisplayDistance() {return this.GetProp("NameDisplayDistance", DataType.Float32)!;}
    public set NameDisplayDistance(value) {this.SetProp("NameDisplayDistance", DataType.Float32, value);}
    public get NameOcclusion() {return this.GetProp("NameOcclusion", DataType.Enum)! as NameOcclusion;}
    public set NameOcclusion(value) {this.SetProp("NameOcclusion", DataType.Enum, value);}
    public get RequiresNeck() {return this.GetProp("RequiresNeck", DataType.Bool)!;}
    public set RequiresNeck(value) {this.SetProp("RequiresNeck", DataType.Bool, value);}
    public get RigType() {return this.GetProp("RigType", DataType.Enum)! as HumanoidRigType;}
    public set RigType(value) {this.SetProp("RigType", DataType.Enum, value);}
    /**@deprecated Deprecated by Roblox*/
    public get RightLeg() {return this.GetProp("RightLeg", DataType.Referent) as BasePart | undefined;}
    /**@deprecated Deprecated by Roblox*/
    public set RightLeg(value) {this.SetProp("RightLeg", DataType.Referent, value);}
    /**@deprecated Deprecated by Roblox*/
    public get Torso() {return this.GetProp("Torso", DataType.Referent) as BasePart | undefined;}
    /**@deprecated Deprecated by Roblox*/
    public set Torso(value) {this.SetProp("Torso", DataType.Referent, value);}
    public get UseJumpPower() {return this.GetProp("UseJumpPower", DataType.Bool)!;}
    public set UseJumpPower(value) {this.SetProp("UseJumpPower", DataType.Bool, value);}
    public get WalkSpeed() {return this.GetProp("WalkSpeed", DataType.Float32)!;}
    public set WalkSpeed(value) {this.SetProp("WalkSpeed", DataType.Float32, value);}
}

export class HumanoidDescription extends Instance {
    public constructor()
    {
        super();
        this.addClassName("HumanoidDescription");
        this.Name = "HumanoidDescription";
        this.BodyTypeScale = 0.3;
        this.ClimbAnimation = BigInt(0);
        this.DepthScale = 1;
        this.EmotesDataInternal = "";
        this.EquippedEmotesDataInternal = "";
        this.Face = BigInt(0);
        this.FallAnimation = BigInt(0);
        this.GraphicTShirt = BigInt(0);
        this.HeadScale = 1;
        this.HeightScale = 1;
        this.IdleAnimation = BigInt(0);
        this.JumpAnimation = BigInt(0);
        this.MoodAnimation = BigInt(0);
        this.Pants = BigInt(0);
        this.ProportionScale = 1;
        this.RunAnimation = BigInt(0);
        this.Shirt = BigInt(0);
        this.SwimAnimation = BigInt(0);
        this.WalkAnimation = BigInt(0);
        this.WidthScale = 1;
    }
    public get BodyTypeScale() {return this.GetProp("BodyTypeScale", DataType.Float32)!;}
    public set BodyTypeScale(value) {this.SetProp("BodyTypeScale", DataType.Float32, value);}
    public get ClimbAnimation() {return this.GetProp("ClimbAnimation", DataType.Int64)!;}
    public set ClimbAnimation(value) {this.SetProp("ClimbAnimation", DataType.Int64, value);}
    public get DepthScale() {return this.GetProp("DepthScale", DataType.Float32)!;}
    public set DepthScale(value) {this.SetProp("DepthScale", DataType.Float32, value);}
    public get EmotesDataInternal() {return this.GetProp("EmotesDataInternal", DataType.String)!;}
    public set EmotesDataInternal(value) {this.SetProp("EmotesDataInternal", DataType.String, value);}
    public get EquippedEmotesDataInternal() {return this.GetProp("EquippedEmotesDataInternal", DataType.String)!;}
    public set EquippedEmotesDataInternal(value) {this.SetProp("EquippedEmotesDataInternal", DataType.String, value);}
    public get Face() {return this.GetProp("Face", DataType.Int64)!;}
    public set Face(value) {this.SetProp("Face", DataType.Int64, value);}
    public get FallAnimation() {return this.GetProp("FallAnimation", DataType.Int64)!;}
    public set FallAnimation(value) {this.SetProp("FallAnimation", DataType.Int64, value);}
    public get GraphicTShirt() {return this.GetProp("GraphicTShirt", DataType.Int64)!;}
    public set GraphicTShirt(value) {this.SetProp("GraphicTShirt", DataType.Int64, value);}
    public get HeadScale() {return this.GetProp("HeadScale", DataType.Float32)!;}
    public set HeadScale(value) {this.SetProp("HeadScale", DataType.Float32, value);}
    public get HeightScale() {return this.GetProp("HeightScale", DataType.Float32)!;}
    public set HeightScale(value) {this.SetProp("HeightScale", DataType.Float32, value);}
    public get IdleAnimation() {return this.GetProp("IdleAnimation", DataType.Int64)!;}
    public set IdleAnimation(value) {this.SetProp("IdleAnimation", DataType.Int64, value);}
    public get JumpAnimation() {return this.GetProp("JumpAnimation", DataType.Int64)!;}
    public set JumpAnimation(value) {this.SetProp("JumpAnimation", DataType.Int64, value);}
    public get MoodAnimation() {return this.GetProp("MoodAnimation", DataType.Int64)!;}
    public set MoodAnimation(value) {this.SetProp("MoodAnimation", DataType.Int64, value);}
    public get Pants() {return this.GetProp("Pants", DataType.Int64)!;}
    public set Pants(value) {this.SetProp("Pants", DataType.Int64, value);}
    public get ProportionScale() {return this.GetProp("ProportionScale", DataType.Float32)!;}
    public set ProportionScale(value) {this.SetProp("ProportionScale", DataType.Float32, value);}
    public get RunAnimation() {return this.GetProp("RunAnimation", DataType.Int64)!;}
    public set RunAnimation(value) {this.SetProp("RunAnimation", DataType.Int64, value);}
    public get Shirt() {return this.GetProp("Shirt", DataType.Int64)!;}
    public set Shirt(value) {this.SetProp("Shirt", DataType.Int64, value);}
    public get SwimAnimation() {return this.GetProp("SwimAnimation", DataType.Int64)!;}
    public set SwimAnimation(value) {this.SetProp("SwimAnimation", DataType.Int64, value);}
    public get WalkAnimation() {return this.GetProp("WalkAnimation", DataType.Int64)!;}
    public set WalkAnimation(value) {this.SetProp("WalkAnimation", DataType.Int64, value);}
    public get WidthScale() {return this.GetProp("WidthScale", DataType.Float32)!;}
    public set WidthScale(value) {this.SetProp("WidthScale", DataType.Float32, value);}
}

export class HumanoidRigDescription extends Instance {
    public constructor()
    {
        super();
        this.addClassName("HumanoidRigDescription");
        this.Name = "HumanoidRigDescription";
        this.ChestRangeMax = new Vector3(0, 0, 0);
        this.ChestRangeMin = new Vector3(0, 0, 0);
        this.ChestSize = 0;
        this.HeadRangeMax = new Vector3(0, 0, 0);
        this.HeadRangeMin = new Vector3(0, 0, 0);
        this.HeadSize = 0;
        this.LeftAnkleRangeMax = new Vector3(0, 0, 0);
        this.LeftAnkleRangeMin = new Vector3(0, 0, 0);
        this.LeftAnkleSize = 0;
        this.LeftClavicleRangeMax = new Vector3(0, 0, 0);
        this.LeftClavicleRangeMin = new Vector3(0, 0, 0);
        this.LeftClavicleSize = 0;
        this.LeftElbowRangeMax = new Vector3(0, 0, 0);
        this.LeftElbowRangeMin = new Vector3(0, 0, 0);
        this.LeftElbowSize = 0;
        this.LeftHipRangeMax = new Vector3(0, 0, 0);
        this.LeftHipRangeMin = new Vector3(0, 0, 0);
        this.LeftHipSize = 0;
        this.LeftKneeRangeMax = new Vector3(0, 0, 0);
        this.LeftKneeRangeMin = new Vector3(0, 0, 0);
        this.LeftKneeSize = 0;
        this.LeftShoulderRangeMax = new Vector3(0, 0, 0);
        this.LeftShoulderRangeMin = new Vector3(0, 0, 0);
        this.LeftShoulderSize = 0;
        this.LeftToesRangeMax = new Vector3(0, 0, 0);
        this.LeftToesRangeMin = new Vector3(0, 0, 0);
        this.LeftToesSize = 0;
        this.LeftWristRangeMax = new Vector3(0, 0, 0);
        this.LeftWristRangeMin = new Vector3(0, 0, 0);
        this.LeftWristSize = 0;
        this.NeckRangeMax = new Vector3(0, 0, 0);
        this.NeckRangeMin = new Vector3(0, 0, 0);
        this.NeckSize = 0;
        this.PelvisRangeMax = new Vector3(0, 0, 0);
        this.PelvisRangeMin = new Vector3(0, 0, 0);
        this.PelvisSize = 0;
        this.RightAnkleRangeMax = new Vector3(0, 0, 0);
        this.RightAnkleRangeMin = new Vector3(0, 0, 0);
        this.RightAnkleSize = 0;
        this.RightClavicleRangeMax = new Vector3(0, 0, 0);
        this.RightClavicleRangeMin = new Vector3(0, 0, 0);
        this.RightClavicleSize = 0;
        this.RightElbowRangeMax = new Vector3(0, 0, 0);
        this.RightElbowRangeMin = new Vector3(0, 0, 0);
        this.RightElbowSize = 0;
        this.RightHipRangeMax = new Vector3(0, 0, 0);
        this.RightHipRangeMin = new Vector3(0, 0, 0);
        this.RightHipSize = 0;
        this.RightKneeRangeMax = new Vector3(0, 0, 0);
        this.RightKneeRangeMin = new Vector3(0, 0, 0);
        this.RightKneeSize = 0;
        this.RightShoulderRangeMax = new Vector3(0, 0, 0);
        this.RightShoulderRangeMin = new Vector3(0, 0, 0);
        this.RightShoulderSize = 0;
        this.RightToesRangeMax = new Vector3(0, 0, 0);
        this.RightToesRangeMin = new Vector3(0, 0, 0);
        this.RightToesSize = 0;
        this.RightWristRangeMax = new Vector3(0, 0, 0);
        this.RightWristRangeMin = new Vector3(0, 0, 0);
        this.RightWristSize = 0;
        this.RootRangeMax = new Vector3(0, 0, 0);
        this.RootRangeMin = new Vector3(0, 0, 0);
        this.RootSize = 0;
        this.WaistRangeMax = new Vector3(0, 0, 0);
        this.WaistRangeMin = new Vector3(0, 0, 0);
        this.WaistSize = 0;
    }
    public get Chest() {return this.GetProp("Chest", DataType.Referent) as Instance | undefined;}
    public set Chest(value) {this.SetProp("Chest", DataType.Referent, value);}
    public get ChestRangeMax() {return this.GetProp("ChestRangeMax", DataType.Vector3)!;}
    public set ChestRangeMax(value) {this.SetProp("ChestRangeMax", DataType.Vector3, value);}
    public get ChestRangeMin() {return this.GetProp("ChestRangeMin", DataType.Vector3)!;}
    public set ChestRangeMin(value) {this.SetProp("ChestRangeMin", DataType.Vector3, value);}
    public get ChestSize() {return this.GetProp("ChestSize", DataType.Float32)!;}
    public set ChestSize(value) {this.SetProp("ChestSize", DataType.Float32, value);}
    public get ChestTposeAdjustment() {return this.GetProp("ChestTposeAdjustment", DataType.CFrame);}
    public set ChestTposeAdjustment(value) {this.SetProp("ChestTposeAdjustment", DataType.CFrame, value);}
    public get Head() {return this.GetProp("Head", DataType.Referent) as Instance | undefined;}
    public set Head(value) {this.SetProp("Head", DataType.Referent, value);}
    public get HeadRangeMax() {return this.GetProp("HeadRangeMax", DataType.Vector3)!;}
    public set HeadRangeMax(value) {this.SetProp("HeadRangeMax", DataType.Vector3, value);}
    public get HeadRangeMin() {return this.GetProp("HeadRangeMin", DataType.Vector3)!;}
    public set HeadRangeMin(value) {this.SetProp("HeadRangeMin", DataType.Vector3, value);}
    public get HeadSize() {return this.GetProp("HeadSize", DataType.Float32)!;}
    public set HeadSize(value) {this.SetProp("HeadSize", DataType.Float32, value);}
    public get HeadTposeAdjustment() {return this.GetProp("HeadTposeAdjustment", DataType.CFrame);}
    public set HeadTposeAdjustment(value) {this.SetProp("HeadTposeAdjustment", DataType.CFrame, value);}
    public get LeftAnkle() {return this.GetProp("LeftAnkle", DataType.Referent) as Instance | undefined;}
    public set LeftAnkle(value) {this.SetProp("LeftAnkle", DataType.Referent, value);}
    public get LeftAnkleRangeMax() {return this.GetProp("LeftAnkleRangeMax", DataType.Vector3)!;}
    public set LeftAnkleRangeMax(value) {this.SetProp("LeftAnkleRangeMax", DataType.Vector3, value);}
    public get LeftAnkleRangeMin() {return this.GetProp("LeftAnkleRangeMin", DataType.Vector3)!;}
    public set LeftAnkleRangeMin(value) {this.SetProp("LeftAnkleRangeMin", DataType.Vector3, value);}
    public get LeftAnkleSize() {return this.GetProp("LeftAnkleSize", DataType.Float32)!;}
    public set LeftAnkleSize(value) {this.SetProp("LeftAnkleSize", DataType.Float32, value);}
    public get LeftAnkleTposeAdjustment() {return this.GetProp("LeftAnkleTposeAdjustment", DataType.CFrame);}
    public set LeftAnkleTposeAdjustment(value) {this.SetProp("LeftAnkleTposeAdjustment", DataType.CFrame, value);}
    public get LeftClavicle() {return this.GetProp("LeftClavicle", DataType.Referent) as Instance | undefined;}
    public set LeftClavicle(value) {this.SetProp("LeftClavicle", DataType.Referent, value);}
    public get LeftClavicleRangeMax() {return this.GetProp("LeftClavicleRangeMax", DataType.Vector3)!;}
    public set LeftClavicleRangeMax(value) {this.SetProp("LeftClavicleRangeMax", DataType.Vector3, value);}
    public get LeftClavicleRangeMin() {return this.GetProp("LeftClavicleRangeMin", DataType.Vector3)!;}
    public set LeftClavicleRangeMin(value) {this.SetProp("LeftClavicleRangeMin", DataType.Vector3, value);}
    public get LeftClavicleSize() {return this.GetProp("LeftClavicleSize", DataType.Float32)!;}
    public set LeftClavicleSize(value) {this.SetProp("LeftClavicleSize", DataType.Float32, value);}
    public get LeftClavicleTposeAdjustment() {return this.GetProp("LeftClavicleTposeAdjustment", DataType.CFrame);}
    public set LeftClavicleTposeAdjustment(value) {this.SetProp("LeftClavicleTposeAdjustment", DataType.CFrame, value);}
    public get LeftElbow() {return this.GetProp("LeftElbow", DataType.Referent) as Instance | undefined;}
    public set LeftElbow(value) {this.SetProp("LeftElbow", DataType.Referent, value);}
    public get LeftElbowRangeMax() {return this.GetProp("LeftElbowRangeMax", DataType.Vector3)!;}
    public set LeftElbowRangeMax(value) {this.SetProp("LeftElbowRangeMax", DataType.Vector3, value);}
    public get LeftElbowRangeMin() {return this.GetProp("LeftElbowRangeMin", DataType.Vector3)!;}
    public set LeftElbowRangeMin(value) {this.SetProp("LeftElbowRangeMin", DataType.Vector3, value);}
    public get LeftElbowSize() {return this.GetProp("LeftElbowSize", DataType.Float32)!;}
    public set LeftElbowSize(value) {this.SetProp("LeftElbowSize", DataType.Float32, value);}
    public get LeftElbowTposeAdjustment() {return this.GetProp("LeftElbowTposeAdjustment", DataType.CFrame);}
    public set LeftElbowTposeAdjustment(value) {this.SetProp("LeftElbowTposeAdjustment", DataType.CFrame, value);}
    public get LeftHip() {return this.GetProp("LeftHip", DataType.Referent) as Instance | undefined;}
    public set LeftHip(value) {this.SetProp("LeftHip", DataType.Referent, value);}
    public get LeftHipRangeMax() {return this.GetProp("LeftHipRangeMax", DataType.Vector3)!;}
    public set LeftHipRangeMax(value) {this.SetProp("LeftHipRangeMax", DataType.Vector3, value);}
    public get LeftHipRangeMin() {return this.GetProp("LeftHipRangeMin", DataType.Vector3)!;}
    public set LeftHipRangeMin(value) {this.SetProp("LeftHipRangeMin", DataType.Vector3, value);}
    public get LeftHipSize() {return this.GetProp("LeftHipSize", DataType.Float32)!;}
    public set LeftHipSize(value) {this.SetProp("LeftHipSize", DataType.Float32, value);}
    public get LeftHipTposeAdjustment() {return this.GetProp("LeftHipTposeAdjustment", DataType.CFrame);}
    public set LeftHipTposeAdjustment(value) {this.SetProp("LeftHipTposeAdjustment", DataType.CFrame, value);}
    public get LeftKnee() {return this.GetProp("LeftKnee", DataType.Referent) as Instance | undefined;}
    public set LeftKnee(value) {this.SetProp("LeftKnee", DataType.Referent, value);}
    public get LeftKneeRangeMax() {return this.GetProp("LeftKneeRangeMax", DataType.Vector3)!;}
    public set LeftKneeRangeMax(value) {this.SetProp("LeftKneeRangeMax", DataType.Vector3, value);}
    public get LeftKneeRangeMin() {return this.GetProp("LeftKneeRangeMin", DataType.Vector3)!;}
    public set LeftKneeRangeMin(value) {this.SetProp("LeftKneeRangeMin", DataType.Vector3, value);}
    public get LeftKneeSize() {return this.GetProp("LeftKneeSize", DataType.Float32)!;}
    public set LeftKneeSize(value) {this.SetProp("LeftKneeSize", DataType.Float32, value);}
    public get LeftKneeTposeAdjustment() {return this.GetProp("LeftKneeTposeAdjustment", DataType.CFrame);}
    public set LeftKneeTposeAdjustment(value) {this.SetProp("LeftKneeTposeAdjustment", DataType.CFrame, value);}
    public get LeftShoulder() {return this.GetProp("LeftShoulder", DataType.Referent) as Instance | undefined;}
    public set LeftShoulder(value) {this.SetProp("LeftShoulder", DataType.Referent, value);}
    public get LeftShoulderRangeMax() {return this.GetProp("LeftShoulderRangeMax", DataType.Vector3)!;}
    public set LeftShoulderRangeMax(value) {this.SetProp("LeftShoulderRangeMax", DataType.Vector3, value);}
    public get LeftShoulderRangeMin() {return this.GetProp("LeftShoulderRangeMin", DataType.Vector3)!;}
    public set LeftShoulderRangeMin(value) {this.SetProp("LeftShoulderRangeMin", DataType.Vector3, value);}
    public get LeftShoulderSize() {return this.GetProp("LeftShoulderSize", DataType.Float32)!;}
    public set LeftShoulderSize(value) {this.SetProp("LeftShoulderSize", DataType.Float32, value);}
    public get LeftShoulderTposeAdjustment() {return this.GetProp("LeftShoulderTposeAdjustment", DataType.CFrame);}
    public set LeftShoulderTposeAdjustment(value) {this.SetProp("LeftShoulderTposeAdjustment", DataType.CFrame, value);}
    public get LeftToes() {return this.GetProp("LeftToes", DataType.Referent) as Instance | undefined;}
    public set LeftToes(value) {this.SetProp("LeftToes", DataType.Referent, value);}
    public get LeftToesRangeMax() {return this.GetProp("LeftToesRangeMax", DataType.Vector3)!;}
    public set LeftToesRangeMax(value) {this.SetProp("LeftToesRangeMax", DataType.Vector3, value);}
    public get LeftToesRangeMin() {return this.GetProp("LeftToesRangeMin", DataType.Vector3)!;}
    public set LeftToesRangeMin(value) {this.SetProp("LeftToesRangeMin", DataType.Vector3, value);}
    public get LeftToesSize() {return this.GetProp("LeftToesSize", DataType.Float32)!;}
    public set LeftToesSize(value) {this.SetProp("LeftToesSize", DataType.Float32, value);}
    public get LeftToesTposeAdjustment() {return this.GetProp("LeftToesTposeAdjustment", DataType.CFrame);}
    public set LeftToesTposeAdjustment(value) {this.SetProp("LeftToesTposeAdjustment", DataType.CFrame, value);}
    public get LeftWrist() {return this.GetProp("LeftWrist", DataType.Referent) as Instance | undefined;}
    public set LeftWrist(value) {this.SetProp("LeftWrist", DataType.Referent, value);}
    public get LeftWristRangeMax() {return this.GetProp("LeftWristRangeMax", DataType.Vector3)!;}
    public set LeftWristRangeMax(value) {this.SetProp("LeftWristRangeMax", DataType.Vector3, value);}
    public get LeftWristRangeMin() {return this.GetProp("LeftWristRangeMin", DataType.Vector3)!;}
    public set LeftWristRangeMin(value) {this.SetProp("LeftWristRangeMin", DataType.Vector3, value);}
    public get LeftWristSize() {return this.GetProp("LeftWristSize", DataType.Float32)!;}
    public set LeftWristSize(value) {this.SetProp("LeftWristSize", DataType.Float32, value);}
    public get LeftWristTposeAdjustment() {return this.GetProp("LeftWristTposeAdjustment", DataType.CFrame);}
    public set LeftWristTposeAdjustment(value) {this.SetProp("LeftWristTposeAdjustment", DataType.CFrame, value);}
    public get Neck() {return this.GetProp("Neck", DataType.Referent) as Instance | undefined;}
    public set Neck(value) {this.SetProp("Neck", DataType.Referent, value);}
    public get NeckRangeMax() {return this.GetProp("NeckRangeMax", DataType.Vector3)!;}
    public set NeckRangeMax(value) {this.SetProp("NeckRangeMax", DataType.Vector3, value);}
    public get NeckRangeMin() {return this.GetProp("NeckRangeMin", DataType.Vector3)!;}
    public set NeckRangeMin(value) {this.SetProp("NeckRangeMin", DataType.Vector3, value);}
    public get NeckSize() {return this.GetProp("NeckSize", DataType.Float32)!;}
    public set NeckSize(value) {this.SetProp("NeckSize", DataType.Float32, value);}
    public get NeckTposeAdjustment() {return this.GetProp("NeckTposeAdjustment", DataType.CFrame);}
    public set NeckTposeAdjustment(value) {this.SetProp("NeckTposeAdjustment", DataType.CFrame, value);}
    public get Pelvis() {return this.GetProp("Pelvis", DataType.Referent) as Instance | undefined;}
    public set Pelvis(value) {this.SetProp("Pelvis", DataType.Referent, value);}
    public get PelvisRangeMax() {return this.GetProp("PelvisRangeMax", DataType.Vector3)!;}
    public set PelvisRangeMax(value) {this.SetProp("PelvisRangeMax", DataType.Vector3, value);}
    public get PelvisRangeMin() {return this.GetProp("PelvisRangeMin", DataType.Vector3)!;}
    public set PelvisRangeMin(value) {this.SetProp("PelvisRangeMin", DataType.Vector3, value);}
    public get PelvisSize() {return this.GetProp("PelvisSize", DataType.Float32)!;}
    public set PelvisSize(value) {this.SetProp("PelvisSize", DataType.Float32, value);}
    public get PelvisTposeAdjustment() {return this.GetProp("PelvisTposeAdjustment", DataType.CFrame);}
    public set PelvisTposeAdjustment(value) {this.SetProp("PelvisTposeAdjustment", DataType.CFrame, value);}
    public get RightAnkle() {return this.GetProp("RightAnkle", DataType.Referent) as Instance | undefined;}
    public set RightAnkle(value) {this.SetProp("RightAnkle", DataType.Referent, value);}
    public get RightAnkleRangeMax() {return this.GetProp("RightAnkleRangeMax", DataType.Vector3)!;}
    public set RightAnkleRangeMax(value) {this.SetProp("RightAnkleRangeMax", DataType.Vector3, value);}
    public get RightAnkleRangeMin() {return this.GetProp("RightAnkleRangeMin", DataType.Vector3)!;}
    public set RightAnkleRangeMin(value) {this.SetProp("RightAnkleRangeMin", DataType.Vector3, value);}
    public get RightAnkleSize() {return this.GetProp("RightAnkleSize", DataType.Float32)!;}
    public set RightAnkleSize(value) {this.SetProp("RightAnkleSize", DataType.Float32, value);}
    public get RightAnkleTposeAdjustment() {return this.GetProp("RightAnkleTposeAdjustment", DataType.CFrame);}
    public set RightAnkleTposeAdjustment(value) {this.SetProp("RightAnkleTposeAdjustment", DataType.CFrame, value);}
    public get RightClavicle() {return this.GetProp("RightClavicle", DataType.Referent) as Instance | undefined;}
    public set RightClavicle(value) {this.SetProp("RightClavicle", DataType.Referent, value);}
    public get RightClavicleRangeMax() {return this.GetProp("RightClavicleRangeMax", DataType.Vector3)!;}
    public set RightClavicleRangeMax(value) {this.SetProp("RightClavicleRangeMax", DataType.Vector3, value);}
    public get RightClavicleRangeMin() {return this.GetProp("RightClavicleRangeMin", DataType.Vector3)!;}
    public set RightClavicleRangeMin(value) {this.SetProp("RightClavicleRangeMin", DataType.Vector3, value);}
    public get RightClavicleSize() {return this.GetProp("RightClavicleSize", DataType.Float32)!;}
    public set RightClavicleSize(value) {this.SetProp("RightClavicleSize", DataType.Float32, value);}
    public get RightClavicleTposeAdjustment() {return this.GetProp("RightClavicleTposeAdjustment", DataType.CFrame);}
    public set RightClavicleTposeAdjustment(value) {this.SetProp("RightClavicleTposeAdjustment", DataType.CFrame, value);}
    public get RightElbow() {return this.GetProp("RightElbow", DataType.Referent) as Instance | undefined;}
    public set RightElbow(value) {this.SetProp("RightElbow", DataType.Referent, value);}
    public get RightElbowRangeMax() {return this.GetProp("RightElbowRangeMax", DataType.Vector3)!;}
    public set RightElbowRangeMax(value) {this.SetProp("RightElbowRangeMax", DataType.Vector3, value);}
    public get RightElbowRangeMin() {return this.GetProp("RightElbowRangeMin", DataType.Vector3)!;}
    public set RightElbowRangeMin(value) {this.SetProp("RightElbowRangeMin", DataType.Vector3, value);}
    public get RightElbowSize() {return this.GetProp("RightElbowSize", DataType.Float32)!;}
    public set RightElbowSize(value) {this.SetProp("RightElbowSize", DataType.Float32, value);}
    public get RightElbowTposeAdjustment() {return this.GetProp("RightElbowTposeAdjustment", DataType.CFrame);}
    public set RightElbowTposeAdjustment(value) {this.SetProp("RightElbowTposeAdjustment", DataType.CFrame, value);}
    public get RightHip() {return this.GetProp("RightHip", DataType.Referent) as Instance | undefined;}
    public set RightHip(value) {this.SetProp("RightHip", DataType.Referent, value);}
    public get RightHipRangeMax() {return this.GetProp("RightHipRangeMax", DataType.Vector3)!;}
    public set RightHipRangeMax(value) {this.SetProp("RightHipRangeMax", DataType.Vector3, value);}
    public get RightHipRangeMin() {return this.GetProp("RightHipRangeMin", DataType.Vector3)!;}
    public set RightHipRangeMin(value) {this.SetProp("RightHipRangeMin", DataType.Vector3, value);}
    public get RightHipSize() {return this.GetProp("RightHipSize", DataType.Float32)!;}
    public set RightHipSize(value) {this.SetProp("RightHipSize", DataType.Float32, value);}
    public get RightHipTposeAdjustment() {return this.GetProp("RightHipTposeAdjustment", DataType.CFrame);}
    public set RightHipTposeAdjustment(value) {this.SetProp("RightHipTposeAdjustment", DataType.CFrame, value);}
    public get RightKnee() {return this.GetProp("RightKnee", DataType.Referent) as Instance | undefined;}
    public set RightKnee(value) {this.SetProp("RightKnee", DataType.Referent, value);}
    public get RightKneeRangeMax() {return this.GetProp("RightKneeRangeMax", DataType.Vector3)!;}
    public set RightKneeRangeMax(value) {this.SetProp("RightKneeRangeMax", DataType.Vector3, value);}
    public get RightKneeRangeMin() {return this.GetProp("RightKneeRangeMin", DataType.Vector3)!;}
    public set RightKneeRangeMin(value) {this.SetProp("RightKneeRangeMin", DataType.Vector3, value);}
    public get RightKneeSize() {return this.GetProp("RightKneeSize", DataType.Float32)!;}
    public set RightKneeSize(value) {this.SetProp("RightKneeSize", DataType.Float32, value);}
    public get RightKneeTposeAdjustment() {return this.GetProp("RightKneeTposeAdjustment", DataType.CFrame);}
    public set RightKneeTposeAdjustment(value) {this.SetProp("RightKneeTposeAdjustment", DataType.CFrame, value);}
    public get RightShoulder() {return this.GetProp("RightShoulder", DataType.Referent) as Instance | undefined;}
    public set RightShoulder(value) {this.SetProp("RightShoulder", DataType.Referent, value);}
    public get RightShoulderRangeMax() {return this.GetProp("RightShoulderRangeMax", DataType.Vector3)!;}
    public set RightShoulderRangeMax(value) {this.SetProp("RightShoulderRangeMax", DataType.Vector3, value);}
    public get RightShoulderRangeMin() {return this.GetProp("RightShoulderRangeMin", DataType.Vector3)!;}
    public set RightShoulderRangeMin(value) {this.SetProp("RightShoulderRangeMin", DataType.Vector3, value);}
    public get RightShoulderSize() {return this.GetProp("RightShoulderSize", DataType.Float32)!;}
    public set RightShoulderSize(value) {this.SetProp("RightShoulderSize", DataType.Float32, value);}
    public get RightShoulderTposeAdjustment() {return this.GetProp("RightShoulderTposeAdjustment", DataType.CFrame);}
    public set RightShoulderTposeAdjustment(value) {this.SetProp("RightShoulderTposeAdjustment", DataType.CFrame, value);}
    public get RightToes() {return this.GetProp("RightToes", DataType.Referent) as Instance | undefined;}
    public set RightToes(value) {this.SetProp("RightToes", DataType.Referent, value);}
    public get RightToesRangeMax() {return this.GetProp("RightToesRangeMax", DataType.Vector3)!;}
    public set RightToesRangeMax(value) {this.SetProp("RightToesRangeMax", DataType.Vector3, value);}
    public get RightToesRangeMin() {return this.GetProp("RightToesRangeMin", DataType.Vector3)!;}
    public set RightToesRangeMin(value) {this.SetProp("RightToesRangeMin", DataType.Vector3, value);}
    public get RightToesSize() {return this.GetProp("RightToesSize", DataType.Float32)!;}
    public set RightToesSize(value) {this.SetProp("RightToesSize", DataType.Float32, value);}
    public get RightToesTposeAdjustment() {return this.GetProp("RightToesTposeAdjustment", DataType.CFrame);}
    public set RightToesTposeAdjustment(value) {this.SetProp("RightToesTposeAdjustment", DataType.CFrame, value);}
    public get RightWrist() {return this.GetProp("RightWrist", DataType.Referent) as Instance | undefined;}
    public set RightWrist(value) {this.SetProp("RightWrist", DataType.Referent, value);}
    public get RightWristRangeMax() {return this.GetProp("RightWristRangeMax", DataType.Vector3)!;}
    public set RightWristRangeMax(value) {this.SetProp("RightWristRangeMax", DataType.Vector3, value);}
    public get RightWristRangeMin() {return this.GetProp("RightWristRangeMin", DataType.Vector3)!;}
    public set RightWristRangeMin(value) {this.SetProp("RightWristRangeMin", DataType.Vector3, value);}
    public get RightWristSize() {return this.GetProp("RightWristSize", DataType.Float32)!;}
    public set RightWristSize(value) {this.SetProp("RightWristSize", DataType.Float32, value);}
    public get RightWristTposeAdjustment() {return this.GetProp("RightWristTposeAdjustment", DataType.CFrame);}
    public set RightWristTposeAdjustment(value) {this.SetProp("RightWristTposeAdjustment", DataType.CFrame, value);}
    public get Root() {return this.GetProp("Root", DataType.Referent) as Instance | undefined;}
    public set Root(value) {this.SetProp("Root", DataType.Referent, value);}
    public get RootRangeMax() {return this.GetProp("RootRangeMax", DataType.Vector3)!;}
    public set RootRangeMax(value) {this.SetProp("RootRangeMax", DataType.Vector3, value);}
    public get RootRangeMin() {return this.GetProp("RootRangeMin", DataType.Vector3)!;}
    public set RootRangeMin(value) {this.SetProp("RootRangeMin", DataType.Vector3, value);}
    public get RootSize() {return this.GetProp("RootSize", DataType.Float32)!;}
    public set RootSize(value) {this.SetProp("RootSize", DataType.Float32, value);}
    public get RootTposeAdjustment() {return this.GetProp("RootTposeAdjustment", DataType.CFrame);}
    public set RootTposeAdjustment(value) {this.SetProp("RootTposeAdjustment", DataType.CFrame, value);}
    public get Waist() {return this.GetProp("Waist", DataType.Referent) as Instance | undefined;}
    public set Waist(value) {this.SetProp("Waist", DataType.Referent, value);}
    public get WaistRangeMax() {return this.GetProp("WaistRangeMax", DataType.Vector3)!;}
    public set WaistRangeMax(value) {this.SetProp("WaistRangeMax", DataType.Vector3, value);}
    public get WaistRangeMin() {return this.GetProp("WaistRangeMin", DataType.Vector3)!;}
    public set WaistRangeMin(value) {this.SetProp("WaistRangeMin", DataType.Vector3, value);}
    public get WaistSize() {return this.GetProp("WaistSize", DataType.Float32)!;}
    public set WaistSize(value) {this.SetProp("WaistSize", DataType.Float32, value);}
    public get WaistTposeAdjustment() {return this.GetProp("WaistTposeAdjustment", DataType.CFrame);}
    public set WaistTposeAdjustment(value) {this.SetProp("WaistTposeAdjustment", DataType.CFrame, value);}
}

export class IKControl extends Instance {
    public constructor()
    {
        super();
        this.addClassName("IKControl");
        this.Name = "IKControl";
        this.Enabled = true;
        this.Priority = 0;
        this.SmoothTime = 0.05;
        this.Type = IKControlType.Transform;
        this.Weight = 1;
        this.EndEffectorOffset = CFrame.Identity;
        this.Offset = CFrame.Identity;
    }
    public get ChainRoot() {return this.GetProp("ChainRoot", DataType.Referent) as Instance | undefined;}
    public set ChainRoot(value) {this.SetProp("ChainRoot", DataType.Referent, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get EndEffector() {return this.GetProp("EndEffector", DataType.Referent) as Instance | undefined;}
    public set EndEffector(value) {this.SetProp("EndEffector", DataType.Referent, value);}
    public get EndEffectorOffset() {return this.GetProp("EndEffectorOffset", DataType.CFrame)!;}
    public set EndEffectorOffset(value) {this.SetProp("EndEffectorOffset", DataType.CFrame, value);}
    public get Offset() {return this.GetProp("Offset", DataType.CFrame)!;}
    public set Offset(value) {this.SetProp("Offset", DataType.CFrame, value);}
    public get Pole() {return this.GetProp("Pole", DataType.Referent) as Instance | undefined;}
    public set Pole(value) {this.SetProp("Pole", DataType.Referent, value);}
    public get Priority() {return this.GetProp("Priority", DataType.Int32)!;}
    public set Priority(value) {this.SetProp("Priority", DataType.Int32, value);}
    public get SmoothTime() {return this.GetProp("SmoothTime", DataType.Float32)!;}
    public set SmoothTime(value) {this.SetProp("SmoothTime", DataType.Float32, value);}
    public get Target() {return this.GetProp("Target", DataType.Referent) as Instance | undefined;}
    public set Target(value) {this.SetProp("Target", DataType.Referent, value);}
    public get Type() {return this.GetProp("Type", DataType.Enum)! as IKControlType;}
    public set Type(value) {this.SetProp("Type", DataType.Enum, value);}
    public get Weight() {return this.GetProp("Weight", DataType.Float32)!;}
    public set Weight(value) {this.SetProp("Weight", DataType.Float32, value);}
}

export abstract class ILegacyStudioBridge extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ILegacyStudioBridge");
    }
}

export class LegacyStudioBridge extends ILegacyStudioBridge {
    public constructor()
    {
        super();
        this.addClassName("LegacyStudioBridge");
        this.Name = "LegacyStudioBridge";
    }
}

export class IXPService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("IXPService");
        this.Name = "IXPService";
    }
}

export class IncrementalPatchBuilder extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("IncrementalPatchBuilder");
        this.Name = "IncrementalPatchBuilder";
        this.AddPathsToBundle = false;
        this.BuildDebouncePeriod = 0.1;
        this.HighCompression = false;
        this.SerializePatch = true;
        this.ZstdCompression = false;
    }
    public get AddPathsToBundle() {return this.GetProp("AddPathsToBundle", DataType.Bool)!;}
    public set AddPathsToBundle(value) {this.SetProp("AddPathsToBundle", DataType.Bool, value);}
    public get BuildDebouncePeriod() {return this.GetProp("BuildDebouncePeriod", DataType.Float64)!;}
    public set BuildDebouncePeriod(value) {this.SetProp("BuildDebouncePeriod", DataType.Float64, value);}
    public get HighCompression() {return this.GetProp("HighCompression", DataType.Bool)!;}
    public set HighCompression(value) {this.SetProp("HighCompression", DataType.Bool, value);}
    public get SerializePatch() {return this.GetProp("SerializePatch", DataType.Bool)!;}
    public set SerializePatch(value) {this.SetProp("SerializePatch", DataType.Bool, value);}
    public get ZstdCompression() {return this.GetProp("ZstdCompression", DataType.Bool)!;}
    public set ZstdCompression(value) {this.SetProp("ZstdCompression", DataType.Bool, value);}
}

export class InputAction extends Instance {
    public constructor()
    {
        super();
        this.addClassName("InputAction");
        this.Name = "InputAction";
        this.Enabled = true;
        this.Type = InputActionType.Bool;
    }
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get Type() {return this.GetProp("Type", DataType.Enum)! as InputActionType;}
    public set Type(value) {this.SetProp("Type", DataType.Enum, value);}
}

export class InputBinding extends Instance {
    public constructor()
    {
        super();
        this.addClassName("InputBinding");
        this.Name = "InputBinding";
        this.Down = KeyCode.Unknown;
        this.KeyCode = KeyCode.Unknown;
        this.Left = KeyCode.Unknown;
        this.PressedThreshold = 0.5;
        this.ReleasedThreshold = 0.2;
        this.Right = KeyCode.Unknown;
        this.Scale = 1;
        this.Up = KeyCode.Unknown;
        this.Vector2Scale = new Vector2(1, 1);
    }
    public get Down() {return this.GetProp("Down", DataType.Enum)! as KeyCode;}
    public set Down(value) {this.SetProp("Down", DataType.Enum, value);}
    public get KeyCode() {return this.GetProp("KeyCode", DataType.Enum)! as KeyCode;}
    public set KeyCode(value) {this.SetProp("KeyCode", DataType.Enum, value);}
    public get Left() {return this.GetProp("Left", DataType.Enum)! as KeyCode;}
    public set Left(value) {this.SetProp("Left", DataType.Enum, value);}
    public get PressedThreshold() {return this.GetProp("PressedThreshold", DataType.Float32)!;}
    public set PressedThreshold(value) {this.SetProp("PressedThreshold", DataType.Float32, value);}
    public get ReleasedThreshold() {return this.GetProp("ReleasedThreshold", DataType.Float32)!;}
    public set ReleasedThreshold(value) {this.SetProp("ReleasedThreshold", DataType.Float32, value);}
    public get Right() {return this.GetProp("Right", DataType.Enum)! as KeyCode;}
    public set Right(value) {this.SetProp("Right", DataType.Enum, value);}
    public get Scale() {return this.GetProp("Scale", DataType.Float32)!;}
    public set Scale(value) {this.SetProp("Scale", DataType.Float32, value);}
    public get UIButton() {return this.GetProp("UIButton", DataType.Referent) as GuiButton | undefined;}
    public set UIButton(value) {this.SetProp("UIButton", DataType.Referent, value);}
    public get Up() {return this.GetProp("Up", DataType.Enum)! as KeyCode;}
    public set Up(value) {this.SetProp("Up", DataType.Enum, value);}
    public get Vector2Scale() {return this.GetProp("Vector2Scale", DataType.Vector2)!;}
    public set Vector2Scale(value) {this.SetProp("Vector2Scale", DataType.Vector2, value);}
}

export class InputContext extends Instance {
    public constructor()
    {
        super();
        this.addClassName("InputContext");
        this.Name = "InputContext";
        this.Enabled = true;
        this.Priority = 1000;
        this.Sink = false;
    }
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get Priority() {return this.GetProp("Priority", DataType.Int32)!;}
    public set Priority(value) {this.SetProp("Priority", DataType.Int32, value);}
    public get Sink() {return this.GetProp("Sink", DataType.Bool)!;}
    public set Sink(value) {this.SetProp("Sink", DataType.Bool, value);}
}

export class InsertService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("InsertService");
        this.Name = "InsertService";
        this.AllowClientInsertModels = false;
        this.AllowInsertFreeModels = false;
    }
    public get AllowClientInsertModels() {return this.GetProp("AllowClientInsertModels", DataType.Bool)!;}
    public set AllowClientInsertModels(value) {this.SetProp("AllowClientInsertModels", DataType.Bool, value);}
    /**@deprecated Deprecated by Roblox*/
    public get AllowInsertFreeModels() {return this.GetProp("AllowInsertFreeModels", DataType.Bool)!;}
    /**@deprecated Deprecated by Roblox*/
    public set AllowInsertFreeModels(value) {this.SetProp("AllowInsertFreeModels", DataType.Bool, value);}
}

export class InternalSyncItem extends Instance {
    public constructor()
    {
        super();
        this.addClassName("InternalSyncItem");
        this.Name = "InternalSyncItem";
        this.AutoSync = true;
        this.Enabled = false;
        this.Path = "";
    }
    public get AutoSync() {return this.GetProp("AutoSync", DataType.Bool)!;}
    public set AutoSync(value) {this.SetProp("AutoSync", DataType.Bool, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get Path() {return this.GetProp("Path", DataType.String)!;}
    public set Path(value) {this.SetProp("Path", DataType.String, value);}
}

export class InternalSyncService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("InternalSyncService");
        this.Name = "InternalSyncService";
    }
}

export abstract class JointInstance extends Instance {
    public constructor()
    {
        super();
        this.addClassName("JointInstance");
        this.C0 = CFrame.Identity;
        this.C1 = CFrame.Identity;
        this.Enabled = true;
    }
    public get C0() {return this.GetProp("C0", DataType.CFrame)!;}
    public set C0(value) {this.SetProp("C0", DataType.CFrame, value);}
    public get C1() {return this.GetProp("C1", DataType.CFrame)!;}
    public set C1(value) {this.SetProp("C1", DataType.CFrame, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get Part0() {return this.GetProp("Part0", DataType.Referent) as BasePart | undefined;}
    public set Part0(value) {this.SetProp("Part0", DataType.Referent, value);}
    public get Part1() {return this.GetProp("Part1", DataType.Referent) as BasePart | undefined;}
    public set Part1(value) {this.SetProp("Part1", DataType.Referent, value);}
}

export abstract class DynamicRotate extends JointInstance {
    public constructor()
    {
        super();
        this.addClassName("DynamicRotate");
        this.BaseAngle = 0;
    }
    public get BaseAngle() {return this.GetProp("BaseAngle", DataType.Float32)!;}
    public set BaseAngle(value) {this.SetProp("BaseAngle", DataType.Float32, value);}
}

/**@deprecated Deprecated by Roblox*/
export class RotateP extends DynamicRotate {
    public constructor()
    {
        super();
        this.addClassName("RotateP");
        this.Name = "RotateP";
    }
}

/**@deprecated Deprecated by Roblox*/
export class RotateV extends DynamicRotate {
    public constructor()
    {
        super();
        this.addClassName("RotateV");
        this.Name = "RotateV";
    }
}

/**@deprecated Deprecated by Roblox*/
export class Glue extends JointInstance {
    public constructor()
    {
        super();
        this.addClassName("Glue");
        this.Name = "Glue";
        this.F0 = new Vector3(0, 0, 0);
        this.F1 = new Vector3(0, 0, 0);
        this.F2 = new Vector3(0, 0, 0);
        this.F3 = new Vector3(0, 0, 0);
    }
    public get F0() {return this.GetProp("F0", DataType.Vector3)!;}
    public set F0(value) {this.SetProp("F0", DataType.Vector3, value);}
    public get F1() {return this.GetProp("F1", DataType.Vector3)!;}
    public set F1(value) {this.SetProp("F1", DataType.Vector3, value);}
    public get F2() {return this.GetProp("F2", DataType.Vector3)!;}
    public set F2(value) {this.SetProp("F2", DataType.Vector3, value);}
    public get F3() {return this.GetProp("F3", DataType.Vector3)!;}
    public set F3(value) {this.SetProp("F3", DataType.Vector3, value);}
}

/**@deprecated Deprecated by Roblox*/
export abstract class ManualSurfaceJointInstance extends JointInstance {
    public constructor()
    {
        super();
        this.addClassName("ManualSurfaceJointInstance");
    }
}

/**@deprecated Deprecated by Roblox*/
export class ManualGlue extends ManualSurfaceJointInstance {
    public constructor()
    {
        super();
        this.addClassName("ManualGlue");
        this.Name = "ManualGlue";
    }
}

/**@deprecated Deprecated by Roblox*/
export class ManualWeld extends ManualSurfaceJointInstance {
    public constructor()
    {
        super();
        this.addClassName("ManualWeld");
        this.Name = "ManualWeld";
    }
}

export class Motor extends JointInstance {
    public constructor()
    {
        super();
        this.addClassName("Motor");
        this.Name = "Motor";
        this.DesiredAngle = 0;
        this.MaxVelocity = 0;
    }
    public get DesiredAngle() {return this.GetProp("DesiredAngle", DataType.Float32)!;}
    public set DesiredAngle(value) {this.SetProp("DesiredAngle", DataType.Float32, value);}
    public get MaxVelocity() {return this.GetProp("MaxVelocity", DataType.Float32)!;}
    public set MaxVelocity(value) {this.SetProp("MaxVelocity", DataType.Float32, value);}
}

export class Motor6D extends Motor {
    public constructor()
    {
        super();
        this.addClassName("Motor6D");
        this.Name = "Motor6D";
    }
}

/**@deprecated Deprecated by Roblox*/
export class Rotate extends JointInstance {
    public constructor()
    {
        super();
        this.addClassName("Rotate");
        this.Name = "Rotate";
    }
}

/**@deprecated Deprecated by Roblox*/
export class Snap extends JointInstance {
    public constructor()
    {
        super();
        this.addClassName("Snap");
        this.Name = "Snap";
    }
}

export class VelocityMotor extends JointInstance {
    public constructor()
    {
        super();
        this.addClassName("VelocityMotor");
        this.Name = "VelocityMotor";
        this.CurrentAngle = 0;
        this.DesiredAngle = 0;
        this.MaxVelocity = 0;
    }
    public get CurrentAngle() {return this.GetProp("CurrentAngle", DataType.Float32)!;}
    public set CurrentAngle(value) {this.SetProp("CurrentAngle", DataType.Float32, value);}
    public get DesiredAngle() {return this.GetProp("DesiredAngle", DataType.Float32)!;}
    public set DesiredAngle(value) {this.SetProp("DesiredAngle", DataType.Float32, value);}
    public get Hole() {return this.GetProp("Hole", DataType.Referent) as Hole | undefined;}
    public set Hole(value) {this.SetProp("Hole", DataType.Referent, value);}
    public get MaxVelocity() {return this.GetProp("MaxVelocity", DataType.Float32)!;}
    public set MaxVelocity(value) {this.SetProp("MaxVelocity", DataType.Float32, value);}
}

export class Weld extends JointInstance {
    public constructor()
    {
        super();
        this.addClassName("Weld");
        this.Name = "Weld";
    }
}

/**@deprecated Deprecated by Roblox*/
export class JointsService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("JointsService");
        this.Name = "JointsService";
    }
}

export class KeyboardService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("KeyboardService");
        this.Name = "KeyboardService";
    }
}

export class Keyframe extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Keyframe");
        this.Name = "Keyframe";
        this.Time = 0;
    }
    public get Time() {return this.GetProp("Time", DataType.Float32)!;}
    public set Time(value) {this.SetProp("Time", DataType.Float32, value);}
}

export class KeyframeMarker extends Instance {
    public constructor()
    {
        super();
        this.addClassName("KeyframeMarker");
        this.Name = "KeyframeMarker";
        this.Value = "";
    }
    public get Value() {return this.GetProp("Value", DataType.String)!;}
    public set Value(value) {this.SetProp("Value", DataType.String, value);}
}

export class KeyframeSequenceProvider extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("KeyframeSequenceProvider");
        this.Name = "KeyframeSequenceProvider";
    }
}

export class LSPFileSyncService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("LSPFileSyncService");
        this.Name = "LSPFileSyncService";
    }
}

export class LanguageService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("LanguageService");
        this.Name = "LanguageService";
    }
}

export abstract class Light extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Light");
        this.Brightness = 1;
        this.Color = Color3.FromRGB(255, 255, 255);
        this.Enabled = true;
        this.Shadows = false;
    }
    public get Brightness() {return this.GetProp("Brightness", DataType.Float32)!;}
    public set Brightness(value) {this.SetProp("Brightness", DataType.Float32, value);}
    public get Color() {return this.GetProp("Color", DataType.Color3)!;}
    public set Color(value) {this.SetProp("Color", DataType.Color3, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get Shadows() {return this.GetProp("Shadows", DataType.Bool)!;}
    public set Shadows(value) {this.SetProp("Shadows", DataType.Bool, value);}
}

export class PointLight extends Light {
    public constructor()
    {
        super();
        this.addClassName("PointLight");
        this.Name = "PointLight";
        this.Range = 8;
    }
    public get Range() {return this.GetProp("Range", DataType.Float32)!;}
    public set Range(value) {this.SetProp("Range", DataType.Float32, value);}
}

export class SpotLight extends Light {
    public constructor()
    {
        super();
        this.addClassName("SpotLight");
        this.Name = "SpotLight";
        this.Angle = 90;
        this.Face = NormalId.Front;
        this.Range = 16;
    }
    public get Angle() {return this.GetProp("Angle", DataType.Float32)!;}
    public set Angle(value) {this.SetProp("Angle", DataType.Float32, value);}
    public get Face() {return this.GetProp("Face", DataType.Enum)! as NormalId;}
    public set Face(value) {this.SetProp("Face", DataType.Enum, value);}
    public get Range() {return this.GetProp("Range", DataType.Float32)!;}
    public set Range(value) {this.SetProp("Range", DataType.Float32, value);}
}

export class SurfaceLight extends Light {
    public constructor()
    {
        super();
        this.addClassName("SurfaceLight");
        this.Name = "SurfaceLight";
        this.Angle = 90;
        this.Face = NormalId.Front;
        this.Range = 16;
    }
    public get Angle() {return this.GetProp("Angle", DataType.Float32)!;}
    public set Angle(value) {this.SetProp("Angle", DataType.Float32, value);}
    public get Face() {return this.GetProp("Face", DataType.Enum)! as NormalId;}
    public set Face(value) {this.SetProp("Face", DataType.Enum, value);}
    public get Range() {return this.GetProp("Range", DataType.Float32)!;}
    public set Range(value) {this.SetProp("Range", DataType.Float32, value);}
}

export class Lighting extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("Lighting");
        this.Name = "Lighting";
        this.Ambient = Color3.FromRGB(128, 128, 128);
        this.Brightness = 1;
        this.ColorShiftBottom = Color3.FromRGB(0, 0, 0);
        this.ColorShiftTop = Color3.FromRGB(0, 0, 0);
        this.EnvironmentDiffuseScale = 0;
        this.EnvironmentSpecularScale = 0;
        this.ExposureCompensation = 0;
        this.FogColor = Color3.FromRGB(191, 191, 191);
        this.FogEnd = 100000;
        this.FogStart = 0;
        this.GeographicLatitude = 41.7333;
        this.GlobalShadows = false;
        this.LightingStyle = LightingStyle.Realistic;
        this.OutdoorAmbient = Color3.FromRGB(128, 128, 128);
        this.Outlines = true;
        this.PrioritizeLightingQuality = true;
        this.ShadowColor = Color3.FromRGB(179, 179, 184);
        this.ShadowSoftness = 0.5;
        this.Technology = Technology.Compatibility;
        this.TimeOfDay = "14:00:00";
    }
    public get Ambient() {return this.GetProp("Ambient", DataType.Color3)!;}
    public set Ambient(value) {this.SetProp("Ambient", DataType.Color3, value);}
    public get Brightness() {return this.GetProp("Brightness", DataType.Float32)!;}
    public set Brightness(value) {this.SetProp("Brightness", DataType.Float32, value);}
    public get ColorShiftBottom() {return this.GetProp("ColorShift_Bottom", DataType.Color3)!;}
    public set ColorShiftBottom(value) {this.SetProp("ColorShift_Bottom", DataType.Color3, value);}
    public get ColorShiftTop() {return this.GetProp("ColorShift_Top", DataType.Color3)!;}
    public set ColorShiftTop(value) {this.SetProp("ColorShift_Top", DataType.Color3, value);}
    public get EnvironmentDiffuseScale() {return this.GetProp("EnvironmentDiffuseScale", DataType.Float32)!;}
    public set EnvironmentDiffuseScale(value) {this.SetProp("EnvironmentDiffuseScale", DataType.Float32, value);}
    public get EnvironmentSpecularScale() {return this.GetProp("EnvironmentSpecularScale", DataType.Float32)!;}
    public set EnvironmentSpecularScale(value) {this.SetProp("EnvironmentSpecularScale", DataType.Float32, value);}
    public get ExposureCompensation() {return this.GetProp("ExposureCompensation", DataType.Float32)!;}
    public set ExposureCompensation(value) {this.SetProp("ExposureCompensation", DataType.Float32, value);}
    public get FogColor() {return this.GetProp("FogColor", DataType.Color3)!;}
    public set FogColor(value) {this.SetProp("FogColor", DataType.Color3, value);}
    public get FogEnd() {return this.GetProp("FogEnd", DataType.Float32)!;}
    public set FogEnd(value) {this.SetProp("FogEnd", DataType.Float32, value);}
    public get FogStart() {return this.GetProp("FogStart", DataType.Float32)!;}
    public set FogStart(value) {this.SetProp("FogStart", DataType.Float32, value);}
    public get GeographicLatitude() {return this.GetProp("GeographicLatitude", DataType.Float32)!;}
    public set GeographicLatitude(value) {this.SetProp("GeographicLatitude", DataType.Float32, value);}
    public get GlobalShadows() {return this.GetProp("GlobalShadows", DataType.Bool)!;}
    public set GlobalShadows(value) {this.SetProp("GlobalShadows", DataType.Bool, value);}
    public get LightingStyle() {return this.GetProp("LightingStyle", DataType.Enum)! as LightingStyle;}
    public set LightingStyle(value) {this.SetProp("LightingStyle", DataType.Enum, value);}
    public get OutdoorAmbient() {return this.GetProp("OutdoorAmbient", DataType.Color3)!;}
    public set OutdoorAmbient(value) {this.SetProp("OutdoorAmbient", DataType.Color3, value);}
    /**@deprecated Deprecated by Roblox*/
    public get Outlines() {return this.GetProp("Outlines", DataType.Bool)!;}
    /**@deprecated Deprecated by Roblox*/
    public set Outlines(value) {this.SetProp("Outlines", DataType.Bool, value);}
    public get PrioritizeLightingQuality() {return this.GetProp("PrioritizeLightingQuality", DataType.Bool)!;}
    public set PrioritizeLightingQuality(value) {this.SetProp("PrioritizeLightingQuality", DataType.Bool, value);}
    /**@deprecated Deprecated by Roblox*/
    public get ShadowColor() {return this.GetProp("ShadowColor", DataType.Color3)!;}
    /**@deprecated Deprecated by Roblox*/
    public set ShadowColor(value) {this.SetProp("ShadowColor", DataType.Color3, value);}
    public get ShadowSoftness() {return this.GetProp("ShadowSoftness", DataType.Float32)!;}
    public set ShadowSoftness(value) {this.SetProp("ShadowSoftness", DataType.Float32, value);}
    public get Technology() {return this.GetProp("Technology", DataType.Enum)! as Technology;}
    public set Technology(value) {this.SetProp("Technology", DataType.Enum, value);}
    public get TimeOfDay() {return this.GetProp("TimeOfDay", DataType.String)!;}
    public set TimeOfDay(value) {this.SetProp("TimeOfDay", DataType.String, value);}
}

export class LinkingService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("LinkingService");
        this.Name = "LinkingService";
    }
}

export class LiveScriptingService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("LiveScriptingService");
        this.Name = "LiveScriptingService";
    }
}

export class LiveSyncService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("LiveSyncService");
        this.Name = "LiveSyncService";
    }
}

export abstract class LocalStorageService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("LocalStorageService");
    }
}

export class AppStorageService extends LocalStorageService {
    public constructor()
    {
        super();
        this.addClassName("AppStorageService");
        this.Name = "AppStorageService";
    }
}

export class UserStorageService extends LocalStorageService {
    public constructor()
    {
        super();
        this.addClassName("UserStorageService");
        this.Name = "UserStorageService";
    }
}

export class LocalizationService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("LocalizationService");
        this.Name = "LocalizationService";
    }
}

export class LocalizationTable extends Instance {
    public constructor()
    {
        super();
        this.addClassName("LocalizationTable");
        this.Name = "LocalizationTable";
        this.Contents = "[]";
        this.DevelopmentLanguage = "en-us";
        this.SourceLocaleId = "en-us";
    }
    public get Contents() {return this.GetProp("Contents", DataType.String)!;}
    public set Contents(value) {this.SetProp("Contents", DataType.String, value);}
    /**@deprecated Deprecated by Roblox*/
    public get DevelopmentLanguage() {return this.GetProp("DevelopmentLanguage", DataType.String)!;}
    /**@deprecated Deprecated by Roblox*/
    public set DevelopmentLanguage(value) {this.SetProp("DevelopmentLanguage", DataType.String, value);}
    public get SourceLocaleId() {return this.GetProp("SourceLocaleId", DataType.String)!;}
    public set SourceLocaleId(value) {this.SetProp("SourceLocaleId", DataType.String, value);}
}

export class LodDataService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("LodDataService");
        this.Name = "LodDataService";
    }
}

export class LogReporterService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("LogReporterService");
        this.Name = "LogReporterService";
    }
}

export class LogService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("LogService");
        this.Name = "LogService";
    }
}

export class LoginService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("LoginService");
        this.Name = "LoginService";
    }
}

export abstract class LuaSourceContainer extends Instance {
    public constructor()
    {
        super();
        this.addClassName("LuaSourceContainer");
    }
    public get ScriptGuid() {return this.GetProp("ScriptGuid", DataType.String);}
    public set ScriptGuid(value) {this.SetProp("ScriptGuid", DataType.String, value);}
}

/**@deprecated Deprecated by Roblox*/
export class AuroraScript extends LuaSourceContainer {
    public constructor()
    {
        super();
        this.addClassName("AuroraScript");
        this.Name = "AuroraScript";
    }
    public get EnableCulling() {return this.GetProp("EnableCulling", DataType.Bool);}
    public set EnableCulling(value) {this.SetProp("EnableCulling", DataType.Bool, value);}
    public get EnableLOD() {return this.GetProp("EnableLOD", DataType.Bool);}
    public set EnableLOD(value) {this.SetProp("EnableLOD", DataType.Bool, value);}
    public get LODCriticality() {return this.GetProp("LODCriticality", DataType.Int32);}
    public set LODCriticality(value) {this.SetProp("LODCriticality", DataType.Int32, value);}
    public get Priority() {return this.GetProp("Priority", DataType.Int32);}
    public set Priority(value) {this.SetProp("Priority", DataType.Int32, value);}
    public get Source() {return this.GetProp("Source", DataType.String);}
    public set Source(value) {this.SetProp("Source", DataType.String, value);}
}

export abstract class BaseScript extends LuaSourceContainer {
    public constructor()
    {
        super();
        this.addClassName("BaseScript");
        this.Disabled = false;
        this.LinkedSource = "";
        this.RunContext = RunContext.Legacy;
    }
    public get Disabled() {return this.GetProp("Disabled", DataType.Bool)!;}
    public set Disabled(value) {this.SetProp("Disabled", DataType.Bool, value);}
    /**@deprecated Deprecated by Roblox*/
    public get LinkedSource() {return this.GetProp("LinkedSource", DataType.String)!;}
    /**@deprecated Deprecated by Roblox*/
    public set LinkedSource(value) {this.SetProp("LinkedSource", DataType.String, value);}
    public get RunContext() {return this.GetProp("RunContext", DataType.Enum)! as RunContext;}
    public set RunContext(value) {this.SetProp("RunContext", DataType.Enum, value);}
}

export class Script extends BaseScript {
    public constructor()
    {
        super();
        this.addClassName("Script");
        this.Name = "Script";
        this.Source = "";
    }
    public get Source() {return this.GetProp("Source", DataType.String)!;}
    public set Source(value) {this.SetProp("Source", DataType.String, value);}
}

export class LocalScript extends Script {
    public constructor()
    {
        super();
        this.addClassName("LocalScript");
        this.Name = "LocalScript";
    }
}

export class ModuleScript extends LuaSourceContainer {
    public constructor()
    {
        super();
        this.addClassName("ModuleScript");
        this.Name = "ModuleScript";
        this.LinkedSource = "";
        this.Source = "";
    }
    /**@deprecated Deprecated by Roblox*/
    public get LinkedSource() {return this.GetProp("LinkedSource", DataType.String)!;}
    /**@deprecated Deprecated by Roblox*/
    public set LinkedSource(value) {this.SetProp("LinkedSource", DataType.String, value);}
    public get Source() {return this.GetProp("Source", DataType.String)!;}
    public set Source(value) {this.SetProp("Source", DataType.String, value);}
}

export class LuaWebService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("LuaWebService");
        this.Name = "LuaWebService";
    }
}

export class LuauScriptAnalyzerService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("LuauScriptAnalyzerService");
        this.Name = "LuauScriptAnalyzerService";
    }
}

export class MLModelDeliveryService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("MLModelDeliveryService");
        this.Name = "MLModelDeliveryService";
    }
}

export class MarkerCurve extends Instance {
    public constructor()
    {
        super();
        this.addClassName("MarkerCurve");
        this.Name = "MarkerCurve";
        this.ValuesAndTimes = "\u0001";
    }
    public get ValuesAndTimes() {return this.GetProp("ValuesAndTimes", DataType.String)!;}
    public set ValuesAndTimes(value) {this.SetProp("ValuesAndTimes", DataType.String, value);}
}

export class MarketplaceService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("MarketplaceService");
        this.Name = "MarketplaceService";
    }
}

export class MatchmakingService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("MatchmakingService");
        this.Name = "MatchmakingService";
    }
}

export class MaterialGenerationService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("MaterialGenerationService");
        this.Name = "MaterialGenerationService";
    }
}

export class MaterialService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("MaterialService");
        this.Name = "MaterialService";
        this.AsphaltName = "Asphalt";
        this.BasaltName = "Basalt";
        this.BrickName = "Brick";
        this.CardboardName = "Cardboard";
        this.CarpetName = "Carpet";
        this.CeramicTilesName = "CeramicTiles";
        this.ClayRoofTilesName = "ClayRoofTiles";
        this.CobblestoneName = "Cobblestone";
        this.ConcreteName = "Concrete";
        this.CorrodedMetalName = "CorrodedMetal";
        this.CrackedLavaName = "CrackedLava";
        this.DiamondPlateName = "DiamondPlate";
        this.FabricName = "Fabric";
        this.FoilName = "Foil";
        this.GlacierName = "Glacier";
        this.GraniteName = "Granite";
        this.GrassName = "Grass";
        this.GroundName = "Ground";
        this.IceName = "Ice";
        this.LeafyGrassName = "LeafyGrass";
        this.LeatherName = "Leather";
        this.LimestoneName = "Limestone";
        this.MarbleName = "Marble";
        this.MetalName = "Metal";
        this.MudName = "Mud";
        this.PavementName = "Pavement";
        this.PebbleName = "Pebble";
        this.PlasterName = "Plaster";
        this.PlasticName = "Plastic";
        this.RockName = "Rock";
        this.RoofShinglesName = "RoofShingles";
        this.RubberName = "Rubber";
        this.SaltName = "Salt";
        this.SandName = "Sand";
        this.SandstoneName = "Sandstone";
        this.SlateName = "Slate";
        this.SmoothPlasticName = "SmoothPlastic";
        this.SnowName = "Snow";
        this.Use2022MaterialsXml = false;
        this.WoodName = "Wood";
        this.WoodPlanksName = "WoodPlanks";
    }
    public get AsphaltName() {return this.GetProp("AsphaltName", DataType.String)!;}
    public set AsphaltName(value) {this.SetProp("AsphaltName", DataType.String, value);}
    public get BasaltName() {return this.GetProp("BasaltName", DataType.String)!;}
    public set BasaltName(value) {this.SetProp("BasaltName", DataType.String, value);}
    public get BrickName() {return this.GetProp("BrickName", DataType.String)!;}
    public set BrickName(value) {this.SetProp("BrickName", DataType.String, value);}
    public get CardboardName() {return this.GetProp("CardboardName", DataType.String)!;}
    public set CardboardName(value) {this.SetProp("CardboardName", DataType.String, value);}
    public get CarpetName() {return this.GetProp("CarpetName", DataType.String)!;}
    public set CarpetName(value) {this.SetProp("CarpetName", DataType.String, value);}
    public get CeramicTilesName() {return this.GetProp("CeramicTilesName", DataType.String)!;}
    public set CeramicTilesName(value) {this.SetProp("CeramicTilesName", DataType.String, value);}
    public get ClayRoofTilesName() {return this.GetProp("ClayRoofTilesName", DataType.String)!;}
    public set ClayRoofTilesName(value) {this.SetProp("ClayRoofTilesName", DataType.String, value);}
    public get CobblestoneName() {return this.GetProp("CobblestoneName", DataType.String)!;}
    public set CobblestoneName(value) {this.SetProp("CobblestoneName", DataType.String, value);}
    public get ConcreteName() {return this.GetProp("ConcreteName", DataType.String)!;}
    public set ConcreteName(value) {this.SetProp("ConcreteName", DataType.String, value);}
    public get CorrodedMetalName() {return this.GetProp("CorrodedMetalName", DataType.String)!;}
    public set CorrodedMetalName(value) {this.SetProp("CorrodedMetalName", DataType.String, value);}
    public get CrackedLavaName() {return this.GetProp("CrackedLavaName", DataType.String)!;}
    public set CrackedLavaName(value) {this.SetProp("CrackedLavaName", DataType.String, value);}
    public get DiamondPlateName() {return this.GetProp("DiamondPlateName", DataType.String)!;}
    public set DiamondPlateName(value) {this.SetProp("DiamondPlateName", DataType.String, value);}
    public get FabricName() {return this.GetProp("FabricName", DataType.String)!;}
    public set FabricName(value) {this.SetProp("FabricName", DataType.String, value);}
    public get FoilName() {return this.GetProp("FoilName", DataType.String)!;}
    public set FoilName(value) {this.SetProp("FoilName", DataType.String, value);}
    public get GlacierName() {return this.GetProp("GlacierName", DataType.String)!;}
    public set GlacierName(value) {this.SetProp("GlacierName", DataType.String, value);}
    public get GraniteName() {return this.GetProp("GraniteName", DataType.String)!;}
    public set GraniteName(value) {this.SetProp("GraniteName", DataType.String, value);}
    public get GrassName() {return this.GetProp("GrassName", DataType.String)!;}
    public set GrassName(value) {this.SetProp("GrassName", DataType.String, value);}
    public get GroundName() {return this.GetProp("GroundName", DataType.String)!;}
    public set GroundName(value) {this.SetProp("GroundName", DataType.String, value);}
    public get IceName() {return this.GetProp("IceName", DataType.String)!;}
    public set IceName(value) {this.SetProp("IceName", DataType.String, value);}
    public get LeafyGrassName() {return this.GetProp("LeafyGrassName", DataType.String)!;}
    public set LeafyGrassName(value) {this.SetProp("LeafyGrassName", DataType.String, value);}
    public get LeatherName() {return this.GetProp("LeatherName", DataType.String)!;}
    public set LeatherName(value) {this.SetProp("LeatherName", DataType.String, value);}
    public get LimestoneName() {return this.GetProp("LimestoneName", DataType.String)!;}
    public set LimestoneName(value) {this.SetProp("LimestoneName", DataType.String, value);}
    public get MarbleName() {return this.GetProp("MarbleName", DataType.String)!;}
    public set MarbleName(value) {this.SetProp("MarbleName", DataType.String, value);}
    public get MetalName() {return this.GetProp("MetalName", DataType.String)!;}
    public set MetalName(value) {this.SetProp("MetalName", DataType.String, value);}
    public get MudName() {return this.GetProp("MudName", DataType.String)!;}
    public set MudName(value) {this.SetProp("MudName", DataType.String, value);}
    public get PavementName() {return this.GetProp("PavementName", DataType.String)!;}
    public set PavementName(value) {this.SetProp("PavementName", DataType.String, value);}
    public get PebbleName() {return this.GetProp("PebbleName", DataType.String)!;}
    public set PebbleName(value) {this.SetProp("PebbleName", DataType.String, value);}
    public get PlasterName() {return this.GetProp("PlasterName", DataType.String)!;}
    public set PlasterName(value) {this.SetProp("PlasterName", DataType.String, value);}
    public get PlasticName() {return this.GetProp("PlasticName", DataType.String)!;}
    public set PlasticName(value) {this.SetProp("PlasticName", DataType.String, value);}
    public get RockName() {return this.GetProp("RockName", DataType.String)!;}
    public set RockName(value) {this.SetProp("RockName", DataType.String, value);}
    public get RoofShinglesName() {return this.GetProp("RoofShinglesName", DataType.String)!;}
    public set RoofShinglesName(value) {this.SetProp("RoofShinglesName", DataType.String, value);}
    public get RubberName() {return this.GetProp("RubberName", DataType.String)!;}
    public set RubberName(value) {this.SetProp("RubberName", DataType.String, value);}
    public get SaltName() {return this.GetProp("SaltName", DataType.String)!;}
    public set SaltName(value) {this.SetProp("SaltName", DataType.String, value);}
    public get SandName() {return this.GetProp("SandName", DataType.String)!;}
    public set SandName(value) {this.SetProp("SandName", DataType.String, value);}
    public get SandstoneName() {return this.GetProp("SandstoneName", DataType.String)!;}
    public set SandstoneName(value) {this.SetProp("SandstoneName", DataType.String, value);}
    public get SlateName() {return this.GetProp("SlateName", DataType.String)!;}
    public set SlateName(value) {this.SetProp("SlateName", DataType.String, value);}
    public get SmoothPlasticName() {return this.GetProp("SmoothPlasticName", DataType.String)!;}
    public set SmoothPlasticName(value) {this.SetProp("SmoothPlasticName", DataType.String, value);}
    public get SnowName() {return this.GetProp("SnowName", DataType.String)!;}
    public set SnowName(value) {this.SetProp("SnowName", DataType.String, value);}
    public get Use2022MaterialsXml() {return this.GetProp("Use2022MaterialsXml", DataType.Bool)!;}
    public set Use2022MaterialsXml(value) {this.SetProp("Use2022MaterialsXml", DataType.Bool, value);}
    public get WoodName() {return this.GetProp("WoodName", DataType.String)!;}
    public set WoodName(value) {this.SetProp("WoodName", DataType.String, value);}
    public get WoodPlanksName() {return this.GetProp("WoodPlanksName", DataType.String)!;}
    public set WoodPlanksName(value) {this.SetProp("WoodPlanksName", DataType.String, value);}
}

export class MaterialVariant extends Instance {
    public constructor()
    {
        super();
        this.addClassName("MaterialVariant");
        this.Name = "MaterialVariant";
        this.BaseMaterial = Material.Plastic;
        this.ColorMap = "";
        this.MaterialPattern = MaterialPattern.Regular;
        this.MetalnessMap = "";
        this.NormalMap = "";
        this.RoughnessMap = "";
        this.StudsPerTile = 10;
        this.TexturePack = "";
    }
    public get BaseMaterial() {return this.GetProp("BaseMaterial", DataType.Enum)! as Material;}
    public set BaseMaterial(value) {this.SetProp("BaseMaterial", DataType.Enum, value);}
    public get ColorMap() {return this.GetProp("ColorMap", DataType.String)!;}
    public set ColorMap(value) {this.SetProp("ColorMap", DataType.String, value);}
    public get CustomPhysicalProperties() {return this.GetProp("CustomPhysicalProperties", DataType.PhysicalProperties);}
    public set CustomPhysicalProperties(value) {this.SetProp("CustomPhysicalProperties", DataType.PhysicalProperties, value);}
    public get MaterialPattern() {return this.GetProp("MaterialPattern", DataType.Enum)! as MaterialPattern;}
    public set MaterialPattern(value) {this.SetProp("MaterialPattern", DataType.Enum, value);}
    public get MetalnessMap() {return this.GetProp("MetalnessMap", DataType.String)!;}
    public set MetalnessMap(value) {this.SetProp("MetalnessMap", DataType.String, value);}
    public get NormalMap() {return this.GetProp("NormalMap", DataType.String)!;}
    public set NormalMap(value) {this.SetProp("NormalMap", DataType.String, value);}
    public get RoughnessMap() {return this.GetProp("RoughnessMap", DataType.String)!;}
    public set RoughnessMap(value) {this.SetProp("RoughnessMap", DataType.String, value);}
    public get StudsPerTile() {return this.GetProp("StudsPerTile", DataType.Float32)!;}
    public set StudsPerTile(value) {this.SetProp("StudsPerTile", DataType.Float32, value);}
    public get TexturePack() {return this.GetProp("TexturePack", DataType.String)!;}
    public set TexturePack(value) {this.SetProp("TexturePack", DataType.String, value);}
}

export class MemStorageService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("MemStorageService");
        this.Name = "MemStorageService";
    }
}

export class MemoryStoreService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("MemoryStoreService");
        this.Name = "MemoryStoreService";
    }
}

/**@deprecated Deprecated by Roblox*/
export class Message extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Message");
        this.Name = "Message";
        this.Text = "";
    }
    public get Text() {return this.GetProp("Text", DataType.String)!;}
    public set Text(value) {this.SetProp("Text", DataType.String, value);}
}

/**@deprecated Deprecated by Roblox*/
export class Hint extends Message {
    public constructor()
    {
        super();
        this.addClassName("Hint");
        this.Name = "Hint";
    }
}

export class MessageBusService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("MessageBusService");
        this.Name = "MessageBusService";
    }
}

export class MessagingService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("MessagingService");
        this.Name = "MessagingService";
    }
}

export class MetaBreakpointManager extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("MetaBreakpointManager");
        this.Name = "MetaBreakpointManager";
    }
}

export class MouseService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("MouseService");
        this.Name = "MouseService";
    }
}

export abstract class NetworkPeer extends Instance {
    public constructor()
    {
        super();
        this.addClassName("NetworkPeer");
    }
}

export class NetworkClient extends NetworkPeer {
    public constructor()
    {
        super();
        this._isService = true;
        this.addClassName("NetworkClient");
        this.Name = "NetworkClient";
    }
}

export class NetworkServer extends NetworkPeer {
    public constructor()
    {
        super();
        this._isService = true;
        this.addClassName("NetworkServer");
        this.Name = "NetworkServer";
    }
}

export class NetworkSettings extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("NetworkSettings");
        this.Name = "NetworkSettings";
    }
    public get HttpProxyEnabled() {return this.GetProp("HttpProxyEnabled", DataType.Bool);}
    public set HttpProxyEnabled(value) {this.SetProp("HttpProxyEnabled", DataType.Bool, value);}
    public get HttpProxyURL() {return this.GetProp("HttpProxyURL", DataType.String);}
    public set HttpProxyURL(value) {this.SetProp("HttpProxyURL", DataType.String, value);}
    public get IncomingReplicationLag() {return this.GetProp("IncomingReplicationLag", DataType.Float64);}
    public set IncomingReplicationLag(value) {this.SetProp("IncomingReplicationLag", DataType.Float64, value);}
    public get PrintJoinSizeBreakdown() {return this.GetProp("PrintJoinSizeBreakdown", DataType.Bool);}
    public set PrintJoinSizeBreakdown(value) {this.SetProp("PrintJoinSizeBreakdown", DataType.Bool, value);}
    public get PrintPhysicsErrors() {return this.GetProp("PrintPhysicsErrors", DataType.Bool);}
    public set PrintPhysicsErrors(value) {this.SetProp("PrintPhysicsErrors", DataType.Bool, value);}
    public get PrintStreamInstanceQuota() {return this.GetProp("PrintStreamInstanceQuota", DataType.Bool);}
    public set PrintStreamInstanceQuota(value) {this.SetProp("PrintStreamInstanceQuota", DataType.Bool, value);}
    public get RandomizeJoinInstanceOrder() {return this.GetProp("RandomizeJoinInstanceOrder", DataType.Bool);}
    public set RandomizeJoinInstanceOrder(value) {this.SetProp("RandomizeJoinInstanceOrder", DataType.Bool, value);}
    public get RenderStreamedRegions() {return this.GetProp("RenderStreamedRegions", DataType.Bool);}
    public set RenderStreamedRegions(value) {this.SetProp("RenderStreamedRegions", DataType.Bool, value);}
    public get ShowActiveAnimationAsset() {return this.GetProp("ShowActiveAnimationAsset", DataType.Bool);}
    public set ShowActiveAnimationAsset(value) {this.SetProp("ShowActiveAnimationAsset", DataType.Bool, value);}
}

export class NoCollisionConstraint extends Instance {
    public constructor()
    {
        super();
        this.addClassName("NoCollisionConstraint");
        this.Name = "NoCollisionConstraint";
        this.Enabled = true;
    }
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get Part0() {return this.GetProp("Part0", DataType.Referent) as BasePart | undefined;}
    public set Part0(value) {this.SetProp("Part0", DataType.Referent, value);}
    public get Part1() {return this.GetProp("Part1", DataType.Referent) as BasePart | undefined;}
    public set Part1(value) {this.SetProp("Part1", DataType.Referent, value);}
}

export class Noise extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Noise");
        this.Name = "Noise";
        this.NoiseType = NoiseType.SimplexGabor;
        this.Seed = 1234;
    }
    public get NoiseType() {return this.GetProp("NoiseType", DataType.Enum)! as NoiseType;}
    public set NoiseType(value) {this.SetProp("NoiseType", DataType.Enum, value);}
    public get Seed() {return this.GetProp("Seed", DataType.Int32)!;}
    public set Seed(value) {this.SetProp("Seed", DataType.Int32, value);}
}

export class NotificationService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("NotificationService");
        this.Name = "NotificationService";
    }
}

export class OmniRecommendationsService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("OmniRecommendationsService");
        this.Name = "OmniRecommendationsService";
    }
}

export class OpenCloudService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("OpenCloudService");
        this.Name = "OpenCloudService";
    }
}

export class OperationGraph extends Instance {
    public constructor()
    {
        super();
        this.addClassName("OperationGraph");
        this.Name = "OperationGraph";
    }
}

export abstract class PVInstance extends Instance {
    public constructor()
    {
        super();
        this.addClassName("PVInstance");
    }
}

export abstract class BasePart extends PVInstance {
    public constructor()
    {
        super();
        this.addClassName("BasePart");
        this.BackParamA = -0.5;
        this.BackParamB = 0.5;
        this.BackSurfaceInput = InputType.NoInput;
        this.BottomParamA = -0.5;
        this.BottomParamB = 0.5;
        this.BottomSurfaceInput = InputType.NoInput;
        this.CFrame = CFrame.Identity;
        this.CanQuery = true;
        this.CanTouch = true;
        this.CastShadow = true;
        this.CollisionGroup = "Default";
        this.CollisionGroupId = 0;
        this.EnableFluidForces = true;
        this.FrontParamA = -0.5;
        this.FrontParamB = 0.5;
        this.FrontSurfaceInput = InputType.NoInput;
        this.LeftParamA = -0.5;
        this.LeftParamB = 0.5;
        this.LeftSurfaceInput = InputType.NoInput;
        this.Massless = false;
        this.Material = Material.Plastic;
        this.PivotOffset = CFrame.Identity;
        this.Reflectance = 0;
        this.RightParamA = -0.5;
        this.RightParamB = 0.5;
        this.RightSurfaceInput = InputType.NoInput;
        this.RootPriority = 0;
        this.RotVelocity = new Vector3(0, 0, 0);
        this.TopParamA = -0.5;
        this.TopParamB = 0.5;
        this.TopSurfaceInput = InputType.NoInput;
        this.Velocity = new Vector3(0, 0, 0);
    }
    public get Anchored() {return this.GetProp("Anchored", DataType.Bool)!;}
    public set Anchored(value) {this.SetProp("Anchored", DataType.Bool, value);}
    public get AudioCanCollide() {return this.GetProp("AudioCanCollide", DataType.Bool);}
    public set AudioCanCollide(value) {this.SetProp("AudioCanCollide", DataType.Bool, value);}
    /**@deprecated Deprecated by Roblox*/
    public get BackParamA() {return this.GetProp("BackParamA", DataType.Float32)!;}
    /**@deprecated Deprecated by Roblox*/
    public set BackParamA(value) {this.SetProp("BackParamA", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get BackParamB() {return this.GetProp("BackParamB", DataType.Float32)!;}
    /**@deprecated Deprecated by Roblox*/
    public set BackParamB(value) {this.SetProp("BackParamB", DataType.Float32, value);}
    public get BackSurface() {return this.GetProp("BackSurface", DataType.Enum)! as SurfaceType;}
    public set BackSurface(value) {this.SetProp("BackSurface", DataType.Enum, value);}
    /**@deprecated Deprecated by Roblox*/
    public get BackSurfaceInput() {return this.GetProp("BackSurfaceInput", DataType.Enum)! as InputType;}
    /**@deprecated Deprecated by Roblox*/
    public set BackSurfaceInput(value) {this.SetProp("BackSurfaceInput", DataType.Enum, value);}
    /**@deprecated Deprecated by Roblox*/
    public get BottomParamA() {return this.GetProp("BottomParamA", DataType.Float32)!;}
    /**@deprecated Deprecated by Roblox*/
    public set BottomParamA(value) {this.SetProp("BottomParamA", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get BottomParamB() {return this.GetProp("BottomParamB", DataType.Float32)!;}
    /**@deprecated Deprecated by Roblox*/
    public set BottomParamB(value) {this.SetProp("BottomParamB", DataType.Float32, value);}
    public get BottomSurface() {return this.GetProp("BottomSurface", DataType.Enum)! as SurfaceType;}
    public set BottomSurface(value) {this.SetProp("BottomSurface", DataType.Enum, value);}
    /**@deprecated Deprecated by Roblox*/
    public get BottomSurfaceInput() {return this.GetProp("BottomSurfaceInput", DataType.Enum)! as InputType;}
    /**@deprecated Deprecated by Roblox*/
    public set BottomSurfaceInput(value) {this.SetProp("BottomSurfaceInput", DataType.Enum, value);}
    public get CFrame() {return this.GetProp("CFrame", DataType.CFrame)!;}
    public set CFrame(value) {this.SetProp("CFrame", DataType.CFrame, value);}
    public get CanCollide() {return this.GetProp("CanCollide", DataType.Bool)!;}
    public set CanCollide(value) {this.SetProp("CanCollide", DataType.Bool, value);}
    public get CanQuery() {return this.GetProp("CanQuery", DataType.Bool)!;}
    public set CanQuery(value) {this.SetProp("CanQuery", DataType.Bool, value);}
    public get CanTouch() {return this.GetProp("CanTouch", DataType.Bool)!;}
    public set CanTouch(value) {this.SetProp("CanTouch", DataType.Bool, value);}
    public get CastShadow() {return this.GetProp("CastShadow", DataType.Bool)!;}
    public set CastShadow(value) {this.SetProp("CastShadow", DataType.Bool, value);}
    public get CollisionGroup() {return this.GetProp("CollisionGroup", DataType.String)!;}
    public set CollisionGroup(value) {this.SetProp("CollisionGroup", DataType.String, value);}
    /**@deprecated Deprecated by Roblox*/
    public get CollisionGroupId() {return this.GetProp("CollisionGroupId", DataType.Int32)!;}
    /**@deprecated Deprecated by Roblox*/
    public set CollisionGroupId(value) {this.SetProp("CollisionGroupId", DataType.Int32, value);}
    public get Color3uint8() {return this.GetProp("Color3uint8", DataType.Color3uint8)!;}
    public set Color3uint8(value) {this.SetProp("Color3uint8", DataType.Color3uint8, value);}
    public get CustomPhysicalProperties() {return this.GetProp("CustomPhysicalProperties", DataType.PhysicalProperties);}
    public set CustomPhysicalProperties(value) {this.SetProp("CustomPhysicalProperties", DataType.PhysicalProperties, value);}
    /**@deprecated Deprecated by Roblox*/
    public get Elasticity() {return this.GetProp("Elasticity", DataType.Float32)!;}
    /**@deprecated Deprecated by Roblox*/
    public set Elasticity(value) {this.SetProp("Elasticity", DataType.Float32, value);}
    public get EnableFluidForces() {return this.GetProp("EnableFluidForces", DataType.Bool)!;}
    public set EnableFluidForces(value) {this.SetProp("EnableFluidForces", DataType.Bool, value);}
    /**@deprecated Deprecated by Roblox*/
    public get Friction() {return this.GetProp("Friction", DataType.Float32)!;}
    /**@deprecated Deprecated by Roblox*/
    public set Friction(value) {this.SetProp("Friction", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get FrontParamA() {return this.GetProp("FrontParamA", DataType.Float32)!;}
    /**@deprecated Deprecated by Roblox*/
    public set FrontParamA(value) {this.SetProp("FrontParamA", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get FrontParamB() {return this.GetProp("FrontParamB", DataType.Float32)!;}
    /**@deprecated Deprecated by Roblox*/
    public set FrontParamB(value) {this.SetProp("FrontParamB", DataType.Float32, value);}
    public get FrontSurface() {return this.GetProp("FrontSurface", DataType.Enum)! as SurfaceType;}
    public set FrontSurface(value) {this.SetProp("FrontSurface", DataType.Enum, value);}
    /**@deprecated Deprecated by Roblox*/
    public get FrontSurfaceInput() {return this.GetProp("FrontSurfaceInput", DataType.Enum)! as InputType;}
    /**@deprecated Deprecated by Roblox*/
    public set FrontSurfaceInput(value) {this.SetProp("FrontSurfaceInput", DataType.Enum, value);}
    /**@deprecated Deprecated by Roblox*/
    public get LeftParamA() {return this.GetProp("LeftParamA", DataType.Float32)!;}
    /**@deprecated Deprecated by Roblox*/
    public set LeftParamA(value) {this.SetProp("LeftParamA", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get LeftParamB() {return this.GetProp("LeftParamB", DataType.Float32)!;}
    /**@deprecated Deprecated by Roblox*/
    public set LeftParamB(value) {this.SetProp("LeftParamB", DataType.Float32, value);}
    public get LeftSurface() {return this.GetProp("LeftSurface", DataType.Enum)! as SurfaceType;}
    public set LeftSurface(value) {this.SetProp("LeftSurface", DataType.Enum, value);}
    /**@deprecated Deprecated by Roblox*/
    public get LeftSurfaceInput() {return this.GetProp("LeftSurfaceInput", DataType.Enum)! as InputType;}
    /**@deprecated Deprecated by Roblox*/
    public set LeftSurfaceInput(value) {this.SetProp("LeftSurfaceInput", DataType.Enum, value);}
    public get Locked() {return this.GetProp("Locked", DataType.Bool)!;}
    public set Locked(value) {this.SetProp("Locked", DataType.Bool, value);}
    public get Massless() {return this.GetProp("Massless", DataType.Bool)!;}
    public set Massless(value) {this.SetProp("Massless", DataType.Bool, value);}
    public get Material() {return this.GetProp("Material", DataType.Enum)! as Material;}
    public set Material(value) {this.SetProp("Material", DataType.Enum, value);}
    public get MaterialVariantSerialized() {return this.GetProp("MaterialVariantSerialized", DataType.String);}
    public set MaterialVariantSerialized(value) {this.SetProp("MaterialVariantSerialized", DataType.String, value);}
    public get PivotOffset() {return this.GetProp("PivotOffset", DataType.CFrame)!;}
    public set PivotOffset(value) {this.SetProp("PivotOffset", DataType.CFrame, value);}
    public get Reflectance() {return this.GetProp("Reflectance", DataType.Float32)!;}
    public set Reflectance(value) {this.SetProp("Reflectance", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get RightParamA() {return this.GetProp("RightParamA", DataType.Float32)!;}
    /**@deprecated Deprecated by Roblox*/
    public set RightParamA(value) {this.SetProp("RightParamA", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get RightParamB() {return this.GetProp("RightParamB", DataType.Float32)!;}
    /**@deprecated Deprecated by Roblox*/
    public set RightParamB(value) {this.SetProp("RightParamB", DataType.Float32, value);}
    public get RightSurface() {return this.GetProp("RightSurface", DataType.Enum)! as SurfaceType;}
    public set RightSurface(value) {this.SetProp("RightSurface", DataType.Enum, value);}
    /**@deprecated Deprecated by Roblox*/
    public get RightSurfaceInput() {return this.GetProp("RightSurfaceInput", DataType.Enum)! as InputType;}
    /**@deprecated Deprecated by Roblox*/
    public set RightSurfaceInput(value) {this.SetProp("RightSurfaceInput", DataType.Enum, value);}
    public get RootPriority() {return this.GetProp("RootPriority", DataType.Int32)!;}
    public set RootPriority(value) {this.SetProp("RootPriority", DataType.Int32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get RotVelocity() {return this.GetProp("RotVelocity", DataType.Vector3)!;}
    /**@deprecated Deprecated by Roblox*/
    public set RotVelocity(value) {this.SetProp("RotVelocity", DataType.Vector3, value);}
    /**@deprecated Deprecated by Roblox*/
    public get TopParamA() {return this.GetProp("TopParamA", DataType.Float32)!;}
    /**@deprecated Deprecated by Roblox*/
    public set TopParamA(value) {this.SetProp("TopParamA", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get TopParamB() {return this.GetProp("TopParamB", DataType.Float32)!;}
    /**@deprecated Deprecated by Roblox*/
    public set TopParamB(value) {this.SetProp("TopParamB", DataType.Float32, value);}
    public get TopSurface() {return this.GetProp("TopSurface", DataType.Enum)! as SurfaceType;}
    public set TopSurface(value) {this.SetProp("TopSurface", DataType.Enum, value);}
    /**@deprecated Deprecated by Roblox*/
    public get TopSurfaceInput() {return this.GetProp("TopSurfaceInput", DataType.Enum)! as InputType;}
    /**@deprecated Deprecated by Roblox*/
    public set TopSurfaceInput(value) {this.SetProp("TopSurfaceInput", DataType.Enum, value);}
    public get Transparency() {return this.GetProp("Transparency", DataType.Float32)!;}
    public set Transparency(value) {this.SetProp("Transparency", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get Velocity() {return this.GetProp("Velocity", DataType.Vector3)!;}
    /**@deprecated Deprecated by Roblox*/
    public set Velocity(value) {this.SetProp("Velocity", DataType.Vector3, value);}
    /**@deprecated Deprecated by Roblox*/
    public get BrickColor() {return this.GetProp("brickColor", DataType.BrickColor);}
    /**@deprecated Deprecated by Roblox*/
    public set BrickColor(value) {this.SetProp("brickColor", DataType.BrickColor, value);}
    public get Size() {return this.GetProp("size", DataType.Vector3)!;}
    public set Size(value) {this.SetProp("size", DataType.Vector3, value);}
}

export class CornerWedgePart extends BasePart {
    public constructor()
    {
        super();
        this.addClassName("CornerWedgePart");
        this.Name = "CornerWedgePart";
        this.Anchored = false;
        this.BackSurface = SurfaceType.Smooth;
        this.BottomSurface = SurfaceType.Smooth;
        this.CanCollide = true;
        this.Color3uint8 = Color3.FromRGB(163, 162, 165);
        this.Elasticity = 0.5;
        this.Friction = 0.3;
        this.FrontSurface = SurfaceType.Smooth;
        this.LeftSurface = SurfaceType.Smooth;
        this.Locked = false;
        this.RightSurface = SurfaceType.Smooth;
        this.TopSurface = SurfaceType.Smooth;
        this.Transparency = 0;
        this.Size = new Vector3(2, 2, 2);
    }
}

export abstract class FormFactorPart extends BasePart {
    public constructor()
    {
        super();
        this.addClassName("FormFactorPart");
        this.FormFactor = FormFactor.Brick;
        this.Anchored = false;
        this.BackSurface = SurfaceType.Smooth;
        this.BottomSurface = SurfaceType.Inlet;
        this.CanCollide = true;
        this.Color3uint8 = Color3.FromRGB(163, 162, 165);
        this.Elasticity = 0.5;
        this.Friction = 0.3;
        this.FrontSurface = SurfaceType.Smooth;
        this.LeftSurface = SurfaceType.Smooth;
        this.Locked = false;
        this.RightSurface = SurfaceType.Smooth;
        this.Transparency = 0;
        this.Size = new Vector3(4, 1.2, 2);
    }
    /**@deprecated Deprecated by Roblox*/
    public get FormFactor() {return this.GetProp("FormFactor", DataType.Enum)! as FormFactor;}
    /**@deprecated Deprecated by Roblox*/
    public set FormFactor(value) {this.SetProp("FormFactor", DataType.Enum, value);}
    public get FormFactorRaw() {return this.GetProp("formFactorRaw", DataType.Enum) as FormFactor | undefined;}
    public set FormFactorRaw(value) {this.SetProp("formFactorRaw", DataType.Enum, value);}
}

export class Part extends FormFactorPart {
    public constructor()
    {
        super();
        this.addClassName("Part");
        this.Name = "Part";
        this.Shape = PartType.Block;
        this.TopSurface = SurfaceType.Studs;
    }
    public get Shape() {return this.GetProp("shape", DataType.Enum)! as PartType;}
    public set Shape(value) {this.SetProp("shape", DataType.Enum, value);}
}

/**@deprecated Deprecated by Roblox*/
export class FlagStand extends Part {
    public constructor()
    {
        super();
        this.addClassName("FlagStand");
        this.Name = "FlagStand";
    }
    public get TeamColor() {return this.GetProp("TeamColor", DataType.BrickColor);}
    public set TeamColor(value) {this.SetProp("TeamColor", DataType.BrickColor, value);}
}

export class Seat extends Part {
    public constructor()
    {
        super();
        this.addClassName("Seat");
        this.Name = "Seat";
        this.Disabled = false;
    }
    public get Disabled() {return this.GetProp("Disabled", DataType.Bool)!;}
    public set Disabled(value) {this.SetProp("Disabled", DataType.Bool, value);}
}

/**@deprecated Deprecated by Roblox*/
export class SkateboardPlatform extends Part {
    public constructor()
    {
        super();
        this.addClassName("SkateboardPlatform");
        this.Name = "SkateboardPlatform";
        this.Steer = 0;
        this.StickyWheels = true;
        this.Throttle = 0;
    }
    public get Steer() {return this.GetProp("Steer", DataType.Int32)!;}
    public set Steer(value) {this.SetProp("Steer", DataType.Int32, value);}
    public get StickyWheels() {return this.GetProp("StickyWheels", DataType.Bool)!;}
    public set StickyWheels(value) {this.SetProp("StickyWheels", DataType.Bool, value);}
    public get Throttle() {return this.GetProp("Throttle", DataType.Int32)!;}
    public set Throttle(value) {this.SetProp("Throttle", DataType.Int32, value);}
}

export class SpawnLocation extends Part {
    public constructor()
    {
        super();
        this.addClassName("SpawnLocation");
        this.Name = "SpawnLocation";
        this.AllowTeamChangeOnTouch = false;
        this.Duration = 10;
        this.Enabled = true;
        this.Neutral = true;
    }
    public get AllowTeamChangeOnTouch() {return this.GetProp("AllowTeamChangeOnTouch", DataType.Bool)!;}
    public set AllowTeamChangeOnTouch(value) {this.SetProp("AllowTeamChangeOnTouch", DataType.Bool, value);}
    public get Duration() {return this.GetProp("Duration", DataType.Int32)!;}
    public set Duration(value) {this.SetProp("Duration", DataType.Int32, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get Neutral() {return this.GetProp("Neutral", DataType.Bool)!;}
    public set Neutral(value) {this.SetProp("Neutral", DataType.Bool, value);}
    public get TeamColor() {return this.GetProp("TeamColor", DataType.BrickColor);}
    public set TeamColor(value) {this.SetProp("TeamColor", DataType.BrickColor, value);}
}

export class WedgePart extends FormFactorPart {
    public constructor()
    {
        super();
        this.addClassName("WedgePart");
        this.Name = "WedgePart";
        this.TopSurface = SurfaceType.Smooth;
    }
}

export class Terrain extends BasePart {
    public constructor()
    {
        super();
        this.addClassName("Terrain");
        this.Name = "Terrain";
        this.AcquisitionMethod = TerrainAcquisitionMethod.None;
        this.Decoration = false;
        this.GrassLength = 0.7;
        this.MaterialColors = "";
        this.PhysicsGrid = "\u0002\u0003";
        this.ShorelinesUpgraded = true;
        this.SmoothGrid = "\u0001\u0005";
        this.SmoothVoxelsUpgraded = false;
        this.WaterColor = Color3.FromRGB(13, 84, 92);
        this.WaterReflectance = 1;
        this.WaterTransparency = 0.3;
        this.WaterWaveSize = 0.15;
        this.WaterWaveSpeed = 10;
        this.Anchored = true;
        this.BackSurface = SurfaceType.Smooth;
        this.BottomSurface = SurfaceType.Inlet;
        this.CanCollide = true;
        this.Color3uint8 = Color3.FromRGB(163, 162, 165);
        this.Elasticity = 0.3;
        this.Friction = 0.5;
        this.FrontSurface = SurfaceType.Smooth;
        this.LeftSurface = SurfaceType.Smooth;
        this.Locked = true;
        this.RightSurface = SurfaceType.Smooth;
        this.TopSurface = SurfaceType.Studs;
        this.Transparency = 0;
        this.Size = new Vector3(2044, 252, 2044);
    }
    public get AcquisitionMethod() {return this.GetProp("AcquisitionMethod", DataType.Enum)! as TerrainAcquisitionMethod;}
    public set AcquisitionMethod(value) {this.SetProp("AcquisitionMethod", DataType.Enum, value);}
    public get Decoration() {return this.GetProp("Decoration", DataType.Bool)!;}
    public set Decoration(value) {this.SetProp("Decoration", DataType.Bool, value);}
    public get GrassLength() {return this.GetProp("GrassLength", DataType.Float32)!;}
    public set GrassLength(value) {this.SetProp("GrassLength", DataType.Float32, value);}
    public get MaterialColors() {return this.GetProp("MaterialColors", DataType.String)!;}
    public set MaterialColors(value) {this.SetProp("MaterialColors", DataType.String, value);}
    public get PhysicsGrid() {return this.GetProp("PhysicsGrid", DataType.String)!;}
    public set PhysicsGrid(value) {this.SetProp("PhysicsGrid", DataType.String, value);}
    public get ShorelinesUpgraded() {return this.GetProp("ShorelinesUpgraded", DataType.Bool)!;}
    public set ShorelinesUpgraded(value) {this.SetProp("ShorelinesUpgraded", DataType.Bool, value);}
    public get SmoothGrid() {return this.GetProp("SmoothGrid", DataType.String)!;}
    public set SmoothGrid(value) {this.SetProp("SmoothGrid", DataType.String, value);}
    public get SmoothVoxelsUpgraded() {return this.GetProp("SmoothVoxelsUpgraded", DataType.Bool)!;}
    public set SmoothVoxelsUpgraded(value) {this.SetProp("SmoothVoxelsUpgraded", DataType.Bool, value);}
    public get WaterColor() {return this.GetProp("WaterColor", DataType.Color3)!;}
    public set WaterColor(value) {this.SetProp("WaterColor", DataType.Color3, value);}
    public get WaterReflectance() {return this.GetProp("WaterReflectance", DataType.Float32)!;}
    public set WaterReflectance(value) {this.SetProp("WaterReflectance", DataType.Float32, value);}
    public get WaterTransparency() {return this.GetProp("WaterTransparency", DataType.Float32)!;}
    public set WaterTransparency(value) {this.SetProp("WaterTransparency", DataType.Float32, value);}
    public get WaterWaveSize() {return this.GetProp("WaterWaveSize", DataType.Float32)!;}
    public set WaterWaveSize(value) {this.SetProp("WaterWaveSize", DataType.Float32, value);}
    public get WaterWaveSpeed() {return this.GetProp("WaterWaveSpeed", DataType.Float32)!;}
    public set WaterWaveSpeed(value) {this.SetProp("WaterWaveSpeed", DataType.Float32, value);}
}

export abstract class TriangleMeshPart extends BasePart {
    public constructor()
    {
        super();
        this.addClassName("TriangleMeshPart");
        this.BackSurface = SurfaceType.Smooth;
        this.BottomSurface = SurfaceType.Smooth;
        this.Elasticity = 0.5;
        this.Friction = 0.3;
        this.FrontSurface = SurfaceType.Smooth;
        this.LeftSurface = SurfaceType.Smooth;
        this.Locked = false;
        this.RightSurface = SurfaceType.Smooth;
        this.TopSurface = SurfaceType.Smooth;
        this.Size = new Vector3(4, 1.2, 2);
    }
    public get AeroMeshData() {return this.GetProp("AeroMeshData", DataType.SharedString);}
    public set AeroMeshData(value) {this.SetProp("AeroMeshData", DataType.SharedString, value);}
    public get FluidFidelityInternal() {return this.GetProp("FluidFidelityInternal", DataType.Enum) as FluidFidelity | undefined;}
    public set FluidFidelityInternal(value) {this.SetProp("FluidFidelityInternal", DataType.Enum, value);}
    public get PhysicalConfigData() {return this.GetProp("PhysicalConfigData", DataType.SharedString);}
    public set PhysicalConfigData(value) {this.SetProp("PhysicalConfigData", DataType.SharedString, value);}
    public get UnscaledCofm() {return this.GetProp("UnscaledCofm", DataType.Vector3);}
    public set UnscaledCofm(value) {this.SetProp("UnscaledCofm", DataType.Vector3, value);}
    public get UnscaledVolInertiaDiags() {return this.GetProp("UnscaledVolInertiaDiags", DataType.Vector3);}
    public set UnscaledVolInertiaDiags(value) {this.SetProp("UnscaledVolInertiaDiags", DataType.Vector3, value);}
    public get UnscaledVolInertiaOffDiags() {return this.GetProp("UnscaledVolInertiaOffDiags", DataType.Vector3);}
    public set UnscaledVolInertiaOffDiags(value) {this.SetProp("UnscaledVolInertiaOffDiags", DataType.Vector3, value);}
    public get UnscaledVolume() {return this.GetProp("UnscaledVolume", DataType.Float32);}
    public set UnscaledVolume(value) {this.SetProp("UnscaledVolume", DataType.Float32, value);}
}

export class MeshPart extends TriangleMeshPart {
    public constructor()
    {
        super();
        this.addClassName("MeshPart");
        this.Name = "MeshPart";
        this.DoubleSided = false;
        this.HasJointOffset = false;
        this.HasSkinnedMesh = false;
        this.InitialSize = new Vector3(0, 0, 0);
        this.JointOffset = new Vector3(0, 0, 0);
        this.MeshID = "";
        this.MeshId = "";
        this.PhysicsData = "";
        this.RenderFidelity = RenderFidelity.Automatic;
        this.TextureID = "";
        this.VertexCount = 0;
        this.Anchored = false;
        this.CanCollide = true;
        this.Color3uint8 = Color3.FromRGB(163, 162, 165);
        this.Transparency = 0;
    }
    public get DoubleSided() {return this.GetProp("DoubleSided", DataType.Bool)!;}
    public set DoubleSided(value) {this.SetProp("DoubleSided", DataType.Bool, value);}
    public get HasJointOffset() {return this.GetProp("HasJointOffset", DataType.Bool)!;}
    public set HasJointOffset(value) {this.SetProp("HasJointOffset", DataType.Bool, value);}
    public get HasSkinnedMesh() {return this.GetProp("HasSkinnedMesh", DataType.Bool)!;}
    public set HasSkinnedMesh(value) {this.SetProp("HasSkinnedMesh", DataType.Bool, value);}
    public get InitialSize() {return this.GetProp("InitialSize", DataType.Vector3)!;}
    public set InitialSize(value) {this.SetProp("InitialSize", DataType.Vector3, value);}
    public get JointOffset() {return this.GetProp("JointOffset", DataType.Vector3)!;}
    public set JointOffset(value) {this.SetProp("JointOffset", DataType.Vector3, value);}
    public get MeshContent() {return this.GetProp("MeshContent", DataType.String);}
    public set MeshContent(value) {this.SetProp("MeshContent", DataType.String, value);}
    /**@deprecated Deprecated by Roblox*/
    public get MeshID() {return this.GetProp("MeshID", DataType.String)!;}
    /**@deprecated Deprecated by Roblox*/
    public set MeshID(value) {this.SetProp("MeshID", DataType.String, value);}
    public get MeshId() {return this.GetProp("MeshId", DataType.String)!;}
    public set MeshId(value) {this.SetProp("MeshId", DataType.String, value);}
    public get PhysicsData() {return this.GetProp("PhysicsData", DataType.String)!;}
    public set PhysicsData(value) {this.SetProp("PhysicsData", DataType.String, value);}
    public get RenderFidelity() {return this.GetProp("RenderFidelity", DataType.Enum)! as RenderFidelity;}
    public set RenderFidelity(value) {this.SetProp("RenderFidelity", DataType.Enum, value);}
    public get TextureContent() {return this.GetProp("TextureContent", DataType.String);}
    public set TextureContent(value) {this.SetProp("TextureContent", DataType.String, value);}
    public get TextureID() {return this.GetProp("TextureID", DataType.String)!;}
    public set TextureID(value) {this.SetProp("TextureID", DataType.String, value);}
    public get VertexCount() {return this.GetProp("VertexCount", DataType.Int32)!;}
    public set VertexCount(value) {this.SetProp("VertexCount", DataType.Int32, value);}
}

export class PartOperation extends TriangleMeshPart {
    public constructor()
    {
        super();
        this.addClassName("PartOperation");
        this.Name = "PartOperation";
        this.AssetId = "";
        this.ChildData = "";
        this.ComponentIndex = -1;
        this.FormFactor = FormFactor.Custom;
        this.InitialSize = new Vector3(1, 1, 1);
        this.MeshData = "";
        this.OffCentered = false;
        this.PhysicsData = "";
        this.RenderFidelity = RenderFidelity.Automatic;
        this.SmoothingAngle = 0;
        this.UsePartColor = false;
        this.Color3uint8 = Color3.FromRGB(255, 255, 255);
    }
    public get AssetId() {return this.GetProp("AssetId", DataType.String)!;}
    public set AssetId(value) {this.SetProp("AssetId", DataType.String, value);}
    public get ChildData() {return this.GetProp("ChildData", DataType.String)!;}
    public set ChildData(value) {this.SetProp("ChildData", DataType.String, value);}
    public get ChildData2() {return this.GetProp("ChildData2", DataType.SharedString);}
    public set ChildData2(value) {this.SetProp("ChildData2", DataType.SharedString, value);}
    public get ComponentIndex() {return this.GetProp("ComponentIndex", DataType.Int32)!;}
    public set ComponentIndex(value) {this.SetProp("ComponentIndex", DataType.Int32, value);}
    public get FormFactor() {return this.GetProp("FormFactor", DataType.Enum)! as FormFactor;}
    public set FormFactor(value) {this.SetProp("FormFactor", DataType.Enum, value);}
    public get InitialSize() {return this.GetProp("InitialSize", DataType.Vector3)!;}
    public set InitialSize(value) {this.SetProp("InitialSize", DataType.Vector3, value);}
    public get MeshData() {return this.GetProp("MeshData", DataType.String)!;}
    public set MeshData(value) {this.SetProp("MeshData", DataType.String, value);}
    public get MeshData2() {return this.GetProp("MeshData2", DataType.SharedString);}
    public set MeshData2(value) {this.SetProp("MeshData2", DataType.SharedString, value);}
    public get OffCentered() {return this.GetProp("OffCentered", DataType.Bool)!;}
    public set OffCentered(value) {this.SetProp("OffCentered", DataType.Bool, value);}
    public get PhysicsData() {return this.GetProp("PhysicsData", DataType.String)!;}
    public set PhysicsData(value) {this.SetProp("PhysicsData", DataType.String, value);}
    public get RenderFidelity() {return this.GetProp("RenderFidelity", DataType.Enum)! as RenderFidelity;}
    public set RenderFidelity(value) {this.SetProp("RenderFidelity", DataType.Enum, value);}
    public get SmoothingAngle() {return this.GetProp("SmoothingAngle", DataType.Float32)!;}
    public set SmoothingAngle(value) {this.SetProp("SmoothingAngle", DataType.Float32, value);}
    public get UsePartColor() {return this.GetProp("UsePartColor", DataType.Bool)!;}
    public set UsePartColor(value) {this.SetProp("UsePartColor", DataType.Bool, value);}
}

export class IntersectOperation extends PartOperation {
    public constructor()
    {
        super();
        this.addClassName("IntersectOperation");
        this.Name = "IntersectOperation";
        this.Anchored = false;
        this.CanCollide = true;
        this.Transparency = 0;
    }
}

export class NegateOperation extends PartOperation {
    public constructor()
    {
        super();
        this.addClassName("NegateOperation");
        this.Name = "NegateOperation";
        this.Anchored = true;
        this.CanCollide = false;
        this.Transparency = 0.1;
    }
}

export class UnionOperation extends PartOperation {
    public constructor()
    {
        super();
        this.addClassName("UnionOperation");
        this.Name = "UnionOperation";
        this.Anchored = false;
        this.CanCollide = true;
        this.Transparency = 0;
    }
}

export class TrussPart extends BasePart {
    public constructor()
    {
        super();
        this.addClassName("TrussPart");
        this.Name = "TrussPart";
        this.Style = Style.AlternatingSupports;
        this.Anchored = false;
        this.BackSurface = SurfaceType.Universal;
        this.BottomSurface = SurfaceType.Universal;
        this.CanCollide = true;
        this.Color3uint8 = Color3.FromRGB(163, 162, 165);
        this.Elasticity = 0.5;
        this.Friction = 0.3;
        this.FrontSurface = SurfaceType.Universal;
        this.LeftSurface = SurfaceType.Universal;
        this.Locked = false;
        this.RightSurface = SurfaceType.Universal;
        this.TopSurface = SurfaceType.Universal;
        this.Transparency = 0;
        this.Size = new Vector3(2, 2, 2);
    }
    public get Style() {return this.GetProp("style", DataType.Enum)! as Style;}
    public set Style(value) {this.SetProp("style", DataType.Enum, value);}
}

export class VehicleSeat extends BasePart {
    public constructor()
    {
        super();
        this.addClassName("VehicleSeat");
        this.Name = "VehicleSeat";
        this.Disabled = false;
        this.HeadsUpDisplay = true;
        this.MaxSpeed = 25;
        this.Steer = 0;
        this.SteerFloat = 0;
        this.Throttle = 0;
        this.ThrottleFloat = 0;
        this.Torque = 10;
        this.TurnSpeed = 1;
        this.Anchored = false;
        this.BackSurface = SurfaceType.Smooth;
        this.BottomSurface = SurfaceType.Inlet;
        this.CanCollide = true;
        this.Color3uint8 = Color3.FromRGB(163, 162, 165);
        this.Elasticity = 0.5;
        this.Friction = 0.3;
        this.FrontSurface = SurfaceType.Smooth;
        this.LeftSurface = SurfaceType.Smooth;
        this.Locked = false;
        this.RightSurface = SurfaceType.Smooth;
        this.TopSurface = SurfaceType.Studs;
        this.Transparency = 0;
        this.Size = new Vector3(4, 1.2, 2);
    }
    public get Disabled() {return this.GetProp("Disabled", DataType.Bool)!;}
    public set Disabled(value) {this.SetProp("Disabled", DataType.Bool, value);}
    public get HeadsUpDisplay() {return this.GetProp("HeadsUpDisplay", DataType.Bool)!;}
    public set HeadsUpDisplay(value) {this.SetProp("HeadsUpDisplay", DataType.Bool, value);}
    public get MaxSpeed() {return this.GetProp("MaxSpeed", DataType.Float32)!;}
    public set MaxSpeed(value) {this.SetProp("MaxSpeed", DataType.Float32, value);}
    public get Steer() {return this.GetProp("Steer", DataType.Int32)!;}
    public set Steer(value) {this.SetProp("Steer", DataType.Int32, value);}
    public get SteerFloat() {return this.GetProp("SteerFloat", DataType.Float32)!;}
    public set SteerFloat(value) {this.SetProp("SteerFloat", DataType.Float32, value);}
    public get Throttle() {return this.GetProp("Throttle", DataType.Int32)!;}
    public set Throttle(value) {this.SetProp("Throttle", DataType.Int32, value);}
    public get ThrottleFloat() {return this.GetProp("ThrottleFloat", DataType.Float32)!;}
    public set ThrottleFloat(value) {this.SetProp("ThrottleFloat", DataType.Float32, value);}
    public get Torque() {return this.GetProp("Torque", DataType.Float32)!;}
    public set Torque(value) {this.SetProp("Torque", DataType.Float32, value);}
    public get TurnSpeed() {return this.GetProp("TurnSpeed", DataType.Float32)!;}
    public set TurnSpeed(value) {this.SetProp("TurnSpeed", DataType.Float32, value);}
}

export class Camera extends PVInstance {
    public constructor()
    {
        super();
        this.addClassName("Camera");
        this.Name = "Camera";
        this.CameraType = CameraType.Fixed;
        this.FieldOfView = 70;
        this.FieldOfViewMode = FieldOfViewMode.Vertical;
        this.HeadLocked = true;
        this.HeadScale = 1;
        this.VRTiltAndRollEnabled = false;
        this.CFrame = new CFrame(new Vector3(0, 20, 20), [1, 0, -0, -0, 0.707106829, 0.707106829, 0, -0.707106829, 0.707106829]);
        this.Focus = new CFrame(new Vector3(0, 0, -5), [1, 0, 0, 0, 1, 0, 0, 0, 1]);
    }
    public get CFrame() {return this.GetProp("CFrame", DataType.CFrame)!;}
    public set CFrame(value) {this.SetProp("CFrame", DataType.CFrame, value);}
    public get CameraSubject() {return this.GetProp("CameraSubject", DataType.Referent) as Instance | undefined;}
    public set CameraSubject(value) {this.SetProp("CameraSubject", DataType.Referent, value);}
    public get CameraType() {return this.GetProp("CameraType", DataType.Enum)! as CameraType;}
    public set CameraType(value) {this.SetProp("CameraType", DataType.Enum, value);}
    /**@deprecated Deprecated by Roblox*/
    public get CoordinateFrame() {return this.CFrame;}
    /**@deprecated Deprecated by Roblox*/
    public set CoordinateFrame(value) {this.CFrame = value;}
    public get FieldOfView() {return this.GetProp("FieldOfView", DataType.Float32)!;}
    public set FieldOfView(value) {this.SetProp("FieldOfView", DataType.Float32, value);}
    public get FieldOfViewMode() {return this.GetProp("FieldOfViewMode", DataType.Enum)! as FieldOfViewMode;}
    public set FieldOfViewMode(value) {this.SetProp("FieldOfViewMode", DataType.Enum, value);}
    public get Focus() {return this.GetProp("Focus", DataType.CFrame)!;}
    public set Focus(value) {this.SetProp("Focus", DataType.CFrame, value);}
    public get HeadLocked() {return this.GetProp("HeadLocked", DataType.Bool)!;}
    public set HeadLocked(value) {this.SetProp("HeadLocked", DataType.Bool, value);}
    public get HeadScale() {return this.GetProp("HeadScale", DataType.Float32)!;}
    public set HeadScale(value) {this.SetProp("HeadScale", DataType.Float32, value);}
    public get VRTiltAndRollEnabled() {return this.GetProp("VRTiltAndRollEnabled", DataType.Bool)!;}
    public set VRTiltAndRollEnabled(value) {this.SetProp("VRTiltAndRollEnabled", DataType.Bool, value);}
}

export class Model extends PVInstance {
    public constructor()
    {
        super();
        this.addClassName("Model");
        this.Name = "Model";
        this.LevelOfDetail = ModelLevelOfDetail.Automatic;
        this.ModelMeshSize = new Vector3(0, 0, 0);
        this.ModelStreamingMode = ModelStreamingMode.Default;
        this.NeedsPivotMigration = false;
        this.ScaleFactor = 1;
    }
    public get LevelOfDetail() {return this.GetProp("LevelOfDetail", DataType.Enum)! as ModelLevelOfDetail;}
    public set LevelOfDetail(value) {this.SetProp("LevelOfDetail", DataType.Enum, value);}
    public get ModelMeshCFrame() {return this.GetProp("ModelMeshCFrame", DataType.CFrame);}
    public set ModelMeshCFrame(value) {this.SetProp("ModelMeshCFrame", DataType.CFrame, value);}
    public get ModelMeshData() {return this.GetProp("ModelMeshData", DataType.SharedString);}
    public set ModelMeshData(value) {this.SetProp("ModelMeshData", DataType.SharedString, value);}
    public get ModelMeshSize() {return this.GetProp("ModelMeshSize", DataType.Vector3)!;}
    public set ModelMeshSize(value) {this.SetProp("ModelMeshSize", DataType.Vector3, value);}
    public get ModelStreamingMode() {return this.GetProp("ModelStreamingMode", DataType.Enum)! as ModelStreamingMode;}
    public set ModelStreamingMode(value) {this.SetProp("ModelStreamingMode", DataType.Enum, value);}
    public get NeedsPivotMigration() {return this.GetProp("NeedsPivotMigration", DataType.Bool)!;}
    public set NeedsPivotMigration(value) {this.SetProp("NeedsPivotMigration", DataType.Bool, value);}
    public get PrimaryPart() {return this.GetProp("PrimaryPart", DataType.Referent) as BasePart | undefined;}
    public set PrimaryPart(value) {this.SetProp("PrimaryPart", DataType.Referent, value);}
    public get ScaleFactor() {return this.GetProp("ScaleFactor", DataType.Float32)!;}
    public set ScaleFactor(value) {this.SetProp("ScaleFactor", DataType.Float32, value);}
    public get WorldPivotData() {return this.GetProp("WorldPivotData", DataType.OptionalCFrame);}
    public set WorldPivotData(value) {this.SetProp("WorldPivotData", DataType.OptionalCFrame, value);}
}

export class Actor extends Model {
    public constructor()
    {
        super();
        this.addClassName("Actor");
        this.Name = "Actor";
    }
}

export abstract class BackpackItem extends Model {
    public constructor()
    {
        super();
        this.addClassName("BackpackItem");
        this.TextureId = "";
    }
    public get TextureId() {return this.GetProp("TextureId", DataType.String)!;}
    public set TextureId(value) {this.SetProp("TextureId", DataType.String, value);}
}

/**@deprecated Deprecated by Roblox*/
export class HopperBin extends BackpackItem {
    public constructor()
    {
        super();
        this.addClassName("HopperBin");
        this.Name = "HopperBin";
        this.Active = false;
        this.BinType = BinType.Script;
    }
    public get Active() {return this.GetProp("Active", DataType.Bool)!;}
    public set Active(value) {this.SetProp("Active", DataType.Bool, value);}
    public get BinType() {return this.GetProp("BinType", DataType.Enum)! as BinType;}
    public set BinType(value) {this.SetProp("BinType", DataType.Enum, value);}
}

export class Tool extends BackpackItem {
    public constructor()
    {
        super();
        this.addClassName("Tool");
        this.Name = "Tool";
        this.CanBeDropped = true;
        this.Enabled = true;
        this.ManualActivationOnly = false;
        this.RequiresHandle = true;
        this.ToolTip = "";
        this.Grip = CFrame.Identity;
    }
    public get CanBeDropped() {return this.GetProp("CanBeDropped", DataType.Bool)!;}
    public set CanBeDropped(value) {this.SetProp("CanBeDropped", DataType.Bool, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get Grip() {return this.GetProp("Grip", DataType.CFrame)!;}
    public set Grip(value) {this.SetProp("Grip", DataType.CFrame, value);}
    public get ManualActivationOnly() {return this.GetProp("ManualActivationOnly", DataType.Bool)!;}
    public set ManualActivationOnly(value) {this.SetProp("ManualActivationOnly", DataType.Bool, value);}
    public get RequiresHandle() {return this.GetProp("RequiresHandle", DataType.Bool)!;}
    public set RequiresHandle(value) {this.SetProp("RequiresHandle", DataType.Bool, value);}
    public get ToolTip() {return this.GetProp("ToolTip", DataType.String)!;}
    public set ToolTip(value) {this.SetProp("ToolTip", DataType.String, value);}
}

/**@deprecated Deprecated by Roblox*/
export class Flag extends Tool {
    public constructor()
    {
        super();
        this.addClassName("Flag");
        this.Name = "Flag";
    }
    public get TeamColor() {return this.GetProp("TeamColor", DataType.BrickColor);}
    public set TeamColor(value) {this.SetProp("TeamColor", DataType.BrickColor, value);}
}

export abstract class WorldRoot extends Model {
    public constructor()
    {
        super();
        this.addClassName("WorldRoot");
    }
}

export class Workspace extends WorldRoot {
    public constructor()
    {
        super();
        this._isService = true;
        this.addClassName("Workspace");
        this.Name = "Workspace";
        this.AirDensity = 0.0012;
        this.AllowThirdPartySales = false;
        this.ClientAnimatorThrottling = ClientAnimatorThrottlingMode.Default;
        this.DistributedGameTime = 0;
        this.FallenPartsDestroyHeight = -500;
        this.GlobalWind = new Vector3(0, 0, 0);
        this.Gravity = 196.2;
        this.Retargeting = AnimatorRetargetingMode.Default;
        this.StreamingEnabled = true;
    }
    public get AirDensity() {return this.GetProp("AirDensity", DataType.Float32)!;}
    public set AirDensity(value) {this.SetProp("AirDensity", DataType.Float32, value);}
    public get AllowThirdPartySales() {return this.GetProp("AllowThirdPartySales", DataType.Bool)!;}
    public set AllowThirdPartySales(value) {this.SetProp("AllowThirdPartySales", DataType.Bool, value);}
    public get AvatarUnificationMode() {return this.GetProp("AvatarUnificationMode", DataType.Enum) as AvatarUnificationMode | undefined;}
    public set AvatarUnificationMode(value) {this.SetProp("AvatarUnificationMode", DataType.Enum, value);}
    public get ClientAnimatorThrottling() {return this.GetProp("ClientAnimatorThrottling", DataType.Enum)! as ClientAnimatorThrottlingMode;}
    public set ClientAnimatorThrottling(value) {this.SetProp("ClientAnimatorThrottling", DataType.Enum, value);}
    public get CollisionGroupData() {return this.GetProp("CollisionGroupData", DataType.String);}
    public set CollisionGroupData(value) {this.SetProp("CollisionGroupData", DataType.String, value);}
    public get CurrentCamera() {return this.GetProp("CurrentCamera", DataType.Referent) as Camera | undefined;}
    public set CurrentCamera(value) {this.SetProp("CurrentCamera", DataType.Referent, value);}
    public get DistributedGameTime() {return this.GetProp("DistributedGameTime", DataType.Float64)!;}
    public set DistributedGameTime(value) {this.SetProp("DistributedGameTime", DataType.Float64, value);}
    public get ExplicitAutoJoints() {return this.GetProp("ExplicitAutoJoints", DataType.Bool);}
    public set ExplicitAutoJoints(value) {this.SetProp("ExplicitAutoJoints", DataType.Bool, value);}
    public get FallHeightEnabled() {return this.GetProp("FallHeightEnabled", DataType.Bool);}
    public set FallHeightEnabled(value) {this.SetProp("FallHeightEnabled", DataType.Bool, value);}
    public get FallenPartsDestroyHeight() {return this.GetProp("FallenPartsDestroyHeight", DataType.Float32)!;}
    public set FallenPartsDestroyHeight(value) {this.SetProp("FallenPartsDestroyHeight", DataType.Float32, value);}
    public get FluidForces() {return this.GetProp("FluidForces", DataType.Enum) as FluidForces | undefined;}
    public set FluidForces(value) {this.SetProp("FluidForces", DataType.Enum, value);}
    public get GlobalWind() {return this.GetProp("GlobalWind", DataType.Vector3)!;}
    public set GlobalWind(value) {this.SetProp("GlobalWind", DataType.Vector3, value);}
    public get Gravity() {return this.GetProp("Gravity", DataType.Float32)!;}
    public set Gravity(value) {this.SetProp("Gravity", DataType.Float32, value);}
    public get IKControlConstraintSupport() {return this.GetProp("IKControlConstraintSupport", DataType.Enum) as IKControlConstraintSupport | undefined;}
    public set IKControlConstraintSupport(value) {this.SetProp("IKControlConstraintSupport", DataType.Enum, value);}
    public get MeshPartHeadsAndAccessories() {return this.GetProp("MeshPartHeadsAndAccessories", DataType.Enum) as MeshPartHeadsAndAccessories | undefined;}
    public set MeshPartHeadsAndAccessories(value) {this.SetProp("MeshPartHeadsAndAccessories", DataType.Enum, value);}
    public get ModelStreamingBehavior() {return this.GetProp("ModelStreamingBehavior", DataType.Enum) as ModelStreamingBehavior | undefined;}
    public set ModelStreamingBehavior(value) {this.SetProp("ModelStreamingBehavior", DataType.Enum, value);}
    public get MoverConstraintRootBehavior() {return this.GetProp("MoverConstraintRootBehavior", DataType.Enum) as MoverConstraintRootBehaviorMode | undefined;}
    public set MoverConstraintRootBehavior(value) {this.SetProp("MoverConstraintRootBehavior", DataType.Enum, value);}
    public get PathfindingUseImprovedSearch() {return this.GetProp("PathfindingUseImprovedSearch", DataType.Enum) as PathfindingUseImprovedSearch | undefined;}
    public set PathfindingUseImprovedSearch(value) {this.SetProp("PathfindingUseImprovedSearch", DataType.Enum, value);}
    public get PhysicsImprovedSleep() {return this.GetProp("PhysicsImprovedSleep", DataType.Enum) as RolloutState | undefined;}
    public set PhysicsImprovedSleep(value) {this.SetProp("PhysicsImprovedSleep", DataType.Enum, value);}
    public get PhysicsSteppingMethod() {return this.GetProp("PhysicsSteppingMethod", DataType.Enum) as PhysicsSteppingMethod | undefined;}
    public set PhysicsSteppingMethod(value) {this.SetProp("PhysicsSteppingMethod", DataType.Enum, value);}
    public get PlayerCharacterDestroyBehavior() {return this.GetProp("PlayerCharacterDestroyBehavior", DataType.Enum) as PlayerCharacterDestroyBehavior | undefined;}
    public set PlayerCharacterDestroyBehavior(value) {this.SetProp("PlayerCharacterDestroyBehavior", DataType.Enum, value);}
    public get PrimalPhysicsSolver() {return this.GetProp("PrimalPhysicsSolver", DataType.Enum) as PrimalPhysicsSolver | undefined;}
    public set PrimalPhysicsSolver(value) {this.SetProp("PrimalPhysicsSolver", DataType.Enum, value);}
    public get RejectCharacterDeletions() {return this.GetProp("RejectCharacterDeletions", DataType.Enum) as RejectCharacterDeletions | undefined;}
    public set RejectCharacterDeletions(value) {this.SetProp("RejectCharacterDeletions", DataType.Enum, value);}
    public get RenderingCacheOptimizations() {return this.GetProp("RenderingCacheOptimizations", DataType.Enum) as RenderingCacheOptimizationMode | undefined;}
    public set RenderingCacheOptimizations(value) {this.SetProp("RenderingCacheOptimizations", DataType.Enum, value);}
    public get ReplicateInstanceDestroySetting() {return this.GetProp("ReplicateInstanceDestroySetting", DataType.Enum) as ReplicateInstanceDestroySetting | undefined;}
    public set ReplicateInstanceDestroySetting(value) {this.SetProp("ReplicateInstanceDestroySetting", DataType.Enum, value);}
    public get Retargeting() {return this.GetProp("Retargeting", DataType.Enum)! as AnimatorRetargetingMode;}
    public set Retargeting(value) {this.SetProp("Retargeting", DataType.Enum, value);}
    public get SandboxedInstanceMode() {return this.GetProp("SandboxedInstanceMode", DataType.Enum) as SandboxedInstanceMode | undefined;}
    public set SandboxedInstanceMode(value) {this.SetProp("SandboxedInstanceMode", DataType.Enum, value);}
    public get SignalBehavior2() {return this.GetProp("SignalBehavior2", DataType.Enum) as SignalBehavior | undefined;}
    public set SignalBehavior2(value) {this.SetProp("SignalBehavior2", DataType.Enum, value);}
    public get StreamOutBehavior() {return this.GetProp("StreamOutBehavior", DataType.Enum) as StreamOutBehavior | undefined;}
    public set StreamOutBehavior(value) {this.SetProp("StreamOutBehavior", DataType.Enum, value);}
    public get StreamingEnabled() {return this.GetProp("StreamingEnabled", DataType.Bool)!;}
    public set StreamingEnabled(value) {this.SetProp("StreamingEnabled", DataType.Bool, value);}
    public get StreamingIntegrityMode() {return this.GetProp("StreamingIntegrityMode", DataType.Enum) as StreamingIntegrityMode | undefined;}
    public set StreamingIntegrityMode(value) {this.SetProp("StreamingIntegrityMode", DataType.Enum, value);}
    public get StreamingMinRadius() {return this.GetProp("StreamingMinRadius", DataType.Int32);}
    public set StreamingMinRadius(value) {this.SetProp("StreamingMinRadius", DataType.Int32, value);}
    public get StreamingTargetRadius() {return this.GetProp("StreamingTargetRadius", DataType.Int32);}
    public set StreamingTargetRadius(value) {this.SetProp("StreamingTargetRadius", DataType.Int32, value);}
    public get TerrainWeldsFixed() {return this.GetProp("TerrainWeldsFixed", DataType.Bool);}
    public set TerrainWeldsFixed(value) {this.SetProp("TerrainWeldsFixed", DataType.Bool, value);}
    public get TouchEventsUseCollisionGroups() {return this.GetProp("TouchEventsUseCollisionGroups", DataType.Enum) as RolloutState | undefined;}
    public set TouchEventsUseCollisionGroups(value) {this.SetProp("TouchEventsUseCollisionGroups", DataType.Enum, value);}
    public get TouchesUseCollisionGroups() {return this.GetProp("TouchesUseCollisionGroups", DataType.Bool);}
    public set TouchesUseCollisionGroups(value) {this.SetProp("TouchesUseCollisionGroups", DataType.Bool, value);}
}

export class WorldModel extends WorldRoot {
    public constructor()
    {
        super();
        this.addClassName("WorldModel");
        this.Name = "WorldModel";
    }
}

export class PackageService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("PackageService");
        this.Name = "PackageService";
    }
}

export class PackageUIService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("PackageUIService");
        this.Name = "PackageUIService";
    }
}

export class PartOperationAsset extends Instance {
    public constructor()
    {
        super();
        this.addClassName("PartOperationAsset");
        this.Name = "PartOperationAsset";
        this.ChildData = "";
        this.MeshData = "";
    }
    public get ChildData() {return this.GetProp("ChildData", DataType.String)!;}
    public set ChildData(value) {this.SetProp("ChildData", DataType.String, value);}
    public get MeshData() {return this.GetProp("MeshData", DataType.String)!;}
    public set MeshData(value) {this.SetProp("MeshData", DataType.String, value);}
}

export class ParticleEmitter extends Instance {
    public constructor()
    {
        super();
        this.addClassName("ParticleEmitter");
        this.Name = "ParticleEmitter";
        this.Acceleration = new Vector3(0, 0, 0);
        this.Brightness = 1;
        this.Color = new ColorSequence(new ColorSequenceKeypoint(0, Color3.FromRGB(255, 255, 255)), new ColorSequenceKeypoint(1, Color3.FromRGB(255, 255, 255)));
        this.Drag = 0;
        this.EmissionDirection = NormalId.Top;
        this.Enabled = true;
        this.FlipbookFramerate = new NumberRange(1, 1);
        this.FlipbookIncompatible = "Particle texture must be 1024 by 1024 to use flipbooks.";
        this.FlipbookLayout = ParticleFlipbookLayout.None;
        this.FlipbookMode = ParticleFlipbookMode.Loop;
        this.FlipbookStartRandom = false;
        this.Lifetime = new NumberRange(5, 10);
        this.LightEmission = 0;
        this.LightInfluence = 0;
        this.LockedToPart = false;
        this.Orientation = ParticleOrientation.FacingCamera;
        this.Rate = 20;
        this.RotSpeed = new NumberRange(0, 0);
        this.Rotation = new NumberRange(0, 0);
        this.Shape = ParticleEmitterShape.Box;
        this.ShapeInOut = ParticleEmitterShapeInOut.Outward;
        this.ShapePartial = 1;
        this.ShapeStyle = ParticleEmitterShapeStyle.Volume;
        this.Size = new NumberSequence(new NumberSequenceKeypoint(0, 1, 0), new NumberSequenceKeypoint(1, 1, 0));
        this.Speed = new NumberRange(5, 5);
        this.SpreadAngle = new Vector2(0, 0);
        this.Squash = new NumberSequence(new NumberSequenceKeypoint(0, 0, 0), new NumberSequenceKeypoint(1, 0, 0));
        this.Texture = "rbxasset://textures/particles/sparkles_main.dds";
        this.TimeScale = 1;
        this.Transparency = new NumberSequence(new NumberSequenceKeypoint(0, 0, 0), new NumberSequenceKeypoint(1, 0, 0));
        this.VelocityInheritance = 0;
        this.VelocitySpread = 0;
        this.WindAffectsDrag = false;
        this.ZOffset = 0;
    }
    public get Acceleration() {return this.GetProp("Acceleration", DataType.Vector3)!;}
    public set Acceleration(value) {this.SetProp("Acceleration", DataType.Vector3, value);}
    public get Brightness() {return this.GetProp("Brightness", DataType.Float32)!;}
    public set Brightness(value) {this.SetProp("Brightness", DataType.Float32, value);}
    public get Color() {return this.GetProp("Color", DataType.ColorSequence)!;}
    public set Color(value) {this.SetProp("Color", DataType.ColorSequence, value);}
    public get Drag() {return this.GetProp("Drag", DataType.Float32)!;}
    public set Drag(value) {this.SetProp("Drag", DataType.Float32, value);}
    public get EmissionDirection() {return this.GetProp("EmissionDirection", DataType.Enum)! as NormalId;}
    public set EmissionDirection(value) {this.SetProp("EmissionDirection", DataType.Enum, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get FlipbookFramerate() {return this.GetProp("FlipbookFramerate", DataType.NumberRange)!;}
    public set FlipbookFramerate(value) {this.SetProp("FlipbookFramerate", DataType.NumberRange, value);}
    public get FlipbookIncompatible() {return this.GetProp("FlipbookIncompatible", DataType.String)!;}
    public set FlipbookIncompatible(value) {this.SetProp("FlipbookIncompatible", DataType.String, value);}
    public get FlipbookLayout() {return this.GetProp("FlipbookLayout", DataType.Enum)! as ParticleFlipbookLayout;}
    public set FlipbookLayout(value) {this.SetProp("FlipbookLayout", DataType.Enum, value);}
    public get FlipbookMode() {return this.GetProp("FlipbookMode", DataType.Enum)! as ParticleFlipbookMode;}
    public set FlipbookMode(value) {this.SetProp("FlipbookMode", DataType.Enum, value);}
    public get FlipbookStartRandom() {return this.GetProp("FlipbookStartRandom", DataType.Bool)!;}
    public set FlipbookStartRandom(value) {this.SetProp("FlipbookStartRandom", DataType.Bool, value);}
    public get Lifetime() {return this.GetProp("Lifetime", DataType.NumberRange)!;}
    public set Lifetime(value) {this.SetProp("Lifetime", DataType.NumberRange, value);}
    public get LightEmission() {return this.GetProp("LightEmission", DataType.Float32)!;}
    public set LightEmission(value) {this.SetProp("LightEmission", DataType.Float32, value);}
    public get LightInfluence() {return this.GetProp("LightInfluence", DataType.Float32)!;}
    public set LightInfluence(value) {this.SetProp("LightInfluence", DataType.Float32, value);}
    public get LockedToPart() {return this.GetProp("LockedToPart", DataType.Bool)!;}
    public set LockedToPart(value) {this.SetProp("LockedToPart", DataType.Bool, value);}
    public get Orientation() {return this.GetProp("Orientation", DataType.Enum)! as ParticleOrientation;}
    public set Orientation(value) {this.SetProp("Orientation", DataType.Enum, value);}
    public get Rate() {return this.GetProp("Rate", DataType.Float32)!;}
    public set Rate(value) {this.SetProp("Rate", DataType.Float32, value);}
    public get RotSpeed() {return this.GetProp("RotSpeed", DataType.NumberRange)!;}
    public set RotSpeed(value) {this.SetProp("RotSpeed", DataType.NumberRange, value);}
    public get Rotation() {return this.GetProp("Rotation", DataType.NumberRange)!;}
    public set Rotation(value) {this.SetProp("Rotation", DataType.NumberRange, value);}
    public get Shape() {return this.GetProp("Shape", DataType.Enum)! as ParticleEmitterShape;}
    public set Shape(value) {this.SetProp("Shape", DataType.Enum, value);}
    public get ShapeInOut() {return this.GetProp("ShapeInOut", DataType.Enum)! as ParticleEmitterShapeInOut;}
    public set ShapeInOut(value) {this.SetProp("ShapeInOut", DataType.Enum, value);}
    public get ShapePartial() {return this.GetProp("ShapePartial", DataType.Float32)!;}
    public set ShapePartial(value) {this.SetProp("ShapePartial", DataType.Float32, value);}
    public get ShapeStyle() {return this.GetProp("ShapeStyle", DataType.Enum)! as ParticleEmitterShapeStyle;}
    public set ShapeStyle(value) {this.SetProp("ShapeStyle", DataType.Enum, value);}
    public get Size() {return this.GetProp("Size", DataType.NumberSequence)!;}
    public set Size(value) {this.SetProp("Size", DataType.NumberSequence, value);}
    public get Speed() {return this.GetProp("Speed", DataType.NumberRange)!;}
    public set Speed(value) {this.SetProp("Speed", DataType.NumberRange, value);}
    public get SpreadAngle() {return this.GetProp("SpreadAngle", DataType.Vector2)!;}
    public set SpreadAngle(value) {this.SetProp("SpreadAngle", DataType.Vector2, value);}
    public get Squash() {return this.GetProp("Squash", DataType.NumberSequence)!;}
    public set Squash(value) {this.SetProp("Squash", DataType.NumberSequence, value);}
    public get Texture() {return this.GetProp("Texture", DataType.String)!;}
    public set Texture(value) {this.SetProp("Texture", DataType.String, value);}
    public get TimeScale() {return this.GetProp("TimeScale", DataType.Float32)!;}
    public set TimeScale(value) {this.SetProp("TimeScale", DataType.Float32, value);}
    public get Transparency() {return this.GetProp("Transparency", DataType.NumberSequence)!;}
    public set Transparency(value) {this.SetProp("Transparency", DataType.NumberSequence, value);}
    public get VelocityInheritance() {return this.GetProp("VelocityInheritance", DataType.Float32)!;}
    public set VelocityInheritance(value) {this.SetProp("VelocityInheritance", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get VelocitySpread() {return this.GetProp("VelocitySpread", DataType.Float32)!;}
    /**@deprecated Deprecated by Roblox*/
    public set VelocitySpread(value) {this.SetProp("VelocitySpread", DataType.Float32, value);}
    public get WindAffectsDrag() {return this.GetProp("WindAffectsDrag", DataType.Bool)!;}
    public set WindAffectsDrag(value) {this.SetProp("WindAffectsDrag", DataType.Bool, value);}
    public get ZOffset() {return this.GetProp("ZOffset", DataType.Float32)!;}
    public set ZOffset(value) {this.SetProp("ZOffset", DataType.Float32, value);}
}

export class PatchBundlerFileWatch extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("PatchBundlerFileWatch");
        this.Name = "PatchBundlerFileWatch";
    }
}

export class PathfindingLink extends Instance {
    public constructor()
    {
        super();
        this.addClassName("PathfindingLink");
        this.Name = "PathfindingLink";
        this.IsBidirectional = true;
        this.Label = "";
    }
    public get Attachment0() {return this.GetProp("Attachment0", DataType.Referent) as Attachment | undefined;}
    public set Attachment0(value) {this.SetProp("Attachment0", DataType.Referent, value);}
    public get Attachment1() {return this.GetProp("Attachment1", DataType.Referent) as Attachment | undefined;}
    public set Attachment1(value) {this.SetProp("Attachment1", DataType.Referent, value);}
    public get IsBidirectional() {return this.GetProp("IsBidirectional", DataType.Bool)!;}
    public set IsBidirectional(value) {this.SetProp("IsBidirectional", DataType.Bool, value);}
    public get Label() {return this.GetProp("Label", DataType.String)!;}
    public set Label(value) {this.SetProp("Label", DataType.String, value);}
}

export class PathfindingModifier extends Instance {
    public constructor()
    {
        super();
        this.addClassName("PathfindingModifier");
        this.Name = "PathfindingModifier";
        this.Label = "";
        this.PassThrough = false;
    }
    public get Label() {return this.GetProp("Label", DataType.String)!;}
    public set Label(value) {this.SetProp("Label", DataType.String, value);}
    public get PassThrough() {return this.GetProp("PassThrough", DataType.Bool)!;}
    public set PassThrough(value) {this.SetProp("PassThrough", DataType.Bool, value);}
}

export class PathfindingService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("PathfindingService");
        this.Name = "PathfindingService";
        this.EmptyCutoff = 0;
    }
    /**@deprecated Deprecated by Roblox*/
    public get EmptyCutoff() {return this.GetProp("EmptyCutoff", DataType.Float32)!;}
    /**@deprecated Deprecated by Roblox*/
    public set EmptyCutoff(value) {this.SetProp("EmptyCutoff", DataType.Float32, value);}
}

export class PerformanceControlService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("PerformanceControlService");
        this.Name = "PerformanceControlService";
    }
}

export class PermissionsService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("PermissionsService");
        this.Name = "PermissionsService";
    }
}

export class PhysicsService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("PhysicsService");
        this.Name = "PhysicsService";
    }
}

export class PlaceAssetIdsService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("PlaceAssetIdsService");
        this.Name = "PlaceAssetIdsService";
    }
}

export class PlaceStatsService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("PlaceStatsService");
        this.Name = "PlaceStatsService";
    }
}

export class PlacesService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("PlacesService");
        this.Name = "PlacesService";
    }
}

export class PlatformCloudStorageService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("PlatformCloudStorageService");
        this.Name = "PlatformCloudStorageService";
    }
}

export class PlatformFriendsService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("PlatformFriendsService");
        this.Name = "PlatformFriendsService";
    }
}

export class Player extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Player");
        this.Name = "Player";
    }
    public get AutoJumpEnabled() {return this.GetProp("AutoJumpEnabled", DataType.Bool);}
    public set AutoJumpEnabled(value) {this.SetProp("AutoJumpEnabled", DataType.Bool, value);}
    public get CameraMaxZoomDistance() {return this.GetProp("CameraMaxZoomDistance", DataType.Float32);}
    public set CameraMaxZoomDistance(value) {this.SetProp("CameraMaxZoomDistance", DataType.Float32, value);}
    public get CameraMinZoomDistance() {return this.GetProp("CameraMinZoomDistance", DataType.Float32);}
    public set CameraMinZoomDistance(value) {this.SetProp("CameraMinZoomDistance", DataType.Float32, value);}
    public get CameraMode() {return this.GetProp("CameraMode", DataType.Enum) as CameraMode | undefined;}
    public set CameraMode(value) {this.SetProp("CameraMode", DataType.Enum, value);}
    public get Character() {return this.GetProp("Character", DataType.Referent) as Model | undefined;}
    public set Character(value) {this.SetProp("Character", DataType.Referent, value);}
    /**@deprecated Deprecated by Roblox*/
    public get CharacterAppearance() {return this.GetProp("CharacterAppearance", DataType.String);}
    /**@deprecated Deprecated by Roblox*/
    public set CharacterAppearance(value) {this.SetProp("CharacterAppearance", DataType.String, value);}
    public get CharacterAppearanceId() {return this.GetProp("CharacterAppearanceId", DataType.Int64);}
    public set CharacterAppearanceId(value) {this.SetProp("CharacterAppearanceId", DataType.Int64, value);}
    public get DevCameraOcclusionMode() {return this.GetProp("DevCameraOcclusionMode", DataType.Enum) as DevCameraOcclusionMode | undefined;}
    public set DevCameraOcclusionMode(value) {this.SetProp("DevCameraOcclusionMode", DataType.Enum, value);}
    public get DevComputerCameraMode() {return this.GetProp("DevComputerCameraMode", DataType.Enum) as DevComputerCameraMovementMode | undefined;}
    public set DevComputerCameraMode(value) {this.SetProp("DevComputerCameraMode", DataType.Enum, value);}
    public get DevComputerMovementMode() {return this.GetProp("DevComputerMovementMode", DataType.Enum) as DevComputerMovementMode | undefined;}
    public set DevComputerMovementMode(value) {this.SetProp("DevComputerMovementMode", DataType.Enum, value);}
    public get DevEnableMouseLock() {return this.GetProp("DevEnableMouseLock", DataType.Bool);}
    public set DevEnableMouseLock(value) {this.SetProp("DevEnableMouseLock", DataType.Bool, value);}
    public get DevTouchCameraMode() {return this.GetProp("DevTouchCameraMode", DataType.Enum) as DevTouchCameraMovementMode | undefined;}
    public set DevTouchCameraMode(value) {this.SetProp("DevTouchCameraMode", DataType.Enum, value);}
    public get DevTouchMovementMode() {return this.GetProp("DevTouchMovementMode", DataType.Enum) as DevTouchMovementMode | undefined;}
    public set DevTouchMovementMode(value) {this.SetProp("DevTouchMovementMode", DataType.Enum, value);}
    public get GameplayPaused() {return this.GetProp("GameplayPaused", DataType.Bool);}
    public set GameplayPaused(value) {this.SetProp("GameplayPaused", DataType.Bool, value);}
    public get HealthDisplayDistance() {return this.GetProp("HealthDisplayDistance", DataType.Float32);}
    public set HealthDisplayDistance(value) {this.SetProp("HealthDisplayDistance", DataType.Float32, value);}
    public get NameDisplayDistance() {return this.GetProp("NameDisplayDistance", DataType.Float32);}
    public set NameDisplayDistance(value) {this.SetProp("NameDisplayDistance", DataType.Float32, value);}
    public get Neutral() {return this.GetProp("Neutral", DataType.Bool);}
    public set Neutral(value) {this.SetProp("Neutral", DataType.Bool, value);}
    public get RawJoinData() {return this.GetProp("RawJoinData", DataType.String);}
    public set RawJoinData(value) {this.SetProp("RawJoinData", DataType.String, value);}
    public get ReplicationFocus() {return this.GetProp("ReplicationFocus", DataType.Referent) as Instance | undefined;}
    public set ReplicationFocus(value) {this.SetProp("ReplicationFocus", DataType.Referent, value);}
    public get RespawnLocation() {return this.GetProp("RespawnLocation", DataType.Referent) as SpawnLocation | undefined;}
    public set RespawnLocation(value) {this.SetProp("RespawnLocation", DataType.Referent, value);}
    public get StepIdOffset() {return this.GetProp("StepIdOffset", DataType.Int32);}
    public set StepIdOffset(value) {this.SetProp("StepIdOffset", DataType.Int32, value);}
    public get Team() {return this.GetProp("Team", DataType.Referent) as Team | undefined;}
    public set Team(value) {this.SetProp("Team", DataType.Referent, value);}
    public get TeamColor() {return this.GetProp("TeamColor", DataType.BrickColor);}
    public set TeamColor(value) {this.SetProp("TeamColor", DataType.BrickColor, value);}
    public get TeleportedIn() {return this.GetProp("TeleportedIn", DataType.Bool);}
    public set TeleportedIn(value) {this.SetProp("TeleportedIn", DataType.Bool, value);}
}

export class PlayerDataService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("PlayerDataService");
        this.Name = "PlayerDataService";
        this.LoadFailureBehavior = PlayerDataLoadFailureBehavior.Failure;
    }
    public get LoadFailureBehavior() {return this.GetProp("LoadFailureBehavior", DataType.Enum)! as PlayerDataLoadFailureBehavior;}
    public set LoadFailureBehavior(value) {this.SetProp("LoadFailureBehavior", DataType.Enum, value);}
}

export class PlayerEmulatorService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("PlayerEmulatorService");
        this.Name = "PlayerEmulatorService";
        this.CustomPoliciesEnabled = false;
        this.EmulatedCountryCode = "";
        this.EmulatedGameLocale = "";
        this.PlayerEmulationEnabled = false;
        this.PseudolocalizationEnabled = false;
        this.SerializedEmulatedPolicyInfo = "";
        this.TextElongationFactor = 0;
    }
    public get CustomPoliciesEnabled() {return this.GetProp("CustomPoliciesEnabled", DataType.Bool)!;}
    public set CustomPoliciesEnabled(value) {this.SetProp("CustomPoliciesEnabled", DataType.Bool, value);}
    public get EmulatedCountryCode() {return this.GetProp("EmulatedCountryCode", DataType.String)!;}
    public set EmulatedCountryCode(value) {this.SetProp("EmulatedCountryCode", DataType.String, value);}
    public get EmulatedGameLocale() {return this.GetProp("EmulatedGameLocale", DataType.String)!;}
    public set EmulatedGameLocale(value) {this.SetProp("EmulatedGameLocale", DataType.String, value);}
    public get PlayerEmulationEnabled() {return this.GetProp("PlayerEmulationEnabled", DataType.Bool)!;}
    public set PlayerEmulationEnabled(value) {this.SetProp("PlayerEmulationEnabled", DataType.Bool, value);}
    public get PseudolocalizationEnabled() {return this.GetProp("PseudolocalizationEnabled", DataType.Bool)!;}
    public set PseudolocalizationEnabled(value) {this.SetProp("PseudolocalizationEnabled", DataType.Bool, value);}
    public get SerializedEmulatedPolicyInfo() {return this.GetProp("SerializedEmulatedPolicyInfo", DataType.String)!;}
    public set SerializedEmulatedPolicyInfo(value) {this.SetProp("SerializedEmulatedPolicyInfo", DataType.String, value);}
    public get TextElongationFactor() {return this.GetProp("TextElongationFactor", DataType.Int32)!;}
    public set TextElongationFactor(value) {this.SetProp("TextElongationFactor", DataType.Int32, value);}
}

export class PlayerHydrationService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("PlayerHydrationService");
        this.Name = "PlayerHydrationService";
    }
}

export class PlayerViewService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("PlayerViewService");
        this.Name = "PlayerViewService";
    }
}

export class Players extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("Players");
        this.Name = "Players";
        this.CharacterAutoLoads = true;
        this.RespawnTime = 5;
    }
    public get BanningEnabled() {return this.GetProp("BanningEnabled", DataType.Bool);}
    public set BanningEnabled(value) {this.SetProp("BanningEnabled", DataType.Bool, value);}
    public get CharacterAutoLoads() {return this.GetProp("CharacterAutoLoads", DataType.Bool)!;}
    public set CharacterAutoLoads(value) {this.SetProp("CharacterAutoLoads", DataType.Bool, value);}
    public get MaxPlayersInternal() {return this.GetProp("MaxPlayersInternal", DataType.Int32);}
    public set MaxPlayersInternal(value) {this.SetProp("MaxPlayersInternal", DataType.Int32, value);}
    public get PreferredPlayersInternal() {return this.GetProp("PreferredPlayersInternal", DataType.Int32);}
    public set PreferredPlayersInternal(value) {this.SetProp("PreferredPlayersInternal", DataType.Int32, value);}
    public get RespawnTime() {return this.GetProp("RespawnTime", DataType.Float32)!;}
    public set RespawnTime(value) {this.SetProp("RespawnTime", DataType.Float32, value);}
    public get UseStrafingAnimations() {return this.GetProp("UseStrafingAnimations", DataType.Bool);}
    public set UseStrafingAnimations(value) {this.SetProp("UseStrafingAnimations", DataType.Bool, value);}
}

export class PluginAction extends Instance {
    public constructor()
    {
        super();
        this.addClassName("PluginAction");
        this.Name = "PluginAction";
    }
}

export class PluginCapabilities extends Instance {
    public constructor()
    {
        super();
        this.addClassName("PluginCapabilities");
        this.Name = "PluginCapabilities";
        this.Manifest = "{\"Metadata\":{\"TargetDataModels\": [\"Edit\", \"Server\", \"Client\"]},\"Permissions\":{}}";
    }
    public get Manifest() {return this.GetProp("Manifest", DataType.String)!;}
    public set Manifest(value) {this.SetProp("Manifest", DataType.String, value);}
}

export class PluginDebugService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("PluginDebugService");
        this.Name = "PluginDebugService";
    }
}

export class PluginGuiService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("PluginGuiService");
        this.Name = "PluginGuiService";
    }
}

export class PluginManagementService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("PluginManagementService");
        this.Name = "PluginManagementService";
    }
}

export class PluginPolicyService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("PluginPolicyService");
        this.Name = "PluginPolicyService";
    }
}

/**@deprecated Deprecated by Roblox*/
export class PointsService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("PointsService");
        this.Name = "PointsService";
    }
}

export class PolicyService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("PolicyService");
        this.Name = "PolicyService";
        this.IsLuobuServer = TriStateBoolean.Unknown;
        this.LuobuWhitelisted = TriStateBoolean.Unknown;
    }
    public get IsLuobuServer() {return this.GetProp("IsLuobuServer", DataType.Enum)! as TriStateBoolean;}
    public set IsLuobuServer(value) {this.SetProp("IsLuobuServer", DataType.Enum, value);}
    public get LuobuWhitelisted() {return this.GetProp("LuobuWhitelisted", DataType.Enum)! as TriStateBoolean;}
    public set LuobuWhitelisted(value) {this.SetProp("LuobuWhitelisted", DataType.Enum, value);}
}

export abstract class PoseBase extends Instance {
    public constructor()
    {
        super();
        this.addClassName("PoseBase");
        this.EasingDirection = PoseEasingDirection.In;
        this.EasingStyle = PoseEasingStyle.Linear;
        this.Weight = 1;
    }
    public get EasingDirection() {return this.GetProp("EasingDirection", DataType.Enum)! as PoseEasingDirection;}
    public set EasingDirection(value) {this.SetProp("EasingDirection", DataType.Enum, value);}
    public get EasingStyle() {return this.GetProp("EasingStyle", DataType.Enum)! as PoseEasingStyle;}
    public set EasingStyle(value) {this.SetProp("EasingStyle", DataType.Enum, value);}
    public get Weight() {return this.GetProp("Weight", DataType.Float32)!;}
    public set Weight(value) {this.SetProp("Weight", DataType.Float32, value);}
}

export class NumberPose extends PoseBase {
    public constructor()
    {
        super();
        this.addClassName("NumberPose");
        this.Name = "NumberPose";
        this.Value = 0;
    }
    public get Value() {return this.GetProp("Value", DataType.Float64)!;}
    public set Value(value) {this.SetProp("Value", DataType.Float64, value);}
}

export class Pose extends PoseBase {
    public constructor()
    {
        super();
        this.addClassName("Pose");
        this.Name = "Pose";
        this.MaskWeight = 0;
        this.CFrame = CFrame.Identity;
    }
    public get CFrame() {return this.GetProp("CFrame", DataType.CFrame)!;}
    public set CFrame(value) {this.SetProp("CFrame", DataType.CFrame, value);}
    /**@deprecated Deprecated by Roblox*/
    public get MaskWeight() {return this.GetProp("MaskWeight", DataType.Float32)!;}
    /**@deprecated Deprecated by Roblox*/
    public set MaskWeight(value) {this.SetProp("MaskWeight", DataType.Float32, value);}
}

export abstract class PostEffect extends Instance {
    public constructor()
    {
        super();
        this.addClassName("PostEffect");
        this.Enabled = true;
    }
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
}

export class BloomEffect extends PostEffect {
    public constructor()
    {
        super();
        this.addClassName("BloomEffect");
        this.Name = "BloomEffect";
        this.Intensity = 0.4;
        this.Size = 24;
        this.Threshold = 0.95;
    }
    public get Intensity() {return this.GetProp("Intensity", DataType.Float32)!;}
    public set Intensity(value) {this.SetProp("Intensity", DataType.Float32, value);}
    public get Size() {return this.GetProp("Size", DataType.Float32)!;}
    public set Size(value) {this.SetProp("Size", DataType.Float32, value);}
    public get Threshold() {return this.GetProp("Threshold", DataType.Float32)!;}
    public set Threshold(value) {this.SetProp("Threshold", DataType.Float32, value);}
}

export class BlurEffect extends PostEffect {
    public constructor()
    {
        super();
        this.addClassName("BlurEffect");
        this.Name = "BlurEffect";
        this.Size = 24;
    }
    public get Size() {return this.GetProp("Size", DataType.Float32)!;}
    public set Size(value) {this.SetProp("Size", DataType.Float32, value);}
}

export class ColorCorrectionEffect extends PostEffect {
    public constructor()
    {
        super();
        this.addClassName("ColorCorrectionEffect");
        this.Name = "ColorCorrectionEffect";
        this.Brightness = 0;
        this.Contrast = 0;
        this.Saturation = 0;
        this.TintColor = Color3.FromRGB(255, 255, 255);
    }
    public get Brightness() {return this.GetProp("Brightness", DataType.Float32)!;}
    public set Brightness(value) {this.SetProp("Brightness", DataType.Float32, value);}
    public get Contrast() {return this.GetProp("Contrast", DataType.Float32)!;}
    public set Contrast(value) {this.SetProp("Contrast", DataType.Float32, value);}
    public get Saturation() {return this.GetProp("Saturation", DataType.Float32)!;}
    public set Saturation(value) {this.SetProp("Saturation", DataType.Float32, value);}
    public get TintColor() {return this.GetProp("TintColor", DataType.Color3)!;}
    public set TintColor(value) {this.SetProp("TintColor", DataType.Color3, value);}
}

export class ColorGradingEffect extends PostEffect {
    public constructor()
    {
        super();
        this.addClassName("ColorGradingEffect");
        this.Name = "ColorGradingEffect";
        this.TonemapperPreset = TonemapperPreset.Default;
    }
    public get TonemapperPreset() {return this.GetProp("TonemapperPreset", DataType.Enum)! as TonemapperPreset;}
    public set TonemapperPreset(value) {this.SetProp("TonemapperPreset", DataType.Enum, value);}
}

export class DepthOfFieldEffect extends PostEffect {
    public constructor()
    {
        super();
        this.addClassName("DepthOfFieldEffect");
        this.Name = "DepthOfFieldEffect";
        this.FarIntensity = 0.75;
        this.FocusDistance = 0.05;
        this.InFocusRadius = 10;
        this.NearIntensity = 0.75;
    }
    public get FarIntensity() {return this.GetProp("FarIntensity", DataType.Float32)!;}
    public set FarIntensity(value) {this.SetProp("FarIntensity", DataType.Float32, value);}
    public get FocusDistance() {return this.GetProp("FocusDistance", DataType.Float32)!;}
    public set FocusDistance(value) {this.SetProp("FocusDistance", DataType.Float32, value);}
    public get InFocusRadius() {return this.GetProp("InFocusRadius", DataType.Float32)!;}
    public set InFocusRadius(value) {this.SetProp("InFocusRadius", DataType.Float32, value);}
    public get NearIntensity() {return this.GetProp("NearIntensity", DataType.Float32)!;}
    public set NearIntensity(value) {this.SetProp("NearIntensity", DataType.Float32, value);}
}

export class SunRaysEffect extends PostEffect {
    public constructor()
    {
        super();
        this.addClassName("SunRaysEffect");
        this.Name = "SunRaysEffect";
        this.Intensity = 0.25;
        this.Spread = 1;
    }
    public get Intensity() {return this.GetProp("Intensity", DataType.Float32)!;}
    public set Intensity(value) {this.SetProp("Intensity", DataType.Float32, value);}
    public get Spread() {return this.GetProp("Spread", DataType.Float32)!;}
    public set Spread(value) {this.SetProp("Spread", DataType.Float32, value);}
}

export class ProcessInstancePhysicsService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ProcessInstancePhysicsService");
        this.Name = "ProcessInstancePhysicsService";
    }
}

export class ProximityPrompt extends Instance {
    public constructor()
    {
        super();
        this.addClassName("ProximityPrompt");
        this.Name = "ProximityPrompt";
        this.ActionText = "Interact";
        this.AutoLocalize = true;
        this.ClickablePrompt = true;
        this.Enabled = true;
        this.Exclusivity = ProximityPromptExclusivity.OnePerButton;
        this.GamepadKeyCode = KeyCode.ButtonX;
        this.HoldDuration = 0;
        this.KeyboardKeyCode = KeyCode.E;
        this.MaxActivationDistance = 10;
        this.ObjectText = "";
        this.RequiresLineOfSight = true;
        this.Style = ProximityPromptStyle.Default;
        this.UIOffset = new Vector2(0, 0);
    }
    public get ActionText() {return this.GetProp("ActionText", DataType.String)!;}
    public set ActionText(value) {this.SetProp("ActionText", DataType.String, value);}
    public get AutoLocalize() {return this.GetProp("AutoLocalize", DataType.Bool)!;}
    public set AutoLocalize(value) {this.SetProp("AutoLocalize", DataType.Bool, value);}
    public get ClickablePrompt() {return this.GetProp("ClickablePrompt", DataType.Bool)!;}
    public set ClickablePrompt(value) {this.SetProp("ClickablePrompt", DataType.Bool, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get Exclusivity() {return this.GetProp("Exclusivity", DataType.Enum)! as ProximityPromptExclusivity;}
    public set Exclusivity(value) {this.SetProp("Exclusivity", DataType.Enum, value);}
    public get GamepadKeyCode() {return this.GetProp("GamepadKeyCode", DataType.Enum)! as KeyCode;}
    public set GamepadKeyCode(value) {this.SetProp("GamepadKeyCode", DataType.Enum, value);}
    public get HoldDuration() {return this.GetProp("HoldDuration", DataType.Float32)!;}
    public set HoldDuration(value) {this.SetProp("HoldDuration", DataType.Float32, value);}
    public get KeyboardKeyCode() {return this.GetProp("KeyboardKeyCode", DataType.Enum)! as KeyCode;}
    public set KeyboardKeyCode(value) {this.SetProp("KeyboardKeyCode", DataType.Enum, value);}
    public get MaxActivationDistance() {return this.GetProp("MaxActivationDistance", DataType.Float32)!;}
    public set MaxActivationDistance(value) {this.SetProp("MaxActivationDistance", DataType.Float32, value);}
    public get ObjectText() {return this.GetProp("ObjectText", DataType.String)!;}
    public set ObjectText(value) {this.SetProp("ObjectText", DataType.String, value);}
    public get RequiresLineOfSight() {return this.GetProp("RequiresLineOfSight", DataType.Bool)!;}
    public set RequiresLineOfSight(value) {this.SetProp("RequiresLineOfSight", DataType.Bool, value);}
    public get RootLocalizationTable() {return this.GetProp("RootLocalizationTable", DataType.Referent) as LocalizationTable | undefined;}
    public set RootLocalizationTable(value) {this.SetProp("RootLocalizationTable", DataType.Referent, value);}
    public get Style() {return this.GetProp("Style", DataType.Enum)! as ProximityPromptStyle;}
    public set Style(value) {this.SetProp("Style", DataType.Enum, value);}
    public get UIOffset() {return this.GetProp("UIOffset", DataType.Vector2)!;}
    public set UIOffset(value) {this.SetProp("UIOffset", DataType.Vector2, value);}
}

export class ProximityPromptService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ProximityPromptService");
        this.Name = "ProximityPromptService";
        this.Enabled = true;
        this.MaxPromptsVisible = 16;
    }
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get MaxPromptsVisible() {return this.GetProp("MaxPromptsVisible", DataType.Int32)!;}
    public set MaxPromptsVisible(value) {this.SetProp("MaxPromptsVisible", DataType.Int32, value);}
}

export class PublishService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("PublishService");
        this.Name = "PublishService";
    }
}

export class RTAnimationTracker extends Instance {
    public constructor()
    {
        super();
        this.addClassName("RTAnimationTracker");
        this.Name = "RTAnimationTracker";
    }
}

export class RbxAnalyticsService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("RbxAnalyticsService");
        this.Name = "RbxAnalyticsService";
    }
}

export class ReflectionMetadata extends Instance {
    public constructor()
    {
        super();
        this.addClassName("ReflectionMetadata");
        this.Name = "ReflectionMetadata";
    }
}

export class ReflectionMetadataCallbacks extends Instance {
    public constructor()
    {
        super();
        this.addClassName("ReflectionMetadataCallbacks");
        this.Name = "ReflectionMetadataCallbacks";
    }
}

export class ReflectionMetadataClasses extends Instance {
    public constructor()
    {
        super();
        this.addClassName("ReflectionMetadataClasses");
        this.Name = "ReflectionMetadataClasses";
    }
}

export class ReflectionMetadataEnums extends Instance {
    public constructor()
    {
        super();
        this.addClassName("ReflectionMetadataEnums");
        this.Name = "ReflectionMetadataEnums";
    }
}

export class ReflectionMetadataEvents extends Instance {
    public constructor()
    {
        super();
        this.addClassName("ReflectionMetadataEvents");
        this.Name = "ReflectionMetadataEvents";
    }
}

export class ReflectionMetadataFunctions extends Instance {
    public constructor()
    {
        super();
        this.addClassName("ReflectionMetadataFunctions");
        this.Name = "ReflectionMetadataFunctions";
    }
}

export abstract class ReflectionMetadataItem extends Instance {
    public constructor()
    {
        super();
        this.addClassName("ReflectionMetadataItem");
        this.Browsable = true;
        this.ClassCategory = "";
        this.ClientOnly = false;
        this.Constraint = "";
        this.Deprecated = false;
        this.EditingDisabled = false;
        this.EditorType = "";
        this.FFlag = "";
        this.IsBackend = false;
        this.PropertyOrder = 5000;
        this.ScriptContext = "";
        this.ServerOnly = false;
        this.SliderScaling = "";
        this.UIMaximum = 0;
        this.UIMinimum = 0;
        this.UINumTicks = 0;
    }
    public get Browsable() {return this.GetProp("Browsable", DataType.Bool)!;}
    public set Browsable(value) {this.SetProp("Browsable", DataType.Bool, value);}
    public get ClassCategory() {return this.GetProp("ClassCategory", DataType.String)!;}
    public set ClassCategory(value) {this.SetProp("ClassCategory", DataType.String, value);}
    public get ClientOnly() {return this.GetProp("ClientOnly", DataType.Bool)!;}
    public set ClientOnly(value) {this.SetProp("ClientOnly", DataType.Bool, value);}
    public get Constraint() {return this.GetProp("Constraint", DataType.String)!;}
    public set Constraint(value) {this.SetProp("Constraint", DataType.String, value);}
    public get Deprecated() {return this.GetProp("Deprecated", DataType.Bool)!;}
    public set Deprecated(value) {this.SetProp("Deprecated", DataType.Bool, value);}
    public get EditingDisabled() {return this.GetProp("EditingDisabled", DataType.Bool)!;}
    public set EditingDisabled(value) {this.SetProp("EditingDisabled", DataType.Bool, value);}
    public get EditorType() {return this.GetProp("EditorType", DataType.String)!;}
    public set EditorType(value) {this.SetProp("EditorType", DataType.String, value);}
    public get FFlag() {return this.GetProp("FFlag", DataType.String)!;}
    public set FFlag(value) {this.SetProp("FFlag", DataType.String, value);}
    public get IsBackend() {return this.GetProp("IsBackend", DataType.Bool)!;}
    public set IsBackend(value) {this.SetProp("IsBackend", DataType.Bool, value);}
    public get PropertyOrder() {return this.GetProp("PropertyOrder", DataType.Int32)!;}
    public set PropertyOrder(value) {this.SetProp("PropertyOrder", DataType.Int32, value);}
    public get ScriptContext() {return this.GetProp("ScriptContext", DataType.String)!;}
    public set ScriptContext(value) {this.SetProp("ScriptContext", DataType.String, value);}
    public get ServerOnly() {return this.GetProp("ServerOnly", DataType.Bool)!;}
    public set ServerOnly(value) {this.SetProp("ServerOnly", DataType.Bool, value);}
    public get SliderScaling() {return this.GetProp("SliderScaling", DataType.String)!;}
    public set SliderScaling(value) {this.SetProp("SliderScaling", DataType.String, value);}
    public get UIMaximum() {return this.GetProp("UIMaximum", DataType.Float64)!;}
    public set UIMaximum(value) {this.SetProp("UIMaximum", DataType.Float64, value);}
    public get UIMinimum() {return this.GetProp("UIMinimum", DataType.Float64)!;}
    public set UIMinimum(value) {this.SetProp("UIMinimum", DataType.Float64, value);}
    public get UINumTicks() {return this.GetProp("UINumTicks", DataType.Float64)!;}
    public set UINumTicks(value) {this.SetProp("UINumTicks", DataType.Float64, value);}
}

export class ReflectionMetadataClass extends ReflectionMetadataItem {
    public constructor()
    {
        super();
        this.addClassName("ReflectionMetadataClass");
        this.Name = "ReflectionMetadataClass";
        this.ExplorerImageIndex = 0;
        this.ExplorerOrder = 2147483647;
        this.Insertable = true;
        this.PreferredParent = "";
        this.ServiceVisibility = ServiceVisibility.Always;
    }
    public get ExplorerImageIndex() {return this.GetProp("ExplorerImageIndex", DataType.Int32)!;}
    public set ExplorerImageIndex(value) {this.SetProp("ExplorerImageIndex", DataType.Int32, value);}
    public get ExplorerOrder() {return this.GetProp("ExplorerOrder", DataType.Int32)!;}
    public set ExplorerOrder(value) {this.SetProp("ExplorerOrder", DataType.Int32, value);}
    public get Insertable() {return this.GetProp("Insertable", DataType.Bool)!;}
    public set Insertable(value) {this.SetProp("Insertable", DataType.Bool, value);}
    public get PreferredParent() {return this.GetProp("PreferredParent", DataType.String)!;}
    public set PreferredParent(value) {this.SetProp("PreferredParent", DataType.String, value);}
    public get ServiceVisibility() {return this.GetProp("ServiceVisibility", DataType.Enum)! as ServiceVisibility;}
    public set ServiceVisibility(value) {this.SetProp("ServiceVisibility", DataType.Enum, value);}
}

export class ReflectionMetadataEnum extends ReflectionMetadataItem {
    public constructor()
    {
        super();
        this.addClassName("ReflectionMetadataEnum");
        this.Name = "ReflectionMetadataEnum";
    }
}

export class ReflectionMetadataEnumItem extends ReflectionMetadataItem {
    public constructor()
    {
        super();
        this.addClassName("ReflectionMetadataEnumItem");
        this.Name = "ReflectionMetadataEnumItem";
    }
}

export class ReflectionMetadataMember extends ReflectionMetadataItem {
    public constructor()
    {
        super();
        this.addClassName("ReflectionMetadataMember");
        this.Name = "ReflectionMetadataMember";
    }
}

export class ReflectionMetadataProperties extends Instance {
    public constructor()
    {
        super();
        this.addClassName("ReflectionMetadataProperties");
        this.Name = "ReflectionMetadataProperties";
    }
}

export class ReflectionMetadataYieldFunctions extends Instance {
    public constructor()
    {
        super();
        this.addClassName("ReflectionMetadataYieldFunctions");
        this.Name = "ReflectionMetadataYieldFunctions";
    }
}

export class ReflectionService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ReflectionService");
        this.Name = "ReflectionService";
    }
}

export class RemoteCursorService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("RemoteCursorService");
        this.Name = "RemoteCursorService";
    }
}

export class RemoteDebuggerServer extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("RemoteDebuggerServer");
        this.Name = "RemoteDebuggerServer";
    }
}

export class RemoteFunction extends Instance {
    public constructor()
    {
        super();
        this.addClassName("RemoteFunction");
        this.Name = "RemoteFunction";
    }
}

export class RenderSettings extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("RenderSettings");
        this.Name = "RenderSettings";
    }
    public get AutoFRMLevel() {return this.GetProp("AutoFRMLevel", DataType.Int32);}
    public set AutoFRMLevel(value) {this.SetProp("AutoFRMLevel", DataType.Int32, value);}
    public get EagerBulkExecution() {return this.GetProp("EagerBulkExecution", DataType.Bool);}
    public set EagerBulkExecution(value) {this.SetProp("EagerBulkExecution", DataType.Bool, value);}
    public get EditQualityLevel() {return this.GetProp("EditQualityLevel", DataType.Enum) as QualityLevel | undefined;}
    public set EditQualityLevel(value) {this.SetProp("EditQualityLevel", DataType.Enum, value);}
    public get EnableVRMode() {return this.GetProp("Enable VR Mode", DataType.Bool);}
    public set EnableVRMode(value) {this.SetProp("Enable VR Mode", DataType.Bool, value);}
    public get ExportMergeByMaterial() {return this.GetProp("ExportMergeByMaterial", DataType.Bool);}
    public set ExportMergeByMaterial(value) {this.SetProp("ExportMergeByMaterial", DataType.Bool, value);}
    public get FrameRateManager() {return this.GetProp("FrameRateManager", DataType.Enum) as FramerateManagerMode | undefined;}
    public set FrameRateManager(value) {this.SetProp("FrameRateManager", DataType.Enum, value);}
    public get GraphicsMode() {return this.GetProp("GraphicsMode", DataType.Enum) as GraphicsMode | undefined;}
    public set GraphicsMode(value) {this.SetProp("GraphicsMode", DataType.Enum, value);}
    public get MeshCacheSize() {return this.GetProp("MeshCacheSize", DataType.Int32);}
    public set MeshCacheSize(value) {this.SetProp("MeshCacheSize", DataType.Int32, value);}
    public get MeshPartDetailLevel() {return this.GetProp("MeshPartDetailLevel", DataType.Enum) as MeshPartDetailLevel | undefined;}
    public set MeshPartDetailLevel(value) {this.SetProp("MeshPartDetailLevel", DataType.Enum, value);}
    public get QualityLevel() {return this.GetProp("QualityLevel", DataType.Enum) as QualityLevel | undefined;}
    public set QualityLevel(value) {this.SetProp("QualityLevel", DataType.Enum, value);}
    public get ReloadAssets() {return this.GetProp("ReloadAssets", DataType.Bool);}
    public set ReloadAssets(value) {this.SetProp("ReloadAssets", DataType.Bool, value);}
    public get RenderCSGTrianglesDebug() {return this.GetProp("RenderCSGTrianglesDebug", DataType.Bool);}
    public set RenderCSGTrianglesDebug(value) {this.SetProp("RenderCSGTrianglesDebug", DataType.Bool, value);}
    public get ShowBoundingBoxes() {return this.GetProp("ShowBoundingBoxes", DataType.Bool);}
    public set ShowBoundingBoxes(value) {this.SetProp("ShowBoundingBoxes", DataType.Bool, value);}
    public get ViewMode() {return this.GetProp("ViewMode", DataType.Enum) as ViewMode | undefined;}
    public set ViewMode(value) {this.SetProp("ViewMode", DataType.Enum, value);}
}

export class RenderingTest extends Instance {
    public constructor()
    {
        super();
        this.addClassName("RenderingTest");
        this.Name = "RenderingTest";
        this.ComparisonDiffThreshold = 10;
        this.ComparisonMethod = RenderingTestComparisonMethod.psnr;
        this.ComparisonPsnrThreshold = 50;
        this.Description = "";
        this.FieldOfView = 70;
        this.PerfTest = false;
        this.QualityAuto = false;
        this.QualityLevel = 21;
        this.RenderingTestFrameCount = 20;
        this.ShouldSkip = false;
        this.Ticket = "";
        this.Timeout = 30;
        this.CFrame = CFrame.Identity;
    }
    public get CFrame() {return this.GetProp("CFrame", DataType.CFrame)!;}
    public set CFrame(value) {this.SetProp("CFrame", DataType.CFrame, value);}
    public get ComparisonDiffThreshold() {return this.GetProp("ComparisonDiffThreshold", DataType.Int32)!;}
    public set ComparisonDiffThreshold(value) {this.SetProp("ComparisonDiffThreshold", DataType.Int32, value);}
    public get ComparisonMethod() {return this.GetProp("ComparisonMethod", DataType.Enum)! as RenderingTestComparisonMethod;}
    public set ComparisonMethod(value) {this.SetProp("ComparisonMethod", DataType.Enum, value);}
    public get ComparisonPsnrThreshold() {return this.GetProp("ComparisonPsnrThreshold", DataType.Float32)!;}
    public set ComparisonPsnrThreshold(value) {this.SetProp("ComparisonPsnrThreshold", DataType.Float32, value);}
    public get Description() {return this.GetProp("Description", DataType.String)!;}
    public set Description(value) {this.SetProp("Description", DataType.String, value);}
    public get FieldOfView() {return this.GetProp("FieldOfView", DataType.Float32)!;}
    public set FieldOfView(value) {this.SetProp("FieldOfView", DataType.Float32, value);}
    public get PerfTest() {return this.GetProp("PerfTest", DataType.Bool)!;}
    public set PerfTest(value) {this.SetProp("PerfTest", DataType.Bool, value);}
    public get QualityAuto() {return this.GetProp("QualityAuto", DataType.Bool)!;}
    public set QualityAuto(value) {this.SetProp("QualityAuto", DataType.Bool, value);}
    public get QualityLevel() {return this.GetProp("QualityLevel", DataType.Int32)!;}
    public set QualityLevel(value) {this.SetProp("QualityLevel", DataType.Int32, value);}
    public get RenderingTestFrameCount() {return this.GetProp("RenderingTestFrameCount", DataType.Int32)!;}
    public set RenderingTestFrameCount(value) {this.SetProp("RenderingTestFrameCount", DataType.Int32, value);}
    public get ShouldSkip() {return this.GetProp("ShouldSkip", DataType.Bool)!;}
    public set ShouldSkip(value) {this.SetProp("ShouldSkip", DataType.Bool, value);}
    public get Ticket() {return this.GetProp("Ticket", DataType.String)!;}
    public set Ticket(value) {this.SetProp("Ticket", DataType.String, value);}
    public get Timeout() {return this.GetProp("Timeout", DataType.Int32)!;}
    public set Timeout(value) {this.SetProp("Timeout", DataType.Int32, value);}
}

export class ReplicatedFirst extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ReplicatedFirst");
        this.Name = "ReplicatedFirst";
    }
}

export class ReplicatedStorage extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ReplicatedStorage");
        this.Name = "ReplicatedStorage";
    }
}

export class RibbonNotificationService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("RibbonNotificationService");
        this.Name = "RibbonNotificationService";
    }
}

export class RobloxPluginGuiService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("RobloxPluginGuiService");
        this.Name = "RobloxPluginGuiService";
    }
}

export class RobloxReplicatedStorage extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("RobloxReplicatedStorage");
        this.Name = "RobloxReplicatedStorage";
    }
}

export class RobloxServerStorage extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("RobloxServerStorage");
        this.Name = "RobloxServerStorage";
    }
}

export class RomarkRbxAnalyticsService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("RomarkRbxAnalyticsService");
        this.Name = "RomarkRbxAnalyticsService";
    }
}

export class RomarkService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("RomarkService");
        this.Name = "RomarkService";
    }
}

export class RotationCurve extends Instance {
    public constructor()
    {
        super();
        this.addClassName("RotationCurve");
        this.Name = "RotationCurve";
        this.ValuesAndTimes = "\u0001";
    }
    public get ValuesAndTimes() {return this.GetProp("ValuesAndTimes", DataType.String)!;}
    public set ValuesAndTimes(value) {this.SetProp("ValuesAndTimes", DataType.String, value);}
}

export class RtMessagingService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("RtMessagingService");
        this.Name = "RtMessagingService";
    }
}

export class RunService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("RunService");
        this.Name = "RunService";
    }
}

export class RuntimeScriptService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("RuntimeScriptService");
        this.Name = "RuntimeScriptService";
    }
}

export class SafetyService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("SafetyService");
        this.Name = "SafetyService";
        this.IsCaptureModeForReport = false;
    }
    public get IsCaptureModeForReport() {return this.GetProp("IsCaptureModeForReport", DataType.Bool)!;}
    public set IsCaptureModeForReport(value) {this.SetProp("IsCaptureModeForReport", DataType.Bool, value);}
}

export class ScriptChangeService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ScriptChangeService");
        this.Name = "ScriptChangeService";
    }
}

export class ScriptCloneWatcher extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ScriptCloneWatcher");
        this.Name = "ScriptCloneWatcher";
    }
}

export class ScriptCloneWatcherHelper extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ScriptCloneWatcherHelper");
        this.Name = "ScriptCloneWatcherHelper";
    }
}

export class ScriptCommitService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ScriptCommitService");
        this.Name = "ScriptCommitService";
    }
}

export class ScriptContext extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ScriptContext");
        this.Name = "ScriptContext";
    }
}

export class ScriptEditorService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ScriptEditorService");
        this.Name = "ScriptEditorService";
    }
}

export class ScriptProfilerService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ScriptProfilerService");
        this.Name = "ScriptProfilerService";
    }
}

export class ScriptRegistrationService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ScriptRegistrationService");
        this.Name = "ScriptRegistrationService";
    }
}

export class ScriptService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ScriptService");
        this.Name = "ScriptService";
    }
}

export class Selection extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("Selection");
        this.Name = "Selection";
    }
}

export class SelectionHighlightManager extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("SelectionHighlightManager");
        this.Name = "SelectionHighlightManager";
    }
}

export abstract class SensorBase extends Instance {
    public constructor()
    {
        super();
        this.addClassName("SensorBase");
        this.UpdateType = SensorUpdateType.OnRead;
    }
    public get UpdateType() {return this.GetProp("UpdateType", DataType.Enum)! as SensorUpdateType;}
    public set UpdateType(value) {this.SetProp("UpdateType", DataType.Enum, value);}
}

export class AtmosphereSensor extends SensorBase {
    public constructor()
    {
        super();
        this.addClassName("AtmosphereSensor");
        this.Name = "AtmosphereSensor";
    }
}

export class BuoyancySensor extends SensorBase {
    public constructor()
    {
        super();
        this.addClassName("BuoyancySensor");
        this.Name = "BuoyancySensor";
        this.FullySubmerged = false;
        this.TouchingSurface = false;
    }
    public get FullySubmerged() {return this.GetProp("FullySubmerged", DataType.Bool)!;}
    public set FullySubmerged(value) {this.SetProp("FullySubmerged", DataType.Bool, value);}
    public get TouchingSurface() {return this.GetProp("TouchingSurface", DataType.Bool)!;}
    public set TouchingSurface(value) {this.SetProp("TouchingSurface", DataType.Bool, value);}
}

export abstract class ControllerSensor extends SensorBase {
    public constructor()
    {
        super();
        this.addClassName("ControllerSensor");
    }
}

export class ControllerPartSensor extends ControllerSensor {
    public constructor()
    {
        super();
        this.addClassName("ControllerPartSensor");
        this.Name = "ControllerPartSensor";
        this.HitNormal = new Vector3(0, 0, 0);
        this.SearchDistance = 0;
        this.SensorMode = SensorMode.Floor;
        this.HitFrame = CFrame.Identity;
    }
    public get HitFrame() {return this.GetProp("HitFrame", DataType.CFrame)!;}
    public set HitFrame(value) {this.SetProp("HitFrame", DataType.CFrame, value);}
    public get HitNormal() {return this.GetProp("HitNormal", DataType.Vector3)!;}
    public set HitNormal(value) {this.SetProp("HitNormal", DataType.Vector3, value);}
    public get SearchDistance() {return this.GetProp("SearchDistance", DataType.Float32)!;}
    public set SearchDistance(value) {this.SetProp("SearchDistance", DataType.Float32, value);}
    public get SensedPart() {return this.GetProp("SensedPart", DataType.Referent) as BasePart | undefined;}
    public set SensedPart(value) {this.SetProp("SensedPart", DataType.Referent, value);}
    public get SensorMode() {return this.GetProp("SensorMode", DataType.Enum)! as SensorMode;}
    public set SensorMode(value) {this.SetProp("SensorMode", DataType.Enum, value);}
}

export class FluidForceSensor extends SensorBase {
    public constructor()
    {
        super();
        this.addClassName("FluidForceSensor");
        this.Name = "FluidForceSensor";
    }
}

export class SerializationService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("SerializationService");
        this.Name = "SerializationService";
    }
}

export class ServerScriptService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ServerScriptService");
        this.Name = "ServerScriptService";
        this.LoadStringEnabled = false;
    }
    public get LoadStringEnabled() {return this.GetProp("LoadStringEnabled", DataType.Bool)!;}
    public set LoadStringEnabled(value) {this.SetProp("LoadStringEnabled", DataType.Bool, value);}
}

export class ServerStorage extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ServerStorage");
        this.Name = "ServerStorage";
    }
}

export class ServiceVisibilityService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ServiceVisibilityService");
        this.Name = "ServiceVisibilityService";
        this.HiddenServices = "";
        this.VisibleServices = "";
    }
    public get HiddenServices() {return this.GetProp("HiddenServices", DataType.String)!;}
    public set HiddenServices(value) {this.SetProp("HiddenServices", DataType.String, value);}
    public get VisibleServices() {return this.GetProp("VisibleServices", DataType.String)!;}
    public set VisibleServices(value) {this.SetProp("VisibleServices", DataType.String, value);}
}

export class SessionService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("SessionService");
        this.Name = "SessionService";
    }
}

export class SharedTableRegistry extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("SharedTableRegistry");
        this.Name = "SharedTableRegistry";
    }
}

export class Sky extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Sky");
        this.Name = "Sky";
        this.CelestialBodiesShown = true;
        this.MoonAngularSize = 11;
        this.MoonTextureId = "rbxasset://sky/moon.jpg";
        this.SkyboxBk = "rbxasset://textures/sky/sky512_bk.tex";
        this.SkyboxDn = "rbxasset://textures/sky/sky512_dn.tex";
        this.SkyboxFt = "rbxasset://textures/sky/sky512_ft.tex";
        this.SkyboxLf = "rbxasset://textures/sky/sky512_lf.tex";
        this.SkyboxOrientation = new Vector3(0, 0, 0);
        this.SkyboxRt = "rbxasset://textures/sky/sky512_rt.tex";
        this.SkyboxUp = "rbxasset://textures/sky/sky512_up.tex";
        this.StarCount = 3000;
        this.SunAngularSize = 21;
        this.SunTextureId = "rbxasset://sky/sun.jpg";
    }
    public get CelestialBodiesShown() {return this.GetProp("CelestialBodiesShown", DataType.Bool)!;}
    public set CelestialBodiesShown(value) {this.SetProp("CelestialBodiesShown", DataType.Bool, value);}
    public get MoonAngularSize() {return this.GetProp("MoonAngularSize", DataType.Float32)!;}
    public set MoonAngularSize(value) {this.SetProp("MoonAngularSize", DataType.Float32, value);}
    public get MoonTextureId() {return this.GetProp("MoonTextureId", DataType.String)!;}
    public set MoonTextureId(value) {this.SetProp("MoonTextureId", DataType.String, value);}
    public get SkyboxBk() {return this.GetProp("SkyboxBk", DataType.String)!;}
    public set SkyboxBk(value) {this.SetProp("SkyboxBk", DataType.String, value);}
    public get SkyboxDn() {return this.GetProp("SkyboxDn", DataType.String)!;}
    public set SkyboxDn(value) {this.SetProp("SkyboxDn", DataType.String, value);}
    public get SkyboxFt() {return this.GetProp("SkyboxFt", DataType.String)!;}
    public set SkyboxFt(value) {this.SetProp("SkyboxFt", DataType.String, value);}
    public get SkyboxLf() {return this.GetProp("SkyboxLf", DataType.String)!;}
    public set SkyboxLf(value) {this.SetProp("SkyboxLf", DataType.String, value);}
    public get SkyboxOrientation() {return this.GetProp("SkyboxOrientation", DataType.Vector3)!;}
    public set SkyboxOrientation(value) {this.SetProp("SkyboxOrientation", DataType.Vector3, value);}
    public get SkyboxRt() {return this.GetProp("SkyboxRt", DataType.String)!;}
    public set SkyboxRt(value) {this.SetProp("SkyboxRt", DataType.String, value);}
    public get SkyboxUp() {return this.GetProp("SkyboxUp", DataType.String)!;}
    public set SkyboxUp(value) {this.SetProp("SkyboxUp", DataType.String, value);}
    public get StarCount() {return this.GetProp("StarCount", DataType.Int32)!;}
    public set StarCount(value) {this.SetProp("StarCount", DataType.Int32, value);}
    public get SunAngularSize() {return this.GetProp("SunAngularSize", DataType.Float32)!;}
    public set SunAngularSize(value) {this.SetProp("SunAngularSize", DataType.Float32, value);}
    public get SunTextureId() {return this.GetProp("SunTextureId", DataType.String)!;}
    public set SunTextureId(value) {this.SetProp("SunTextureId", DataType.String, value);}
}

export class Smoke extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Smoke");
        this.Name = "Smoke";
        this.Color = Color3.FromRGB(255, 255, 255);
        this.Enabled = true;
        this.TimeScale = 1;
        this.Opacityxml = 0.5;
        this.RiseVelocityxml = 1;
        this.Sizexml = 1;
    }
    public get Color() {return this.GetProp("Color", DataType.Color3)!;}
    public set Color(value) {this.SetProp("Color", DataType.Color3, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get TimeScale() {return this.GetProp("TimeScale", DataType.Float32)!;}
    public set TimeScale(value) {this.SetProp("TimeScale", DataType.Float32, value);}
    public get Opacityxml() {return this.GetProp("opacity_xml", DataType.Float32)!;}
    public set Opacityxml(value) {this.SetProp("opacity_xml", DataType.Float32, value);}
    public get RiseVelocityxml() {return this.GetProp("riseVelocity_xml", DataType.Float32)!;}
    public set RiseVelocityxml(value) {this.SetProp("riseVelocity_xml", DataType.Float32, value);}
    public get Sizexml() {return this.GetProp("size_xml", DataType.Float32)!;}
    public set Sizexml(value) {this.SetProp("size_xml", DataType.Float32, value);}
}

export class SmoothVoxelsUpgraderService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("SmoothVoxelsUpgraderService");
        this.Name = "SmoothVoxelsUpgraderService";
    }
}

export class SnippetService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("SnippetService");
        this.Name = "SnippetService";
    }
}

export class SocialService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("SocialService");
        this.Name = "SocialService";
    }
}

export class Sound extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Sound");
        this.Name = "Sound";
        this.EmitterSize = 10;
        this.LoopRegion = new NumberRange(0, 60000);
        this.Looped = false;
        this.MinDistance = 10;
        this.Pitch = 1;
        this.PlayOnRemove = false;
        this.PlaybackRegion = new NumberRange(0, 60000);
        this.PlaybackRegionsEnabled = false;
        this.PlaybackSpeed = 1;
        this.Playing = false;
        this.RollOffMaxDistance = 10000;
        this.RollOffMinDistance = 10;
        this.RollOffMode = RollOffMode.Inverse;
        this.SoundId = "";
        this.TimePosition = 0;
        this.Volume = 0.5;
        this.XmlReadMaxDistance3 = 10000;
        this.XmlReadMinDistance3 = 10;
    }
    public get EmitterSize() {return this.GetProp("EmitterSize", DataType.Float32)!;}
    public set EmitterSize(value) {this.SetProp("EmitterSize", DataType.Float32, value);}
    public get LoopRegion() {return this.GetProp("LoopRegion", DataType.NumberRange)!;}
    public set LoopRegion(value) {this.SetProp("LoopRegion", DataType.NumberRange, value);}
    public get Looped() {return this.GetProp("Looped", DataType.Bool)!;}
    public set Looped(value) {this.SetProp("Looped", DataType.Bool, value);}
    /**@deprecated Deprecated by Roblox*/
    public get MinDistance() {return this.GetProp("MinDistance", DataType.Float32)!;}
    /**@deprecated Deprecated by Roblox*/
    public set MinDistance(value) {this.SetProp("MinDistance", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get Pitch() {return this.GetProp("Pitch", DataType.Float32)!;}
    /**@deprecated Deprecated by Roblox*/
    public set Pitch(value) {this.SetProp("Pitch", DataType.Float32, value);}
    public get PlayOnRemove() {return this.GetProp("PlayOnRemove", DataType.Bool)!;}
    public set PlayOnRemove(value) {this.SetProp("PlayOnRemove", DataType.Bool, value);}
    public get PlaybackRegion() {return this.GetProp("PlaybackRegion", DataType.NumberRange)!;}
    public set PlaybackRegion(value) {this.SetProp("PlaybackRegion", DataType.NumberRange, value);}
    public get PlaybackRegionsEnabled() {return this.GetProp("PlaybackRegionsEnabled", DataType.Bool)!;}
    public set PlaybackRegionsEnabled(value) {this.SetProp("PlaybackRegionsEnabled", DataType.Bool, value);}
    public get PlaybackSpeed() {return this.GetProp("PlaybackSpeed", DataType.Float32)!;}
    public set PlaybackSpeed(value) {this.SetProp("PlaybackSpeed", DataType.Float32, value);}
    public get Playing() {return this.GetProp("Playing", DataType.Bool)!;}
    public set Playing(value) {this.SetProp("Playing", DataType.Bool, value);}
    public get RollOffMaxDistance() {return this.GetProp("RollOffMaxDistance", DataType.Float32)!;}
    public set RollOffMaxDistance(value) {this.SetProp("RollOffMaxDistance", DataType.Float32, value);}
    public get RollOffMinDistance() {return this.GetProp("RollOffMinDistance", DataType.Float32)!;}
    public set RollOffMinDistance(value) {this.SetProp("RollOffMinDistance", DataType.Float32, value);}
    public get RollOffMode() {return this.GetProp("RollOffMode", DataType.Enum)! as RollOffMode;}
    public set RollOffMode(value) {this.SetProp("RollOffMode", DataType.Enum, value);}
    public get SoundGroup() {return this.GetProp("SoundGroup", DataType.Referent) as SoundGroup | undefined;}
    public set SoundGroup(value) {this.SetProp("SoundGroup", DataType.Referent, value);}
    public get SoundId() {return this.GetProp("SoundId", DataType.String)!;}
    public set SoundId(value) {this.SetProp("SoundId", DataType.String, value);}
    public get TimePosition() {return this.GetProp("TimePosition", DataType.Float64)!;}
    public set TimePosition(value) {this.SetProp("TimePosition", DataType.Float64, value);}
    public get Volume() {return this.GetProp("Volume", DataType.Float32)!;}
    public set Volume(value) {this.SetProp("Volume", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get XmlReadMaxDistance3() {return this.GetProp("xmlRead_MaxDistance_3", DataType.Float32)!;}
    /**@deprecated Deprecated by Roblox*/
    public set XmlReadMaxDistance3(value) {this.SetProp("xmlRead_MaxDistance_3", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get XmlReadMinDistance3() {return this.GetProp("xmlRead_MinDistance_3", DataType.Float32)!;}
    /**@deprecated Deprecated by Roblox*/
    public set XmlReadMinDistance3(value) {this.SetProp("xmlRead_MinDistance_3", DataType.Float32, value);}
}

export abstract class SoundEffect extends Instance {
    public constructor()
    {
        super();
        this.addClassName("SoundEffect");
        this.Enabled = true;
        this.Priority = 0;
    }
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get Priority() {return this.GetProp("Priority", DataType.Int32)!;}
    public set Priority(value) {this.SetProp("Priority", DataType.Int32, value);}
}

export class ChorusSoundEffect extends SoundEffect {
    public constructor()
    {
        super();
        this.addClassName("ChorusSoundEffect");
        this.Name = "ChorusSoundEffect";
        this.Depth = 0.15;
        this.Mix = 0.5;
        this.Rate = 0.5;
    }
    public get Depth() {return this.GetProp("Depth", DataType.Float32)!;}
    public set Depth(value) {this.SetProp("Depth", DataType.Float32, value);}
    public get Mix() {return this.GetProp("Mix", DataType.Float32)!;}
    public set Mix(value) {this.SetProp("Mix", DataType.Float32, value);}
    public get Rate() {return this.GetProp("Rate", DataType.Float32)!;}
    public set Rate(value) {this.SetProp("Rate", DataType.Float32, value);}
}

export class CompressorSoundEffect extends SoundEffect {
    public constructor()
    {
        super();
        this.addClassName("CompressorSoundEffect");
        this.Name = "CompressorSoundEffect";
        this.Attack = 0.1;
        this.GainMakeup = 0;
        this.Ratio = 40;
        this.Release = 0.1;
        this.Threshold = -40;
    }
    public get Attack() {return this.GetProp("Attack", DataType.Float32)!;}
    public set Attack(value) {this.SetProp("Attack", DataType.Float32, value);}
    public get GainMakeup() {return this.GetProp("GainMakeup", DataType.Float32)!;}
    public set GainMakeup(value) {this.SetProp("GainMakeup", DataType.Float32, value);}
    public get Ratio() {return this.GetProp("Ratio", DataType.Float32)!;}
    public set Ratio(value) {this.SetProp("Ratio", DataType.Float32, value);}
    public get Release() {return this.GetProp("Release", DataType.Float32)!;}
    public set Release(value) {this.SetProp("Release", DataType.Float32, value);}
    public get SideChain() {return this.GetProp("SideChain", DataType.Referent) as Instance | undefined;}
    public set SideChain(value) {this.SetProp("SideChain", DataType.Referent, value);}
    public get Threshold() {return this.GetProp("Threshold", DataType.Float32)!;}
    public set Threshold(value) {this.SetProp("Threshold", DataType.Float32, value);}
}

export class DistortionSoundEffect extends SoundEffect {
    public constructor()
    {
        super();
        this.addClassName("DistortionSoundEffect");
        this.Name = "DistortionSoundEffect";
        this.Level = 0.75;
    }
    public get Level() {return this.GetProp("Level", DataType.Float32)!;}
    public set Level(value) {this.SetProp("Level", DataType.Float32, value);}
}

export class EchoSoundEffect extends SoundEffect {
    public constructor()
    {
        super();
        this.addClassName("EchoSoundEffect");
        this.Name = "EchoSoundEffect";
        this.Delay = 1;
        this.DryLevel = 0;
        this.Feedback = 0.5;
        this.WetLevel = 0;
    }
    public get Delay() {return this.GetProp("Delay", DataType.Float32)!;}
    public set Delay(value) {this.SetProp("Delay", DataType.Float32, value);}
    public get DryLevel() {return this.GetProp("DryLevel", DataType.Float32)!;}
    public set DryLevel(value) {this.SetProp("DryLevel", DataType.Float32, value);}
    public get Feedback() {return this.GetProp("Feedback", DataType.Float32)!;}
    public set Feedback(value) {this.SetProp("Feedback", DataType.Float32, value);}
    public get WetLevel() {return this.GetProp("WetLevel", DataType.Float32)!;}
    public set WetLevel(value) {this.SetProp("WetLevel", DataType.Float32, value);}
}

export class EqualizerSoundEffect extends SoundEffect {
    public constructor()
    {
        super();
        this.addClassName("EqualizerSoundEffect");
        this.Name = "EqualizerSoundEffect";
        this.HighGain = 0;
        this.LowGain = -20;
        this.MidGain = -10;
    }
    public get HighGain() {return this.GetProp("HighGain", DataType.Float32)!;}
    public set HighGain(value) {this.SetProp("HighGain", DataType.Float32, value);}
    public get LowGain() {return this.GetProp("LowGain", DataType.Float32)!;}
    public set LowGain(value) {this.SetProp("LowGain", DataType.Float32, value);}
    public get MidGain() {return this.GetProp("MidGain", DataType.Float32)!;}
    public set MidGain(value) {this.SetProp("MidGain", DataType.Float32, value);}
}

export class FlangeSoundEffect extends SoundEffect {
    public constructor()
    {
        super();
        this.addClassName("FlangeSoundEffect");
        this.Name = "FlangeSoundEffect";
        this.Depth = 0.45;
        this.Mix = 0.85;
        this.Rate = 5;
    }
    public get Depth() {return this.GetProp("Depth", DataType.Float32)!;}
    public set Depth(value) {this.SetProp("Depth", DataType.Float32, value);}
    public get Mix() {return this.GetProp("Mix", DataType.Float32)!;}
    public set Mix(value) {this.SetProp("Mix", DataType.Float32, value);}
    public get Rate() {return this.GetProp("Rate", DataType.Float32)!;}
    public set Rate(value) {this.SetProp("Rate", DataType.Float32, value);}
}

export class PitchShiftSoundEffect extends SoundEffect {
    public constructor()
    {
        super();
        this.addClassName("PitchShiftSoundEffect");
        this.Name = "PitchShiftSoundEffect";
        this.Octave = 1.25;
    }
    public get Octave() {return this.GetProp("Octave", DataType.Float32)!;}
    public set Octave(value) {this.SetProp("Octave", DataType.Float32, value);}
}

export class ReverbSoundEffect extends SoundEffect {
    public constructor()
    {
        super();
        this.addClassName("ReverbSoundEffect");
        this.Name = "ReverbSoundEffect";
        this.DecayTime = 1.5;
        this.Density = 1;
        this.Diffusion = 1;
        this.DryLevel = -6;
        this.WetLevel = 0;
    }
    public get DecayTime() {return this.GetProp("DecayTime", DataType.Float32)!;}
    public set DecayTime(value) {this.SetProp("DecayTime", DataType.Float32, value);}
    public get Density() {return this.GetProp("Density", DataType.Float32)!;}
    public set Density(value) {this.SetProp("Density", DataType.Float32, value);}
    public get Diffusion() {return this.GetProp("Diffusion", DataType.Float32)!;}
    public set Diffusion(value) {this.SetProp("Diffusion", DataType.Float32, value);}
    public get DryLevel() {return this.GetProp("DryLevel", DataType.Float32)!;}
    public set DryLevel(value) {this.SetProp("DryLevel", DataType.Float32, value);}
    public get WetLevel() {return this.GetProp("WetLevel", DataType.Float32)!;}
    public set WetLevel(value) {this.SetProp("WetLevel", DataType.Float32, value);}
}

export class TremoloSoundEffect extends SoundEffect {
    public constructor()
    {
        super();
        this.addClassName("TremoloSoundEffect");
        this.Name = "TremoloSoundEffect";
        this.Depth = 1;
        this.Duty = 0.5;
        this.Frequency = 5;
    }
    public get Depth() {return this.GetProp("Depth", DataType.Float32)!;}
    public set Depth(value) {this.SetProp("Depth", DataType.Float32, value);}
    public get Duty() {return this.GetProp("Duty", DataType.Float32)!;}
    public set Duty(value) {this.SetProp("Duty", DataType.Float32, value);}
    public get Frequency() {return this.GetProp("Frequency", DataType.Float32)!;}
    public set Frequency(value) {this.SetProp("Frequency", DataType.Float32, value);}
}

export class SoundGroup extends Instance {
    public constructor()
    {
        super();
        this.addClassName("SoundGroup");
        this.Name = "SoundGroup";
        this.Volume = 0.5;
    }
    public get Volume() {return this.GetProp("Volume", DataType.Float32)!;}
    public set Volume(value) {this.SetProp("Volume", DataType.Float32, value);}
}

export class SoundService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("SoundService");
        this.Name = "SoundService";
        this.AmbientReverb = ReverbType.NoReverb;
        this.AudioApiByDefault = RolloutState.Default;
        this.CharacterSoundsUseNewApi = RolloutState.Default;
        this.DefaultListenerLocation = ListenerLocation.Default;
        this.DistanceFactor = 3.33;
        this.DopplerScale = 1;
        this.IsNewExpForAudioApiByDefault = false;
        this.RespectFilteringEnabled = false;
        this.RolloffScale = 1;
        this.VolumetricAudio = VolumetricAudio.Automatic;
    }
    public get AmbientReverb() {return this.GetProp("AmbientReverb", DataType.Enum)! as ReverbType;}
    public set AmbientReverb(value) {this.SetProp("AmbientReverb", DataType.Enum, value);}
    public get AudioApiByDefault() {return this.GetProp("AudioApiByDefault", DataType.Enum)! as RolloutState;}
    public set AudioApiByDefault(value) {this.SetProp("AudioApiByDefault", DataType.Enum, value);}
    public get CharacterSoundsUseNewApi() {return this.GetProp("CharacterSoundsUseNewApi", DataType.Enum)! as RolloutState;}
    public set CharacterSoundsUseNewApi(value) {this.SetProp("CharacterSoundsUseNewApi", DataType.Enum, value);}
    public get DefaultListenerLocation() {return this.GetProp("DefaultListenerLocation", DataType.Enum)! as ListenerLocation;}
    public set DefaultListenerLocation(value) {this.SetProp("DefaultListenerLocation", DataType.Enum, value);}
    public get DistanceFactor() {return this.GetProp("DistanceFactor", DataType.Float32)!;}
    public set DistanceFactor(value) {this.SetProp("DistanceFactor", DataType.Float32, value);}
    public get DopplerScale() {return this.GetProp("DopplerScale", DataType.Float32)!;}
    public set DopplerScale(value) {this.SetProp("DopplerScale", DataType.Float32, value);}
    public get IsNewExpForAudioApiByDefault() {return this.GetProp("IsNewExpForAudioApiByDefault", DataType.Bool)!;}
    public set IsNewExpForAudioApiByDefault(value) {this.SetProp("IsNewExpForAudioApiByDefault", DataType.Bool, value);}
    public get RespectFilteringEnabled() {return this.GetProp("RespectFilteringEnabled", DataType.Bool)!;}
    public set RespectFilteringEnabled(value) {this.SetProp("RespectFilteringEnabled", DataType.Bool, value);}
    public get RolloffScale() {return this.GetProp("RolloffScale", DataType.Float32)!;}
    public set RolloffScale(value) {this.SetProp("RolloffScale", DataType.Float32, value);}
    public get VolumetricAudio() {return this.GetProp("VolumetricAudio", DataType.Enum)! as VolumetricAudio;}
    public set VolumetricAudio(value) {this.SetProp("VolumetricAudio", DataType.Enum, value);}
}

export class Sparkles extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Sparkles");
        this.Name = "Sparkles";
        this.Enabled = true;
        this.SparkleColor = Color3.FromRGB(144, 25, 255);
        this.TimeScale = 1;
    }
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get SparkleColor() {return this.GetProp("SparkleColor", DataType.Color3)!;}
    public set SparkleColor(value) {this.SetProp("SparkleColor", DataType.Color3, value);}
    public get TimeScale() {return this.GetProp("TimeScale", DataType.Float32)!;}
    public set TimeScale(value) {this.SetProp("TimeScale", DataType.Float32, value);}
}

export class SpawnerService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("SpawnerService");
        this.Name = "SpawnerService";
    }
}

export class StandalonePluginScripts extends Instance {
    public constructor()
    {
        super();
        this.addClassName("StandalonePluginScripts");
        this.Name = "StandalonePluginScripts";
    }
}

export class StartPageService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("StartPageService");
        this.Name = "StartPageService";
    }
}

export class StarterGear extends Instance {
    public constructor()
    {
        super();
        this.addClassName("StarterGear");
        this.Name = "StarterGear";
    }
}

export class StarterPack extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("StarterPack");
        this.Name = "StarterPack";
    }
}

export class StarterPlayer extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("StarterPlayer");
        this.Name = "StarterPlayer";
        this.AllowCustomAnimations = true;
        this.AutoJumpEnabled = true;
        this.AvatarJointUpgradeSerializedRollout = RolloutState.Default;
        this.CameraMaxZoomDistance = 400;
        this.CameraMinZoomDistance = 0.5;
        this.CameraMode = CameraMode.Classic;
        this.CharacterJumpHeight = 7.2;
        this.CharacterJumpPower = 50;
        this.CharacterMaxSlopeAngle = 89;
        this.CharacterUseJumpPower = true;
        this.CharacterWalkSpeed = 16;
        this.ClassicDeath = true;
        this.DevCameraOcclusionMode = DevCameraOcclusionMode.Zoom;
        this.DevComputerCameraMovementMode = DevComputerCameraMovementMode.UserChoice;
        this.DevComputerMovementMode = DevComputerMovementMode.UserChoice;
        this.DevTouchCameraMovementMode = DevTouchCameraMovementMode.UserChoice;
        this.DevTouchMovementMode = DevTouchMovementMode.UserChoice;
        this.EnableDynamicHeads = LoadDynamicHeads.Default;
        this.EnableMouseLockOption = true;
        this.GameSettingsAssetIDFace = BigInt(0);
        this.GameSettingsAssetIDHead = BigInt(0);
        this.GameSettingsAssetIDLeftArm = BigInt(0);
        this.GameSettingsAssetIDLeftLeg = BigInt(0);
        this.GameSettingsAssetIDPants = BigInt(0);
        this.GameSettingsAssetIDRightArm = BigInt(0);
        this.GameSettingsAssetIDRightLeg = BigInt(0);
        this.GameSettingsAssetIDShirt = BigInt(0);
        this.GameSettingsAssetIDTeeShirt = BigInt(0);
        this.GameSettingsAssetIDTorso = BigInt(0);
        this.GameSettingsAvatar = GameAvatarType.R15;
        this.GameSettingsR15Collision = R15CollisionType.OuterBox;
        this.GameSettingsScaleRangeBodyType = new NumberRange(0, 1);
        this.GameSettingsScaleRangeHead = new NumberRange(0.95, 1);
        this.GameSettingsScaleRangeHeight = new NumberRange(0.9, 1.05);
        this.GameSettingsScaleRangeProportion = new NumberRange(0, 1);
        this.GameSettingsScaleRangeWidth = new NumberRange(0.7, 1);
        this.HealthDisplayDistance = 100;
        this.LoadCharacterAppearance = true;
        this.LoadCharacterLayeredClothing = LoadCharacterLayeredClothing.Default;
        this.LuaCharacterController = CharacterControlMode.Default;
        this.NameDisplayDistance = 100;
        this.RagdollDeath = true;
        this.UserEmotesEnabled = true;
    }
    public get AllowCustomAnimations() {return this.GetProp("AllowCustomAnimations", DataType.Bool)!;}
    public set AllowCustomAnimations(value) {this.SetProp("AllowCustomAnimations", DataType.Bool, value);}
    public get AutoJumpEnabled() {return this.GetProp("AutoJumpEnabled", DataType.Bool)!;}
    public set AutoJumpEnabled(value) {this.SetProp("AutoJumpEnabled", DataType.Bool, value);}
    public get AvatarJointUpgradeSerializedRollout() {return this.GetProp("AvatarJointUpgrade_SerializedRollout", DataType.Enum)! as RolloutState;}
    public set AvatarJointUpgradeSerializedRollout(value) {this.SetProp("AvatarJointUpgrade_SerializedRollout", DataType.Enum, value);}
    public get CameraMaxZoomDistance() {return this.GetProp("CameraMaxZoomDistance", DataType.Float32)!;}
    public set CameraMaxZoomDistance(value) {this.SetProp("CameraMaxZoomDistance", DataType.Float32, value);}
    public get CameraMinZoomDistance() {return this.GetProp("CameraMinZoomDistance", DataType.Float32)!;}
    public set CameraMinZoomDistance(value) {this.SetProp("CameraMinZoomDistance", DataType.Float32, value);}
    public get CameraMode() {return this.GetProp("CameraMode", DataType.Enum)! as CameraMode;}
    public set CameraMode(value) {this.SetProp("CameraMode", DataType.Enum, value);}
    public get CharacterJumpHeight() {return this.GetProp("CharacterJumpHeight", DataType.Float32)!;}
    public set CharacterJumpHeight(value) {this.SetProp("CharacterJumpHeight", DataType.Float32, value);}
    public get CharacterJumpPower() {return this.GetProp("CharacterJumpPower", DataType.Float32)!;}
    public set CharacterJumpPower(value) {this.SetProp("CharacterJumpPower", DataType.Float32, value);}
    public get CharacterMaxSlopeAngle() {return this.GetProp("CharacterMaxSlopeAngle", DataType.Float32)!;}
    public set CharacterMaxSlopeAngle(value) {this.SetProp("CharacterMaxSlopeAngle", DataType.Float32, value);}
    public get CharacterUseJumpPower() {return this.GetProp("CharacterUseJumpPower", DataType.Bool)!;}
    public set CharacterUseJumpPower(value) {this.SetProp("CharacterUseJumpPower", DataType.Bool, value);}
    public get CharacterWalkSpeed() {return this.GetProp("CharacterWalkSpeed", DataType.Float32)!;}
    public set CharacterWalkSpeed(value) {this.SetProp("CharacterWalkSpeed", DataType.Float32, value);}
    public get ClassicDeath() {return this.GetProp("ClassicDeath", DataType.Bool)!;}
    public set ClassicDeath(value) {this.SetProp("ClassicDeath", DataType.Bool, value);}
    public get DevCameraOcclusionMode() {return this.GetProp("DevCameraOcclusionMode", DataType.Enum)! as DevCameraOcclusionMode;}
    public set DevCameraOcclusionMode(value) {this.SetProp("DevCameraOcclusionMode", DataType.Enum, value);}
    public get DevComputerCameraMovementMode() {return this.GetProp("DevComputerCameraMovementMode", DataType.Enum)! as DevComputerCameraMovementMode;}
    public set DevComputerCameraMovementMode(value) {this.SetProp("DevComputerCameraMovementMode", DataType.Enum, value);}
    public get DevComputerMovementMode() {return this.GetProp("DevComputerMovementMode", DataType.Enum)! as DevComputerMovementMode;}
    public set DevComputerMovementMode(value) {this.SetProp("DevComputerMovementMode", DataType.Enum, value);}
    public get DevTouchCameraMovementMode() {return this.GetProp("DevTouchCameraMovementMode", DataType.Enum)! as DevTouchCameraMovementMode;}
    public set DevTouchCameraMovementMode(value) {this.SetProp("DevTouchCameraMovementMode", DataType.Enum, value);}
    public get DevTouchMovementMode() {return this.GetProp("DevTouchMovementMode", DataType.Enum)! as DevTouchMovementMode;}
    public set DevTouchMovementMode(value) {this.SetProp("DevTouchMovementMode", DataType.Enum, value);}
    public get EnableDynamicHeads() {return this.GetProp("EnableDynamicHeads", DataType.Enum)! as LoadDynamicHeads;}
    public set EnableDynamicHeads(value) {this.SetProp("EnableDynamicHeads", DataType.Enum, value);}
    public get EnableMouseLockOption() {return this.GetProp("EnableMouseLockOption", DataType.Bool)!;}
    public set EnableMouseLockOption(value) {this.SetProp("EnableMouseLockOption", DataType.Bool, value);}
    public get GameSettingsAssetIDFace() {return this.GetProp("GameSettingsAssetIDFace", DataType.Int64)!;}
    public set GameSettingsAssetIDFace(value) {this.SetProp("GameSettingsAssetIDFace", DataType.Int64, value);}
    public get GameSettingsAssetIDHead() {return this.GetProp("GameSettingsAssetIDHead", DataType.Int64)!;}
    public set GameSettingsAssetIDHead(value) {this.SetProp("GameSettingsAssetIDHead", DataType.Int64, value);}
    public get GameSettingsAssetIDLeftArm() {return this.GetProp("GameSettingsAssetIDLeftArm", DataType.Int64)!;}
    public set GameSettingsAssetIDLeftArm(value) {this.SetProp("GameSettingsAssetIDLeftArm", DataType.Int64, value);}
    public get GameSettingsAssetIDLeftLeg() {return this.GetProp("GameSettingsAssetIDLeftLeg", DataType.Int64)!;}
    public set GameSettingsAssetIDLeftLeg(value) {this.SetProp("GameSettingsAssetIDLeftLeg", DataType.Int64, value);}
    public get GameSettingsAssetIDPants() {return this.GetProp("GameSettingsAssetIDPants", DataType.Int64)!;}
    public set GameSettingsAssetIDPants(value) {this.SetProp("GameSettingsAssetIDPants", DataType.Int64, value);}
    public get GameSettingsAssetIDRightArm() {return this.GetProp("GameSettingsAssetIDRightArm", DataType.Int64)!;}
    public set GameSettingsAssetIDRightArm(value) {this.SetProp("GameSettingsAssetIDRightArm", DataType.Int64, value);}
    public get GameSettingsAssetIDRightLeg() {return this.GetProp("GameSettingsAssetIDRightLeg", DataType.Int64)!;}
    public set GameSettingsAssetIDRightLeg(value) {this.SetProp("GameSettingsAssetIDRightLeg", DataType.Int64, value);}
    public get GameSettingsAssetIDShirt() {return this.GetProp("GameSettingsAssetIDShirt", DataType.Int64)!;}
    public set GameSettingsAssetIDShirt(value) {this.SetProp("GameSettingsAssetIDShirt", DataType.Int64, value);}
    public get GameSettingsAssetIDTeeShirt() {return this.GetProp("GameSettingsAssetIDTeeShirt", DataType.Int64)!;}
    public set GameSettingsAssetIDTeeShirt(value) {this.SetProp("GameSettingsAssetIDTeeShirt", DataType.Int64, value);}
    public get GameSettingsAssetIDTorso() {return this.GetProp("GameSettingsAssetIDTorso", DataType.Int64)!;}
    public set GameSettingsAssetIDTorso(value) {this.SetProp("GameSettingsAssetIDTorso", DataType.Int64, value);}
    public get GameSettingsAvatar() {return this.GetProp("GameSettingsAvatar", DataType.Enum)! as GameAvatarType;}
    public set GameSettingsAvatar(value) {this.SetProp("GameSettingsAvatar", DataType.Enum, value);}
    public get GameSettingsR15Collision() {return this.GetProp("GameSettingsR15Collision", DataType.Enum)! as R15CollisionType;}
    public set GameSettingsR15Collision(value) {this.SetProp("GameSettingsR15Collision", DataType.Enum, value);}
    public get GameSettingsScaleRangeBodyType() {return this.GetProp("GameSettingsScaleRangeBodyType", DataType.NumberRange)!;}
    public set GameSettingsScaleRangeBodyType(value) {this.SetProp("GameSettingsScaleRangeBodyType", DataType.NumberRange, value);}
    public get GameSettingsScaleRangeHead() {return this.GetProp("GameSettingsScaleRangeHead", DataType.NumberRange)!;}
    public set GameSettingsScaleRangeHead(value) {this.SetProp("GameSettingsScaleRangeHead", DataType.NumberRange, value);}
    public get GameSettingsScaleRangeHeight() {return this.GetProp("GameSettingsScaleRangeHeight", DataType.NumberRange)!;}
    public set GameSettingsScaleRangeHeight(value) {this.SetProp("GameSettingsScaleRangeHeight", DataType.NumberRange, value);}
    public get GameSettingsScaleRangeProportion() {return this.GetProp("GameSettingsScaleRangeProportion", DataType.NumberRange)!;}
    public set GameSettingsScaleRangeProportion(value) {this.SetProp("GameSettingsScaleRangeProportion", DataType.NumberRange, value);}
    public get GameSettingsScaleRangeWidth() {return this.GetProp("GameSettingsScaleRangeWidth", DataType.NumberRange)!;}
    public set GameSettingsScaleRangeWidth(value) {this.SetProp("GameSettingsScaleRangeWidth", DataType.NumberRange, value);}
    public get HealthDisplayDistance() {return this.GetProp("HealthDisplayDistance", DataType.Float32)!;}
    public set HealthDisplayDistance(value) {this.SetProp("HealthDisplayDistance", DataType.Float32, value);}
    public get LoadCharacterAppearance() {return this.GetProp("LoadCharacterAppearance", DataType.Bool)!;}
    public set LoadCharacterAppearance(value) {this.SetProp("LoadCharacterAppearance", DataType.Bool, value);}
    public get LoadCharacterLayeredClothing() {return this.GetProp("LoadCharacterLayeredClothing", DataType.Enum)! as LoadCharacterLayeredClothing;}
    public set LoadCharacterLayeredClothing(value) {this.SetProp("LoadCharacterLayeredClothing", DataType.Enum, value);}
    public get LuaCharacterController() {return this.GetProp("LuaCharacterController", DataType.Enum)! as CharacterControlMode;}
    public set LuaCharacterController(value) {this.SetProp("LuaCharacterController", DataType.Enum, value);}
    public get NameDisplayDistance() {return this.GetProp("NameDisplayDistance", DataType.Float32)!;}
    public set NameDisplayDistance(value) {this.SetProp("NameDisplayDistance", DataType.Float32, value);}
    public get RagdollDeath() {return this.GetProp("RagdollDeath", DataType.Bool)!;}
    public set RagdollDeath(value) {this.SetProp("RagdollDeath", DataType.Bool, value);}
    public get UserEmotesEnabled() {return this.GetProp("UserEmotesEnabled", DataType.Bool)!;}
    public set UserEmotesEnabled(value) {this.SetProp("UserEmotesEnabled", DataType.Bool, value);}
}

export class StarterPlayerScripts extends Instance {
    public constructor()
    {
        super();
        this.addClassName("StarterPlayerScripts");
        this.Name = "StarterPlayerScripts";
    }
}

export class StarterCharacterScripts extends StarterPlayerScripts {
    public constructor()
    {
        super();
        this.addClassName("StarterCharacterScripts");
        this.Name = "StarterCharacterScripts";
    }
}

export class StartupMessageService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("StartupMessageService");
        this.Name = "StartupMessageService";
    }
}

export class Stats extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("Stats");
        this.Name = "Stats";
    }
}

export class StopWatchReporter extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("StopWatchReporter");
        this.Name = "StopWatchReporter";
    }
}

export class StreamingService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("StreamingService");
        this.Name = "StreamingService";
    }
}

export class StudioAssetService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("StudioAssetService");
        this.Name = "StudioAssetService";
    }
}

export class StudioAttachment extends Instance {
    public constructor()
    {
        super();
        this.addClassName("StudioAttachment");
        this.Name = "StudioAttachment";
        this.AutoHideParent = false;
        this.IsArrowVisible = false;
        this.Offset = new Vector2(0, 0);
        this.SourceAnchorPoint = new Vector2(0, 0);
        this.TargetAnchorPoint = new Vector2(0, 0);
    }
    public get AutoHideParent() {return this.GetProp("AutoHideParent", DataType.Bool)!;}
    public set AutoHideParent(value) {this.SetProp("AutoHideParent", DataType.Bool, value);}
    public get IsArrowVisible() {return this.GetProp("IsArrowVisible", DataType.Bool)!;}
    public set IsArrowVisible(value) {this.SetProp("IsArrowVisible", DataType.Bool, value);}
    public get Offset() {return this.GetProp("Offset", DataType.Vector2)!;}
    public set Offset(value) {this.SetProp("Offset", DataType.Vector2, value);}
    public get SourceAnchorPoint() {return this.GetProp("SourceAnchorPoint", DataType.Vector2)!;}
    public set SourceAnchorPoint(value) {this.SetProp("SourceAnchorPoint", DataType.Vector2, value);}
    public get TargetAnchorPoint() {return this.GetProp("TargetAnchorPoint", DataType.Vector2)!;}
    public set TargetAnchorPoint(value) {this.SetProp("TargetAnchorPoint", DataType.Vector2, value);}
}

export class StudioCallout extends Instance {
    public constructor()
    {
        super();
        this.addClassName("StudioCallout");
        this.Name = "StudioCallout";
    }
}

export class StudioCameraService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("StudioCameraService");
        this.Name = "StudioCameraService";
        this.LockCameraSpeed = false;
    }
    public get LockCameraSpeed() {return this.GetProp("LockCameraSpeed", DataType.Bool)!;}
    public set LockCameraSpeed(value) {this.SetProp("LockCameraSpeed", DataType.Bool, value);}
}

export class StudioData extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("StudioData");
        this.Name = "StudioData";
        this.EnableScriptCollabByDefaultOnLoad = false;
    }
    public get EnableScriptCollabByDefaultOnLoad() {return this.GetProp("EnableScriptCollabByDefaultOnLoad", DataType.Bool)!;}
    public set EnableScriptCollabByDefaultOnLoad(value) {this.SetProp("EnableScriptCollabByDefaultOnLoad", DataType.Bool, value);}
}

export class StudioDeviceEmulatorService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("StudioDeviceEmulatorService");
        this.Name = "StudioDeviceEmulatorService";
    }
}

export class StudioPublishService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("StudioPublishService");
        this.Name = "StudioPublishService";
        this.PublishLocked = false;
    }
    public get PublishLocked() {return this.GetProp("PublishLocked", DataType.Bool)!;}
    public set PublishLocked(value) {this.SetProp("PublishLocked", DataType.Bool, value);}
}

export class StudioScriptDebugEventListener extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("StudioScriptDebugEventListener");
        this.Name = "StudioScriptDebugEventListener";
    }
}

export class StudioSdkService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("StudioSdkService");
        this.Name = "StudioSdkService";
    }
}

export class StudioService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("StudioService");
        this.Name = "StudioService";
    }
    public get Secrets() {return this.GetProp("Secrets", DataType.String);}
    public set Secrets(value) {this.SetProp("Secrets", DataType.String, value);}
}

export class StudioUserService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("StudioUserService");
        this.Name = "StudioUserService";
    }
}

export class StudioWidgetsService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("StudioWidgetsService");
        this.Name = "StudioWidgetsService";
    }
}

export abstract class StyleBase extends Instance {
    public constructor()
    {
        super();
        this.addClassName("StyleBase");
    }
}

export class StyleRule extends StyleBase {
    public constructor()
    {
        super();
        this.addClassName("StyleRule");
        this.Name = "StyleRule";
        this.Priority = 0;
        this.PropertiesSerialize = "";
        this.Selector = "";
    }
    public get Priority() {return this.GetProp("Priority", DataType.Int32)!;}
    public set Priority(value) {this.SetProp("Priority", DataType.Int32, value);}
    public get PropertiesSerialize() {return this.GetProp("PropertiesSerialize", DataType.String)!;}
    public set PropertiesSerialize(value) {this.SetProp("PropertiesSerialize", DataType.String, value);}
    public get Selector() {return this.GetProp("Selector", DataType.String)!;}
    public set Selector(value) {this.SetProp("Selector", DataType.String, value);}
}

export class StyleSheet extends StyleBase {
    public constructor()
    {
        super();
        this.addClassName("StyleSheet");
        this.Name = "StyleSheet";
    }
}

export class StyleDerive extends Instance {
    public constructor()
    {
        super();
        this.addClassName("StyleDerive");
        this.Name = "StyleDerive";
        this.Priority = 0;
    }
    public get Priority() {return this.GetProp("Priority", DataType.Int32)!;}
    public set Priority(value) {this.SetProp("Priority", DataType.Int32, value);}
    public get StyleSheet() {return this.GetProp("StyleSheet", DataType.Referent) as StyleSheet | undefined;}
    public set StyleSheet(value) {this.SetProp("StyleSheet", DataType.Referent, value);}
}

export class StyleLink extends Instance {
    public constructor()
    {
        super();
        this.addClassName("StyleLink");
        this.Name = "StyleLink";
    }
    public get StyleSheet() {return this.GetProp("StyleSheet", DataType.Referent) as StyleSheet | undefined;}
    public set StyleSheet(value) {this.SetProp("StyleSheet", DataType.Referent, value);}
}

export class StylingService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("StylingService");
        this.Name = "StylingService";
    }
}

export class SurfaceAppearance extends Instance {
    public constructor()
    {
        super();
        this.addClassName("SurfaceAppearance");
        this.Name = "SurfaceAppearance";
        this.AlphaMode = AlphaMode.Overlay;
        this.Color = Color3.FromRGB(255, 255, 255);
        this.ColorMap = "";
        this.MetalnessMap = "";
        this.NormalMap = "";
        this.RoughnessMap = "";
        this.TexturePack = "";
    }
    public get AlphaMode() {return this.GetProp("AlphaMode", DataType.Enum)! as AlphaMode;}
    public set AlphaMode(value) {this.SetProp("AlphaMode", DataType.Enum, value);}
    public get Color() {return this.GetProp("Color", DataType.Color3)!;}
    public set Color(value) {this.SetProp("Color", DataType.Color3, value);}
    public get ColorMap() {return this.GetProp("ColorMap", DataType.String)!;}
    public set ColorMap(value) {this.SetProp("ColorMap", DataType.String, value);}
    public get ColorMapContent() {return this.GetProp("ColorMapContent", DataType.String);}
    public set ColorMapContent(value) {this.SetProp("ColorMapContent", DataType.String, value);}
    public get MetalnessMap() {return this.GetProp("MetalnessMap", DataType.String)!;}
    public set MetalnessMap(value) {this.SetProp("MetalnessMap", DataType.String, value);}
    public get MetalnessMapContent() {return this.GetProp("MetalnessMapContent", DataType.String);}
    public set MetalnessMapContent(value) {this.SetProp("MetalnessMapContent", DataType.String, value);}
    public get NormalMap() {return this.GetProp("NormalMap", DataType.String)!;}
    public set NormalMap(value) {this.SetProp("NormalMap", DataType.String, value);}
    public get NormalMapContent() {return this.GetProp("NormalMapContent", DataType.String);}
    public set NormalMapContent(value) {this.SetProp("NormalMapContent", DataType.String, value);}
    public get RoughnessMap() {return this.GetProp("RoughnessMap", DataType.String)!;}
    public set RoughnessMap(value) {this.SetProp("RoughnessMap", DataType.String, value);}
    public get RoughnessMapContent() {return this.GetProp("RoughnessMapContent", DataType.String);}
    public set RoughnessMapContent(value) {this.SetProp("RoughnessMapContent", DataType.String, value);}
    public get TexturePack() {return this.GetProp("TexturePack", DataType.String)!;}
    public set TexturePack(value) {this.SetProp("TexturePack", DataType.String, value);}
}

export class SystemThemeService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("SystemThemeService");
        this.Name = "SystemThemeService";
    }
}

export class TaskScheduler extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("TaskScheduler");
        this.Name = "TaskScheduler";
    }
    public get ThreadPoolConfig() {return this.GetProp("ThreadPoolConfig", DataType.Enum) as ThreadPoolConfig | undefined;}
    public set ThreadPoolConfig(value) {this.SetProp("ThreadPoolConfig", DataType.Enum, value);}
}

export class Team extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Team");
        this.Name = "Team";
        this.AutoAssignable = true;
        this.AutoColorCharacters = true;
        this.Score = 0;
    }
    public get AutoAssignable() {return this.GetProp("AutoAssignable", DataType.Bool)!;}
    public set AutoAssignable(value) {this.SetProp("AutoAssignable", DataType.Bool, value);}
    /**@deprecated Deprecated by Roblox*/
    public get AutoColorCharacters() {return this.GetProp("AutoColorCharacters", DataType.Bool)!;}
    /**@deprecated Deprecated by Roblox*/
    public set AutoColorCharacters(value) {this.SetProp("AutoColorCharacters", DataType.Bool, value);}
    /**@deprecated Deprecated by Roblox*/
    public get Score() {return this.GetProp("Score", DataType.Int32)!;}
    /**@deprecated Deprecated by Roblox*/
    public set Score(value) {this.SetProp("Score", DataType.Int32, value);}
    public get TeamColor() {return this.GetProp("TeamColor", DataType.BrickColor);}
    public set TeamColor(value) {this.SetProp("TeamColor", DataType.BrickColor, value);}
}

export class TeamCreateData extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("TeamCreateData");
        this.Name = "TeamCreateData";
    }
}

export class TeamCreatePublishService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("TeamCreatePublishService");
        this.Name = "TeamCreatePublishService";
    }
}

export class TeamCreateService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("TeamCreateService");
        this.Name = "TeamCreateService";
    }
}

export class Teams extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("Teams");
        this.Name = "Teams";
    }
}

export class TelemetryService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("TelemetryService");
        this.Name = "TelemetryService";
    }
}

export class TeleportOptions extends Instance {
    public constructor()
    {
        super();
        this.addClassName("TeleportOptions");
        this.Name = "TeleportOptions";
        this.ReservedServerAccessCode = "";
        this.ServerInstanceId = "";
        this.ShouldReserveServer = false;
    }
    public get ReservedServerAccessCode() {return this.GetProp("ReservedServerAccessCode", DataType.String)!;}
    public set ReservedServerAccessCode(value) {this.SetProp("ReservedServerAccessCode", DataType.String, value);}
    public get ServerInstanceId() {return this.GetProp("ServerInstanceId", DataType.String)!;}
    public set ServerInstanceId(value) {this.SetProp("ServerInstanceId", DataType.String, value);}
    public get ShouldReserveServer() {return this.GetProp("ShouldReserveServer", DataType.Bool)!;}
    public set ShouldReserveServer(value) {this.SetProp("ShouldReserveServer", DataType.Bool, value);}
}

export class TeleportService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("TeleportService");
        this.Name = "TeleportService";
        this.CustomizedTeleportUI = false;
    }
    /**@deprecated Deprecated by Roblox*/
    public get CustomizedTeleportUI() {return this.GetProp("CustomizedTeleportUI", DataType.Bool)!;}
    /**@deprecated Deprecated by Roblox*/
    public set CustomizedTeleportUI(value) {this.SetProp("CustomizedTeleportUI", DataType.Bool, value);}
}

export class TemporaryCageMeshProvider extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("TemporaryCageMeshProvider");
        this.Name = "TemporaryCageMeshProvider";
    }
}

export class TemporaryScriptService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("TemporaryScriptService");
        this.Name = "TemporaryScriptService";
    }
}

export class TerrainDetail extends Instance {
    public constructor()
    {
        super();
        this.addClassName("TerrainDetail");
        this.Name = "TerrainDetail";
        this.ColorMap = "";
        this.Face = TerrainFace.Side;
        this.MaterialPattern = MaterialPattern.Regular;
        this.MetalnessMap = "";
        this.NormalMap = "";
        this.RoughnessMap = "";
        this.StudsPerTile = 10;
        this.TexturePack = "";
    }
    public get ColorMap() {return this.GetProp("ColorMap", DataType.String)!;}
    public set ColorMap(value) {this.SetProp("ColorMap", DataType.String, value);}
    public get Face() {return this.GetProp("Face", DataType.Enum)! as TerrainFace;}
    public set Face(value) {this.SetProp("Face", DataType.Enum, value);}
    public get MaterialPattern() {return this.GetProp("MaterialPattern", DataType.Enum)! as MaterialPattern;}
    public set MaterialPattern(value) {this.SetProp("MaterialPattern", DataType.Enum, value);}
    public get MetalnessMap() {return this.GetProp("MetalnessMap", DataType.String)!;}
    public set MetalnessMap(value) {this.SetProp("MetalnessMap", DataType.String, value);}
    public get NormalMap() {return this.GetProp("NormalMap", DataType.String)!;}
    public set NormalMap(value) {this.SetProp("NormalMap", DataType.String, value);}
    public get RoughnessMap() {return this.GetProp("RoughnessMap", DataType.String)!;}
    public set RoughnessMap(value) {this.SetProp("RoughnessMap", DataType.String, value);}
    public get StudsPerTile() {return this.GetProp("StudsPerTile", DataType.Float32)!;}
    public set StudsPerTile(value) {this.SetProp("StudsPerTile", DataType.Float32, value);}
    public get TexturePack() {return this.GetProp("TexturePack", DataType.String)!;}
    public set TexturePack(value) {this.SetProp("TexturePack", DataType.String, value);}
}

export class TerrainRegion extends Instance {
    public constructor()
    {
        super();
        this.addClassName("TerrainRegion");
        this.Name = "TerrainRegion";
        this.ExtentsMax = new Vector3(0, 0, 0);
        this.ExtentsMin = new Vector3(0, 0, 0);
        this.SmoothGrid = "\u0001\u0005";
    }
    public get ExtentsMax() {return this.GetProp("ExtentsMax", DataType.Vector3int16)!;}
    public set ExtentsMax(value) {this.SetProp("ExtentsMax", DataType.Vector3int16, value);}
    public get ExtentsMin() {return this.GetProp("ExtentsMin", DataType.Vector3int16)!;}
    public set ExtentsMin(value) {this.SetProp("ExtentsMin", DataType.Vector3int16, value);}
    public get SmoothGrid() {return this.GetProp("SmoothGrid", DataType.String)!;}
    public set SmoothGrid(value) {this.SetProp("SmoothGrid", DataType.String, value);}
}

export class TestService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("TestService");
        this.Name = "TestService";
        this.AutoRuns = true;
        this.Description = "";
        this.ExecuteWithStudioRun = false;
        this.Is30FpsThrottleEnabled = true;
        this.IsPhysicsEnvironmentalThrottled = true;
        this.IsSleepAllowed = true;
        this.NumberOfPlayers = 0;
        this.SimulateSecondsLag = 0;
        this.ThrottlePhysicsToRealtime = true;
        this.Timeout = 10;
    }
    public get AutoRuns() {return this.GetProp("AutoRuns", DataType.Bool)!;}
    public set AutoRuns(value) {this.SetProp("AutoRuns", DataType.Bool, value);}
    public get Description() {return this.GetProp("Description", DataType.String)!;}
    public set Description(value) {this.SetProp("Description", DataType.String, value);}
    public get ExecuteWithStudioRun() {return this.GetProp("ExecuteWithStudioRun", DataType.Bool)!;}
    public set ExecuteWithStudioRun(value) {this.SetProp("ExecuteWithStudioRun", DataType.Bool, value);}
    /**@deprecated Deprecated by Roblox*/
    public get Is30FpsThrottleEnabled() {return this.GetProp("Is30FpsThrottleEnabled", DataType.Bool)!;}
    /**@deprecated Deprecated by Roblox*/
    public set Is30FpsThrottleEnabled(value) {this.SetProp("Is30FpsThrottleEnabled", DataType.Bool, value);}
    public get IsPhysicsEnvironmentalThrottled() {return this.GetProp("IsPhysicsEnvironmentalThrottled", DataType.Bool)!;}
    public set IsPhysicsEnvironmentalThrottled(value) {this.SetProp("IsPhysicsEnvironmentalThrottled", DataType.Bool, value);}
    public get IsSleepAllowed() {return this.GetProp("IsSleepAllowed", DataType.Bool)!;}
    public set IsSleepAllowed(value) {this.SetProp("IsSleepAllowed", DataType.Bool, value);}
    public get NumberOfPlayers() {return this.GetProp("NumberOfPlayers", DataType.Int32)!;}
    public set NumberOfPlayers(value) {this.SetProp("NumberOfPlayers", DataType.Int32, value);}
    public get SimulateSecondsLag() {return this.GetProp("SimulateSecondsLag", DataType.Float64)!;}
    public set SimulateSecondsLag(value) {this.SetProp("SimulateSecondsLag", DataType.Float64, value);}
    public get ThrottlePhysicsToRealtime() {return this.GetProp("ThrottlePhysicsToRealtime", DataType.Bool)!;}
    public set ThrottlePhysicsToRealtime(value) {this.SetProp("ThrottlePhysicsToRealtime", DataType.Bool, value);}
    public get Timeout() {return this.GetProp("Timeout", DataType.Float64)!;}
    public set Timeout(value) {this.SetProp("Timeout", DataType.Float64, value);}
}

export class TextBoxService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("TextBoxService");
        this.Name = "TextBoxService";
    }
}

export class TextChannel extends Instance {
    public constructor()
    {
        super();
        this.addClassName("TextChannel");
        this.Name = "TextChannel";
    }
}

export class TextChatCommand extends Instance {
    public constructor()
    {
        super();
        this.addClassName("TextChatCommand");
        this.Name = "TextChatCommand";
        this.AutocompleteVisible = true;
        this.Enabled = true;
        this.PrimaryAlias = "";
        this.SecondaryAlias = "";
    }
    public get AutocompleteVisible() {return this.GetProp("AutocompleteVisible", DataType.Bool)!;}
    public set AutocompleteVisible(value) {this.SetProp("AutocompleteVisible", DataType.Bool, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get PrimaryAlias() {return this.GetProp("PrimaryAlias", DataType.String)!;}
    public set PrimaryAlias(value) {this.SetProp("PrimaryAlias", DataType.String, value);}
    public get SecondaryAlias() {return this.GetProp("SecondaryAlias", DataType.String)!;}
    public set SecondaryAlias(value) {this.SetProp("SecondaryAlias", DataType.String, value);}
}

export abstract class TextChatConfigurations extends Instance {
    public constructor()
    {
        super();
        this.addClassName("TextChatConfigurations");
    }
}

export class BubbleChatConfiguration extends TextChatConfigurations {
    public constructor()
    {
        super();
        this.addClassName("BubbleChatConfiguration");
        this.Name = "BubbleChatConfiguration";
        this.AdorneeName = "HumanoidRootPart";
        this.BackgroundColor3 = Color3.FromRGB(250, 250, 250);
        this.BackgroundTransparency = 0.1;
        this.BubbleDuration = 15;
        this.BubblesSpacing = 6;
        this.Enabled = true;
        this.Font = Font.GothamMedium;
        this.LocalPlayerStudsOffset = new Vector3(0, 0, 0);
        this.MaxBubbles = 3;
        this.MaxDistance = 100;
        this.MinimizeDistance = 40;
        this.TailVisible = true;
        this.TextColor3 = Color3.FromRGB(57, 59, 61);
        this.TextSize = BigInt(16);
        this.VerticalStudsOffset = 0;
        this.FontFace = new RBXMFont("rbxasset://fonts/families/BuilderSans.json", FontWeight.Medium, FontStyle.Normal);
    }
    public get AdorneeName() {return this.GetProp("AdorneeName", DataType.String)!;}
    public set AdorneeName(value) {this.SetProp("AdorneeName", DataType.String, value);}
    public get BackgroundColor3() {return this.GetProp("BackgroundColor3", DataType.Color3)!;}
    public set BackgroundColor3(value) {this.SetProp("BackgroundColor3", DataType.Color3, value);}
    public get BackgroundTransparency() {return this.GetProp("BackgroundTransparency", DataType.Float64)!;}
    public set BackgroundTransparency(value) {this.SetProp("BackgroundTransparency", DataType.Float64, value);}
    public get BubbleDuration() {return this.GetProp("BubbleDuration", DataType.Float32)!;}
    public set BubbleDuration(value) {this.SetProp("BubbleDuration", DataType.Float32, value);}
    public get BubblesSpacing() {return this.GetProp("BubblesSpacing", DataType.Float32)!;}
    public set BubblesSpacing(value) {this.SetProp("BubblesSpacing", DataType.Float32, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get Font() {return this.GetProp("Font", DataType.Enum)! as Font;}
    public set Font(value) {this.SetProp("Font", DataType.Enum, value);}
    public get FontFace() {return this.GetProp("FontFace", DataType.Font)!;}
    public set FontFace(value) {this.SetProp("FontFace", DataType.Font, value);}
    public get LocalPlayerStudsOffset() {return this.GetProp("LocalPlayerStudsOffset", DataType.Vector3)!;}
    public set LocalPlayerStudsOffset(value) {this.SetProp("LocalPlayerStudsOffset", DataType.Vector3, value);}
    public get MaxBubbles() {return this.GetProp("MaxBubbles", DataType.Float32)!;}
    public set MaxBubbles(value) {this.SetProp("MaxBubbles", DataType.Float32, value);}
    public get MaxDistance() {return this.GetProp("MaxDistance", DataType.Float32)!;}
    public set MaxDistance(value) {this.SetProp("MaxDistance", DataType.Float32, value);}
    public get MinimizeDistance() {return this.GetProp("MinimizeDistance", DataType.Float32)!;}
    public set MinimizeDistance(value) {this.SetProp("MinimizeDistance", DataType.Float32, value);}
    public get TailVisible() {return this.GetProp("TailVisible", DataType.Bool)!;}
    public set TailVisible(value) {this.SetProp("TailVisible", DataType.Bool, value);}
    public get TextColor3() {return this.GetProp("TextColor3", DataType.Color3)!;}
    public set TextColor3(value) {this.SetProp("TextColor3", DataType.Color3, value);}
    public get TextSize() {return this.GetProp("TextSize", DataType.Int64)!;}
    public set TextSize(value) {this.SetProp("TextSize", DataType.Int64, value);}
    public get VerticalStudsOffset() {return this.GetProp("VerticalStudsOffset", DataType.Float32)!;}
    public set VerticalStudsOffset(value) {this.SetProp("VerticalStudsOffset", DataType.Float32, value);}
}

export class ChatInputBarConfiguration extends TextChatConfigurations {
    public constructor()
    {
        super();
        this.addClassName("ChatInputBarConfiguration");
        this.Name = "ChatInputBarConfiguration";
        this.AutocompleteEnabled = true;
        this.BackgroundColor3 = Color3.FromRGB(25, 27, 29);
        this.BackgroundTransparency = 0.2;
        this.Enabled = true;
        this.KeyboardKeyCode = KeyCode.Slash;
        this.PlaceholderColor3 = Color3.FromRGB(178, 178, 178);
        this.TextColor3 = Color3.FromRGB(255, 255, 255);
        this.TextSize = BigInt(14);
        this.TextStrokeColor3 = Color3.FromRGB(0, 0, 0);
        this.TextStrokeTransparency = 0.5;
        this.FontFace = new RBXMFont("rbxasset://fonts/families/BuilderSans.json", FontWeight.Medium, FontStyle.Normal);
    }
    public get AutocompleteEnabled() {return this.GetProp("AutocompleteEnabled", DataType.Bool)!;}
    public set AutocompleteEnabled(value) {this.SetProp("AutocompleteEnabled", DataType.Bool, value);}
    public get BackgroundColor3() {return this.GetProp("BackgroundColor3", DataType.Color3)!;}
    public set BackgroundColor3(value) {this.SetProp("BackgroundColor3", DataType.Color3, value);}
    public get BackgroundTransparency() {return this.GetProp("BackgroundTransparency", DataType.Float64)!;}
    public set BackgroundTransparency(value) {this.SetProp("BackgroundTransparency", DataType.Float64, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get FontFace() {return this.GetProp("FontFace", DataType.Font)!;}
    public set FontFace(value) {this.SetProp("FontFace", DataType.Font, value);}
    public get KeyboardKeyCode() {return this.GetProp("KeyboardKeyCode", DataType.Enum)! as KeyCode;}
    public set KeyboardKeyCode(value) {this.SetProp("KeyboardKeyCode", DataType.Enum, value);}
    public get PlaceholderColor3() {return this.GetProp("PlaceholderColor3", DataType.Color3)!;}
    public set PlaceholderColor3(value) {this.SetProp("PlaceholderColor3", DataType.Color3, value);}
    public get TargetTextChannel() {return this.GetProp("TargetTextChannel", DataType.Referent) as TextChannel | undefined;}
    public set TargetTextChannel(value) {this.SetProp("TargetTextChannel", DataType.Referent, value);}
    public get TextColor3() {return this.GetProp("TextColor3", DataType.Color3)!;}
    public set TextColor3(value) {this.SetProp("TextColor3", DataType.Color3, value);}
    public get TextSize() {return this.GetProp("TextSize", DataType.Int64)!;}
    public set TextSize(value) {this.SetProp("TextSize", DataType.Int64, value);}
    public get TextStrokeColor3() {return this.GetProp("TextStrokeColor3", DataType.Color3)!;}
    public set TextStrokeColor3(value) {this.SetProp("TextStrokeColor3", DataType.Color3, value);}
    public get TextStrokeTransparency() {return this.GetProp("TextStrokeTransparency", DataType.Float64)!;}
    public set TextStrokeTransparency(value) {this.SetProp("TextStrokeTransparency", DataType.Float64, value);}
}

export class ChatWindowConfiguration extends TextChatConfigurations {
    public constructor()
    {
        super();
        this.addClassName("ChatWindowConfiguration");
        this.Name = "ChatWindowConfiguration";
        this.BackgroundColor3 = Color3.FromRGB(25, 27, 29);
        this.BackgroundTransparency = 0.3;
        this.Enabled = true;
        this.HeightScale = 1;
        this.HorizontalAlignment = HorizontalAlignment.Left;
        this.TextColor3 = Color3.FromRGB(255, 255, 255);
        this.TextSize = BigInt(14);
        this.TextStrokeColor3 = Color3.FromRGB(0, 0, 0);
        this.TextStrokeTransparency = 0.5;
        this.VerticalAlignment = VerticalAlignment.Top;
        this.WidthScale = 1;
        this.FontFace = new RBXMFont("rbxasset://fonts/families/BuilderSans.json", FontWeight.Medium, FontStyle.Normal);
    }
    public get BackgroundColor3() {return this.GetProp("BackgroundColor3", DataType.Color3)!;}
    public set BackgroundColor3(value) {this.SetProp("BackgroundColor3", DataType.Color3, value);}
    public get BackgroundTransparency() {return this.GetProp("BackgroundTransparency", DataType.Float64)!;}
    public set BackgroundTransparency(value) {this.SetProp("BackgroundTransparency", DataType.Float64, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get FontFace() {return this.GetProp("FontFace", DataType.Font)!;}
    public set FontFace(value) {this.SetProp("FontFace", DataType.Font, value);}
    public get HeightScale() {return this.GetProp("HeightScale", DataType.Float32)!;}
    public set HeightScale(value) {this.SetProp("HeightScale", DataType.Float32, value);}
    public get HorizontalAlignment() {return this.GetProp("HorizontalAlignment", DataType.Enum)! as HorizontalAlignment;}
    public set HorizontalAlignment(value) {this.SetProp("HorizontalAlignment", DataType.Enum, value);}
    public get TextColor3() {return this.GetProp("TextColor3", DataType.Color3)!;}
    public set TextColor3(value) {this.SetProp("TextColor3", DataType.Color3, value);}
    public get TextSize() {return this.GetProp("TextSize", DataType.Int64)!;}
    public set TextSize(value) {this.SetProp("TextSize", DataType.Int64, value);}
    public get TextStrokeColor3() {return this.GetProp("TextStrokeColor3", DataType.Color3)!;}
    public set TextStrokeColor3(value) {this.SetProp("TextStrokeColor3", DataType.Color3, value);}
    public get TextStrokeTransparency() {return this.GetProp("TextStrokeTransparency", DataType.Float64)!;}
    public set TextStrokeTransparency(value) {this.SetProp("TextStrokeTransparency", DataType.Float64, value);}
    public get VerticalAlignment() {return this.GetProp("VerticalAlignment", DataType.Enum)! as VerticalAlignment;}
    public set VerticalAlignment(value) {this.SetProp("VerticalAlignment", DataType.Enum, value);}
    public get WidthScale() {return this.GetProp("WidthScale", DataType.Float32)!;}
    public set WidthScale(value) {this.SetProp("WidthScale", DataType.Float32, value);}
}

export class TextChatMessageProperties extends Instance {
    public constructor()
    {
        super();
        this.addClassName("TextChatMessageProperties");
        this.Name = "TextChatMessageProperties";
    }
}

export class BubbleChatMessageProperties extends TextChatMessageProperties {
    public constructor()
    {
        super();
        this.addClassName("BubbleChatMessageProperties");
        this.Name = "BubbleChatMessageProperties";
    }
}

export class TextChatService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("TextChatService");
        this.Name = "TextChatService";
        this.ChatTranslationFTUXShown = false;
        this.ChatTranslationToggleEnabled = false;
        this.ChatVersion = ChatVersion.LegacyChatService;
        this.CreateDefaultCommands = true;
        this.CreateDefaultTextChannels = true;
        this.HasSeenDeprecationDialog = false;
    }
    public get ChatTranslationFTUXShown() {return this.GetProp("ChatTranslationFTUXShown", DataType.Bool)!;}
    public set ChatTranslationFTUXShown(value) {this.SetProp("ChatTranslationFTUXShown", DataType.Bool, value);}
    public get ChatTranslationToggleEnabled() {return this.GetProp("ChatTranslationToggleEnabled", DataType.Bool)!;}
    public set ChatTranslationToggleEnabled(value) {this.SetProp("ChatTranslationToggleEnabled", DataType.Bool, value);}
    public get ChatVersion() {return this.GetProp("ChatVersion", DataType.Enum)! as ChatVersion;}
    public set ChatVersion(value) {this.SetProp("ChatVersion", DataType.Enum, value);}
    public get CreateDefaultCommands() {return this.GetProp("CreateDefaultCommands", DataType.Bool)!;}
    public set CreateDefaultCommands(value) {this.SetProp("CreateDefaultCommands", DataType.Bool, value);}
    public get CreateDefaultTextChannels() {return this.GetProp("CreateDefaultTextChannels", DataType.Bool)!;}
    public set CreateDefaultTextChannels(value) {this.SetProp("CreateDefaultTextChannels", DataType.Bool, value);}
    public get HasSeenDeprecationDialog() {return this.GetProp("HasSeenDeprecationDialog", DataType.Bool)!;}
    public set HasSeenDeprecationDialog(value) {this.SetProp("HasSeenDeprecationDialog", DataType.Bool, value);}
}

export class TextService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("TextService");
        this.Name = "TextService";
    }
}

export class TextureGenerationService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("TextureGenerationService");
        this.Name = "TextureGenerationService";
    }
}

export class ThirdPartyUserService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ThirdPartyUserService");
        this.Name = "ThirdPartyUserService";
    }
}

export class TimerService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("TimerService");
        this.Name = "TimerService";
    }
}

export class ToastNotificationService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("ToastNotificationService");
        this.Name = "ToastNotificationService";
    }
}

export class TouchInputService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("TouchInputService");
        this.Name = "TouchInputService";
    }
}

export class TracerService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("TracerService");
        this.Name = "TracerService";
    }
}

export class TrackerStreamAnimation extends Instance {
    public constructor()
    {
        super();
        this.addClassName("TrackerStreamAnimation");
        this.Name = "TrackerStreamAnimation";
    }
}

export class Trail extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Trail");
        this.Name = "Trail";
        this.Brightness = 1;
        this.Color = new ColorSequence(new ColorSequenceKeypoint(0, Color3.FromRGB(255, 255, 255)), new ColorSequenceKeypoint(1, Color3.FromRGB(255, 255, 255)));
        this.Enabled = true;
        this.FaceCamera = false;
        this.Lifetime = 2;
        this.LightEmission = 0;
        this.LightInfluence = 0;
        this.MaxLength = 0;
        this.MinLength = 0.1;
        this.Texture = "";
        this.TextureLength = 1;
        this.TextureMode = TextureMode.Stretch;
        this.Transparency = new NumberSequence(new NumberSequenceKeypoint(0, 0.5, 0), new NumberSequenceKeypoint(1, 0.5, 0));
        this.WidthScale = new NumberSequence(new NumberSequenceKeypoint(0, 1, 0), new NumberSequenceKeypoint(1, 1, 0));
    }
    public get Attachment0() {return this.GetProp("Attachment0", DataType.Referent) as Attachment | undefined;}
    public set Attachment0(value) {this.SetProp("Attachment0", DataType.Referent, value);}
    public get Attachment1() {return this.GetProp("Attachment1", DataType.Referent) as Attachment | undefined;}
    public set Attachment1(value) {this.SetProp("Attachment1", DataType.Referent, value);}
    public get Brightness() {return this.GetProp("Brightness", DataType.Float32)!;}
    public set Brightness(value) {this.SetProp("Brightness", DataType.Float32, value);}
    public get Color() {return this.GetProp("Color", DataType.ColorSequence)!;}
    public set Color(value) {this.SetProp("Color", DataType.ColorSequence, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get FaceCamera() {return this.GetProp("FaceCamera", DataType.Bool)!;}
    public set FaceCamera(value) {this.SetProp("FaceCamera", DataType.Bool, value);}
    public get Lifetime() {return this.GetProp("Lifetime", DataType.Float32)!;}
    public set Lifetime(value) {this.SetProp("Lifetime", DataType.Float32, value);}
    public get LightEmission() {return this.GetProp("LightEmission", DataType.Float32)!;}
    public set LightEmission(value) {this.SetProp("LightEmission", DataType.Float32, value);}
    public get LightInfluence() {return this.GetProp("LightInfluence", DataType.Float32)!;}
    public set LightInfluence(value) {this.SetProp("LightInfluence", DataType.Float32, value);}
    public get MaxLength() {return this.GetProp("MaxLength", DataType.Float32)!;}
    public set MaxLength(value) {this.SetProp("MaxLength", DataType.Float32, value);}
    public get MinLength() {return this.GetProp("MinLength", DataType.Float32)!;}
    public set MinLength(value) {this.SetProp("MinLength", DataType.Float32, value);}
    public get Texture() {return this.GetProp("Texture", DataType.String)!;}
    public set Texture(value) {this.SetProp("Texture", DataType.String, value);}
    public get TextureLength() {return this.GetProp("TextureLength", DataType.Float32)!;}
    public set TextureLength(value) {this.SetProp("TextureLength", DataType.Float32, value);}
    public get TextureMode() {return this.GetProp("TextureMode", DataType.Enum)! as TextureMode;}
    public set TextureMode(value) {this.SetProp("TextureMode", DataType.Enum, value);}
    public get Transparency() {return this.GetProp("Transparency", DataType.NumberSequence)!;}
    public set Transparency(value) {this.SetProp("Transparency", DataType.NumberSequence, value);}
    public get WidthScale() {return this.GetProp("WidthScale", DataType.NumberSequence)!;}
    public set WidthScale(value) {this.SetProp("WidthScale", DataType.NumberSequence, value);}
}

export class TutorialService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("TutorialService");
        this.Name = "TutorialService";
    }
}

export abstract class TweenBase extends Instance {
    public constructor()
    {
        super();
        this.addClassName("TweenBase");
    }
}

export class Tween extends TweenBase {
    public constructor()
    {
        super();
        this.addClassName("Tween");
        this.Name = "Tween";
    }
}

export class TweenService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("TweenService");
        this.Name = "TweenService";
    }
}

export class UGCAvatarService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("UGCAvatarService");
        this.Name = "UGCAvatarService";
    }
}

export class UGCValidationService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("UGCValidationService");
        this.Name = "UGCValidationService";
    }
}

export abstract class UIBase extends Instance {
    public constructor()
    {
        super();
        this.addClassName("UIBase");
    }
}

export abstract class UIComponent extends UIBase {
    public constructor()
    {
        super();
        this.addClassName("UIComponent");
    }
}

export abstract class UIConstraint extends UIComponent {
    public constructor()
    {
        super();
        this.addClassName("UIConstraint");
    }
}

export class UIAspectRatioConstraint extends UIConstraint {
    public constructor()
    {
        super();
        this.addClassName("UIAspectRatioConstraint");
        this.Name = "UIAspectRatioConstraint";
        this.AspectRatio = 1;
        this.AspectType = AspectType.FitWithinMaxSize;
        this.DominantAxis = DominantAxis.Width;
    }
    public get AspectRatio() {return this.GetProp("AspectRatio", DataType.Float32)!;}
    public set AspectRatio(value) {this.SetProp("AspectRatio", DataType.Float32, value);}
    public get AspectType() {return this.GetProp("AspectType", DataType.Enum)! as AspectType;}
    public set AspectType(value) {this.SetProp("AspectType", DataType.Enum, value);}
    public get DominantAxis() {return this.GetProp("DominantAxis", DataType.Enum)! as DominantAxis;}
    public set DominantAxis(value) {this.SetProp("DominantAxis", DataType.Enum, value);}
}

export class UISizeConstraint extends UIConstraint {
    public constructor()
    {
        super();
        this.addClassName("UISizeConstraint");
        this.Name = "UISizeConstraint";
        this.MaxSize = new Vector2(Infinity, Infinity);
        this.MinSize = new Vector2(0, 0);
    }
    public get MaxSize() {return this.GetProp("MaxSize", DataType.Vector2)!;}
    public set MaxSize(value) {this.SetProp("MaxSize", DataType.Vector2, value);}
    public get MinSize() {return this.GetProp("MinSize", DataType.Vector2)!;}
    public set MinSize(value) {this.SetProp("MinSize", DataType.Vector2, value);}
}

export class UITextSizeConstraint extends UIConstraint {
    public constructor()
    {
        super();
        this.addClassName("UITextSizeConstraint");
        this.Name = "UITextSizeConstraint";
        this.MaxTextSize = 100;
        this.MinTextSize = 1;
    }
    public get MaxTextSize() {return this.GetProp("MaxTextSize", DataType.Int32)!;}
    public set MaxTextSize(value) {this.SetProp("MaxTextSize", DataType.Int32, value);}
    public get MinTextSize() {return this.GetProp("MinTextSize", DataType.Int32)!;}
    public set MinTextSize(value) {this.SetProp("MinTextSize", DataType.Int32, value);}
}

export class UICorner extends UIComponent {
    public constructor()
    {
        super();
        this.addClassName("UICorner");
        this.Name = "UICorner";
        this.CornerRadius = new UDim(0, 8);
    }
    public get CornerRadius() {return this.GetProp("CornerRadius", DataType.UDim)!;}
    public set CornerRadius(value) {this.SetProp("CornerRadius", DataType.UDim, value);}
}

export class UIDragDetector extends UIComponent {
    public constructor()
    {
        super();
        this.addClassName("UIDragDetector");
        this.Name = "UIDragDetector";
        this.ActivatedCursorIcon = "";
        this.BoundingBehavior = UIDragDetectorBoundingBehavior.Automatic;
        this.CursorIcon = "";
        this.DragAxis = new Vector2(1, 0);
        this.DragRelativity = UIDragDetectorDragRelativity.Absolute;
        this.DragRotation = 0;
        this.DragSpace = UIDragDetectorDragSpace.Parent;
        this.DragStyle = UIDragDetectorDragStyle.TranslatePlane;
        this.DragUDim2 = new UDim2(new UDim(0, 0), new UDim(0, 0));
        this.Enabled = true;
        this.MaxDragAngle = 0;
        this.MaxDragTranslation = new UDim2(new UDim(0, 0), new UDim(0, 0));
        this.MinDragAngle = 0;
        this.MinDragTranslation = new UDim2(new UDim(0, 0), new UDim(0, 0));
        this.ResponseStyle = UIDragDetectorResponseStyle.Offset;
        this.SelectionModeDragSpeed = new UDim2(new UDim(0, 300), new UDim(0, 300));
        this.SelectionModeRotateSpeed = 90;
        this.UIDragSpeedAxisMapping = UIDragSpeedAxisMapping.XY;
    }
    public get ActivatedCursorIcon() {return this.GetProp("ActivatedCursorIcon", DataType.String)!;}
    public set ActivatedCursorIcon(value) {this.SetProp("ActivatedCursorIcon", DataType.String, value);}
    public get BoundingBehavior() {return this.GetProp("BoundingBehavior", DataType.Enum)! as UIDragDetectorBoundingBehavior;}
    public set BoundingBehavior(value) {this.SetProp("BoundingBehavior", DataType.Enum, value);}
    public get BoundingUI() {return this.GetProp("BoundingUI", DataType.Referent) as GuiBase2d | undefined;}
    public set BoundingUI(value) {this.SetProp("BoundingUI", DataType.Referent, value);}
    public get CursorIcon() {return this.GetProp("CursorIcon", DataType.String)!;}
    public set CursorIcon(value) {this.SetProp("CursorIcon", DataType.String, value);}
    public get DragAxis() {return this.GetProp("DragAxis", DataType.Vector2)!;}
    public set DragAxis(value) {this.SetProp("DragAxis", DataType.Vector2, value);}
    public get DragRelativity() {return this.GetProp("DragRelativity", DataType.Enum)! as UIDragDetectorDragRelativity;}
    public set DragRelativity(value) {this.SetProp("DragRelativity", DataType.Enum, value);}
    public get DragRotation() {return this.GetProp("DragRotation", DataType.Float32)!;}
    public set DragRotation(value) {this.SetProp("DragRotation", DataType.Float32, value);}
    public get DragSpace() {return this.GetProp("DragSpace", DataType.Enum)! as UIDragDetectorDragSpace;}
    public set DragSpace(value) {this.SetProp("DragSpace", DataType.Enum, value);}
    public get DragStyle() {return this.GetProp("DragStyle", DataType.Enum)! as UIDragDetectorDragStyle;}
    public set DragStyle(value) {this.SetProp("DragStyle", DataType.Enum, value);}
    public get DragUDim2() {return this.GetProp("DragUDim2", DataType.UDim2)!;}
    public set DragUDim2(value) {this.SetProp("DragUDim2", DataType.UDim2, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get MaxDragAngle() {return this.GetProp("MaxDragAngle", DataType.Float32)!;}
    public set MaxDragAngle(value) {this.SetProp("MaxDragAngle", DataType.Float32, value);}
    public get MaxDragTranslation() {return this.GetProp("MaxDragTranslation", DataType.UDim2)!;}
    public set MaxDragTranslation(value) {this.SetProp("MaxDragTranslation", DataType.UDim2, value);}
    public get MinDragAngle() {return this.GetProp("MinDragAngle", DataType.Float32)!;}
    public set MinDragAngle(value) {this.SetProp("MinDragAngle", DataType.Float32, value);}
    public get MinDragTranslation() {return this.GetProp("MinDragTranslation", DataType.UDim2)!;}
    public set MinDragTranslation(value) {this.SetProp("MinDragTranslation", DataType.UDim2, value);}
    public get ReferenceUIInstance() {return this.GetProp("ReferenceUIInstance", DataType.Referent) as GuiObject | undefined;}
    public set ReferenceUIInstance(value) {this.SetProp("ReferenceUIInstance", DataType.Referent, value);}
    public get ResponseStyle() {return this.GetProp("ResponseStyle", DataType.Enum)! as UIDragDetectorResponseStyle;}
    public set ResponseStyle(value) {this.SetProp("ResponseStyle", DataType.Enum, value);}
    public get SelectionModeDragSpeed() {return this.GetProp("SelectionModeDragSpeed", DataType.UDim2)!;}
    public set SelectionModeDragSpeed(value) {this.SetProp("SelectionModeDragSpeed", DataType.UDim2, value);}
    public get SelectionModeRotateSpeed() {return this.GetProp("SelectionModeRotateSpeed", DataType.Float32)!;}
    public set SelectionModeRotateSpeed(value) {this.SetProp("SelectionModeRotateSpeed", DataType.Float32, value);}
    public get UIDragSpeedAxisMapping() {return this.GetProp("UIDragSpeedAxisMapping", DataType.Enum)! as UIDragSpeedAxisMapping;}
    public set UIDragSpeedAxisMapping(value) {this.SetProp("UIDragSpeedAxisMapping", DataType.Enum, value);}
}

export class UIFlexItem extends UIComponent {
    public constructor()
    {
        super();
        this.addClassName("UIFlexItem");
        this.Name = "UIFlexItem";
        this.FlexMode = UIFlexMode.None;
        this.GrowRatio = 0;
        this.ItemLineAlignment = ItemLineAlignment.Automatic;
        this.ShrinkRatio = 0;
    }
    public get FlexMode() {return this.GetProp("FlexMode", DataType.Enum)! as UIFlexMode;}
    public set FlexMode(value) {this.SetProp("FlexMode", DataType.Enum, value);}
    public get GrowRatio() {return this.GetProp("GrowRatio", DataType.Float32)!;}
    public set GrowRatio(value) {this.SetProp("GrowRatio", DataType.Float32, value);}
    public get ItemLineAlignment() {return this.GetProp("ItemLineAlignment", DataType.Enum)! as ItemLineAlignment;}
    public set ItemLineAlignment(value) {this.SetProp("ItemLineAlignment", DataType.Enum, value);}
    public get ShrinkRatio() {return this.GetProp("ShrinkRatio", DataType.Float32)!;}
    public set ShrinkRatio(value) {this.SetProp("ShrinkRatio", DataType.Float32, value);}
}

export class UIGradient extends UIComponent {
    public constructor()
    {
        super();
        this.addClassName("UIGradient");
        this.Name = "UIGradient";
        this.Color = new ColorSequence(new ColorSequenceKeypoint(0, Color3.FromRGB(255, 255, 255)), new ColorSequenceKeypoint(1, Color3.FromRGB(255, 255, 255)));
        this.Enabled = true;
        this.Offset = new Vector2(0, 0);
        this.Rotation = 0;
        this.Transparency = new NumberSequence(new NumberSequenceKeypoint(0, 0, 0), new NumberSequenceKeypoint(1, 0, 0));
    }
    public get Color() {return this.GetProp("Color", DataType.ColorSequence)!;}
    public set Color(value) {this.SetProp("Color", DataType.ColorSequence, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get Offset() {return this.GetProp("Offset", DataType.Vector2)!;}
    public set Offset(value) {this.SetProp("Offset", DataType.Vector2, value);}
    public get Rotation() {return this.GetProp("Rotation", DataType.Float32)!;}
    public set Rotation(value) {this.SetProp("Rotation", DataType.Float32, value);}
    public get Transparency() {return this.GetProp("Transparency", DataType.NumberSequence)!;}
    public set Transparency(value) {this.SetProp("Transparency", DataType.NumberSequence, value);}
}

export abstract class UILayout extends UIComponent {
    public constructor()
    {
        super();
        this.addClassName("UILayout");
    }
}

export abstract class UIGridStyleLayout extends UILayout {
    public constructor()
    {
        super();
        this.addClassName("UIGridStyleLayout");
        this.HorizontalAlignment = HorizontalAlignment.Left;
        this.SortOrder = SortOrder.Name;
        this.VerticalAlignment = VerticalAlignment.Top;
    }
    public get FillDirection() {return this.GetProp("FillDirection", DataType.Enum)! as FillDirection;}
    public set FillDirection(value) {this.SetProp("FillDirection", DataType.Enum, value);}
    public get HorizontalAlignment() {return this.GetProp("HorizontalAlignment", DataType.Enum)! as HorizontalAlignment;}
    public set HorizontalAlignment(value) {this.SetProp("HorizontalAlignment", DataType.Enum, value);}
    public get SortOrder() {return this.GetProp("SortOrder", DataType.Enum)! as SortOrder;}
    public set SortOrder(value) {this.SetProp("SortOrder", DataType.Enum, value);}
    public get VerticalAlignment() {return this.GetProp("VerticalAlignment", DataType.Enum)! as VerticalAlignment;}
    public set VerticalAlignment(value) {this.SetProp("VerticalAlignment", DataType.Enum, value);}
}

export class UIGridLayout extends UIGridStyleLayout {
    public constructor()
    {
        super();
        this.addClassName("UIGridLayout");
        this.Name = "UIGridLayout";
        this.CellPadding = new UDim2(new UDim(0, 5), new UDim(0, 5));
        this.CellSize = new UDim2(new UDim(0, 100), new UDim(0, 100));
        this.FillDirectionMaxCells = 0;
        this.StartCorner = StartCorner.TopLeft;
        this.FillDirection = FillDirection.Horizontal;
    }
    public get CellPadding() {return this.GetProp("CellPadding", DataType.UDim2)!;}
    public set CellPadding(value) {this.SetProp("CellPadding", DataType.UDim2, value);}
    public get CellSize() {return this.GetProp("CellSize", DataType.UDim2)!;}
    public set CellSize(value) {this.SetProp("CellSize", DataType.UDim2, value);}
    public get FillDirectionMaxCells() {return this.GetProp("FillDirectionMaxCells", DataType.Int32)!;}
    public set FillDirectionMaxCells(value) {this.SetProp("FillDirectionMaxCells", DataType.Int32, value);}
    public get StartCorner() {return this.GetProp("StartCorner", DataType.Enum)! as StartCorner;}
    public set StartCorner(value) {this.SetProp("StartCorner", DataType.Enum, value);}
}

export class UIListLayout extends UIGridStyleLayout {
    public constructor()
    {
        super();
        this.addClassName("UIListLayout");
        this.Name = "UIListLayout";
        this.HorizontalFlex = UIFlexAlignment.None;
        this.ItemLineAlignment = ItemLineAlignment.Automatic;
        this.Padding = new UDim(0, 0);
        this.VerticalFlex = UIFlexAlignment.None;
        this.Wraps = false;
        this.FillDirection = FillDirection.Vertical;
    }
    public get HorizontalFlex() {return this.GetProp("HorizontalFlex", DataType.Enum)! as UIFlexAlignment;}
    public set HorizontalFlex(value) {this.SetProp("HorizontalFlex", DataType.Enum, value);}
    public get ItemLineAlignment() {return this.GetProp("ItemLineAlignment", DataType.Enum)! as ItemLineAlignment;}
    public set ItemLineAlignment(value) {this.SetProp("ItemLineAlignment", DataType.Enum, value);}
    public get Padding() {return this.GetProp("Padding", DataType.UDim)!;}
    public set Padding(value) {this.SetProp("Padding", DataType.UDim, value);}
    public get VerticalFlex() {return this.GetProp("VerticalFlex", DataType.Enum)! as UIFlexAlignment;}
    public set VerticalFlex(value) {this.SetProp("VerticalFlex", DataType.Enum, value);}
    public get Wraps() {return this.GetProp("Wraps", DataType.Bool)!;}
    public set Wraps(value) {this.SetProp("Wraps", DataType.Bool, value);}
}

export class UIPageLayout extends UIGridStyleLayout {
    public constructor()
    {
        super();
        this.addClassName("UIPageLayout");
        this.Name = "UIPageLayout";
        this.Animated = true;
        this.Circular = false;
        this.EasingDirection = EasingDirection.Out;
        this.EasingStyle = EasingStyle.Back;
        this.GamepadInputEnabled = true;
        this.Padding = new UDim(0, 0);
        this.ScrollWheelInputEnabled = true;
        this.TouchInputEnabled = true;
        this.TweenTime = 1;
        this.FillDirection = FillDirection.Horizontal;
    }
    public get Animated() {return this.GetProp("Animated", DataType.Bool)!;}
    public set Animated(value) {this.SetProp("Animated", DataType.Bool, value);}
    public get Circular() {return this.GetProp("Circular", DataType.Bool)!;}
    public set Circular(value) {this.SetProp("Circular", DataType.Bool, value);}
    public get EasingDirection() {return this.GetProp("EasingDirection", DataType.Enum)! as EasingDirection;}
    public set EasingDirection(value) {this.SetProp("EasingDirection", DataType.Enum, value);}
    public get EasingStyle() {return this.GetProp("EasingStyle", DataType.Enum)! as EasingStyle;}
    public set EasingStyle(value) {this.SetProp("EasingStyle", DataType.Enum, value);}
    public get GamepadInputEnabled() {return this.GetProp("GamepadInputEnabled", DataType.Bool)!;}
    public set GamepadInputEnabled(value) {this.SetProp("GamepadInputEnabled", DataType.Bool, value);}
    public get Padding() {return this.GetProp("Padding", DataType.UDim)!;}
    public set Padding(value) {this.SetProp("Padding", DataType.UDim, value);}
    public get ScrollWheelInputEnabled() {return this.GetProp("ScrollWheelInputEnabled", DataType.Bool)!;}
    public set ScrollWheelInputEnabled(value) {this.SetProp("ScrollWheelInputEnabled", DataType.Bool, value);}
    public get TouchInputEnabled() {return this.GetProp("TouchInputEnabled", DataType.Bool)!;}
    public set TouchInputEnabled(value) {this.SetProp("TouchInputEnabled", DataType.Bool, value);}
    public get TweenTime() {return this.GetProp("TweenTime", DataType.Float32)!;}
    public set TweenTime(value) {this.SetProp("TweenTime", DataType.Float32, value);}
}

export class UITableLayout extends UIGridStyleLayout {
    public constructor()
    {
        super();
        this.addClassName("UITableLayout");
        this.Name = "UITableLayout";
        this.FillEmptySpaceColumns = false;
        this.FillEmptySpaceRows = false;
        this.MajorAxis = TableMajorAxis.RowMajor;
        this.Padding = new UDim2(new UDim(0, 0), new UDim(0, 0));
        this.FillDirection = FillDirection.Vertical;
    }
    public get FillEmptySpaceColumns() {return this.GetProp("FillEmptySpaceColumns", DataType.Bool)!;}
    public set FillEmptySpaceColumns(value) {this.SetProp("FillEmptySpaceColumns", DataType.Bool, value);}
    public get FillEmptySpaceRows() {return this.GetProp("FillEmptySpaceRows", DataType.Bool)!;}
    public set FillEmptySpaceRows(value) {this.SetProp("FillEmptySpaceRows", DataType.Bool, value);}
    public get MajorAxis() {return this.GetProp("MajorAxis", DataType.Enum)! as TableMajorAxis;}
    public set MajorAxis(value) {this.SetProp("MajorAxis", DataType.Enum, value);}
    public get Padding() {return this.GetProp("Padding", DataType.UDim2)!;}
    public set Padding(value) {this.SetProp("Padding", DataType.UDim2, value);}
}

export class UIPadding extends UIComponent {
    public constructor()
    {
        super();
        this.addClassName("UIPadding");
        this.Name = "UIPadding";
        this.PaddingBottom = new UDim(0, 0);
        this.PaddingLeft = new UDim(0, 0);
        this.PaddingRight = new UDim(0, 0);
        this.PaddingTop = new UDim(0, 0);
    }
    public get PaddingBottom() {return this.GetProp("PaddingBottom", DataType.UDim)!;}
    public set PaddingBottom(value) {this.SetProp("PaddingBottom", DataType.UDim, value);}
    public get PaddingLeft() {return this.GetProp("PaddingLeft", DataType.UDim)!;}
    public set PaddingLeft(value) {this.SetProp("PaddingLeft", DataType.UDim, value);}
    public get PaddingRight() {return this.GetProp("PaddingRight", DataType.UDim)!;}
    public set PaddingRight(value) {this.SetProp("PaddingRight", DataType.UDim, value);}
    public get PaddingTop() {return this.GetProp("PaddingTop", DataType.UDim)!;}
    public set PaddingTop(value) {this.SetProp("PaddingTop", DataType.UDim, value);}
}

export class UIScale extends UIComponent {
    public constructor()
    {
        super();
        this.addClassName("UIScale");
        this.Name = "UIScale";
        this.Scale = 1;
    }
    public get Scale() {return this.GetProp("Scale", DataType.Float32)!;}
    public set Scale(value) {this.SetProp("Scale", DataType.Float32, value);}
}

export class UIStroke extends UIComponent {
    public constructor()
    {
        super();
        this.addClassName("UIStroke");
        this.Name = "UIStroke";
        this.ApplyStrokeMode = ApplyStrokeMode.Contextual;
        this.Color = Color3.FromRGB(0, 0, 0);
        this.Enabled = true;
        this.LineJoinMode = LineJoinMode.Round;
        this.Thickness = 1;
        this.Transparency = 0;
    }
    public get ApplyStrokeMode() {return this.GetProp("ApplyStrokeMode", DataType.Enum)! as ApplyStrokeMode;}
    public set ApplyStrokeMode(value) {this.SetProp("ApplyStrokeMode", DataType.Enum, value);}
    public get Color() {return this.GetProp("Color", DataType.Color3)!;}
    public set Color(value) {this.SetProp("Color", DataType.Color3, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get LineJoinMode() {return this.GetProp("LineJoinMode", DataType.Enum)! as LineJoinMode;}
    public set LineJoinMode(value) {this.SetProp("LineJoinMode", DataType.Enum, value);}
    public get Thickness() {return this.GetProp("Thickness", DataType.Float32)!;}
    public set Thickness(value) {this.SetProp("Thickness", DataType.Float32, value);}
    public get Transparency() {return this.GetProp("Transparency", DataType.Float32)!;}
    public set Transparency(value) {this.SetProp("Transparency", DataType.Float32, value);}
}

export class UIDragDetectorService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("UIDragDetectorService");
        this.Name = "UIDragDetectorService";
    }
}

export class UniqueIdLookupService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("UniqueIdLookupService");
        this.Name = "UniqueIdLookupService";
    }
}

export class UnvalidatedAssetService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("UnvalidatedAssetService");
        this.Name = "UnvalidatedAssetService";
        this.CachedData = "{\"lastSaveTime\":0,\"lastKnownPublishRequest\":0,\"users\":[]}";
    }
    public get CachedData() {return this.GetProp("CachedData", DataType.String)!;}
    public set CachedData(value) {this.SetProp("CachedData", DataType.String, value);}
}

export class UserInputService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("UserInputService");
        this.Name = "UserInputService";
        this.MouseBehavior = MouseBehavior.Default;
        this.MouseIcon = "";
        this.MouseIconEnabled = true;
    }
    /**@deprecated Deprecated by Roblox*/
    public get LegacyInputEventsEnabled() {return this.GetProp("LegacyInputEventsEnabled", DataType.Bool);}
    /**@deprecated Deprecated by Roblox*/
    public set LegacyInputEventsEnabled(value) {this.SetProp("LegacyInputEventsEnabled", DataType.Bool, value);}
    public get MouseBehavior() {return this.GetProp("MouseBehavior", DataType.Enum)! as MouseBehavior;}
    public set MouseBehavior(value) {this.SetProp("MouseBehavior", DataType.Enum, value);}
    public get MouseIcon() {return this.GetProp("MouseIcon", DataType.String)!;}
    public set MouseIcon(value) {this.SetProp("MouseIcon", DataType.String, value);}
    public get MouseIconEnabled() {return this.GetProp("MouseIconEnabled", DataType.Bool)!;}
    public set MouseIconEnabled(value) {this.SetProp("MouseIconEnabled", DataType.Bool, value);}
}

export class UserService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("UserService");
        this.Name = "UserService";
    }
}

export class VRService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("VRService");
        this.Name = "VRService";
        this.AutomaticScaling = VRScaling.World;
        this.AvatarGestures = false;
        this.ControllerModels = VRControllerModelMode.Transparent;
        this.FadeOutViewOnCollision = true;
        this.LaserPointer = VRLaserPointerMode.Pointer;
    }
    public get AutomaticScaling() {return this.GetProp("AutomaticScaling", DataType.Enum)! as VRScaling;}
    public set AutomaticScaling(value) {this.SetProp("AutomaticScaling", DataType.Enum, value);}
    public get AvatarGestures() {return this.GetProp("AvatarGestures", DataType.Bool)!;}
    public set AvatarGestures(value) {this.SetProp("AvatarGestures", DataType.Bool, value);}
    public get ControllerModels() {return this.GetProp("ControllerModels", DataType.Enum)! as VRControllerModelMode;}
    public set ControllerModels(value) {this.SetProp("ControllerModels", DataType.Enum, value);}
    public get FadeOutViewOnCollision() {return this.GetProp("FadeOutViewOnCollision", DataType.Bool)!;}
    public set FadeOutViewOnCollision(value) {this.SetProp("FadeOutViewOnCollision", DataType.Bool, value);}
    public get LaserPointer() {return this.GetProp("LaserPointer", DataType.Enum)! as VRLaserPointerMode;}
    public set LaserPointer(value) {this.SetProp("LaserPointer", DataType.Enum, value);}
}

export class VRStatusService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("VRStatusService");
        this.Name = "VRStatusService";
    }
}

export abstract class ValueBase extends Instance {
    public constructor()
    {
        super();
        this.addClassName("ValueBase");
    }
}

export class BinaryStringValue extends ValueBase {
    public constructor()
    {
        super();
        this.addClassName("BinaryStringValue");
        this.Name = "BinaryStringValue";
        this.Value = "";
    }
    public get Value() {return this.GetProp("Value", DataType.String)!;}
    public set Value(value) {this.SetProp("Value", DataType.String, value);}
}

export class BoolValue extends ValueBase {
    public constructor()
    {
        super();
        this.addClassName("BoolValue");
        this.Name = "BoolValue";
        this.Value = false;
    }
    public get Value() {return this.GetProp("Value", DataType.Bool)!;}
    public set Value(value) {this.SetProp("Value", DataType.Bool, value);}
}

export class BrickColorValue extends ValueBase {
    public constructor()
    {
        super();
        this.addClassName("BrickColorValue");
        this.Name = "BrickColorValue";
    }
    public get Value() {return this.GetProp("Value", DataType.BrickColor);}
    public set Value(value) {this.SetProp("Value", DataType.BrickColor, value);}
}

export class CFrameValue extends ValueBase {
    public constructor()
    {
        super();
        this.addClassName("CFrameValue");
        this.Name = "CFrameValue";
        this.Value = CFrame.Identity;
    }
    public get Value() {return this.GetProp("Value", DataType.CFrame)!;}
    public set Value(value) {this.SetProp("Value", DataType.CFrame, value);}
}

export class Color3Value extends ValueBase {
    public constructor()
    {
        super();
        this.addClassName("Color3Value");
        this.Name = "Color3Value";
        this.Value = Color3.FromRGB(0, 0, 0);
    }
    public get Value() {return this.GetProp("Value", DataType.Color3)!;}
    public set Value(value) {this.SetProp("Value", DataType.Color3, value);}
}

/**@deprecated Deprecated by Roblox*/
export class DoubleConstrainedValue extends ValueBase {
    public constructor()
    {
        super();
        this.addClassName("DoubleConstrainedValue");
        this.Name = "DoubleConstrainedValue";
        this.MaxValue = 1;
        this.MinValue = 0;
        this.Value = 0;
    }
    public get MaxValue() {return this.GetProp("MaxValue", DataType.Float64)!;}
    public set MaxValue(value) {this.SetProp("MaxValue", DataType.Float64, value);}
    public get MinValue() {return this.GetProp("MinValue", DataType.Float64)!;}
    public set MinValue(value) {this.SetProp("MinValue", DataType.Float64, value);}
    public get Value() {return this.GetProp("value", DataType.Float64)!;}
    public set Value(value) {this.SetProp("value", DataType.Float64, value);}
}

/**@deprecated Deprecated by Roblox*/
export class IntConstrainedValue extends ValueBase {
    public constructor()
    {
        super();
        this.addClassName("IntConstrainedValue");
        this.Name = "IntConstrainedValue";
        this.MaxValue = BigInt(10);
        this.MinValue = BigInt(0);
        this.Value = BigInt(0);
    }
    public get MaxValue() {return this.GetProp("MaxValue", DataType.Int64)!;}
    public set MaxValue(value) {this.SetProp("MaxValue", DataType.Int64, value);}
    public get MinValue() {return this.GetProp("MinValue", DataType.Int64)!;}
    public set MinValue(value) {this.SetProp("MinValue", DataType.Int64, value);}
    public get Value() {return this.GetProp("value", DataType.Int64)!;}
    public set Value(value) {this.SetProp("value", DataType.Int64, value);}
}

export class IntValue extends ValueBase {
    public constructor()
    {
        super();
        this.addClassName("IntValue");
        this.Name = "IntValue";
        this.Value = BigInt(0);
    }
    public get Value() {return this.GetProp("Value", DataType.Int64)!;}
    public set Value(value) {this.SetProp("Value", DataType.Int64, value);}
}

export class NumberValue extends ValueBase {
    public constructor()
    {
        super();
        this.addClassName("NumberValue");
        this.Name = "NumberValue";
        this.Value = 0;
    }
    public get Value() {return this.GetProp("Value", DataType.Float64)!;}
    public set Value(value) {this.SetProp("Value", DataType.Float64, value);}
}

export class ObjectValue extends ValueBase {
    public constructor()
    {
        super();
        this.addClassName("ObjectValue");
        this.Name = "ObjectValue";
    }
    public get Value() {return this.GetProp("Value", DataType.Referent) as Instance | undefined;}
    public set Value(value) {this.SetProp("Value", DataType.Referent, value);}
}

export class RayValue extends ValueBase {
    public constructor()
    {
        super();
        this.addClassName("RayValue");
        this.Name = "RayValue";
        this.Value = new Ray(new Vector3(0, 0, 0), new Vector3(0, 0, 0));
    }
    public get Value() {return this.GetProp("Value", DataType.Ray)!;}
    public set Value(value) {this.SetProp("Value", DataType.Ray, value);}
}

export class StringValue extends ValueBase {
    public constructor()
    {
        super();
        this.addClassName("StringValue");
        this.Name = "StringValue";
        this.Value = "";
    }
    public get Value() {return this.GetProp("Value", DataType.String)!;}
    public set Value(value) {this.SetProp("Value", DataType.String, value);}
}

export class Vector3Value extends ValueBase {
    public constructor()
    {
        super();
        this.addClassName("Vector3Value");
        this.Name = "Vector3Value";
        this.Value = new Vector3(0, 0, 0);
    }
    public get Value() {return this.GetProp("Value", DataType.Vector3)!;}
    public set Value(value) {this.SetProp("Value", DataType.Vector3, value);}
}

export class Vector3Curve extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Vector3Curve");
        this.Name = "Vector3Curve";
    }
}

export class VersionControlService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("VersionControlService");
        this.Name = "VersionControlService";
    }
}

export class VideoCaptureService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("VideoCaptureService");
        this.Name = "VideoCaptureService";
    }
}

export class VideoDeviceInput extends Instance {
    public constructor()
    {
        super();
        this.addClassName("VideoDeviceInput");
        this.Name = "VideoDeviceInput";
        this.Active = false;
        this.CameraId = "";
        this.CaptureQuality = VideoDeviceCaptureQuality.Default;
    }
    public get Active() {return this.GetProp("Active", DataType.Bool)!;}
    public set Active(value) {this.SetProp("Active", DataType.Bool, value);}
    public get CameraId() {return this.GetProp("CameraId", DataType.String)!;}
    public set CameraId(value) {this.SetProp("CameraId", DataType.String, value);}
    public get CaptureQuality() {return this.GetProp("CaptureQuality", DataType.Enum)! as VideoDeviceCaptureQuality;}
    public set CaptureQuality(value) {this.SetProp("CaptureQuality", DataType.Enum, value);}
}

export class VideoPlayer extends Instance {
    public constructor()
    {
        super();
        this.addClassName("VideoPlayer");
        this.Name = "VideoPlayer";
        this.Asset = "";
        this.Looping = false;
        this.PlaybackSpeed = 1;
        this.TimePosition = 0;
        this.Volume = 1;
    }
    public get Asset() {return this.GetProp("Asset", DataType.String)!;}
    public set Asset(value) {this.SetProp("Asset", DataType.String, value);}
    public get Looping() {return this.GetProp("Looping", DataType.Bool)!;}
    public set Looping(value) {this.SetProp("Looping", DataType.Bool, value);}
    public get PlaybackSpeed() {return this.GetProp("PlaybackSpeed", DataType.Float32)!;}
    public set PlaybackSpeed(value) {this.SetProp("PlaybackSpeed", DataType.Float32, value);}
    public get TimePosition() {return this.GetProp("TimePosition", DataType.Float64)!;}
    public set TimePosition(value) {this.SetProp("TimePosition", DataType.Float64, value);}
    public get Volume() {return this.GetProp("Volume", DataType.Float32)!;}
    public set Volume(value) {this.SetProp("Volume", DataType.Float32, value);}
}

export class VideoService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("VideoService");
        this.Name = "VideoService";
    }
}

export class VirtualInputManager extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("VirtualInputManager");
        this.Name = "VirtualInputManager";
    }
}

export class VirtualUser extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("VirtualUser");
        this.Name = "VirtualUser";
    }
}

export class VisibilityCheckDispatcher extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("VisibilityCheckDispatcher");
        this.Name = "VisibilityCheckDispatcher";
    }
}

export class Visit extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("Visit");
        this.Name = "Visit";
    }
}

export class VisualizationMode extends Instance {
    public constructor()
    {
        super();
        this.addClassName("VisualizationMode");
        this.Name = "VisualizationMode";
        this.Enabled = false;
        this.Title = "";
        this.ToolTip = "";
    }
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get Title() {return this.GetProp("Title", DataType.String)!;}
    public set Title(value) {this.SetProp("Title", DataType.String, value);}
    public get ToolTip() {return this.GetProp("ToolTip", DataType.String)!;}
    public set ToolTip(value) {this.SetProp("ToolTip", DataType.String, value);}
}

export class VisualizationModeCategory extends Instance {
    public constructor()
    {
        super();
        this.addClassName("VisualizationModeCategory");
        this.Name = "VisualizationModeCategory";
        this.Enabled = false;
        this.Title = "";
    }
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool)!;}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get Title() {return this.GetProp("Title", DataType.String)!;}
    public set Title(value) {this.SetProp("Title", DataType.String, value);}
}

export class VisualizationModeService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("VisualizationModeService");
        this.Name = "VisualizationModeService";
    }
}

export class VoiceChatInternal extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("VoiceChatInternal");
        this.Name = "VoiceChatInternal";
    }
}

export class VoiceChatService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("VoiceChatService");
        this.Name = "VoiceChatService";
        this.DefaultDistanceAttenuation = VoiceChatDistanceAttenuationType.Inverse;
        this.EnableDefaultVoice = true;
        this.UseAudioApi = AudioApiRollout.Automatic;
    }
    public get DefaultDistanceAttenuation() {return this.GetProp("DefaultDistanceAttenuation", DataType.Enum)! as VoiceChatDistanceAttenuationType;}
    public set DefaultDistanceAttenuation(value) {this.SetProp("DefaultDistanceAttenuation", DataType.Enum, value);}
    public get EnableDefaultVoice() {return this.GetProp("EnableDefaultVoice", DataType.Bool)!;}
    public set EnableDefaultVoice(value) {this.SetProp("EnableDefaultVoice", DataType.Bool, value);}
    public get UseAudioApi() {return this.GetProp("UseAudioApi", DataType.Enum)! as AudioApiRollout;}
    public set UseAudioApi(value) {this.SetProp("UseAudioApi", DataType.Enum, value);}
}

export class WebSocketService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("WebSocketService");
        this.Name = "WebSocketService";
    }
}

export class WebViewService extends Instance {
    public constructor()
    {
        super(true);
        this.addClassName("WebViewService");
        this.Name = "WebViewService";
    }
}

export class WeldConstraint extends Instance {
    public constructor()
    {
        super();
        this.addClassName("WeldConstraint");
        this.Name = "WeldConstraint";
        this.State = 3;
    }
    public get CFrame0() {return this.GetProp("CFrame0", DataType.CFrame);}
    public set CFrame0(value) {this.SetProp("CFrame0", DataType.CFrame, value);}
    public get Part0Internal() {return this.GetProp("Part0Internal", DataType.Referent) as BasePart | undefined;}
    public set Part0Internal(value) {this.SetProp("Part0Internal", DataType.Referent, value);}
    public get Part1Internal() {return this.GetProp("Part1Internal", DataType.Referent) as BasePart | undefined;}
    public set Part1Internal(value) {this.SetProp("Part1Internal", DataType.Referent, value);}
    public get State() {return this.GetProp("State", DataType.Int32)!;}
    public set State(value) {this.SetProp("State", DataType.Int32, value);}
}

export class Wire extends Instance {
    public constructor()
    {
        super();
        this.addClassName("Wire");
        this.Name = "Wire";
        this.SourceName = "Output";
        this.TargetName = "Input";
    }
    public get SourceInstance() {return this.GetProp("SourceInstance", DataType.Referent) as Instance | undefined;}
    public set SourceInstance(value) {this.SetProp("SourceInstance", DataType.Referent, value);}
    public get SourceName() {return this.GetProp("SourceName", DataType.String)!;}
    public set SourceName(value) {this.SetProp("SourceName", DataType.String, value);}
    public get TargetInstance() {return this.GetProp("TargetInstance", DataType.Referent) as Instance | undefined;}
    public set TargetInstance(value) {this.SetProp("TargetInstance", DataType.Referent, value);}
    public get TargetName() {return this.GetProp("TargetName", DataType.String)!;}
    public set TargetName(value) {this.SetProp("TargetName", DataType.String, value);}
}

export type NameToClass = {
    ["Instance"]: Instance
    ["AccessoryDescription"]: AccessoryDescription
    ["AccountService"]: AccountService
    ["Accoutrement"]: Accoutrement
    ["Accessory"]: Accessory
    ["Hat"]: Hat
    ["AchievementService"]: AchievementService
    ["ActivityHistoryEventService"]: ActivityHistoryEventService
    ["AdPortal"]: AdPortal
    ["AdService"]: AdService
    ["AdvancedDragger"]: AdvancedDragger
    ["AnalyticsService"]: AnalyticsService
    ["Animation"]: Animation
    ["AnimationClip"]: AnimationClip
    ["CurveAnimation"]: CurveAnimation
    ["KeyframeSequence"]: KeyframeSequence
    ["AnimationClipProvider"]: AnimationClipProvider
    ["AnimationController"]: AnimationController
    ["AnimationFromVideoCreatorService"]: AnimationFromVideoCreatorService
    ["AnimationFromVideoCreatorStudioService"]: AnimationFromVideoCreatorStudioService
    ["AnimationRigData"]: AnimationRigData
    ["Animator"]: Animator
    ["Annotation"]: Annotation
    ["WorkspaceAnnotation"]: WorkspaceAnnotation
    ["AnnotationsService"]: AnnotationsService
    ["AppLifecycleObserverService"]: AppLifecycleObserverService
    ["AppUpdateService"]: AppUpdateService
    ["AssetCounterService"]: AssetCounterService
    ["AssetDeliveryProxy"]: AssetDeliveryProxy
    ["AssetImportService"]: AssetImportService
    ["AssetManagerService"]: AssetManagerService
    ["AssetService"]: AssetService
    ["Atmosphere"]: Atmosphere
    ["Attachment"]: Attachment
    ["Bone"]: Bone
    ["AudioAnalyzer"]: AudioAnalyzer
    ["AudioChannelMixer"]: AudioChannelMixer
    ["AudioChannelSplitter"]: AudioChannelSplitter
    ["AudioChorus"]: AudioChorus
    ["AudioCompressor"]: AudioCompressor
    ["AudioDeviceInput"]: AudioDeviceInput
    ["AudioDeviceOutput"]: AudioDeviceOutput
    ["AudioDistortion"]: AudioDistortion
    ["AudioEcho"]: AudioEcho
    ["AudioEmitter"]: AudioEmitter
    ["AudioEqualizer"]: AudioEqualizer
    ["AudioFader"]: AudioFader
    ["AudioFilter"]: AudioFilter
    ["AudioFlanger"]: AudioFlanger
    ["AudioFocusService"]: AudioFocusService
    ["AudioLimiter"]: AudioLimiter
    ["AudioListener"]: AudioListener
    ["AudioPitchShifter"]: AudioPitchShifter
    ["AudioPlayer"]: AudioPlayer
    ["AudioRecorder"]: AudioRecorder
    ["AudioReverb"]: AudioReverb
    ["AudioSearchParams"]: AudioSearchParams
    ["AudioTextToSpeech"]: AudioTextToSpeech
    ["AuroraScriptService"]: AuroraScriptService
    ["AuroraService"]: AuroraService
    ["AvatarAccessoryRules"]: AvatarAccessoryRules
    ["AvatarAnimationRules"]: AvatarAnimationRules
    ["AvatarBodyRules"]: AvatarBodyRules
    ["AvatarChatService"]: AvatarChatService
    ["AvatarClothingRules"]: AvatarClothingRules
    ["AvatarCollisionRules"]: AvatarCollisionRules
    ["AvatarCreationService"]: AvatarCreationService
    ["AvatarEditorService"]: AvatarEditorService
    ["AvatarImportService"]: AvatarImportService
    ["AvatarPreloader"]: AvatarPreloader
    ["AvatarRules"]: AvatarRules
    ["AvatarSettings"]: AvatarSettings
    ["Backpack"]: Backpack
    ["BadgeService"]: BadgeService
    ["BasePlayerGui"]: BasePlayerGui
    ["CoreGui"]: CoreGui
    ["StarterGui"]: StarterGui
    ["BaseRemoteEvent"]: BaseRemoteEvent
    ["RemoteEvent"]: RemoteEvent
    ["UnreliableRemoteEvent"]: UnreliableRemoteEvent
    ["BaseWrap"]: BaseWrap
    ["WrapDeformer"]: WrapDeformer
    ["WrapLayer"]: WrapLayer
    ["WrapTarget"]: WrapTarget
    ["Beam"]: Beam
    ["BindableEvent"]: BindableEvent
    ["BindableFunction"]: BindableFunction
    ["BodyMover"]: BodyMover
    ["BodyAngularVelocity"]: BodyAngularVelocity
    ["BodyForce"]: BodyForce
    ["BodyGyro"]: BodyGyro
    ["BodyPosition"]: BodyPosition
    ["BodyThrust"]: BodyThrust
    ["BodyVelocity"]: BodyVelocity
    ["RocketPropulsion"]: RocketPropulsion
    ["BodyPartDescription"]: BodyPartDescription
    ["Breakpoint"]: Breakpoint
    ["BrowserService"]: BrowserService
    ["BugReporterService"]: BugReporterService
    ["BulkImportService"]: BulkImportService
    ["CacheableContentProvider"]: CacheableContentProvider
    ["HSRDataContentProvider"]: HSRDataContentProvider
    ["MeshContentProvider"]: MeshContentProvider
    ["SolidModelContentProvider"]: SolidModelContentProvider
    ["CalloutService"]: CalloutService
    ["CaptureService"]: CaptureService
    ["ChangeHistoryService"]: ChangeHistoryService
    ["CharacterAppearance"]: CharacterAppearance
    ["BodyColors"]: BodyColors
    ["CharacterMesh"]: CharacterMesh
    ["Clothing"]: Clothing
    ["Pants"]: Pants
    ["Shirt"]: Shirt
    ["ShirtGraphic"]: ShirtGraphic
    ["Skin"]: Skin
    ["Chat"]: Chat
    ["ChatbotUIService"]: ChatbotUIService
    ["ClickDetector"]: ClickDetector
    ["DragDetector"]: DragDetector
    ["CloudCRUDService"]: CloudCRUDService
    ["Clouds"]: Clouds
    ["ClusterPacketCache"]: ClusterPacketCache
    ["CollaboratorsService"]: CollaboratorsService
    ["CollectionService"]: CollectionService
    ["CommandService"]: CommandService
    ["CommerceService"]: CommerceService
    ["ConfigService"]: ConfigService
    ["Configuration"]: Configuration
    ["ConfigureServerService"]: ConfigureServerService
    ["ConnectivityService"]: ConnectivityService
    ["Constraint"]: Constraint
    ["AlignOrientation"]: AlignOrientation
    ["AlignPosition"]: AlignPosition
    ["AngularVelocity"]: AngularVelocity
    ["AnimationConstraint"]: AnimationConstraint
    ["BallSocketConstraint"]: BallSocketConstraint
    ["HingeConstraint"]: HingeConstraint
    ["LineForce"]: LineForce
    ["LinearVelocity"]: LinearVelocity
    ["PlaneConstraint"]: PlaneConstraint
    ["Plane"]: Plane
    ["RigidConstraint"]: RigidConstraint
    ["RodConstraint"]: RodConstraint
    ["RopeConstraint"]: RopeConstraint
    ["SlidingBallConstraint"]: SlidingBallConstraint
    ["CylindricalConstraint"]: CylindricalConstraint
    ["PrismaticConstraint"]: PrismaticConstraint
    ["SpringConstraint"]: SpringConstraint
    ["Torque"]: Torque
    ["TorsionSpringConstraint"]: TorsionSpringConstraint
    ["UniversalConstraint"]: UniversalConstraint
    ["VectorForce"]: VectorForce
    ["ContentProvider"]: ContentProvider
    ["ContextActionService"]: ContextActionService
    ["Controller"]: Controller
    ["HumanoidController"]: HumanoidController
    ["SkateboardController"]: SkateboardController
    ["VehicleController"]: VehicleController
    ["ControllerBase"]: ControllerBase
    ["AirController"]: AirController
    ["ClimbController"]: ClimbController
    ["GroundController"]: GroundController
    ["SwimController"]: SwimController
    ["ControllerManager"]: ControllerManager
    ["ControllerService"]: ControllerService
    ["ConversationalAIAcceptanceService"]: ConversationalAIAcceptanceService
    ["CookiesService"]: CookiesService
    ["CorePackages"]: CorePackages
    ["CoreScriptDebuggingManagerHelper"]: CoreScriptDebuggingManagerHelper
    ["CoreScriptSyncService"]: CoreScriptSyncService
    ["CreationDBService"]: CreationDBService
    ["CreatorStoreService"]: CreatorStoreService
    ["CrossDMScriptChangeListener"]: CrossDMScriptChangeListener
    ["CustomEvent"]: CustomEvent
    ["CustomEventReceiver"]: CustomEventReceiver
    ["CustomLog"]: CustomLog
    ["DataModelMesh"]: DataModelMesh
    ["BevelMesh"]: BevelMesh
    ["BlockMesh"]: BlockMesh
    ["CylinderMesh"]: CylinderMesh
    ["FileMesh"]: FileMesh
    ["SpecialMesh"]: SpecialMesh
    ["DataModelPatchService"]: DataModelPatchService
    ["DataStoreGetOptions"]: DataStoreGetOptions
    ["DataStoreIncrementOptions"]: DataStoreIncrementOptions
    ["DataStoreOptions"]: DataStoreOptions
    ["DataStoreService"]: DataStoreService
    ["DataStoreSetOptions"]: DataStoreSetOptions
    ["Debris"]: Debris
    ["DebuggablePluginWatcher"]: DebuggablePluginWatcher
    ["DebuggerConnectionManager"]: DebuggerConnectionManager
    ["DebuggerManager"]: DebuggerManager
    ["DebuggerUIService"]: DebuggerUIService
    ["DebuggerWatch"]: DebuggerWatch
    ["DeviceIdService"]: DeviceIdService
    ["Dialog"]: Dialog
    ["DialogChoice"]: DialogChoice
    ["DraftsService"]: DraftsService
    ["Dragger"]: Dragger
    ["DraggerService"]: DraggerService
    ["EditableService"]: EditableService
    ["EulerRotationCurve"]: EulerRotationCurve
    ["EventIngestService"]: EventIngestService
    ["ExampleService"]: ExampleService
    ["ExperienceAuthService"]: ExperienceAuthService
    ["ExperienceInviteOptions"]: ExperienceInviteOptions
    ["ExperienceNotificationService"]: ExperienceNotificationService
    ["ExperienceService"]: ExperienceService
    ["ExperienceStateCaptureService"]: ExperienceStateCaptureService
    ["ExplorerFilter"]: ExplorerFilter
    ["ExplorerServiceVisibilityService"]: ExplorerServiceVisibilityService
    ["Explosion"]: Explosion
    ["FaceAnimatorService"]: FaceAnimatorService
    ["FaceControls"]: FaceControls
    ["FaceInstance"]: FaceInstance
    ["Decal"]: Decal
    ["Texture"]: Texture
    ["FacialAgeEstimationService"]: FacialAgeEstimationService
    ["FacialAnimationRecordingService"]: FacialAnimationRecordingService
    ["FacialAnimationStreamingServiceV2"]: FacialAnimationStreamingServiceV2
    ["Feature"]: Feature
    ["Hole"]: Hole
    ["MotorFeature"]: MotorFeature
    ["FeatureRestrictionManager"]: FeatureRestrictionManager
    ["FeedService"]: FeedService
    ["Fire"]: Fire
    ["FlagStandService"]: FlagStandService
    ["FloatCurve"]: FloatCurve
    ["FlyweightService"]: FlyweightService
    ["CSGDictionaryService"]: CSGDictionaryService
    ["NonReplicatedCSGDictionaryService"]: NonReplicatedCSGDictionaryService
    ["Folder"]: Folder
    ["ForceField"]: ForceField
    ["FriendService"]: FriendService
    ["FunctionalTest"]: FunctionalTest
    ["GamePassService"]: GamePassService
    ["GamepadService"]: GamepadService
    ["GenerationService"]: GenerationService
    ["GenericChallengeService"]: GenericChallengeService
    ["Geometry"]: Geometry
    ["GeometryService"]: GeometryService
    ["GetTextBoundsParams"]: GetTextBoundsParams
    ["GoogleAnalyticsConfiguration"]: GoogleAnalyticsConfiguration
    ["GroupService"]: GroupService
    ["GuiBase"]: GuiBase
    ["GuiBase2d"]: GuiBase2d
    ["GuiObject"]: GuiObject
    ["CanvasGroup"]: CanvasGroup
    ["Frame"]: Frame
    ["GuiButton"]: GuiButton
    ["ImageButton"]: ImageButton
    ["TextButton"]: TextButton
    ["GuiLabel"]: GuiLabel
    ["ImageLabel"]: ImageLabel
    ["TextLabel"]: TextLabel
    ["RelativeGui"]: RelativeGui
    ["ScrollingFrame"]: ScrollingFrame
    ["TextBox"]: TextBox
    ["VideoDisplay"]: VideoDisplay
    ["VideoFrame"]: VideoFrame
    ["ViewportFrame"]: ViewportFrame
    ["LayerCollector"]: LayerCollector
    ["BillboardGui"]: BillboardGui
    ["ScreenGui"]: ScreenGui
    ["GuiMain"]: GuiMain
    ["SurfaceGuiBase"]: SurfaceGuiBase
    ["AdGui"]: AdGui
    ["SurfaceGui"]: SurfaceGui
    ["GuiBase3d"]: GuiBase3d
    ["FloorWire"]: FloorWire
    ["InstanceAdornment"]: InstanceAdornment
    ["SelectionBox"]: SelectionBox
    ["PVAdornment"]: PVAdornment
    ["HandleAdornment"]: HandleAdornment
    ["BoxHandleAdornment"]: BoxHandleAdornment
    ["ConeHandleAdornment"]: ConeHandleAdornment
    ["CylinderHandleAdornment"]: CylinderHandleAdornment
    ["ImageHandleAdornment"]: ImageHandleAdornment
    ["LineHandleAdornment"]: LineHandleAdornment
    ["SphereHandleAdornment"]: SphereHandleAdornment
    ["WireframeHandleAdornment"]: WireframeHandleAdornment
    ["ParabolaAdornment"]: ParabolaAdornment
    ["SelectionSphere"]: SelectionSphere
    ["PartAdornment"]: PartAdornment
    ["HandlesBase"]: HandlesBase
    ["ArcHandles"]: ArcHandles
    ["Handles"]: Handles
    ["SurfaceSelection"]: SurfaceSelection
    ["SelectionLasso"]: SelectionLasso
    ["SelectionPartLasso"]: SelectionPartLasso
    ["SelectionPointLasso"]: SelectionPointLasso
    ["Path2D"]: Path2D
    ["GuiService"]: GuiService
    ["GuidRegistryService"]: GuidRegistryService
    ["HapticEffect"]: HapticEffect
    ["HapticService"]: HapticService
    ["HeapProfilerService"]: HeapProfilerService
    ["HeatmapService"]: HeatmapService
    ["HeightmapImporterService"]: HeightmapImporterService
    ["HiddenSurfaceRemovalAsset"]: HiddenSurfaceRemovalAsset
    ["Highlight"]: Highlight
    ["Hopper"]: Hopper
    ["HttpRbxApiService"]: HttpRbxApiService
    ["HttpService"]: HttpService
    ["Humanoid"]: Humanoid
    ["HumanoidDescription"]: HumanoidDescription
    ["HumanoidRigDescription"]: HumanoidRigDescription
    ["IKControl"]: IKControl
    ["ILegacyStudioBridge"]: ILegacyStudioBridge
    ["LegacyStudioBridge"]: LegacyStudioBridge
    ["IXPService"]: IXPService
    ["IncrementalPatchBuilder"]: IncrementalPatchBuilder
    ["InputAction"]: InputAction
    ["InputBinding"]: InputBinding
    ["InputContext"]: InputContext
    ["InsertService"]: InsertService
    ["InternalSyncItem"]: InternalSyncItem
    ["InternalSyncService"]: InternalSyncService
    ["JointInstance"]: JointInstance
    ["DynamicRotate"]: DynamicRotate
    ["RotateP"]: RotateP
    ["RotateV"]: RotateV
    ["Glue"]: Glue
    ["ManualSurfaceJointInstance"]: ManualSurfaceJointInstance
    ["ManualGlue"]: ManualGlue
    ["ManualWeld"]: ManualWeld
    ["Motor"]: Motor
    ["Motor6D"]: Motor6D
    ["Rotate"]: Rotate
    ["Snap"]: Snap
    ["VelocityMotor"]: VelocityMotor
    ["Weld"]: Weld
    ["JointsService"]: JointsService
    ["KeyboardService"]: KeyboardService
    ["Keyframe"]: Keyframe
    ["KeyframeMarker"]: KeyframeMarker
    ["KeyframeSequenceProvider"]: KeyframeSequenceProvider
    ["LSPFileSyncService"]: LSPFileSyncService
    ["LanguageService"]: LanguageService
    ["Light"]: Light
    ["PointLight"]: PointLight
    ["SpotLight"]: SpotLight
    ["SurfaceLight"]: SurfaceLight
    ["Lighting"]: Lighting
    ["LinkingService"]: LinkingService
    ["LiveScriptingService"]: LiveScriptingService
    ["LiveSyncService"]: LiveSyncService
    ["LocalStorageService"]: LocalStorageService
    ["AppStorageService"]: AppStorageService
    ["UserStorageService"]: UserStorageService
    ["LocalizationService"]: LocalizationService
    ["LocalizationTable"]: LocalizationTable
    ["LodDataService"]: LodDataService
    ["LogReporterService"]: LogReporterService
    ["LogService"]: LogService
    ["LoginService"]: LoginService
    ["LuaSourceContainer"]: LuaSourceContainer
    ["AuroraScript"]: AuroraScript
    ["BaseScript"]: BaseScript
    ["Script"]: Script
    ["LocalScript"]: LocalScript
    ["ModuleScript"]: ModuleScript
    ["LuaWebService"]: LuaWebService
    ["LuauScriptAnalyzerService"]: LuauScriptAnalyzerService
    ["MLModelDeliveryService"]: MLModelDeliveryService
    ["MarkerCurve"]: MarkerCurve
    ["MarketplaceService"]: MarketplaceService
    ["MatchmakingService"]: MatchmakingService
    ["MaterialGenerationService"]: MaterialGenerationService
    ["MaterialService"]: MaterialService
    ["MaterialVariant"]: MaterialVariant
    ["MemStorageService"]: MemStorageService
    ["MemoryStoreService"]: MemoryStoreService
    ["Message"]: Message
    ["Hint"]: Hint
    ["MessageBusService"]: MessageBusService
    ["MessagingService"]: MessagingService
    ["MetaBreakpointManager"]: MetaBreakpointManager
    ["MouseService"]: MouseService
    ["NetworkPeer"]: NetworkPeer
    ["NetworkClient"]: NetworkClient
    ["NetworkServer"]: NetworkServer
    ["NetworkSettings"]: NetworkSettings
    ["NoCollisionConstraint"]: NoCollisionConstraint
    ["Noise"]: Noise
    ["NotificationService"]: NotificationService
    ["OmniRecommendationsService"]: OmniRecommendationsService
    ["OpenCloudService"]: OpenCloudService
    ["OperationGraph"]: OperationGraph
    ["PVInstance"]: PVInstance
    ["BasePart"]: BasePart
    ["CornerWedgePart"]: CornerWedgePart
    ["FormFactorPart"]: FormFactorPart
    ["Part"]: Part
    ["FlagStand"]: FlagStand
    ["Seat"]: Seat
    ["SkateboardPlatform"]: SkateboardPlatform
    ["SpawnLocation"]: SpawnLocation
    ["WedgePart"]: WedgePart
    ["Terrain"]: Terrain
    ["TriangleMeshPart"]: TriangleMeshPart
    ["MeshPart"]: MeshPart
    ["PartOperation"]: PartOperation
    ["IntersectOperation"]: IntersectOperation
    ["NegateOperation"]: NegateOperation
    ["UnionOperation"]: UnionOperation
    ["TrussPart"]: TrussPart
    ["VehicleSeat"]: VehicleSeat
    ["Camera"]: Camera
    ["Model"]: Model
    ["Actor"]: Actor
    ["BackpackItem"]: BackpackItem
    ["HopperBin"]: HopperBin
    ["Tool"]: Tool
    ["Flag"]: Flag
    ["WorldRoot"]: WorldRoot
    ["Workspace"]: Workspace
    ["WorldModel"]: WorldModel
    ["PackageService"]: PackageService
    ["PackageUIService"]: PackageUIService
    ["PartOperationAsset"]: PartOperationAsset
    ["ParticleEmitter"]: ParticleEmitter
    ["PatchBundlerFileWatch"]: PatchBundlerFileWatch
    ["PathfindingLink"]: PathfindingLink
    ["PathfindingModifier"]: PathfindingModifier
    ["PathfindingService"]: PathfindingService
    ["PerformanceControlService"]: PerformanceControlService
    ["PermissionsService"]: PermissionsService
    ["PhysicsService"]: PhysicsService
    ["PlaceAssetIdsService"]: PlaceAssetIdsService
    ["PlaceStatsService"]: PlaceStatsService
    ["PlacesService"]: PlacesService
    ["PlatformCloudStorageService"]: PlatformCloudStorageService
    ["PlatformFriendsService"]: PlatformFriendsService
    ["Player"]: Player
    ["PlayerDataService"]: PlayerDataService
    ["PlayerEmulatorService"]: PlayerEmulatorService
    ["PlayerHydrationService"]: PlayerHydrationService
    ["PlayerViewService"]: PlayerViewService
    ["Players"]: Players
    ["PluginAction"]: PluginAction
    ["PluginCapabilities"]: PluginCapabilities
    ["PluginDebugService"]: PluginDebugService
    ["PluginGuiService"]: PluginGuiService
    ["PluginManagementService"]: PluginManagementService
    ["PluginPolicyService"]: PluginPolicyService
    ["PointsService"]: PointsService
    ["PolicyService"]: PolicyService
    ["PoseBase"]: PoseBase
    ["NumberPose"]: NumberPose
    ["Pose"]: Pose
    ["PostEffect"]: PostEffect
    ["BloomEffect"]: BloomEffect
    ["BlurEffect"]: BlurEffect
    ["ColorCorrectionEffect"]: ColorCorrectionEffect
    ["ColorGradingEffect"]: ColorGradingEffect
    ["DepthOfFieldEffect"]: DepthOfFieldEffect
    ["SunRaysEffect"]: SunRaysEffect
    ["ProcessInstancePhysicsService"]: ProcessInstancePhysicsService
    ["ProximityPrompt"]: ProximityPrompt
    ["ProximityPromptService"]: ProximityPromptService
    ["PublishService"]: PublishService
    ["RTAnimationTracker"]: RTAnimationTracker
    ["RbxAnalyticsService"]: RbxAnalyticsService
    ["ReflectionMetadata"]: ReflectionMetadata
    ["ReflectionMetadataCallbacks"]: ReflectionMetadataCallbacks
    ["ReflectionMetadataClasses"]: ReflectionMetadataClasses
    ["ReflectionMetadataEnums"]: ReflectionMetadataEnums
    ["ReflectionMetadataEvents"]: ReflectionMetadataEvents
    ["ReflectionMetadataFunctions"]: ReflectionMetadataFunctions
    ["ReflectionMetadataItem"]: ReflectionMetadataItem
    ["ReflectionMetadataClass"]: ReflectionMetadataClass
    ["ReflectionMetadataEnum"]: ReflectionMetadataEnum
    ["ReflectionMetadataEnumItem"]: ReflectionMetadataEnumItem
    ["ReflectionMetadataMember"]: ReflectionMetadataMember
    ["ReflectionMetadataProperties"]: ReflectionMetadataProperties
    ["ReflectionMetadataYieldFunctions"]: ReflectionMetadataYieldFunctions
    ["ReflectionService"]: ReflectionService
    ["RemoteCursorService"]: RemoteCursorService
    ["RemoteDebuggerServer"]: RemoteDebuggerServer
    ["RemoteFunction"]: RemoteFunction
    ["RenderSettings"]: RenderSettings
    ["RenderingTest"]: RenderingTest
    ["ReplicatedFirst"]: ReplicatedFirst
    ["ReplicatedStorage"]: ReplicatedStorage
    ["RibbonNotificationService"]: RibbonNotificationService
    ["RobloxPluginGuiService"]: RobloxPluginGuiService
    ["RobloxReplicatedStorage"]: RobloxReplicatedStorage
    ["RobloxServerStorage"]: RobloxServerStorage
    ["RomarkRbxAnalyticsService"]: RomarkRbxAnalyticsService
    ["RomarkService"]: RomarkService
    ["RotationCurve"]: RotationCurve
    ["RtMessagingService"]: RtMessagingService
    ["RunService"]: RunService
    ["RuntimeScriptService"]: RuntimeScriptService
    ["SafetyService"]: SafetyService
    ["ScriptChangeService"]: ScriptChangeService
    ["ScriptCloneWatcher"]: ScriptCloneWatcher
    ["ScriptCloneWatcherHelper"]: ScriptCloneWatcherHelper
    ["ScriptCommitService"]: ScriptCommitService
    ["ScriptContext"]: ScriptContext
    ["ScriptEditorService"]: ScriptEditorService
    ["ScriptProfilerService"]: ScriptProfilerService
    ["ScriptRegistrationService"]: ScriptRegistrationService
    ["ScriptService"]: ScriptService
    ["Selection"]: Selection
    ["SelectionHighlightManager"]: SelectionHighlightManager
    ["SensorBase"]: SensorBase
    ["AtmosphereSensor"]: AtmosphereSensor
    ["BuoyancySensor"]: BuoyancySensor
    ["ControllerSensor"]: ControllerSensor
    ["ControllerPartSensor"]: ControllerPartSensor
    ["FluidForceSensor"]: FluidForceSensor
    ["SerializationService"]: SerializationService
    ["ServerScriptService"]: ServerScriptService
    ["ServerStorage"]: ServerStorage
    ["ServiceVisibilityService"]: ServiceVisibilityService
    ["SessionService"]: SessionService
    ["SharedTableRegistry"]: SharedTableRegistry
    ["Sky"]: Sky
    ["Smoke"]: Smoke
    ["SmoothVoxelsUpgraderService"]: SmoothVoxelsUpgraderService
    ["SnippetService"]: SnippetService
    ["SocialService"]: SocialService
    ["Sound"]: Sound
    ["SoundEffect"]: SoundEffect
    ["ChorusSoundEffect"]: ChorusSoundEffect
    ["CompressorSoundEffect"]: CompressorSoundEffect
    ["DistortionSoundEffect"]: DistortionSoundEffect
    ["EchoSoundEffect"]: EchoSoundEffect
    ["EqualizerSoundEffect"]: EqualizerSoundEffect
    ["FlangeSoundEffect"]: FlangeSoundEffect
    ["PitchShiftSoundEffect"]: PitchShiftSoundEffect
    ["ReverbSoundEffect"]: ReverbSoundEffect
    ["TremoloSoundEffect"]: TremoloSoundEffect
    ["SoundGroup"]: SoundGroup
    ["SoundService"]: SoundService
    ["Sparkles"]: Sparkles
    ["SpawnerService"]: SpawnerService
    ["StandalonePluginScripts"]: StandalonePluginScripts
    ["StartPageService"]: StartPageService
    ["StarterGear"]: StarterGear
    ["StarterPack"]: StarterPack
    ["StarterPlayer"]: StarterPlayer
    ["StarterPlayerScripts"]: StarterPlayerScripts
    ["StarterCharacterScripts"]: StarterCharacterScripts
    ["StartupMessageService"]: StartupMessageService
    ["Stats"]: Stats
    ["StopWatchReporter"]: StopWatchReporter
    ["StreamingService"]: StreamingService
    ["StudioAssetService"]: StudioAssetService
    ["StudioAttachment"]: StudioAttachment
    ["StudioCallout"]: StudioCallout
    ["StudioCameraService"]: StudioCameraService
    ["StudioData"]: StudioData
    ["StudioDeviceEmulatorService"]: StudioDeviceEmulatorService
    ["StudioPublishService"]: StudioPublishService
    ["StudioScriptDebugEventListener"]: StudioScriptDebugEventListener
    ["StudioSdkService"]: StudioSdkService
    ["StudioService"]: StudioService
    ["StudioUserService"]: StudioUserService
    ["StudioWidgetsService"]: StudioWidgetsService
    ["StyleBase"]: StyleBase
    ["StyleRule"]: StyleRule
    ["StyleSheet"]: StyleSheet
    ["StyleDerive"]: StyleDerive
    ["StyleLink"]: StyleLink
    ["StylingService"]: StylingService
    ["SurfaceAppearance"]: SurfaceAppearance
    ["SystemThemeService"]: SystemThemeService
    ["TaskScheduler"]: TaskScheduler
    ["Team"]: Team
    ["TeamCreateData"]: TeamCreateData
    ["TeamCreatePublishService"]: TeamCreatePublishService
    ["TeamCreateService"]: TeamCreateService
    ["Teams"]: Teams
    ["TelemetryService"]: TelemetryService
    ["TeleportOptions"]: TeleportOptions
    ["TeleportService"]: TeleportService
    ["TemporaryCageMeshProvider"]: TemporaryCageMeshProvider
    ["TemporaryScriptService"]: TemporaryScriptService
    ["TerrainDetail"]: TerrainDetail
    ["TerrainRegion"]: TerrainRegion
    ["TestService"]: TestService
    ["TextBoxService"]: TextBoxService
    ["TextChannel"]: TextChannel
    ["TextChatCommand"]: TextChatCommand
    ["TextChatConfigurations"]: TextChatConfigurations
    ["BubbleChatConfiguration"]: BubbleChatConfiguration
    ["ChatInputBarConfiguration"]: ChatInputBarConfiguration
    ["ChatWindowConfiguration"]: ChatWindowConfiguration
    ["TextChatMessageProperties"]: TextChatMessageProperties
    ["BubbleChatMessageProperties"]: BubbleChatMessageProperties
    ["TextChatService"]: TextChatService
    ["TextService"]: TextService
    ["TextureGenerationService"]: TextureGenerationService
    ["ThirdPartyUserService"]: ThirdPartyUserService
    ["TimerService"]: TimerService
    ["ToastNotificationService"]: ToastNotificationService
    ["TouchInputService"]: TouchInputService
    ["TracerService"]: TracerService
    ["TrackerStreamAnimation"]: TrackerStreamAnimation
    ["Trail"]: Trail
    ["TutorialService"]: TutorialService
    ["TweenBase"]: TweenBase
    ["Tween"]: Tween
    ["TweenService"]: TweenService
    ["UGCAvatarService"]: UGCAvatarService
    ["UGCValidationService"]: UGCValidationService
    ["UIBase"]: UIBase
    ["UIComponent"]: UIComponent
    ["UIConstraint"]: UIConstraint
    ["UIAspectRatioConstraint"]: UIAspectRatioConstraint
    ["UISizeConstraint"]: UISizeConstraint
    ["UITextSizeConstraint"]: UITextSizeConstraint
    ["UICorner"]: UICorner
    ["UIDragDetector"]: UIDragDetector
    ["UIFlexItem"]: UIFlexItem
    ["UIGradient"]: UIGradient
    ["UILayout"]: UILayout
    ["UIGridStyleLayout"]: UIGridStyleLayout
    ["UIGridLayout"]: UIGridLayout
    ["UIListLayout"]: UIListLayout
    ["UIPageLayout"]: UIPageLayout
    ["UITableLayout"]: UITableLayout
    ["UIPadding"]: UIPadding
    ["UIScale"]: UIScale
    ["UIStroke"]: UIStroke
    ["UIDragDetectorService"]: UIDragDetectorService
    ["UniqueIdLookupService"]: UniqueIdLookupService
    ["UnvalidatedAssetService"]: UnvalidatedAssetService
    ["UserInputService"]: UserInputService
    ["UserService"]: UserService
    ["VRService"]: VRService
    ["VRStatusService"]: VRStatusService
    ["ValueBase"]: ValueBase
    ["BinaryStringValue"]: BinaryStringValue
    ["BoolValue"]: BoolValue
    ["BrickColorValue"]: BrickColorValue
    ["CFrameValue"]: CFrameValue
    ["Color3Value"]: Color3Value
    ["DoubleConstrainedValue"]: DoubleConstrainedValue
    ["IntConstrainedValue"]: IntConstrainedValue
    ["IntValue"]: IntValue
    ["NumberValue"]: NumberValue
    ["ObjectValue"]: ObjectValue
    ["RayValue"]: RayValue
    ["StringValue"]: StringValue
    ["Vector3Value"]: Vector3Value
    ["Vector3Curve"]: Vector3Curve
    ["VersionControlService"]: VersionControlService
    ["VideoCaptureService"]: VideoCaptureService
    ["VideoDeviceInput"]: VideoDeviceInput
    ["VideoPlayer"]: VideoPlayer
    ["VideoService"]: VideoService
    ["VirtualInputManager"]: VirtualInputManager
    ["VirtualUser"]: VirtualUser
    ["VisibilityCheckDispatcher"]: VisibilityCheckDispatcher
    ["Visit"]: Visit
    ["VisualizationMode"]: VisualizationMode
    ["VisualizationModeCategory"]: VisualizationModeCategory
    ["VisualizationModeService"]: VisualizationModeService
    ["VoiceChatInternal"]: VoiceChatInternal
    ["VoiceChatService"]: VoiceChatService
    ["WebSocketService"]: WebSocketService
    ["WebViewService"]: WebViewService
    ["WeldConstraint"]: WeldConstraint
    ["Wire"]: Wire
}

export type ClassFactory = () => Instance

export class ClassMap {
    protected readonly _map: Map<string, ClassFactory> = getClassMap();
    public getFactory(className: string): ClassFactory | undefined {
        return this._map.get(className);
    }
}

function getClassMap() {
    const map = new Map<string, ClassFactory>();
    map.set("AccessoryDescription", () => new AccessoryDescription());
    map.set("AccountService", () => new AccountService());
    map.set("Accoutrement", () => new Accoutrement());
    map.set("Accessory", () => new Accessory());
    map.set("Hat", () => new Hat());
    map.set("AchievementService", () => new AchievementService());
    map.set("ActivityHistoryEventService", () => new ActivityHistoryEventService());
    map.set("AdPortal", () => new AdPortal());
    map.set("AdService", () => new AdService());
    map.set("AdvancedDragger", () => new AdvancedDragger());
    map.set("AnalyticsService", () => new AnalyticsService());
    map.set("Animation", () => new Animation());
    map.set("CurveAnimation", () => new CurveAnimation());
    map.set("KeyframeSequence", () => new KeyframeSequence());
    map.set("AnimationClipProvider", () => new AnimationClipProvider());
    map.set("AnimationController", () => new AnimationController());
    map.set("AnimationFromVideoCreatorService", () => new AnimationFromVideoCreatorService());
    map.set("AnimationFromVideoCreatorStudioService", () => new AnimationFromVideoCreatorStudioService());
    map.set("AnimationRigData", () => new AnimationRigData());
    map.set("Animator", () => new Animator());
    map.set("Annotation", () => new Annotation());
    map.set("WorkspaceAnnotation", () => new WorkspaceAnnotation());
    map.set("AnnotationsService", () => new AnnotationsService());
    map.set("AppLifecycleObserverService", () => new AppLifecycleObserverService());
    map.set("AppUpdateService", () => new AppUpdateService());
    map.set("AssetCounterService", () => new AssetCounterService());
    map.set("AssetDeliveryProxy", () => new AssetDeliveryProxy());
    map.set("AssetImportService", () => new AssetImportService());
    map.set("AssetManagerService", () => new AssetManagerService());
    map.set("AssetService", () => new AssetService());
    map.set("Atmosphere", () => new Atmosphere());
    map.set("Attachment", () => new Attachment());
    map.set("Bone", () => new Bone());
    map.set("AudioAnalyzer", () => new AudioAnalyzer());
    map.set("AudioChannelMixer", () => new AudioChannelMixer());
    map.set("AudioChannelSplitter", () => new AudioChannelSplitter());
    map.set("AudioChorus", () => new AudioChorus());
    map.set("AudioCompressor", () => new AudioCompressor());
    map.set("AudioDeviceInput", () => new AudioDeviceInput());
    map.set("AudioDeviceOutput", () => new AudioDeviceOutput());
    map.set("AudioDistortion", () => new AudioDistortion());
    map.set("AudioEcho", () => new AudioEcho());
    map.set("AudioEmitter", () => new AudioEmitter());
    map.set("AudioEqualizer", () => new AudioEqualizer());
    map.set("AudioFader", () => new AudioFader());
    map.set("AudioFilter", () => new AudioFilter());
    map.set("AudioFlanger", () => new AudioFlanger());
    map.set("AudioFocusService", () => new AudioFocusService());
    map.set("AudioLimiter", () => new AudioLimiter());
    map.set("AudioListener", () => new AudioListener());
    map.set("AudioPitchShifter", () => new AudioPitchShifter());
    map.set("AudioPlayer", () => new AudioPlayer());
    map.set("AudioRecorder", () => new AudioRecorder());
    map.set("AudioReverb", () => new AudioReverb());
    map.set("AudioSearchParams", () => new AudioSearchParams());
    map.set("AudioTextToSpeech", () => new AudioTextToSpeech());
    map.set("AuroraScriptService", () => new AuroraScriptService());
    map.set("AuroraService", () => new AuroraService());
    map.set("AvatarAccessoryRules", () => new AvatarAccessoryRules());
    map.set("AvatarAnimationRules", () => new AvatarAnimationRules());
    map.set("AvatarBodyRules", () => new AvatarBodyRules());
    map.set("AvatarChatService", () => new AvatarChatService());
    map.set("AvatarClothingRules", () => new AvatarClothingRules());
    map.set("AvatarCollisionRules", () => new AvatarCollisionRules());
    map.set("AvatarCreationService", () => new AvatarCreationService());
    map.set("AvatarEditorService", () => new AvatarEditorService());
    map.set("AvatarImportService", () => new AvatarImportService());
    map.set("AvatarPreloader", () => new AvatarPreloader());
    map.set("AvatarRules", () => new AvatarRules());
    map.set("AvatarSettings", () => new AvatarSettings());
    map.set("Backpack", () => new Backpack());
    map.set("BadgeService", () => new BadgeService());
    map.set("CoreGui", () => new CoreGui());
    map.set("StarterGui", () => new StarterGui());
    map.set("RemoteEvent", () => new RemoteEvent());
    map.set("UnreliableRemoteEvent", () => new UnreliableRemoteEvent());
    map.set("WrapDeformer", () => new WrapDeformer());
    map.set("WrapLayer", () => new WrapLayer());
    map.set("WrapTarget", () => new WrapTarget());
    map.set("Beam", () => new Beam());
    map.set("BindableEvent", () => new BindableEvent());
    map.set("BindableFunction", () => new BindableFunction());
    map.set("BodyAngularVelocity", () => new BodyAngularVelocity());
    map.set("BodyForce", () => new BodyForce());
    map.set("BodyGyro", () => new BodyGyro());
    map.set("BodyPosition", () => new BodyPosition());
    map.set("BodyThrust", () => new BodyThrust());
    map.set("BodyVelocity", () => new BodyVelocity());
    map.set("RocketPropulsion", () => new RocketPropulsion());
    map.set("BodyPartDescription", () => new BodyPartDescription());
    map.set("Breakpoint", () => new Breakpoint());
    map.set("BrowserService", () => new BrowserService());
    map.set("BugReporterService", () => new BugReporterService());
    map.set("BulkImportService", () => new BulkImportService());
    map.set("HSRDataContentProvider", () => new HSRDataContentProvider());
    map.set("MeshContentProvider", () => new MeshContentProvider());
    map.set("SolidModelContentProvider", () => new SolidModelContentProvider());
    map.set("CalloutService", () => new CalloutService());
    map.set("CaptureService", () => new CaptureService());
    map.set("ChangeHistoryService", () => new ChangeHistoryService());
    map.set("BodyColors", () => new BodyColors());
    map.set("CharacterMesh", () => new CharacterMesh());
    map.set("Pants", () => new Pants());
    map.set("Shirt", () => new Shirt());
    map.set("ShirtGraphic", () => new ShirtGraphic());
    map.set("Skin", () => new Skin());
    map.set("Chat", () => new Chat());
    map.set("ChatbotUIService", () => new ChatbotUIService());
    map.set("ClickDetector", () => new ClickDetector());
    map.set("DragDetector", () => new DragDetector());
    map.set("CloudCRUDService", () => new CloudCRUDService());
    map.set("Clouds", () => new Clouds());
    map.set("ClusterPacketCache", () => new ClusterPacketCache());
    map.set("CollaboratorsService", () => new CollaboratorsService());
    map.set("CollectionService", () => new CollectionService());
    map.set("CommandService", () => new CommandService());
    map.set("CommerceService", () => new CommerceService());
    map.set("ConfigService", () => new ConfigService());
    map.set("Configuration", () => new Configuration());
    map.set("ConfigureServerService", () => new ConfigureServerService());
    map.set("ConnectivityService", () => new ConnectivityService());
    map.set("AlignOrientation", () => new AlignOrientation());
    map.set("AlignPosition", () => new AlignPosition());
    map.set("AngularVelocity", () => new AngularVelocity());
    map.set("AnimationConstraint", () => new AnimationConstraint());
    map.set("BallSocketConstraint", () => new BallSocketConstraint());
    map.set("HingeConstraint", () => new HingeConstraint());
    map.set("LineForce", () => new LineForce());
    map.set("LinearVelocity", () => new LinearVelocity());
    map.set("PlaneConstraint", () => new PlaneConstraint());
    map.set("Plane", () => new Plane());
    map.set("RigidConstraint", () => new RigidConstraint());
    map.set("RodConstraint", () => new RodConstraint());
    map.set("RopeConstraint", () => new RopeConstraint());
    map.set("CylindricalConstraint", () => new CylindricalConstraint());
    map.set("PrismaticConstraint", () => new PrismaticConstraint());
    map.set("SpringConstraint", () => new SpringConstraint());
    map.set("Torque", () => new Torque());
    map.set("TorsionSpringConstraint", () => new TorsionSpringConstraint());
    map.set("UniversalConstraint", () => new UniversalConstraint());
    map.set("VectorForce", () => new VectorForce());
    map.set("ContentProvider", () => new ContentProvider());
    map.set("ContextActionService", () => new ContextActionService());
    map.set("HumanoidController", () => new HumanoidController());
    map.set("SkateboardController", () => new SkateboardController());
    map.set("VehicleController", () => new VehicleController());
    map.set("AirController", () => new AirController());
    map.set("ClimbController", () => new ClimbController());
    map.set("GroundController", () => new GroundController());
    map.set("SwimController", () => new SwimController());
    map.set("ControllerManager", () => new ControllerManager());
    map.set("ControllerService", () => new ControllerService());
    map.set("ConversationalAIAcceptanceService", () => new ConversationalAIAcceptanceService());
    map.set("CookiesService", () => new CookiesService());
    map.set("CorePackages", () => new CorePackages());
    map.set("CoreScriptDebuggingManagerHelper", () => new CoreScriptDebuggingManagerHelper());
    map.set("CoreScriptSyncService", () => new CoreScriptSyncService());
    map.set("CreationDBService", () => new CreationDBService());
    map.set("CreatorStoreService", () => new CreatorStoreService());
    map.set("CrossDMScriptChangeListener", () => new CrossDMScriptChangeListener());
    map.set("CustomEvent", () => new CustomEvent());
    map.set("CustomEventReceiver", () => new CustomEventReceiver());
    map.set("CustomLog", () => new CustomLog());
    map.set("BlockMesh", () => new BlockMesh());
    map.set("CylinderMesh", () => new CylinderMesh());
    map.set("FileMesh", () => new FileMesh());
    map.set("SpecialMesh", () => new SpecialMesh());
    map.set("DataModelPatchService", () => new DataModelPatchService());
    map.set("DataStoreGetOptions", () => new DataStoreGetOptions());
    map.set("DataStoreIncrementOptions", () => new DataStoreIncrementOptions());
    map.set("DataStoreOptions", () => new DataStoreOptions());
    map.set("DataStoreService", () => new DataStoreService());
    map.set("DataStoreSetOptions", () => new DataStoreSetOptions());
    map.set("Debris", () => new Debris());
    map.set("DebuggablePluginWatcher", () => new DebuggablePluginWatcher());
    map.set("DebuggerConnectionManager", () => new DebuggerConnectionManager());
    map.set("DebuggerManager", () => new DebuggerManager());
    map.set("DebuggerUIService", () => new DebuggerUIService());
    map.set("DebuggerWatch", () => new DebuggerWatch());
    map.set("DeviceIdService", () => new DeviceIdService());
    map.set("Dialog", () => new Dialog());
    map.set("DialogChoice", () => new DialogChoice());
    map.set("DraftsService", () => new DraftsService());
    map.set("Dragger", () => new Dragger());
    map.set("DraggerService", () => new DraggerService());
    map.set("EditableService", () => new EditableService());
    map.set("EulerRotationCurve", () => new EulerRotationCurve());
    map.set("EventIngestService", () => new EventIngestService());
    map.set("ExampleService", () => new ExampleService());
    map.set("ExperienceAuthService", () => new ExperienceAuthService());
    map.set("ExperienceInviteOptions", () => new ExperienceInviteOptions());
    map.set("ExperienceNotificationService", () => new ExperienceNotificationService());
    map.set("ExperienceService", () => new ExperienceService());
    map.set("ExperienceStateCaptureService", () => new ExperienceStateCaptureService());
    map.set("ExplorerFilter", () => new ExplorerFilter());
    map.set("ExplorerServiceVisibilityService", () => new ExplorerServiceVisibilityService());
    map.set("Explosion", () => new Explosion());
    map.set("FaceAnimatorService", () => new FaceAnimatorService());
    map.set("FaceControls", () => new FaceControls());
    map.set("Decal", () => new Decal());
    map.set("Texture", () => new Texture());
    map.set("FacialAgeEstimationService", () => new FacialAgeEstimationService());
    map.set("FacialAnimationRecordingService", () => new FacialAnimationRecordingService());
    map.set("FacialAnimationStreamingServiceV2", () => new FacialAnimationStreamingServiceV2());
    map.set("Hole", () => new Hole());
    map.set("MotorFeature", () => new MotorFeature());
    map.set("FeatureRestrictionManager", () => new FeatureRestrictionManager());
    map.set("FeedService", () => new FeedService());
    map.set("Fire", () => new Fire());
    map.set("FlagStandService", () => new FlagStandService());
    map.set("FloatCurve", () => new FloatCurve());
    map.set("FlyweightService", () => new FlyweightService());
    map.set("CSGDictionaryService", () => new CSGDictionaryService());
    map.set("NonReplicatedCSGDictionaryService", () => new NonReplicatedCSGDictionaryService());
    map.set("Folder", () => new Folder());
    map.set("ForceField", () => new ForceField());
    map.set("FriendService", () => new FriendService());
    map.set("FunctionalTest", () => new FunctionalTest());
    map.set("GamePassService", () => new GamePassService());
    map.set("GamepadService", () => new GamepadService());
    map.set("GenerationService", () => new GenerationService());
    map.set("GenericChallengeService", () => new GenericChallengeService());
    map.set("Geometry", () => new Geometry());
    map.set("GeometryService", () => new GeometryService());
    map.set("GetTextBoundsParams", () => new GetTextBoundsParams());
    map.set("GoogleAnalyticsConfiguration", () => new GoogleAnalyticsConfiguration());
    map.set("GroupService", () => new GroupService());
    map.set("CanvasGroup", () => new CanvasGroup());
    map.set("Frame", () => new Frame());
    map.set("ImageButton", () => new ImageButton());
    map.set("TextButton", () => new TextButton());
    map.set("ImageLabel", () => new ImageLabel());
    map.set("TextLabel", () => new TextLabel());
    map.set("RelativeGui", () => new RelativeGui());
    map.set("ScrollingFrame", () => new ScrollingFrame());
    map.set("TextBox", () => new TextBox());
    map.set("VideoDisplay", () => new VideoDisplay());
    map.set("VideoFrame", () => new VideoFrame());
    map.set("ViewportFrame", () => new ViewportFrame());
    map.set("BillboardGui", () => new BillboardGui());
    map.set("ScreenGui", () => new ScreenGui());
    map.set("GuiMain", () => new GuiMain());
    map.set("AdGui", () => new AdGui());
    map.set("SurfaceGui", () => new SurfaceGui());
    map.set("FloorWire", () => new FloorWire());
    map.set("SelectionBox", () => new SelectionBox());
    map.set("BoxHandleAdornment", () => new BoxHandleAdornment());
    map.set("ConeHandleAdornment", () => new ConeHandleAdornment());
    map.set("CylinderHandleAdornment", () => new CylinderHandleAdornment());
    map.set("ImageHandleAdornment", () => new ImageHandleAdornment());
    map.set("LineHandleAdornment", () => new LineHandleAdornment());
    map.set("SphereHandleAdornment", () => new SphereHandleAdornment());
    map.set("WireframeHandleAdornment", () => new WireframeHandleAdornment());
    map.set("ParabolaAdornment", () => new ParabolaAdornment());
    map.set("SelectionSphere", () => new SelectionSphere());
    map.set("ArcHandles", () => new ArcHandles());
    map.set("Handles", () => new Handles());
    map.set("SurfaceSelection", () => new SurfaceSelection());
    map.set("SelectionPartLasso", () => new SelectionPartLasso());
    map.set("SelectionPointLasso", () => new SelectionPointLasso());
    map.set("Path2D", () => new Path2D());
    map.set("GuiService", () => new GuiService());
    map.set("GuidRegistryService", () => new GuidRegistryService());
    map.set("HapticEffect", () => new HapticEffect());
    map.set("HapticService", () => new HapticService());
    map.set("HeapProfilerService", () => new HeapProfilerService());
    map.set("HeatmapService", () => new HeatmapService());
    map.set("HeightmapImporterService", () => new HeightmapImporterService());
    map.set("HiddenSurfaceRemovalAsset", () => new HiddenSurfaceRemovalAsset());
    map.set("Highlight", () => new Highlight());
    map.set("Hopper", () => new Hopper());
    map.set("HttpRbxApiService", () => new HttpRbxApiService());
    map.set("HttpService", () => new HttpService());
    map.set("Humanoid", () => new Humanoid());
    map.set("HumanoidDescription", () => new HumanoidDescription());
    map.set("HumanoidRigDescription", () => new HumanoidRigDescription());
    map.set("IKControl", () => new IKControl());
    map.set("LegacyStudioBridge", () => new LegacyStudioBridge());
    map.set("IXPService", () => new IXPService());
    map.set("IncrementalPatchBuilder", () => new IncrementalPatchBuilder());
    map.set("InputAction", () => new InputAction());
    map.set("InputBinding", () => new InputBinding());
    map.set("InputContext", () => new InputContext());
    map.set("InsertService", () => new InsertService());
    map.set("InternalSyncItem", () => new InternalSyncItem());
    map.set("InternalSyncService", () => new InternalSyncService());
    map.set("RotateP", () => new RotateP());
    map.set("RotateV", () => new RotateV());
    map.set("Glue", () => new Glue());
    map.set("ManualGlue", () => new ManualGlue());
    map.set("ManualWeld", () => new ManualWeld());
    map.set("Motor", () => new Motor());
    map.set("Motor6D", () => new Motor6D());
    map.set("Rotate", () => new Rotate());
    map.set("Snap", () => new Snap());
    map.set("VelocityMotor", () => new VelocityMotor());
    map.set("Weld", () => new Weld());
    map.set("JointsService", () => new JointsService());
    map.set("KeyboardService", () => new KeyboardService());
    map.set("Keyframe", () => new Keyframe());
    map.set("KeyframeMarker", () => new KeyframeMarker());
    map.set("KeyframeSequenceProvider", () => new KeyframeSequenceProvider());
    map.set("LSPFileSyncService", () => new LSPFileSyncService());
    map.set("LanguageService", () => new LanguageService());
    map.set("PointLight", () => new PointLight());
    map.set("SpotLight", () => new SpotLight());
    map.set("SurfaceLight", () => new SurfaceLight());
    map.set("Lighting", () => new Lighting());
    map.set("LinkingService", () => new LinkingService());
    map.set("LiveScriptingService", () => new LiveScriptingService());
    map.set("LiveSyncService", () => new LiveSyncService());
    map.set("AppStorageService", () => new AppStorageService());
    map.set("UserStorageService", () => new UserStorageService());
    map.set("LocalizationService", () => new LocalizationService());
    map.set("LocalizationTable", () => new LocalizationTable());
    map.set("LodDataService", () => new LodDataService());
    map.set("LogReporterService", () => new LogReporterService());
    map.set("LogService", () => new LogService());
    map.set("LoginService", () => new LoginService());
    map.set("AuroraScript", () => new AuroraScript());
    map.set("Script", () => new Script());
    map.set("LocalScript", () => new LocalScript());
    map.set("ModuleScript", () => new ModuleScript());
    map.set("LuaWebService", () => new LuaWebService());
    map.set("LuauScriptAnalyzerService", () => new LuauScriptAnalyzerService());
    map.set("MLModelDeliveryService", () => new MLModelDeliveryService());
    map.set("MarkerCurve", () => new MarkerCurve());
    map.set("MarketplaceService", () => new MarketplaceService());
    map.set("MatchmakingService", () => new MatchmakingService());
    map.set("MaterialGenerationService", () => new MaterialGenerationService());
    map.set("MaterialService", () => new MaterialService());
    map.set("MaterialVariant", () => new MaterialVariant());
    map.set("MemStorageService", () => new MemStorageService());
    map.set("MemoryStoreService", () => new MemoryStoreService());
    map.set("Message", () => new Message());
    map.set("Hint", () => new Hint());
    map.set("MessageBusService", () => new MessageBusService());
    map.set("MessagingService", () => new MessagingService());
    map.set("MetaBreakpointManager", () => new MetaBreakpointManager());
    map.set("MouseService", () => new MouseService());
    map.set("NetworkClient", () => new NetworkClient());
    map.set("NetworkServer", () => new NetworkServer());
    map.set("NetworkSettings", () => new NetworkSettings());
    map.set("NoCollisionConstraint", () => new NoCollisionConstraint());
    map.set("Noise", () => new Noise());
    map.set("NotificationService", () => new NotificationService());
    map.set("OmniRecommendationsService", () => new OmniRecommendationsService());
    map.set("OpenCloudService", () => new OpenCloudService());
    map.set("OperationGraph", () => new OperationGraph());
    map.set("CornerWedgePart", () => new CornerWedgePart());
    map.set("Part", () => new Part());
    map.set("FlagStand", () => new FlagStand());
    map.set("Seat", () => new Seat());
    map.set("SkateboardPlatform", () => new SkateboardPlatform());
    map.set("SpawnLocation", () => new SpawnLocation());
    map.set("WedgePart", () => new WedgePart());
    map.set("Terrain", () => new Terrain());
    map.set("MeshPart", () => new MeshPart());
    map.set("PartOperation", () => new PartOperation());
    map.set("IntersectOperation", () => new IntersectOperation());
    map.set("NegateOperation", () => new NegateOperation());
    map.set("UnionOperation", () => new UnionOperation());
    map.set("TrussPart", () => new TrussPart());
    map.set("VehicleSeat", () => new VehicleSeat());
    map.set("Camera", () => new Camera());
    map.set("Model", () => new Model());
    map.set("Actor", () => new Actor());
    map.set("HopperBin", () => new HopperBin());
    map.set("Tool", () => new Tool());
    map.set("Flag", () => new Flag());
    map.set("Workspace", () => new Workspace());
    map.set("WorldModel", () => new WorldModel());
    map.set("PackageService", () => new PackageService());
    map.set("PackageUIService", () => new PackageUIService());
    map.set("PartOperationAsset", () => new PartOperationAsset());
    map.set("ParticleEmitter", () => new ParticleEmitter());
    map.set("PatchBundlerFileWatch", () => new PatchBundlerFileWatch());
    map.set("PathfindingLink", () => new PathfindingLink());
    map.set("PathfindingModifier", () => new PathfindingModifier());
    map.set("PathfindingService", () => new PathfindingService());
    map.set("PerformanceControlService", () => new PerformanceControlService());
    map.set("PermissionsService", () => new PermissionsService());
    map.set("PhysicsService", () => new PhysicsService());
    map.set("PlaceAssetIdsService", () => new PlaceAssetIdsService());
    map.set("PlaceStatsService", () => new PlaceStatsService());
    map.set("PlacesService", () => new PlacesService());
    map.set("PlatformCloudStorageService", () => new PlatformCloudStorageService());
    map.set("PlatformFriendsService", () => new PlatformFriendsService());
    map.set("Player", () => new Player());
    map.set("PlayerDataService", () => new PlayerDataService());
    map.set("PlayerEmulatorService", () => new PlayerEmulatorService());
    map.set("PlayerHydrationService", () => new PlayerHydrationService());
    map.set("PlayerViewService", () => new PlayerViewService());
    map.set("Players", () => new Players());
    map.set("PluginAction", () => new PluginAction());
    map.set("PluginCapabilities", () => new PluginCapabilities());
    map.set("PluginDebugService", () => new PluginDebugService());
    map.set("PluginGuiService", () => new PluginGuiService());
    map.set("PluginManagementService", () => new PluginManagementService());
    map.set("PluginPolicyService", () => new PluginPolicyService());
    map.set("PointsService", () => new PointsService());
    map.set("PolicyService", () => new PolicyService());
    map.set("NumberPose", () => new NumberPose());
    map.set("Pose", () => new Pose());
    map.set("BloomEffect", () => new BloomEffect());
    map.set("BlurEffect", () => new BlurEffect());
    map.set("ColorCorrectionEffect", () => new ColorCorrectionEffect());
    map.set("ColorGradingEffect", () => new ColorGradingEffect());
    map.set("DepthOfFieldEffect", () => new DepthOfFieldEffect());
    map.set("SunRaysEffect", () => new SunRaysEffect());
    map.set("ProcessInstancePhysicsService", () => new ProcessInstancePhysicsService());
    map.set("ProximityPrompt", () => new ProximityPrompt());
    map.set("ProximityPromptService", () => new ProximityPromptService());
    map.set("PublishService", () => new PublishService());
    map.set("RTAnimationTracker", () => new RTAnimationTracker());
    map.set("RbxAnalyticsService", () => new RbxAnalyticsService());
    map.set("ReflectionMetadata", () => new ReflectionMetadata());
    map.set("ReflectionMetadataCallbacks", () => new ReflectionMetadataCallbacks());
    map.set("ReflectionMetadataClasses", () => new ReflectionMetadataClasses());
    map.set("ReflectionMetadataEnums", () => new ReflectionMetadataEnums());
    map.set("ReflectionMetadataEvents", () => new ReflectionMetadataEvents());
    map.set("ReflectionMetadataFunctions", () => new ReflectionMetadataFunctions());
    map.set("ReflectionMetadataClass", () => new ReflectionMetadataClass());
    map.set("ReflectionMetadataEnum", () => new ReflectionMetadataEnum());
    map.set("ReflectionMetadataEnumItem", () => new ReflectionMetadataEnumItem());
    map.set("ReflectionMetadataMember", () => new ReflectionMetadataMember());
    map.set("ReflectionMetadataProperties", () => new ReflectionMetadataProperties());
    map.set("ReflectionMetadataYieldFunctions", () => new ReflectionMetadataYieldFunctions());
    map.set("ReflectionService", () => new ReflectionService());
    map.set("RemoteCursorService", () => new RemoteCursorService());
    map.set("RemoteDebuggerServer", () => new RemoteDebuggerServer());
    map.set("RemoteFunction", () => new RemoteFunction());
    map.set("RenderSettings", () => new RenderSettings());
    map.set("RenderingTest", () => new RenderingTest());
    map.set("ReplicatedFirst", () => new ReplicatedFirst());
    map.set("ReplicatedStorage", () => new ReplicatedStorage());
    map.set("RibbonNotificationService", () => new RibbonNotificationService());
    map.set("RobloxPluginGuiService", () => new RobloxPluginGuiService());
    map.set("RobloxReplicatedStorage", () => new RobloxReplicatedStorage());
    map.set("RobloxServerStorage", () => new RobloxServerStorage());
    map.set("RomarkRbxAnalyticsService", () => new RomarkRbxAnalyticsService());
    map.set("RomarkService", () => new RomarkService());
    map.set("RotationCurve", () => new RotationCurve());
    map.set("RtMessagingService", () => new RtMessagingService());
    map.set("RunService", () => new RunService());
    map.set("RuntimeScriptService", () => new RuntimeScriptService());
    map.set("SafetyService", () => new SafetyService());
    map.set("ScriptChangeService", () => new ScriptChangeService());
    map.set("ScriptCloneWatcher", () => new ScriptCloneWatcher());
    map.set("ScriptCloneWatcherHelper", () => new ScriptCloneWatcherHelper());
    map.set("ScriptCommitService", () => new ScriptCommitService());
    map.set("ScriptContext", () => new ScriptContext());
    map.set("ScriptEditorService", () => new ScriptEditorService());
    map.set("ScriptProfilerService", () => new ScriptProfilerService());
    map.set("ScriptRegistrationService", () => new ScriptRegistrationService());
    map.set("ScriptService", () => new ScriptService());
    map.set("Selection", () => new Selection());
    map.set("SelectionHighlightManager", () => new SelectionHighlightManager());
    map.set("AtmosphereSensor", () => new AtmosphereSensor());
    map.set("BuoyancySensor", () => new BuoyancySensor());
    map.set("ControllerPartSensor", () => new ControllerPartSensor());
    map.set("FluidForceSensor", () => new FluidForceSensor());
    map.set("SerializationService", () => new SerializationService());
    map.set("ServerScriptService", () => new ServerScriptService());
    map.set("ServerStorage", () => new ServerStorage());
    map.set("ServiceVisibilityService", () => new ServiceVisibilityService());
    map.set("SessionService", () => new SessionService());
    map.set("SharedTableRegistry", () => new SharedTableRegistry());
    map.set("Sky", () => new Sky());
    map.set("Smoke", () => new Smoke());
    map.set("SmoothVoxelsUpgraderService", () => new SmoothVoxelsUpgraderService());
    map.set("SnippetService", () => new SnippetService());
    map.set("SocialService", () => new SocialService());
    map.set("Sound", () => new Sound());
    map.set("ChorusSoundEffect", () => new ChorusSoundEffect());
    map.set("CompressorSoundEffect", () => new CompressorSoundEffect());
    map.set("DistortionSoundEffect", () => new DistortionSoundEffect());
    map.set("EchoSoundEffect", () => new EchoSoundEffect());
    map.set("EqualizerSoundEffect", () => new EqualizerSoundEffect());
    map.set("FlangeSoundEffect", () => new FlangeSoundEffect());
    map.set("PitchShiftSoundEffect", () => new PitchShiftSoundEffect());
    map.set("ReverbSoundEffect", () => new ReverbSoundEffect());
    map.set("TremoloSoundEffect", () => new TremoloSoundEffect());
    map.set("SoundGroup", () => new SoundGroup());
    map.set("SoundService", () => new SoundService());
    map.set("Sparkles", () => new Sparkles());
    map.set("SpawnerService", () => new SpawnerService());
    map.set("StandalonePluginScripts", () => new StandalonePluginScripts());
    map.set("StartPageService", () => new StartPageService());
    map.set("StarterGear", () => new StarterGear());
    map.set("StarterPack", () => new StarterPack());
    map.set("StarterPlayer", () => new StarterPlayer());
    map.set("StarterPlayerScripts", () => new StarterPlayerScripts());
    map.set("StarterCharacterScripts", () => new StarterCharacterScripts());
    map.set("StartupMessageService", () => new StartupMessageService());
    map.set("Stats", () => new Stats());
    map.set("StopWatchReporter", () => new StopWatchReporter());
    map.set("StreamingService", () => new StreamingService());
    map.set("StudioAssetService", () => new StudioAssetService());
    map.set("StudioAttachment", () => new StudioAttachment());
    map.set("StudioCallout", () => new StudioCallout());
    map.set("StudioCameraService", () => new StudioCameraService());
    map.set("StudioData", () => new StudioData());
    map.set("StudioDeviceEmulatorService", () => new StudioDeviceEmulatorService());
    map.set("StudioPublishService", () => new StudioPublishService());
    map.set("StudioScriptDebugEventListener", () => new StudioScriptDebugEventListener());
    map.set("StudioSdkService", () => new StudioSdkService());
    map.set("StudioService", () => new StudioService());
    map.set("StudioUserService", () => new StudioUserService());
    map.set("StudioWidgetsService", () => new StudioWidgetsService());
    map.set("StyleRule", () => new StyleRule());
    map.set("StyleSheet", () => new StyleSheet());
    map.set("StyleDerive", () => new StyleDerive());
    map.set("StyleLink", () => new StyleLink());
    map.set("StylingService", () => new StylingService());
    map.set("SurfaceAppearance", () => new SurfaceAppearance());
    map.set("SystemThemeService", () => new SystemThemeService());
    map.set("TaskScheduler", () => new TaskScheduler());
    map.set("Team", () => new Team());
    map.set("TeamCreateData", () => new TeamCreateData());
    map.set("TeamCreatePublishService", () => new TeamCreatePublishService());
    map.set("TeamCreateService", () => new TeamCreateService());
    map.set("Teams", () => new Teams());
    map.set("TelemetryService", () => new TelemetryService());
    map.set("TeleportOptions", () => new TeleportOptions());
    map.set("TeleportService", () => new TeleportService());
    map.set("TemporaryCageMeshProvider", () => new TemporaryCageMeshProvider());
    map.set("TemporaryScriptService", () => new TemporaryScriptService());
    map.set("TerrainDetail", () => new TerrainDetail());
    map.set("TerrainRegion", () => new TerrainRegion());
    map.set("TestService", () => new TestService());
    map.set("TextBoxService", () => new TextBoxService());
    map.set("TextChannel", () => new TextChannel());
    map.set("TextChatCommand", () => new TextChatCommand());
    map.set("BubbleChatConfiguration", () => new BubbleChatConfiguration());
    map.set("ChatInputBarConfiguration", () => new ChatInputBarConfiguration());
    map.set("ChatWindowConfiguration", () => new ChatWindowConfiguration());
    map.set("TextChatMessageProperties", () => new TextChatMessageProperties());
    map.set("BubbleChatMessageProperties", () => new BubbleChatMessageProperties());
    map.set("TextChatService", () => new TextChatService());
    map.set("TextService", () => new TextService());
    map.set("TextureGenerationService", () => new TextureGenerationService());
    map.set("ThirdPartyUserService", () => new ThirdPartyUserService());
    map.set("TimerService", () => new TimerService());
    map.set("ToastNotificationService", () => new ToastNotificationService());
    map.set("TouchInputService", () => new TouchInputService());
    map.set("TracerService", () => new TracerService());
    map.set("TrackerStreamAnimation", () => new TrackerStreamAnimation());
    map.set("Trail", () => new Trail());
    map.set("TutorialService", () => new TutorialService());
    map.set("Tween", () => new Tween());
    map.set("TweenService", () => new TweenService());
    map.set("UGCAvatarService", () => new UGCAvatarService());
    map.set("UGCValidationService", () => new UGCValidationService());
    map.set("UIAspectRatioConstraint", () => new UIAspectRatioConstraint());
    map.set("UISizeConstraint", () => new UISizeConstraint());
    map.set("UITextSizeConstraint", () => new UITextSizeConstraint());
    map.set("UICorner", () => new UICorner());
    map.set("UIDragDetector", () => new UIDragDetector());
    map.set("UIFlexItem", () => new UIFlexItem());
    map.set("UIGradient", () => new UIGradient());
    map.set("UIGridLayout", () => new UIGridLayout());
    map.set("UIListLayout", () => new UIListLayout());
    map.set("UIPageLayout", () => new UIPageLayout());
    map.set("UITableLayout", () => new UITableLayout());
    map.set("UIPadding", () => new UIPadding());
    map.set("UIScale", () => new UIScale());
    map.set("UIStroke", () => new UIStroke());
    map.set("UIDragDetectorService", () => new UIDragDetectorService());
    map.set("UniqueIdLookupService", () => new UniqueIdLookupService());
    map.set("UnvalidatedAssetService", () => new UnvalidatedAssetService());
    map.set("UserInputService", () => new UserInputService());
    map.set("UserService", () => new UserService());
    map.set("VRService", () => new VRService());
    map.set("VRStatusService", () => new VRStatusService());
    map.set("BinaryStringValue", () => new BinaryStringValue());
    map.set("BoolValue", () => new BoolValue());
    map.set("BrickColorValue", () => new BrickColorValue());
    map.set("CFrameValue", () => new CFrameValue());
    map.set("Color3Value", () => new Color3Value());
    map.set("DoubleConstrainedValue", () => new DoubleConstrainedValue());
    map.set("IntConstrainedValue", () => new IntConstrainedValue());
    map.set("IntValue", () => new IntValue());
    map.set("NumberValue", () => new NumberValue());
    map.set("ObjectValue", () => new ObjectValue());
    map.set("RayValue", () => new RayValue());
    map.set("StringValue", () => new StringValue());
    map.set("Vector3Value", () => new Vector3Value());
    map.set("Vector3Curve", () => new Vector3Curve());
    map.set("VersionControlService", () => new VersionControlService());
    map.set("VideoCaptureService", () => new VideoCaptureService());
    map.set("VideoDeviceInput", () => new VideoDeviceInput());
    map.set("VideoPlayer", () => new VideoPlayer());
    map.set("VideoService", () => new VideoService());
    map.set("VirtualInputManager", () => new VirtualInputManager());
    map.set("VirtualUser", () => new VirtualUser());
    map.set("VisibilityCheckDispatcher", () => new VisibilityCheckDispatcher());
    map.set("Visit", () => new Visit());
    map.set("VisualizationMode", () => new VisualizationMode());
    map.set("VisualizationModeCategory", () => new VisualizationModeCategory());
    map.set("VisualizationModeService", () => new VisualizationModeService());
    map.set("VoiceChatInternal", () => new VoiceChatInternal());
    map.set("VoiceChatService", () => new VoiceChatService());
    map.set("WebSocketService", () => new WebSocketService());
    map.set("WebViewService", () => new WebViewService());
    map.set("WeldConstraint", () => new WeldConstraint());
    map.set("Wire", () => new Wire());
    return map;
}

export class AccessModifierType extends EnumItem {
    public static readonly Allow = new AccessModifierType("Allow", 0);
    public static readonly Deny = new AccessModifierType("Deny", 1);
    public static get Items() {return [AccessModifierType.Allow, AccessModifierType.Deny];}
    public static FromValue(value: number) {return AccessModifierType.Items.find((item) => item._value === value);}
}

export class AccessoryType extends EnumItem {
    public static readonly Unknown = new AccessoryType("Unknown", 0);
    public static readonly Hat = new AccessoryType("Hat", 1);
    public static readonly Hair = new AccessoryType("Hair", 2);
    public static readonly Face = new AccessoryType("Face", 3);
    public static readonly Neck = new AccessoryType("Neck", 4);
    public static readonly Shoulder = new AccessoryType("Shoulder", 5);
    public static readonly Front = new AccessoryType("Front", 6);
    public static readonly Back = new AccessoryType("Back", 7);
    public static readonly Waist = new AccessoryType("Waist", 8);
    public static readonly TShirt = new AccessoryType("TShirt", 9);
    public static readonly Shirt = new AccessoryType("Shirt", 10);
    public static readonly Pants = new AccessoryType("Pants", 11);
    public static readonly Jacket = new AccessoryType("Jacket", 12);
    public static readonly Sweater = new AccessoryType("Sweater", 13);
    public static readonly Shorts = new AccessoryType("Shorts", 14);
    public static readonly LeftShoe = new AccessoryType("LeftShoe", 15);
    public static readonly RightShoe = new AccessoryType("RightShoe", 16);
    public static readonly DressSkirt = new AccessoryType("DressSkirt", 17);
    public static readonly Eyebrow = new AccessoryType("Eyebrow", 18);
    public static readonly Eyelash = new AccessoryType("Eyelash", 19);
    public static get Items() {return [AccessoryType.Unknown, AccessoryType.Hat, AccessoryType.Hair, AccessoryType.Face, AccessoryType.Neck, AccessoryType.Shoulder, AccessoryType.Front, AccessoryType.Back, AccessoryType.Waist, AccessoryType.TShirt, AccessoryType.Shirt, AccessoryType.Pants, AccessoryType.Jacket, AccessoryType.Sweater, AccessoryType.Shorts, AccessoryType.LeftShoe, AccessoryType.RightShoe, AccessoryType.DressSkirt, AccessoryType.Eyebrow, AccessoryType.Eyelash];}
    public static FromValue(value: number) {return AccessoryType.Items.find((item) => item._value === value);}
}

export class ActuatorRelativeTo extends EnumItem {
    public static readonly Attachment0 = new ActuatorRelativeTo("Attachment0", 0);
    public static readonly Attachment1 = new ActuatorRelativeTo("Attachment1", 1);
    public static readonly World = new ActuatorRelativeTo("World", 2);
    public static get Items() {return [ActuatorRelativeTo.Attachment0, ActuatorRelativeTo.Attachment1, ActuatorRelativeTo.World];}
    public static FromValue(value: number) {return ActuatorRelativeTo.Items.find((item) => item._value === value);}
}

export class ActuatorType extends EnumItem {
    public static readonly None = new ActuatorType("None", 0);
    public static readonly Motor = new ActuatorType("Motor", 1);
    public static readonly Servo = new ActuatorType("Servo", 2);
    public static get Items() {return [ActuatorType.None, ActuatorType.Motor, ActuatorType.Servo];}
    public static FromValue(value: number) {return ActuatorType.Items.find((item) => item._value === value);}
}

export class AdShape extends EnumItem {
    public static readonly HorizontalRectangle = new AdShape("HorizontalRectangle", 1);
    public static get Items() {return [AdShape.HorizontalRectangle];}
    public static FromValue(value: number) {return AdShape.Items.find((item) => item._value === value);}
}

export class AdornCullingMode extends EnumItem {
    public static readonly Automatic = new AdornCullingMode("Automatic", 0);
    public static readonly Never = new AdornCullingMode("Never", 1);
    public static get Items() {return [AdornCullingMode.Automatic, AdornCullingMode.Never];}
    public static FromValue(value: number) {return AdornCullingMode.Items.find((item) => item._value === value);}
}

export class AlignType extends EnumItem {
    public static readonly PrimaryAxisParallel = new AlignType("PrimaryAxisParallel", 2);
    public static readonly PrimaryAxisPerpendicular = new AlignType("PrimaryAxisPerpendicular", 3);
    public static readonly PrimaryAxisLookAt = new AlignType("PrimaryAxisLookAt", 4);
    public static readonly AllAxes = new AlignType("AllAxes", 5);
    public static readonly Parallel = new AlignType("Parallel", 0);
    public static readonly Perpendicular = new AlignType("Perpendicular", 1);
    public static get Items() {return [AlignType.PrimaryAxisParallel, AlignType.PrimaryAxisPerpendicular, AlignType.PrimaryAxisLookAt, AlignType.AllAxes, AlignType.Parallel, AlignType.Perpendicular];}
    public static FromValue(value: number) {return AlignType.Items.find((item) => item._value === value);}
}

export class AlphaMode extends EnumItem {
    public static readonly Overlay = new AlphaMode("Overlay", 0);
    public static readonly Transparency = new AlphaMode("Transparency", 1);
    public static readonly TintMask = new AlphaMode("TintMask", 2);
    public static get Items() {return [AlphaMode.Overlay, AlphaMode.Transparency, AlphaMode.TintMask];}
    public static FromValue(value: number) {return AlphaMode.Items.find((item) => item._value === value);}
}

export class AnimationPriority extends EnumItem {
    public static readonly Core = new AnimationPriority("Core", 1000);
    public static readonly Idle = new AnimationPriority("Idle", 0);
    public static readonly Movement = new AnimationPriority("Movement", 1);
    public static readonly Action = new AnimationPriority("Action", 2);
    public static readonly Action2 = new AnimationPriority("Action2", 3);
    public static readonly Action3 = new AnimationPriority("Action3", 4);
    public static readonly Action4 = new AnimationPriority("Action4", 5);
    public static get Items() {return [AnimationPriority.Core, AnimationPriority.Idle, AnimationPriority.Movement, AnimationPriority.Action, AnimationPriority.Action2, AnimationPriority.Action3, AnimationPriority.Action4];}
    public static FromValue(value: number) {return AnimationPriority.Items.find((item) => item._value === value);}
}

export class AnimatorRetargetingMode extends EnumItem {
    public static readonly Default = new AnimatorRetargetingMode("Default", 0);
    public static readonly Disabled = new AnimatorRetargetingMode("Disabled", 1);
    public static readonly Enabled = new AnimatorRetargetingMode("Enabled", 2);
    public static get Items() {return [AnimatorRetargetingMode.Default, AnimatorRetargetingMode.Disabled, AnimatorRetargetingMode.Enabled];}
    public static FromValue(value: number) {return AnimatorRetargetingMode.Items.find((item) => item._value === value);}
}

export class ApplyStrokeMode extends EnumItem {
    public static readonly Contextual = new ApplyStrokeMode("Contextual", 0);
    public static readonly Border = new ApplyStrokeMode("Border", 1);
    public static get Items() {return [ApplyStrokeMode.Contextual, ApplyStrokeMode.Border];}
    public static FromValue(value: number) {return ApplyStrokeMode.Items.find((item) => item._value === value);}
}

export class AspectType extends EnumItem {
    public static readonly FitWithinMaxSize = new AspectType("FitWithinMaxSize", 0);
    public static readonly ScaleWithParentSize = new AspectType("ScaleWithParentSize", 1);
    public static get Items() {return [AspectType.FitWithinMaxSize, AspectType.ScaleWithParentSize];}
    public static FromValue(value: number) {return AspectType.Items.find((item) => item._value === value);}
}

export class AudioApiRollout extends EnumItem {
    public static readonly Disabled = new AudioApiRollout("Disabled", 0);
    public static readonly Automatic = new AudioApiRollout("Automatic", 1);
    public static readonly Enabled = new AudioApiRollout("Enabled", 2);
    public static get Items() {return [AudioApiRollout.Disabled, AudioApiRollout.Automatic, AudioApiRollout.Enabled];}
    public static FromValue(value: number) {return AudioApiRollout.Items.find((item) => item._value === value);}
}

export class AudioChannelLayout extends EnumItem {
    public static readonly Mono = new AudioChannelLayout("Mono", 0);
    public static readonly Stereo = new AudioChannelLayout("Stereo", 1);
    public static readonly Quad = new AudioChannelLayout("Quad", 2);
    public static readonly Surround_5 = new AudioChannelLayout("Surround_5", 3);
    public static readonly Surround_5_1 = new AudioChannelLayout("Surround_5_1", 4);
    public static readonly Surround_7_1 = new AudioChannelLayout("Surround_7_1", 5);
    public static readonly Surround_7_1_4 = new AudioChannelLayout("Surround_7_1_4", 6);
    public static get Items() {return [AudioChannelLayout.Mono, AudioChannelLayout.Stereo, AudioChannelLayout.Quad, AudioChannelLayout.Surround_5, AudioChannelLayout.Surround_5_1, AudioChannelLayout.Surround_7_1, AudioChannelLayout.Surround_7_1_4];}
    public static FromValue(value: number) {return AudioChannelLayout.Items.find((item) => item._value === value);}
}

export class AudioFilterType extends EnumItem {
    public static readonly Peak = new AudioFilterType("Peak", 0);
    public static readonly LowShelf = new AudioFilterType("LowShelf", 1);
    public static readonly HighShelf = new AudioFilterType("HighShelf", 2);
    public static readonly Lowpass12dB = new AudioFilterType("Lowpass12dB", 3);
    public static readonly Lowpass24dB = new AudioFilterType("Lowpass24dB", 4);
    public static readonly Lowpass48dB = new AudioFilterType("Lowpass48dB", 5);
    public static readonly Highpass12dB = new AudioFilterType("Highpass12dB", 6);
    public static readonly Highpass24dB = new AudioFilterType("Highpass24dB", 7);
    public static readonly Highpass48dB = new AudioFilterType("Highpass48dB", 8);
    public static readonly Bandpass = new AudioFilterType("Bandpass", 9);
    public static readonly Notch = new AudioFilterType("Notch", 10);
    public static readonly Lowpass6dB = new AudioFilterType("Lowpass6dB", 11);
    public static get Items() {return [AudioFilterType.Peak, AudioFilterType.LowShelf, AudioFilterType.HighShelf, AudioFilterType.Lowpass12dB, AudioFilterType.Lowpass24dB, AudioFilterType.Lowpass48dB, AudioFilterType.Highpass12dB, AudioFilterType.Highpass24dB, AudioFilterType.Highpass48dB, AudioFilterType.Bandpass, AudioFilterType.Notch, AudioFilterType.Lowpass6dB];}
    public static FromValue(value: number) {return AudioFilterType.Items.find((item) => item._value === value);}
}

export class AudioSimulationFidelity extends EnumItem {
    public static readonly None = new AudioSimulationFidelity("None", 0);
    public static readonly Automatic = new AudioSimulationFidelity("Automatic", 1);
    public static get Items() {return [AudioSimulationFidelity.None, AudioSimulationFidelity.Automatic];}
    public static FromValue(value: number) {return AudioSimulationFidelity.Items.find((item) => item._value === value);}
}

export class AudioSubType extends EnumItem {
    public static readonly Music = new AudioSubType("Music", 1);
    public static readonly SoundEffect = new AudioSubType("SoundEffect", 2);
    public static get Items() {return [AudioSubType.Music, AudioSubType.SoundEffect];}
    public static FromValue(value: number) {return AudioSubType.Items.find((item) => item._value === value);}
}

export class AudioWindowSize extends EnumItem {
    public static readonly Small = new AudioWindowSize("Small", 0);
    public static readonly Medium = new AudioWindowSize("Medium", 1);
    public static readonly Large = new AudioWindowSize("Large", 2);
    public static get Items() {return [AudioWindowSize.Small, AudioWindowSize.Medium, AudioWindowSize.Large];}
    public static FromValue(value: number) {return AudioWindowSize.Items.find((item) => item._value === value);}
}

export class AutomaticSize extends EnumItem {
    public static readonly None = new AutomaticSize("None", 0);
    public static readonly X = new AutomaticSize("X", 1);
    public static readonly Y = new AutomaticSize("Y", 2);
    public static readonly XY = new AutomaticSize("XY", 3);
    public static get Items() {return [AutomaticSize.None, AutomaticSize.X, AutomaticSize.Y, AutomaticSize.XY];}
    public static FromValue(value: number) {return AutomaticSize.Items.find((item) => item._value === value);}
}

export class AvatarSettingsAccessoryLimitMethod extends EnumItem {
    public static readonly Scale = new AvatarSettingsAccessoryLimitMethod("Scale", 0);
    public static readonly Remove = new AvatarSettingsAccessoryLimitMethod("Remove", 1);
    public static get Items() {return [AvatarSettingsAccessoryLimitMethod.Scale, AvatarSettingsAccessoryLimitMethod.Remove];}
    public static FromValue(value: number) {return AvatarSettingsAccessoryLimitMethod.Items.find((item) => item._value === value);}
}

export class AvatarSettingsAccessoryMode extends EnumItem {
    public static readonly PlayerChoice = new AvatarSettingsAccessoryMode("PlayerChoice", 0);
    public static readonly CustomLimit = new AvatarSettingsAccessoryMode("CustomLimit", 1);
    public static get Items() {return [AvatarSettingsAccessoryMode.PlayerChoice, AvatarSettingsAccessoryMode.CustomLimit];}
    public static FromValue(value: number) {return AvatarSettingsAccessoryMode.Items.find((item) => item._value === value);}
}

export class AvatarSettingsAnimationClipsMode extends EnumItem {
    public static readonly PlayerChoice = new AvatarSettingsAnimationClipsMode("PlayerChoice", 0);
    public static readonly CustomClips = new AvatarSettingsAnimationClipsMode("CustomClips", 1);
    public static get Items() {return [AvatarSettingsAnimationClipsMode.PlayerChoice, AvatarSettingsAnimationClipsMode.CustomClips];}
    public static FromValue(value: number) {return AvatarSettingsAnimationClipsMode.Items.find((item) => item._value === value);}
}

export class AvatarSettingsAnimationPacksMode extends EnumItem {
    public static readonly PlayerChoice = new AvatarSettingsAnimationPacksMode("PlayerChoice", 0);
    public static readonly StandardR15 = new AvatarSettingsAnimationPacksMode("StandardR15", 1);
    public static readonly StandardR6 = new AvatarSettingsAnimationPacksMode("StandardR6", 2);
    public static get Items() {return [AvatarSettingsAnimationPacksMode.PlayerChoice, AvatarSettingsAnimationPacksMode.StandardR15, AvatarSettingsAnimationPacksMode.StandardR6];}
    public static FromValue(value: number) {return AvatarSettingsAnimationPacksMode.Items.find((item) => item._value === value);}
}

export class AvatarSettingsAppearanceMode extends EnumItem {
    public static readonly PlayerChoice = new AvatarSettingsAppearanceMode("PlayerChoice", 0);
    public static readonly CustomParts = new AvatarSettingsAppearanceMode("CustomParts", 1);
    public static readonly CustomBody = new AvatarSettingsAppearanceMode("CustomBody", 2);
    public static get Items() {return [AvatarSettingsAppearanceMode.PlayerChoice, AvatarSettingsAppearanceMode.CustomParts, AvatarSettingsAppearanceMode.CustomBody];}
    public static FromValue(value: number) {return AvatarSettingsAppearanceMode.Items.find((item) => item._value === value);}
}

export class AvatarSettingsBuildMode extends EnumItem {
    public static readonly PlayerChoice = new AvatarSettingsBuildMode("PlayerChoice", 0);
    public static readonly CustomBuild = new AvatarSettingsBuildMode("CustomBuild", 1);
    public static get Items() {return [AvatarSettingsBuildMode.PlayerChoice, AvatarSettingsBuildMode.CustomBuild];}
    public static FromValue(value: number) {return AvatarSettingsBuildMode.Items.find((item) => item._value === value);}
}

export class AvatarSettingsClothingMode extends EnumItem {
    public static readonly PlayerChoice = new AvatarSettingsClothingMode("PlayerChoice", 0);
    public static readonly CustomLimit = new AvatarSettingsClothingMode("CustomLimit", 1);
    public static get Items() {return [AvatarSettingsClothingMode.PlayerChoice, AvatarSettingsClothingMode.CustomLimit];}
    public static FromValue(value: number) {return AvatarSettingsClothingMode.Items.find((item) => item._value === value);}
}

export class AvatarSettingsCollisionMode extends EnumItem {
    public static readonly Default = new AvatarSettingsCollisionMode("Default", 0);
    public static readonly SingleCollider = new AvatarSettingsCollisionMode("SingleCollider", 1);
    public static readonly Legacy = new AvatarSettingsCollisionMode("Legacy", 2);
    public static get Items() {return [AvatarSettingsCollisionMode.Default, AvatarSettingsCollisionMode.SingleCollider, AvatarSettingsCollisionMode.Legacy];}
    public static FromValue(value: number) {return AvatarSettingsCollisionMode.Items.find((item) => item._value === value);}
}

export class AvatarSettingsCustomAccessoryMode extends EnumItem {
    public static readonly PlayerChoice = new AvatarSettingsCustomAccessoryMode("PlayerChoice", 0);
    public static readonly CustomAccessories = new AvatarSettingsCustomAccessoryMode("CustomAccessories", 1);
    public static get Items() {return [AvatarSettingsCustomAccessoryMode.PlayerChoice, AvatarSettingsCustomAccessoryMode.CustomAccessories];}
    public static FromValue(value: number) {return AvatarSettingsCustomAccessoryMode.Items.find((item) => item._value === value);}
}

export class AvatarSettingsCustomBodyType extends EnumItem {
    public static readonly AvatarReference = new AvatarSettingsCustomBodyType("AvatarReference", 0);
    public static readonly BundleId = new AvatarSettingsCustomBodyType("BundleId", 1);
    public static get Items() {return [AvatarSettingsCustomBodyType.AvatarReference, AvatarSettingsCustomBodyType.BundleId];}
    public static FromValue(value: number) {return AvatarSettingsCustomBodyType.Items.find((item) => item._value === value);}
}

export class AvatarSettingsCustomClothingMode extends EnumItem {
    public static readonly PlayerChoice = new AvatarSettingsCustomClothingMode("PlayerChoice", 0);
    public static readonly CustomClothing = new AvatarSettingsCustomClothingMode("CustomClothing", 1);
    public static get Items() {return [AvatarSettingsCustomClothingMode.PlayerChoice, AvatarSettingsCustomClothingMode.CustomClothing];}
    public static FromValue(value: number) {return AvatarSettingsCustomClothingMode.Items.find((item) => item._value === value);}
}

export class AvatarSettingsHitAndTouchDetectionMode extends EnumItem {
    public static readonly UseParts = new AvatarSettingsHitAndTouchDetectionMode("UseParts", 0);
    public static readonly UseCollider = new AvatarSettingsHitAndTouchDetectionMode("UseCollider", 1);
    public static get Items() {return [AvatarSettingsHitAndTouchDetectionMode.UseParts, AvatarSettingsHitAndTouchDetectionMode.UseCollider];}
    public static FromValue(value: number) {return AvatarSettingsHitAndTouchDetectionMode.Items.find((item) => item._value === value);}
}

export class AvatarSettingsLegacyCollisionMode extends EnumItem {
    public static readonly R6Colliders = new AvatarSettingsLegacyCollisionMode("R6Colliders", 0);
    public static readonly InnerBoxColliders = new AvatarSettingsLegacyCollisionMode("InnerBoxColliders", 1);
    public static get Items() {return [AvatarSettingsLegacyCollisionMode.R6Colliders, AvatarSettingsLegacyCollisionMode.InnerBoxColliders];}
    public static FromValue(value: number) {return AvatarSettingsLegacyCollisionMode.Items.find((item) => item._value === value);}
}

export class AvatarSettingsScaleMode extends EnumItem {
    public static readonly PlayerChoice = new AvatarSettingsScaleMode("PlayerChoice", 0);
    public static readonly CustomScale = new AvatarSettingsScaleMode("CustomScale", 1);
    public static get Items() {return [AvatarSettingsScaleMode.PlayerChoice, AvatarSettingsScaleMode.CustomScale];}
    public static FromValue(value: number) {return AvatarSettingsScaleMode.Items.find((item) => item._value === value);}
}

export class AvatarUnificationMode extends EnumItem {
    public static readonly Default = new AvatarUnificationMode("Default", 0);
    public static readonly Disabled = new AvatarUnificationMode("Disabled", 1);
    public static readonly Enabled = new AvatarUnificationMode("Enabled", 2);
    public static get Items() {return [AvatarUnificationMode.Default, AvatarUnificationMode.Disabled, AvatarUnificationMode.Enabled];}
    public static FromValue(value: number) {return AvatarUnificationMode.Items.find((item) => item._value === value);}
}

export class BinType extends EnumItem {
    public static readonly Script = new BinType("Script", 0);
    public static readonly GameTool = new BinType("GameTool", 1);
    public static readonly Grab = new BinType("Grab", 2);
    public static readonly Clone = new BinType("Clone", 3);
    public static readonly Hammer = new BinType("Hammer", 4);
    public static get Items() {return [BinType.Script, BinType.GameTool, BinType.Grab, BinType.Clone, BinType.Hammer];}
    public static FromValue(value: number) {return BinType.Items.find((item) => item._value === value);}
}

export class BodyPart extends EnumItem {
    public static readonly Head = new BodyPart("Head", 0);
    public static readonly Torso = new BodyPart("Torso", 1);
    public static readonly LeftArm = new BodyPart("LeftArm", 2);
    public static readonly RightArm = new BodyPart("RightArm", 3);
    public static readonly LeftLeg = new BodyPart("LeftLeg", 4);
    public static readonly RightLeg = new BodyPart("RightLeg", 5);
    public static get Items() {return [BodyPart.Head, BodyPart.Torso, BodyPart.LeftArm, BodyPart.RightArm, BodyPart.LeftLeg, BodyPart.RightLeg];}
    public static FromValue(value: number) {return BodyPart.Items.find((item) => item._value === value);}
}

export class BorderMode extends EnumItem {
    public static readonly Outline = new BorderMode("Outline", 0);
    public static readonly Middle = new BorderMode("Middle", 1);
    public static readonly Inset = new BorderMode("Inset", 2);
    public static get Items() {return [BorderMode.Outline, BorderMode.Middle, BorderMode.Inset];}
    public static FromValue(value: number) {return BorderMode.Items.find((item) => item._value === value);}
}

export class ButtonStyle extends EnumItem {
    public static readonly Custom = new ButtonStyle("Custom", 0);
    public static readonly RobloxButtonDefault = new ButtonStyle("RobloxButtonDefault", 1);
    public static readonly RobloxButton = new ButtonStyle("RobloxButton", 2);
    public static readonly RobloxRoundButton = new ButtonStyle("RobloxRoundButton", 3);
    public static readonly RobloxRoundDefaultButton = new ButtonStyle("RobloxRoundDefaultButton", 4);
    public static readonly RobloxRoundDropdownButton = new ButtonStyle("RobloxRoundDropdownButton", 5);
    public static get Items() {return [ButtonStyle.Custom, ButtonStyle.RobloxButtonDefault, ButtonStyle.RobloxButton, ButtonStyle.RobloxRoundButton, ButtonStyle.RobloxRoundDefaultButton, ButtonStyle.RobloxRoundDropdownButton];}
    public static FromValue(value: number) {return ButtonStyle.Items.find((item) => item._value === value);}
}

export class CameraMode extends EnumItem {
    public static readonly Classic = new CameraMode("Classic", 0);
    public static readonly LockFirstPerson = new CameraMode("LockFirstPerson", 1);
    public static get Items() {return [CameraMode.Classic, CameraMode.LockFirstPerson];}
    public static FromValue(value: number) {return CameraMode.Items.find((item) => item._value === value);}
}

export class CameraType extends EnumItem {
    public static readonly Fixed = new CameraType("Fixed", 0);
    public static readonly Attach = new CameraType("Attach", 1);
    public static readonly Watch = new CameraType("Watch", 2);
    public static readonly Track = new CameraType("Track", 3);
    public static readonly Follow = new CameraType("Follow", 4);
    public static readonly Custom = new CameraType("Custom", 5);
    public static readonly Scriptable = new CameraType("Scriptable", 6);
    public static readonly Orbital = new CameraType("Orbital", 7);
    public static get Items() {return [CameraType.Fixed, CameraType.Attach, CameraType.Watch, CameraType.Track, CameraType.Follow, CameraType.Custom, CameraType.Scriptable, CameraType.Orbital];}
    public static FromValue(value: number) {return CameraType.Items.find((item) => item._value === value);}
}

export class CharacterControlMode extends EnumItem {
    public static readonly Default = new CharacterControlMode("Default", 0);
    public static readonly Legacy = new CharacterControlMode("Legacy", 1);
    public static readonly NoCharacterController = new CharacterControlMode("NoCharacterController", 2);
    public static readonly LuaCharacterController = new CharacterControlMode("LuaCharacterController", 3);
    public static get Items() {return [CharacterControlMode.Default, CharacterControlMode.Legacy, CharacterControlMode.NoCharacterController, CharacterControlMode.LuaCharacterController];}
    public static FromValue(value: number) {return CharacterControlMode.Items.find((item) => item._value === value);}
}

export class ChatVersion extends EnumItem {
    public static readonly LegacyChatService = new ChatVersion("LegacyChatService", 0);
    public static readonly TextChatService = new ChatVersion("TextChatService", 1);
    public static get Items() {return [ChatVersion.LegacyChatService, ChatVersion.TextChatService];}
    public static FromValue(value: number) {return ChatVersion.Items.find((item) => item._value === value);}
}

export class ClientAnimatorThrottlingMode extends EnumItem {
    public static readonly Default = new ClientAnimatorThrottlingMode("Default", 0);
    public static readonly Disabled = new ClientAnimatorThrottlingMode("Disabled", 1);
    public static readonly Enabled = new ClientAnimatorThrottlingMode("Enabled", 2);
    public static get Items() {return [ClientAnimatorThrottlingMode.Default, ClientAnimatorThrottlingMode.Disabled, ClientAnimatorThrottlingMode.Enabled];}
    public static FromValue(value: number) {return ClientAnimatorThrottlingMode.Items.find((item) => item._value === value);}
}

export class DevCameraOcclusionMode extends EnumItem {
    public static readonly Zoom = new DevCameraOcclusionMode("Zoom", 0);
    public static readonly Invisicam = new DevCameraOcclusionMode("Invisicam", 1);
    public static get Items() {return [DevCameraOcclusionMode.Zoom, DevCameraOcclusionMode.Invisicam];}
    public static FromValue(value: number) {return DevCameraOcclusionMode.Items.find((item) => item._value === value);}
}

export class DevComputerCameraMovementMode extends EnumItem {
    public static readonly UserChoice = new DevComputerCameraMovementMode("UserChoice", 0);
    public static readonly Classic = new DevComputerCameraMovementMode("Classic", 1);
    public static readonly Follow = new DevComputerCameraMovementMode("Follow", 2);
    public static readonly Orbital = new DevComputerCameraMovementMode("Orbital", 3);
    public static readonly CameraToggle = new DevComputerCameraMovementMode("CameraToggle", 4);
    public static get Items() {return [DevComputerCameraMovementMode.UserChoice, DevComputerCameraMovementMode.Classic, DevComputerCameraMovementMode.Follow, DevComputerCameraMovementMode.Orbital, DevComputerCameraMovementMode.CameraToggle];}
    public static FromValue(value: number) {return DevComputerCameraMovementMode.Items.find((item) => item._value === value);}
}

export class DevComputerMovementMode extends EnumItem {
    public static readonly UserChoice = new DevComputerMovementMode("UserChoice", 0);
    public static readonly KeyboardMouse = new DevComputerMovementMode("KeyboardMouse", 1);
    public static readonly ClickToMove = new DevComputerMovementMode("ClickToMove", 2);
    public static readonly Scriptable = new DevComputerMovementMode("Scriptable", 3);
    public static get Items() {return [DevComputerMovementMode.UserChoice, DevComputerMovementMode.KeyboardMouse, DevComputerMovementMode.ClickToMove, DevComputerMovementMode.Scriptable];}
    public static FromValue(value: number) {return DevComputerMovementMode.Items.find((item) => item._value === value);}
}

export class DevTouchCameraMovementMode extends EnumItem {
    public static readonly UserChoice = new DevTouchCameraMovementMode("UserChoice", 0);
    public static readonly Classic = new DevTouchCameraMovementMode("Classic", 1);
    public static readonly Follow = new DevTouchCameraMovementMode("Follow", 2);
    public static readonly Orbital = new DevTouchCameraMovementMode("Orbital", 3);
    public static get Items() {return [DevTouchCameraMovementMode.UserChoice, DevTouchCameraMovementMode.Classic, DevTouchCameraMovementMode.Follow, DevTouchCameraMovementMode.Orbital];}
    public static FromValue(value: number) {return DevTouchCameraMovementMode.Items.find((item) => item._value === value);}
}

export class DevTouchMovementMode extends EnumItem {
    public static readonly UserChoice = new DevTouchMovementMode("UserChoice", 0);
    public static readonly Thumbstick = new DevTouchMovementMode("Thumbstick", 1);
    public static readonly DPad = new DevTouchMovementMode("DPad", 2);
    public static readonly Thumbpad = new DevTouchMovementMode("Thumbpad", 3);
    public static readonly ClickToMove = new DevTouchMovementMode("ClickToMove", 4);
    public static readonly Scriptable = new DevTouchMovementMode("Scriptable", 5);
    public static readonly DynamicThumbstick = new DevTouchMovementMode("DynamicThumbstick", 6);
    public static get Items() {return [DevTouchMovementMode.UserChoice, DevTouchMovementMode.Thumbstick, DevTouchMovementMode.DPad, DevTouchMovementMode.Thumbpad, DevTouchMovementMode.ClickToMove, DevTouchMovementMode.Scriptable, DevTouchMovementMode.DynamicThumbstick];}
    public static FromValue(value: number) {return DevTouchMovementMode.Items.find((item) => item._value === value);}
}

export class DialogBehaviorType extends EnumItem {
    public static readonly SinglePlayer = new DialogBehaviorType("SinglePlayer", 0);
    public static readonly MultiplePlayers = new DialogBehaviorType("MultiplePlayers", 1);
    public static get Items() {return [DialogBehaviorType.SinglePlayer, DialogBehaviorType.MultiplePlayers];}
    public static FromValue(value: number) {return DialogBehaviorType.Items.find((item) => item._value === value);}
}

export class DialogPurpose extends EnumItem {
    public static readonly Quest = new DialogPurpose("Quest", 0);
    public static readonly Help = new DialogPurpose("Help", 1);
    public static readonly Shop = new DialogPurpose("Shop", 2);
    public static get Items() {return [DialogPurpose.Quest, DialogPurpose.Help, DialogPurpose.Shop];}
    public static FromValue(value: number) {return DialogPurpose.Items.find((item) => item._value === value);}
}

export class DialogTone extends EnumItem {
    public static readonly Neutral = new DialogTone("Neutral", 0);
    public static readonly Friendly = new DialogTone("Friendly", 1);
    public static readonly Enemy = new DialogTone("Enemy", 2);
    public static get Items() {return [DialogTone.Neutral, DialogTone.Friendly, DialogTone.Enemy];}
    public static FromValue(value: number) {return DialogTone.Items.find((item) => item._value === value);}
}

export class DominantAxis extends EnumItem {
    public static readonly Width = new DominantAxis("Width", 0);
    public static readonly Height = new DominantAxis("Height", 1);
    public static get Items() {return [DominantAxis.Width, DominantAxis.Height];}
    public static FromValue(value: number) {return DominantAxis.Items.find((item) => item._value === value);}
}

export class DragDetectorDragStyle extends EnumItem {
    public static readonly TranslateLine = new DragDetectorDragStyle("TranslateLine", 0);
    public static readonly TranslatePlane = new DragDetectorDragStyle("TranslatePlane", 1);
    public static readonly TranslatePlaneOrLine = new DragDetectorDragStyle("TranslatePlaneOrLine", 2);
    public static readonly TranslateLineOrPlane = new DragDetectorDragStyle("TranslateLineOrPlane", 3);
    public static readonly TranslateViewPlane = new DragDetectorDragStyle("TranslateViewPlane", 4);
    public static readonly RotateAxis = new DragDetectorDragStyle("RotateAxis", 5);
    public static readonly RotateTrackball = new DragDetectorDragStyle("RotateTrackball", 6);
    public static readonly Scriptable = new DragDetectorDragStyle("Scriptable", 7);
    public static readonly BestForDevice = new DragDetectorDragStyle("BestForDevice", 8);
    public static get Items() {return [DragDetectorDragStyle.TranslateLine, DragDetectorDragStyle.TranslatePlane, DragDetectorDragStyle.TranslatePlaneOrLine, DragDetectorDragStyle.TranslateLineOrPlane, DragDetectorDragStyle.TranslateViewPlane, DragDetectorDragStyle.RotateAxis, DragDetectorDragStyle.RotateTrackball, DragDetectorDragStyle.Scriptable, DragDetectorDragStyle.BestForDevice];}
    public static FromValue(value: number) {return DragDetectorDragStyle.Items.find((item) => item._value === value);}
}

export class DragDetectorPermissionPolicy extends EnumItem {
    public static readonly Nobody = new DragDetectorPermissionPolicy("Nobody", 0);
    public static readonly Everybody = new DragDetectorPermissionPolicy("Everybody", 1);
    public static readonly Scriptable = new DragDetectorPermissionPolicy("Scriptable", 2);
    public static get Items() {return [DragDetectorPermissionPolicy.Nobody, DragDetectorPermissionPolicy.Everybody, DragDetectorPermissionPolicy.Scriptable];}
    public static FromValue(value: number) {return DragDetectorPermissionPolicy.Items.find((item) => item._value === value);}
}

export class DragDetectorResponseStyle extends EnumItem {
    public static readonly Geometric = new DragDetectorResponseStyle("Geometric", 0);
    public static readonly Physical = new DragDetectorResponseStyle("Physical", 1);
    public static readonly Custom = new DragDetectorResponseStyle("Custom", 2);
    public static get Items() {return [DragDetectorResponseStyle.Geometric, DragDetectorResponseStyle.Physical, DragDetectorResponseStyle.Custom];}
    public static FromValue(value: number) {return DragDetectorResponseStyle.Items.find((item) => item._value === value);}
}

export class EasingDirection extends EnumItem {
    public static readonly In = new EasingDirection("In", 0);
    public static readonly Out = new EasingDirection("Out", 1);
    public static readonly InOut = new EasingDirection("InOut", 2);
    public static get Items() {return [EasingDirection.In, EasingDirection.Out, EasingDirection.InOut];}
    public static FromValue(value: number) {return EasingDirection.Items.find((item) => item._value === value);}
}

export class EasingStyle extends EnumItem {
    public static readonly Linear = new EasingStyle("Linear", 0);
    public static readonly Sine = new EasingStyle("Sine", 1);
    public static readonly Back = new EasingStyle("Back", 2);
    public static readonly Quad = new EasingStyle("Quad", 3);
    public static readonly Quart = new EasingStyle("Quart", 4);
    public static readonly Quint = new EasingStyle("Quint", 5);
    public static readonly Bounce = new EasingStyle("Bounce", 6);
    public static readonly Elastic = new EasingStyle("Elastic", 7);
    public static readonly Exponential = new EasingStyle("Exponential", 8);
    public static readonly Circular = new EasingStyle("Circular", 9);
    public static readonly Cubic = new EasingStyle("Cubic", 10);
    public static get Items() {return [EasingStyle.Linear, EasingStyle.Sine, EasingStyle.Back, EasingStyle.Quad, EasingStyle.Quart, EasingStyle.Quint, EasingStyle.Bounce, EasingStyle.Elastic, EasingStyle.Exponential, EasingStyle.Circular, EasingStyle.Cubic];}
    public static FromValue(value: number) {return EasingStyle.Items.find((item) => item._value === value);}
}

export class ElasticBehavior extends EnumItem {
    public static readonly WhenScrollable = new ElasticBehavior("WhenScrollable", 0);
    public static readonly Always = new ElasticBehavior("Always", 1);
    public static readonly Never = new ElasticBehavior("Never", 2);
    public static get Items() {return [ElasticBehavior.WhenScrollable, ElasticBehavior.Always, ElasticBehavior.Never];}
    public static FromValue(value: number) {return ElasticBehavior.Items.find((item) => item._value === value);}
}

export class ExplosionType extends EnumItem {
    public static readonly NoCraters = new ExplosionType("NoCraters", 0);
    public static readonly Craters = new ExplosionType("Craters", 1);
    public static get Items() {return [ExplosionType.NoCraters, ExplosionType.Craters];}
    public static FromValue(value: number) {return ExplosionType.Items.find((item) => item._value === value);}
}

export class FieldOfViewMode extends EnumItem {
    public static readonly Vertical = new FieldOfViewMode("Vertical", 0);
    public static readonly Diagonal = new FieldOfViewMode("Diagonal", 1);
    public static readonly MaxAxis = new FieldOfViewMode("MaxAxis", 2);
    public static get Items() {return [FieldOfViewMode.Vertical, FieldOfViewMode.Diagonal, FieldOfViewMode.MaxAxis];}
    public static FromValue(value: number) {return FieldOfViewMode.Items.find((item) => item._value === value);}
}

export class FillDirection extends EnumItem {
    public static readonly Horizontal = new FillDirection("Horizontal", 0);
    public static readonly Vertical = new FillDirection("Vertical", 1);
    public static get Items() {return [FillDirection.Horizontal, FillDirection.Vertical];}
    public static FromValue(value: number) {return FillDirection.Items.find((item) => item._value === value);}
}

export class FluidFidelity extends EnumItem {
    public static readonly Automatic = new FluidFidelity("Automatic", 0);
    public static readonly UseCollisionGeometry = new FluidFidelity("UseCollisionGeometry", 1);
    public static readonly UsePreciseGeometry = new FluidFidelity("UsePreciseGeometry", 2);
    public static get Items() {return [FluidFidelity.Automatic, FluidFidelity.UseCollisionGeometry, FluidFidelity.UsePreciseGeometry];}
    public static FromValue(value: number) {return FluidFidelity.Items.find((item) => item._value === value);}
}

export class FluidForces extends EnumItem {
    public static readonly Default = new FluidForces("Default", 0);
    public static readonly Experimental = new FluidForces("Experimental", 1);
    public static get Items() {return [FluidForces.Default, FluidForces.Experimental];}
    public static FromValue(value: number) {return FluidForces.Items.find((item) => item._value === value);}
}

export class Font extends EnumItem {
    public static readonly Legacy = new Font("Legacy", 0);
    public static readonly Arial = new Font("Arial", 1);
    public static readonly ArialBold = new Font("ArialBold", 2);
    public static readonly SourceSans = new Font("SourceSans", 3);
    public static readonly SourceSansBold = new Font("SourceSansBold", 4);
    public static readonly SourceSansLight = new Font("SourceSansLight", 5);
    public static readonly SourceSansItalic = new Font("SourceSansItalic", 6);
    public static readonly Bodoni = new Font("Bodoni", 7);
    public static readonly Garamond = new Font("Garamond", 8);
    public static readonly Cartoon = new Font("Cartoon", 9);
    public static readonly Code = new Font("Code", 10);
    public static readonly Highway = new Font("Highway", 11);
    public static readonly SciFi = new Font("SciFi", 12);
    public static readonly Arcade = new Font("Arcade", 13);
    public static readonly Fantasy = new Font("Fantasy", 14);
    public static readonly Antique = new Font("Antique", 15);
    public static readonly SourceSansSemibold = new Font("SourceSansSemibold", 16);
    public static readonly Gotham = new Font("Gotham", 17);
    public static readonly GothamMedium = new Font("GothamMedium", 18);
    public static readonly GothamBold = new Font("GothamBold", 19);
    public static readonly GothamBlack = new Font("GothamBlack", 20);
    public static readonly AmaticSC = new Font("AmaticSC", 21);
    public static readonly Bangers = new Font("Bangers", 22);
    public static readonly Creepster = new Font("Creepster", 23);
    public static readonly DenkOne = new Font("DenkOne", 24);
    public static readonly Fondamento = new Font("Fondamento", 25);
    public static readonly FredokaOne = new Font("FredokaOne", 26);
    public static readonly GrenzeGotisch = new Font("GrenzeGotisch", 27);
    public static readonly IndieFlower = new Font("IndieFlower", 28);
    public static readonly JosefinSans = new Font("JosefinSans", 29);
    public static readonly Jura = new Font("Jura", 30);
    public static readonly Kalam = new Font("Kalam", 31);
    public static readonly LuckiestGuy = new Font("LuckiestGuy", 32);
    public static readonly Merriweather = new Font("Merriweather", 33);
    public static readonly Michroma = new Font("Michroma", 34);
    public static readonly Nunito = new Font("Nunito", 35);
    public static readonly Oswald = new Font("Oswald", 36);
    public static readonly PatrickHand = new Font("PatrickHand", 37);
    public static readonly PermanentMarker = new Font("PermanentMarker", 38);
    public static readonly Roboto = new Font("Roboto", 39);
    public static readonly RobotoCondensed = new Font("RobotoCondensed", 40);
    public static readonly RobotoMono = new Font("RobotoMono", 41);
    public static readonly Sarpanch = new Font("Sarpanch", 42);
    public static readonly SpecialElite = new Font("SpecialElite", 43);
    public static readonly TitilliumWeb = new Font("TitilliumWeb", 44);
    public static readonly Ubuntu = new Font("Ubuntu", 45);
    public static readonly BuilderSans = new Font("BuilderSans", 46);
    public static readonly BuilderSansMedium = new Font("BuilderSansMedium", 47);
    public static readonly BuilderSansBold = new Font("BuilderSansBold", 48);
    public static readonly BuilderSansExtraBold = new Font("BuilderSansExtraBold", 49);
    public static readonly Arimo = new Font("Arimo", 50);
    public static readonly ArimoBold = new Font("ArimoBold", 51);
    public static readonly Unknown = new Font("Unknown", 100);
    public static get Items() {return [Font.Legacy, Font.Arial, Font.ArialBold, Font.SourceSans, Font.SourceSansBold, Font.SourceSansLight, Font.SourceSansItalic, Font.Bodoni, Font.Garamond, Font.Cartoon, Font.Code, Font.Highway, Font.SciFi, Font.Arcade, Font.Fantasy, Font.Antique, Font.SourceSansSemibold, Font.Gotham, Font.GothamMedium, Font.GothamBold, Font.GothamBlack, Font.AmaticSC, Font.Bangers, Font.Creepster, Font.DenkOne, Font.Fondamento, Font.FredokaOne, Font.GrenzeGotisch, Font.IndieFlower, Font.JosefinSans, Font.Jura, Font.Kalam, Font.LuckiestGuy, Font.Merriweather, Font.Michroma, Font.Nunito, Font.Oswald, Font.PatrickHand, Font.PermanentMarker, Font.Roboto, Font.RobotoCondensed, Font.RobotoMono, Font.Sarpanch, Font.SpecialElite, Font.TitilliumWeb, Font.Ubuntu, Font.BuilderSans, Font.BuilderSansMedium, Font.BuilderSansBold, Font.BuilderSansExtraBold, Font.Arimo, Font.ArimoBold, Font.Unknown];}
    public static FromValue(value: number) {return Font.Items.find((item) => item._value === value);}
}

export class FontSize extends EnumItem {
    public static readonly Size8 = new FontSize("Size8", 0);
    public static readonly Size9 = new FontSize("Size9", 1);
    public static readonly Size10 = new FontSize("Size10", 2);
    public static readonly Size11 = new FontSize("Size11", 3);
    public static readonly Size12 = new FontSize("Size12", 4);
    public static readonly Size14 = new FontSize("Size14", 5);
    public static readonly Size18 = new FontSize("Size18", 6);
    public static readonly Size24 = new FontSize("Size24", 7);
    public static readonly Size36 = new FontSize("Size36", 8);
    public static readonly Size48 = new FontSize("Size48", 9);
    public static readonly Size28 = new FontSize("Size28", 10);
    public static readonly Size32 = new FontSize("Size32", 11);
    public static readonly Size42 = new FontSize("Size42", 12);
    public static readonly Size60 = new FontSize("Size60", 13);
    public static readonly Size96 = new FontSize("Size96", 14);
    public static get Items() {return [FontSize.Size8, FontSize.Size9, FontSize.Size10, FontSize.Size11, FontSize.Size12, FontSize.Size14, FontSize.Size18, FontSize.Size24, FontSize.Size36, FontSize.Size48, FontSize.Size28, FontSize.Size32, FontSize.Size42, FontSize.Size60, FontSize.Size96];}
    public static FromValue(value: number) {return FontSize.Items.find((item) => item._value === value);}
}

export class ForceLimitMode extends EnumItem {
    public static readonly Magnitude = new ForceLimitMode("Magnitude", 0);
    public static readonly PerAxis = new ForceLimitMode("PerAxis", 1);
    public static get Items() {return [ForceLimitMode.Magnitude, ForceLimitMode.PerAxis];}
    public static FromValue(value: number) {return ForceLimitMode.Items.find((item) => item._value === value);}
}

export class FormFactor extends EnumItem {
    public static readonly Symmetric = new FormFactor("Symmetric", 0);
    public static readonly Brick = new FormFactor("Brick", 1);
    public static readonly Plate = new FormFactor("Plate", 2);
    public static readonly Custom = new FormFactor("Custom", 3);
    public static get Items() {return [FormFactor.Symmetric, FormFactor.Brick, FormFactor.Plate, FormFactor.Custom];}
    public static FromValue(value: number) {return FormFactor.Items.find((item) => item._value === value);}
}

export class FrameStyle extends EnumItem {
    public static readonly Custom = new FrameStyle("Custom", 0);
    public static readonly ChatBlue = new FrameStyle("ChatBlue", 1);
    public static readonly RobloxSquare = new FrameStyle("RobloxSquare", 2);
    public static readonly RobloxRound = new FrameStyle("RobloxRound", 3);
    public static readonly ChatGreen = new FrameStyle("ChatGreen", 4);
    public static readonly ChatRed = new FrameStyle("ChatRed", 5);
    public static readonly DropShadow = new FrameStyle("DropShadow", 6);
    public static get Items() {return [FrameStyle.Custom, FrameStyle.ChatBlue, FrameStyle.RobloxSquare, FrameStyle.RobloxRound, FrameStyle.ChatGreen, FrameStyle.ChatRed, FrameStyle.DropShadow];}
    public static FromValue(value: number) {return FrameStyle.Items.find((item) => item._value === value);}
}

export class FramerateManagerMode extends EnumItem {
    public static readonly Automatic = new FramerateManagerMode("Automatic", 0);
    public static readonly On = new FramerateManagerMode("On", 1);
    public static readonly Off = new FramerateManagerMode("Off", 2);
    public static get Items() {return [FramerateManagerMode.Automatic, FramerateManagerMode.On, FramerateManagerMode.Off];}
    public static FromValue(value: number) {return FramerateManagerMode.Items.find((item) => item._value === value);}
}

export class GameAvatarType extends EnumItem {
    public static readonly R6 = new GameAvatarType("R6", 0);
    public static readonly R15 = new GameAvatarType("R15", 1);
    public static readonly PlayerChoice = new GameAvatarType("PlayerChoice", 2);
    public static get Items() {return [GameAvatarType.R6, GameAvatarType.R15, GameAvatarType.PlayerChoice];}
    public static FromValue(value: number) {return GameAvatarType.Items.find((item) => item._value === value);}
}

export class GraphicsMode extends EnumItem {
    public static readonly Automatic = new GraphicsMode("Automatic", 1);
    public static readonly Direct3D11 = new GraphicsMode("Direct3D11", 2);
    public static readonly OpenGL = new GraphicsMode("OpenGL", 4);
    public static readonly Metal = new GraphicsMode("Metal", 5);
    public static readonly Vulkan = new GraphicsMode("Vulkan", 6);
    public static readonly NoGraphics = new GraphicsMode("NoGraphics", 9);
    public static get Items() {return [GraphicsMode.Automatic, GraphicsMode.Direct3D11, GraphicsMode.OpenGL, GraphicsMode.Metal, GraphicsMode.Vulkan, GraphicsMode.NoGraphics];}
    public static FromValue(value: number) {return GraphicsMode.Items.find((item) => item._value === value);}
}

export class HandlesStyle extends EnumItem {
    public static readonly Resize = new HandlesStyle("Resize", 0);
    public static readonly Movement = new HandlesStyle("Movement", 1);
    public static get Items() {return [HandlesStyle.Resize, HandlesStyle.Movement];}
    public static FromValue(value: number) {return HandlesStyle.Items.find((item) => item._value === value);}
}

export class HapticEffectType extends EnumItem {
    public static readonly Custom = new HapticEffectType("Custom", 0);
    public static readonly UIHover = new HapticEffectType("UIHover", 1);
    public static readonly UIClick = new HapticEffectType("UIClick", 2);
    public static readonly UINotification = new HapticEffectType("UINotification", 3);
    public static readonly GameplayExplosion = new HapticEffectType("GameplayExplosion", 4);
    public static readonly GameplayCollision = new HapticEffectType("GameplayCollision", 5);
    public static get Items() {return [HapticEffectType.Custom, HapticEffectType.UIHover, HapticEffectType.UIClick, HapticEffectType.UINotification, HapticEffectType.GameplayExplosion, HapticEffectType.GameplayCollision];}
    public static FromValue(value: number) {return HapticEffectType.Items.find((item) => item._value === value);}
}

export class HighlightDepthMode extends EnumItem {
    public static readonly AlwaysOnTop = new HighlightDepthMode("AlwaysOnTop", 0);
    public static readonly Occluded = new HighlightDepthMode("Occluded", 1);
    public static get Items() {return [HighlightDepthMode.AlwaysOnTop, HighlightDepthMode.Occluded];}
    public static FromValue(value: number) {return HighlightDepthMode.Items.find((item) => item._value === value);}
}

export class HorizontalAlignment extends EnumItem {
    public static readonly Center = new HorizontalAlignment("Center", 0);
    public static readonly Left = new HorizontalAlignment("Left", 1);
    public static readonly Right = new HorizontalAlignment("Right", 2);
    public static get Items() {return [HorizontalAlignment.Center, HorizontalAlignment.Left, HorizontalAlignment.Right];}
    public static FromValue(value: number) {return HorizontalAlignment.Items.find((item) => item._value === value);}
}

export class HumanoidCollisionType extends EnumItem {
    public static readonly OuterBox = new HumanoidCollisionType("OuterBox", 0);
    public static readonly InnerBox = new HumanoidCollisionType("InnerBox", 1);
    public static get Items() {return [HumanoidCollisionType.OuterBox, HumanoidCollisionType.InnerBox];}
    public static FromValue(value: number) {return HumanoidCollisionType.Items.find((item) => item._value === value);}
}

export class HumanoidDisplayDistanceType extends EnumItem {
    public static readonly Viewer = new HumanoidDisplayDistanceType("Viewer", 0);
    public static readonly Subject = new HumanoidDisplayDistanceType("Subject", 1);
    public static readonly None = new HumanoidDisplayDistanceType("None", 2);
    public static get Items() {return [HumanoidDisplayDistanceType.Viewer, HumanoidDisplayDistanceType.Subject, HumanoidDisplayDistanceType.None];}
    public static FromValue(value: number) {return HumanoidDisplayDistanceType.Items.find((item) => item._value === value);}
}

export class HumanoidHealthDisplayType extends EnumItem {
    public static readonly DisplayWhenDamaged = new HumanoidHealthDisplayType("DisplayWhenDamaged", 0);
    public static readonly AlwaysOn = new HumanoidHealthDisplayType("AlwaysOn", 1);
    public static readonly AlwaysOff = new HumanoidHealthDisplayType("AlwaysOff", 2);
    public static get Items() {return [HumanoidHealthDisplayType.DisplayWhenDamaged, HumanoidHealthDisplayType.AlwaysOn, HumanoidHealthDisplayType.AlwaysOff];}
    public static FromValue(value: number) {return HumanoidHealthDisplayType.Items.find((item) => item._value === value);}
}

export class HumanoidRigType extends EnumItem {
    public static readonly R6 = new HumanoidRigType("R6", 0);
    public static readonly R15 = new HumanoidRigType("R15", 1);
    public static get Items() {return [HumanoidRigType.R6, HumanoidRigType.R15];}
    public static FromValue(value: number) {return HumanoidRigType.Items.find((item) => item._value === value);}
}

export class IKControlConstraintSupport extends EnumItem {
    public static readonly Default = new IKControlConstraintSupport("Default", 0);
    public static readonly Disabled = new IKControlConstraintSupport("Disabled", 1);
    public static readonly Enabled = new IKControlConstraintSupport("Enabled", 2);
    public static get Items() {return [IKControlConstraintSupport.Default, IKControlConstraintSupport.Disabled, IKControlConstraintSupport.Enabled];}
    public static FromValue(value: number) {return IKControlConstraintSupport.Items.find((item) => item._value === value);}
}

export class IKControlType extends EnumItem {
    public static readonly Transform = new IKControlType("Transform", 0);
    public static readonly Position = new IKControlType("Position", 1);
    public static readonly Rotation = new IKControlType("Rotation", 2);
    public static readonly LookAt = new IKControlType("LookAt", 3);
    public static get Items() {return [IKControlType.Transform, IKControlType.Position, IKControlType.Rotation, IKControlType.LookAt];}
    public static FromValue(value: number) {return IKControlType.Items.find((item) => item._value === value);}
}

export class InOut extends EnumItem {
    public static readonly Edge = new InOut("Edge", 0);
    public static readonly Inset = new InOut("Inset", 1);
    public static readonly Center = new InOut("Center", 2);
    public static get Items() {return [InOut.Edge, InOut.Inset, InOut.Center];}
    public static FromValue(value: number) {return InOut.Items.find((item) => item._value === value);}
}

export class InputActionType extends EnumItem {
    public static readonly Bool = new InputActionType("Bool", 0);
    public static readonly Direction1D = new InputActionType("Direction1D", 1);
    public static readonly Direction2D = new InputActionType("Direction2D", 2);
    public static get Items() {return [InputActionType.Bool, InputActionType.Direction1D, InputActionType.Direction2D];}
    public static FromValue(value: number) {return InputActionType.Items.find((item) => item._value === value);}
}

export class InputType extends EnumItem {
    public static readonly NoInput = new InputType("NoInput", 0);
    public static readonly Constant = new InputType("Constant", 12);
    public static readonly Sin = new InputType("Sin", 13);
    public static get Items() {return [InputType.NoInput, InputType.Constant, InputType.Sin];}
    public static FromValue(value: number) {return InputType.Items.find((item) => item._value === value);}
}

export class ItemLineAlignment extends EnumItem {
    public static readonly Automatic = new ItemLineAlignment("Automatic", 0);
    public static readonly Start = new ItemLineAlignment("Start", 1);
    public static readonly Center = new ItemLineAlignment("Center", 2);
    public static readonly End = new ItemLineAlignment("End", 3);
    public static readonly Stretch = new ItemLineAlignment("Stretch", 4);
    public static get Items() {return [ItemLineAlignment.Automatic, ItemLineAlignment.Start, ItemLineAlignment.Center, ItemLineAlignment.End, ItemLineAlignment.Stretch];}
    public static FromValue(value: number) {return ItemLineAlignment.Items.find((item) => item._value === value);}
}

export class KeyCode extends EnumItem {
    public static readonly Unknown = new KeyCode("Unknown", 0);
    public static readonly Backspace = new KeyCode("Backspace", 8);
    public static readonly Tab = new KeyCode("Tab", 9);
    public static readonly Clear = new KeyCode("Clear", 12);
    public static readonly Return = new KeyCode("Return", 13);
    public static readonly Pause = new KeyCode("Pause", 19);
    public static readonly Escape = new KeyCode("Escape", 27);
    public static readonly Space = new KeyCode("Space", 32);
    public static readonly QuotedDouble = new KeyCode("QuotedDouble", 34);
    public static readonly Hash = new KeyCode("Hash", 35);
    public static readonly Dollar = new KeyCode("Dollar", 36);
    public static readonly Percent = new KeyCode("Percent", 37);
    public static readonly Ampersand = new KeyCode("Ampersand", 38);
    public static readonly Quote = new KeyCode("Quote", 39);
    public static readonly LeftParenthesis = new KeyCode("LeftParenthesis", 40);
    public static readonly RightParenthesis = new KeyCode("RightParenthesis", 41);
    public static readonly Asterisk = new KeyCode("Asterisk", 42);
    public static readonly Plus = new KeyCode("Plus", 43);
    public static readonly Comma = new KeyCode("Comma", 44);
    public static readonly Minus = new KeyCode("Minus", 45);
    public static readonly Period = new KeyCode("Period", 46);
    public static readonly Slash = new KeyCode("Slash", 47);
    public static readonly Zero = new KeyCode("Zero", 48);
    public static readonly One = new KeyCode("One", 49);
    public static readonly Two = new KeyCode("Two", 50);
    public static readonly Three = new KeyCode("Three", 51);
    public static readonly Four = new KeyCode("Four", 52);
    public static readonly Five = new KeyCode("Five", 53);
    public static readonly Six = new KeyCode("Six", 54);
    public static readonly Seven = new KeyCode("Seven", 55);
    public static readonly Eight = new KeyCode("Eight", 56);
    public static readonly Nine = new KeyCode("Nine", 57);
    public static readonly Colon = new KeyCode("Colon", 58);
    public static readonly Semicolon = new KeyCode("Semicolon", 59);
    public static readonly LessThan = new KeyCode("LessThan", 60);
    public static readonly Equals = new KeyCode("Equals", 61);
    public static readonly GreaterThan = new KeyCode("GreaterThan", 62);
    public static readonly Question = new KeyCode("Question", 63);
    public static readonly At = new KeyCode("At", 64);
    public static readonly LeftBracket = new KeyCode("LeftBracket", 91);
    public static readonly BackSlash = new KeyCode("BackSlash", 92);
    public static readonly RightBracket = new KeyCode("RightBracket", 93);
    public static readonly Caret = new KeyCode("Caret", 94);
    public static readonly Underscore = new KeyCode("Underscore", 95);
    public static readonly Backquote = new KeyCode("Backquote", 96);
    public static readonly A = new KeyCode("A", 97);
    public static readonly B = new KeyCode("B", 98);
    public static readonly C = new KeyCode("C", 99);
    public static readonly D = new KeyCode("D", 100);
    public static readonly E = new KeyCode("E", 101);
    public static readonly F = new KeyCode("F", 102);
    public static readonly G = new KeyCode("G", 103);
    public static readonly H = new KeyCode("H", 104);
    public static readonly I = new KeyCode("I", 105);
    public static readonly J = new KeyCode("J", 106);
    public static readonly K = new KeyCode("K", 107);
    public static readonly L = new KeyCode("L", 108);
    public static readonly M = new KeyCode("M", 109);
    public static readonly N = new KeyCode("N", 110);
    public static readonly O = new KeyCode("O", 111);
    public static readonly P = new KeyCode("P", 112);
    public static readonly Q = new KeyCode("Q", 113);
    public static readonly R = new KeyCode("R", 114);
    public static readonly S = new KeyCode("S", 115);
    public static readonly T = new KeyCode("T", 116);
    public static readonly U = new KeyCode("U", 117);
    public static readonly V = new KeyCode("V", 118);
    public static readonly W = new KeyCode("W", 119);
    public static readonly X = new KeyCode("X", 120);
    public static readonly Y = new KeyCode("Y", 121);
    public static readonly Z = new KeyCode("Z", 122);
    public static readonly LeftCurly = new KeyCode("LeftCurly", 123);
    public static readonly Pipe = new KeyCode("Pipe", 124);
    public static readonly RightCurly = new KeyCode("RightCurly", 125);
    public static readonly Tilde = new KeyCode("Tilde", 126);
    public static readonly Delete = new KeyCode("Delete", 127);
    public static readonly KeypadZero = new KeyCode("KeypadZero", 256);
    public static readonly KeypadOne = new KeyCode("KeypadOne", 257);
    public static readonly KeypadTwo = new KeyCode("KeypadTwo", 258);
    public static readonly KeypadThree = new KeyCode("KeypadThree", 259);
    public static readonly KeypadFour = new KeyCode("KeypadFour", 260);
    public static readonly KeypadFive = new KeyCode("KeypadFive", 261);
    public static readonly KeypadSix = new KeyCode("KeypadSix", 262);
    public static readonly KeypadSeven = new KeyCode("KeypadSeven", 263);
    public static readonly KeypadEight = new KeyCode("KeypadEight", 264);
    public static readonly KeypadNine = new KeyCode("KeypadNine", 265);
    public static readonly KeypadPeriod = new KeyCode("KeypadPeriod", 266);
    public static readonly KeypadDivide = new KeyCode("KeypadDivide", 267);
    public static readonly KeypadMultiply = new KeyCode("KeypadMultiply", 268);
    public static readonly KeypadMinus = new KeyCode("KeypadMinus", 269);
    public static readonly KeypadPlus = new KeyCode("KeypadPlus", 270);
    public static readonly KeypadEnter = new KeyCode("KeypadEnter", 271);
    public static readonly KeypadEquals = new KeyCode("KeypadEquals", 272);
    public static readonly Up = new KeyCode("Up", 273);
    public static readonly Down = new KeyCode("Down", 274);
    public static readonly Right = new KeyCode("Right", 275);
    public static readonly Left = new KeyCode("Left", 276);
    public static readonly Insert = new KeyCode("Insert", 277);
    public static readonly Home = new KeyCode("Home", 278);
    public static readonly End = new KeyCode("End", 279);
    public static readonly PageUp = new KeyCode("PageUp", 280);
    public static readonly PageDown = new KeyCode("PageDown", 281);
    public static readonly F1 = new KeyCode("F1", 282);
    public static readonly F2 = new KeyCode("F2", 283);
    public static readonly F3 = new KeyCode("F3", 284);
    public static readonly F4 = new KeyCode("F4", 285);
    public static readonly F5 = new KeyCode("F5", 286);
    public static readonly F6 = new KeyCode("F6", 287);
    public static readonly F7 = new KeyCode("F7", 288);
    public static readonly F8 = new KeyCode("F8", 289);
    public static readonly F9 = new KeyCode("F9", 290);
    public static readonly F10 = new KeyCode("F10", 291);
    public static readonly F11 = new KeyCode("F11", 292);
    public static readonly F12 = new KeyCode("F12", 293);
    public static readonly F13 = new KeyCode("F13", 294);
    public static readonly F14 = new KeyCode("F14", 295);
    public static readonly F15 = new KeyCode("F15", 296);
    public static readonly NumLock = new KeyCode("NumLock", 300);
    public static readonly CapsLock = new KeyCode("CapsLock", 301);
    public static readonly ScrollLock = new KeyCode("ScrollLock", 302);
    public static readonly RightShift = new KeyCode("RightShift", 303);
    public static readonly LeftShift = new KeyCode("LeftShift", 304);
    public static readonly RightControl = new KeyCode("RightControl", 305);
    public static readonly LeftControl = new KeyCode("LeftControl", 306);
    public static readonly RightAlt = new KeyCode("RightAlt", 307);
    public static readonly LeftAlt = new KeyCode("LeftAlt", 308);
    public static readonly RightMeta = new KeyCode("RightMeta", 309);
    public static readonly LeftMeta = new KeyCode("LeftMeta", 310);
    public static readonly LeftSuper = new KeyCode("LeftSuper", 311);
    public static readonly RightSuper = new KeyCode("RightSuper", 312);
    public static readonly Mode = new KeyCode("Mode", 313);
    public static readonly Compose = new KeyCode("Compose", 314);
    public static readonly Help = new KeyCode("Help", 315);
    public static readonly Print = new KeyCode("Print", 316);
    public static readonly SysReq = new KeyCode("SysReq", 317);
    public static readonly Break = new KeyCode("Break", 318);
    public static readonly Menu = new KeyCode("Menu", 319);
    public static readonly Power = new KeyCode("Power", 320);
    public static readonly Euro = new KeyCode("Euro", 321);
    public static readonly Undo = new KeyCode("Undo", 322);
    public static readonly ButtonX = new KeyCode("ButtonX", 1000);
    public static readonly ButtonY = new KeyCode("ButtonY", 1001);
    public static readonly ButtonA = new KeyCode("ButtonA", 1002);
    public static readonly ButtonB = new KeyCode("ButtonB", 1003);
    public static readonly ButtonR1 = new KeyCode("ButtonR1", 1004);
    public static readonly ButtonL1 = new KeyCode("ButtonL1", 1005);
    public static readonly ButtonR2 = new KeyCode("ButtonR2", 1006);
    public static readonly ButtonL2 = new KeyCode("ButtonL2", 1007);
    public static readonly ButtonR3 = new KeyCode("ButtonR3", 1008);
    public static readonly ButtonL3 = new KeyCode("ButtonL3", 1009);
    public static readonly ButtonStart = new KeyCode("ButtonStart", 1010);
    public static readonly ButtonSelect = new KeyCode("ButtonSelect", 1011);
    public static readonly DPadLeft = new KeyCode("DPadLeft", 1012);
    public static readonly DPadRight = new KeyCode("DPadRight", 1013);
    public static readonly DPadUp = new KeyCode("DPadUp", 1014);
    public static readonly DPadDown = new KeyCode("DPadDown", 1015);
    public static readonly Thumbstick1 = new KeyCode("Thumbstick1", 1016);
    public static readonly Thumbstick2 = new KeyCode("Thumbstick2", 1017);
    public static readonly World0 = new KeyCode("World0", 160);
    public static readonly World1 = new KeyCode("World1", 161);
    public static readonly World2 = new KeyCode("World2", 162);
    public static readonly World3 = new KeyCode("World3", 163);
    public static readonly World4 = new KeyCode("World4", 164);
    public static readonly World5 = new KeyCode("World5", 165);
    public static readonly World6 = new KeyCode("World6", 166);
    public static readonly World7 = new KeyCode("World7", 167);
    public static readonly World8 = new KeyCode("World8", 168);
    public static readonly World9 = new KeyCode("World9", 169);
    public static readonly World10 = new KeyCode("World10", 170);
    public static readonly World11 = new KeyCode("World11", 171);
    public static readonly World12 = new KeyCode("World12", 172);
    public static readonly World13 = new KeyCode("World13", 173);
    public static readonly World14 = new KeyCode("World14", 174);
    public static readonly World15 = new KeyCode("World15", 175);
    public static readonly World16 = new KeyCode("World16", 176);
    public static readonly World17 = new KeyCode("World17", 177);
    public static readonly World18 = new KeyCode("World18", 178);
    public static readonly World19 = new KeyCode("World19", 179);
    public static readonly World20 = new KeyCode("World20", 180);
    public static readonly World21 = new KeyCode("World21", 181);
    public static readonly World22 = new KeyCode("World22", 182);
    public static readonly World23 = new KeyCode("World23", 183);
    public static readonly World24 = new KeyCode("World24", 184);
    public static readonly World25 = new KeyCode("World25", 185);
    public static readonly World26 = new KeyCode("World26", 186);
    public static readonly World27 = new KeyCode("World27", 187);
    public static readonly World28 = new KeyCode("World28", 188);
    public static readonly World29 = new KeyCode("World29", 189);
    public static readonly World30 = new KeyCode("World30", 190);
    public static readonly World31 = new KeyCode("World31", 191);
    public static readonly World32 = new KeyCode("World32", 192);
    public static readonly World33 = new KeyCode("World33", 193);
    public static readonly World34 = new KeyCode("World34", 194);
    public static readonly World35 = new KeyCode("World35", 195);
    public static readonly World36 = new KeyCode("World36", 196);
    public static readonly World37 = new KeyCode("World37", 197);
    public static readonly World38 = new KeyCode("World38", 198);
    public static readonly World39 = new KeyCode("World39", 199);
    public static readonly World40 = new KeyCode("World40", 200);
    public static readonly World41 = new KeyCode("World41", 201);
    public static readonly World42 = new KeyCode("World42", 202);
    public static readonly World43 = new KeyCode("World43", 203);
    public static readonly World44 = new KeyCode("World44", 204);
    public static readonly World45 = new KeyCode("World45", 205);
    public static readonly World46 = new KeyCode("World46", 206);
    public static readonly World47 = new KeyCode("World47", 207);
    public static readonly World48 = new KeyCode("World48", 208);
    public static readonly World49 = new KeyCode("World49", 209);
    public static readonly World50 = new KeyCode("World50", 210);
    public static readonly World51 = new KeyCode("World51", 211);
    public static readonly World52 = new KeyCode("World52", 212);
    public static readonly World53 = new KeyCode("World53", 213);
    public static readonly World54 = new KeyCode("World54", 214);
    public static readonly World55 = new KeyCode("World55", 215);
    public static readonly World56 = new KeyCode("World56", 216);
    public static readonly World57 = new KeyCode("World57", 217);
    public static readonly World58 = new KeyCode("World58", 218);
    public static readonly World59 = new KeyCode("World59", 219);
    public static readonly World60 = new KeyCode("World60", 220);
    public static readonly World61 = new KeyCode("World61", 221);
    public static readonly World62 = new KeyCode("World62", 222);
    public static readonly World63 = new KeyCode("World63", 223);
    public static readonly World64 = new KeyCode("World64", 224);
    public static readonly World65 = new KeyCode("World65", 225);
    public static readonly World66 = new KeyCode("World66", 226);
    public static readonly World67 = new KeyCode("World67", 227);
    public static readonly World68 = new KeyCode("World68", 228);
    public static readonly World69 = new KeyCode("World69", 229);
    public static readonly World70 = new KeyCode("World70", 230);
    public static readonly World71 = new KeyCode("World71", 231);
    public static readonly World72 = new KeyCode("World72", 232);
    public static readonly World73 = new KeyCode("World73", 233);
    public static readonly World74 = new KeyCode("World74", 234);
    public static readonly World75 = new KeyCode("World75", 235);
    public static readonly World76 = new KeyCode("World76", 236);
    public static readonly World77 = new KeyCode("World77", 237);
    public static readonly World78 = new KeyCode("World78", 238);
    public static readonly World79 = new KeyCode("World79", 239);
    public static readonly World80 = new KeyCode("World80", 240);
    public static readonly World81 = new KeyCode("World81", 241);
    public static readonly World82 = new KeyCode("World82", 242);
    public static readonly World83 = new KeyCode("World83", 243);
    public static readonly World84 = new KeyCode("World84", 244);
    public static readonly World85 = new KeyCode("World85", 245);
    public static readonly World86 = new KeyCode("World86", 246);
    public static readonly World87 = new KeyCode("World87", 247);
    public static readonly World88 = new KeyCode("World88", 248);
    public static readonly World89 = new KeyCode("World89", 249);
    public static readonly World90 = new KeyCode("World90", 250);
    public static readonly World91 = new KeyCode("World91", 251);
    public static readonly World92 = new KeyCode("World92", 252);
    public static readonly World93 = new KeyCode("World93", 253);
    public static readonly World94 = new KeyCode("World94", 254);
    public static readonly World95 = new KeyCode("World95", 255);
    public static readonly MouseLeftButton = new KeyCode("MouseLeftButton", 1018);
    public static readonly MouseRightButton = new KeyCode("MouseRightButton", 1019);
    public static readonly MouseMiddleButton = new KeyCode("MouseMiddleButton", 1020);
    public static readonly MouseBackButton = new KeyCode("MouseBackButton", 1021);
    public static readonly MouseNoButton = new KeyCode("MouseNoButton", 1022);
    public static readonly MouseX = new KeyCode("MouseX", 1023);
    public static readonly MouseY = new KeyCode("MouseY", 1024);
    public static get Items() {return [KeyCode.Unknown, KeyCode.Backspace, KeyCode.Tab, KeyCode.Clear, KeyCode.Return, KeyCode.Pause, KeyCode.Escape, KeyCode.Space, KeyCode.QuotedDouble, KeyCode.Hash, KeyCode.Dollar, KeyCode.Percent, KeyCode.Ampersand, KeyCode.Quote, KeyCode.LeftParenthesis, KeyCode.RightParenthesis, KeyCode.Asterisk, KeyCode.Plus, KeyCode.Comma, KeyCode.Minus, KeyCode.Period, KeyCode.Slash, KeyCode.Zero, KeyCode.One, KeyCode.Two, KeyCode.Three, KeyCode.Four, KeyCode.Five, KeyCode.Six, KeyCode.Seven, KeyCode.Eight, KeyCode.Nine, KeyCode.Colon, KeyCode.Semicolon, KeyCode.LessThan, KeyCode.Equals, KeyCode.GreaterThan, KeyCode.Question, KeyCode.At, KeyCode.LeftBracket, KeyCode.BackSlash, KeyCode.RightBracket, KeyCode.Caret, KeyCode.Underscore, KeyCode.Backquote, KeyCode.A, KeyCode.B, KeyCode.C, KeyCode.D, KeyCode.E, KeyCode.F, KeyCode.G, KeyCode.H, KeyCode.I, KeyCode.J, KeyCode.K, KeyCode.L, KeyCode.M, KeyCode.N, KeyCode.O, KeyCode.P, KeyCode.Q, KeyCode.R, KeyCode.S, KeyCode.T, KeyCode.U, KeyCode.V, KeyCode.W, KeyCode.X, KeyCode.Y, KeyCode.Z, KeyCode.LeftCurly, KeyCode.Pipe, KeyCode.RightCurly, KeyCode.Tilde, KeyCode.Delete, KeyCode.KeypadZero, KeyCode.KeypadOne, KeyCode.KeypadTwo, KeyCode.KeypadThree, KeyCode.KeypadFour, KeyCode.KeypadFive, KeyCode.KeypadSix, KeyCode.KeypadSeven, KeyCode.KeypadEight, KeyCode.KeypadNine, KeyCode.KeypadPeriod, KeyCode.KeypadDivide, KeyCode.KeypadMultiply, KeyCode.KeypadMinus, KeyCode.KeypadPlus, KeyCode.KeypadEnter, KeyCode.KeypadEquals, KeyCode.Up, KeyCode.Down, KeyCode.Right, KeyCode.Left, KeyCode.Insert, KeyCode.Home, KeyCode.End, KeyCode.PageUp, KeyCode.PageDown, KeyCode.F1, KeyCode.F2, KeyCode.F3, KeyCode.F4, KeyCode.F5, KeyCode.F6, KeyCode.F7, KeyCode.F8, KeyCode.F9, KeyCode.F10, KeyCode.F11, KeyCode.F12, KeyCode.F13, KeyCode.F14, KeyCode.F15, KeyCode.NumLock, KeyCode.CapsLock, KeyCode.ScrollLock, KeyCode.RightShift, KeyCode.LeftShift, KeyCode.RightControl, KeyCode.LeftControl, KeyCode.RightAlt, KeyCode.LeftAlt, KeyCode.RightMeta, KeyCode.LeftMeta, KeyCode.LeftSuper, KeyCode.RightSuper, KeyCode.Mode, KeyCode.Compose, KeyCode.Help, KeyCode.Print, KeyCode.SysReq, KeyCode.Break, KeyCode.Menu, KeyCode.Power, KeyCode.Euro, KeyCode.Undo, KeyCode.ButtonX, KeyCode.ButtonY, KeyCode.ButtonA, KeyCode.ButtonB, KeyCode.ButtonR1, KeyCode.ButtonL1, KeyCode.ButtonR2, KeyCode.ButtonL2, KeyCode.ButtonR3, KeyCode.ButtonL3, KeyCode.ButtonStart, KeyCode.ButtonSelect, KeyCode.DPadLeft, KeyCode.DPadRight, KeyCode.DPadUp, KeyCode.DPadDown, KeyCode.Thumbstick1, KeyCode.Thumbstick2, KeyCode.World0, KeyCode.World1, KeyCode.World2, KeyCode.World3, KeyCode.World4, KeyCode.World5, KeyCode.World6, KeyCode.World7, KeyCode.World8, KeyCode.World9, KeyCode.World10, KeyCode.World11, KeyCode.World12, KeyCode.World13, KeyCode.World14, KeyCode.World15, KeyCode.World16, KeyCode.World17, KeyCode.World18, KeyCode.World19, KeyCode.World20, KeyCode.World21, KeyCode.World22, KeyCode.World23, KeyCode.World24, KeyCode.World25, KeyCode.World26, KeyCode.World27, KeyCode.World28, KeyCode.World29, KeyCode.World30, KeyCode.World31, KeyCode.World32, KeyCode.World33, KeyCode.World34, KeyCode.World35, KeyCode.World36, KeyCode.World37, KeyCode.World38, KeyCode.World39, KeyCode.World40, KeyCode.World41, KeyCode.World42, KeyCode.World43, KeyCode.World44, KeyCode.World45, KeyCode.World46, KeyCode.World47, KeyCode.World48, KeyCode.World49, KeyCode.World50, KeyCode.World51, KeyCode.World52, KeyCode.World53, KeyCode.World54, KeyCode.World55, KeyCode.World56, KeyCode.World57, KeyCode.World58, KeyCode.World59, KeyCode.World60, KeyCode.World61, KeyCode.World62, KeyCode.World63, KeyCode.World64, KeyCode.World65, KeyCode.World66, KeyCode.World67, KeyCode.World68, KeyCode.World69, KeyCode.World70, KeyCode.World71, KeyCode.World72, KeyCode.World73, KeyCode.World74, KeyCode.World75, KeyCode.World76, KeyCode.World77, KeyCode.World78, KeyCode.World79, KeyCode.World80, KeyCode.World81, KeyCode.World82, KeyCode.World83, KeyCode.World84, KeyCode.World85, KeyCode.World86, KeyCode.World87, KeyCode.World88, KeyCode.World89, KeyCode.World90, KeyCode.World91, KeyCode.World92, KeyCode.World93, KeyCode.World94, KeyCode.World95, KeyCode.MouseLeftButton, KeyCode.MouseRightButton, KeyCode.MouseMiddleButton, KeyCode.MouseBackButton, KeyCode.MouseNoButton, KeyCode.MouseX, KeyCode.MouseY];}
    public static FromValue(value: number) {return KeyCode.Items.find((item) => item._value === value);}
}

export class LeftRight extends EnumItem {
    public static readonly Left = new LeftRight("Left", 0);
    public static readonly Center = new LeftRight("Center", 1);
    public static readonly Right = new LeftRight("Right", 2);
    public static get Items() {return [LeftRight.Left, LeftRight.Center, LeftRight.Right];}
    public static FromValue(value: number) {return LeftRight.Items.find((item) => item._value === value);}
}

export class LightingStyle extends EnumItem {
    public static readonly Realistic = new LightingStyle("Realistic", 0);
    public static readonly Soft = new LightingStyle("Soft", 1);
    public static get Items() {return [LightingStyle.Realistic, LightingStyle.Soft];}
    public static FromValue(value: number) {return LightingStyle.Items.find((item) => item._value === value);}
}

export class LineJoinMode extends EnumItem {
    public static readonly Round = new LineJoinMode("Round", 0);
    public static readonly Bevel = new LineJoinMode("Bevel", 1);
    public static readonly Miter = new LineJoinMode("Miter", 2);
    public static get Items() {return [LineJoinMode.Round, LineJoinMode.Bevel, LineJoinMode.Miter];}
    public static FromValue(value: number) {return LineJoinMode.Items.find((item) => item._value === value);}
}

export class ListenerLocation extends EnumItem {
    public static readonly Default = new ListenerLocation("Default", 0);
    public static readonly None = new ListenerLocation("None", 1);
    public static readonly Character = new ListenerLocation("Character", 2);
    public static readonly Camera = new ListenerLocation("Camera", 3);
    public static get Items() {return [ListenerLocation.Default, ListenerLocation.None, ListenerLocation.Character, ListenerLocation.Camera];}
    public static FromValue(value: number) {return ListenerLocation.Items.find((item) => item._value === value);}
}

export class LoadCharacterLayeredClothing extends EnumItem {
    public static readonly Default = new LoadCharacterLayeredClothing("Default", 0);
    public static readonly Disabled = new LoadCharacterLayeredClothing("Disabled", 1);
    public static readonly Enabled = new LoadCharacterLayeredClothing("Enabled", 2);
    public static get Items() {return [LoadCharacterLayeredClothing.Default, LoadCharacterLayeredClothing.Disabled, LoadCharacterLayeredClothing.Enabled];}
    public static FromValue(value: number) {return LoadCharacterLayeredClothing.Items.find((item) => item._value === value);}
}

export class LoadDynamicHeads extends EnumItem {
    public static readonly Default = new LoadDynamicHeads("Default", 0);
    public static readonly Disabled = new LoadDynamicHeads("Disabled", 1);
    public static readonly Enabled = new LoadDynamicHeads("Enabled", 2);
    public static get Items() {return [LoadDynamicHeads.Default, LoadDynamicHeads.Disabled, LoadDynamicHeads.Enabled];}
    public static FromValue(value: number) {return LoadDynamicHeads.Items.find((item) => item._value === value);}
}

export class Material extends EnumItem {
    public static readonly Plastic = new Material("Plastic", 256);
    public static readonly SmoothPlastic = new Material("SmoothPlastic", 272);
    public static readonly Neon = new Material("Neon", 288);
    public static readonly Wood = new Material("Wood", 512);
    public static readonly WoodPlanks = new Material("WoodPlanks", 528);
    public static readonly Marble = new Material("Marble", 784);
    public static readonly Slate = new Material("Slate", 800);
    public static readonly Concrete = new Material("Concrete", 816);
    public static readonly Granite = new Material("Granite", 832);
    public static readonly Brick = new Material("Brick", 848);
    public static readonly Pebble = new Material("Pebble", 864);
    public static readonly Cobblestone = new Material("Cobblestone", 880);
    public static readonly Rock = new Material("Rock", 896);
    public static readonly Sandstone = new Material("Sandstone", 912);
    public static readonly Basalt = new Material("Basalt", 788);
    public static readonly CrackedLava = new Material("CrackedLava", 804);
    public static readonly Limestone = new Material("Limestone", 820);
    public static readonly Pavement = new Material("Pavement", 836);
    public static readonly CorrodedMetal = new Material("CorrodedMetal", 1040);
    public static readonly DiamondPlate = new Material("DiamondPlate", 1056);
    public static readonly Foil = new Material("Foil", 1072);
    public static readonly Metal = new Material("Metal", 1088);
    public static readonly Grass = new Material("Grass", 1280);
    public static readonly LeafyGrass = new Material("LeafyGrass", 1284);
    public static readonly Sand = new Material("Sand", 1296);
    public static readonly Fabric = new Material("Fabric", 1312);
    public static readonly Snow = new Material("Snow", 1328);
    public static readonly Mud = new Material("Mud", 1344);
    public static readonly Ground = new Material("Ground", 1360);
    public static readonly Asphalt = new Material("Asphalt", 1376);
    public static readonly Salt = new Material("Salt", 1392);
    public static readonly Ice = new Material("Ice", 1536);
    public static readonly Glacier = new Material("Glacier", 1552);
    public static readonly Glass = new Material("Glass", 1568);
    public static readonly ForceField = new Material("ForceField", 1584);
    public static readonly Air = new Material("Air", 1792);
    public static readonly Water = new Material("Water", 2048);
    public static readonly Cardboard = new Material("Cardboard", 2304);
    public static readonly Carpet = new Material("Carpet", 2305);
    public static readonly CeramicTiles = new Material("CeramicTiles", 2306);
    public static readonly ClayRoofTiles = new Material("ClayRoofTiles", 2307);
    public static readonly RoofShingles = new Material("RoofShingles", 2308);
    public static readonly Leather = new Material("Leather", 2309);
    public static readonly Plaster = new Material("Plaster", 2310);
    public static readonly Rubber = new Material("Rubber", 2311);
    public static get Items() {return [Material.Plastic, Material.SmoothPlastic, Material.Neon, Material.Wood, Material.WoodPlanks, Material.Marble, Material.Slate, Material.Concrete, Material.Granite, Material.Brick, Material.Pebble, Material.Cobblestone, Material.Rock, Material.Sandstone, Material.Basalt, Material.CrackedLava, Material.Limestone, Material.Pavement, Material.CorrodedMetal, Material.DiamondPlate, Material.Foil, Material.Metal, Material.Grass, Material.LeafyGrass, Material.Sand, Material.Fabric, Material.Snow, Material.Mud, Material.Ground, Material.Asphalt, Material.Salt, Material.Ice, Material.Glacier, Material.Glass, Material.ForceField, Material.Air, Material.Water, Material.Cardboard, Material.Carpet, Material.CeramicTiles, Material.ClayRoofTiles, Material.RoofShingles, Material.Leather, Material.Plaster, Material.Rubber];}
    public static FromValue(value: number) {return Material.Items.find((item) => item._value === value);}
}

export class MaterialPattern extends EnumItem {
    public static readonly Regular = new MaterialPattern("Regular", 0);
    public static readonly Organic = new MaterialPattern("Organic", 1);
    public static get Items() {return [MaterialPattern.Regular, MaterialPattern.Organic];}
    public static FromValue(value: number) {return MaterialPattern.Items.find((item) => item._value === value);}
}

export class MeshPartDetailLevel extends EnumItem {
    public static readonly DistanceBased = new MeshPartDetailLevel("DistanceBased", 0);
    public static readonly Level00 = new MeshPartDetailLevel("Level00", 1);
    public static readonly Level01 = new MeshPartDetailLevel("Level01", 2);
    public static readonly Level02 = new MeshPartDetailLevel("Level02", 3);
    public static readonly Level03 = new MeshPartDetailLevel("Level03", 4);
    public static readonly Level04 = new MeshPartDetailLevel("Level04", 5);
    public static get Items() {return [MeshPartDetailLevel.DistanceBased, MeshPartDetailLevel.Level00, MeshPartDetailLevel.Level01, MeshPartDetailLevel.Level02, MeshPartDetailLevel.Level03, MeshPartDetailLevel.Level04];}
    public static FromValue(value: number) {return MeshPartDetailLevel.Items.find((item) => item._value === value);}
}

export class MeshPartHeadsAndAccessories extends EnumItem {
    public static readonly Default = new MeshPartHeadsAndAccessories("Default", 0);
    public static readonly Disabled = new MeshPartHeadsAndAccessories("Disabled", 1);
    public static readonly Enabled = new MeshPartHeadsAndAccessories("Enabled", 2);
    public static get Items() {return [MeshPartHeadsAndAccessories.Default, MeshPartHeadsAndAccessories.Disabled, MeshPartHeadsAndAccessories.Enabled];}
    public static FromValue(value: number) {return MeshPartHeadsAndAccessories.Items.find((item) => item._value === value);}
}

export class MeshType extends EnumItem {
    public static readonly Head = new MeshType("Head", 0);
    public static readonly Torso = new MeshType("Torso", 1);
    public static readonly Wedge = new MeshType("Wedge", 2);
    public static readonly Sphere = new MeshType("Sphere", 3);
    public static readonly Cylinder = new MeshType("Cylinder", 4);
    public static readonly FileMesh = new MeshType("FileMesh", 5);
    public static readonly Brick = new MeshType("Brick", 6);
    public static readonly Prism = new MeshType("Prism", 7);
    public static readonly Pyramid = new MeshType("Pyramid", 8);
    public static readonly ParallelRamp = new MeshType("ParallelRamp", 9);
    public static readonly RightAngleRamp = new MeshType("RightAngleRamp", 10);
    public static readonly CornerWedge = new MeshType("CornerWedge", 11);
    public static get Items() {return [MeshType.Head, MeshType.Torso, MeshType.Wedge, MeshType.Sphere, MeshType.Cylinder, MeshType.FileMesh, MeshType.Brick, MeshType.Prism, MeshType.Pyramid, MeshType.ParallelRamp, MeshType.RightAngleRamp, MeshType.CornerWedge];}
    public static FromValue(value: number) {return MeshType.Items.find((item) => item._value === value);}
}

export class ModelLevelOfDetail extends EnumItem {
    public static readonly Automatic = new ModelLevelOfDetail("Automatic", 0);
    public static readonly StreamingMesh = new ModelLevelOfDetail("StreamingMesh", 1);
    public static readonly Disabled = new ModelLevelOfDetail("Disabled", 2);
    public static get Items() {return [ModelLevelOfDetail.Automatic, ModelLevelOfDetail.StreamingMesh, ModelLevelOfDetail.Disabled];}
    public static FromValue(value: number) {return ModelLevelOfDetail.Items.find((item) => item._value === value);}
}

export class ModelStreamingBehavior extends EnumItem {
    public static readonly Default = new ModelStreamingBehavior("Default", 0);
    public static readonly Legacy = new ModelStreamingBehavior("Legacy", 1);
    public static readonly Improved = new ModelStreamingBehavior("Improved", 2);
    public static get Items() {return [ModelStreamingBehavior.Default, ModelStreamingBehavior.Legacy, ModelStreamingBehavior.Improved];}
    public static FromValue(value: number) {return ModelStreamingBehavior.Items.find((item) => item._value === value);}
}

export class ModelStreamingMode extends EnumItem {
    public static readonly Default = new ModelStreamingMode("Default", 0);
    public static readonly Atomic = new ModelStreamingMode("Atomic", 1);
    public static readonly Persistent = new ModelStreamingMode("Persistent", 2);
    public static readonly PersistentPerPlayer = new ModelStreamingMode("PersistentPerPlayer", 3);
    public static readonly Nonatomic = new ModelStreamingMode("Nonatomic", 4);
    public static get Items() {return [ModelStreamingMode.Default, ModelStreamingMode.Atomic, ModelStreamingMode.Persistent, ModelStreamingMode.PersistentPerPlayer, ModelStreamingMode.Nonatomic];}
    public static FromValue(value: number) {return ModelStreamingMode.Items.find((item) => item._value === value);}
}

export class MouseBehavior extends EnumItem {
    public static readonly Default = new MouseBehavior("Default", 0);
    public static readonly LockCenter = new MouseBehavior("LockCenter", 1);
    public static readonly LockCurrentPosition = new MouseBehavior("LockCurrentPosition", 2);
    public static get Items() {return [MouseBehavior.Default, MouseBehavior.LockCenter, MouseBehavior.LockCurrentPosition];}
    public static FromValue(value: number) {return MouseBehavior.Items.find((item) => item._value === value);}
}

export class MoverConstraintRootBehaviorMode extends EnumItem {
    public static readonly Default = new MoverConstraintRootBehaviorMode("Default", 0);
    public static readonly Disabled = new MoverConstraintRootBehaviorMode("Disabled", 1);
    public static readonly Enabled = new MoverConstraintRootBehaviorMode("Enabled", 2);
    public static get Items() {return [MoverConstraintRootBehaviorMode.Default, MoverConstraintRootBehaviorMode.Disabled, MoverConstraintRootBehaviorMode.Enabled];}
    public static FromValue(value: number) {return MoverConstraintRootBehaviorMode.Items.find((item) => item._value === value);}
}

export class NameOcclusion extends EnumItem {
    public static readonly NoOcclusion = new NameOcclusion("NoOcclusion", 0);
    public static readonly EnemyOcclusion = new NameOcclusion("EnemyOcclusion", 1);
    public static readonly OccludeAll = new NameOcclusion("OccludeAll", 2);
    public static get Items() {return [NameOcclusion.NoOcclusion, NameOcclusion.EnemyOcclusion, NameOcclusion.OccludeAll];}
    public static FromValue(value: number) {return NameOcclusion.Items.find((item) => item._value === value);}
}

export class NoiseType extends EnumItem {
    public static readonly SimplexGabor = new NoiseType("SimplexGabor", 0);
    public static get Items() {return [NoiseType.SimplexGabor];}
    public static FromValue(value: number) {return NoiseType.Items.find((item) => item._value === value);}
}

export class NormalId extends EnumItem {
    public static readonly Right = new NormalId("Right", 0);
    public static readonly Top = new NormalId("Top", 1);
    public static readonly Back = new NormalId("Back", 2);
    public static readonly Left = new NormalId("Left", 3);
    public static readonly Bottom = new NormalId("Bottom", 4);
    public static readonly Front = new NormalId("Front", 5);
    public static get Items() {return [NormalId.Right, NormalId.Top, NormalId.Back, NormalId.Left, NormalId.Bottom, NormalId.Front];}
    public static FromValue(value: number) {return NormalId.Items.find((item) => item._value === value);}
}

export class OrientationAlignmentMode extends EnumItem {
    public static readonly OneAttachment = new OrientationAlignmentMode("OneAttachment", 0);
    public static readonly TwoAttachment = new OrientationAlignmentMode("TwoAttachment", 1);
    public static get Items() {return [OrientationAlignmentMode.OneAttachment, OrientationAlignmentMode.TwoAttachment];}
    public static FromValue(value: number) {return OrientationAlignmentMode.Items.find((item) => item._value === value);}
}

export class PartType extends EnumItem {
    public static readonly Ball = new PartType("Ball", 0);
    public static readonly Block = new PartType("Block", 1);
    public static readonly Cylinder = new PartType("Cylinder", 2);
    public static readonly Wedge = new PartType("Wedge", 3);
    public static readonly CornerWedge = new PartType("CornerWedge", 4);
    public static get Items() {return [PartType.Ball, PartType.Block, PartType.Cylinder, PartType.Wedge, PartType.CornerWedge];}
    public static FromValue(value: number) {return PartType.Items.find((item) => item._value === value);}
}

export class ParticleEmitterShape extends EnumItem {
    public static readonly Box = new ParticleEmitterShape("Box", 0);
    public static readonly Sphere = new ParticleEmitterShape("Sphere", 1);
    public static readonly Cylinder = new ParticleEmitterShape("Cylinder", 2);
    public static readonly Disc = new ParticleEmitterShape("Disc", 3);
    public static get Items() {return [ParticleEmitterShape.Box, ParticleEmitterShape.Sphere, ParticleEmitterShape.Cylinder, ParticleEmitterShape.Disc];}
    public static FromValue(value: number) {return ParticleEmitterShape.Items.find((item) => item._value === value);}
}

export class ParticleEmitterShapeInOut extends EnumItem {
    public static readonly Outward = new ParticleEmitterShapeInOut("Outward", 0);
    public static readonly Inward = new ParticleEmitterShapeInOut("Inward", 1);
    public static readonly InAndOut = new ParticleEmitterShapeInOut("InAndOut", 2);
    public static get Items() {return [ParticleEmitterShapeInOut.Outward, ParticleEmitterShapeInOut.Inward, ParticleEmitterShapeInOut.InAndOut];}
    public static FromValue(value: number) {return ParticleEmitterShapeInOut.Items.find((item) => item._value === value);}
}

export class ParticleEmitterShapeStyle extends EnumItem {
    public static readonly Volume = new ParticleEmitterShapeStyle("Volume", 0);
    public static readonly Surface = new ParticleEmitterShapeStyle("Surface", 1);
    public static get Items() {return [ParticleEmitterShapeStyle.Volume, ParticleEmitterShapeStyle.Surface];}
    public static FromValue(value: number) {return ParticleEmitterShapeStyle.Items.find((item) => item._value === value);}
}

export class ParticleFlipbookLayout extends EnumItem {
    public static readonly None = new ParticleFlipbookLayout("None", 0);
    public static readonly Grid2x2 = new ParticleFlipbookLayout("Grid2x2", 1);
    public static readonly Grid4x4 = new ParticleFlipbookLayout("Grid4x4", 2);
    public static readonly Grid8x8 = new ParticleFlipbookLayout("Grid8x8", 3);
    public static get Items() {return [ParticleFlipbookLayout.None, ParticleFlipbookLayout.Grid2x2, ParticleFlipbookLayout.Grid4x4, ParticleFlipbookLayout.Grid8x8];}
    public static FromValue(value: number) {return ParticleFlipbookLayout.Items.find((item) => item._value === value);}
}

export class ParticleFlipbookMode extends EnumItem {
    public static readonly Loop = new ParticleFlipbookMode("Loop", 0);
    public static readonly OneShot = new ParticleFlipbookMode("OneShot", 1);
    public static readonly PingPong = new ParticleFlipbookMode("PingPong", 2);
    public static readonly Random = new ParticleFlipbookMode("Random", 3);
    public static get Items() {return [ParticleFlipbookMode.Loop, ParticleFlipbookMode.OneShot, ParticleFlipbookMode.PingPong, ParticleFlipbookMode.Random];}
    public static FromValue(value: number) {return ParticleFlipbookMode.Items.find((item) => item._value === value);}
}

export class ParticleOrientation extends EnumItem {
    public static readonly FacingCamera = new ParticleOrientation("FacingCamera", 0);
    public static readonly FacingCameraWorldUp = new ParticleOrientation("FacingCameraWorldUp", 1);
    public static readonly VelocityParallel = new ParticleOrientation("VelocityParallel", 2);
    public static readonly VelocityPerpendicular = new ParticleOrientation("VelocityPerpendicular", 3);
    public static get Items() {return [ParticleOrientation.FacingCamera, ParticleOrientation.FacingCameraWorldUp, ParticleOrientation.VelocityParallel, ParticleOrientation.VelocityPerpendicular];}
    public static FromValue(value: number) {return ParticleOrientation.Items.find((item) => item._value === value);}
}

export class PathfindingUseImprovedSearch extends EnumItem {
    public static readonly Default = new PathfindingUseImprovedSearch("Default", 0);
    public static readonly Disabled = new PathfindingUseImprovedSearch("Disabled", 1);
    public static readonly Enabled = new PathfindingUseImprovedSearch("Enabled", 2);
    public static get Items() {return [PathfindingUseImprovedSearch.Default, PathfindingUseImprovedSearch.Disabled, PathfindingUseImprovedSearch.Enabled];}
    public static FromValue(value: number) {return PathfindingUseImprovedSearch.Items.find((item) => item._value === value);}
}

export class PhysicsSteppingMethod extends EnumItem {
    public static readonly Default = new PhysicsSteppingMethod("Default", 0);
    public static readonly Fixed = new PhysicsSteppingMethod("Fixed", 1);
    public static readonly Adaptive = new PhysicsSteppingMethod("Adaptive", 2);
    public static get Items() {return [PhysicsSteppingMethod.Default, PhysicsSteppingMethod.Fixed, PhysicsSteppingMethod.Adaptive];}
    public static FromValue(value: number) {return PhysicsSteppingMethod.Items.find((item) => item._value === value);}
}

export class PlayerCharacterDestroyBehavior extends EnumItem {
    public static readonly Default = new PlayerCharacterDestroyBehavior("Default", 0);
    public static readonly Disabled = new PlayerCharacterDestroyBehavior("Disabled", 1);
    public static readonly Enabled = new PlayerCharacterDestroyBehavior("Enabled", 2);
    public static get Items() {return [PlayerCharacterDestroyBehavior.Default, PlayerCharacterDestroyBehavior.Disabled, PlayerCharacterDestroyBehavior.Enabled];}
    public static FromValue(value: number) {return PlayerCharacterDestroyBehavior.Items.find((item) => item._value === value);}
}

export class PlayerDataLoadFailureBehavior extends EnumItem {
    public static readonly Failure = new PlayerDataLoadFailureBehavior("Failure", 0);
    public static readonly FallbackToDefault = new PlayerDataLoadFailureBehavior("FallbackToDefault", 1);
    public static readonly Kick = new PlayerDataLoadFailureBehavior("Kick", 2);
    public static get Items() {return [PlayerDataLoadFailureBehavior.Failure, PlayerDataLoadFailureBehavior.FallbackToDefault, PlayerDataLoadFailureBehavior.Kick];}
    public static FromValue(value: number) {return PlayerDataLoadFailureBehavior.Items.find((item) => item._value === value);}
}

export class PoseEasingDirection extends EnumItem {
    public static readonly In = new PoseEasingDirection("In", 0);
    public static readonly Out = new PoseEasingDirection("Out", 1);
    public static readonly InOut = new PoseEasingDirection("InOut", 2);
    public static get Items() {return [PoseEasingDirection.In, PoseEasingDirection.Out, PoseEasingDirection.InOut];}
    public static FromValue(value: number) {return PoseEasingDirection.Items.find((item) => item._value === value);}
}

export class PoseEasingStyle extends EnumItem {
    public static readonly Linear = new PoseEasingStyle("Linear", 0);
    public static readonly Constant = new PoseEasingStyle("Constant", 1);
    public static readonly Elastic = new PoseEasingStyle("Elastic", 2);
    public static readonly Cubic = new PoseEasingStyle("Cubic", 3);
    public static readonly Bounce = new PoseEasingStyle("Bounce", 4);
    public static readonly CubicV2 = new PoseEasingStyle("CubicV2", 5);
    public static get Items() {return [PoseEasingStyle.Linear, PoseEasingStyle.Constant, PoseEasingStyle.Elastic, PoseEasingStyle.Cubic, PoseEasingStyle.Bounce, PoseEasingStyle.CubicV2];}
    public static FromValue(value: number) {return PoseEasingStyle.Items.find((item) => item._value === value);}
}

export class PositionAlignmentMode extends EnumItem {
    public static readonly OneAttachment = new PositionAlignmentMode("OneAttachment", 0);
    public static readonly TwoAttachment = new PositionAlignmentMode("TwoAttachment", 1);
    public static get Items() {return [PositionAlignmentMode.OneAttachment, PositionAlignmentMode.TwoAttachment];}
    public static FromValue(value: number) {return PositionAlignmentMode.Items.find((item) => item._value === value);}
}

export class PrimalPhysicsSolver extends EnumItem {
    public static readonly Default = new PrimalPhysicsSolver("Default", 0);
    public static readonly Experimental = new PrimalPhysicsSolver("Experimental", 1);
    public static readonly Disabled = new PrimalPhysicsSolver("Disabled", 2);
    public static get Items() {return [PrimalPhysicsSolver.Default, PrimalPhysicsSolver.Experimental, PrimalPhysicsSolver.Disabled];}
    public static FromValue(value: number) {return PrimalPhysicsSolver.Items.find((item) => item._value === value);}
}

export class ProximityPromptExclusivity extends EnumItem {
    public static readonly OnePerButton = new ProximityPromptExclusivity("OnePerButton", 0);
    public static readonly OneGlobally = new ProximityPromptExclusivity("OneGlobally", 1);
    public static readonly AlwaysShow = new ProximityPromptExclusivity("AlwaysShow", 2);
    public static get Items() {return [ProximityPromptExclusivity.OnePerButton, ProximityPromptExclusivity.OneGlobally, ProximityPromptExclusivity.AlwaysShow];}
    public static FromValue(value: number) {return ProximityPromptExclusivity.Items.find((item) => item._value === value);}
}

export class ProximityPromptStyle extends EnumItem {
    public static readonly Default = new ProximityPromptStyle("Default", 0);
    public static readonly Custom = new ProximityPromptStyle("Custom", 1);
    public static get Items() {return [ProximityPromptStyle.Default, ProximityPromptStyle.Custom];}
    public static FromValue(value: number) {return ProximityPromptStyle.Items.find((item) => item._value === value);}
}

export class QualityLevel extends EnumItem {
    public static readonly Automatic = new QualityLevel("Automatic", 0);
    public static readonly Level01 = new QualityLevel("Level01", 1);
    public static readonly Level02 = new QualityLevel("Level02", 2);
    public static readonly Level03 = new QualityLevel("Level03", 3);
    public static readonly Level04 = new QualityLevel("Level04", 4);
    public static readonly Level05 = new QualityLevel("Level05", 5);
    public static readonly Level06 = new QualityLevel("Level06", 6);
    public static readonly Level07 = new QualityLevel("Level07", 7);
    public static readonly Level08 = new QualityLevel("Level08", 8);
    public static readonly Level09 = new QualityLevel("Level09", 9);
    public static readonly Level10 = new QualityLevel("Level10", 10);
    public static readonly Level11 = new QualityLevel("Level11", 11);
    public static readonly Level12 = new QualityLevel("Level12", 12);
    public static readonly Level13 = new QualityLevel("Level13", 13);
    public static readonly Level14 = new QualityLevel("Level14", 14);
    public static readonly Level15 = new QualityLevel("Level15", 15);
    public static readonly Level16 = new QualityLevel("Level16", 16);
    public static readonly Level17 = new QualityLevel("Level17", 17);
    public static readonly Level18 = new QualityLevel("Level18", 18);
    public static readonly Level19 = new QualityLevel("Level19", 19);
    public static readonly Level20 = new QualityLevel("Level20", 20);
    public static readonly Level21 = new QualityLevel("Level21", 21);
    public static get Items() {return [QualityLevel.Automatic, QualityLevel.Level01, QualityLevel.Level02, QualityLevel.Level03, QualityLevel.Level04, QualityLevel.Level05, QualityLevel.Level06, QualityLevel.Level07, QualityLevel.Level08, QualityLevel.Level09, QualityLevel.Level10, QualityLevel.Level11, QualityLevel.Level12, QualityLevel.Level13, QualityLevel.Level14, QualityLevel.Level15, QualityLevel.Level16, QualityLevel.Level17, QualityLevel.Level18, QualityLevel.Level19, QualityLevel.Level20, QualityLevel.Level21];}
    public static FromValue(value: number) {return QualityLevel.Items.find((item) => item._value === value);}
}

export class R15CollisionType extends EnumItem {
    public static readonly OuterBox = new R15CollisionType("OuterBox", 0);
    public static readonly InnerBox = new R15CollisionType("InnerBox", 1);
    public static get Items() {return [R15CollisionType.OuterBox, R15CollisionType.InnerBox];}
    public static FromValue(value: number) {return R15CollisionType.Items.find((item) => item._value === value);}
}

export class RejectCharacterDeletions extends EnumItem {
    public static readonly Default = new RejectCharacterDeletions("Default", 0);
    public static readonly Disabled = new RejectCharacterDeletions("Disabled", 1);
    public static readonly Enabled = new RejectCharacterDeletions("Enabled", 2);
    public static get Items() {return [RejectCharacterDeletions.Default, RejectCharacterDeletions.Disabled, RejectCharacterDeletions.Enabled];}
    public static FromValue(value: number) {return RejectCharacterDeletions.Items.find((item) => item._value === value);}
}

export class RenderFidelity extends EnumItem {
    public static readonly Automatic = new RenderFidelity("Automatic", 0);
    public static readonly Precise = new RenderFidelity("Precise", 1);
    public static readonly Performance = new RenderFidelity("Performance", 2);
    public static get Items() {return [RenderFidelity.Automatic, RenderFidelity.Precise, RenderFidelity.Performance];}
    public static FromValue(value: number) {return RenderFidelity.Items.find((item) => item._value === value);}
}

export class RenderingCacheOptimizationMode extends EnumItem {
    public static readonly Default = new RenderingCacheOptimizationMode("Default", 0);
    public static readonly Disabled = new RenderingCacheOptimizationMode("Disabled", 1);
    public static readonly Enabled = new RenderingCacheOptimizationMode("Enabled", 2);
    public static get Items() {return [RenderingCacheOptimizationMode.Default, RenderingCacheOptimizationMode.Disabled, RenderingCacheOptimizationMode.Enabled];}
    public static FromValue(value: number) {return RenderingCacheOptimizationMode.Items.find((item) => item._value === value);}
}

export class RenderingTestComparisonMethod extends EnumItem {
    public static readonly psnr = new RenderingTestComparisonMethod("psnr", 0);
    public static readonly diff = new RenderingTestComparisonMethod("diff", 1);
    public static get Items() {return [RenderingTestComparisonMethod.psnr, RenderingTestComparisonMethod.diff];}
    public static FromValue(value: number) {return RenderingTestComparisonMethod.Items.find((item) => item._value === value);}
}

export class ReplicateInstanceDestroySetting extends EnumItem {
    public static readonly Default = new ReplicateInstanceDestroySetting("Default", 0);
    public static readonly Disabled = new ReplicateInstanceDestroySetting("Disabled", 1);
    public static readonly Enabled = new ReplicateInstanceDestroySetting("Enabled", 2);
    public static get Items() {return [ReplicateInstanceDestroySetting.Default, ReplicateInstanceDestroySetting.Disabled, ReplicateInstanceDestroySetting.Enabled];}
    public static FromValue(value: number) {return ReplicateInstanceDestroySetting.Items.find((item) => item._value === value);}
}

export class ResamplerMode extends EnumItem {
    public static readonly Default = new ResamplerMode("Default", 0);
    public static readonly Pixelated = new ResamplerMode("Pixelated", 1);
    public static get Items() {return [ResamplerMode.Default, ResamplerMode.Pixelated];}
    public static FromValue(value: number) {return ResamplerMode.Items.find((item) => item._value === value);}
}

export class ReverbType extends EnumItem {
    public static readonly NoReverb = new ReverbType("NoReverb", 0);
    public static readonly GenericReverb = new ReverbType("GenericReverb", 1);
    public static readonly PaddedCell = new ReverbType("PaddedCell", 2);
    public static readonly Room = new ReverbType("Room", 3);
    public static readonly Bathroom = new ReverbType("Bathroom", 4);
    public static readonly LivingRoom = new ReverbType("LivingRoom", 5);
    public static readonly StoneRoom = new ReverbType("StoneRoom", 6);
    public static readonly Auditorium = new ReverbType("Auditorium", 7);
    public static readonly ConcertHall = new ReverbType("ConcertHall", 8);
    public static readonly Cave = new ReverbType("Cave", 9);
    public static readonly Arena = new ReverbType("Arena", 10);
    public static readonly Hangar = new ReverbType("Hangar", 11);
    public static readonly CarpettedHallway = new ReverbType("CarpettedHallway", 12);
    public static readonly Hallway = new ReverbType("Hallway", 13);
    public static readonly StoneCorridor = new ReverbType("StoneCorridor", 14);
    public static readonly Alley = new ReverbType("Alley", 15);
    public static readonly Forest = new ReverbType("Forest", 16);
    public static readonly City = new ReverbType("City", 17);
    public static readonly Mountains = new ReverbType("Mountains", 18);
    public static readonly Quarry = new ReverbType("Quarry", 19);
    public static readonly Plain = new ReverbType("Plain", 20);
    public static readonly ParkingLot = new ReverbType("ParkingLot", 21);
    public static readonly SewerPipe = new ReverbType("SewerPipe", 22);
    public static readonly UnderWater = new ReverbType("UnderWater", 23);
    public static get Items() {return [ReverbType.NoReverb, ReverbType.GenericReverb, ReverbType.PaddedCell, ReverbType.Room, ReverbType.Bathroom, ReverbType.LivingRoom, ReverbType.StoneRoom, ReverbType.Auditorium, ReverbType.ConcertHall, ReverbType.Cave, ReverbType.Arena, ReverbType.Hangar, ReverbType.CarpettedHallway, ReverbType.Hallway, ReverbType.StoneCorridor, ReverbType.Alley, ReverbType.Forest, ReverbType.City, ReverbType.Mountains, ReverbType.Quarry, ReverbType.Plain, ReverbType.ParkingLot, ReverbType.SewerPipe, ReverbType.UnderWater];}
    public static FromValue(value: number) {return ReverbType.Items.find((item) => item._value === value);}
}

export class RollOffMode extends EnumItem {
    public static readonly Inverse = new RollOffMode("Inverse", 0);
    public static readonly Linear = new RollOffMode("Linear", 1);
    public static readonly LinearSquare = new RollOffMode("LinearSquare", 2);
    public static readonly InverseTapered = new RollOffMode("InverseTapered", 3);
    public static get Items() {return [RollOffMode.Inverse, RollOffMode.Linear, RollOffMode.LinearSquare, RollOffMode.InverseTapered];}
    public static FromValue(value: number) {return RollOffMode.Items.find((item) => item._value === value);}
}

export class RolloutState extends EnumItem {
    public static readonly Default = new RolloutState("Default", 0);
    public static readonly Disabled = new RolloutState("Disabled", 1);
    public static readonly Enabled = new RolloutState("Enabled", 2);
    public static get Items() {return [RolloutState.Default, RolloutState.Disabled, RolloutState.Enabled];}
    public static FromValue(value: number) {return RolloutState.Items.find((item) => item._value === value);}
}

export class RotationOrder extends EnumItem {
    public static readonly XYZ = new RotationOrder("XYZ", 0);
    public static readonly XZY = new RotationOrder("XZY", 1);
    public static readonly YZX = new RotationOrder("YZX", 2);
    public static readonly YXZ = new RotationOrder("YXZ", 3);
    public static readonly ZXY = new RotationOrder("ZXY", 4);
    public static readonly ZYX = new RotationOrder("ZYX", 5);
    public static get Items() {return [RotationOrder.XYZ, RotationOrder.XZY, RotationOrder.YZX, RotationOrder.YXZ, RotationOrder.ZXY, RotationOrder.ZYX];}
    public static FromValue(value: number) {return RotationOrder.Items.find((item) => item._value === value);}
}

export class RtlTextSupport extends EnumItem {
    public static readonly Default = new RtlTextSupport("Default", 0);
    public static readonly Disabled = new RtlTextSupport("Disabled", 1);
    public static readonly Enabled = new RtlTextSupport("Enabled", 2);
    public static get Items() {return [RtlTextSupport.Default, RtlTextSupport.Disabled, RtlTextSupport.Enabled];}
    public static FromValue(value: number) {return RtlTextSupport.Items.find((item) => item._value === value);}
}

export class RunContext extends EnumItem {
    public static readonly Legacy = new RunContext("Legacy", 0);
    public static readonly Server = new RunContext("Server", 1);
    public static readonly Client = new RunContext("Client", 2);
    public static readonly Plugin = new RunContext("Plugin", 3);
    public static get Items() {return [RunContext.Legacy, RunContext.Server, RunContext.Client, RunContext.Plugin];}
    public static FromValue(value: number) {return RunContext.Items.find((item) => item._value === value);}
}

export class SafeAreaCompatibility extends EnumItem {
    public static readonly None = new SafeAreaCompatibility("None", 0);
    public static readonly FullscreenExtension = new SafeAreaCompatibility("FullscreenExtension", 1);
    public static get Items() {return [SafeAreaCompatibility.None, SafeAreaCompatibility.FullscreenExtension];}
    public static FromValue(value: number) {return SafeAreaCompatibility.Items.find((item) => item._value === value);}
}

export class SandboxedInstanceMode extends EnumItem {
    public static readonly Default = new SandboxedInstanceMode("Default", 0);
    public static readonly Experimental = new SandboxedInstanceMode("Experimental", 1);
    public static get Items() {return [SandboxedInstanceMode.Default, SandboxedInstanceMode.Experimental];}
    public static FromValue(value: number) {return SandboxedInstanceMode.Items.find((item) => item._value === value);}
}

export class ScaleType extends EnumItem {
    public static readonly Stretch = new ScaleType("Stretch", 0);
    public static readonly Slice = new ScaleType("Slice", 1);
    public static readonly Tile = new ScaleType("Tile", 2);
    public static readonly Fit = new ScaleType("Fit", 3);
    public static readonly Crop = new ScaleType("Crop", 4);
    public static get Items() {return [ScaleType.Stretch, ScaleType.Slice, ScaleType.Tile, ScaleType.Fit, ScaleType.Crop];}
    public static FromValue(value: number) {return ScaleType.Items.find((item) => item._value === value);}
}

export class ScreenInsets extends EnumItem {
    public static readonly None = new ScreenInsets("None", 0);
    public static readonly DeviceSafeInsets = new ScreenInsets("DeviceSafeInsets", 1);
    public static readonly CoreUISafeInsets = new ScreenInsets("CoreUISafeInsets", 2);
    public static readonly TopbarSafeInsets = new ScreenInsets("TopbarSafeInsets", 3);
    public static get Items() {return [ScreenInsets.None, ScreenInsets.DeviceSafeInsets, ScreenInsets.CoreUISafeInsets, ScreenInsets.TopbarSafeInsets];}
    public static FromValue(value: number) {return ScreenInsets.Items.find((item) => item._value === value);}
}

export class ScreenOrientation extends EnumItem {
    public static readonly LandscapeLeft = new ScreenOrientation("LandscapeLeft", 0);
    public static readonly LandscapeRight = new ScreenOrientation("LandscapeRight", 1);
    public static readonly LandscapeSensor = new ScreenOrientation("LandscapeSensor", 2);
    public static readonly Portrait = new ScreenOrientation("Portrait", 3);
    public static readonly Sensor = new ScreenOrientation("Sensor", 4);
    public static get Items() {return [ScreenOrientation.LandscapeLeft, ScreenOrientation.LandscapeRight, ScreenOrientation.LandscapeSensor, ScreenOrientation.Portrait, ScreenOrientation.Sensor];}
    public static FromValue(value: number) {return ScreenOrientation.Items.find((item) => item._value === value);}
}

export class ScrollBarInset extends EnumItem {
    public static readonly None = new ScrollBarInset("None", 0);
    public static readonly ScrollBar = new ScrollBarInset("ScrollBar", 1);
    public static readonly Always = new ScrollBarInset("Always", 2);
    public static get Items() {return [ScrollBarInset.None, ScrollBarInset.ScrollBar, ScrollBarInset.Always];}
    public static FromValue(value: number) {return ScrollBarInset.Items.find((item) => item._value === value);}
}

export class ScrollingDirection extends EnumItem {
    public static readonly X = new ScrollingDirection("X", 1);
    public static readonly Y = new ScrollingDirection("Y", 2);
    public static readonly XY = new ScrollingDirection("XY", 4);
    public static get Items() {return [ScrollingDirection.X, ScrollingDirection.Y, ScrollingDirection.XY];}
    public static FromValue(value: number) {return ScrollingDirection.Items.find((item) => item._value === value);}
}

export class SelectionBehavior extends EnumItem {
    public static readonly Escape = new SelectionBehavior("Escape", 0);
    public static readonly Stop = new SelectionBehavior("Stop", 1);
    public static get Items() {return [SelectionBehavior.Escape, SelectionBehavior.Stop];}
    public static FromValue(value: number) {return SelectionBehavior.Items.find((item) => item._value === value);}
}

export class SensorMode extends EnumItem {
    public static readonly Floor = new SensorMode("Floor", 0);
    public static readonly Ladder = new SensorMode("Ladder", 1);
    public static get Items() {return [SensorMode.Floor, SensorMode.Ladder];}
    public static FromValue(value: number) {return SensorMode.Items.find((item) => item._value === value);}
}

export class SensorUpdateType extends EnumItem {
    public static readonly OnRead = new SensorUpdateType("OnRead", 0);
    public static readonly Manual = new SensorUpdateType("Manual", 1);
    public static get Items() {return [SensorUpdateType.OnRead, SensorUpdateType.Manual];}
    public static FromValue(value: number) {return SensorUpdateType.Items.find((item) => item._value === value);}
}

export class ServiceVisibility extends EnumItem {
    public static readonly Always = new ServiceVisibility("Always", 0);
    public static readonly Off = new ServiceVisibility("Off", 1);
    public static readonly WithChildren = new ServiceVisibility("WithChildren", 2);
    public static get Items() {return [ServiceVisibility.Always, ServiceVisibility.Off, ServiceVisibility.WithChildren];}
    public static FromValue(value: number) {return ServiceVisibility.Items.find((item) => item._value === value);}
}

export class SignalBehavior extends EnumItem {
    public static readonly Default = new SignalBehavior("Default", 0);
    public static readonly Immediate = new SignalBehavior("Immediate", 1);
    public static readonly Deferred = new SignalBehavior("Deferred", 2);
    public static readonly AncestryDeferred = new SignalBehavior("AncestryDeferred", 3);
    public static get Items() {return [SignalBehavior.Default, SignalBehavior.Immediate, SignalBehavior.Deferred, SignalBehavior.AncestryDeferred];}
    public static FromValue(value: number) {return SignalBehavior.Items.find((item) => item._value === value);}
}

export class SizeConstraint extends EnumItem {
    public static readonly RelativeXY = new SizeConstraint("RelativeXY", 0);
    public static readonly RelativeXX = new SizeConstraint("RelativeXX", 1);
    public static readonly RelativeYY = new SizeConstraint("RelativeYY", 2);
    public static get Items() {return [SizeConstraint.RelativeXY, SizeConstraint.RelativeXX, SizeConstraint.RelativeYY];}
    public static FromValue(value: number) {return SizeConstraint.Items.find((item) => item._value === value);}
}

export class SortOrder extends EnumItem {
    public static readonly Name = new SortOrder("Name", 0);
    public static readonly Custom = new SortOrder("Custom", 1);
    public static readonly LayoutOrder = new SortOrder("LayoutOrder", 2);
    public static get Items() {return [SortOrder.Name, SortOrder.Custom, SortOrder.LayoutOrder];}
    public static FromValue(value: number) {return SortOrder.Items.find((item) => item._value === value);}
}

export class StartCorner extends EnumItem {
    public static readonly TopLeft = new StartCorner("TopLeft", 0);
    public static readonly TopRight = new StartCorner("TopRight", 1);
    public static readonly BottomLeft = new StartCorner("BottomLeft", 2);
    public static readonly BottomRight = new StartCorner("BottomRight", 3);
    public static get Items() {return [StartCorner.TopLeft, StartCorner.TopRight, StartCorner.BottomLeft, StartCorner.BottomRight];}
    public static FromValue(value: number) {return StartCorner.Items.find((item) => item._value === value);}
}

export class StreamOutBehavior extends EnumItem {
    public static readonly Default = new StreamOutBehavior("Default", 0);
    public static readonly LowMemory = new StreamOutBehavior("LowMemory", 1);
    public static readonly Opportunistic = new StreamOutBehavior("Opportunistic", 2);
    public static get Items() {return [StreamOutBehavior.Default, StreamOutBehavior.LowMemory, StreamOutBehavior.Opportunistic];}
    public static FromValue(value: number) {return StreamOutBehavior.Items.find((item) => item._value === value);}
}

export class StreamingIntegrityMode extends EnumItem {
    public static readonly Default = new StreamingIntegrityMode("Default", 0);
    public static readonly Disabled = new StreamingIntegrityMode("Disabled", 1);
    public static readonly MinimumRadiusPause = new StreamingIntegrityMode("MinimumRadiusPause", 2);
    public static readonly PauseOutsideLoadedArea = new StreamingIntegrityMode("PauseOutsideLoadedArea", 3);
    public static get Items() {return [StreamingIntegrityMode.Default, StreamingIntegrityMode.Disabled, StreamingIntegrityMode.MinimumRadiusPause, StreamingIntegrityMode.PauseOutsideLoadedArea];}
    public static FromValue(value: number) {return StreamingIntegrityMode.Items.find((item) => item._value === value);}
}

export class Style extends EnumItem {
    public static readonly AlternatingSupports = new Style("AlternatingSupports", 0);
    public static readonly BridgeStyleSupports = new Style("BridgeStyleSupports", 1);
    public static readonly NoSupports = new Style("NoSupports", 2);
    public static get Items() {return [Style.AlternatingSupports, Style.BridgeStyleSupports, Style.NoSupports];}
    public static FromValue(value: number) {return Style.Items.find((item) => item._value === value);}
}

export class SurfaceGuiSizingMode extends EnumItem {
    public static readonly FixedSize = new SurfaceGuiSizingMode("FixedSize", 0);
    public static readonly PixelsPerStud = new SurfaceGuiSizingMode("PixelsPerStud", 1);
    public static get Items() {return [SurfaceGuiSizingMode.FixedSize, SurfaceGuiSizingMode.PixelsPerStud];}
    public static FromValue(value: number) {return SurfaceGuiSizingMode.Items.find((item) => item._value === value);}
}

export class SurfaceType extends EnumItem {
    public static readonly Smooth = new SurfaceType("Smooth", 0);
    public static readonly Glue = new SurfaceType("Glue", 1);
    public static readonly Weld = new SurfaceType("Weld", 2);
    public static readonly Studs = new SurfaceType("Studs", 3);
    public static readonly Inlet = new SurfaceType("Inlet", 4);
    public static readonly Universal = new SurfaceType("Universal", 5);
    public static readonly Hinge = new SurfaceType("Hinge", 6);
    public static readonly Motor = new SurfaceType("Motor", 7);
    public static readonly SteppingMotor = new SurfaceType("SteppingMotor", 8);
    public static readonly SmoothNoOutlines = new SurfaceType("SmoothNoOutlines", 10);
    public static get Items() {return [SurfaceType.Smooth, SurfaceType.Glue, SurfaceType.Weld, SurfaceType.Studs, SurfaceType.Inlet, SurfaceType.Universal, SurfaceType.Hinge, SurfaceType.Motor, SurfaceType.SteppingMotor, SurfaceType.SmoothNoOutlines];}
    public static FromValue(value: number) {return SurfaceType.Items.find((item) => item._value === value);}
}

export class TableMajorAxis extends EnumItem {
    public static readonly RowMajor = new TableMajorAxis("RowMajor", 0);
    public static readonly ColumnMajor = new TableMajorAxis("ColumnMajor", 1);
    public static get Items() {return [TableMajorAxis.RowMajor, TableMajorAxis.ColumnMajor];}
    public static FromValue(value: number) {return TableMajorAxis.Items.find((item) => item._value === value);}
}

export class Technology extends EnumItem {
    public static readonly Voxel = new Technology("Voxel", 1);
    public static readonly Compatibility = new Technology("Compatibility", 2);
    public static readonly ShadowMap = new Technology("ShadowMap", 3);
    public static readonly Future = new Technology("Future", 4);
    public static readonly Legacy = new Technology("Legacy", 0);
    public static readonly Unified = new Technology("Unified", 5);
    public static get Items() {return [Technology.Voxel, Technology.Compatibility, Technology.ShadowMap, Technology.Future, Technology.Legacy, Technology.Unified];}
    public static FromValue(value: number) {return Technology.Items.find((item) => item._value === value);}
}

export class TerrainAcquisitionMethod extends EnumItem {
    public static readonly None = new TerrainAcquisitionMethod("None", 0);
    public static readonly Legacy = new TerrainAcquisitionMethod("Legacy", 1);
    public static readonly Template = new TerrainAcquisitionMethod("Template", 2);
    public static readonly Generate = new TerrainAcquisitionMethod("Generate", 3);
    public static readonly Import = new TerrainAcquisitionMethod("Import", 4);
    public static readonly Convert = new TerrainAcquisitionMethod("Convert", 5);
    public static readonly EditAddTool = new TerrainAcquisitionMethod("EditAddTool", 6);
    public static readonly EditSeaLevelTool = new TerrainAcquisitionMethod("EditSeaLevelTool", 7);
    public static readonly EditReplaceTool = new TerrainAcquisitionMethod("EditReplaceTool", 8);
    public static readonly RegionFillTool = new TerrainAcquisitionMethod("RegionFillTool", 9);
    public static readonly RegionPasteTool = new TerrainAcquisitionMethod("RegionPasteTool", 10);
    public static readonly Other = new TerrainAcquisitionMethod("Other", 11);
    public static get Items() {return [TerrainAcquisitionMethod.None, TerrainAcquisitionMethod.Legacy, TerrainAcquisitionMethod.Template, TerrainAcquisitionMethod.Generate, TerrainAcquisitionMethod.Import, TerrainAcquisitionMethod.Convert, TerrainAcquisitionMethod.EditAddTool, TerrainAcquisitionMethod.EditSeaLevelTool, TerrainAcquisitionMethod.EditReplaceTool, TerrainAcquisitionMethod.RegionFillTool, TerrainAcquisitionMethod.RegionPasteTool, TerrainAcquisitionMethod.Other];}
    public static FromValue(value: number) {return TerrainAcquisitionMethod.Items.find((item) => item._value === value);}
}

export class TerrainFace extends EnumItem {
    public static readonly Top = new TerrainFace("Top", 0);
    public static readonly Side = new TerrainFace("Side", 1);
    public static readonly Bottom = new TerrainFace("Bottom", 2);
    public static get Items() {return [TerrainFace.Top, TerrainFace.Side, TerrainFace.Bottom];}
    public static FromValue(value: number) {return TerrainFace.Items.find((item) => item._value === value);}
}

export class TextDirection extends EnumItem {
    public static readonly Auto = new TextDirection("Auto", 0);
    public static readonly LeftToRight = new TextDirection("LeftToRight", 1);
    public static readonly RightToLeft = new TextDirection("RightToLeft", 2);
    public static get Items() {return [TextDirection.Auto, TextDirection.LeftToRight, TextDirection.RightToLeft];}
    public static FromValue(value: number) {return TextDirection.Items.find((item) => item._value === value);}
}

export class TextTruncate extends EnumItem {
    public static readonly None = new TextTruncate("None", 0);
    public static readonly AtEnd = new TextTruncate("AtEnd", 1);
    public static readonly SplitWord = new TextTruncate("SplitWord", 2);
    public static get Items() {return [TextTruncate.None, TextTruncate.AtEnd, TextTruncate.SplitWord];}
    public static FromValue(value: number) {return TextTruncate.Items.find((item) => item._value === value);}
}

export class TextXAlignment extends EnumItem {
    public static readonly Left = new TextXAlignment("Left", 0);
    public static readonly Right = new TextXAlignment("Right", 1);
    public static readonly Center = new TextXAlignment("Center", 2);
    public static get Items() {return [TextXAlignment.Left, TextXAlignment.Right, TextXAlignment.Center];}
    public static FromValue(value: number) {return TextXAlignment.Items.find((item) => item._value === value);}
}

export class TextYAlignment extends EnumItem {
    public static readonly Top = new TextYAlignment("Top", 0);
    public static readonly Center = new TextYAlignment("Center", 1);
    public static readonly Bottom = new TextYAlignment("Bottom", 2);
    public static get Items() {return [TextYAlignment.Top, TextYAlignment.Center, TextYAlignment.Bottom];}
    public static FromValue(value: number) {return TextYAlignment.Items.find((item) => item._value === value);}
}

export class TextureMode extends EnumItem {
    public static readonly Stretch = new TextureMode("Stretch", 0);
    public static readonly Wrap = new TextureMode("Wrap", 1);
    public static readonly Static = new TextureMode("Static", 2);
    public static get Items() {return [TextureMode.Stretch, TextureMode.Wrap, TextureMode.Static];}
    public static FromValue(value: number) {return TextureMode.Items.find((item) => item._value === value);}
}

export class ThreadPoolConfig extends EnumItem {
    public static readonly PerCore4 = new ThreadPoolConfig("PerCore4", 104);
    public static readonly PerCore3 = new ThreadPoolConfig("PerCore3", 103);
    public static readonly PerCore2 = new ThreadPoolConfig("PerCore2", 102);
    public static readonly PerCore1 = new ThreadPoolConfig("PerCore1", 101);
    public static readonly Auto = new ThreadPoolConfig("Auto", 0);
    public static readonly Threads1 = new ThreadPoolConfig("Threads1", 1);
    public static readonly Threads2 = new ThreadPoolConfig("Threads2", 2);
    public static readonly Threads3 = new ThreadPoolConfig("Threads3", 3);
    public static readonly Threads4 = new ThreadPoolConfig("Threads4", 4);
    public static readonly Threads8 = new ThreadPoolConfig("Threads8", 8);
    public static readonly Threads16 = new ThreadPoolConfig("Threads16", 16);
    public static get Items() {return [ThreadPoolConfig.PerCore4, ThreadPoolConfig.PerCore3, ThreadPoolConfig.PerCore2, ThreadPoolConfig.PerCore1, ThreadPoolConfig.Auto, ThreadPoolConfig.Threads1, ThreadPoolConfig.Threads2, ThreadPoolConfig.Threads3, ThreadPoolConfig.Threads4, ThreadPoolConfig.Threads8, ThreadPoolConfig.Threads16];}
    public static FromValue(value: number) {return ThreadPoolConfig.Items.find((item) => item._value === value);}
}

export class TonemapperPreset extends EnumItem {
    public static readonly Default = new TonemapperPreset("Default", 0);
    public static readonly Retro = new TonemapperPreset("Retro", 1);
    public static get Items() {return [TonemapperPreset.Default, TonemapperPreset.Retro];}
    public static FromValue(value: number) {return TonemapperPreset.Items.find((item) => item._value === value);}
}

export class TopBottom extends EnumItem {
    public static readonly Top = new TopBottom("Top", 0);
    public static readonly Center = new TopBottom("Center", 1);
    public static readonly Bottom = new TopBottom("Bottom", 2);
    public static get Items() {return [TopBottom.Top, TopBottom.Center, TopBottom.Bottom];}
    public static FromValue(value: number) {return TopBottom.Items.find((item) => item._value === value);}
}

export class TriStateBoolean extends EnumItem {
    public static readonly False = new TriStateBoolean("False", 2);
    public static readonly True = new TriStateBoolean("True", 1);
    public static readonly Unknown = new TriStateBoolean("Unknown", 0);
    public static get Items() {return [TriStateBoolean.False, TriStateBoolean.True, TriStateBoolean.Unknown];}
    public static FromValue(value: number) {return TriStateBoolean.Items.find((item) => item._value === value);}
}

export class UIDragDetectorBoundingBehavior extends EnumItem {
    public static readonly Automatic = new UIDragDetectorBoundingBehavior("Automatic", 0);
    public static readonly EntireObject = new UIDragDetectorBoundingBehavior("EntireObject", 1);
    public static readonly HitPoint = new UIDragDetectorBoundingBehavior("HitPoint", 2);
    public static get Items() {return [UIDragDetectorBoundingBehavior.Automatic, UIDragDetectorBoundingBehavior.EntireObject, UIDragDetectorBoundingBehavior.HitPoint];}
    public static FromValue(value: number) {return UIDragDetectorBoundingBehavior.Items.find((item) => item._value === value);}
}

export class UIDragDetectorDragRelativity extends EnumItem {
    public static readonly Absolute = new UIDragDetectorDragRelativity("Absolute", 0);
    public static readonly Relative = new UIDragDetectorDragRelativity("Relative", 1);
    public static get Items() {return [UIDragDetectorDragRelativity.Absolute, UIDragDetectorDragRelativity.Relative];}
    public static FromValue(value: number) {return UIDragDetectorDragRelativity.Items.find((item) => item._value === value);}
}

export class UIDragDetectorDragSpace extends EnumItem {
    public static readonly Parent = new UIDragDetectorDragSpace("Parent", 0);
    public static readonly LayerCollector = new UIDragDetectorDragSpace("LayerCollector", 1);
    public static readonly Reference = new UIDragDetectorDragSpace("Reference", 2);
    public static get Items() {return [UIDragDetectorDragSpace.Parent, UIDragDetectorDragSpace.LayerCollector, UIDragDetectorDragSpace.Reference];}
    public static FromValue(value: number) {return UIDragDetectorDragSpace.Items.find((item) => item._value === value);}
}

export class UIDragDetectorDragStyle extends EnumItem {
    public static readonly TranslatePlane = new UIDragDetectorDragStyle("TranslatePlane", 0);
    public static readonly TranslateLine = new UIDragDetectorDragStyle("TranslateLine", 1);
    public static readonly Rotate = new UIDragDetectorDragStyle("Rotate", 2);
    public static readonly Scriptable = new UIDragDetectorDragStyle("Scriptable", 3);
    public static get Items() {return [UIDragDetectorDragStyle.TranslatePlane, UIDragDetectorDragStyle.TranslateLine, UIDragDetectorDragStyle.Rotate, UIDragDetectorDragStyle.Scriptable];}
    public static FromValue(value: number) {return UIDragDetectorDragStyle.Items.find((item) => item._value === value);}
}

export class UIDragDetectorResponseStyle extends EnumItem {
    public static readonly Offset = new UIDragDetectorResponseStyle("Offset", 0);
    public static readonly Scale = new UIDragDetectorResponseStyle("Scale", 1);
    public static readonly CustomOffset = new UIDragDetectorResponseStyle("CustomOffset", 2);
    public static readonly CustomScale = new UIDragDetectorResponseStyle("CustomScale", 3);
    public static get Items() {return [UIDragDetectorResponseStyle.Offset, UIDragDetectorResponseStyle.Scale, UIDragDetectorResponseStyle.CustomOffset, UIDragDetectorResponseStyle.CustomScale];}
    public static FromValue(value: number) {return UIDragDetectorResponseStyle.Items.find((item) => item._value === value);}
}

export class UIDragSpeedAxisMapping extends EnumItem {
    public static readonly XY = new UIDragSpeedAxisMapping("XY", 0);
    public static readonly XX = new UIDragSpeedAxisMapping("XX", 1);
    public static readonly YY = new UIDragSpeedAxisMapping("YY", 2);
    public static get Items() {return [UIDragSpeedAxisMapping.XY, UIDragSpeedAxisMapping.XX, UIDragSpeedAxisMapping.YY];}
    public static FromValue(value: number) {return UIDragSpeedAxisMapping.Items.find((item) => item._value === value);}
}

export class UIFlexAlignment extends EnumItem {
    public static readonly None = new UIFlexAlignment("None", 0);
    public static readonly Fill = new UIFlexAlignment("Fill", 1);
    public static readonly SpaceAround = new UIFlexAlignment("SpaceAround", 2);
    public static readonly SpaceBetween = new UIFlexAlignment("SpaceBetween", 3);
    public static readonly SpaceEvenly = new UIFlexAlignment("SpaceEvenly", 4);
    public static get Items() {return [UIFlexAlignment.None, UIFlexAlignment.Fill, UIFlexAlignment.SpaceAround, UIFlexAlignment.SpaceBetween, UIFlexAlignment.SpaceEvenly];}
    public static FromValue(value: number) {return UIFlexAlignment.Items.find((item) => item._value === value);}
}

export class UIFlexMode extends EnumItem {
    public static readonly None = new UIFlexMode("None", 0);
    public static readonly Grow = new UIFlexMode("Grow", 1);
    public static readonly Shrink = new UIFlexMode("Shrink", 2);
    public static readonly Fill = new UIFlexMode("Fill", 3);
    public static readonly Custom = new UIFlexMode("Custom", 4);
    public static get Items() {return [UIFlexMode.None, UIFlexMode.Grow, UIFlexMode.Shrink, UIFlexMode.Fill, UIFlexMode.Custom];}
    public static FromValue(value: number) {return UIFlexMode.Items.find((item) => item._value === value);}
}

export class VRControllerModelMode extends EnumItem {
    public static readonly Disabled = new VRControllerModelMode("Disabled", 0);
    public static readonly Transparent = new VRControllerModelMode("Transparent", 1);
    public static get Items() {return [VRControllerModelMode.Disabled, VRControllerModelMode.Transparent];}
    public static FromValue(value: number) {return VRControllerModelMode.Items.find((item) => item._value === value);}
}

export class VRLaserPointerMode extends EnumItem {
    public static readonly Disabled = new VRLaserPointerMode("Disabled", 0);
    public static readonly Pointer = new VRLaserPointerMode("Pointer", 1);
    public static readonly DualPointer = new VRLaserPointerMode("DualPointer", 2);
    public static get Items() {return [VRLaserPointerMode.Disabled, VRLaserPointerMode.Pointer, VRLaserPointerMode.DualPointer];}
    public static FromValue(value: number) {return VRLaserPointerMode.Items.find((item) => item._value === value);}
}

export class VRScaling extends EnumItem {
    public static readonly World = new VRScaling("World", 0);
    public static readonly Off = new VRScaling("Off", 1);
    public static get Items() {return [VRScaling.World, VRScaling.Off];}
    public static FromValue(value: number) {return VRScaling.Items.find((item) => item._value === value);}
}

export class VelocityConstraintMode extends EnumItem {
    public static readonly Line = new VelocityConstraintMode("Line", 0);
    public static readonly Plane = new VelocityConstraintMode("Plane", 1);
    public static readonly Vector = new VelocityConstraintMode("Vector", 2);
    public static get Items() {return [VelocityConstraintMode.Line, VelocityConstraintMode.Plane, VelocityConstraintMode.Vector];}
    public static FromValue(value: number) {return VelocityConstraintMode.Items.find((item) => item._value === value);}
}

export class VerticalAlignment extends EnumItem {
    public static readonly Center = new VerticalAlignment("Center", 0);
    public static readonly Top = new VerticalAlignment("Top", 1);
    public static readonly Bottom = new VerticalAlignment("Bottom", 2);
    public static get Items() {return [VerticalAlignment.Center, VerticalAlignment.Top, VerticalAlignment.Bottom];}
    public static FromValue(value: number) {return VerticalAlignment.Items.find((item) => item._value === value);}
}

export class VerticalScrollBarPosition extends EnumItem {
    public static readonly Right = new VerticalScrollBarPosition("Right", 0);
    public static readonly Left = new VerticalScrollBarPosition("Left", 1);
    public static get Items() {return [VerticalScrollBarPosition.Right, VerticalScrollBarPosition.Left];}
    public static FromValue(value: number) {return VerticalScrollBarPosition.Items.find((item) => item._value === value);}
}

export class VideoDeviceCaptureQuality extends EnumItem {
    public static readonly Default = new VideoDeviceCaptureQuality("Default", 0);
    public static readonly Low = new VideoDeviceCaptureQuality("Low", 1);
    public static readonly Medium = new VideoDeviceCaptureQuality("Medium", 2);
    public static readonly High = new VideoDeviceCaptureQuality("High", 3);
    public static get Items() {return [VideoDeviceCaptureQuality.Default, VideoDeviceCaptureQuality.Low, VideoDeviceCaptureQuality.Medium, VideoDeviceCaptureQuality.High];}
    public static FromValue(value: number) {return VideoDeviceCaptureQuality.Items.find((item) => item._value === value);}
}

export class ViewMode extends EnumItem {
    public static readonly None = new ViewMode("None", 0);
    public static readonly GeometryComplexity = new ViewMode("GeometryComplexity", 1);
    public static readonly Transparent = new ViewMode("Transparent", 2);
    public static readonly Decal = new ViewMode("Decal", 3);
    public static get Items() {return [ViewMode.None, ViewMode.GeometryComplexity, ViewMode.Transparent, ViewMode.Decal];}
    public static FromValue(value: number) {return ViewMode.Items.find((item) => item._value === value);}
}

export class VirtualCursorMode extends EnumItem {
    public static readonly Default = new VirtualCursorMode("Default", 0);
    public static readonly Disabled = new VirtualCursorMode("Disabled", 1);
    public static readonly Enabled = new VirtualCursorMode("Enabled", 2);
    public static get Items() {return [VirtualCursorMode.Default, VirtualCursorMode.Disabled, VirtualCursorMode.Enabled];}
    public static FromValue(value: number) {return VirtualCursorMode.Items.find((item) => item._value === value);}
}

export class VoiceChatDistanceAttenuationType extends EnumItem {
    public static readonly Inverse = new VoiceChatDistanceAttenuationType("Inverse", 0);
    public static readonly Legacy = new VoiceChatDistanceAttenuationType("Legacy", 1);
    public static get Items() {return [VoiceChatDistanceAttenuationType.Inverse, VoiceChatDistanceAttenuationType.Legacy];}
    public static FromValue(value: number) {return VoiceChatDistanceAttenuationType.Items.find((item) => item._value === value);}
}

export class VolumetricAudio extends EnumItem {
    public static readonly Disabled = new VolumetricAudio("Disabled", 0);
    public static readonly Automatic = new VolumetricAudio("Automatic", 1);
    public static readonly Enabled = new VolumetricAudio("Enabled", 2);
    public static get Items() {return [VolumetricAudio.Disabled, VolumetricAudio.Automatic, VolumetricAudio.Enabled];}
    public static FromValue(value: number) {return VolumetricAudio.Items.find((item) => item._value === value);}
}

export class WrapLayerAutoSkin extends EnumItem {
    public static readonly Disabled = new WrapLayerAutoSkin("Disabled", 0);
    public static readonly EnabledPreserve = new WrapLayerAutoSkin("EnabledPreserve", 1);
    public static readonly EnabledOverride = new WrapLayerAutoSkin("EnabledOverride", 2);
    public static get Items() {return [WrapLayerAutoSkin.Disabled, WrapLayerAutoSkin.EnabledPreserve, WrapLayerAutoSkin.EnabledOverride];}
    public static FromValue(value: number) {return WrapLayerAutoSkin.Items.find((item) => item._value === value);}
}

export class ZIndexBehavior extends EnumItem {
    public static readonly Global = new ZIndexBehavior("Global", 0);
    public static readonly Sibling = new ZIndexBehavior("Sibling", 1);
    public static get Items() {return [ZIndexBehavior.Global, ZIndexBehavior.Sibling];}
    public static FromValue(value: number) {return ZIndexBehavior.Items.find((item) => item._value === value);}
}

export type EnumFactory = (value: number) => EnumItem | undefined

export class EnumMap {
    protected readonly _map: Map<string, EnumFactory> = getEnumMap();
    public getFactory(className: string, propName: string): EnumFactory | undefined {
        return this._map.get(`${className},${propName}`);
    }
}

function getEnumMap() {
    const map = new Map<string, EnumFactory>();
    map.set("AccessoryDescription,AccessoryType", AccessoryType.FromValue);
    map.set("Accessory,AccessoryType", AccessoryType.FromValue);
    map.set("AnimationClip,Priority", AnimationPriority.FromValue);
    map.set("AudioAnalyzer,WindowSize", AudioWindowSize.FromValue);
    map.set("AudioChannelMixer,Layout", AudioChannelLayout.FromValue);
    map.set("AudioChannelSplitter,Layout", AudioChannelLayout.FromValue);
    map.set("AudioDeviceInput,AccessType", AccessModifierType.FromValue);
    map.set("AudioEmitter,SimulationFidelity", AudioSimulationFidelity.FromValue);
    map.set("AudioFilter,FilterType", AudioFilterType.FromValue);
    map.set("AudioListener,SimulationFidelity", AudioSimulationFidelity.FromValue);
    map.set("AudioPitchShifter,WindowSize", AudioWindowSize.FromValue);
    map.set("AudioSearchParams,AudioSubType", AudioSubType.FromValue);
    map.set("AudioSearchParams,AudioSubtype", AudioSubType.FromValue);
    map.set("AvatarAccessoryRules,AccessoryMode", AvatarSettingsAccessoryMode.FromValue);
    map.set("AvatarAccessoryRules,CustomAccessoryMode", AvatarSettingsCustomAccessoryMode.FromValue);
    map.set("AvatarAccessoryRules,LimitMethod", AvatarSettingsAccessoryLimitMethod.FromValue);
    map.set("AvatarAnimationRules,AnimationClipsMode", AvatarSettingsAnimationClipsMode.FromValue);
    map.set("AvatarAnimationRules,AnimationPacksMode", AvatarSettingsAnimationPacksMode.FromValue);
    map.set("AvatarBodyRules,AppearanceMode", AvatarSettingsAppearanceMode.FromValue);
    map.set("AvatarBodyRules,BuildMode", AvatarSettingsBuildMode.FromValue);
    map.set("AvatarBodyRules,CustomBodyType", AvatarSettingsCustomBodyType.FromValue);
    map.set("AvatarBodyRules,ScaleMode", AvatarSettingsScaleMode.FromValue);
    map.set("AvatarClothingRules,ClothingMode", AvatarSettingsClothingMode.FromValue);
    map.set("AvatarClothingRules,CustomClothingMode", AvatarSettingsCustomClothingMode.FromValue);
    map.set("AvatarCollisionRules,CollisionMode", AvatarSettingsCollisionMode.FromValue);
    map.set("AvatarCollisionRules,HitAndTouchDetectionMode", AvatarSettingsHitAndTouchDetectionMode.FromValue);
    map.set("AvatarCollisionRules,LegacyCollisionMode", AvatarSettingsLegacyCollisionMode.FromValue);
    map.set("AvatarRules,AvatarType", GameAvatarType.FromValue);
    map.set("StarterGui,RtlTextSupport", RtlTextSupport.FromValue);
    map.set("StarterGui,ScreenOrientation", ScreenOrientation.FromValue);
    map.set("StarterGui,VirtualCursorMode", VirtualCursorMode.FromValue);
    map.set("WrapLayer,AutoSkin", WrapLayerAutoSkin.FromValue);
    map.set("Beam,TextureMode", TextureMode.FromValue);
    map.set("BodyPartDescription,BodyPart", BodyPart.FromValue);
    map.set("CharacterMesh,BodyPart", BodyPart.FromValue);
    map.set("DragDetector,DragStyle", DragDetectorDragStyle.FromValue);
    map.set("DragDetector,GamepadModeSwitchKeyCode", KeyCode.FromValue);
    map.set("DragDetector,KeyboardModeSwitchKeyCode", KeyCode.FromValue);
    map.set("DragDetector,PermissionPolicy", DragDetectorPermissionPolicy.FromValue);
    map.set("DragDetector,ResponseStyle", DragDetectorResponseStyle.FromValue);
    map.set("DragDetector,VRSwitchKeyCode", KeyCode.FromValue);
    map.set("AlignOrientation,AlignType", AlignType.FromValue);
    map.set("AlignOrientation,Mode", OrientationAlignmentMode.FromValue);
    map.set("AlignPosition,ForceLimitMode", ForceLimitMode.FromValue);
    map.set("AlignPosition,ForceRelativeTo", ActuatorRelativeTo.FromValue);
    map.set("AlignPosition,Mode", PositionAlignmentMode.FromValue);
    map.set("AngularVelocity,RelativeTo", ActuatorRelativeTo.FromValue);
    map.set("HingeConstraint,ActuatorType", ActuatorType.FromValue);
    map.set("LinearVelocity,ForceLimitMode", ForceLimitMode.FromValue);
    map.set("LinearVelocity,RelativeTo", ActuatorRelativeTo.FromValue);
    map.set("LinearVelocity,VelocityConstraintMode", VelocityConstraintMode.FromValue);
    map.set("SlidingBallConstraint,ActuatorType", ActuatorType.FromValue);
    map.set("CylindricalConstraint,AngularActuatorType", ActuatorType.FromValue);
    map.set("Torque,RelativeTo", ActuatorRelativeTo.FromValue);
    map.set("VectorForce,RelativeTo", ActuatorRelativeTo.FromValue);
    map.set("SpecialMesh,MeshType", MeshType.FromValue);
    map.set("Dialog,BehaviorType", DialogBehaviorType.FromValue);
    map.set("Dialog,Purpose", DialogPurpose.FromValue);
    map.set("Dialog,Tone", DialogTone.FromValue);
    map.set("EulerRotationCurve,RotationOrder", RotationOrder.FromValue);
    map.set("Explosion,ExplosionType", ExplosionType.FromValue);
    map.set("FaceInstance,Face", NormalId.FromValue);
    map.set("Feature,FaceId", NormalId.FromValue);
    map.set("Feature,InOut", InOut.FromValue);
    map.set("Feature,LeftRight", LeftRight.FromValue);
    map.set("Feature,TopBottom", TopBottom.FromValue);
    map.set("GuiBase2d,SelectionBehaviorDown", SelectionBehavior.FromValue);
    map.set("GuiBase2d,SelectionBehaviorLeft", SelectionBehavior.FromValue);
    map.set("GuiBase2d,SelectionBehaviorRight", SelectionBehavior.FromValue);
    map.set("GuiBase2d,SelectionBehaviorUp", SelectionBehavior.FromValue);
    map.set("GuiObject,AutomaticSize", AutomaticSize.FromValue);
    map.set("GuiObject,BorderMode", BorderMode.FromValue);
    map.set("GuiObject,SizeConstraint", SizeConstraint.FromValue);
    map.set("Frame,Style", FrameStyle.FromValue);
    map.set("GuiButton,Style", ButtonStyle.FromValue);
    map.set("ImageButton,ResampleMode", ResamplerMode.FromValue);
    map.set("ImageButton,ScaleType", ScaleType.FromValue);
    map.set("TextButton,FontSize", FontSize.FromValue);
    map.set("TextButton,TextDirection", TextDirection.FromValue);
    map.set("TextButton,TextTruncate", TextTruncate.FromValue);
    map.set("TextButton,TextXAlignment", TextXAlignment.FromValue);
    map.set("TextButton,TextYAlignment", TextYAlignment.FromValue);
    map.set("ImageLabel,ResampleMode", ResamplerMode.FromValue);
    map.set("ImageLabel,ScaleType", ScaleType.FromValue);
    map.set("TextLabel,FontSize", FontSize.FromValue);
    map.set("TextLabel,TextDirection", TextDirection.FromValue);
    map.set("TextLabel,TextTruncate", TextTruncate.FromValue);
    map.set("TextLabel,TextXAlignment", TextXAlignment.FromValue);
    map.set("TextLabel,TextYAlignment", TextYAlignment.FromValue);
    map.set("ScrollingFrame,AutomaticCanvasSize", AutomaticSize.FromValue);
    map.set("ScrollingFrame,ElasticBehavior", ElasticBehavior.FromValue);
    map.set("ScrollingFrame,HorizontalScrollBarInset", ScrollBarInset.FromValue);
    map.set("ScrollingFrame,ScrollingDirection", ScrollingDirection.FromValue);
    map.set("ScrollingFrame,VerticalScrollBarInset", ScrollBarInset.FromValue);
    map.set("ScrollingFrame,VerticalScrollBarPosition", VerticalScrollBarPosition.FromValue);
    map.set("TextBox,FontSize", FontSize.FromValue);
    map.set("TextBox,TextDirection", TextDirection.FromValue);
    map.set("TextBox,TextTruncate", TextTruncate.FromValue);
    map.set("TextBox,TextXAlignment", TextXAlignment.FromValue);
    map.set("TextBox,TextYAlignment", TextYAlignment.FromValue);
    map.set("VideoDisplay,ResampleMode", ResamplerMode.FromValue);
    map.set("VideoDisplay,ScaleType", ScaleType.FromValue);
    map.set("LayerCollector,ZIndexBehavior", ZIndexBehavior.FromValue);
    map.set("ScreenGui,SafeAreaCompatibility", SafeAreaCompatibility.FromValue);
    map.set("ScreenGui,ScreenInsets", ScreenInsets.FromValue);
    map.set("SurfaceGuiBase,Face", NormalId.FromValue);
    map.set("AdGui,AdShape", AdShape.FromValue);
    map.set("SurfaceGui,SizingMode", SurfaceGuiSizingMode.FromValue);
    map.set("HandleAdornment,AdornCullingMode", AdornCullingMode.FromValue);
    map.set("Handles,Style", HandlesStyle.FromValue);
    map.set("SurfaceSelection,TargetSurface", NormalId.FromValue);
    map.set("HapticEffect,Type", HapticEffectType.FromValue);
    map.set("Highlight,DepthMode", HighlightDepthMode.FromValue);
    map.set("Humanoid,CollisionType", HumanoidCollisionType.FromValue);
    map.set("Humanoid,DisplayDistanceType", HumanoidDisplayDistanceType.FromValue);
    map.set("Humanoid,HealthDisplayType", HumanoidHealthDisplayType.FromValue);
    map.set("Humanoid,NameOcclusion", NameOcclusion.FromValue);
    map.set("Humanoid,RigType", HumanoidRigType.FromValue);
    map.set("IKControl,Type", IKControlType.FromValue);
    map.set("InputAction,Type", InputActionType.FromValue);
    map.set("InputBinding,Down", KeyCode.FromValue);
    map.set("InputBinding,KeyCode", KeyCode.FromValue);
    map.set("InputBinding,Left", KeyCode.FromValue);
    map.set("InputBinding,Right", KeyCode.FromValue);
    map.set("InputBinding,Up", KeyCode.FromValue);
    map.set("SpotLight,Face", NormalId.FromValue);
    map.set("SurfaceLight,Face", NormalId.FromValue);
    map.set("Lighting,LightingStyle", LightingStyle.FromValue);
    map.set("Lighting,Technology", Technology.FromValue);
    map.set("BaseScript,RunContext", RunContext.FromValue);
    map.set("MaterialVariant,BaseMaterial", Material.FromValue);
    map.set("MaterialVariant,MaterialPattern", MaterialPattern.FromValue);
    map.set("Noise,NoiseType", NoiseType.FromValue);
    map.set("BasePart,BackSurface", SurfaceType.FromValue);
    map.set("BasePart,BackSurfaceInput", InputType.FromValue);
    map.set("BasePart,BottomSurface", SurfaceType.FromValue);
    map.set("BasePart,BottomSurfaceInput", InputType.FromValue);
    map.set("BasePart,FrontSurface", SurfaceType.FromValue);
    map.set("BasePart,FrontSurfaceInput", InputType.FromValue);
    map.set("BasePart,LeftSurface", SurfaceType.FromValue);
    map.set("BasePart,LeftSurfaceInput", InputType.FromValue);
    map.set("BasePart,Material", Material.FromValue);
    map.set("BasePart,RightSurface", SurfaceType.FromValue);
    map.set("BasePart,RightSurfaceInput", InputType.FromValue);
    map.set("BasePart,TopSurface", SurfaceType.FromValue);
    map.set("BasePart,TopSurfaceInput", InputType.FromValue);
    map.set("FormFactorPart,FormFactor", FormFactor.FromValue);
    map.set("FormFactorPart,formFactor", FormFactor.FromValue);
    map.set("FormFactorPart,formFactorRaw", FormFactor.FromValue);
    map.set("Part,shape", PartType.FromValue);
    map.set("Terrain,AcquisitionMethod", TerrainAcquisitionMethod.FromValue);
    map.set("TriangleMeshPart,FluidFidelityInternal", FluidFidelity.FromValue);
    map.set("MeshPart,RenderFidelity", RenderFidelity.FromValue);
    map.set("PartOperation,FormFactor", FormFactor.FromValue);
    map.set("PartOperation,RenderFidelity", RenderFidelity.FromValue);
    map.set("TrussPart,style", Style.FromValue);
    map.set("Camera,CameraType", CameraType.FromValue);
    map.set("Camera,FieldOfViewMode", FieldOfViewMode.FromValue);
    map.set("Model,LevelOfDetail", ModelLevelOfDetail.FromValue);
    map.set("Model,ModelStreamingMode", ModelStreamingMode.FromValue);
    map.set("HopperBin,BinType", BinType.FromValue);
    map.set("Workspace,AvatarUnificationMode", AvatarUnificationMode.FromValue);
    map.set("Workspace,ClientAnimatorThrottling", ClientAnimatorThrottlingMode.FromValue);
    map.set("Workspace,FluidForces", FluidForces.FromValue);
    map.set("Workspace,IKControlConstraintSupport", IKControlConstraintSupport.FromValue);
    map.set("Workspace,MeshPartHeadsAndAccessories", MeshPartHeadsAndAccessories.FromValue);
    map.set("Workspace,ModelStreamingBehavior", ModelStreamingBehavior.FromValue);
    map.set("Workspace,MoverConstraintRootBehavior", MoverConstraintRootBehaviorMode.FromValue);
    map.set("Workspace,PathfindingUseImprovedSearch", PathfindingUseImprovedSearch.FromValue);
    map.set("Workspace,PhysicsImprovedSleep", RolloutState.FromValue);
    map.set("Workspace,PhysicsSteppingMethod", PhysicsSteppingMethod.FromValue);
    map.set("Workspace,PlayerCharacterDestroyBehavior", PlayerCharacterDestroyBehavior.FromValue);
    map.set("Workspace,PrimalPhysicsSolver", PrimalPhysicsSolver.FromValue);
    map.set("Workspace,RejectCharacterDeletions", RejectCharacterDeletions.FromValue);
    map.set("Workspace,RenderingCacheOptimizations", RenderingCacheOptimizationMode.FromValue);
    map.set("Workspace,ReplicateInstanceDestroySetting", ReplicateInstanceDestroySetting.FromValue);
    map.set("Workspace,Retargeting", AnimatorRetargetingMode.FromValue);
    map.set("Workspace,SandboxedInstanceMode", SandboxedInstanceMode.FromValue);
    map.set("Workspace,SignalBehavior2", SignalBehavior.FromValue);
    map.set("Workspace,StreamOutBehavior", StreamOutBehavior.FromValue);
    map.set("Workspace,StreamingIntegrityMode", StreamingIntegrityMode.FromValue);
    map.set("Workspace,TouchEventsUseCollisionGroups", RolloutState.FromValue);
    map.set("ParticleEmitter,EmissionDirection", NormalId.FromValue);
    map.set("ParticleEmitter,FlipbookLayout", ParticleFlipbookLayout.FromValue);
    map.set("ParticleEmitter,FlipbookMode", ParticleFlipbookMode.FromValue);
    map.set("ParticleEmitter,Orientation", ParticleOrientation.FromValue);
    map.set("ParticleEmitter,Shape", ParticleEmitterShape.FromValue);
    map.set("ParticleEmitter,ShapeInOut", ParticleEmitterShapeInOut.FromValue);
    map.set("ParticleEmitter,ShapeStyle", ParticleEmitterShapeStyle.FromValue);
    map.set("Player,CameraMode", CameraMode.FromValue);
    map.set("Player,DevCameraOcclusionMode", DevCameraOcclusionMode.FromValue);
    map.set("Player,DevComputerCameraMode", DevComputerCameraMovementMode.FromValue);
    map.set("Player,DevComputerMovementMode", DevComputerMovementMode.FromValue);
    map.set("Player,DevTouchCameraMode", DevTouchCameraMovementMode.FromValue);
    map.set("Player,DevTouchMovementMode", DevTouchMovementMode.FromValue);
    map.set("PlayerDataService,LoadFailureBehavior", PlayerDataLoadFailureBehavior.FromValue);
    map.set("PolicyService,IsLuobuServer", TriStateBoolean.FromValue);
    map.set("PolicyService,LuobuWhitelisted", TriStateBoolean.FromValue);
    map.set("PoseBase,EasingDirection", PoseEasingDirection.FromValue);
    map.set("PoseBase,EasingStyle", PoseEasingStyle.FromValue);
    map.set("ColorGradingEffect,TonemapperPreset", TonemapperPreset.FromValue);
    map.set("ProximityPrompt,Exclusivity", ProximityPromptExclusivity.FromValue);
    map.set("ProximityPrompt,GamepadKeyCode", KeyCode.FromValue);
    map.set("ProximityPrompt,KeyboardKeyCode", KeyCode.FromValue);
    map.set("ProximityPrompt,Style", ProximityPromptStyle.FromValue);
    map.set("ReflectionMetadataClass,ServiceVisibility", ServiceVisibility.FromValue);
    map.set("RenderSettings,EditQualityLevel", QualityLevel.FromValue);
    map.set("RenderSettings,FrameRateManager", FramerateManagerMode.FromValue);
    map.set("RenderSettings,GraphicsMode", GraphicsMode.FromValue);
    map.set("RenderSettings,MeshPartDetailLevel", MeshPartDetailLevel.FromValue);
    map.set("RenderSettings,QualityLevel", QualityLevel.FromValue);
    map.set("RenderSettings,ViewMode", ViewMode.FromValue);
    map.set("RenderingTest,ComparisonMethod", RenderingTestComparisonMethod.FromValue);
    map.set("SensorBase,UpdateType", SensorUpdateType.FromValue);
    map.set("ControllerPartSensor,SensorMode", SensorMode.FromValue);
    map.set("Sound,RollOffMode", RollOffMode.FromValue);
    map.set("SoundService,AmbientReverb", ReverbType.FromValue);
    map.set("SoundService,AudioApiByDefault", RolloutState.FromValue);
    map.set("SoundService,CharacterSoundsUseNewApi", RolloutState.FromValue);
    map.set("SoundService,DefaultListenerLocation", ListenerLocation.FromValue);
    map.set("SoundService,VolumetricAudio", VolumetricAudio.FromValue);
    map.set("StarterPlayer,AvatarJointUpgrade_SerializedRollout", RolloutState.FromValue);
    map.set("StarterPlayer,CameraMode", CameraMode.FromValue);
    map.set("StarterPlayer,DevCameraOcclusionMode", DevCameraOcclusionMode.FromValue);
    map.set("StarterPlayer,DevComputerCameraMovementMode", DevComputerCameraMovementMode.FromValue);
    map.set("StarterPlayer,DevComputerMovementMode", DevComputerMovementMode.FromValue);
    map.set("StarterPlayer,DevTouchCameraMovementMode", DevTouchCameraMovementMode.FromValue);
    map.set("StarterPlayer,DevTouchMovementMode", DevTouchMovementMode.FromValue);
    map.set("StarterPlayer,EnableDynamicHeads", LoadDynamicHeads.FromValue);
    map.set("StarterPlayer,GameSettingsAvatar", GameAvatarType.FromValue);
    map.set("StarterPlayer,GameSettingsR15Collision", R15CollisionType.FromValue);
    map.set("StarterPlayer,LoadCharacterLayeredClothing", LoadCharacterLayeredClothing.FromValue);
    map.set("StarterPlayer,LuaCharacterController", CharacterControlMode.FromValue);
    map.set("SurfaceAppearance,AlphaMode", AlphaMode.FromValue);
    map.set("TaskScheduler,ThreadPoolConfig", ThreadPoolConfig.FromValue);
    map.set("TerrainDetail,Face", TerrainFace.FromValue);
    map.set("TerrainDetail,MaterialPattern", MaterialPattern.FromValue);
    map.set("BubbleChatConfiguration,Font", Font.FromValue);
    map.set("ChatInputBarConfiguration,KeyboardKeyCode", KeyCode.FromValue);
    map.set("ChatWindowConfiguration,HorizontalAlignment", HorizontalAlignment.FromValue);
    map.set("ChatWindowConfiguration,VerticalAlignment", VerticalAlignment.FromValue);
    map.set("TextChatService,ChatVersion", ChatVersion.FromValue);
    map.set("Trail,TextureMode", TextureMode.FromValue);
    map.set("UIAspectRatioConstraint,AspectType", AspectType.FromValue);
    map.set("UIAspectRatioConstraint,DominantAxis", DominantAxis.FromValue);
    map.set("UIDragDetector,BoundingBehavior", UIDragDetectorBoundingBehavior.FromValue);
    map.set("UIDragDetector,DragRelativity", UIDragDetectorDragRelativity.FromValue);
    map.set("UIDragDetector,DragSpace", UIDragDetectorDragSpace.FromValue);
    map.set("UIDragDetector,DragStyle", UIDragDetectorDragStyle.FromValue);
    map.set("UIDragDetector,ResponseStyle", UIDragDetectorResponseStyle.FromValue);
    map.set("UIDragDetector,UIDragSpeedAxisMapping", UIDragSpeedAxisMapping.FromValue);
    map.set("UIFlexItem,FlexMode", UIFlexMode.FromValue);
    map.set("UIFlexItem,ItemLineAlignment", ItemLineAlignment.FromValue);
    map.set("UIGridStyleLayout,FillDirection", FillDirection.FromValue);
    map.set("UIGridStyleLayout,HorizontalAlignment", HorizontalAlignment.FromValue);
    map.set("UIGridStyleLayout,SortOrder", SortOrder.FromValue);
    map.set("UIGridStyleLayout,VerticalAlignment", VerticalAlignment.FromValue);
    map.set("UIGridLayout,StartCorner", StartCorner.FromValue);
    map.set("UIListLayout,HorizontalFlex", UIFlexAlignment.FromValue);
    map.set("UIListLayout,ItemLineAlignment", ItemLineAlignment.FromValue);
    map.set("UIListLayout,VerticalFlex", UIFlexAlignment.FromValue);
    map.set("UIPageLayout,EasingDirection", EasingDirection.FromValue);
    map.set("UIPageLayout,EasingStyle", EasingStyle.FromValue);
    map.set("UITableLayout,MajorAxis", TableMajorAxis.FromValue);
    map.set("UIStroke,ApplyStrokeMode", ApplyStrokeMode.FromValue);
    map.set("UIStroke,LineJoinMode", LineJoinMode.FromValue);
    map.set("UserInputService,MouseBehavior", MouseBehavior.FromValue);
    map.set("VRService,AutomaticScaling", VRScaling.FromValue);
    map.set("VRService,ControllerModels", VRControllerModelMode.FromValue);
    map.set("VRService,LaserPointer", VRLaserPointerMode.FromValue);
    map.set("VideoDeviceInput,CaptureQuality", VideoDeviceCaptureQuality.FromValue);
    map.set("VoiceChatService,DefaultDistanceAttenuation", VoiceChatDistanceAttenuationType.FromValue);
    map.set("VoiceChatService,UseAudioApi", AudioApiRollout.FromValue);
    return map;
}
