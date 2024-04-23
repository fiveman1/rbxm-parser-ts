/**
* @author https://github.com/fiveman1
* @file generated_types.ts
* Contains generated types for Roblox classes and enums.
* Generated on 4/23/2024, 11:15:33 AM
*/

import { DataType, CoreInstance, EnumItem } from "../lib/roblox_types";

export abstract class Instance extends CoreInstance {
    protected constructor(isService: boolean = false) {super(isService); this.addClassName("Instance");}
    public get AttributesSerialize() {return this.GetProp("AttributesSerialize", DataType.String);}
    public set AttributesSerialize(value) {this.SetProp("AttributesSerialize", DataType.String, value);}
    public get Capabilities() {return this.GetProp("Capabilities", DataType.SecurityCapabilities);}
    public set Capabilities(value) {this.SetProp("Capabilities", DataType.SecurityCapabilities, value);}
    public get DefinesCapabilities() {return this.GetProp("DefinesCapabilities", DataType.Bool);}
    public set DefinesCapabilities(value) {this.SetProp("DefinesCapabilities", DataType.Bool, value);}
    public get HistoryId() {return this.GetProp("HistoryId", DataType.UniqueId);}
    public set HistoryId(value) {this.SetProp("HistoryId", DataType.UniqueId, value);}
    public get SourceAssetId() {return this.GetProp("SourceAssetId", DataType.Int64);}
    public set SourceAssetId(value) {this.SetProp("SourceAssetId", DataType.Int64, value);}
    public get Tags() {return this.GetProp("Tags", DataType.String);}
    public set Tags(value) {this.SetProp("Tags", DataType.String, value);}
    public get UniqueId() {return this.GetProp("UniqueId", DataType.UniqueId);}
    public set UniqueId(value) {this.SetProp("UniqueId", DataType.UniqueId, value);}
    /**@deprecated Deprecated by Roblox*/
    public get Archivable() {return this.GetProp("archivable", DataType.Bool);}
    /**@deprecated Deprecated by Roblox*/
    public set Archivable(value) {this.SetProp("archivable", DataType.Bool, value);}
}

export class AccessoryDescription extends Instance {
    protected constructor() {super(); this.addClassName("AccessoryDescription");}
    public static New() {return new AccessoryDescription();}
    public get AccessoryType() {return this.GetProp("AccessoryType", DataType.Enum) as AccessoryType | undefined;}
    public set AccessoryType(value) {this.SetProp("AccessoryType", DataType.Enum, value);}
    public get AssetId() {return this.GetProp("AssetId", DataType.Int64);}
    public set AssetId(value) {this.SetProp("AssetId", DataType.Int64, value);}
    public get Instance() {return this.GetProp("Instance", DataType.Referent) as Instance | undefined;}
    public set Instance(value) {this.SetProp("Instance", DataType.Referent, value);}
    public get IsLayered() {return this.GetProp("IsLayered", DataType.Bool);}
    public set IsLayered(value) {this.SetProp("IsLayered", DataType.Bool, value);}
    public get Order() {return this.GetProp("Order", DataType.Int32);}
    public set Order(value) {this.SetProp("Order", DataType.Int32, value);}
    public get Puffiness() {return this.GetProp("Puffiness", DataType.Float32);}
    public set Puffiness(value) {this.SetProp("Puffiness", DataType.Float32, value);}
}

export class AccountService extends Instance {
    protected constructor() {super(true); this.addClassName("AccountService");}
    public static New() {return new AccountService();}
}

export class Accoutrement extends Instance {
    protected constructor() {super(); this.addClassName("Accoutrement");}
    public static New() {return new Accoutrement();}
    public get AttachmentPoint() {return this.GetProp("AttachmentPoint", DataType.CFrame);}
    public set AttachmentPoint(value) {this.SetProp("AttachmentPoint", DataType.CFrame, value);}
}

export class Accessory extends Accoutrement {
    protected constructor() {super(); this.addClassName("Accessory");}
    public static New() {return new Accessory();}
    public get AccessoryType() {return this.GetProp("AccessoryType", DataType.Enum) as AccessoryType | undefined;}
    public set AccessoryType(value) {this.SetProp("AccessoryType", DataType.Enum, value);}
}

/**@deprecated Deprecated by Roblox*/
export class Hat extends Accoutrement {
    protected constructor() {super(); this.addClassName("Hat");}
    public static New() {return new Hat();}
}

export class ActivityHistoryService extends Instance {
    protected constructor() {super(true); this.addClassName("ActivityHistoryService");}
    public static New() {return new ActivityHistoryService();}
}

export class AdPortal extends Instance {
    protected constructor() {super(); this.addClassName("AdPortal");}
    public static New() {return new AdPortal();}
}

export class AdService extends Instance {
    protected constructor() {super(true); this.addClassName("AdService");}
    public static New() {return new AdService();}
}

export class AdvancedDragger extends Instance {
    protected constructor() {super(); this.addClassName("AdvancedDragger");}
    public static New() {return new AdvancedDragger();}
}

export class AnalyticsService extends Instance {
    protected constructor() {super(true); this.addClassName("AnalyticsService");}
    public static New() {return new AnalyticsService();}
    /**@deprecated Deprecated by Roblox*/
    public get ApiKey() {return this.GetProp("ApiKey", DataType.String);}
    /**@deprecated Deprecated by Roblox*/
    public set ApiKey(value) {this.SetProp("ApiKey", DataType.String, value);}
}

export class Animation extends Instance {
    protected constructor() {super(); this.addClassName("Animation");}
    public static New() {return new Animation();}
    public get AnimationId() {return this.GetProp("AnimationId", DataType.String);}
    public set AnimationId(value) {this.SetProp("AnimationId", DataType.String, value);}
}

export abstract class AnimationClip extends Instance {
    protected constructor() {super(); this.addClassName("AnimationClip");}
    public get GuidBinaryString() {return this.GetProp("GuidBinaryString", DataType.String);}
    public set GuidBinaryString(value) {this.SetProp("GuidBinaryString", DataType.String, value);}
    public get Loop() {return this.GetProp("Loop", DataType.Bool);}
    public set Loop(value) {this.SetProp("Loop", DataType.Bool, value);}
    public get Priority() {return this.GetProp("Priority", DataType.Enum) as AnimationPriority | undefined;}
    public set Priority(value) {this.SetProp("Priority", DataType.Enum, value);}
}

export class CurveAnimation extends AnimationClip {
    protected constructor() {super(); this.addClassName("CurveAnimation");}
    public static New() {return new CurveAnimation();}
}

export class KeyframeSequence extends AnimationClip {
    protected constructor() {super(); this.addClassName("KeyframeSequence");}
    public static New() {return new KeyframeSequence();}
    public get AuthoredHipHeight() {return this.GetProp("AuthoredHipHeight", DataType.Float32);}
    public set AuthoredHipHeight(value) {this.SetProp("AuthoredHipHeight", DataType.Float32, value);}
}

export class AnimationClipProvider extends Instance {
    protected constructor() {super(true); this.addClassName("AnimationClipProvider");}
    public static New() {return new AnimationClipProvider();}
}

export class AnimationController extends Instance {
    protected constructor() {super(); this.addClassName("AnimationController");}
    public static New() {return new AnimationController();}
}

export class AnimationFromVideoCreatorService extends Instance {
    protected constructor() {super(true); this.addClassName("AnimationFromVideoCreatorService");}
    public static New() {return new AnimationFromVideoCreatorService();}
}

export class AnimationFromVideoCreatorStudioService extends Instance {
    protected constructor() {super(true); this.addClassName("AnimationFromVideoCreatorStudioService");}
    public static New() {return new AnimationFromVideoCreatorStudioService();}
}

export class AnimationRigData extends Instance {
    protected constructor() {super(); this.addClassName("AnimationRigData");}
    public static New() {return new AnimationRigData();}
    public get ArticulatedJoint() {return this.GetProp("articulatedJoint", DataType.String);}
    public set ArticulatedJoint(value) {this.SetProp("articulatedJoint", DataType.String, value);}
    public get EndEffectorRotationConstraint() {return this.GetProp("endEffectorRotationConstraint", DataType.String);}
    public set EndEffectorRotationConstraint(value) {this.SetProp("endEffectorRotationConstraint", DataType.String, value);}
    public get EndEffectorTranslationConstraint() {return this.GetProp("endEffectorTranslationConstraint", DataType.String);}
    public set EndEffectorTranslationConstraint(value) {this.SetProp("endEffectorTranslationConstraint", DataType.String, value);}
    public get EndEffectorWeight() {return this.GetProp("endEffectorWeight", DataType.String);}
    public set EndEffectorWeight(value) {this.SetProp("endEffectorWeight", DataType.String, value);}
    public get FacsControl() {return this.GetProp("facsControl", DataType.String);}
    public set FacsControl(value) {this.SetProp("facsControl", DataType.String, value);}
    public get Label() {return this.GetProp("label", DataType.String);}
    public set Label(value) {this.SetProp("label", DataType.String, value);}
    public get PostTransform() {return this.GetProp("postTransform", DataType.String);}
    public set PostTransform(value) {this.SetProp("postTransform", DataType.String, value);}
    public get PreTransform() {return this.GetProp("preTransform", DataType.String);}
    public set PreTransform(value) {this.SetProp("preTransform", DataType.String, value);}
    public get RootMotion() {return this.GetProp("rootMotion", DataType.String);}
    public set RootMotion(value) {this.SetProp("rootMotion", DataType.String, value);}
    public get Transform() {return this.GetProp("transform", DataType.String);}
    public set Transform(value) {this.SetProp("transform", DataType.String, value);}
    public get Weight() {return this.GetProp("weight", DataType.String);}
    public set Weight(value) {this.SetProp("weight", DataType.String, value);}
}

export class Animator extends Instance {
    protected constructor() {super(); this.addClassName("Animator");}
    public static New() {return new Animator();}
    public get PreferLodEnabled() {return this.GetProp("PreferLodEnabled", DataType.Bool);}
    public set PreferLodEnabled(value) {this.SetProp("PreferLodEnabled", DataType.Bool, value);}
}

export class AppUpdateService extends Instance {
    protected constructor() {super(true); this.addClassName("AppUpdateService");}
    public static New() {return new AppUpdateService();}
}

export class AssetCounterService extends Instance {
    protected constructor() {super(true); this.addClassName("AssetCounterService");}
    public static New() {return new AssetCounterService();}
}

export class AssetDeliveryProxy extends Instance {
    protected constructor() {super(true); this.addClassName("AssetDeliveryProxy");}
    public static New() {return new AssetDeliveryProxy();}
    public get Interface() {return this.GetProp("Interface", DataType.String);}
    public set Interface(value) {this.SetProp("Interface", DataType.String, value);}
    public get Port() {return this.GetProp("Port", DataType.Int32);}
    public set Port(value) {this.SetProp("Port", DataType.Int32, value);}
    public get StartServer() {return this.GetProp("StartServer", DataType.Bool);}
    public set StartServer(value) {this.SetProp("StartServer", DataType.Bool, value);}
}

export class AssetImportService extends Instance {
    protected constructor() {super(true); this.addClassName("AssetImportService");}
    public static New() {return new AssetImportService();}
}

export class AssetManagerService extends Instance {
    protected constructor() {super(true); this.addClassName("AssetManagerService");}
    public static New() {return new AssetManagerService();}
}

export class AssetService extends Instance {
    protected constructor() {super(true); this.addClassName("AssetService");}
    public static New() {return new AssetService();}
}

export class Atmosphere extends Instance {
    protected constructor() {super(); this.addClassName("Atmosphere");}
    public static New() {return new Atmosphere();}
    public get Color() {return this.GetProp("Color", DataType.Color3);}
    public set Color(value) {this.SetProp("Color", DataType.Color3, value);}
    public get Decay() {return this.GetProp("Decay", DataType.Color3);}
    public set Decay(value) {this.SetProp("Decay", DataType.Color3, value);}
    public get Density() {return this.GetProp("Density", DataType.Float32);}
    public set Density(value) {this.SetProp("Density", DataType.Float32, value);}
    public get Glare() {return this.GetProp("Glare", DataType.Float32);}
    public set Glare(value) {this.SetProp("Glare", DataType.Float32, value);}
    public get Haze() {return this.GetProp("Haze", DataType.Float32);}
    public set Haze(value) {this.SetProp("Haze", DataType.Float32, value);}
    public get Offset() {return this.GetProp("Offset", DataType.Float32);}
    public set Offset(value) {this.SetProp("Offset", DataType.Float32, value);}
}

export class Attachment extends Instance {
    protected constructor() {super(); this.addClassName("Attachment");}
    public static New() {return new Attachment();}
    public get CFrame() {return this.GetProp("CFrame", DataType.CFrame);}
    public set CFrame(value) {this.SetProp("CFrame", DataType.CFrame, value);}
    public get Visible() {return this.GetProp("Visible", DataType.Bool);}
    public set Visible(value) {this.SetProp("Visible", DataType.Bool, value);}
}

export class Bone extends Attachment {
    protected constructor() {super(); this.addClassName("Bone");}
    public static New() {return new Bone();}
}

export class AudioAnalyzer extends Instance {
    protected constructor() {super(); this.addClassName("AudioAnalyzer");}
    public static New() {return new AudioAnalyzer();}
}

export class AudioChorus extends Instance {
    protected constructor() {super(); this.addClassName("AudioChorus");}
    public static New() {return new AudioChorus();}
    public get Depth() {return this.GetProp("Depth", DataType.Float32);}
    public set Depth(value) {this.SetProp("Depth", DataType.Float32, value);}
    public get Mix() {return this.GetProp("Mix", DataType.Float32);}
    public set Mix(value) {this.SetProp("Mix", DataType.Float32, value);}
    public get Rate() {return this.GetProp("Rate", DataType.Float32);}
    public set Rate(value) {this.SetProp("Rate", DataType.Float32, value);}
}

export class AudioCompressor extends Instance {
    protected constructor() {super(); this.addClassName("AudioCompressor");}
    public static New() {return new AudioCompressor();}
    public get Attack() {return this.GetProp("Attack", DataType.Float32);}
    public set Attack(value) {this.SetProp("Attack", DataType.Float32, value);}
    public get MakeupGain() {return this.GetProp("MakeupGain", DataType.Float32);}
    public set MakeupGain(value) {this.SetProp("MakeupGain", DataType.Float32, value);}
    public get Ratio() {return this.GetProp("Ratio", DataType.Float32);}
    public set Ratio(value) {this.SetProp("Ratio", DataType.Float32, value);}
    public get Release() {return this.GetProp("Release", DataType.Float32);}
    public set Release(value) {this.SetProp("Release", DataType.Float32, value);}
    public get Threshold() {return this.GetProp("Threshold", DataType.Float32);}
    public set Threshold(value) {this.SetProp("Threshold", DataType.Float32, value);}
}

export class AudioDeviceInput extends Instance {
    protected constructor() {super(); this.addClassName("AudioDeviceInput");}
    public static New() {return new AudioDeviceInput();}
    public get AccessType() {return this.GetProp("AccessType", DataType.Enum) as AccessModifierType | undefined;}
    public set AccessType(value) {this.SetProp("AccessType", DataType.Enum, value);}
    public get Active() {return this.GetProp("Active", DataType.Bool);}
    public set Active(value) {this.SetProp("Active", DataType.Bool, value);}
    public get Muted() {return this.GetProp("Muted", DataType.Bool);}
    public set Muted(value) {this.SetProp("Muted", DataType.Bool, value);}
    public get Player() {return this.GetProp("Player", DataType.Referent) as Player | undefined;}
    public set Player(value) {this.SetProp("Player", DataType.Referent, value);}
}

export class AudioDeviceOutput extends Instance {
    protected constructor() {super(); this.addClassName("AudioDeviceOutput");}
    public static New() {return new AudioDeviceOutput();}
    public get Player() {return this.GetProp("Player", DataType.Referent) as Player | undefined;}
    public set Player(value) {this.SetProp("Player", DataType.Referent, value);}
}

export class AudioDistortion extends Instance {
    protected constructor() {super(); this.addClassName("AudioDistortion");}
    public static New() {return new AudioDistortion();}
    public get Level() {return this.GetProp("Level", DataType.Float32);}
    public set Level(value) {this.SetProp("Level", DataType.Float32, value);}
}

export class AudioEcho extends Instance {
    protected constructor() {super(); this.addClassName("AudioEcho");}
    public static New() {return new AudioEcho();}
    public get DelayTime() {return this.GetProp("DelayTime", DataType.Float32);}
    public set DelayTime(value) {this.SetProp("DelayTime", DataType.Float32, value);}
    public get DryLevel() {return this.GetProp("DryLevel", DataType.Float32);}
    public set DryLevel(value) {this.SetProp("DryLevel", DataType.Float32, value);}
    public get Feedback() {return this.GetProp("Feedback", DataType.Float32);}
    public set Feedback(value) {this.SetProp("Feedback", DataType.Float32, value);}
    public get WetLevel() {return this.GetProp("WetLevel", DataType.Float32);}
    public set WetLevel(value) {this.SetProp("WetLevel", DataType.Float32, value);}
}

export class AudioEmitter extends Instance {
    protected constructor() {super(); this.addClassName("AudioEmitter");}
    public static New() {return new AudioEmitter();}
    public get AudioInteractionGroup() {return this.GetProp("AudioInteractionGroup", DataType.String);}
    public set AudioInteractionGroup(value) {this.SetProp("AudioInteractionGroup", DataType.String, value);}
    public get DistanceAttenuation() {return this.GetProp("DistanceAttenuation", DataType.String);}
    public set DistanceAttenuation(value) {this.SetProp("DistanceAttenuation", DataType.String, value);}
}

export class AudioEqualizer extends Instance {
    protected constructor() {super(); this.addClassName("AudioEqualizer");}
    public static New() {return new AudioEqualizer();}
    public get HighGain() {return this.GetProp("HighGain", DataType.Float32);}
    public set HighGain(value) {this.SetProp("HighGain", DataType.Float32, value);}
    public get LowGain() {return this.GetProp("LowGain", DataType.Float32);}
    public set LowGain(value) {this.SetProp("LowGain", DataType.Float32, value);}
    public get MidGain() {return this.GetProp("MidGain", DataType.Float32);}
    public set MidGain(value) {this.SetProp("MidGain", DataType.Float32, value);}
    public get MidRange() {return this.GetProp("MidRange", DataType.NumberRange);}
    public set MidRange(value) {this.SetProp("MidRange", DataType.NumberRange, value);}
}

export class AudioFader extends Instance {
    protected constructor() {super(); this.addClassName("AudioFader");}
    public static New() {return new AudioFader();}
    public get Volume() {return this.GetProp("Volume", DataType.Float32);}
    public set Volume(value) {this.SetProp("Volume", DataType.Float32, value);}
}

export class AudioFlanger extends Instance {
    protected constructor() {super(); this.addClassName("AudioFlanger");}
    public static New() {return new AudioFlanger();}
    public get Depth() {return this.GetProp("Depth", DataType.Float32);}
    public set Depth(value) {this.SetProp("Depth", DataType.Float32, value);}
    public get Mix() {return this.GetProp("Mix", DataType.Float32);}
    public set Mix(value) {this.SetProp("Mix", DataType.Float32, value);}
    public get Rate() {return this.GetProp("Rate", DataType.Float32);}
    public set Rate(value) {this.SetProp("Rate", DataType.Float32, value);}
}

export class AudioListener extends Instance {
    protected constructor() {super(); this.addClassName("AudioListener");}
    public static New() {return new AudioListener();}
    public get AudioInteractionGroup() {return this.GetProp("AudioInteractionGroup", DataType.String);}
    public set AudioInteractionGroup(value) {this.SetProp("AudioInteractionGroup", DataType.String, value);}
}

export class AudioPitchShifter extends Instance {
    protected constructor() {super(); this.addClassName("AudioPitchShifter");}
    public static New() {return new AudioPitchShifter();}
    public get Pitch() {return this.GetProp("Pitch", DataType.Float32);}
    public set Pitch(value) {this.SetProp("Pitch", DataType.Float32, value);}
}

export class AudioPlayer extends Instance {
    protected constructor() {super(); this.addClassName("AudioPlayer");}
    public static New() {return new AudioPlayer();}
    public get AssetId() {return this.GetProp("AssetId", DataType.String);}
    public set AssetId(value) {this.SetProp("AssetId", DataType.String, value);}
    public get AutoLoad() {return this.GetProp("AutoLoad", DataType.Bool);}
    public set AutoLoad(value) {this.SetProp("AutoLoad", DataType.Bool, value);}
    public get LoopRegion() {return this.GetProp("LoopRegion", DataType.NumberRange);}
    public set LoopRegion(value) {this.SetProp("LoopRegion", DataType.NumberRange, value);}
    public get Looping() {return this.GetProp("Looping", DataType.Bool);}
    public set Looping(value) {this.SetProp("Looping", DataType.Bool, value);}
    public get PlaybackRegion() {return this.GetProp("PlaybackRegion", DataType.NumberRange);}
    public set PlaybackRegion(value) {this.SetProp("PlaybackRegion", DataType.NumberRange, value);}
    public get PlaybackSpeed() {return this.GetProp("PlaybackSpeed", DataType.Float64);}
    public set PlaybackSpeed(value) {this.SetProp("PlaybackSpeed", DataType.Float64, value);}
    public get TimePosition() {return this.GetProp("TimePosition", DataType.Float64);}
    public set TimePosition(value) {this.SetProp("TimePosition", DataType.Float64, value);}
}

export class AudioReverb extends Instance {
    protected constructor() {super(); this.addClassName("AudioReverb");}
    public static New() {return new AudioReverb();}
    public get DecayRatio() {return this.GetProp("DecayRatio", DataType.Float32);}
    public set DecayRatio(value) {this.SetProp("DecayRatio", DataType.Float32, value);}
    public get DecayTime() {return this.GetProp("DecayTime", DataType.Float32);}
    public set DecayTime(value) {this.SetProp("DecayTime", DataType.Float32, value);}
    public get Density() {return this.GetProp("Density", DataType.Float32);}
    public set Density(value) {this.SetProp("Density", DataType.Float32, value);}
    public get Diffusion() {return this.GetProp("Diffusion", DataType.Float32);}
    public set Diffusion(value) {this.SetProp("Diffusion", DataType.Float32, value);}
    public get DryLevel() {return this.GetProp("DryLevel", DataType.Float32);}
    public set DryLevel(value) {this.SetProp("DryLevel", DataType.Float32, value);}
    public get EarlyDelayTime() {return this.GetProp("EarlyDelayTime", DataType.Float32);}
    public set EarlyDelayTime(value) {this.SetProp("EarlyDelayTime", DataType.Float32, value);}
    public get HighCutFrequency() {return this.GetProp("HighCutFrequency", DataType.Float32);}
    public set HighCutFrequency(value) {this.SetProp("HighCutFrequency", DataType.Float32, value);}
    public get LateDelayTime() {return this.GetProp("LateDelayTime", DataType.Float32);}
    public set LateDelayTime(value) {this.SetProp("LateDelayTime", DataType.Float32, value);}
    public get LowShelfFrequency() {return this.GetProp("LowShelfFrequency", DataType.Float32);}
    public set LowShelfFrequency(value) {this.SetProp("LowShelfFrequency", DataType.Float32, value);}
    public get LowShelfGain() {return this.GetProp("LowShelfGain", DataType.Float32);}
    public set LowShelfGain(value) {this.SetProp("LowShelfGain", DataType.Float32, value);}
    public get ReferenceFrequency() {return this.GetProp("ReferenceFrequency", DataType.Float32);}
    public set ReferenceFrequency(value) {this.SetProp("ReferenceFrequency", DataType.Float32, value);}
    public get WetLevel() {return this.GetProp("WetLevel", DataType.Float32);}
    public set WetLevel(value) {this.SetProp("WetLevel", DataType.Float32, value);}
}

export class AudioSearchParams extends Instance {
    protected constructor() {super(); this.addClassName("AudioSearchParams");}
    public static New() {return new AudioSearchParams();}
    public get Album() {return this.GetProp("Album", DataType.String);}
    public set Album(value) {this.SetProp("Album", DataType.String, value);}
    public get Artist() {return this.GetProp("Artist", DataType.String);}
    public set Artist(value) {this.SetProp("Artist", DataType.String, value);}
    public get AudioSubType() {return this.GetProp("AudioSubType", DataType.Enum) as AudioSubType | undefined;}
    public set AudioSubType(value) {this.SetProp("AudioSubType", DataType.Enum, value);}
    /**@deprecated Deprecated by Roblox*/
    public get AudioSubtype() {return this.GetProp("AudioSubtype", DataType.Enum) as AudioSubType | undefined;}
    /**@deprecated Deprecated by Roblox*/
    public set AudioSubtype(value) {this.SetProp("AudioSubtype", DataType.Enum, value);}
    public get MaxDuration() {return this.GetProp("MaxDuration", DataType.Int32);}
    public set MaxDuration(value) {this.SetProp("MaxDuration", DataType.Int32, value);}
    public get MinDuration() {return this.GetProp("MinDuration", DataType.Int32);}
    public set MinDuration(value) {this.SetProp("MinDuration", DataType.Int32, value);}
    public get SearchKeyword() {return this.GetProp("SearchKeyword", DataType.String);}
    public set SearchKeyword(value) {this.SetProp("SearchKeyword", DataType.String, value);}
    public get Tag() {return this.GetProp("Tag", DataType.String);}
    public set Tag(value) {this.SetProp("Tag", DataType.String, value);}
    public get Title() {return this.GetProp("Title", DataType.String);}
    public set Title(value) {this.SetProp("Title", DataType.String, value);}
}

export class AvatarChatService extends Instance {
    protected constructor() {super(true); this.addClassName("AvatarChatService");}
    public static New() {return new AvatarChatService();}
}

export class AvatarCreationService extends Instance {
    protected constructor() {super(true); this.addClassName("AvatarCreationService");}
    public static New() {return new AvatarCreationService();}
}

export class AvatarEditorService extends Instance {
    protected constructor() {super(true); this.addClassName("AvatarEditorService");}
    public static New() {return new AvatarEditorService();}
}

export class AvatarImportService extends Instance {
    protected constructor() {super(true); this.addClassName("AvatarImportService");}
    public static New() {return new AvatarImportService();}
}

export class Backpack extends Instance {
    protected constructor() {super(); this.addClassName("Backpack");}
    public static New() {return new Backpack();}
}

export class BadgeService extends Instance {
    protected constructor() {super(true); this.addClassName("BadgeService");}
    public static New() {return new BadgeService();}
}

export abstract class BasePlayerGui extends Instance {
    protected constructor() {super(); this.addClassName("BasePlayerGui");}
}

export class CoreGui extends BasePlayerGui {
    protected constructor() {super(); this.addClassName("CoreGui");}
    public static New() {return new CoreGui();}
    public get SelectionImageObject() {return this.GetProp("SelectionImageObject", DataType.Referent) as GuiObject | undefined;}
    public set SelectionImageObject(value) {this.SetProp("SelectionImageObject", DataType.Referent, value);}
}

export class StarterGui extends BasePlayerGui {
    protected constructor() {super(); this.addClassName("StarterGui");}
    public static New() {return new StarterGui();}
    /**@deprecated Deprecated by Roblox*/
    public get ResetPlayerGuiOnSpawn() {return this.GetProp("ResetPlayerGuiOnSpawn", DataType.Bool);}
    /**@deprecated Deprecated by Roblox*/
    public set ResetPlayerGuiOnSpawn(value) {this.SetProp("ResetPlayerGuiOnSpawn", DataType.Bool, value);}
    public get RtlTextSupport() {return this.GetProp("RtlTextSupport", DataType.Enum) as RtlTextSupport | undefined;}
    public set RtlTextSupport(value) {this.SetProp("RtlTextSupport", DataType.Enum, value);}
    public get ScreenOrientation() {return this.GetProp("ScreenOrientation", DataType.Enum) as ScreenOrientation | undefined;}
    public set ScreenOrientation(value) {this.SetProp("ScreenOrientation", DataType.Enum, value);}
    public get ShowDevelopmentGui() {return this.GetProp("ShowDevelopmentGui", DataType.Bool);}
    public set ShowDevelopmentGui(value) {this.SetProp("ShowDevelopmentGui", DataType.Bool, value);}
    public get VirtualCursorMode() {return this.GetProp("VirtualCursorMode", DataType.Enum) as VirtualCursorMode | undefined;}
    public set VirtualCursorMode(value) {this.SetProp("VirtualCursorMode", DataType.Enum, value);}
}

export abstract class BaseRemoteEvent extends Instance {
    protected constructor() {super(); this.addClassName("BaseRemoteEvent");}
}

export class RemoteEvent extends BaseRemoteEvent {
    protected constructor() {super(); this.addClassName("RemoteEvent");}
    public static New() {return new RemoteEvent();}
}

export class UnreliableRemoteEvent extends BaseRemoteEvent {
    protected constructor() {super(); this.addClassName("UnreliableRemoteEvent");}
    public static New() {return new UnreliableRemoteEvent();}
}

export abstract class BaseWrap extends Instance {
    protected constructor() {super(); this.addClassName("BaseWrap");}
    public get CageMeshId() {return this.GetProp("CageMeshId", DataType.String);}
    public set CageMeshId(value) {this.SetProp("CageMeshId", DataType.String, value);}
    public get CageOrigin() {return this.GetProp("CageOrigin", DataType.CFrame);}
    public set CageOrigin(value) {this.SetProp("CageOrigin", DataType.CFrame, value);}
    public get HSRAssetId() {return this.GetProp("HSRAssetId", DataType.String);}
    public set HSRAssetId(value) {this.SetProp("HSRAssetId", DataType.String, value);}
    public get HSRData() {return this.GetProp("HSRData", DataType.SharedString);}
    public set HSRData(value) {this.SetProp("HSRData", DataType.SharedString, value);}
    public get HSRMeshIdData() {return this.GetProp("HSRMeshIdData", DataType.SharedString);}
    public set HSRMeshIdData(value) {this.SetProp("HSRMeshIdData", DataType.SharedString, value);}
    public get ImportOrigin() {return this.GetProp("ImportOrigin", DataType.CFrame);}
    public set ImportOrigin(value) {this.SetProp("ImportOrigin", DataType.CFrame, value);}
    public get TemporaryCageMeshId() {return this.GetProp("TemporaryCageMeshId", DataType.String);}
    public set TemporaryCageMeshId(value) {this.SetProp("TemporaryCageMeshId", DataType.String, value);}
}

export class WrapLayer extends BaseWrap {
    protected constructor() {super(); this.addClassName("WrapLayer");}
    public static New() {return new WrapLayer();}
    public get AutoSkin() {return this.GetProp("AutoSkin", DataType.Enum) as WrapLayerAutoSkin | undefined;}
    public set AutoSkin(value) {this.SetProp("AutoSkin", DataType.Enum, value);}
    public get BindOffset() {return this.GetProp("BindOffset", DataType.CFrame);}
    public set BindOffset(value) {this.SetProp("BindOffset", DataType.CFrame, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool);}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get Order() {return this.GetProp("Order", DataType.Int32);}
    public set Order(value) {this.SetProp("Order", DataType.Int32, value);}
    public get Puffiness() {return this.GetProp("Puffiness", DataType.Float32);}
    public set Puffiness(value) {this.SetProp("Puffiness", DataType.Float32, value);}
    public get ReferenceMeshId() {return this.GetProp("ReferenceMeshId", DataType.String);}
    public set ReferenceMeshId(value) {this.SetProp("ReferenceMeshId", DataType.String, value);}
    public get ReferenceOrigin() {return this.GetProp("ReferenceOrigin", DataType.CFrame);}
    public set ReferenceOrigin(value) {this.SetProp("ReferenceOrigin", DataType.CFrame, value);}
    public get ShrinkFactor() {return this.GetProp("ShrinkFactor", DataType.Float32);}
    public set ShrinkFactor(value) {this.SetProp("ShrinkFactor", DataType.Float32, value);}
    public get TemporaryReferenceId() {return this.GetProp("TemporaryReferenceId", DataType.String);}
    public set TemporaryReferenceId(value) {this.SetProp("TemporaryReferenceId", DataType.String, value);}
}

export class WrapTarget extends BaseWrap {
    protected constructor() {super(); this.addClassName("WrapTarget");}
    public static New() {return new WrapTarget();}
    public get Stiffness() {return this.GetProp("Stiffness", DataType.Float32);}
    public set Stiffness(value) {this.SetProp("Stiffness", DataType.Float32, value);}
}

export class Beam extends Instance {
    protected constructor() {super(); this.addClassName("Beam");}
    public static New() {return new Beam();}
    public get Attachment0() {return this.GetProp("Attachment0", DataType.Referent) as Attachment | undefined;}
    public set Attachment0(value) {this.SetProp("Attachment0", DataType.Referent, value);}
    public get Attachment1() {return this.GetProp("Attachment1", DataType.Referent) as Attachment | undefined;}
    public set Attachment1(value) {this.SetProp("Attachment1", DataType.Referent, value);}
    public get Brightness() {return this.GetProp("Brightness", DataType.Float32);}
    public set Brightness(value) {this.SetProp("Brightness", DataType.Float32, value);}
    public get Color() {return this.GetProp("Color", DataType.ColorSequence);}
    public set Color(value) {this.SetProp("Color", DataType.ColorSequence, value);}
    public get CurveSize0() {return this.GetProp("CurveSize0", DataType.Float32);}
    public set CurveSize0(value) {this.SetProp("CurveSize0", DataType.Float32, value);}
    public get CurveSize1() {return this.GetProp("CurveSize1", DataType.Float32);}
    public set CurveSize1(value) {this.SetProp("CurveSize1", DataType.Float32, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool);}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get FaceCamera() {return this.GetProp("FaceCamera", DataType.Bool);}
    public set FaceCamera(value) {this.SetProp("FaceCamera", DataType.Bool, value);}
    public get LightEmission() {return this.GetProp("LightEmission", DataType.Float32);}
    public set LightEmission(value) {this.SetProp("LightEmission", DataType.Float32, value);}
    public get LightInfluence() {return this.GetProp("LightInfluence", DataType.Float32);}
    public set LightInfluence(value) {this.SetProp("LightInfluence", DataType.Float32, value);}
    public get Segments() {return this.GetProp("Segments", DataType.Int32);}
    public set Segments(value) {this.SetProp("Segments", DataType.Int32, value);}
    public get Texture() {return this.GetProp("Texture", DataType.String);}
    public set Texture(value) {this.SetProp("Texture", DataType.String, value);}
    public get TextureLength() {return this.GetProp("TextureLength", DataType.Float32);}
    public set TextureLength(value) {this.SetProp("TextureLength", DataType.Float32, value);}
    public get TextureMode() {return this.GetProp("TextureMode", DataType.Enum) as TextureMode | undefined;}
    public set TextureMode(value) {this.SetProp("TextureMode", DataType.Enum, value);}
    public get TextureSpeed() {return this.GetProp("TextureSpeed", DataType.Float32);}
    public set TextureSpeed(value) {this.SetProp("TextureSpeed", DataType.Float32, value);}
    public get Transparency() {return this.GetProp("Transparency", DataType.NumberSequence);}
    public set Transparency(value) {this.SetProp("Transparency", DataType.NumberSequence, value);}
    public get Width0() {return this.GetProp("Width0", DataType.Float32);}
    public set Width0(value) {this.SetProp("Width0", DataType.Float32, value);}
    public get Width1() {return this.GetProp("Width1", DataType.Float32);}
    public set Width1(value) {this.SetProp("Width1", DataType.Float32, value);}
    public get ZOffset() {return this.GetProp("ZOffset", DataType.Float32);}
    public set ZOffset(value) {this.SetProp("ZOffset", DataType.Float32, value);}
}

export class BindableEvent extends Instance {
    protected constructor() {super(); this.addClassName("BindableEvent");}
    public static New() {return new BindableEvent();}
}

export class BindableFunction extends Instance {
    protected constructor() {super(); this.addClassName("BindableFunction");}
    public static New() {return new BindableFunction();}
}

/**@deprecated Deprecated by Roblox*/
export abstract class BodyMover extends Instance {
    protected constructor() {super(); this.addClassName("BodyMover");}
}

/**@deprecated Deprecated by Roblox*/
export class BodyAngularVelocity extends BodyMover {
    protected constructor() {super(); this.addClassName("BodyAngularVelocity");}
    public static New() {return new BodyAngularVelocity();}
    public get AngularVelocity() {return this.GetProp("AngularVelocity", DataType.Vector3);}
    public set AngularVelocity(value) {this.SetProp("AngularVelocity", DataType.Vector3, value);}
    public get MaxTorque() {return this.GetProp("MaxTorque", DataType.Vector3);}
    public set MaxTorque(value) {this.SetProp("MaxTorque", DataType.Vector3, value);}
    public get P() {return this.GetProp("P", DataType.Float32);}
    public set P(value) {this.SetProp("P", DataType.Float32, value);}
}

/**@deprecated Deprecated by Roblox*/
export class BodyForce extends BodyMover {
    protected constructor() {super(); this.addClassName("BodyForce");}
    public static New() {return new BodyForce();}
    public get Force() {return this.GetProp("Force", DataType.Vector3);}
    public set Force(value) {this.SetProp("Force", DataType.Vector3, value);}
}

/**@deprecated Deprecated by Roblox*/
export class BodyGyro extends BodyMover {
    protected constructor() {super(); this.addClassName("BodyGyro");}
    public static New() {return new BodyGyro();}
    public get CFrame() {return this.GetProp("CFrame", DataType.CFrame);}
    public set CFrame(value) {this.SetProp("CFrame", DataType.CFrame, value);}
    public get D() {return this.GetProp("D", DataType.Float32);}
    public set D(value) {this.SetProp("D", DataType.Float32, value);}
    public get MaxTorque() {return this.GetProp("MaxTorque", DataType.Vector3);}
    public set MaxTorque(value) {this.SetProp("MaxTorque", DataType.Vector3, value);}
    public get P() {return this.GetProp("P", DataType.Float32);}
    public set P(value) {this.SetProp("P", DataType.Float32, value);}
}

/**@deprecated Deprecated by Roblox*/
export class BodyPosition extends BodyMover {
    protected constructor() {super(); this.addClassName("BodyPosition");}
    public static New() {return new BodyPosition();}
    public get D() {return this.GetProp("D", DataType.Float32);}
    public set D(value) {this.SetProp("D", DataType.Float32, value);}
    public get MaxForce() {return this.GetProp("MaxForce", DataType.Vector3);}
    public set MaxForce(value) {this.SetProp("MaxForce", DataType.Vector3, value);}
    public get P() {return this.GetProp("P", DataType.Float32);}
    public set P(value) {this.SetProp("P", DataType.Float32, value);}
    public get Position() {return this.GetProp("Position", DataType.Vector3);}
    public set Position(value) {this.SetProp("Position", DataType.Vector3, value);}
}

/**@deprecated Deprecated by Roblox*/
export class BodyThrust extends BodyMover {
    protected constructor() {super(); this.addClassName("BodyThrust");}
    public static New() {return new BodyThrust();}
    public get Force() {return this.GetProp("Force", DataType.Vector3);}
    public set Force(value) {this.SetProp("Force", DataType.Vector3, value);}
    public get Location() {return this.GetProp("Location", DataType.Vector3);}
    public set Location(value) {this.SetProp("Location", DataType.Vector3, value);}
}

/**@deprecated Deprecated by Roblox*/
export class BodyVelocity extends BodyMover {
    protected constructor() {super(); this.addClassName("BodyVelocity");}
    public static New() {return new BodyVelocity();}
    public get MaxForce() {return this.GetProp("MaxForce", DataType.Vector3);}
    public set MaxForce(value) {this.SetProp("MaxForce", DataType.Vector3, value);}
    public get P() {return this.GetProp("P", DataType.Float32);}
    public set P(value) {this.SetProp("P", DataType.Float32, value);}
    public get Velocity() {return this.GetProp("Velocity", DataType.Vector3);}
    public set Velocity(value) {this.SetProp("Velocity", DataType.Vector3, value);}
}

/**@deprecated Deprecated by Roblox*/
export class RocketPropulsion extends BodyMover {
    protected constructor() {super(); this.addClassName("RocketPropulsion");}
    public static New() {return new RocketPropulsion();}
    public get CartoonFactor() {return this.GetProp("CartoonFactor", DataType.Float32);}
    public set CartoonFactor(value) {this.SetProp("CartoonFactor", DataType.Float32, value);}
    public get MaxSpeed() {return this.GetProp("MaxSpeed", DataType.Float32);}
    public set MaxSpeed(value) {this.SetProp("MaxSpeed", DataType.Float32, value);}
    public get MaxThrust() {return this.GetProp("MaxThrust", DataType.Float32);}
    public set MaxThrust(value) {this.SetProp("MaxThrust", DataType.Float32, value);}
    public get MaxTorque() {return this.GetProp("MaxTorque", DataType.Vector3);}
    public set MaxTorque(value) {this.SetProp("MaxTorque", DataType.Vector3, value);}
    public get Target() {return this.GetProp("Target", DataType.Referent) as BasePart | undefined;}
    public set Target(value) {this.SetProp("Target", DataType.Referent, value);}
    public get TargetOffset() {return this.GetProp("TargetOffset", DataType.Vector3);}
    public set TargetOffset(value) {this.SetProp("TargetOffset", DataType.Vector3, value);}
    public get TargetRadius() {return this.GetProp("TargetRadius", DataType.Float32);}
    public set TargetRadius(value) {this.SetProp("TargetRadius", DataType.Float32, value);}
    public get ThrustD() {return this.GetProp("ThrustD", DataType.Float32);}
    public set ThrustD(value) {this.SetProp("ThrustD", DataType.Float32, value);}
    public get ThrustP() {return this.GetProp("ThrustP", DataType.Float32);}
    public set ThrustP(value) {this.SetProp("ThrustP", DataType.Float32, value);}
    public get TurnD() {return this.GetProp("TurnD", DataType.Float32);}
    public set TurnD(value) {this.SetProp("TurnD", DataType.Float32, value);}
    public get TurnP() {return this.GetProp("TurnP", DataType.Float32);}
    public set TurnP(value) {this.SetProp("TurnP", DataType.Float32, value);}
}

export class BodyPartDescription extends Instance {
    protected constructor() {super(); this.addClassName("BodyPartDescription");}
    public static New() {return new BodyPartDescription();}
    public get AssetId() {return this.GetProp("AssetId", DataType.Int64);}
    public set AssetId(value) {this.SetProp("AssetId", DataType.Int64, value);}
    public get BodyPart() {return this.GetProp("BodyPart", DataType.Enum) as BodyPart | undefined;}
    public set BodyPart(value) {this.SetProp("BodyPart", DataType.Enum, value);}
    public get Color() {return this.GetProp("Color", DataType.Color3);}
    public set Color(value) {this.SetProp("Color", DataType.Color3, value);}
    public get Instance() {return this.GetProp("Instance", DataType.Referent) as Instance | undefined;}
    public set Instance(value) {this.SetProp("Instance", DataType.Referent, value);}
}

export class Breakpoint extends Instance {
    protected constructor() {super(); this.addClassName("Breakpoint");}
    public static New() {return new Breakpoint();}
}

export class BrowserService extends Instance {
    protected constructor() {super(true); this.addClassName("BrowserService");}
    public static New() {return new BrowserService();}
}

export class BubbleChatMessageProperties extends Instance {
    protected constructor() {super(); this.addClassName("BubbleChatMessageProperties");}
    public static New() {return new BubbleChatMessageProperties();}
}

export class BulkImportService extends Instance {
    protected constructor() {super(true); this.addClassName("BulkImportService");}
    public static New() {return new BulkImportService();}
}

export abstract class CacheableContentProvider extends Instance {
    protected constructor() {super(true); this.addClassName("CacheableContentProvider");}
}

export class HSRDataContentProvider extends CacheableContentProvider {
    protected constructor() {super(); this.addClassName("HSRDataContentProvider");}
    public static New() {return new HSRDataContentProvider();}
}

export class MeshContentProvider extends CacheableContentProvider {
    protected constructor() {super(); this.addClassName("MeshContentProvider");}
    public static New() {return new MeshContentProvider();}
}

export class SolidModelContentProvider extends CacheableContentProvider {
    protected constructor() {super(); this.addClassName("SolidModelContentProvider");}
    public static New() {return new SolidModelContentProvider();}
}

export class CalloutService extends Instance {
    protected constructor() {super(true); this.addClassName("CalloutService");}
    public static New() {return new CalloutService();}
}

export class Camera extends Instance {
    protected constructor() {super(); this.addClassName("Camera");}
    public static New() {return new Camera();}
    public get CFrame() {return this.GetProp("CFrame", DataType.CFrame);}
    public set CFrame(value) {this.SetProp("CFrame", DataType.CFrame, value);}
    public get CameraSubject() {return this.GetProp("CameraSubject", DataType.Referent) as Instance | undefined;}
    public set CameraSubject(value) {this.SetProp("CameraSubject", DataType.Referent, value);}
    public get CameraType() {return this.GetProp("CameraType", DataType.Enum) as CameraType | undefined;}
    public set CameraType(value) {this.SetProp("CameraType", DataType.Enum, value);}
    /**@deprecated Deprecated by Roblox*/
    public get CoordinateFrame() {return this.GetProp("CoordinateFrame", DataType.CFrame);}
    /**@deprecated Deprecated by Roblox*/
    public set CoordinateFrame(value) {this.SetProp("CoordinateFrame", DataType.CFrame, value);}
    public get FieldOfView() {return this.GetProp("FieldOfView", DataType.Float32);}
    public set FieldOfView(value) {this.SetProp("FieldOfView", DataType.Float32, value);}
    public get FieldOfViewMode() {return this.GetProp("FieldOfViewMode", DataType.Enum) as FieldOfViewMode | undefined;}
    public set FieldOfViewMode(value) {this.SetProp("FieldOfViewMode", DataType.Enum, value);}
    public get Focus() {return this.GetProp("Focus", DataType.CFrame);}
    public set Focus(value) {this.SetProp("Focus", DataType.CFrame, value);}
    public get HeadLocked() {return this.GetProp("HeadLocked", DataType.Bool);}
    public set HeadLocked(value) {this.SetProp("HeadLocked", DataType.Bool, value);}
    public get HeadScale() {return this.GetProp("HeadScale", DataType.Float32);}
    public set HeadScale(value) {this.SetProp("HeadScale", DataType.Float32, value);}
    public get VRTiltAndRollEnabled() {return this.GetProp("VRTiltAndRollEnabled", DataType.Bool);}
    public set VRTiltAndRollEnabled(value) {this.SetProp("VRTiltAndRollEnabled", DataType.Bool, value);}
}

export class CaptureService extends Instance {
    protected constructor() {super(true); this.addClassName("CaptureService");}
    public static New() {return new CaptureService();}
}

export class ChangeHistoryService extends Instance {
    protected constructor() {super(true); this.addClassName("ChangeHistoryService");}
    public static New() {return new ChangeHistoryService();}
}

export abstract class CharacterAppearance extends Instance {
    protected constructor() {super(); this.addClassName("CharacterAppearance");}
}

export class BodyColors extends CharacterAppearance {
    protected constructor() {super(); this.addClassName("BodyColors");}
    public static New() {return new BodyColors();}
    public get HeadColor3() {return this.GetProp("HeadColor3", DataType.Color3);}
    public set HeadColor3(value) {this.SetProp("HeadColor3", DataType.Color3, value);}
    public get LeftArmColor3() {return this.GetProp("LeftArmColor3", DataType.Color3);}
    public set LeftArmColor3(value) {this.SetProp("LeftArmColor3", DataType.Color3, value);}
    public get LeftLegColor3() {return this.GetProp("LeftLegColor3", DataType.Color3);}
    public set LeftLegColor3(value) {this.SetProp("LeftLegColor3", DataType.Color3, value);}
    public get RightArmColor3() {return this.GetProp("RightArmColor3", DataType.Color3);}
    public set RightArmColor3(value) {this.SetProp("RightArmColor3", DataType.Color3, value);}
    public get RightLegColor3() {return this.GetProp("RightLegColor3", DataType.Color3);}
    public set RightLegColor3(value) {this.SetProp("RightLegColor3", DataType.Color3, value);}
    public get TorsoColor3() {return this.GetProp("TorsoColor3", DataType.Color3);}
    public set TorsoColor3(value) {this.SetProp("TorsoColor3", DataType.Color3, value);}
}

export class CharacterMesh extends CharacterAppearance {
    protected constructor() {super(); this.addClassName("CharacterMesh");}
    public static New() {return new CharacterMesh();}
    public get BaseTextureId() {return this.GetProp("BaseTextureId", DataType.Int64);}
    public set BaseTextureId(value) {this.SetProp("BaseTextureId", DataType.Int64, value);}
    public get BodyPart() {return this.GetProp("BodyPart", DataType.Enum) as BodyPart | undefined;}
    public set BodyPart(value) {this.SetProp("BodyPart", DataType.Enum, value);}
    public get MeshId() {return this.GetProp("MeshId", DataType.Int64);}
    public set MeshId(value) {this.SetProp("MeshId", DataType.Int64, value);}
    public get OverlayTextureId() {return this.GetProp("OverlayTextureId", DataType.Int64);}
    public set OverlayTextureId(value) {this.SetProp("OverlayTextureId", DataType.Int64, value);}
}

export abstract class Clothing extends CharacterAppearance {
    protected constructor() {super(); this.addClassName("Clothing");}
    public get Color3() {return this.GetProp("Color3", DataType.Color3);}
    public set Color3(value) {this.SetProp("Color3", DataType.Color3, value);}
}

export class Pants extends Clothing {
    protected constructor() {super(); this.addClassName("Pants");}
    public static New() {return new Pants();}
    public get PantsTemplate() {return this.GetProp("PantsTemplate", DataType.String);}
    public set PantsTemplate(value) {this.SetProp("PantsTemplate", DataType.String, value);}
}

export class Shirt extends Clothing {
    protected constructor() {super(); this.addClassName("Shirt");}
    public static New() {return new Shirt();}
    public get ShirtTemplate() {return this.GetProp("ShirtTemplate", DataType.String);}
    public set ShirtTemplate(value) {this.SetProp("ShirtTemplate", DataType.String, value);}
}

export class ShirtGraphic extends CharacterAppearance {
    protected constructor() {super(); this.addClassName("ShirtGraphic");}
    public static New() {return new ShirtGraphic();}
    public get Color3() {return this.GetProp("Color3", DataType.Color3);}
    public set Color3(value) {this.SetProp("Color3", DataType.Color3, value);}
    public get Graphic() {return this.GetProp("Graphic", DataType.String);}
    public set Graphic(value) {this.SetProp("Graphic", DataType.String, value);}
}

/**@deprecated Deprecated by Roblox*/
export class Skin extends CharacterAppearance {
    protected constructor() {super(); this.addClassName("Skin");}
    public static New() {return new Skin();}
    public get SkinColor() {return this.GetProp("SkinColor", DataType.BrickColor);}
    public set SkinColor(value) {this.SetProp("SkinColor", DataType.BrickColor, value);}
}

export class Chat extends Instance {
    protected constructor() {super(true); this.addClassName("Chat");}
    public static New() {return new Chat();}
    public get BubbleChatEnabled() {return this.GetProp("BubbleChatEnabled", DataType.Bool);}
    public set BubbleChatEnabled(value) {this.SetProp("BubbleChatEnabled", DataType.Bool, value);}
    public get LoadDefaultChat() {return this.GetProp("LoadDefaultChat", DataType.Bool);}
    public set LoadDefaultChat(value) {this.SetProp("LoadDefaultChat", DataType.Bool, value);}
}

export class ChatbotUIService extends Instance {
    protected constructor() {super(true); this.addClassName("ChatbotUIService");}
    public static New() {return new ChatbotUIService();}
}

export class ClickDetector extends Instance {
    protected constructor() {super(); this.addClassName("ClickDetector");}
    public static New() {return new ClickDetector();}
    public get CursorIcon() {return this.GetProp("CursorIcon", DataType.String);}
    public set CursorIcon(value) {this.SetProp("CursorIcon", DataType.String, value);}
    public get MaxActivationDistance() {return this.GetProp("MaxActivationDistance", DataType.Float32);}
    public set MaxActivationDistance(value) {this.SetProp("MaxActivationDistance", DataType.Float32, value);}
}

export class DragDetector extends ClickDetector {
    protected constructor() {super(); this.addClassName("DragDetector");}
    public static New() {return new DragDetector();}
    public get ActivatedCursorIcon() {return this.GetProp("ActivatedCursorIcon", DataType.String);}
    public set ActivatedCursorIcon(value) {this.SetProp("ActivatedCursorIcon", DataType.String, value);}
    public get ApplyAtCenterOfMass() {return this.GetProp("ApplyAtCenterOfMass", DataType.Bool);}
    public set ApplyAtCenterOfMass(value) {this.SetProp("ApplyAtCenterOfMass", DataType.Bool, value);}
    public get DragFrame() {return this.GetProp("DragFrame", DataType.CFrame);}
    public set DragFrame(value) {this.SetProp("DragFrame", DataType.CFrame, value);}
    public get DragStyle() {return this.GetProp("DragStyle", DataType.Enum) as DragDetectorDragStyle | undefined;}
    public set DragStyle(value) {this.SetProp("DragStyle", DataType.Enum, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool);}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get GamepadModeSwitchKeyCode() {return this.GetProp("GamepadModeSwitchKeyCode", DataType.Enum) as KeyCode | undefined;}
    public set GamepadModeSwitchKeyCode(value) {this.SetProp("GamepadModeSwitchKeyCode", DataType.Enum, value);}
    public get KeyboardModeSwitchKeyCode() {return this.GetProp("KeyboardModeSwitchKeyCode", DataType.Enum) as KeyCode | undefined;}
    public set KeyboardModeSwitchKeyCode(value) {this.SetProp("KeyboardModeSwitchKeyCode", DataType.Enum, value);}
    public get MaxDragAngle() {return this.GetProp("MaxDragAngle", DataType.Float32);}
    public set MaxDragAngle(value) {this.SetProp("MaxDragAngle", DataType.Float32, value);}
    public get MaxDragTranslation() {return this.GetProp("MaxDragTranslation", DataType.Vector3);}
    public set MaxDragTranslation(value) {this.SetProp("MaxDragTranslation", DataType.Vector3, value);}
    public get MaxForce() {return this.GetProp("MaxForce", DataType.Float32);}
    public set MaxForce(value) {this.SetProp("MaxForce", DataType.Float32, value);}
    public get MaxTorque() {return this.GetProp("MaxTorque", DataType.Float32);}
    public set MaxTorque(value) {this.SetProp("MaxTorque", DataType.Float32, value);}
    public get MinDragAngle() {return this.GetProp("MinDragAngle", DataType.Float32);}
    public set MinDragAngle(value) {this.SetProp("MinDragAngle", DataType.Float32, value);}
    public get MinDragTranslation() {return this.GetProp("MinDragTranslation", DataType.Vector3);}
    public set MinDragTranslation(value) {this.SetProp("MinDragTranslation", DataType.Vector3, value);}
    public get Orientation() {return this.GetProp("Orientation", DataType.Vector3);}
    public set Orientation(value) {this.SetProp("Orientation", DataType.Vector3, value);}
    public get PermissionPolicy() {return this.GetProp("PermissionPolicy", DataType.Enum) as DragDetectorPermissionPolicy | undefined;}
    public set PermissionPolicy(value) {this.SetProp("PermissionPolicy", DataType.Enum, value);}
    public get ReferenceInstance() {return this.GetProp("ReferenceInstance", DataType.Referent) as Instance | undefined;}
    public set ReferenceInstance(value) {this.SetProp("ReferenceInstance", DataType.Referent, value);}
    public get ResponseStyle() {return this.GetProp("ResponseStyle", DataType.Enum) as DragDetectorResponseStyle | undefined;}
    public set ResponseStyle(value) {this.SetProp("ResponseStyle", DataType.Enum, value);}
    public get Responsiveness() {return this.GetProp("Responsiveness", DataType.Float32);}
    public set Responsiveness(value) {this.SetProp("Responsiveness", DataType.Float32, value);}
    public get RunLocally() {return this.GetProp("RunLocally", DataType.Bool);}
    public set RunLocally(value) {this.SetProp("RunLocally", DataType.Bool, value);}
    public get TrackballRadialPullFactor() {return this.GetProp("TrackballRadialPullFactor", DataType.Float32);}
    public set TrackballRadialPullFactor(value) {this.SetProp("TrackballRadialPullFactor", DataType.Float32, value);}
    public get TrackballRollFactor() {return this.GetProp("TrackballRollFactor", DataType.Float32);}
    public set TrackballRollFactor(value) {this.SetProp("TrackballRollFactor", DataType.Float32, value);}
    public get VRSwitchKeyCode() {return this.GetProp("VRSwitchKeyCode", DataType.Enum) as KeyCode | undefined;}
    public set VRSwitchKeyCode(value) {this.SetProp("VRSwitchKeyCode", DataType.Enum, value);}
}

export class Clouds extends Instance {
    protected constructor() {super(); this.addClassName("Clouds");}
    public static New() {return new Clouds();}
    public get Color() {return this.GetProp("Color", DataType.Color3);}
    public set Color(value) {this.SetProp("Color", DataType.Color3, value);}
    public get Cover() {return this.GetProp("Cover", DataType.Float32);}
    public set Cover(value) {this.SetProp("Cover", DataType.Float32, value);}
    public get Density() {return this.GetProp("Density", DataType.Float32);}
    public set Density(value) {this.SetProp("Density", DataType.Float32, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool);}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
}

export class ClusterPacketCache extends Instance {
    protected constructor() {super(true); this.addClassName("ClusterPacketCache");}
    public static New() {return new ClusterPacketCache();}
}

export class CollaboratorsService extends Instance {
    protected constructor() {super(true); this.addClassName("CollaboratorsService");}
    public static New() {return new CollaboratorsService();}
}

export class CollectionService extends Instance {
    protected constructor() {super(true); this.addClassName("CollectionService");}
    public static New() {return new CollectionService();}
}

export class CommandService extends Instance {
    protected constructor() {super(true); this.addClassName("CommandService");}
    public static New() {return new CommandService();}
}

export class CommerceService extends Instance {
    protected constructor() {super(true); this.addClassName("CommerceService");}
    public static New() {return new CommerceService();}
}

export class Configuration extends Instance {
    protected constructor() {super(); this.addClassName("Configuration");}
    public static New() {return new Configuration();}
}

export class ConfigureServerService extends Instance {
    protected constructor() {super(true); this.addClassName("ConfigureServerService");}
    public static New() {return new ConfigureServerService();}
}

export class ConnectivityService extends Instance {
    protected constructor() {super(true); this.addClassName("ConnectivityService");}
    public static New() {return new ConnectivityService();}
}

export abstract class Constraint extends Instance {
    protected constructor() {super(); this.addClassName("Constraint");}
    public get Attachment0() {return this.GetProp("Attachment0", DataType.Referent) as Attachment | undefined;}
    public set Attachment0(value) {this.SetProp("Attachment0", DataType.Referent, value);}
    public get Attachment1() {return this.GetProp("Attachment1", DataType.Referent) as Attachment | undefined;}
    public set Attachment1(value) {this.SetProp("Attachment1", DataType.Referent, value);}
    public get Color() {return this.GetProp("Color", DataType.BrickColor);}
    public set Color(value) {this.SetProp("Color", DataType.BrickColor, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool);}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get Visible() {return this.GetProp("Visible", DataType.Bool);}
    public set Visible(value) {this.SetProp("Visible", DataType.Bool, value);}
}

export class AlignOrientation extends Constraint {
    protected constructor() {super(); this.addClassName("AlignOrientation");}
    public static New() {return new AlignOrientation();}
    public get AlignType() {return this.GetProp("AlignType", DataType.Enum) as AlignType | undefined;}
    public set AlignType(value) {this.SetProp("AlignType", DataType.Enum, value);}
    public get CFrame() {return this.GetProp("CFrame", DataType.CFrame);}
    public set CFrame(value) {this.SetProp("CFrame", DataType.CFrame, value);}
    public get MaxAngularVelocity() {return this.GetProp("MaxAngularVelocity", DataType.Float32);}
    public set MaxAngularVelocity(value) {this.SetProp("MaxAngularVelocity", DataType.Float32, value);}
    public get MaxTorque() {return this.GetProp("MaxTorque", DataType.Float32);}
    public set MaxTorque(value) {this.SetProp("MaxTorque", DataType.Float32, value);}
    public get Mode() {return this.GetProp("Mode", DataType.Enum) as OrientationAlignmentMode | undefined;}
    public set Mode(value) {this.SetProp("Mode", DataType.Enum, value);}
    public get PrimaryAxisOnly() {return this.GetProp("PrimaryAxisOnly", DataType.Bool);}
    public set PrimaryAxisOnly(value) {this.SetProp("PrimaryAxisOnly", DataType.Bool, value);}
    public get ReactionTorqueEnabled() {return this.GetProp("ReactionTorqueEnabled", DataType.Bool);}
    public set ReactionTorqueEnabled(value) {this.SetProp("ReactionTorqueEnabled", DataType.Bool, value);}
    public get Responsiveness() {return this.GetProp("Responsiveness", DataType.Float32);}
    public set Responsiveness(value) {this.SetProp("Responsiveness", DataType.Float32, value);}
    public get RigidityEnabled() {return this.GetProp("RigidityEnabled", DataType.Bool);}
    public set RigidityEnabled(value) {this.SetProp("RigidityEnabled", DataType.Bool, value);}
}

export class AlignPosition extends Constraint {
    protected constructor() {super(); this.addClassName("AlignPosition");}
    public static New() {return new AlignPosition();}
    public get ApplyAtCenterOfMass() {return this.GetProp("ApplyAtCenterOfMass", DataType.Bool);}
    public set ApplyAtCenterOfMass(value) {this.SetProp("ApplyAtCenterOfMass", DataType.Bool, value);}
    public get ForceLimitMode() {return this.GetProp("ForceLimitMode", DataType.Enum) as ForceLimitMode | undefined;}
    public set ForceLimitMode(value) {this.SetProp("ForceLimitMode", DataType.Enum, value);}
    public get ForceRelativeTo() {return this.GetProp("ForceRelativeTo", DataType.Enum) as ActuatorRelativeTo | undefined;}
    public set ForceRelativeTo(value) {this.SetProp("ForceRelativeTo", DataType.Enum, value);}
    public get MaxAxesForce() {return this.GetProp("MaxAxesForce", DataType.Vector3);}
    public set MaxAxesForce(value) {this.SetProp("MaxAxesForce", DataType.Vector3, value);}
    public get MaxForce() {return this.GetProp("MaxForce", DataType.Float32);}
    public set MaxForce(value) {this.SetProp("MaxForce", DataType.Float32, value);}
    public get MaxVelocity() {return this.GetProp("MaxVelocity", DataType.Float32);}
    public set MaxVelocity(value) {this.SetProp("MaxVelocity", DataType.Float32, value);}
    public get Mode() {return this.GetProp("Mode", DataType.Enum) as PositionAlignmentMode | undefined;}
    public set Mode(value) {this.SetProp("Mode", DataType.Enum, value);}
    public get Position() {return this.GetProp("Position", DataType.Vector3);}
    public set Position(value) {this.SetProp("Position", DataType.Vector3, value);}
    public get ReactionForceEnabled() {return this.GetProp("ReactionForceEnabled", DataType.Bool);}
    public set ReactionForceEnabled(value) {this.SetProp("ReactionForceEnabled", DataType.Bool, value);}
    public get Responsiveness() {return this.GetProp("Responsiveness", DataType.Float32);}
    public set Responsiveness(value) {this.SetProp("Responsiveness", DataType.Float32, value);}
    public get RigidityEnabled() {return this.GetProp("RigidityEnabled", DataType.Bool);}
    public set RigidityEnabled(value) {this.SetProp("RigidityEnabled", DataType.Bool, value);}
}

export class AngularVelocity extends Constraint {
    protected constructor() {super(); this.addClassName("AngularVelocity");}
    public static New() {return new AngularVelocity();}
    public get AngularVelocity() {return this.GetProp("AngularVelocity", DataType.Vector3);}
    public set AngularVelocity(value) {this.SetProp("AngularVelocity", DataType.Vector3, value);}
    public get MaxTorque() {return this.GetProp("MaxTorque", DataType.Float32);}
    public set MaxTorque(value) {this.SetProp("MaxTorque", DataType.Float32, value);}
    public get ReactionTorqueEnabled() {return this.GetProp("ReactionTorqueEnabled", DataType.Bool);}
    public set ReactionTorqueEnabled(value) {this.SetProp("ReactionTorqueEnabled", DataType.Bool, value);}
    public get RelativeTo() {return this.GetProp("RelativeTo", DataType.Enum) as ActuatorRelativeTo | undefined;}
    public set RelativeTo(value) {this.SetProp("RelativeTo", DataType.Enum, value);}
}

export class AnimationConstraint extends Constraint {
    protected constructor() {super(); this.addClassName("AnimationConstraint");}
    public static New() {return new AnimationConstraint();}
    public get IsKinematic() {return this.GetProp("IsKinematic", DataType.Bool);}
    public set IsKinematic(value) {this.SetProp("IsKinematic", DataType.Bool, value);}
    public get MaxForce() {return this.GetProp("MaxForce", DataType.Float32);}
    public set MaxForce(value) {this.SetProp("MaxForce", DataType.Float32, value);}
    public get MaxTorque() {return this.GetProp("MaxTorque", DataType.Float32);}
    public set MaxTorque(value) {this.SetProp("MaxTorque", DataType.Float32, value);}
    public get Transform() {return this.GetProp("Transform", DataType.CFrame);}
    public set Transform(value) {this.SetProp("Transform", DataType.CFrame, value);}
}

export class BallSocketConstraint extends Constraint {
    protected constructor() {super(); this.addClassName("BallSocketConstraint");}
    public static New() {return new BallSocketConstraint();}
    public get LimitsEnabled() {return this.GetProp("LimitsEnabled", DataType.Bool);}
    public set LimitsEnabled(value) {this.SetProp("LimitsEnabled", DataType.Bool, value);}
    public get MaxFrictionTorqueXml() {return this.GetProp("MaxFrictionTorqueXml", DataType.Float32);}
    public set MaxFrictionTorqueXml(value) {this.SetProp("MaxFrictionTorqueXml", DataType.Float32, value);}
    public get Radius() {return this.GetProp("Radius", DataType.Float32);}
    public set Radius(value) {this.SetProp("Radius", DataType.Float32, value);}
    public get Restitution() {return this.GetProp("Restitution", DataType.Float32);}
    public set Restitution(value) {this.SetProp("Restitution", DataType.Float32, value);}
    public get TwistLimitsEnabled() {return this.GetProp("TwistLimitsEnabled", DataType.Bool);}
    public set TwistLimitsEnabled(value) {this.SetProp("TwistLimitsEnabled", DataType.Bool, value);}
    public get TwistLowerAngle() {return this.GetProp("TwistLowerAngle", DataType.Float32);}
    public set TwistLowerAngle(value) {this.SetProp("TwistLowerAngle", DataType.Float32, value);}
    public get TwistUpperAngle() {return this.GetProp("TwistUpperAngle", DataType.Float32);}
    public set TwistUpperAngle(value) {this.SetProp("TwistUpperAngle", DataType.Float32, value);}
    public get UpperAngle() {return this.GetProp("UpperAngle", DataType.Float32);}
    public set UpperAngle(value) {this.SetProp("UpperAngle", DataType.Float32, value);}
}

export class HingeConstraint extends Constraint {
    protected constructor() {super(); this.addClassName("HingeConstraint");}
    public static New() {return new HingeConstraint();}
    public get ActuatorType() {return this.GetProp("ActuatorType", DataType.Enum) as ActuatorType | undefined;}
    public set ActuatorType(value) {this.SetProp("ActuatorType", DataType.Enum, value);}
    public get AngularResponsiveness() {return this.GetProp("AngularResponsiveness", DataType.Float32);}
    public set AngularResponsiveness(value) {this.SetProp("AngularResponsiveness", DataType.Float32, value);}
    public get AngularSpeed() {return this.GetProp("AngularSpeed", DataType.Float32);}
    public set AngularSpeed(value) {this.SetProp("AngularSpeed", DataType.Float32, value);}
    public get AngularVelocity() {return this.GetProp("AngularVelocity", DataType.Float32);}
    public set AngularVelocity(value) {this.SetProp("AngularVelocity", DataType.Float32, value);}
    public get LimitsEnabled() {return this.GetProp("LimitsEnabled", DataType.Bool);}
    public set LimitsEnabled(value) {this.SetProp("LimitsEnabled", DataType.Bool, value);}
    public get LowerAngle() {return this.GetProp("LowerAngle", DataType.Float32);}
    public set LowerAngle(value) {this.SetProp("LowerAngle", DataType.Float32, value);}
    public get MotorMaxAcceleration() {return this.GetProp("MotorMaxAcceleration", DataType.Float32);}
    public set MotorMaxAcceleration(value) {this.SetProp("MotorMaxAcceleration", DataType.Float32, value);}
    public get MotorMaxTorque() {return this.GetProp("MotorMaxTorque", DataType.Float32);}
    public set MotorMaxTorque(value) {this.SetProp("MotorMaxTorque", DataType.Float32, value);}
    public get Radius() {return this.GetProp("Radius", DataType.Float32);}
    public set Radius(value) {this.SetProp("Radius", DataType.Float32, value);}
    public get Restitution() {return this.GetProp("Restitution", DataType.Float32);}
    public set Restitution(value) {this.SetProp("Restitution", DataType.Float32, value);}
    public get ServoMaxTorque() {return this.GetProp("ServoMaxTorque", DataType.Float32);}
    public set ServoMaxTorque(value) {this.SetProp("ServoMaxTorque", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get SoftlockServoUponReachingTarget() {return this.GetProp("SoftlockServoUponReachingTarget", DataType.Bool);}
    /**@deprecated Deprecated by Roblox*/
    public set SoftlockServoUponReachingTarget(value) {this.SetProp("SoftlockServoUponReachingTarget", DataType.Bool, value);}
    public get TargetAngle() {return this.GetProp("TargetAngle", DataType.Float32);}
    public set TargetAngle(value) {this.SetProp("TargetAngle", DataType.Float32, value);}
    public get UpperAngle() {return this.GetProp("UpperAngle", DataType.Float32);}
    public set UpperAngle(value) {this.SetProp("UpperAngle", DataType.Float32, value);}
}

export class LineForce extends Constraint {
    protected constructor() {super(); this.addClassName("LineForce");}
    public static New() {return new LineForce();}
    public get ApplyAtCenterOfMass() {return this.GetProp("ApplyAtCenterOfMass", DataType.Bool);}
    public set ApplyAtCenterOfMass(value) {this.SetProp("ApplyAtCenterOfMass", DataType.Bool, value);}
    public get InverseSquareLaw() {return this.GetProp("InverseSquareLaw", DataType.Bool);}
    public set InverseSquareLaw(value) {this.SetProp("InverseSquareLaw", DataType.Bool, value);}
    public get Magnitude() {return this.GetProp("Magnitude", DataType.Float32);}
    public set Magnitude(value) {this.SetProp("Magnitude", DataType.Float32, value);}
    public get MaxForce() {return this.GetProp("MaxForce", DataType.Float32);}
    public set MaxForce(value) {this.SetProp("MaxForce", DataType.Float32, value);}
    public get ReactionForceEnabled() {return this.GetProp("ReactionForceEnabled", DataType.Bool);}
    public set ReactionForceEnabled(value) {this.SetProp("ReactionForceEnabled", DataType.Bool, value);}
}

export class LinearVelocity extends Constraint {
    protected constructor() {super(); this.addClassName("LinearVelocity");}
    public static New() {return new LinearVelocity();}
    public get ForceLimitMode() {return this.GetProp("ForceLimitMode", DataType.Enum) as ForceLimitMode | undefined;}
    public set ForceLimitMode(value) {this.SetProp("ForceLimitMode", DataType.Enum, value);}
    public get ForceLimitsEnabled() {return this.GetProp("ForceLimitsEnabled", DataType.Bool);}
    public set ForceLimitsEnabled(value) {this.SetProp("ForceLimitsEnabled", DataType.Bool, value);}
    public get LineDirection() {return this.GetProp("LineDirection", DataType.Vector3);}
    public set LineDirection(value) {this.SetProp("LineDirection", DataType.Vector3, value);}
    public get LineVelocity() {return this.GetProp("LineVelocity", DataType.Float32);}
    public set LineVelocity(value) {this.SetProp("LineVelocity", DataType.Float32, value);}
    public get MaxAxesForce() {return this.GetProp("MaxAxesForce", DataType.Vector3);}
    public set MaxAxesForce(value) {this.SetProp("MaxAxesForce", DataType.Vector3, value);}
    public get MaxForce() {return this.GetProp("MaxForce", DataType.Float32);}
    public set MaxForce(value) {this.SetProp("MaxForce", DataType.Float32, value);}
    public get MaxPlanarAxesForce() {return this.GetProp("MaxPlanarAxesForce", DataType.Vector2);}
    public set MaxPlanarAxesForce(value) {this.SetProp("MaxPlanarAxesForce", DataType.Vector2, value);}
    public get PlaneVelocity() {return this.GetProp("PlaneVelocity", DataType.Vector2);}
    public set PlaneVelocity(value) {this.SetProp("PlaneVelocity", DataType.Vector2, value);}
    public get PrimaryTangentAxis() {return this.GetProp("PrimaryTangentAxis", DataType.Vector3);}
    public set PrimaryTangentAxis(value) {this.SetProp("PrimaryTangentAxis", DataType.Vector3, value);}
    public get RelativeTo() {return this.GetProp("RelativeTo", DataType.Enum) as ActuatorRelativeTo | undefined;}
    public set RelativeTo(value) {this.SetProp("RelativeTo", DataType.Enum, value);}
    public get SecondaryTangentAxis() {return this.GetProp("SecondaryTangentAxis", DataType.Vector3);}
    public set SecondaryTangentAxis(value) {this.SetProp("SecondaryTangentAxis", DataType.Vector3, value);}
    public get VectorVelocity() {return this.GetProp("VectorVelocity", DataType.Vector3);}
    public set VectorVelocity(value) {this.SetProp("VectorVelocity", DataType.Vector3, value);}
    public get VelocityConstraintMode() {return this.GetProp("VelocityConstraintMode", DataType.Enum) as VelocityConstraintMode | undefined;}
    public set VelocityConstraintMode(value) {this.SetProp("VelocityConstraintMode", DataType.Enum, value);}
}

export class PlaneConstraint extends Constraint {
    protected constructor() {super(); this.addClassName("PlaneConstraint");}
    public static New() {return new PlaneConstraint();}
}

/**@deprecated Deprecated by Roblox*/
export class Plane extends PlaneConstraint {
    protected constructor() {super(); this.addClassName("Plane");}
    public static New() {return new Plane();}
}

export class RigidConstraint extends Constraint {
    protected constructor() {super(); this.addClassName("RigidConstraint");}
    public static New() {return new RigidConstraint();}
}

export class RodConstraint extends Constraint {
    protected constructor() {super(); this.addClassName("RodConstraint");}
    public static New() {return new RodConstraint();}
    public get Length() {return this.GetProp("Length", DataType.Float32);}
    public set Length(value) {this.SetProp("Length", DataType.Float32, value);}
    public get LimitAngle0() {return this.GetProp("LimitAngle0", DataType.Float32);}
    public set LimitAngle0(value) {this.SetProp("LimitAngle0", DataType.Float32, value);}
    public get LimitAngle1() {return this.GetProp("LimitAngle1", DataType.Float32);}
    public set LimitAngle1(value) {this.SetProp("LimitAngle1", DataType.Float32, value);}
    public get LimitsEnabled() {return this.GetProp("LimitsEnabled", DataType.Bool);}
    public set LimitsEnabled(value) {this.SetProp("LimitsEnabled", DataType.Bool, value);}
    public get Thickness() {return this.GetProp("Thickness", DataType.Float32);}
    public set Thickness(value) {this.SetProp("Thickness", DataType.Float32, value);}
}

export class RopeConstraint extends Constraint {
    protected constructor() {super(); this.addClassName("RopeConstraint");}
    public static New() {return new RopeConstraint();}
    public get Length() {return this.GetProp("Length", DataType.Float32);}
    public set Length(value) {this.SetProp("Length", DataType.Float32, value);}
    public get Restitution() {return this.GetProp("Restitution", DataType.Float32);}
    public set Restitution(value) {this.SetProp("Restitution", DataType.Float32, value);}
    public get Thickness() {return this.GetProp("Thickness", DataType.Float32);}
    public set Thickness(value) {this.SetProp("Thickness", DataType.Float32, value);}
    public get WinchEnabled() {return this.GetProp("WinchEnabled", DataType.Bool);}
    public set WinchEnabled(value) {this.SetProp("WinchEnabled", DataType.Bool, value);}
    public get WinchForce() {return this.GetProp("WinchForce", DataType.Float32);}
    public set WinchForce(value) {this.SetProp("WinchForce", DataType.Float32, value);}
    public get WinchResponsiveness() {return this.GetProp("WinchResponsiveness", DataType.Float32);}
    public set WinchResponsiveness(value) {this.SetProp("WinchResponsiveness", DataType.Float32, value);}
    public get WinchSpeed() {return this.GetProp("WinchSpeed", DataType.Float32);}
    public set WinchSpeed(value) {this.SetProp("WinchSpeed", DataType.Float32, value);}
    public get WinchTarget() {return this.GetProp("WinchTarget", DataType.Float32);}
    public set WinchTarget(value) {this.SetProp("WinchTarget", DataType.Float32, value);}
}

export abstract class SlidingBallConstraint extends Constraint {
    protected constructor() {super(); this.addClassName("SlidingBallConstraint");}
    public get ActuatorType() {return this.GetProp("ActuatorType", DataType.Enum) as ActuatorType | undefined;}
    public set ActuatorType(value) {this.SetProp("ActuatorType", DataType.Enum, value);}
    public get LimitsEnabled() {return this.GetProp("LimitsEnabled", DataType.Bool);}
    public set LimitsEnabled(value) {this.SetProp("LimitsEnabled", DataType.Bool, value);}
    public get LinearResponsiveness() {return this.GetProp("LinearResponsiveness", DataType.Float32);}
    public set LinearResponsiveness(value) {this.SetProp("LinearResponsiveness", DataType.Float32, value);}
    public get LowerLimit() {return this.GetProp("LowerLimit", DataType.Float32);}
    public set LowerLimit(value) {this.SetProp("LowerLimit", DataType.Float32, value);}
    public get MotorMaxAcceleration() {return this.GetProp("MotorMaxAcceleration", DataType.Float32);}
    public set MotorMaxAcceleration(value) {this.SetProp("MotorMaxAcceleration", DataType.Float32, value);}
    public get MotorMaxForce() {return this.GetProp("MotorMaxForce", DataType.Float32);}
    public set MotorMaxForce(value) {this.SetProp("MotorMaxForce", DataType.Float32, value);}
    public get Restitution() {return this.GetProp("Restitution", DataType.Float32);}
    public set Restitution(value) {this.SetProp("Restitution", DataType.Float32, value);}
    public get ServoMaxForce() {return this.GetProp("ServoMaxForce", DataType.Float32);}
    public set ServoMaxForce(value) {this.SetProp("ServoMaxForce", DataType.Float32, value);}
    public get Size() {return this.GetProp("Size", DataType.Float32);}
    public set Size(value) {this.SetProp("Size", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get SoftlockServoUponReachingTarget() {return this.GetProp("SoftlockServoUponReachingTarget", DataType.Bool);}
    /**@deprecated Deprecated by Roblox*/
    public set SoftlockServoUponReachingTarget(value) {this.SetProp("SoftlockServoUponReachingTarget", DataType.Bool, value);}
    public get Speed() {return this.GetProp("Speed", DataType.Float32);}
    public set Speed(value) {this.SetProp("Speed", DataType.Float32, value);}
    public get TargetPosition() {return this.GetProp("TargetPosition", DataType.Float32);}
    public set TargetPosition(value) {this.SetProp("TargetPosition", DataType.Float32, value);}
    public get UpperLimit() {return this.GetProp("UpperLimit", DataType.Float32);}
    public set UpperLimit(value) {this.SetProp("UpperLimit", DataType.Float32, value);}
    public get Velocity() {return this.GetProp("Velocity", DataType.Float32);}
    public set Velocity(value) {this.SetProp("Velocity", DataType.Float32, value);}
}

export class CylindricalConstraint extends SlidingBallConstraint {
    protected constructor() {super(); this.addClassName("CylindricalConstraint");}
    public static New() {return new CylindricalConstraint();}
    public get AngularActuatorType() {return this.GetProp("AngularActuatorType", DataType.Enum) as ActuatorType | undefined;}
    public set AngularActuatorType(value) {this.SetProp("AngularActuatorType", DataType.Enum, value);}
    public get AngularLimitsEnabled() {return this.GetProp("AngularLimitsEnabled", DataType.Bool);}
    public set AngularLimitsEnabled(value) {this.SetProp("AngularLimitsEnabled", DataType.Bool, value);}
    public get AngularResponsiveness() {return this.GetProp("AngularResponsiveness", DataType.Float32);}
    public set AngularResponsiveness(value) {this.SetProp("AngularResponsiveness", DataType.Float32, value);}
    public get AngularRestitution() {return this.GetProp("AngularRestitution", DataType.Float32);}
    public set AngularRestitution(value) {this.SetProp("AngularRestitution", DataType.Float32, value);}
    public get AngularSpeed() {return this.GetProp("AngularSpeed", DataType.Float32);}
    public set AngularSpeed(value) {this.SetProp("AngularSpeed", DataType.Float32, value);}
    public get AngularVelocity() {return this.GetProp("AngularVelocity", DataType.Float32);}
    public set AngularVelocity(value) {this.SetProp("AngularVelocity", DataType.Float32, value);}
    public get InclinationAngle() {return this.GetProp("InclinationAngle", DataType.Float32);}
    public set InclinationAngle(value) {this.SetProp("InclinationAngle", DataType.Float32, value);}
    public get LowerAngle() {return this.GetProp("LowerAngle", DataType.Float32);}
    public set LowerAngle(value) {this.SetProp("LowerAngle", DataType.Float32, value);}
    public get MotorMaxAngularAcceleration() {return this.GetProp("MotorMaxAngularAcceleration", DataType.Float32);}
    public set MotorMaxAngularAcceleration(value) {this.SetProp("MotorMaxAngularAcceleration", DataType.Float32, value);}
    public get MotorMaxTorque() {return this.GetProp("MotorMaxTorque", DataType.Float32);}
    public set MotorMaxTorque(value) {this.SetProp("MotorMaxTorque", DataType.Float32, value);}
    public get RotationAxisVisible() {return this.GetProp("RotationAxisVisible", DataType.Bool);}
    public set RotationAxisVisible(value) {this.SetProp("RotationAxisVisible", DataType.Bool, value);}
    public get ServoMaxTorque() {return this.GetProp("ServoMaxTorque", DataType.Float32);}
    public set ServoMaxTorque(value) {this.SetProp("ServoMaxTorque", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get SoftlockAngularServoUponReachingTarget() {return this.GetProp("SoftlockAngularServoUponReachingTarget", DataType.Bool);}
    /**@deprecated Deprecated by Roblox*/
    public set SoftlockAngularServoUponReachingTarget(value) {this.SetProp("SoftlockAngularServoUponReachingTarget", DataType.Bool, value);}
    public get TargetAngle() {return this.GetProp("TargetAngle", DataType.Float32);}
    public set TargetAngle(value) {this.SetProp("TargetAngle", DataType.Float32, value);}
    public get UpperAngle() {return this.GetProp("UpperAngle", DataType.Float32);}
    public set UpperAngle(value) {this.SetProp("UpperAngle", DataType.Float32, value);}
}

export class PrismaticConstraint extends SlidingBallConstraint {
    protected constructor() {super(); this.addClassName("PrismaticConstraint");}
    public static New() {return new PrismaticConstraint();}
}

export class SpringConstraint extends Constraint {
    protected constructor() {super(); this.addClassName("SpringConstraint");}
    public static New() {return new SpringConstraint();}
    public get Coils() {return this.GetProp("Coils", DataType.Float32);}
    public set Coils(value) {this.SetProp("Coils", DataType.Float32, value);}
    public get Damping() {return this.GetProp("Damping", DataType.Float32);}
    public set Damping(value) {this.SetProp("Damping", DataType.Float32, value);}
    public get FreeLength() {return this.GetProp("FreeLength", DataType.Float32);}
    public set FreeLength(value) {this.SetProp("FreeLength", DataType.Float32, value);}
    public get LimitsEnabled() {return this.GetProp("LimitsEnabled", DataType.Bool);}
    public set LimitsEnabled(value) {this.SetProp("LimitsEnabled", DataType.Bool, value);}
    public get MaxForce() {return this.GetProp("MaxForce", DataType.Float32);}
    public set MaxForce(value) {this.SetProp("MaxForce", DataType.Float32, value);}
    public get MaxLength() {return this.GetProp("MaxLength", DataType.Float32);}
    public set MaxLength(value) {this.SetProp("MaxLength", DataType.Float32, value);}
    public get MinLength() {return this.GetProp("MinLength", DataType.Float32);}
    public set MinLength(value) {this.SetProp("MinLength", DataType.Float32, value);}
    public get Radius() {return this.GetProp("Radius", DataType.Float32);}
    public set Radius(value) {this.SetProp("Radius", DataType.Float32, value);}
    public get Stiffness() {return this.GetProp("Stiffness", DataType.Float32);}
    public set Stiffness(value) {this.SetProp("Stiffness", DataType.Float32, value);}
    public get Thickness() {return this.GetProp("Thickness", DataType.Float32);}
    public set Thickness(value) {this.SetProp("Thickness", DataType.Float32, value);}
}

export class Torque extends Constraint {
    protected constructor() {super(); this.addClassName("Torque");}
    public static New() {return new Torque();}
    public get RelativeTo() {return this.GetProp("RelativeTo", DataType.Enum) as ActuatorRelativeTo | undefined;}
    public set RelativeTo(value) {this.SetProp("RelativeTo", DataType.Enum, value);}
    public get Torque() {return this.GetProp("Torque", DataType.Vector3);}
    public set Torque(value) {this.SetProp("Torque", DataType.Vector3, value);}
}

export class TorsionSpringConstraint extends Constraint {
    protected constructor() {super(); this.addClassName("TorsionSpringConstraint");}
    public static New() {return new TorsionSpringConstraint();}
    public get Coils() {return this.GetProp("Coils", DataType.Float32);}
    public set Coils(value) {this.SetProp("Coils", DataType.Float32, value);}
    public get Damping() {return this.GetProp("Damping", DataType.Float32);}
    public set Damping(value) {this.SetProp("Damping", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get LimitEnabled() {return this.GetProp("LimitEnabled", DataType.Bool);}
    /**@deprecated Deprecated by Roblox*/
    public set LimitEnabled(value) {this.SetProp("LimitEnabled", DataType.Bool, value);}
    public get LimitsEnabled() {return this.GetProp("LimitsEnabled", DataType.Bool);}
    public set LimitsEnabled(value) {this.SetProp("LimitsEnabled", DataType.Bool, value);}
    public get MaxAngle() {return this.GetProp("MaxAngle", DataType.Float32);}
    public set MaxAngle(value) {this.SetProp("MaxAngle", DataType.Float32, value);}
    public get MaxTorque() {return this.GetProp("MaxTorque", DataType.Float32);}
    public set MaxTorque(value) {this.SetProp("MaxTorque", DataType.Float32, value);}
    public get Radius() {return this.GetProp("Radius", DataType.Float32);}
    public set Radius(value) {this.SetProp("Radius", DataType.Float32, value);}
    public get Restitution() {return this.GetProp("Restitution", DataType.Float32);}
    public set Restitution(value) {this.SetProp("Restitution", DataType.Float32, value);}
    public get Stiffness() {return this.GetProp("Stiffness", DataType.Float32);}
    public set Stiffness(value) {this.SetProp("Stiffness", DataType.Float32, value);}
}

export class UniversalConstraint extends Constraint {
    protected constructor() {super(); this.addClassName("UniversalConstraint");}
    public static New() {return new UniversalConstraint();}
    public get LimitsEnabled() {return this.GetProp("LimitsEnabled", DataType.Bool);}
    public set LimitsEnabled(value) {this.SetProp("LimitsEnabled", DataType.Bool, value);}
    public get MaxAngle() {return this.GetProp("MaxAngle", DataType.Float32);}
    public set MaxAngle(value) {this.SetProp("MaxAngle", DataType.Float32, value);}
    public get Radius() {return this.GetProp("Radius", DataType.Float32);}
    public set Radius(value) {this.SetProp("Radius", DataType.Float32, value);}
    public get Restitution() {return this.GetProp("Restitution", DataType.Float32);}
    public set Restitution(value) {this.SetProp("Restitution", DataType.Float32, value);}
}

export class VectorForce extends Constraint {
    protected constructor() {super(); this.addClassName("VectorForce");}
    public static New() {return new VectorForce();}
    public get ApplyAtCenterOfMass() {return this.GetProp("ApplyAtCenterOfMass", DataType.Bool);}
    public set ApplyAtCenterOfMass(value) {this.SetProp("ApplyAtCenterOfMass", DataType.Bool, value);}
    public get Force() {return this.GetProp("Force", DataType.Vector3);}
    public set Force(value) {this.SetProp("Force", DataType.Vector3, value);}
    public get RelativeTo() {return this.GetProp("RelativeTo", DataType.Enum) as ActuatorRelativeTo | undefined;}
    public set RelativeTo(value) {this.SetProp("RelativeTo", DataType.Enum, value);}
}

export class ContentProvider extends Instance {
    protected constructor() {super(true); this.addClassName("ContentProvider");}
    public static New() {return new ContentProvider();}
}

export class ContextActionService extends Instance {
    protected constructor() {super(true); this.addClassName("ContextActionService");}
    public static New() {return new ContextActionService();}
}

export abstract class Controller extends Instance {
    protected constructor() {super(); this.addClassName("Controller");}
}

export class HumanoidController extends Controller {
    protected constructor() {super(); this.addClassName("HumanoidController");}
    public static New() {return new HumanoidController();}
}

export class SkateboardController extends Controller {
    protected constructor() {super(); this.addClassName("SkateboardController");}
    public static New() {return new SkateboardController();}
}

export class VehicleController extends Controller {
    protected constructor() {super(); this.addClassName("VehicleController");}
    public static New() {return new VehicleController();}
}

export abstract class ControllerBase extends Instance {
    protected constructor() {super(); this.addClassName("ControllerBase");}
    public get BalanceRigidityEnabled() {return this.GetProp("BalanceRigidityEnabled", DataType.Bool);}
    public set BalanceRigidityEnabled(value) {this.SetProp("BalanceRigidityEnabled", DataType.Bool, value);}
    public get MoveSpeedFactor() {return this.GetProp("MoveSpeedFactor", DataType.Float32);}
    public set MoveSpeedFactor(value) {this.SetProp("MoveSpeedFactor", DataType.Float32, value);}
}

export class AirController extends ControllerBase {
    protected constructor() {super(); this.addClassName("AirController");}
    public static New() {return new AirController();}
    public get BalanceMaxTorque() {return this.GetProp("BalanceMaxTorque", DataType.Float32);}
    public set BalanceMaxTorque(value) {this.SetProp("BalanceMaxTorque", DataType.Float32, value);}
    public get BalanceSpeed() {return this.GetProp("BalanceSpeed", DataType.Float32);}
    public set BalanceSpeed(value) {this.SetProp("BalanceSpeed", DataType.Float32, value);}
    public get MaintainAngularMomentum() {return this.GetProp("MaintainAngularMomentum", DataType.Bool);}
    public set MaintainAngularMomentum(value) {this.SetProp("MaintainAngularMomentum", DataType.Bool, value);}
    public get MaintainLinearMomentum() {return this.GetProp("MaintainLinearMomentum", DataType.Bool);}
    public set MaintainLinearMomentum(value) {this.SetProp("MaintainLinearMomentum", DataType.Bool, value);}
    public get MoveMaxForce() {return this.GetProp("MoveMaxForce", DataType.Float32);}
    public set MoveMaxForce(value) {this.SetProp("MoveMaxForce", DataType.Float32, value);}
    public get TurnMaxTorque() {return this.GetProp("TurnMaxTorque", DataType.Float32);}
    public set TurnMaxTorque(value) {this.SetProp("TurnMaxTorque", DataType.Float32, value);}
    public get TurnSpeedFactor() {return this.GetProp("TurnSpeedFactor", DataType.Float32);}
    public set TurnSpeedFactor(value) {this.SetProp("TurnSpeedFactor", DataType.Float32, value);}
}

export class ClimbController extends ControllerBase {
    protected constructor() {super(); this.addClassName("ClimbController");}
    public static New() {return new ClimbController();}
    public get AccelerationTime() {return this.GetProp("AccelerationTime", DataType.Float32);}
    public set AccelerationTime(value) {this.SetProp("AccelerationTime", DataType.Float32, value);}
    public get BalanceMaxTorque() {return this.GetProp("BalanceMaxTorque", DataType.Float32);}
    public set BalanceMaxTorque(value) {this.SetProp("BalanceMaxTorque", DataType.Float32, value);}
    public get BalanceSpeed() {return this.GetProp("BalanceSpeed", DataType.Float32);}
    public set BalanceSpeed(value) {this.SetProp("BalanceSpeed", DataType.Float32, value);}
    public get MoveMaxForce() {return this.GetProp("MoveMaxForce", DataType.Float32);}
    public set MoveMaxForce(value) {this.SetProp("MoveMaxForce", DataType.Float32, value);}
}

export class GroundController extends ControllerBase {
    protected constructor() {super(); this.addClassName("GroundController");}
    public static New() {return new GroundController();}
    public get AccelerationLean() {return this.GetProp("AccelerationLean", DataType.Float32);}
    public set AccelerationLean(value) {this.SetProp("AccelerationLean", DataType.Float32, value);}
    public get AccelerationTime() {return this.GetProp("AccelerationTime", DataType.Float32);}
    public set AccelerationTime(value) {this.SetProp("AccelerationTime", DataType.Float32, value);}
    public get BalanceMaxTorque() {return this.GetProp("BalanceMaxTorque", DataType.Float32);}
    public set BalanceMaxTorque(value) {this.SetProp("BalanceMaxTorque", DataType.Float32, value);}
    public get BalanceSpeed() {return this.GetProp("BalanceSpeed", DataType.Float32);}
    public set BalanceSpeed(value) {this.SetProp("BalanceSpeed", DataType.Float32, value);}
    public get DecelerationTime() {return this.GetProp("DecelerationTime", DataType.Float32);}
    public set DecelerationTime(value) {this.SetProp("DecelerationTime", DataType.Float32, value);}
    public get Friction() {return this.GetProp("Friction", DataType.Float32);}
    public set Friction(value) {this.SetProp("Friction", DataType.Float32, value);}
    public get FrictionWeight() {return this.GetProp("FrictionWeight", DataType.Float32);}
    public set FrictionWeight(value) {this.SetProp("FrictionWeight", DataType.Float32, value);}
    public get GroundOffset() {return this.GetProp("GroundOffset", DataType.Float32);}
    public set GroundOffset(value) {this.SetProp("GroundOffset", DataType.Float32, value);}
    public get StandForce() {return this.GetProp("StandForce", DataType.Float32);}
    public set StandForce(value) {this.SetProp("StandForce", DataType.Float32, value);}
    public get StandSpeed() {return this.GetProp("StandSpeed", DataType.Float32);}
    public set StandSpeed(value) {this.SetProp("StandSpeed", DataType.Float32, value);}
    public get TurnSpeedFactor() {return this.GetProp("TurnSpeedFactor", DataType.Float32);}
    public set TurnSpeedFactor(value) {this.SetProp("TurnSpeedFactor", DataType.Float32, value);}
}

export class SwimController extends ControllerBase {
    protected constructor() {super(); this.addClassName("SwimController");}
    public static New() {return new SwimController();}
    public get AccelerationTime() {return this.GetProp("AccelerationTime", DataType.Float32);}
    public set AccelerationTime(value) {this.SetProp("AccelerationTime", DataType.Float32, value);}
    public get PitchMaxTorque() {return this.GetProp("PitchMaxTorque", DataType.Float32);}
    public set PitchMaxTorque(value) {this.SetProp("PitchMaxTorque", DataType.Float32, value);}
    public get PitchSpeedFactor() {return this.GetProp("PitchSpeedFactor", DataType.Float32);}
    public set PitchSpeedFactor(value) {this.SetProp("PitchSpeedFactor", DataType.Float32, value);}
    public get RollMaxTorque() {return this.GetProp("RollMaxTorque", DataType.Float32);}
    public set RollMaxTorque(value) {this.SetProp("RollMaxTorque", DataType.Float32, value);}
    public get RollSpeedFactor() {return this.GetProp("RollSpeedFactor", DataType.Float32);}
    public set RollSpeedFactor(value) {this.SetProp("RollSpeedFactor", DataType.Float32, value);}
}

export class ControllerManager extends Instance {
    protected constructor() {super(); this.addClassName("ControllerManager");}
    public static New() {return new ControllerManager();}
    public get ActiveController() {return this.GetProp("ActiveController", DataType.Referent) as ControllerBase | undefined;}
    public set ActiveController(value) {this.SetProp("ActiveController", DataType.Referent, value);}
    public get BaseMoveSpeed() {return this.GetProp("BaseMoveSpeed", DataType.Float32);}
    public set BaseMoveSpeed(value) {this.SetProp("BaseMoveSpeed", DataType.Float32, value);}
    public get BaseTurnSpeed() {return this.GetProp("BaseTurnSpeed", DataType.Float32);}
    public set BaseTurnSpeed(value) {this.SetProp("BaseTurnSpeed", DataType.Float32, value);}
    public get ClimbSensor() {return this.GetProp("ClimbSensor", DataType.Referent) as ControllerSensor | undefined;}
    public set ClimbSensor(value) {this.SetProp("ClimbSensor", DataType.Referent, value);}
    public get FacingDirection() {return this.GetProp("FacingDirection", DataType.Vector3);}
    public set FacingDirection(value) {this.SetProp("FacingDirection", DataType.Vector3, value);}
    public get GroundSensor() {return this.GetProp("GroundSensor", DataType.Referent) as ControllerSensor | undefined;}
    public set GroundSensor(value) {this.SetProp("GroundSensor", DataType.Referent, value);}
    public get MovingDirection() {return this.GetProp("MovingDirection", DataType.Vector3);}
    public set MovingDirection(value) {this.SetProp("MovingDirection", DataType.Vector3, value);}
    public get RootPart() {return this.GetProp("RootPart", DataType.Referent) as BasePart | undefined;}
    public set RootPart(value) {this.SetProp("RootPart", DataType.Referent, value);}
    public get UpDirection() {return this.GetProp("UpDirection", DataType.Vector3);}
    public set UpDirection(value) {this.SetProp("UpDirection", DataType.Vector3, value);}
}

export class ControllerService extends Instance {
    protected constructor() {super(true); this.addClassName("ControllerService");}
    public static New() {return new ControllerService();}
}

export class ConversationalAIAcceptanceService extends Instance {
    protected constructor() {super(true); this.addClassName("ConversationalAIAcceptanceService");}
    public static New() {return new ConversationalAIAcceptanceService();}
}

export class CookiesService extends Instance {
    protected constructor() {super(true); this.addClassName("CookiesService");}
    public static New() {return new CookiesService();}
}

export class CorePackages extends Instance {
    protected constructor() {super(true); this.addClassName("CorePackages");}
    public static New() {return new CorePackages();}
}

export class CoreScriptDebuggingManagerHelper extends Instance {
    protected constructor() {super(true); this.addClassName("CoreScriptDebuggingManagerHelper");}
    public static New() {return new CoreScriptDebuggingManagerHelper();}
}

export class CoreScriptSyncService extends Instance {
    protected constructor() {super(true); this.addClassName("CoreScriptSyncService");}
    public static New() {return new CoreScriptSyncService();}
}

export class CreationDBService extends Instance {
    protected constructor() {super(true); this.addClassName("CreationDBService");}
    public static New() {return new CreationDBService();}
}

export class CrossDMScriptChangeListener extends Instance {
    protected constructor() {super(true); this.addClassName("CrossDMScriptChangeListener");}
    public static New() {return new CrossDMScriptChangeListener();}
}

/**@deprecated Deprecated by Roblox*/
export class CustomEvent extends Instance {
    protected constructor() {super(); this.addClassName("CustomEvent");}
    public static New() {return new CustomEvent();}
    public get PersistedCurrentValue() {return this.GetProp("PersistedCurrentValue", DataType.Float32);}
    public set PersistedCurrentValue(value) {this.SetProp("PersistedCurrentValue", DataType.Float32, value);}
}

/**@deprecated Deprecated by Roblox*/
export class CustomEventReceiver extends Instance {
    protected constructor() {super(); this.addClassName("CustomEventReceiver");}
    public static New() {return new CustomEventReceiver();}
    public get Source() {return this.GetProp("Source", DataType.Referent) as Instance | undefined;}
    public set Source(value) {this.SetProp("Source", DataType.Referent, value);}
}

export abstract class DataModelMesh extends Instance {
    protected constructor() {super(); this.addClassName("DataModelMesh");}
    public get Offset() {return this.GetProp("Offset", DataType.Vector3);}
    public set Offset(value) {this.SetProp("Offset", DataType.Vector3, value);}
    public get Scale() {return this.GetProp("Scale", DataType.Vector3);}
    public set Scale(value) {this.SetProp("Scale", DataType.Vector3, value);}
    public get VertexColor() {return this.GetProp("VertexColor", DataType.Vector3);}
    public set VertexColor(value) {this.SetProp("VertexColor", DataType.Vector3, value);}
}

/**@deprecated Deprecated by Roblox*/
export abstract class BevelMesh extends DataModelMesh {
    protected constructor() {super(); this.addClassName("BevelMesh");}
    public get Bevel() {return this.GetProp("Bevel", DataType.Float32);}
    public set Bevel(value) {this.SetProp("Bevel", DataType.Float32, value);}
    public get BevelRoundness() {return this.GetProp("Bevel Roundness", DataType.Float32);}
    public set BevelRoundness(value) {this.SetProp("Bevel Roundness", DataType.Float32, value);}
    public get Bulge() {return this.GetProp("Bulge", DataType.Float32);}
    public set Bulge(value) {this.SetProp("Bulge", DataType.Float32, value);}
}

export class BlockMesh extends BevelMesh {
    protected constructor() {super(); this.addClassName("BlockMesh");}
    public static New() {return new BlockMesh();}
}

/**@deprecated Deprecated by Roblox*/
export class CylinderMesh extends BevelMesh {
    protected constructor() {super(); this.addClassName("CylinderMesh");}
    public static New() {return new CylinderMesh();}
}

export class EditableMesh extends DataModelMesh {
    protected constructor() {super(); this.addClassName("EditableMesh");}
    public static New() {return new EditableMesh();}
}

export class RobloxEditableMesh extends EditableMesh {
    protected constructor() {super(); this.addClassName("RobloxEditableMesh");}
    public static New() {return new RobloxEditableMesh();}
    public get MeshDataSerialize() {return this.GetProp("MeshDataSerialize", DataType.String);}
    public set MeshDataSerialize(value) {this.SetProp("MeshDataSerialize", DataType.String, value);}
}

export class FileMesh extends DataModelMesh {
    protected constructor() {super(); this.addClassName("FileMesh");}
    public static New() {return new FileMesh();}
    public get MeshId() {return this.GetProp("MeshId", DataType.String);}
    public set MeshId(value) {this.SetProp("MeshId", DataType.String, value);}
    public get TextureId() {return this.GetProp("TextureId", DataType.String);}
    public set TextureId(value) {this.SetProp("TextureId", DataType.String, value);}
}

export class SpecialMesh extends FileMesh {
    protected constructor() {super(); this.addClassName("SpecialMesh");}
    public static New() {return new SpecialMesh();}
    public get MeshType() {return this.GetProp("MeshType", DataType.Enum) as MeshType | undefined;}
    public set MeshType(value) {this.SetProp("MeshType", DataType.Enum, value);}
}

export class DataModelPatchService extends Instance {
    protected constructor() {super(true); this.addClassName("DataModelPatchService");}
    public static New() {return new DataModelPatchService();}
}

export class DataStoreGetOptions extends Instance {
    protected constructor() {super(); this.addClassName("DataStoreGetOptions");}
    public static New() {return new DataStoreGetOptions();}
    public get UseCache() {return this.GetProp("UseCache", DataType.Bool);}
    public set UseCache(value) {this.SetProp("UseCache", DataType.Bool, value);}
}

export class DataStoreIncrementOptions extends Instance {
    protected constructor() {super(); this.addClassName("DataStoreIncrementOptions");}
    public static New() {return new DataStoreIncrementOptions();}
}

export class DataStoreOptions extends Instance {
    protected constructor() {super(); this.addClassName("DataStoreOptions");}
    public static New() {return new DataStoreOptions();}
    public get AllScopes() {return this.GetProp("AllScopes", DataType.Bool);}
    public set AllScopes(value) {this.SetProp("AllScopes", DataType.Bool, value);}
}

export class DataStoreService extends Instance {
    protected constructor() {super(true); this.addClassName("DataStoreService");}
    public static New() {return new DataStoreService();}
    public get AutomaticRetry() {return this.GetProp("AutomaticRetry", DataType.Bool);}
    public set AutomaticRetry(value) {this.SetProp("AutomaticRetry", DataType.Bool, value);}
    /**@deprecated Deprecated by Roblox*/
    public get LegacyNamingScheme() {return this.GetProp("LegacyNamingScheme", DataType.Bool);}
    /**@deprecated Deprecated by Roblox*/
    public set LegacyNamingScheme(value) {this.SetProp("LegacyNamingScheme", DataType.Bool, value);}
}

export class DataStoreSetOptions extends Instance {
    protected constructor() {super(); this.addClassName("DataStoreSetOptions");}
    public static New() {return new DataStoreSetOptions();}
}

export class Debris extends Instance {
    protected constructor() {super(true); this.addClassName("Debris");}
    public static New() {return new Debris();}
    /**@deprecated Deprecated by Roblox*/
    public get MaxItems() {return this.GetProp("MaxItems", DataType.Int32);}
    /**@deprecated Deprecated by Roblox*/
    public set MaxItems(value) {this.SetProp("MaxItems", DataType.Int32, value);}
}

export class DebuggablePluginWatcher extends Instance {
    protected constructor() {super(true); this.addClassName("DebuggablePluginWatcher");}
    public static New() {return new DebuggablePluginWatcher();}
}

export class DebuggerConnectionManager extends Instance {
    protected constructor() {super(true); this.addClassName("DebuggerConnectionManager");}
    public static New() {return new DebuggerConnectionManager();}
    public get Timeout() {return this.GetProp("Timeout", DataType.Float64);}
    public set Timeout(value) {this.SetProp("Timeout", DataType.Float64, value);}
}

export class DebuggerManager extends Instance {
    protected constructor() {super(true); this.addClassName("DebuggerManager");}
    public static New() {return new DebuggerManager();}
}

export class DebuggerUIService extends Instance {
    protected constructor() {super(true); this.addClassName("DebuggerUIService");}
    public static New() {return new DebuggerUIService();}
}

export class DebuggerWatch extends Instance {
    protected constructor() {super(); this.addClassName("DebuggerWatch");}
    public static New() {return new DebuggerWatch();}
    public get Expression() {return this.GetProp("Expression", DataType.String);}
    public set Expression(value) {this.SetProp("Expression", DataType.String, value);}
}

export class DeviceIdService extends Instance {
    protected constructor() {super(true); this.addClassName("DeviceIdService");}
    public static New() {return new DeviceIdService();}
}

export class Dialog extends Instance {
    protected constructor() {super(); this.addClassName("Dialog");}
    public static New() {return new Dialog();}
    public get BehaviorType() {return this.GetProp("BehaviorType", DataType.Enum) as DialogBehaviorType | undefined;}
    public set BehaviorType(value) {this.SetProp("BehaviorType", DataType.Enum, value);}
    public get ConversationDistance() {return this.GetProp("ConversationDistance", DataType.Float32);}
    public set ConversationDistance(value) {this.SetProp("ConversationDistance", DataType.Float32, value);}
    public get GoodbyeChoiceActive() {return this.GetProp("GoodbyeChoiceActive", DataType.Bool);}
    public set GoodbyeChoiceActive(value) {this.SetProp("GoodbyeChoiceActive", DataType.Bool, value);}
    public get GoodbyeDialog() {return this.GetProp("GoodbyeDialog", DataType.String);}
    public set GoodbyeDialog(value) {this.SetProp("GoodbyeDialog", DataType.String, value);}
    public get InitialPrompt() {return this.GetProp("InitialPrompt", DataType.String);}
    public set InitialPrompt(value) {this.SetProp("InitialPrompt", DataType.String, value);}
    public get Purpose() {return this.GetProp("Purpose", DataType.Enum) as DialogPurpose | undefined;}
    public set Purpose(value) {this.SetProp("Purpose", DataType.Enum, value);}
    public get Tone() {return this.GetProp("Tone", DataType.Enum) as DialogTone | undefined;}
    public set Tone(value) {this.SetProp("Tone", DataType.Enum, value);}
    public get TriggerDistance() {return this.GetProp("TriggerDistance", DataType.Float32);}
    public set TriggerDistance(value) {this.SetProp("TriggerDistance", DataType.Float32, value);}
    public get TriggerOffset() {return this.GetProp("TriggerOffset", DataType.Vector3);}
    public set TriggerOffset(value) {this.SetProp("TriggerOffset", DataType.Vector3, value);}
}

export class DialogChoice extends Instance {
    protected constructor() {super(); this.addClassName("DialogChoice");}
    public static New() {return new DialogChoice();}
    public get GoodbyeChoiceActive() {return this.GetProp("GoodbyeChoiceActive", DataType.Bool);}
    public set GoodbyeChoiceActive(value) {this.SetProp("GoodbyeChoiceActive", DataType.Bool, value);}
    public get GoodbyeDialog() {return this.GetProp("GoodbyeDialog", DataType.String);}
    public set GoodbyeDialog(value) {this.SetProp("GoodbyeDialog", DataType.String, value);}
    public get ResponseDialog() {return this.GetProp("ResponseDialog", DataType.String);}
    public set ResponseDialog(value) {this.SetProp("ResponseDialog", DataType.String, value);}
    public get UserDialog() {return this.GetProp("UserDialog", DataType.String);}
    public set UserDialog(value) {this.SetProp("UserDialog", DataType.String, value);}
}

export class DraftsService extends Instance {
    protected constructor() {super(true); this.addClassName("DraftsService");}
    public static New() {return new DraftsService();}
}

export class Dragger extends Instance {
    protected constructor() {super(); this.addClassName("Dragger");}
    public static New() {return new Dragger();}
}

export class DraggerService extends Instance {
    protected constructor() {super(true); this.addClassName("DraggerService");}
    public static New() {return new DraggerService();}
}

export class EditableImage extends Instance {
    protected constructor() {super(); this.addClassName("EditableImage");}
    public static New() {return new EditableImage();}
    public get Size() {return this.GetProp("Size", DataType.Vector2);}
    public set Size(value) {this.SetProp("Size", DataType.Vector2, value);}
}

export class RobloxEditableImage extends EditableImage {
    protected constructor() {super(); this.addClassName("RobloxEditableImage");}
    public static New() {return new RobloxEditableImage();}
    public get ImageDataSerialize() {return this.GetProp("ImageDataSerialize", DataType.String);}
    public set ImageDataSerialize(value) {this.SetProp("ImageDataSerialize", DataType.String, value);}
}

export class EngineAPICloudProcessingService extends Instance {
    protected constructor() {super(true); this.addClassName("EngineAPICloudProcessingService");}
    public static New() {return new EngineAPICloudProcessingService();}
}

export class EulerRotationCurve extends Instance {
    protected constructor() {super(); this.addClassName("EulerRotationCurve");}
    public static New() {return new EulerRotationCurve();}
    public get RotationOrder() {return this.GetProp("RotationOrder", DataType.Enum) as RotationOrder | undefined;}
    public set RotationOrder(value) {this.SetProp("RotationOrder", DataType.Enum, value);}
}

export class EventIngestService extends Instance {
    protected constructor() {super(true); this.addClassName("EventIngestService");}
    public static New() {return new EventIngestService();}
}

export class ExampleService extends Instance {
    protected constructor() {super(true); this.addClassName("ExampleService");}
    public static New() {return new ExampleService();}
}

export class ExperienceAuthService extends Instance {
    protected constructor() {super(true); this.addClassName("ExperienceAuthService");}
    public static New() {return new ExperienceAuthService();}
}

export class ExperienceInviteOptions extends Instance {
    protected constructor() {super(); this.addClassName("ExperienceInviteOptions");}
    public static New() {return new ExperienceInviteOptions();}
    public get InviteMessageId() {return this.GetProp("InviteMessageId", DataType.String);}
    public set InviteMessageId(value) {this.SetProp("InviteMessageId", DataType.String, value);}
    public get InviteUser() {return this.GetProp("InviteUser", DataType.Int64);}
    public set InviteUser(value) {this.SetProp("InviteUser", DataType.Int64, value);}
    public get LaunchData() {return this.GetProp("LaunchData", DataType.String);}
    public set LaunchData(value) {this.SetProp("LaunchData", DataType.String, value);}
    public get PromptMessage() {return this.GetProp("PromptMessage", DataType.String);}
    public set PromptMessage(value) {this.SetProp("PromptMessage", DataType.String, value);}
}

export class ExperienceNotificationService extends Instance {
    protected constructor() {super(true); this.addClassName("ExperienceNotificationService");}
    public static New() {return new ExperienceNotificationService();}
}

export class ExperienceService extends Instance {
    protected constructor() {super(true); this.addClassName("ExperienceService");}
    public static New() {return new ExperienceService();}
}

export class ExperienceStateCaptureService extends Instance {
    protected constructor() {super(true); this.addClassName("ExperienceStateCaptureService");}
    public static New() {return new ExperienceStateCaptureService();}
}

export class Explosion extends Instance {
    protected constructor() {super(); this.addClassName("Explosion");}
    public static New() {return new Explosion();}
    public get BlastPressure() {return this.GetProp("BlastPressure", DataType.Float32);}
    public set BlastPressure(value) {this.SetProp("BlastPressure", DataType.Float32, value);}
    public get BlastRadius() {return this.GetProp("BlastRadius", DataType.Float32);}
    public set BlastRadius(value) {this.SetProp("BlastRadius", DataType.Float32, value);}
    public get DestroyJointRadiusPercent() {return this.GetProp("DestroyJointRadiusPercent", DataType.Float32);}
    public set DestroyJointRadiusPercent(value) {this.SetProp("DestroyJointRadiusPercent", DataType.Float32, value);}
    public get ExplosionType() {return this.GetProp("ExplosionType", DataType.Enum) as ExplosionType | undefined;}
    public set ExplosionType(value) {this.SetProp("ExplosionType", DataType.Enum, value);}
    public get Position() {return this.GetProp("Position", DataType.Vector3);}
    public set Position(value) {this.SetProp("Position", DataType.Vector3, value);}
    public get TimeScale() {return this.GetProp("TimeScale", DataType.Float32);}
    public set TimeScale(value) {this.SetProp("TimeScale", DataType.Float32, value);}
    public get Visible() {return this.GetProp("Visible", DataType.Bool);}
    public set Visible(value) {this.SetProp("Visible", DataType.Bool, value);}
}

export class FaceAnimatorService extends Instance {
    protected constructor() {super(true); this.addClassName("FaceAnimatorService");}
    public static New() {return new FaceAnimatorService();}
}

export class FaceControls extends Instance {
    protected constructor() {super(); this.addClassName("FaceControls");}
    public static New() {return new FaceControls();}
}

export abstract class FaceInstance extends Instance {
    protected constructor() {super(); this.addClassName("FaceInstance");}
    public get Face() {return this.GetProp("Face", DataType.Enum) as NormalId | undefined;}
    public set Face(value) {this.SetProp("Face", DataType.Enum, value);}
}

export class Decal extends FaceInstance {
    protected constructor() {super(); this.addClassName("Decal");}
    public static New() {return new Decal();}
    public get Color3() {return this.GetProp("Color3", DataType.Color3);}
    public set Color3(value) {this.SetProp("Color3", DataType.Color3, value);}
    /**@deprecated Deprecated by Roblox*/
    public get Shiny() {return this.GetProp("Shiny", DataType.Float32);}
    /**@deprecated Deprecated by Roblox*/
    public set Shiny(value) {this.SetProp("Shiny", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get Specular() {return this.GetProp("Specular", DataType.Float32);}
    /**@deprecated Deprecated by Roblox*/
    public set Specular(value) {this.SetProp("Specular", DataType.Float32, value);}
    public get Texture() {return this.GetProp("Texture", DataType.String);}
    public set Texture(value) {this.SetProp("Texture", DataType.String, value);}
    public get Transparency() {return this.GetProp("Transparency", DataType.Float32);}
    public set Transparency(value) {this.SetProp("Transparency", DataType.Float32, value);}
    public get ZIndex() {return this.GetProp("ZIndex", DataType.Int32);}
    public set ZIndex(value) {this.SetProp("ZIndex", DataType.Int32, value);}
}

export class Texture extends Decal {
    protected constructor() {super(); this.addClassName("Texture");}
    public static New() {return new Texture();}
    public get OffsetStudsU() {return this.GetProp("OffsetStudsU", DataType.Float32);}
    public set OffsetStudsU(value) {this.SetProp("OffsetStudsU", DataType.Float32, value);}
    public get OffsetStudsV() {return this.GetProp("OffsetStudsV", DataType.Float32);}
    public set OffsetStudsV(value) {this.SetProp("OffsetStudsV", DataType.Float32, value);}
    public get StudsPerTileU() {return this.GetProp("StudsPerTileU", DataType.Float32);}
    public set StudsPerTileU(value) {this.SetProp("StudsPerTileU", DataType.Float32, value);}
    public get StudsPerTileV() {return this.GetProp("StudsPerTileV", DataType.Float32);}
    public set StudsPerTileV(value) {this.SetProp("StudsPerTileV", DataType.Float32, value);}
}

export class FacialAnimationRecordingService extends Instance {
    protected constructor() {super(true); this.addClassName("FacialAnimationRecordingService");}
    public static New() {return new FacialAnimationRecordingService();}
}

export class FacialAnimationStreamingServiceV2 extends Instance {
    protected constructor() {super(true); this.addClassName("FacialAnimationStreamingServiceV2");}
    public static New() {return new FacialAnimationStreamingServiceV2();}
    public get ServiceState() {return this.GetProp("ServiceState", DataType.Int32);}
    public set ServiceState(value) {this.SetProp("ServiceState", DataType.Int32, value);}
}

export abstract class Feature extends Instance {
    protected constructor() {super(); this.addClassName("Feature");}
    public get FaceId() {return this.GetProp("FaceId", DataType.Enum) as NormalId | undefined;}
    public set FaceId(value) {this.SetProp("FaceId", DataType.Enum, value);}
    public get InOut() {return this.GetProp("InOut", DataType.Enum) as InOut | undefined;}
    public set InOut(value) {this.SetProp("InOut", DataType.Enum, value);}
    public get LeftRight() {return this.GetProp("LeftRight", DataType.Enum) as LeftRight | undefined;}
    public set LeftRight(value) {this.SetProp("LeftRight", DataType.Enum, value);}
    public get TopBottom() {return this.GetProp("TopBottom", DataType.Enum) as TopBottom | undefined;}
    public set TopBottom(value) {this.SetProp("TopBottom", DataType.Enum, value);}
}

/**@deprecated Deprecated by Roblox*/
export class Hole extends Feature {
    protected constructor() {super(); this.addClassName("Hole");}
    public static New() {return new Hole();}
}

/**@deprecated Deprecated by Roblox*/
export class MotorFeature extends Feature {
    protected constructor() {super(); this.addClassName("MotorFeature");}
    public static New() {return new MotorFeature();}
}

export class Fire extends Instance {
    protected constructor() {super(); this.addClassName("Fire");}
    public static New() {return new Fire();}
    public get Color() {return this.GetProp("Color", DataType.Color3);}
    public set Color(value) {this.SetProp("Color", DataType.Color3, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool);}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get SecondaryColor() {return this.GetProp("SecondaryColor", DataType.Color3);}
    public set SecondaryColor(value) {this.SetProp("SecondaryColor", DataType.Color3, value);}
    public get TimeScale() {return this.GetProp("TimeScale", DataType.Float32);}
    public set TimeScale(value) {this.SetProp("TimeScale", DataType.Float32, value);}
    public get Heatxml() {return this.GetProp("heat_xml", DataType.Float32);}
    public set Heatxml(value) {this.SetProp("heat_xml", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get Size() {return this.GetProp("size", DataType.Float32);}
    /**@deprecated Deprecated by Roblox*/
    public set Size(value) {this.SetProp("size", DataType.Float32, value);}
    public get Sizexml() {return this.GetProp("size_xml", DataType.Float32);}
    public set Sizexml(value) {this.SetProp("size_xml", DataType.Float32, value);}
}

export class FlagStandService extends Instance {
    protected constructor() {super(true); this.addClassName("FlagStandService");}
    public static New() {return new FlagStandService();}
}

export class FloatCurve extends Instance {
    protected constructor() {super(); this.addClassName("FloatCurve");}
    public static New() {return new FloatCurve();}
    public get ValuesAndTimes() {return this.GetProp("ValuesAndTimes", DataType.String);}
    public set ValuesAndTimes(value) {this.SetProp("ValuesAndTimes", DataType.String, value);}
}

export class FlyweightService extends Instance {
    protected constructor() {super(true); this.addClassName("FlyweightService");}
    public static New() {return new FlyweightService();}
}

export class CSGDictionaryService extends FlyweightService {
    protected constructor() {super(); this.addClassName("CSGDictionaryService");}
    public static New() {return new CSGDictionaryService();}
}

export class NonReplicatedCSGDictionaryService extends FlyweightService {
    protected constructor() {super(); this.addClassName("NonReplicatedCSGDictionaryService");}
    public static New() {return new NonReplicatedCSGDictionaryService();}
}

export class Folder extends Instance {
    protected constructor() {super(); this.addClassName("Folder");}
    public static New() {return new Folder();}
}

export class ForceField extends Instance {
    protected constructor() {super(); this.addClassName("ForceField");}
    public static New() {return new ForceField();}
    public get Visible() {return this.GetProp("Visible", DataType.Bool);}
    public set Visible(value) {this.SetProp("Visible", DataType.Bool, value);}
}

export class FriendService extends Instance {
    protected constructor() {super(true); this.addClassName("FriendService");}
    public static New() {return new FriendService();}
}

/**@deprecated Deprecated by Roblox*/
export class FunctionalTest extends Instance {
    protected constructor() {super(); this.addClassName("FunctionalTest");}
    public static New() {return new FunctionalTest();}
    public get Description() {return this.GetProp("Description", DataType.String);}
    public set Description(value) {this.SetProp("Description", DataType.String, value);}
    public get HasMigratedSettingsToTestService() {return this.GetProp("HasMigratedSettingsToTestService", DataType.Bool);}
    public set HasMigratedSettingsToTestService(value) {this.SetProp("HasMigratedSettingsToTestService", DataType.Bool, value);}
}

export class GamePassService extends Instance {
    protected constructor() {super(true); this.addClassName("GamePassService");}
    public static New() {return new GamePassService();}
}

export class GamepadService extends Instance {
    protected constructor() {super(true); this.addClassName("GamepadService");}
    public static New() {return new GamepadService();}
    public get GamepadCursorEnabled() {return this.GetProp("GamepadCursorEnabled", DataType.Bool);}
    public set GamepadCursorEnabled(value) {this.SetProp("GamepadCursorEnabled", DataType.Bool, value);}
}

export class Geometry extends Instance {
    protected constructor() {super(true); this.addClassName("Geometry");}
    public static New() {return new Geometry();}
}

export class GeometryService extends Instance {
    protected constructor() {super(true); this.addClassName("GeometryService");}
    public static New() {return new GeometryService();}
}

export class GetTextBoundsParams extends Instance {
    protected constructor() {super(); this.addClassName("GetTextBoundsParams");}
    public static New() {return new GetTextBoundsParams();}
    public get Font() {return this.GetProp("Font", DataType.Font);}
    public set Font(value) {this.SetProp("Font", DataType.Font, value);}
    public get Size() {return this.GetProp("Size", DataType.Float32);}
    public set Size(value) {this.SetProp("Size", DataType.Float32, value);}
    public get Text() {return this.GetProp("Text", DataType.String);}
    public set Text(value) {this.SetProp("Text", DataType.String, value);}
    public get Width() {return this.GetProp("Width", DataType.Float32);}
    public set Width(value) {this.SetProp("Width", DataType.Float32, value);}
}

export class GoogleAnalyticsConfiguration extends Instance {
    protected constructor() {super(true); this.addClassName("GoogleAnalyticsConfiguration");}
    public static New() {return new GoogleAnalyticsConfiguration();}
    public get GaID() {return this.GetProp("gaID", DataType.String);}
    public set GaID(value) {this.SetProp("gaID", DataType.String, value);}
}

export class GroupService extends Instance {
    protected constructor() {super(true); this.addClassName("GroupService");}
    public static New() {return new GroupService();}
}

export abstract class GuiBase extends Instance {
    protected constructor() {super(); this.addClassName("GuiBase");}
}

export abstract class GuiBase2d extends GuiBase {
    protected constructor() {super(); this.addClassName("GuiBase2d");}
    public get AutoLocalize() {return this.GetProp("AutoLocalize", DataType.Bool);}
    public set AutoLocalize(value) {this.SetProp("AutoLocalize", DataType.Bool, value);}
    /**@deprecated Deprecated by Roblox*/
    public get Localize() {return this.GetProp("Localize", DataType.Bool);}
    /**@deprecated Deprecated by Roblox*/
    public set Localize(value) {this.SetProp("Localize", DataType.Bool, value);}
    public get RootLocalizationTable() {return this.GetProp("RootLocalizationTable", DataType.Referent) as LocalizationTable | undefined;}
    public set RootLocalizationTable(value) {this.SetProp("RootLocalizationTable", DataType.Referent, value);}
    public get SelectionBehaviorDown() {return this.GetProp("SelectionBehaviorDown", DataType.Enum) as SelectionBehavior | undefined;}
    public set SelectionBehaviorDown(value) {this.SetProp("SelectionBehaviorDown", DataType.Enum, value);}
    public get SelectionBehaviorLeft() {return this.GetProp("SelectionBehaviorLeft", DataType.Enum) as SelectionBehavior | undefined;}
    public set SelectionBehaviorLeft(value) {this.SetProp("SelectionBehaviorLeft", DataType.Enum, value);}
    public get SelectionBehaviorRight() {return this.GetProp("SelectionBehaviorRight", DataType.Enum) as SelectionBehavior | undefined;}
    public set SelectionBehaviorRight(value) {this.SetProp("SelectionBehaviorRight", DataType.Enum, value);}
    public get SelectionBehaviorUp() {return this.GetProp("SelectionBehaviorUp", DataType.Enum) as SelectionBehavior | undefined;}
    public set SelectionBehaviorUp(value) {this.SetProp("SelectionBehaviorUp", DataType.Enum, value);}
    public get SelectionGroup() {return this.GetProp("SelectionGroup", DataType.Bool);}
    public set SelectionGroup(value) {this.SetProp("SelectionGroup", DataType.Bool, value);}
}

export abstract class GuiObject extends GuiBase2d {
    protected constructor() {super(); this.addClassName("GuiObject");}
    public get Active() {return this.GetProp("Active", DataType.Bool);}
    public set Active(value) {this.SetProp("Active", DataType.Bool, value);}
    public get AnchorPoint() {return this.GetProp("AnchorPoint", DataType.Vector2);}
    public set AnchorPoint(value) {this.SetProp("AnchorPoint", DataType.Vector2, value);}
    public get AutomaticSize() {return this.GetProp("AutomaticSize", DataType.Enum) as AutomaticSize | undefined;}
    public set AutomaticSize(value) {this.SetProp("AutomaticSize", DataType.Enum, value);}
    /**@deprecated Deprecated by Roblox*/
    public get BackgroundColor() {return this.GetProp("BackgroundColor", DataType.BrickColor);}
    /**@deprecated Deprecated by Roblox*/
    public set BackgroundColor(value) {this.SetProp("BackgroundColor", DataType.BrickColor, value);}
    public get BackgroundColor3() {return this.GetProp("BackgroundColor3", DataType.Color3);}
    public set BackgroundColor3(value) {this.SetProp("BackgroundColor3", DataType.Color3, value);}
    public get BackgroundTransparency() {return this.GetProp("BackgroundTransparency", DataType.Float32);}
    public set BackgroundTransparency(value) {this.SetProp("BackgroundTransparency", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get BorderColor() {return this.GetProp("BorderColor", DataType.BrickColor);}
    /**@deprecated Deprecated by Roblox*/
    public set BorderColor(value) {this.SetProp("BorderColor", DataType.BrickColor, value);}
    public get BorderColor3() {return this.GetProp("BorderColor3", DataType.Color3);}
    public set BorderColor3(value) {this.SetProp("BorderColor3", DataType.Color3, value);}
    public get BorderMode() {return this.GetProp("BorderMode", DataType.Enum) as BorderMode | undefined;}
    public set BorderMode(value) {this.SetProp("BorderMode", DataType.Enum, value);}
    public get BorderSizePixel() {return this.GetProp("BorderSizePixel", DataType.Int32);}
    public set BorderSizePixel(value) {this.SetProp("BorderSizePixel", DataType.Int32, value);}
    public get ClipsDescendants() {return this.GetProp("ClipsDescendants", DataType.Bool);}
    public set ClipsDescendants(value) {this.SetProp("ClipsDescendants", DataType.Bool, value);}
    /**@deprecated Deprecated by Roblox*/
    public get Draggable() {return this.GetProp("Draggable", DataType.Bool);}
    /**@deprecated Deprecated by Roblox*/
    public set Draggable(value) {this.SetProp("Draggable", DataType.Bool, value);}
    public get Interactable() {return this.GetProp("Interactable", DataType.Bool);}
    public set Interactable(value) {this.SetProp("Interactable", DataType.Bool, value);}
    public get LayoutOrder() {return this.GetProp("LayoutOrder", DataType.Int32);}
    public set LayoutOrder(value) {this.SetProp("LayoutOrder", DataType.Int32, value);}
    public get NextSelectionDown() {return this.GetProp("NextSelectionDown", DataType.Referent) as GuiObject | undefined;}
    public set NextSelectionDown(value) {this.SetProp("NextSelectionDown", DataType.Referent, value);}
    public get NextSelectionLeft() {return this.GetProp("NextSelectionLeft", DataType.Referent) as GuiObject | undefined;}
    public set NextSelectionLeft(value) {this.SetProp("NextSelectionLeft", DataType.Referent, value);}
    public get NextSelectionRight() {return this.GetProp("NextSelectionRight", DataType.Referent) as GuiObject | undefined;}
    public set NextSelectionRight(value) {this.SetProp("NextSelectionRight", DataType.Referent, value);}
    public get NextSelectionUp() {return this.GetProp("NextSelectionUp", DataType.Referent) as GuiObject | undefined;}
    public set NextSelectionUp(value) {this.SetProp("NextSelectionUp", DataType.Referent, value);}
    public get Position() {return this.GetProp("Position", DataType.UDim2);}
    public set Position(value) {this.SetProp("Position", DataType.UDim2, value);}
    public get Rotation() {return this.GetProp("Rotation", DataType.Float32);}
    public set Rotation(value) {this.SetProp("Rotation", DataType.Float32, value);}
    public get Selectable() {return this.GetProp("Selectable", DataType.Bool);}
    public set Selectable(value) {this.SetProp("Selectable", DataType.Bool, value);}
    public get SelectionImageObject() {return this.GetProp("SelectionImageObject", DataType.Referent) as GuiObject | undefined;}
    public set SelectionImageObject(value) {this.SetProp("SelectionImageObject", DataType.Referent, value);}
    public get SelectionOrder() {return this.GetProp("SelectionOrder", DataType.Int32);}
    public set SelectionOrder(value) {this.SetProp("SelectionOrder", DataType.Int32, value);}
    public get Size() {return this.GetProp("Size", DataType.UDim2);}
    public set Size(value) {this.SetProp("Size", DataType.UDim2, value);}
    public get SizeConstraint() {return this.GetProp("SizeConstraint", DataType.Enum) as SizeConstraint | undefined;}
    public set SizeConstraint(value) {this.SetProp("SizeConstraint", DataType.Enum, value);}
    public get Visible() {return this.GetProp("Visible", DataType.Bool);}
    public set Visible(value) {this.SetProp("Visible", DataType.Bool, value);}
    public get ZIndex() {return this.GetProp("ZIndex", DataType.Int32);}
    public set ZIndex(value) {this.SetProp("ZIndex", DataType.Int32, value);}
}

export class CanvasGroup extends GuiObject {
    protected constructor() {super(); this.addClassName("CanvasGroup");}
    public static New() {return new CanvasGroup();}
    public get GroupColor3() {return this.GetProp("GroupColor3", DataType.Color3);}
    public set GroupColor3(value) {this.SetProp("GroupColor3", DataType.Color3, value);}
    public get GroupTransparency() {return this.GetProp("GroupTransparency", DataType.Float32);}
    public set GroupTransparency(value) {this.SetProp("GroupTransparency", DataType.Float32, value);}
}

export class Frame extends GuiObject {
    protected constructor() {super(); this.addClassName("Frame");}
    public static New() {return new Frame();}
    public get Style() {return this.GetProp("Style", DataType.Enum) as FrameStyle | undefined;}
    public set Style(value) {this.SetProp("Style", DataType.Enum, value);}
}

export abstract class GuiButton extends GuiObject {
    protected constructor() {super(); this.addClassName("GuiButton");}
    public get AutoButtonColor() {return this.GetProp("AutoButtonColor", DataType.Bool);}
    public set AutoButtonColor(value) {this.SetProp("AutoButtonColor", DataType.Bool, value);}
    public get Modal() {return this.GetProp("Modal", DataType.Bool);}
    public set Modal(value) {this.SetProp("Modal", DataType.Bool, value);}
    public get Selected() {return this.GetProp("Selected", DataType.Bool);}
    public set Selected(value) {this.SetProp("Selected", DataType.Bool, value);}
    public get Style() {return this.GetProp("Style", DataType.Enum) as ButtonStyle | undefined;}
    public set Style(value) {this.SetProp("Style", DataType.Enum, value);}
}

export class ImageButton extends GuiButton {
    protected constructor() {super(); this.addClassName("ImageButton");}
    public static New() {return new ImageButton();}
    public get HoverImage() {return this.GetProp("HoverImage", DataType.String);}
    public set HoverImage(value) {this.SetProp("HoverImage", DataType.String, value);}
    public get Image() {return this.GetProp("Image", DataType.String);}
    public set Image(value) {this.SetProp("Image", DataType.String, value);}
    public get ImageColor3() {return this.GetProp("ImageColor3", DataType.Color3);}
    public set ImageColor3(value) {this.SetProp("ImageColor3", DataType.Color3, value);}
    public get ImageRectOffset() {return this.GetProp("ImageRectOffset", DataType.Vector2);}
    public set ImageRectOffset(value) {this.SetProp("ImageRectOffset", DataType.Vector2, value);}
    public get ImageRectSize() {return this.GetProp("ImageRectSize", DataType.Vector2);}
    public set ImageRectSize(value) {this.SetProp("ImageRectSize", DataType.Vector2, value);}
    public get ImageTransparency() {return this.GetProp("ImageTransparency", DataType.Float32);}
    public set ImageTransparency(value) {this.SetProp("ImageTransparency", DataType.Float32, value);}
    public get PressedImage() {return this.GetProp("PressedImage", DataType.String);}
    public set PressedImage(value) {this.SetProp("PressedImage", DataType.String, value);}
    public get ResampleMode() {return this.GetProp("ResampleMode", DataType.Enum) as ResamplerMode | undefined;}
    public set ResampleMode(value) {this.SetProp("ResampleMode", DataType.Enum, value);}
    public get ScaleType() {return this.GetProp("ScaleType", DataType.Enum) as ScaleType | undefined;}
    public set ScaleType(value) {this.SetProp("ScaleType", DataType.Enum, value);}
    public get SliceCenter() {return this.GetProp("SliceCenter", DataType.Rect);}
    public set SliceCenter(value) {this.SetProp("SliceCenter", DataType.Rect, value);}
    public get SliceScale() {return this.GetProp("SliceScale", DataType.Float32);}
    public set SliceScale(value) {this.SetProp("SliceScale", DataType.Float32, value);}
    public get TileSize() {return this.GetProp("TileSize", DataType.UDim2);}
    public set TileSize(value) {this.SetProp("TileSize", DataType.UDim2, value);}
}

export class TextButton extends GuiButton {
    protected constructor() {super(); this.addClassName("TextButton");}
    public static New() {return new TextButton();}
    public get FontFace() {return this.GetProp("FontFace", DataType.Font);}
    public set FontFace(value) {this.SetProp("FontFace", DataType.Font, value);}
    /**@deprecated Deprecated by Roblox*/
    public get FontSize() {return this.GetProp("FontSize", DataType.Enum) as FontSize | undefined;}
    /**@deprecated Deprecated by Roblox*/
    public set FontSize(value) {this.SetProp("FontSize", DataType.Enum, value);}
    public get LineHeight() {return this.GetProp("LineHeight", DataType.Float32);}
    public set LineHeight(value) {this.SetProp("LineHeight", DataType.Float32, value);}
    public get LocalizationMatchIdentifier() {return this.GetProp("LocalizationMatchIdentifier", DataType.String);}
    public set LocalizationMatchIdentifier(value) {this.SetProp("LocalizationMatchIdentifier", DataType.String, value);}
    public get LocalizationMatchedSourceText() {return this.GetProp("LocalizationMatchedSourceText", DataType.String);}
    public set LocalizationMatchedSourceText(value) {this.SetProp("LocalizationMatchedSourceText", DataType.String, value);}
    public get MaxVisibleGraphemes() {return this.GetProp("MaxVisibleGraphemes", DataType.Int32);}
    public set MaxVisibleGraphemes(value) {this.SetProp("MaxVisibleGraphemes", DataType.Int32, value);}
    public get RichText() {return this.GetProp("RichText", DataType.Bool);}
    public set RichText(value) {this.SetProp("RichText", DataType.Bool, value);}
    public get Text() {return this.GetProp("Text", DataType.String);}
    public set Text(value) {this.SetProp("Text", DataType.String, value);}
    /**@deprecated Deprecated by Roblox*/
    public get TextColor() {return this.GetProp("TextColor", DataType.BrickColor);}
    /**@deprecated Deprecated by Roblox*/
    public set TextColor(value) {this.SetProp("TextColor", DataType.BrickColor, value);}
    public get TextColor3() {return this.GetProp("TextColor3", DataType.Color3);}
    public set TextColor3(value) {this.SetProp("TextColor3", DataType.Color3, value);}
    public get TextDirection() {return this.GetProp("TextDirection", DataType.Enum) as TextDirection | undefined;}
    public set TextDirection(value) {this.SetProp("TextDirection", DataType.Enum, value);}
    public get TextScaled() {return this.GetProp("TextScaled", DataType.Bool);}
    public set TextScaled(value) {this.SetProp("TextScaled", DataType.Bool, value);}
    public get TextSize() {return this.GetProp("TextSize", DataType.Float32);}
    public set TextSize(value) {this.SetProp("TextSize", DataType.Float32, value);}
    public get TextStrokeColor3() {return this.GetProp("TextStrokeColor3", DataType.Color3);}
    public set TextStrokeColor3(value) {this.SetProp("TextStrokeColor3", DataType.Color3, value);}
    public get TextStrokeTransparency() {return this.GetProp("TextStrokeTransparency", DataType.Float32);}
    public set TextStrokeTransparency(value) {this.SetProp("TextStrokeTransparency", DataType.Float32, value);}
    public get TextTransparency() {return this.GetProp("TextTransparency", DataType.Float32);}
    public set TextTransparency(value) {this.SetProp("TextTransparency", DataType.Float32, value);}
    public get TextTruncate() {return this.GetProp("TextTruncate", DataType.Enum) as TextTruncate | undefined;}
    public set TextTruncate(value) {this.SetProp("TextTruncate", DataType.Enum, value);}
    /**@deprecated Deprecated by Roblox*/
    public get TextWrap() {return this.GetProp("TextWrap", DataType.Bool);}
    /**@deprecated Deprecated by Roblox*/
    public set TextWrap(value) {this.SetProp("TextWrap", DataType.Bool, value);}
    public get TextWrapped() {return this.GetProp("TextWrapped", DataType.Bool);}
    public set TextWrapped(value) {this.SetProp("TextWrapped", DataType.Bool, value);}
    public get TextXAlignment() {return this.GetProp("TextXAlignment", DataType.Enum) as TextXAlignment | undefined;}
    public set TextXAlignment(value) {this.SetProp("TextXAlignment", DataType.Enum, value);}
    public get TextYAlignment() {return this.GetProp("TextYAlignment", DataType.Enum) as TextYAlignment | undefined;}
    public set TextYAlignment(value) {this.SetProp("TextYAlignment", DataType.Enum, value);}
}

export abstract class GuiLabel extends GuiObject {
    protected constructor() {super(); this.addClassName("GuiLabel");}
}

export class ImageLabel extends GuiLabel {
    protected constructor() {super(); this.addClassName("ImageLabel");}
    public static New() {return new ImageLabel();}
    public get Image() {return this.GetProp("Image", DataType.String);}
    public set Image(value) {this.SetProp("Image", DataType.String, value);}
    public get ImageColor3() {return this.GetProp("ImageColor3", DataType.Color3);}
    public set ImageColor3(value) {this.SetProp("ImageColor3", DataType.Color3, value);}
    public get ImageRectOffset() {return this.GetProp("ImageRectOffset", DataType.Vector2);}
    public set ImageRectOffset(value) {this.SetProp("ImageRectOffset", DataType.Vector2, value);}
    public get ImageRectSize() {return this.GetProp("ImageRectSize", DataType.Vector2);}
    public set ImageRectSize(value) {this.SetProp("ImageRectSize", DataType.Vector2, value);}
    public get ImageTransparency() {return this.GetProp("ImageTransparency", DataType.Float32);}
    public set ImageTransparency(value) {this.SetProp("ImageTransparency", DataType.Float32, value);}
    public get ResampleMode() {return this.GetProp("ResampleMode", DataType.Enum) as ResamplerMode | undefined;}
    public set ResampleMode(value) {this.SetProp("ResampleMode", DataType.Enum, value);}
    public get ScaleType() {return this.GetProp("ScaleType", DataType.Enum) as ScaleType | undefined;}
    public set ScaleType(value) {this.SetProp("ScaleType", DataType.Enum, value);}
    public get SliceCenter() {return this.GetProp("SliceCenter", DataType.Rect);}
    public set SliceCenter(value) {this.SetProp("SliceCenter", DataType.Rect, value);}
    public get SliceScale() {return this.GetProp("SliceScale", DataType.Float32);}
    public set SliceScale(value) {this.SetProp("SliceScale", DataType.Float32, value);}
    public get TileSize() {return this.GetProp("TileSize", DataType.UDim2);}
    public set TileSize(value) {this.SetProp("TileSize", DataType.UDim2, value);}
}

export class TextLabel extends GuiLabel {
    protected constructor() {super(); this.addClassName("TextLabel");}
    public static New() {return new TextLabel();}
    public get FontFace() {return this.GetProp("FontFace", DataType.Font);}
    public set FontFace(value) {this.SetProp("FontFace", DataType.Font, value);}
    /**@deprecated Deprecated by Roblox*/
    public get FontSize() {return this.GetProp("FontSize", DataType.Enum) as FontSize | undefined;}
    /**@deprecated Deprecated by Roblox*/
    public set FontSize(value) {this.SetProp("FontSize", DataType.Enum, value);}
    public get LineHeight() {return this.GetProp("LineHeight", DataType.Float32);}
    public set LineHeight(value) {this.SetProp("LineHeight", DataType.Float32, value);}
    public get LocalizationMatchIdentifier() {return this.GetProp("LocalizationMatchIdentifier", DataType.String);}
    public set LocalizationMatchIdentifier(value) {this.SetProp("LocalizationMatchIdentifier", DataType.String, value);}
    public get LocalizationMatchedSourceText() {return this.GetProp("LocalizationMatchedSourceText", DataType.String);}
    public set LocalizationMatchedSourceText(value) {this.SetProp("LocalizationMatchedSourceText", DataType.String, value);}
    public get MaxVisibleGraphemes() {return this.GetProp("MaxVisibleGraphemes", DataType.Int32);}
    public set MaxVisibleGraphemes(value) {this.SetProp("MaxVisibleGraphemes", DataType.Int32, value);}
    public get RichText() {return this.GetProp("RichText", DataType.Bool);}
    public set RichText(value) {this.SetProp("RichText", DataType.Bool, value);}
    public get Text() {return this.GetProp("Text", DataType.String);}
    public set Text(value) {this.SetProp("Text", DataType.String, value);}
    /**@deprecated Deprecated by Roblox*/
    public get TextColor() {return this.GetProp("TextColor", DataType.BrickColor);}
    /**@deprecated Deprecated by Roblox*/
    public set TextColor(value) {this.SetProp("TextColor", DataType.BrickColor, value);}
    public get TextColor3() {return this.GetProp("TextColor3", DataType.Color3);}
    public set TextColor3(value) {this.SetProp("TextColor3", DataType.Color3, value);}
    public get TextDirection() {return this.GetProp("TextDirection", DataType.Enum) as TextDirection | undefined;}
    public set TextDirection(value) {this.SetProp("TextDirection", DataType.Enum, value);}
    public get TextScaled() {return this.GetProp("TextScaled", DataType.Bool);}
    public set TextScaled(value) {this.SetProp("TextScaled", DataType.Bool, value);}
    public get TextSize() {return this.GetProp("TextSize", DataType.Float32);}
    public set TextSize(value) {this.SetProp("TextSize", DataType.Float32, value);}
    public get TextStrokeColor3() {return this.GetProp("TextStrokeColor3", DataType.Color3);}
    public set TextStrokeColor3(value) {this.SetProp("TextStrokeColor3", DataType.Color3, value);}
    public get TextStrokeTransparency() {return this.GetProp("TextStrokeTransparency", DataType.Float32);}
    public set TextStrokeTransparency(value) {this.SetProp("TextStrokeTransparency", DataType.Float32, value);}
    public get TextTransparency() {return this.GetProp("TextTransparency", DataType.Float32);}
    public set TextTransparency(value) {this.SetProp("TextTransparency", DataType.Float32, value);}
    public get TextTruncate() {return this.GetProp("TextTruncate", DataType.Enum) as TextTruncate | undefined;}
    public set TextTruncate(value) {this.SetProp("TextTruncate", DataType.Enum, value);}
    /**@deprecated Deprecated by Roblox*/
    public get TextWrap() {return this.GetProp("TextWrap", DataType.Bool);}
    /**@deprecated Deprecated by Roblox*/
    public set TextWrap(value) {this.SetProp("TextWrap", DataType.Bool, value);}
    public get TextWrapped() {return this.GetProp("TextWrapped", DataType.Bool);}
    public set TextWrapped(value) {this.SetProp("TextWrapped", DataType.Bool, value);}
    public get TextXAlignment() {return this.GetProp("TextXAlignment", DataType.Enum) as TextXAlignment | undefined;}
    public set TextXAlignment(value) {this.SetProp("TextXAlignment", DataType.Enum, value);}
    public get TextYAlignment() {return this.GetProp("TextYAlignment", DataType.Enum) as TextYAlignment | undefined;}
    public set TextYAlignment(value) {this.SetProp("TextYAlignment", DataType.Enum, value);}
}

export class ScrollingFrame extends GuiObject {
    protected constructor() {super(); this.addClassName("ScrollingFrame");}
    public static New() {return new ScrollingFrame();}
    public get AutomaticCanvasSize() {return this.GetProp("AutomaticCanvasSize", DataType.Enum) as AutomaticSize | undefined;}
    public set AutomaticCanvasSize(value) {this.SetProp("AutomaticCanvasSize", DataType.Enum, value);}
    public get BottomImage() {return this.GetProp("BottomImage", DataType.String);}
    public set BottomImage(value) {this.SetProp("BottomImage", DataType.String, value);}
    public get CanvasPosition() {return this.GetProp("CanvasPosition", DataType.Vector2);}
    public set CanvasPosition(value) {this.SetProp("CanvasPosition", DataType.Vector2, value);}
    public get CanvasSize() {return this.GetProp("CanvasSize", DataType.UDim2);}
    public set CanvasSize(value) {this.SetProp("CanvasSize", DataType.UDim2, value);}
    public get ElasticBehavior() {return this.GetProp("ElasticBehavior", DataType.Enum) as ElasticBehavior | undefined;}
    public set ElasticBehavior(value) {this.SetProp("ElasticBehavior", DataType.Enum, value);}
    public get HorizontalScrollBarInset() {return this.GetProp("HorizontalScrollBarInset", DataType.Enum) as ScrollBarInset | undefined;}
    public set HorizontalScrollBarInset(value) {this.SetProp("HorizontalScrollBarInset", DataType.Enum, value);}
    public get MidImage() {return this.GetProp("MidImage", DataType.String);}
    public set MidImage(value) {this.SetProp("MidImage", DataType.String, value);}
    public get ScrollBarImageColor3() {return this.GetProp("ScrollBarImageColor3", DataType.Color3);}
    public set ScrollBarImageColor3(value) {this.SetProp("ScrollBarImageColor3", DataType.Color3, value);}
    public get ScrollBarImageTransparency() {return this.GetProp("ScrollBarImageTransparency", DataType.Float32);}
    public set ScrollBarImageTransparency(value) {this.SetProp("ScrollBarImageTransparency", DataType.Float32, value);}
    public get ScrollBarThickness() {return this.GetProp("ScrollBarThickness", DataType.Int32);}
    public set ScrollBarThickness(value) {this.SetProp("ScrollBarThickness", DataType.Int32, value);}
    public get ScrollingDirection() {return this.GetProp("ScrollingDirection", DataType.Enum) as ScrollingDirection | undefined;}
    public set ScrollingDirection(value) {this.SetProp("ScrollingDirection", DataType.Enum, value);}
    public get ScrollingEnabled() {return this.GetProp("ScrollingEnabled", DataType.Bool);}
    public set ScrollingEnabled(value) {this.SetProp("ScrollingEnabled", DataType.Bool, value);}
    public get TopImage() {return this.GetProp("TopImage", DataType.String);}
    public set TopImage(value) {this.SetProp("TopImage", DataType.String, value);}
    public get VerticalScrollBarInset() {return this.GetProp("VerticalScrollBarInset", DataType.Enum) as ScrollBarInset | undefined;}
    public set VerticalScrollBarInset(value) {this.SetProp("VerticalScrollBarInset", DataType.Enum, value);}
    public get VerticalScrollBarPosition() {return this.GetProp("VerticalScrollBarPosition", DataType.Enum) as VerticalScrollBarPosition | undefined;}
    public set VerticalScrollBarPosition(value) {this.SetProp("VerticalScrollBarPosition", DataType.Enum, value);}
}

export class TextBox extends GuiObject {
    protected constructor() {super(); this.addClassName("TextBox");}
    public static New() {return new TextBox();}
    public get ClearTextOnFocus() {return this.GetProp("ClearTextOnFocus", DataType.Bool);}
    public set ClearTextOnFocus(value) {this.SetProp("ClearTextOnFocus", DataType.Bool, value);}
    public get FontFace() {return this.GetProp("FontFace", DataType.Font);}
    public set FontFace(value) {this.SetProp("FontFace", DataType.Font, value);}
    /**@deprecated Deprecated by Roblox*/
    public get FontSize() {return this.GetProp("FontSize", DataType.Enum) as FontSize | undefined;}
    /**@deprecated Deprecated by Roblox*/
    public set FontSize(value) {this.SetProp("FontSize", DataType.Enum, value);}
    public get LineHeight() {return this.GetProp("LineHeight", DataType.Float32);}
    public set LineHeight(value) {this.SetProp("LineHeight", DataType.Float32, value);}
    public get LocalizationMatchIdentifier() {return this.GetProp("LocalizationMatchIdentifier", DataType.String);}
    public set LocalizationMatchIdentifier(value) {this.SetProp("LocalizationMatchIdentifier", DataType.String, value);}
    public get LocalizationMatchedSourceText() {return this.GetProp("LocalizationMatchedSourceText", DataType.String);}
    public set LocalizationMatchedSourceText(value) {this.SetProp("LocalizationMatchedSourceText", DataType.String, value);}
    public get MaxVisibleGraphemes() {return this.GetProp("MaxVisibleGraphemes", DataType.Int32);}
    public set MaxVisibleGraphemes(value) {this.SetProp("MaxVisibleGraphemes", DataType.Int32, value);}
    public get MultiLine() {return this.GetProp("MultiLine", DataType.Bool);}
    public set MultiLine(value) {this.SetProp("MultiLine", DataType.Bool, value);}
    public get PlaceholderColor3() {return this.GetProp("PlaceholderColor3", DataType.Color3);}
    public set PlaceholderColor3(value) {this.SetProp("PlaceholderColor3", DataType.Color3, value);}
    public get PlaceholderText() {return this.GetProp("PlaceholderText", DataType.String);}
    public set PlaceholderText(value) {this.SetProp("PlaceholderText", DataType.String, value);}
    public get RichText() {return this.GetProp("RichText", DataType.Bool);}
    public set RichText(value) {this.SetProp("RichText", DataType.Bool, value);}
    public get ShowNativeInput() {return this.GetProp("ShowNativeInput", DataType.Bool);}
    public set ShowNativeInput(value) {this.SetProp("ShowNativeInput", DataType.Bool, value);}
    public get Text() {return this.GetProp("Text", DataType.String);}
    public set Text(value) {this.SetProp("Text", DataType.String, value);}
    /**@deprecated Deprecated by Roblox*/
    public get TextColor() {return this.GetProp("TextColor", DataType.BrickColor);}
    /**@deprecated Deprecated by Roblox*/
    public set TextColor(value) {this.SetProp("TextColor", DataType.BrickColor, value);}
    public get TextColor3() {return this.GetProp("TextColor3", DataType.Color3);}
    public set TextColor3(value) {this.SetProp("TextColor3", DataType.Color3, value);}
    public get TextDirection() {return this.GetProp("TextDirection", DataType.Enum) as TextDirection | undefined;}
    public set TextDirection(value) {this.SetProp("TextDirection", DataType.Enum, value);}
    public get TextEditable() {return this.GetProp("TextEditable", DataType.Bool);}
    public set TextEditable(value) {this.SetProp("TextEditable", DataType.Bool, value);}
    public get TextScaled() {return this.GetProp("TextScaled", DataType.Bool);}
    public set TextScaled(value) {this.SetProp("TextScaled", DataType.Bool, value);}
    public get TextSize() {return this.GetProp("TextSize", DataType.Float32);}
    public set TextSize(value) {this.SetProp("TextSize", DataType.Float32, value);}
    public get TextStrokeColor3() {return this.GetProp("TextStrokeColor3", DataType.Color3);}
    public set TextStrokeColor3(value) {this.SetProp("TextStrokeColor3", DataType.Color3, value);}
    public get TextStrokeTransparency() {return this.GetProp("TextStrokeTransparency", DataType.Float32);}
    public set TextStrokeTransparency(value) {this.SetProp("TextStrokeTransparency", DataType.Float32, value);}
    public get TextTransparency() {return this.GetProp("TextTransparency", DataType.Float32);}
    public set TextTransparency(value) {this.SetProp("TextTransparency", DataType.Float32, value);}
    public get TextTruncate() {return this.GetProp("TextTruncate", DataType.Enum) as TextTruncate | undefined;}
    public set TextTruncate(value) {this.SetProp("TextTruncate", DataType.Enum, value);}
    /**@deprecated Deprecated by Roblox*/
    public get TextWrap() {return this.GetProp("TextWrap", DataType.Bool);}
    /**@deprecated Deprecated by Roblox*/
    public set TextWrap(value) {this.SetProp("TextWrap", DataType.Bool, value);}
    public get TextWrapped() {return this.GetProp("TextWrapped", DataType.Bool);}
    public set TextWrapped(value) {this.SetProp("TextWrapped", DataType.Bool, value);}
    public get TextXAlignment() {return this.GetProp("TextXAlignment", DataType.Enum) as TextXAlignment | undefined;}
    public set TextXAlignment(value) {this.SetProp("TextXAlignment", DataType.Enum, value);}
    public get TextYAlignment() {return this.GetProp("TextYAlignment", DataType.Enum) as TextYAlignment | undefined;}
    public set TextYAlignment(value) {this.SetProp("TextYAlignment", DataType.Enum, value);}
}

export class VideoFrame extends GuiObject {
    protected constructor() {super(); this.addClassName("VideoFrame");}
    public static New() {return new VideoFrame();}
    public get Looped() {return this.GetProp("Looped", DataType.Bool);}
    public set Looped(value) {this.SetProp("Looped", DataType.Bool, value);}
    public get Playing() {return this.GetProp("Playing", DataType.Bool);}
    public set Playing(value) {this.SetProp("Playing", DataType.Bool, value);}
    public get TimePosition() {return this.GetProp("TimePosition", DataType.Float64);}
    public set TimePosition(value) {this.SetProp("TimePosition", DataType.Float64, value);}
    public get Video() {return this.GetProp("Video", DataType.String);}
    public set Video(value) {this.SetProp("Video", DataType.String, value);}
    public get Volume() {return this.GetProp("Volume", DataType.Float32);}
    public set Volume(value) {this.SetProp("Volume", DataType.Float32, value);}
}

export class ViewportFrame extends GuiObject {
    protected constructor() {super(); this.addClassName("ViewportFrame");}
    public static New() {return new ViewportFrame();}
    public get Ambient() {return this.GetProp("Ambient", DataType.Color3);}
    public set Ambient(value) {this.SetProp("Ambient", DataType.Color3, value);}
    public get CameraCFrame() {return this.GetProp("CameraCFrame", DataType.CFrame);}
    public set CameraCFrame(value) {this.SetProp("CameraCFrame", DataType.CFrame, value);}
    public get CameraFieldOfView() {return this.GetProp("CameraFieldOfView", DataType.Float32);}
    public set CameraFieldOfView(value) {this.SetProp("CameraFieldOfView", DataType.Float32, value);}
    public get ImageColor3() {return this.GetProp("ImageColor3", DataType.Color3);}
    public set ImageColor3(value) {this.SetProp("ImageColor3", DataType.Color3, value);}
    public get ImageTransparency() {return this.GetProp("ImageTransparency", DataType.Float32);}
    public set ImageTransparency(value) {this.SetProp("ImageTransparency", DataType.Float32, value);}
    public get LightColor() {return this.GetProp("LightColor", DataType.Color3);}
    public set LightColor(value) {this.SetProp("LightColor", DataType.Color3, value);}
    public get LightDirection() {return this.GetProp("LightDirection", DataType.Vector3);}
    public set LightDirection(value) {this.SetProp("LightDirection", DataType.Vector3, value);}
}

export abstract class LayerCollector extends GuiBase2d {
    protected constructor() {super(); this.addClassName("LayerCollector");}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool);}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get ResetOnSpawn() {return this.GetProp("ResetOnSpawn", DataType.Bool);}
    public set ResetOnSpawn(value) {this.SetProp("ResetOnSpawn", DataType.Bool, value);}
    public get ZIndexBehavior() {return this.GetProp("ZIndexBehavior", DataType.Enum) as ZIndexBehavior | undefined;}
    public set ZIndexBehavior(value) {this.SetProp("ZIndexBehavior", DataType.Enum, value);}
}

export class BillboardGui extends LayerCollector {
    protected constructor() {super(); this.addClassName("BillboardGui");}
    public static New() {return new BillboardGui();}
    public get Active() {return this.GetProp("Active", DataType.Bool);}
    public set Active(value) {this.SetProp("Active", DataType.Bool, value);}
    public get Adornee() {return this.GetProp("Adornee", DataType.Referent) as Instance | undefined;}
    public set Adornee(value) {this.SetProp("Adornee", DataType.Referent, value);}
    public get AlwaysOnTop() {return this.GetProp("AlwaysOnTop", DataType.Bool);}
    public set AlwaysOnTop(value) {this.SetProp("AlwaysOnTop", DataType.Bool, value);}
    public get Brightness() {return this.GetProp("Brightness", DataType.Float32);}
    public set Brightness(value) {this.SetProp("Brightness", DataType.Float32, value);}
    public get ClipsDescendants() {return this.GetProp("ClipsDescendants", DataType.Bool);}
    public set ClipsDescendants(value) {this.SetProp("ClipsDescendants", DataType.Bool, value);}
    public get DistanceLowerLimit() {return this.GetProp("DistanceLowerLimit", DataType.Float32);}
    public set DistanceLowerLimit(value) {this.SetProp("DistanceLowerLimit", DataType.Float32, value);}
    public get DistanceStep() {return this.GetProp("DistanceStep", DataType.Float32);}
    public set DistanceStep(value) {this.SetProp("DistanceStep", DataType.Float32, value);}
    public get DistanceUpperLimit() {return this.GetProp("DistanceUpperLimit", DataType.Float32);}
    public set DistanceUpperLimit(value) {this.SetProp("DistanceUpperLimit", DataType.Float32, value);}
    public get ExtentsOffset() {return this.GetProp("ExtentsOffset", DataType.Vector3);}
    public set ExtentsOffset(value) {this.SetProp("ExtentsOffset", DataType.Vector3, value);}
    public get ExtentsOffsetWorldSpace() {return this.GetProp("ExtentsOffsetWorldSpace", DataType.Vector3);}
    public set ExtentsOffsetWorldSpace(value) {this.SetProp("ExtentsOffsetWorldSpace", DataType.Vector3, value);}
    public get LightInfluence() {return this.GetProp("LightInfluence", DataType.Float32);}
    public set LightInfluence(value) {this.SetProp("LightInfluence", DataType.Float32, value);}
    public get MaxDistance() {return this.GetProp("MaxDistance", DataType.Float32);}
    public set MaxDistance(value) {this.SetProp("MaxDistance", DataType.Float32, value);}
    public get PlayerToHideFrom() {return this.GetProp("PlayerToHideFrom", DataType.Referent) as Instance | undefined;}
    public set PlayerToHideFrom(value) {this.SetProp("PlayerToHideFrom", DataType.Referent, value);}
    public get Size() {return this.GetProp("Size", DataType.UDim2);}
    public set Size(value) {this.SetProp("Size", DataType.UDim2, value);}
    public get SizeOffset() {return this.GetProp("SizeOffset", DataType.Vector2);}
    public set SizeOffset(value) {this.SetProp("SizeOffset", DataType.Vector2, value);}
    public get StudsOffset() {return this.GetProp("StudsOffset", DataType.Vector3);}
    public set StudsOffset(value) {this.SetProp("StudsOffset", DataType.Vector3, value);}
    public get StudsOffsetWorldSpace() {return this.GetProp("StudsOffsetWorldSpace", DataType.Vector3);}
    public set StudsOffsetWorldSpace(value) {this.SetProp("StudsOffsetWorldSpace", DataType.Vector3, value);}
}

export class ScreenGui extends LayerCollector {
    protected constructor() {super(); this.addClassName("ScreenGui");}
    public static New() {return new ScreenGui();}
    public get ClipToDeviceSafeArea() {return this.GetProp("ClipToDeviceSafeArea", DataType.Bool);}
    public set ClipToDeviceSafeArea(value) {this.SetProp("ClipToDeviceSafeArea", DataType.Bool, value);}
    public get DisplayOrder() {return this.GetProp("DisplayOrder", DataType.Int32);}
    public set DisplayOrder(value) {this.SetProp("DisplayOrder", DataType.Int32, value);}
    public get SafeAreaCompatibility() {return this.GetProp("SafeAreaCompatibility", DataType.Enum) as SafeAreaCompatibility | undefined;}
    public set SafeAreaCompatibility(value) {this.SetProp("SafeAreaCompatibility", DataType.Enum, value);}
    public get ScreenInsets() {return this.GetProp("ScreenInsets", DataType.Enum) as ScreenInsets | undefined;}
    public set ScreenInsets(value) {this.SetProp("ScreenInsets", DataType.Enum, value);}
}

/**@deprecated Deprecated by Roblox*/
export class GuiMain extends ScreenGui {
    protected constructor() {super(); this.addClassName("GuiMain");}
    public static New() {return new GuiMain();}
}

export abstract class SurfaceGuiBase extends LayerCollector {
    protected constructor() {super(); this.addClassName("SurfaceGuiBase");}
    public get Active() {return this.GetProp("Active", DataType.Bool);}
    public set Active(value) {this.SetProp("Active", DataType.Bool, value);}
    public get Adornee() {return this.GetProp("Adornee", DataType.Referent) as Instance | undefined;}
    public set Adornee(value) {this.SetProp("Adornee", DataType.Referent, value);}
    public get Face() {return this.GetProp("Face", DataType.Enum) as NormalId | undefined;}
    public set Face(value) {this.SetProp("Face", DataType.Enum, value);}
}

export class AdGui extends SurfaceGuiBase {
    protected constructor() {super(); this.addClassName("AdGui");}
    public static New() {return new AdGui();}
    public get AdShape() {return this.GetProp("AdShape", DataType.Enum) as AdShape | undefined;}
    public set AdShape(value) {this.SetProp("AdShape", DataType.Enum, value);}
    public get EnableVideoAds() {return this.GetProp("EnableVideoAds", DataType.Bool);}
    public set EnableVideoAds(value) {this.SetProp("EnableVideoAds", DataType.Bool, value);}
    public get FallbackImage() {return this.GetProp("FallbackImage", DataType.String);}
    public set FallbackImage(value) {this.SetProp("FallbackImage", DataType.String, value);}
}

export class SurfaceGui extends SurfaceGuiBase {
    protected constructor() {super(); this.addClassName("SurfaceGui");}
    public static New() {return new SurfaceGui();}
    public get AlwaysOnTop() {return this.GetProp("AlwaysOnTop", DataType.Bool);}
    public set AlwaysOnTop(value) {this.SetProp("AlwaysOnTop", DataType.Bool, value);}
    public get Brightness() {return this.GetProp("Brightness", DataType.Float32);}
    public set Brightness(value) {this.SetProp("Brightness", DataType.Float32, value);}
    public get CanvasSize() {return this.GetProp("CanvasSize", DataType.Vector2);}
    public set CanvasSize(value) {this.SetProp("CanvasSize", DataType.Vector2, value);}
    public get ClipsDescendants() {return this.GetProp("ClipsDescendants", DataType.Bool);}
    public set ClipsDescendants(value) {this.SetProp("ClipsDescendants", DataType.Bool, value);}
    public get LightInfluence() {return this.GetProp("LightInfluence", DataType.Float32);}
    public set LightInfluence(value) {this.SetProp("LightInfluence", DataType.Float32, value);}
    public get MaxDistance() {return this.GetProp("MaxDistance", DataType.Float32);}
    public set MaxDistance(value) {this.SetProp("MaxDistance", DataType.Float32, value);}
    public get PixelsPerStud() {return this.GetProp("PixelsPerStud", DataType.Float32);}
    public set PixelsPerStud(value) {this.SetProp("PixelsPerStud", DataType.Float32, value);}
    public get SizingMode() {return this.GetProp("SizingMode", DataType.Enum) as SurfaceGuiSizingMode | undefined;}
    public set SizingMode(value) {this.SetProp("SizingMode", DataType.Enum, value);}
    public get ToolPunchThroughDistance() {return this.GetProp("ToolPunchThroughDistance", DataType.Float32);}
    public set ToolPunchThroughDistance(value) {this.SetProp("ToolPunchThroughDistance", DataType.Float32, value);}
    public get ZOffset() {return this.GetProp("ZOffset", DataType.Float32);}
    public set ZOffset(value) {this.SetProp("ZOffset", DataType.Float32, value);}
}

export abstract class GuiBase3d extends GuiBase {
    protected constructor() {super(); this.addClassName("GuiBase3d");}
    /**@deprecated Deprecated by Roblox*/
    public get Color() {return this.GetProp("Color", DataType.BrickColor);}
    /**@deprecated Deprecated by Roblox*/
    public set Color(value) {this.SetProp("Color", DataType.BrickColor, value);}
    public get Color3() {return this.GetProp("Color3", DataType.Color3);}
    public set Color3(value) {this.SetProp("Color3", DataType.Color3, value);}
    public get Transparency() {return this.GetProp("Transparency", DataType.Float32);}
    public set Transparency(value) {this.SetProp("Transparency", DataType.Float32, value);}
    public get Visible() {return this.GetProp("Visible", DataType.Bool);}
    public set Visible(value) {this.SetProp("Visible", DataType.Bool, value);}
}

/**@deprecated Deprecated by Roblox*/
export class FloorWire extends GuiBase3d {
    protected constructor() {super(); this.addClassName("FloorWire");}
    public static New() {return new FloorWire();}
    public get CycleOffset() {return this.GetProp("CycleOffset", DataType.Float32);}
    public set CycleOffset(value) {this.SetProp("CycleOffset", DataType.Float32, value);}
    public get From() {return this.GetProp("From", DataType.Referent) as BasePart | undefined;}
    public set From(value) {this.SetProp("From", DataType.Referent, value);}
    public get StudsBetweenTextures() {return this.GetProp("StudsBetweenTextures", DataType.Float32);}
    public set StudsBetweenTextures(value) {this.SetProp("StudsBetweenTextures", DataType.Float32, value);}
    public get Texture() {return this.GetProp("Texture", DataType.String);}
    public set Texture(value) {this.SetProp("Texture", DataType.String, value);}
    public get TextureSize() {return this.GetProp("TextureSize", DataType.Vector2);}
    public set TextureSize(value) {this.SetProp("TextureSize", DataType.Vector2, value);}
    public get To() {return this.GetProp("To", DataType.Referent) as BasePart | undefined;}
    public set To(value) {this.SetProp("To", DataType.Referent, value);}
    public get Velocity() {return this.GetProp("Velocity", DataType.Float32);}
    public set Velocity(value) {this.SetProp("Velocity", DataType.Float32, value);}
    public get WireRadius() {return this.GetProp("WireRadius", DataType.Float32);}
    public set WireRadius(value) {this.SetProp("WireRadius", DataType.Float32, value);}
}

export abstract class InstanceAdornment extends GuiBase3d {
    protected constructor() {super(); this.addClassName("InstanceAdornment");}
    public get Adornee() {return this.GetProp("Adornee", DataType.Referent) as Instance | undefined;}
    public set Adornee(value) {this.SetProp("Adornee", DataType.Referent, value);}
}

export class SelectionBox extends InstanceAdornment {
    protected constructor() {super(); this.addClassName("SelectionBox");}
    public static New() {return new SelectionBox();}
    public get LineThickness() {return this.GetProp("LineThickness", DataType.Float32);}
    public set LineThickness(value) {this.SetProp("LineThickness", DataType.Float32, value);}
    public get StudioSelectionBox() {return this.GetProp("StudioSelectionBox", DataType.Bool);}
    public set StudioSelectionBox(value) {this.SetProp("StudioSelectionBox", DataType.Bool, value);}
    /**@deprecated Deprecated by Roblox*/
    public get SurfaceColor() {return this.GetProp("SurfaceColor", DataType.BrickColor);}
    /**@deprecated Deprecated by Roblox*/
    public set SurfaceColor(value) {this.SetProp("SurfaceColor", DataType.BrickColor, value);}
    public get SurfaceColor3() {return this.GetProp("SurfaceColor3", DataType.Color3);}
    public set SurfaceColor3(value) {this.SetProp("SurfaceColor3", DataType.Color3, value);}
    public get SurfaceTransparency() {return this.GetProp("SurfaceTransparency", DataType.Float32);}
    public set SurfaceTransparency(value) {this.SetProp("SurfaceTransparency", DataType.Float32, value);}
}

export abstract class PVAdornment extends GuiBase3d {
    protected constructor() {super(); this.addClassName("PVAdornment");}
    public get Adornee() {return this.GetProp("Adornee", DataType.Referent) as PVInstance | undefined;}
    public set Adornee(value) {this.SetProp("Adornee", DataType.Referent, value);}
}

export abstract class HandleAdornment extends PVAdornment {
    protected constructor() {super(); this.addClassName("HandleAdornment");}
    public get AdornCullingMode() {return this.GetProp("AdornCullingMode", DataType.Enum) as AdornCullingMode | undefined;}
    public set AdornCullingMode(value) {this.SetProp("AdornCullingMode", DataType.Enum, value);}
    public get AlwaysOnTop() {return this.GetProp("AlwaysOnTop", DataType.Bool);}
    public set AlwaysOnTop(value) {this.SetProp("AlwaysOnTop", DataType.Bool, value);}
    public get CFrame() {return this.GetProp("CFrame", DataType.CFrame);}
    public set CFrame(value) {this.SetProp("CFrame", DataType.CFrame, value);}
    public get SizeRelativeOffset() {return this.GetProp("SizeRelativeOffset", DataType.Vector3);}
    public set SizeRelativeOffset(value) {this.SetProp("SizeRelativeOffset", DataType.Vector3, value);}
    public get ZIndex() {return this.GetProp("ZIndex", DataType.Int32);}
    public set ZIndex(value) {this.SetProp("ZIndex", DataType.Int32, value);}
}

export class BoxHandleAdornment extends HandleAdornment {
    protected constructor() {super(); this.addClassName("BoxHandleAdornment");}
    public static New() {return new BoxHandleAdornment();}
    public get Size() {return this.GetProp("Size", DataType.Vector3);}
    public set Size(value) {this.SetProp("Size", DataType.Vector3, value);}
}

export class ConeHandleAdornment extends HandleAdornment {
    protected constructor() {super(); this.addClassName("ConeHandleAdornment");}
    public static New() {return new ConeHandleAdornment();}
    public get Height() {return this.GetProp("Height", DataType.Float32);}
    public set Height(value) {this.SetProp("Height", DataType.Float32, value);}
    public get Radius() {return this.GetProp("Radius", DataType.Float32);}
    public set Radius(value) {this.SetProp("Radius", DataType.Float32, value);}
}

export class CylinderHandleAdornment extends HandleAdornment {
    protected constructor() {super(); this.addClassName("CylinderHandleAdornment");}
    public static New() {return new CylinderHandleAdornment();}
    public get Angle() {return this.GetProp("Angle", DataType.Float32);}
    public set Angle(value) {this.SetProp("Angle", DataType.Float32, value);}
    public get Height() {return this.GetProp("Height", DataType.Float32);}
    public set Height(value) {this.SetProp("Height", DataType.Float32, value);}
    public get InnerRadius() {return this.GetProp("InnerRadius", DataType.Float32);}
    public set InnerRadius(value) {this.SetProp("InnerRadius", DataType.Float32, value);}
    public get Radius() {return this.GetProp("Radius", DataType.Float32);}
    public set Radius(value) {this.SetProp("Radius", DataType.Float32, value);}
}

export class ImageHandleAdornment extends HandleAdornment {
    protected constructor() {super(); this.addClassName("ImageHandleAdornment");}
    public static New() {return new ImageHandleAdornment();}
    public get Image() {return this.GetProp("Image", DataType.String);}
    public set Image(value) {this.SetProp("Image", DataType.String, value);}
    public get Size() {return this.GetProp("Size", DataType.Vector2);}
    public set Size(value) {this.SetProp("Size", DataType.Vector2, value);}
}

export class LineHandleAdornment extends HandleAdornment {
    protected constructor() {super(); this.addClassName("LineHandleAdornment");}
    public static New() {return new LineHandleAdornment();}
    public get Length() {return this.GetProp("Length", DataType.Float32);}
    public set Length(value) {this.SetProp("Length", DataType.Float32, value);}
    public get Thickness() {return this.GetProp("Thickness", DataType.Float32);}
    public set Thickness(value) {this.SetProp("Thickness", DataType.Float32, value);}
}

export class SphereHandleAdornment extends HandleAdornment {
    protected constructor() {super(); this.addClassName("SphereHandleAdornment");}
    public static New() {return new SphereHandleAdornment();}
    public get Radius() {return this.GetProp("Radius", DataType.Float32);}
    public set Radius(value) {this.SetProp("Radius", DataType.Float32, value);}
}

export class WireframeHandleAdornment extends HandleAdornment {
    protected constructor() {super(); this.addClassName("WireframeHandleAdornment");}
    public static New() {return new WireframeHandleAdornment();}
    public get Scale() {return this.GetProp("Scale", DataType.Vector3);}
    public set Scale(value) {this.SetProp("Scale", DataType.Vector3, value);}
}

export class ParabolaAdornment extends PVAdornment {
    protected constructor() {super(); this.addClassName("ParabolaAdornment");}
    public static New() {return new ParabolaAdornment();}
}

export class SelectionSphere extends PVAdornment {
    protected constructor() {super(); this.addClassName("SelectionSphere");}
    public static New() {return new SelectionSphere();}
    /**@deprecated Deprecated by Roblox*/
    public get SurfaceColor() {return this.GetProp("SurfaceColor", DataType.BrickColor);}
    /**@deprecated Deprecated by Roblox*/
    public set SurfaceColor(value) {this.SetProp("SurfaceColor", DataType.BrickColor, value);}
    public get SurfaceColor3() {return this.GetProp("SurfaceColor3", DataType.Color3);}
    public set SurfaceColor3(value) {this.SetProp("SurfaceColor3", DataType.Color3, value);}
    public get SurfaceTransparency() {return this.GetProp("SurfaceTransparency", DataType.Float32);}
    public set SurfaceTransparency(value) {this.SetProp("SurfaceTransparency", DataType.Float32, value);}
}

export abstract class PartAdornment extends GuiBase3d {
    protected constructor() {super(); this.addClassName("PartAdornment");}
    public get Adornee() {return this.GetProp("Adornee", DataType.Referent) as BasePart | undefined;}
    public set Adornee(value) {this.SetProp("Adornee", DataType.Referent, value);}
}

export abstract class HandlesBase extends PartAdornment {
    protected constructor() {super(); this.addClassName("HandlesBase");}
}

export class ArcHandles extends HandlesBase {
    protected constructor() {super(); this.addClassName("ArcHandles");}
    public static New() {return new ArcHandles();}
    public get Axes() {return this.GetProp("Axes", DataType.Axes);}
    public set Axes(value) {this.SetProp("Axes", DataType.Axes, value);}
}

export class Handles extends HandlesBase {
    protected constructor() {super(); this.addClassName("Handles");}
    public static New() {return new Handles();}
    public get Faces() {return this.GetProp("Faces", DataType.Faces);}
    public set Faces(value) {this.SetProp("Faces", DataType.Faces, value);}
    public get Style() {return this.GetProp("Style", DataType.Enum) as HandlesStyle | undefined;}
    public set Style(value) {this.SetProp("Style", DataType.Enum, value);}
}

export class SurfaceSelection extends PartAdornment {
    protected constructor() {super(); this.addClassName("SurfaceSelection");}
    public static New() {return new SurfaceSelection();}
    public get TargetSurface() {return this.GetProp("TargetSurface", DataType.Enum) as NormalId | undefined;}
    public set TargetSurface(value) {this.SetProp("TargetSurface", DataType.Enum, value);}
}

export abstract class SelectionLasso extends GuiBase3d {
    protected constructor() {super(); this.addClassName("SelectionLasso");}
    public get Humanoid() {return this.GetProp("Humanoid", DataType.Referent) as Humanoid | undefined;}
    public set Humanoid(value) {this.SetProp("Humanoid", DataType.Referent, value);}
}

/**@deprecated Deprecated by Roblox*/
export class SelectionPartLasso extends SelectionLasso {
    protected constructor() {super(); this.addClassName("SelectionPartLasso");}
    public static New() {return new SelectionPartLasso();}
    public get Part() {return this.GetProp("Part", DataType.Referent) as BasePart | undefined;}
    public set Part(value) {this.SetProp("Part", DataType.Referent, value);}
}

/**@deprecated Deprecated by Roblox*/
export class SelectionPointLasso extends SelectionLasso {
    protected constructor() {super(); this.addClassName("SelectionPointLasso");}
    public static New() {return new SelectionPointLasso();}
    public get Point() {return this.GetProp("Point", DataType.Vector3);}
    public set Point(value) {this.SetProp("Point", DataType.Vector3, value);}
}

export class Path2D extends GuiBase {
    protected constructor() {super(); this.addClassName("Path2D");}
    public static New() {return new Path2D();}
    public get Color3() {return this.GetProp("Color3", DataType.Color3);}
    public set Color3(value) {this.SetProp("Color3", DataType.Color3, value);}
    public get PropertiesSerialize() {return this.GetProp("PropertiesSerialize", DataType.String);}
    public set PropertiesSerialize(value) {this.SetProp("PropertiesSerialize", DataType.String, value);}
    public get Thickness() {return this.GetProp("Thickness", DataType.Float32);}
    public set Thickness(value) {this.SetProp("Thickness", DataType.Float32, value);}
    public get Transparency() {return this.GetProp("Transparency", DataType.Float32);}
    public set Transparency(value) {this.SetProp("Transparency", DataType.Float32, value);}
    public get Visible() {return this.GetProp("Visible", DataType.Bool);}
    public set Visible(value) {this.SetProp("Visible", DataType.Bool, value);}
    public get ZIndex() {return this.GetProp("ZIndex", DataType.Int32);}
    public set ZIndex(value) {this.SetProp("ZIndex", DataType.Int32, value);}
}

export class GuiService extends Instance {
    protected constructor() {super(true); this.addClassName("GuiService");}
    public static New() {return new GuiService();}
    public get AutoSelectGuiEnabled() {return this.GetProp("AutoSelectGuiEnabled", DataType.Bool);}
    public set AutoSelectGuiEnabled(value) {this.SetProp("AutoSelectGuiEnabled", DataType.Bool, value);}
    public get GuiNavigationEnabled() {return this.GetProp("GuiNavigationEnabled", DataType.Bool);}
    public set GuiNavigationEnabled(value) {this.SetProp("GuiNavigationEnabled", DataType.Bool, value);}
    public get SelectedObject() {return this.GetProp("SelectedObject", DataType.Referent) as GuiObject | undefined;}
    public set SelectedObject(value) {this.SetProp("SelectedObject", DataType.Referent, value);}
}

export class GuidRegistryService extends Instance {
    protected constructor() {super(true); this.addClassName("GuidRegistryService");}
    public static New() {return new GuidRegistryService();}
}

export class HapticService extends Instance {
    protected constructor() {super(true); this.addClassName("HapticService");}
    public static New() {return new HapticService();}
}

export class HeightmapImporterService extends Instance {
    protected constructor() {super(true); this.addClassName("HeightmapImporterService");}
    public static New() {return new HeightmapImporterService();}
}

export class HiddenSurfaceRemovalAsset extends Instance {
    protected constructor() {super(); this.addClassName("HiddenSurfaceRemovalAsset");}
    public static New() {return new HiddenSurfaceRemovalAsset();}
    public get HSRData() {return this.GetProp("HSRData", DataType.String);}
    public set HSRData(value) {this.SetProp("HSRData", DataType.String, value);}
    public get HSRMeshIdData() {return this.GetProp("HSRMeshIdData", DataType.String);}
    public set HSRMeshIdData(value) {this.SetProp("HSRMeshIdData", DataType.String, value);}
}

export class Highlight extends Instance {
    protected constructor() {super(); this.addClassName("Highlight");}
    public static New() {return new Highlight();}
    public get Adornee() {return this.GetProp("Adornee", DataType.Referent) as Instance | undefined;}
    public set Adornee(value) {this.SetProp("Adornee", DataType.Referent, value);}
    public get DepthMode() {return this.GetProp("DepthMode", DataType.Enum) as HighlightDepthMode | undefined;}
    public set DepthMode(value) {this.SetProp("DepthMode", DataType.Enum, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool);}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get FillColor() {return this.GetProp("FillColor", DataType.Color3);}
    public set FillColor(value) {this.SetProp("FillColor", DataType.Color3, value);}
    public get FillTransparency() {return this.GetProp("FillTransparency", DataType.Float32);}
    public set FillTransparency(value) {this.SetProp("FillTransparency", DataType.Float32, value);}
    public get OutlineColor() {return this.GetProp("OutlineColor", DataType.Color3);}
    public set OutlineColor(value) {this.SetProp("OutlineColor", DataType.Color3, value);}
    public get OutlineTransparency() {return this.GetProp("OutlineTransparency", DataType.Float32);}
    public set OutlineTransparency(value) {this.SetProp("OutlineTransparency", DataType.Float32, value);}
}

/**@deprecated Deprecated by Roblox*/
export class Hopper extends Instance {
    protected constructor() {super(true); this.addClassName("Hopper");}
    public static New() {return new Hopper();}
}

export class HttpRbxApiService extends Instance {
    protected constructor() {super(true); this.addClassName("HttpRbxApiService");}
    public static New() {return new HttpRbxApiService();}
}

export class HttpService extends Instance {
    protected constructor() {super(true); this.addClassName("HttpService");}
    public static New() {return new HttpService();}
    public get HttpEnabled() {return this.GetProp("HttpEnabled", DataType.Bool);}
    public set HttpEnabled(value) {this.SetProp("HttpEnabled", DataType.Bool, value);}
}

export class Humanoid extends Instance {
    protected constructor() {super(); this.addClassName("Humanoid");}
    public static New() {return new Humanoid();}
    public get AutoJumpEnabled() {return this.GetProp("AutoJumpEnabled", DataType.Bool);}
    public set AutoJumpEnabled(value) {this.SetProp("AutoJumpEnabled", DataType.Bool, value);}
    public get AutoRotate() {return this.GetProp("AutoRotate", DataType.Bool);}
    public set AutoRotate(value) {this.SetProp("AutoRotate", DataType.Bool, value);}
    public get AutomaticScalingEnabled() {return this.GetProp("AutomaticScalingEnabled", DataType.Bool);}
    public set AutomaticScalingEnabled(value) {this.SetProp("AutomaticScalingEnabled", DataType.Bool, value);}
    public get BreakJointsOnDeath() {return this.GetProp("BreakJointsOnDeath", DataType.Bool);}
    public set BreakJointsOnDeath(value) {this.SetProp("BreakJointsOnDeath", DataType.Bool, value);}
    /**@deprecated Deprecated by Roblox*/
    public get CollisionType() {return this.GetProp("CollisionType", DataType.Enum) as HumanoidCollisionType | undefined;}
    /**@deprecated Deprecated by Roblox*/
    public set CollisionType(value) {this.SetProp("CollisionType", DataType.Enum, value);}
    public get DisplayDistanceType() {return this.GetProp("DisplayDistanceType", DataType.Enum) as HumanoidDisplayDistanceType | undefined;}
    public set DisplayDistanceType(value) {this.SetProp("DisplayDistanceType", DataType.Enum, value);}
    public get DisplayName() {return this.GetProp("DisplayName", DataType.String);}
    public set DisplayName(value) {this.SetProp("DisplayName", DataType.String, value);}
    public get EvaluateStateMachine() {return this.GetProp("EvaluateStateMachine", DataType.Bool);}
    public set EvaluateStateMachine(value) {this.SetProp("EvaluateStateMachine", DataType.Bool, value);}
    public get HealthDisplayDistance() {return this.GetProp("HealthDisplayDistance", DataType.Float32);}
    public set HealthDisplayDistance(value) {this.SetProp("HealthDisplayDistance", DataType.Float32, value);}
    public get HealthDisplayType() {return this.GetProp("HealthDisplayType", DataType.Enum) as HumanoidHealthDisplayType | undefined;}
    public set HealthDisplayType(value) {this.SetProp("HealthDisplayType", DataType.Enum, value);}
    public get HealthXML() {return this.GetProp("Health_XML", DataType.Float32);}
    public set HealthXML(value) {this.SetProp("Health_XML", DataType.Float32, value);}
    public get HipHeight() {return this.GetProp("HipHeight", DataType.Float32);}
    public set HipHeight(value) {this.SetProp("HipHeight", DataType.Float32, value);}
    public get InternalBodyScale() {return this.GetProp("InternalBodyScale", DataType.Vector3);}
    public set InternalBodyScale(value) {this.SetProp("InternalBodyScale", DataType.Vector3, value);}
    public get InternalHeadScale() {return this.GetProp("InternalHeadScale", DataType.Float32);}
    public set InternalHeadScale(value) {this.SetProp("InternalHeadScale", DataType.Float32, value);}
    public get JumpHeight() {return this.GetProp("JumpHeight", DataType.Float32);}
    public set JumpHeight(value) {this.SetProp("JumpHeight", DataType.Float32, value);}
    public get JumpPower() {return this.GetProp("JumpPower", DataType.Float32);}
    public set JumpPower(value) {this.SetProp("JumpPower", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get LeftLeg() {return this.GetProp("LeftLeg", DataType.Referent) as BasePart | undefined;}
    /**@deprecated Deprecated by Roblox*/
    public set LeftLeg(value) {this.SetProp("LeftLeg", DataType.Referent, value);}
    public get MaxHealth() {return this.GetProp("MaxHealth", DataType.Float32);}
    public set MaxHealth(value) {this.SetProp("MaxHealth", DataType.Float32, value);}
    public get MaxSlopeAngle() {return this.GetProp("MaxSlopeAngle", DataType.Float32);}
    public set MaxSlopeAngle(value) {this.SetProp("MaxSlopeAngle", DataType.Float32, value);}
    public get NameDisplayDistance() {return this.GetProp("NameDisplayDistance", DataType.Float32);}
    public set NameDisplayDistance(value) {this.SetProp("NameDisplayDistance", DataType.Float32, value);}
    public get NameOcclusion() {return this.GetProp("NameOcclusion", DataType.Enum) as NameOcclusion | undefined;}
    public set NameOcclusion(value) {this.SetProp("NameOcclusion", DataType.Enum, value);}
    public get RequiresNeck() {return this.GetProp("RequiresNeck", DataType.Bool);}
    public set RequiresNeck(value) {this.SetProp("RequiresNeck", DataType.Bool, value);}
    public get RigType() {return this.GetProp("RigType", DataType.Enum) as HumanoidRigType | undefined;}
    public set RigType(value) {this.SetProp("RigType", DataType.Enum, value);}
    /**@deprecated Deprecated by Roblox*/
    public get RightLeg() {return this.GetProp("RightLeg", DataType.Referent) as BasePart | undefined;}
    /**@deprecated Deprecated by Roblox*/
    public set RightLeg(value) {this.SetProp("RightLeg", DataType.Referent, value);}
    /**@deprecated Deprecated by Roblox*/
    public get Torso() {return this.GetProp("Torso", DataType.Referent) as BasePart | undefined;}
    /**@deprecated Deprecated by Roblox*/
    public set Torso(value) {this.SetProp("Torso", DataType.Referent, value);}
    public get UseJumpPower() {return this.GetProp("UseJumpPower", DataType.Bool);}
    public set UseJumpPower(value) {this.SetProp("UseJumpPower", DataType.Bool, value);}
    public get WalkSpeed() {return this.GetProp("WalkSpeed", DataType.Float32);}
    public set WalkSpeed(value) {this.SetProp("WalkSpeed", DataType.Float32, value);}
}

export class HumanoidDescription extends Instance {
    protected constructor() {super(); this.addClassName("HumanoidDescription");}
    public static New() {return new HumanoidDescription();}
    public get AccessoryBlob() {return this.GetProp("AccessoryBlob", DataType.String);}
    public set AccessoryBlob(value) {this.SetProp("AccessoryBlob", DataType.String, value);}
    public get AccessoryRigidAndLayeredBlob() {return this.GetProp("AccessoryRigidAndLayeredBlob", DataType.String);}
    public set AccessoryRigidAndLayeredBlob(value) {this.SetProp("AccessoryRigidAndLayeredBlob", DataType.String, value);}
    public get BackAccessory() {return this.GetProp("BackAccessory", DataType.String);}
    public set BackAccessory(value) {this.SetProp("BackAccessory", DataType.String, value);}
    public get BodyTypeScale() {return this.GetProp("BodyTypeScale", DataType.Float32);}
    public set BodyTypeScale(value) {this.SetProp("BodyTypeScale", DataType.Float32, value);}
    public get ClimbAnimation() {return this.GetProp("ClimbAnimation", DataType.Int64);}
    public set ClimbAnimation(value) {this.SetProp("ClimbAnimation", DataType.Int64, value);}
    public get DepthScale() {return this.GetProp("DepthScale", DataType.Float32);}
    public set DepthScale(value) {this.SetProp("DepthScale", DataType.Float32, value);}
    public get EmotesDataInternal() {return this.GetProp("EmotesDataInternal", DataType.String);}
    public set EmotesDataInternal(value) {this.SetProp("EmotesDataInternal", DataType.String, value);}
    public get EquippedEmotesDataInternal() {return this.GetProp("EquippedEmotesDataInternal", DataType.String);}
    public set EquippedEmotesDataInternal(value) {this.SetProp("EquippedEmotesDataInternal", DataType.String, value);}
    public get Face() {return this.GetProp("Face", DataType.Int64);}
    public set Face(value) {this.SetProp("Face", DataType.Int64, value);}
    public get FaceAccessory() {return this.GetProp("FaceAccessory", DataType.String);}
    public set FaceAccessory(value) {this.SetProp("FaceAccessory", DataType.String, value);}
    public get FallAnimation() {return this.GetProp("FallAnimation", DataType.Int64);}
    public set FallAnimation(value) {this.SetProp("FallAnimation", DataType.Int64, value);}
    public get FrontAccessory() {return this.GetProp("FrontAccessory", DataType.String);}
    public set FrontAccessory(value) {this.SetProp("FrontAccessory", DataType.String, value);}
    public get GraphicTShirt() {return this.GetProp("GraphicTShirt", DataType.Int64);}
    public set GraphicTShirt(value) {this.SetProp("GraphicTShirt", DataType.Int64, value);}
    public get HairAccessory() {return this.GetProp("HairAccessory", DataType.String);}
    public set HairAccessory(value) {this.SetProp("HairAccessory", DataType.String, value);}
    public get HatAccessory() {return this.GetProp("HatAccessory", DataType.String);}
    public set HatAccessory(value) {this.SetProp("HatAccessory", DataType.String, value);}
    public get Head() {return this.GetProp("Head", DataType.Int64);}
    public set Head(value) {this.SetProp("Head", DataType.Int64, value);}
    public get HeadColor() {return this.GetProp("HeadColor", DataType.Color3);}
    public set HeadColor(value) {this.SetProp("HeadColor", DataType.Color3, value);}
    public get HeadScale() {return this.GetProp("HeadScale", DataType.Float32);}
    public set HeadScale(value) {this.SetProp("HeadScale", DataType.Float32, value);}
    public get HeightScale() {return this.GetProp("HeightScale", DataType.Float32);}
    public set HeightScale(value) {this.SetProp("HeightScale", DataType.Float32, value);}
    public get IdleAnimation() {return this.GetProp("IdleAnimation", DataType.Int64);}
    public set IdleAnimation(value) {this.SetProp("IdleAnimation", DataType.Int64, value);}
    public get JumpAnimation() {return this.GetProp("JumpAnimation", DataType.Int64);}
    public set JumpAnimation(value) {this.SetProp("JumpAnimation", DataType.Int64, value);}
    public get LeftArm() {return this.GetProp("LeftArm", DataType.Int64);}
    public set LeftArm(value) {this.SetProp("LeftArm", DataType.Int64, value);}
    public get LeftArmColor() {return this.GetProp("LeftArmColor", DataType.Color3);}
    public set LeftArmColor(value) {this.SetProp("LeftArmColor", DataType.Color3, value);}
    public get LeftLeg() {return this.GetProp("LeftLeg", DataType.Int64);}
    public set LeftLeg(value) {this.SetProp("LeftLeg", DataType.Int64, value);}
    public get LeftLegColor() {return this.GetProp("LeftLegColor", DataType.Color3);}
    public set LeftLegColor(value) {this.SetProp("LeftLegColor", DataType.Color3, value);}
    public get MoodAnimation() {return this.GetProp("MoodAnimation", DataType.Int64);}
    public set MoodAnimation(value) {this.SetProp("MoodAnimation", DataType.Int64, value);}
    public get NeckAccessory() {return this.GetProp("NeckAccessory", DataType.String);}
    public set NeckAccessory(value) {this.SetProp("NeckAccessory", DataType.String, value);}
    public get Pants() {return this.GetProp("Pants", DataType.Int64);}
    public set Pants(value) {this.SetProp("Pants", DataType.Int64, value);}
    public get ProportionScale() {return this.GetProp("ProportionScale", DataType.Float32);}
    public set ProportionScale(value) {this.SetProp("ProportionScale", DataType.Float32, value);}
    public get RightArm() {return this.GetProp("RightArm", DataType.Int64);}
    public set RightArm(value) {this.SetProp("RightArm", DataType.Int64, value);}
    public get RightArmColor() {return this.GetProp("RightArmColor", DataType.Color3);}
    public set RightArmColor(value) {this.SetProp("RightArmColor", DataType.Color3, value);}
    public get RightLeg() {return this.GetProp("RightLeg", DataType.Int64);}
    public set RightLeg(value) {this.SetProp("RightLeg", DataType.Int64, value);}
    public get RightLegColor() {return this.GetProp("RightLegColor", DataType.Color3);}
    public set RightLegColor(value) {this.SetProp("RightLegColor", DataType.Color3, value);}
    public get RunAnimation() {return this.GetProp("RunAnimation", DataType.Int64);}
    public set RunAnimation(value) {this.SetProp("RunAnimation", DataType.Int64, value);}
    public get Shirt() {return this.GetProp("Shirt", DataType.Int64);}
    public set Shirt(value) {this.SetProp("Shirt", DataType.Int64, value);}
    public get ShouldersAccessory() {return this.GetProp("ShouldersAccessory", DataType.String);}
    public set ShouldersAccessory(value) {this.SetProp("ShouldersAccessory", DataType.String, value);}
    public get SwimAnimation() {return this.GetProp("SwimAnimation", DataType.Int64);}
    public set SwimAnimation(value) {this.SetProp("SwimAnimation", DataType.Int64, value);}
    public get Torso() {return this.GetProp("Torso", DataType.Int64);}
    public set Torso(value) {this.SetProp("Torso", DataType.Int64, value);}
    public get TorsoColor() {return this.GetProp("TorsoColor", DataType.Color3);}
    public set TorsoColor(value) {this.SetProp("TorsoColor", DataType.Color3, value);}
    public get WaistAccessory() {return this.GetProp("WaistAccessory", DataType.String);}
    public set WaistAccessory(value) {this.SetProp("WaistAccessory", DataType.String, value);}
    public get WalkAnimation() {return this.GetProp("WalkAnimation", DataType.Int64);}
    public set WalkAnimation(value) {this.SetProp("WalkAnimation", DataType.Int64, value);}
    public get WidthScale() {return this.GetProp("WidthScale", DataType.Float32);}
    public set WidthScale(value) {this.SetProp("WidthScale", DataType.Float32, value);}
}

export class IKControl extends Instance {
    protected constructor() {super(); this.addClassName("IKControl");}
    public static New() {return new IKControl();}
    public get ChainRoot() {return this.GetProp("ChainRoot", DataType.Referent) as Instance | undefined;}
    public set ChainRoot(value) {this.SetProp("ChainRoot", DataType.Referent, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool);}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get EndEffector() {return this.GetProp("EndEffector", DataType.Referent) as Instance | undefined;}
    public set EndEffector(value) {this.SetProp("EndEffector", DataType.Referent, value);}
    public get EndEffectorOffset() {return this.GetProp("EndEffectorOffset", DataType.CFrame);}
    public set EndEffectorOffset(value) {this.SetProp("EndEffectorOffset", DataType.CFrame, value);}
    public get Offset() {return this.GetProp("Offset", DataType.CFrame);}
    public set Offset(value) {this.SetProp("Offset", DataType.CFrame, value);}
    public get Pole() {return this.GetProp("Pole", DataType.Referent) as Instance | undefined;}
    public set Pole(value) {this.SetProp("Pole", DataType.Referent, value);}
    public get Priority() {return this.GetProp("Priority", DataType.Int32);}
    public set Priority(value) {this.SetProp("Priority", DataType.Int32, value);}
    public get SmoothTime() {return this.GetProp("SmoothTime", DataType.Float32);}
    public set SmoothTime(value) {this.SetProp("SmoothTime", DataType.Float32, value);}
    public get Target() {return this.GetProp("Target", DataType.Referent) as Instance | undefined;}
    public set Target(value) {this.SetProp("Target", DataType.Referent, value);}
    public get Type() {return this.GetProp("Type", DataType.Enum) as IKControlType | undefined;}
    public set Type(value) {this.SetProp("Type", DataType.Enum, value);}
    public get Weight() {return this.GetProp("Weight", DataType.Float32);}
    public set Weight(value) {this.SetProp("Weight", DataType.Float32, value);}
}

export abstract class ILegacyStudioBridge extends Instance {
    protected constructor() {super(true); this.addClassName("ILegacyStudioBridge");}
}

export class LegacyStudioBridge extends ILegacyStudioBridge {
    protected constructor() {super(); this.addClassName("LegacyStudioBridge");}
    public static New() {return new LegacyStudioBridge();}
}

export class IXPService extends Instance {
    protected constructor() {super(true); this.addClassName("IXPService");}
    public static New() {return new IXPService();}
}

export class IncrementalPatchBuilder extends Instance {
    protected constructor() {super(true); this.addClassName("IncrementalPatchBuilder");}
    public static New() {return new IncrementalPatchBuilder();}
    public get AddPathsToBundle() {return this.GetProp("AddPathsToBundle", DataType.Bool);}
    public set AddPathsToBundle(value) {this.SetProp("AddPathsToBundle", DataType.Bool, value);}
    public get BuildDebouncePeriod() {return this.GetProp("BuildDebouncePeriod", DataType.Float64);}
    public set BuildDebouncePeriod(value) {this.SetProp("BuildDebouncePeriod", DataType.Float64, value);}
    public get HighCompression() {return this.GetProp("HighCompression", DataType.Bool);}
    public set HighCompression(value) {this.SetProp("HighCompression", DataType.Bool, value);}
    public get SerializePatch() {return this.GetProp("SerializePatch", DataType.Bool);}
    public set SerializePatch(value) {this.SetProp("SerializePatch", DataType.Bool, value);}
    public get ZstdCompression() {return this.GetProp("ZstdCompression", DataType.Bool);}
    public set ZstdCompression(value) {this.SetProp("ZstdCompression", DataType.Bool, value);}
}

export class InsertService extends Instance {
    protected constructor() {super(true); this.addClassName("InsertService");}
    public static New() {return new InsertService();}
    public get AllowClientInsertModels() {return this.GetProp("AllowClientInsertModels", DataType.Bool);}
    public set AllowClientInsertModels(value) {this.SetProp("AllowClientInsertModels", DataType.Bool, value);}
    /**@deprecated Deprecated by Roblox*/
    public get AllowInsertFreeModels() {return this.GetProp("AllowInsertFreeModels", DataType.Bool);}
    /**@deprecated Deprecated by Roblox*/
    public set AllowInsertFreeModels(value) {this.SetProp("AllowInsertFreeModels", DataType.Bool, value);}
}

export class InternalSyncItem extends Instance {
    protected constructor() {super(); this.addClassName("InternalSyncItem");}
    public static New() {return new InternalSyncItem();}
    public get AutoSync() {return this.GetProp("AutoSync", DataType.Bool);}
    public set AutoSync(value) {this.SetProp("AutoSync", DataType.Bool, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool);}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get Path() {return this.GetProp("Path", DataType.String);}
    public set Path(value) {this.SetProp("Path", DataType.String, value);}
}

export class InternalSyncService extends Instance {
    protected constructor() {super(true); this.addClassName("InternalSyncService");}
    public static New() {return new InternalSyncService();}
}

export abstract class JointInstance extends Instance {
    protected constructor() {super(); this.addClassName("JointInstance");}
    public get C0() {return this.GetProp("C0", DataType.CFrame);}
    public set C0(value) {this.SetProp("C0", DataType.CFrame, value);}
    public get C1() {return this.GetProp("C1", DataType.CFrame);}
    public set C1(value) {this.SetProp("C1", DataType.CFrame, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool);}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get Part0() {return this.GetProp("Part0", DataType.Referent) as BasePart | undefined;}
    public set Part0(value) {this.SetProp("Part0", DataType.Referent, value);}
    public get Part1() {return this.GetProp("Part1", DataType.Referent) as BasePart | undefined;}
    public set Part1(value) {this.SetProp("Part1", DataType.Referent, value);}
}

export abstract class DynamicRotate extends JointInstance {
    protected constructor() {super(); this.addClassName("DynamicRotate");}
    public get BaseAngle() {return this.GetProp("BaseAngle", DataType.Float32);}
    public set BaseAngle(value) {this.SetProp("BaseAngle", DataType.Float32, value);}
}

/**@deprecated Deprecated by Roblox*/
export class RotateP extends DynamicRotate {
    protected constructor() {super(); this.addClassName("RotateP");}
    public static New() {return new RotateP();}
}

/**@deprecated Deprecated by Roblox*/
export class RotateV extends DynamicRotate {
    protected constructor() {super(); this.addClassName("RotateV");}
    public static New() {return new RotateV();}
}

/**@deprecated Deprecated by Roblox*/
export class Glue extends JointInstance {
    protected constructor() {super(); this.addClassName("Glue");}
    public static New() {return new Glue();}
    public get F0() {return this.GetProp("F0", DataType.Vector3);}
    public set F0(value) {this.SetProp("F0", DataType.Vector3, value);}
    public get F1() {return this.GetProp("F1", DataType.Vector3);}
    public set F1(value) {this.SetProp("F1", DataType.Vector3, value);}
    public get F2() {return this.GetProp("F2", DataType.Vector3);}
    public set F2(value) {this.SetProp("F2", DataType.Vector3, value);}
    public get F3() {return this.GetProp("F3", DataType.Vector3);}
    public set F3(value) {this.SetProp("F3", DataType.Vector3, value);}
}

/**@deprecated Deprecated by Roblox*/
export abstract class ManualSurfaceJointInstance extends JointInstance {
    protected constructor() {super(); this.addClassName("ManualSurfaceJointInstance");}
}

/**@deprecated Deprecated by Roblox*/
export class ManualGlue extends ManualSurfaceJointInstance {
    protected constructor() {super(); this.addClassName("ManualGlue");}
    public static New() {return new ManualGlue();}
}

/**@deprecated Deprecated by Roblox*/
export class ManualWeld extends ManualSurfaceJointInstance {
    protected constructor() {super(); this.addClassName("ManualWeld");}
    public static New() {return new ManualWeld();}
}

export class Motor extends JointInstance {
    protected constructor() {super(); this.addClassName("Motor");}
    public static New() {return new Motor();}
    public get DesiredAngle() {return this.GetProp("DesiredAngle", DataType.Float32);}
    public set DesiredAngle(value) {this.SetProp("DesiredAngle", DataType.Float32, value);}
    public get MaxVelocity() {return this.GetProp("MaxVelocity", DataType.Float32);}
    public set MaxVelocity(value) {this.SetProp("MaxVelocity", DataType.Float32, value);}
}

export class Motor6D extends Motor {
    protected constructor() {super(); this.addClassName("Motor6D");}
    public static New() {return new Motor6D();}
}

/**@deprecated Deprecated by Roblox*/
export class Rotate extends JointInstance {
    protected constructor() {super(); this.addClassName("Rotate");}
    public static New() {return new Rotate();}
}

/**@deprecated Deprecated by Roblox*/
export class Snap extends JointInstance {
    protected constructor() {super(); this.addClassName("Snap");}
    public static New() {return new Snap();}
}

export class VelocityMotor extends JointInstance {
    protected constructor() {super(); this.addClassName("VelocityMotor");}
    public static New() {return new VelocityMotor();}
    public get CurrentAngle() {return this.GetProp("CurrentAngle", DataType.Float32);}
    public set CurrentAngle(value) {this.SetProp("CurrentAngle", DataType.Float32, value);}
    public get DesiredAngle() {return this.GetProp("DesiredAngle", DataType.Float32);}
    public set DesiredAngle(value) {this.SetProp("DesiredAngle", DataType.Float32, value);}
    public get Hole() {return this.GetProp("Hole", DataType.Referent) as Hole | undefined;}
    public set Hole(value) {this.SetProp("Hole", DataType.Referent, value);}
    public get MaxVelocity() {return this.GetProp("MaxVelocity", DataType.Float32);}
    public set MaxVelocity(value) {this.SetProp("MaxVelocity", DataType.Float32, value);}
}

export class Weld extends JointInstance {
    protected constructor() {super(); this.addClassName("Weld");}
    public static New() {return new Weld();}
}

/**@deprecated Deprecated by Roblox*/
export class JointsService extends Instance {
    protected constructor() {super(true); this.addClassName("JointsService");}
    public static New() {return new JointsService();}
}

export class KeyboardService extends Instance {
    protected constructor() {super(true); this.addClassName("KeyboardService");}
    public static New() {return new KeyboardService();}
}

export class Keyframe extends Instance {
    protected constructor() {super(); this.addClassName("Keyframe");}
    public static New() {return new Keyframe();}
    public get Time() {return this.GetProp("Time", DataType.Float32);}
    public set Time(value) {this.SetProp("Time", DataType.Float32, value);}
}

export class KeyframeMarker extends Instance {
    protected constructor() {super(); this.addClassName("KeyframeMarker");}
    public static New() {return new KeyframeMarker();}
    public get Value() {return this.GetProp("Value", DataType.String);}
    public set Value(value) {this.SetProp("Value", DataType.String, value);}
}

export class KeyframeSequenceProvider extends Instance {
    protected constructor() {super(true); this.addClassName("KeyframeSequenceProvider");}
    public static New() {return new KeyframeSequenceProvider();}
}

export class LSPFileSyncService extends Instance {
    protected constructor() {super(true); this.addClassName("LSPFileSyncService");}
    public static New() {return new LSPFileSyncService();}
}

export class LanguageService extends Instance {
    protected constructor() {super(true); this.addClassName("LanguageService");}
    public static New() {return new LanguageService();}
}

export abstract class Light extends Instance {
    protected constructor() {super(); this.addClassName("Light");}
    public get Brightness() {return this.GetProp("Brightness", DataType.Float32);}
    public set Brightness(value) {this.SetProp("Brightness", DataType.Float32, value);}
    public get Color() {return this.GetProp("Color", DataType.Color3);}
    public set Color(value) {this.SetProp("Color", DataType.Color3, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool);}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get Shadows() {return this.GetProp("Shadows", DataType.Bool);}
    public set Shadows(value) {this.SetProp("Shadows", DataType.Bool, value);}
}

export class PointLight extends Light {
    protected constructor() {super(); this.addClassName("PointLight");}
    public static New() {return new PointLight();}
    public get Range() {return this.GetProp("Range", DataType.Float32);}
    public set Range(value) {this.SetProp("Range", DataType.Float32, value);}
}

export class SpotLight extends Light {
    protected constructor() {super(); this.addClassName("SpotLight");}
    public static New() {return new SpotLight();}
    public get Angle() {return this.GetProp("Angle", DataType.Float32);}
    public set Angle(value) {this.SetProp("Angle", DataType.Float32, value);}
    public get Face() {return this.GetProp("Face", DataType.Enum) as NormalId | undefined;}
    public set Face(value) {this.SetProp("Face", DataType.Enum, value);}
    public get Range() {return this.GetProp("Range", DataType.Float32);}
    public set Range(value) {this.SetProp("Range", DataType.Float32, value);}
}

export class SurfaceLight extends Light {
    protected constructor() {super(); this.addClassName("SurfaceLight");}
    public static New() {return new SurfaceLight();}
    public get Angle() {return this.GetProp("Angle", DataType.Float32);}
    public set Angle(value) {this.SetProp("Angle", DataType.Float32, value);}
    public get Face() {return this.GetProp("Face", DataType.Enum) as NormalId | undefined;}
    public set Face(value) {this.SetProp("Face", DataType.Enum, value);}
    public get Range() {return this.GetProp("Range", DataType.Float32);}
    public set Range(value) {this.SetProp("Range", DataType.Float32, value);}
}

export class Lighting extends Instance {
    protected constructor() {super(true); this.addClassName("Lighting");}
    public static New() {return new Lighting();}
    public get Ambient() {return this.GetProp("Ambient", DataType.Color3);}
    public set Ambient(value) {this.SetProp("Ambient", DataType.Color3, value);}
    public get Brightness() {return this.GetProp("Brightness", DataType.Float32);}
    public set Brightness(value) {this.SetProp("Brightness", DataType.Float32, value);}
    public get ColorShiftBottom() {return this.GetProp("ColorShift_Bottom", DataType.Color3);}
    public set ColorShiftBottom(value) {this.SetProp("ColorShift_Bottom", DataType.Color3, value);}
    public get ColorShiftTop() {return this.GetProp("ColorShift_Top", DataType.Color3);}
    public set ColorShiftTop(value) {this.SetProp("ColorShift_Top", DataType.Color3, value);}
    public get EnvironmentDiffuseScale() {return this.GetProp("EnvironmentDiffuseScale", DataType.Float32);}
    public set EnvironmentDiffuseScale(value) {this.SetProp("EnvironmentDiffuseScale", DataType.Float32, value);}
    public get EnvironmentSpecularScale() {return this.GetProp("EnvironmentSpecularScale", DataType.Float32);}
    public set EnvironmentSpecularScale(value) {this.SetProp("EnvironmentSpecularScale", DataType.Float32, value);}
    public get ExposureCompensation() {return this.GetProp("ExposureCompensation", DataType.Float32);}
    public set ExposureCompensation(value) {this.SetProp("ExposureCompensation", DataType.Float32, value);}
    public get FogColor() {return this.GetProp("FogColor", DataType.Color3);}
    public set FogColor(value) {this.SetProp("FogColor", DataType.Color3, value);}
    public get FogEnd() {return this.GetProp("FogEnd", DataType.Float32);}
    public set FogEnd(value) {this.SetProp("FogEnd", DataType.Float32, value);}
    public get FogStart() {return this.GetProp("FogStart", DataType.Float32);}
    public set FogStart(value) {this.SetProp("FogStart", DataType.Float32, value);}
    public get GeographicLatitude() {return this.GetProp("GeographicLatitude", DataType.Float32);}
    public set GeographicLatitude(value) {this.SetProp("GeographicLatitude", DataType.Float32, value);}
    public get GlobalShadows() {return this.GetProp("GlobalShadows", DataType.Bool);}
    public set GlobalShadows(value) {this.SetProp("GlobalShadows", DataType.Bool, value);}
    public get OutdoorAmbient() {return this.GetProp("OutdoorAmbient", DataType.Color3);}
    public set OutdoorAmbient(value) {this.SetProp("OutdoorAmbient", DataType.Color3, value);}
    /**@deprecated Deprecated by Roblox*/
    public get Outlines() {return this.GetProp("Outlines", DataType.Bool);}
    /**@deprecated Deprecated by Roblox*/
    public set Outlines(value) {this.SetProp("Outlines", DataType.Bool, value);}
    /**@deprecated Deprecated by Roblox*/
    public get ShadowColor() {return this.GetProp("ShadowColor", DataType.Color3);}
    /**@deprecated Deprecated by Roblox*/
    public set ShadowColor(value) {this.SetProp("ShadowColor", DataType.Color3, value);}
    public get ShadowSoftness() {return this.GetProp("ShadowSoftness", DataType.Float32);}
    public set ShadowSoftness(value) {this.SetProp("ShadowSoftness", DataType.Float32, value);}
    public get Technology() {return this.GetProp("Technology", DataType.Enum) as Technology | undefined;}
    public set Technology(value) {this.SetProp("Technology", DataType.Enum, value);}
    public get TimeOfDay() {return this.GetProp("TimeOfDay", DataType.String);}
    public set TimeOfDay(value) {this.SetProp("TimeOfDay", DataType.String, value);}
}

export class LiveScriptingService extends Instance {
    protected constructor() {super(true); this.addClassName("LiveScriptingService");}
    public static New() {return new LiveScriptingService();}
}

export abstract class LocalStorageService extends Instance {
    protected constructor() {super(true); this.addClassName("LocalStorageService");}
}

export class AppStorageService extends LocalStorageService {
    protected constructor() {super(); this.addClassName("AppStorageService");}
    public static New() {return new AppStorageService();}
}

export class UserStorageService extends LocalStorageService {
    protected constructor() {super(); this.addClassName("UserStorageService");}
    public static New() {return new UserStorageService();}
}

export class LocalizationService extends Instance {
    protected constructor() {super(true); this.addClassName("LocalizationService");}
    public static New() {return new LocalizationService();}
}

export class LocalizationTable extends Instance {
    protected constructor() {super(); this.addClassName("LocalizationTable");}
    public static New() {return new LocalizationTable();}
    public get Contents() {return this.GetProp("Contents", DataType.String);}
    public set Contents(value) {this.SetProp("Contents", DataType.String, value);}
    /**@deprecated Deprecated by Roblox*/
    public get DevelopmentLanguage() {return this.GetProp("DevelopmentLanguage", DataType.String);}
    /**@deprecated Deprecated by Roblox*/
    public set DevelopmentLanguage(value) {this.SetProp("DevelopmentLanguage", DataType.String, value);}
    public get SourceLocaleId() {return this.GetProp("SourceLocaleId", DataType.String);}
    public set SourceLocaleId(value) {this.SetProp("SourceLocaleId", DataType.String, value);}
}

export class LodDataService extends Instance {
    protected constructor() {super(true); this.addClassName("LodDataService");}
    public static New() {return new LodDataService();}
}

export class LogReporterService extends Instance {
    protected constructor() {super(true); this.addClassName("LogReporterService");}
    public static New() {return new LogReporterService();}
}

export class LogService extends Instance {
    protected constructor() {super(true); this.addClassName("LogService");}
    public static New() {return new LogService();}
}

export class LoginService extends Instance {
    protected constructor() {super(true); this.addClassName("LoginService");}
    public static New() {return new LoginService();}
}

export abstract class LuaSourceContainer extends Instance {
    protected constructor() {super(); this.addClassName("LuaSourceContainer");}
    public get ScriptGuid() {return this.GetProp("ScriptGuid", DataType.String);}
    public set ScriptGuid(value) {this.SetProp("ScriptGuid", DataType.String, value);}
}

export abstract class BaseScript extends LuaSourceContainer {
    protected constructor() {super(); this.addClassName("BaseScript");}
    public get Disabled() {return this.GetProp("Disabled", DataType.Bool);}
    public set Disabled(value) {this.SetProp("Disabled", DataType.Bool, value);}
    /**@deprecated Deprecated by Roblox*/
    public get LinkedSource() {return this.GetProp("LinkedSource", DataType.String);}
    /**@deprecated Deprecated by Roblox*/
    public set LinkedSource(value) {this.SetProp("LinkedSource", DataType.String, value);}
    public get RunContext() {return this.GetProp("RunContext", DataType.Enum) as RunContext | undefined;}
    public set RunContext(value) {this.SetProp("RunContext", DataType.Enum, value);}
}

export class Script extends BaseScript {
    protected constructor() {super(); this.addClassName("Script");}
    public static New() {return new Script();}
    public get Source() {return this.GetProp("Source", DataType.String);}
    public set Source(value) {this.SetProp("Source", DataType.String, value);}
}

export class LocalScript extends Script {
    protected constructor() {super(); this.addClassName("LocalScript");}
    public static New() {return new LocalScript();}
}

export class ModuleScript extends LuaSourceContainer {
    protected constructor() {super(); this.addClassName("ModuleScript");}
    public static New() {return new ModuleScript();}
    /**@deprecated Deprecated by Roblox*/
    public get LinkedSource() {return this.GetProp("LinkedSource", DataType.String);}
    /**@deprecated Deprecated by Roblox*/
    public set LinkedSource(value) {this.SetProp("LinkedSource", DataType.String, value);}
    public get Source() {return this.GetProp("Source", DataType.String);}
    public set Source(value) {this.SetProp("Source", DataType.String, value);}
}

export class LuaWebService extends Instance {
    protected constructor() {super(true); this.addClassName("LuaWebService");}
    public static New() {return new LuaWebService();}
}

export class LuauScriptAnalyzerService extends Instance {
    protected constructor() {super(true); this.addClassName("LuauScriptAnalyzerService");}
    public static New() {return new LuauScriptAnalyzerService();}
}

export class MarkerCurve extends Instance {
    protected constructor() {super(); this.addClassName("MarkerCurve");}
    public static New() {return new MarkerCurve();}
    public get ValuesAndTimes() {return this.GetProp("ValuesAndTimes", DataType.String);}
    public set ValuesAndTimes(value) {this.SetProp("ValuesAndTimes", DataType.String, value);}
}

export class MarketplaceService extends Instance {
    protected constructor() {super(true); this.addClassName("MarketplaceService");}
    public static New() {return new MarketplaceService();}
}

export class MaterialGenerationService extends Instance {
    protected constructor() {super(true); this.addClassName("MaterialGenerationService");}
    public static New() {return new MaterialGenerationService();}
}

export class MaterialService extends Instance {
    protected constructor() {super(true); this.addClassName("MaterialService");}
    public static New() {return new MaterialService();}
    public get AsphaltName() {return this.GetProp("AsphaltName", DataType.String);}
    public set AsphaltName(value) {this.SetProp("AsphaltName", DataType.String, value);}
    public get BasaltName() {return this.GetProp("BasaltName", DataType.String);}
    public set BasaltName(value) {this.SetProp("BasaltName", DataType.String, value);}
    public get BrickName() {return this.GetProp("BrickName", DataType.String);}
    public set BrickName(value) {this.SetProp("BrickName", DataType.String, value);}
    public get CardboardName() {return this.GetProp("CardboardName", DataType.String);}
    public set CardboardName(value) {this.SetProp("CardboardName", DataType.String, value);}
    public get CarpetName() {return this.GetProp("CarpetName", DataType.String);}
    public set CarpetName(value) {this.SetProp("CarpetName", DataType.String, value);}
    public get CeramicTilesName() {return this.GetProp("CeramicTilesName", DataType.String);}
    public set CeramicTilesName(value) {this.SetProp("CeramicTilesName", DataType.String, value);}
    public get ClayRoofTilesName() {return this.GetProp("ClayRoofTilesName", DataType.String);}
    public set ClayRoofTilesName(value) {this.SetProp("ClayRoofTilesName", DataType.String, value);}
    public get CobblestoneName() {return this.GetProp("CobblestoneName", DataType.String);}
    public set CobblestoneName(value) {this.SetProp("CobblestoneName", DataType.String, value);}
    public get ConcreteName() {return this.GetProp("ConcreteName", DataType.String);}
    public set ConcreteName(value) {this.SetProp("ConcreteName", DataType.String, value);}
    public get CorrodedMetalName() {return this.GetProp("CorrodedMetalName", DataType.String);}
    public set CorrodedMetalName(value) {this.SetProp("CorrodedMetalName", DataType.String, value);}
    public get CrackedLavaName() {return this.GetProp("CrackedLavaName", DataType.String);}
    public set CrackedLavaName(value) {this.SetProp("CrackedLavaName", DataType.String, value);}
    public get DiamondPlateName() {return this.GetProp("DiamondPlateName", DataType.String);}
    public set DiamondPlateName(value) {this.SetProp("DiamondPlateName", DataType.String, value);}
    public get FabricName() {return this.GetProp("FabricName", DataType.String);}
    public set FabricName(value) {this.SetProp("FabricName", DataType.String, value);}
    public get FoilName() {return this.GetProp("FoilName", DataType.String);}
    public set FoilName(value) {this.SetProp("FoilName", DataType.String, value);}
    public get GlacierName() {return this.GetProp("GlacierName", DataType.String);}
    public set GlacierName(value) {this.SetProp("GlacierName", DataType.String, value);}
    public get GraniteName() {return this.GetProp("GraniteName", DataType.String);}
    public set GraniteName(value) {this.SetProp("GraniteName", DataType.String, value);}
    public get GrassName() {return this.GetProp("GrassName", DataType.String);}
    public set GrassName(value) {this.SetProp("GrassName", DataType.String, value);}
    public get GroundName() {return this.GetProp("GroundName", DataType.String);}
    public set GroundName(value) {this.SetProp("GroundName", DataType.String, value);}
    public get IceName() {return this.GetProp("IceName", DataType.String);}
    public set IceName(value) {this.SetProp("IceName", DataType.String, value);}
    public get LeafyGrassName() {return this.GetProp("LeafyGrassName", DataType.String);}
    public set LeafyGrassName(value) {this.SetProp("LeafyGrassName", DataType.String, value);}
    public get LeatherName() {return this.GetProp("LeatherName", DataType.String);}
    public set LeatherName(value) {this.SetProp("LeatherName", DataType.String, value);}
    public get LimestoneName() {return this.GetProp("LimestoneName", DataType.String);}
    public set LimestoneName(value) {this.SetProp("LimestoneName", DataType.String, value);}
    public get MarbleName() {return this.GetProp("MarbleName", DataType.String);}
    public set MarbleName(value) {this.SetProp("MarbleName", DataType.String, value);}
    public get MetalName() {return this.GetProp("MetalName", DataType.String);}
    public set MetalName(value) {this.SetProp("MetalName", DataType.String, value);}
    public get MudName() {return this.GetProp("MudName", DataType.String);}
    public set MudName(value) {this.SetProp("MudName", DataType.String, value);}
    public get PavementName() {return this.GetProp("PavementName", DataType.String);}
    public set PavementName(value) {this.SetProp("PavementName", DataType.String, value);}
    public get PebbleName() {return this.GetProp("PebbleName", DataType.String);}
    public set PebbleName(value) {this.SetProp("PebbleName", DataType.String, value);}
    public get PlasterName() {return this.GetProp("PlasterName", DataType.String);}
    public set PlasterName(value) {this.SetProp("PlasterName", DataType.String, value);}
    public get PlasticName() {return this.GetProp("PlasticName", DataType.String);}
    public set PlasticName(value) {this.SetProp("PlasticName", DataType.String, value);}
    public get RockName() {return this.GetProp("RockName", DataType.String);}
    public set RockName(value) {this.SetProp("RockName", DataType.String, value);}
    public get RoofShinglesName() {return this.GetProp("RoofShinglesName", DataType.String);}
    public set RoofShinglesName(value) {this.SetProp("RoofShinglesName", DataType.String, value);}
    public get RubberName() {return this.GetProp("RubberName", DataType.String);}
    public set RubberName(value) {this.SetProp("RubberName", DataType.String, value);}
    public get SaltName() {return this.GetProp("SaltName", DataType.String);}
    public set SaltName(value) {this.SetProp("SaltName", DataType.String, value);}
    public get SandName() {return this.GetProp("SandName", DataType.String);}
    public set SandName(value) {this.SetProp("SandName", DataType.String, value);}
    public get SandstoneName() {return this.GetProp("SandstoneName", DataType.String);}
    public set SandstoneName(value) {this.SetProp("SandstoneName", DataType.String, value);}
    public get SlateName() {return this.GetProp("SlateName", DataType.String);}
    public set SlateName(value) {this.SetProp("SlateName", DataType.String, value);}
    public get SmoothPlasticName() {return this.GetProp("SmoothPlasticName", DataType.String);}
    public set SmoothPlasticName(value) {this.SetProp("SmoothPlasticName", DataType.String, value);}
    public get SnowName() {return this.GetProp("SnowName", DataType.String);}
    public set SnowName(value) {this.SetProp("SnowName", DataType.String, value);}
    public get Use2022MaterialsXml() {return this.GetProp("Use2022MaterialsXml", DataType.Bool);}
    public set Use2022MaterialsXml(value) {this.SetProp("Use2022MaterialsXml", DataType.Bool, value);}
    public get WoodName() {return this.GetProp("WoodName", DataType.String);}
    public set WoodName(value) {this.SetProp("WoodName", DataType.String, value);}
    public get WoodPlanksName() {return this.GetProp("WoodPlanksName", DataType.String);}
    public set WoodPlanksName(value) {this.SetProp("WoodPlanksName", DataType.String, value);}
}

export class MaterialVariant extends Instance {
    protected constructor() {super(); this.addClassName("MaterialVariant");}
    public static New() {return new MaterialVariant();}
    public get BaseMaterial() {return this.GetProp("BaseMaterial", DataType.Enum) as Material | undefined;}
    public set BaseMaterial(value) {this.SetProp("BaseMaterial", DataType.Enum, value);}
    public get ColorMap() {return this.GetProp("ColorMap", DataType.String);}
    public set ColorMap(value) {this.SetProp("ColorMap", DataType.String, value);}
    public get CustomPhysicalProperties() {return this.GetProp("CustomPhysicalProperties", DataType.PhysicalProperties);}
    public set CustomPhysicalProperties(value) {this.SetProp("CustomPhysicalProperties", DataType.PhysicalProperties, value);}
    public get MaterialPattern() {return this.GetProp("MaterialPattern", DataType.Enum) as MaterialPattern | undefined;}
    public set MaterialPattern(value) {this.SetProp("MaterialPattern", DataType.Enum, value);}
    public get MetalnessMap() {return this.GetProp("MetalnessMap", DataType.String);}
    public set MetalnessMap(value) {this.SetProp("MetalnessMap", DataType.String, value);}
    public get NormalMap() {return this.GetProp("NormalMap", DataType.String);}
    public set NormalMap(value) {this.SetProp("NormalMap", DataType.String, value);}
    public get RoughnessMap() {return this.GetProp("RoughnessMap", DataType.String);}
    public set RoughnessMap(value) {this.SetProp("RoughnessMap", DataType.String, value);}
    public get StudsPerTile() {return this.GetProp("StudsPerTile", DataType.Float32);}
    public set StudsPerTile(value) {this.SetProp("StudsPerTile", DataType.Float32, value);}
    public get TexturePack() {return this.GetProp("TexturePack", DataType.String);}
    public set TexturePack(value) {this.SetProp("TexturePack", DataType.String, value);}
}

export class MemStorageService extends Instance {
    protected constructor() {super(true); this.addClassName("MemStorageService");}
    public static New() {return new MemStorageService();}
}

export class MemoryStoreService extends Instance {
    protected constructor() {super(true); this.addClassName("MemoryStoreService");}
    public static New() {return new MemoryStoreService();}
}

/**@deprecated Deprecated by Roblox*/
export class Message extends Instance {
    protected constructor() {super(); this.addClassName("Message");}
    public static New() {return new Message();}
    public get Text() {return this.GetProp("Text", DataType.String);}
    public set Text(value) {this.SetProp("Text", DataType.String, value);}
}

/**@deprecated Deprecated by Roblox*/
export class Hint extends Message {
    protected constructor() {super(); this.addClassName("Hint");}
    public static New() {return new Hint();}
}

export class MessageBusService extends Instance {
    protected constructor() {super(true); this.addClassName("MessageBusService");}
    public static New() {return new MessageBusService();}
}

export class MessagingService extends Instance {
    protected constructor() {super(true); this.addClassName("MessagingService");}
    public static New() {return new MessagingService();}
}

export class MetaBreakpointManager extends Instance {
    protected constructor() {super(true); this.addClassName("MetaBreakpointManager");}
    public static New() {return new MetaBreakpointManager();}
}

export class MouseService extends Instance {
    protected constructor() {super(true); this.addClassName("MouseService");}
    public static New() {return new MouseService();}
}

export abstract class NetworkPeer extends Instance {
    protected constructor() {super(); this.addClassName("NetworkPeer");}
}

export class NetworkClient extends NetworkPeer {
    protected constructor() {super(); this.addClassName("NetworkClient");}
    public static New() {return new NetworkClient();}
}

export class NetworkServer extends NetworkPeer {
    protected constructor() {super(); this.addClassName("NetworkServer");}
    public static New() {return new NetworkServer();}
}

export class NetworkSettings extends Instance {
    protected constructor() {super(true); this.addClassName("NetworkSettings");}
    public static New() {return new NetworkSettings();}
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
    protected constructor() {super(); this.addClassName("NoCollisionConstraint");}
    public static New() {return new NoCollisionConstraint();}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool);}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get Part0() {return this.GetProp("Part0", DataType.Referent) as BasePart | undefined;}
    public set Part0(value) {this.SetProp("Part0", DataType.Referent, value);}
    public get Part1() {return this.GetProp("Part1", DataType.Referent) as BasePart | undefined;}
    public set Part1(value) {this.SetProp("Part1", DataType.Referent, value);}
}

export class Noise extends Instance {
    protected constructor() {super(); this.addClassName("Noise");}
    public static New() {return new Noise();}
    public get NoiseType() {return this.GetProp("NoiseType", DataType.Enum) as NoiseType | undefined;}
    public set NoiseType(value) {this.SetProp("NoiseType", DataType.Enum, value);}
    public get Seed() {return this.GetProp("Seed", DataType.Int32);}
    public set Seed(value) {this.SetProp("Seed", DataType.Int32, value);}
}

export class NotificationService extends Instance {
    protected constructor() {super(true); this.addClassName("NotificationService");}
    public static New() {return new NotificationService();}
}

export class OmniRecommendationsService extends Instance {
    protected constructor() {super(true); this.addClassName("OmniRecommendationsService");}
    public static New() {return new OmniRecommendationsService();}
}

export class OpenCloudService extends Instance {
    protected constructor() {super(true); this.addClassName("OpenCloudService");}
    public static New() {return new OpenCloudService();}
}

export class OperationGraph extends Instance {
    protected constructor() {super(); this.addClassName("OperationGraph");}
    public static New() {return new OperationGraph();}
}

export abstract class PVInstance extends Instance {
    protected constructor() {super(); this.addClassName("PVInstance");}
}

export abstract class BasePart extends PVInstance {
    protected constructor() {super(); this.addClassName("BasePart");}
    public get Anchored() {return this.GetProp("Anchored", DataType.Bool);}
    public set Anchored(value) {this.SetProp("Anchored", DataType.Bool, value);}
    /**@deprecated Deprecated by Roblox*/
    public get BackParamA() {return this.GetProp("BackParamA", DataType.Float32);}
    /**@deprecated Deprecated by Roblox*/
    public set BackParamA(value) {this.SetProp("BackParamA", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get BackParamB() {return this.GetProp("BackParamB", DataType.Float32);}
    /**@deprecated Deprecated by Roblox*/
    public set BackParamB(value) {this.SetProp("BackParamB", DataType.Float32, value);}
    public get BackSurface() {return this.GetProp("BackSurface", DataType.Enum) as SurfaceType | undefined;}
    public set BackSurface(value) {this.SetProp("BackSurface", DataType.Enum, value);}
    /**@deprecated Deprecated by Roblox*/
    public get BackSurfaceInput() {return this.GetProp("BackSurfaceInput", DataType.Enum) as InputType | undefined;}
    /**@deprecated Deprecated by Roblox*/
    public set BackSurfaceInput(value) {this.SetProp("BackSurfaceInput", DataType.Enum, value);}
    /**@deprecated Deprecated by Roblox*/
    public get BottomParamA() {return this.GetProp("BottomParamA", DataType.Float32);}
    /**@deprecated Deprecated by Roblox*/
    public set BottomParamA(value) {this.SetProp("BottomParamA", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get BottomParamB() {return this.GetProp("BottomParamB", DataType.Float32);}
    /**@deprecated Deprecated by Roblox*/
    public set BottomParamB(value) {this.SetProp("BottomParamB", DataType.Float32, value);}
    public get BottomSurface() {return this.GetProp("BottomSurface", DataType.Enum) as SurfaceType | undefined;}
    public set BottomSurface(value) {this.SetProp("BottomSurface", DataType.Enum, value);}
    /**@deprecated Deprecated by Roblox*/
    public get BottomSurfaceInput() {return this.GetProp("BottomSurfaceInput", DataType.Enum) as InputType | undefined;}
    /**@deprecated Deprecated by Roblox*/
    public set BottomSurfaceInput(value) {this.SetProp("BottomSurfaceInput", DataType.Enum, value);}
    public get CFrame() {return this.GetProp("CFrame", DataType.CFrame);}
    public set CFrame(value) {this.SetProp("CFrame", DataType.CFrame, value);}
    public get CanCollide() {return this.GetProp("CanCollide", DataType.Bool);}
    public set CanCollide(value) {this.SetProp("CanCollide", DataType.Bool, value);}
    public get CanQuery() {return this.GetProp("CanQuery", DataType.Bool);}
    public set CanQuery(value) {this.SetProp("CanQuery", DataType.Bool, value);}
    public get CanTouch() {return this.GetProp("CanTouch", DataType.Bool);}
    public set CanTouch(value) {this.SetProp("CanTouch", DataType.Bool, value);}
    public get CastShadow() {return this.GetProp("CastShadow", DataType.Bool);}
    public set CastShadow(value) {this.SetProp("CastShadow", DataType.Bool, value);}
    public get CollisionGroup() {return this.GetProp("CollisionGroup", DataType.String);}
    public set CollisionGroup(value) {this.SetProp("CollisionGroup", DataType.String, value);}
    /**@deprecated Deprecated by Roblox*/
    public get CollisionGroupId() {return this.GetProp("CollisionGroupId", DataType.Int32);}
    /**@deprecated Deprecated by Roblox*/
    public set CollisionGroupId(value) {this.SetProp("CollisionGroupId", DataType.Int32, value);}
    public get Color3uint8() {return this.GetProp("Color3uint8", DataType.Color3);}
    public set Color3uint8(value) {this.SetProp("Color3uint8", DataType.Color3, value);}
    public get CustomPhysicalProperties() {return this.GetProp("CustomPhysicalProperties", DataType.PhysicalProperties);}
    public set CustomPhysicalProperties(value) {this.SetProp("CustomPhysicalProperties", DataType.PhysicalProperties, value);}
    /**@deprecated Deprecated by Roblox*/
    public get Elasticity() {return this.GetProp("Elasticity", DataType.Float32);}
    /**@deprecated Deprecated by Roblox*/
    public set Elasticity(value) {this.SetProp("Elasticity", DataType.Float32, value);}
    public get EnableFluidForces() {return this.GetProp("EnableFluidForces", DataType.Bool);}
    public set EnableFluidForces(value) {this.SetProp("EnableFluidForces", DataType.Bool, value);}
    /**@deprecated Deprecated by Roblox*/
    public get Friction() {return this.GetProp("Friction", DataType.Float32);}
    /**@deprecated Deprecated by Roblox*/
    public set Friction(value) {this.SetProp("Friction", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get FrontParamA() {return this.GetProp("FrontParamA", DataType.Float32);}
    /**@deprecated Deprecated by Roblox*/
    public set FrontParamA(value) {this.SetProp("FrontParamA", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get FrontParamB() {return this.GetProp("FrontParamB", DataType.Float32);}
    /**@deprecated Deprecated by Roblox*/
    public set FrontParamB(value) {this.SetProp("FrontParamB", DataType.Float32, value);}
    public get FrontSurface() {return this.GetProp("FrontSurface", DataType.Enum) as SurfaceType | undefined;}
    public set FrontSurface(value) {this.SetProp("FrontSurface", DataType.Enum, value);}
    /**@deprecated Deprecated by Roblox*/
    public get FrontSurfaceInput() {return this.GetProp("FrontSurfaceInput", DataType.Enum) as InputType | undefined;}
    /**@deprecated Deprecated by Roblox*/
    public set FrontSurfaceInput(value) {this.SetProp("FrontSurfaceInput", DataType.Enum, value);}
    /**@deprecated Deprecated by Roblox*/
    public get LeftParamA() {return this.GetProp("LeftParamA", DataType.Float32);}
    /**@deprecated Deprecated by Roblox*/
    public set LeftParamA(value) {this.SetProp("LeftParamA", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get LeftParamB() {return this.GetProp("LeftParamB", DataType.Float32);}
    /**@deprecated Deprecated by Roblox*/
    public set LeftParamB(value) {this.SetProp("LeftParamB", DataType.Float32, value);}
    public get LeftSurface() {return this.GetProp("LeftSurface", DataType.Enum) as SurfaceType | undefined;}
    public set LeftSurface(value) {this.SetProp("LeftSurface", DataType.Enum, value);}
    /**@deprecated Deprecated by Roblox*/
    public get LeftSurfaceInput() {return this.GetProp("LeftSurfaceInput", DataType.Enum) as InputType | undefined;}
    /**@deprecated Deprecated by Roblox*/
    public set LeftSurfaceInput(value) {this.SetProp("LeftSurfaceInput", DataType.Enum, value);}
    public get Locked() {return this.GetProp("Locked", DataType.Bool);}
    public set Locked(value) {this.SetProp("Locked", DataType.Bool, value);}
    public get Massless() {return this.GetProp("Massless", DataType.Bool);}
    public set Massless(value) {this.SetProp("Massless", DataType.Bool, value);}
    public get Material() {return this.GetProp("Material", DataType.Enum) as Material | undefined;}
    public set Material(value) {this.SetProp("Material", DataType.Enum, value);}
    public get MaterialVariantSerialized() {return this.GetProp("MaterialVariantSerialized", DataType.String);}
    public set MaterialVariantSerialized(value) {this.SetProp("MaterialVariantSerialized", DataType.String, value);}
    public get PivotOffset() {return this.GetProp("PivotOffset", DataType.CFrame);}
    public set PivotOffset(value) {this.SetProp("PivotOffset", DataType.CFrame, value);}
    public get Reflectance() {return this.GetProp("Reflectance", DataType.Float32);}
    public set Reflectance(value) {this.SetProp("Reflectance", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get RightParamA() {return this.GetProp("RightParamA", DataType.Float32);}
    /**@deprecated Deprecated by Roblox*/
    public set RightParamA(value) {this.SetProp("RightParamA", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get RightParamB() {return this.GetProp("RightParamB", DataType.Float32);}
    /**@deprecated Deprecated by Roblox*/
    public set RightParamB(value) {this.SetProp("RightParamB", DataType.Float32, value);}
    public get RightSurface() {return this.GetProp("RightSurface", DataType.Enum) as SurfaceType | undefined;}
    public set RightSurface(value) {this.SetProp("RightSurface", DataType.Enum, value);}
    /**@deprecated Deprecated by Roblox*/
    public get RightSurfaceInput() {return this.GetProp("RightSurfaceInput", DataType.Enum) as InputType | undefined;}
    /**@deprecated Deprecated by Roblox*/
    public set RightSurfaceInput(value) {this.SetProp("RightSurfaceInput", DataType.Enum, value);}
    public get RootPriority() {return this.GetProp("RootPriority", DataType.Int32);}
    public set RootPriority(value) {this.SetProp("RootPriority", DataType.Int32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get RotVelocity() {return this.GetProp("RotVelocity", DataType.Vector3);}
    /**@deprecated Deprecated by Roblox*/
    public set RotVelocity(value) {this.SetProp("RotVelocity", DataType.Vector3, value);}
    /**@deprecated Deprecated by Roblox*/
    public get TopParamA() {return this.GetProp("TopParamA", DataType.Float32);}
    /**@deprecated Deprecated by Roblox*/
    public set TopParamA(value) {this.SetProp("TopParamA", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get TopParamB() {return this.GetProp("TopParamB", DataType.Float32);}
    /**@deprecated Deprecated by Roblox*/
    public set TopParamB(value) {this.SetProp("TopParamB", DataType.Float32, value);}
    public get TopSurface() {return this.GetProp("TopSurface", DataType.Enum) as SurfaceType | undefined;}
    public set TopSurface(value) {this.SetProp("TopSurface", DataType.Enum, value);}
    /**@deprecated Deprecated by Roblox*/
    public get TopSurfaceInput() {return this.GetProp("TopSurfaceInput", DataType.Enum) as InputType | undefined;}
    /**@deprecated Deprecated by Roblox*/
    public set TopSurfaceInput(value) {this.SetProp("TopSurfaceInput", DataType.Enum, value);}
    public get Transparency() {return this.GetProp("Transparency", DataType.Float32);}
    public set Transparency(value) {this.SetProp("Transparency", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get Velocity() {return this.GetProp("Velocity", DataType.Vector3);}
    /**@deprecated Deprecated by Roblox*/
    public set Velocity(value) {this.SetProp("Velocity", DataType.Vector3, value);}
    /**@deprecated Deprecated by Roblox*/
    public get BrickColor() {return this.GetProp("brickColor", DataType.BrickColor);}
    /**@deprecated Deprecated by Roblox*/
    public set BrickColor(value) {this.SetProp("brickColor", DataType.BrickColor, value);}
    public get Size() {return this.GetProp("size", DataType.Vector3);}
    public set Size(value) {this.SetProp("size", DataType.Vector3, value);}
}

export class CornerWedgePart extends BasePart {
    protected constructor() {super(); this.addClassName("CornerWedgePart");}
    public static New() {return new CornerWedgePart();}
}

export abstract class FormFactorPart extends BasePart {
    protected constructor() {super(); this.addClassName("FormFactorPart");}
    /**@deprecated Deprecated by Roblox*/
    public get FormFactor() {return this.GetProp("FormFactor", DataType.Enum) as FormFactor | undefined;}
    /**@deprecated Deprecated by Roblox*/
    public set FormFactor(value) {this.SetProp("FormFactor", DataType.Enum, value);}
    public get FormFactorRaw() {return this.GetProp("formFactorRaw", DataType.Enum) as FormFactor | undefined;}
    public set FormFactorRaw(value) {this.SetProp("formFactorRaw", DataType.Enum, value);}
}

export class Part extends FormFactorPart {
    protected constructor() {super(); this.addClassName("Part");}
    public static New() {return new Part();}
    public get Shape() {return this.GetProp("shape", DataType.Enum) as PartType | undefined;}
    public set Shape(value) {this.SetProp("shape", DataType.Enum, value);}
}

/**@deprecated Deprecated by Roblox*/
export class FlagStand extends Part {
    protected constructor() {super(); this.addClassName("FlagStand");}
    public static New() {return new FlagStand();}
    public get TeamColor() {return this.GetProp("TeamColor", DataType.BrickColor);}
    public set TeamColor(value) {this.SetProp("TeamColor", DataType.BrickColor, value);}
}

export class Seat extends Part {
    protected constructor() {super(); this.addClassName("Seat");}
    public static New() {return new Seat();}
    public get Disabled() {return this.GetProp("Disabled", DataType.Bool);}
    public set Disabled(value) {this.SetProp("Disabled", DataType.Bool, value);}
}

/**@deprecated Deprecated by Roblox*/
export class SkateboardPlatform extends Part {
    protected constructor() {super(); this.addClassName("SkateboardPlatform");}
    public static New() {return new SkateboardPlatform();}
    public get Steer() {return this.GetProp("Steer", DataType.Int32);}
    public set Steer(value) {this.SetProp("Steer", DataType.Int32, value);}
    public get StickyWheels() {return this.GetProp("StickyWheels", DataType.Bool);}
    public set StickyWheels(value) {this.SetProp("StickyWheels", DataType.Bool, value);}
    public get Throttle() {return this.GetProp("Throttle", DataType.Int32);}
    public set Throttle(value) {this.SetProp("Throttle", DataType.Int32, value);}
}

export class SpawnLocation extends Part {
    protected constructor() {super(); this.addClassName("SpawnLocation");}
    public static New() {return new SpawnLocation();}
    public get AllowTeamChangeOnTouch() {return this.GetProp("AllowTeamChangeOnTouch", DataType.Bool);}
    public set AllowTeamChangeOnTouch(value) {this.SetProp("AllowTeamChangeOnTouch", DataType.Bool, value);}
    public get Duration() {return this.GetProp("Duration", DataType.Int32);}
    public set Duration(value) {this.SetProp("Duration", DataType.Int32, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool);}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get Neutral() {return this.GetProp("Neutral", DataType.Bool);}
    public set Neutral(value) {this.SetProp("Neutral", DataType.Bool, value);}
    public get TeamColor() {return this.GetProp("TeamColor", DataType.BrickColor);}
    public set TeamColor(value) {this.SetProp("TeamColor", DataType.BrickColor, value);}
}

export class WedgePart extends FormFactorPart {
    protected constructor() {super(); this.addClassName("WedgePart");}
    public static New() {return new WedgePart();}
}

export class Terrain extends BasePart {
    protected constructor() {super(); this.addClassName("Terrain");}
    public static New() {return new Terrain();}
    public get AcquisitionMethod() {return this.GetProp("AcquisitionMethod", DataType.Enum) as TerrainAcquisitionMethod | undefined;}
    public set AcquisitionMethod(value) {this.SetProp("AcquisitionMethod", DataType.Enum, value);}
    public get Decoration() {return this.GetProp("Decoration", DataType.Bool);}
    public set Decoration(value) {this.SetProp("Decoration", DataType.Bool, value);}
    public get GrassLength() {return this.GetProp("GrassLength", DataType.Float32);}
    public set GrassLength(value) {this.SetProp("GrassLength", DataType.Float32, value);}
    public get MaterialColors() {return this.GetProp("MaterialColors", DataType.String);}
    public set MaterialColors(value) {this.SetProp("MaterialColors", DataType.String, value);}
    public get PhysicsGrid() {return this.GetProp("PhysicsGrid", DataType.String);}
    public set PhysicsGrid(value) {this.SetProp("PhysicsGrid", DataType.String, value);}
    public get ShorelinesUpgraded() {return this.GetProp("ShorelinesUpgraded", DataType.Bool);}
    public set ShorelinesUpgraded(value) {this.SetProp("ShorelinesUpgraded", DataType.Bool, value);}
    public get SmoothGrid() {return this.GetProp("SmoothGrid", DataType.String);}
    public set SmoothGrid(value) {this.SetProp("SmoothGrid", DataType.String, value);}
    public get SmoothVoxelsUpgraded() {return this.GetProp("SmoothVoxelsUpgraded", DataType.Bool);}
    public set SmoothVoxelsUpgraded(value) {this.SetProp("SmoothVoxelsUpgraded", DataType.Bool, value);}
    public get WaterColor() {return this.GetProp("WaterColor", DataType.Color3);}
    public set WaterColor(value) {this.SetProp("WaterColor", DataType.Color3, value);}
    public get WaterReflectance() {return this.GetProp("WaterReflectance", DataType.Float32);}
    public set WaterReflectance(value) {this.SetProp("WaterReflectance", DataType.Float32, value);}
    public get WaterTransparency() {return this.GetProp("WaterTransparency", DataType.Float32);}
    public set WaterTransparency(value) {this.SetProp("WaterTransparency", DataType.Float32, value);}
    public get WaterWaveSize() {return this.GetProp("WaterWaveSize", DataType.Float32);}
    public set WaterWaveSize(value) {this.SetProp("WaterWaveSize", DataType.Float32, value);}
    public get WaterWaveSpeed() {return this.GetProp("WaterWaveSpeed", DataType.Float32);}
    public set WaterWaveSpeed(value) {this.SetProp("WaterWaveSpeed", DataType.Float32, value);}
}

export abstract class TriangleMeshPart extends BasePart {
    protected constructor() {super(); this.addClassName("TriangleMeshPart");}
    public get AeroMeshData() {return this.GetProp("AeroMeshData", DataType.SharedString);}
    public set AeroMeshData(value) {this.SetProp("AeroMeshData", DataType.SharedString, value);}
    public get FluidFidelityInternal() {return this.GetProp("FluidFidelityInternal", DataType.Enum) as FluidFidelity | undefined;}
    public set FluidFidelityInternal(value) {this.SetProp("FluidFidelityInternal", DataType.Enum, value);}
    public get PhysicalConfigData() {return this.GetProp("PhysicalConfigData", DataType.SharedString);}
    public set PhysicalConfigData(value) {this.SetProp("PhysicalConfigData", DataType.SharedString, value);}
}

export class MeshPart extends TriangleMeshPart {
    protected constructor() {super(); this.addClassName("MeshPart");}
    public static New() {return new MeshPart();}
    public get DoubleSided() {return this.GetProp("DoubleSided", DataType.Bool);}
    public set DoubleSided(value) {this.SetProp("DoubleSided", DataType.Bool, value);}
    public get HasJointOffset() {return this.GetProp("HasJointOffset", DataType.Bool);}
    public set HasJointOffset(value) {this.SetProp("HasJointOffset", DataType.Bool, value);}
    public get HasSkinnedMesh() {return this.GetProp("HasSkinnedMesh", DataType.Bool);}
    public set HasSkinnedMesh(value) {this.SetProp("HasSkinnedMesh", DataType.Bool, value);}
    public get InitialSize() {return this.GetProp("InitialSize", DataType.Vector3);}
    public set InitialSize(value) {this.SetProp("InitialSize", DataType.Vector3, value);}
    public get JointOffset() {return this.GetProp("JointOffset", DataType.Vector3);}
    public set JointOffset(value) {this.SetProp("JointOffset", DataType.Vector3, value);}
    /**@deprecated Deprecated by Roblox*/
    public get MeshID() {return this.GetProp("MeshID", DataType.String);}
    /**@deprecated Deprecated by Roblox*/
    public set MeshID(value) {this.SetProp("MeshID", DataType.String, value);}
    public get MeshId() {return this.GetProp("MeshId", DataType.String);}
    public set MeshId(value) {this.SetProp("MeshId", DataType.String, value);}
    public get PhysicsData() {return this.GetProp("PhysicsData", DataType.String);}
    public set PhysicsData(value) {this.SetProp("PhysicsData", DataType.String, value);}
    public get RenderFidelity() {return this.GetProp("RenderFidelity", DataType.Enum) as RenderFidelity | undefined;}
    public set RenderFidelity(value) {this.SetProp("RenderFidelity", DataType.Enum, value);}
    public get TextureID() {return this.GetProp("TextureID", DataType.String);}
    public set TextureID(value) {this.SetProp("TextureID", DataType.String, value);}
    public get VertexCount() {return this.GetProp("VertexCount", DataType.Int32);}
    public set VertexCount(value) {this.SetProp("VertexCount", DataType.Int32, value);}
}

export class PartOperation extends TriangleMeshPart {
    protected constructor() {super(); this.addClassName("PartOperation");}
    public static New() {return new PartOperation();}
    public get AssetId() {return this.GetProp("AssetId", DataType.String);}
    public set AssetId(value) {this.SetProp("AssetId", DataType.String, value);}
    public get ChildData() {return this.GetProp("ChildData", DataType.String);}
    public set ChildData(value) {this.SetProp("ChildData", DataType.String, value);}
    public get ChildData2() {return this.GetProp("ChildData2", DataType.SharedString);}
    public set ChildData2(value) {this.SetProp("ChildData2", DataType.SharedString, value);}
    public get FormFactor() {return this.GetProp("FormFactor", DataType.Enum) as FormFactor | undefined;}
    public set FormFactor(value) {this.SetProp("FormFactor", DataType.Enum, value);}
    public get InitialSize() {return this.GetProp("InitialSize", DataType.Vector3);}
    public set InitialSize(value) {this.SetProp("InitialSize", DataType.Vector3, value);}
    public get MeshData() {return this.GetProp("MeshData", DataType.String);}
    public set MeshData(value) {this.SetProp("MeshData", DataType.String, value);}
    public get MeshData2() {return this.GetProp("MeshData2", DataType.SharedString);}
    public set MeshData2(value) {this.SetProp("MeshData2", DataType.SharedString, value);}
    public get PhysicsData() {return this.GetProp("PhysicsData", DataType.String);}
    public set PhysicsData(value) {this.SetProp("PhysicsData", DataType.String, value);}
    public get RenderFidelity() {return this.GetProp("RenderFidelity", DataType.Enum) as RenderFidelity | undefined;}
    public set RenderFidelity(value) {this.SetProp("RenderFidelity", DataType.Enum, value);}
    public get SmoothingAngle() {return this.GetProp("SmoothingAngle", DataType.Float32);}
    public set SmoothingAngle(value) {this.SetProp("SmoothingAngle", DataType.Float32, value);}
    public get UsePartColor() {return this.GetProp("UsePartColor", DataType.Bool);}
    public set UsePartColor(value) {this.SetProp("UsePartColor", DataType.Bool, value);}
}

export class IntersectOperation extends PartOperation {
    protected constructor() {super(); this.addClassName("IntersectOperation");}
    public static New() {return new IntersectOperation();}
}

export class NegateOperation extends PartOperation {
    protected constructor() {super(); this.addClassName("NegateOperation");}
    public static New() {return new NegateOperation();}
}

export class UnionOperation extends PartOperation {
    protected constructor() {super(); this.addClassName("UnionOperation");}
    public static New() {return new UnionOperation();}
}

export class TrussPart extends BasePart {
    protected constructor() {super(); this.addClassName("TrussPart");}
    public static New() {return new TrussPart();}
    public get Style() {return this.GetProp("style", DataType.Enum) as Style | undefined;}
    public set Style(value) {this.SetProp("style", DataType.Enum, value);}
}

export class VehicleSeat extends BasePart {
    protected constructor() {super(); this.addClassName("VehicleSeat");}
    public static New() {return new VehicleSeat();}
    public get Disabled() {return this.GetProp("Disabled", DataType.Bool);}
    public set Disabled(value) {this.SetProp("Disabled", DataType.Bool, value);}
    public get HeadsUpDisplay() {return this.GetProp("HeadsUpDisplay", DataType.Bool);}
    public set HeadsUpDisplay(value) {this.SetProp("HeadsUpDisplay", DataType.Bool, value);}
    public get MaxSpeed() {return this.GetProp("MaxSpeed", DataType.Float32);}
    public set MaxSpeed(value) {this.SetProp("MaxSpeed", DataType.Float32, value);}
    public get Steer() {return this.GetProp("Steer", DataType.Int32);}
    public set Steer(value) {this.SetProp("Steer", DataType.Int32, value);}
    public get SteerFloat() {return this.GetProp("SteerFloat", DataType.Float32);}
    public set SteerFloat(value) {this.SetProp("SteerFloat", DataType.Float32, value);}
    public get Throttle() {return this.GetProp("Throttle", DataType.Int32);}
    public set Throttle(value) {this.SetProp("Throttle", DataType.Int32, value);}
    public get ThrottleFloat() {return this.GetProp("ThrottleFloat", DataType.Float32);}
    public set ThrottleFloat(value) {this.SetProp("ThrottleFloat", DataType.Float32, value);}
    public get Torque() {return this.GetProp("Torque", DataType.Float32);}
    public set Torque(value) {this.SetProp("Torque", DataType.Float32, value);}
    public get TurnSpeed() {return this.GetProp("TurnSpeed", DataType.Float32);}
    public set TurnSpeed(value) {this.SetProp("TurnSpeed", DataType.Float32, value);}
}

export class Model extends PVInstance {
    protected constructor() {super(); this.addClassName("Model");}
    public static New() {return new Model();}
    public get LevelOfDetail() {return this.GetProp("LevelOfDetail", DataType.Enum) as ModelLevelOfDetail | undefined;}
    public set LevelOfDetail(value) {this.SetProp("LevelOfDetail", DataType.Enum, value);}
    public get ModelMeshCFrame() {return this.GetProp("ModelMeshCFrame", DataType.CFrame);}
    public set ModelMeshCFrame(value) {this.SetProp("ModelMeshCFrame", DataType.CFrame, value);}
    public get ModelMeshData() {return this.GetProp("ModelMeshData", DataType.SharedString);}
    public set ModelMeshData(value) {this.SetProp("ModelMeshData", DataType.SharedString, value);}
    public get ModelMeshSize() {return this.GetProp("ModelMeshSize", DataType.Vector3);}
    public set ModelMeshSize(value) {this.SetProp("ModelMeshSize", DataType.Vector3, value);}
    public get ModelStreamingMode() {return this.GetProp("ModelStreamingMode", DataType.Enum) as ModelStreamingMode | undefined;}
    public set ModelStreamingMode(value) {this.SetProp("ModelStreamingMode", DataType.Enum, value);}
    public get NeedsPivotMigration() {return this.GetProp("NeedsPivotMigration", DataType.Bool);}
    public set NeedsPivotMigration(value) {this.SetProp("NeedsPivotMigration", DataType.Bool, value);}
    public get PrimaryPart() {return this.GetProp("PrimaryPart", DataType.Referent) as BasePart | undefined;}
    public set PrimaryPart(value) {this.SetProp("PrimaryPart", DataType.Referent, value);}
    public get ScaleFactor() {return this.GetProp("ScaleFactor", DataType.Float32);}
    public set ScaleFactor(value) {this.SetProp("ScaleFactor", DataType.Float32, value);}
    public get WorldPivotData() {return this.GetProp("WorldPivotData", DataType.OptionalCFrame);}
    public set WorldPivotData(value) {this.SetProp("WorldPivotData", DataType.OptionalCFrame, value);}
}

export class Actor extends Model {
    protected constructor() {super(); this.addClassName("Actor");}
    public static New() {return new Actor();}
}

export abstract class BackpackItem extends Model {
    protected constructor() {super(); this.addClassName("BackpackItem");}
    public get TextureId() {return this.GetProp("TextureId", DataType.String);}
    public set TextureId(value) {this.SetProp("TextureId", DataType.String, value);}
}

/**@deprecated Deprecated by Roblox*/
export class HopperBin extends BackpackItem {
    protected constructor() {super(); this.addClassName("HopperBin");}
    public static New() {return new HopperBin();}
    public get Active() {return this.GetProp("Active", DataType.Bool);}
    public set Active(value) {this.SetProp("Active", DataType.Bool, value);}
    public get BinType() {return this.GetProp("BinType", DataType.Enum) as BinType | undefined;}
    public set BinType(value) {this.SetProp("BinType", DataType.Enum, value);}
}

export class Tool extends BackpackItem {
    protected constructor() {super(); this.addClassName("Tool");}
    public static New() {return new Tool();}
    public get CanBeDropped() {return this.GetProp("CanBeDropped", DataType.Bool);}
    public set CanBeDropped(value) {this.SetProp("CanBeDropped", DataType.Bool, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool);}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get Grip() {return this.GetProp("Grip", DataType.CFrame);}
    public set Grip(value) {this.SetProp("Grip", DataType.CFrame, value);}
    public get ManualActivationOnly() {return this.GetProp("ManualActivationOnly", DataType.Bool);}
    public set ManualActivationOnly(value) {this.SetProp("ManualActivationOnly", DataType.Bool, value);}
    public get RequiresHandle() {return this.GetProp("RequiresHandle", DataType.Bool);}
    public set RequiresHandle(value) {this.SetProp("RequiresHandle", DataType.Bool, value);}
    public get ToolTip() {return this.GetProp("ToolTip", DataType.String);}
    public set ToolTip(value) {this.SetProp("ToolTip", DataType.String, value);}
}

/**@deprecated Deprecated by Roblox*/
export class Flag extends Tool {
    protected constructor() {super(); this.addClassName("Flag");}
    public static New() {return new Flag();}
    public get TeamColor() {return this.GetProp("TeamColor", DataType.BrickColor);}
    public set TeamColor(value) {this.SetProp("TeamColor", DataType.BrickColor, value);}
}

export abstract class WorldRoot extends Model {
    protected constructor() {super(); this.addClassName("WorldRoot");}
}

export class Workspace extends WorldRoot {
    protected constructor() {super(); this.addClassName("Workspace");}
    public static New() {return new Workspace();}
    public get AirDensity() {return this.GetProp("AirDensity", DataType.Float32);}
    public set AirDensity(value) {this.SetProp("AirDensity", DataType.Float32, value);}
    public get AllowThirdPartySales() {return this.GetProp("AllowThirdPartySales", DataType.Bool);}
    public set AllowThirdPartySales(value) {this.SetProp("AllowThirdPartySales", DataType.Bool, value);}
    public get AvatarUnificationMode() {return this.GetProp("AvatarUnificationMode", DataType.Enum) as AvatarUnificationMode | undefined;}
    public set AvatarUnificationMode(value) {this.SetProp("AvatarUnificationMode", DataType.Enum, value);}
    public get CSGAsyncDynamicCollision() {return this.GetProp("CSGAsyncDynamicCollision", DataType.Enum) as CSGAsyncDynamicCollision | undefined;}
    public set CSGAsyncDynamicCollision(value) {this.SetProp("CSGAsyncDynamicCollision", DataType.Enum, value);}
    public get ClientAnimatorThrottling() {return this.GetProp("ClientAnimatorThrottling", DataType.Enum) as ClientAnimatorThrottlingMode | undefined;}
    public set ClientAnimatorThrottling(value) {this.SetProp("ClientAnimatorThrottling", DataType.Enum, value);}
    public get CollisionGroupData() {return this.GetProp("CollisionGroupData", DataType.String);}
    public set CollisionGroupData(value) {this.SetProp("CollisionGroupData", DataType.String, value);}
    public get CurrentCamera() {return this.GetProp("CurrentCamera", DataType.Referent) as Camera | undefined;}
    public set CurrentCamera(value) {this.SetProp("CurrentCamera", DataType.Referent, value);}
    public get DecreaseMinimumPartDensityMode() {return this.GetProp("DecreaseMinimumPartDensityMode", DataType.Enum) as DecreaseMinimumPartDensityMode | undefined;}
    public set DecreaseMinimumPartDensityMode(value) {this.SetProp("DecreaseMinimumPartDensityMode", DataType.Enum, value);}
    public get DistributedGameTime() {return this.GetProp("DistributedGameTime", DataType.Float64);}
    public set DistributedGameTime(value) {this.SetProp("DistributedGameTime", DataType.Float64, value);}
    public get EditorLiveScripting() {return this.GetProp("EditorLiveScripting", DataType.Enum) as EditorLiveScripting | undefined;}
    public set EditorLiveScripting(value) {this.SetProp("EditorLiveScripting", DataType.Enum, value);}
    public get ExplicitAutoJoints() {return this.GetProp("ExplicitAutoJoints", DataType.Bool);}
    public set ExplicitAutoJoints(value) {this.SetProp("ExplicitAutoJoints", DataType.Bool, value);}
    public get FallenPartsDestroyHeight() {return this.GetProp("FallenPartsDestroyHeight", DataType.Float32);}
    public set FallenPartsDestroyHeight(value) {this.SetProp("FallenPartsDestroyHeight", DataType.Float32, value);}
    public get FluidForces() {return this.GetProp("FluidForces", DataType.Enum) as FluidForces | undefined;}
    public set FluidForces(value) {this.SetProp("FluidForces", DataType.Enum, value);}
    public get GlobalWind() {return this.GetProp("GlobalWind", DataType.Vector3);}
    public set GlobalWind(value) {this.SetProp("GlobalWind", DataType.Vector3, value);}
    public get Gravity() {return this.GetProp("Gravity", DataType.Float32);}
    public set Gravity(value) {this.SetProp("Gravity", DataType.Float32, value);}
    public get IKControlConstraintSupport() {return this.GetProp("IKControlConstraintSupport", DataType.Enum) as IKControlConstraintSupport | undefined;}
    public set IKControlConstraintSupport(value) {this.SetProp("IKControlConstraintSupport", DataType.Enum, value);}
    public get MeshPartHeadsAndAccessories() {return this.GetProp("MeshPartHeadsAndAccessories", DataType.Enum) as MeshPartHeadsAndAccessories | undefined;}
    public set MeshPartHeadsAndAccessories(value) {this.SetProp("MeshPartHeadsAndAccessories", DataType.Enum, value);}
    public get ModelStreamingBehavior() {return this.GetProp("ModelStreamingBehavior", DataType.Enum) as ModelStreamingBehavior | undefined;}
    public set ModelStreamingBehavior(value) {this.SetProp("ModelStreamingBehavior", DataType.Enum, value);}
    public get PhysicsSteppingMethod() {return this.GetProp("PhysicsSteppingMethod", DataType.Enum) as PhysicsSteppingMethod | undefined;}
    public set PhysicsSteppingMethod(value) {this.SetProp("PhysicsSteppingMethod", DataType.Enum, value);}
    public get PlayerCharacterDestroyBehavior() {return this.GetProp("PlayerCharacterDestroyBehavior", DataType.Enum) as PlayerCharacterDestroyBehavior | undefined;}
    public set PlayerCharacterDestroyBehavior(value) {this.SetProp("PlayerCharacterDestroyBehavior", DataType.Enum, value);}
    public get PrimalPhysicsSolver() {return this.GetProp("PrimalPhysicsSolver", DataType.Enum) as PrimalPhysicsSolver | undefined;}
    public set PrimalPhysicsSolver(value) {this.SetProp("PrimalPhysicsSolver", DataType.Enum, value);}
    public get RejectCharacterDeletions() {return this.GetProp("RejectCharacterDeletions", DataType.Enum) as RejectCharacterDeletions | undefined;}
    public set RejectCharacterDeletions(value) {this.SetProp("RejectCharacterDeletions", DataType.Enum, value);}
    public get ReplicateInstanceDestroySetting() {return this.GetProp("ReplicateInstanceDestroySetting", DataType.Enum) as ReplicateInstanceDestroySetting | undefined;}
    public set ReplicateInstanceDestroySetting(value) {this.SetProp("ReplicateInstanceDestroySetting", DataType.Enum, value);}
    public get Retargeting() {return this.GetProp("Retargeting", DataType.Enum) as AnimatorRetargetingMode | undefined;}
    public set Retargeting(value) {this.SetProp("Retargeting", DataType.Enum, value);}
    public get SignalBehavior2() {return this.GetProp("SignalBehavior2", DataType.Enum) as SignalBehavior | undefined;}
    public set SignalBehavior2(value) {this.SetProp("SignalBehavior2", DataType.Enum, value);}
    public get StreamOutBehavior() {return this.GetProp("StreamOutBehavior", DataType.Enum) as StreamOutBehavior | undefined;}
    public set StreamOutBehavior(value) {this.SetProp("StreamOutBehavior", DataType.Enum, value);}
    public get StreamingEnabled() {return this.GetProp("StreamingEnabled", DataType.Bool);}
    public set StreamingEnabled(value) {this.SetProp("StreamingEnabled", DataType.Bool, value);}
    public get StreamingIntegrityMode() {return this.GetProp("StreamingIntegrityMode", DataType.Enum) as StreamingIntegrityMode | undefined;}
    public set StreamingIntegrityMode(value) {this.SetProp("StreamingIntegrityMode", DataType.Enum, value);}
    public get StreamingMinRadius() {return this.GetProp("StreamingMinRadius", DataType.Int32);}
    public set StreamingMinRadius(value) {this.SetProp("StreamingMinRadius", DataType.Int32, value);}
    public get StreamingTargetRadius() {return this.GetProp("StreamingTargetRadius", DataType.Int32);}
    public set StreamingTargetRadius(value) {this.SetProp("StreamingTargetRadius", DataType.Int32, value);}
    public get TerrainWeldsFixed() {return this.GetProp("TerrainWeldsFixed", DataType.Bool);}
    public set TerrainWeldsFixed(value) {this.SetProp("TerrainWeldsFixed", DataType.Bool, value);}
    public get TouchesUseCollisionGroups() {return this.GetProp("TouchesUseCollisionGroups", DataType.Bool);}
    public set TouchesUseCollisionGroups(value) {this.SetProp("TouchesUseCollisionGroups", DataType.Bool, value);}
}

export class WorldModel extends WorldRoot {
    protected constructor() {super(); this.addClassName("WorldModel");}
    public static New() {return new WorldModel();}
}

export class PackageService extends Instance {
    protected constructor() {super(true); this.addClassName("PackageService");}
    public static New() {return new PackageService();}
}

export class PackageUIService extends Instance {
    protected constructor() {super(true); this.addClassName("PackageUIService");}
    public static New() {return new PackageUIService();}
}

export class PartOperationAsset extends Instance {
    protected constructor() {super(); this.addClassName("PartOperationAsset");}
    public static New() {return new PartOperationAsset();}
    public get ChildData() {return this.GetProp("ChildData", DataType.String);}
    public set ChildData(value) {this.SetProp("ChildData", DataType.String, value);}
    public get MeshData() {return this.GetProp("MeshData", DataType.String);}
    public set MeshData(value) {this.SetProp("MeshData", DataType.String, value);}
}

export class ParticleEmitter extends Instance {
    protected constructor() {super(); this.addClassName("ParticleEmitter");}
    public static New() {return new ParticleEmitter();}
    public get Acceleration() {return this.GetProp("Acceleration", DataType.Vector3);}
    public set Acceleration(value) {this.SetProp("Acceleration", DataType.Vector3, value);}
    public get Brightness() {return this.GetProp("Brightness", DataType.Float32);}
    public set Brightness(value) {this.SetProp("Brightness", DataType.Float32, value);}
    public get Color() {return this.GetProp("Color", DataType.ColorSequence);}
    public set Color(value) {this.SetProp("Color", DataType.ColorSequence, value);}
    public get Drag() {return this.GetProp("Drag", DataType.Float32);}
    public set Drag(value) {this.SetProp("Drag", DataType.Float32, value);}
    public get EmissionDirection() {return this.GetProp("EmissionDirection", DataType.Enum) as NormalId | undefined;}
    public set EmissionDirection(value) {this.SetProp("EmissionDirection", DataType.Enum, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool);}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get FlipbookFramerate() {return this.GetProp("FlipbookFramerate", DataType.NumberRange);}
    public set FlipbookFramerate(value) {this.SetProp("FlipbookFramerate", DataType.NumberRange, value);}
    public get FlipbookIncompatible() {return this.GetProp("FlipbookIncompatible", DataType.String);}
    public set FlipbookIncompatible(value) {this.SetProp("FlipbookIncompatible", DataType.String, value);}
    public get FlipbookLayout() {return this.GetProp("FlipbookLayout", DataType.Enum) as ParticleFlipbookLayout | undefined;}
    public set FlipbookLayout(value) {this.SetProp("FlipbookLayout", DataType.Enum, value);}
    public get FlipbookMode() {return this.GetProp("FlipbookMode", DataType.Enum) as ParticleFlipbookMode | undefined;}
    public set FlipbookMode(value) {this.SetProp("FlipbookMode", DataType.Enum, value);}
    public get FlipbookStartRandom() {return this.GetProp("FlipbookStartRandom", DataType.Bool);}
    public set FlipbookStartRandom(value) {this.SetProp("FlipbookStartRandom", DataType.Bool, value);}
    public get Lifetime() {return this.GetProp("Lifetime", DataType.NumberRange);}
    public set Lifetime(value) {this.SetProp("Lifetime", DataType.NumberRange, value);}
    public get LightEmission() {return this.GetProp("LightEmission", DataType.Float32);}
    public set LightEmission(value) {this.SetProp("LightEmission", DataType.Float32, value);}
    public get LightInfluence() {return this.GetProp("LightInfluence", DataType.Float32);}
    public set LightInfluence(value) {this.SetProp("LightInfluence", DataType.Float32, value);}
    public get LockedToPart() {return this.GetProp("LockedToPart", DataType.Bool);}
    public set LockedToPart(value) {this.SetProp("LockedToPart", DataType.Bool, value);}
    public get Orientation() {return this.GetProp("Orientation", DataType.Enum) as ParticleOrientation | undefined;}
    public set Orientation(value) {this.SetProp("Orientation", DataType.Enum, value);}
    public get Rate() {return this.GetProp("Rate", DataType.Float32);}
    public set Rate(value) {this.SetProp("Rate", DataType.Float32, value);}
    public get RotSpeed() {return this.GetProp("RotSpeed", DataType.NumberRange);}
    public set RotSpeed(value) {this.SetProp("RotSpeed", DataType.NumberRange, value);}
    public get Rotation() {return this.GetProp("Rotation", DataType.NumberRange);}
    public set Rotation(value) {this.SetProp("Rotation", DataType.NumberRange, value);}
    public get Shape() {return this.GetProp("Shape", DataType.Enum) as ParticleEmitterShape | undefined;}
    public set Shape(value) {this.SetProp("Shape", DataType.Enum, value);}
    public get ShapeInOut() {return this.GetProp("ShapeInOut", DataType.Enum) as ParticleEmitterShapeInOut | undefined;}
    public set ShapeInOut(value) {this.SetProp("ShapeInOut", DataType.Enum, value);}
    public get ShapePartial() {return this.GetProp("ShapePartial", DataType.Float32);}
    public set ShapePartial(value) {this.SetProp("ShapePartial", DataType.Float32, value);}
    public get ShapeStyle() {return this.GetProp("ShapeStyle", DataType.Enum) as ParticleEmitterShapeStyle | undefined;}
    public set ShapeStyle(value) {this.SetProp("ShapeStyle", DataType.Enum, value);}
    public get Size() {return this.GetProp("Size", DataType.NumberSequence);}
    public set Size(value) {this.SetProp("Size", DataType.NumberSequence, value);}
    public get Speed() {return this.GetProp("Speed", DataType.NumberRange);}
    public set Speed(value) {this.SetProp("Speed", DataType.NumberRange, value);}
    public get SpreadAngle() {return this.GetProp("SpreadAngle", DataType.Vector2);}
    public set SpreadAngle(value) {this.SetProp("SpreadAngle", DataType.Vector2, value);}
    public get Squash() {return this.GetProp("Squash", DataType.NumberSequence);}
    public set Squash(value) {this.SetProp("Squash", DataType.NumberSequence, value);}
    public get Texture() {return this.GetProp("Texture", DataType.String);}
    public set Texture(value) {this.SetProp("Texture", DataType.String, value);}
    public get TimeScale() {return this.GetProp("TimeScale", DataType.Float32);}
    public set TimeScale(value) {this.SetProp("TimeScale", DataType.Float32, value);}
    public get Transparency() {return this.GetProp("Transparency", DataType.NumberSequence);}
    public set Transparency(value) {this.SetProp("Transparency", DataType.NumberSequence, value);}
    public get VelocityInheritance() {return this.GetProp("VelocityInheritance", DataType.Float32);}
    public set VelocityInheritance(value) {this.SetProp("VelocityInheritance", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get VelocitySpread() {return this.GetProp("VelocitySpread", DataType.Float32);}
    /**@deprecated Deprecated by Roblox*/
    public set VelocitySpread(value) {this.SetProp("VelocitySpread", DataType.Float32, value);}
    public get WindAffectsDrag() {return this.GetProp("WindAffectsDrag", DataType.Bool);}
    public set WindAffectsDrag(value) {this.SetProp("WindAffectsDrag", DataType.Bool, value);}
    public get ZOffset() {return this.GetProp("ZOffset", DataType.Float32);}
    public set ZOffset(value) {this.SetProp("ZOffset", DataType.Float32, value);}
}

export class PatchBundlerFileWatch extends Instance {
    protected constructor() {super(true); this.addClassName("PatchBundlerFileWatch");}
    public static New() {return new PatchBundlerFileWatch();}
}

export class PathfindingLink extends Instance {
    protected constructor() {super(); this.addClassName("PathfindingLink");}
    public static New() {return new PathfindingLink();}
    public get Attachment0() {return this.GetProp("Attachment0", DataType.Referent) as Attachment | undefined;}
    public set Attachment0(value) {this.SetProp("Attachment0", DataType.Referent, value);}
    public get Attachment1() {return this.GetProp("Attachment1", DataType.Referent) as Attachment | undefined;}
    public set Attachment1(value) {this.SetProp("Attachment1", DataType.Referent, value);}
    public get IsBidirectional() {return this.GetProp("IsBidirectional", DataType.Bool);}
    public set IsBidirectional(value) {this.SetProp("IsBidirectional", DataType.Bool, value);}
    public get Label() {return this.GetProp("Label", DataType.String);}
    public set Label(value) {this.SetProp("Label", DataType.String, value);}
}

export class PathfindingModifier extends Instance {
    protected constructor() {super(); this.addClassName("PathfindingModifier");}
    public static New() {return new PathfindingModifier();}
    public get Label() {return this.GetProp("Label", DataType.String);}
    public set Label(value) {this.SetProp("Label", DataType.String, value);}
    public get PassThrough() {return this.GetProp("PassThrough", DataType.Bool);}
    public set PassThrough(value) {this.SetProp("PassThrough", DataType.Bool, value);}
}

export class PathfindingService extends Instance {
    protected constructor() {super(true); this.addClassName("PathfindingService");}
    public static New() {return new PathfindingService();}
    /**@deprecated Deprecated by Roblox*/
    public get EmptyCutoff() {return this.GetProp("EmptyCutoff", DataType.Float32);}
    /**@deprecated Deprecated by Roblox*/
    public set EmptyCutoff(value) {this.SetProp("EmptyCutoff", DataType.Float32, value);}
}

export class PermissionsService extends Instance {
    protected constructor() {super(true); this.addClassName("PermissionsService");}
    public static New() {return new PermissionsService();}
}

export class PhysicsService extends Instance {
    protected constructor() {super(true); this.addClassName("PhysicsService");}
    public static New() {return new PhysicsService();}
}

export class PlaceStatsService extends Instance {
    protected constructor() {super(true); this.addClassName("PlaceStatsService");}
    public static New() {return new PlaceStatsService();}
}

export class PlacesService extends Instance {
    protected constructor() {super(true); this.addClassName("PlacesService");}
    public static New() {return new PlacesService();}
}

export class PlatformCloudStorageService extends Instance {
    protected constructor() {super(true); this.addClassName("PlatformCloudStorageService");}
    public static New() {return new PlatformCloudStorageService();}
}

export class PlatformFriendsService extends Instance {
    protected constructor() {super(true); this.addClassName("PlatformFriendsService");}
    public static New() {return new PlatformFriendsService();}
}

export class Player extends Instance {
    protected constructor() {super(); this.addClassName("Player");}
    public static New() {return new Player();}
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
    public get Team() {return this.GetProp("Team", DataType.Referent) as Team | undefined;}
    public set Team(value) {this.SetProp("Team", DataType.Referent, value);}
    public get TeamColor() {return this.GetProp("TeamColor", DataType.BrickColor);}
    public set TeamColor(value) {this.SetProp("TeamColor", DataType.BrickColor, value);}
    public get TeleportedIn() {return this.GetProp("TeleportedIn", DataType.Bool);}
    public set TeleportedIn(value) {this.SetProp("TeleportedIn", DataType.Bool, value);}
}

export class PlayerEmulatorService extends Instance {
    protected constructor() {super(true); this.addClassName("PlayerEmulatorService");}
    public static New() {return new PlayerEmulatorService();}
    public get CustomPoliciesEnabled() {return this.GetProp("CustomPoliciesEnabled", DataType.Bool);}
    public set CustomPoliciesEnabled(value) {this.SetProp("CustomPoliciesEnabled", DataType.Bool, value);}
    public get EmulatedCountryCode() {return this.GetProp("EmulatedCountryCode", DataType.String);}
    public set EmulatedCountryCode(value) {this.SetProp("EmulatedCountryCode", DataType.String, value);}
    public get EmulatedGameLocale() {return this.GetProp("EmulatedGameLocale", DataType.String);}
    public set EmulatedGameLocale(value) {this.SetProp("EmulatedGameLocale", DataType.String, value);}
    public get PlayerEmulationEnabled() {return this.GetProp("PlayerEmulationEnabled", DataType.Bool);}
    public set PlayerEmulationEnabled(value) {this.SetProp("PlayerEmulationEnabled", DataType.Bool, value);}
    public get PseudolocalizationEnabled() {return this.GetProp("PseudolocalizationEnabled", DataType.Bool);}
    public set PseudolocalizationEnabled(value) {this.SetProp("PseudolocalizationEnabled", DataType.Bool, value);}
    public get SerializedEmulatedPolicyInfo() {return this.GetProp("SerializedEmulatedPolicyInfo", DataType.String);}
    public set SerializedEmulatedPolicyInfo(value) {this.SetProp("SerializedEmulatedPolicyInfo", DataType.String, value);}
}

export class PlayerViewService extends Instance {
    protected constructor() {super(true); this.addClassName("PlayerViewService");}
    public static New() {return new PlayerViewService();}
}

export class Players extends Instance {
    protected constructor() {super(true); this.addClassName("Players");}
    public static New() {return new Players();}
    public get CharacterAutoLoads() {return this.GetProp("CharacterAutoLoads", DataType.Bool);}
    public set CharacterAutoLoads(value) {this.SetProp("CharacterAutoLoads", DataType.Bool, value);}
    public get MaxPlayersInternal() {return this.GetProp("MaxPlayersInternal", DataType.Int32);}
    public set MaxPlayersInternal(value) {this.SetProp("MaxPlayersInternal", DataType.Int32, value);}
    public get PreferredPlayersInternal() {return this.GetProp("PreferredPlayersInternal", DataType.Int32);}
    public set PreferredPlayersInternal(value) {this.SetProp("PreferredPlayersInternal", DataType.Int32, value);}
    public get RespawnTime() {return this.GetProp("RespawnTime", DataType.Float32);}
    public set RespawnTime(value) {this.SetProp("RespawnTime", DataType.Float32, value);}
    public get UseStrafingAnimations() {return this.GetProp("UseStrafingAnimations", DataType.Bool);}
    public set UseStrafingAnimations(value) {this.SetProp("UseStrafingAnimations", DataType.Bool, value);}
}

export class PluginAction extends Instance {
    protected constructor() {super(); this.addClassName("PluginAction");}
    public static New() {return new PluginAction();}
}

export class PluginCapabilities extends Instance {
    protected constructor() {super(); this.addClassName("PluginCapabilities");}
    public static New() {return new PluginCapabilities();}
    public get Manifest() {return this.GetProp("Manifest", DataType.String);}
    public set Manifest(value) {this.SetProp("Manifest", DataType.String, value);}
}

export class PluginDebugService extends Instance {
    protected constructor() {super(true); this.addClassName("PluginDebugService");}
    public static New() {return new PluginDebugService();}
}

export class PluginGuiService extends Instance {
    protected constructor() {super(true); this.addClassName("PluginGuiService");}
    public static New() {return new PluginGuiService();}
}

export class PluginManagementService extends Instance {
    protected constructor() {super(true); this.addClassName("PluginManagementService");}
    public static New() {return new PluginManagementService();}
}

export class PluginPolicyService extends Instance {
    protected constructor() {super(true); this.addClassName("PluginPolicyService");}
    public static New() {return new PluginPolicyService();}
}

/**@deprecated Deprecated by Roblox*/
export class PointsService extends Instance {
    protected constructor() {super(true); this.addClassName("PointsService");}
    public static New() {return new PointsService();}
}

export class PolicyService extends Instance {
    protected constructor() {super(true); this.addClassName("PolicyService");}
    public static New() {return new PolicyService();}
    public get IsLuobuServer() {return this.GetProp("IsLuobuServer", DataType.Enum) as TriStateBoolean | undefined;}
    public set IsLuobuServer(value) {this.SetProp("IsLuobuServer", DataType.Enum, value);}
    public get LuobuWhitelisted() {return this.GetProp("LuobuWhitelisted", DataType.Enum) as TriStateBoolean | undefined;}
    public set LuobuWhitelisted(value) {this.SetProp("LuobuWhitelisted", DataType.Enum, value);}
}

export abstract class PoseBase extends Instance {
    protected constructor() {super(); this.addClassName("PoseBase");}
    public get EasingDirection() {return this.GetProp("EasingDirection", DataType.Enum) as PoseEasingDirection | undefined;}
    public set EasingDirection(value) {this.SetProp("EasingDirection", DataType.Enum, value);}
    public get EasingStyle() {return this.GetProp("EasingStyle", DataType.Enum) as PoseEasingStyle | undefined;}
    public set EasingStyle(value) {this.SetProp("EasingStyle", DataType.Enum, value);}
    public get Weight() {return this.GetProp("Weight", DataType.Float32);}
    public set Weight(value) {this.SetProp("Weight", DataType.Float32, value);}
}

export class NumberPose extends PoseBase {
    protected constructor() {super(); this.addClassName("NumberPose");}
    public static New() {return new NumberPose();}
    public get Value() {return this.GetProp("Value", DataType.Float64);}
    public set Value(value) {this.SetProp("Value", DataType.Float64, value);}
}

export class Pose extends PoseBase {
    protected constructor() {super(); this.addClassName("Pose");}
    public static New() {return new Pose();}
    public get CFrame() {return this.GetProp("CFrame", DataType.CFrame);}
    public set CFrame(value) {this.SetProp("CFrame", DataType.CFrame, value);}
    /**@deprecated Deprecated by Roblox*/
    public get MaskWeight() {return this.GetProp("MaskWeight", DataType.Float32);}
    /**@deprecated Deprecated by Roblox*/
    public set MaskWeight(value) {this.SetProp("MaskWeight", DataType.Float32, value);}
}

export abstract class PostEffect extends Instance {
    protected constructor() {super(); this.addClassName("PostEffect");}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool);}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
}

export class BloomEffect extends PostEffect {
    protected constructor() {super(); this.addClassName("BloomEffect");}
    public static New() {return new BloomEffect();}
    public get Intensity() {return this.GetProp("Intensity", DataType.Float32);}
    public set Intensity(value) {this.SetProp("Intensity", DataType.Float32, value);}
    public get Size() {return this.GetProp("Size", DataType.Float32);}
    public set Size(value) {this.SetProp("Size", DataType.Float32, value);}
    public get Threshold() {return this.GetProp("Threshold", DataType.Float32);}
    public set Threshold(value) {this.SetProp("Threshold", DataType.Float32, value);}
}

export class BlurEffect extends PostEffect {
    protected constructor() {super(); this.addClassName("BlurEffect");}
    public static New() {return new BlurEffect();}
    public get Size() {return this.GetProp("Size", DataType.Float32);}
    public set Size(value) {this.SetProp("Size", DataType.Float32, value);}
}

export class ColorCorrectionEffect extends PostEffect {
    protected constructor() {super(); this.addClassName("ColorCorrectionEffect");}
    public static New() {return new ColorCorrectionEffect();}
    public get Brightness() {return this.GetProp("Brightness", DataType.Float32);}
    public set Brightness(value) {this.SetProp("Brightness", DataType.Float32, value);}
    public get Contrast() {return this.GetProp("Contrast", DataType.Float32);}
    public set Contrast(value) {this.SetProp("Contrast", DataType.Float32, value);}
    public get Saturation() {return this.GetProp("Saturation", DataType.Float32);}
    public set Saturation(value) {this.SetProp("Saturation", DataType.Float32, value);}
    public get TintColor() {return this.GetProp("TintColor", DataType.Color3);}
    public set TintColor(value) {this.SetProp("TintColor", DataType.Color3, value);}
}

export class DepthOfFieldEffect extends PostEffect {
    protected constructor() {super(); this.addClassName("DepthOfFieldEffect");}
    public static New() {return new DepthOfFieldEffect();}
    public get FarIntensity() {return this.GetProp("FarIntensity", DataType.Float32);}
    public set FarIntensity(value) {this.SetProp("FarIntensity", DataType.Float32, value);}
    public get FocusDistance() {return this.GetProp("FocusDistance", DataType.Float32);}
    public set FocusDistance(value) {this.SetProp("FocusDistance", DataType.Float32, value);}
    public get InFocusRadius() {return this.GetProp("InFocusRadius", DataType.Float32);}
    public set InFocusRadius(value) {this.SetProp("InFocusRadius", DataType.Float32, value);}
    public get NearIntensity() {return this.GetProp("NearIntensity", DataType.Float32);}
    public set NearIntensity(value) {this.SetProp("NearIntensity", DataType.Float32, value);}
}

export class SunRaysEffect extends PostEffect {
    protected constructor() {super(); this.addClassName("SunRaysEffect");}
    public static New() {return new SunRaysEffect();}
    public get Intensity() {return this.GetProp("Intensity", DataType.Float32);}
    public set Intensity(value) {this.SetProp("Intensity", DataType.Float32, value);}
    public get Spread() {return this.GetProp("Spread", DataType.Float32);}
    public set Spread(value) {this.SetProp("Spread", DataType.Float32, value);}
}

export class ProcessInstancePhysicsService extends Instance {
    protected constructor() {super(true); this.addClassName("ProcessInstancePhysicsService");}
    public static New() {return new ProcessInstancePhysicsService();}
}

export class ProjectFolderService extends Instance {
    protected constructor() {super(true); this.addClassName("ProjectFolderService");}
    public static New() {return new ProjectFolderService();}
}

export class ProximityPrompt extends Instance {
    protected constructor() {super(); this.addClassName("ProximityPrompt");}
    public static New() {return new ProximityPrompt();}
    public get ActionText() {return this.GetProp("ActionText", DataType.String);}
    public set ActionText(value) {this.SetProp("ActionText", DataType.String, value);}
    public get AutoLocalize() {return this.GetProp("AutoLocalize", DataType.Bool);}
    public set AutoLocalize(value) {this.SetProp("AutoLocalize", DataType.Bool, value);}
    public get ClickablePrompt() {return this.GetProp("ClickablePrompt", DataType.Bool);}
    public set ClickablePrompt(value) {this.SetProp("ClickablePrompt", DataType.Bool, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool);}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get Exclusivity() {return this.GetProp("Exclusivity", DataType.Enum) as ProximityPromptExclusivity | undefined;}
    public set Exclusivity(value) {this.SetProp("Exclusivity", DataType.Enum, value);}
    public get GamepadKeyCode() {return this.GetProp("GamepadKeyCode", DataType.Enum) as KeyCode | undefined;}
    public set GamepadKeyCode(value) {this.SetProp("GamepadKeyCode", DataType.Enum, value);}
    public get HoldDuration() {return this.GetProp("HoldDuration", DataType.Float32);}
    public set HoldDuration(value) {this.SetProp("HoldDuration", DataType.Float32, value);}
    public get KeyboardKeyCode() {return this.GetProp("KeyboardKeyCode", DataType.Enum) as KeyCode | undefined;}
    public set KeyboardKeyCode(value) {this.SetProp("KeyboardKeyCode", DataType.Enum, value);}
    public get MaxActivationDistance() {return this.GetProp("MaxActivationDistance", DataType.Float32);}
    public set MaxActivationDistance(value) {this.SetProp("MaxActivationDistance", DataType.Float32, value);}
    public get ObjectText() {return this.GetProp("ObjectText", DataType.String);}
    public set ObjectText(value) {this.SetProp("ObjectText", DataType.String, value);}
    public get RequiresLineOfSight() {return this.GetProp("RequiresLineOfSight", DataType.Bool);}
    public set RequiresLineOfSight(value) {this.SetProp("RequiresLineOfSight", DataType.Bool, value);}
    public get RootLocalizationTable() {return this.GetProp("RootLocalizationTable", DataType.Referent) as LocalizationTable | undefined;}
    public set RootLocalizationTable(value) {this.SetProp("RootLocalizationTable", DataType.Referent, value);}
    public get Style() {return this.GetProp("Style", DataType.Enum) as ProximityPromptStyle | undefined;}
    public set Style(value) {this.SetProp("Style", DataType.Enum, value);}
    public get UIOffset() {return this.GetProp("UIOffset", DataType.Vector2);}
    public set UIOffset(value) {this.SetProp("UIOffset", DataType.Vector2, value);}
}

export class ProximityPromptService extends Instance {
    protected constructor() {super(true); this.addClassName("ProximityPromptService");}
    public static New() {return new ProximityPromptService();}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool);}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get MaxPromptsVisible() {return this.GetProp("MaxPromptsVisible", DataType.Int32);}
    public set MaxPromptsVisible(value) {this.SetProp("MaxPromptsVisible", DataType.Int32, value);}
}

export class PublishService extends Instance {
    protected constructor() {super(true); this.addClassName("PublishService");}
    public static New() {return new PublishService();}
}

export class RbxAnalyticsService extends Instance {
    protected constructor() {super(true); this.addClassName("RbxAnalyticsService");}
    public static New() {return new RbxAnalyticsService();}
}

export class ReflectionMetadata extends Instance {
    protected constructor() {super(); this.addClassName("ReflectionMetadata");}
    public static New() {return new ReflectionMetadata();}
}

export class ReflectionMetadataCallbacks extends Instance {
    protected constructor() {super(); this.addClassName("ReflectionMetadataCallbacks");}
    public static New() {return new ReflectionMetadataCallbacks();}
}

export class ReflectionMetadataClasses extends Instance {
    protected constructor() {super(); this.addClassName("ReflectionMetadataClasses");}
    public static New() {return new ReflectionMetadataClasses();}
}

export class ReflectionMetadataEnums extends Instance {
    protected constructor() {super(); this.addClassName("ReflectionMetadataEnums");}
    public static New() {return new ReflectionMetadataEnums();}
}

export class ReflectionMetadataEvents extends Instance {
    protected constructor() {super(); this.addClassName("ReflectionMetadataEvents");}
    public static New() {return new ReflectionMetadataEvents();}
}

export class ReflectionMetadataFunctions extends Instance {
    protected constructor() {super(); this.addClassName("ReflectionMetadataFunctions");}
    public static New() {return new ReflectionMetadataFunctions();}
}

export abstract class ReflectionMetadataItem extends Instance {
    protected constructor() {super(); this.addClassName("ReflectionMetadataItem");}
    public get Browsable() {return this.GetProp("Browsable", DataType.Bool);}
    public set Browsable(value) {this.SetProp("Browsable", DataType.Bool, value);}
    public get ClassCategory() {return this.GetProp("ClassCategory", DataType.String);}
    public set ClassCategory(value) {this.SetProp("ClassCategory", DataType.String, value);}
    public get ClientOnly() {return this.GetProp("ClientOnly", DataType.Bool);}
    public set ClientOnly(value) {this.SetProp("ClientOnly", DataType.Bool, value);}
    public get Constraint() {return this.GetProp("Constraint", DataType.String);}
    public set Constraint(value) {this.SetProp("Constraint", DataType.String, value);}
    public get Deprecated() {return this.GetProp("Deprecated", DataType.Bool);}
    public set Deprecated(value) {this.SetProp("Deprecated", DataType.Bool, value);}
    public get EditingDisabled() {return this.GetProp("EditingDisabled", DataType.Bool);}
    public set EditingDisabled(value) {this.SetProp("EditingDisabled", DataType.Bool, value);}
    public get EditorType() {return this.GetProp("EditorType", DataType.String);}
    public set EditorType(value) {this.SetProp("EditorType", DataType.String, value);}
    public get FFlag() {return this.GetProp("FFlag", DataType.String);}
    public set FFlag(value) {this.SetProp("FFlag", DataType.String, value);}
    public get IsBackend() {return this.GetProp("IsBackend", DataType.Bool);}
    public set IsBackend(value) {this.SetProp("IsBackend", DataType.Bool, value);}
    public get PropertyOrder() {return this.GetProp("PropertyOrder", DataType.Int32);}
    public set PropertyOrder(value) {this.SetProp("PropertyOrder", DataType.Int32, value);}
    public get ScriptContext() {return this.GetProp("ScriptContext", DataType.String);}
    public set ScriptContext(value) {this.SetProp("ScriptContext", DataType.String, value);}
    public get ServerOnly() {return this.GetProp("ServerOnly", DataType.Bool);}
    public set ServerOnly(value) {this.SetProp("ServerOnly", DataType.Bool, value);}
    public get SliderScaling() {return this.GetProp("SliderScaling", DataType.String);}
    public set SliderScaling(value) {this.SetProp("SliderScaling", DataType.String, value);}
    public get UIMaximum() {return this.GetProp("UIMaximum", DataType.Float64);}
    public set UIMaximum(value) {this.SetProp("UIMaximum", DataType.Float64, value);}
    public get UIMinimum() {return this.GetProp("UIMinimum", DataType.Float64);}
    public set UIMinimum(value) {this.SetProp("UIMinimum", DataType.Float64, value);}
    public get UINumTicks() {return this.GetProp("UINumTicks", DataType.Float64);}
    public set UINumTicks(value) {this.SetProp("UINumTicks", DataType.Float64, value);}
}

export class ReflectionMetadataClass extends ReflectionMetadataItem {
    protected constructor() {super(); this.addClassName("ReflectionMetadataClass");}
    public static New() {return new ReflectionMetadataClass();}
    public get ExplorerImageIndex() {return this.GetProp("ExplorerImageIndex", DataType.Int32);}
    public set ExplorerImageIndex(value) {this.SetProp("ExplorerImageIndex", DataType.Int32, value);}
    public get ExplorerOrder() {return this.GetProp("ExplorerOrder", DataType.Int32);}
    public set ExplorerOrder(value) {this.SetProp("ExplorerOrder", DataType.Int32, value);}
    public get Insertable() {return this.GetProp("Insertable", DataType.Bool);}
    public set Insertable(value) {this.SetProp("Insertable", DataType.Bool, value);}
    public get PreferredParent() {return this.GetProp("PreferredParent", DataType.String);}
    public set PreferredParent(value) {this.SetProp("PreferredParent", DataType.String, value);}
    public get ServiceVisibility() {return this.GetProp("ServiceVisibility", DataType.Enum) as ServiceVisibility | undefined;}
    public set ServiceVisibility(value) {this.SetProp("ServiceVisibility", DataType.Enum, value);}
}

export class ReflectionMetadataEnum extends ReflectionMetadataItem {
    protected constructor() {super(); this.addClassName("ReflectionMetadataEnum");}
    public static New() {return new ReflectionMetadataEnum();}
}

export class ReflectionMetadataEnumItem extends ReflectionMetadataItem {
    protected constructor() {super(); this.addClassName("ReflectionMetadataEnumItem");}
    public static New() {return new ReflectionMetadataEnumItem();}
}

export class ReflectionMetadataMember extends ReflectionMetadataItem {
    protected constructor() {super(); this.addClassName("ReflectionMetadataMember");}
    public static New() {return new ReflectionMetadataMember();}
}

export class ReflectionMetadataProperties extends Instance {
    protected constructor() {super(); this.addClassName("ReflectionMetadataProperties");}
    public static New() {return new ReflectionMetadataProperties();}
}

export class ReflectionMetadataYieldFunctions extends Instance {
    protected constructor() {super(); this.addClassName("ReflectionMetadataYieldFunctions");}
    public static New() {return new ReflectionMetadataYieldFunctions();}
}

export class ReflectionService extends Instance {
    protected constructor() {super(true); this.addClassName("ReflectionService");}
    public static New() {return new ReflectionService();}
}

export class RemoteCursorService extends Instance {
    protected constructor() {super(true); this.addClassName("RemoteCursorService");}
    public static New() {return new RemoteCursorService();}
}

export class RemoteDebuggerServer extends Instance {
    protected constructor() {super(true); this.addClassName("RemoteDebuggerServer");}
    public static New() {return new RemoteDebuggerServer();}
}

export class RemoteFunction extends Instance {
    protected constructor() {super(); this.addClassName("RemoteFunction");}
    public static New() {return new RemoteFunction();}
}

export class RenderSettings extends Instance {
    protected constructor() {super(true); this.addClassName("RenderSettings");}
    public static New() {return new RenderSettings();}
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
    protected constructor() {super(); this.addClassName("RenderingTest");}
    public static New() {return new RenderingTest();}
    public get CFrame() {return this.GetProp("CFrame", DataType.CFrame);}
    public set CFrame(value) {this.SetProp("CFrame", DataType.CFrame, value);}
    public get ComparisonDiffThreshold() {return this.GetProp("ComparisonDiffThreshold", DataType.Int32);}
    public set ComparisonDiffThreshold(value) {this.SetProp("ComparisonDiffThreshold", DataType.Int32, value);}
    public get ComparisonMethod() {return this.GetProp("ComparisonMethod", DataType.Enum) as RenderingTestComparisonMethod | undefined;}
    public set ComparisonMethod(value) {this.SetProp("ComparisonMethod", DataType.Enum, value);}
    public get ComparisonPsnrThreshold() {return this.GetProp("ComparisonPsnrThreshold", DataType.Float32);}
    public set ComparisonPsnrThreshold(value) {this.SetProp("ComparisonPsnrThreshold", DataType.Float32, value);}
    public get Description() {return this.GetProp("Description", DataType.String);}
    public set Description(value) {this.SetProp("Description", DataType.String, value);}
    public get FieldOfView() {return this.GetProp("FieldOfView", DataType.Float32);}
    public set FieldOfView(value) {this.SetProp("FieldOfView", DataType.Float32, value);}
    public get PerfTest() {return this.GetProp("PerfTest", DataType.Bool);}
    public set PerfTest(value) {this.SetProp("PerfTest", DataType.Bool, value);}
    public get QualityAuto() {return this.GetProp("QualityAuto", DataType.Bool);}
    public set QualityAuto(value) {this.SetProp("QualityAuto", DataType.Bool, value);}
    public get QualityLevel() {return this.GetProp("QualityLevel", DataType.Int32);}
    public set QualityLevel(value) {this.SetProp("QualityLevel", DataType.Int32, value);}
    public get RenderingTestFrameCount() {return this.GetProp("RenderingTestFrameCount", DataType.Int32);}
    public set RenderingTestFrameCount(value) {this.SetProp("RenderingTestFrameCount", DataType.Int32, value);}
    public get ShouldSkip() {return this.GetProp("ShouldSkip", DataType.Bool);}
    public set ShouldSkip(value) {this.SetProp("ShouldSkip", DataType.Bool, value);}
    public get Ticket() {return this.GetProp("Ticket", DataType.String);}
    public set Ticket(value) {this.SetProp("Ticket", DataType.String, value);}
    public get Timeout() {return this.GetProp("Timeout", DataType.Int32);}
    public set Timeout(value) {this.SetProp("Timeout", DataType.Int32, value);}
}

export class ReplicatedFirst extends Instance {
    protected constructor() {super(true); this.addClassName("ReplicatedFirst");}
    public static New() {return new ReplicatedFirst();}
}

export class ReplicatedStorage extends Instance {
    protected constructor() {super(true); this.addClassName("ReplicatedStorage");}
    public static New() {return new ReplicatedStorage();}
}

export class RibbonNotificationService extends Instance {
    protected constructor() {super(true); this.addClassName("RibbonNotificationService");}
    public static New() {return new RibbonNotificationService();}
}

export class RobloxPluginGuiService extends Instance {
    protected constructor() {super(true); this.addClassName("RobloxPluginGuiService");}
    public static New() {return new RobloxPluginGuiService();}
}

export class RobloxReplicatedStorage extends Instance {
    protected constructor() {super(true); this.addClassName("RobloxReplicatedStorage");}
    public static New() {return new RobloxReplicatedStorage();}
}

export class RobloxServerStorage extends Instance {
    protected constructor() {super(true); this.addClassName("RobloxServerStorage");}
    public static New() {return new RobloxServerStorage();}
}

export class RomarkService extends Instance {
    protected constructor() {super(true); this.addClassName("RomarkService");}
    public static New() {return new RomarkService();}
}

export class RotationCurve extends Instance {
    protected constructor() {super(); this.addClassName("RotationCurve");}
    public static New() {return new RotationCurve();}
    public get ValuesAndTimes() {return this.GetProp("ValuesAndTimes", DataType.String);}
    public set ValuesAndTimes(value) {this.SetProp("ValuesAndTimes", DataType.String, value);}
}

export class RtMessagingService extends Instance {
    protected constructor() {super(true); this.addClassName("RtMessagingService");}
    public static New() {return new RtMessagingService();}
}

export class RunService extends Instance {
    protected constructor() {super(true); this.addClassName("RunService");}
    public static New() {return new RunService();}
}

export class RuntimeScriptService extends Instance {
    protected constructor() {super(true); this.addClassName("RuntimeScriptService");}
    public static New() {return new RuntimeScriptService();}
}

export class SafetyService extends Instance {
    protected constructor() {super(true); this.addClassName("SafetyService");}
    public static New() {return new SafetyService();}
    public get IsCaptureModeForReport() {return this.GetProp("IsCaptureModeForReport", DataType.Bool);}
    public set IsCaptureModeForReport(value) {this.SetProp("IsCaptureModeForReport", DataType.Bool, value);}
}

export class ScriptChangeService extends Instance {
    protected constructor() {super(true); this.addClassName("ScriptChangeService");}
    public static New() {return new ScriptChangeService();}
}

export class ScriptCloneWatcher extends Instance {
    protected constructor() {super(true); this.addClassName("ScriptCloneWatcher");}
    public static New() {return new ScriptCloneWatcher();}
}

export class ScriptCloneWatcherHelper extends Instance {
    protected constructor() {super(true); this.addClassName("ScriptCloneWatcherHelper");}
    public static New() {return new ScriptCloneWatcherHelper();}
}

export class ScriptCommitService extends Instance {
    protected constructor() {super(true); this.addClassName("ScriptCommitService");}
    public static New() {return new ScriptCommitService();}
}

export class ScriptContext extends Instance {
    protected constructor() {super(true); this.addClassName("ScriptContext");}
    public static New() {return new ScriptContext();}
}

export class ScriptEditorService extends Instance {
    protected constructor() {super(true); this.addClassName("ScriptEditorService");}
    public static New() {return new ScriptEditorService();}
}

export class ScriptProfilerService extends Instance {
    protected constructor() {super(true); this.addClassName("ScriptProfilerService");}
    public static New() {return new ScriptProfilerService();}
}

export class ScriptRegistrationService extends Instance {
    protected constructor() {super(true); this.addClassName("ScriptRegistrationService");}
    public static New() {return new ScriptRegistrationService();}
}

export class ScriptService extends Instance {
    protected constructor() {super(true); this.addClassName("ScriptService");}
    public static New() {return new ScriptService();}
}

export class Selection extends Instance {
    protected constructor() {super(true); this.addClassName("Selection");}
    public static New() {return new Selection();}
}

export class SelectionHighlightManager extends Instance {
    protected constructor() {super(true); this.addClassName("SelectionHighlightManager");}
    public static New() {return new SelectionHighlightManager();}
}

export abstract class SensorBase extends Instance {
    protected constructor() {super(); this.addClassName("SensorBase");}
    public get UpdateType() {return this.GetProp("UpdateType", DataType.Enum) as SensorUpdateType | undefined;}
    public set UpdateType(value) {this.SetProp("UpdateType", DataType.Enum, value);}
}

export class BuoyancySensor extends SensorBase {
    protected constructor() {super(); this.addClassName("BuoyancySensor");}
    public static New() {return new BuoyancySensor();}
    public get FullySubmerged() {return this.GetProp("FullySubmerged", DataType.Bool);}
    public set FullySubmerged(value) {this.SetProp("FullySubmerged", DataType.Bool, value);}
    public get TouchingSurface() {return this.GetProp("TouchingSurface", DataType.Bool);}
    public set TouchingSurface(value) {this.SetProp("TouchingSurface", DataType.Bool, value);}
}

export abstract class ControllerSensor extends SensorBase {
    protected constructor() {super(); this.addClassName("ControllerSensor");}
}

export class ControllerPartSensor extends ControllerSensor {
    protected constructor() {super(); this.addClassName("ControllerPartSensor");}
    public static New() {return new ControllerPartSensor();}
    public get HitFrame() {return this.GetProp("HitFrame", DataType.CFrame);}
    public set HitFrame(value) {this.SetProp("HitFrame", DataType.CFrame, value);}
    public get HitNormal() {return this.GetProp("HitNormal", DataType.Vector3);}
    public set HitNormal(value) {this.SetProp("HitNormal", DataType.Vector3, value);}
    public get SearchDistance() {return this.GetProp("SearchDistance", DataType.Float32);}
    public set SearchDistance(value) {this.SetProp("SearchDistance", DataType.Float32, value);}
    public get SensedPart() {return this.GetProp("SensedPart", DataType.Referent) as BasePart | undefined;}
    public set SensedPart(value) {this.SetProp("SensedPart", DataType.Referent, value);}
    public get SensorMode() {return this.GetProp("SensorMode", DataType.Enum) as SensorMode | undefined;}
    public set SensorMode(value) {this.SetProp("SensorMode", DataType.Enum, value);}
}

export class ServerScriptService extends Instance {
    protected constructor() {super(true); this.addClassName("ServerScriptService");}
    public static New() {return new ServerScriptService();}
    public get LoadStringEnabled() {return this.GetProp("LoadStringEnabled", DataType.Bool);}
    public set LoadStringEnabled(value) {this.SetProp("LoadStringEnabled", DataType.Bool, value);}
}

export class ServerStorage extends Instance {
    protected constructor() {super(true); this.addClassName("ServerStorage");}
    public static New() {return new ServerStorage();}
}

export class ServiceVisibilityService extends Instance {
    protected constructor() {super(true); this.addClassName("ServiceVisibilityService");}
    public static New() {return new ServiceVisibilityService();}
    public get HiddenServices() {return this.GetProp("HiddenServices", DataType.String);}
    public set HiddenServices(value) {this.SetProp("HiddenServices", DataType.String, value);}
    public get VisibleServices() {return this.GetProp("VisibleServices", DataType.String);}
    public set VisibleServices(value) {this.SetProp("VisibleServices", DataType.String, value);}
}

export class SessionService extends Instance {
    protected constructor() {super(true); this.addClassName("SessionService");}
    public static New() {return new SessionService();}
}

export class SharedTableRegistry extends Instance {
    protected constructor() {super(true); this.addClassName("SharedTableRegistry");}
    public static New() {return new SharedTableRegistry();}
}

export class ShorelineUpgraderService extends Instance {
    protected constructor() {super(true); this.addClassName("ShorelineUpgraderService");}
    public static New() {return new ShorelineUpgraderService();}
}

export class Sky extends Instance {
    protected constructor() {super(); this.addClassName("Sky");}
    public static New() {return new Sky();}
    public get CelestialBodiesShown() {return this.GetProp("CelestialBodiesShown", DataType.Bool);}
    public set CelestialBodiesShown(value) {this.SetProp("CelestialBodiesShown", DataType.Bool, value);}
    public get MoonAngularSize() {return this.GetProp("MoonAngularSize", DataType.Float32);}
    public set MoonAngularSize(value) {this.SetProp("MoonAngularSize", DataType.Float32, value);}
    public get MoonTextureId() {return this.GetProp("MoonTextureId", DataType.String);}
    public set MoonTextureId(value) {this.SetProp("MoonTextureId", DataType.String, value);}
    public get SkyboxBk() {return this.GetProp("SkyboxBk", DataType.String);}
    public set SkyboxBk(value) {this.SetProp("SkyboxBk", DataType.String, value);}
    public get SkyboxDn() {return this.GetProp("SkyboxDn", DataType.String);}
    public set SkyboxDn(value) {this.SetProp("SkyboxDn", DataType.String, value);}
    public get SkyboxFt() {return this.GetProp("SkyboxFt", DataType.String);}
    public set SkyboxFt(value) {this.SetProp("SkyboxFt", DataType.String, value);}
    public get SkyboxLf() {return this.GetProp("SkyboxLf", DataType.String);}
    public set SkyboxLf(value) {this.SetProp("SkyboxLf", DataType.String, value);}
    public get SkyboxRt() {return this.GetProp("SkyboxRt", DataType.String);}
    public set SkyboxRt(value) {this.SetProp("SkyboxRt", DataType.String, value);}
    public get SkyboxUp() {return this.GetProp("SkyboxUp", DataType.String);}
    public set SkyboxUp(value) {this.SetProp("SkyboxUp", DataType.String, value);}
    public get StarCount() {return this.GetProp("StarCount", DataType.Int32);}
    public set StarCount(value) {this.SetProp("StarCount", DataType.Int32, value);}
    public get SunAngularSize() {return this.GetProp("SunAngularSize", DataType.Float32);}
    public set SunAngularSize(value) {this.SetProp("SunAngularSize", DataType.Float32, value);}
    public get SunTextureId() {return this.GetProp("SunTextureId", DataType.String);}
    public set SunTextureId(value) {this.SetProp("SunTextureId", DataType.String, value);}
}

export class Smoke extends Instance {
    protected constructor() {super(); this.addClassName("Smoke");}
    public static New() {return new Smoke();}
    public get Color() {return this.GetProp("Color", DataType.Color3);}
    public set Color(value) {this.SetProp("Color", DataType.Color3, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool);}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get TimeScale() {return this.GetProp("TimeScale", DataType.Float32);}
    public set TimeScale(value) {this.SetProp("TimeScale", DataType.Float32, value);}
    public get Opacityxml() {return this.GetProp("opacity_xml", DataType.Float32);}
    public set Opacityxml(value) {this.SetProp("opacity_xml", DataType.Float32, value);}
    public get RiseVelocityxml() {return this.GetProp("riseVelocity_xml", DataType.Float32);}
    public set RiseVelocityxml(value) {this.SetProp("riseVelocity_xml", DataType.Float32, value);}
    public get Sizexml() {return this.GetProp("size_xml", DataType.Float32);}
    public set Sizexml(value) {this.SetProp("size_xml", DataType.Float32, value);}
}

export class SmoothVoxelsUpgraderService extends Instance {
    protected constructor() {super(true); this.addClassName("SmoothVoxelsUpgraderService");}
    public static New() {return new SmoothVoxelsUpgraderService();}
}

export class SnippetService extends Instance {
    protected constructor() {super(true); this.addClassName("SnippetService");}
    public static New() {return new SnippetService();}
}

export class SocialService extends Instance {
    protected constructor() {super(true); this.addClassName("SocialService");}
    public static New() {return new SocialService();}
}

export class Sound extends Instance {
    protected constructor() {super(); this.addClassName("Sound");}
    public static New() {return new Sound();}
    /**@deprecated Deprecated by Roblox*/
    public get EmitterSize() {return this.GetProp("EmitterSize", DataType.Float32);}
    /**@deprecated Deprecated by Roblox*/
    public set EmitterSize(value) {this.SetProp("EmitterSize", DataType.Float32, value);}
    public get LoopRegion() {return this.GetProp("LoopRegion", DataType.NumberRange);}
    public set LoopRegion(value) {this.SetProp("LoopRegion", DataType.NumberRange, value);}
    public get Looped() {return this.GetProp("Looped", DataType.Bool);}
    public set Looped(value) {this.SetProp("Looped", DataType.Bool, value);}
    /**@deprecated Deprecated by Roblox*/
    public get MinDistance() {return this.GetProp("MinDistance", DataType.Float32);}
    /**@deprecated Deprecated by Roblox*/
    public set MinDistance(value) {this.SetProp("MinDistance", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get Pitch() {return this.GetProp("Pitch", DataType.Float32);}
    /**@deprecated Deprecated by Roblox*/
    public set Pitch(value) {this.SetProp("Pitch", DataType.Float32, value);}
    public get PlayOnRemove() {return this.GetProp("PlayOnRemove", DataType.Bool);}
    public set PlayOnRemove(value) {this.SetProp("PlayOnRemove", DataType.Bool, value);}
    public get PlaybackRegion() {return this.GetProp("PlaybackRegion", DataType.NumberRange);}
    public set PlaybackRegion(value) {this.SetProp("PlaybackRegion", DataType.NumberRange, value);}
    public get PlaybackRegionsEnabled() {return this.GetProp("PlaybackRegionsEnabled", DataType.Bool);}
    public set PlaybackRegionsEnabled(value) {this.SetProp("PlaybackRegionsEnabled", DataType.Bool, value);}
    public get PlaybackSpeed() {return this.GetProp("PlaybackSpeed", DataType.Float32);}
    public set PlaybackSpeed(value) {this.SetProp("PlaybackSpeed", DataType.Float32, value);}
    public get Playing() {return this.GetProp("Playing", DataType.Bool);}
    public set Playing(value) {this.SetProp("Playing", DataType.Bool, value);}
    public get RollOffMode() {return this.GetProp("RollOffMode", DataType.Enum) as RollOffMode | undefined;}
    public set RollOffMode(value) {this.SetProp("RollOffMode", DataType.Enum, value);}
    public get SoundGroup() {return this.GetProp("SoundGroup", DataType.Referent) as SoundGroup | undefined;}
    public set SoundGroup(value) {this.SetProp("SoundGroup", DataType.Referent, value);}
    public get SoundId() {return this.GetProp("SoundId", DataType.String);}
    public set SoundId(value) {this.SetProp("SoundId", DataType.String, value);}
    public get TimePosition() {return this.GetProp("TimePosition", DataType.Float64);}
    public set TimePosition(value) {this.SetProp("TimePosition", DataType.Float64, value);}
    public get Volume() {return this.GetProp("Volume", DataType.Float32);}
    public set Volume(value) {this.SetProp("Volume", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get XmlReadMaxDistance3() {return this.GetProp("xmlRead_MaxDistance_3", DataType.Float32);}
    /**@deprecated Deprecated by Roblox*/
    public set XmlReadMaxDistance3(value) {this.SetProp("xmlRead_MaxDistance_3", DataType.Float32, value);}
    /**@deprecated Deprecated by Roblox*/
    public get XmlReadMinDistance3() {return this.GetProp("xmlRead_MinDistance_3", DataType.Float32);}
    /**@deprecated Deprecated by Roblox*/
    public set XmlReadMinDistance3(value) {this.SetProp("xmlRead_MinDistance_3", DataType.Float32, value);}
}

export abstract class SoundEffect extends Instance {
    protected constructor() {super(); this.addClassName("SoundEffect");}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool);}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get Priority() {return this.GetProp("Priority", DataType.Int32);}
    public set Priority(value) {this.SetProp("Priority", DataType.Int32, value);}
}

export class ChorusSoundEffect extends SoundEffect {
    protected constructor() {super(); this.addClassName("ChorusSoundEffect");}
    public static New() {return new ChorusSoundEffect();}
    public get Depth() {return this.GetProp("Depth", DataType.Float32);}
    public set Depth(value) {this.SetProp("Depth", DataType.Float32, value);}
    public get Mix() {return this.GetProp("Mix", DataType.Float32);}
    public set Mix(value) {this.SetProp("Mix", DataType.Float32, value);}
    public get Rate() {return this.GetProp("Rate", DataType.Float32);}
    public set Rate(value) {this.SetProp("Rate", DataType.Float32, value);}
}

export class CompressorSoundEffect extends SoundEffect {
    protected constructor() {super(); this.addClassName("CompressorSoundEffect");}
    public static New() {return new CompressorSoundEffect();}
    public get Attack() {return this.GetProp("Attack", DataType.Float32);}
    public set Attack(value) {this.SetProp("Attack", DataType.Float32, value);}
    public get GainMakeup() {return this.GetProp("GainMakeup", DataType.Float32);}
    public set GainMakeup(value) {this.SetProp("GainMakeup", DataType.Float32, value);}
    public get Ratio() {return this.GetProp("Ratio", DataType.Float32);}
    public set Ratio(value) {this.SetProp("Ratio", DataType.Float32, value);}
    public get Release() {return this.GetProp("Release", DataType.Float32);}
    public set Release(value) {this.SetProp("Release", DataType.Float32, value);}
    public get SideChain() {return this.GetProp("SideChain", DataType.Referent) as Instance | undefined;}
    public set SideChain(value) {this.SetProp("SideChain", DataType.Referent, value);}
    public get Threshold() {return this.GetProp("Threshold", DataType.Float32);}
    public set Threshold(value) {this.SetProp("Threshold", DataType.Float32, value);}
}

export class DistortionSoundEffect extends SoundEffect {
    protected constructor() {super(); this.addClassName("DistortionSoundEffect");}
    public static New() {return new DistortionSoundEffect();}
    public get Level() {return this.GetProp("Level", DataType.Float32);}
    public set Level(value) {this.SetProp("Level", DataType.Float32, value);}
}

export class EchoSoundEffect extends SoundEffect {
    protected constructor() {super(); this.addClassName("EchoSoundEffect");}
    public static New() {return new EchoSoundEffect();}
    public get Delay() {return this.GetProp("Delay", DataType.Float32);}
    public set Delay(value) {this.SetProp("Delay", DataType.Float32, value);}
    public get DryLevel() {return this.GetProp("DryLevel", DataType.Float32);}
    public set DryLevel(value) {this.SetProp("DryLevel", DataType.Float32, value);}
    public get Feedback() {return this.GetProp("Feedback", DataType.Float32);}
    public set Feedback(value) {this.SetProp("Feedback", DataType.Float32, value);}
    public get WetLevel() {return this.GetProp("WetLevel", DataType.Float32);}
    public set WetLevel(value) {this.SetProp("WetLevel", DataType.Float32, value);}
}

export class EqualizerSoundEffect extends SoundEffect {
    protected constructor() {super(); this.addClassName("EqualizerSoundEffect");}
    public static New() {return new EqualizerSoundEffect();}
    public get HighGain() {return this.GetProp("HighGain", DataType.Float32);}
    public set HighGain(value) {this.SetProp("HighGain", DataType.Float32, value);}
    public get LowGain() {return this.GetProp("LowGain", DataType.Float32);}
    public set LowGain(value) {this.SetProp("LowGain", DataType.Float32, value);}
    public get MidGain() {return this.GetProp("MidGain", DataType.Float32);}
    public set MidGain(value) {this.SetProp("MidGain", DataType.Float32, value);}
}

export class FlangeSoundEffect extends SoundEffect {
    protected constructor() {super(); this.addClassName("FlangeSoundEffect");}
    public static New() {return new FlangeSoundEffect();}
    public get Depth() {return this.GetProp("Depth", DataType.Float32);}
    public set Depth(value) {this.SetProp("Depth", DataType.Float32, value);}
    public get Mix() {return this.GetProp("Mix", DataType.Float32);}
    public set Mix(value) {this.SetProp("Mix", DataType.Float32, value);}
    public get Rate() {return this.GetProp("Rate", DataType.Float32);}
    public set Rate(value) {this.SetProp("Rate", DataType.Float32, value);}
}

export class PitchShiftSoundEffect extends SoundEffect {
    protected constructor() {super(); this.addClassName("PitchShiftSoundEffect");}
    public static New() {return new PitchShiftSoundEffect();}
    public get Octave() {return this.GetProp("Octave", DataType.Float32);}
    public set Octave(value) {this.SetProp("Octave", DataType.Float32, value);}
}

export class ReverbSoundEffect extends SoundEffect {
    protected constructor() {super(); this.addClassName("ReverbSoundEffect");}
    public static New() {return new ReverbSoundEffect();}
    public get DecayTime() {return this.GetProp("DecayTime", DataType.Float32);}
    public set DecayTime(value) {this.SetProp("DecayTime", DataType.Float32, value);}
    public get Density() {return this.GetProp("Density", DataType.Float32);}
    public set Density(value) {this.SetProp("Density", DataType.Float32, value);}
    public get Diffusion() {return this.GetProp("Diffusion", DataType.Float32);}
    public set Diffusion(value) {this.SetProp("Diffusion", DataType.Float32, value);}
    public get DryLevel() {return this.GetProp("DryLevel", DataType.Float32);}
    public set DryLevel(value) {this.SetProp("DryLevel", DataType.Float32, value);}
    public get WetLevel() {return this.GetProp("WetLevel", DataType.Float32);}
    public set WetLevel(value) {this.SetProp("WetLevel", DataType.Float32, value);}
}

export class TremoloSoundEffect extends SoundEffect {
    protected constructor() {super(); this.addClassName("TremoloSoundEffect");}
    public static New() {return new TremoloSoundEffect();}
    public get Depth() {return this.GetProp("Depth", DataType.Float32);}
    public set Depth(value) {this.SetProp("Depth", DataType.Float32, value);}
    public get Duty() {return this.GetProp("Duty", DataType.Float32);}
    public set Duty(value) {this.SetProp("Duty", DataType.Float32, value);}
    public get Frequency() {return this.GetProp("Frequency", DataType.Float32);}
    public set Frequency(value) {this.SetProp("Frequency", DataType.Float32, value);}
}

export class SoundGroup extends Instance {
    protected constructor() {super(); this.addClassName("SoundGroup");}
    public static New() {return new SoundGroup();}
    public get Volume() {return this.GetProp("Volume", DataType.Float32);}
    public set Volume(value) {this.SetProp("Volume", DataType.Float32, value);}
}

export class SoundService extends Instance {
    protected constructor() {super(true); this.addClassName("SoundService");}
    public static New() {return new SoundService();}
    public get AmbientReverb() {return this.GetProp("AmbientReverb", DataType.Enum) as ReverbType | undefined;}
    public set AmbientReverb(value) {this.SetProp("AmbientReverb", DataType.Enum, value);}
    public get DistanceFactor() {return this.GetProp("DistanceFactor", DataType.Float32);}
    public set DistanceFactor(value) {this.SetProp("DistanceFactor", DataType.Float32, value);}
    public get DopplerScale() {return this.GetProp("DopplerScale", DataType.Float32);}
    public set DopplerScale(value) {this.SetProp("DopplerScale", DataType.Float32, value);}
    public get RespectFilteringEnabled() {return this.GetProp("RespectFilteringEnabled", DataType.Bool);}
    public set RespectFilteringEnabled(value) {this.SetProp("RespectFilteringEnabled", DataType.Bool, value);}
    public get RolloffScale() {return this.GetProp("RolloffScale", DataType.Float32);}
    public set RolloffScale(value) {this.SetProp("RolloffScale", DataType.Float32, value);}
    public get VolumetricAudio() {return this.GetProp("VolumetricAudio", DataType.Enum) as VolumetricAudio | undefined;}
    public set VolumetricAudio(value) {this.SetProp("VolumetricAudio", DataType.Enum, value);}
}

export class Sparkles extends Instance {
    protected constructor() {super(); this.addClassName("Sparkles");}
    public static New() {return new Sparkles();}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool);}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get SparkleColor() {return this.GetProp("SparkleColor", DataType.Color3);}
    public set SparkleColor(value) {this.SetProp("SparkleColor", DataType.Color3, value);}
    public get TimeScale() {return this.GetProp("TimeScale", DataType.Float32);}
    public set TimeScale(value) {this.SetProp("TimeScale", DataType.Float32, value);}
}

export class SpawnerService extends Instance {
    protected constructor() {super(true); this.addClassName("SpawnerService");}
    public static New() {return new SpawnerService();}
}

export class StandalonePluginScripts extends Instance {
    protected constructor() {super(); this.addClassName("StandalonePluginScripts");}
    public static New() {return new StandalonePluginScripts();}
}

export class StarterGear extends Instance {
    protected constructor() {super(); this.addClassName("StarterGear");}
    public static New() {return new StarterGear();}
}

export class StarterPack extends Instance {
    protected constructor() {super(true); this.addClassName("StarterPack");}
    public static New() {return new StarterPack();}
}

export class StarterPlayer extends Instance {
    protected constructor() {super(true); this.addClassName("StarterPlayer");}
    public static New() {return new StarterPlayer();}
    public get AllowCustomAnimations() {return this.GetProp("AllowCustomAnimations", DataType.Bool);}
    public set AllowCustomAnimations(value) {this.SetProp("AllowCustomAnimations", DataType.Bool, value);}
    public get AutoJumpEnabled() {return this.GetProp("AutoJumpEnabled", DataType.Bool);}
    public set AutoJumpEnabled(value) {this.SetProp("AutoJumpEnabled", DataType.Bool, value);}
    public get AvatarJointUpgradeSerialized() {return this.GetProp("AvatarJointUpgrade_Serialized", DataType.Enum) as AvatarJointUpgrade | undefined;}
    public set AvatarJointUpgradeSerialized(value) {this.SetProp("AvatarJointUpgrade_Serialized", DataType.Enum, value);}
    public get CameraMaxZoomDistance() {return this.GetProp("CameraMaxZoomDistance", DataType.Float32);}
    public set CameraMaxZoomDistance(value) {this.SetProp("CameraMaxZoomDistance", DataType.Float32, value);}
    public get CameraMinZoomDistance() {return this.GetProp("CameraMinZoomDistance", DataType.Float32);}
    public set CameraMinZoomDistance(value) {this.SetProp("CameraMinZoomDistance", DataType.Float32, value);}
    public get CameraMode() {return this.GetProp("CameraMode", DataType.Enum) as CameraMode | undefined;}
    public set CameraMode(value) {this.SetProp("CameraMode", DataType.Enum, value);}
    public get CharacterJumpHeight() {return this.GetProp("CharacterJumpHeight", DataType.Float32);}
    public set CharacterJumpHeight(value) {this.SetProp("CharacterJumpHeight", DataType.Float32, value);}
    public get CharacterJumpPower() {return this.GetProp("CharacterJumpPower", DataType.Float32);}
    public set CharacterJumpPower(value) {this.SetProp("CharacterJumpPower", DataType.Float32, value);}
    public get CharacterMaxSlopeAngle() {return this.GetProp("CharacterMaxSlopeAngle", DataType.Float32);}
    public set CharacterMaxSlopeAngle(value) {this.SetProp("CharacterMaxSlopeAngle", DataType.Float32, value);}
    public get CharacterUseJumpPower() {return this.GetProp("CharacterUseJumpPower", DataType.Bool);}
    public set CharacterUseJumpPower(value) {this.SetProp("CharacterUseJumpPower", DataType.Bool, value);}
    public get CharacterWalkSpeed() {return this.GetProp("CharacterWalkSpeed", DataType.Float32);}
    public set CharacterWalkSpeed(value) {this.SetProp("CharacterWalkSpeed", DataType.Float32, value);}
    public get DevCameraOcclusionMode() {return this.GetProp("DevCameraOcclusionMode", DataType.Enum) as DevCameraOcclusionMode | undefined;}
    public set DevCameraOcclusionMode(value) {this.SetProp("DevCameraOcclusionMode", DataType.Enum, value);}
    public get DevComputerCameraMovementMode() {return this.GetProp("DevComputerCameraMovementMode", DataType.Enum) as DevComputerCameraMovementMode | undefined;}
    public set DevComputerCameraMovementMode(value) {this.SetProp("DevComputerCameraMovementMode", DataType.Enum, value);}
    public get DevComputerMovementMode() {return this.GetProp("DevComputerMovementMode", DataType.Enum) as DevComputerMovementMode | undefined;}
    public set DevComputerMovementMode(value) {this.SetProp("DevComputerMovementMode", DataType.Enum, value);}
    public get DevTouchCameraMovementMode() {return this.GetProp("DevTouchCameraMovementMode", DataType.Enum) as DevTouchCameraMovementMode | undefined;}
    public set DevTouchCameraMovementMode(value) {this.SetProp("DevTouchCameraMovementMode", DataType.Enum, value);}
    public get DevTouchMovementMode() {return this.GetProp("DevTouchMovementMode", DataType.Enum) as DevTouchMovementMode | undefined;}
    public set DevTouchMovementMode(value) {this.SetProp("DevTouchMovementMode", DataType.Enum, value);}
    public get EnableDynamicHeads() {return this.GetProp("EnableDynamicHeads", DataType.Enum) as LoadDynamicHeads | undefined;}
    public set EnableDynamicHeads(value) {this.SetProp("EnableDynamicHeads", DataType.Enum, value);}
    public get EnableMouseLockOption() {return this.GetProp("EnableMouseLockOption", DataType.Bool);}
    public set EnableMouseLockOption(value) {this.SetProp("EnableMouseLockOption", DataType.Bool, value);}
    public get GameSettingsAssetIDFace() {return this.GetProp("GameSettingsAssetIDFace", DataType.Int64);}
    public set GameSettingsAssetIDFace(value) {this.SetProp("GameSettingsAssetIDFace", DataType.Int64, value);}
    public get GameSettingsAssetIDHead() {return this.GetProp("GameSettingsAssetIDHead", DataType.Int64);}
    public set GameSettingsAssetIDHead(value) {this.SetProp("GameSettingsAssetIDHead", DataType.Int64, value);}
    public get GameSettingsAssetIDLeftArm() {return this.GetProp("GameSettingsAssetIDLeftArm", DataType.Int64);}
    public set GameSettingsAssetIDLeftArm(value) {this.SetProp("GameSettingsAssetIDLeftArm", DataType.Int64, value);}
    public get GameSettingsAssetIDLeftLeg() {return this.GetProp("GameSettingsAssetIDLeftLeg", DataType.Int64);}
    public set GameSettingsAssetIDLeftLeg(value) {this.SetProp("GameSettingsAssetIDLeftLeg", DataType.Int64, value);}
    public get GameSettingsAssetIDPants() {return this.GetProp("GameSettingsAssetIDPants", DataType.Int64);}
    public set GameSettingsAssetIDPants(value) {this.SetProp("GameSettingsAssetIDPants", DataType.Int64, value);}
    public get GameSettingsAssetIDRightArm() {return this.GetProp("GameSettingsAssetIDRightArm", DataType.Int64);}
    public set GameSettingsAssetIDRightArm(value) {this.SetProp("GameSettingsAssetIDRightArm", DataType.Int64, value);}
    public get GameSettingsAssetIDRightLeg() {return this.GetProp("GameSettingsAssetIDRightLeg", DataType.Int64);}
    public set GameSettingsAssetIDRightLeg(value) {this.SetProp("GameSettingsAssetIDRightLeg", DataType.Int64, value);}
    public get GameSettingsAssetIDShirt() {return this.GetProp("GameSettingsAssetIDShirt", DataType.Int64);}
    public set GameSettingsAssetIDShirt(value) {this.SetProp("GameSettingsAssetIDShirt", DataType.Int64, value);}
    public get GameSettingsAssetIDTeeShirt() {return this.GetProp("GameSettingsAssetIDTeeShirt", DataType.Int64);}
    public set GameSettingsAssetIDTeeShirt(value) {this.SetProp("GameSettingsAssetIDTeeShirt", DataType.Int64, value);}
    public get GameSettingsAssetIDTorso() {return this.GetProp("GameSettingsAssetIDTorso", DataType.Int64);}
    public set GameSettingsAssetIDTorso(value) {this.SetProp("GameSettingsAssetIDTorso", DataType.Int64, value);}
    public get GameSettingsAvatar() {return this.GetProp("GameSettingsAvatar", DataType.Enum) as GameAvatarType | undefined;}
    public set GameSettingsAvatar(value) {this.SetProp("GameSettingsAvatar", DataType.Enum, value);}
    public get GameSettingsR15Collision() {return this.GetProp("GameSettingsR15Collision", DataType.Enum) as R15CollisionType | undefined;}
    public set GameSettingsR15Collision(value) {this.SetProp("GameSettingsR15Collision", DataType.Enum, value);}
    public get GameSettingsScaleRangeBodyType() {return this.GetProp("GameSettingsScaleRangeBodyType", DataType.NumberRange);}
    public set GameSettingsScaleRangeBodyType(value) {this.SetProp("GameSettingsScaleRangeBodyType", DataType.NumberRange, value);}
    public get GameSettingsScaleRangeHead() {return this.GetProp("GameSettingsScaleRangeHead", DataType.NumberRange);}
    public set GameSettingsScaleRangeHead(value) {this.SetProp("GameSettingsScaleRangeHead", DataType.NumberRange, value);}
    public get GameSettingsScaleRangeHeight() {return this.GetProp("GameSettingsScaleRangeHeight", DataType.NumberRange);}
    public set GameSettingsScaleRangeHeight(value) {this.SetProp("GameSettingsScaleRangeHeight", DataType.NumberRange, value);}
    public get GameSettingsScaleRangeProportion() {return this.GetProp("GameSettingsScaleRangeProportion", DataType.NumberRange);}
    public set GameSettingsScaleRangeProportion(value) {this.SetProp("GameSettingsScaleRangeProportion", DataType.NumberRange, value);}
    public get GameSettingsScaleRangeWidth() {return this.GetProp("GameSettingsScaleRangeWidth", DataType.NumberRange);}
    public set GameSettingsScaleRangeWidth(value) {this.SetProp("GameSettingsScaleRangeWidth", DataType.NumberRange, value);}
    public get HealthDisplayDistance() {return this.GetProp("HealthDisplayDistance", DataType.Float32);}
    public set HealthDisplayDistance(value) {this.SetProp("HealthDisplayDistance", DataType.Float32, value);}
    public get LoadCharacterAppearance() {return this.GetProp("LoadCharacterAppearance", DataType.Bool);}
    public set LoadCharacterAppearance(value) {this.SetProp("LoadCharacterAppearance", DataType.Bool, value);}
    public get LoadCharacterLayeredClothing() {return this.GetProp("LoadCharacterLayeredClothing", DataType.Enum) as LoadCharacterLayeredClothing | undefined;}
    public set LoadCharacterLayeredClothing(value) {this.SetProp("LoadCharacterLayeredClothing", DataType.Enum, value);}
    public get LuaCharacterController() {return this.GetProp("LuaCharacterController", DataType.Enum) as CharacterControlMode | undefined;}
    public set LuaCharacterController(value) {this.SetProp("LuaCharacterController", DataType.Enum, value);}
    public get NameDisplayDistance() {return this.GetProp("NameDisplayDistance", DataType.Float32);}
    public set NameDisplayDistance(value) {this.SetProp("NameDisplayDistance", DataType.Float32, value);}
    public get UserEmotesEnabled() {return this.GetProp("UserEmotesEnabled", DataType.Bool);}
    public set UserEmotesEnabled(value) {this.SetProp("UserEmotesEnabled", DataType.Bool, value);}
}

export class StarterPlayerScripts extends Instance {
    protected constructor() {super(); this.addClassName("StarterPlayerScripts");}
    public static New() {return new StarterPlayerScripts();}
}

export class StarterCharacterScripts extends StarterPlayerScripts {
    protected constructor() {super(); this.addClassName("StarterCharacterScripts");}
    public static New() {return new StarterCharacterScripts();}
}

export class StartupMessageService extends Instance {
    protected constructor() {super(true); this.addClassName("StartupMessageService");}
    public static New() {return new StartupMessageService();}
}

export class Stats extends Instance {
    protected constructor() {super(true); this.addClassName("Stats");}
    public static New() {return new Stats();}
}

export class StopWatchReporter extends Instance {
    protected constructor() {super(true); this.addClassName("StopWatchReporter");}
    public static New() {return new StopWatchReporter();}
}

export class StreamingService extends Instance {
    protected constructor() {super(true); this.addClassName("StreamingService");}
    public static New() {return new StreamingService();}
}

export class StudioAssetService extends Instance {
    protected constructor() {super(true); this.addClassName("StudioAssetService");}
    public static New() {return new StudioAssetService();}
}

export class StudioAttachment extends Instance {
    protected constructor() {super(); this.addClassName("StudioAttachment");}
    public static New() {return new StudioAttachment();}
    public get AutoHideParent() {return this.GetProp("AutoHideParent", DataType.Bool);}
    public set AutoHideParent(value) {this.SetProp("AutoHideParent", DataType.Bool, value);}
    public get IsArrowVisible() {return this.GetProp("IsArrowVisible", DataType.Bool);}
    public set IsArrowVisible(value) {this.SetProp("IsArrowVisible", DataType.Bool, value);}
    public get Offset() {return this.GetProp("Offset", DataType.Vector2);}
    public set Offset(value) {this.SetProp("Offset", DataType.Vector2, value);}
    public get SourceAnchorPoint() {return this.GetProp("SourceAnchorPoint", DataType.Vector2);}
    public set SourceAnchorPoint(value) {this.SetProp("SourceAnchorPoint", DataType.Vector2, value);}
    public get TargetAnchorPoint() {return this.GetProp("TargetAnchorPoint", DataType.Vector2);}
    public set TargetAnchorPoint(value) {this.SetProp("TargetAnchorPoint", DataType.Vector2, value);}
}

export class StudioCallout extends Instance {
    protected constructor() {super(); this.addClassName("StudioCallout");}
    public static New() {return new StudioCallout();}
}

export class StudioData extends Instance {
    protected constructor() {super(true); this.addClassName("StudioData");}
    public static New() {return new StudioData();}
    public get EnableScriptCollabByDefaultOnLoad() {return this.GetProp("EnableScriptCollabByDefaultOnLoad", DataType.Bool);}
    public set EnableScriptCollabByDefaultOnLoad(value) {this.SetProp("EnableScriptCollabByDefaultOnLoad", DataType.Bool, value);}
}

export class StudioDeviceEmulatorService extends Instance {
    protected constructor() {super(true); this.addClassName("StudioDeviceEmulatorService");}
    public static New() {return new StudioDeviceEmulatorService();}
}

export class StudioPublishService extends Instance {
    protected constructor() {super(true); this.addClassName("StudioPublishService");}
    public static New() {return new StudioPublishService();}
    public get PublishLocked() {return this.GetProp("PublishLocked", DataType.Bool);}
    public set PublishLocked(value) {this.SetProp("PublishLocked", DataType.Bool, value);}
}

export class StudioScriptDebugEventListener extends Instance {
    protected constructor() {super(true); this.addClassName("StudioScriptDebugEventListener");}
    public static New() {return new StudioScriptDebugEventListener();}
}

export class StudioSdkService extends Instance {
    protected constructor() {super(true); this.addClassName("StudioSdkService");}
    public static New() {return new StudioSdkService();}
}

export class StudioService extends Instance {
    protected constructor() {super(true); this.addClassName("StudioService");}
    public static New() {return new StudioService();}
}

export class StudioWidgetsService extends Instance {
    protected constructor() {super(true); this.addClassName("StudioWidgetsService");}
    public static New() {return new StudioWidgetsService();}
}

export abstract class StyleBase extends Instance {
    protected constructor() {super(); this.addClassName("StyleBase");}
}

export class StyleRule extends StyleBase {
    protected constructor() {super(); this.addClassName("StyleRule");}
    public static New() {return new StyleRule();}
    public get Index() {return this.GetProp("Index", DataType.Int32);}
    public set Index(value) {this.SetProp("Index", DataType.Int32, value);}
    public get PropertiesSerialize() {return this.GetProp("PropertiesSerialize", DataType.String);}
    public set PropertiesSerialize(value) {this.SetProp("PropertiesSerialize", DataType.String, value);}
    public get Selector() {return this.GetProp("Selector", DataType.String);}
    public set Selector(value) {this.SetProp("Selector", DataType.String, value);}
}

export class StyleSheet extends StyleBase {
    protected constructor() {super(); this.addClassName("StyleSheet");}
    public static New() {return new StyleSheet();}
}

export class StyleDerive extends Instance {
    protected constructor() {super(); this.addClassName("StyleDerive");}
    public static New() {return new StyleDerive();}
    public get Index() {return this.GetProp("Index", DataType.Int32);}
    public set Index(value) {this.SetProp("Index", DataType.Int32, value);}
    public get StyleSheet() {return this.GetProp("StyleSheet", DataType.Referent) as StyleSheet | undefined;}
    public set StyleSheet(value) {this.SetProp("StyleSheet", DataType.Referent, value);}
}

export class StyleLink extends Instance {
    protected constructor() {super(); this.addClassName("StyleLink");}
    public static New() {return new StyleLink();}
    public get StyleSheet() {return this.GetProp("StyleSheet", DataType.Referent) as StyleSheet | undefined;}
    public set StyleSheet(value) {this.SetProp("StyleSheet", DataType.Referent, value);}
}

export class StylingService extends Instance {
    protected constructor() {super(true); this.addClassName("StylingService");}
    public static New() {return new StylingService();}
}

export class SurfaceAppearance extends Instance {
    protected constructor() {super(); this.addClassName("SurfaceAppearance");}
    public static New() {return new SurfaceAppearance();}
    public get AlphaMode() {return this.GetProp("AlphaMode", DataType.Enum) as AlphaMode | undefined;}
    public set AlphaMode(value) {this.SetProp("AlphaMode", DataType.Enum, value);}
    public get ColorMap() {return this.GetProp("ColorMap", DataType.String);}
    public set ColorMap(value) {this.SetProp("ColorMap", DataType.String, value);}
    public get MetalnessMap() {return this.GetProp("MetalnessMap", DataType.String);}
    public set MetalnessMap(value) {this.SetProp("MetalnessMap", DataType.String, value);}
    public get NormalMap() {return this.GetProp("NormalMap", DataType.String);}
    public set NormalMap(value) {this.SetProp("NormalMap", DataType.String, value);}
    public get RoughnessMap() {return this.GetProp("RoughnessMap", DataType.String);}
    public set RoughnessMap(value) {this.SetProp("RoughnessMap", DataType.String, value);}
    public get TexturePack() {return this.GetProp("TexturePack", DataType.String);}
    public set TexturePack(value) {this.SetProp("TexturePack", DataType.String, value);}
}

export class TaskScheduler extends Instance {
    protected constructor() {super(true); this.addClassName("TaskScheduler");}
    public static New() {return new TaskScheduler();}
    public get ThreadPoolConfig() {return this.GetProp("ThreadPoolConfig", DataType.Enum) as ThreadPoolConfig | undefined;}
    public set ThreadPoolConfig(value) {this.SetProp("ThreadPoolConfig", DataType.Enum, value);}
}

export class Team extends Instance {
    protected constructor() {super(); this.addClassName("Team");}
    public static New() {return new Team();}
    public get AutoAssignable() {return this.GetProp("AutoAssignable", DataType.Bool);}
    public set AutoAssignable(value) {this.SetProp("AutoAssignable", DataType.Bool, value);}
    /**@deprecated Deprecated by Roblox*/
    public get AutoColorCharacters() {return this.GetProp("AutoColorCharacters", DataType.Bool);}
    /**@deprecated Deprecated by Roblox*/
    public set AutoColorCharacters(value) {this.SetProp("AutoColorCharacters", DataType.Bool, value);}
    /**@deprecated Deprecated by Roblox*/
    public get Score() {return this.GetProp("Score", DataType.Int32);}
    /**@deprecated Deprecated by Roblox*/
    public set Score(value) {this.SetProp("Score", DataType.Int32, value);}
    public get TeamColor() {return this.GetProp("TeamColor", DataType.BrickColor);}
    public set TeamColor(value) {this.SetProp("TeamColor", DataType.BrickColor, value);}
}

export class TeamCreateData extends Instance {
    protected constructor() {super(true); this.addClassName("TeamCreateData");}
    public static New() {return new TeamCreateData();}
}

export class TeamCreatePublishService extends Instance {
    protected constructor() {super(true); this.addClassName("TeamCreatePublishService");}
    public static New() {return new TeamCreatePublishService();}
}

export class TeamCreateService extends Instance {
    protected constructor() {super(true); this.addClassName("TeamCreateService");}
    public static New() {return new TeamCreateService();}
}

export class Teams extends Instance {
    protected constructor() {super(true); this.addClassName("Teams");}
    public static New() {return new Teams();}
}

export class TeleportOptions extends Instance {
    protected constructor() {super(); this.addClassName("TeleportOptions");}
    public static New() {return new TeleportOptions();}
    public get ReservedServerAccessCode() {return this.GetProp("ReservedServerAccessCode", DataType.String);}
    public set ReservedServerAccessCode(value) {this.SetProp("ReservedServerAccessCode", DataType.String, value);}
    public get ServerInstanceId() {return this.GetProp("ServerInstanceId", DataType.String);}
    public set ServerInstanceId(value) {this.SetProp("ServerInstanceId", DataType.String, value);}
    public get ShouldReserveServer() {return this.GetProp("ShouldReserveServer", DataType.Bool);}
    public set ShouldReserveServer(value) {this.SetProp("ShouldReserveServer", DataType.Bool, value);}
}

export class TeleportService extends Instance {
    protected constructor() {super(true); this.addClassName("TeleportService");}
    public static New() {return new TeleportService();}
    /**@deprecated Deprecated by Roblox*/
    public get CustomizedTeleportUI() {return this.GetProp("CustomizedTeleportUI", DataType.Bool);}
    /**@deprecated Deprecated by Roblox*/
    public set CustomizedTeleportUI(value) {this.SetProp("CustomizedTeleportUI", DataType.Bool, value);}
}

export class TemporaryCageMeshProvider extends Instance {
    protected constructor() {super(true); this.addClassName("TemporaryCageMeshProvider");}
    public static New() {return new TemporaryCageMeshProvider();}
}

export class TemporaryScriptService extends Instance {
    protected constructor() {super(true); this.addClassName("TemporaryScriptService");}
    public static New() {return new TemporaryScriptService();}
}

export class TerrainDetail extends Instance {
    protected constructor() {super(); this.addClassName("TerrainDetail");}
    public static New() {return new TerrainDetail();}
    public get ColorMap() {return this.GetProp("ColorMap", DataType.String);}
    public set ColorMap(value) {this.SetProp("ColorMap", DataType.String, value);}
    public get Face() {return this.GetProp("Face", DataType.Enum) as TerrainFace | undefined;}
    public set Face(value) {this.SetProp("Face", DataType.Enum, value);}
    public get MaterialPattern() {return this.GetProp("MaterialPattern", DataType.Enum) as MaterialPattern | undefined;}
    public set MaterialPattern(value) {this.SetProp("MaterialPattern", DataType.Enum, value);}
    public get MetalnessMap() {return this.GetProp("MetalnessMap", DataType.String);}
    public set MetalnessMap(value) {this.SetProp("MetalnessMap", DataType.String, value);}
    public get NormalMap() {return this.GetProp("NormalMap", DataType.String);}
    public set NormalMap(value) {this.SetProp("NormalMap", DataType.String, value);}
    public get RoughnessMap() {return this.GetProp("RoughnessMap", DataType.String);}
    public set RoughnessMap(value) {this.SetProp("RoughnessMap", DataType.String, value);}
    public get StudsPerTile() {return this.GetProp("StudsPerTile", DataType.Float32);}
    public set StudsPerTile(value) {this.SetProp("StudsPerTile", DataType.Float32, value);}
    public get TexturePack() {return this.GetProp("TexturePack", DataType.String);}
    public set TexturePack(value) {this.SetProp("TexturePack", DataType.String, value);}
}

export class TerrainRegion extends Instance {
    protected constructor() {super(); this.addClassName("TerrainRegion");}
    public static New() {return new TerrainRegion();}
    public get ExtentsMax() {return this.GetProp("ExtentsMax", DataType.Vector3int16);}
    public set ExtentsMax(value) {this.SetProp("ExtentsMax", DataType.Vector3int16, value);}
    public get ExtentsMin() {return this.GetProp("ExtentsMin", DataType.Vector3int16);}
    public set ExtentsMin(value) {this.SetProp("ExtentsMin", DataType.Vector3int16, value);}
    public get SmoothGrid() {return this.GetProp("SmoothGrid", DataType.String);}
    public set SmoothGrid(value) {this.SetProp("SmoothGrid", DataType.String, value);}
}

export class TestService extends Instance {
    protected constructor() {super(true); this.addClassName("TestService");}
    public static New() {return new TestService();}
    public get AutoRuns() {return this.GetProp("AutoRuns", DataType.Bool);}
    public set AutoRuns(value) {this.SetProp("AutoRuns", DataType.Bool, value);}
    public get Description() {return this.GetProp("Description", DataType.String);}
    public set Description(value) {this.SetProp("Description", DataType.String, value);}
    public get ExecuteWithStudioRun() {return this.GetProp("ExecuteWithStudioRun", DataType.Bool);}
    public set ExecuteWithStudioRun(value) {this.SetProp("ExecuteWithStudioRun", DataType.Bool, value);}
    public get IsSleepAllowed() {return this.GetProp("IsSleepAllowed", DataType.Bool);}
    public set IsSleepAllowed(value) {this.SetProp("IsSleepAllowed", DataType.Bool, value);}
    public get NumberOfPlayers() {return this.GetProp("NumberOfPlayers", DataType.Int32);}
    public set NumberOfPlayers(value) {this.SetProp("NumberOfPlayers", DataType.Int32, value);}
    public get SimulateSecondsLag() {return this.GetProp("SimulateSecondsLag", DataType.Float64);}
    public set SimulateSecondsLag(value) {this.SetProp("SimulateSecondsLag", DataType.Float64, value);}
    public get Timeout() {return this.GetProp("Timeout", DataType.Float64);}
    public set Timeout(value) {this.SetProp("Timeout", DataType.Float64, value);}
}

export class TextBoxService extends Instance {
    protected constructor() {super(true); this.addClassName("TextBoxService");}
    public static New() {return new TextBoxService();}
}

export class TextChannel extends Instance {
    protected constructor() {super(); this.addClassName("TextChannel");}
    public static New() {return new TextChannel();}
}

export class TextChatCommand extends Instance {
    protected constructor() {super(); this.addClassName("TextChatCommand");}
    public static New() {return new TextChatCommand();}
    public get AutocompleteVisible() {return this.GetProp("AutocompleteVisible", DataType.Bool);}
    public set AutocompleteVisible(value) {this.SetProp("AutocompleteVisible", DataType.Bool, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool);}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get PrimaryAlias() {return this.GetProp("PrimaryAlias", DataType.String);}
    public set PrimaryAlias(value) {this.SetProp("PrimaryAlias", DataType.String, value);}
    public get SecondaryAlias() {return this.GetProp("SecondaryAlias", DataType.String);}
    public set SecondaryAlias(value) {this.SetProp("SecondaryAlias", DataType.String, value);}
}

export abstract class TextChatConfigurations extends Instance {
    protected constructor() {super(); this.addClassName("TextChatConfigurations");}
}

export class BubbleChatConfiguration extends TextChatConfigurations {
    protected constructor() {super(); this.addClassName("BubbleChatConfiguration");}
    public static New() {return new BubbleChatConfiguration();}
    public get AdorneeName() {return this.GetProp("AdorneeName", DataType.String);}
    public set AdorneeName(value) {this.SetProp("AdorneeName", DataType.String, value);}
    public get BackgroundColor3() {return this.GetProp("BackgroundColor3", DataType.Color3);}
    public set BackgroundColor3(value) {this.SetProp("BackgroundColor3", DataType.Color3, value);}
    public get BackgroundTransparency() {return this.GetProp("BackgroundTransparency", DataType.Float64);}
    public set BackgroundTransparency(value) {this.SetProp("BackgroundTransparency", DataType.Float64, value);}
    public get BubbleDuration() {return this.GetProp("BubbleDuration", DataType.Float32);}
    public set BubbleDuration(value) {this.SetProp("BubbleDuration", DataType.Float32, value);}
    public get BubblesSpacing() {return this.GetProp("BubblesSpacing", DataType.Float32);}
    public set BubblesSpacing(value) {this.SetProp("BubblesSpacing", DataType.Float32, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool);}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get Font() {return this.GetProp("Font", DataType.Enum) as Font | undefined;}
    public set Font(value) {this.SetProp("Font", DataType.Enum, value);}
    public get FontFace() {return this.GetProp("FontFace", DataType.Font);}
    public set FontFace(value) {this.SetProp("FontFace", DataType.Font, value);}
    public get LocalPlayerStudsOffset() {return this.GetProp("LocalPlayerStudsOffset", DataType.Vector3);}
    public set LocalPlayerStudsOffset(value) {this.SetProp("LocalPlayerStudsOffset", DataType.Vector3, value);}
    public get MaxBubbles() {return this.GetProp("MaxBubbles", DataType.Float32);}
    public set MaxBubbles(value) {this.SetProp("MaxBubbles", DataType.Float32, value);}
    public get MaxDistance() {return this.GetProp("MaxDistance", DataType.Float32);}
    public set MaxDistance(value) {this.SetProp("MaxDistance", DataType.Float32, value);}
    public get MinimizeDistance() {return this.GetProp("MinimizeDistance", DataType.Float32);}
    public set MinimizeDistance(value) {this.SetProp("MinimizeDistance", DataType.Float32, value);}
    public get TailVisible() {return this.GetProp("TailVisible", DataType.Bool);}
    public set TailVisible(value) {this.SetProp("TailVisible", DataType.Bool, value);}
    public get TextColor3() {return this.GetProp("TextColor3", DataType.Color3);}
    public set TextColor3(value) {this.SetProp("TextColor3", DataType.Color3, value);}
    public get TextSize() {return this.GetProp("TextSize", DataType.Int64);}
    public set TextSize(value) {this.SetProp("TextSize", DataType.Int64, value);}
    public get VerticalStudsOffset() {return this.GetProp("VerticalStudsOffset", DataType.Float32);}
    public set VerticalStudsOffset(value) {this.SetProp("VerticalStudsOffset", DataType.Float32, value);}
}

export class ChatInputBarConfiguration extends TextChatConfigurations {
    protected constructor() {super(); this.addClassName("ChatInputBarConfiguration");}
    public static New() {return new ChatInputBarConfiguration();}
    public get AutocompleteEnabled() {return this.GetProp("AutocompleteEnabled", DataType.Bool);}
    public set AutocompleteEnabled(value) {this.SetProp("AutocompleteEnabled", DataType.Bool, value);}
    public get BackgroundColor3() {return this.GetProp("BackgroundColor3", DataType.Color3);}
    public set BackgroundColor3(value) {this.SetProp("BackgroundColor3", DataType.Color3, value);}
    public get BackgroundTransparency() {return this.GetProp("BackgroundTransparency", DataType.Float64);}
    public set BackgroundTransparency(value) {this.SetProp("BackgroundTransparency", DataType.Float64, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool);}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get FontFace() {return this.GetProp("FontFace", DataType.Font);}
    public set FontFace(value) {this.SetProp("FontFace", DataType.Font, value);}
    public get KeyboardKeyCode() {return this.GetProp("KeyboardKeyCode", DataType.Enum) as KeyCode | undefined;}
    public set KeyboardKeyCode(value) {this.SetProp("KeyboardKeyCode", DataType.Enum, value);}
    public get PlaceholderColor3() {return this.GetProp("PlaceholderColor3", DataType.Color3);}
    public set PlaceholderColor3(value) {this.SetProp("PlaceholderColor3", DataType.Color3, value);}
    public get TargetTextChannel() {return this.GetProp("TargetTextChannel", DataType.Referent) as TextChannel | undefined;}
    public set TargetTextChannel(value) {this.SetProp("TargetTextChannel", DataType.Referent, value);}
    public get TextColor3() {return this.GetProp("TextColor3", DataType.Color3);}
    public set TextColor3(value) {this.SetProp("TextColor3", DataType.Color3, value);}
    public get TextSize() {return this.GetProp("TextSize", DataType.Int64);}
    public set TextSize(value) {this.SetProp("TextSize", DataType.Int64, value);}
    public get TextStrokeColor3() {return this.GetProp("TextStrokeColor3", DataType.Color3);}
    public set TextStrokeColor3(value) {this.SetProp("TextStrokeColor3", DataType.Color3, value);}
    public get TextStrokeTransparency() {return this.GetProp("TextStrokeTransparency", DataType.Float64);}
    public set TextStrokeTransparency(value) {this.SetProp("TextStrokeTransparency", DataType.Float64, value);}
}

export class ChatWindowConfiguration extends TextChatConfigurations {
    protected constructor() {super(); this.addClassName("ChatWindowConfiguration");}
    public static New() {return new ChatWindowConfiguration();}
    public get BackgroundColor3() {return this.GetProp("BackgroundColor3", DataType.Color3);}
    public set BackgroundColor3(value) {this.SetProp("BackgroundColor3", DataType.Color3, value);}
    public get BackgroundTransparency() {return this.GetProp("BackgroundTransparency", DataType.Float64);}
    public set BackgroundTransparency(value) {this.SetProp("BackgroundTransparency", DataType.Float64, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool);}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get FontFace() {return this.GetProp("FontFace", DataType.Font);}
    public set FontFace(value) {this.SetProp("FontFace", DataType.Font, value);}
    public get HeightScale() {return this.GetProp("HeightScale", DataType.Float32);}
    public set HeightScale(value) {this.SetProp("HeightScale", DataType.Float32, value);}
    public get HorizontalAlignment() {return this.GetProp("HorizontalAlignment", DataType.Enum) as HorizontalAlignment | undefined;}
    public set HorizontalAlignment(value) {this.SetProp("HorizontalAlignment", DataType.Enum, value);}
    public get TextColor3() {return this.GetProp("TextColor3", DataType.Color3);}
    public set TextColor3(value) {this.SetProp("TextColor3", DataType.Color3, value);}
    public get TextSize() {return this.GetProp("TextSize", DataType.Int64);}
    public set TextSize(value) {this.SetProp("TextSize", DataType.Int64, value);}
    public get TextStrokeColor3() {return this.GetProp("TextStrokeColor3", DataType.Color3);}
    public set TextStrokeColor3(value) {this.SetProp("TextStrokeColor3", DataType.Color3, value);}
    public get TextStrokeTransparency() {return this.GetProp("TextStrokeTransparency", DataType.Float64);}
    public set TextStrokeTransparency(value) {this.SetProp("TextStrokeTransparency", DataType.Float64, value);}
    public get VerticalAlignment() {return this.GetProp("VerticalAlignment", DataType.Enum) as VerticalAlignment | undefined;}
    public set VerticalAlignment(value) {this.SetProp("VerticalAlignment", DataType.Enum, value);}
    public get WidthScale() {return this.GetProp("WidthScale", DataType.Float32);}
    public set WidthScale(value) {this.SetProp("WidthScale", DataType.Float32, value);}
}

export class TextChatMessageProperties extends Instance {
    protected constructor() {super(); this.addClassName("TextChatMessageProperties");}
    public static New() {return new TextChatMessageProperties();}
}

export class TextChatService extends Instance {
    protected constructor() {super(true); this.addClassName("TextChatService");}
    public static New() {return new TextChatService();}
    public get ChatTranslationFTUXShown() {return this.GetProp("ChatTranslationFTUXShown", DataType.Bool);}
    public set ChatTranslationFTUXShown(value) {this.SetProp("ChatTranslationFTUXShown", DataType.Bool, value);}
    public get ChatTranslationToggleEnabled() {return this.GetProp("ChatTranslationToggleEnabled", DataType.Bool);}
    public set ChatTranslationToggleEnabled(value) {this.SetProp("ChatTranslationToggleEnabled", DataType.Bool, value);}
    public get ChatVersion() {return this.GetProp("ChatVersion", DataType.Enum) as ChatVersion | undefined;}
    public set ChatVersion(value) {this.SetProp("ChatVersion", DataType.Enum, value);}
    public get CreateDefaultCommands() {return this.GetProp("CreateDefaultCommands", DataType.Bool);}
    public set CreateDefaultCommands(value) {this.SetProp("CreateDefaultCommands", DataType.Bool, value);}
    public get CreateDefaultTextChannels() {return this.GetProp("CreateDefaultTextChannels", DataType.Bool);}
    public set CreateDefaultTextChannels(value) {this.SetProp("CreateDefaultTextChannels", DataType.Bool, value);}
}

export class TextService extends Instance {
    protected constructor() {super(true); this.addClassName("TextService");}
    public static New() {return new TextService();}
}

export class TextureGenerationService extends Instance {
    protected constructor() {super(true); this.addClassName("TextureGenerationService");}
    public static New() {return new TextureGenerationService();}
}

export class ThirdPartyUserService extends Instance {
    protected constructor() {super(true); this.addClassName("ThirdPartyUserService");}
    public static New() {return new ThirdPartyUserService();}
}

export class TimerService extends Instance {
    protected constructor() {super(true); this.addClassName("TimerService");}
    public static New() {return new TimerService();}
}

export class ToastNotificationService extends Instance {
    protected constructor() {super(true); this.addClassName("ToastNotificationService");}
    public static New() {return new ToastNotificationService();}
}

export class TouchInputService extends Instance {
    protected constructor() {super(true); this.addClassName("TouchInputService");}
    public static New() {return new TouchInputService();}
}

export class TracerService extends Instance {
    protected constructor() {super(true); this.addClassName("TracerService");}
    public static New() {return new TracerService();}
}

export class TrackerStreamAnimation extends Instance {
    protected constructor() {super(); this.addClassName("TrackerStreamAnimation");}
    public static New() {return new TrackerStreamAnimation();}
}

export class Trail extends Instance {
    protected constructor() {super(); this.addClassName("Trail");}
    public static New() {return new Trail();}
    public get Attachment0() {return this.GetProp("Attachment0", DataType.Referent) as Attachment | undefined;}
    public set Attachment0(value) {this.SetProp("Attachment0", DataType.Referent, value);}
    public get Attachment1() {return this.GetProp("Attachment1", DataType.Referent) as Attachment | undefined;}
    public set Attachment1(value) {this.SetProp("Attachment1", DataType.Referent, value);}
    public get Brightness() {return this.GetProp("Brightness", DataType.Float32);}
    public set Brightness(value) {this.SetProp("Brightness", DataType.Float32, value);}
    public get Color() {return this.GetProp("Color", DataType.ColorSequence);}
    public set Color(value) {this.SetProp("Color", DataType.ColorSequence, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool);}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get FaceCamera() {return this.GetProp("FaceCamera", DataType.Bool);}
    public set FaceCamera(value) {this.SetProp("FaceCamera", DataType.Bool, value);}
    public get Lifetime() {return this.GetProp("Lifetime", DataType.Float32);}
    public set Lifetime(value) {this.SetProp("Lifetime", DataType.Float32, value);}
    public get LightEmission() {return this.GetProp("LightEmission", DataType.Float32);}
    public set LightEmission(value) {this.SetProp("LightEmission", DataType.Float32, value);}
    public get LightInfluence() {return this.GetProp("LightInfluence", DataType.Float32);}
    public set LightInfluence(value) {this.SetProp("LightInfluence", DataType.Float32, value);}
    public get MaxLength() {return this.GetProp("MaxLength", DataType.Float32);}
    public set MaxLength(value) {this.SetProp("MaxLength", DataType.Float32, value);}
    public get MinLength() {return this.GetProp("MinLength", DataType.Float32);}
    public set MinLength(value) {this.SetProp("MinLength", DataType.Float32, value);}
    public get Texture() {return this.GetProp("Texture", DataType.String);}
    public set Texture(value) {this.SetProp("Texture", DataType.String, value);}
    public get TextureLength() {return this.GetProp("TextureLength", DataType.Float32);}
    public set TextureLength(value) {this.SetProp("TextureLength", DataType.Float32, value);}
    public get TextureMode() {return this.GetProp("TextureMode", DataType.Enum) as TextureMode | undefined;}
    public set TextureMode(value) {this.SetProp("TextureMode", DataType.Enum, value);}
    public get Transparency() {return this.GetProp("Transparency", DataType.NumberSequence);}
    public set Transparency(value) {this.SetProp("Transparency", DataType.NumberSequence, value);}
    public get WidthScale() {return this.GetProp("WidthScale", DataType.NumberSequence);}
    public set WidthScale(value) {this.SetProp("WidthScale", DataType.NumberSequence, value);}
}

export class TutorialService extends Instance {
    protected constructor() {super(true); this.addClassName("TutorialService");}
    public static New() {return new TutorialService();}
}

export abstract class TweenBase extends Instance {
    protected constructor() {super(); this.addClassName("TweenBase");}
}

export class Tween extends TweenBase {
    protected constructor() {super(); this.addClassName("Tween");}
    public static New() {return new Tween();}
}

export class TweenService extends Instance {
    protected constructor() {super(true); this.addClassName("TweenService");}
    public static New() {return new TweenService();}
}

export class UGCAvatarService extends Instance {
    protected constructor() {super(true); this.addClassName("UGCAvatarService");}
    public static New() {return new UGCAvatarService();}
}

export class UGCValidationService extends Instance {
    protected constructor() {super(true); this.addClassName("UGCValidationService");}
    public static New() {return new UGCValidationService();}
}

export abstract class UIBase extends Instance {
    protected constructor() {super(); this.addClassName("UIBase");}
}

export abstract class UIComponent extends UIBase {
    protected constructor() {super(); this.addClassName("UIComponent");}
}

export abstract class UIConstraint extends UIComponent {
    protected constructor() {super(); this.addClassName("UIConstraint");}
}

export class UIAspectRatioConstraint extends UIConstraint {
    protected constructor() {super(); this.addClassName("UIAspectRatioConstraint");}
    public static New() {return new UIAspectRatioConstraint();}
    public get AspectRatio() {return this.GetProp("AspectRatio", DataType.Float32);}
    public set AspectRatio(value) {this.SetProp("AspectRatio", DataType.Float32, value);}
    public get AspectType() {return this.GetProp("AspectType", DataType.Enum) as AspectType | undefined;}
    public set AspectType(value) {this.SetProp("AspectType", DataType.Enum, value);}
    public get DominantAxis() {return this.GetProp("DominantAxis", DataType.Enum) as DominantAxis | undefined;}
    public set DominantAxis(value) {this.SetProp("DominantAxis", DataType.Enum, value);}
}

export class UISizeConstraint extends UIConstraint {
    protected constructor() {super(); this.addClassName("UISizeConstraint");}
    public static New() {return new UISizeConstraint();}
    public get MaxSize() {return this.GetProp("MaxSize", DataType.Vector2);}
    public set MaxSize(value) {this.SetProp("MaxSize", DataType.Vector2, value);}
    public get MinSize() {return this.GetProp("MinSize", DataType.Vector2);}
    public set MinSize(value) {this.SetProp("MinSize", DataType.Vector2, value);}
}

export class UITextSizeConstraint extends UIConstraint {
    protected constructor() {super(); this.addClassName("UITextSizeConstraint");}
    public static New() {return new UITextSizeConstraint();}
    public get MaxTextSize() {return this.GetProp("MaxTextSize", DataType.Int32);}
    public set MaxTextSize(value) {this.SetProp("MaxTextSize", DataType.Int32, value);}
    public get MinTextSize() {return this.GetProp("MinTextSize", DataType.Int32);}
    public set MinTextSize(value) {this.SetProp("MinTextSize", DataType.Int32, value);}
}

export class UICorner extends UIComponent {
    protected constructor() {super(); this.addClassName("UICorner");}
    public static New() {return new UICorner();}
    public get CornerRadius() {return this.GetProp("CornerRadius", DataType.UDim);}
    public set CornerRadius(value) {this.SetProp("CornerRadius", DataType.UDim, value);}
}

export class UIFlexItem extends UIComponent {
    protected constructor() {super(); this.addClassName("UIFlexItem");}
    public static New() {return new UIFlexItem();}
    public get FlexMode() {return this.GetProp("FlexMode", DataType.Enum) as UIFlexMode | undefined;}
    public set FlexMode(value) {this.SetProp("FlexMode", DataType.Enum, value);}
    public get GrowRatio() {return this.GetProp("GrowRatio", DataType.Float32);}
    public set GrowRatio(value) {this.SetProp("GrowRatio", DataType.Float32, value);}
    public get ItemLineAlignment() {return this.GetProp("ItemLineAlignment", DataType.Enum) as ItemLineAlignment | undefined;}
    public set ItemLineAlignment(value) {this.SetProp("ItemLineAlignment", DataType.Enum, value);}
    public get ShrinkRatio() {return this.GetProp("ShrinkRatio", DataType.Float32);}
    public set ShrinkRatio(value) {this.SetProp("ShrinkRatio", DataType.Float32, value);}
}

export class UIGradient extends UIComponent {
    protected constructor() {super(); this.addClassName("UIGradient");}
    public static New() {return new UIGradient();}
    public get Color() {return this.GetProp("Color", DataType.ColorSequence);}
    public set Color(value) {this.SetProp("Color", DataType.ColorSequence, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool);}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get Offset() {return this.GetProp("Offset", DataType.Vector2);}
    public set Offset(value) {this.SetProp("Offset", DataType.Vector2, value);}
    public get Rotation() {return this.GetProp("Rotation", DataType.Float32);}
    public set Rotation(value) {this.SetProp("Rotation", DataType.Float32, value);}
    public get Transparency() {return this.GetProp("Transparency", DataType.NumberSequence);}
    public set Transparency(value) {this.SetProp("Transparency", DataType.NumberSequence, value);}
}

export abstract class UILayout extends UIComponent {
    protected constructor() {super(); this.addClassName("UILayout");}
}

export abstract class UIGridStyleLayout extends UILayout {
    protected constructor() {super(); this.addClassName("UIGridStyleLayout");}
    public get FillDirection() {return this.GetProp("FillDirection", DataType.Enum) as FillDirection | undefined;}
    public set FillDirection(value) {this.SetProp("FillDirection", DataType.Enum, value);}
    public get HorizontalAlignment() {return this.GetProp("HorizontalAlignment", DataType.Enum) as HorizontalAlignment | undefined;}
    public set HorizontalAlignment(value) {this.SetProp("HorizontalAlignment", DataType.Enum, value);}
    public get SortOrder() {return this.GetProp("SortOrder", DataType.Enum) as SortOrder | undefined;}
    public set SortOrder(value) {this.SetProp("SortOrder", DataType.Enum, value);}
    public get VerticalAlignment() {return this.GetProp("VerticalAlignment", DataType.Enum) as VerticalAlignment | undefined;}
    public set VerticalAlignment(value) {this.SetProp("VerticalAlignment", DataType.Enum, value);}
}

export class UIGridLayout extends UIGridStyleLayout {
    protected constructor() {super(); this.addClassName("UIGridLayout");}
    public static New() {return new UIGridLayout();}
    public get CellPadding() {return this.GetProp("CellPadding", DataType.UDim2);}
    public set CellPadding(value) {this.SetProp("CellPadding", DataType.UDim2, value);}
    public get CellSize() {return this.GetProp("CellSize", DataType.UDim2);}
    public set CellSize(value) {this.SetProp("CellSize", DataType.UDim2, value);}
    public get FillDirectionMaxCells() {return this.GetProp("FillDirectionMaxCells", DataType.Int32);}
    public set FillDirectionMaxCells(value) {this.SetProp("FillDirectionMaxCells", DataType.Int32, value);}
    public get StartCorner() {return this.GetProp("StartCorner", DataType.Enum) as StartCorner | undefined;}
    public set StartCorner(value) {this.SetProp("StartCorner", DataType.Enum, value);}
}

export class UIListLayout extends UIGridStyleLayout {
    protected constructor() {super(); this.addClassName("UIListLayout");}
    public static New() {return new UIListLayout();}
    public get HorizontalFlex() {return this.GetProp("HorizontalFlex", DataType.Enum) as UIFlexAlignment | undefined;}
    public set HorizontalFlex(value) {this.SetProp("HorizontalFlex", DataType.Enum, value);}
    public get ItemLineAlignment() {return this.GetProp("ItemLineAlignment", DataType.Enum) as ItemLineAlignment | undefined;}
    public set ItemLineAlignment(value) {this.SetProp("ItemLineAlignment", DataType.Enum, value);}
    public get Padding() {return this.GetProp("Padding", DataType.UDim);}
    public set Padding(value) {this.SetProp("Padding", DataType.UDim, value);}
    public get VerticalFlex() {return this.GetProp("VerticalFlex", DataType.Enum) as UIFlexAlignment | undefined;}
    public set VerticalFlex(value) {this.SetProp("VerticalFlex", DataType.Enum, value);}
    public get Wraps() {return this.GetProp("Wraps", DataType.Bool);}
    public set Wraps(value) {this.SetProp("Wraps", DataType.Bool, value);}
}

export class UIPageLayout extends UIGridStyleLayout {
    protected constructor() {super(); this.addClassName("UIPageLayout");}
    public static New() {return new UIPageLayout();}
    public get Animated() {return this.GetProp("Animated", DataType.Bool);}
    public set Animated(value) {this.SetProp("Animated", DataType.Bool, value);}
    public get Circular() {return this.GetProp("Circular", DataType.Bool);}
    public set Circular(value) {this.SetProp("Circular", DataType.Bool, value);}
    public get EasingDirection() {return this.GetProp("EasingDirection", DataType.Enum) as EasingDirection | undefined;}
    public set EasingDirection(value) {this.SetProp("EasingDirection", DataType.Enum, value);}
    public get EasingStyle() {return this.GetProp("EasingStyle", DataType.Enum) as EasingStyle | undefined;}
    public set EasingStyle(value) {this.SetProp("EasingStyle", DataType.Enum, value);}
    public get GamepadInputEnabled() {return this.GetProp("GamepadInputEnabled", DataType.Bool);}
    public set GamepadInputEnabled(value) {this.SetProp("GamepadInputEnabled", DataType.Bool, value);}
    public get Padding() {return this.GetProp("Padding", DataType.UDim);}
    public set Padding(value) {this.SetProp("Padding", DataType.UDim, value);}
    public get ScrollWheelInputEnabled() {return this.GetProp("ScrollWheelInputEnabled", DataType.Bool);}
    public set ScrollWheelInputEnabled(value) {this.SetProp("ScrollWheelInputEnabled", DataType.Bool, value);}
    public get TouchInputEnabled() {return this.GetProp("TouchInputEnabled", DataType.Bool);}
    public set TouchInputEnabled(value) {this.SetProp("TouchInputEnabled", DataType.Bool, value);}
    public get TweenTime() {return this.GetProp("TweenTime", DataType.Float32);}
    public set TweenTime(value) {this.SetProp("TweenTime", DataType.Float32, value);}
}

export class UITableLayout extends UIGridStyleLayout {
    protected constructor() {super(); this.addClassName("UITableLayout");}
    public static New() {return new UITableLayout();}
    public get FillEmptySpaceColumns() {return this.GetProp("FillEmptySpaceColumns", DataType.Bool);}
    public set FillEmptySpaceColumns(value) {this.SetProp("FillEmptySpaceColumns", DataType.Bool, value);}
    public get FillEmptySpaceRows() {return this.GetProp("FillEmptySpaceRows", DataType.Bool);}
    public set FillEmptySpaceRows(value) {this.SetProp("FillEmptySpaceRows", DataType.Bool, value);}
    public get MajorAxis() {return this.GetProp("MajorAxis", DataType.Enum) as TableMajorAxis | undefined;}
    public set MajorAxis(value) {this.SetProp("MajorAxis", DataType.Enum, value);}
    public get Padding() {return this.GetProp("Padding", DataType.UDim2);}
    public set Padding(value) {this.SetProp("Padding", DataType.UDim2, value);}
}

export class UIPadding extends UIComponent {
    protected constructor() {super(); this.addClassName("UIPadding");}
    public static New() {return new UIPadding();}
    public get PaddingBottom() {return this.GetProp("PaddingBottom", DataType.UDim);}
    public set PaddingBottom(value) {this.SetProp("PaddingBottom", DataType.UDim, value);}
    public get PaddingLeft() {return this.GetProp("PaddingLeft", DataType.UDim);}
    public set PaddingLeft(value) {this.SetProp("PaddingLeft", DataType.UDim, value);}
    public get PaddingRight() {return this.GetProp("PaddingRight", DataType.UDim);}
    public set PaddingRight(value) {this.SetProp("PaddingRight", DataType.UDim, value);}
    public get PaddingTop() {return this.GetProp("PaddingTop", DataType.UDim);}
    public set PaddingTop(value) {this.SetProp("PaddingTop", DataType.UDim, value);}
}

export class UIScale extends UIComponent {
    protected constructor() {super(); this.addClassName("UIScale");}
    public static New() {return new UIScale();}
    public get Scale() {return this.GetProp("Scale", DataType.Float32);}
    public set Scale(value) {this.SetProp("Scale", DataType.Float32, value);}
}

export class UIStroke extends UIComponent {
    protected constructor() {super(); this.addClassName("UIStroke");}
    public static New() {return new UIStroke();}
    public get ApplyStrokeMode() {return this.GetProp("ApplyStrokeMode", DataType.Enum) as ApplyStrokeMode | undefined;}
    public set ApplyStrokeMode(value) {this.SetProp("ApplyStrokeMode", DataType.Enum, value);}
    public get Color() {return this.GetProp("Color", DataType.Color3);}
    public set Color(value) {this.SetProp("Color", DataType.Color3, value);}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool);}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get LineJoinMode() {return this.GetProp("LineJoinMode", DataType.Enum) as LineJoinMode | undefined;}
    public set LineJoinMode(value) {this.SetProp("LineJoinMode", DataType.Enum, value);}
    public get Thickness() {return this.GetProp("Thickness", DataType.Float32);}
    public set Thickness(value) {this.SetProp("Thickness", DataType.Float32, value);}
    public get Transparency() {return this.GetProp("Transparency", DataType.Float32);}
    public set Transparency(value) {this.SetProp("Transparency", DataType.Float32, value);}
}

export class UnvalidatedAssetService extends Instance {
    protected constructor() {super(true); this.addClassName("UnvalidatedAssetService");}
    public static New() {return new UnvalidatedAssetService();}
    public get CachedData() {return this.GetProp("CachedData", DataType.String);}
    public set CachedData(value) {this.SetProp("CachedData", DataType.String, value);}
}

export class UserInputService extends Instance {
    protected constructor() {super(true); this.addClassName("UserInputService");}
    public static New() {return new UserInputService();}
    public get LegacyInputEventsEnabled() {return this.GetProp("LegacyInputEventsEnabled", DataType.Bool);}
    public set LegacyInputEventsEnabled(value) {this.SetProp("LegacyInputEventsEnabled", DataType.Bool, value);}
    public get MouseBehavior() {return this.GetProp("MouseBehavior", DataType.Enum) as MouseBehavior | undefined;}
    public set MouseBehavior(value) {this.SetProp("MouseBehavior", DataType.Enum, value);}
    public get MouseIcon() {return this.GetProp("MouseIcon", DataType.String);}
    public set MouseIcon(value) {this.SetProp("MouseIcon", DataType.String, value);}
    public get MouseIconEnabled() {return this.GetProp("MouseIconEnabled", DataType.Bool);}
    public set MouseIconEnabled(value) {this.SetProp("MouseIconEnabled", DataType.Bool, value);}
}

export class UserService extends Instance {
    protected constructor() {super(true); this.addClassName("UserService");}
    public static New() {return new UserService();}
}

export class VRService extends Instance {
    protected constructor() {super(true); this.addClassName("VRService");}
    public static New() {return new VRService();}
    public get AutomaticScaling() {return this.GetProp("AutomaticScaling", DataType.Enum) as VRScaling | undefined;}
    public set AutomaticScaling(value) {this.SetProp("AutomaticScaling", DataType.Enum, value);}
    public get AvatarGestures() {return this.GetProp("AvatarGestures", DataType.Bool);}
    public set AvatarGestures(value) {this.SetProp("AvatarGestures", DataType.Bool, value);}
    public get FadeOutViewOnCollision() {return this.GetProp("FadeOutViewOnCollision", DataType.Bool);}
    public set FadeOutViewOnCollision(value) {this.SetProp("FadeOutViewOnCollision", DataType.Bool, value);}
}

export class VRStatusService extends Instance {
    protected constructor() {super(true); this.addClassName("VRStatusService");}
    public static New() {return new VRStatusService();}
}

export abstract class ValueBase extends Instance {
    protected constructor() {super(); this.addClassName("ValueBase");}
}

export class BinaryStringValue extends ValueBase {
    protected constructor() {super(); this.addClassName("BinaryStringValue");}
    public static New() {return new BinaryStringValue();}
    public get Value() {return this.GetProp("Value", DataType.String);}
    public set Value(value) {this.SetProp("Value", DataType.String, value);}
}

export class BoolValue extends ValueBase {
    protected constructor() {super(); this.addClassName("BoolValue");}
    public static New() {return new BoolValue();}
    public get Value() {return this.GetProp("Value", DataType.Bool);}
    public set Value(value) {this.SetProp("Value", DataType.Bool, value);}
}

export class BrickColorValue extends ValueBase {
    protected constructor() {super(); this.addClassName("BrickColorValue");}
    public static New() {return new BrickColorValue();}
    public get Value() {return this.GetProp("Value", DataType.BrickColor);}
    public set Value(value) {this.SetProp("Value", DataType.BrickColor, value);}
}

export class CFrameValue extends ValueBase {
    protected constructor() {super(); this.addClassName("CFrameValue");}
    public static New() {return new CFrameValue();}
    public get Value() {return this.GetProp("Value", DataType.CFrame);}
    public set Value(value) {this.SetProp("Value", DataType.CFrame, value);}
}

export class Color3Value extends ValueBase {
    protected constructor() {super(); this.addClassName("Color3Value");}
    public static New() {return new Color3Value();}
    public get Value() {return this.GetProp("Value", DataType.Color3);}
    public set Value(value) {this.SetProp("Value", DataType.Color3, value);}
}

/**@deprecated Deprecated by Roblox*/
export class DoubleConstrainedValue extends ValueBase {
    protected constructor() {super(); this.addClassName("DoubleConstrainedValue");}
    public static New() {return new DoubleConstrainedValue();}
    public get MaxValue() {return this.GetProp("MaxValue", DataType.Float64);}
    public set MaxValue(value) {this.SetProp("MaxValue", DataType.Float64, value);}
    public get MinValue() {return this.GetProp("MinValue", DataType.Float64);}
    public set MinValue(value) {this.SetProp("MinValue", DataType.Float64, value);}
    public get Value() {return this.GetProp("value", DataType.Float64);}
    public set Value(value) {this.SetProp("value", DataType.Float64, value);}
}

/**@deprecated Deprecated by Roblox*/
export class IntConstrainedValue extends ValueBase {
    protected constructor() {super(); this.addClassName("IntConstrainedValue");}
    public static New() {return new IntConstrainedValue();}
    public get MaxValue() {return this.GetProp("MaxValue", DataType.Int64);}
    public set MaxValue(value) {this.SetProp("MaxValue", DataType.Int64, value);}
    public get MinValue() {return this.GetProp("MinValue", DataType.Int64);}
    public set MinValue(value) {this.SetProp("MinValue", DataType.Int64, value);}
    public get Value() {return this.GetProp("value", DataType.Int64);}
    public set Value(value) {this.SetProp("value", DataType.Int64, value);}
}

export class IntValue extends ValueBase {
    protected constructor() {super(); this.addClassName("IntValue");}
    public static New() {return new IntValue();}
    public get Value() {return this.GetProp("Value", DataType.Int64);}
    public set Value(value) {this.SetProp("Value", DataType.Int64, value);}
}

export class NumberValue extends ValueBase {
    protected constructor() {super(); this.addClassName("NumberValue");}
    public static New() {return new NumberValue();}
    public get Value() {return this.GetProp("Value", DataType.Float64);}
    public set Value(value) {this.SetProp("Value", DataType.Float64, value);}
}

export class ObjectValue extends ValueBase {
    protected constructor() {super(); this.addClassName("ObjectValue");}
    public static New() {return new ObjectValue();}
    public get Value() {return this.GetProp("Value", DataType.Referent) as Instance | undefined;}
    public set Value(value) {this.SetProp("Value", DataType.Referent, value);}
}

export class RayValue extends ValueBase {
    protected constructor() {super(); this.addClassName("RayValue");}
    public static New() {return new RayValue();}
    public get Value() {return this.GetProp("Value", DataType.Ray);}
    public set Value(value) {this.SetProp("Value", DataType.Ray, value);}
}

export class StringValue extends ValueBase {
    protected constructor() {super(); this.addClassName("StringValue");}
    public static New() {return new StringValue();}
    public get Value() {return this.GetProp("Value", DataType.String);}
    public set Value(value) {this.SetProp("Value", DataType.String, value);}
}

export class Vector3Value extends ValueBase {
    protected constructor() {super(); this.addClassName("Vector3Value");}
    public static New() {return new Vector3Value();}
    public get Value() {return this.GetProp("Value", DataType.Vector3);}
    public set Value(value) {this.SetProp("Value", DataType.Vector3, value);}
}

export class Vector3Curve extends Instance {
    protected constructor() {super(); this.addClassName("Vector3Curve");}
    public static New() {return new Vector3Curve();}
}

export class VersionControlService extends Instance {
    protected constructor() {super(true); this.addClassName("VersionControlService");}
    public static New() {return new VersionControlService();}
}

export class VideoCaptureService extends Instance {
    protected constructor() {super(true); this.addClassName("VideoCaptureService");}
    public static New() {return new VideoCaptureService();}
}

export class VideoDeviceInput extends Instance {
    protected constructor() {super(); this.addClassName("VideoDeviceInput");}
    public static New() {return new VideoDeviceInput();}
    public get Active() {return this.GetProp("Active", DataType.Bool);}
    public set Active(value) {this.SetProp("Active", DataType.Bool, value);}
    public get CameraId() {return this.GetProp("CameraId", DataType.String);}
    public set CameraId(value) {this.SetProp("CameraId", DataType.String, value);}
    public get CaptureQuality() {return this.GetProp("CaptureQuality", DataType.Enum) as VideoDeviceCaptureQuality | undefined;}
    public set CaptureQuality(value) {this.SetProp("CaptureQuality", DataType.Enum, value);}
}

export class VideoService extends Instance {
    protected constructor() {super(true); this.addClassName("VideoService");}
    public static New() {return new VideoService();}
}

export class VirtualInputManager extends Instance {
    protected constructor() {super(true); this.addClassName("VirtualInputManager");}
    public static New() {return new VirtualInputManager();}
}

export class VirtualUser extends Instance {
    protected constructor() {super(true); this.addClassName("VirtualUser");}
    public static New() {return new VirtualUser();}
}

export class VisibilityCheckDispatcher extends Instance {
    protected constructor() {super(true); this.addClassName("VisibilityCheckDispatcher");}
    public static New() {return new VisibilityCheckDispatcher();}
}

export class Visit extends Instance {
    protected constructor() {super(true); this.addClassName("Visit");}
    public static New() {return new Visit();}
}

export class VisualizationMode extends Instance {
    protected constructor() {super(); this.addClassName("VisualizationMode");}
    public static New() {return new VisualizationMode();}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool);}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get Title() {return this.GetProp("Title", DataType.String);}
    public set Title(value) {this.SetProp("Title", DataType.String, value);}
}

export class VisualizationModeCategory extends Instance {
    protected constructor() {super(); this.addClassName("VisualizationModeCategory");}
    public static New() {return new VisualizationModeCategory();}
    public get Enabled() {return this.GetProp("Enabled", DataType.Bool);}
    public set Enabled(value) {this.SetProp("Enabled", DataType.Bool, value);}
    public get Title() {return this.GetProp("Title", DataType.String);}
    public set Title(value) {this.SetProp("Title", DataType.String, value);}
}

export class VisualizationModeService extends Instance {
    protected constructor() {super(true); this.addClassName("VisualizationModeService");}
    public static New() {return new VisualizationModeService();}
}

export class VoiceChatInternal extends Instance {
    protected constructor() {super(true); this.addClassName("VoiceChatInternal");}
    public static New() {return new VoiceChatInternal();}
}

export class VoiceChatService extends Instance {
    protected constructor() {super(true); this.addClassName("VoiceChatService");}
    public static New() {return new VoiceChatService();}
    public get EnableDefaultVoice() {return this.GetProp("EnableDefaultVoice", DataType.Bool);}
    public set EnableDefaultVoice(value) {this.SetProp("EnableDefaultVoice", DataType.Bool, value);}
    public get UseAudioApi() {return this.GetProp("UseAudioApi", DataType.Enum) as AudioApiRollout | undefined;}
    public set UseAudioApi(value) {this.SetProp("UseAudioApi", DataType.Enum, value);}
}

export class WeldConstraint extends Instance {
    protected constructor() {super(); this.addClassName("WeldConstraint");}
    public static New() {return new WeldConstraint();}
    public get CFrame0() {return this.GetProp("CFrame0", DataType.CFrame);}
    public set CFrame0(value) {this.SetProp("CFrame0", DataType.CFrame, value);}
    public get Part0Internal() {return this.GetProp("Part0Internal", DataType.Referent) as BasePart | undefined;}
    public set Part0Internal(value) {this.SetProp("Part0Internal", DataType.Referent, value);}
    public get Part1Internal() {return this.GetProp("Part1Internal", DataType.Referent) as BasePart | undefined;}
    public set Part1Internal(value) {this.SetProp("Part1Internal", DataType.Referent, value);}
    public get State() {return this.GetProp("State", DataType.Int32);}
    public set State(value) {this.SetProp("State", DataType.Int32, value);}
}

export class Wire extends Instance {
    protected constructor() {super(); this.addClassName("Wire");}
    public static New() {return new Wire();}
    public get SourceInstance() {return this.GetProp("SourceInstance", DataType.Referent) as Instance | undefined;}
    public set SourceInstance(value) {this.SetProp("SourceInstance", DataType.Referent, value);}
    public get SourceName() {return this.GetProp("SourceName", DataType.String);}
    public set SourceName(value) {this.SetProp("SourceName", DataType.String, value);}
    public get TargetInstance() {return this.GetProp("TargetInstance", DataType.Referent) as Instance | undefined;}
    public set TargetInstance(value) {this.SetProp("TargetInstance", DataType.Referent, value);}
    public get TargetName() {return this.GetProp("TargetName", DataType.String);}
    public set TargetName(value) {this.SetProp("TargetName", DataType.String, value);}
}

export type NameToClass = {
    ["Instance"]: Instance
    ["AccessoryDescription"]: AccessoryDescription
    ["AccountService"]: AccountService
    ["Accoutrement"]: Accoutrement
    ["Accessory"]: Accessory
    ["Hat"]: Hat
    ["ActivityHistoryService"]: ActivityHistoryService
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
    ["AudioChorus"]: AudioChorus
    ["AudioCompressor"]: AudioCompressor
    ["AudioDeviceInput"]: AudioDeviceInput
    ["AudioDeviceOutput"]: AudioDeviceOutput
    ["AudioDistortion"]: AudioDistortion
    ["AudioEcho"]: AudioEcho
    ["AudioEmitter"]: AudioEmitter
    ["AudioEqualizer"]: AudioEqualizer
    ["AudioFader"]: AudioFader
    ["AudioFlanger"]: AudioFlanger
    ["AudioListener"]: AudioListener
    ["AudioPitchShifter"]: AudioPitchShifter
    ["AudioPlayer"]: AudioPlayer
    ["AudioReverb"]: AudioReverb
    ["AudioSearchParams"]: AudioSearchParams
    ["AvatarChatService"]: AvatarChatService
    ["AvatarCreationService"]: AvatarCreationService
    ["AvatarEditorService"]: AvatarEditorService
    ["AvatarImportService"]: AvatarImportService
    ["Backpack"]: Backpack
    ["BadgeService"]: BadgeService
    ["BasePlayerGui"]: BasePlayerGui
    ["CoreGui"]: CoreGui
    ["StarterGui"]: StarterGui
    ["BaseRemoteEvent"]: BaseRemoteEvent
    ["RemoteEvent"]: RemoteEvent
    ["UnreliableRemoteEvent"]: UnreliableRemoteEvent
    ["BaseWrap"]: BaseWrap
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
    ["BubbleChatMessageProperties"]: BubbleChatMessageProperties
    ["BulkImportService"]: BulkImportService
    ["CacheableContentProvider"]: CacheableContentProvider
    ["HSRDataContentProvider"]: HSRDataContentProvider
    ["MeshContentProvider"]: MeshContentProvider
    ["SolidModelContentProvider"]: SolidModelContentProvider
    ["CalloutService"]: CalloutService
    ["Camera"]: Camera
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
    ["Clouds"]: Clouds
    ["ClusterPacketCache"]: ClusterPacketCache
    ["CollaboratorsService"]: CollaboratorsService
    ["CollectionService"]: CollectionService
    ["CommandService"]: CommandService
    ["CommerceService"]: CommerceService
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
    ["CrossDMScriptChangeListener"]: CrossDMScriptChangeListener
    ["CustomEvent"]: CustomEvent
    ["CustomEventReceiver"]: CustomEventReceiver
    ["DataModelMesh"]: DataModelMesh
    ["BevelMesh"]: BevelMesh
    ["BlockMesh"]: BlockMesh
    ["CylinderMesh"]: CylinderMesh
    ["EditableMesh"]: EditableMesh
    ["RobloxEditableMesh"]: RobloxEditableMesh
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
    ["EditableImage"]: EditableImage
    ["RobloxEditableImage"]: RobloxEditableImage
    ["EngineAPICloudProcessingService"]: EngineAPICloudProcessingService
    ["EulerRotationCurve"]: EulerRotationCurve
    ["EventIngestService"]: EventIngestService
    ["ExampleService"]: ExampleService
    ["ExperienceAuthService"]: ExperienceAuthService
    ["ExperienceInviteOptions"]: ExperienceInviteOptions
    ["ExperienceNotificationService"]: ExperienceNotificationService
    ["ExperienceService"]: ExperienceService
    ["ExperienceStateCaptureService"]: ExperienceStateCaptureService
    ["Explosion"]: Explosion
    ["FaceAnimatorService"]: FaceAnimatorService
    ["FaceControls"]: FaceControls
    ["FaceInstance"]: FaceInstance
    ["Decal"]: Decal
    ["Texture"]: Texture
    ["FacialAnimationRecordingService"]: FacialAnimationRecordingService
    ["FacialAnimationStreamingServiceV2"]: FacialAnimationStreamingServiceV2
    ["Feature"]: Feature
    ["Hole"]: Hole
    ["MotorFeature"]: MotorFeature
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
    ["ScrollingFrame"]: ScrollingFrame
    ["TextBox"]: TextBox
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
    ["HapticService"]: HapticService
    ["HeightmapImporterService"]: HeightmapImporterService
    ["HiddenSurfaceRemovalAsset"]: HiddenSurfaceRemovalAsset
    ["Highlight"]: Highlight
    ["Hopper"]: Hopper
    ["HttpRbxApiService"]: HttpRbxApiService
    ["HttpService"]: HttpService
    ["Humanoid"]: Humanoid
    ["HumanoidDescription"]: HumanoidDescription
    ["IKControl"]: IKControl
    ["ILegacyStudioBridge"]: ILegacyStudioBridge
    ["LegacyStudioBridge"]: LegacyStudioBridge
    ["IXPService"]: IXPService
    ["IncrementalPatchBuilder"]: IncrementalPatchBuilder
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
    ["LiveScriptingService"]: LiveScriptingService
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
    ["BaseScript"]: BaseScript
    ["Script"]: Script
    ["LocalScript"]: LocalScript
    ["ModuleScript"]: ModuleScript
    ["LuaWebService"]: LuaWebService
    ["LuauScriptAnalyzerService"]: LuauScriptAnalyzerService
    ["MarkerCurve"]: MarkerCurve
    ["MarketplaceService"]: MarketplaceService
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
    ["PermissionsService"]: PermissionsService
    ["PhysicsService"]: PhysicsService
    ["PlaceStatsService"]: PlaceStatsService
    ["PlacesService"]: PlacesService
    ["PlatformCloudStorageService"]: PlatformCloudStorageService
    ["PlatformFriendsService"]: PlatformFriendsService
    ["Player"]: Player
    ["PlayerEmulatorService"]: PlayerEmulatorService
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
    ["DepthOfFieldEffect"]: DepthOfFieldEffect
    ["SunRaysEffect"]: SunRaysEffect
    ["ProcessInstancePhysicsService"]: ProcessInstancePhysicsService
    ["ProjectFolderService"]: ProjectFolderService
    ["ProximityPrompt"]: ProximityPrompt
    ["ProximityPromptService"]: ProximityPromptService
    ["PublishService"]: PublishService
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
    ["BuoyancySensor"]: BuoyancySensor
    ["ControllerSensor"]: ControllerSensor
    ["ControllerPartSensor"]: ControllerPartSensor
    ["ServerScriptService"]: ServerScriptService
    ["ServerStorage"]: ServerStorage
    ["ServiceVisibilityService"]: ServiceVisibilityService
    ["SessionService"]: SessionService
    ["SharedTableRegistry"]: SharedTableRegistry
    ["ShorelineUpgraderService"]: ShorelineUpgraderService
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
    ["StudioData"]: StudioData
    ["StudioDeviceEmulatorService"]: StudioDeviceEmulatorService
    ["StudioPublishService"]: StudioPublishService
    ["StudioScriptDebugEventListener"]: StudioScriptDebugEventListener
    ["StudioSdkService"]: StudioSdkService
    ["StudioService"]: StudioService
    ["StudioWidgetsService"]: StudioWidgetsService
    ["StyleBase"]: StyleBase
    ["StyleRule"]: StyleRule
    ["StyleSheet"]: StyleSheet
    ["StyleDerive"]: StyleDerive
    ["StyleLink"]: StyleLink
    ["StylingService"]: StylingService
    ["SurfaceAppearance"]: SurfaceAppearance
    ["TaskScheduler"]: TaskScheduler
    ["Team"]: Team
    ["TeamCreateData"]: TeamCreateData
    ["TeamCreatePublishService"]: TeamCreatePublishService
    ["TeamCreateService"]: TeamCreateService
    ["Teams"]: Teams
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
    map.set("AccessoryDescription", AccessoryDescription.New);
    map.set("AccountService", AccountService.New);
    map.set("Accoutrement", Accoutrement.New);
    map.set("Accessory", Accessory.New);
    map.set("Hat", Hat.New);
    map.set("ActivityHistoryService", ActivityHistoryService.New);
    map.set("AdPortal", AdPortal.New);
    map.set("AdService", AdService.New);
    map.set("AdvancedDragger", AdvancedDragger.New);
    map.set("AnalyticsService", AnalyticsService.New);
    map.set("Animation", Animation.New);
    map.set("CurveAnimation", CurveAnimation.New);
    map.set("KeyframeSequence", KeyframeSequence.New);
    map.set("AnimationClipProvider", AnimationClipProvider.New);
    map.set("AnimationController", AnimationController.New);
    map.set("AnimationFromVideoCreatorService", AnimationFromVideoCreatorService.New);
    map.set("AnimationFromVideoCreatorStudioService", AnimationFromVideoCreatorStudioService.New);
    map.set("AnimationRigData", AnimationRigData.New);
    map.set("Animator", Animator.New);
    map.set("AppUpdateService", AppUpdateService.New);
    map.set("AssetCounterService", AssetCounterService.New);
    map.set("AssetDeliveryProxy", AssetDeliveryProxy.New);
    map.set("AssetImportService", AssetImportService.New);
    map.set("AssetManagerService", AssetManagerService.New);
    map.set("AssetService", AssetService.New);
    map.set("Atmosphere", Atmosphere.New);
    map.set("Attachment", Attachment.New);
    map.set("Bone", Bone.New);
    map.set("AudioAnalyzer", AudioAnalyzer.New);
    map.set("AudioChorus", AudioChorus.New);
    map.set("AudioCompressor", AudioCompressor.New);
    map.set("AudioDeviceInput", AudioDeviceInput.New);
    map.set("AudioDeviceOutput", AudioDeviceOutput.New);
    map.set("AudioDistortion", AudioDistortion.New);
    map.set("AudioEcho", AudioEcho.New);
    map.set("AudioEmitter", AudioEmitter.New);
    map.set("AudioEqualizer", AudioEqualizer.New);
    map.set("AudioFader", AudioFader.New);
    map.set("AudioFlanger", AudioFlanger.New);
    map.set("AudioListener", AudioListener.New);
    map.set("AudioPitchShifter", AudioPitchShifter.New);
    map.set("AudioPlayer", AudioPlayer.New);
    map.set("AudioReverb", AudioReverb.New);
    map.set("AudioSearchParams", AudioSearchParams.New);
    map.set("AvatarChatService", AvatarChatService.New);
    map.set("AvatarCreationService", AvatarCreationService.New);
    map.set("AvatarEditorService", AvatarEditorService.New);
    map.set("AvatarImportService", AvatarImportService.New);
    map.set("Backpack", Backpack.New);
    map.set("BadgeService", BadgeService.New);
    map.set("CoreGui", CoreGui.New);
    map.set("StarterGui", StarterGui.New);
    map.set("RemoteEvent", RemoteEvent.New);
    map.set("UnreliableRemoteEvent", UnreliableRemoteEvent.New);
    map.set("WrapLayer", WrapLayer.New);
    map.set("WrapTarget", WrapTarget.New);
    map.set("Beam", Beam.New);
    map.set("BindableEvent", BindableEvent.New);
    map.set("BindableFunction", BindableFunction.New);
    map.set("BodyAngularVelocity", BodyAngularVelocity.New);
    map.set("BodyForce", BodyForce.New);
    map.set("BodyGyro", BodyGyro.New);
    map.set("BodyPosition", BodyPosition.New);
    map.set("BodyThrust", BodyThrust.New);
    map.set("BodyVelocity", BodyVelocity.New);
    map.set("RocketPropulsion", RocketPropulsion.New);
    map.set("BodyPartDescription", BodyPartDescription.New);
    map.set("Breakpoint", Breakpoint.New);
    map.set("BrowserService", BrowserService.New);
    map.set("BubbleChatMessageProperties", BubbleChatMessageProperties.New);
    map.set("BulkImportService", BulkImportService.New);
    map.set("HSRDataContentProvider", HSRDataContentProvider.New);
    map.set("MeshContentProvider", MeshContentProvider.New);
    map.set("SolidModelContentProvider", SolidModelContentProvider.New);
    map.set("CalloutService", CalloutService.New);
    map.set("Camera", Camera.New);
    map.set("CaptureService", CaptureService.New);
    map.set("ChangeHistoryService", ChangeHistoryService.New);
    map.set("BodyColors", BodyColors.New);
    map.set("CharacterMesh", CharacterMesh.New);
    map.set("Pants", Pants.New);
    map.set("Shirt", Shirt.New);
    map.set("ShirtGraphic", ShirtGraphic.New);
    map.set("Skin", Skin.New);
    map.set("Chat", Chat.New);
    map.set("ChatbotUIService", ChatbotUIService.New);
    map.set("ClickDetector", ClickDetector.New);
    map.set("DragDetector", DragDetector.New);
    map.set("Clouds", Clouds.New);
    map.set("ClusterPacketCache", ClusterPacketCache.New);
    map.set("CollaboratorsService", CollaboratorsService.New);
    map.set("CollectionService", CollectionService.New);
    map.set("CommandService", CommandService.New);
    map.set("CommerceService", CommerceService.New);
    map.set("Configuration", Configuration.New);
    map.set("ConfigureServerService", ConfigureServerService.New);
    map.set("ConnectivityService", ConnectivityService.New);
    map.set("AlignOrientation", AlignOrientation.New);
    map.set("AlignPosition", AlignPosition.New);
    map.set("AngularVelocity", AngularVelocity.New);
    map.set("AnimationConstraint", AnimationConstraint.New);
    map.set("BallSocketConstraint", BallSocketConstraint.New);
    map.set("HingeConstraint", HingeConstraint.New);
    map.set("LineForce", LineForce.New);
    map.set("LinearVelocity", LinearVelocity.New);
    map.set("PlaneConstraint", PlaneConstraint.New);
    map.set("Plane", Plane.New);
    map.set("RigidConstraint", RigidConstraint.New);
    map.set("RodConstraint", RodConstraint.New);
    map.set("RopeConstraint", RopeConstraint.New);
    map.set("CylindricalConstraint", CylindricalConstraint.New);
    map.set("PrismaticConstraint", PrismaticConstraint.New);
    map.set("SpringConstraint", SpringConstraint.New);
    map.set("Torque", Torque.New);
    map.set("TorsionSpringConstraint", TorsionSpringConstraint.New);
    map.set("UniversalConstraint", UniversalConstraint.New);
    map.set("VectorForce", VectorForce.New);
    map.set("ContentProvider", ContentProvider.New);
    map.set("ContextActionService", ContextActionService.New);
    map.set("HumanoidController", HumanoidController.New);
    map.set("SkateboardController", SkateboardController.New);
    map.set("VehicleController", VehicleController.New);
    map.set("AirController", AirController.New);
    map.set("ClimbController", ClimbController.New);
    map.set("GroundController", GroundController.New);
    map.set("SwimController", SwimController.New);
    map.set("ControllerManager", ControllerManager.New);
    map.set("ControllerService", ControllerService.New);
    map.set("ConversationalAIAcceptanceService", ConversationalAIAcceptanceService.New);
    map.set("CookiesService", CookiesService.New);
    map.set("CorePackages", CorePackages.New);
    map.set("CoreScriptDebuggingManagerHelper", CoreScriptDebuggingManagerHelper.New);
    map.set("CoreScriptSyncService", CoreScriptSyncService.New);
    map.set("CreationDBService", CreationDBService.New);
    map.set("CrossDMScriptChangeListener", CrossDMScriptChangeListener.New);
    map.set("CustomEvent", CustomEvent.New);
    map.set("CustomEventReceiver", CustomEventReceiver.New);
    map.set("BlockMesh", BlockMesh.New);
    map.set("CylinderMesh", CylinderMesh.New);
    map.set("EditableMesh", EditableMesh.New);
    map.set("RobloxEditableMesh", RobloxEditableMesh.New);
    map.set("FileMesh", FileMesh.New);
    map.set("SpecialMesh", SpecialMesh.New);
    map.set("DataModelPatchService", DataModelPatchService.New);
    map.set("DataStoreGetOptions", DataStoreGetOptions.New);
    map.set("DataStoreIncrementOptions", DataStoreIncrementOptions.New);
    map.set("DataStoreOptions", DataStoreOptions.New);
    map.set("DataStoreService", DataStoreService.New);
    map.set("DataStoreSetOptions", DataStoreSetOptions.New);
    map.set("Debris", Debris.New);
    map.set("DebuggablePluginWatcher", DebuggablePluginWatcher.New);
    map.set("DebuggerConnectionManager", DebuggerConnectionManager.New);
    map.set("DebuggerManager", DebuggerManager.New);
    map.set("DebuggerUIService", DebuggerUIService.New);
    map.set("DebuggerWatch", DebuggerWatch.New);
    map.set("DeviceIdService", DeviceIdService.New);
    map.set("Dialog", Dialog.New);
    map.set("DialogChoice", DialogChoice.New);
    map.set("DraftsService", DraftsService.New);
    map.set("Dragger", Dragger.New);
    map.set("DraggerService", DraggerService.New);
    map.set("EditableImage", EditableImage.New);
    map.set("RobloxEditableImage", RobloxEditableImage.New);
    map.set("EngineAPICloudProcessingService", EngineAPICloudProcessingService.New);
    map.set("EulerRotationCurve", EulerRotationCurve.New);
    map.set("EventIngestService", EventIngestService.New);
    map.set("ExampleService", ExampleService.New);
    map.set("ExperienceAuthService", ExperienceAuthService.New);
    map.set("ExperienceInviteOptions", ExperienceInviteOptions.New);
    map.set("ExperienceNotificationService", ExperienceNotificationService.New);
    map.set("ExperienceService", ExperienceService.New);
    map.set("ExperienceStateCaptureService", ExperienceStateCaptureService.New);
    map.set("Explosion", Explosion.New);
    map.set("FaceAnimatorService", FaceAnimatorService.New);
    map.set("FaceControls", FaceControls.New);
    map.set("Decal", Decal.New);
    map.set("Texture", Texture.New);
    map.set("FacialAnimationRecordingService", FacialAnimationRecordingService.New);
    map.set("FacialAnimationStreamingServiceV2", FacialAnimationStreamingServiceV2.New);
    map.set("Hole", Hole.New);
    map.set("MotorFeature", MotorFeature.New);
    map.set("Fire", Fire.New);
    map.set("FlagStandService", FlagStandService.New);
    map.set("FloatCurve", FloatCurve.New);
    map.set("FlyweightService", FlyweightService.New);
    map.set("CSGDictionaryService", CSGDictionaryService.New);
    map.set("NonReplicatedCSGDictionaryService", NonReplicatedCSGDictionaryService.New);
    map.set("Folder", Folder.New);
    map.set("ForceField", ForceField.New);
    map.set("FriendService", FriendService.New);
    map.set("FunctionalTest", FunctionalTest.New);
    map.set("GamePassService", GamePassService.New);
    map.set("GamepadService", GamepadService.New);
    map.set("Geometry", Geometry.New);
    map.set("GeometryService", GeometryService.New);
    map.set("GetTextBoundsParams", GetTextBoundsParams.New);
    map.set("GoogleAnalyticsConfiguration", GoogleAnalyticsConfiguration.New);
    map.set("GroupService", GroupService.New);
    map.set("CanvasGroup", CanvasGroup.New);
    map.set("Frame", Frame.New);
    map.set("ImageButton", ImageButton.New);
    map.set("TextButton", TextButton.New);
    map.set("ImageLabel", ImageLabel.New);
    map.set("TextLabel", TextLabel.New);
    map.set("ScrollingFrame", ScrollingFrame.New);
    map.set("TextBox", TextBox.New);
    map.set("VideoFrame", VideoFrame.New);
    map.set("ViewportFrame", ViewportFrame.New);
    map.set("BillboardGui", BillboardGui.New);
    map.set("ScreenGui", ScreenGui.New);
    map.set("GuiMain", GuiMain.New);
    map.set("AdGui", AdGui.New);
    map.set("SurfaceGui", SurfaceGui.New);
    map.set("FloorWire", FloorWire.New);
    map.set("SelectionBox", SelectionBox.New);
    map.set("BoxHandleAdornment", BoxHandleAdornment.New);
    map.set("ConeHandleAdornment", ConeHandleAdornment.New);
    map.set("CylinderHandleAdornment", CylinderHandleAdornment.New);
    map.set("ImageHandleAdornment", ImageHandleAdornment.New);
    map.set("LineHandleAdornment", LineHandleAdornment.New);
    map.set("SphereHandleAdornment", SphereHandleAdornment.New);
    map.set("WireframeHandleAdornment", WireframeHandleAdornment.New);
    map.set("ParabolaAdornment", ParabolaAdornment.New);
    map.set("SelectionSphere", SelectionSphere.New);
    map.set("ArcHandles", ArcHandles.New);
    map.set("Handles", Handles.New);
    map.set("SurfaceSelection", SurfaceSelection.New);
    map.set("SelectionPartLasso", SelectionPartLasso.New);
    map.set("SelectionPointLasso", SelectionPointLasso.New);
    map.set("Path2D", Path2D.New);
    map.set("GuiService", GuiService.New);
    map.set("GuidRegistryService", GuidRegistryService.New);
    map.set("HapticService", HapticService.New);
    map.set("HeightmapImporterService", HeightmapImporterService.New);
    map.set("HiddenSurfaceRemovalAsset", HiddenSurfaceRemovalAsset.New);
    map.set("Highlight", Highlight.New);
    map.set("Hopper", Hopper.New);
    map.set("HttpRbxApiService", HttpRbxApiService.New);
    map.set("HttpService", HttpService.New);
    map.set("Humanoid", Humanoid.New);
    map.set("HumanoidDescription", HumanoidDescription.New);
    map.set("IKControl", IKControl.New);
    map.set("LegacyStudioBridge", LegacyStudioBridge.New);
    map.set("IXPService", IXPService.New);
    map.set("IncrementalPatchBuilder", IncrementalPatchBuilder.New);
    map.set("InsertService", InsertService.New);
    map.set("InternalSyncItem", InternalSyncItem.New);
    map.set("InternalSyncService", InternalSyncService.New);
    map.set("RotateP", RotateP.New);
    map.set("RotateV", RotateV.New);
    map.set("Glue", Glue.New);
    map.set("ManualGlue", ManualGlue.New);
    map.set("ManualWeld", ManualWeld.New);
    map.set("Motor", Motor.New);
    map.set("Motor6D", Motor6D.New);
    map.set("Rotate", Rotate.New);
    map.set("Snap", Snap.New);
    map.set("VelocityMotor", VelocityMotor.New);
    map.set("Weld", Weld.New);
    map.set("JointsService", JointsService.New);
    map.set("KeyboardService", KeyboardService.New);
    map.set("Keyframe", Keyframe.New);
    map.set("KeyframeMarker", KeyframeMarker.New);
    map.set("KeyframeSequenceProvider", KeyframeSequenceProvider.New);
    map.set("LSPFileSyncService", LSPFileSyncService.New);
    map.set("LanguageService", LanguageService.New);
    map.set("PointLight", PointLight.New);
    map.set("SpotLight", SpotLight.New);
    map.set("SurfaceLight", SurfaceLight.New);
    map.set("Lighting", Lighting.New);
    map.set("LiveScriptingService", LiveScriptingService.New);
    map.set("AppStorageService", AppStorageService.New);
    map.set("UserStorageService", UserStorageService.New);
    map.set("LocalizationService", LocalizationService.New);
    map.set("LocalizationTable", LocalizationTable.New);
    map.set("LodDataService", LodDataService.New);
    map.set("LogReporterService", LogReporterService.New);
    map.set("LogService", LogService.New);
    map.set("LoginService", LoginService.New);
    map.set("Script", Script.New);
    map.set("LocalScript", LocalScript.New);
    map.set("ModuleScript", ModuleScript.New);
    map.set("LuaWebService", LuaWebService.New);
    map.set("LuauScriptAnalyzerService", LuauScriptAnalyzerService.New);
    map.set("MarkerCurve", MarkerCurve.New);
    map.set("MarketplaceService", MarketplaceService.New);
    map.set("MaterialGenerationService", MaterialGenerationService.New);
    map.set("MaterialService", MaterialService.New);
    map.set("MaterialVariant", MaterialVariant.New);
    map.set("MemStorageService", MemStorageService.New);
    map.set("MemoryStoreService", MemoryStoreService.New);
    map.set("Message", Message.New);
    map.set("Hint", Hint.New);
    map.set("MessageBusService", MessageBusService.New);
    map.set("MessagingService", MessagingService.New);
    map.set("MetaBreakpointManager", MetaBreakpointManager.New);
    map.set("MouseService", MouseService.New);
    map.set("NetworkClient", NetworkClient.New);
    map.set("NetworkServer", NetworkServer.New);
    map.set("NetworkSettings", NetworkSettings.New);
    map.set("NoCollisionConstraint", NoCollisionConstraint.New);
    map.set("Noise", Noise.New);
    map.set("NotificationService", NotificationService.New);
    map.set("OmniRecommendationsService", OmniRecommendationsService.New);
    map.set("OpenCloudService", OpenCloudService.New);
    map.set("OperationGraph", OperationGraph.New);
    map.set("CornerWedgePart", CornerWedgePart.New);
    map.set("Part", Part.New);
    map.set("FlagStand", FlagStand.New);
    map.set("Seat", Seat.New);
    map.set("SkateboardPlatform", SkateboardPlatform.New);
    map.set("SpawnLocation", SpawnLocation.New);
    map.set("WedgePart", WedgePart.New);
    map.set("Terrain", Terrain.New);
    map.set("MeshPart", MeshPart.New);
    map.set("PartOperation", PartOperation.New);
    map.set("IntersectOperation", IntersectOperation.New);
    map.set("NegateOperation", NegateOperation.New);
    map.set("UnionOperation", UnionOperation.New);
    map.set("TrussPart", TrussPart.New);
    map.set("VehicleSeat", VehicleSeat.New);
    map.set("Model", Model.New);
    map.set("Actor", Actor.New);
    map.set("HopperBin", HopperBin.New);
    map.set("Tool", Tool.New);
    map.set("Flag", Flag.New);
    map.set("Workspace", Workspace.New);
    map.set("WorldModel", WorldModel.New);
    map.set("PackageService", PackageService.New);
    map.set("PackageUIService", PackageUIService.New);
    map.set("PartOperationAsset", PartOperationAsset.New);
    map.set("ParticleEmitter", ParticleEmitter.New);
    map.set("PatchBundlerFileWatch", PatchBundlerFileWatch.New);
    map.set("PathfindingLink", PathfindingLink.New);
    map.set("PathfindingModifier", PathfindingModifier.New);
    map.set("PathfindingService", PathfindingService.New);
    map.set("PermissionsService", PermissionsService.New);
    map.set("PhysicsService", PhysicsService.New);
    map.set("PlaceStatsService", PlaceStatsService.New);
    map.set("PlacesService", PlacesService.New);
    map.set("PlatformCloudStorageService", PlatformCloudStorageService.New);
    map.set("PlatformFriendsService", PlatformFriendsService.New);
    map.set("Player", Player.New);
    map.set("PlayerEmulatorService", PlayerEmulatorService.New);
    map.set("PlayerViewService", PlayerViewService.New);
    map.set("Players", Players.New);
    map.set("PluginAction", PluginAction.New);
    map.set("PluginCapabilities", PluginCapabilities.New);
    map.set("PluginDebugService", PluginDebugService.New);
    map.set("PluginGuiService", PluginGuiService.New);
    map.set("PluginManagementService", PluginManagementService.New);
    map.set("PluginPolicyService", PluginPolicyService.New);
    map.set("PointsService", PointsService.New);
    map.set("PolicyService", PolicyService.New);
    map.set("NumberPose", NumberPose.New);
    map.set("Pose", Pose.New);
    map.set("BloomEffect", BloomEffect.New);
    map.set("BlurEffect", BlurEffect.New);
    map.set("ColorCorrectionEffect", ColorCorrectionEffect.New);
    map.set("DepthOfFieldEffect", DepthOfFieldEffect.New);
    map.set("SunRaysEffect", SunRaysEffect.New);
    map.set("ProcessInstancePhysicsService", ProcessInstancePhysicsService.New);
    map.set("ProjectFolderService", ProjectFolderService.New);
    map.set("ProximityPrompt", ProximityPrompt.New);
    map.set("ProximityPromptService", ProximityPromptService.New);
    map.set("PublishService", PublishService.New);
    map.set("RbxAnalyticsService", RbxAnalyticsService.New);
    map.set("ReflectionMetadata", ReflectionMetadata.New);
    map.set("ReflectionMetadataCallbacks", ReflectionMetadataCallbacks.New);
    map.set("ReflectionMetadataClasses", ReflectionMetadataClasses.New);
    map.set("ReflectionMetadataEnums", ReflectionMetadataEnums.New);
    map.set("ReflectionMetadataEvents", ReflectionMetadataEvents.New);
    map.set("ReflectionMetadataFunctions", ReflectionMetadataFunctions.New);
    map.set("ReflectionMetadataClass", ReflectionMetadataClass.New);
    map.set("ReflectionMetadataEnum", ReflectionMetadataEnum.New);
    map.set("ReflectionMetadataEnumItem", ReflectionMetadataEnumItem.New);
    map.set("ReflectionMetadataMember", ReflectionMetadataMember.New);
    map.set("ReflectionMetadataProperties", ReflectionMetadataProperties.New);
    map.set("ReflectionMetadataYieldFunctions", ReflectionMetadataYieldFunctions.New);
    map.set("ReflectionService", ReflectionService.New);
    map.set("RemoteCursorService", RemoteCursorService.New);
    map.set("RemoteDebuggerServer", RemoteDebuggerServer.New);
    map.set("RemoteFunction", RemoteFunction.New);
    map.set("RenderSettings", RenderSettings.New);
    map.set("RenderingTest", RenderingTest.New);
    map.set("ReplicatedFirst", ReplicatedFirst.New);
    map.set("ReplicatedStorage", ReplicatedStorage.New);
    map.set("RibbonNotificationService", RibbonNotificationService.New);
    map.set("RobloxPluginGuiService", RobloxPluginGuiService.New);
    map.set("RobloxReplicatedStorage", RobloxReplicatedStorage.New);
    map.set("RobloxServerStorage", RobloxServerStorage.New);
    map.set("RomarkService", RomarkService.New);
    map.set("RotationCurve", RotationCurve.New);
    map.set("RtMessagingService", RtMessagingService.New);
    map.set("RunService", RunService.New);
    map.set("RuntimeScriptService", RuntimeScriptService.New);
    map.set("SafetyService", SafetyService.New);
    map.set("ScriptChangeService", ScriptChangeService.New);
    map.set("ScriptCloneWatcher", ScriptCloneWatcher.New);
    map.set("ScriptCloneWatcherHelper", ScriptCloneWatcherHelper.New);
    map.set("ScriptCommitService", ScriptCommitService.New);
    map.set("ScriptContext", ScriptContext.New);
    map.set("ScriptEditorService", ScriptEditorService.New);
    map.set("ScriptProfilerService", ScriptProfilerService.New);
    map.set("ScriptRegistrationService", ScriptRegistrationService.New);
    map.set("ScriptService", ScriptService.New);
    map.set("Selection", Selection.New);
    map.set("SelectionHighlightManager", SelectionHighlightManager.New);
    map.set("BuoyancySensor", BuoyancySensor.New);
    map.set("ControllerPartSensor", ControllerPartSensor.New);
    map.set("ServerScriptService", ServerScriptService.New);
    map.set("ServerStorage", ServerStorage.New);
    map.set("ServiceVisibilityService", ServiceVisibilityService.New);
    map.set("SessionService", SessionService.New);
    map.set("SharedTableRegistry", SharedTableRegistry.New);
    map.set("ShorelineUpgraderService", ShorelineUpgraderService.New);
    map.set("Sky", Sky.New);
    map.set("Smoke", Smoke.New);
    map.set("SmoothVoxelsUpgraderService", SmoothVoxelsUpgraderService.New);
    map.set("SnippetService", SnippetService.New);
    map.set("SocialService", SocialService.New);
    map.set("Sound", Sound.New);
    map.set("ChorusSoundEffect", ChorusSoundEffect.New);
    map.set("CompressorSoundEffect", CompressorSoundEffect.New);
    map.set("DistortionSoundEffect", DistortionSoundEffect.New);
    map.set("EchoSoundEffect", EchoSoundEffect.New);
    map.set("EqualizerSoundEffect", EqualizerSoundEffect.New);
    map.set("FlangeSoundEffect", FlangeSoundEffect.New);
    map.set("PitchShiftSoundEffect", PitchShiftSoundEffect.New);
    map.set("ReverbSoundEffect", ReverbSoundEffect.New);
    map.set("TremoloSoundEffect", TremoloSoundEffect.New);
    map.set("SoundGroup", SoundGroup.New);
    map.set("SoundService", SoundService.New);
    map.set("Sparkles", Sparkles.New);
    map.set("SpawnerService", SpawnerService.New);
    map.set("StandalonePluginScripts", StandalonePluginScripts.New);
    map.set("StarterGear", StarterGear.New);
    map.set("StarterPack", StarterPack.New);
    map.set("StarterPlayer", StarterPlayer.New);
    map.set("StarterPlayerScripts", StarterPlayerScripts.New);
    map.set("StarterCharacterScripts", StarterCharacterScripts.New);
    map.set("StartupMessageService", StartupMessageService.New);
    map.set("Stats", Stats.New);
    map.set("StopWatchReporter", StopWatchReporter.New);
    map.set("StreamingService", StreamingService.New);
    map.set("StudioAssetService", StudioAssetService.New);
    map.set("StudioAttachment", StudioAttachment.New);
    map.set("StudioCallout", StudioCallout.New);
    map.set("StudioData", StudioData.New);
    map.set("StudioDeviceEmulatorService", StudioDeviceEmulatorService.New);
    map.set("StudioPublishService", StudioPublishService.New);
    map.set("StudioScriptDebugEventListener", StudioScriptDebugEventListener.New);
    map.set("StudioSdkService", StudioSdkService.New);
    map.set("StudioService", StudioService.New);
    map.set("StudioWidgetsService", StudioWidgetsService.New);
    map.set("StyleRule", StyleRule.New);
    map.set("StyleSheet", StyleSheet.New);
    map.set("StyleDerive", StyleDerive.New);
    map.set("StyleLink", StyleLink.New);
    map.set("StylingService", StylingService.New);
    map.set("SurfaceAppearance", SurfaceAppearance.New);
    map.set("TaskScheduler", TaskScheduler.New);
    map.set("Team", Team.New);
    map.set("TeamCreateData", TeamCreateData.New);
    map.set("TeamCreatePublishService", TeamCreatePublishService.New);
    map.set("TeamCreateService", TeamCreateService.New);
    map.set("Teams", Teams.New);
    map.set("TeleportOptions", TeleportOptions.New);
    map.set("TeleportService", TeleportService.New);
    map.set("TemporaryCageMeshProvider", TemporaryCageMeshProvider.New);
    map.set("TemporaryScriptService", TemporaryScriptService.New);
    map.set("TerrainDetail", TerrainDetail.New);
    map.set("TerrainRegion", TerrainRegion.New);
    map.set("TestService", TestService.New);
    map.set("TextBoxService", TextBoxService.New);
    map.set("TextChannel", TextChannel.New);
    map.set("TextChatCommand", TextChatCommand.New);
    map.set("BubbleChatConfiguration", BubbleChatConfiguration.New);
    map.set("ChatInputBarConfiguration", ChatInputBarConfiguration.New);
    map.set("ChatWindowConfiguration", ChatWindowConfiguration.New);
    map.set("TextChatMessageProperties", TextChatMessageProperties.New);
    map.set("TextChatService", TextChatService.New);
    map.set("TextService", TextService.New);
    map.set("TextureGenerationService", TextureGenerationService.New);
    map.set("ThirdPartyUserService", ThirdPartyUserService.New);
    map.set("TimerService", TimerService.New);
    map.set("ToastNotificationService", ToastNotificationService.New);
    map.set("TouchInputService", TouchInputService.New);
    map.set("TracerService", TracerService.New);
    map.set("TrackerStreamAnimation", TrackerStreamAnimation.New);
    map.set("Trail", Trail.New);
    map.set("TutorialService", TutorialService.New);
    map.set("Tween", Tween.New);
    map.set("TweenService", TweenService.New);
    map.set("UGCAvatarService", UGCAvatarService.New);
    map.set("UGCValidationService", UGCValidationService.New);
    map.set("UIAspectRatioConstraint", UIAspectRatioConstraint.New);
    map.set("UISizeConstraint", UISizeConstraint.New);
    map.set("UITextSizeConstraint", UITextSizeConstraint.New);
    map.set("UICorner", UICorner.New);
    map.set("UIFlexItem", UIFlexItem.New);
    map.set("UIGradient", UIGradient.New);
    map.set("UIGridLayout", UIGridLayout.New);
    map.set("UIListLayout", UIListLayout.New);
    map.set("UIPageLayout", UIPageLayout.New);
    map.set("UITableLayout", UITableLayout.New);
    map.set("UIPadding", UIPadding.New);
    map.set("UIScale", UIScale.New);
    map.set("UIStroke", UIStroke.New);
    map.set("UnvalidatedAssetService", UnvalidatedAssetService.New);
    map.set("UserInputService", UserInputService.New);
    map.set("UserService", UserService.New);
    map.set("VRService", VRService.New);
    map.set("VRStatusService", VRStatusService.New);
    map.set("BinaryStringValue", BinaryStringValue.New);
    map.set("BoolValue", BoolValue.New);
    map.set("BrickColorValue", BrickColorValue.New);
    map.set("CFrameValue", CFrameValue.New);
    map.set("Color3Value", Color3Value.New);
    map.set("DoubleConstrainedValue", DoubleConstrainedValue.New);
    map.set("IntConstrainedValue", IntConstrainedValue.New);
    map.set("IntValue", IntValue.New);
    map.set("NumberValue", NumberValue.New);
    map.set("ObjectValue", ObjectValue.New);
    map.set("RayValue", RayValue.New);
    map.set("StringValue", StringValue.New);
    map.set("Vector3Value", Vector3Value.New);
    map.set("Vector3Curve", Vector3Curve.New);
    map.set("VersionControlService", VersionControlService.New);
    map.set("VideoCaptureService", VideoCaptureService.New);
    map.set("VideoDeviceInput", VideoDeviceInput.New);
    map.set("VideoService", VideoService.New);
    map.set("VirtualInputManager", VirtualInputManager.New);
    map.set("VirtualUser", VirtualUser.New);
    map.set("VisibilityCheckDispatcher", VisibilityCheckDispatcher.New);
    map.set("Visit", Visit.New);
    map.set("VisualizationMode", VisualizationMode.New);
    map.set("VisualizationModeCategory", VisualizationModeCategory.New);
    map.set("VisualizationModeService", VisualizationModeService.New);
    map.set("VoiceChatInternal", VoiceChatInternal.New);
    map.set("VoiceChatService", VoiceChatService.New);
    map.set("WeldConstraint", WeldConstraint.New);
    map.set("Wire", Wire.New);
    return map;
}

export class AccessModifierType extends EnumItem {
    public static readonly Allow = new AccessModifierType("Allow", 0);
    public static readonly Deny = new AccessModifierType("Deny", 1);
    public static get items() {return [AccessModifierType.Allow, AccessModifierType.Deny];}
    public static fromValue(value: number) {return AccessModifierType.items.find((item) => item._value === value);}
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
    public static get items() {return [AccessoryType.Unknown, AccessoryType.Hat, AccessoryType.Hair, AccessoryType.Face, AccessoryType.Neck, AccessoryType.Shoulder, AccessoryType.Front, AccessoryType.Back, AccessoryType.Waist, AccessoryType.TShirt, AccessoryType.Shirt, AccessoryType.Pants, AccessoryType.Jacket, AccessoryType.Sweater, AccessoryType.Shorts, AccessoryType.LeftShoe, AccessoryType.RightShoe, AccessoryType.DressSkirt, AccessoryType.Eyebrow, AccessoryType.Eyelash];}
    public static fromValue(value: number) {return AccessoryType.items.find((item) => item._value === value);}
}

export class ActuatorRelativeTo extends EnumItem {
    public static readonly Attachment0 = new ActuatorRelativeTo("Attachment0", 0);
    public static readonly Attachment1 = new ActuatorRelativeTo("Attachment1", 1);
    public static readonly World = new ActuatorRelativeTo("World", 2);
    public static get items() {return [ActuatorRelativeTo.Attachment0, ActuatorRelativeTo.Attachment1, ActuatorRelativeTo.World];}
    public static fromValue(value: number) {return ActuatorRelativeTo.items.find((item) => item._value === value);}
}

export class ActuatorType extends EnumItem {
    public static readonly None = new ActuatorType("None", 0);
    public static readonly Motor = new ActuatorType("Motor", 1);
    public static readonly Servo = new ActuatorType("Servo", 2);
    public static get items() {return [ActuatorType.None, ActuatorType.Motor, ActuatorType.Servo];}
    public static fromValue(value: number) {return ActuatorType.items.find((item) => item._value === value);}
}

export class AdShape extends EnumItem {
    public static readonly HorizontalRectangle = new AdShape("HorizontalRectangle", 1);
    public static get items() {return [AdShape.HorizontalRectangle];}
    public static fromValue(value: number) {return AdShape.items.find((item) => item._value === value);}
}

export class AdornCullingMode extends EnumItem {
    public static readonly Automatic = new AdornCullingMode("Automatic", 0);
    public static readonly Never = new AdornCullingMode("Never", 1);
    public static get items() {return [AdornCullingMode.Automatic, AdornCullingMode.Never];}
    public static fromValue(value: number) {return AdornCullingMode.items.find((item) => item._value === value);}
}

export class AlignType extends EnumItem {
    public static readonly PrimaryAxisParallel = new AlignType("PrimaryAxisParallel", 2);
    public static readonly PrimaryAxisPerpendicular = new AlignType("PrimaryAxisPerpendicular", 3);
    public static readonly PrimaryAxisLookAt = new AlignType("PrimaryAxisLookAt", 4);
    public static readonly AllAxes = new AlignType("AllAxes", 5);
    public static readonly Parallel = new AlignType("Parallel", 0);
    public static readonly Perpendicular = new AlignType("Perpendicular", 1);
    public static get items() {return [AlignType.PrimaryAxisParallel, AlignType.PrimaryAxisPerpendicular, AlignType.PrimaryAxisLookAt, AlignType.AllAxes, AlignType.Parallel, AlignType.Perpendicular];}
    public static fromValue(value: number) {return AlignType.items.find((item) => item._value === value);}
}

export class AlphaMode extends EnumItem {
    public static readonly Overlay = new AlphaMode("Overlay", 0);
    public static readonly Transparency = new AlphaMode("Transparency", 1);
    public static get items() {return [AlphaMode.Overlay, AlphaMode.Transparency];}
    public static fromValue(value: number) {return AlphaMode.items.find((item) => item._value === value);}
}

export class AnimationPriority extends EnumItem {
    public static readonly Core = new AnimationPriority("Core", 1000);
    public static readonly Idle = new AnimationPriority("Idle", 0);
    public static readonly Movement = new AnimationPriority("Movement", 1);
    public static readonly Action = new AnimationPriority("Action", 2);
    public static readonly Action2 = new AnimationPriority("Action2", 3);
    public static readonly Action3 = new AnimationPriority("Action3", 4);
    public static readonly Action4 = new AnimationPriority("Action4", 5);
    public static get items() {return [AnimationPriority.Core, AnimationPriority.Idle, AnimationPriority.Movement, AnimationPriority.Action, AnimationPriority.Action2, AnimationPriority.Action3, AnimationPriority.Action4];}
    public static fromValue(value: number) {return AnimationPriority.items.find((item) => item._value === value);}
}

export class AnimatorRetargetingMode extends EnumItem {
    public static readonly Default = new AnimatorRetargetingMode("Default", 0);
    public static readonly Disabled = new AnimatorRetargetingMode("Disabled", 1);
    public static readonly Enabled = new AnimatorRetargetingMode("Enabled", 2);
    public static get items() {return [AnimatorRetargetingMode.Default, AnimatorRetargetingMode.Disabled, AnimatorRetargetingMode.Enabled];}
    public static fromValue(value: number) {return AnimatorRetargetingMode.items.find((item) => item._value === value);}
}

export class ApplyStrokeMode extends EnumItem {
    public static readonly Contextual = new ApplyStrokeMode("Contextual", 0);
    public static readonly Border = new ApplyStrokeMode("Border", 1);
    public static get items() {return [ApplyStrokeMode.Contextual, ApplyStrokeMode.Border];}
    public static fromValue(value: number) {return ApplyStrokeMode.items.find((item) => item._value === value);}
}

export class AspectType extends EnumItem {
    public static readonly FitWithinMaxSize = new AspectType("FitWithinMaxSize", 0);
    public static readonly ScaleWithParentSize = new AspectType("ScaleWithParentSize", 1);
    public static get items() {return [AspectType.FitWithinMaxSize, AspectType.ScaleWithParentSize];}
    public static fromValue(value: number) {return AspectType.items.find((item) => item._value === value);}
}

export class AudioApiRollout extends EnumItem {
    public static readonly Disabled = new AudioApiRollout("Disabled", 0);
    public static readonly Automatic = new AudioApiRollout("Automatic", 1);
    public static readonly Enabled = new AudioApiRollout("Enabled", 2);
    public static get items() {return [AudioApiRollout.Disabled, AudioApiRollout.Automatic, AudioApiRollout.Enabled];}
    public static fromValue(value: number) {return AudioApiRollout.items.find((item) => item._value === value);}
}

export class AudioSubType extends EnumItem {
    public static readonly Music = new AudioSubType("Music", 1);
    public static readonly SoundEffect = new AudioSubType("SoundEffect", 2);
    public static get items() {return [AudioSubType.Music, AudioSubType.SoundEffect];}
    public static fromValue(value: number) {return AudioSubType.items.find((item) => item._value === value);}
}

export class AutomaticSize extends EnumItem {
    public static readonly None = new AutomaticSize("None", 0);
    public static readonly X = new AutomaticSize("X", 1);
    public static readonly Y = new AutomaticSize("Y", 2);
    public static readonly XY = new AutomaticSize("XY", 3);
    public static get items() {return [AutomaticSize.None, AutomaticSize.X, AutomaticSize.Y, AutomaticSize.XY];}
    public static fromValue(value: number) {return AutomaticSize.items.find((item) => item._value === value);}
}

export class AvatarJointUpgrade extends EnumItem {
    public static readonly Default = new AvatarJointUpgrade("Default", 0);
    public static readonly Enabled = new AvatarJointUpgrade("Enabled", 1);
    public static readonly Disabled = new AvatarJointUpgrade("Disabled", 2);
    public static get items() {return [AvatarJointUpgrade.Default, AvatarJointUpgrade.Enabled, AvatarJointUpgrade.Disabled];}
    public static fromValue(value: number) {return AvatarJointUpgrade.items.find((item) => item._value === value);}
}

export class AvatarUnificationMode extends EnumItem {
    public static readonly Default = new AvatarUnificationMode("Default", 0);
    public static readonly Disabled = new AvatarUnificationMode("Disabled", 1);
    public static readonly Enabled = new AvatarUnificationMode("Enabled", 2);
    public static get items() {return [AvatarUnificationMode.Default, AvatarUnificationMode.Disabled, AvatarUnificationMode.Enabled];}
    public static fromValue(value: number) {return AvatarUnificationMode.items.find((item) => item._value === value);}
}

export class BinType extends EnumItem {
    public static readonly Script = new BinType("Script", 0);
    public static readonly GameTool = new BinType("GameTool", 1);
    public static readonly Grab = new BinType("Grab", 2);
    public static readonly Clone = new BinType("Clone", 3);
    public static readonly Hammer = new BinType("Hammer", 4);
    public static get items() {return [BinType.Script, BinType.GameTool, BinType.Grab, BinType.Clone, BinType.Hammer];}
    public static fromValue(value: number) {return BinType.items.find((item) => item._value === value);}
}

export class BodyPart extends EnumItem {
    public static readonly Head = new BodyPart("Head", 0);
    public static readonly Torso = new BodyPart("Torso", 1);
    public static readonly LeftArm = new BodyPart("LeftArm", 2);
    public static readonly RightArm = new BodyPart("RightArm", 3);
    public static readonly LeftLeg = new BodyPart("LeftLeg", 4);
    public static readonly RightLeg = new BodyPart("RightLeg", 5);
    public static get items() {return [BodyPart.Head, BodyPart.Torso, BodyPart.LeftArm, BodyPart.RightArm, BodyPart.LeftLeg, BodyPart.RightLeg];}
    public static fromValue(value: number) {return BodyPart.items.find((item) => item._value === value);}
}

export class BorderMode extends EnumItem {
    public static readonly Outline = new BorderMode("Outline", 0);
    public static readonly Middle = new BorderMode("Middle", 1);
    public static readonly Inset = new BorderMode("Inset", 2);
    public static get items() {return [BorderMode.Outline, BorderMode.Middle, BorderMode.Inset];}
    public static fromValue(value: number) {return BorderMode.items.find((item) => item._value === value);}
}

export class ButtonStyle extends EnumItem {
    public static readonly Custom = new ButtonStyle("Custom", 0);
    public static readonly RobloxButtonDefault = new ButtonStyle("RobloxButtonDefault", 1);
    public static readonly RobloxButton = new ButtonStyle("RobloxButton", 2);
    public static readonly RobloxRoundButton = new ButtonStyle("RobloxRoundButton", 3);
    public static readonly RobloxRoundDefaultButton = new ButtonStyle("RobloxRoundDefaultButton", 4);
    public static readonly RobloxRoundDropdownButton = new ButtonStyle("RobloxRoundDropdownButton", 5);
    public static get items() {return [ButtonStyle.Custom, ButtonStyle.RobloxButtonDefault, ButtonStyle.RobloxButton, ButtonStyle.RobloxRoundButton, ButtonStyle.RobloxRoundDefaultButton, ButtonStyle.RobloxRoundDropdownButton];}
    public static fromValue(value: number) {return ButtonStyle.items.find((item) => item._value === value);}
}

export class CSGAsyncDynamicCollision extends EnumItem {
    public static readonly Default = new CSGAsyncDynamicCollision("Default", 0);
    public static readonly Disabled = new CSGAsyncDynamicCollision("Disabled", 1);
    public static readonly Experimental = new CSGAsyncDynamicCollision("Experimental", 2);
    public static get items() {return [CSGAsyncDynamicCollision.Default, CSGAsyncDynamicCollision.Disabled, CSGAsyncDynamicCollision.Experimental];}
    public static fromValue(value: number) {return CSGAsyncDynamicCollision.items.find((item) => item._value === value);}
}

export class CameraMode extends EnumItem {
    public static readonly Classic = new CameraMode("Classic", 0);
    public static readonly LockFirstPerson = new CameraMode("LockFirstPerson", 1);
    public static get items() {return [CameraMode.Classic, CameraMode.LockFirstPerson];}
    public static fromValue(value: number) {return CameraMode.items.find((item) => item._value === value);}
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
    public static get items() {return [CameraType.Fixed, CameraType.Attach, CameraType.Watch, CameraType.Track, CameraType.Follow, CameraType.Custom, CameraType.Scriptable, CameraType.Orbital];}
    public static fromValue(value: number) {return CameraType.items.find((item) => item._value === value);}
}

export class CharacterControlMode extends EnumItem {
    public static readonly Default = new CharacterControlMode("Default", 0);
    public static readonly Legacy = new CharacterControlMode("Legacy", 1);
    public static readonly NoCharacterController = new CharacterControlMode("NoCharacterController", 2);
    public static readonly LuaCharacterController = new CharacterControlMode("LuaCharacterController", 3);
    public static get items() {return [CharacterControlMode.Default, CharacterControlMode.Legacy, CharacterControlMode.NoCharacterController, CharacterControlMode.LuaCharacterController];}
    public static fromValue(value: number) {return CharacterControlMode.items.find((item) => item._value === value);}
}

export class ChatVersion extends EnumItem {
    public static readonly LegacyChatService = new ChatVersion("LegacyChatService", 0);
    public static readonly TextChatService = new ChatVersion("TextChatService", 1);
    public static get items() {return [ChatVersion.LegacyChatService, ChatVersion.TextChatService];}
    public static fromValue(value: number) {return ChatVersion.items.find((item) => item._value === value);}
}

export class ClientAnimatorThrottlingMode extends EnumItem {
    public static readonly Default = new ClientAnimatorThrottlingMode("Default", 0);
    public static readonly Disabled = new ClientAnimatorThrottlingMode("Disabled", 1);
    public static readonly Enabled = new ClientAnimatorThrottlingMode("Enabled", 2);
    public static get items() {return [ClientAnimatorThrottlingMode.Default, ClientAnimatorThrottlingMode.Disabled, ClientAnimatorThrottlingMode.Enabled];}
    public static fromValue(value: number) {return ClientAnimatorThrottlingMode.items.find((item) => item._value === value);}
}

export class DecreaseMinimumPartDensityMode extends EnumItem {
    public static readonly Default = new DecreaseMinimumPartDensityMode("Default", 0);
    public static readonly Disabled = new DecreaseMinimumPartDensityMode("Disabled", 1);
    public static readonly Enabled = new DecreaseMinimumPartDensityMode("Enabled", 2);
    public static get items() {return [DecreaseMinimumPartDensityMode.Default, DecreaseMinimumPartDensityMode.Disabled, DecreaseMinimumPartDensityMode.Enabled];}
    public static fromValue(value: number) {return DecreaseMinimumPartDensityMode.items.find((item) => item._value === value);}
}

export class DevCameraOcclusionMode extends EnumItem {
    public static readonly Zoom = new DevCameraOcclusionMode("Zoom", 0);
    public static readonly Invisicam = new DevCameraOcclusionMode("Invisicam", 1);
    public static get items() {return [DevCameraOcclusionMode.Zoom, DevCameraOcclusionMode.Invisicam];}
    public static fromValue(value: number) {return DevCameraOcclusionMode.items.find((item) => item._value === value);}
}

export class DevComputerCameraMovementMode extends EnumItem {
    public static readonly UserChoice = new DevComputerCameraMovementMode("UserChoice", 0);
    public static readonly Classic = new DevComputerCameraMovementMode("Classic", 1);
    public static readonly Follow = new DevComputerCameraMovementMode("Follow", 2);
    public static readonly Orbital = new DevComputerCameraMovementMode("Orbital", 3);
    public static readonly CameraToggle = new DevComputerCameraMovementMode("CameraToggle", 4);
    public static get items() {return [DevComputerCameraMovementMode.UserChoice, DevComputerCameraMovementMode.Classic, DevComputerCameraMovementMode.Follow, DevComputerCameraMovementMode.Orbital, DevComputerCameraMovementMode.CameraToggle];}
    public static fromValue(value: number) {return DevComputerCameraMovementMode.items.find((item) => item._value === value);}
}

export class DevComputerMovementMode extends EnumItem {
    public static readonly UserChoice = new DevComputerMovementMode("UserChoice", 0);
    public static readonly KeyboardMouse = new DevComputerMovementMode("KeyboardMouse", 1);
    public static readonly ClickToMove = new DevComputerMovementMode("ClickToMove", 2);
    public static readonly Scriptable = new DevComputerMovementMode("Scriptable", 3);
    public static get items() {return [DevComputerMovementMode.UserChoice, DevComputerMovementMode.KeyboardMouse, DevComputerMovementMode.ClickToMove, DevComputerMovementMode.Scriptable];}
    public static fromValue(value: number) {return DevComputerMovementMode.items.find((item) => item._value === value);}
}

export class DevTouchCameraMovementMode extends EnumItem {
    public static readonly UserChoice = new DevTouchCameraMovementMode("UserChoice", 0);
    public static readonly Classic = new DevTouchCameraMovementMode("Classic", 1);
    public static readonly Follow = new DevTouchCameraMovementMode("Follow", 2);
    public static readonly Orbital = new DevTouchCameraMovementMode("Orbital", 3);
    public static get items() {return [DevTouchCameraMovementMode.UserChoice, DevTouchCameraMovementMode.Classic, DevTouchCameraMovementMode.Follow, DevTouchCameraMovementMode.Orbital];}
    public static fromValue(value: number) {return DevTouchCameraMovementMode.items.find((item) => item._value === value);}
}

export class DevTouchMovementMode extends EnumItem {
    public static readonly UserChoice = new DevTouchMovementMode("UserChoice", 0);
    public static readonly Thumbstick = new DevTouchMovementMode("Thumbstick", 1);
    public static readonly DPad = new DevTouchMovementMode("DPad", 2);
    public static readonly Thumbpad = new DevTouchMovementMode("Thumbpad", 3);
    public static readonly ClickToMove = new DevTouchMovementMode("ClickToMove", 4);
    public static readonly Scriptable = new DevTouchMovementMode("Scriptable", 5);
    public static readonly DynamicThumbstick = new DevTouchMovementMode("DynamicThumbstick", 6);
    public static get items() {return [DevTouchMovementMode.UserChoice, DevTouchMovementMode.Thumbstick, DevTouchMovementMode.DPad, DevTouchMovementMode.Thumbpad, DevTouchMovementMode.ClickToMove, DevTouchMovementMode.Scriptable, DevTouchMovementMode.DynamicThumbstick];}
    public static fromValue(value: number) {return DevTouchMovementMode.items.find((item) => item._value === value);}
}

export class DialogBehaviorType extends EnumItem {
    public static readonly SinglePlayer = new DialogBehaviorType("SinglePlayer", 0);
    public static readonly MultiplePlayers = new DialogBehaviorType("MultiplePlayers", 1);
    public static get items() {return [DialogBehaviorType.SinglePlayer, DialogBehaviorType.MultiplePlayers];}
    public static fromValue(value: number) {return DialogBehaviorType.items.find((item) => item._value === value);}
}

export class DialogPurpose extends EnumItem {
    public static readonly Quest = new DialogPurpose("Quest", 0);
    public static readonly Help = new DialogPurpose("Help", 1);
    public static readonly Shop = new DialogPurpose("Shop", 2);
    public static get items() {return [DialogPurpose.Quest, DialogPurpose.Help, DialogPurpose.Shop];}
    public static fromValue(value: number) {return DialogPurpose.items.find((item) => item._value === value);}
}

export class DialogTone extends EnumItem {
    public static readonly Neutral = new DialogTone("Neutral", 0);
    public static readonly Friendly = new DialogTone("Friendly", 1);
    public static readonly Enemy = new DialogTone("Enemy", 2);
    public static get items() {return [DialogTone.Neutral, DialogTone.Friendly, DialogTone.Enemy];}
    public static fromValue(value: number) {return DialogTone.items.find((item) => item._value === value);}
}

export class DominantAxis extends EnumItem {
    public static readonly Width = new DominantAxis("Width", 0);
    public static readonly Height = new DominantAxis("Height", 1);
    public static get items() {return [DominantAxis.Width, DominantAxis.Height];}
    public static fromValue(value: number) {return DominantAxis.items.find((item) => item._value === value);}
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
    public static get items() {return [DragDetectorDragStyle.TranslateLine, DragDetectorDragStyle.TranslatePlane, DragDetectorDragStyle.TranslatePlaneOrLine, DragDetectorDragStyle.TranslateLineOrPlane, DragDetectorDragStyle.TranslateViewPlane, DragDetectorDragStyle.RotateAxis, DragDetectorDragStyle.RotateTrackball, DragDetectorDragStyle.Scriptable, DragDetectorDragStyle.BestForDevice];}
    public static fromValue(value: number) {return DragDetectorDragStyle.items.find((item) => item._value === value);}
}

export class DragDetectorPermissionPolicy extends EnumItem {
    public static readonly Nobody = new DragDetectorPermissionPolicy("Nobody", 0);
    public static readonly Everybody = new DragDetectorPermissionPolicy("Everybody", 1);
    public static readonly Scriptable = new DragDetectorPermissionPolicy("Scriptable", 2);
    public static get items() {return [DragDetectorPermissionPolicy.Nobody, DragDetectorPermissionPolicy.Everybody, DragDetectorPermissionPolicy.Scriptable];}
    public static fromValue(value: number) {return DragDetectorPermissionPolicy.items.find((item) => item._value === value);}
}

export class DragDetectorResponseStyle extends EnumItem {
    public static readonly Geometric = new DragDetectorResponseStyle("Geometric", 0);
    public static readonly Physical = new DragDetectorResponseStyle("Physical", 1);
    public static readonly Custom = new DragDetectorResponseStyle("Custom", 2);
    public static get items() {return [DragDetectorResponseStyle.Geometric, DragDetectorResponseStyle.Physical, DragDetectorResponseStyle.Custom];}
    public static fromValue(value: number) {return DragDetectorResponseStyle.items.find((item) => item._value === value);}
}

export class EasingDirection extends EnumItem {
    public static readonly In = new EasingDirection("In", 0);
    public static readonly Out = new EasingDirection("Out", 1);
    public static readonly InOut = new EasingDirection("InOut", 2);
    public static get items() {return [EasingDirection.In, EasingDirection.Out, EasingDirection.InOut];}
    public static fromValue(value: number) {return EasingDirection.items.find((item) => item._value === value);}
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
    public static get items() {return [EasingStyle.Linear, EasingStyle.Sine, EasingStyle.Back, EasingStyle.Quad, EasingStyle.Quart, EasingStyle.Quint, EasingStyle.Bounce, EasingStyle.Elastic, EasingStyle.Exponential, EasingStyle.Circular, EasingStyle.Cubic];}
    public static fromValue(value: number) {return EasingStyle.items.find((item) => item._value === value);}
}

export class EditorLiveScripting extends EnumItem {
    public static readonly Default = new EditorLiveScripting("Default", 0);
    public static readonly Disabled = new EditorLiveScripting("Disabled", 1);
    public static readonly Enabled = new EditorLiveScripting("Enabled", 2);
    public static get items() {return [EditorLiveScripting.Default, EditorLiveScripting.Disabled, EditorLiveScripting.Enabled];}
    public static fromValue(value: number) {return EditorLiveScripting.items.find((item) => item._value === value);}
}

export class ElasticBehavior extends EnumItem {
    public static readonly WhenScrollable = new ElasticBehavior("WhenScrollable", 0);
    public static readonly Always = new ElasticBehavior("Always", 1);
    public static readonly Never = new ElasticBehavior("Never", 2);
    public static get items() {return [ElasticBehavior.WhenScrollable, ElasticBehavior.Always, ElasticBehavior.Never];}
    public static fromValue(value: number) {return ElasticBehavior.items.find((item) => item._value === value);}
}

export class ExplosionType extends EnumItem {
    public static readonly NoCraters = new ExplosionType("NoCraters", 0);
    public static readonly Craters = new ExplosionType("Craters", 1);
    public static get items() {return [ExplosionType.NoCraters, ExplosionType.Craters];}
    public static fromValue(value: number) {return ExplosionType.items.find((item) => item._value === value);}
}

export class FieldOfViewMode extends EnumItem {
    public static readonly Vertical = new FieldOfViewMode("Vertical", 0);
    public static readonly Diagonal = new FieldOfViewMode("Diagonal", 1);
    public static readonly MaxAxis = new FieldOfViewMode("MaxAxis", 2);
    public static get items() {return [FieldOfViewMode.Vertical, FieldOfViewMode.Diagonal, FieldOfViewMode.MaxAxis];}
    public static fromValue(value: number) {return FieldOfViewMode.items.find((item) => item._value === value);}
}

export class FillDirection extends EnumItem {
    public static readonly Horizontal = new FillDirection("Horizontal", 0);
    public static readonly Vertical = new FillDirection("Vertical", 1);
    public static get items() {return [FillDirection.Horizontal, FillDirection.Vertical];}
    public static fromValue(value: number) {return FillDirection.items.find((item) => item._value === value);}
}

export class FluidFidelity extends EnumItem {
    public static readonly Automatic = new FluidFidelity("Automatic", 0);
    public static readonly UseCollisionGeometry = new FluidFidelity("UseCollisionGeometry", 1);
    public static readonly UsePreciseGeometry = new FluidFidelity("UsePreciseGeometry", 2);
    public static get items() {return [FluidFidelity.Automatic, FluidFidelity.UseCollisionGeometry, FluidFidelity.UsePreciseGeometry];}
    public static fromValue(value: number) {return FluidFidelity.items.find((item) => item._value === value);}
}

export class FluidForces extends EnumItem {
    public static readonly Default = new FluidForces("Default", 0);
    public static readonly Experimental = new FluidForces("Experimental", 1);
    public static get items() {return [FluidForces.Default, FluidForces.Experimental];}
    public static fromValue(value: number) {return FluidForces.items.find((item) => item._value === value);}
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
    public static get items() {return [Font.Legacy, Font.Arial, Font.ArialBold, Font.SourceSans, Font.SourceSansBold, Font.SourceSansLight, Font.SourceSansItalic, Font.Bodoni, Font.Garamond, Font.Cartoon, Font.Code, Font.Highway, Font.SciFi, Font.Arcade, Font.Fantasy, Font.Antique, Font.SourceSansSemibold, Font.Gotham, Font.GothamMedium, Font.GothamBold, Font.GothamBlack, Font.AmaticSC, Font.Bangers, Font.Creepster, Font.DenkOne, Font.Fondamento, Font.FredokaOne, Font.GrenzeGotisch, Font.IndieFlower, Font.JosefinSans, Font.Jura, Font.Kalam, Font.LuckiestGuy, Font.Merriweather, Font.Michroma, Font.Nunito, Font.Oswald, Font.PatrickHand, Font.PermanentMarker, Font.Roboto, Font.RobotoCondensed, Font.RobotoMono, Font.Sarpanch, Font.SpecialElite, Font.TitilliumWeb, Font.Ubuntu, Font.BuilderSans, Font.BuilderSansMedium, Font.BuilderSansBold, Font.BuilderSansExtraBold, Font.Arimo, Font.ArimoBold, Font.Unknown];}
    public static fromValue(value: number) {return Font.items.find((item) => item._value === value);}
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
    public static get items() {return [FontSize.Size8, FontSize.Size9, FontSize.Size10, FontSize.Size11, FontSize.Size12, FontSize.Size14, FontSize.Size18, FontSize.Size24, FontSize.Size36, FontSize.Size48, FontSize.Size28, FontSize.Size32, FontSize.Size42, FontSize.Size60, FontSize.Size96];}
    public static fromValue(value: number) {return FontSize.items.find((item) => item._value === value);}
}

export class ForceLimitMode extends EnumItem {
    public static readonly Magnitude = new ForceLimitMode("Magnitude", 0);
    public static readonly PerAxis = new ForceLimitMode("PerAxis", 1);
    public static get items() {return [ForceLimitMode.Magnitude, ForceLimitMode.PerAxis];}
    public static fromValue(value: number) {return ForceLimitMode.items.find((item) => item._value === value);}
}

export class FormFactor extends EnumItem {
    public static readonly Symmetric = new FormFactor("Symmetric", 0);
    public static readonly Brick = new FormFactor("Brick", 1);
    public static readonly Plate = new FormFactor("Plate", 2);
    public static readonly Custom = new FormFactor("Custom", 3);
    public static get items() {return [FormFactor.Symmetric, FormFactor.Brick, FormFactor.Plate, FormFactor.Custom];}
    public static fromValue(value: number) {return FormFactor.items.find((item) => item._value === value);}
}

export class FrameStyle extends EnumItem {
    public static readonly Custom = new FrameStyle("Custom", 0);
    public static readonly ChatBlue = new FrameStyle("ChatBlue", 1);
    public static readonly RobloxSquare = new FrameStyle("RobloxSquare", 2);
    public static readonly RobloxRound = new FrameStyle("RobloxRound", 3);
    public static readonly ChatGreen = new FrameStyle("ChatGreen", 4);
    public static readonly ChatRed = new FrameStyle("ChatRed", 5);
    public static readonly DropShadow = new FrameStyle("DropShadow", 6);
    public static get items() {return [FrameStyle.Custom, FrameStyle.ChatBlue, FrameStyle.RobloxSquare, FrameStyle.RobloxRound, FrameStyle.ChatGreen, FrameStyle.ChatRed, FrameStyle.DropShadow];}
    public static fromValue(value: number) {return FrameStyle.items.find((item) => item._value === value);}
}

export class FramerateManagerMode extends EnumItem {
    public static readonly Automatic = new FramerateManagerMode("Automatic", 0);
    public static readonly On = new FramerateManagerMode("On", 1);
    public static readonly Off = new FramerateManagerMode("Off", 2);
    public static get items() {return [FramerateManagerMode.Automatic, FramerateManagerMode.On, FramerateManagerMode.Off];}
    public static fromValue(value: number) {return FramerateManagerMode.items.find((item) => item._value === value);}
}

export class GameAvatarType extends EnumItem {
    public static readonly R6 = new GameAvatarType("R6", 0);
    public static readonly R15 = new GameAvatarType("R15", 1);
    public static readonly PlayerChoice = new GameAvatarType("PlayerChoice", 2);
    public static get items() {return [GameAvatarType.R6, GameAvatarType.R15, GameAvatarType.PlayerChoice];}
    public static fromValue(value: number) {return GameAvatarType.items.find((item) => item._value === value);}
}

export class GraphicsMode extends EnumItem {
    public static readonly Automatic = new GraphicsMode("Automatic", 1);
    public static readonly Direct3D11 = new GraphicsMode("Direct3D11", 2);
    public static readonly OpenGL = new GraphicsMode("OpenGL", 4);
    public static readonly Metal = new GraphicsMode("Metal", 5);
    public static readonly Vulkan = new GraphicsMode("Vulkan", 6);
    public static readonly NoGraphics = new GraphicsMode("NoGraphics", 9);
    public static get items() {return [GraphicsMode.Automatic, GraphicsMode.Direct3D11, GraphicsMode.OpenGL, GraphicsMode.Metal, GraphicsMode.Vulkan, GraphicsMode.NoGraphics];}
    public static fromValue(value: number) {return GraphicsMode.items.find((item) => item._value === value);}
}

export class HandlesStyle extends EnumItem {
    public static readonly Resize = new HandlesStyle("Resize", 0);
    public static readonly Movement = new HandlesStyle("Movement", 1);
    public static get items() {return [HandlesStyle.Resize, HandlesStyle.Movement];}
    public static fromValue(value: number) {return HandlesStyle.items.find((item) => item._value === value);}
}

export class HighlightDepthMode extends EnumItem {
    public static readonly AlwaysOnTop = new HighlightDepthMode("AlwaysOnTop", 0);
    public static readonly Occluded = new HighlightDepthMode("Occluded", 1);
    public static get items() {return [HighlightDepthMode.AlwaysOnTop, HighlightDepthMode.Occluded];}
    public static fromValue(value: number) {return HighlightDepthMode.items.find((item) => item._value === value);}
}

export class HorizontalAlignment extends EnumItem {
    public static readonly Center = new HorizontalAlignment("Center", 0);
    public static readonly Left = new HorizontalAlignment("Left", 1);
    public static readonly Right = new HorizontalAlignment("Right", 2);
    public static get items() {return [HorizontalAlignment.Center, HorizontalAlignment.Left, HorizontalAlignment.Right];}
    public static fromValue(value: number) {return HorizontalAlignment.items.find((item) => item._value === value);}
}

export class HumanoidCollisionType extends EnumItem {
    public static readonly OuterBox = new HumanoidCollisionType("OuterBox", 0);
    public static readonly InnerBox = new HumanoidCollisionType("InnerBox", 1);
    public static get items() {return [HumanoidCollisionType.OuterBox, HumanoidCollisionType.InnerBox];}
    public static fromValue(value: number) {return HumanoidCollisionType.items.find((item) => item._value === value);}
}

export class HumanoidDisplayDistanceType extends EnumItem {
    public static readonly Viewer = new HumanoidDisplayDistanceType("Viewer", 0);
    public static readonly Subject = new HumanoidDisplayDistanceType("Subject", 1);
    public static readonly None = new HumanoidDisplayDistanceType("None", 2);
    public static get items() {return [HumanoidDisplayDistanceType.Viewer, HumanoidDisplayDistanceType.Subject, HumanoidDisplayDistanceType.None];}
    public static fromValue(value: number) {return HumanoidDisplayDistanceType.items.find((item) => item._value === value);}
}

export class HumanoidHealthDisplayType extends EnumItem {
    public static readonly DisplayWhenDamaged = new HumanoidHealthDisplayType("DisplayWhenDamaged", 0);
    public static readonly AlwaysOn = new HumanoidHealthDisplayType("AlwaysOn", 1);
    public static readonly AlwaysOff = new HumanoidHealthDisplayType("AlwaysOff", 2);
    public static get items() {return [HumanoidHealthDisplayType.DisplayWhenDamaged, HumanoidHealthDisplayType.AlwaysOn, HumanoidHealthDisplayType.AlwaysOff];}
    public static fromValue(value: number) {return HumanoidHealthDisplayType.items.find((item) => item._value === value);}
}

export class HumanoidRigType extends EnumItem {
    public static readonly R6 = new HumanoidRigType("R6", 0);
    public static readonly R15 = new HumanoidRigType("R15", 1);
    public static get items() {return [HumanoidRigType.R6, HumanoidRigType.R15];}
    public static fromValue(value: number) {return HumanoidRigType.items.find((item) => item._value === value);}
}

export class IKControlConstraintSupport extends EnumItem {
    public static readonly Default = new IKControlConstraintSupport("Default", 0);
    public static readonly Disabled = new IKControlConstraintSupport("Disabled", 1);
    public static readonly Enabled = new IKControlConstraintSupport("Enabled", 2);
    public static get items() {return [IKControlConstraintSupport.Default, IKControlConstraintSupport.Disabled, IKControlConstraintSupport.Enabled];}
    public static fromValue(value: number) {return IKControlConstraintSupport.items.find((item) => item._value === value);}
}

export class IKControlType extends EnumItem {
    public static readonly Transform = new IKControlType("Transform", 0);
    public static readonly Position = new IKControlType("Position", 1);
    public static readonly Rotation = new IKControlType("Rotation", 2);
    public static readonly LookAt = new IKControlType("LookAt", 3);
    public static get items() {return [IKControlType.Transform, IKControlType.Position, IKControlType.Rotation, IKControlType.LookAt];}
    public static fromValue(value: number) {return IKControlType.items.find((item) => item._value === value);}
}

export class InOut extends EnumItem {
    public static readonly Edge = new InOut("Edge", 0);
    public static readonly Inset = new InOut("Inset", 1);
    public static readonly Center = new InOut("Center", 2);
    public static get items() {return [InOut.Edge, InOut.Inset, InOut.Center];}
    public static fromValue(value: number) {return InOut.items.find((item) => item._value === value);}
}

export class InputType extends EnumItem {
    public static readonly NoInput = new InputType("NoInput", 0);
    public static readonly Constant = new InputType("Constant", 12);
    public static readonly Sin = new InputType("Sin", 13);
    public static get items() {return [InputType.NoInput, InputType.Constant, InputType.Sin];}
    public static fromValue(value: number) {return InputType.items.find((item) => item._value === value);}
}

export class ItemLineAlignment extends EnumItem {
    public static readonly Automatic = new ItemLineAlignment("Automatic", 0);
    public static readonly Start = new ItemLineAlignment("Start", 1);
    public static readonly Center = new ItemLineAlignment("Center", 2);
    public static readonly End = new ItemLineAlignment("End", 3);
    public static readonly Stretch = new ItemLineAlignment("Stretch", 4);
    public static get items() {return [ItemLineAlignment.Automatic, ItemLineAlignment.Start, ItemLineAlignment.Center, ItemLineAlignment.End, ItemLineAlignment.Stretch];}
    public static fromValue(value: number) {return ItemLineAlignment.items.find((item) => item._value === value);}
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
    public static get items() {return [KeyCode.Unknown, KeyCode.Backspace, KeyCode.Tab, KeyCode.Clear, KeyCode.Return, KeyCode.Pause, KeyCode.Escape, KeyCode.Space, KeyCode.QuotedDouble, KeyCode.Hash, KeyCode.Dollar, KeyCode.Percent, KeyCode.Ampersand, KeyCode.Quote, KeyCode.LeftParenthesis, KeyCode.RightParenthesis, KeyCode.Asterisk, KeyCode.Plus, KeyCode.Comma, KeyCode.Minus, KeyCode.Period, KeyCode.Slash, KeyCode.Zero, KeyCode.One, KeyCode.Two, KeyCode.Three, KeyCode.Four, KeyCode.Five, KeyCode.Six, KeyCode.Seven, KeyCode.Eight, KeyCode.Nine, KeyCode.Colon, KeyCode.Semicolon, KeyCode.LessThan, KeyCode.Equals, KeyCode.GreaterThan, KeyCode.Question, KeyCode.At, KeyCode.LeftBracket, KeyCode.BackSlash, KeyCode.RightBracket, KeyCode.Caret, KeyCode.Underscore, KeyCode.Backquote, KeyCode.A, KeyCode.B, KeyCode.C, KeyCode.D, KeyCode.E, KeyCode.F, KeyCode.G, KeyCode.H, KeyCode.I, KeyCode.J, KeyCode.K, KeyCode.L, KeyCode.M, KeyCode.N, KeyCode.O, KeyCode.P, KeyCode.Q, KeyCode.R, KeyCode.S, KeyCode.T, KeyCode.U, KeyCode.V, KeyCode.W, KeyCode.X, KeyCode.Y, KeyCode.Z, KeyCode.LeftCurly, KeyCode.Pipe, KeyCode.RightCurly, KeyCode.Tilde, KeyCode.Delete, KeyCode.World0, KeyCode.World1, KeyCode.World2, KeyCode.World3, KeyCode.World4, KeyCode.World5, KeyCode.World6, KeyCode.World7, KeyCode.World8, KeyCode.World9, KeyCode.World10, KeyCode.World11, KeyCode.World12, KeyCode.World13, KeyCode.World14, KeyCode.World15, KeyCode.World16, KeyCode.World17, KeyCode.World18, KeyCode.World19, KeyCode.World20, KeyCode.World21, KeyCode.World22, KeyCode.World23, KeyCode.World24, KeyCode.World25, KeyCode.World26, KeyCode.World27, KeyCode.World28, KeyCode.World29, KeyCode.World30, KeyCode.World31, KeyCode.World32, KeyCode.World33, KeyCode.World34, KeyCode.World35, KeyCode.World36, KeyCode.World37, KeyCode.World38, KeyCode.World39, KeyCode.World40, KeyCode.World41, KeyCode.World42, KeyCode.World43, KeyCode.World44, KeyCode.World45, KeyCode.World46, KeyCode.World47, KeyCode.World48, KeyCode.World49, KeyCode.World50, KeyCode.World51, KeyCode.World52, KeyCode.World53, KeyCode.World54, KeyCode.World55, KeyCode.World56, KeyCode.World57, KeyCode.World58, KeyCode.World59, KeyCode.World60, KeyCode.World61, KeyCode.World62, KeyCode.World63, KeyCode.World64, KeyCode.World65, KeyCode.World66, KeyCode.World67, KeyCode.World68, KeyCode.World69, KeyCode.World70, KeyCode.World71, KeyCode.World72, KeyCode.World73, KeyCode.World74, KeyCode.World75, KeyCode.World76, KeyCode.World77, KeyCode.World78, KeyCode.World79, KeyCode.World80, KeyCode.World81, KeyCode.World82, KeyCode.World83, KeyCode.World84, KeyCode.World85, KeyCode.World86, KeyCode.World87, KeyCode.World88, KeyCode.World89, KeyCode.World90, KeyCode.World91, KeyCode.World92, KeyCode.World93, KeyCode.World94, KeyCode.World95, KeyCode.KeypadZero, KeyCode.KeypadOne, KeyCode.KeypadTwo, KeyCode.KeypadThree, KeyCode.KeypadFour, KeyCode.KeypadFive, KeyCode.KeypadSix, KeyCode.KeypadSeven, KeyCode.KeypadEight, KeyCode.KeypadNine, KeyCode.KeypadPeriod, KeyCode.KeypadDivide, KeyCode.KeypadMultiply, KeyCode.KeypadMinus, KeyCode.KeypadPlus, KeyCode.KeypadEnter, KeyCode.KeypadEquals, KeyCode.Up, KeyCode.Down, KeyCode.Right, KeyCode.Left, KeyCode.Insert, KeyCode.Home, KeyCode.End, KeyCode.PageUp, KeyCode.PageDown, KeyCode.F1, KeyCode.F2, KeyCode.F3, KeyCode.F4, KeyCode.F5, KeyCode.F6, KeyCode.F7, KeyCode.F8, KeyCode.F9, KeyCode.F10, KeyCode.F11, KeyCode.F12, KeyCode.F13, KeyCode.F14, KeyCode.F15, KeyCode.NumLock, KeyCode.CapsLock, KeyCode.ScrollLock, KeyCode.RightShift, KeyCode.LeftShift, KeyCode.RightControl, KeyCode.LeftControl, KeyCode.RightAlt, KeyCode.LeftAlt, KeyCode.RightMeta, KeyCode.LeftMeta, KeyCode.LeftSuper, KeyCode.RightSuper, KeyCode.Mode, KeyCode.Compose, KeyCode.Help, KeyCode.Print, KeyCode.SysReq, KeyCode.Break, KeyCode.Menu, KeyCode.Power, KeyCode.Euro, KeyCode.Undo, KeyCode.ButtonX, KeyCode.ButtonY, KeyCode.ButtonA, KeyCode.ButtonB, KeyCode.ButtonR1, KeyCode.ButtonL1, KeyCode.ButtonR2, KeyCode.ButtonL2, KeyCode.ButtonR3, KeyCode.ButtonL3, KeyCode.ButtonStart, KeyCode.ButtonSelect, KeyCode.DPadLeft, KeyCode.DPadRight, KeyCode.DPadUp, KeyCode.DPadDown, KeyCode.Thumbstick1, KeyCode.Thumbstick2];}
    public static fromValue(value: number) {return KeyCode.items.find((item) => item._value === value);}
}

export class LeftRight extends EnumItem {
    public static readonly Left = new LeftRight("Left", 0);
    public static readonly Center = new LeftRight("Center", 1);
    public static readonly Right = new LeftRight("Right", 2);
    public static get items() {return [LeftRight.Left, LeftRight.Center, LeftRight.Right];}
    public static fromValue(value: number) {return LeftRight.items.find((item) => item._value === value);}
}

export class LineJoinMode extends EnumItem {
    public static readonly Round = new LineJoinMode("Round", 0);
    public static readonly Bevel = new LineJoinMode("Bevel", 1);
    public static readonly Miter = new LineJoinMode("Miter", 2);
    public static get items() {return [LineJoinMode.Round, LineJoinMode.Bevel, LineJoinMode.Miter];}
    public static fromValue(value: number) {return LineJoinMode.items.find((item) => item._value === value);}
}

export class LoadCharacterLayeredClothing extends EnumItem {
    public static readonly Default = new LoadCharacterLayeredClothing("Default", 0);
    public static readonly Disabled = new LoadCharacterLayeredClothing("Disabled", 1);
    public static readonly Enabled = new LoadCharacterLayeredClothing("Enabled", 2);
    public static get items() {return [LoadCharacterLayeredClothing.Default, LoadCharacterLayeredClothing.Disabled, LoadCharacterLayeredClothing.Enabled];}
    public static fromValue(value: number) {return LoadCharacterLayeredClothing.items.find((item) => item._value === value);}
}

export class LoadDynamicHeads extends EnumItem {
    public static readonly Default = new LoadDynamicHeads("Default", 0);
    public static readonly Disabled = new LoadDynamicHeads("Disabled", 1);
    public static readonly Enabled = new LoadDynamicHeads("Enabled", 2);
    public static get items() {return [LoadDynamicHeads.Default, LoadDynamicHeads.Disabled, LoadDynamicHeads.Enabled];}
    public static fromValue(value: number) {return LoadDynamicHeads.items.find((item) => item._value === value);}
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
    public static get items() {return [Material.Plastic, Material.SmoothPlastic, Material.Neon, Material.Wood, Material.WoodPlanks, Material.Marble, Material.Slate, Material.Concrete, Material.Granite, Material.Brick, Material.Pebble, Material.Cobblestone, Material.Rock, Material.Sandstone, Material.Basalt, Material.CrackedLava, Material.Limestone, Material.Pavement, Material.CorrodedMetal, Material.DiamondPlate, Material.Foil, Material.Metal, Material.Grass, Material.LeafyGrass, Material.Sand, Material.Fabric, Material.Snow, Material.Mud, Material.Ground, Material.Asphalt, Material.Salt, Material.Ice, Material.Glacier, Material.Glass, Material.ForceField, Material.Air, Material.Water, Material.Cardboard, Material.Carpet, Material.CeramicTiles, Material.ClayRoofTiles, Material.RoofShingles, Material.Leather, Material.Plaster, Material.Rubber];}
    public static fromValue(value: number) {return Material.items.find((item) => item._value === value);}
}

export class MaterialPattern extends EnumItem {
    public static readonly Regular = new MaterialPattern("Regular", 0);
    public static readonly Organic = new MaterialPattern("Organic", 1);
    public static get items() {return [MaterialPattern.Regular, MaterialPattern.Organic];}
    public static fromValue(value: number) {return MaterialPattern.items.find((item) => item._value === value);}
}

export class MeshPartDetailLevel extends EnumItem {
    public static readonly DistanceBased = new MeshPartDetailLevel("DistanceBased", 0);
    public static readonly Level00 = new MeshPartDetailLevel("Level00", 1);
    public static readonly Level01 = new MeshPartDetailLevel("Level01", 2);
    public static readonly Level02 = new MeshPartDetailLevel("Level02", 3);
    public static readonly Level03 = new MeshPartDetailLevel("Level03", 4);
    public static readonly Level04 = new MeshPartDetailLevel("Level04", 5);
    public static get items() {return [MeshPartDetailLevel.DistanceBased, MeshPartDetailLevel.Level00, MeshPartDetailLevel.Level01, MeshPartDetailLevel.Level02, MeshPartDetailLevel.Level03, MeshPartDetailLevel.Level04];}
    public static fromValue(value: number) {return MeshPartDetailLevel.items.find((item) => item._value === value);}
}

export class MeshPartHeadsAndAccessories extends EnumItem {
    public static readonly Default = new MeshPartHeadsAndAccessories("Default", 0);
    public static readonly Disabled = new MeshPartHeadsAndAccessories("Disabled", 1);
    public static readonly Enabled = new MeshPartHeadsAndAccessories("Enabled", 2);
    public static get items() {return [MeshPartHeadsAndAccessories.Default, MeshPartHeadsAndAccessories.Disabled, MeshPartHeadsAndAccessories.Enabled];}
    public static fromValue(value: number) {return MeshPartHeadsAndAccessories.items.find((item) => item._value === value);}
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
    public static get items() {return [MeshType.Head, MeshType.Torso, MeshType.Wedge, MeshType.Sphere, MeshType.Cylinder, MeshType.FileMesh, MeshType.Brick, MeshType.Prism, MeshType.Pyramid, MeshType.ParallelRamp, MeshType.RightAngleRamp, MeshType.CornerWedge];}
    public static fromValue(value: number) {return MeshType.items.find((item) => item._value === value);}
}

export class ModelLevelOfDetail extends EnumItem {
    public static readonly Automatic = new ModelLevelOfDetail("Automatic", 0);
    public static readonly StreamingMesh = new ModelLevelOfDetail("StreamingMesh", 1);
    public static readonly Disabled = new ModelLevelOfDetail("Disabled", 2);
    public static get items() {return [ModelLevelOfDetail.Automatic, ModelLevelOfDetail.StreamingMesh, ModelLevelOfDetail.Disabled];}
    public static fromValue(value: number) {return ModelLevelOfDetail.items.find((item) => item._value === value);}
}

export class ModelStreamingBehavior extends EnumItem {
    public static readonly Default = new ModelStreamingBehavior("Default", 0);
    public static readonly Legacy = new ModelStreamingBehavior("Legacy", 1);
    public static readonly Improved = new ModelStreamingBehavior("Improved", 2);
    public static get items() {return [ModelStreamingBehavior.Default, ModelStreamingBehavior.Legacy, ModelStreamingBehavior.Improved];}
    public static fromValue(value: number) {return ModelStreamingBehavior.items.find((item) => item._value === value);}
}

export class ModelStreamingMode extends EnumItem {
    public static readonly Default = new ModelStreamingMode("Default", 0);
    public static readonly Atomic = new ModelStreamingMode("Atomic", 1);
    public static readonly Persistent = new ModelStreamingMode("Persistent", 2);
    public static readonly PersistentPerPlayer = new ModelStreamingMode("PersistentPerPlayer", 3);
    public static readonly Nonatomic = new ModelStreamingMode("Nonatomic", 4);
    public static get items() {return [ModelStreamingMode.Default, ModelStreamingMode.Atomic, ModelStreamingMode.Persistent, ModelStreamingMode.PersistentPerPlayer, ModelStreamingMode.Nonatomic];}
    public static fromValue(value: number) {return ModelStreamingMode.items.find((item) => item._value === value);}
}

export class MouseBehavior extends EnumItem {
    public static readonly Default = new MouseBehavior("Default", 0);
    public static readonly LockCenter = new MouseBehavior("LockCenter", 1);
    public static readonly LockCurrentPosition = new MouseBehavior("LockCurrentPosition", 2);
    public static get items() {return [MouseBehavior.Default, MouseBehavior.LockCenter, MouseBehavior.LockCurrentPosition];}
    public static fromValue(value: number) {return MouseBehavior.items.find((item) => item._value === value);}
}

export class NameOcclusion extends EnumItem {
    public static readonly NoOcclusion = new NameOcclusion("NoOcclusion", 0);
    public static readonly EnemyOcclusion = new NameOcclusion("EnemyOcclusion", 1);
    public static readonly OccludeAll = new NameOcclusion("OccludeAll", 2);
    public static get items() {return [NameOcclusion.NoOcclusion, NameOcclusion.EnemyOcclusion, NameOcclusion.OccludeAll];}
    public static fromValue(value: number) {return NameOcclusion.items.find((item) => item._value === value);}
}

export class NoiseType extends EnumItem {
    public static readonly SimplexGabor = new NoiseType("SimplexGabor", 0);
    public static get items() {return [NoiseType.SimplexGabor];}
    public static fromValue(value: number) {return NoiseType.items.find((item) => item._value === value);}
}

export class NormalId extends EnumItem {
    public static readonly Right = new NormalId("Right", 0);
    public static readonly Top = new NormalId("Top", 1);
    public static readonly Back = new NormalId("Back", 2);
    public static readonly Left = new NormalId("Left", 3);
    public static readonly Bottom = new NormalId("Bottom", 4);
    public static readonly Front = new NormalId("Front", 5);
    public static get items() {return [NormalId.Right, NormalId.Top, NormalId.Back, NormalId.Left, NormalId.Bottom, NormalId.Front];}
    public static fromValue(value: number) {return NormalId.items.find((item) => item._value === value);}
}

export class OrientationAlignmentMode extends EnumItem {
    public static readonly OneAttachment = new OrientationAlignmentMode("OneAttachment", 0);
    public static readonly TwoAttachment = new OrientationAlignmentMode("TwoAttachment", 1);
    public static get items() {return [OrientationAlignmentMode.OneAttachment, OrientationAlignmentMode.TwoAttachment];}
    public static fromValue(value: number) {return OrientationAlignmentMode.items.find((item) => item._value === value);}
}

export class PartType extends EnumItem {
    public static readonly Ball = new PartType("Ball", 0);
    public static readonly Block = new PartType("Block", 1);
    public static readonly Cylinder = new PartType("Cylinder", 2);
    public static readonly Wedge = new PartType("Wedge", 3);
    public static readonly CornerWedge = new PartType("CornerWedge", 4);
    public static get items() {return [PartType.Ball, PartType.Block, PartType.Cylinder, PartType.Wedge, PartType.CornerWedge];}
    public static fromValue(value: number) {return PartType.items.find((item) => item._value === value);}
}

export class ParticleEmitterShape extends EnumItem {
    public static readonly Box = new ParticleEmitterShape("Box", 0);
    public static readonly Sphere = new ParticleEmitterShape("Sphere", 1);
    public static readonly Cylinder = new ParticleEmitterShape("Cylinder", 2);
    public static readonly Disc = new ParticleEmitterShape("Disc", 3);
    public static get items() {return [ParticleEmitterShape.Box, ParticleEmitterShape.Sphere, ParticleEmitterShape.Cylinder, ParticleEmitterShape.Disc];}
    public static fromValue(value: number) {return ParticleEmitterShape.items.find((item) => item._value === value);}
}

export class ParticleEmitterShapeInOut extends EnumItem {
    public static readonly Outward = new ParticleEmitterShapeInOut("Outward", 0);
    public static readonly Inward = new ParticleEmitterShapeInOut("Inward", 1);
    public static readonly InAndOut = new ParticleEmitterShapeInOut("InAndOut", 2);
    public static get items() {return [ParticleEmitterShapeInOut.Outward, ParticleEmitterShapeInOut.Inward, ParticleEmitterShapeInOut.InAndOut];}
    public static fromValue(value: number) {return ParticleEmitterShapeInOut.items.find((item) => item._value === value);}
}

export class ParticleEmitterShapeStyle extends EnumItem {
    public static readonly Volume = new ParticleEmitterShapeStyle("Volume", 0);
    public static readonly Surface = new ParticleEmitterShapeStyle("Surface", 1);
    public static get items() {return [ParticleEmitterShapeStyle.Volume, ParticleEmitterShapeStyle.Surface];}
    public static fromValue(value: number) {return ParticleEmitterShapeStyle.items.find((item) => item._value === value);}
}

export class ParticleFlipbookLayout extends EnumItem {
    public static readonly None = new ParticleFlipbookLayout("None", 0);
    public static readonly Grid2x2 = new ParticleFlipbookLayout("Grid2x2", 1);
    public static readonly Grid4x4 = new ParticleFlipbookLayout("Grid4x4", 2);
    public static readonly Grid8x8 = new ParticleFlipbookLayout("Grid8x8", 3);
    public static get items() {return [ParticleFlipbookLayout.None, ParticleFlipbookLayout.Grid2x2, ParticleFlipbookLayout.Grid4x4, ParticleFlipbookLayout.Grid8x8];}
    public static fromValue(value: number) {return ParticleFlipbookLayout.items.find((item) => item._value === value);}
}

export class ParticleFlipbookMode extends EnumItem {
    public static readonly Loop = new ParticleFlipbookMode("Loop", 0);
    public static readonly OneShot = new ParticleFlipbookMode("OneShot", 1);
    public static readonly PingPong = new ParticleFlipbookMode("PingPong", 2);
    public static readonly Random = new ParticleFlipbookMode("Random", 3);
    public static get items() {return [ParticleFlipbookMode.Loop, ParticleFlipbookMode.OneShot, ParticleFlipbookMode.PingPong, ParticleFlipbookMode.Random];}
    public static fromValue(value: number) {return ParticleFlipbookMode.items.find((item) => item._value === value);}
}

export class ParticleOrientation extends EnumItem {
    public static readonly FacingCamera = new ParticleOrientation("FacingCamera", 0);
    public static readonly FacingCameraWorldUp = new ParticleOrientation("FacingCameraWorldUp", 1);
    public static readonly VelocityParallel = new ParticleOrientation("VelocityParallel", 2);
    public static readonly VelocityPerpendicular = new ParticleOrientation("VelocityPerpendicular", 3);
    public static get items() {return [ParticleOrientation.FacingCamera, ParticleOrientation.FacingCameraWorldUp, ParticleOrientation.VelocityParallel, ParticleOrientation.VelocityPerpendicular];}
    public static fromValue(value: number) {return ParticleOrientation.items.find((item) => item._value === value);}
}

export class PhysicsSteppingMethod extends EnumItem {
    public static readonly Default = new PhysicsSteppingMethod("Default", 0);
    public static readonly Fixed = new PhysicsSteppingMethod("Fixed", 1);
    public static readonly Adaptive = new PhysicsSteppingMethod("Adaptive", 2);
    public static get items() {return [PhysicsSteppingMethod.Default, PhysicsSteppingMethod.Fixed, PhysicsSteppingMethod.Adaptive];}
    public static fromValue(value: number) {return PhysicsSteppingMethod.items.find((item) => item._value === value);}
}

export class PlayerCharacterDestroyBehavior extends EnumItem {
    public static readonly Default = new PlayerCharacterDestroyBehavior("Default", 0);
    public static readonly Disabled = new PlayerCharacterDestroyBehavior("Disabled", 1);
    public static readonly Enabled = new PlayerCharacterDestroyBehavior("Enabled", 2);
    public static get items() {return [PlayerCharacterDestroyBehavior.Default, PlayerCharacterDestroyBehavior.Disabled, PlayerCharacterDestroyBehavior.Enabled];}
    public static fromValue(value: number) {return PlayerCharacterDestroyBehavior.items.find((item) => item._value === value);}
}

export class PoseEasingDirection extends EnumItem {
    public static readonly In = new PoseEasingDirection("In", 0);
    public static readonly Out = new PoseEasingDirection("Out", 1);
    public static readonly InOut = new PoseEasingDirection("InOut", 2);
    public static get items() {return [PoseEasingDirection.In, PoseEasingDirection.Out, PoseEasingDirection.InOut];}
    public static fromValue(value: number) {return PoseEasingDirection.items.find((item) => item._value === value);}
}

export class PoseEasingStyle extends EnumItem {
    public static readonly Linear = new PoseEasingStyle("Linear", 0);
    public static readonly Constant = new PoseEasingStyle("Constant", 1);
    public static readonly Elastic = new PoseEasingStyle("Elastic", 2);
    public static readonly Cubic = new PoseEasingStyle("Cubic", 3);
    public static readonly Bounce = new PoseEasingStyle("Bounce", 4);
    public static get items() {return [PoseEasingStyle.Linear, PoseEasingStyle.Constant, PoseEasingStyle.Elastic, PoseEasingStyle.Cubic, PoseEasingStyle.Bounce];}
    public static fromValue(value: number) {return PoseEasingStyle.items.find((item) => item._value === value);}
}

export class PositionAlignmentMode extends EnumItem {
    public static readonly OneAttachment = new PositionAlignmentMode("OneAttachment", 0);
    public static readonly TwoAttachment = new PositionAlignmentMode("TwoAttachment", 1);
    public static get items() {return [PositionAlignmentMode.OneAttachment, PositionAlignmentMode.TwoAttachment];}
    public static fromValue(value: number) {return PositionAlignmentMode.items.find((item) => item._value === value);}
}

export class PrimalPhysicsSolver extends EnumItem {
    public static readonly Default = new PrimalPhysicsSolver("Default", 0);
    public static readonly Experimental = new PrimalPhysicsSolver("Experimental", 1);
    public static readonly Disabled = new PrimalPhysicsSolver("Disabled", 2);
    public static get items() {return [PrimalPhysicsSolver.Default, PrimalPhysicsSolver.Experimental, PrimalPhysicsSolver.Disabled];}
    public static fromValue(value: number) {return PrimalPhysicsSolver.items.find((item) => item._value === value);}
}

export class ProximityPromptExclusivity extends EnumItem {
    public static readonly OnePerButton = new ProximityPromptExclusivity("OnePerButton", 0);
    public static readonly OneGlobally = new ProximityPromptExclusivity("OneGlobally", 1);
    public static readonly AlwaysShow = new ProximityPromptExclusivity("AlwaysShow", 2);
    public static get items() {return [ProximityPromptExclusivity.OnePerButton, ProximityPromptExclusivity.OneGlobally, ProximityPromptExclusivity.AlwaysShow];}
    public static fromValue(value: number) {return ProximityPromptExclusivity.items.find((item) => item._value === value);}
}

export class ProximityPromptStyle extends EnumItem {
    public static readonly Default = new ProximityPromptStyle("Default", 0);
    public static readonly Custom = new ProximityPromptStyle("Custom", 1);
    public static get items() {return [ProximityPromptStyle.Default, ProximityPromptStyle.Custom];}
    public static fromValue(value: number) {return ProximityPromptStyle.items.find((item) => item._value === value);}
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
    public static get items() {return [QualityLevel.Automatic, QualityLevel.Level01, QualityLevel.Level02, QualityLevel.Level03, QualityLevel.Level04, QualityLevel.Level05, QualityLevel.Level06, QualityLevel.Level07, QualityLevel.Level08, QualityLevel.Level09, QualityLevel.Level10, QualityLevel.Level11, QualityLevel.Level12, QualityLevel.Level13, QualityLevel.Level14, QualityLevel.Level15, QualityLevel.Level16, QualityLevel.Level17, QualityLevel.Level18, QualityLevel.Level19, QualityLevel.Level20, QualityLevel.Level21];}
    public static fromValue(value: number) {return QualityLevel.items.find((item) => item._value === value);}
}

export class R15CollisionType extends EnumItem {
    public static readonly OuterBox = new R15CollisionType("OuterBox", 0);
    public static readonly InnerBox = new R15CollisionType("InnerBox", 1);
    public static get items() {return [R15CollisionType.OuterBox, R15CollisionType.InnerBox];}
    public static fromValue(value: number) {return R15CollisionType.items.find((item) => item._value === value);}
}

export class RejectCharacterDeletions extends EnumItem {
    public static readonly Default = new RejectCharacterDeletions("Default", 0);
    public static readonly Disabled = new RejectCharacterDeletions("Disabled", 1);
    public static readonly Enabled = new RejectCharacterDeletions("Enabled", 2);
    public static get items() {return [RejectCharacterDeletions.Default, RejectCharacterDeletions.Disabled, RejectCharacterDeletions.Enabled];}
    public static fromValue(value: number) {return RejectCharacterDeletions.items.find((item) => item._value === value);}
}

export class RenderFidelity extends EnumItem {
    public static readonly Automatic = new RenderFidelity("Automatic", 0);
    public static readonly Precise = new RenderFidelity("Precise", 1);
    public static readonly Performance = new RenderFidelity("Performance", 2);
    public static get items() {return [RenderFidelity.Automatic, RenderFidelity.Precise, RenderFidelity.Performance];}
    public static fromValue(value: number) {return RenderFidelity.items.find((item) => item._value === value);}
}

export class RenderingTestComparisonMethod extends EnumItem {
    public static readonly psnr = new RenderingTestComparisonMethod("psnr", 0);
    public static readonly diff = new RenderingTestComparisonMethod("diff", 1);
    public static get items() {return [RenderingTestComparisonMethod.psnr, RenderingTestComparisonMethod.diff];}
    public static fromValue(value: number) {return RenderingTestComparisonMethod.items.find((item) => item._value === value);}
}

export class ReplicateInstanceDestroySetting extends EnumItem {
    public static readonly Default = new ReplicateInstanceDestroySetting("Default", 0);
    public static readonly Disabled = new ReplicateInstanceDestroySetting("Disabled", 1);
    public static readonly Enabled = new ReplicateInstanceDestroySetting("Enabled", 2);
    public static get items() {return [ReplicateInstanceDestroySetting.Default, ReplicateInstanceDestroySetting.Disabled, ReplicateInstanceDestroySetting.Enabled];}
    public static fromValue(value: number) {return ReplicateInstanceDestroySetting.items.find((item) => item._value === value);}
}

export class ResamplerMode extends EnumItem {
    public static readonly Default = new ResamplerMode("Default", 0);
    public static readonly Pixelated = new ResamplerMode("Pixelated", 1);
    public static get items() {return [ResamplerMode.Default, ResamplerMode.Pixelated];}
    public static fromValue(value: number) {return ResamplerMode.items.find((item) => item._value === value);}
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
    public static get items() {return [ReverbType.NoReverb, ReverbType.GenericReverb, ReverbType.PaddedCell, ReverbType.Room, ReverbType.Bathroom, ReverbType.LivingRoom, ReverbType.StoneRoom, ReverbType.Auditorium, ReverbType.ConcertHall, ReverbType.Cave, ReverbType.Arena, ReverbType.Hangar, ReverbType.CarpettedHallway, ReverbType.Hallway, ReverbType.StoneCorridor, ReverbType.Alley, ReverbType.Forest, ReverbType.City, ReverbType.Mountains, ReverbType.Quarry, ReverbType.Plain, ReverbType.ParkingLot, ReverbType.SewerPipe, ReverbType.UnderWater];}
    public static fromValue(value: number) {return ReverbType.items.find((item) => item._value === value);}
}

export class RollOffMode extends EnumItem {
    public static readonly Inverse = new RollOffMode("Inverse", 0);
    public static readonly Linear = new RollOffMode("Linear", 1);
    public static readonly LinearSquare = new RollOffMode("LinearSquare", 2);
    public static readonly InverseTapered = new RollOffMode("InverseTapered", 3);
    public static get items() {return [RollOffMode.Inverse, RollOffMode.Linear, RollOffMode.LinearSquare, RollOffMode.InverseTapered];}
    public static fromValue(value: number) {return RollOffMode.items.find((item) => item._value === value);}
}

export class RotationOrder extends EnumItem {
    public static readonly XYZ = new RotationOrder("XYZ", 0);
    public static readonly XZY = new RotationOrder("XZY", 1);
    public static readonly YZX = new RotationOrder("YZX", 2);
    public static readonly YXZ = new RotationOrder("YXZ", 3);
    public static readonly ZXY = new RotationOrder("ZXY", 4);
    public static readonly ZYX = new RotationOrder("ZYX", 5);
    public static get items() {return [RotationOrder.XYZ, RotationOrder.XZY, RotationOrder.YZX, RotationOrder.YXZ, RotationOrder.ZXY, RotationOrder.ZYX];}
    public static fromValue(value: number) {return RotationOrder.items.find((item) => item._value === value);}
}

export class RtlTextSupport extends EnumItem {
    public static readonly Default = new RtlTextSupport("Default", 0);
    public static readonly Disabled = new RtlTextSupport("Disabled", 1);
    public static readonly Enabled = new RtlTextSupport("Enabled", 2);
    public static get items() {return [RtlTextSupport.Default, RtlTextSupport.Disabled, RtlTextSupport.Enabled];}
    public static fromValue(value: number) {return RtlTextSupport.items.find((item) => item._value === value);}
}

export class RunContext extends EnumItem {
    public static readonly Legacy = new RunContext("Legacy", 0);
    public static readonly Server = new RunContext("Server", 1);
    public static readonly Client = new RunContext("Client", 2);
    public static readonly Plugin = new RunContext("Plugin", 3);
    public static get items() {return [RunContext.Legacy, RunContext.Server, RunContext.Client, RunContext.Plugin];}
    public static fromValue(value: number) {return RunContext.items.find((item) => item._value === value);}
}

export class SafeAreaCompatibility extends EnumItem {
    public static readonly None = new SafeAreaCompatibility("None", 0);
    public static readonly FullscreenExtension = new SafeAreaCompatibility("FullscreenExtension", 1);
    public static get items() {return [SafeAreaCompatibility.None, SafeAreaCompatibility.FullscreenExtension];}
    public static fromValue(value: number) {return SafeAreaCompatibility.items.find((item) => item._value === value);}
}

export class ScaleType extends EnumItem {
    public static readonly Stretch = new ScaleType("Stretch", 0);
    public static readonly Slice = new ScaleType("Slice", 1);
    public static readonly Tile = new ScaleType("Tile", 2);
    public static readonly Fit = new ScaleType("Fit", 3);
    public static readonly Crop = new ScaleType("Crop", 4);
    public static get items() {return [ScaleType.Stretch, ScaleType.Slice, ScaleType.Tile, ScaleType.Fit, ScaleType.Crop];}
    public static fromValue(value: number) {return ScaleType.items.find((item) => item._value === value);}
}

export class ScreenInsets extends EnumItem {
    public static readonly None = new ScreenInsets("None", 0);
    public static readonly DeviceSafeInsets = new ScreenInsets("DeviceSafeInsets", 1);
    public static readonly CoreUISafeInsets = new ScreenInsets("CoreUISafeInsets", 2);
    public static readonly TopbarSafeInsets = new ScreenInsets("TopbarSafeInsets", 3);
    public static get items() {return [ScreenInsets.None, ScreenInsets.DeviceSafeInsets, ScreenInsets.CoreUISafeInsets, ScreenInsets.TopbarSafeInsets];}
    public static fromValue(value: number) {return ScreenInsets.items.find((item) => item._value === value);}
}

export class ScreenOrientation extends EnumItem {
    public static readonly LandscapeLeft = new ScreenOrientation("LandscapeLeft", 0);
    public static readonly LandscapeRight = new ScreenOrientation("LandscapeRight", 1);
    public static readonly LandscapeSensor = new ScreenOrientation("LandscapeSensor", 2);
    public static readonly Portrait = new ScreenOrientation("Portrait", 3);
    public static readonly Sensor = new ScreenOrientation("Sensor", 4);
    public static get items() {return [ScreenOrientation.LandscapeLeft, ScreenOrientation.LandscapeRight, ScreenOrientation.LandscapeSensor, ScreenOrientation.Portrait, ScreenOrientation.Sensor];}
    public static fromValue(value: number) {return ScreenOrientation.items.find((item) => item._value === value);}
}

export class ScrollBarInset extends EnumItem {
    public static readonly None = new ScrollBarInset("None", 0);
    public static readonly ScrollBar = new ScrollBarInset("ScrollBar", 1);
    public static readonly Always = new ScrollBarInset("Always", 2);
    public static get items() {return [ScrollBarInset.None, ScrollBarInset.ScrollBar, ScrollBarInset.Always];}
    public static fromValue(value: number) {return ScrollBarInset.items.find((item) => item._value === value);}
}

export class ScrollingDirection extends EnumItem {
    public static readonly X = new ScrollingDirection("X", 1);
    public static readonly Y = new ScrollingDirection("Y", 2);
    public static readonly XY = new ScrollingDirection("XY", 4);
    public static get items() {return [ScrollingDirection.X, ScrollingDirection.Y, ScrollingDirection.XY];}
    public static fromValue(value: number) {return ScrollingDirection.items.find((item) => item._value === value);}
}

export class SelectionBehavior extends EnumItem {
    public static readonly Escape = new SelectionBehavior("Escape", 0);
    public static readonly Stop = new SelectionBehavior("Stop", 1);
    public static get items() {return [SelectionBehavior.Escape, SelectionBehavior.Stop];}
    public static fromValue(value: number) {return SelectionBehavior.items.find((item) => item._value === value);}
}

export class SensorMode extends EnumItem {
    public static readonly Floor = new SensorMode("Floor", 0);
    public static readonly Ladder = new SensorMode("Ladder", 1);
    public static get items() {return [SensorMode.Floor, SensorMode.Ladder];}
    public static fromValue(value: number) {return SensorMode.items.find((item) => item._value === value);}
}

export class SensorUpdateType extends EnumItem {
    public static readonly OnRead = new SensorUpdateType("OnRead", 0);
    public static readonly Manual = new SensorUpdateType("Manual", 1);
    public static get items() {return [SensorUpdateType.OnRead, SensorUpdateType.Manual];}
    public static fromValue(value: number) {return SensorUpdateType.items.find((item) => item._value === value);}
}

export class ServiceVisibility extends EnumItem {
    public static readonly Always = new ServiceVisibility("Always", 0);
    public static readonly Off = new ServiceVisibility("Off", 1);
    public static readonly WithChildren = new ServiceVisibility("WithChildren", 2);
    public static get items() {return [ServiceVisibility.Always, ServiceVisibility.Off, ServiceVisibility.WithChildren];}
    public static fromValue(value: number) {return ServiceVisibility.items.find((item) => item._value === value);}
}

export class SignalBehavior extends EnumItem {
    public static readonly Default = new SignalBehavior("Default", 0);
    public static readonly Immediate = new SignalBehavior("Immediate", 1);
    public static readonly Deferred = new SignalBehavior("Deferred", 2);
    public static readonly AncestryDeferred = new SignalBehavior("AncestryDeferred", 3);
    public static get items() {return [SignalBehavior.Default, SignalBehavior.Immediate, SignalBehavior.Deferred, SignalBehavior.AncestryDeferred];}
    public static fromValue(value: number) {return SignalBehavior.items.find((item) => item._value === value);}
}

export class SizeConstraint extends EnumItem {
    public static readonly RelativeXY = new SizeConstraint("RelativeXY", 0);
    public static readonly RelativeXX = new SizeConstraint("RelativeXX", 1);
    public static readonly RelativeYY = new SizeConstraint("RelativeYY", 2);
    public static get items() {return [SizeConstraint.RelativeXY, SizeConstraint.RelativeXX, SizeConstraint.RelativeYY];}
    public static fromValue(value: number) {return SizeConstraint.items.find((item) => item._value === value);}
}

export class SortOrder extends EnumItem {
    public static readonly Name = new SortOrder("Name", 0);
    public static readonly Custom = new SortOrder("Custom", 1);
    public static readonly LayoutOrder = new SortOrder("LayoutOrder", 2);
    public static get items() {return [SortOrder.Name, SortOrder.Custom, SortOrder.LayoutOrder];}
    public static fromValue(value: number) {return SortOrder.items.find((item) => item._value === value);}
}

export class StartCorner extends EnumItem {
    public static readonly TopLeft = new StartCorner("TopLeft", 0);
    public static readonly TopRight = new StartCorner("TopRight", 1);
    public static readonly BottomLeft = new StartCorner("BottomLeft", 2);
    public static readonly BottomRight = new StartCorner("BottomRight", 3);
    public static get items() {return [StartCorner.TopLeft, StartCorner.TopRight, StartCorner.BottomLeft, StartCorner.BottomRight];}
    public static fromValue(value: number) {return StartCorner.items.find((item) => item._value === value);}
}

export class StreamOutBehavior extends EnumItem {
    public static readonly Default = new StreamOutBehavior("Default", 0);
    public static readonly LowMemory = new StreamOutBehavior("LowMemory", 1);
    public static readonly Opportunistic = new StreamOutBehavior("Opportunistic", 2);
    public static get items() {return [StreamOutBehavior.Default, StreamOutBehavior.LowMemory, StreamOutBehavior.Opportunistic];}
    public static fromValue(value: number) {return StreamOutBehavior.items.find((item) => item._value === value);}
}

export class StreamingIntegrityMode extends EnumItem {
    public static readonly Default = new StreamingIntegrityMode("Default", 0);
    public static readonly Disabled = new StreamingIntegrityMode("Disabled", 1);
    public static readonly MinimumRadiusPause = new StreamingIntegrityMode("MinimumRadiusPause", 2);
    public static readonly PauseOutsideLoadedArea = new StreamingIntegrityMode("PauseOutsideLoadedArea", 3);
    public static get items() {return [StreamingIntegrityMode.Default, StreamingIntegrityMode.Disabled, StreamingIntegrityMode.MinimumRadiusPause, StreamingIntegrityMode.PauseOutsideLoadedArea];}
    public static fromValue(value: number) {return StreamingIntegrityMode.items.find((item) => item._value === value);}
}

export class Style extends EnumItem {
    public static readonly AlternatingSupports = new Style("AlternatingSupports", 0);
    public static readonly BridgeStyleSupports = new Style("BridgeStyleSupports", 1);
    public static readonly NoSupports = new Style("NoSupports", 2);
    public static get items() {return [Style.AlternatingSupports, Style.BridgeStyleSupports, Style.NoSupports];}
    public static fromValue(value: number) {return Style.items.find((item) => item._value === value);}
}

export class SurfaceGuiSizingMode extends EnumItem {
    public static readonly FixedSize = new SurfaceGuiSizingMode("FixedSize", 0);
    public static readonly PixelsPerStud = new SurfaceGuiSizingMode("PixelsPerStud", 1);
    public static get items() {return [SurfaceGuiSizingMode.FixedSize, SurfaceGuiSizingMode.PixelsPerStud];}
    public static fromValue(value: number) {return SurfaceGuiSizingMode.items.find((item) => item._value === value);}
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
    public static get items() {return [SurfaceType.Smooth, SurfaceType.Glue, SurfaceType.Weld, SurfaceType.Studs, SurfaceType.Inlet, SurfaceType.Universal, SurfaceType.Hinge, SurfaceType.Motor, SurfaceType.SteppingMotor, SurfaceType.SmoothNoOutlines];}
    public static fromValue(value: number) {return SurfaceType.items.find((item) => item._value === value);}
}

export class TableMajorAxis extends EnumItem {
    public static readonly RowMajor = new TableMajorAxis("RowMajor", 0);
    public static readonly ColumnMajor = new TableMajorAxis("ColumnMajor", 1);
    public static get items() {return [TableMajorAxis.RowMajor, TableMajorAxis.ColumnMajor];}
    public static fromValue(value: number) {return TableMajorAxis.items.find((item) => item._value === value);}
}

export class Technology extends EnumItem {
    public static readonly Voxel = new Technology("Voxel", 1);
    public static readonly Compatibility = new Technology("Compatibility", 2);
    public static readonly ShadowMap = new Technology("ShadowMap", 3);
    public static readonly Future = new Technology("Future", 4);
    public static readonly Legacy = new Technology("Legacy", 0);
    public static get items() {return [Technology.Voxel, Technology.Compatibility, Technology.ShadowMap, Technology.Future, Technology.Legacy];}
    public static fromValue(value: number) {return Technology.items.find((item) => item._value === value);}
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
    public static get items() {return [TerrainAcquisitionMethod.None, TerrainAcquisitionMethod.Legacy, TerrainAcquisitionMethod.Template, TerrainAcquisitionMethod.Generate, TerrainAcquisitionMethod.Import, TerrainAcquisitionMethod.Convert, TerrainAcquisitionMethod.EditAddTool, TerrainAcquisitionMethod.EditSeaLevelTool, TerrainAcquisitionMethod.EditReplaceTool, TerrainAcquisitionMethod.RegionFillTool, TerrainAcquisitionMethod.RegionPasteTool, TerrainAcquisitionMethod.Other];}
    public static fromValue(value: number) {return TerrainAcquisitionMethod.items.find((item) => item._value === value);}
}

export class TerrainFace extends EnumItem {
    public static readonly Top = new TerrainFace("Top", 0);
    public static readonly Side = new TerrainFace("Side", 1);
    public static readonly Bottom = new TerrainFace("Bottom", 2);
    public static get items() {return [TerrainFace.Top, TerrainFace.Side, TerrainFace.Bottom];}
    public static fromValue(value: number) {return TerrainFace.items.find((item) => item._value === value);}
}

export class TextDirection extends EnumItem {
    public static readonly Auto = new TextDirection("Auto", 0);
    public static readonly LeftToRight = new TextDirection("LeftToRight", 1);
    public static readonly RightToLeft = new TextDirection("RightToLeft", 2);
    public static get items() {return [TextDirection.Auto, TextDirection.LeftToRight, TextDirection.RightToLeft];}
    public static fromValue(value: number) {return TextDirection.items.find((item) => item._value === value);}
}

export class TextTruncate extends EnumItem {
    public static readonly None = new TextTruncate("None", 0);
    public static readonly AtEnd = new TextTruncate("AtEnd", 1);
    public static readonly SplitWord = new TextTruncate("SplitWord", 2);
    public static get items() {return [TextTruncate.None, TextTruncate.AtEnd, TextTruncate.SplitWord];}
    public static fromValue(value: number) {return TextTruncate.items.find((item) => item._value === value);}
}

export class TextXAlignment extends EnumItem {
    public static readonly Left = new TextXAlignment("Left", 0);
    public static readonly Right = new TextXAlignment("Right", 1);
    public static readonly Center = new TextXAlignment("Center", 2);
    public static get items() {return [TextXAlignment.Left, TextXAlignment.Right, TextXAlignment.Center];}
    public static fromValue(value: number) {return TextXAlignment.items.find((item) => item._value === value);}
}

export class TextYAlignment extends EnumItem {
    public static readonly Top = new TextYAlignment("Top", 0);
    public static readonly Center = new TextYAlignment("Center", 1);
    public static readonly Bottom = new TextYAlignment("Bottom", 2);
    public static get items() {return [TextYAlignment.Top, TextYAlignment.Center, TextYAlignment.Bottom];}
    public static fromValue(value: number) {return TextYAlignment.items.find((item) => item._value === value);}
}

export class TextureMode extends EnumItem {
    public static readonly Stretch = new TextureMode("Stretch", 0);
    public static readonly Wrap = new TextureMode("Wrap", 1);
    public static readonly Static = new TextureMode("Static", 2);
    public static get items() {return [TextureMode.Stretch, TextureMode.Wrap, TextureMode.Static];}
    public static fromValue(value: number) {return TextureMode.items.find((item) => item._value === value);}
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
    public static get items() {return [ThreadPoolConfig.PerCore4, ThreadPoolConfig.PerCore3, ThreadPoolConfig.PerCore2, ThreadPoolConfig.PerCore1, ThreadPoolConfig.Auto, ThreadPoolConfig.Threads1, ThreadPoolConfig.Threads2, ThreadPoolConfig.Threads3, ThreadPoolConfig.Threads4, ThreadPoolConfig.Threads8, ThreadPoolConfig.Threads16];}
    public static fromValue(value: number) {return ThreadPoolConfig.items.find((item) => item._value === value);}
}

export class TopBottom extends EnumItem {
    public static readonly Top = new TopBottom("Top", 0);
    public static readonly Center = new TopBottom("Center", 1);
    public static readonly Bottom = new TopBottom("Bottom", 2);
    public static get items() {return [TopBottom.Top, TopBottom.Center, TopBottom.Bottom];}
    public static fromValue(value: number) {return TopBottom.items.find((item) => item._value === value);}
}

export class TriStateBoolean extends EnumItem {
    public static readonly False = new TriStateBoolean("False", 2);
    public static readonly True = new TriStateBoolean("True", 1);
    public static readonly Unknown = new TriStateBoolean("Unknown", 0);
    public static get items() {return [TriStateBoolean.False, TriStateBoolean.True, TriStateBoolean.Unknown];}
    public static fromValue(value: number) {return TriStateBoolean.items.find((item) => item._value === value);}
}

export class UIFlexAlignment extends EnumItem {
    public static readonly None = new UIFlexAlignment("None", 0);
    public static readonly Fill = new UIFlexAlignment("Fill", 1);
    public static readonly SpaceAround = new UIFlexAlignment("SpaceAround", 2);
    public static readonly SpaceBetween = new UIFlexAlignment("SpaceBetween", 3);
    public static readonly SpaceEvenly = new UIFlexAlignment("SpaceEvenly", 4);
    public static get items() {return [UIFlexAlignment.None, UIFlexAlignment.Fill, UIFlexAlignment.SpaceAround, UIFlexAlignment.SpaceBetween, UIFlexAlignment.SpaceEvenly];}
    public static fromValue(value: number) {return UIFlexAlignment.items.find((item) => item._value === value);}
}

export class UIFlexMode extends EnumItem {
    public static readonly None = new UIFlexMode("None", 0);
    public static readonly Grow = new UIFlexMode("Grow", 1);
    public static readonly Shrink = new UIFlexMode("Shrink", 2);
    public static readonly Fill = new UIFlexMode("Fill", 3);
    public static readonly Custom = new UIFlexMode("Custom", 4);
    public static get items() {return [UIFlexMode.None, UIFlexMode.Grow, UIFlexMode.Shrink, UIFlexMode.Fill, UIFlexMode.Custom];}
    public static fromValue(value: number) {return UIFlexMode.items.find((item) => item._value === value);}
}

export class VRScaling extends EnumItem {
    public static readonly World = new VRScaling("World", 0);
    public static readonly Off = new VRScaling("Off", 1);
    public static get items() {return [VRScaling.World, VRScaling.Off];}
    public static fromValue(value: number) {return VRScaling.items.find((item) => item._value === value);}
}

export class VelocityConstraintMode extends EnumItem {
    public static readonly Line = new VelocityConstraintMode("Line", 0);
    public static readonly Plane = new VelocityConstraintMode("Plane", 1);
    public static readonly Vector = new VelocityConstraintMode("Vector", 2);
    public static get items() {return [VelocityConstraintMode.Line, VelocityConstraintMode.Plane, VelocityConstraintMode.Vector];}
    public static fromValue(value: number) {return VelocityConstraintMode.items.find((item) => item._value === value);}
}

export class VerticalAlignment extends EnumItem {
    public static readonly Center = new VerticalAlignment("Center", 0);
    public static readonly Top = new VerticalAlignment("Top", 1);
    public static readonly Bottom = new VerticalAlignment("Bottom", 2);
    public static get items() {return [VerticalAlignment.Center, VerticalAlignment.Top, VerticalAlignment.Bottom];}
    public static fromValue(value: number) {return VerticalAlignment.items.find((item) => item._value === value);}
}

export class VerticalScrollBarPosition extends EnumItem {
    public static readonly Right = new VerticalScrollBarPosition("Right", 0);
    public static readonly Left = new VerticalScrollBarPosition("Left", 1);
    public static get items() {return [VerticalScrollBarPosition.Right, VerticalScrollBarPosition.Left];}
    public static fromValue(value: number) {return VerticalScrollBarPosition.items.find((item) => item._value === value);}
}

export class VideoDeviceCaptureQuality extends EnumItem {
    public static readonly Default = new VideoDeviceCaptureQuality("Default", 0);
    public static readonly Low = new VideoDeviceCaptureQuality("Low", 1);
    public static readonly Medium = new VideoDeviceCaptureQuality("Medium", 2);
    public static readonly High = new VideoDeviceCaptureQuality("High", 3);
    public static get items() {return [VideoDeviceCaptureQuality.Default, VideoDeviceCaptureQuality.Low, VideoDeviceCaptureQuality.Medium, VideoDeviceCaptureQuality.High];}
    public static fromValue(value: number) {return VideoDeviceCaptureQuality.items.find((item) => item._value === value);}
}

export class ViewMode extends EnumItem {
    public static readonly None = new ViewMode("None", 0);
    public static readonly GeometryComplexity = new ViewMode("GeometryComplexity", 1);
    public static readonly Transparent = new ViewMode("Transparent", 2);
    public static readonly Decal = new ViewMode("Decal", 3);
    public static get items() {return [ViewMode.None, ViewMode.GeometryComplexity, ViewMode.Transparent, ViewMode.Decal];}
    public static fromValue(value: number) {return ViewMode.items.find((item) => item._value === value);}
}

export class VirtualCursorMode extends EnumItem {
    public static readonly Default = new VirtualCursorMode("Default", 0);
    public static readonly Disabled = new VirtualCursorMode("Disabled", 1);
    public static readonly Enabled = new VirtualCursorMode("Enabled", 2);
    public static get items() {return [VirtualCursorMode.Default, VirtualCursorMode.Disabled, VirtualCursorMode.Enabled];}
    public static fromValue(value: number) {return VirtualCursorMode.items.find((item) => item._value === value);}
}

export class VolumetricAudio extends EnumItem {
    public static readonly Disabled = new VolumetricAudio("Disabled", 0);
    public static readonly Automatic = new VolumetricAudio("Automatic", 1);
    public static readonly Enabled = new VolumetricAudio("Enabled", 2);
    public static get items() {return [VolumetricAudio.Disabled, VolumetricAudio.Automatic, VolumetricAudio.Enabled];}
    public static fromValue(value: number) {return VolumetricAudio.items.find((item) => item._value === value);}
}

export class WrapLayerAutoSkin extends EnumItem {
    public static readonly Disabled = new WrapLayerAutoSkin("Disabled", 0);
    public static readonly EnabledPreserve = new WrapLayerAutoSkin("EnabledPreserve", 1);
    public static readonly EnabledOverride = new WrapLayerAutoSkin("EnabledOverride", 2);
    public static get items() {return [WrapLayerAutoSkin.Disabled, WrapLayerAutoSkin.EnabledPreserve, WrapLayerAutoSkin.EnabledOverride];}
    public static fromValue(value: number) {return WrapLayerAutoSkin.items.find((item) => item._value === value);}
}

export class ZIndexBehavior extends EnumItem {
    public static readonly Global = new ZIndexBehavior("Global", 0);
    public static readonly Sibling = new ZIndexBehavior("Sibling", 1);
    public static get items() {return [ZIndexBehavior.Global, ZIndexBehavior.Sibling];}
    public static fromValue(value: number) {return ZIndexBehavior.items.find((item) => item._value === value);}
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
    map.set("AccessoryDescription,AccessoryType", AccessoryType.fromValue);
    map.set("Accessory,AccessoryType", AccessoryType.fromValue);
    map.set("AnimationClip,Priority", AnimationPriority.fromValue);
    map.set("AudioDeviceInput,AccessType", AccessModifierType.fromValue);
    map.set("AudioSearchParams,AudioSubType", AudioSubType.fromValue);
    map.set("AudioSearchParams,AudioSubtype", AudioSubType.fromValue);
    map.set("StarterGui,RtlTextSupport", RtlTextSupport.fromValue);
    map.set("StarterGui,ScreenOrientation", ScreenOrientation.fromValue);
    map.set("StarterGui,VirtualCursorMode", VirtualCursorMode.fromValue);
    map.set("WrapLayer,AutoSkin", WrapLayerAutoSkin.fromValue);
    map.set("Beam,TextureMode", TextureMode.fromValue);
    map.set("BodyPartDescription,BodyPart", BodyPart.fromValue);
    map.set("Camera,CameraType", CameraType.fromValue);
    map.set("Camera,FieldOfViewMode", FieldOfViewMode.fromValue);
    map.set("CharacterMesh,BodyPart", BodyPart.fromValue);
    map.set("DragDetector,DragStyle", DragDetectorDragStyle.fromValue);
    map.set("DragDetector,GamepadModeSwitchKeyCode", KeyCode.fromValue);
    map.set("DragDetector,KeyboardModeSwitchKeyCode", KeyCode.fromValue);
    map.set("DragDetector,PermissionPolicy", DragDetectorPermissionPolicy.fromValue);
    map.set("DragDetector,ResponseStyle", DragDetectorResponseStyle.fromValue);
    map.set("DragDetector,VRSwitchKeyCode", KeyCode.fromValue);
    map.set("AlignOrientation,AlignType", AlignType.fromValue);
    map.set("AlignOrientation,Mode", OrientationAlignmentMode.fromValue);
    map.set("AlignPosition,ForceLimitMode", ForceLimitMode.fromValue);
    map.set("AlignPosition,ForceRelativeTo", ActuatorRelativeTo.fromValue);
    map.set("AlignPosition,Mode", PositionAlignmentMode.fromValue);
    map.set("AngularVelocity,RelativeTo", ActuatorRelativeTo.fromValue);
    map.set("HingeConstraint,ActuatorType", ActuatorType.fromValue);
    map.set("LinearVelocity,ForceLimitMode", ForceLimitMode.fromValue);
    map.set("LinearVelocity,RelativeTo", ActuatorRelativeTo.fromValue);
    map.set("LinearVelocity,VelocityConstraintMode", VelocityConstraintMode.fromValue);
    map.set("SlidingBallConstraint,ActuatorType", ActuatorType.fromValue);
    map.set("CylindricalConstraint,AngularActuatorType", ActuatorType.fromValue);
    map.set("Torque,RelativeTo", ActuatorRelativeTo.fromValue);
    map.set("VectorForce,RelativeTo", ActuatorRelativeTo.fromValue);
    map.set("SpecialMesh,MeshType", MeshType.fromValue);
    map.set("Dialog,BehaviorType", DialogBehaviorType.fromValue);
    map.set("Dialog,Purpose", DialogPurpose.fromValue);
    map.set("Dialog,Tone", DialogTone.fromValue);
    map.set("EulerRotationCurve,RotationOrder", RotationOrder.fromValue);
    map.set("Explosion,ExplosionType", ExplosionType.fromValue);
    map.set("FaceInstance,Face", NormalId.fromValue);
    map.set("Feature,FaceId", NormalId.fromValue);
    map.set("Feature,InOut", InOut.fromValue);
    map.set("Feature,LeftRight", LeftRight.fromValue);
    map.set("Feature,TopBottom", TopBottom.fromValue);
    map.set("GuiBase2d,SelectionBehaviorDown", SelectionBehavior.fromValue);
    map.set("GuiBase2d,SelectionBehaviorLeft", SelectionBehavior.fromValue);
    map.set("GuiBase2d,SelectionBehaviorRight", SelectionBehavior.fromValue);
    map.set("GuiBase2d,SelectionBehaviorUp", SelectionBehavior.fromValue);
    map.set("GuiObject,AutomaticSize", AutomaticSize.fromValue);
    map.set("GuiObject,BorderMode", BorderMode.fromValue);
    map.set("GuiObject,SizeConstraint", SizeConstraint.fromValue);
    map.set("Frame,Style", FrameStyle.fromValue);
    map.set("GuiButton,Style", ButtonStyle.fromValue);
    map.set("ImageButton,ResampleMode", ResamplerMode.fromValue);
    map.set("ImageButton,ScaleType", ScaleType.fromValue);
    map.set("TextButton,FontSize", FontSize.fromValue);
    map.set("TextButton,TextDirection", TextDirection.fromValue);
    map.set("TextButton,TextTruncate", TextTruncate.fromValue);
    map.set("TextButton,TextXAlignment", TextXAlignment.fromValue);
    map.set("TextButton,TextYAlignment", TextYAlignment.fromValue);
    map.set("ImageLabel,ResampleMode", ResamplerMode.fromValue);
    map.set("ImageLabel,ScaleType", ScaleType.fromValue);
    map.set("TextLabel,FontSize", FontSize.fromValue);
    map.set("TextLabel,TextDirection", TextDirection.fromValue);
    map.set("TextLabel,TextTruncate", TextTruncate.fromValue);
    map.set("TextLabel,TextXAlignment", TextXAlignment.fromValue);
    map.set("TextLabel,TextYAlignment", TextYAlignment.fromValue);
    map.set("ScrollingFrame,AutomaticCanvasSize", AutomaticSize.fromValue);
    map.set("ScrollingFrame,ElasticBehavior", ElasticBehavior.fromValue);
    map.set("ScrollingFrame,HorizontalScrollBarInset", ScrollBarInset.fromValue);
    map.set("ScrollingFrame,ScrollingDirection", ScrollingDirection.fromValue);
    map.set("ScrollingFrame,VerticalScrollBarInset", ScrollBarInset.fromValue);
    map.set("ScrollingFrame,VerticalScrollBarPosition", VerticalScrollBarPosition.fromValue);
    map.set("TextBox,FontSize", FontSize.fromValue);
    map.set("TextBox,TextDirection", TextDirection.fromValue);
    map.set("TextBox,TextTruncate", TextTruncate.fromValue);
    map.set("TextBox,TextXAlignment", TextXAlignment.fromValue);
    map.set("TextBox,TextYAlignment", TextYAlignment.fromValue);
    map.set("LayerCollector,ZIndexBehavior", ZIndexBehavior.fromValue);
    map.set("ScreenGui,SafeAreaCompatibility", SafeAreaCompatibility.fromValue);
    map.set("ScreenGui,ScreenInsets", ScreenInsets.fromValue);
    map.set("SurfaceGuiBase,Face", NormalId.fromValue);
    map.set("AdGui,AdShape", AdShape.fromValue);
    map.set("SurfaceGui,SizingMode", SurfaceGuiSizingMode.fromValue);
    map.set("HandleAdornment,AdornCullingMode", AdornCullingMode.fromValue);
    map.set("Handles,Style", HandlesStyle.fromValue);
    map.set("SurfaceSelection,TargetSurface", NormalId.fromValue);
    map.set("Highlight,DepthMode", HighlightDepthMode.fromValue);
    map.set("Humanoid,CollisionType", HumanoidCollisionType.fromValue);
    map.set("Humanoid,DisplayDistanceType", HumanoidDisplayDistanceType.fromValue);
    map.set("Humanoid,HealthDisplayType", HumanoidHealthDisplayType.fromValue);
    map.set("Humanoid,NameOcclusion", NameOcclusion.fromValue);
    map.set("Humanoid,RigType", HumanoidRigType.fromValue);
    map.set("IKControl,Type", IKControlType.fromValue);
    map.set("SpotLight,Face", NormalId.fromValue);
    map.set("SurfaceLight,Face", NormalId.fromValue);
    map.set("Lighting,Technology", Technology.fromValue);
    map.set("BaseScript,RunContext", RunContext.fromValue);
    map.set("MaterialVariant,BaseMaterial", Material.fromValue);
    map.set("MaterialVariant,MaterialPattern", MaterialPattern.fromValue);
    map.set("Noise,NoiseType", NoiseType.fromValue);
    map.set("BasePart,BackSurface", SurfaceType.fromValue);
    map.set("BasePart,BackSurfaceInput", InputType.fromValue);
    map.set("BasePart,BottomSurface", SurfaceType.fromValue);
    map.set("BasePart,BottomSurfaceInput", InputType.fromValue);
    map.set("BasePart,FrontSurface", SurfaceType.fromValue);
    map.set("BasePart,FrontSurfaceInput", InputType.fromValue);
    map.set("BasePart,LeftSurface", SurfaceType.fromValue);
    map.set("BasePart,LeftSurfaceInput", InputType.fromValue);
    map.set("BasePart,Material", Material.fromValue);
    map.set("BasePart,RightSurface", SurfaceType.fromValue);
    map.set("BasePart,RightSurfaceInput", InputType.fromValue);
    map.set("BasePart,TopSurface", SurfaceType.fromValue);
    map.set("BasePart,TopSurfaceInput", InputType.fromValue);
    map.set("FormFactorPart,FormFactor", FormFactor.fromValue);
    map.set("FormFactorPart,formFactor", FormFactor.fromValue);
    map.set("FormFactorPart,formFactorRaw", FormFactor.fromValue);
    map.set("Part,shape", PartType.fromValue);
    map.set("Terrain,AcquisitionMethod", TerrainAcquisitionMethod.fromValue);
    map.set("TriangleMeshPart,FluidFidelityInternal", FluidFidelity.fromValue);
    map.set("MeshPart,RenderFidelity", RenderFidelity.fromValue);
    map.set("PartOperation,FormFactor", FormFactor.fromValue);
    map.set("PartOperation,RenderFidelity", RenderFidelity.fromValue);
    map.set("TrussPart,style", Style.fromValue);
    map.set("Model,LevelOfDetail", ModelLevelOfDetail.fromValue);
    map.set("Model,ModelStreamingMode", ModelStreamingMode.fromValue);
    map.set("HopperBin,BinType", BinType.fromValue);
    map.set("Workspace,AvatarUnificationMode", AvatarUnificationMode.fromValue);
    map.set("Workspace,CSGAsyncDynamicCollision", CSGAsyncDynamicCollision.fromValue);
    map.set("Workspace,ClientAnimatorThrottling", ClientAnimatorThrottlingMode.fromValue);
    map.set("Workspace,DecreaseMinimumPartDensityMode", DecreaseMinimumPartDensityMode.fromValue);
    map.set("Workspace,EditorLiveScripting", EditorLiveScripting.fromValue);
    map.set("Workspace,FluidForces", FluidForces.fromValue);
    map.set("Workspace,IKControlConstraintSupport", IKControlConstraintSupport.fromValue);
    map.set("Workspace,MeshPartHeadsAndAccessories", MeshPartHeadsAndAccessories.fromValue);
    map.set("Workspace,ModelStreamingBehavior", ModelStreamingBehavior.fromValue);
    map.set("Workspace,PhysicsSteppingMethod", PhysicsSteppingMethod.fromValue);
    map.set("Workspace,PlayerCharacterDestroyBehavior", PlayerCharacterDestroyBehavior.fromValue);
    map.set("Workspace,PrimalPhysicsSolver", PrimalPhysicsSolver.fromValue);
    map.set("Workspace,RejectCharacterDeletions", RejectCharacterDeletions.fromValue);
    map.set("Workspace,ReplicateInstanceDestroySetting", ReplicateInstanceDestroySetting.fromValue);
    map.set("Workspace,Retargeting", AnimatorRetargetingMode.fromValue);
    map.set("Workspace,SignalBehavior2", SignalBehavior.fromValue);
    map.set("Workspace,StreamOutBehavior", StreamOutBehavior.fromValue);
    map.set("Workspace,StreamingIntegrityMode", StreamingIntegrityMode.fromValue);
    map.set("ParticleEmitter,EmissionDirection", NormalId.fromValue);
    map.set("ParticleEmitter,FlipbookLayout", ParticleFlipbookLayout.fromValue);
    map.set("ParticleEmitter,FlipbookMode", ParticleFlipbookMode.fromValue);
    map.set("ParticleEmitter,Orientation", ParticleOrientation.fromValue);
    map.set("ParticleEmitter,Shape", ParticleEmitterShape.fromValue);
    map.set("ParticleEmitter,ShapeInOut", ParticleEmitterShapeInOut.fromValue);
    map.set("ParticleEmitter,ShapeStyle", ParticleEmitterShapeStyle.fromValue);
    map.set("Player,CameraMode", CameraMode.fromValue);
    map.set("Player,DevCameraOcclusionMode", DevCameraOcclusionMode.fromValue);
    map.set("Player,DevComputerCameraMode", DevComputerCameraMovementMode.fromValue);
    map.set("Player,DevComputerMovementMode", DevComputerMovementMode.fromValue);
    map.set("Player,DevTouchCameraMode", DevTouchCameraMovementMode.fromValue);
    map.set("Player,DevTouchMovementMode", DevTouchMovementMode.fromValue);
    map.set("PolicyService,IsLuobuServer", TriStateBoolean.fromValue);
    map.set("PolicyService,LuobuWhitelisted", TriStateBoolean.fromValue);
    map.set("PoseBase,EasingDirection", PoseEasingDirection.fromValue);
    map.set("PoseBase,EasingStyle", PoseEasingStyle.fromValue);
    map.set("ProximityPrompt,Exclusivity", ProximityPromptExclusivity.fromValue);
    map.set("ProximityPrompt,GamepadKeyCode", KeyCode.fromValue);
    map.set("ProximityPrompt,KeyboardKeyCode", KeyCode.fromValue);
    map.set("ProximityPrompt,Style", ProximityPromptStyle.fromValue);
    map.set("ReflectionMetadataClass,ServiceVisibility", ServiceVisibility.fromValue);
    map.set("RenderSettings,EditQualityLevel", QualityLevel.fromValue);
    map.set("RenderSettings,FrameRateManager", FramerateManagerMode.fromValue);
    map.set("RenderSettings,GraphicsMode", GraphicsMode.fromValue);
    map.set("RenderSettings,MeshPartDetailLevel", MeshPartDetailLevel.fromValue);
    map.set("RenderSettings,QualityLevel", QualityLevel.fromValue);
    map.set("RenderSettings,ViewMode", ViewMode.fromValue);
    map.set("RenderingTest,ComparisonMethod", RenderingTestComparisonMethod.fromValue);
    map.set("SensorBase,UpdateType", SensorUpdateType.fromValue);
    map.set("ControllerPartSensor,SensorMode", SensorMode.fromValue);
    map.set("Sound,RollOffMode", RollOffMode.fromValue);
    map.set("SoundService,AmbientReverb", ReverbType.fromValue);
    map.set("SoundService,VolumetricAudio", VolumetricAudio.fromValue);
    map.set("StarterPlayer,AvatarJointUpgrade_Serialized", AvatarJointUpgrade.fromValue);
    map.set("StarterPlayer,CameraMode", CameraMode.fromValue);
    map.set("StarterPlayer,DevCameraOcclusionMode", DevCameraOcclusionMode.fromValue);
    map.set("StarterPlayer,DevComputerCameraMovementMode", DevComputerCameraMovementMode.fromValue);
    map.set("StarterPlayer,DevComputerMovementMode", DevComputerMovementMode.fromValue);
    map.set("StarterPlayer,DevTouchCameraMovementMode", DevTouchCameraMovementMode.fromValue);
    map.set("StarterPlayer,DevTouchMovementMode", DevTouchMovementMode.fromValue);
    map.set("StarterPlayer,EnableDynamicHeads", LoadDynamicHeads.fromValue);
    map.set("StarterPlayer,GameSettingsAvatar", GameAvatarType.fromValue);
    map.set("StarterPlayer,GameSettingsR15Collision", R15CollisionType.fromValue);
    map.set("StarterPlayer,LoadCharacterLayeredClothing", LoadCharacterLayeredClothing.fromValue);
    map.set("StarterPlayer,LuaCharacterController", CharacterControlMode.fromValue);
    map.set("SurfaceAppearance,AlphaMode", AlphaMode.fromValue);
    map.set("TaskScheduler,ThreadPoolConfig", ThreadPoolConfig.fromValue);
    map.set("TerrainDetail,Face", TerrainFace.fromValue);
    map.set("TerrainDetail,MaterialPattern", MaterialPattern.fromValue);
    map.set("BubbleChatConfiguration,Font", Font.fromValue);
    map.set("ChatInputBarConfiguration,KeyboardKeyCode", KeyCode.fromValue);
    map.set("ChatWindowConfiguration,HorizontalAlignment", HorizontalAlignment.fromValue);
    map.set("ChatWindowConfiguration,VerticalAlignment", VerticalAlignment.fromValue);
    map.set("TextChatService,ChatVersion", ChatVersion.fromValue);
    map.set("Trail,TextureMode", TextureMode.fromValue);
    map.set("UIAspectRatioConstraint,AspectType", AspectType.fromValue);
    map.set("UIAspectRatioConstraint,DominantAxis", DominantAxis.fromValue);
    map.set("UIFlexItem,FlexMode", UIFlexMode.fromValue);
    map.set("UIFlexItem,ItemLineAlignment", ItemLineAlignment.fromValue);
    map.set("UIGridStyleLayout,FillDirection", FillDirection.fromValue);
    map.set("UIGridStyleLayout,HorizontalAlignment", HorizontalAlignment.fromValue);
    map.set("UIGridStyleLayout,SortOrder", SortOrder.fromValue);
    map.set("UIGridStyleLayout,VerticalAlignment", VerticalAlignment.fromValue);
    map.set("UIGridLayout,StartCorner", StartCorner.fromValue);
    map.set("UIListLayout,HorizontalFlex", UIFlexAlignment.fromValue);
    map.set("UIListLayout,ItemLineAlignment", ItemLineAlignment.fromValue);
    map.set("UIListLayout,VerticalFlex", UIFlexAlignment.fromValue);
    map.set("UIPageLayout,EasingDirection", EasingDirection.fromValue);
    map.set("UIPageLayout,EasingStyle", EasingStyle.fromValue);
    map.set("UITableLayout,MajorAxis", TableMajorAxis.fromValue);
    map.set("UIStroke,ApplyStrokeMode", ApplyStrokeMode.fromValue);
    map.set("UIStroke,LineJoinMode", LineJoinMode.fromValue);
    map.set("UserInputService,MouseBehavior", MouseBehavior.fromValue);
    map.set("VRService,AutomaticScaling", VRScaling.fromValue);
    map.set("VideoDeviceInput,CaptureQuality", VideoDeviceCaptureQuality.fromValue);
    map.set("VoiceChatService,UseAudioApi", AudioApiRollout.fromValue);
    return map;
}
