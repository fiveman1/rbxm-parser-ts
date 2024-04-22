/* eslint-disable @typescript-eslint/no-unused-vars */
// Generated on 4/22/2024, 12:42:41 AM

import { DataType, CoreInstance, EnumItem} from "../lib/roblox_types";

export class AccessoryDescription extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AccessoryDescription");}
    public static new() {return new AccessoryDescription();}
    public get accessoryType() {return this.getProp("AccessoryType", DataType.Enum) as AccessoryType | undefined;}
    public set accessoryType(value) {this.setProp("AccessoryType", DataType.Enum, value);}
    public get assetId() {return this.getProp("AssetId", DataType.Int64);}
    public set assetId(value) {this.setProp("AssetId", DataType.Int64, value);}
    public get instance() {return this.getProp("Instance", DataType.Referent) as CoreInstance | undefined;}
    public set instance(value) {this.setProp("Instance", DataType.Referent, value);}
    public get isLayered() {return this.getProp("IsLayered", DataType.Bool);}
    public set isLayered(value) {this.setProp("IsLayered", DataType.Bool, value);}
    public get order() {return this.getProp("Order", DataType.Int32);}
    public set order(value) {this.setProp("Order", DataType.Int32, value);}
    public get puffiness() {return this.getProp("Puffiness", DataType.Float32);}
    public set puffiness(value) {this.setProp("Puffiness", DataType.Float32, value);}
}

export class AccountService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AccountService", true);}
    public static new() {return new AccountService();}
}

export class Accoutrement extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Accoutrement");}
    public static new() {return new Accoutrement();}
    public get attachmentPoint() {return this.getProp("AttachmentPoint", DataType.CFrame);}
    public set attachmentPoint(value) {this.setProp("AttachmentPoint", DataType.CFrame, value);}
}

export class Accessory extends Accoutrement {
    protected constructor(className?: string) {super(className ?? "Accessory");}
    public static new() {return new Accessory();}
    public get accessoryType() {return this.getProp("AccessoryType", DataType.Enum) as AccessoryType | undefined;}
    public set accessoryType(value) {this.setProp("AccessoryType", DataType.Enum, value);}
}

export class Hat extends Accoutrement {
    protected constructor(className?: string) {super(className ?? "Hat");}
    public static new() {return new Hat();}
}

export class ActivityHistoryService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ActivityHistoryService", true);}
    public static new() {return new ActivityHistoryService();}
}

export class AdPortal extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AdPortal");}
    public static new() {return new AdPortal();}
}

export class AdService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AdService", true);}
    public static new() {return new AdService();}
}

export class AdvancedDragger extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AdvancedDragger");}
    public static new() {return new AdvancedDragger();}
}

export class AnalyticsService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AnalyticsService", true);}
    public static new() {return new AnalyticsService();}
    public get apiKey() {return this.getProp("ApiKey", DataType.String);}
    public set apiKey(value) {this.setProp("ApiKey", DataType.String, value);}
}

export class Animation extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Animation");}
    public static new() {return new Animation();}
    public get animationId() {return this.getProp("AnimationId", DataType.String);}
    public set animationId(value) {this.setProp("AnimationId", DataType.String, value);}
}

export abstract class AnimationClip extends CoreInstance {
    protected constructor(className: string) {super(className);}
    public get guidBinaryString() {return this.getProp("GuidBinaryString", DataType.String);}
    public set guidBinaryString(value) {this.setProp("GuidBinaryString", DataType.String, value);}
    public get loop() {return this.getProp("Loop", DataType.Bool);}
    public set loop(value) {this.setProp("Loop", DataType.Bool, value);}
    public get priority() {return this.getProp("Priority", DataType.Enum) as AnimationPriority | undefined;}
    public set priority(value) {this.setProp("Priority", DataType.Enum, value);}
}

export class CurveAnimation extends AnimationClip {
    protected constructor(className?: string) {super(className ?? "CurveAnimation");}
    public static new() {return new CurveAnimation();}
}

export class KeyframeSequence extends AnimationClip {
    protected constructor(className?: string) {super(className ?? "KeyframeSequence");}
    public static new() {return new KeyframeSequence();}
    public get authoredHipHeight() {return this.getProp("AuthoredHipHeight", DataType.Float32);}
    public set authoredHipHeight(value) {this.setProp("AuthoredHipHeight", DataType.Float32, value);}
}

export class AnimationClipProvider extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AnimationClipProvider", true);}
    public static new() {return new AnimationClipProvider();}
}

export class AnimationController extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AnimationController");}
    public static new() {return new AnimationController();}
}

export class AnimationFromVideoCreatorService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AnimationFromVideoCreatorService", true);}
    public static new() {return new AnimationFromVideoCreatorService();}
}

export class AnimationFromVideoCreatorStudioService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AnimationFromVideoCreatorStudioService", true);}
    public static new() {return new AnimationFromVideoCreatorStudioService();}
}

export class AnimationRigData extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AnimationRigData");}
    public static new() {return new AnimationRigData();}
    public get articulatedJoint() {return this.getProp("articulatedJoint", DataType.String);}
    public set articulatedJoint(value) {this.setProp("articulatedJoint", DataType.String, value);}
    public get endEffectorRotationConstraint() {return this.getProp("endEffectorRotationConstraint", DataType.String);}
    public set endEffectorRotationConstraint(value) {this.setProp("endEffectorRotationConstraint", DataType.String, value);}
    public get endEffectorTranslationConstraint() {return this.getProp("endEffectorTranslationConstraint", DataType.String);}
    public set endEffectorTranslationConstraint(value) {this.setProp("endEffectorTranslationConstraint", DataType.String, value);}
    public get endEffectorWeight() {return this.getProp("endEffectorWeight", DataType.String);}
    public set endEffectorWeight(value) {this.setProp("endEffectorWeight", DataType.String, value);}
    public get facsControl() {return this.getProp("facsControl", DataType.String);}
    public set facsControl(value) {this.setProp("facsControl", DataType.String, value);}
    public get label() {return this.getProp("label", DataType.String);}
    public set label(value) {this.setProp("label", DataType.String, value);}
    public get postTransform() {return this.getProp("postTransform", DataType.String);}
    public set postTransform(value) {this.setProp("postTransform", DataType.String, value);}
    public get preTransform() {return this.getProp("preTransform", DataType.String);}
    public set preTransform(value) {this.setProp("preTransform", DataType.String, value);}
    public get rootMotion() {return this.getProp("rootMotion", DataType.String);}
    public set rootMotion(value) {this.setProp("rootMotion", DataType.String, value);}
    public get transform() {return this.getProp("transform", DataType.String);}
    public set transform(value) {this.setProp("transform", DataType.String, value);}
    public get weight() {return this.getProp("weight", DataType.String);}
    public set weight(value) {this.setProp("weight", DataType.String, value);}
}

export class Animator extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Animator");}
    public static new() {return new Animator();}
    public get preferLodEnabled() {return this.getProp("PreferLodEnabled", DataType.Bool);}
    public set preferLodEnabled(value) {this.setProp("PreferLodEnabled", DataType.Bool, value);}
}

export class AppUpdateService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AppUpdateService", true);}
    public static new() {return new AppUpdateService();}
}

export class AssetCounterService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AssetCounterService", true);}
    public static new() {return new AssetCounterService();}
}

export class AssetDeliveryProxy extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AssetDeliveryProxy", true);}
    public static new() {return new AssetDeliveryProxy();}
    public get interface() {return this.getProp("Interface", DataType.String);}
    public set interface(value) {this.setProp("Interface", DataType.String, value);}
    public get port() {return this.getProp("Port", DataType.Int32);}
    public set port(value) {this.setProp("Port", DataType.Int32, value);}
    public get startServer() {return this.getProp("StartServer", DataType.Bool);}
    public set startServer(value) {this.setProp("StartServer", DataType.Bool, value);}
}

export class AssetImportService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AssetImportService", true);}
    public static new() {return new AssetImportService();}
}

export class AssetManagerService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AssetManagerService", true);}
    public static new() {return new AssetManagerService();}
}

export class AssetService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AssetService", true);}
    public static new() {return new AssetService();}
}

export class Atmosphere extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Atmosphere");}
    public static new() {return new Atmosphere();}
    public get color() {return this.getProp("Color", DataType.Color3);}
    public set color(value) {this.setProp("Color", DataType.Color3, value);}
    public get decay() {return this.getProp("Decay", DataType.Color3);}
    public set decay(value) {this.setProp("Decay", DataType.Color3, value);}
    public get density() {return this.getProp("Density", DataType.Float32);}
    public set density(value) {this.setProp("Density", DataType.Float32, value);}
    public get glare() {return this.getProp("Glare", DataType.Float32);}
    public set glare(value) {this.setProp("Glare", DataType.Float32, value);}
    public get haze() {return this.getProp("Haze", DataType.Float32);}
    public set haze(value) {this.setProp("Haze", DataType.Float32, value);}
    public get offset() {return this.getProp("Offset", DataType.Float32);}
    public set offset(value) {this.setProp("Offset", DataType.Float32, value);}
}

export class Attachment extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Attachment");}
    public static new() {return new Attachment();}
    public get cFrame() {return this.getProp("CFrame", DataType.CFrame);}
    public set cFrame(value) {this.setProp("CFrame", DataType.CFrame, value);}
    public get visible() {return this.getProp("Visible", DataType.Bool);}
    public set visible(value) {this.setProp("Visible", DataType.Bool, value);}
}

export class Bone extends Attachment {
    protected constructor(className?: string) {super(className ?? "Bone");}
    public static new() {return new Bone();}
}

export class AudioAnalyzer extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AudioAnalyzer");}
    public static new() {return new AudioAnalyzer();}
}

export class AudioChorus extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AudioChorus");}
    public static new() {return new AudioChorus();}
    public get depth() {return this.getProp("Depth", DataType.Float32);}
    public set depth(value) {this.setProp("Depth", DataType.Float32, value);}
    public get mix() {return this.getProp("Mix", DataType.Float32);}
    public set mix(value) {this.setProp("Mix", DataType.Float32, value);}
    public get rate() {return this.getProp("Rate", DataType.Float32);}
    public set rate(value) {this.setProp("Rate", DataType.Float32, value);}
}

export class AudioCompressor extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AudioCompressor");}
    public static new() {return new AudioCompressor();}
    public get attack() {return this.getProp("Attack", DataType.Float32);}
    public set attack(value) {this.setProp("Attack", DataType.Float32, value);}
    public get makeupGain() {return this.getProp("MakeupGain", DataType.Float32);}
    public set makeupGain(value) {this.setProp("MakeupGain", DataType.Float32, value);}
    public get ratio() {return this.getProp("Ratio", DataType.Float32);}
    public set ratio(value) {this.setProp("Ratio", DataType.Float32, value);}
    public get release() {return this.getProp("Release", DataType.Float32);}
    public set release(value) {this.setProp("Release", DataType.Float32, value);}
    public get threshold() {return this.getProp("Threshold", DataType.Float32);}
    public set threshold(value) {this.setProp("Threshold", DataType.Float32, value);}
}

export class AudioDeviceInput extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AudioDeviceInput");}
    public static new() {return new AudioDeviceInput();}
    public get accessType() {return this.getProp("AccessType", DataType.Enum) as AccessModifierType | undefined;}
    public set accessType(value) {this.setProp("AccessType", DataType.Enum, value);}
    public get active() {return this.getProp("Active", DataType.Bool);}
    public set active(value) {this.setProp("Active", DataType.Bool, value);}
    public get muted() {return this.getProp("Muted", DataType.Bool);}
    public set muted(value) {this.setProp("Muted", DataType.Bool, value);}
    public get player() {return this.getProp("Player", DataType.Referent) as Player | undefined;}
    public set player(value) {this.setProp("Player", DataType.Referent, value);}
}

export class AudioDeviceOutput extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AudioDeviceOutput");}
    public static new() {return new AudioDeviceOutput();}
    public get player() {return this.getProp("Player", DataType.Referent) as Player | undefined;}
    public set player(value) {this.setProp("Player", DataType.Referent, value);}
}

export class AudioDistortion extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AudioDistortion");}
    public static new() {return new AudioDistortion();}
    public get level() {return this.getProp("Level", DataType.Float32);}
    public set level(value) {this.setProp("Level", DataType.Float32, value);}
}

export class AudioEcho extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AudioEcho");}
    public static new() {return new AudioEcho();}
    public get delayTime() {return this.getProp("DelayTime", DataType.Float32);}
    public set delayTime(value) {this.setProp("DelayTime", DataType.Float32, value);}
    public get dryLevel() {return this.getProp("DryLevel", DataType.Float32);}
    public set dryLevel(value) {this.setProp("DryLevel", DataType.Float32, value);}
    public get feedback() {return this.getProp("Feedback", DataType.Float32);}
    public set feedback(value) {this.setProp("Feedback", DataType.Float32, value);}
    public get wetLevel() {return this.getProp("WetLevel", DataType.Float32);}
    public set wetLevel(value) {this.setProp("WetLevel", DataType.Float32, value);}
}

export class AudioEmitter extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AudioEmitter");}
    public static new() {return new AudioEmitter();}
    public get audioInteractionGroup() {return this.getProp("AudioInteractionGroup", DataType.String);}
    public set audioInteractionGroup(value) {this.setProp("AudioInteractionGroup", DataType.String, value);}
    public get distanceAttenuation() {return this.getProp("DistanceAttenuation", DataType.String);}
    public set distanceAttenuation(value) {this.setProp("DistanceAttenuation", DataType.String, value);}
}

export class AudioEqualizer extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AudioEqualizer");}
    public static new() {return new AudioEqualizer();}
    public get highGain() {return this.getProp("HighGain", DataType.Float32);}
    public set highGain(value) {this.setProp("HighGain", DataType.Float32, value);}
    public get lowGain() {return this.getProp("LowGain", DataType.Float32);}
    public set lowGain(value) {this.setProp("LowGain", DataType.Float32, value);}
    public get midGain() {return this.getProp("MidGain", DataType.Float32);}
    public set midGain(value) {this.setProp("MidGain", DataType.Float32, value);}
    public get midRange() {return this.getProp("MidRange", DataType.NumberRange);}
    public set midRange(value) {this.setProp("MidRange", DataType.NumberRange, value);}
}

export class AudioFader extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AudioFader");}
    public static new() {return new AudioFader();}
    public get volume() {return this.getProp("Volume", DataType.Float32);}
    public set volume(value) {this.setProp("Volume", DataType.Float32, value);}
}

export class AudioFlanger extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AudioFlanger");}
    public static new() {return new AudioFlanger();}
    public get depth() {return this.getProp("Depth", DataType.Float32);}
    public set depth(value) {this.setProp("Depth", DataType.Float32, value);}
    public get mix() {return this.getProp("Mix", DataType.Float32);}
    public set mix(value) {this.setProp("Mix", DataType.Float32, value);}
    public get rate() {return this.getProp("Rate", DataType.Float32);}
    public set rate(value) {this.setProp("Rate", DataType.Float32, value);}
}

export class AudioListener extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AudioListener");}
    public static new() {return new AudioListener();}
    public get audioInteractionGroup() {return this.getProp("AudioInteractionGroup", DataType.String);}
    public set audioInteractionGroup(value) {this.setProp("AudioInteractionGroup", DataType.String, value);}
}

export class AudioPitchShifter extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AudioPitchShifter");}
    public static new() {return new AudioPitchShifter();}
    public get pitch() {return this.getProp("Pitch", DataType.Float32);}
    public set pitch(value) {this.setProp("Pitch", DataType.Float32, value);}
}

export class AudioPlayer extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AudioPlayer");}
    public static new() {return new AudioPlayer();}
    public get assetId() {return this.getProp("AssetId", DataType.String);}
    public set assetId(value) {this.setProp("AssetId", DataType.String, value);}
    public get autoLoad() {return this.getProp("AutoLoad", DataType.Bool);}
    public set autoLoad(value) {this.setProp("AutoLoad", DataType.Bool, value);}
    public get loopRegion() {return this.getProp("LoopRegion", DataType.NumberRange);}
    public set loopRegion(value) {this.setProp("LoopRegion", DataType.NumberRange, value);}
    public get looping() {return this.getProp("Looping", DataType.Bool);}
    public set looping(value) {this.setProp("Looping", DataType.Bool, value);}
    public get playbackRegion() {return this.getProp("PlaybackRegion", DataType.NumberRange);}
    public set playbackRegion(value) {this.setProp("PlaybackRegion", DataType.NumberRange, value);}
    public get playbackSpeed() {return this.getProp("PlaybackSpeed", DataType.Float64);}
    public set playbackSpeed(value) {this.setProp("PlaybackSpeed", DataType.Float64, value);}
    public get timePosition() {return this.getProp("TimePosition", DataType.Float64);}
    public set timePosition(value) {this.setProp("TimePosition", DataType.Float64, value);}
}

export class AudioReverb extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AudioReverb");}
    public static new() {return new AudioReverb();}
    public get decayRatio() {return this.getProp("DecayRatio", DataType.Float32);}
    public set decayRatio(value) {this.setProp("DecayRatio", DataType.Float32, value);}
    public get decayTime() {return this.getProp("DecayTime", DataType.Float32);}
    public set decayTime(value) {this.setProp("DecayTime", DataType.Float32, value);}
    public get density() {return this.getProp("Density", DataType.Float32);}
    public set density(value) {this.setProp("Density", DataType.Float32, value);}
    public get diffusion() {return this.getProp("Diffusion", DataType.Float32);}
    public set diffusion(value) {this.setProp("Diffusion", DataType.Float32, value);}
    public get dryLevel() {return this.getProp("DryLevel", DataType.Float32);}
    public set dryLevel(value) {this.setProp("DryLevel", DataType.Float32, value);}
    public get earlyDelayTime() {return this.getProp("EarlyDelayTime", DataType.Float32);}
    public set earlyDelayTime(value) {this.setProp("EarlyDelayTime", DataType.Float32, value);}
    public get highCutFrequency() {return this.getProp("HighCutFrequency", DataType.Float32);}
    public set highCutFrequency(value) {this.setProp("HighCutFrequency", DataType.Float32, value);}
    public get lateDelayTime() {return this.getProp("LateDelayTime", DataType.Float32);}
    public set lateDelayTime(value) {this.setProp("LateDelayTime", DataType.Float32, value);}
    public get lowShelfFrequency() {return this.getProp("LowShelfFrequency", DataType.Float32);}
    public set lowShelfFrequency(value) {this.setProp("LowShelfFrequency", DataType.Float32, value);}
    public get lowShelfGain() {return this.getProp("LowShelfGain", DataType.Float32);}
    public set lowShelfGain(value) {this.setProp("LowShelfGain", DataType.Float32, value);}
    public get referenceFrequency() {return this.getProp("ReferenceFrequency", DataType.Float32);}
    public set referenceFrequency(value) {this.setProp("ReferenceFrequency", DataType.Float32, value);}
    public get wetLevel() {return this.getProp("WetLevel", DataType.Float32);}
    public set wetLevel(value) {this.setProp("WetLevel", DataType.Float32, value);}
}

export class AudioSearchParams extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AudioSearchParams");}
    public static new() {return new AudioSearchParams();}
    public get album() {return this.getProp("Album", DataType.String);}
    public set album(value) {this.setProp("Album", DataType.String, value);}
    public get artist() {return this.getProp("Artist", DataType.String);}
    public set artist(value) {this.setProp("Artist", DataType.String, value);}
    public get audioSubType() {return this.getProp("AudioSubType", DataType.Enum) as AudioSubType | undefined;}
    public set audioSubType(value) {this.setProp("AudioSubType", DataType.Enum, value);}
    public get audioSubtype() {return this.getProp("AudioSubtype", DataType.Enum) as AudioSubType | undefined;}
    public set audioSubtype(value) {this.setProp("AudioSubtype", DataType.Enum, value);}
    public get maxDuration() {return this.getProp("MaxDuration", DataType.Int32);}
    public set maxDuration(value) {this.setProp("MaxDuration", DataType.Int32, value);}
    public get minDuration() {return this.getProp("MinDuration", DataType.Int32);}
    public set minDuration(value) {this.setProp("MinDuration", DataType.Int32, value);}
    public get searchKeyword() {return this.getProp("SearchKeyword", DataType.String);}
    public set searchKeyword(value) {this.setProp("SearchKeyword", DataType.String, value);}
    public get tag() {return this.getProp("Tag", DataType.String);}
    public set tag(value) {this.setProp("Tag", DataType.String, value);}
    public get title() {return this.getProp("Title", DataType.String);}
    public set title(value) {this.setProp("Title", DataType.String, value);}
}

export class AvatarChatService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AvatarChatService", true);}
    public static new() {return new AvatarChatService();}
}

export class AvatarCreationService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AvatarCreationService", true);}
    public static new() {return new AvatarCreationService();}
}

export class AvatarEditorService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AvatarEditorService", true);}
    public static new() {return new AvatarEditorService();}
}

export abstract class AvatarGenerationJob extends CoreInstance {
    protected constructor(className: string) {super(className);}
    public get error() {return this.getProp("Error", DataType.Enum) as AvatarGenerationError | undefined;}
    public set error(value) {this.setProp("Error", DataType.Enum, value);}
    public get errorMessage() {return this.getProp("ErrorMessage", DataType.String);}
    public set errorMessage(value) {this.setProp("ErrorMessage", DataType.String, value);}
    public get progress() {return this.getProp("Progress", DataType.Float32);}
    public set progress(value) {this.setProp("Progress", DataType.Float32, value);}
    public get status() {return this.getProp("Status", DataType.Enum) as AvatarGenerationJobStatus | undefined;}
    public set status(value) {this.setProp("Status", DataType.Enum, value);}
}

export class AvatarImportService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "AvatarImportService", true);}
    public static new() {return new AvatarImportService();}
}

export class Backpack extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Backpack");}
    public static new() {return new Backpack();}
}

export class BadgeService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "BadgeService", true);}
    public static new() {return new BadgeService();}
}

export abstract class BaseImportData extends CoreInstance {
    protected constructor(className: string) {super(className);}
    public get importName() {return this.getProp("ImportName", DataType.String);}
    public set importName(value) {this.setProp("ImportName", DataType.String, value);}
    public get shouldImport() {return this.getProp("ShouldImport", DataType.Bool);}
    public set shouldImport(value) {this.setProp("ShouldImport", DataType.Bool, value);}
}

export abstract class BasePlayerGui extends CoreInstance {
    protected constructor(className: string) {super(className);}
}

export class CoreGui extends BasePlayerGui {
    protected constructor(className?: string) {super(className ?? "CoreGui");}
    public static new() {return new CoreGui();}
    public get selectionImageObject() {return this.getProp("SelectionImageObject", DataType.Referent) as GuiObject | undefined;}
    public set selectionImageObject(value) {this.setProp("SelectionImageObject", DataType.Referent, value);}
}

export class StarterGui extends BasePlayerGui {
    protected constructor(className?: string) {super(className ?? "StarterGui");}
    public static new() {return new StarterGui();}
    public get resetPlayerGuiOnSpawn() {return this.getProp("ResetPlayerGuiOnSpawn", DataType.Bool);}
    public set resetPlayerGuiOnSpawn(value) {this.setProp("ResetPlayerGuiOnSpawn", DataType.Bool, value);}
    public get rtlTextSupport() {return this.getProp("RtlTextSupport", DataType.Enum) as RtlTextSupport | undefined;}
    public set rtlTextSupport(value) {this.setProp("RtlTextSupport", DataType.Enum, value);}
    public get screenOrientation() {return this.getProp("ScreenOrientation", DataType.Enum) as ScreenOrientation | undefined;}
    public set screenOrientation(value) {this.setProp("ScreenOrientation", DataType.Enum, value);}
    public get showDevelopmentGui() {return this.getProp("ShowDevelopmentGui", DataType.Bool);}
    public set showDevelopmentGui(value) {this.setProp("ShowDevelopmentGui", DataType.Bool, value);}
    public get virtualCursorMode() {return this.getProp("VirtualCursorMode", DataType.Enum) as VirtualCursorMode | undefined;}
    public set virtualCursorMode(value) {this.setProp("VirtualCursorMode", DataType.Enum, value);}
}

export abstract class BaseRemoteEvent extends CoreInstance {
    protected constructor(className: string) {super(className);}
}

export class RemoteEvent extends BaseRemoteEvent {
    protected constructor(className?: string) {super(className ?? "RemoteEvent");}
    public static new() {return new RemoteEvent();}
}

export class UnreliableRemoteEvent extends BaseRemoteEvent {
    protected constructor(className?: string) {super(className ?? "UnreliableRemoteEvent");}
    public static new() {return new UnreliableRemoteEvent();}
}

export abstract class BaseWrap extends CoreInstance {
    protected constructor(className: string) {super(className);}
    public get cageMeshId() {return this.getProp("CageMeshId", DataType.String);}
    public set cageMeshId(value) {this.setProp("CageMeshId", DataType.String, value);}
    public get cageOrigin() {return this.getProp("CageOrigin", DataType.CFrame);}
    public set cageOrigin(value) {this.setProp("CageOrigin", DataType.CFrame, value);}
    public get hSRAssetId() {return this.getProp("HSRAssetId", DataType.String);}
    public set hSRAssetId(value) {this.setProp("HSRAssetId", DataType.String, value);}
    public get hSRData() {return this.getProp("HSRData", DataType.SharedString);}
    public set hSRData(value) {this.setProp("HSRData", DataType.SharedString, value);}
    public get hSRMeshIdData() {return this.getProp("HSRMeshIdData", DataType.SharedString);}
    public set hSRMeshIdData(value) {this.setProp("HSRMeshIdData", DataType.SharedString, value);}
    public get importOrigin() {return this.getProp("ImportOrigin", DataType.CFrame);}
    public set importOrigin(value) {this.setProp("ImportOrigin", DataType.CFrame, value);}
    public get temporaryCageMeshId() {return this.getProp("TemporaryCageMeshId", DataType.String);}
    public set temporaryCageMeshId(value) {this.setProp("TemporaryCageMeshId", DataType.String, value);}
}

export class WrapLayer extends BaseWrap {
    protected constructor(className?: string) {super(className ?? "WrapLayer");}
    public static new() {return new WrapLayer();}
    public get autoSkin() {return this.getProp("AutoSkin", DataType.Enum) as WrapLayerAutoSkin | undefined;}
    public set autoSkin(value) {this.setProp("AutoSkin", DataType.Enum, value);}
    public get bindOffset() {return this.getProp("BindOffset", DataType.CFrame);}
    public set bindOffset(value) {this.setProp("BindOffset", DataType.CFrame, value);}
    public get enabled() {return this.getProp("Enabled", DataType.Bool);}
    public set enabled(value) {this.setProp("Enabled", DataType.Bool, value);}
    public get order() {return this.getProp("Order", DataType.Int32);}
    public set order(value) {this.setProp("Order", DataType.Int32, value);}
    public get puffiness() {return this.getProp("Puffiness", DataType.Float32);}
    public set puffiness(value) {this.setProp("Puffiness", DataType.Float32, value);}
    public get referenceMeshId() {return this.getProp("ReferenceMeshId", DataType.String);}
    public set referenceMeshId(value) {this.setProp("ReferenceMeshId", DataType.String, value);}
    public get referenceOrigin() {return this.getProp("ReferenceOrigin", DataType.CFrame);}
    public set referenceOrigin(value) {this.setProp("ReferenceOrigin", DataType.CFrame, value);}
    public get shrinkFactor() {return this.getProp("ShrinkFactor", DataType.Float32);}
    public set shrinkFactor(value) {this.setProp("ShrinkFactor", DataType.Float32, value);}
    public get temporaryReferenceId() {return this.getProp("TemporaryReferenceId", DataType.String);}
    public set temporaryReferenceId(value) {this.setProp("TemporaryReferenceId", DataType.String, value);}
}

export class WrapTarget extends BaseWrap {
    protected constructor(className?: string) {super(className ?? "WrapTarget");}
    public static new() {return new WrapTarget();}
    public get stiffness() {return this.getProp("Stiffness", DataType.Float32);}
    public set stiffness(value) {this.setProp("Stiffness", DataType.Float32, value);}
}

export class Beam extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Beam");}
    public static new() {return new Beam();}
    public get attachment0() {return this.getProp("Attachment0", DataType.Referent) as Attachment | undefined;}
    public set attachment0(value) {this.setProp("Attachment0", DataType.Referent, value);}
    public get attachment1() {return this.getProp("Attachment1", DataType.Referent) as Attachment | undefined;}
    public set attachment1(value) {this.setProp("Attachment1", DataType.Referent, value);}
    public get brightness() {return this.getProp("Brightness", DataType.Float32);}
    public set brightness(value) {this.setProp("Brightness", DataType.Float32, value);}
    public get color() {return this.getProp("Color", DataType.ColorSequence);}
    public set color(value) {this.setProp("Color", DataType.ColorSequence, value);}
    public get curveSize0() {return this.getProp("CurveSize0", DataType.Float32);}
    public set curveSize0(value) {this.setProp("CurveSize0", DataType.Float32, value);}
    public get curveSize1() {return this.getProp("CurveSize1", DataType.Float32);}
    public set curveSize1(value) {this.setProp("CurveSize1", DataType.Float32, value);}
    public get enabled() {return this.getProp("Enabled", DataType.Bool);}
    public set enabled(value) {this.setProp("Enabled", DataType.Bool, value);}
    public get faceCamera() {return this.getProp("FaceCamera", DataType.Bool);}
    public set faceCamera(value) {this.setProp("FaceCamera", DataType.Bool, value);}
    public get lightEmission() {return this.getProp("LightEmission", DataType.Float32);}
    public set lightEmission(value) {this.setProp("LightEmission", DataType.Float32, value);}
    public get lightInfluence() {return this.getProp("LightInfluence", DataType.Float32);}
    public set lightInfluence(value) {this.setProp("LightInfluence", DataType.Float32, value);}
    public get segments() {return this.getProp("Segments", DataType.Int32);}
    public set segments(value) {this.setProp("Segments", DataType.Int32, value);}
    public get texture() {return this.getProp("Texture", DataType.String);}
    public set texture(value) {this.setProp("Texture", DataType.String, value);}
    public get textureLength() {return this.getProp("TextureLength", DataType.Float32);}
    public set textureLength(value) {this.setProp("TextureLength", DataType.Float32, value);}
    public get textureMode() {return this.getProp("TextureMode", DataType.Enum) as TextureMode | undefined;}
    public set textureMode(value) {this.setProp("TextureMode", DataType.Enum, value);}
    public get textureSpeed() {return this.getProp("TextureSpeed", DataType.Float32);}
    public set textureSpeed(value) {this.setProp("TextureSpeed", DataType.Float32, value);}
    public get transparency() {return this.getProp("Transparency", DataType.NumberSequence);}
    public set transparency(value) {this.setProp("Transparency", DataType.NumberSequence, value);}
    public get width0() {return this.getProp("Width0", DataType.Float32);}
    public set width0(value) {this.setProp("Width0", DataType.Float32, value);}
    public get width1() {return this.getProp("Width1", DataType.Float32);}
    public set width1(value) {this.setProp("Width1", DataType.Float32, value);}
    public get zOffset() {return this.getProp("ZOffset", DataType.Float32);}
    public set zOffset(value) {this.setProp("ZOffset", DataType.Float32, value);}
}

export class BindableEvent extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "BindableEvent");}
    public static new() {return new BindableEvent();}
}

export class BindableFunction extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "BindableFunction");}
    public static new() {return new BindableFunction();}
}

export abstract class BodyMover extends CoreInstance {
    protected constructor(className: string) {super(className);}
}

export class BodyAngularVelocity extends BodyMover {
    protected constructor(className?: string) {super(className ?? "BodyAngularVelocity");}
    public static new() {return new BodyAngularVelocity();}
    public get angularVelocity() {return this.getProp("AngularVelocity", DataType.Vector3);}
    public set angularVelocity(value) {this.setProp("AngularVelocity", DataType.Vector3, value);}
    public get maxTorque() {return this.getProp("MaxTorque", DataType.Vector3);}
    public set maxTorque(value) {this.setProp("MaxTorque", DataType.Vector3, value);}
    public get p() {return this.getProp("P", DataType.Float32);}
    public set p(value) {this.setProp("P", DataType.Float32, value);}
    public get angularvelocity() {return this.getProp("angularvelocity", DataType.Vector3);}
    public set angularvelocity(value) {this.setProp("angularvelocity", DataType.Vector3, value);}
}

export class BodyForce extends BodyMover {
    protected constructor(className?: string) {super(className ?? "BodyForce");}
    public static new() {return new BodyForce();}
    public get force() {return this.getProp("Force", DataType.Vector3);}
    public set force(value) {this.setProp("Force", DataType.Vector3, value);}
}

export class BodyGyro extends BodyMover {
    protected constructor(className?: string) {super(className ?? "BodyGyro");}
    public static new() {return new BodyGyro();}
    public get cFrame() {return this.getProp("CFrame", DataType.CFrame);}
    public set cFrame(value) {this.setProp("CFrame", DataType.CFrame, value);}
    public get d() {return this.getProp("D", DataType.Float32);}
    public set d(value) {this.setProp("D", DataType.Float32, value);}
    public get maxTorque() {return this.getProp("MaxTorque", DataType.Vector3);}
    public set maxTorque(value) {this.setProp("MaxTorque", DataType.Vector3, value);}
    public get p() {return this.getProp("P", DataType.Float32);}
    public set p(value) {this.setProp("P", DataType.Float32, value);}
    public get cframe() {return this.getProp("cframe", DataType.CFrame);}
    public set cframe(value) {this.setProp("cframe", DataType.CFrame, value);}
}

export class BodyPosition extends BodyMover {
    protected constructor(className?: string) {super(className ?? "BodyPosition");}
    public static new() {return new BodyPosition();}
    public get d() {return this.getProp("D", DataType.Float32);}
    public set d(value) {this.setProp("D", DataType.Float32, value);}
    public get maxForce() {return this.getProp("MaxForce", DataType.Vector3);}
    public set maxForce(value) {this.setProp("MaxForce", DataType.Vector3, value);}
    public get p() {return this.getProp("P", DataType.Float32);}
    public set p(value) {this.setProp("P", DataType.Float32, value);}
    public get position() {return this.getProp("Position", DataType.Vector3);}
    public set position(value) {this.setProp("Position", DataType.Vector3, value);}
}

export class BodyThrust extends BodyMover {
    protected constructor(className?: string) {super(className ?? "BodyThrust");}
    public static new() {return new BodyThrust();}
    public get force() {return this.getProp("Force", DataType.Vector3);}
    public set force(value) {this.setProp("Force", DataType.Vector3, value);}
    public get location() {return this.getProp("Location", DataType.Vector3);}
    public set location(value) {this.setProp("Location", DataType.Vector3, value);}
}

export class BodyVelocity extends BodyMover {
    protected constructor(className?: string) {super(className ?? "BodyVelocity");}
    public static new() {return new BodyVelocity();}
    public get maxForce() {return this.getProp("MaxForce", DataType.Vector3);}
    public set maxForce(value) {this.setProp("MaxForce", DataType.Vector3, value);}
    public get p() {return this.getProp("P", DataType.Float32);}
    public set p(value) {this.setProp("P", DataType.Float32, value);}
    public get velocity() {return this.getProp("Velocity", DataType.Vector3);}
    public set velocity(value) {this.setProp("Velocity", DataType.Vector3, value);}
}

export class RocketPropulsion extends BodyMover {
    protected constructor(className?: string) {super(className ?? "RocketPropulsion");}
    public static new() {return new RocketPropulsion();}
    public get cartoonFactor() {return this.getProp("CartoonFactor", DataType.Float32);}
    public set cartoonFactor(value) {this.setProp("CartoonFactor", DataType.Float32, value);}
    public get maxSpeed() {return this.getProp("MaxSpeed", DataType.Float32);}
    public set maxSpeed(value) {this.setProp("MaxSpeed", DataType.Float32, value);}
    public get maxThrust() {return this.getProp("MaxThrust", DataType.Float32);}
    public set maxThrust(value) {this.setProp("MaxThrust", DataType.Float32, value);}
    public get maxTorque() {return this.getProp("MaxTorque", DataType.Vector3);}
    public set maxTorque(value) {this.setProp("MaxTorque", DataType.Vector3, value);}
    public get target() {return this.getProp("Target", DataType.Referent) as BasePart | undefined;}
    public set target(value) {this.setProp("Target", DataType.Referent, value);}
    public get targetOffset() {return this.getProp("TargetOffset", DataType.Vector3);}
    public set targetOffset(value) {this.setProp("TargetOffset", DataType.Vector3, value);}
    public get targetRadius() {return this.getProp("TargetRadius", DataType.Float32);}
    public set targetRadius(value) {this.setProp("TargetRadius", DataType.Float32, value);}
    public get thrustD() {return this.getProp("ThrustD", DataType.Float32);}
    public set thrustD(value) {this.setProp("ThrustD", DataType.Float32, value);}
    public get thrustP() {return this.getProp("ThrustP", DataType.Float32);}
    public set thrustP(value) {this.setProp("ThrustP", DataType.Float32, value);}
    public get turnD() {return this.getProp("TurnD", DataType.Float32);}
    public set turnD(value) {this.setProp("TurnD", DataType.Float32, value);}
    public get turnP() {return this.getProp("TurnP", DataType.Float32);}
    public set turnP(value) {this.setProp("TurnP", DataType.Float32, value);}
}

export class BodyPartDescription extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "BodyPartDescription");}
    public static new() {return new BodyPartDescription();}
    public get assetId() {return this.getProp("AssetId", DataType.Int64);}
    public set assetId(value) {this.setProp("AssetId", DataType.Int64, value);}
    public get bodyPart() {return this.getProp("BodyPart", DataType.Enum) as BodyPart | undefined;}
    public set bodyPart(value) {this.setProp("BodyPart", DataType.Enum, value);}
    public get color() {return this.getProp("Color", DataType.Color3);}
    public set color(value) {this.setProp("Color", DataType.Color3, value);}
    public get instance() {return this.getProp("Instance", DataType.Referent) as CoreInstance | undefined;}
    public set instance(value) {this.setProp("Instance", DataType.Referent, value);}
}

export class Breakpoint extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Breakpoint");}
    public static new() {return new Breakpoint();}
}

export class BrowserService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "BrowserService", true);}
    public static new() {return new BrowserService();}
}

export class BubbleChatMessageProperties extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "BubbleChatMessageProperties");}
    public static new() {return new BubbleChatMessageProperties();}
}

export class BulkImportService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "BulkImportService", true);}
    public static new() {return new BulkImportService();}
}

export abstract class CacheableContentProvider extends CoreInstance {
    protected constructor(className: string) {super(className, true);}
}

export class HSRDataContentProvider extends CacheableContentProvider {
    protected constructor(className?: string) {super(className ?? "HSRDataContentProvider");}
    public static new() {return new HSRDataContentProvider();}
}

export class MeshContentProvider extends CacheableContentProvider {
    protected constructor(className?: string) {super(className ?? "MeshContentProvider");}
    public static new() {return new MeshContentProvider();}
}

export class SolidModelContentProvider extends CacheableContentProvider {
    protected constructor(className?: string) {super(className ?? "SolidModelContentProvider");}
    public static new() {return new SolidModelContentProvider();}
}

export class CalloutService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "CalloutService", true);}
    public static new() {return new CalloutService();}
}

export class Camera extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Camera");}
    public static new() {return new Camera();}
    public get cFrame() {return this.getProp("CFrame", DataType.CFrame);}
    public set cFrame(value) {this.setProp("CFrame", DataType.CFrame, value);}
    public get cameraSubject() {return this.getProp("CameraSubject", DataType.Referent) as CoreInstance | undefined;}
    public set cameraSubject(value) {this.setProp("CameraSubject", DataType.Referent, value);}
    public get cameraType() {return this.getProp("CameraType", DataType.Enum) as CameraType | undefined;}
    public set cameraType(value) {this.setProp("CameraType", DataType.Enum, value);}
    public get coordinateFrame() {return this.getProp("CoordinateFrame", DataType.CFrame);}
    public set coordinateFrame(value) {this.setProp("CoordinateFrame", DataType.CFrame, value);}
    public get fieldOfView() {return this.getProp("FieldOfView", DataType.Float32);}
    public set fieldOfView(value) {this.setProp("FieldOfView", DataType.Float32, value);}
    public get fieldOfViewMode() {return this.getProp("FieldOfViewMode", DataType.Enum) as FieldOfViewMode | undefined;}
    public set fieldOfViewMode(value) {this.setProp("FieldOfViewMode", DataType.Enum, value);}
    public get focus() {return this.getProp("Focus", DataType.CFrame);}
    public set focus(value) {this.setProp("Focus", DataType.CFrame, value);}
    public get headLocked() {return this.getProp("HeadLocked", DataType.Bool);}
    public set headLocked(value) {this.setProp("HeadLocked", DataType.Bool, value);}
    public get headScale() {return this.getProp("HeadScale", DataType.Float32);}
    public set headScale(value) {this.setProp("HeadScale", DataType.Float32, value);}
    public get vRTiltAndRollEnabled() {return this.getProp("VRTiltAndRollEnabled", DataType.Bool);}
    public set vRTiltAndRollEnabled(value) {this.setProp("VRTiltAndRollEnabled", DataType.Bool, value);}
}

export class CaptureService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "CaptureService", true);}
    public static new() {return new CaptureService();}
}

export class ChangeHistoryService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ChangeHistoryService", true);}
    public static new() {return new ChangeHistoryService();}
}

export abstract class CharacterAppearance extends CoreInstance {
    protected constructor(className: string) {super(className);}
}

export class BodyColors extends CharacterAppearance {
    protected constructor(className?: string) {super(className ?? "BodyColors");}
    public static new() {return new BodyColors();}
    public get headColor3() {return this.getProp("HeadColor3", DataType.Color3);}
    public set headColor3(value) {this.setProp("HeadColor3", DataType.Color3, value);}
    public get leftArmColor3() {return this.getProp("LeftArmColor3", DataType.Color3);}
    public set leftArmColor3(value) {this.setProp("LeftArmColor3", DataType.Color3, value);}
    public get leftLegColor3() {return this.getProp("LeftLegColor3", DataType.Color3);}
    public set leftLegColor3(value) {this.setProp("LeftLegColor3", DataType.Color3, value);}
    public get rightArmColor3() {return this.getProp("RightArmColor3", DataType.Color3);}
    public set rightArmColor3(value) {this.setProp("RightArmColor3", DataType.Color3, value);}
    public get rightLegColor3() {return this.getProp("RightLegColor3", DataType.Color3);}
    public set rightLegColor3(value) {this.setProp("RightLegColor3", DataType.Color3, value);}
    public get torsoColor3() {return this.getProp("TorsoColor3", DataType.Color3);}
    public set torsoColor3(value) {this.setProp("TorsoColor3", DataType.Color3, value);}
}

export class CharacterMesh extends CharacterAppearance {
    protected constructor(className?: string) {super(className ?? "CharacterMesh");}
    public static new() {return new CharacterMesh();}
    public get baseTextureId() {return this.getProp("BaseTextureId", DataType.Int64);}
    public set baseTextureId(value) {this.setProp("BaseTextureId", DataType.Int64, value);}
    public get bodyPart() {return this.getProp("BodyPart", DataType.Enum) as BodyPart | undefined;}
    public set bodyPart(value) {this.setProp("BodyPart", DataType.Enum, value);}
    public get meshId() {return this.getProp("MeshId", DataType.Int64);}
    public set meshId(value) {this.setProp("MeshId", DataType.Int64, value);}
    public get overlayTextureId() {return this.getProp("OverlayTextureId", DataType.Int64);}
    public set overlayTextureId(value) {this.setProp("OverlayTextureId", DataType.Int64, value);}
}

export abstract class Clothing extends CharacterAppearance {
    protected constructor(className: string) {super(className);}
    public get color3() {return this.getProp("Color3", DataType.Color3);}
    public set color3(value) {this.setProp("Color3", DataType.Color3, value);}
}

export class Pants extends Clothing {
    protected constructor(className?: string) {super(className ?? "Pants");}
    public static new() {return new Pants();}
    public get pantsTemplate() {return this.getProp("PantsTemplate", DataType.String);}
    public set pantsTemplate(value) {this.setProp("PantsTemplate", DataType.String, value);}
}

export class Shirt extends Clothing {
    protected constructor(className?: string) {super(className ?? "Shirt");}
    public static new() {return new Shirt();}
    public get shirtTemplate() {return this.getProp("ShirtTemplate", DataType.String);}
    public set shirtTemplate(value) {this.setProp("ShirtTemplate", DataType.String, value);}
}

export class ShirtGraphic extends CharacterAppearance {
    protected constructor(className?: string) {super(className ?? "ShirtGraphic");}
    public static new() {return new ShirtGraphic();}
    public get color3() {return this.getProp("Color3", DataType.Color3);}
    public set color3(value) {this.setProp("Color3", DataType.Color3, value);}
    public get graphic() {return this.getProp("Graphic", DataType.String);}
    public set graphic(value) {this.setProp("Graphic", DataType.String, value);}
}

export class Skin extends CharacterAppearance {
    protected constructor(className?: string) {super(className ?? "Skin");}
    public static new() {return new Skin();}
    public get skinColor() {return this.getProp("SkinColor", DataType.BrickColor);}
    public set skinColor(value) {this.setProp("SkinColor", DataType.BrickColor, value);}
}

export class Chat extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Chat", true);}
    public static new() {return new Chat();}
    public get bubbleChatEnabled() {return this.getProp("BubbleChatEnabled", DataType.Bool);}
    public set bubbleChatEnabled(value) {this.setProp("BubbleChatEnabled", DataType.Bool, value);}
    public get loadDefaultChat() {return this.getProp("LoadDefaultChat", DataType.Bool);}
    public set loadDefaultChat(value) {this.setProp("LoadDefaultChat", DataType.Bool, value);}
}

export class ChatbotUIService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ChatbotUIService", true);}
    public static new() {return new ChatbotUIService();}
}

export class ClickDetector extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ClickDetector");}
    public static new() {return new ClickDetector();}
    public get cursorIcon() {return this.getProp("CursorIcon", DataType.String);}
    public set cursorIcon(value) {this.setProp("CursorIcon", DataType.String, value);}
    public get maxActivationDistance() {return this.getProp("MaxActivationDistance", DataType.Float32);}
    public set maxActivationDistance(value) {this.setProp("MaxActivationDistance", DataType.Float32, value);}
}

export class DragDetector extends ClickDetector {
    protected constructor(className?: string) {super(className ?? "DragDetector");}
    public static new() {return new DragDetector();}
    public get activatedCursorIcon() {return this.getProp("ActivatedCursorIcon", DataType.String);}
    public set activatedCursorIcon(value) {this.setProp("ActivatedCursorIcon", DataType.String, value);}
    public get applyAtCenterOfMass() {return this.getProp("ApplyAtCenterOfMass", DataType.Bool);}
    public set applyAtCenterOfMass(value) {this.setProp("ApplyAtCenterOfMass", DataType.Bool, value);}
    public get dragFrame() {return this.getProp("DragFrame", DataType.CFrame);}
    public set dragFrame(value) {this.setProp("DragFrame", DataType.CFrame, value);}
    public get dragStyle() {return this.getProp("DragStyle", DataType.Enum) as DragDetectorDragStyle | undefined;}
    public set dragStyle(value) {this.setProp("DragStyle", DataType.Enum, value);}
    public get enabled() {return this.getProp("Enabled", DataType.Bool);}
    public set enabled(value) {this.setProp("Enabled", DataType.Bool, value);}
    public get gamepadModeSwitchKeyCode() {return this.getProp("GamepadModeSwitchKeyCode", DataType.Enum) as KeyCode | undefined;}
    public set gamepadModeSwitchKeyCode(value) {this.setProp("GamepadModeSwitchKeyCode", DataType.Enum, value);}
    public get keyboardModeSwitchKeyCode() {return this.getProp("KeyboardModeSwitchKeyCode", DataType.Enum) as KeyCode | undefined;}
    public set keyboardModeSwitchKeyCode(value) {this.setProp("KeyboardModeSwitchKeyCode", DataType.Enum, value);}
    public get maxDragAngle() {return this.getProp("MaxDragAngle", DataType.Float32);}
    public set maxDragAngle(value) {this.setProp("MaxDragAngle", DataType.Float32, value);}
    public get maxDragTranslation() {return this.getProp("MaxDragTranslation", DataType.Vector3);}
    public set maxDragTranslation(value) {this.setProp("MaxDragTranslation", DataType.Vector3, value);}
    public get maxForce() {return this.getProp("MaxForce", DataType.Float32);}
    public set maxForce(value) {this.setProp("MaxForce", DataType.Float32, value);}
    public get maxTorque() {return this.getProp("MaxTorque", DataType.Float32);}
    public set maxTorque(value) {this.setProp("MaxTorque", DataType.Float32, value);}
    public get minDragAngle() {return this.getProp("MinDragAngle", DataType.Float32);}
    public set minDragAngle(value) {this.setProp("MinDragAngle", DataType.Float32, value);}
    public get minDragTranslation() {return this.getProp("MinDragTranslation", DataType.Vector3);}
    public set minDragTranslation(value) {this.setProp("MinDragTranslation", DataType.Vector3, value);}
    public get orientation() {return this.getProp("Orientation", DataType.Vector3);}
    public set orientation(value) {this.setProp("Orientation", DataType.Vector3, value);}
    public get permissionPolicy() {return this.getProp("PermissionPolicy", DataType.Enum) as DragDetectorPermissionPolicy | undefined;}
    public set permissionPolicy(value) {this.setProp("PermissionPolicy", DataType.Enum, value);}
    public get referenceInstance() {return this.getProp("ReferenceInstance", DataType.Referent) as CoreInstance | undefined;}
    public set referenceInstance(value) {this.setProp("ReferenceInstance", DataType.Referent, value);}
    public get responseStyle() {return this.getProp("ResponseStyle", DataType.Enum) as DragDetectorResponseStyle | undefined;}
    public set responseStyle(value) {this.setProp("ResponseStyle", DataType.Enum, value);}
    public get responsiveness() {return this.getProp("Responsiveness", DataType.Float32);}
    public set responsiveness(value) {this.setProp("Responsiveness", DataType.Float32, value);}
    public get runLocally() {return this.getProp("RunLocally", DataType.Bool);}
    public set runLocally(value) {this.setProp("RunLocally", DataType.Bool, value);}
    public get trackballRadialPullFactor() {return this.getProp("TrackballRadialPullFactor", DataType.Float32);}
    public set trackballRadialPullFactor(value) {this.setProp("TrackballRadialPullFactor", DataType.Float32, value);}
    public get trackballRollFactor() {return this.getProp("TrackballRollFactor", DataType.Float32);}
    public set trackballRollFactor(value) {this.setProp("TrackballRollFactor", DataType.Float32, value);}
    public get vRSwitchKeyCode() {return this.getProp("VRSwitchKeyCode", DataType.Enum) as KeyCode | undefined;}
    public set vRSwitchKeyCode(value) {this.setProp("VRSwitchKeyCode", DataType.Enum, value);}
}

export class Clouds extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Clouds");}
    public static new() {return new Clouds();}
    public get color() {return this.getProp("Color", DataType.Color3);}
    public set color(value) {this.setProp("Color", DataType.Color3, value);}
    public get cover() {return this.getProp("Cover", DataType.Float32);}
    public set cover(value) {this.setProp("Cover", DataType.Float32, value);}
    public get density() {return this.getProp("Density", DataType.Float32);}
    public set density(value) {this.setProp("Density", DataType.Float32, value);}
    public get enabled() {return this.getProp("Enabled", DataType.Bool);}
    public set enabled(value) {this.setProp("Enabled", DataType.Bool, value);}
}

export class ClusterPacketCache extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ClusterPacketCache", true);}
    public static new() {return new ClusterPacketCache();}
}

export class CollaboratorsService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "CollaboratorsService", true);}
    public static new() {return new CollaboratorsService();}
}

export class CollectionService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "CollectionService", true);}
    public static new() {return new CollectionService();}
}

export class CommandService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "CommandService", true);}
    public static new() {return new CommandService();}
}

export class CommerceService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "CommerceService", true);}
    public static new() {return new CommerceService();}
}

export class Configuration extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Configuration");}
    public static new() {return new Configuration();}
}

export class ConfigureServerService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ConfigureServerService", true);}
    public static new() {return new ConfigureServerService();}
}

export class ConnectivityService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ConnectivityService", true);}
    public static new() {return new ConnectivityService();}
}

export abstract class Constraint extends CoreInstance {
    protected constructor(className: string) {super(className);}
    public get attachment0() {return this.getProp("Attachment0", DataType.Referent) as Attachment | undefined;}
    public set attachment0(value) {this.setProp("Attachment0", DataType.Referent, value);}
    public get attachment1() {return this.getProp("Attachment1", DataType.Referent) as Attachment | undefined;}
    public set attachment1(value) {this.setProp("Attachment1", DataType.Referent, value);}
    public get color() {return this.getProp("Color", DataType.BrickColor);}
    public set color(value) {this.setProp("Color", DataType.BrickColor, value);}
    public get enabled() {return this.getProp("Enabled", DataType.Bool);}
    public set enabled(value) {this.setProp("Enabled", DataType.Bool, value);}
    public get visible() {return this.getProp("Visible", DataType.Bool);}
    public set visible(value) {this.setProp("Visible", DataType.Bool, value);}
}

export class AlignOrientation extends Constraint {
    protected constructor(className?: string) {super(className ?? "AlignOrientation");}
    public static new() {return new AlignOrientation();}
    public get alignType() {return this.getProp("AlignType", DataType.Enum) as AlignType | undefined;}
    public set alignType(value) {this.setProp("AlignType", DataType.Enum, value);}
    public get cFrame() {return this.getProp("CFrame", DataType.CFrame);}
    public set cFrame(value) {this.setProp("CFrame", DataType.CFrame, value);}
    public get maxAngularVelocity() {return this.getProp("MaxAngularVelocity", DataType.Float32);}
    public set maxAngularVelocity(value) {this.setProp("MaxAngularVelocity", DataType.Float32, value);}
    public get maxTorque() {return this.getProp("MaxTorque", DataType.Float32);}
    public set maxTorque(value) {this.setProp("MaxTorque", DataType.Float32, value);}
    public get mode() {return this.getProp("Mode", DataType.Enum) as OrientationAlignmentMode | undefined;}
    public set mode(value) {this.setProp("Mode", DataType.Enum, value);}
    public get primaryAxisOnly() {return this.getProp("PrimaryAxisOnly", DataType.Bool);}
    public set primaryAxisOnly(value) {this.setProp("PrimaryAxisOnly", DataType.Bool, value);}
    public get reactionTorqueEnabled() {return this.getProp("ReactionTorqueEnabled", DataType.Bool);}
    public set reactionTorqueEnabled(value) {this.setProp("ReactionTorqueEnabled", DataType.Bool, value);}
    public get responsiveness() {return this.getProp("Responsiveness", DataType.Float32);}
    public set responsiveness(value) {this.setProp("Responsiveness", DataType.Float32, value);}
    public get rigidityEnabled() {return this.getProp("RigidityEnabled", DataType.Bool);}
    public set rigidityEnabled(value) {this.setProp("RigidityEnabled", DataType.Bool, value);}
}

export class AlignPosition extends Constraint {
    protected constructor(className?: string) {super(className ?? "AlignPosition");}
    public static new() {return new AlignPosition();}
    public get applyAtCenterOfMass() {return this.getProp("ApplyAtCenterOfMass", DataType.Bool);}
    public set applyAtCenterOfMass(value) {this.setProp("ApplyAtCenterOfMass", DataType.Bool, value);}
    public get forceLimitMode() {return this.getProp("ForceLimitMode", DataType.Enum) as ForceLimitMode | undefined;}
    public set forceLimitMode(value) {this.setProp("ForceLimitMode", DataType.Enum, value);}
    public get forceRelativeTo() {return this.getProp("ForceRelativeTo", DataType.Enum) as ActuatorRelativeTo | undefined;}
    public set forceRelativeTo(value) {this.setProp("ForceRelativeTo", DataType.Enum, value);}
    public get maxAxesForce() {return this.getProp("MaxAxesForce", DataType.Vector3);}
    public set maxAxesForce(value) {this.setProp("MaxAxesForce", DataType.Vector3, value);}
    public get maxForce() {return this.getProp("MaxForce", DataType.Float32);}
    public set maxForce(value) {this.setProp("MaxForce", DataType.Float32, value);}
    public get maxVelocity() {return this.getProp("MaxVelocity", DataType.Float32);}
    public set maxVelocity(value) {this.setProp("MaxVelocity", DataType.Float32, value);}
    public get mode() {return this.getProp("Mode", DataType.Enum) as PositionAlignmentMode | undefined;}
    public set mode(value) {this.setProp("Mode", DataType.Enum, value);}
    public get position() {return this.getProp("Position", DataType.Vector3);}
    public set position(value) {this.setProp("Position", DataType.Vector3, value);}
    public get reactionForceEnabled() {return this.getProp("ReactionForceEnabled", DataType.Bool);}
    public set reactionForceEnabled(value) {this.setProp("ReactionForceEnabled", DataType.Bool, value);}
    public get responsiveness() {return this.getProp("Responsiveness", DataType.Float32);}
    public set responsiveness(value) {this.setProp("Responsiveness", DataType.Float32, value);}
    public get rigidityEnabled() {return this.getProp("RigidityEnabled", DataType.Bool);}
    public set rigidityEnabled(value) {this.setProp("RigidityEnabled", DataType.Bool, value);}
}

export class AngularVelocity extends Constraint {
    protected constructor(className?: string) {super(className ?? "AngularVelocity");}
    public static new() {return new AngularVelocity();}
    public get angularVelocity() {return this.getProp("AngularVelocity", DataType.Vector3);}
    public set angularVelocity(value) {this.setProp("AngularVelocity", DataType.Vector3, value);}
    public get maxTorque() {return this.getProp("MaxTorque", DataType.Float32);}
    public set maxTorque(value) {this.setProp("MaxTorque", DataType.Float32, value);}
    public get reactionTorqueEnabled() {return this.getProp("ReactionTorqueEnabled", DataType.Bool);}
    public set reactionTorqueEnabled(value) {this.setProp("ReactionTorqueEnabled", DataType.Bool, value);}
    public get relativeTo() {return this.getProp("RelativeTo", DataType.Enum) as ActuatorRelativeTo | undefined;}
    public set relativeTo(value) {this.setProp("RelativeTo", DataType.Enum, value);}
}

export class AnimationConstraint extends Constraint {
    protected constructor(className?: string) {super(className ?? "AnimationConstraint");}
    public static new() {return new AnimationConstraint();}
    public get isKinematic() {return this.getProp("IsKinematic", DataType.Bool);}
    public set isKinematic(value) {this.setProp("IsKinematic", DataType.Bool, value);}
    public get maxForce() {return this.getProp("MaxForce", DataType.Float32);}
    public set maxForce(value) {this.setProp("MaxForce", DataType.Float32, value);}
    public get maxTorque() {return this.getProp("MaxTorque", DataType.Float32);}
    public set maxTorque(value) {this.setProp("MaxTorque", DataType.Float32, value);}
    public get transform() {return this.getProp("Transform", DataType.CFrame);}
    public set transform(value) {this.setProp("Transform", DataType.CFrame, value);}
}

export class BallSocketConstraint extends Constraint {
    protected constructor(className?: string) {super(className ?? "BallSocketConstraint");}
    public static new() {return new BallSocketConstraint();}
    public get limitsEnabled() {return this.getProp("LimitsEnabled", DataType.Bool);}
    public set limitsEnabled(value) {this.setProp("LimitsEnabled", DataType.Bool, value);}
    public get maxFrictionTorqueXml() {return this.getProp("MaxFrictionTorqueXml", DataType.Float32);}
    public set maxFrictionTorqueXml(value) {this.setProp("MaxFrictionTorqueXml", DataType.Float32, value);}
    public get radius() {return this.getProp("Radius", DataType.Float32);}
    public set radius(value) {this.setProp("Radius", DataType.Float32, value);}
    public get restitution() {return this.getProp("Restitution", DataType.Float32);}
    public set restitution(value) {this.setProp("Restitution", DataType.Float32, value);}
    public get twistLimitsEnabled() {return this.getProp("TwistLimitsEnabled", DataType.Bool);}
    public set twistLimitsEnabled(value) {this.setProp("TwistLimitsEnabled", DataType.Bool, value);}
    public get twistLowerAngle() {return this.getProp("TwistLowerAngle", DataType.Float32);}
    public set twistLowerAngle(value) {this.setProp("TwistLowerAngle", DataType.Float32, value);}
    public get twistUpperAngle() {return this.getProp("TwistUpperAngle", DataType.Float32);}
    public set twistUpperAngle(value) {this.setProp("TwistUpperAngle", DataType.Float32, value);}
    public get upperAngle() {return this.getProp("UpperAngle", DataType.Float32);}
    public set upperAngle(value) {this.setProp("UpperAngle", DataType.Float32, value);}
}

export class HingeConstraint extends Constraint {
    protected constructor(className?: string) {super(className ?? "HingeConstraint");}
    public static new() {return new HingeConstraint();}
    public get actuatorType() {return this.getProp("ActuatorType", DataType.Enum) as ActuatorType | undefined;}
    public set actuatorType(value) {this.setProp("ActuatorType", DataType.Enum, value);}
    public get angularResponsiveness() {return this.getProp("AngularResponsiveness", DataType.Float32);}
    public set angularResponsiveness(value) {this.setProp("AngularResponsiveness", DataType.Float32, value);}
    public get angularSpeed() {return this.getProp("AngularSpeed", DataType.Float32);}
    public set angularSpeed(value) {this.setProp("AngularSpeed", DataType.Float32, value);}
    public get angularVelocity() {return this.getProp("AngularVelocity", DataType.Float32);}
    public set angularVelocity(value) {this.setProp("AngularVelocity", DataType.Float32, value);}
    public get limitsEnabled() {return this.getProp("LimitsEnabled", DataType.Bool);}
    public set limitsEnabled(value) {this.setProp("LimitsEnabled", DataType.Bool, value);}
    public get lowerAngle() {return this.getProp("LowerAngle", DataType.Float32);}
    public set lowerAngle(value) {this.setProp("LowerAngle", DataType.Float32, value);}
    public get motorMaxAcceleration() {return this.getProp("MotorMaxAcceleration", DataType.Float32);}
    public set motorMaxAcceleration(value) {this.setProp("MotorMaxAcceleration", DataType.Float32, value);}
    public get motorMaxTorque() {return this.getProp("MotorMaxTorque", DataType.Float32);}
    public set motorMaxTorque(value) {this.setProp("MotorMaxTorque", DataType.Float32, value);}
    public get radius() {return this.getProp("Radius", DataType.Float32);}
    public set radius(value) {this.setProp("Radius", DataType.Float32, value);}
    public get restitution() {return this.getProp("Restitution", DataType.Float32);}
    public set restitution(value) {this.setProp("Restitution", DataType.Float32, value);}
    public get servoMaxTorque() {return this.getProp("ServoMaxTorque", DataType.Float32);}
    public set servoMaxTorque(value) {this.setProp("ServoMaxTorque", DataType.Float32, value);}
    public get softlockServoUponReachingTarget() {return this.getProp("SoftlockServoUponReachingTarget", DataType.Bool);}
    public set softlockServoUponReachingTarget(value) {this.setProp("SoftlockServoUponReachingTarget", DataType.Bool, value);}
    public get targetAngle() {return this.getProp("TargetAngle", DataType.Float32);}
    public set targetAngle(value) {this.setProp("TargetAngle", DataType.Float32, value);}
    public get upperAngle() {return this.getProp("UpperAngle", DataType.Float32);}
    public set upperAngle(value) {this.setProp("UpperAngle", DataType.Float32, value);}
}

export class LineForce extends Constraint {
    protected constructor(className?: string) {super(className ?? "LineForce");}
    public static new() {return new LineForce();}
    public get applyAtCenterOfMass() {return this.getProp("ApplyAtCenterOfMass", DataType.Bool);}
    public set applyAtCenterOfMass(value) {this.setProp("ApplyAtCenterOfMass", DataType.Bool, value);}
    public get inverseSquareLaw() {return this.getProp("InverseSquareLaw", DataType.Bool);}
    public set inverseSquareLaw(value) {this.setProp("InverseSquareLaw", DataType.Bool, value);}
    public get magnitude() {return this.getProp("Magnitude", DataType.Float32);}
    public set magnitude(value) {this.setProp("Magnitude", DataType.Float32, value);}
    public get maxForce() {return this.getProp("MaxForce", DataType.Float32);}
    public set maxForce(value) {this.setProp("MaxForce", DataType.Float32, value);}
    public get reactionForceEnabled() {return this.getProp("ReactionForceEnabled", DataType.Bool);}
    public set reactionForceEnabled(value) {this.setProp("ReactionForceEnabled", DataType.Bool, value);}
}

export class LinearVelocity extends Constraint {
    protected constructor(className?: string) {super(className ?? "LinearVelocity");}
    public static new() {return new LinearVelocity();}
    public get forceLimitMode() {return this.getProp("ForceLimitMode", DataType.Enum) as ForceLimitMode | undefined;}
    public set forceLimitMode(value) {this.setProp("ForceLimitMode", DataType.Enum, value);}
    public get forceLimitsEnabled() {return this.getProp("ForceLimitsEnabled", DataType.Bool);}
    public set forceLimitsEnabled(value) {this.setProp("ForceLimitsEnabled", DataType.Bool, value);}
    public get lineDirection() {return this.getProp("LineDirection", DataType.Vector3);}
    public set lineDirection(value) {this.setProp("LineDirection", DataType.Vector3, value);}
    public get lineVelocity() {return this.getProp("LineVelocity", DataType.Float32);}
    public set lineVelocity(value) {this.setProp("LineVelocity", DataType.Float32, value);}
    public get maxAxesForce() {return this.getProp("MaxAxesForce", DataType.Vector3);}
    public set maxAxesForce(value) {this.setProp("MaxAxesForce", DataType.Vector3, value);}
    public get maxForce() {return this.getProp("MaxForce", DataType.Float32);}
    public set maxForce(value) {this.setProp("MaxForce", DataType.Float32, value);}
    public get maxPlanarAxesForce() {return this.getProp("MaxPlanarAxesForce", DataType.Vector2);}
    public set maxPlanarAxesForce(value) {this.setProp("MaxPlanarAxesForce", DataType.Vector2, value);}
    public get planeVelocity() {return this.getProp("PlaneVelocity", DataType.Vector2);}
    public set planeVelocity(value) {this.setProp("PlaneVelocity", DataType.Vector2, value);}
    public get primaryTangentAxis() {return this.getProp("PrimaryTangentAxis", DataType.Vector3);}
    public set primaryTangentAxis(value) {this.setProp("PrimaryTangentAxis", DataType.Vector3, value);}
    public get relativeTo() {return this.getProp("RelativeTo", DataType.Enum) as ActuatorRelativeTo | undefined;}
    public set relativeTo(value) {this.setProp("RelativeTo", DataType.Enum, value);}
    public get secondaryTangentAxis() {return this.getProp("SecondaryTangentAxis", DataType.Vector3);}
    public set secondaryTangentAxis(value) {this.setProp("SecondaryTangentAxis", DataType.Vector3, value);}
    public get vectorVelocity() {return this.getProp("VectorVelocity", DataType.Vector3);}
    public set vectorVelocity(value) {this.setProp("VectorVelocity", DataType.Vector3, value);}
    public get velocityConstraintMode() {return this.getProp("VelocityConstraintMode", DataType.Enum) as VelocityConstraintMode | undefined;}
    public set velocityConstraintMode(value) {this.setProp("VelocityConstraintMode", DataType.Enum, value);}
}

export class PlaneConstraint extends Constraint {
    protected constructor(className?: string) {super(className ?? "PlaneConstraint");}
    public static new() {return new PlaneConstraint();}
}

export class Plane extends PlaneConstraint {
    protected constructor(className?: string) {super(className ?? "Plane");}
    public static new() {return new Plane();}
}

export class RigidConstraint extends Constraint {
    protected constructor(className?: string) {super(className ?? "RigidConstraint");}
    public static new() {return new RigidConstraint();}
}

export class RodConstraint extends Constraint {
    protected constructor(className?: string) {super(className ?? "RodConstraint");}
    public static new() {return new RodConstraint();}
    public get length() {return this.getProp("Length", DataType.Float32);}
    public set length(value) {this.setProp("Length", DataType.Float32, value);}
    public get limitAngle0() {return this.getProp("LimitAngle0", DataType.Float32);}
    public set limitAngle0(value) {this.setProp("LimitAngle0", DataType.Float32, value);}
    public get limitAngle1() {return this.getProp("LimitAngle1", DataType.Float32);}
    public set limitAngle1(value) {this.setProp("LimitAngle1", DataType.Float32, value);}
    public get limitsEnabled() {return this.getProp("LimitsEnabled", DataType.Bool);}
    public set limitsEnabled(value) {this.setProp("LimitsEnabled", DataType.Bool, value);}
    public get thickness() {return this.getProp("Thickness", DataType.Float32);}
    public set thickness(value) {this.setProp("Thickness", DataType.Float32, value);}
}

export class RopeConstraint extends Constraint {
    protected constructor(className?: string) {super(className ?? "RopeConstraint");}
    public static new() {return new RopeConstraint();}
    public get length() {return this.getProp("Length", DataType.Float32);}
    public set length(value) {this.setProp("Length", DataType.Float32, value);}
    public get restitution() {return this.getProp("Restitution", DataType.Float32);}
    public set restitution(value) {this.setProp("Restitution", DataType.Float32, value);}
    public get thickness() {return this.getProp("Thickness", DataType.Float32);}
    public set thickness(value) {this.setProp("Thickness", DataType.Float32, value);}
    public get winchEnabled() {return this.getProp("WinchEnabled", DataType.Bool);}
    public set winchEnabled(value) {this.setProp("WinchEnabled", DataType.Bool, value);}
    public get winchForce() {return this.getProp("WinchForce", DataType.Float32);}
    public set winchForce(value) {this.setProp("WinchForce", DataType.Float32, value);}
    public get winchResponsiveness() {return this.getProp("WinchResponsiveness", DataType.Float32);}
    public set winchResponsiveness(value) {this.setProp("WinchResponsiveness", DataType.Float32, value);}
    public get winchSpeed() {return this.getProp("WinchSpeed", DataType.Float32);}
    public set winchSpeed(value) {this.setProp("WinchSpeed", DataType.Float32, value);}
    public get winchTarget() {return this.getProp("WinchTarget", DataType.Float32);}
    public set winchTarget(value) {this.setProp("WinchTarget", DataType.Float32, value);}
}

export abstract class SlidingBallConstraint extends Constraint {
    protected constructor(className: string) {super(className);}
    public get actuatorType() {return this.getProp("ActuatorType", DataType.Enum) as ActuatorType | undefined;}
    public set actuatorType(value) {this.setProp("ActuatorType", DataType.Enum, value);}
    public get limitsEnabled() {return this.getProp("LimitsEnabled", DataType.Bool);}
    public set limitsEnabled(value) {this.setProp("LimitsEnabled", DataType.Bool, value);}
    public get linearResponsiveness() {return this.getProp("LinearResponsiveness", DataType.Float32);}
    public set linearResponsiveness(value) {this.setProp("LinearResponsiveness", DataType.Float32, value);}
    public get lowerLimit() {return this.getProp("LowerLimit", DataType.Float32);}
    public set lowerLimit(value) {this.setProp("LowerLimit", DataType.Float32, value);}
    public get motorMaxAcceleration() {return this.getProp("MotorMaxAcceleration", DataType.Float32);}
    public set motorMaxAcceleration(value) {this.setProp("MotorMaxAcceleration", DataType.Float32, value);}
    public get motorMaxForce() {return this.getProp("MotorMaxForce", DataType.Float32);}
    public set motorMaxForce(value) {this.setProp("MotorMaxForce", DataType.Float32, value);}
    public get restitution() {return this.getProp("Restitution", DataType.Float32);}
    public set restitution(value) {this.setProp("Restitution", DataType.Float32, value);}
    public get servoMaxForce() {return this.getProp("ServoMaxForce", DataType.Float32);}
    public set servoMaxForce(value) {this.setProp("ServoMaxForce", DataType.Float32, value);}
    public get size() {return this.getProp("Size", DataType.Float32);}
    public set size(value) {this.setProp("Size", DataType.Float32, value);}
    public get softlockServoUponReachingTarget() {return this.getProp("SoftlockServoUponReachingTarget", DataType.Bool);}
    public set softlockServoUponReachingTarget(value) {this.setProp("SoftlockServoUponReachingTarget", DataType.Bool, value);}
    public get speed() {return this.getProp("Speed", DataType.Float32);}
    public set speed(value) {this.setProp("Speed", DataType.Float32, value);}
    public get targetPosition() {return this.getProp("TargetPosition", DataType.Float32);}
    public set targetPosition(value) {this.setProp("TargetPosition", DataType.Float32, value);}
    public get upperLimit() {return this.getProp("UpperLimit", DataType.Float32);}
    public set upperLimit(value) {this.setProp("UpperLimit", DataType.Float32, value);}
    public get velocity() {return this.getProp("Velocity", DataType.Float32);}
    public set velocity(value) {this.setProp("Velocity", DataType.Float32, value);}
}

export class CylindricalConstraint extends SlidingBallConstraint {
    protected constructor(className?: string) {super(className ?? "CylindricalConstraint");}
    public static new() {return new CylindricalConstraint();}
    public get angularActuatorType() {return this.getProp("AngularActuatorType", DataType.Enum) as ActuatorType | undefined;}
    public set angularActuatorType(value) {this.setProp("AngularActuatorType", DataType.Enum, value);}
    public get angularLimitsEnabled() {return this.getProp("AngularLimitsEnabled", DataType.Bool);}
    public set angularLimitsEnabled(value) {this.setProp("AngularLimitsEnabled", DataType.Bool, value);}
    public get angularResponsiveness() {return this.getProp("AngularResponsiveness", DataType.Float32);}
    public set angularResponsiveness(value) {this.setProp("AngularResponsiveness", DataType.Float32, value);}
    public get angularRestitution() {return this.getProp("AngularRestitution", DataType.Float32);}
    public set angularRestitution(value) {this.setProp("AngularRestitution", DataType.Float32, value);}
    public get angularSpeed() {return this.getProp("AngularSpeed", DataType.Float32);}
    public set angularSpeed(value) {this.setProp("AngularSpeed", DataType.Float32, value);}
    public get angularVelocity() {return this.getProp("AngularVelocity", DataType.Float32);}
    public set angularVelocity(value) {this.setProp("AngularVelocity", DataType.Float32, value);}
    public get inclinationAngle() {return this.getProp("InclinationAngle", DataType.Float32);}
    public set inclinationAngle(value) {this.setProp("InclinationAngle", DataType.Float32, value);}
    public get lowerAngle() {return this.getProp("LowerAngle", DataType.Float32);}
    public set lowerAngle(value) {this.setProp("LowerAngle", DataType.Float32, value);}
    public get motorMaxAngularAcceleration() {return this.getProp("MotorMaxAngularAcceleration", DataType.Float32);}
    public set motorMaxAngularAcceleration(value) {this.setProp("MotorMaxAngularAcceleration", DataType.Float32, value);}
    public get motorMaxTorque() {return this.getProp("MotorMaxTorque", DataType.Float32);}
    public set motorMaxTorque(value) {this.setProp("MotorMaxTorque", DataType.Float32, value);}
    public get rotationAxisVisible() {return this.getProp("RotationAxisVisible", DataType.Bool);}
    public set rotationAxisVisible(value) {this.setProp("RotationAxisVisible", DataType.Bool, value);}
    public get servoMaxTorque() {return this.getProp("ServoMaxTorque", DataType.Float32);}
    public set servoMaxTorque(value) {this.setProp("ServoMaxTorque", DataType.Float32, value);}
    public get softlockAngularServoUponReachingTarget() {return this.getProp("SoftlockAngularServoUponReachingTarget", DataType.Bool);}
    public set softlockAngularServoUponReachingTarget(value) {this.setProp("SoftlockAngularServoUponReachingTarget", DataType.Bool, value);}
    public get targetAngle() {return this.getProp("TargetAngle", DataType.Float32);}
    public set targetAngle(value) {this.setProp("TargetAngle", DataType.Float32, value);}
    public get upperAngle() {return this.getProp("UpperAngle", DataType.Float32);}
    public set upperAngle(value) {this.setProp("UpperAngle", DataType.Float32, value);}
}

export class PrismaticConstraint extends SlidingBallConstraint {
    protected constructor(className?: string) {super(className ?? "PrismaticConstraint");}
    public static new() {return new PrismaticConstraint();}
}

export class SpringConstraint extends Constraint {
    protected constructor(className?: string) {super(className ?? "SpringConstraint");}
    public static new() {return new SpringConstraint();}
    public get coils() {return this.getProp("Coils", DataType.Float32);}
    public set coils(value) {this.setProp("Coils", DataType.Float32, value);}
    public get damping() {return this.getProp("Damping", DataType.Float32);}
    public set damping(value) {this.setProp("Damping", DataType.Float32, value);}
    public get freeLength() {return this.getProp("FreeLength", DataType.Float32);}
    public set freeLength(value) {this.setProp("FreeLength", DataType.Float32, value);}
    public get limitsEnabled() {return this.getProp("LimitsEnabled", DataType.Bool);}
    public set limitsEnabled(value) {this.setProp("LimitsEnabled", DataType.Bool, value);}
    public get maxForce() {return this.getProp("MaxForce", DataType.Float32);}
    public set maxForce(value) {this.setProp("MaxForce", DataType.Float32, value);}
    public get maxLength() {return this.getProp("MaxLength", DataType.Float32);}
    public set maxLength(value) {this.setProp("MaxLength", DataType.Float32, value);}
    public get minLength() {return this.getProp("MinLength", DataType.Float32);}
    public set minLength(value) {this.setProp("MinLength", DataType.Float32, value);}
    public get radius() {return this.getProp("Radius", DataType.Float32);}
    public set radius(value) {this.setProp("Radius", DataType.Float32, value);}
    public get stiffness() {return this.getProp("Stiffness", DataType.Float32);}
    public set stiffness(value) {this.setProp("Stiffness", DataType.Float32, value);}
    public get thickness() {return this.getProp("Thickness", DataType.Float32);}
    public set thickness(value) {this.setProp("Thickness", DataType.Float32, value);}
}

export class Torque extends Constraint {
    protected constructor(className?: string) {super(className ?? "Torque");}
    public static new() {return new Torque();}
    public get relativeTo() {return this.getProp("RelativeTo", DataType.Enum) as ActuatorRelativeTo | undefined;}
    public set relativeTo(value) {this.setProp("RelativeTo", DataType.Enum, value);}
    public get torque() {return this.getProp("Torque", DataType.Vector3);}
    public set torque(value) {this.setProp("Torque", DataType.Vector3, value);}
}

export class TorsionSpringConstraint extends Constraint {
    protected constructor(className?: string) {super(className ?? "TorsionSpringConstraint");}
    public static new() {return new TorsionSpringConstraint();}
    public get coils() {return this.getProp("Coils", DataType.Float32);}
    public set coils(value) {this.setProp("Coils", DataType.Float32, value);}
    public get damping() {return this.getProp("Damping", DataType.Float32);}
    public set damping(value) {this.setProp("Damping", DataType.Float32, value);}
    public get limitEnabled() {return this.getProp("LimitEnabled", DataType.Bool);}
    public set limitEnabled(value) {this.setProp("LimitEnabled", DataType.Bool, value);}
    public get limitsEnabled() {return this.getProp("LimitsEnabled", DataType.Bool);}
    public set limitsEnabled(value) {this.setProp("LimitsEnabled", DataType.Bool, value);}
    public get maxAngle() {return this.getProp("MaxAngle", DataType.Float32);}
    public set maxAngle(value) {this.setProp("MaxAngle", DataType.Float32, value);}
    public get maxTorque() {return this.getProp("MaxTorque", DataType.Float32);}
    public set maxTorque(value) {this.setProp("MaxTorque", DataType.Float32, value);}
    public get radius() {return this.getProp("Radius", DataType.Float32);}
    public set radius(value) {this.setProp("Radius", DataType.Float32, value);}
    public get restitution() {return this.getProp("Restitution", DataType.Float32);}
    public set restitution(value) {this.setProp("Restitution", DataType.Float32, value);}
    public get stiffness() {return this.getProp("Stiffness", DataType.Float32);}
    public set stiffness(value) {this.setProp("Stiffness", DataType.Float32, value);}
}

export class UniversalConstraint extends Constraint {
    protected constructor(className?: string) {super(className ?? "UniversalConstraint");}
    public static new() {return new UniversalConstraint();}
    public get limitsEnabled() {return this.getProp("LimitsEnabled", DataType.Bool);}
    public set limitsEnabled(value) {this.setProp("LimitsEnabled", DataType.Bool, value);}
    public get maxAngle() {return this.getProp("MaxAngle", DataType.Float32);}
    public set maxAngle(value) {this.setProp("MaxAngle", DataType.Float32, value);}
    public get radius() {return this.getProp("Radius", DataType.Float32);}
    public set radius(value) {this.setProp("Radius", DataType.Float32, value);}
    public get restitution() {return this.getProp("Restitution", DataType.Float32);}
    public set restitution(value) {this.setProp("Restitution", DataType.Float32, value);}
}

export class VectorForce extends Constraint {
    protected constructor(className?: string) {super(className ?? "VectorForce");}
    public static new() {return new VectorForce();}
    public get applyAtCenterOfMass() {return this.getProp("ApplyAtCenterOfMass", DataType.Bool);}
    public set applyAtCenterOfMass(value) {this.setProp("ApplyAtCenterOfMass", DataType.Bool, value);}
    public get force() {return this.getProp("Force", DataType.Vector3);}
    public set force(value) {this.setProp("Force", DataType.Vector3, value);}
    public get relativeTo() {return this.getProp("RelativeTo", DataType.Enum) as ActuatorRelativeTo | undefined;}
    public set relativeTo(value) {this.setProp("RelativeTo", DataType.Enum, value);}
}

export class ContentProvider extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ContentProvider", true);}
    public static new() {return new ContentProvider();}
}

export class ContextActionService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ContextActionService", true);}
    public static new() {return new ContextActionService();}
}

export abstract class Controller extends CoreInstance {
    protected constructor(className: string) {super(className);}
}

export class HumanoidController extends Controller {
    protected constructor(className?: string) {super(className ?? "HumanoidController");}
    public static new() {return new HumanoidController();}
}

export class SkateboardController extends Controller {
    protected constructor(className?: string) {super(className ?? "SkateboardController");}
    public static new() {return new SkateboardController();}
}

export class VehicleController extends Controller {
    protected constructor(className?: string) {super(className ?? "VehicleController");}
    public static new() {return new VehicleController();}
}

export abstract class ControllerBase extends CoreInstance {
    protected constructor(className: string) {super(className);}
    public get balanceRigidityEnabled() {return this.getProp("BalanceRigidityEnabled", DataType.Bool);}
    public set balanceRigidityEnabled(value) {this.setProp("BalanceRigidityEnabled", DataType.Bool, value);}
    public get moveSpeedFactor() {return this.getProp("MoveSpeedFactor", DataType.Float32);}
    public set moveSpeedFactor(value) {this.setProp("MoveSpeedFactor", DataType.Float32, value);}
}

export class AirController extends ControllerBase {
    protected constructor(className?: string) {super(className ?? "AirController");}
    public static new() {return new AirController();}
    public get balanceMaxTorque() {return this.getProp("BalanceMaxTorque", DataType.Float32);}
    public set balanceMaxTorque(value) {this.setProp("BalanceMaxTorque", DataType.Float32, value);}
    public get balanceSpeed() {return this.getProp("BalanceSpeed", DataType.Float32);}
    public set balanceSpeed(value) {this.setProp("BalanceSpeed", DataType.Float32, value);}
    public get maintainAngularMomentum() {return this.getProp("MaintainAngularMomentum", DataType.Bool);}
    public set maintainAngularMomentum(value) {this.setProp("MaintainAngularMomentum", DataType.Bool, value);}
    public get maintainLinearMomentum() {return this.getProp("MaintainLinearMomentum", DataType.Bool);}
    public set maintainLinearMomentum(value) {this.setProp("MaintainLinearMomentum", DataType.Bool, value);}
    public get moveMaxForce() {return this.getProp("MoveMaxForce", DataType.Float32);}
    public set moveMaxForce(value) {this.setProp("MoveMaxForce", DataType.Float32, value);}
    public get turnMaxTorque() {return this.getProp("TurnMaxTorque", DataType.Float32);}
    public set turnMaxTorque(value) {this.setProp("TurnMaxTorque", DataType.Float32, value);}
    public get turnSpeedFactor() {return this.getProp("TurnSpeedFactor", DataType.Float32);}
    public set turnSpeedFactor(value) {this.setProp("TurnSpeedFactor", DataType.Float32, value);}
}

export class ClimbController extends ControllerBase {
    protected constructor(className?: string) {super(className ?? "ClimbController");}
    public static new() {return new ClimbController();}
    public get accelerationTime() {return this.getProp("AccelerationTime", DataType.Float32);}
    public set accelerationTime(value) {this.setProp("AccelerationTime", DataType.Float32, value);}
    public get balanceMaxTorque() {return this.getProp("BalanceMaxTorque", DataType.Float32);}
    public set balanceMaxTorque(value) {this.setProp("BalanceMaxTorque", DataType.Float32, value);}
    public get balanceSpeed() {return this.getProp("BalanceSpeed", DataType.Float32);}
    public set balanceSpeed(value) {this.setProp("BalanceSpeed", DataType.Float32, value);}
    public get moveMaxForce() {return this.getProp("MoveMaxForce", DataType.Float32);}
    public set moveMaxForce(value) {this.setProp("MoveMaxForce", DataType.Float32, value);}
}

export class GroundController extends ControllerBase {
    protected constructor(className?: string) {super(className ?? "GroundController");}
    public static new() {return new GroundController();}
    public get accelerationLean() {return this.getProp("AccelerationLean", DataType.Float32);}
    public set accelerationLean(value) {this.setProp("AccelerationLean", DataType.Float32, value);}
    public get accelerationTime() {return this.getProp("AccelerationTime", DataType.Float32);}
    public set accelerationTime(value) {this.setProp("AccelerationTime", DataType.Float32, value);}
    public get balanceMaxTorque() {return this.getProp("BalanceMaxTorque", DataType.Float32);}
    public set balanceMaxTorque(value) {this.setProp("BalanceMaxTorque", DataType.Float32, value);}
    public get balanceSpeed() {return this.getProp("BalanceSpeed", DataType.Float32);}
    public set balanceSpeed(value) {this.setProp("BalanceSpeed", DataType.Float32, value);}
    public get decelerationTime() {return this.getProp("DecelerationTime", DataType.Float32);}
    public set decelerationTime(value) {this.setProp("DecelerationTime", DataType.Float32, value);}
    public get friction() {return this.getProp("Friction", DataType.Float32);}
    public set friction(value) {this.setProp("Friction", DataType.Float32, value);}
    public get frictionWeight() {return this.getProp("FrictionWeight", DataType.Float32);}
    public set frictionWeight(value) {this.setProp("FrictionWeight", DataType.Float32, value);}
    public get groundOffset() {return this.getProp("GroundOffset", DataType.Float32);}
    public set groundOffset(value) {this.setProp("GroundOffset", DataType.Float32, value);}
    public get standForce() {return this.getProp("StandForce", DataType.Float32);}
    public set standForce(value) {this.setProp("StandForce", DataType.Float32, value);}
    public get standSpeed() {return this.getProp("StandSpeed", DataType.Float32);}
    public set standSpeed(value) {this.setProp("StandSpeed", DataType.Float32, value);}
    public get turnSpeedFactor() {return this.getProp("TurnSpeedFactor", DataType.Float32);}
    public set turnSpeedFactor(value) {this.setProp("TurnSpeedFactor", DataType.Float32, value);}
}

export class SwimController extends ControllerBase {
    protected constructor(className?: string) {super(className ?? "SwimController");}
    public static new() {return new SwimController();}
    public get accelerationTime() {return this.getProp("AccelerationTime", DataType.Float32);}
    public set accelerationTime(value) {this.setProp("AccelerationTime", DataType.Float32, value);}
    public get pitchMaxTorque() {return this.getProp("PitchMaxTorque", DataType.Float32);}
    public set pitchMaxTorque(value) {this.setProp("PitchMaxTorque", DataType.Float32, value);}
    public get pitchSpeedFactor() {return this.getProp("PitchSpeedFactor", DataType.Float32);}
    public set pitchSpeedFactor(value) {this.setProp("PitchSpeedFactor", DataType.Float32, value);}
    public get rollMaxTorque() {return this.getProp("RollMaxTorque", DataType.Float32);}
    public set rollMaxTorque(value) {this.setProp("RollMaxTorque", DataType.Float32, value);}
    public get rollSpeedFactor() {return this.getProp("RollSpeedFactor", DataType.Float32);}
    public set rollSpeedFactor(value) {this.setProp("RollSpeedFactor", DataType.Float32, value);}
}

export class ControllerManager extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ControllerManager");}
    public static new() {return new ControllerManager();}
    public get activeController() {return this.getProp("ActiveController", DataType.Referent) as ControllerBase | undefined;}
    public set activeController(value) {this.setProp("ActiveController", DataType.Referent, value);}
    public get baseMoveSpeed() {return this.getProp("BaseMoveSpeed", DataType.Float32);}
    public set baseMoveSpeed(value) {this.setProp("BaseMoveSpeed", DataType.Float32, value);}
    public get baseTurnSpeed() {return this.getProp("BaseTurnSpeed", DataType.Float32);}
    public set baseTurnSpeed(value) {this.setProp("BaseTurnSpeed", DataType.Float32, value);}
    public get climbSensor() {return this.getProp("ClimbSensor", DataType.Referent) as ControllerSensor | undefined;}
    public set climbSensor(value) {this.setProp("ClimbSensor", DataType.Referent, value);}
    public get facingDirection() {return this.getProp("FacingDirection", DataType.Vector3);}
    public set facingDirection(value) {this.setProp("FacingDirection", DataType.Vector3, value);}
    public get groundSensor() {return this.getProp("GroundSensor", DataType.Referent) as ControllerSensor | undefined;}
    public set groundSensor(value) {this.setProp("GroundSensor", DataType.Referent, value);}
    public get movingDirection() {return this.getProp("MovingDirection", DataType.Vector3);}
    public set movingDirection(value) {this.setProp("MovingDirection", DataType.Vector3, value);}
    public get rootPart() {return this.getProp("RootPart", DataType.Referent) as BasePart | undefined;}
    public set rootPart(value) {this.setProp("RootPart", DataType.Referent, value);}
    public get upDirection() {return this.getProp("UpDirection", DataType.Vector3);}
    public set upDirection(value) {this.setProp("UpDirection", DataType.Vector3, value);}
}

export class ControllerService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ControllerService", true);}
    public static new() {return new ControllerService();}
}

export class ConversationalAIAcceptanceService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ConversationalAIAcceptanceService", true);}
    public static new() {return new ConversationalAIAcceptanceService();}
}

export class CookiesService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "CookiesService", true);}
    public static new() {return new CookiesService();}
}

export class CorePackages extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "CorePackages", true);}
    public static new() {return new CorePackages();}
}

export class CoreScriptDebuggingManagerHelper extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "CoreScriptDebuggingManagerHelper", true);}
    public static new() {return new CoreScriptDebuggingManagerHelper();}
}

export class CoreScriptSyncService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "CoreScriptSyncService", true);}
    public static new() {return new CoreScriptSyncService();}
}

export class CreationDBService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "CreationDBService", true);}
    public static new() {return new CreationDBService();}
}

export class CrossDMScriptChangeListener extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "CrossDMScriptChangeListener", true);}
    public static new() {return new CrossDMScriptChangeListener();}
}

export class CustomEvent extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "CustomEvent");}
    public static new() {return new CustomEvent();}
    public get persistedCurrentValue() {return this.getProp("PersistedCurrentValue", DataType.Float32);}
    public set persistedCurrentValue(value) {this.setProp("PersistedCurrentValue", DataType.Float32, value);}
}

export class CustomEventReceiver extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "CustomEventReceiver");}
    public static new() {return new CustomEventReceiver();}
    public get source() {return this.getProp("Source", DataType.Referent) as CoreInstance | undefined;}
    public set source(value) {this.setProp("Source", DataType.Referent, value);}
}

export abstract class DataModelMesh extends CoreInstance {
    protected constructor(className: string) {super(className);}
    public get offset() {return this.getProp("Offset", DataType.Vector3);}
    public set offset(value) {this.setProp("Offset", DataType.Vector3, value);}
    public get scale() {return this.getProp("Scale", DataType.Vector3);}
    public set scale(value) {this.setProp("Scale", DataType.Vector3, value);}
    public get vertexColor() {return this.getProp("VertexColor", DataType.Vector3);}
    public set vertexColor(value) {this.setProp("VertexColor", DataType.Vector3, value);}
}

export abstract class BevelMesh extends DataModelMesh {
    protected constructor(className: string) {super(className);}
    public get bevel() {return this.getProp("Bevel", DataType.Float32);}
    public set bevel(value) {this.setProp("Bevel", DataType.Float32, value);}
    public get bevel_Roundness() {return this.getProp("Bevel Roundness", DataType.Float32);}
    public set bevel_Roundness(value) {this.setProp("Bevel Roundness", DataType.Float32, value);}
    public get bulge() {return this.getProp("Bulge", DataType.Float32);}
    public set bulge(value) {this.setProp("Bulge", DataType.Float32, value);}
}

export class BlockMesh extends BevelMesh {
    protected constructor(className?: string) {super(className ?? "BlockMesh");}
    public static new() {return new BlockMesh();}
}

export class CylinderMesh extends BevelMesh {
    protected constructor(className?: string) {super(className ?? "CylinderMesh");}
    public static new() {return new CylinderMesh();}
}

export class EditableMesh extends DataModelMesh {
    protected constructor(className?: string) {super(className ?? "EditableMesh");}
    public static new() {return new EditableMesh();}
}

export class RobloxEditableMesh extends EditableMesh {
    protected constructor(className?: string) {super(className ?? "RobloxEditableMesh");}
    public static new() {return new RobloxEditableMesh();}
    public get meshDataSerialize() {return this.getProp("MeshDataSerialize", DataType.String);}
    public set meshDataSerialize(value) {this.setProp("MeshDataSerialize", DataType.String, value);}
}

export class FileMesh extends DataModelMesh {
    protected constructor(className?: string) {super(className ?? "FileMesh");}
    public static new() {return new FileMesh();}
    public get meshId() {return this.getProp("MeshId", DataType.String);}
    public set meshId(value) {this.setProp("MeshId", DataType.String, value);}
    public get textureId() {return this.getProp("TextureId", DataType.String);}
    public set textureId(value) {this.setProp("TextureId", DataType.String, value);}
}

export class SpecialMesh extends FileMesh {
    protected constructor(className?: string) {super(className ?? "SpecialMesh");}
    public static new() {return new SpecialMesh();}
    public get meshType() {return this.getProp("MeshType", DataType.Enum) as MeshType | undefined;}
    public set meshType(value) {this.setProp("MeshType", DataType.Enum, value);}
}

export class DataModelPatchService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "DataModelPatchService", true);}
    public static new() {return new DataModelPatchService();}
}

export class DataStoreGetOptions extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "DataStoreGetOptions");}
    public static new() {return new DataStoreGetOptions();}
    public get useCache() {return this.getProp("UseCache", DataType.Bool);}
    public set useCache(value) {this.setProp("UseCache", DataType.Bool, value);}
}

export class DataStoreIncrementOptions extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "DataStoreIncrementOptions");}
    public static new() {return new DataStoreIncrementOptions();}
}

export class DataStoreOptions extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "DataStoreOptions");}
    public static new() {return new DataStoreOptions();}
    public get allScopes() {return this.getProp("AllScopes", DataType.Bool);}
    public set allScopes(value) {this.setProp("AllScopes", DataType.Bool, value);}
}

export class DataStoreService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "DataStoreService", true);}
    public static new() {return new DataStoreService();}
    public get automaticRetry() {return this.getProp("AutomaticRetry", DataType.Bool);}
    public set automaticRetry(value) {this.setProp("AutomaticRetry", DataType.Bool, value);}
    public get legacyNamingScheme() {return this.getProp("LegacyNamingScheme", DataType.Bool);}
    public set legacyNamingScheme(value) {this.setProp("LegacyNamingScheme", DataType.Bool, value);}
}

export class DataStoreSetOptions extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "DataStoreSetOptions");}
    public static new() {return new DataStoreSetOptions();}
}

export class Debris extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Debris", true);}
    public static new() {return new Debris();}
    public get maxItems() {return this.getProp("MaxItems", DataType.Int32);}
    public set maxItems(value) {this.setProp("MaxItems", DataType.Int32, value);}
}

export class DebuggablePluginWatcher extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "DebuggablePluginWatcher", true);}
    public static new() {return new DebuggablePluginWatcher();}
}

export abstract class DebuggerConnection extends CoreInstance {
    protected constructor(className: string) {super(className);}
}

export class DebuggerConnectionManager extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "DebuggerConnectionManager", true);}
    public static new() {return new DebuggerConnectionManager();}
    public get timeout() {return this.getProp("Timeout", DataType.Float64);}
    public set timeout(value) {this.setProp("Timeout", DataType.Float64, value);}
}

export class DebuggerManager extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "DebuggerManager", true);}
    public static new() {return new DebuggerManager();}
}

export class DebuggerUIService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "DebuggerUIService", true);}
    public static new() {return new DebuggerUIService();}
}

export class DebuggerWatch extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "DebuggerWatch");}
    public static new() {return new DebuggerWatch();}
    public get expression() {return this.getProp("Expression", DataType.String);}
    public set expression(value) {this.setProp("Expression", DataType.String, value);}
}

export class DeviceIdService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "DeviceIdService", true);}
    public static new() {return new DeviceIdService();}
}

export class Dialog extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Dialog");}
    public static new() {return new Dialog();}
    public get behaviorType() {return this.getProp("BehaviorType", DataType.Enum) as DialogBehaviorType | undefined;}
    public set behaviorType(value) {this.setProp("BehaviorType", DataType.Enum, value);}
    public get conversationDistance() {return this.getProp("ConversationDistance", DataType.Float32);}
    public set conversationDistance(value) {this.setProp("ConversationDistance", DataType.Float32, value);}
    public get goodbyeChoiceActive() {return this.getProp("GoodbyeChoiceActive", DataType.Bool);}
    public set goodbyeChoiceActive(value) {this.setProp("GoodbyeChoiceActive", DataType.Bool, value);}
    public get goodbyeDialog() {return this.getProp("GoodbyeDialog", DataType.String);}
    public set goodbyeDialog(value) {this.setProp("GoodbyeDialog", DataType.String, value);}
    public get initialPrompt() {return this.getProp("InitialPrompt", DataType.String);}
    public set initialPrompt(value) {this.setProp("InitialPrompt", DataType.String, value);}
    public get purpose() {return this.getProp("Purpose", DataType.Enum) as DialogPurpose | undefined;}
    public set purpose(value) {this.setProp("Purpose", DataType.Enum, value);}
    public get tone() {return this.getProp("Tone", DataType.Enum) as DialogTone | undefined;}
    public set tone(value) {this.setProp("Tone", DataType.Enum, value);}
    public get triggerDistance() {return this.getProp("TriggerDistance", DataType.Float32);}
    public set triggerDistance(value) {this.setProp("TriggerDistance", DataType.Float32, value);}
    public get triggerOffset() {return this.getProp("TriggerOffset", DataType.Vector3);}
    public set triggerOffset(value) {this.setProp("TriggerOffset", DataType.Vector3, value);}
}

export class DialogChoice extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "DialogChoice");}
    public static new() {return new DialogChoice();}
    public get goodbyeChoiceActive() {return this.getProp("GoodbyeChoiceActive", DataType.Bool);}
    public set goodbyeChoiceActive(value) {this.setProp("GoodbyeChoiceActive", DataType.Bool, value);}
    public get goodbyeDialog() {return this.getProp("GoodbyeDialog", DataType.String);}
    public set goodbyeDialog(value) {this.setProp("GoodbyeDialog", DataType.String, value);}
    public get responseDialog() {return this.getProp("ResponseDialog", DataType.String);}
    public set responseDialog(value) {this.setProp("ResponseDialog", DataType.String, value);}
    public get userDialog() {return this.getProp("UserDialog", DataType.String);}
    public set userDialog(value) {this.setProp("UserDialog", DataType.String, value);}
}

export class DraftsService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "DraftsService", true);}
    public static new() {return new DraftsService();}
}

export class Dragger extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Dragger");}
    public static new() {return new Dragger();}
}

export class DraggerService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "DraggerService", true);}
    public static new() {return new DraggerService();}
}

export class EditableImage extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "EditableImage");}
    public static new() {return new EditableImage();}
    public get size() {return this.getProp("Size", DataType.Vector2);}
    public set size(value) {this.setProp("Size", DataType.Vector2, value);}
}

export class RobloxEditableImage extends EditableImage {
    protected constructor(className?: string) {super(className ?? "RobloxEditableImage");}
    public static new() {return new RobloxEditableImage();}
    public get imageDataSerialize() {return this.getProp("ImageDataSerialize", DataType.String);}
    public set imageDataSerialize(value) {this.setProp("ImageDataSerialize", DataType.String, value);}
}

export class EngineAPICloudProcessingService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "EngineAPICloudProcessingService", true);}
    public static new() {return new EngineAPICloudProcessingService();}
}

export class EulerRotationCurve extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "EulerRotationCurve");}
    public static new() {return new EulerRotationCurve();}
    public get rotationOrder() {return this.getProp("RotationOrder", DataType.Enum) as RotationOrder | undefined;}
    public set rotationOrder(value) {this.setProp("RotationOrder", DataType.Enum, value);}
}

export class EventIngestService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "EventIngestService", true);}
    public static new() {return new EventIngestService();}
}

export class ExampleService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ExampleService", true);}
    public static new() {return new ExampleService();}
}

export class ExperienceAuthService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ExperienceAuthService", true);}
    public static new() {return new ExperienceAuthService();}
}

export class ExperienceInviteOptions extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ExperienceInviteOptions");}
    public static new() {return new ExperienceInviteOptions();}
    public get inviteMessageId() {return this.getProp("InviteMessageId", DataType.String);}
    public set inviteMessageId(value) {this.setProp("InviteMessageId", DataType.String, value);}
    public get inviteUser() {return this.getProp("InviteUser", DataType.Int64);}
    public set inviteUser(value) {this.setProp("InviteUser", DataType.Int64, value);}
    public get launchData() {return this.getProp("LaunchData", DataType.String);}
    public set launchData(value) {this.setProp("LaunchData", DataType.String, value);}
    public get promptMessage() {return this.getProp("PromptMessage", DataType.String);}
    public set promptMessage(value) {this.setProp("PromptMessage", DataType.String, value);}
}

export class ExperienceNotificationService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ExperienceNotificationService", true);}
    public static new() {return new ExperienceNotificationService();}
}

export class ExperienceService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ExperienceService", true);}
    public static new() {return new ExperienceService();}
}

export class ExperienceStateCaptureService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ExperienceStateCaptureService", true);}
    public static new() {return new ExperienceStateCaptureService();}
}

export class Explosion extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Explosion");}
    public static new() {return new Explosion();}
    public get blastPressure() {return this.getProp("BlastPressure", DataType.Float32);}
    public set blastPressure(value) {this.setProp("BlastPressure", DataType.Float32, value);}
    public get blastRadius() {return this.getProp("BlastRadius", DataType.Float32);}
    public set blastRadius(value) {this.setProp("BlastRadius", DataType.Float32, value);}
    public get destroyJointRadiusPercent() {return this.getProp("DestroyJointRadiusPercent", DataType.Float32);}
    public set destroyJointRadiusPercent(value) {this.setProp("DestroyJointRadiusPercent", DataType.Float32, value);}
    public get explosionType() {return this.getProp("ExplosionType", DataType.Enum) as ExplosionType | undefined;}
    public set explosionType(value) {this.setProp("ExplosionType", DataType.Enum, value);}
    public get position() {return this.getProp("Position", DataType.Vector3);}
    public set position(value) {this.setProp("Position", DataType.Vector3, value);}
    public get timeScale() {return this.getProp("TimeScale", DataType.Float32);}
    public set timeScale(value) {this.setProp("TimeScale", DataType.Float32, value);}
    public get visible() {return this.getProp("Visible", DataType.Bool);}
    public set visible(value) {this.setProp("Visible", DataType.Bool, value);}
}

export class FaceAnimatorService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "FaceAnimatorService", true);}
    public static new() {return new FaceAnimatorService();}
}

export class FaceControls extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "FaceControls");}
    public static new() {return new FaceControls();}
}

export abstract class FaceInstance extends CoreInstance {
    protected constructor(className: string) {super(className);}
    public get face() {return this.getProp("Face", DataType.Enum) as NormalId | undefined;}
    public set face(value) {this.setProp("Face", DataType.Enum, value);}
}

export class Decal extends FaceInstance {
    protected constructor(className?: string) {super(className ?? "Decal");}
    public static new() {return new Decal();}
    public get color3() {return this.getProp("Color3", DataType.Color3);}
    public set color3(value) {this.setProp("Color3", DataType.Color3, value);}
    public get shiny() {return this.getProp("Shiny", DataType.Float32);}
    public set shiny(value) {this.setProp("Shiny", DataType.Float32, value);}
    public get specular() {return this.getProp("Specular", DataType.Float32);}
    public set specular(value) {this.setProp("Specular", DataType.Float32, value);}
    public get texture() {return this.getProp("Texture", DataType.String);}
    public set texture(value) {this.setProp("Texture", DataType.String, value);}
    public get transparency() {return this.getProp("Transparency", DataType.Float32);}
    public set transparency(value) {this.setProp("Transparency", DataType.Float32, value);}
    public get zIndex() {return this.getProp("ZIndex", DataType.Int32);}
    public set zIndex(value) {this.setProp("ZIndex", DataType.Int32, value);}
}

export class Texture extends Decal {
    protected constructor(className?: string) {super(className ?? "Texture");}
    public static new() {return new Texture();}
    public get offsetStudsU() {return this.getProp("OffsetStudsU", DataType.Float32);}
    public set offsetStudsU(value) {this.setProp("OffsetStudsU", DataType.Float32, value);}
    public get offsetStudsV() {return this.getProp("OffsetStudsV", DataType.Float32);}
    public set offsetStudsV(value) {this.setProp("OffsetStudsV", DataType.Float32, value);}
    public get studsPerTileU() {return this.getProp("StudsPerTileU", DataType.Float32);}
    public set studsPerTileU(value) {this.setProp("StudsPerTileU", DataType.Float32, value);}
    public get studsPerTileV() {return this.getProp("StudsPerTileV", DataType.Float32);}
    public set studsPerTileV(value) {this.setProp("StudsPerTileV", DataType.Float32, value);}
}

export class FacialAnimationRecordingService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "FacialAnimationRecordingService", true);}
    public static new() {return new FacialAnimationRecordingService();}
}

export class FacialAnimationStreamingServiceV2 extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "FacialAnimationStreamingServiceV2", true);}
    public static new() {return new FacialAnimationStreamingServiceV2();}
    public get serviceState() {return this.getProp("ServiceState", DataType.Int32);}
    public set serviceState(value) {this.setProp("ServiceState", DataType.Int32, value);}
}

export abstract class Feature extends CoreInstance {
    protected constructor(className: string) {super(className);}
    public get faceId() {return this.getProp("FaceId", DataType.Enum) as NormalId | undefined;}
    public set faceId(value) {this.setProp("FaceId", DataType.Enum, value);}
    public get inOut() {return this.getProp("InOut", DataType.Enum) as InOut | undefined;}
    public set inOut(value) {this.setProp("InOut", DataType.Enum, value);}
    public get leftRight() {return this.getProp("LeftRight", DataType.Enum) as LeftRight | undefined;}
    public set leftRight(value) {this.setProp("LeftRight", DataType.Enum, value);}
    public get topBottom() {return this.getProp("TopBottom", DataType.Enum) as TopBottom | undefined;}
    public set topBottom(value) {this.setProp("TopBottom", DataType.Enum, value);}
}

export class Hole extends Feature {
    protected constructor(className?: string) {super(className ?? "Hole");}
    public static new() {return new Hole();}
}

export class MotorFeature extends Feature {
    protected constructor(className?: string) {super(className ?? "MotorFeature");}
    public static new() {return new MotorFeature();}
}

export class Fire extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Fire");}
    public static new() {return new Fire();}
    public get color() {return this.getProp("Color", DataType.Color3);}
    public set color(value) {this.setProp("Color", DataType.Color3, value);}
    public get enabled() {return this.getProp("Enabled", DataType.Bool);}
    public set enabled(value) {this.setProp("Enabled", DataType.Bool, value);}
    public get secondaryColor() {return this.getProp("SecondaryColor", DataType.Color3);}
    public set secondaryColor(value) {this.setProp("SecondaryColor", DataType.Color3, value);}
    public get timeScale() {return this.getProp("TimeScale", DataType.Float32);}
    public set timeScale(value) {this.setProp("TimeScale", DataType.Float32, value);}
    public get heat_xml() {return this.getProp("heat_xml", DataType.Float32);}
    public set heat_xml(value) {this.setProp("heat_xml", DataType.Float32, value);}
    public get size() {return this.getProp("size", DataType.Float32);}
    public set size(value) {this.setProp("size", DataType.Float32, value);}
    public get size_xml() {return this.getProp("size_xml", DataType.Float32);}
    public set size_xml(value) {this.setProp("size_xml", DataType.Float32, value);}
}

export class FlagStandService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "FlagStandService", true);}
    public static new() {return new FlagStandService();}
}

export class FloatCurve extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "FloatCurve");}
    public static new() {return new FloatCurve();}
    public get valuesAndTimes() {return this.getProp("ValuesAndTimes", DataType.String);}
    public set valuesAndTimes(value) {this.setProp("ValuesAndTimes", DataType.String, value);}
}

export class FlyweightService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "FlyweightService", true);}
    public static new() {return new FlyweightService();}
}

export class CSGDictionaryService extends FlyweightService {
    protected constructor(className?: string) {super(className ?? "CSGDictionaryService");}
    public static new() {return new CSGDictionaryService();}
}

export class NonReplicatedCSGDictionaryService extends FlyweightService {
    protected constructor(className?: string) {super(className ?? "NonReplicatedCSGDictionaryService");}
    public static new() {return new NonReplicatedCSGDictionaryService();}
}

export class Folder extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Folder");}
    public static new() {return new Folder();}
}

export class ForceField extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ForceField");}
    public static new() {return new ForceField();}
    public get visible() {return this.getProp("Visible", DataType.Bool);}
    public set visible(value) {this.setProp("Visible", DataType.Bool, value);}
}

export class FriendService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "FriendService", true);}
    public static new() {return new FriendService();}
}

export class FunctionalTest extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "FunctionalTest");}
    public static new() {return new FunctionalTest();}
    public get description() {return this.getProp("Description", DataType.String);}
    public set description(value) {this.setProp("Description", DataType.String, value);}
    public get hasMigratedSettingsToTestService() {return this.getProp("HasMigratedSettingsToTestService", DataType.Bool);}
    public set hasMigratedSettingsToTestService(value) {this.setProp("HasMigratedSettingsToTestService", DataType.Bool, value);}
}

export class GamePassService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "GamePassService", true);}
    public static new() {return new GamePassService();}
}

export class GamepadService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "GamepadService", true);}
    public static new() {return new GamepadService();}
    public get gamepadCursorEnabled() {return this.getProp("GamepadCursorEnabled", DataType.Bool);}
    public set gamepadCursorEnabled(value) {this.setProp("GamepadCursorEnabled", DataType.Bool, value);}
}

export class Geometry extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Geometry", true);}
    public static new() {return new Geometry();}
}

export class GeometryService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "GeometryService", true);}
    public static new() {return new GeometryService();}
}

export class GetTextBoundsParams extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "GetTextBoundsParams");}
    public static new() {return new GetTextBoundsParams();}
    public get font() {return this.getProp("Font", DataType.Font);}
    public set font(value) {this.setProp("Font", DataType.Font, value);}
    public get size() {return this.getProp("Size", DataType.Float32);}
    public set size(value) {this.setProp("Size", DataType.Float32, value);}
    public get text() {return this.getProp("Text", DataType.String);}
    public set text(value) {this.setProp("Text", DataType.String, value);}
    public get width() {return this.getProp("Width", DataType.Float32);}
    public set width(value) {this.setProp("Width", DataType.Float32, value);}
}

export abstract class GlobalDataStore extends CoreInstance {
    protected constructor(className: string) {super(className);}
}

export class GoogleAnalyticsConfiguration extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "GoogleAnalyticsConfiguration", true);}
    public static new() {return new GoogleAnalyticsConfiguration();}
    public get gaID() {return this.getProp("gaID", DataType.String);}
    public set gaID(value) {this.setProp("gaID", DataType.String, value);}
}

export class GroupService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "GroupService", true);}
    public static new() {return new GroupService();}
}

export abstract class GuiBase extends CoreInstance {
    protected constructor(className: string) {super(className);}
}

export abstract class GuiBase2d extends GuiBase {
    protected constructor(className: string) {super(className);}
    public get autoLocalize() {return this.getProp("AutoLocalize", DataType.Bool);}
    public set autoLocalize(value) {this.setProp("AutoLocalize", DataType.Bool, value);}
    public get localize() {return this.getProp("Localize", DataType.Bool);}
    public set localize(value) {this.setProp("Localize", DataType.Bool, value);}
    public get rootLocalizationTable() {return this.getProp("RootLocalizationTable", DataType.Referent) as LocalizationTable | undefined;}
    public set rootLocalizationTable(value) {this.setProp("RootLocalizationTable", DataType.Referent, value);}
    public get selectionBehaviorDown() {return this.getProp("SelectionBehaviorDown", DataType.Enum) as SelectionBehavior | undefined;}
    public set selectionBehaviorDown(value) {this.setProp("SelectionBehaviorDown", DataType.Enum, value);}
    public get selectionBehaviorLeft() {return this.getProp("SelectionBehaviorLeft", DataType.Enum) as SelectionBehavior | undefined;}
    public set selectionBehaviorLeft(value) {this.setProp("SelectionBehaviorLeft", DataType.Enum, value);}
    public get selectionBehaviorRight() {return this.getProp("SelectionBehaviorRight", DataType.Enum) as SelectionBehavior | undefined;}
    public set selectionBehaviorRight(value) {this.setProp("SelectionBehaviorRight", DataType.Enum, value);}
    public get selectionBehaviorUp() {return this.getProp("SelectionBehaviorUp", DataType.Enum) as SelectionBehavior | undefined;}
    public set selectionBehaviorUp(value) {this.setProp("SelectionBehaviorUp", DataType.Enum, value);}
    public get selectionGroup() {return this.getProp("SelectionGroup", DataType.Bool);}
    public set selectionGroup(value) {this.setProp("SelectionGroup", DataType.Bool, value);}
}

export abstract class GuiObject extends GuiBase2d {
    protected constructor(className: string) {super(className);}
    public get active() {return this.getProp("Active", DataType.Bool);}
    public set active(value) {this.setProp("Active", DataType.Bool, value);}
    public get anchorPoint() {return this.getProp("AnchorPoint", DataType.Vector2);}
    public set anchorPoint(value) {this.setProp("AnchorPoint", DataType.Vector2, value);}
    public get automaticSize() {return this.getProp("AutomaticSize", DataType.Enum) as AutomaticSize | undefined;}
    public set automaticSize(value) {this.setProp("AutomaticSize", DataType.Enum, value);}
    public get backgroundColor() {return this.getProp("BackgroundColor", DataType.BrickColor);}
    public set backgroundColor(value) {this.setProp("BackgroundColor", DataType.BrickColor, value);}
    public get backgroundColor3() {return this.getProp("BackgroundColor3", DataType.Color3);}
    public set backgroundColor3(value) {this.setProp("BackgroundColor3", DataType.Color3, value);}
    public get backgroundTransparency() {return this.getProp("BackgroundTransparency", DataType.Float32);}
    public set backgroundTransparency(value) {this.setProp("BackgroundTransparency", DataType.Float32, value);}
    public get borderColor() {return this.getProp("BorderColor", DataType.BrickColor);}
    public set borderColor(value) {this.setProp("BorderColor", DataType.BrickColor, value);}
    public get borderColor3() {return this.getProp("BorderColor3", DataType.Color3);}
    public set borderColor3(value) {this.setProp("BorderColor3", DataType.Color3, value);}
    public get borderMode() {return this.getProp("BorderMode", DataType.Enum) as BorderMode | undefined;}
    public set borderMode(value) {this.setProp("BorderMode", DataType.Enum, value);}
    public get borderSizePixel() {return this.getProp("BorderSizePixel", DataType.Int32);}
    public set borderSizePixel(value) {this.setProp("BorderSizePixel", DataType.Int32, value);}
    public get clipsDescendants() {return this.getProp("ClipsDescendants", DataType.Bool);}
    public set clipsDescendants(value) {this.setProp("ClipsDescendants", DataType.Bool, value);}
    public get draggable() {return this.getProp("Draggable", DataType.Bool);}
    public set draggable(value) {this.setProp("Draggable", DataType.Bool, value);}
    public get interactable() {return this.getProp("Interactable", DataType.Bool);}
    public set interactable(value) {this.setProp("Interactable", DataType.Bool, value);}
    public get layoutOrder() {return this.getProp("LayoutOrder", DataType.Int32);}
    public set layoutOrder(value) {this.setProp("LayoutOrder", DataType.Int32, value);}
    public get nextSelectionDown() {return this.getProp("NextSelectionDown", DataType.Referent) as GuiObject | undefined;}
    public set nextSelectionDown(value) {this.setProp("NextSelectionDown", DataType.Referent, value);}
    public get nextSelectionLeft() {return this.getProp("NextSelectionLeft", DataType.Referent) as GuiObject | undefined;}
    public set nextSelectionLeft(value) {this.setProp("NextSelectionLeft", DataType.Referent, value);}
    public get nextSelectionRight() {return this.getProp("NextSelectionRight", DataType.Referent) as GuiObject | undefined;}
    public set nextSelectionRight(value) {this.setProp("NextSelectionRight", DataType.Referent, value);}
    public get nextSelectionUp() {return this.getProp("NextSelectionUp", DataType.Referent) as GuiObject | undefined;}
    public set nextSelectionUp(value) {this.setProp("NextSelectionUp", DataType.Referent, value);}
    public get position() {return this.getProp("Position", DataType.UDim2);}
    public set position(value) {this.setProp("Position", DataType.UDim2, value);}
    public get rotation() {return this.getProp("Rotation", DataType.Float32);}
    public set rotation(value) {this.setProp("Rotation", DataType.Float32, value);}
    public get selectable() {return this.getProp("Selectable", DataType.Bool);}
    public set selectable(value) {this.setProp("Selectable", DataType.Bool, value);}
    public get selectionImageObject() {return this.getProp("SelectionImageObject", DataType.Referent) as GuiObject | undefined;}
    public set selectionImageObject(value) {this.setProp("SelectionImageObject", DataType.Referent, value);}
    public get selectionOrder() {return this.getProp("SelectionOrder", DataType.Int32);}
    public set selectionOrder(value) {this.setProp("SelectionOrder", DataType.Int32, value);}
    public get size() {return this.getProp("Size", DataType.UDim2);}
    public set size(value) {this.setProp("Size", DataType.UDim2, value);}
    public get sizeConstraint() {return this.getProp("SizeConstraint", DataType.Enum) as SizeConstraint | undefined;}
    public set sizeConstraint(value) {this.setProp("SizeConstraint", DataType.Enum, value);}
    public get visible() {return this.getProp("Visible", DataType.Bool);}
    public set visible(value) {this.setProp("Visible", DataType.Bool, value);}
    public get zIndex() {return this.getProp("ZIndex", DataType.Int32);}
    public set zIndex(value) {this.setProp("ZIndex", DataType.Int32, value);}
}

export class CanvasGroup extends GuiObject {
    protected constructor(className?: string) {super(className ?? "CanvasGroup");}
    public static new() {return new CanvasGroup();}
    public get groupColor3() {return this.getProp("GroupColor3", DataType.Color3);}
    public set groupColor3(value) {this.setProp("GroupColor3", DataType.Color3, value);}
    public get groupTransparency() {return this.getProp("GroupTransparency", DataType.Float32);}
    public set groupTransparency(value) {this.setProp("GroupTransparency", DataType.Float32, value);}
}

export class Frame extends GuiObject {
    protected constructor(className?: string) {super(className ?? "Frame");}
    public static new() {return new Frame();}
    public get style() {return this.getProp("Style", DataType.Enum) as FrameStyle | undefined;}
    public set style(value) {this.setProp("Style", DataType.Enum, value);}
}

export abstract class GuiButton extends GuiObject {
    protected constructor(className: string) {super(className);}
    public get autoButtonColor() {return this.getProp("AutoButtonColor", DataType.Bool);}
    public set autoButtonColor(value) {this.setProp("AutoButtonColor", DataType.Bool, value);}
    public get modal() {return this.getProp("Modal", DataType.Bool);}
    public set modal(value) {this.setProp("Modal", DataType.Bool, value);}
    public get selected() {return this.getProp("Selected", DataType.Bool);}
    public set selected(value) {this.setProp("Selected", DataType.Bool, value);}
    public get style() {return this.getProp("Style", DataType.Enum) as ButtonStyle | undefined;}
    public set style(value) {this.setProp("Style", DataType.Enum, value);}
}

export class ImageButton extends GuiButton {
    protected constructor(className?: string) {super(className ?? "ImageButton");}
    public static new() {return new ImageButton();}
    public get hoverImage() {return this.getProp("HoverImage", DataType.String);}
    public set hoverImage(value) {this.setProp("HoverImage", DataType.String, value);}
    public get image() {return this.getProp("Image", DataType.String);}
    public set image(value) {this.setProp("Image", DataType.String, value);}
    public get imageColor3() {return this.getProp("ImageColor3", DataType.Color3);}
    public set imageColor3(value) {this.setProp("ImageColor3", DataType.Color3, value);}
    public get imageRectOffset() {return this.getProp("ImageRectOffset", DataType.Vector2);}
    public set imageRectOffset(value) {this.setProp("ImageRectOffset", DataType.Vector2, value);}
    public get imageRectSize() {return this.getProp("ImageRectSize", DataType.Vector2);}
    public set imageRectSize(value) {this.setProp("ImageRectSize", DataType.Vector2, value);}
    public get imageTransparency() {return this.getProp("ImageTransparency", DataType.Float32);}
    public set imageTransparency(value) {this.setProp("ImageTransparency", DataType.Float32, value);}
    public get pressedImage() {return this.getProp("PressedImage", DataType.String);}
    public set pressedImage(value) {this.setProp("PressedImage", DataType.String, value);}
    public get resampleMode() {return this.getProp("ResampleMode", DataType.Enum) as ResamplerMode | undefined;}
    public set resampleMode(value) {this.setProp("ResampleMode", DataType.Enum, value);}
    public get scaleType() {return this.getProp("ScaleType", DataType.Enum) as ScaleType | undefined;}
    public set scaleType(value) {this.setProp("ScaleType", DataType.Enum, value);}
    public get sliceCenter() {return this.getProp("SliceCenter", DataType.Rect);}
    public set sliceCenter(value) {this.setProp("SliceCenter", DataType.Rect, value);}
    public get sliceScale() {return this.getProp("SliceScale", DataType.Float32);}
    public set sliceScale(value) {this.setProp("SliceScale", DataType.Float32, value);}
    public get tileSize() {return this.getProp("TileSize", DataType.UDim2);}
    public set tileSize(value) {this.setProp("TileSize", DataType.UDim2, value);}
}

export class TextButton extends GuiButton {
    protected constructor(className?: string) {super(className ?? "TextButton");}
    public static new() {return new TextButton();}
    public get fontFace() {return this.getProp("FontFace", DataType.Font);}
    public set fontFace(value) {this.setProp("FontFace", DataType.Font, value);}
    public get fontSize() {return this.getProp("FontSize", DataType.Enum) as FontSize | undefined;}
    public set fontSize(value) {this.setProp("FontSize", DataType.Enum, value);}
    public get lineHeight() {return this.getProp("LineHeight", DataType.Float32);}
    public set lineHeight(value) {this.setProp("LineHeight", DataType.Float32, value);}
    public get localizationMatchIdentifier() {return this.getProp("LocalizationMatchIdentifier", DataType.String);}
    public set localizationMatchIdentifier(value) {this.setProp("LocalizationMatchIdentifier", DataType.String, value);}
    public get localizationMatchedSourceText() {return this.getProp("LocalizationMatchedSourceText", DataType.String);}
    public set localizationMatchedSourceText(value) {this.setProp("LocalizationMatchedSourceText", DataType.String, value);}
    public get maxVisibleGraphemes() {return this.getProp("MaxVisibleGraphemes", DataType.Int32);}
    public set maxVisibleGraphemes(value) {this.setProp("MaxVisibleGraphemes", DataType.Int32, value);}
    public get richText() {return this.getProp("RichText", DataType.Bool);}
    public set richText(value) {this.setProp("RichText", DataType.Bool, value);}
    public get text() {return this.getProp("Text", DataType.String);}
    public set text(value) {this.setProp("Text", DataType.String, value);}
    public get textColor() {return this.getProp("TextColor", DataType.BrickColor);}
    public set textColor(value) {this.setProp("TextColor", DataType.BrickColor, value);}
    public get textColor3() {return this.getProp("TextColor3", DataType.Color3);}
    public set textColor3(value) {this.setProp("TextColor3", DataType.Color3, value);}
    public get textDirection() {return this.getProp("TextDirection", DataType.Enum) as TextDirection | undefined;}
    public set textDirection(value) {this.setProp("TextDirection", DataType.Enum, value);}
    public get textScaled() {return this.getProp("TextScaled", DataType.Bool);}
    public set textScaled(value) {this.setProp("TextScaled", DataType.Bool, value);}
    public get textSize() {return this.getProp("TextSize", DataType.Float32);}
    public set textSize(value) {this.setProp("TextSize", DataType.Float32, value);}
    public get textStrokeColor3() {return this.getProp("TextStrokeColor3", DataType.Color3);}
    public set textStrokeColor3(value) {this.setProp("TextStrokeColor3", DataType.Color3, value);}
    public get textStrokeTransparency() {return this.getProp("TextStrokeTransparency", DataType.Float32);}
    public set textStrokeTransparency(value) {this.setProp("TextStrokeTransparency", DataType.Float32, value);}
    public get textTransparency() {return this.getProp("TextTransparency", DataType.Float32);}
    public set textTransparency(value) {this.setProp("TextTransparency", DataType.Float32, value);}
    public get textTruncate() {return this.getProp("TextTruncate", DataType.Enum) as TextTruncate | undefined;}
    public set textTruncate(value) {this.setProp("TextTruncate", DataType.Enum, value);}
    public get textWrap() {return this.getProp("TextWrap", DataType.Bool);}
    public set textWrap(value) {this.setProp("TextWrap", DataType.Bool, value);}
    public get textWrapped() {return this.getProp("TextWrapped", DataType.Bool);}
    public set textWrapped(value) {this.setProp("TextWrapped", DataType.Bool, value);}
    public get textXAlignment() {return this.getProp("TextXAlignment", DataType.Enum) as TextXAlignment | undefined;}
    public set textXAlignment(value) {this.setProp("TextXAlignment", DataType.Enum, value);}
    public get textYAlignment() {return this.getProp("TextYAlignment", DataType.Enum) as TextYAlignment | undefined;}
    public set textYAlignment(value) {this.setProp("TextYAlignment", DataType.Enum, value);}
}

export abstract class GuiLabel extends GuiObject {
    protected constructor(className: string) {super(className);}
}

export class ImageLabel extends GuiLabel {
    protected constructor(className?: string) {super(className ?? "ImageLabel");}
    public static new() {return new ImageLabel();}
    public get image() {return this.getProp("Image", DataType.String);}
    public set image(value) {this.setProp("Image", DataType.String, value);}
    public get imageColor3() {return this.getProp("ImageColor3", DataType.Color3);}
    public set imageColor3(value) {this.setProp("ImageColor3", DataType.Color3, value);}
    public get imageRectOffset() {return this.getProp("ImageRectOffset", DataType.Vector2);}
    public set imageRectOffset(value) {this.setProp("ImageRectOffset", DataType.Vector2, value);}
    public get imageRectSize() {return this.getProp("ImageRectSize", DataType.Vector2);}
    public set imageRectSize(value) {this.setProp("ImageRectSize", DataType.Vector2, value);}
    public get imageTransparency() {return this.getProp("ImageTransparency", DataType.Float32);}
    public set imageTransparency(value) {this.setProp("ImageTransparency", DataType.Float32, value);}
    public get resampleMode() {return this.getProp("ResampleMode", DataType.Enum) as ResamplerMode | undefined;}
    public set resampleMode(value) {this.setProp("ResampleMode", DataType.Enum, value);}
    public get scaleType() {return this.getProp("ScaleType", DataType.Enum) as ScaleType | undefined;}
    public set scaleType(value) {this.setProp("ScaleType", DataType.Enum, value);}
    public get sliceCenter() {return this.getProp("SliceCenter", DataType.Rect);}
    public set sliceCenter(value) {this.setProp("SliceCenter", DataType.Rect, value);}
    public get sliceScale() {return this.getProp("SliceScale", DataType.Float32);}
    public set sliceScale(value) {this.setProp("SliceScale", DataType.Float32, value);}
    public get tileSize() {return this.getProp("TileSize", DataType.UDim2);}
    public set tileSize(value) {this.setProp("TileSize", DataType.UDim2, value);}
}

export class TextLabel extends GuiLabel {
    protected constructor(className?: string) {super(className ?? "TextLabel");}
    public static new() {return new TextLabel();}
    public get fontFace() {return this.getProp("FontFace", DataType.Font);}
    public set fontFace(value) {this.setProp("FontFace", DataType.Font, value);}
    public get fontSize() {return this.getProp("FontSize", DataType.Enum) as FontSize | undefined;}
    public set fontSize(value) {this.setProp("FontSize", DataType.Enum, value);}
    public get lineHeight() {return this.getProp("LineHeight", DataType.Float32);}
    public set lineHeight(value) {this.setProp("LineHeight", DataType.Float32, value);}
    public get localizationMatchIdentifier() {return this.getProp("LocalizationMatchIdentifier", DataType.String);}
    public set localizationMatchIdentifier(value) {this.setProp("LocalizationMatchIdentifier", DataType.String, value);}
    public get localizationMatchedSourceText() {return this.getProp("LocalizationMatchedSourceText", DataType.String);}
    public set localizationMatchedSourceText(value) {this.setProp("LocalizationMatchedSourceText", DataType.String, value);}
    public get maxVisibleGraphemes() {return this.getProp("MaxVisibleGraphemes", DataType.Int32);}
    public set maxVisibleGraphemes(value) {this.setProp("MaxVisibleGraphemes", DataType.Int32, value);}
    public get richText() {return this.getProp("RichText", DataType.Bool);}
    public set richText(value) {this.setProp("RichText", DataType.Bool, value);}
    public get text() {return this.getProp("Text", DataType.String);}
    public set text(value) {this.setProp("Text", DataType.String, value);}
    public get textColor() {return this.getProp("TextColor", DataType.BrickColor);}
    public set textColor(value) {this.setProp("TextColor", DataType.BrickColor, value);}
    public get textColor3() {return this.getProp("TextColor3", DataType.Color3);}
    public set textColor3(value) {this.setProp("TextColor3", DataType.Color3, value);}
    public get textDirection() {return this.getProp("TextDirection", DataType.Enum) as TextDirection | undefined;}
    public set textDirection(value) {this.setProp("TextDirection", DataType.Enum, value);}
    public get textScaled() {return this.getProp("TextScaled", DataType.Bool);}
    public set textScaled(value) {this.setProp("TextScaled", DataType.Bool, value);}
    public get textSize() {return this.getProp("TextSize", DataType.Float32);}
    public set textSize(value) {this.setProp("TextSize", DataType.Float32, value);}
    public get textStrokeColor3() {return this.getProp("TextStrokeColor3", DataType.Color3);}
    public set textStrokeColor3(value) {this.setProp("TextStrokeColor3", DataType.Color3, value);}
    public get textStrokeTransparency() {return this.getProp("TextStrokeTransparency", DataType.Float32);}
    public set textStrokeTransparency(value) {this.setProp("TextStrokeTransparency", DataType.Float32, value);}
    public get textTransparency() {return this.getProp("TextTransparency", DataType.Float32);}
    public set textTransparency(value) {this.setProp("TextTransparency", DataType.Float32, value);}
    public get textTruncate() {return this.getProp("TextTruncate", DataType.Enum) as TextTruncate | undefined;}
    public set textTruncate(value) {this.setProp("TextTruncate", DataType.Enum, value);}
    public get textWrap() {return this.getProp("TextWrap", DataType.Bool);}
    public set textWrap(value) {this.setProp("TextWrap", DataType.Bool, value);}
    public get textWrapped() {return this.getProp("TextWrapped", DataType.Bool);}
    public set textWrapped(value) {this.setProp("TextWrapped", DataType.Bool, value);}
    public get textXAlignment() {return this.getProp("TextXAlignment", DataType.Enum) as TextXAlignment | undefined;}
    public set textXAlignment(value) {this.setProp("TextXAlignment", DataType.Enum, value);}
    public get textYAlignment() {return this.getProp("TextYAlignment", DataType.Enum) as TextYAlignment | undefined;}
    public set textYAlignment(value) {this.setProp("TextYAlignment", DataType.Enum, value);}
}

export class ScrollingFrame extends GuiObject {
    protected constructor(className?: string) {super(className ?? "ScrollingFrame");}
    public static new() {return new ScrollingFrame();}
    public get automaticCanvasSize() {return this.getProp("AutomaticCanvasSize", DataType.Enum) as AutomaticSize | undefined;}
    public set automaticCanvasSize(value) {this.setProp("AutomaticCanvasSize", DataType.Enum, value);}
    public get bottomImage() {return this.getProp("BottomImage", DataType.String);}
    public set bottomImage(value) {this.setProp("BottomImage", DataType.String, value);}
    public get canvasPosition() {return this.getProp("CanvasPosition", DataType.Vector2);}
    public set canvasPosition(value) {this.setProp("CanvasPosition", DataType.Vector2, value);}
    public get canvasSize() {return this.getProp("CanvasSize", DataType.UDim2);}
    public set canvasSize(value) {this.setProp("CanvasSize", DataType.UDim2, value);}
    public get elasticBehavior() {return this.getProp("ElasticBehavior", DataType.Enum) as ElasticBehavior | undefined;}
    public set elasticBehavior(value) {this.setProp("ElasticBehavior", DataType.Enum, value);}
    public get horizontalScrollBarInset() {return this.getProp("HorizontalScrollBarInset", DataType.Enum) as ScrollBarInset | undefined;}
    public set horizontalScrollBarInset(value) {this.setProp("HorizontalScrollBarInset", DataType.Enum, value);}
    public get midImage() {return this.getProp("MidImage", DataType.String);}
    public set midImage(value) {this.setProp("MidImage", DataType.String, value);}
    public get scrollBarImageColor3() {return this.getProp("ScrollBarImageColor3", DataType.Color3);}
    public set scrollBarImageColor3(value) {this.setProp("ScrollBarImageColor3", DataType.Color3, value);}
    public get scrollBarImageTransparency() {return this.getProp("ScrollBarImageTransparency", DataType.Float32);}
    public set scrollBarImageTransparency(value) {this.setProp("ScrollBarImageTransparency", DataType.Float32, value);}
    public get scrollBarThickness() {return this.getProp("ScrollBarThickness", DataType.Int32);}
    public set scrollBarThickness(value) {this.setProp("ScrollBarThickness", DataType.Int32, value);}
    public get scrollingDirection() {return this.getProp("ScrollingDirection", DataType.Enum) as ScrollingDirection | undefined;}
    public set scrollingDirection(value) {this.setProp("ScrollingDirection", DataType.Enum, value);}
    public get scrollingEnabled() {return this.getProp("ScrollingEnabled", DataType.Bool);}
    public set scrollingEnabled(value) {this.setProp("ScrollingEnabled", DataType.Bool, value);}
    public get topImage() {return this.getProp("TopImage", DataType.String);}
    public set topImage(value) {this.setProp("TopImage", DataType.String, value);}
    public get verticalScrollBarInset() {return this.getProp("VerticalScrollBarInset", DataType.Enum) as ScrollBarInset | undefined;}
    public set verticalScrollBarInset(value) {this.setProp("VerticalScrollBarInset", DataType.Enum, value);}
    public get verticalScrollBarPosition() {return this.getProp("VerticalScrollBarPosition", DataType.Enum) as VerticalScrollBarPosition | undefined;}
    public set verticalScrollBarPosition(value) {this.setProp("VerticalScrollBarPosition", DataType.Enum, value);}
}

export class TextBox extends GuiObject {
    protected constructor(className?: string) {super(className ?? "TextBox");}
    public static new() {return new TextBox();}
    public get clearTextOnFocus() {return this.getProp("ClearTextOnFocus", DataType.Bool);}
    public set clearTextOnFocus(value) {this.setProp("ClearTextOnFocus", DataType.Bool, value);}
    public get fontFace() {return this.getProp("FontFace", DataType.Font);}
    public set fontFace(value) {this.setProp("FontFace", DataType.Font, value);}
    public get fontSize() {return this.getProp("FontSize", DataType.Enum) as FontSize | undefined;}
    public set fontSize(value) {this.setProp("FontSize", DataType.Enum, value);}
    public get lineHeight() {return this.getProp("LineHeight", DataType.Float32);}
    public set lineHeight(value) {this.setProp("LineHeight", DataType.Float32, value);}
    public get localizationMatchIdentifier() {return this.getProp("LocalizationMatchIdentifier", DataType.String);}
    public set localizationMatchIdentifier(value) {this.setProp("LocalizationMatchIdentifier", DataType.String, value);}
    public get localizationMatchedSourceText() {return this.getProp("LocalizationMatchedSourceText", DataType.String);}
    public set localizationMatchedSourceText(value) {this.setProp("LocalizationMatchedSourceText", DataType.String, value);}
    public get maxVisibleGraphemes() {return this.getProp("MaxVisibleGraphemes", DataType.Int32);}
    public set maxVisibleGraphemes(value) {this.setProp("MaxVisibleGraphemes", DataType.Int32, value);}
    public get multiLine() {return this.getProp("MultiLine", DataType.Bool);}
    public set multiLine(value) {this.setProp("MultiLine", DataType.Bool, value);}
    public get placeholderColor3() {return this.getProp("PlaceholderColor3", DataType.Color3);}
    public set placeholderColor3(value) {this.setProp("PlaceholderColor3", DataType.Color3, value);}
    public get placeholderText() {return this.getProp("PlaceholderText", DataType.String);}
    public set placeholderText(value) {this.setProp("PlaceholderText", DataType.String, value);}
    public get richText() {return this.getProp("RichText", DataType.Bool);}
    public set richText(value) {this.setProp("RichText", DataType.Bool, value);}
    public get showNativeInput() {return this.getProp("ShowNativeInput", DataType.Bool);}
    public set showNativeInput(value) {this.setProp("ShowNativeInput", DataType.Bool, value);}
    public get text() {return this.getProp("Text", DataType.String);}
    public set text(value) {this.setProp("Text", DataType.String, value);}
    public get textColor() {return this.getProp("TextColor", DataType.BrickColor);}
    public set textColor(value) {this.setProp("TextColor", DataType.BrickColor, value);}
    public get textColor3() {return this.getProp("TextColor3", DataType.Color3);}
    public set textColor3(value) {this.setProp("TextColor3", DataType.Color3, value);}
    public get textDirection() {return this.getProp("TextDirection", DataType.Enum) as TextDirection | undefined;}
    public set textDirection(value) {this.setProp("TextDirection", DataType.Enum, value);}
    public get textEditable() {return this.getProp("TextEditable", DataType.Bool);}
    public set textEditable(value) {this.setProp("TextEditable", DataType.Bool, value);}
    public get textScaled() {return this.getProp("TextScaled", DataType.Bool);}
    public set textScaled(value) {this.setProp("TextScaled", DataType.Bool, value);}
    public get textSize() {return this.getProp("TextSize", DataType.Float32);}
    public set textSize(value) {this.setProp("TextSize", DataType.Float32, value);}
    public get textStrokeColor3() {return this.getProp("TextStrokeColor3", DataType.Color3);}
    public set textStrokeColor3(value) {this.setProp("TextStrokeColor3", DataType.Color3, value);}
    public get textStrokeTransparency() {return this.getProp("TextStrokeTransparency", DataType.Float32);}
    public set textStrokeTransparency(value) {this.setProp("TextStrokeTransparency", DataType.Float32, value);}
    public get textTransparency() {return this.getProp("TextTransparency", DataType.Float32);}
    public set textTransparency(value) {this.setProp("TextTransparency", DataType.Float32, value);}
    public get textTruncate() {return this.getProp("TextTruncate", DataType.Enum) as TextTruncate | undefined;}
    public set textTruncate(value) {this.setProp("TextTruncate", DataType.Enum, value);}
    public get textWrap() {return this.getProp("TextWrap", DataType.Bool);}
    public set textWrap(value) {this.setProp("TextWrap", DataType.Bool, value);}
    public get textWrapped() {return this.getProp("TextWrapped", DataType.Bool);}
    public set textWrapped(value) {this.setProp("TextWrapped", DataType.Bool, value);}
    public get textXAlignment() {return this.getProp("TextXAlignment", DataType.Enum) as TextXAlignment | undefined;}
    public set textXAlignment(value) {this.setProp("TextXAlignment", DataType.Enum, value);}
    public get textYAlignment() {return this.getProp("TextYAlignment", DataType.Enum) as TextYAlignment | undefined;}
    public set textYAlignment(value) {this.setProp("TextYAlignment", DataType.Enum, value);}
}

export class VideoFrame extends GuiObject {
    protected constructor(className?: string) {super(className ?? "VideoFrame");}
    public static new() {return new VideoFrame();}
    public get looped() {return this.getProp("Looped", DataType.Bool);}
    public set looped(value) {this.setProp("Looped", DataType.Bool, value);}
    public get playing() {return this.getProp("Playing", DataType.Bool);}
    public set playing(value) {this.setProp("Playing", DataType.Bool, value);}
    public get timePosition() {return this.getProp("TimePosition", DataType.Float64);}
    public set timePosition(value) {this.setProp("TimePosition", DataType.Float64, value);}
    public get video() {return this.getProp("Video", DataType.String);}
    public set video(value) {this.setProp("Video", DataType.String, value);}
    public get volume() {return this.getProp("Volume", DataType.Float32);}
    public set volume(value) {this.setProp("Volume", DataType.Float32, value);}
}

export class ViewportFrame extends GuiObject {
    protected constructor(className?: string) {super(className ?? "ViewportFrame");}
    public static new() {return new ViewportFrame();}
    public get ambient() {return this.getProp("Ambient", DataType.Color3);}
    public set ambient(value) {this.setProp("Ambient", DataType.Color3, value);}
    public get cameraCFrame() {return this.getProp("CameraCFrame", DataType.CFrame);}
    public set cameraCFrame(value) {this.setProp("CameraCFrame", DataType.CFrame, value);}
    public get cameraFieldOfView() {return this.getProp("CameraFieldOfView", DataType.Float32);}
    public set cameraFieldOfView(value) {this.setProp("CameraFieldOfView", DataType.Float32, value);}
    public get imageColor3() {return this.getProp("ImageColor3", DataType.Color3);}
    public set imageColor3(value) {this.setProp("ImageColor3", DataType.Color3, value);}
    public get imageTransparency() {return this.getProp("ImageTransparency", DataType.Float32);}
    public set imageTransparency(value) {this.setProp("ImageTransparency", DataType.Float32, value);}
    public get lightColor() {return this.getProp("LightColor", DataType.Color3);}
    public set lightColor(value) {this.setProp("LightColor", DataType.Color3, value);}
    public get lightDirection() {return this.getProp("LightDirection", DataType.Vector3);}
    public set lightDirection(value) {this.setProp("LightDirection", DataType.Vector3, value);}
}

export abstract class LayerCollector extends GuiBase2d {
    protected constructor(className: string) {super(className);}
    public get enabled() {return this.getProp("Enabled", DataType.Bool);}
    public set enabled(value) {this.setProp("Enabled", DataType.Bool, value);}
    public get resetOnSpawn() {return this.getProp("ResetOnSpawn", DataType.Bool);}
    public set resetOnSpawn(value) {this.setProp("ResetOnSpawn", DataType.Bool, value);}
    public get zIndexBehavior() {return this.getProp("ZIndexBehavior", DataType.Enum) as ZIndexBehavior | undefined;}
    public set zIndexBehavior(value) {this.setProp("ZIndexBehavior", DataType.Enum, value);}
}

export class BillboardGui extends LayerCollector {
    protected constructor(className?: string) {super(className ?? "BillboardGui");}
    public static new() {return new BillboardGui();}
    public get active() {return this.getProp("Active", DataType.Bool);}
    public set active(value) {this.setProp("Active", DataType.Bool, value);}
    public get adornee() {return this.getProp("Adornee", DataType.Referent) as CoreInstance | undefined;}
    public set adornee(value) {this.setProp("Adornee", DataType.Referent, value);}
    public get alwaysOnTop() {return this.getProp("AlwaysOnTop", DataType.Bool);}
    public set alwaysOnTop(value) {this.setProp("AlwaysOnTop", DataType.Bool, value);}
    public get brightness() {return this.getProp("Brightness", DataType.Float32);}
    public set brightness(value) {this.setProp("Brightness", DataType.Float32, value);}
    public get clipsDescendants() {return this.getProp("ClipsDescendants", DataType.Bool);}
    public set clipsDescendants(value) {this.setProp("ClipsDescendants", DataType.Bool, value);}
    public get distanceLowerLimit() {return this.getProp("DistanceLowerLimit", DataType.Float32);}
    public set distanceLowerLimit(value) {this.setProp("DistanceLowerLimit", DataType.Float32, value);}
    public get distanceStep() {return this.getProp("DistanceStep", DataType.Float32);}
    public set distanceStep(value) {this.setProp("DistanceStep", DataType.Float32, value);}
    public get distanceUpperLimit() {return this.getProp("DistanceUpperLimit", DataType.Float32);}
    public set distanceUpperLimit(value) {this.setProp("DistanceUpperLimit", DataType.Float32, value);}
    public get extentsOffset() {return this.getProp("ExtentsOffset", DataType.Vector3);}
    public set extentsOffset(value) {this.setProp("ExtentsOffset", DataType.Vector3, value);}
    public get extentsOffsetWorldSpace() {return this.getProp("ExtentsOffsetWorldSpace", DataType.Vector3);}
    public set extentsOffsetWorldSpace(value) {this.setProp("ExtentsOffsetWorldSpace", DataType.Vector3, value);}
    public get lightInfluence() {return this.getProp("LightInfluence", DataType.Float32);}
    public set lightInfluence(value) {this.setProp("LightInfluence", DataType.Float32, value);}
    public get maxDistance() {return this.getProp("MaxDistance", DataType.Float32);}
    public set maxDistance(value) {this.setProp("MaxDistance", DataType.Float32, value);}
    public get playerToHideFrom() {return this.getProp("PlayerToHideFrom", DataType.Referent) as CoreInstance | undefined;}
    public set playerToHideFrom(value) {this.setProp("PlayerToHideFrom", DataType.Referent, value);}
    public get size() {return this.getProp("Size", DataType.UDim2);}
    public set size(value) {this.setProp("Size", DataType.UDim2, value);}
    public get sizeOffset() {return this.getProp("SizeOffset", DataType.Vector2);}
    public set sizeOffset(value) {this.setProp("SizeOffset", DataType.Vector2, value);}
    public get studsOffset() {return this.getProp("StudsOffset", DataType.Vector3);}
    public set studsOffset(value) {this.setProp("StudsOffset", DataType.Vector3, value);}
    public get studsOffsetWorldSpace() {return this.getProp("StudsOffsetWorldSpace", DataType.Vector3);}
    public set studsOffsetWorldSpace(value) {this.setProp("StudsOffsetWorldSpace", DataType.Vector3, value);}
}

export abstract class PluginGui extends LayerCollector {
    protected constructor(className: string) {super(className);}
    public get title() {return this.getProp("Title", DataType.String);}
    public set title(value) {this.setProp("Title", DataType.String, value);}
}

export class ScreenGui extends LayerCollector {
    protected constructor(className?: string) {super(className ?? "ScreenGui");}
    public static new() {return new ScreenGui();}
    public get clipToDeviceSafeArea() {return this.getProp("ClipToDeviceSafeArea", DataType.Bool);}
    public set clipToDeviceSafeArea(value) {this.setProp("ClipToDeviceSafeArea", DataType.Bool, value);}
    public get displayOrder() {return this.getProp("DisplayOrder", DataType.Int32);}
    public set displayOrder(value) {this.setProp("DisplayOrder", DataType.Int32, value);}
    public get safeAreaCompatibility() {return this.getProp("SafeAreaCompatibility", DataType.Enum) as SafeAreaCompatibility | undefined;}
    public set safeAreaCompatibility(value) {this.setProp("SafeAreaCompatibility", DataType.Enum, value);}
    public get screenInsets() {return this.getProp("ScreenInsets", DataType.Enum) as ScreenInsets | undefined;}
    public set screenInsets(value) {this.setProp("ScreenInsets", DataType.Enum, value);}
}

export class GuiMain extends ScreenGui {
    protected constructor(className?: string) {super(className ?? "GuiMain");}
    public static new() {return new GuiMain();}
}

export abstract class SurfaceGuiBase extends LayerCollector {
    protected constructor(className: string) {super(className);}
    public get active() {return this.getProp("Active", DataType.Bool);}
    public set active(value) {this.setProp("Active", DataType.Bool, value);}
    public get adornee() {return this.getProp("Adornee", DataType.Referent) as CoreInstance | undefined;}
    public set adornee(value) {this.setProp("Adornee", DataType.Referent, value);}
    public get face() {return this.getProp("Face", DataType.Enum) as NormalId | undefined;}
    public set face(value) {this.setProp("Face", DataType.Enum, value);}
}

export class AdGui extends SurfaceGuiBase {
    protected constructor(className?: string) {super(className ?? "AdGui");}
    public static new() {return new AdGui();}
    public get adShape() {return this.getProp("AdShape", DataType.Enum) as AdShape | undefined;}
    public set adShape(value) {this.setProp("AdShape", DataType.Enum, value);}
    public get enableVideoAds() {return this.getProp("EnableVideoAds", DataType.Bool);}
    public set enableVideoAds(value) {this.setProp("EnableVideoAds", DataType.Bool, value);}
    public get fallbackImage() {return this.getProp("FallbackImage", DataType.String);}
    public set fallbackImage(value) {this.setProp("FallbackImage", DataType.String, value);}
}

export class SurfaceGui extends SurfaceGuiBase {
    protected constructor(className?: string) {super(className ?? "SurfaceGui");}
    public static new() {return new SurfaceGui();}
    public get alwaysOnTop() {return this.getProp("AlwaysOnTop", DataType.Bool);}
    public set alwaysOnTop(value) {this.setProp("AlwaysOnTop", DataType.Bool, value);}
    public get brightness() {return this.getProp("Brightness", DataType.Float32);}
    public set brightness(value) {this.setProp("Brightness", DataType.Float32, value);}
    public get canvasSize() {return this.getProp("CanvasSize", DataType.Vector2);}
    public set canvasSize(value) {this.setProp("CanvasSize", DataType.Vector2, value);}
    public get clipsDescendants() {return this.getProp("ClipsDescendants", DataType.Bool);}
    public set clipsDescendants(value) {this.setProp("ClipsDescendants", DataType.Bool, value);}
    public get lightInfluence() {return this.getProp("LightInfluence", DataType.Float32);}
    public set lightInfluence(value) {this.setProp("LightInfluence", DataType.Float32, value);}
    public get maxDistance() {return this.getProp("MaxDistance", DataType.Float32);}
    public set maxDistance(value) {this.setProp("MaxDistance", DataType.Float32, value);}
    public get pixelsPerStud() {return this.getProp("PixelsPerStud", DataType.Float32);}
    public set pixelsPerStud(value) {this.setProp("PixelsPerStud", DataType.Float32, value);}
    public get sizingMode() {return this.getProp("SizingMode", DataType.Enum) as SurfaceGuiSizingMode | undefined;}
    public set sizingMode(value) {this.setProp("SizingMode", DataType.Enum, value);}
    public get toolPunchThroughDistance() {return this.getProp("ToolPunchThroughDistance", DataType.Float32);}
    public set toolPunchThroughDistance(value) {this.setProp("ToolPunchThroughDistance", DataType.Float32, value);}
    public get zOffset() {return this.getProp("ZOffset", DataType.Float32);}
    public set zOffset(value) {this.setProp("ZOffset", DataType.Float32, value);}
}

export abstract class GuiBase3d extends GuiBase {
    protected constructor(className: string) {super(className);}
    public get color() {return this.getProp("Color", DataType.BrickColor);}
    public set color(value) {this.setProp("Color", DataType.BrickColor, value);}
    public get color3() {return this.getProp("Color3", DataType.Color3);}
    public set color3(value) {this.setProp("Color3", DataType.Color3, value);}
    public get transparency() {return this.getProp("Transparency", DataType.Float32);}
    public set transparency(value) {this.setProp("Transparency", DataType.Float32, value);}
    public get visible() {return this.getProp("Visible", DataType.Bool);}
    public set visible(value) {this.setProp("Visible", DataType.Bool, value);}
}

export class FloorWire extends GuiBase3d {
    protected constructor(className?: string) {super(className ?? "FloorWire");}
    public static new() {return new FloorWire();}
    public get cycleOffset() {return this.getProp("CycleOffset", DataType.Float32);}
    public set cycleOffset(value) {this.setProp("CycleOffset", DataType.Float32, value);}
    public get from() {return this.getProp("From", DataType.Referent) as BasePart | undefined;}
    public set from(value) {this.setProp("From", DataType.Referent, value);}
    public get studsBetweenTextures() {return this.getProp("StudsBetweenTextures", DataType.Float32);}
    public set studsBetweenTextures(value) {this.setProp("StudsBetweenTextures", DataType.Float32, value);}
    public get texture() {return this.getProp("Texture", DataType.String);}
    public set texture(value) {this.setProp("Texture", DataType.String, value);}
    public get textureSize() {return this.getProp("TextureSize", DataType.Vector2);}
    public set textureSize(value) {this.setProp("TextureSize", DataType.Vector2, value);}
    public get to() {return this.getProp("To", DataType.Referent) as BasePart | undefined;}
    public set to(value) {this.setProp("To", DataType.Referent, value);}
    public get velocity() {return this.getProp("Velocity", DataType.Float32);}
    public set velocity(value) {this.setProp("Velocity", DataType.Float32, value);}
    public get wireRadius() {return this.getProp("WireRadius", DataType.Float32);}
    public set wireRadius(value) {this.setProp("WireRadius", DataType.Float32, value);}
}

export abstract class InstanceAdornment extends GuiBase3d {
    protected constructor(className: string) {super(className);}
    public get adornee() {return this.getProp("Adornee", DataType.Referent) as CoreInstance | undefined;}
    public set adornee(value) {this.setProp("Adornee", DataType.Referent, value);}
}

export class SelectionBox extends InstanceAdornment {
    protected constructor(className?: string) {super(className ?? "SelectionBox");}
    public static new() {return new SelectionBox();}
    public get lineThickness() {return this.getProp("LineThickness", DataType.Float32);}
    public set lineThickness(value) {this.setProp("LineThickness", DataType.Float32, value);}
    public get studioSelectionBox() {return this.getProp("StudioSelectionBox", DataType.Bool);}
    public set studioSelectionBox(value) {this.setProp("StudioSelectionBox", DataType.Bool, value);}
    public get surfaceColor() {return this.getProp("SurfaceColor", DataType.BrickColor);}
    public set surfaceColor(value) {this.setProp("SurfaceColor", DataType.BrickColor, value);}
    public get surfaceColor3() {return this.getProp("SurfaceColor3", DataType.Color3);}
    public set surfaceColor3(value) {this.setProp("SurfaceColor3", DataType.Color3, value);}
    public get surfaceTransparency() {return this.getProp("SurfaceTransparency", DataType.Float32);}
    public set surfaceTransparency(value) {this.setProp("SurfaceTransparency", DataType.Float32, value);}
}

export abstract class PVAdornment extends GuiBase3d {
    protected constructor(className: string) {super(className);}
    public get adornee() {return this.getProp("Adornee", DataType.Referent) as PVInstance | undefined;}
    public set adornee(value) {this.setProp("Adornee", DataType.Referent, value);}
}

export abstract class HandleAdornment extends PVAdornment {
    protected constructor(className: string) {super(className);}
    public get adornCullingMode() {return this.getProp("AdornCullingMode", DataType.Enum) as AdornCullingMode | undefined;}
    public set adornCullingMode(value) {this.setProp("AdornCullingMode", DataType.Enum, value);}
    public get alwaysOnTop() {return this.getProp("AlwaysOnTop", DataType.Bool);}
    public set alwaysOnTop(value) {this.setProp("AlwaysOnTop", DataType.Bool, value);}
    public get cFrame() {return this.getProp("CFrame", DataType.CFrame);}
    public set cFrame(value) {this.setProp("CFrame", DataType.CFrame, value);}
    public get sizeRelativeOffset() {return this.getProp("SizeRelativeOffset", DataType.Vector3);}
    public set sizeRelativeOffset(value) {this.setProp("SizeRelativeOffset", DataType.Vector3, value);}
    public get zIndex() {return this.getProp("ZIndex", DataType.Int32);}
    public set zIndex(value) {this.setProp("ZIndex", DataType.Int32, value);}
}

export class BoxHandleAdornment extends HandleAdornment {
    protected constructor(className?: string) {super(className ?? "BoxHandleAdornment");}
    public static new() {return new BoxHandleAdornment();}
    public get size() {return this.getProp("Size", DataType.Vector3);}
    public set size(value) {this.setProp("Size", DataType.Vector3, value);}
}

export class ConeHandleAdornment extends HandleAdornment {
    protected constructor(className?: string) {super(className ?? "ConeHandleAdornment");}
    public static new() {return new ConeHandleAdornment();}
    public get height() {return this.getProp("Height", DataType.Float32);}
    public set height(value) {this.setProp("Height", DataType.Float32, value);}
    public get radius() {return this.getProp("Radius", DataType.Float32);}
    public set radius(value) {this.setProp("Radius", DataType.Float32, value);}
}

export class CylinderHandleAdornment extends HandleAdornment {
    protected constructor(className?: string) {super(className ?? "CylinderHandleAdornment");}
    public static new() {return new CylinderHandleAdornment();}
    public get angle() {return this.getProp("Angle", DataType.Float32);}
    public set angle(value) {this.setProp("Angle", DataType.Float32, value);}
    public get height() {return this.getProp("Height", DataType.Float32);}
    public set height(value) {this.setProp("Height", DataType.Float32, value);}
    public get innerRadius() {return this.getProp("InnerRadius", DataType.Float32);}
    public set innerRadius(value) {this.setProp("InnerRadius", DataType.Float32, value);}
    public get radius() {return this.getProp("Radius", DataType.Float32);}
    public set radius(value) {this.setProp("Radius", DataType.Float32, value);}
}

export class ImageHandleAdornment extends HandleAdornment {
    protected constructor(className?: string) {super(className ?? "ImageHandleAdornment");}
    public static new() {return new ImageHandleAdornment();}
    public get image() {return this.getProp("Image", DataType.String);}
    public set image(value) {this.setProp("Image", DataType.String, value);}
    public get size() {return this.getProp("Size", DataType.Vector2);}
    public set size(value) {this.setProp("Size", DataType.Vector2, value);}
}

export class LineHandleAdornment extends HandleAdornment {
    protected constructor(className?: string) {super(className ?? "LineHandleAdornment");}
    public static new() {return new LineHandleAdornment();}
    public get length() {return this.getProp("Length", DataType.Float32);}
    public set length(value) {this.setProp("Length", DataType.Float32, value);}
    public get thickness() {return this.getProp("Thickness", DataType.Float32);}
    public set thickness(value) {this.setProp("Thickness", DataType.Float32, value);}
}

export class SphereHandleAdornment extends HandleAdornment {
    protected constructor(className?: string) {super(className ?? "SphereHandleAdornment");}
    public static new() {return new SphereHandleAdornment();}
    public get radius() {return this.getProp("Radius", DataType.Float32);}
    public set radius(value) {this.setProp("Radius", DataType.Float32, value);}
}

export class WireframeHandleAdornment extends HandleAdornment {
    protected constructor(className?: string) {super(className ?? "WireframeHandleAdornment");}
    public static new() {return new WireframeHandleAdornment();}
    public get scale() {return this.getProp("Scale", DataType.Vector3);}
    public set scale(value) {this.setProp("Scale", DataType.Vector3, value);}
}

export class ParabolaAdornment extends PVAdornment {
    protected constructor(className?: string) {super(className ?? "ParabolaAdornment");}
    public static new() {return new ParabolaAdornment();}
}

export class SelectionSphere extends PVAdornment {
    protected constructor(className?: string) {super(className ?? "SelectionSphere");}
    public static new() {return new SelectionSphere();}
    public get surfaceColor() {return this.getProp("SurfaceColor", DataType.BrickColor);}
    public set surfaceColor(value) {this.setProp("SurfaceColor", DataType.BrickColor, value);}
    public get surfaceColor3() {return this.getProp("SurfaceColor3", DataType.Color3);}
    public set surfaceColor3(value) {this.setProp("SurfaceColor3", DataType.Color3, value);}
    public get surfaceTransparency() {return this.getProp("SurfaceTransparency", DataType.Float32);}
    public set surfaceTransparency(value) {this.setProp("SurfaceTransparency", DataType.Float32, value);}
}

export abstract class PartAdornment extends GuiBase3d {
    protected constructor(className: string) {super(className);}
    public get adornee() {return this.getProp("Adornee", DataType.Referent) as BasePart | undefined;}
    public set adornee(value) {this.setProp("Adornee", DataType.Referent, value);}
}

export abstract class HandlesBase extends PartAdornment {
    protected constructor(className: string) {super(className);}
}

export class ArcHandles extends HandlesBase {
    protected constructor(className?: string) {super(className ?? "ArcHandles");}
    public static new() {return new ArcHandles();}
    public get axes() {return this.getProp("Axes", DataType.Axes);}
    public set axes(value) {this.setProp("Axes", DataType.Axes, value);}
}

export class Handles extends HandlesBase {
    protected constructor(className?: string) {super(className ?? "Handles");}
    public static new() {return new Handles();}
    public get faces() {return this.getProp("Faces", DataType.Faces);}
    public set faces(value) {this.setProp("Faces", DataType.Faces, value);}
    public get style() {return this.getProp("Style", DataType.Enum) as HandlesStyle | undefined;}
    public set style(value) {this.setProp("Style", DataType.Enum, value);}
}

export class SurfaceSelection extends PartAdornment {
    protected constructor(className?: string) {super(className ?? "SurfaceSelection");}
    public static new() {return new SurfaceSelection();}
    public get targetSurface() {return this.getProp("TargetSurface", DataType.Enum) as NormalId | undefined;}
    public set targetSurface(value) {this.setProp("TargetSurface", DataType.Enum, value);}
}

export abstract class SelectionLasso extends GuiBase3d {
    protected constructor(className: string) {super(className);}
    public get humanoid() {return this.getProp("Humanoid", DataType.Referent) as Humanoid | undefined;}
    public set humanoid(value) {this.setProp("Humanoid", DataType.Referent, value);}
}

export class SelectionPartLasso extends SelectionLasso {
    protected constructor(className?: string) {super(className ?? "SelectionPartLasso");}
    public static new() {return new SelectionPartLasso();}
    public get part() {return this.getProp("Part", DataType.Referent) as BasePart | undefined;}
    public set part(value) {this.setProp("Part", DataType.Referent, value);}
}

export class SelectionPointLasso extends SelectionLasso {
    protected constructor(className?: string) {super(className ?? "SelectionPointLasso");}
    public static new() {return new SelectionPointLasso();}
    public get point() {return this.getProp("Point", DataType.Vector3);}
    public set point(value) {this.setProp("Point", DataType.Vector3, value);}
}

export class Path2D extends GuiBase {
    protected constructor(className?: string) {super(className ?? "Path2D");}
    public static new() {return new Path2D();}
    public get color3() {return this.getProp("Color3", DataType.Color3);}
    public set color3(value) {this.setProp("Color3", DataType.Color3, value);}
    public get propertiesSerialize() {return this.getProp("PropertiesSerialize", DataType.String);}
    public set propertiesSerialize(value) {this.setProp("PropertiesSerialize", DataType.String, value);}
    public get thickness() {return this.getProp("Thickness", DataType.Float32);}
    public set thickness(value) {this.setProp("Thickness", DataType.Float32, value);}
    public get transparency() {return this.getProp("Transparency", DataType.Float32);}
    public set transparency(value) {this.setProp("Transparency", DataType.Float32, value);}
    public get visible() {return this.getProp("Visible", DataType.Bool);}
    public set visible(value) {this.setProp("Visible", DataType.Bool, value);}
    public get zIndex() {return this.getProp("ZIndex", DataType.Int32);}
    public set zIndex(value) {this.setProp("ZIndex", DataType.Int32, value);}
}

export class GuiService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "GuiService", true);}
    public static new() {return new GuiService();}
    public get autoSelectGuiEnabled() {return this.getProp("AutoSelectGuiEnabled", DataType.Bool);}
    public set autoSelectGuiEnabled(value) {this.setProp("AutoSelectGuiEnabled", DataType.Bool, value);}
    public get guiNavigationEnabled() {return this.getProp("GuiNavigationEnabled", DataType.Bool);}
    public set guiNavigationEnabled(value) {this.setProp("GuiNavigationEnabled", DataType.Bool, value);}
    public get selectedObject() {return this.getProp("SelectedObject", DataType.Referent) as GuiObject | undefined;}
    public set selectedObject(value) {this.setProp("SelectedObject", DataType.Referent, value);}
}

export class GuidRegistryService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "GuidRegistryService", true);}
    public static new() {return new GuidRegistryService();}
}

export class HapticService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "HapticService", true);}
    public static new() {return new HapticService();}
}

export class HeightmapImporterService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "HeightmapImporterService", true);}
    public static new() {return new HeightmapImporterService();}
}

export class HiddenSurfaceRemovalAsset extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "HiddenSurfaceRemovalAsset");}
    public static new() {return new HiddenSurfaceRemovalAsset();}
    public get hSRData() {return this.getProp("HSRData", DataType.String);}
    public set hSRData(value) {this.setProp("HSRData", DataType.String, value);}
    public get hSRMeshIdData() {return this.getProp("HSRMeshIdData", DataType.String);}
    public set hSRMeshIdData(value) {this.setProp("HSRMeshIdData", DataType.String, value);}
}

export class Highlight extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Highlight");}
    public static new() {return new Highlight();}
    public get adornee() {return this.getProp("Adornee", DataType.Referent) as CoreInstance | undefined;}
    public set adornee(value) {this.setProp("Adornee", DataType.Referent, value);}
    public get depthMode() {return this.getProp("DepthMode", DataType.Enum) as HighlightDepthMode | undefined;}
    public set depthMode(value) {this.setProp("DepthMode", DataType.Enum, value);}
    public get enabled() {return this.getProp("Enabled", DataType.Bool);}
    public set enabled(value) {this.setProp("Enabled", DataType.Bool, value);}
    public get fillColor() {return this.getProp("FillColor", DataType.Color3);}
    public set fillColor(value) {this.setProp("FillColor", DataType.Color3, value);}
    public get fillTransparency() {return this.getProp("FillTransparency", DataType.Float32);}
    public set fillTransparency(value) {this.setProp("FillTransparency", DataType.Float32, value);}
    public get outlineColor() {return this.getProp("OutlineColor", DataType.Color3);}
    public set outlineColor(value) {this.setProp("OutlineColor", DataType.Color3, value);}
    public get outlineTransparency() {return this.getProp("OutlineTransparency", DataType.Float32);}
    public set outlineTransparency(value) {this.setProp("OutlineTransparency", DataType.Float32, value);}
}

export class Hopper extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Hopper", true);}
    public static new() {return new Hopper();}
}

export class HttpRbxApiService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "HttpRbxApiService", true);}
    public static new() {return new HttpRbxApiService();}
}

export class HttpService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "HttpService", true);}
    public static new() {return new HttpService();}
    public get httpEnabled() {return this.getProp("HttpEnabled", DataType.Bool);}
    public set httpEnabled(value) {this.setProp("HttpEnabled", DataType.Bool, value);}
}

export class Humanoid extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Humanoid");}
    public static new() {return new Humanoid();}
    public get autoJumpEnabled() {return this.getProp("AutoJumpEnabled", DataType.Bool);}
    public set autoJumpEnabled(value) {this.setProp("AutoJumpEnabled", DataType.Bool, value);}
    public get autoRotate() {return this.getProp("AutoRotate", DataType.Bool);}
    public set autoRotate(value) {this.setProp("AutoRotate", DataType.Bool, value);}
    public get automaticScalingEnabled() {return this.getProp("AutomaticScalingEnabled", DataType.Bool);}
    public set automaticScalingEnabled(value) {this.setProp("AutomaticScalingEnabled", DataType.Bool, value);}
    public get breakJointsOnDeath() {return this.getProp("BreakJointsOnDeath", DataType.Bool);}
    public set breakJointsOnDeath(value) {this.setProp("BreakJointsOnDeath", DataType.Bool, value);}
    public get collisionType() {return this.getProp("CollisionType", DataType.Enum) as HumanoidCollisionType | undefined;}
    public set collisionType(value) {this.setProp("CollisionType", DataType.Enum, value);}
    public get displayDistanceType() {return this.getProp("DisplayDistanceType", DataType.Enum) as HumanoidDisplayDistanceType | undefined;}
    public set displayDistanceType(value) {this.setProp("DisplayDistanceType", DataType.Enum, value);}
    public get displayName() {return this.getProp("DisplayName", DataType.String);}
    public set displayName(value) {this.setProp("DisplayName", DataType.String, value);}
    public get evaluateStateMachine() {return this.getProp("EvaluateStateMachine", DataType.Bool);}
    public set evaluateStateMachine(value) {this.setProp("EvaluateStateMachine", DataType.Bool, value);}
    public get healthDisplayDistance() {return this.getProp("HealthDisplayDistance", DataType.Float32);}
    public set healthDisplayDistance(value) {this.setProp("HealthDisplayDistance", DataType.Float32, value);}
    public get healthDisplayType() {return this.getProp("HealthDisplayType", DataType.Enum) as HumanoidHealthDisplayType | undefined;}
    public set healthDisplayType(value) {this.setProp("HealthDisplayType", DataType.Enum, value);}
    public get health_XML() {return this.getProp("Health_XML", DataType.Float32);}
    public set health_XML(value) {this.setProp("Health_XML", DataType.Float32, value);}
    public get hipHeight() {return this.getProp("HipHeight", DataType.Float32);}
    public set hipHeight(value) {this.setProp("HipHeight", DataType.Float32, value);}
    public get internalBodyScale() {return this.getProp("InternalBodyScale", DataType.Vector3);}
    public set internalBodyScale(value) {this.setProp("InternalBodyScale", DataType.Vector3, value);}
    public get internalHeadScale() {return this.getProp("InternalHeadScale", DataType.Float32);}
    public set internalHeadScale(value) {this.setProp("InternalHeadScale", DataType.Float32, value);}
    public get jumpHeight() {return this.getProp("JumpHeight", DataType.Float32);}
    public set jumpHeight(value) {this.setProp("JumpHeight", DataType.Float32, value);}
    public get jumpPower() {return this.getProp("JumpPower", DataType.Float32);}
    public set jumpPower(value) {this.setProp("JumpPower", DataType.Float32, value);}
    public get leftLeg() {return this.getProp("LeftLeg", DataType.Referent) as BasePart | undefined;}
    public set leftLeg(value) {this.setProp("LeftLeg", DataType.Referent, value);}
    public get maxHealth() {return this.getProp("MaxHealth", DataType.Float32);}
    public set maxHealth(value) {this.setProp("MaxHealth", DataType.Float32, value);}
    public get maxSlopeAngle() {return this.getProp("MaxSlopeAngle", DataType.Float32);}
    public set maxSlopeAngle(value) {this.setProp("MaxSlopeAngle", DataType.Float32, value);}
    public get nameDisplayDistance() {return this.getProp("NameDisplayDistance", DataType.Float32);}
    public set nameDisplayDistance(value) {this.setProp("NameDisplayDistance", DataType.Float32, value);}
    public get nameOcclusion() {return this.getProp("NameOcclusion", DataType.Enum) as NameOcclusion | undefined;}
    public set nameOcclusion(value) {this.setProp("NameOcclusion", DataType.Enum, value);}
    public get requiresNeck() {return this.getProp("RequiresNeck", DataType.Bool);}
    public set requiresNeck(value) {this.setProp("RequiresNeck", DataType.Bool, value);}
    public get rigType() {return this.getProp("RigType", DataType.Enum) as HumanoidRigType | undefined;}
    public set rigType(value) {this.setProp("RigType", DataType.Enum, value);}
    public get rightLeg() {return this.getProp("RightLeg", DataType.Referent) as BasePart | undefined;}
    public set rightLeg(value) {this.setProp("RightLeg", DataType.Referent, value);}
    public get torso() {return this.getProp("Torso", DataType.Referent) as BasePart | undefined;}
    public set torso(value) {this.setProp("Torso", DataType.Referent, value);}
    public get useJumpPower() {return this.getProp("UseJumpPower", DataType.Bool);}
    public set useJumpPower(value) {this.setProp("UseJumpPower", DataType.Bool, value);}
    public get walkSpeed() {return this.getProp("WalkSpeed", DataType.Float32);}
    public set walkSpeed(value) {this.setProp("WalkSpeed", DataType.Float32, value);}
}

export class HumanoidDescription extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "HumanoidDescription");}
    public static new() {return new HumanoidDescription();}
    public get accessoryBlob() {return this.getProp("AccessoryBlob", DataType.String);}
    public set accessoryBlob(value) {this.setProp("AccessoryBlob", DataType.String, value);}
    public get accessoryRigidAndLayeredBlob() {return this.getProp("AccessoryRigidAndLayeredBlob", DataType.String);}
    public set accessoryRigidAndLayeredBlob(value) {this.setProp("AccessoryRigidAndLayeredBlob", DataType.String, value);}
    public get backAccessory() {return this.getProp("BackAccessory", DataType.String);}
    public set backAccessory(value) {this.setProp("BackAccessory", DataType.String, value);}
    public get bodyTypeScale() {return this.getProp("BodyTypeScale", DataType.Float32);}
    public set bodyTypeScale(value) {this.setProp("BodyTypeScale", DataType.Float32, value);}
    public get climbAnimation() {return this.getProp("ClimbAnimation", DataType.Int64);}
    public set climbAnimation(value) {this.setProp("ClimbAnimation", DataType.Int64, value);}
    public get depthScale() {return this.getProp("DepthScale", DataType.Float32);}
    public set depthScale(value) {this.setProp("DepthScale", DataType.Float32, value);}
    public get emotesDataInternal() {return this.getProp("EmotesDataInternal", DataType.String);}
    public set emotesDataInternal(value) {this.setProp("EmotesDataInternal", DataType.String, value);}
    public get equippedEmotesDataInternal() {return this.getProp("EquippedEmotesDataInternal", DataType.String);}
    public set equippedEmotesDataInternal(value) {this.setProp("EquippedEmotesDataInternal", DataType.String, value);}
    public get face() {return this.getProp("Face", DataType.Int64);}
    public set face(value) {this.setProp("Face", DataType.Int64, value);}
    public get faceAccessory() {return this.getProp("FaceAccessory", DataType.String);}
    public set faceAccessory(value) {this.setProp("FaceAccessory", DataType.String, value);}
    public get fallAnimation() {return this.getProp("FallAnimation", DataType.Int64);}
    public set fallAnimation(value) {this.setProp("FallAnimation", DataType.Int64, value);}
    public get frontAccessory() {return this.getProp("FrontAccessory", DataType.String);}
    public set frontAccessory(value) {this.setProp("FrontAccessory", DataType.String, value);}
    public get graphicTShirt() {return this.getProp("GraphicTShirt", DataType.Int64);}
    public set graphicTShirt(value) {this.setProp("GraphicTShirt", DataType.Int64, value);}
    public get hairAccessory() {return this.getProp("HairAccessory", DataType.String);}
    public set hairAccessory(value) {this.setProp("HairAccessory", DataType.String, value);}
    public get hatAccessory() {return this.getProp("HatAccessory", DataType.String);}
    public set hatAccessory(value) {this.setProp("HatAccessory", DataType.String, value);}
    public get head() {return this.getProp("Head", DataType.Int64);}
    public set head(value) {this.setProp("Head", DataType.Int64, value);}
    public get headColor() {return this.getProp("HeadColor", DataType.Color3);}
    public set headColor(value) {this.setProp("HeadColor", DataType.Color3, value);}
    public get headScale() {return this.getProp("HeadScale", DataType.Float32);}
    public set headScale(value) {this.setProp("HeadScale", DataType.Float32, value);}
    public get heightScale() {return this.getProp("HeightScale", DataType.Float32);}
    public set heightScale(value) {this.setProp("HeightScale", DataType.Float32, value);}
    public get idleAnimation() {return this.getProp("IdleAnimation", DataType.Int64);}
    public set idleAnimation(value) {this.setProp("IdleAnimation", DataType.Int64, value);}
    public get jumpAnimation() {return this.getProp("JumpAnimation", DataType.Int64);}
    public set jumpAnimation(value) {this.setProp("JumpAnimation", DataType.Int64, value);}
    public get leftArm() {return this.getProp("LeftArm", DataType.Int64);}
    public set leftArm(value) {this.setProp("LeftArm", DataType.Int64, value);}
    public get leftArmColor() {return this.getProp("LeftArmColor", DataType.Color3);}
    public set leftArmColor(value) {this.setProp("LeftArmColor", DataType.Color3, value);}
    public get leftLeg() {return this.getProp("LeftLeg", DataType.Int64);}
    public set leftLeg(value) {this.setProp("LeftLeg", DataType.Int64, value);}
    public get leftLegColor() {return this.getProp("LeftLegColor", DataType.Color3);}
    public set leftLegColor(value) {this.setProp("LeftLegColor", DataType.Color3, value);}
    public get moodAnimation() {return this.getProp("MoodAnimation", DataType.Int64);}
    public set moodAnimation(value) {this.setProp("MoodAnimation", DataType.Int64, value);}
    public get neckAccessory() {return this.getProp("NeckAccessory", DataType.String);}
    public set neckAccessory(value) {this.setProp("NeckAccessory", DataType.String, value);}
    public get pants() {return this.getProp("Pants", DataType.Int64);}
    public set pants(value) {this.setProp("Pants", DataType.Int64, value);}
    public get proportionScale() {return this.getProp("ProportionScale", DataType.Float32);}
    public set proportionScale(value) {this.setProp("ProportionScale", DataType.Float32, value);}
    public get rightArm() {return this.getProp("RightArm", DataType.Int64);}
    public set rightArm(value) {this.setProp("RightArm", DataType.Int64, value);}
    public get rightArmColor() {return this.getProp("RightArmColor", DataType.Color3);}
    public set rightArmColor(value) {this.setProp("RightArmColor", DataType.Color3, value);}
    public get rightLeg() {return this.getProp("RightLeg", DataType.Int64);}
    public set rightLeg(value) {this.setProp("RightLeg", DataType.Int64, value);}
    public get rightLegColor() {return this.getProp("RightLegColor", DataType.Color3);}
    public set rightLegColor(value) {this.setProp("RightLegColor", DataType.Color3, value);}
    public get runAnimation() {return this.getProp("RunAnimation", DataType.Int64);}
    public set runAnimation(value) {this.setProp("RunAnimation", DataType.Int64, value);}
    public get shirt() {return this.getProp("Shirt", DataType.Int64);}
    public set shirt(value) {this.setProp("Shirt", DataType.Int64, value);}
    public get shouldersAccessory() {return this.getProp("ShouldersAccessory", DataType.String);}
    public set shouldersAccessory(value) {this.setProp("ShouldersAccessory", DataType.String, value);}
    public get swimAnimation() {return this.getProp("SwimAnimation", DataType.Int64);}
    public set swimAnimation(value) {this.setProp("SwimAnimation", DataType.Int64, value);}
    public get torso() {return this.getProp("Torso", DataType.Int64);}
    public set torso(value) {this.setProp("Torso", DataType.Int64, value);}
    public get torsoColor() {return this.getProp("TorsoColor", DataType.Color3);}
    public set torsoColor(value) {this.setProp("TorsoColor", DataType.Color3, value);}
    public get waistAccessory() {return this.getProp("WaistAccessory", DataType.String);}
    public set waistAccessory(value) {this.setProp("WaistAccessory", DataType.String, value);}
    public get walkAnimation() {return this.getProp("WalkAnimation", DataType.Int64);}
    public set walkAnimation(value) {this.setProp("WalkAnimation", DataType.Int64, value);}
    public get widthScale() {return this.getProp("WidthScale", DataType.Float32);}
    public set widthScale(value) {this.setProp("WidthScale", DataType.Float32, value);}
}

export class IKControl extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "IKControl");}
    public static new() {return new IKControl();}
    public get chainRoot() {return this.getProp("ChainRoot", DataType.Referent) as CoreInstance | undefined;}
    public set chainRoot(value) {this.setProp("ChainRoot", DataType.Referent, value);}
    public get enabled() {return this.getProp("Enabled", DataType.Bool);}
    public set enabled(value) {this.setProp("Enabled", DataType.Bool, value);}
    public get endEffector() {return this.getProp("EndEffector", DataType.Referent) as CoreInstance | undefined;}
    public set endEffector(value) {this.setProp("EndEffector", DataType.Referent, value);}
    public get endEffectorOffset() {return this.getProp("EndEffectorOffset", DataType.CFrame);}
    public set endEffectorOffset(value) {this.setProp("EndEffectorOffset", DataType.CFrame, value);}
    public get offset() {return this.getProp("Offset", DataType.CFrame);}
    public set offset(value) {this.setProp("Offset", DataType.CFrame, value);}
    public get pole() {return this.getProp("Pole", DataType.Referent) as CoreInstance | undefined;}
    public set pole(value) {this.setProp("Pole", DataType.Referent, value);}
    public get priority() {return this.getProp("Priority", DataType.Int32);}
    public set priority(value) {this.setProp("Priority", DataType.Int32, value);}
    public get smoothTime() {return this.getProp("SmoothTime", DataType.Float32);}
    public set smoothTime(value) {this.setProp("SmoothTime", DataType.Float32, value);}
    public get target() {return this.getProp("Target", DataType.Referent) as CoreInstance | undefined;}
    public set target(value) {this.setProp("Target", DataType.Referent, value);}
    public get type() {return this.getProp("Type", DataType.Enum) as IKControlType | undefined;}
    public set type(value) {this.setProp("Type", DataType.Enum, value);}
    public get weight() {return this.getProp("Weight", DataType.Float32);}
    public set weight(value) {this.setProp("Weight", DataType.Float32, value);}
}

export abstract class ILegacyStudioBridge extends CoreInstance {
    protected constructor(className: string) {super(className, true);}
}

export class LegacyStudioBridge extends ILegacyStudioBridge {
    protected constructor(className?: string) {super(className ?? "LegacyStudioBridge");}
    public static new() {return new LegacyStudioBridge();}
}

export class IXPService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "IXPService", true);}
    public static new() {return new IXPService();}
}

export class IncrementalPatchBuilder extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "IncrementalPatchBuilder", true);}
    public static new() {return new IncrementalPatchBuilder();}
    public get addPathsToBundle() {return this.getProp("AddPathsToBundle", DataType.Bool);}
    public set addPathsToBundle(value) {this.setProp("AddPathsToBundle", DataType.Bool, value);}
    public get buildDebouncePeriod() {return this.getProp("BuildDebouncePeriod", DataType.Float64);}
    public set buildDebouncePeriod(value) {this.setProp("BuildDebouncePeriod", DataType.Float64, value);}
    public get highCompression() {return this.getProp("HighCompression", DataType.Bool);}
    public set highCompression(value) {this.setProp("HighCompression", DataType.Bool, value);}
    public get serializePatch() {return this.getProp("SerializePatch", DataType.Bool);}
    public set serializePatch(value) {this.setProp("SerializePatch", DataType.Bool, value);}
    public get zstdCompression() {return this.getProp("ZstdCompression", DataType.Bool);}
    public set zstdCompression(value) {this.setProp("ZstdCompression", DataType.Bool, value);}
}

export class InsertService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "InsertService", true);}
    public static new() {return new InsertService();}
    public get allowClientInsertModels() {return this.getProp("AllowClientInsertModels", DataType.Bool);}
    public set allowClientInsertModels(value) {this.setProp("AllowClientInsertModels", DataType.Bool, value);}
    public get allowInsertFreeModels() {return this.getProp("AllowInsertFreeModels", DataType.Bool);}
    public set allowInsertFreeModels(value) {this.setProp("AllowInsertFreeModels", DataType.Bool, value);}
}

export class InternalSyncItem extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "InternalSyncItem");}
    public static new() {return new InternalSyncItem();}
    public get autoSync() {return this.getProp("AutoSync", DataType.Bool);}
    public set autoSync(value) {this.setProp("AutoSync", DataType.Bool, value);}
    public get enabled() {return this.getProp("Enabled", DataType.Bool);}
    public set enabled(value) {this.setProp("Enabled", DataType.Bool, value);}
    public get path() {return this.getProp("Path", DataType.String);}
    public set path(value) {this.setProp("Path", DataType.String, value);}
}

export class InternalSyncService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "InternalSyncService", true);}
    public static new() {return new InternalSyncService();}
}

export abstract class JointInstance extends CoreInstance {
    protected constructor(className: string) {super(className);}
    public get c0() {return this.getProp("C0", DataType.CFrame);}
    public set c0(value) {this.setProp("C0", DataType.CFrame, value);}
    public get c1() {return this.getProp("C1", DataType.CFrame);}
    public set c1(value) {this.setProp("C1", DataType.CFrame, value);}
    public get enabled() {return this.getProp("Enabled", DataType.Bool);}
    public set enabled(value) {this.setProp("Enabled", DataType.Bool, value);}
    public get part0() {return this.getProp("Part0", DataType.Referent) as BasePart | undefined;}
    public set part0(value) {this.setProp("Part0", DataType.Referent, value);}
    public get part1() {return this.getProp("Part1", DataType.Referent) as BasePart | undefined;}
    public set part1(value) {this.setProp("Part1", DataType.Referent, value);}
}

export abstract class DynamicRotate extends JointInstance {
    protected constructor(className: string) {super(className);}
    public get baseAngle() {return this.getProp("BaseAngle", DataType.Float32);}
    public set baseAngle(value) {this.setProp("BaseAngle", DataType.Float32, value);}
}

export class RotateP extends DynamicRotate {
    protected constructor(className?: string) {super(className ?? "RotateP");}
    public static new() {return new RotateP();}
}

export class RotateV extends DynamicRotate {
    protected constructor(className?: string) {super(className ?? "RotateV");}
    public static new() {return new RotateV();}
}

export class Glue extends JointInstance {
    protected constructor(className?: string) {super(className ?? "Glue");}
    public static new() {return new Glue();}
    public get f0() {return this.getProp("F0", DataType.Vector3);}
    public set f0(value) {this.setProp("F0", DataType.Vector3, value);}
    public get f1() {return this.getProp("F1", DataType.Vector3);}
    public set f1(value) {this.setProp("F1", DataType.Vector3, value);}
    public get f2() {return this.getProp("F2", DataType.Vector3);}
    public set f2(value) {this.setProp("F2", DataType.Vector3, value);}
    public get f3() {return this.getProp("F3", DataType.Vector3);}
    public set f3(value) {this.setProp("F3", DataType.Vector3, value);}
}

export abstract class ManualSurfaceJointInstance extends JointInstance {
    protected constructor(className: string) {super(className);}
}

export class ManualGlue extends ManualSurfaceJointInstance {
    protected constructor(className?: string) {super(className ?? "ManualGlue");}
    public static new() {return new ManualGlue();}
}

export class ManualWeld extends ManualSurfaceJointInstance {
    protected constructor(className?: string) {super(className ?? "ManualWeld");}
    public static new() {return new ManualWeld();}
}

export class Motor extends JointInstance {
    protected constructor(className?: string) {super(className ?? "Motor");}
    public static new() {return new Motor();}
    public get desiredAngle() {return this.getProp("DesiredAngle", DataType.Float32);}
    public set desiredAngle(value) {this.setProp("DesiredAngle", DataType.Float32, value);}
    public get maxVelocity() {return this.getProp("MaxVelocity", DataType.Float32);}
    public set maxVelocity(value) {this.setProp("MaxVelocity", DataType.Float32, value);}
}

export class Motor6D extends Motor {
    protected constructor(className?: string) {super(className ?? "Motor6D");}
    public static new() {return new Motor6D();}
}

export class Rotate extends JointInstance {
    protected constructor(className?: string) {super(className ?? "Rotate");}
    public static new() {return new Rotate();}
}

export class Snap extends JointInstance {
    protected constructor(className?: string) {super(className ?? "Snap");}
    public static new() {return new Snap();}
}

export class VelocityMotor extends JointInstance {
    protected constructor(className?: string) {super(className ?? "VelocityMotor");}
    public static new() {return new VelocityMotor();}
    public get currentAngle() {return this.getProp("CurrentAngle", DataType.Float32);}
    public set currentAngle(value) {this.setProp("CurrentAngle", DataType.Float32, value);}
    public get desiredAngle() {return this.getProp("DesiredAngle", DataType.Float32);}
    public set desiredAngle(value) {this.setProp("DesiredAngle", DataType.Float32, value);}
    public get hole() {return this.getProp("Hole", DataType.Referent) as Hole | undefined;}
    public set hole(value) {this.setProp("Hole", DataType.Referent, value);}
    public get maxVelocity() {return this.getProp("MaxVelocity", DataType.Float32);}
    public set maxVelocity(value) {this.setProp("MaxVelocity", DataType.Float32, value);}
}

export class Weld extends JointInstance {
    protected constructor(className?: string) {super(className ?? "Weld");}
    public static new() {return new Weld();}
}

export class JointsService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "JointsService", true);}
    public static new() {return new JointsService();}
}

export class KeyboardService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "KeyboardService", true);}
    public static new() {return new KeyboardService();}
}

export class Keyframe extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Keyframe");}
    public static new() {return new Keyframe();}
    public get time() {return this.getProp("Time", DataType.Float32);}
    public set time(value) {this.setProp("Time", DataType.Float32, value);}
}

export class KeyframeMarker extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "KeyframeMarker");}
    public static new() {return new KeyframeMarker();}
    public get value() {return this.getProp("Value", DataType.String);}
    public set value(value) {this.setProp("Value", DataType.String, value);}
}

export class KeyframeSequenceProvider extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "KeyframeSequenceProvider", true);}
    public static new() {return new KeyframeSequenceProvider();}
}

export class LSPFileSyncService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "LSPFileSyncService", true);}
    public static new() {return new LSPFileSyncService();}
}

export class LanguageService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "LanguageService", true);}
    public static new() {return new LanguageService();}
}

export abstract class Light extends CoreInstance {
    protected constructor(className: string) {super(className);}
    public get brightness() {return this.getProp("Brightness", DataType.Float32);}
    public set brightness(value) {this.setProp("Brightness", DataType.Float32, value);}
    public get color() {return this.getProp("Color", DataType.Color3);}
    public set color(value) {this.setProp("Color", DataType.Color3, value);}
    public get enabled() {return this.getProp("Enabled", DataType.Bool);}
    public set enabled(value) {this.setProp("Enabled", DataType.Bool, value);}
    public get shadows() {return this.getProp("Shadows", DataType.Bool);}
    public set shadows(value) {this.setProp("Shadows", DataType.Bool, value);}
}

export class PointLight extends Light {
    protected constructor(className?: string) {super(className ?? "PointLight");}
    public static new() {return new PointLight();}
    public get range() {return this.getProp("Range", DataType.Float32);}
    public set range(value) {this.setProp("Range", DataType.Float32, value);}
}

export class SpotLight extends Light {
    protected constructor(className?: string) {super(className ?? "SpotLight");}
    public static new() {return new SpotLight();}
    public get angle() {return this.getProp("Angle", DataType.Float32);}
    public set angle(value) {this.setProp("Angle", DataType.Float32, value);}
    public get face() {return this.getProp("Face", DataType.Enum) as NormalId | undefined;}
    public set face(value) {this.setProp("Face", DataType.Enum, value);}
    public get range() {return this.getProp("Range", DataType.Float32);}
    public set range(value) {this.setProp("Range", DataType.Float32, value);}
}

export class SurfaceLight extends Light {
    protected constructor(className?: string) {super(className ?? "SurfaceLight");}
    public static new() {return new SurfaceLight();}
    public get angle() {return this.getProp("Angle", DataType.Float32);}
    public set angle(value) {this.setProp("Angle", DataType.Float32, value);}
    public get face() {return this.getProp("Face", DataType.Enum) as NormalId | undefined;}
    public set face(value) {this.setProp("Face", DataType.Enum, value);}
    public get range() {return this.getProp("Range", DataType.Float32);}
    public set range(value) {this.setProp("Range", DataType.Float32, value);}
}

export class Lighting extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Lighting", true);}
    public static new() {return new Lighting();}
    public get ambient() {return this.getProp("Ambient", DataType.Color3);}
    public set ambient(value) {this.setProp("Ambient", DataType.Color3, value);}
    public get brightness() {return this.getProp("Brightness", DataType.Float32);}
    public set brightness(value) {this.setProp("Brightness", DataType.Float32, value);}
    public get colorShift_Bottom() {return this.getProp("ColorShift_Bottom", DataType.Color3);}
    public set colorShift_Bottom(value) {this.setProp("ColorShift_Bottom", DataType.Color3, value);}
    public get colorShift_Top() {return this.getProp("ColorShift_Top", DataType.Color3);}
    public set colorShift_Top(value) {this.setProp("ColorShift_Top", DataType.Color3, value);}
    public get environmentDiffuseScale() {return this.getProp("EnvironmentDiffuseScale", DataType.Float32);}
    public set environmentDiffuseScale(value) {this.setProp("EnvironmentDiffuseScale", DataType.Float32, value);}
    public get environmentSpecularScale() {return this.getProp("EnvironmentSpecularScale", DataType.Float32);}
    public set environmentSpecularScale(value) {this.setProp("EnvironmentSpecularScale", DataType.Float32, value);}
    public get exposureCompensation() {return this.getProp("ExposureCompensation", DataType.Float32);}
    public set exposureCompensation(value) {this.setProp("ExposureCompensation", DataType.Float32, value);}
    public get fogColor() {return this.getProp("FogColor", DataType.Color3);}
    public set fogColor(value) {this.setProp("FogColor", DataType.Color3, value);}
    public get fogEnd() {return this.getProp("FogEnd", DataType.Float32);}
    public set fogEnd(value) {this.setProp("FogEnd", DataType.Float32, value);}
    public get fogStart() {return this.getProp("FogStart", DataType.Float32);}
    public set fogStart(value) {this.setProp("FogStart", DataType.Float32, value);}
    public get geographicLatitude() {return this.getProp("GeographicLatitude", DataType.Float32);}
    public set geographicLatitude(value) {this.setProp("GeographicLatitude", DataType.Float32, value);}
    public get globalShadows() {return this.getProp("GlobalShadows", DataType.Bool);}
    public set globalShadows(value) {this.setProp("GlobalShadows", DataType.Bool, value);}
    public get outdoorAmbient() {return this.getProp("OutdoorAmbient", DataType.Color3);}
    public set outdoorAmbient(value) {this.setProp("OutdoorAmbient", DataType.Color3, value);}
    public get outlines() {return this.getProp("Outlines", DataType.Bool);}
    public set outlines(value) {this.setProp("Outlines", DataType.Bool, value);}
    public get shadowColor() {return this.getProp("ShadowColor", DataType.Color3);}
    public set shadowColor(value) {this.setProp("ShadowColor", DataType.Color3, value);}
    public get shadowSoftness() {return this.getProp("ShadowSoftness", DataType.Float32);}
    public set shadowSoftness(value) {this.setProp("ShadowSoftness", DataType.Float32, value);}
    public get technology() {return this.getProp("Technology", DataType.Enum) as Technology | undefined;}
    public set technology(value) {this.setProp("Technology", DataType.Enum, value);}
    public get timeOfDay() {return this.getProp("TimeOfDay", DataType.String);}
    public set timeOfDay(value) {this.setProp("TimeOfDay", DataType.String, value);}
}

export class LiveScriptingService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "LiveScriptingService", true);}
    public static new() {return new LiveScriptingService();}
}

export abstract class LocalStorageService extends CoreInstance {
    protected constructor(className: string) {super(className, true);}
}

export class AppStorageService extends LocalStorageService {
    protected constructor(className?: string) {super(className ?? "AppStorageService");}
    public static new() {return new AppStorageService();}
}

export class UserStorageService extends LocalStorageService {
    protected constructor(className?: string) {super(className ?? "UserStorageService");}
    public static new() {return new UserStorageService();}
}

export class LocalizationService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "LocalizationService", true);}
    public static new() {return new LocalizationService();}
}

export class LocalizationTable extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "LocalizationTable");}
    public static new() {return new LocalizationTable();}
    public get contents() {return this.getProp("Contents", DataType.String);}
    public set contents(value) {this.setProp("Contents", DataType.String, value);}
    public get developmentLanguage() {return this.getProp("DevelopmentLanguage", DataType.String);}
    public set developmentLanguage(value) {this.setProp("DevelopmentLanguage", DataType.String, value);}
    public get sourceLocaleId() {return this.getProp("SourceLocaleId", DataType.String);}
    public set sourceLocaleId(value) {this.setProp("SourceLocaleId", DataType.String, value);}
}

export class LodDataService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "LodDataService", true);}
    public static new() {return new LodDataService();}
}

export class LogReporterService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "LogReporterService", true);}
    public static new() {return new LogReporterService();}
}

export class LogService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "LogService", true);}
    public static new() {return new LogService();}
}

export class LoginService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "LoginService", true);}
    public static new() {return new LoginService();}
}

export abstract class LuaSourceContainer extends CoreInstance {
    protected constructor(className: string) {super(className);}
    public get scriptGuid() {return this.getProp("ScriptGuid", DataType.String);}
    public set scriptGuid(value) {this.setProp("ScriptGuid", DataType.String, value);}
}

export abstract class BaseScript extends LuaSourceContainer {
    protected constructor(className: string) {super(className);}
    public get disabled() {return this.getProp("Disabled", DataType.Bool);}
    public set disabled(value) {this.setProp("Disabled", DataType.Bool, value);}
    public get linkedSource() {return this.getProp("LinkedSource", DataType.String);}
    public set linkedSource(value) {this.setProp("LinkedSource", DataType.String, value);}
    public get runContext() {return this.getProp("RunContext", DataType.Enum) as RunContext | undefined;}
    public set runContext(value) {this.setProp("RunContext", DataType.Enum, value);}
}

export class Script extends BaseScript {
    protected constructor(className?: string) {super(className ?? "Script");}
    public static new() {return new Script();}
    public get source() {return this.getProp("Source", DataType.String);}
    public set source(value) {this.setProp("Source", DataType.String, value);}
}

export class LocalScript extends Script {
    protected constructor(className?: string) {super(className ?? "LocalScript");}
    public static new() {return new LocalScript();}
}

export class ModuleScript extends LuaSourceContainer {
    protected constructor(className?: string) {super(className ?? "ModuleScript");}
    public static new() {return new ModuleScript();}
    public get linkedSource() {return this.getProp("LinkedSource", DataType.String);}
    public set linkedSource(value) {this.setProp("LinkedSource", DataType.String, value);}
    public get source() {return this.getProp("Source", DataType.String);}
    public set source(value) {this.setProp("Source", DataType.String, value);}
}

export class LuaWebService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "LuaWebService", true);}
    public static new() {return new LuaWebService();}
}

export class LuauScriptAnalyzerService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "LuauScriptAnalyzerService", true);}
    public static new() {return new LuauScriptAnalyzerService();}
}

export class MarkerCurve extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "MarkerCurve");}
    public static new() {return new MarkerCurve();}
    public get valuesAndTimes() {return this.getProp("ValuesAndTimes", DataType.String);}
    public set valuesAndTimes(value) {this.setProp("ValuesAndTimes", DataType.String, value);}
}

export class MarketplaceService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "MarketplaceService", true);}
    public static new() {return new MarketplaceService();}
}

export class MaterialGenerationService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "MaterialGenerationService", true);}
    public static new() {return new MaterialGenerationService();}
}

export class MaterialService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "MaterialService", true);}
    public static new() {return new MaterialService();}
    public get asphaltName() {return this.getProp("AsphaltName", DataType.String);}
    public set asphaltName(value) {this.setProp("AsphaltName", DataType.String, value);}
    public get basaltName() {return this.getProp("BasaltName", DataType.String);}
    public set basaltName(value) {this.setProp("BasaltName", DataType.String, value);}
    public get brickName() {return this.getProp("BrickName", DataType.String);}
    public set brickName(value) {this.setProp("BrickName", DataType.String, value);}
    public get cardboardName() {return this.getProp("CardboardName", DataType.String);}
    public set cardboardName(value) {this.setProp("CardboardName", DataType.String, value);}
    public get carpetName() {return this.getProp("CarpetName", DataType.String);}
    public set carpetName(value) {this.setProp("CarpetName", DataType.String, value);}
    public get ceramicTilesName() {return this.getProp("CeramicTilesName", DataType.String);}
    public set ceramicTilesName(value) {this.setProp("CeramicTilesName", DataType.String, value);}
    public get clayRoofTilesName() {return this.getProp("ClayRoofTilesName", DataType.String);}
    public set clayRoofTilesName(value) {this.setProp("ClayRoofTilesName", DataType.String, value);}
    public get cobblestoneName() {return this.getProp("CobblestoneName", DataType.String);}
    public set cobblestoneName(value) {this.setProp("CobblestoneName", DataType.String, value);}
    public get concreteName() {return this.getProp("ConcreteName", DataType.String);}
    public set concreteName(value) {this.setProp("ConcreteName", DataType.String, value);}
    public get corrodedMetalName() {return this.getProp("CorrodedMetalName", DataType.String);}
    public set corrodedMetalName(value) {this.setProp("CorrodedMetalName", DataType.String, value);}
    public get crackedLavaName() {return this.getProp("CrackedLavaName", DataType.String);}
    public set crackedLavaName(value) {this.setProp("CrackedLavaName", DataType.String, value);}
    public get diamondPlateName() {return this.getProp("DiamondPlateName", DataType.String);}
    public set diamondPlateName(value) {this.setProp("DiamondPlateName", DataType.String, value);}
    public get fabricName() {return this.getProp("FabricName", DataType.String);}
    public set fabricName(value) {this.setProp("FabricName", DataType.String, value);}
    public get foilName() {return this.getProp("FoilName", DataType.String);}
    public set foilName(value) {this.setProp("FoilName", DataType.String, value);}
    public get glacierName() {return this.getProp("GlacierName", DataType.String);}
    public set glacierName(value) {this.setProp("GlacierName", DataType.String, value);}
    public get graniteName() {return this.getProp("GraniteName", DataType.String);}
    public set graniteName(value) {this.setProp("GraniteName", DataType.String, value);}
    public get grassName() {return this.getProp("GrassName", DataType.String);}
    public set grassName(value) {this.setProp("GrassName", DataType.String, value);}
    public get groundName() {return this.getProp("GroundName", DataType.String);}
    public set groundName(value) {this.setProp("GroundName", DataType.String, value);}
    public get iceName() {return this.getProp("IceName", DataType.String);}
    public set iceName(value) {this.setProp("IceName", DataType.String, value);}
    public get leafyGrassName() {return this.getProp("LeafyGrassName", DataType.String);}
    public set leafyGrassName(value) {this.setProp("LeafyGrassName", DataType.String, value);}
    public get leatherName() {return this.getProp("LeatherName", DataType.String);}
    public set leatherName(value) {this.setProp("LeatherName", DataType.String, value);}
    public get limestoneName() {return this.getProp("LimestoneName", DataType.String);}
    public set limestoneName(value) {this.setProp("LimestoneName", DataType.String, value);}
    public get marbleName() {return this.getProp("MarbleName", DataType.String);}
    public set marbleName(value) {this.setProp("MarbleName", DataType.String, value);}
    public get metalName() {return this.getProp("MetalName", DataType.String);}
    public set metalName(value) {this.setProp("MetalName", DataType.String, value);}
    public get mudName() {return this.getProp("MudName", DataType.String);}
    public set mudName(value) {this.setProp("MudName", DataType.String, value);}
    public get pavementName() {return this.getProp("PavementName", DataType.String);}
    public set pavementName(value) {this.setProp("PavementName", DataType.String, value);}
    public get pebbleName() {return this.getProp("PebbleName", DataType.String);}
    public set pebbleName(value) {this.setProp("PebbleName", DataType.String, value);}
    public get plasterName() {return this.getProp("PlasterName", DataType.String);}
    public set plasterName(value) {this.setProp("PlasterName", DataType.String, value);}
    public get plasticName() {return this.getProp("PlasticName", DataType.String);}
    public set plasticName(value) {this.setProp("PlasticName", DataType.String, value);}
    public get rockName() {return this.getProp("RockName", DataType.String);}
    public set rockName(value) {this.setProp("RockName", DataType.String, value);}
    public get roofShinglesName() {return this.getProp("RoofShinglesName", DataType.String);}
    public set roofShinglesName(value) {this.setProp("RoofShinglesName", DataType.String, value);}
    public get rubberName() {return this.getProp("RubberName", DataType.String);}
    public set rubberName(value) {this.setProp("RubberName", DataType.String, value);}
    public get saltName() {return this.getProp("SaltName", DataType.String);}
    public set saltName(value) {this.setProp("SaltName", DataType.String, value);}
    public get sandName() {return this.getProp("SandName", DataType.String);}
    public set sandName(value) {this.setProp("SandName", DataType.String, value);}
    public get sandstoneName() {return this.getProp("SandstoneName", DataType.String);}
    public set sandstoneName(value) {this.setProp("SandstoneName", DataType.String, value);}
    public get slateName() {return this.getProp("SlateName", DataType.String);}
    public set slateName(value) {this.setProp("SlateName", DataType.String, value);}
    public get smoothPlasticName() {return this.getProp("SmoothPlasticName", DataType.String);}
    public set smoothPlasticName(value) {this.setProp("SmoothPlasticName", DataType.String, value);}
    public get snowName() {return this.getProp("SnowName", DataType.String);}
    public set snowName(value) {this.setProp("SnowName", DataType.String, value);}
    public get use2022MaterialsXml() {return this.getProp("Use2022MaterialsXml", DataType.Bool);}
    public set use2022MaterialsXml(value) {this.setProp("Use2022MaterialsXml", DataType.Bool, value);}
    public get woodName() {return this.getProp("WoodName", DataType.String);}
    public set woodName(value) {this.setProp("WoodName", DataType.String, value);}
    public get woodPlanksName() {return this.getProp("WoodPlanksName", DataType.String);}
    public set woodPlanksName(value) {this.setProp("WoodPlanksName", DataType.String, value);}
}

export class MaterialVariant extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "MaterialVariant");}
    public static new() {return new MaterialVariant();}
    public get baseMaterial() {return this.getProp("BaseMaterial", DataType.Enum) as Material | undefined;}
    public set baseMaterial(value) {this.setProp("BaseMaterial", DataType.Enum, value);}
    public get colorMap() {return this.getProp("ColorMap", DataType.String);}
    public set colorMap(value) {this.setProp("ColorMap", DataType.String, value);}
    public get customPhysicalProperties() {return this.getProp("CustomPhysicalProperties", DataType.PhysicalProperties);}
    public set customPhysicalProperties(value) {this.setProp("CustomPhysicalProperties", DataType.PhysicalProperties, value);}
    public get materialPattern() {return this.getProp("MaterialPattern", DataType.Enum) as MaterialPattern | undefined;}
    public set materialPattern(value) {this.setProp("MaterialPattern", DataType.Enum, value);}
    public get metalnessMap() {return this.getProp("MetalnessMap", DataType.String);}
    public set metalnessMap(value) {this.setProp("MetalnessMap", DataType.String, value);}
    public get normalMap() {return this.getProp("NormalMap", DataType.String);}
    public set normalMap(value) {this.setProp("NormalMap", DataType.String, value);}
    public get roughnessMap() {return this.getProp("RoughnessMap", DataType.String);}
    public set roughnessMap(value) {this.setProp("RoughnessMap", DataType.String, value);}
    public get studsPerTile() {return this.getProp("StudsPerTile", DataType.Float32);}
    public set studsPerTile(value) {this.setProp("StudsPerTile", DataType.Float32, value);}
    public get texturePack() {return this.getProp("TexturePack", DataType.String);}
    public set texturePack(value) {this.setProp("TexturePack", DataType.String, value);}
}

export class MemStorageService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "MemStorageService", true);}
    public static new() {return new MemStorageService();}
}

export class MemoryStoreService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "MemoryStoreService", true);}
    public static new() {return new MemoryStoreService();}
}

export class Message extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Message");}
    public static new() {return new Message();}
    public get text() {return this.getProp("Text", DataType.String);}
    public set text(value) {this.setProp("Text", DataType.String, value);}
}

export class Hint extends Message {
    protected constructor(className?: string) {super(className ?? "Hint");}
    public static new() {return new Hint();}
}

export class MessageBusService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "MessageBusService", true);}
    public static new() {return new MessageBusService();}
}

export class MessagingService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "MessagingService", true);}
    public static new() {return new MessagingService();}
}

export class MetaBreakpointManager extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "MetaBreakpointManager", true);}
    public static new() {return new MetaBreakpointManager();}
}

export abstract class Mouse extends CoreInstance {
    protected constructor(className: string) {super(className);}
    public get icon() {return this.getProp("Icon", DataType.String);}
    public set icon(value) {this.setProp("Icon", DataType.String, value);}
    public get targetFilter() {return this.getProp("TargetFilter", DataType.Referent) as CoreInstance | undefined;}
    public set targetFilter(value) {this.setProp("TargetFilter", DataType.Referent, value);}
}

export class MouseService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "MouseService", true);}
    public static new() {return new MouseService();}
}

export abstract class NetworkPeer extends CoreInstance {
    protected constructor(className: string) {super(className);}
}

export class NetworkClient extends NetworkPeer {
    protected constructor(className?: string) {super(className ?? "NetworkClient");}
    public static new() {return new NetworkClient();}
}

export class NetworkServer extends NetworkPeer {
    protected constructor(className?: string) {super(className ?? "NetworkServer");}
    public static new() {return new NetworkServer();}
}

export abstract class NetworkReplicator extends CoreInstance {
    protected constructor(className: string) {super(className);}
}

export class NetworkSettings extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "NetworkSettings", true);}
    public static new() {return new NetworkSettings();}
    public get httpProxyEnabled() {return this.getProp("HttpProxyEnabled", DataType.Bool);}
    public set httpProxyEnabled(value) {this.setProp("HttpProxyEnabled", DataType.Bool, value);}
    public get httpProxyURL() {return this.getProp("HttpProxyURL", DataType.String);}
    public set httpProxyURL(value) {this.setProp("HttpProxyURL", DataType.String, value);}
    public get incomingReplicationLag() {return this.getProp("IncomingReplicationLag", DataType.Float64);}
    public set incomingReplicationLag(value) {this.setProp("IncomingReplicationLag", DataType.Float64, value);}
    public get printJoinSizeBreakdown() {return this.getProp("PrintJoinSizeBreakdown", DataType.Bool);}
    public set printJoinSizeBreakdown(value) {this.setProp("PrintJoinSizeBreakdown", DataType.Bool, value);}
    public get printPhysicsErrors() {return this.getProp("PrintPhysicsErrors", DataType.Bool);}
    public set printPhysicsErrors(value) {this.setProp("PrintPhysicsErrors", DataType.Bool, value);}
    public get printStreamInstanceQuota() {return this.getProp("PrintStreamInstanceQuota", DataType.Bool);}
    public set printStreamInstanceQuota(value) {this.setProp("PrintStreamInstanceQuota", DataType.Bool, value);}
    public get randomizeJoinInstanceOrder() {return this.getProp("RandomizeJoinInstanceOrder", DataType.Bool);}
    public set randomizeJoinInstanceOrder(value) {this.setProp("RandomizeJoinInstanceOrder", DataType.Bool, value);}
    public get renderStreamedRegions() {return this.getProp("RenderStreamedRegions", DataType.Bool);}
    public set renderStreamedRegions(value) {this.setProp("RenderStreamedRegions", DataType.Bool, value);}
    public get showActiveAnimationAsset() {return this.getProp("ShowActiveAnimationAsset", DataType.Bool);}
    public set showActiveAnimationAsset(value) {this.setProp("ShowActiveAnimationAsset", DataType.Bool, value);}
}

export class NoCollisionConstraint extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "NoCollisionConstraint");}
    public static new() {return new NoCollisionConstraint();}
    public get enabled() {return this.getProp("Enabled", DataType.Bool);}
    public set enabled(value) {this.setProp("Enabled", DataType.Bool, value);}
    public get part0() {return this.getProp("Part0", DataType.Referent) as BasePart | undefined;}
    public set part0(value) {this.setProp("Part0", DataType.Referent, value);}
    public get part1() {return this.getProp("Part1", DataType.Referent) as BasePart | undefined;}
    public set part1(value) {this.setProp("Part1", DataType.Referent, value);}
}

export class Noise extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Noise");}
    public static new() {return new Noise();}
    public get noiseType() {return this.getProp("NoiseType", DataType.Enum) as NoiseType | undefined;}
    public set noiseType(value) {this.setProp("NoiseType", DataType.Enum, value);}
    public get seed() {return this.getProp("Seed", DataType.Int32);}
    public set seed(value) {this.setProp("Seed", DataType.Int32, value);}
}

export class NotificationService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "NotificationService", true);}
    public static new() {return new NotificationService();}
}

export class OmniRecommendationsService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "OmniRecommendationsService", true);}
    public static new() {return new OmniRecommendationsService();}
}

export class OpenCloudService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "OpenCloudService", true);}
    public static new() {return new OpenCloudService();}
}

export class OperationGraph extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "OperationGraph");}
    public static new() {return new OperationGraph();}
}

export abstract class PVInstance extends CoreInstance {
    protected constructor(className: string) {super(className);}
}

export abstract class BasePart extends PVInstance {
    protected constructor(className: string) {super(className);}
    public get anchored() {return this.getProp("Anchored", DataType.Bool);}
    public set anchored(value) {this.setProp("Anchored", DataType.Bool, value);}
    public get backParamA() {return this.getProp("BackParamA", DataType.Float32);}
    public set backParamA(value) {this.setProp("BackParamA", DataType.Float32, value);}
    public get backParamB() {return this.getProp("BackParamB", DataType.Float32);}
    public set backParamB(value) {this.setProp("BackParamB", DataType.Float32, value);}
    public get backSurface() {return this.getProp("BackSurface", DataType.Enum) as SurfaceType | undefined;}
    public set backSurface(value) {this.setProp("BackSurface", DataType.Enum, value);}
    public get backSurfaceInput() {return this.getProp("BackSurfaceInput", DataType.Enum) as InputType | undefined;}
    public set backSurfaceInput(value) {this.setProp("BackSurfaceInput", DataType.Enum, value);}
    public get bottomParamA() {return this.getProp("BottomParamA", DataType.Float32);}
    public set bottomParamA(value) {this.setProp("BottomParamA", DataType.Float32, value);}
    public get bottomParamB() {return this.getProp("BottomParamB", DataType.Float32);}
    public set bottomParamB(value) {this.setProp("BottomParamB", DataType.Float32, value);}
    public get bottomSurface() {return this.getProp("BottomSurface", DataType.Enum) as SurfaceType | undefined;}
    public set bottomSurface(value) {this.setProp("BottomSurface", DataType.Enum, value);}
    public get bottomSurfaceInput() {return this.getProp("BottomSurfaceInput", DataType.Enum) as InputType | undefined;}
    public set bottomSurfaceInput(value) {this.setProp("BottomSurfaceInput", DataType.Enum, value);}
    public get cFrame() {return this.getProp("CFrame", DataType.CFrame);}
    public set cFrame(value) {this.setProp("CFrame", DataType.CFrame, value);}
    public get canCollide() {return this.getProp("CanCollide", DataType.Bool);}
    public set canCollide(value) {this.setProp("CanCollide", DataType.Bool, value);}
    public get canQuery() {return this.getProp("CanQuery", DataType.Bool);}
    public set canQuery(value) {this.setProp("CanQuery", DataType.Bool, value);}
    public get canTouch() {return this.getProp("CanTouch", DataType.Bool);}
    public set canTouch(value) {this.setProp("CanTouch", DataType.Bool, value);}
    public get castShadow() {return this.getProp("CastShadow", DataType.Bool);}
    public set castShadow(value) {this.setProp("CastShadow", DataType.Bool, value);}
    public get collisionGroup() {return this.getProp("CollisionGroup", DataType.String);}
    public set collisionGroup(value) {this.setProp("CollisionGroup", DataType.String, value);}
    public get collisionGroupId() {return this.getProp("CollisionGroupId", DataType.Int32);}
    public set collisionGroupId(value) {this.setProp("CollisionGroupId", DataType.Int32, value);}
    public get color3uint8() {return this.getProp("Color3uint8", DataType.Color3uint8);}
    public set color3uint8(value) {this.setProp("Color3uint8", DataType.Color3uint8, value);}
    public get customPhysicalProperties() {return this.getProp("CustomPhysicalProperties", DataType.PhysicalProperties);}
    public set customPhysicalProperties(value) {this.setProp("CustomPhysicalProperties", DataType.PhysicalProperties, value);}
    public get elasticity() {return this.getProp("Elasticity", DataType.Float32);}
    public set elasticity(value) {this.setProp("Elasticity", DataType.Float32, value);}
    public get enableFluidForces() {return this.getProp("EnableFluidForces", DataType.Bool);}
    public set enableFluidForces(value) {this.setProp("EnableFluidForces", DataType.Bool, value);}
    public get friction() {return this.getProp("Friction", DataType.Float32);}
    public set friction(value) {this.setProp("Friction", DataType.Float32, value);}
    public get frontParamA() {return this.getProp("FrontParamA", DataType.Float32);}
    public set frontParamA(value) {this.setProp("FrontParamA", DataType.Float32, value);}
    public get frontParamB() {return this.getProp("FrontParamB", DataType.Float32);}
    public set frontParamB(value) {this.setProp("FrontParamB", DataType.Float32, value);}
    public get frontSurface() {return this.getProp("FrontSurface", DataType.Enum) as SurfaceType | undefined;}
    public set frontSurface(value) {this.setProp("FrontSurface", DataType.Enum, value);}
    public get frontSurfaceInput() {return this.getProp("FrontSurfaceInput", DataType.Enum) as InputType | undefined;}
    public set frontSurfaceInput(value) {this.setProp("FrontSurfaceInput", DataType.Enum, value);}
    public get leftParamA() {return this.getProp("LeftParamA", DataType.Float32);}
    public set leftParamA(value) {this.setProp("LeftParamA", DataType.Float32, value);}
    public get leftParamB() {return this.getProp("LeftParamB", DataType.Float32);}
    public set leftParamB(value) {this.setProp("LeftParamB", DataType.Float32, value);}
    public get leftSurface() {return this.getProp("LeftSurface", DataType.Enum) as SurfaceType | undefined;}
    public set leftSurface(value) {this.setProp("LeftSurface", DataType.Enum, value);}
    public get leftSurfaceInput() {return this.getProp("LeftSurfaceInput", DataType.Enum) as InputType | undefined;}
    public set leftSurfaceInput(value) {this.setProp("LeftSurfaceInput", DataType.Enum, value);}
    public get locked() {return this.getProp("Locked", DataType.Bool);}
    public set locked(value) {this.setProp("Locked", DataType.Bool, value);}
    public get massless() {return this.getProp("Massless", DataType.Bool);}
    public set massless(value) {this.setProp("Massless", DataType.Bool, value);}
    public get material() {return this.getProp("Material", DataType.Enum) as Material | undefined;}
    public set material(value) {this.setProp("Material", DataType.Enum, value);}
    public get materialVariantSerialized() {return this.getProp("MaterialVariantSerialized", DataType.String);}
    public set materialVariantSerialized(value) {this.setProp("MaterialVariantSerialized", DataType.String, value);}
    public get pivotOffset() {return this.getProp("PivotOffset", DataType.CFrame);}
    public set pivotOffset(value) {this.setProp("PivotOffset", DataType.CFrame, value);}
    public get reflectance() {return this.getProp("Reflectance", DataType.Float32);}
    public set reflectance(value) {this.setProp("Reflectance", DataType.Float32, value);}
    public get rightParamA() {return this.getProp("RightParamA", DataType.Float32);}
    public set rightParamA(value) {this.setProp("RightParamA", DataType.Float32, value);}
    public get rightParamB() {return this.getProp("RightParamB", DataType.Float32);}
    public set rightParamB(value) {this.setProp("RightParamB", DataType.Float32, value);}
    public get rightSurface() {return this.getProp("RightSurface", DataType.Enum) as SurfaceType | undefined;}
    public set rightSurface(value) {this.setProp("RightSurface", DataType.Enum, value);}
    public get rightSurfaceInput() {return this.getProp("RightSurfaceInput", DataType.Enum) as InputType | undefined;}
    public set rightSurfaceInput(value) {this.setProp("RightSurfaceInput", DataType.Enum, value);}
    public get rootPriority() {return this.getProp("RootPriority", DataType.Int32);}
    public set rootPriority(value) {this.setProp("RootPriority", DataType.Int32, value);}
    public get rotVelocity() {return this.getProp("RotVelocity", DataType.Vector3);}
    public set rotVelocity(value) {this.setProp("RotVelocity", DataType.Vector3, value);}
    public get topParamA() {return this.getProp("TopParamA", DataType.Float32);}
    public set topParamA(value) {this.setProp("TopParamA", DataType.Float32, value);}
    public get topParamB() {return this.getProp("TopParamB", DataType.Float32);}
    public set topParamB(value) {this.setProp("TopParamB", DataType.Float32, value);}
    public get topSurface() {return this.getProp("TopSurface", DataType.Enum) as SurfaceType | undefined;}
    public set topSurface(value) {this.setProp("TopSurface", DataType.Enum, value);}
    public get topSurfaceInput() {return this.getProp("TopSurfaceInput", DataType.Enum) as InputType | undefined;}
    public set topSurfaceInput(value) {this.setProp("TopSurfaceInput", DataType.Enum, value);}
    public get transparency() {return this.getProp("Transparency", DataType.Float32);}
    public set transparency(value) {this.setProp("Transparency", DataType.Float32, value);}
    public get velocity() {return this.getProp("Velocity", DataType.Vector3);}
    public set velocity(value) {this.setProp("Velocity", DataType.Vector3, value);}
    public get brickColor() {return this.getProp("brickColor", DataType.BrickColor);}
    public set brickColor(value) {this.setProp("brickColor", DataType.BrickColor, value);}
    public get size() {return this.getProp("size", DataType.Vector3);}
    public set size(value) {this.setProp("size", DataType.Vector3, value);}
}

export class CornerWedgePart extends BasePart {
    protected constructor(className?: string) {super(className ?? "CornerWedgePart");}
    public static new() {return new CornerWedgePart();}
}

export abstract class FormFactorPart extends BasePart {
    protected constructor(className: string) {super(className);}
    public get formFactor() {return this.getProp("FormFactor", DataType.Enum) as FormFactor | undefined;}
    public set formFactor(value) {this.setProp("FormFactor", DataType.Enum, value);}
    public get formFactorRaw() {return this.getProp("formFactorRaw", DataType.Enum) as FormFactor | undefined;}
    public set formFactorRaw(value) {this.setProp("formFactorRaw", DataType.Enum, value);}
}

export class Part extends FormFactorPart {
    protected constructor(className?: string) {super(className ?? "Part");}
    public static new() {return new Part();}
    public get shape() {return this.getProp("shape", DataType.Enum) as PartType | undefined;}
    public set shape(value) {this.setProp("shape", DataType.Enum, value);}
}

export class FlagStand extends Part {
    protected constructor(className?: string) {super(className ?? "FlagStand");}
    public static new() {return new FlagStand();}
    public get teamColor() {return this.getProp("TeamColor", DataType.BrickColor);}
    public set teamColor(value) {this.setProp("TeamColor", DataType.BrickColor, value);}
}

export class Seat extends Part {
    protected constructor(className?: string) {super(className ?? "Seat");}
    public static new() {return new Seat();}
    public get disabled() {return this.getProp("Disabled", DataType.Bool);}
    public set disabled(value) {this.setProp("Disabled", DataType.Bool, value);}
}

export class SkateboardPlatform extends Part {
    protected constructor(className?: string) {super(className ?? "SkateboardPlatform");}
    public static new() {return new SkateboardPlatform();}
    public get steer() {return this.getProp("Steer", DataType.Int32);}
    public set steer(value) {this.setProp("Steer", DataType.Int32, value);}
    public get stickyWheels() {return this.getProp("StickyWheels", DataType.Bool);}
    public set stickyWheels(value) {this.setProp("StickyWheels", DataType.Bool, value);}
    public get throttle() {return this.getProp("Throttle", DataType.Int32);}
    public set throttle(value) {this.setProp("Throttle", DataType.Int32, value);}
}

export class SpawnLocation extends Part {
    protected constructor(className?: string) {super(className ?? "SpawnLocation");}
    public static new() {return new SpawnLocation();}
    public get allowTeamChangeOnTouch() {return this.getProp("AllowTeamChangeOnTouch", DataType.Bool);}
    public set allowTeamChangeOnTouch(value) {this.setProp("AllowTeamChangeOnTouch", DataType.Bool, value);}
    public get duration() {return this.getProp("Duration", DataType.Int32);}
    public set duration(value) {this.setProp("Duration", DataType.Int32, value);}
    public get enabled() {return this.getProp("Enabled", DataType.Bool);}
    public set enabled(value) {this.setProp("Enabled", DataType.Bool, value);}
    public get neutral() {return this.getProp("Neutral", DataType.Bool);}
    public set neutral(value) {this.setProp("Neutral", DataType.Bool, value);}
    public get teamColor() {return this.getProp("TeamColor", DataType.BrickColor);}
    public set teamColor(value) {this.setProp("TeamColor", DataType.BrickColor, value);}
}

export class WedgePart extends FormFactorPart {
    protected constructor(className?: string) {super(className ?? "WedgePart");}
    public static new() {return new WedgePart();}
}

export class Terrain extends BasePart {
    protected constructor(className?: string) {super(className ?? "Terrain");}
    public static new() {return new Terrain();}
    public get acquisitionMethod() {return this.getProp("AcquisitionMethod", DataType.Enum) as TerrainAcquisitionMethod | undefined;}
    public set acquisitionMethod(value) {this.setProp("AcquisitionMethod", DataType.Enum, value);}
    public get decoration() {return this.getProp("Decoration", DataType.Bool);}
    public set decoration(value) {this.setProp("Decoration", DataType.Bool, value);}
    public get grassLength() {return this.getProp("GrassLength", DataType.Float32);}
    public set grassLength(value) {this.setProp("GrassLength", DataType.Float32, value);}
    public get materialColors() {return this.getProp("MaterialColors", DataType.String);}
    public set materialColors(value) {this.setProp("MaterialColors", DataType.String, value);}
    public get physicsGrid() {return this.getProp("PhysicsGrid", DataType.String);}
    public set physicsGrid(value) {this.setProp("PhysicsGrid", DataType.String, value);}
    public get shorelinesUpgraded() {return this.getProp("ShorelinesUpgraded", DataType.Bool);}
    public set shorelinesUpgraded(value) {this.setProp("ShorelinesUpgraded", DataType.Bool, value);}
    public get smoothGrid() {return this.getProp("SmoothGrid", DataType.String);}
    public set smoothGrid(value) {this.setProp("SmoothGrid", DataType.String, value);}
    public get smoothVoxelsUpgraded() {return this.getProp("SmoothVoxelsUpgraded", DataType.Bool);}
    public set smoothVoxelsUpgraded(value) {this.setProp("SmoothVoxelsUpgraded", DataType.Bool, value);}
    public get waterColor() {return this.getProp("WaterColor", DataType.Color3);}
    public set waterColor(value) {this.setProp("WaterColor", DataType.Color3, value);}
    public get waterReflectance() {return this.getProp("WaterReflectance", DataType.Float32);}
    public set waterReflectance(value) {this.setProp("WaterReflectance", DataType.Float32, value);}
    public get waterTransparency() {return this.getProp("WaterTransparency", DataType.Float32);}
    public set waterTransparency(value) {this.setProp("WaterTransparency", DataType.Float32, value);}
    public get waterWaveSize() {return this.getProp("WaterWaveSize", DataType.Float32);}
    public set waterWaveSize(value) {this.setProp("WaterWaveSize", DataType.Float32, value);}
    public get waterWaveSpeed() {return this.getProp("WaterWaveSpeed", DataType.Float32);}
    public set waterWaveSpeed(value) {this.setProp("WaterWaveSpeed", DataType.Float32, value);}
}

export abstract class TriangleMeshPart extends BasePart {
    protected constructor(className: string) {super(className);}
    public get aeroMeshData() {return this.getProp("AeroMeshData", DataType.SharedString);}
    public set aeroMeshData(value) {this.setProp("AeroMeshData", DataType.SharedString, value);}
    public get fluidFidelityInternal() {return this.getProp("FluidFidelityInternal", DataType.Enum) as FluidFidelity | undefined;}
    public set fluidFidelityInternal(value) {this.setProp("FluidFidelityInternal", DataType.Enum, value);}
    public get physicalConfigData() {return this.getProp("PhysicalConfigData", DataType.SharedString);}
    public set physicalConfigData(value) {this.setProp("PhysicalConfigData", DataType.SharedString, value);}
}

export class MeshPart extends TriangleMeshPart {
    protected constructor(className?: string) {super(className ?? "MeshPart");}
    public static new() {return new MeshPart();}
    public get doubleSided() {return this.getProp("DoubleSided", DataType.Bool);}
    public set doubleSided(value) {this.setProp("DoubleSided", DataType.Bool, value);}
    public get hasJointOffset() {return this.getProp("HasJointOffset", DataType.Bool);}
    public set hasJointOffset(value) {this.setProp("HasJointOffset", DataType.Bool, value);}
    public get hasSkinnedMesh() {return this.getProp("HasSkinnedMesh", DataType.Bool);}
    public set hasSkinnedMesh(value) {this.setProp("HasSkinnedMesh", DataType.Bool, value);}
    public get initialSize() {return this.getProp("InitialSize", DataType.Vector3);}
    public set initialSize(value) {this.setProp("InitialSize", DataType.Vector3, value);}
    public get jointOffset() {return this.getProp("JointOffset", DataType.Vector3);}
    public set jointOffset(value) {this.setProp("JointOffset", DataType.Vector3, value);}
    public get meshID() {return this.getProp("MeshID", DataType.String);}
    public set meshID(value) {this.setProp("MeshID", DataType.String, value);}
    public get meshId() {return this.getProp("MeshId", DataType.String);}
    public set meshId(value) {this.setProp("MeshId", DataType.String, value);}
    public get physicsData() {return this.getProp("PhysicsData", DataType.String);}
    public set physicsData(value) {this.setProp("PhysicsData", DataType.String, value);}
    public get renderFidelity() {return this.getProp("RenderFidelity", DataType.Enum) as RenderFidelity | undefined;}
    public set renderFidelity(value) {this.setProp("RenderFidelity", DataType.Enum, value);}
    public get textureID() {return this.getProp("TextureID", DataType.String);}
    public set textureID(value) {this.setProp("TextureID", DataType.String, value);}
    public get vertexCount() {return this.getProp("VertexCount", DataType.Int32);}
    public set vertexCount(value) {this.setProp("VertexCount", DataType.Int32, value);}
}

export class PartOperation extends TriangleMeshPart {
    protected constructor(className?: string) {super(className ?? "PartOperation");}
    public static new() {return new PartOperation();}
    public get assetId() {return this.getProp("AssetId", DataType.String);}
    public set assetId(value) {this.setProp("AssetId", DataType.String, value);}
    public get childData() {return this.getProp("ChildData", DataType.String);}
    public set childData(value) {this.setProp("ChildData", DataType.String, value);}
    public get childData2() {return this.getProp("ChildData2", DataType.SharedString);}
    public set childData2(value) {this.setProp("ChildData2", DataType.SharedString, value);}
    public get formFactor() {return this.getProp("FormFactor", DataType.Enum) as FormFactor | undefined;}
    public set formFactor(value) {this.setProp("FormFactor", DataType.Enum, value);}
    public get initialSize() {return this.getProp("InitialSize", DataType.Vector3);}
    public set initialSize(value) {this.setProp("InitialSize", DataType.Vector3, value);}
    public get meshData() {return this.getProp("MeshData", DataType.String);}
    public set meshData(value) {this.setProp("MeshData", DataType.String, value);}
    public get meshData2() {return this.getProp("MeshData2", DataType.SharedString);}
    public set meshData2(value) {this.setProp("MeshData2", DataType.SharedString, value);}
    public get physicsData() {return this.getProp("PhysicsData", DataType.String);}
    public set physicsData(value) {this.setProp("PhysicsData", DataType.String, value);}
    public get renderFidelity() {return this.getProp("RenderFidelity", DataType.Enum) as RenderFidelity | undefined;}
    public set renderFidelity(value) {this.setProp("RenderFidelity", DataType.Enum, value);}
    public get smoothingAngle() {return this.getProp("SmoothingAngle", DataType.Float32);}
    public set smoothingAngle(value) {this.setProp("SmoothingAngle", DataType.Float32, value);}
    public get usePartColor() {return this.getProp("UsePartColor", DataType.Bool);}
    public set usePartColor(value) {this.setProp("UsePartColor", DataType.Bool, value);}
}

export class IntersectOperation extends PartOperation {
    protected constructor(className?: string) {super(className ?? "IntersectOperation");}
    public static new() {return new IntersectOperation();}
}

export class NegateOperation extends PartOperation {
    protected constructor(className?: string) {super(className ?? "NegateOperation");}
    public static new() {return new NegateOperation();}
}

export class UnionOperation extends PartOperation {
    protected constructor(className?: string) {super(className ?? "UnionOperation");}
    public static new() {return new UnionOperation();}
}

export class TrussPart extends BasePart {
    protected constructor(className?: string) {super(className ?? "TrussPart");}
    public static new() {return new TrussPart();}
    public get style() {return this.getProp("style", DataType.Enum) as Style | undefined;}
    public set style(value) {this.setProp("style", DataType.Enum, value);}
}

export class VehicleSeat extends BasePart {
    protected constructor(className?: string) {super(className ?? "VehicleSeat");}
    public static new() {return new VehicleSeat();}
    public get disabled() {return this.getProp("Disabled", DataType.Bool);}
    public set disabled(value) {this.setProp("Disabled", DataType.Bool, value);}
    public get headsUpDisplay() {return this.getProp("HeadsUpDisplay", DataType.Bool);}
    public set headsUpDisplay(value) {this.setProp("HeadsUpDisplay", DataType.Bool, value);}
    public get maxSpeed() {return this.getProp("MaxSpeed", DataType.Float32);}
    public set maxSpeed(value) {this.setProp("MaxSpeed", DataType.Float32, value);}
    public get steer() {return this.getProp("Steer", DataType.Int32);}
    public set steer(value) {this.setProp("Steer", DataType.Int32, value);}
    public get steerFloat() {return this.getProp("SteerFloat", DataType.Float32);}
    public set steerFloat(value) {this.setProp("SteerFloat", DataType.Float32, value);}
    public get throttle() {return this.getProp("Throttle", DataType.Int32);}
    public set throttle(value) {this.setProp("Throttle", DataType.Int32, value);}
    public get throttleFloat() {return this.getProp("ThrottleFloat", DataType.Float32);}
    public set throttleFloat(value) {this.setProp("ThrottleFloat", DataType.Float32, value);}
    public get torque() {return this.getProp("Torque", DataType.Float32);}
    public set torque(value) {this.setProp("Torque", DataType.Float32, value);}
    public get turnSpeed() {return this.getProp("TurnSpeed", DataType.Float32);}
    public set turnSpeed(value) {this.setProp("TurnSpeed", DataType.Float32, value);}
}

export class Model extends PVInstance {
    protected constructor(className?: string) {super(className ?? "Model");}
    public static new() {return new Model();}
    public get levelOfDetail() {return this.getProp("LevelOfDetail", DataType.Enum) as ModelLevelOfDetail | undefined;}
    public set levelOfDetail(value) {this.setProp("LevelOfDetail", DataType.Enum, value);}
    public get modelMeshCFrame() {return this.getProp("ModelMeshCFrame", DataType.CFrame);}
    public set modelMeshCFrame(value) {this.setProp("ModelMeshCFrame", DataType.CFrame, value);}
    public get modelMeshData() {return this.getProp("ModelMeshData", DataType.SharedString);}
    public set modelMeshData(value) {this.setProp("ModelMeshData", DataType.SharedString, value);}
    public get modelMeshSize() {return this.getProp("ModelMeshSize", DataType.Vector3);}
    public set modelMeshSize(value) {this.setProp("ModelMeshSize", DataType.Vector3, value);}
    public get modelStreamingMode() {return this.getProp("ModelStreamingMode", DataType.Enum) as ModelStreamingMode | undefined;}
    public set modelStreamingMode(value) {this.setProp("ModelStreamingMode", DataType.Enum, value);}
    public get needsPivotMigration() {return this.getProp("NeedsPivotMigration", DataType.Bool);}
    public set needsPivotMigration(value) {this.setProp("NeedsPivotMigration", DataType.Bool, value);}
    public get primaryPart() {return this.getProp("PrimaryPart", DataType.Referent) as BasePart | undefined;}
    public set primaryPart(value) {this.setProp("PrimaryPart", DataType.Referent, value);}
    public get scaleFactor() {return this.getProp("ScaleFactor", DataType.Float32);}
    public set scaleFactor(value) {this.setProp("ScaleFactor", DataType.Float32, value);}
    public get worldPivotData() {return this.getProp("WorldPivotData", DataType.OptionalCFrame);}
    public set worldPivotData(value) {this.setProp("WorldPivotData", DataType.OptionalCFrame, value);}
}

export class Actor extends Model {
    protected constructor(className?: string) {super(className ?? "Actor");}
    public static new() {return new Actor();}
}

export abstract class BackpackItem extends Model {
    protected constructor(className: string) {super(className);}
    public get textureId() {return this.getProp("TextureId", DataType.String);}
    public set textureId(value) {this.setProp("TextureId", DataType.String, value);}
}

export class HopperBin extends BackpackItem {
    protected constructor(className?: string) {super(className ?? "HopperBin");}
    public static new() {return new HopperBin();}
    public get active() {return this.getProp("Active", DataType.Bool);}
    public set active(value) {this.setProp("Active", DataType.Bool, value);}
    public get binType() {return this.getProp("BinType", DataType.Enum) as BinType | undefined;}
    public set binType(value) {this.setProp("BinType", DataType.Enum, value);}
}

export class Tool extends BackpackItem {
    protected constructor(className?: string) {super(className ?? "Tool");}
    public static new() {return new Tool();}
    public get canBeDropped() {return this.getProp("CanBeDropped", DataType.Bool);}
    public set canBeDropped(value) {this.setProp("CanBeDropped", DataType.Bool, value);}
    public get enabled() {return this.getProp("Enabled", DataType.Bool);}
    public set enabled(value) {this.setProp("Enabled", DataType.Bool, value);}
    public get grip() {return this.getProp("Grip", DataType.CFrame);}
    public set grip(value) {this.setProp("Grip", DataType.CFrame, value);}
    public get manualActivationOnly() {return this.getProp("ManualActivationOnly", DataType.Bool);}
    public set manualActivationOnly(value) {this.setProp("ManualActivationOnly", DataType.Bool, value);}
    public get requiresHandle() {return this.getProp("RequiresHandle", DataType.Bool);}
    public set requiresHandle(value) {this.setProp("RequiresHandle", DataType.Bool, value);}
    public get toolTip() {return this.getProp("ToolTip", DataType.String);}
    public set toolTip(value) {this.setProp("ToolTip", DataType.String, value);}
}

export class Flag extends Tool {
    protected constructor(className?: string) {super(className ?? "Flag");}
    public static new() {return new Flag();}
    public get teamColor() {return this.getProp("TeamColor", DataType.BrickColor);}
    public set teamColor(value) {this.setProp("TeamColor", DataType.BrickColor, value);}
}

export abstract class WorldRoot extends Model {
    protected constructor(className: string) {super(className);}
}

export class Workspace extends WorldRoot {
    protected constructor(className?: string) {super(className ?? "Workspace");}
    public static new() {return new Workspace();}
    public get airDensity() {return this.getProp("AirDensity", DataType.Float32);}
    public set airDensity(value) {this.setProp("AirDensity", DataType.Float32, value);}
    public get allowThirdPartySales() {return this.getProp("AllowThirdPartySales", DataType.Bool);}
    public set allowThirdPartySales(value) {this.setProp("AllowThirdPartySales", DataType.Bool, value);}
    public get avatarUnificationMode() {return this.getProp("AvatarUnificationMode", DataType.Enum) as AvatarUnificationMode | undefined;}
    public set avatarUnificationMode(value) {this.setProp("AvatarUnificationMode", DataType.Enum, value);}
    public get cSGAsyncDynamicCollision() {return this.getProp("CSGAsyncDynamicCollision", DataType.Enum) as CSGAsyncDynamicCollision | undefined;}
    public set cSGAsyncDynamicCollision(value) {this.setProp("CSGAsyncDynamicCollision", DataType.Enum, value);}
    public get clientAnimatorThrottling() {return this.getProp("ClientAnimatorThrottling", DataType.Enum) as ClientAnimatorThrottlingMode | undefined;}
    public set clientAnimatorThrottling(value) {this.setProp("ClientAnimatorThrottling", DataType.Enum, value);}
    public get collisionGroupData() {return this.getProp("CollisionGroupData", DataType.String);}
    public set collisionGroupData(value) {this.setProp("CollisionGroupData", DataType.String, value);}
    public get currentCamera() {return this.getProp("CurrentCamera", DataType.Referent) as Camera | undefined;}
    public set currentCamera(value) {this.setProp("CurrentCamera", DataType.Referent, value);}
    public get decreaseMinimumPartDensityMode() {return this.getProp("DecreaseMinimumPartDensityMode", DataType.Enum) as DecreaseMinimumPartDensityMode | undefined;}
    public set decreaseMinimumPartDensityMode(value) {this.setProp("DecreaseMinimumPartDensityMode", DataType.Enum, value);}
    public get distributedGameTime() {return this.getProp("DistributedGameTime", DataType.Float64);}
    public set distributedGameTime(value) {this.setProp("DistributedGameTime", DataType.Float64, value);}
    public get editorLiveScripting() {return this.getProp("EditorLiveScripting", DataType.Enum) as EditorLiveScripting | undefined;}
    public set editorLiveScripting(value) {this.setProp("EditorLiveScripting", DataType.Enum, value);}
    public get explicitAutoJoints() {return this.getProp("ExplicitAutoJoints", DataType.Bool);}
    public set explicitAutoJoints(value) {this.setProp("ExplicitAutoJoints", DataType.Bool, value);}
    public get fallenPartsDestroyHeight() {return this.getProp("FallenPartsDestroyHeight", DataType.Float32);}
    public set fallenPartsDestroyHeight(value) {this.setProp("FallenPartsDestroyHeight", DataType.Float32, value);}
    public get fluidForces() {return this.getProp("FluidForces", DataType.Enum) as FluidForces | undefined;}
    public set fluidForces(value) {this.setProp("FluidForces", DataType.Enum, value);}
    public get globalWind() {return this.getProp("GlobalWind", DataType.Vector3);}
    public set globalWind(value) {this.setProp("GlobalWind", DataType.Vector3, value);}
    public get gravity() {return this.getProp("Gravity", DataType.Float32);}
    public set gravity(value) {this.setProp("Gravity", DataType.Float32, value);}
    public get iKControlConstraintSupport() {return this.getProp("IKControlConstraintSupport", DataType.Enum) as IKControlConstraintSupport | undefined;}
    public set iKControlConstraintSupport(value) {this.setProp("IKControlConstraintSupport", DataType.Enum, value);}
    public get meshPartHeadsAndAccessories() {return this.getProp("MeshPartHeadsAndAccessories", DataType.Enum) as MeshPartHeadsAndAccessories | undefined;}
    public set meshPartHeadsAndAccessories(value) {this.setProp("MeshPartHeadsAndAccessories", DataType.Enum, value);}
    public get modelStreamingBehavior() {return this.getProp("ModelStreamingBehavior", DataType.Enum) as ModelStreamingBehavior | undefined;}
    public set modelStreamingBehavior(value) {this.setProp("ModelStreamingBehavior", DataType.Enum, value);}
    public get physicsSteppingMethod() {return this.getProp("PhysicsSteppingMethod", DataType.Enum) as PhysicsSteppingMethod | undefined;}
    public set physicsSteppingMethod(value) {this.setProp("PhysicsSteppingMethod", DataType.Enum, value);}
    public get playerCharacterDestroyBehavior() {return this.getProp("PlayerCharacterDestroyBehavior", DataType.Enum) as PlayerCharacterDestroyBehavior | undefined;}
    public set playerCharacterDestroyBehavior(value) {this.setProp("PlayerCharacterDestroyBehavior", DataType.Enum, value);}
    public get primalPhysicsSolver() {return this.getProp("PrimalPhysicsSolver", DataType.Enum) as PrimalPhysicsSolver | undefined;}
    public set primalPhysicsSolver(value) {this.setProp("PrimalPhysicsSolver", DataType.Enum, value);}
    public get rejectCharacterDeletions() {return this.getProp("RejectCharacterDeletions", DataType.Enum) as RejectCharacterDeletions | undefined;}
    public set rejectCharacterDeletions(value) {this.setProp("RejectCharacterDeletions", DataType.Enum, value);}
    public get replicateInstanceDestroySetting() {return this.getProp("ReplicateInstanceDestroySetting", DataType.Enum) as ReplicateInstanceDestroySetting | undefined;}
    public set replicateInstanceDestroySetting(value) {this.setProp("ReplicateInstanceDestroySetting", DataType.Enum, value);}
    public get retargeting() {return this.getProp("Retargeting", DataType.Enum) as AnimatorRetargetingMode | undefined;}
    public set retargeting(value) {this.setProp("Retargeting", DataType.Enum, value);}
    public get signalBehavior2() {return this.getProp("SignalBehavior2", DataType.Enum) as SignalBehavior | undefined;}
    public set signalBehavior2(value) {this.setProp("SignalBehavior2", DataType.Enum, value);}
    public get streamOutBehavior() {return this.getProp("StreamOutBehavior", DataType.Enum) as StreamOutBehavior | undefined;}
    public set streamOutBehavior(value) {this.setProp("StreamOutBehavior", DataType.Enum, value);}
    public get streamingEnabled() {return this.getProp("StreamingEnabled", DataType.Bool);}
    public set streamingEnabled(value) {this.setProp("StreamingEnabled", DataType.Bool, value);}
    public get streamingIntegrityMode() {return this.getProp("StreamingIntegrityMode", DataType.Enum) as StreamingIntegrityMode | undefined;}
    public set streamingIntegrityMode(value) {this.setProp("StreamingIntegrityMode", DataType.Enum, value);}
    public get streamingMinRadius() {return this.getProp("StreamingMinRadius", DataType.Int32);}
    public set streamingMinRadius(value) {this.setProp("StreamingMinRadius", DataType.Int32, value);}
    public get streamingTargetRadius() {return this.getProp("StreamingTargetRadius", DataType.Int32);}
    public set streamingTargetRadius(value) {this.setProp("StreamingTargetRadius", DataType.Int32, value);}
    public get terrainWeldsFixed() {return this.getProp("TerrainWeldsFixed", DataType.Bool);}
    public set terrainWeldsFixed(value) {this.setProp("TerrainWeldsFixed", DataType.Bool, value);}
    public get touchesUseCollisionGroups() {return this.getProp("TouchesUseCollisionGroups", DataType.Bool);}
    public set touchesUseCollisionGroups(value) {this.setProp("TouchesUseCollisionGroups", DataType.Bool, value);}
}

export class WorldModel extends WorldRoot {
    protected constructor(className?: string) {super(className ?? "WorldModel");}
    public static new() {return new WorldModel();}
}

export class PackageService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "PackageService", true);}
    public static new() {return new PackageService();}
}

export class PackageUIService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "PackageUIService", true);}
    public static new() {return new PackageUIService();}
}

export abstract class Pages extends CoreInstance {
    protected constructor(className: string) {super(className);}
}

export abstract class InventoryPages extends Pages {
    protected constructor(className: string) {super(className);}
}

export class PartOperationAsset extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "PartOperationAsset");}
    public static new() {return new PartOperationAsset();}
    public get childData() {return this.getProp("ChildData", DataType.String);}
    public set childData(value) {this.setProp("ChildData", DataType.String, value);}
    public get meshData() {return this.getProp("MeshData", DataType.String);}
    public set meshData(value) {this.setProp("MeshData", DataType.String, value);}
}

export class ParticleEmitter extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ParticleEmitter");}
    public static new() {return new ParticleEmitter();}
    public get acceleration() {return this.getProp("Acceleration", DataType.Vector3);}
    public set acceleration(value) {this.setProp("Acceleration", DataType.Vector3, value);}
    public get brightness() {return this.getProp("Brightness", DataType.Float32);}
    public set brightness(value) {this.setProp("Brightness", DataType.Float32, value);}
    public get color() {return this.getProp("Color", DataType.ColorSequence);}
    public set color(value) {this.setProp("Color", DataType.ColorSequence, value);}
    public get drag() {return this.getProp("Drag", DataType.Float32);}
    public set drag(value) {this.setProp("Drag", DataType.Float32, value);}
    public get emissionDirection() {return this.getProp("EmissionDirection", DataType.Enum) as NormalId | undefined;}
    public set emissionDirection(value) {this.setProp("EmissionDirection", DataType.Enum, value);}
    public get enabled() {return this.getProp("Enabled", DataType.Bool);}
    public set enabled(value) {this.setProp("Enabled", DataType.Bool, value);}
    public get flipbookFramerate() {return this.getProp("FlipbookFramerate", DataType.NumberRange);}
    public set flipbookFramerate(value) {this.setProp("FlipbookFramerate", DataType.NumberRange, value);}
    public get flipbookIncompatible() {return this.getProp("FlipbookIncompatible", DataType.String);}
    public set flipbookIncompatible(value) {this.setProp("FlipbookIncompatible", DataType.String, value);}
    public get flipbookLayout() {return this.getProp("FlipbookLayout", DataType.Enum) as ParticleFlipbookLayout | undefined;}
    public set flipbookLayout(value) {this.setProp("FlipbookLayout", DataType.Enum, value);}
    public get flipbookMode() {return this.getProp("FlipbookMode", DataType.Enum) as ParticleFlipbookMode | undefined;}
    public set flipbookMode(value) {this.setProp("FlipbookMode", DataType.Enum, value);}
    public get flipbookStartRandom() {return this.getProp("FlipbookStartRandom", DataType.Bool);}
    public set flipbookStartRandom(value) {this.setProp("FlipbookStartRandom", DataType.Bool, value);}
    public get lifetime() {return this.getProp("Lifetime", DataType.NumberRange);}
    public set lifetime(value) {this.setProp("Lifetime", DataType.NumberRange, value);}
    public get lightEmission() {return this.getProp("LightEmission", DataType.Float32);}
    public set lightEmission(value) {this.setProp("LightEmission", DataType.Float32, value);}
    public get lightInfluence() {return this.getProp("LightInfluence", DataType.Float32);}
    public set lightInfluence(value) {this.setProp("LightInfluence", DataType.Float32, value);}
    public get lockedToPart() {return this.getProp("LockedToPart", DataType.Bool);}
    public set lockedToPart(value) {this.setProp("LockedToPart", DataType.Bool, value);}
    public get orientation() {return this.getProp("Orientation", DataType.Enum) as ParticleOrientation | undefined;}
    public set orientation(value) {this.setProp("Orientation", DataType.Enum, value);}
    public get rate() {return this.getProp("Rate", DataType.Float32);}
    public set rate(value) {this.setProp("Rate", DataType.Float32, value);}
    public get rotSpeed() {return this.getProp("RotSpeed", DataType.NumberRange);}
    public set rotSpeed(value) {this.setProp("RotSpeed", DataType.NumberRange, value);}
    public get rotation() {return this.getProp("Rotation", DataType.NumberRange);}
    public set rotation(value) {this.setProp("Rotation", DataType.NumberRange, value);}
    public get shape() {return this.getProp("Shape", DataType.Enum) as ParticleEmitterShape | undefined;}
    public set shape(value) {this.setProp("Shape", DataType.Enum, value);}
    public get shapeInOut() {return this.getProp("ShapeInOut", DataType.Enum) as ParticleEmitterShapeInOut | undefined;}
    public set shapeInOut(value) {this.setProp("ShapeInOut", DataType.Enum, value);}
    public get shapePartial() {return this.getProp("ShapePartial", DataType.Float32);}
    public set shapePartial(value) {this.setProp("ShapePartial", DataType.Float32, value);}
    public get shapeStyle() {return this.getProp("ShapeStyle", DataType.Enum) as ParticleEmitterShapeStyle | undefined;}
    public set shapeStyle(value) {this.setProp("ShapeStyle", DataType.Enum, value);}
    public get size() {return this.getProp("Size", DataType.NumberSequence);}
    public set size(value) {this.setProp("Size", DataType.NumberSequence, value);}
    public get speed() {return this.getProp("Speed", DataType.NumberRange);}
    public set speed(value) {this.setProp("Speed", DataType.NumberRange, value);}
    public get spreadAngle() {return this.getProp("SpreadAngle", DataType.Vector2);}
    public set spreadAngle(value) {this.setProp("SpreadAngle", DataType.Vector2, value);}
    public get squash() {return this.getProp("Squash", DataType.NumberSequence);}
    public set squash(value) {this.setProp("Squash", DataType.NumberSequence, value);}
    public get texture() {return this.getProp("Texture", DataType.String);}
    public set texture(value) {this.setProp("Texture", DataType.String, value);}
    public get timeScale() {return this.getProp("TimeScale", DataType.Float32);}
    public set timeScale(value) {this.setProp("TimeScale", DataType.Float32, value);}
    public get transparency() {return this.getProp("Transparency", DataType.NumberSequence);}
    public set transparency(value) {this.setProp("Transparency", DataType.NumberSequence, value);}
    public get velocityInheritance() {return this.getProp("VelocityInheritance", DataType.Float32);}
    public set velocityInheritance(value) {this.setProp("VelocityInheritance", DataType.Float32, value);}
    public get velocitySpread() {return this.getProp("VelocitySpread", DataType.Float32);}
    public set velocitySpread(value) {this.setProp("VelocitySpread", DataType.Float32, value);}
    public get windAffectsDrag() {return this.getProp("WindAffectsDrag", DataType.Bool);}
    public set windAffectsDrag(value) {this.setProp("WindAffectsDrag", DataType.Bool, value);}
    public get zOffset() {return this.getProp("ZOffset", DataType.Float32);}
    public set zOffset(value) {this.setProp("ZOffset", DataType.Float32, value);}
}

export class PatchBundlerFileWatch extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "PatchBundlerFileWatch", true);}
    public static new() {return new PatchBundlerFileWatch();}
}

export class PathfindingLink extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "PathfindingLink");}
    public static new() {return new PathfindingLink();}
    public get attachment0() {return this.getProp("Attachment0", DataType.Referent) as Attachment | undefined;}
    public set attachment0(value) {this.setProp("Attachment0", DataType.Referent, value);}
    public get attachment1() {return this.getProp("Attachment1", DataType.Referent) as Attachment | undefined;}
    public set attachment1(value) {this.setProp("Attachment1", DataType.Referent, value);}
    public get isBidirectional() {return this.getProp("IsBidirectional", DataType.Bool);}
    public set isBidirectional(value) {this.setProp("IsBidirectional", DataType.Bool, value);}
    public get label() {return this.getProp("Label", DataType.String);}
    public set label(value) {this.setProp("Label", DataType.String, value);}
}

export class PathfindingModifier extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "PathfindingModifier");}
    public static new() {return new PathfindingModifier();}
    public get label() {return this.getProp("Label", DataType.String);}
    public set label(value) {this.setProp("Label", DataType.String, value);}
    public get passThrough() {return this.getProp("PassThrough", DataType.Bool);}
    public set passThrough(value) {this.setProp("PassThrough", DataType.Bool, value);}
}

export class PathfindingService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "PathfindingService", true);}
    public static new() {return new PathfindingService();}
    public get emptyCutoff() {return this.getProp("EmptyCutoff", DataType.Float32);}
    public set emptyCutoff(value) {this.setProp("EmptyCutoff", DataType.Float32, value);}
}

export abstract class PausedState extends CoreInstance {
    protected constructor(className: string) {super(className);}
}

export class PermissionsService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "PermissionsService", true);}
    public static new() {return new PermissionsService();}
}

export class PhysicsService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "PhysicsService", true);}
    public static new() {return new PhysicsService();}
}

export class PlaceStatsService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "PlaceStatsService", true);}
    public static new() {return new PlaceStatsService();}
}

export class PlacesService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "PlacesService", true);}
    public static new() {return new PlacesService();}
}

export class PlatformCloudStorageService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "PlatformCloudStorageService", true);}
    public static new() {return new PlatformCloudStorageService();}
}

export class PlatformFriendsService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "PlatformFriendsService", true);}
    public static new() {return new PlatformFriendsService();}
}

export class Player extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Player");}
    public static new() {return new Player();}
    public get autoJumpEnabled() {return this.getProp("AutoJumpEnabled", DataType.Bool);}
    public set autoJumpEnabled(value) {this.setProp("AutoJumpEnabled", DataType.Bool, value);}
    public get cameraMaxZoomDistance() {return this.getProp("CameraMaxZoomDistance", DataType.Float32);}
    public set cameraMaxZoomDistance(value) {this.setProp("CameraMaxZoomDistance", DataType.Float32, value);}
    public get cameraMinZoomDistance() {return this.getProp("CameraMinZoomDistance", DataType.Float32);}
    public set cameraMinZoomDistance(value) {this.setProp("CameraMinZoomDistance", DataType.Float32, value);}
    public get cameraMode() {return this.getProp("CameraMode", DataType.Enum) as CameraMode | undefined;}
    public set cameraMode(value) {this.setProp("CameraMode", DataType.Enum, value);}
    public get character() {return this.getProp("Character", DataType.Referent) as Model | undefined;}
    public set character(value) {this.setProp("Character", DataType.Referent, value);}
    public get characterAppearance() {return this.getProp("CharacterAppearance", DataType.String);}
    public set characterAppearance(value) {this.setProp("CharacterAppearance", DataType.String, value);}
    public get characterAppearanceId() {return this.getProp("CharacterAppearanceId", DataType.Int64);}
    public set characterAppearanceId(value) {this.setProp("CharacterAppearanceId", DataType.Int64, value);}
    public get devCameraOcclusionMode() {return this.getProp("DevCameraOcclusionMode", DataType.Enum) as DevCameraOcclusionMode | undefined;}
    public set devCameraOcclusionMode(value) {this.setProp("DevCameraOcclusionMode", DataType.Enum, value);}
    public get devComputerCameraMode() {return this.getProp("DevComputerCameraMode", DataType.Enum) as DevComputerCameraMovementMode | undefined;}
    public set devComputerCameraMode(value) {this.setProp("DevComputerCameraMode", DataType.Enum, value);}
    public get devComputerMovementMode() {return this.getProp("DevComputerMovementMode", DataType.Enum) as DevComputerMovementMode | undefined;}
    public set devComputerMovementMode(value) {this.setProp("DevComputerMovementMode", DataType.Enum, value);}
    public get devEnableMouseLock() {return this.getProp("DevEnableMouseLock", DataType.Bool);}
    public set devEnableMouseLock(value) {this.setProp("DevEnableMouseLock", DataType.Bool, value);}
    public get devTouchCameraMode() {return this.getProp("DevTouchCameraMode", DataType.Enum) as DevTouchCameraMovementMode | undefined;}
    public set devTouchCameraMode(value) {this.setProp("DevTouchCameraMode", DataType.Enum, value);}
    public get devTouchMovementMode() {return this.getProp("DevTouchMovementMode", DataType.Enum) as DevTouchMovementMode | undefined;}
    public set devTouchMovementMode(value) {this.setProp("DevTouchMovementMode", DataType.Enum, value);}
    public get gameplayPaused() {return this.getProp("GameplayPaused", DataType.Bool);}
    public set gameplayPaused(value) {this.setProp("GameplayPaused", DataType.Bool, value);}
    public get healthDisplayDistance() {return this.getProp("HealthDisplayDistance", DataType.Float32);}
    public set healthDisplayDistance(value) {this.setProp("HealthDisplayDistance", DataType.Float32, value);}
    public get nameDisplayDistance() {return this.getProp("NameDisplayDistance", DataType.Float32);}
    public set nameDisplayDistance(value) {this.setProp("NameDisplayDistance", DataType.Float32, value);}
    public get neutral() {return this.getProp("Neutral", DataType.Bool);}
    public set neutral(value) {this.setProp("Neutral", DataType.Bool, value);}
    public get rawJoinData() {return this.getProp("RawJoinData", DataType.String);}
    public set rawJoinData(value) {this.setProp("RawJoinData", DataType.String, value);}
    public get replicationFocus() {return this.getProp("ReplicationFocus", DataType.Referent) as CoreInstance | undefined;}
    public set replicationFocus(value) {this.setProp("ReplicationFocus", DataType.Referent, value);}
    public get respawnLocation() {return this.getProp("RespawnLocation", DataType.Referent) as SpawnLocation | undefined;}
    public set respawnLocation(value) {this.setProp("RespawnLocation", DataType.Referent, value);}
    public get team() {return this.getProp("Team", DataType.Referent) as Team | undefined;}
    public set team(value) {this.setProp("Team", DataType.Referent, value);}
    public get teamColor() {return this.getProp("TeamColor", DataType.BrickColor);}
    public set teamColor(value) {this.setProp("TeamColor", DataType.BrickColor, value);}
    public get teleportedIn() {return this.getProp("TeleportedIn", DataType.Bool);}
    public set teleportedIn(value) {this.setProp("TeleportedIn", DataType.Bool, value);}
}

export class PlayerEmulatorService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "PlayerEmulatorService", true);}
    public static new() {return new PlayerEmulatorService();}
    public get customPoliciesEnabled() {return this.getProp("CustomPoliciesEnabled", DataType.Bool);}
    public set customPoliciesEnabled(value) {this.setProp("CustomPoliciesEnabled", DataType.Bool, value);}
    public get emulatedCountryCode() {return this.getProp("EmulatedCountryCode", DataType.String);}
    public set emulatedCountryCode(value) {this.setProp("EmulatedCountryCode", DataType.String, value);}
    public get emulatedGameLocale() {return this.getProp("EmulatedGameLocale", DataType.String);}
    public set emulatedGameLocale(value) {this.setProp("EmulatedGameLocale", DataType.String, value);}
    public get playerEmulationEnabled() {return this.getProp("PlayerEmulationEnabled", DataType.Bool);}
    public set playerEmulationEnabled(value) {this.setProp("PlayerEmulationEnabled", DataType.Bool, value);}
    public get pseudolocalizationEnabled() {return this.getProp("PseudolocalizationEnabled", DataType.Bool);}
    public set pseudolocalizationEnabled(value) {this.setProp("PseudolocalizationEnabled", DataType.Bool, value);}
    public get serializedEmulatedPolicyInfo() {return this.getProp("SerializedEmulatedPolicyInfo", DataType.String);}
    public set serializedEmulatedPolicyInfo(value) {this.setProp("SerializedEmulatedPolicyInfo", DataType.String, value);}
}

export class PlayerViewService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "PlayerViewService", true);}
    public static new() {return new PlayerViewService();}
}

export class Players extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Players", true);}
    public static new() {return new Players();}
    public get characterAutoLoads() {return this.getProp("CharacterAutoLoads", DataType.Bool);}
    public set characterAutoLoads(value) {this.setProp("CharacterAutoLoads", DataType.Bool, value);}
    public get maxPlayersInternal() {return this.getProp("MaxPlayersInternal", DataType.Int32);}
    public set maxPlayersInternal(value) {this.setProp("MaxPlayersInternal", DataType.Int32, value);}
    public get preferredPlayersInternal() {return this.getProp("PreferredPlayersInternal", DataType.Int32);}
    public set preferredPlayersInternal(value) {this.setProp("PreferredPlayersInternal", DataType.Int32, value);}
    public get respawnTime() {return this.getProp("RespawnTime", DataType.Float32);}
    public set respawnTime(value) {this.setProp("RespawnTime", DataType.Float32, value);}
    public get useStrafingAnimations() {return this.getProp("UseStrafingAnimations", DataType.Bool);}
    public set useStrafingAnimations(value) {this.setProp("UseStrafingAnimations", DataType.Bool, value);}
}

export class PluginAction extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "PluginAction");}
    public static new() {return new PluginAction();}
}

export class PluginCapabilities extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "PluginCapabilities");}
    public static new() {return new PluginCapabilities();}
    public get manifest() {return this.getProp("Manifest", DataType.String);}
    public set manifest(value) {this.setProp("Manifest", DataType.String, value);}
}

export class PluginDebugService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "PluginDebugService", true);}
    public static new() {return new PluginDebugService();}
}

export class PluginGuiService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "PluginGuiService", true);}
    public static new() {return new PluginGuiService();}
}

export class PluginManagementService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "PluginManagementService", true);}
    public static new() {return new PluginManagementService();}
}

export class PluginPolicyService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "PluginPolicyService", true);}
    public static new() {return new PluginPolicyService();}
}

export class PointsService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "PointsService", true);}
    public static new() {return new PointsService();}
}

export class PolicyService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "PolicyService", true);}
    public static new() {return new PolicyService();}
    public get isLuobuServer() {return this.getProp("IsLuobuServer", DataType.Enum) as TriStateBoolean | undefined;}
    public set isLuobuServer(value) {this.setProp("IsLuobuServer", DataType.Enum, value);}
    public get luobuWhitelisted() {return this.getProp("LuobuWhitelisted", DataType.Enum) as TriStateBoolean | undefined;}
    public set luobuWhitelisted(value) {this.setProp("LuobuWhitelisted", DataType.Enum, value);}
}

export abstract class PoseBase extends CoreInstance {
    protected constructor(className: string) {super(className);}
    public get easingDirection() {return this.getProp("EasingDirection", DataType.Enum) as PoseEasingDirection | undefined;}
    public set easingDirection(value) {this.setProp("EasingDirection", DataType.Enum, value);}
    public get easingStyle() {return this.getProp("EasingStyle", DataType.Enum) as PoseEasingStyle | undefined;}
    public set easingStyle(value) {this.setProp("EasingStyle", DataType.Enum, value);}
    public get weight() {return this.getProp("Weight", DataType.Float32);}
    public set weight(value) {this.setProp("Weight", DataType.Float32, value);}
}

export class NumberPose extends PoseBase {
    protected constructor(className?: string) {super(className ?? "NumberPose");}
    public static new() {return new NumberPose();}
    public get value() {return this.getProp("Value", DataType.Float64);}
    public set value(value) {this.setProp("Value", DataType.Float64, value);}
}

export class Pose extends PoseBase {
    protected constructor(className?: string) {super(className ?? "Pose");}
    public static new() {return new Pose();}
    public get cFrame() {return this.getProp("CFrame", DataType.CFrame);}
    public set cFrame(value) {this.setProp("CFrame", DataType.CFrame, value);}
    public get maskWeight() {return this.getProp("MaskWeight", DataType.Float32);}
    public set maskWeight(value) {this.setProp("MaskWeight", DataType.Float32, value);}
}

export abstract class PostEffect extends CoreInstance {
    protected constructor(className: string) {super(className);}
    public get enabled() {return this.getProp("Enabled", DataType.Bool);}
    public set enabled(value) {this.setProp("Enabled", DataType.Bool, value);}
}

export class BloomEffect extends PostEffect {
    protected constructor(className?: string) {super(className ?? "BloomEffect");}
    public static new() {return new BloomEffect();}
    public get intensity() {return this.getProp("Intensity", DataType.Float32);}
    public set intensity(value) {this.setProp("Intensity", DataType.Float32, value);}
    public get size() {return this.getProp("Size", DataType.Float32);}
    public set size(value) {this.setProp("Size", DataType.Float32, value);}
    public get threshold() {return this.getProp("Threshold", DataType.Float32);}
    public set threshold(value) {this.setProp("Threshold", DataType.Float32, value);}
}

export class BlurEffect extends PostEffect {
    protected constructor(className?: string) {super(className ?? "BlurEffect");}
    public static new() {return new BlurEffect();}
    public get size() {return this.getProp("Size", DataType.Float32);}
    public set size(value) {this.setProp("Size", DataType.Float32, value);}
}

export class ColorCorrectionEffect extends PostEffect {
    protected constructor(className?: string) {super(className ?? "ColorCorrectionEffect");}
    public static new() {return new ColorCorrectionEffect();}
    public get brightness() {return this.getProp("Brightness", DataType.Float32);}
    public set brightness(value) {this.setProp("Brightness", DataType.Float32, value);}
    public get contrast() {return this.getProp("Contrast", DataType.Float32);}
    public set contrast(value) {this.setProp("Contrast", DataType.Float32, value);}
    public get saturation() {return this.getProp("Saturation", DataType.Float32);}
    public set saturation(value) {this.setProp("Saturation", DataType.Float32, value);}
    public get tintColor() {return this.getProp("TintColor", DataType.Color3);}
    public set tintColor(value) {this.setProp("TintColor", DataType.Color3, value);}
}

export class DepthOfFieldEffect extends PostEffect {
    protected constructor(className?: string) {super(className ?? "DepthOfFieldEffect");}
    public static new() {return new DepthOfFieldEffect();}
    public get farIntensity() {return this.getProp("FarIntensity", DataType.Float32);}
    public set farIntensity(value) {this.setProp("FarIntensity", DataType.Float32, value);}
    public get focusDistance() {return this.getProp("FocusDistance", DataType.Float32);}
    public set focusDistance(value) {this.setProp("FocusDistance", DataType.Float32, value);}
    public get inFocusRadius() {return this.getProp("InFocusRadius", DataType.Float32);}
    public set inFocusRadius(value) {this.setProp("InFocusRadius", DataType.Float32, value);}
    public get nearIntensity() {return this.getProp("NearIntensity", DataType.Float32);}
    public set nearIntensity(value) {this.setProp("NearIntensity", DataType.Float32, value);}
}

export class SunRaysEffect extends PostEffect {
    protected constructor(className?: string) {super(className ?? "SunRaysEffect");}
    public static new() {return new SunRaysEffect();}
    public get intensity() {return this.getProp("Intensity", DataType.Float32);}
    public set intensity(value) {this.setProp("Intensity", DataType.Float32, value);}
    public get spread() {return this.getProp("Spread", DataType.Float32);}
    public set spread(value) {this.setProp("Spread", DataType.Float32, value);}
}

export class ProcessInstancePhysicsService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ProcessInstancePhysicsService", true);}
    public static new() {return new ProcessInstancePhysicsService();}
}

export class ProjectFolderService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ProjectFolderService", true);}
    public static new() {return new ProjectFolderService();}
}

export class ProximityPrompt extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ProximityPrompt");}
    public static new() {return new ProximityPrompt();}
    public get actionText() {return this.getProp("ActionText", DataType.String);}
    public set actionText(value) {this.setProp("ActionText", DataType.String, value);}
    public get autoLocalize() {return this.getProp("AutoLocalize", DataType.Bool);}
    public set autoLocalize(value) {this.setProp("AutoLocalize", DataType.Bool, value);}
    public get clickablePrompt() {return this.getProp("ClickablePrompt", DataType.Bool);}
    public set clickablePrompt(value) {this.setProp("ClickablePrompt", DataType.Bool, value);}
    public get enabled() {return this.getProp("Enabled", DataType.Bool);}
    public set enabled(value) {this.setProp("Enabled", DataType.Bool, value);}
    public get exclusivity() {return this.getProp("Exclusivity", DataType.Enum) as ProximityPromptExclusivity | undefined;}
    public set exclusivity(value) {this.setProp("Exclusivity", DataType.Enum, value);}
    public get gamepadKeyCode() {return this.getProp("GamepadKeyCode", DataType.Enum) as KeyCode | undefined;}
    public set gamepadKeyCode(value) {this.setProp("GamepadKeyCode", DataType.Enum, value);}
    public get holdDuration() {return this.getProp("HoldDuration", DataType.Float32);}
    public set holdDuration(value) {this.setProp("HoldDuration", DataType.Float32, value);}
    public get keyboardKeyCode() {return this.getProp("KeyboardKeyCode", DataType.Enum) as KeyCode | undefined;}
    public set keyboardKeyCode(value) {this.setProp("KeyboardKeyCode", DataType.Enum, value);}
    public get maxActivationDistance() {return this.getProp("MaxActivationDistance", DataType.Float32);}
    public set maxActivationDistance(value) {this.setProp("MaxActivationDistance", DataType.Float32, value);}
    public get objectText() {return this.getProp("ObjectText", DataType.String);}
    public set objectText(value) {this.setProp("ObjectText", DataType.String, value);}
    public get requiresLineOfSight() {return this.getProp("RequiresLineOfSight", DataType.Bool);}
    public set requiresLineOfSight(value) {this.setProp("RequiresLineOfSight", DataType.Bool, value);}
    public get rootLocalizationTable() {return this.getProp("RootLocalizationTable", DataType.Referent) as LocalizationTable | undefined;}
    public set rootLocalizationTable(value) {this.setProp("RootLocalizationTable", DataType.Referent, value);}
    public get style() {return this.getProp("Style", DataType.Enum) as ProximityPromptStyle | undefined;}
    public set style(value) {this.setProp("Style", DataType.Enum, value);}
    public get uIOffset() {return this.getProp("UIOffset", DataType.Vector2);}
    public set uIOffset(value) {this.setProp("UIOffset", DataType.Vector2, value);}
}

export class ProximityPromptService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ProximityPromptService", true);}
    public static new() {return new ProximityPromptService();}
    public get enabled() {return this.getProp("Enabled", DataType.Bool);}
    public set enabled(value) {this.setProp("Enabled", DataType.Bool, value);}
    public get maxPromptsVisible() {return this.getProp("MaxPromptsVisible", DataType.Int32);}
    public set maxPromptsVisible(value) {this.setProp("MaxPromptsVisible", DataType.Int32, value);}
}

export class PublishService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "PublishService", true);}
    public static new() {return new PublishService();}
}

export class RbxAnalyticsService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "RbxAnalyticsService", true);}
    public static new() {return new RbxAnalyticsService();}
}

export class ReflectionMetadata extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ReflectionMetadata");}
    public static new() {return new ReflectionMetadata();}
}

export class ReflectionMetadataCallbacks extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ReflectionMetadataCallbacks");}
    public static new() {return new ReflectionMetadataCallbacks();}
}

export class ReflectionMetadataClasses extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ReflectionMetadataClasses");}
    public static new() {return new ReflectionMetadataClasses();}
}

export class ReflectionMetadataEnums extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ReflectionMetadataEnums");}
    public static new() {return new ReflectionMetadataEnums();}
}

export class ReflectionMetadataEvents extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ReflectionMetadataEvents");}
    public static new() {return new ReflectionMetadataEvents();}
}

export class ReflectionMetadataFunctions extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ReflectionMetadataFunctions");}
    public static new() {return new ReflectionMetadataFunctions();}
}

export abstract class ReflectionMetadataItem extends CoreInstance {
    protected constructor(className: string) {super(className);}
    public get browsable() {return this.getProp("Browsable", DataType.Bool);}
    public set browsable(value) {this.setProp("Browsable", DataType.Bool, value);}
    public get classCategory() {return this.getProp("ClassCategory", DataType.String);}
    public set classCategory(value) {this.setProp("ClassCategory", DataType.String, value);}
    public get clientOnly() {return this.getProp("ClientOnly", DataType.Bool);}
    public set clientOnly(value) {this.setProp("ClientOnly", DataType.Bool, value);}
    public get constraint() {return this.getProp("Constraint", DataType.String);}
    public set constraint(value) {this.setProp("Constraint", DataType.String, value);}
    public get deprecated() {return this.getProp("Deprecated", DataType.Bool);}
    public set deprecated(value) {this.setProp("Deprecated", DataType.Bool, value);}
    public get editingDisabled() {return this.getProp("EditingDisabled", DataType.Bool);}
    public set editingDisabled(value) {this.setProp("EditingDisabled", DataType.Bool, value);}
    public get editorType() {return this.getProp("EditorType", DataType.String);}
    public set editorType(value) {this.setProp("EditorType", DataType.String, value);}
    public get fFlag() {return this.getProp("FFlag", DataType.String);}
    public set fFlag(value) {this.setProp("FFlag", DataType.String, value);}
    public get isBackend() {return this.getProp("IsBackend", DataType.Bool);}
    public set isBackend(value) {this.setProp("IsBackend", DataType.Bool, value);}
    public get propertyOrder() {return this.getProp("PropertyOrder", DataType.Int32);}
    public set propertyOrder(value) {this.setProp("PropertyOrder", DataType.Int32, value);}
    public get scriptContext() {return this.getProp("ScriptContext", DataType.String);}
    public set scriptContext(value) {this.setProp("ScriptContext", DataType.String, value);}
    public get serverOnly() {return this.getProp("ServerOnly", DataType.Bool);}
    public set serverOnly(value) {this.setProp("ServerOnly", DataType.Bool, value);}
    public get sliderScaling() {return this.getProp("SliderScaling", DataType.String);}
    public set sliderScaling(value) {this.setProp("SliderScaling", DataType.String, value);}
    public get uIMaximum() {return this.getProp("UIMaximum", DataType.Float64);}
    public set uIMaximum(value) {this.setProp("UIMaximum", DataType.Float64, value);}
    public get uIMinimum() {return this.getProp("UIMinimum", DataType.Float64);}
    public set uIMinimum(value) {this.setProp("UIMinimum", DataType.Float64, value);}
    public get uINumTicks() {return this.getProp("UINumTicks", DataType.Float64);}
    public set uINumTicks(value) {this.setProp("UINumTicks", DataType.Float64, value);}
}

export class ReflectionMetadataClass extends ReflectionMetadataItem {
    protected constructor(className?: string) {super(className ?? "ReflectionMetadataClass");}
    public static new() {return new ReflectionMetadataClass();}
    public get explorerImageIndex() {return this.getProp("ExplorerImageIndex", DataType.Int32);}
    public set explorerImageIndex(value) {this.setProp("ExplorerImageIndex", DataType.Int32, value);}
    public get explorerOrder() {return this.getProp("ExplorerOrder", DataType.Int32);}
    public set explorerOrder(value) {this.setProp("ExplorerOrder", DataType.Int32, value);}
    public get insertable() {return this.getProp("Insertable", DataType.Bool);}
    public set insertable(value) {this.setProp("Insertable", DataType.Bool, value);}
    public get preferredParent() {return this.getProp("PreferredParent", DataType.String);}
    public set preferredParent(value) {this.setProp("PreferredParent", DataType.String, value);}
    public get serviceVisibility() {return this.getProp("ServiceVisibility", DataType.Enum) as ServiceVisibility | undefined;}
    public set serviceVisibility(value) {this.setProp("ServiceVisibility", DataType.Enum, value);}
}

export class ReflectionMetadataEnum extends ReflectionMetadataItem {
    protected constructor(className?: string) {super(className ?? "ReflectionMetadataEnum");}
    public static new() {return new ReflectionMetadataEnum();}
}

export class ReflectionMetadataEnumItem extends ReflectionMetadataItem {
    protected constructor(className?: string) {super(className ?? "ReflectionMetadataEnumItem");}
    public static new() {return new ReflectionMetadataEnumItem();}
}

export class ReflectionMetadataMember extends ReflectionMetadataItem {
    protected constructor(className?: string) {super(className ?? "ReflectionMetadataMember");}
    public static new() {return new ReflectionMetadataMember();}
}

export class ReflectionMetadataProperties extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ReflectionMetadataProperties");}
    public static new() {return new ReflectionMetadataProperties();}
}

export class ReflectionMetadataYieldFunctions extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ReflectionMetadataYieldFunctions");}
    public static new() {return new ReflectionMetadataYieldFunctions();}
}

export class ReflectionService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ReflectionService", true);}
    public static new() {return new ReflectionService();}
}

export class RemoteCursorService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "RemoteCursorService", true);}
    public static new() {return new RemoteCursorService();}
}

export class RemoteDebuggerServer extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "RemoteDebuggerServer", true);}
    public static new() {return new RemoteDebuggerServer();}
}

export class RemoteFunction extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "RemoteFunction");}
    public static new() {return new RemoteFunction();}
}

export class RenderSettings extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "RenderSettings", true);}
    public static new() {return new RenderSettings();}
    public get autoFRMLevel() {return this.getProp("AutoFRMLevel", DataType.Int32);}
    public set autoFRMLevel(value) {this.setProp("AutoFRMLevel", DataType.Int32, value);}
    public get eagerBulkExecution() {return this.getProp("EagerBulkExecution", DataType.Bool);}
    public set eagerBulkExecution(value) {this.setProp("EagerBulkExecution", DataType.Bool, value);}
    public get editQualityLevel() {return this.getProp("EditQualityLevel", DataType.Enum) as QualityLevel | undefined;}
    public set editQualityLevel(value) {this.setProp("EditQualityLevel", DataType.Enum, value);}
    public get enable_VR_Mode() {return this.getProp("Enable VR Mode", DataType.Bool);}
    public set enable_VR_Mode(value) {this.setProp("Enable VR Mode", DataType.Bool, value);}
    public get exportMergeByMaterial() {return this.getProp("ExportMergeByMaterial", DataType.Bool);}
    public set exportMergeByMaterial(value) {this.setProp("ExportMergeByMaterial", DataType.Bool, value);}
    public get frameRateManager() {return this.getProp("FrameRateManager", DataType.Enum) as FramerateManagerMode | undefined;}
    public set frameRateManager(value) {this.setProp("FrameRateManager", DataType.Enum, value);}
    public get graphicsMode() {return this.getProp("GraphicsMode", DataType.Enum) as GraphicsMode | undefined;}
    public set graphicsMode(value) {this.setProp("GraphicsMode", DataType.Enum, value);}
    public get meshCacheSize() {return this.getProp("MeshCacheSize", DataType.Int32);}
    public set meshCacheSize(value) {this.setProp("MeshCacheSize", DataType.Int32, value);}
    public get meshPartDetailLevel() {return this.getProp("MeshPartDetailLevel", DataType.Enum) as MeshPartDetailLevel | undefined;}
    public set meshPartDetailLevel(value) {this.setProp("MeshPartDetailLevel", DataType.Enum, value);}
    public get qualityLevel() {return this.getProp("QualityLevel", DataType.Enum) as QualityLevel | undefined;}
    public set qualityLevel(value) {this.setProp("QualityLevel", DataType.Enum, value);}
    public get reloadAssets() {return this.getProp("ReloadAssets", DataType.Bool);}
    public set reloadAssets(value) {this.setProp("ReloadAssets", DataType.Bool, value);}
    public get renderCSGTrianglesDebug() {return this.getProp("RenderCSGTrianglesDebug", DataType.Bool);}
    public set renderCSGTrianglesDebug(value) {this.setProp("RenderCSGTrianglesDebug", DataType.Bool, value);}
    public get showBoundingBoxes() {return this.getProp("ShowBoundingBoxes", DataType.Bool);}
    public set showBoundingBoxes(value) {this.setProp("ShowBoundingBoxes", DataType.Bool, value);}
    public get viewMode() {return this.getProp("ViewMode", DataType.Enum) as ViewMode | undefined;}
    public set viewMode(value) {this.setProp("ViewMode", DataType.Enum, value);}
}

export class RenderingTest extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "RenderingTest");}
    public static new() {return new RenderingTest();}
    public get cFrame() {return this.getProp("CFrame", DataType.CFrame);}
    public set cFrame(value) {this.setProp("CFrame", DataType.CFrame, value);}
    public get comparisonDiffThreshold() {return this.getProp("ComparisonDiffThreshold", DataType.Int32);}
    public set comparisonDiffThreshold(value) {this.setProp("ComparisonDiffThreshold", DataType.Int32, value);}
    public get comparisonMethod() {return this.getProp("ComparisonMethod", DataType.Enum) as RenderingTestComparisonMethod | undefined;}
    public set comparisonMethod(value) {this.setProp("ComparisonMethod", DataType.Enum, value);}
    public get comparisonPsnrThreshold() {return this.getProp("ComparisonPsnrThreshold", DataType.Float32);}
    public set comparisonPsnrThreshold(value) {this.setProp("ComparisonPsnrThreshold", DataType.Float32, value);}
    public get description() {return this.getProp("Description", DataType.String);}
    public set description(value) {this.setProp("Description", DataType.String, value);}
    public get fieldOfView() {return this.getProp("FieldOfView", DataType.Float32);}
    public set fieldOfView(value) {this.setProp("FieldOfView", DataType.Float32, value);}
    public get perfTest() {return this.getProp("PerfTest", DataType.Bool);}
    public set perfTest(value) {this.setProp("PerfTest", DataType.Bool, value);}
    public get qualityAuto() {return this.getProp("QualityAuto", DataType.Bool);}
    public set qualityAuto(value) {this.setProp("QualityAuto", DataType.Bool, value);}
    public get qualityLevel() {return this.getProp("QualityLevel", DataType.Int32);}
    public set qualityLevel(value) {this.setProp("QualityLevel", DataType.Int32, value);}
    public get renderingTestFrameCount() {return this.getProp("RenderingTestFrameCount", DataType.Int32);}
    public set renderingTestFrameCount(value) {this.setProp("RenderingTestFrameCount", DataType.Int32, value);}
    public get shouldSkip() {return this.getProp("ShouldSkip", DataType.Bool);}
    public set shouldSkip(value) {this.setProp("ShouldSkip", DataType.Bool, value);}
    public get ticket() {return this.getProp("Ticket", DataType.String);}
    public set ticket(value) {this.setProp("Ticket", DataType.String, value);}
    public get timeout() {return this.getProp("Timeout", DataType.Int32);}
    public set timeout(value) {this.setProp("Timeout", DataType.Int32, value);}
}

export class ReplicatedFirst extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ReplicatedFirst", true);}
    public static new() {return new ReplicatedFirst();}
}

export class ReplicatedStorage extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ReplicatedStorage", true);}
    public static new() {return new ReplicatedStorage();}
}

export class RibbonNotificationService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "RibbonNotificationService", true);}
    public static new() {return new RibbonNotificationService();}
}

export class RobloxPluginGuiService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "RobloxPluginGuiService", true);}
    public static new() {return new RobloxPluginGuiService();}
}

export class RobloxReplicatedStorage extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "RobloxReplicatedStorage", true);}
    public static new() {return new RobloxReplicatedStorage();}
}

export class RobloxServerStorage extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "RobloxServerStorage", true);}
    public static new() {return new RobloxServerStorage();}
}

export class RomarkService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "RomarkService", true);}
    public static new() {return new RomarkService();}
}

export class RotationCurve extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "RotationCurve");}
    public static new() {return new RotationCurve();}
    public get valuesAndTimes() {return this.getProp("ValuesAndTimes", DataType.String);}
    public set valuesAndTimes(value) {this.setProp("ValuesAndTimes", DataType.String, value);}
}

export class RtMessagingService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "RtMessagingService", true);}
    public static new() {return new RtMessagingService();}
}

export class RunService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "RunService", true);}
    public static new() {return new RunService();}
}

export class RuntimeScriptService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "RuntimeScriptService", true);}
    public static new() {return new RuntimeScriptService();}
}

export class SafetyService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "SafetyService", true);}
    public static new() {return new SafetyService();}
    public get isCaptureModeForReport() {return this.getProp("IsCaptureModeForReport", DataType.Bool);}
    public set isCaptureModeForReport(value) {this.setProp("IsCaptureModeForReport", DataType.Bool, value);}
}

export abstract class ScriptBuilder extends CoreInstance {
    protected constructor(className: string) {super(className);}
}

export class ScriptChangeService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ScriptChangeService", true);}
    public static new() {return new ScriptChangeService();}
}

export class ScriptCloneWatcher extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ScriptCloneWatcher", true);}
    public static new() {return new ScriptCloneWatcher();}
}

export class ScriptCloneWatcherHelper extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ScriptCloneWatcherHelper", true);}
    public static new() {return new ScriptCloneWatcherHelper();}
}

export class ScriptCommitService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ScriptCommitService", true);}
    public static new() {return new ScriptCommitService();}
}

export class ScriptContext extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ScriptContext", true);}
    public static new() {return new ScriptContext();}
}

export class ScriptEditorService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ScriptEditorService", true);}
    public static new() {return new ScriptEditorService();}
}

export class ScriptProfilerService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ScriptProfilerService", true);}
    public static new() {return new ScriptProfilerService();}
}

export class ScriptRegistrationService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ScriptRegistrationService", true);}
    public static new() {return new ScriptRegistrationService();}
}

export class ScriptService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ScriptService", true);}
    public static new() {return new ScriptService();}
}

export class Selection extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Selection", true);}
    public static new() {return new Selection();}
}

export class SelectionHighlightManager extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "SelectionHighlightManager", true);}
    public static new() {return new SelectionHighlightManager();}
}

export abstract class SensorBase extends CoreInstance {
    protected constructor(className: string) {super(className);}
    public get updateType() {return this.getProp("UpdateType", DataType.Enum) as SensorUpdateType | undefined;}
    public set updateType(value) {this.setProp("UpdateType", DataType.Enum, value);}
}

export class BuoyancySensor extends SensorBase {
    protected constructor(className?: string) {super(className ?? "BuoyancySensor");}
    public static new() {return new BuoyancySensor();}
    public get fullySubmerged() {return this.getProp("FullySubmerged", DataType.Bool);}
    public set fullySubmerged(value) {this.setProp("FullySubmerged", DataType.Bool, value);}
    public get touchingSurface() {return this.getProp("TouchingSurface", DataType.Bool);}
    public set touchingSurface(value) {this.setProp("TouchingSurface", DataType.Bool, value);}
}

export abstract class ControllerSensor extends SensorBase {
    protected constructor(className: string) {super(className);}
}

export class ControllerPartSensor extends ControllerSensor {
    protected constructor(className?: string) {super(className ?? "ControllerPartSensor");}
    public static new() {return new ControllerPartSensor();}
    public get hitFrame() {return this.getProp("HitFrame", DataType.CFrame);}
    public set hitFrame(value) {this.setProp("HitFrame", DataType.CFrame, value);}
    public get hitNormal() {return this.getProp("HitNormal", DataType.Vector3);}
    public set hitNormal(value) {this.setProp("HitNormal", DataType.Vector3, value);}
    public get searchDistance() {return this.getProp("SearchDistance", DataType.Float32);}
    public set searchDistance(value) {this.setProp("SearchDistance", DataType.Float32, value);}
    public get sensedPart() {return this.getProp("SensedPart", DataType.Referent) as BasePart | undefined;}
    public set sensedPart(value) {this.setProp("SensedPart", DataType.Referent, value);}
    public get sensorMode() {return this.getProp("SensorMode", DataType.Enum) as SensorMode | undefined;}
    public set sensorMode(value) {this.setProp("SensorMode", DataType.Enum, value);}
}

export class ServerScriptService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ServerScriptService", true);}
    public static new() {return new ServerScriptService();}
    public get loadStringEnabled() {return this.getProp("LoadStringEnabled", DataType.Bool);}
    public set loadStringEnabled(value) {this.setProp("LoadStringEnabled", DataType.Bool, value);}
}

export class ServerStorage extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ServerStorage", true);}
    public static new() {return new ServerStorage();}
}

export abstract class ServiceProvider extends CoreInstance {
    protected constructor(className: string) {super(className);}
}

export abstract class GenericSettings extends ServiceProvider {
    protected constructor(className: string) {super(className);}
}

export class ServiceVisibilityService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ServiceVisibilityService", true);}
    public static new() {return new ServiceVisibilityService();}
    public get hiddenServices() {return this.getProp("HiddenServices", DataType.String);}
    public set hiddenServices(value) {this.setProp("HiddenServices", DataType.String, value);}
    public get visibleServices() {return this.getProp("VisibleServices", DataType.String);}
    public set visibleServices(value) {this.setProp("VisibleServices", DataType.String, value);}
}

export class SessionService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "SessionService", true);}
    public static new() {return new SessionService();}
}

export class SharedTableRegistry extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "SharedTableRegistry", true);}
    public static new() {return new SharedTableRegistry();}
}

export class ShorelineUpgraderService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ShorelineUpgraderService", true);}
    public static new() {return new ShorelineUpgraderService();}
}

export class Sky extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Sky");}
    public static new() {return new Sky();}
    public get celestialBodiesShown() {return this.getProp("CelestialBodiesShown", DataType.Bool);}
    public set celestialBodiesShown(value) {this.setProp("CelestialBodiesShown", DataType.Bool, value);}
    public get moonAngularSize() {return this.getProp("MoonAngularSize", DataType.Float32);}
    public set moonAngularSize(value) {this.setProp("MoonAngularSize", DataType.Float32, value);}
    public get moonTextureId() {return this.getProp("MoonTextureId", DataType.String);}
    public set moonTextureId(value) {this.setProp("MoonTextureId", DataType.String, value);}
    public get skyboxBk() {return this.getProp("SkyboxBk", DataType.String);}
    public set skyboxBk(value) {this.setProp("SkyboxBk", DataType.String, value);}
    public get skyboxDn() {return this.getProp("SkyboxDn", DataType.String);}
    public set skyboxDn(value) {this.setProp("SkyboxDn", DataType.String, value);}
    public get skyboxFt() {return this.getProp("SkyboxFt", DataType.String);}
    public set skyboxFt(value) {this.setProp("SkyboxFt", DataType.String, value);}
    public get skyboxLf() {return this.getProp("SkyboxLf", DataType.String);}
    public set skyboxLf(value) {this.setProp("SkyboxLf", DataType.String, value);}
    public get skyboxRt() {return this.getProp("SkyboxRt", DataType.String);}
    public set skyboxRt(value) {this.setProp("SkyboxRt", DataType.String, value);}
    public get skyboxUp() {return this.getProp("SkyboxUp", DataType.String);}
    public set skyboxUp(value) {this.setProp("SkyboxUp", DataType.String, value);}
    public get starCount() {return this.getProp("StarCount", DataType.Int32);}
    public set starCount(value) {this.setProp("StarCount", DataType.Int32, value);}
    public get sunAngularSize() {return this.getProp("SunAngularSize", DataType.Float32);}
    public set sunAngularSize(value) {this.setProp("SunAngularSize", DataType.Float32, value);}
    public get sunTextureId() {return this.getProp("SunTextureId", DataType.String);}
    public set sunTextureId(value) {this.setProp("SunTextureId", DataType.String, value);}
}

export class Smoke extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Smoke");}
    public static new() {return new Smoke();}
    public get color() {return this.getProp("Color", DataType.Color3);}
    public set color(value) {this.setProp("Color", DataType.Color3, value);}
    public get enabled() {return this.getProp("Enabled", DataType.Bool);}
    public set enabled(value) {this.setProp("Enabled", DataType.Bool, value);}
    public get timeScale() {return this.getProp("TimeScale", DataType.Float32);}
    public set timeScale(value) {this.setProp("TimeScale", DataType.Float32, value);}
    public get opacity_xml() {return this.getProp("opacity_xml", DataType.Float32);}
    public set opacity_xml(value) {this.setProp("opacity_xml", DataType.Float32, value);}
    public get riseVelocity_xml() {return this.getProp("riseVelocity_xml", DataType.Float32);}
    public set riseVelocity_xml(value) {this.setProp("riseVelocity_xml", DataType.Float32, value);}
    public get size_xml() {return this.getProp("size_xml", DataType.Float32);}
    public set size_xml(value) {this.setProp("size_xml", DataType.Float32, value);}
}

export class SmoothVoxelsUpgraderService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "SmoothVoxelsUpgraderService", true);}
    public static new() {return new SmoothVoxelsUpgraderService();}
}

export class SnippetService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "SnippetService", true);}
    public static new() {return new SnippetService();}
}

export class SocialService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "SocialService", true);}
    public static new() {return new SocialService();}
}

export class Sound extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Sound");}
    public static new() {return new Sound();}
    public get emitterSize() {return this.getProp("EmitterSize", DataType.Float32);}
    public set emitterSize(value) {this.setProp("EmitterSize", DataType.Float32, value);}
    public get loopRegion() {return this.getProp("LoopRegion", DataType.NumberRange);}
    public set loopRegion(value) {this.setProp("LoopRegion", DataType.NumberRange, value);}
    public get looped() {return this.getProp("Looped", DataType.Bool);}
    public set looped(value) {this.setProp("Looped", DataType.Bool, value);}
    public get minDistance() {return this.getProp("MinDistance", DataType.Float32);}
    public set minDistance(value) {this.setProp("MinDistance", DataType.Float32, value);}
    public get pitch() {return this.getProp("Pitch", DataType.Float32);}
    public set pitch(value) {this.setProp("Pitch", DataType.Float32, value);}
    public get playOnRemove() {return this.getProp("PlayOnRemove", DataType.Bool);}
    public set playOnRemove(value) {this.setProp("PlayOnRemove", DataType.Bool, value);}
    public get playbackRegion() {return this.getProp("PlaybackRegion", DataType.NumberRange);}
    public set playbackRegion(value) {this.setProp("PlaybackRegion", DataType.NumberRange, value);}
    public get playbackRegionsEnabled() {return this.getProp("PlaybackRegionsEnabled", DataType.Bool);}
    public set playbackRegionsEnabled(value) {this.setProp("PlaybackRegionsEnabled", DataType.Bool, value);}
    public get playbackSpeed() {return this.getProp("PlaybackSpeed", DataType.Float32);}
    public set playbackSpeed(value) {this.setProp("PlaybackSpeed", DataType.Float32, value);}
    public get playing() {return this.getProp("Playing", DataType.Bool);}
    public set playing(value) {this.setProp("Playing", DataType.Bool, value);}
    public get rollOffMode() {return this.getProp("RollOffMode", DataType.Enum) as RollOffMode | undefined;}
    public set rollOffMode(value) {this.setProp("RollOffMode", DataType.Enum, value);}
    public get soundGroup() {return this.getProp("SoundGroup", DataType.Referent) as SoundGroup | undefined;}
    public set soundGroup(value) {this.setProp("SoundGroup", DataType.Referent, value);}
    public get soundId() {return this.getProp("SoundId", DataType.String);}
    public set soundId(value) {this.setProp("SoundId", DataType.String, value);}
    public get timePosition() {return this.getProp("TimePosition", DataType.Float64);}
    public set timePosition(value) {this.setProp("TimePosition", DataType.Float64, value);}
    public get volume() {return this.getProp("Volume", DataType.Float32);}
    public set volume(value) {this.setProp("Volume", DataType.Float32, value);}
    public get xmlRead_MaxDistance_3() {return this.getProp("xmlRead_MaxDistance_3", DataType.Float32);}
    public set xmlRead_MaxDistance_3(value) {this.setProp("xmlRead_MaxDistance_3", DataType.Float32, value);}
    public get xmlRead_MinDistance_3() {return this.getProp("xmlRead_MinDistance_3", DataType.Float32);}
    public set xmlRead_MinDistance_3(value) {this.setProp("xmlRead_MinDistance_3", DataType.Float32, value);}
}

export abstract class SoundEffect extends CoreInstance {
    protected constructor(className: string) {super(className);}
    public get enabled() {return this.getProp("Enabled", DataType.Bool);}
    public set enabled(value) {this.setProp("Enabled", DataType.Bool, value);}
    public get priority() {return this.getProp("Priority", DataType.Int32);}
    public set priority(value) {this.setProp("Priority", DataType.Int32, value);}
}

export class ChorusSoundEffect extends SoundEffect {
    protected constructor(className?: string) {super(className ?? "ChorusSoundEffect");}
    public static new() {return new ChorusSoundEffect();}
    public get depth() {return this.getProp("Depth", DataType.Float32);}
    public set depth(value) {this.setProp("Depth", DataType.Float32, value);}
    public get mix() {return this.getProp("Mix", DataType.Float32);}
    public set mix(value) {this.setProp("Mix", DataType.Float32, value);}
    public get rate() {return this.getProp("Rate", DataType.Float32);}
    public set rate(value) {this.setProp("Rate", DataType.Float32, value);}
}

export class CompressorSoundEffect extends SoundEffect {
    protected constructor(className?: string) {super(className ?? "CompressorSoundEffect");}
    public static new() {return new CompressorSoundEffect();}
    public get attack() {return this.getProp("Attack", DataType.Float32);}
    public set attack(value) {this.setProp("Attack", DataType.Float32, value);}
    public get gainMakeup() {return this.getProp("GainMakeup", DataType.Float32);}
    public set gainMakeup(value) {this.setProp("GainMakeup", DataType.Float32, value);}
    public get ratio() {return this.getProp("Ratio", DataType.Float32);}
    public set ratio(value) {this.setProp("Ratio", DataType.Float32, value);}
    public get release() {return this.getProp("Release", DataType.Float32);}
    public set release(value) {this.setProp("Release", DataType.Float32, value);}
    public get sideChain() {return this.getProp("SideChain", DataType.Referent) as CoreInstance | undefined;}
    public set sideChain(value) {this.setProp("SideChain", DataType.Referent, value);}
    public get threshold() {return this.getProp("Threshold", DataType.Float32);}
    public set threshold(value) {this.setProp("Threshold", DataType.Float32, value);}
}

export abstract class CustomSoundEffect extends SoundEffect {
    protected constructor(className: string) {super(className);}
}

export class DistortionSoundEffect extends SoundEffect {
    protected constructor(className?: string) {super(className ?? "DistortionSoundEffect");}
    public static new() {return new DistortionSoundEffect();}
    public get level() {return this.getProp("Level", DataType.Float32);}
    public set level(value) {this.setProp("Level", DataType.Float32, value);}
}

export class EchoSoundEffect extends SoundEffect {
    protected constructor(className?: string) {super(className ?? "EchoSoundEffect");}
    public static new() {return new EchoSoundEffect();}
    public get delay() {return this.getProp("Delay", DataType.Float32);}
    public set delay(value) {this.setProp("Delay", DataType.Float32, value);}
    public get dryLevel() {return this.getProp("DryLevel", DataType.Float32);}
    public set dryLevel(value) {this.setProp("DryLevel", DataType.Float32, value);}
    public get feedback() {return this.getProp("Feedback", DataType.Float32);}
    public set feedback(value) {this.setProp("Feedback", DataType.Float32, value);}
    public get wetLevel() {return this.getProp("WetLevel", DataType.Float32);}
    public set wetLevel(value) {this.setProp("WetLevel", DataType.Float32, value);}
}

export class EqualizerSoundEffect extends SoundEffect {
    protected constructor(className?: string) {super(className ?? "EqualizerSoundEffect");}
    public static new() {return new EqualizerSoundEffect();}
    public get highGain() {return this.getProp("HighGain", DataType.Float32);}
    public set highGain(value) {this.setProp("HighGain", DataType.Float32, value);}
    public get lowGain() {return this.getProp("LowGain", DataType.Float32);}
    public set lowGain(value) {this.setProp("LowGain", DataType.Float32, value);}
    public get midGain() {return this.getProp("MidGain", DataType.Float32);}
    public set midGain(value) {this.setProp("MidGain", DataType.Float32, value);}
}

export class FlangeSoundEffect extends SoundEffect {
    protected constructor(className?: string) {super(className ?? "FlangeSoundEffect");}
    public static new() {return new FlangeSoundEffect();}
    public get depth() {return this.getProp("Depth", DataType.Float32);}
    public set depth(value) {this.setProp("Depth", DataType.Float32, value);}
    public get mix() {return this.getProp("Mix", DataType.Float32);}
    public set mix(value) {this.setProp("Mix", DataType.Float32, value);}
    public get rate() {return this.getProp("Rate", DataType.Float32);}
    public set rate(value) {this.setProp("Rate", DataType.Float32, value);}
}

export class PitchShiftSoundEffect extends SoundEffect {
    protected constructor(className?: string) {super(className ?? "PitchShiftSoundEffect");}
    public static new() {return new PitchShiftSoundEffect();}
    public get octave() {return this.getProp("Octave", DataType.Float32);}
    public set octave(value) {this.setProp("Octave", DataType.Float32, value);}
}

export class ReverbSoundEffect extends SoundEffect {
    protected constructor(className?: string) {super(className ?? "ReverbSoundEffect");}
    public static new() {return new ReverbSoundEffect();}
    public get decayTime() {return this.getProp("DecayTime", DataType.Float32);}
    public set decayTime(value) {this.setProp("DecayTime", DataType.Float32, value);}
    public get density() {return this.getProp("Density", DataType.Float32);}
    public set density(value) {this.setProp("Density", DataType.Float32, value);}
    public get diffusion() {return this.getProp("Diffusion", DataType.Float32);}
    public set diffusion(value) {this.setProp("Diffusion", DataType.Float32, value);}
    public get dryLevel() {return this.getProp("DryLevel", DataType.Float32);}
    public set dryLevel(value) {this.setProp("DryLevel", DataType.Float32, value);}
    public get wetLevel() {return this.getProp("WetLevel", DataType.Float32);}
    public set wetLevel(value) {this.setProp("WetLevel", DataType.Float32, value);}
}

export class TremoloSoundEffect extends SoundEffect {
    protected constructor(className?: string) {super(className ?? "TremoloSoundEffect");}
    public static new() {return new TremoloSoundEffect();}
    public get depth() {return this.getProp("Depth", DataType.Float32);}
    public set depth(value) {this.setProp("Depth", DataType.Float32, value);}
    public get duty() {return this.getProp("Duty", DataType.Float32);}
    public set duty(value) {this.setProp("Duty", DataType.Float32, value);}
    public get frequency() {return this.getProp("Frequency", DataType.Float32);}
    public set frequency(value) {this.setProp("Frequency", DataType.Float32, value);}
}

export class SoundGroup extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "SoundGroup");}
    public static new() {return new SoundGroup();}
    public get volume() {return this.getProp("Volume", DataType.Float32);}
    public set volume(value) {this.setProp("Volume", DataType.Float32, value);}
}

export class SoundService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "SoundService", true);}
    public static new() {return new SoundService();}
    public get ambientReverb() {return this.getProp("AmbientReverb", DataType.Enum) as ReverbType | undefined;}
    public set ambientReverb(value) {this.setProp("AmbientReverb", DataType.Enum, value);}
    public get distanceFactor() {return this.getProp("DistanceFactor", DataType.Float32);}
    public set distanceFactor(value) {this.setProp("DistanceFactor", DataType.Float32, value);}
    public get dopplerScale() {return this.getProp("DopplerScale", DataType.Float32);}
    public set dopplerScale(value) {this.setProp("DopplerScale", DataType.Float32, value);}
    public get respectFilteringEnabled() {return this.getProp("RespectFilteringEnabled", DataType.Bool);}
    public set respectFilteringEnabled(value) {this.setProp("RespectFilteringEnabled", DataType.Bool, value);}
    public get rolloffScale() {return this.getProp("RolloffScale", DataType.Float32);}
    public set rolloffScale(value) {this.setProp("RolloffScale", DataType.Float32, value);}
    public get volumetricAudio() {return this.getProp("VolumetricAudio", DataType.Enum) as VolumetricAudio | undefined;}
    public set volumetricAudio(value) {this.setProp("VolumetricAudio", DataType.Enum, value);}
}

export class Sparkles extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Sparkles");}
    public static new() {return new Sparkles();}
    public get enabled() {return this.getProp("Enabled", DataType.Bool);}
    public set enabled(value) {this.setProp("Enabled", DataType.Bool, value);}
    public get sparkleColor() {return this.getProp("SparkleColor", DataType.Color3);}
    public set sparkleColor(value) {this.setProp("SparkleColor", DataType.Color3, value);}
    public get timeScale() {return this.getProp("TimeScale", DataType.Float32);}
    public set timeScale(value) {this.setProp("TimeScale", DataType.Float32, value);}
}

export class SpawnerService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "SpawnerService", true);}
    public static new() {return new SpawnerService();}
}

export class StandalonePluginScripts extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "StandalonePluginScripts");}
    public static new() {return new StandalonePluginScripts();}
}

export class StarterGear extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "StarterGear");}
    public static new() {return new StarterGear();}
}

export class StarterPack extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "StarterPack", true);}
    public static new() {return new StarterPack();}
}

export class StarterPlayer extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "StarterPlayer", true);}
    public static new() {return new StarterPlayer();}
    public get allowCustomAnimations() {return this.getProp("AllowCustomAnimations", DataType.Bool);}
    public set allowCustomAnimations(value) {this.setProp("AllowCustomAnimations", DataType.Bool, value);}
    public get autoJumpEnabled() {return this.getProp("AutoJumpEnabled", DataType.Bool);}
    public set autoJumpEnabled(value) {this.setProp("AutoJumpEnabled", DataType.Bool, value);}
    public get avatarJointUpgrade_Serialized() {return this.getProp("AvatarJointUpgrade_Serialized", DataType.Enum) as AvatarJointUpgrade | undefined;}
    public set avatarJointUpgrade_Serialized(value) {this.setProp("AvatarJointUpgrade_Serialized", DataType.Enum, value);}
    public get cameraMaxZoomDistance() {return this.getProp("CameraMaxZoomDistance", DataType.Float32);}
    public set cameraMaxZoomDistance(value) {this.setProp("CameraMaxZoomDistance", DataType.Float32, value);}
    public get cameraMinZoomDistance() {return this.getProp("CameraMinZoomDistance", DataType.Float32);}
    public set cameraMinZoomDistance(value) {this.setProp("CameraMinZoomDistance", DataType.Float32, value);}
    public get cameraMode() {return this.getProp("CameraMode", DataType.Enum) as CameraMode | undefined;}
    public set cameraMode(value) {this.setProp("CameraMode", DataType.Enum, value);}
    public get characterJumpHeight() {return this.getProp("CharacterJumpHeight", DataType.Float32);}
    public set characterJumpHeight(value) {this.setProp("CharacterJumpHeight", DataType.Float32, value);}
    public get characterJumpPower() {return this.getProp("CharacterJumpPower", DataType.Float32);}
    public set characterJumpPower(value) {this.setProp("CharacterJumpPower", DataType.Float32, value);}
    public get characterMaxSlopeAngle() {return this.getProp("CharacterMaxSlopeAngle", DataType.Float32);}
    public set characterMaxSlopeAngle(value) {this.setProp("CharacterMaxSlopeAngle", DataType.Float32, value);}
    public get characterUseJumpPower() {return this.getProp("CharacterUseJumpPower", DataType.Bool);}
    public set characterUseJumpPower(value) {this.setProp("CharacterUseJumpPower", DataType.Bool, value);}
    public get characterWalkSpeed() {return this.getProp("CharacterWalkSpeed", DataType.Float32);}
    public set characterWalkSpeed(value) {this.setProp("CharacterWalkSpeed", DataType.Float32, value);}
    public get devCameraOcclusionMode() {return this.getProp("DevCameraOcclusionMode", DataType.Enum) as DevCameraOcclusionMode | undefined;}
    public set devCameraOcclusionMode(value) {this.setProp("DevCameraOcclusionMode", DataType.Enum, value);}
    public get devComputerCameraMovementMode() {return this.getProp("DevComputerCameraMovementMode", DataType.Enum) as DevComputerCameraMovementMode | undefined;}
    public set devComputerCameraMovementMode(value) {this.setProp("DevComputerCameraMovementMode", DataType.Enum, value);}
    public get devComputerMovementMode() {return this.getProp("DevComputerMovementMode", DataType.Enum) as DevComputerMovementMode | undefined;}
    public set devComputerMovementMode(value) {this.setProp("DevComputerMovementMode", DataType.Enum, value);}
    public get devTouchCameraMovementMode() {return this.getProp("DevTouchCameraMovementMode", DataType.Enum) as DevTouchCameraMovementMode | undefined;}
    public set devTouchCameraMovementMode(value) {this.setProp("DevTouchCameraMovementMode", DataType.Enum, value);}
    public get devTouchMovementMode() {return this.getProp("DevTouchMovementMode", DataType.Enum) as DevTouchMovementMode | undefined;}
    public set devTouchMovementMode(value) {this.setProp("DevTouchMovementMode", DataType.Enum, value);}
    public get enableDynamicHeads() {return this.getProp("EnableDynamicHeads", DataType.Enum) as LoadDynamicHeads | undefined;}
    public set enableDynamicHeads(value) {this.setProp("EnableDynamicHeads", DataType.Enum, value);}
    public get enableMouseLockOption() {return this.getProp("EnableMouseLockOption", DataType.Bool);}
    public set enableMouseLockOption(value) {this.setProp("EnableMouseLockOption", DataType.Bool, value);}
    public get gameSettingsAssetIDFace() {return this.getProp("GameSettingsAssetIDFace", DataType.Int64);}
    public set gameSettingsAssetIDFace(value) {this.setProp("GameSettingsAssetIDFace", DataType.Int64, value);}
    public get gameSettingsAssetIDHead() {return this.getProp("GameSettingsAssetIDHead", DataType.Int64);}
    public set gameSettingsAssetIDHead(value) {this.setProp("GameSettingsAssetIDHead", DataType.Int64, value);}
    public get gameSettingsAssetIDLeftArm() {return this.getProp("GameSettingsAssetIDLeftArm", DataType.Int64);}
    public set gameSettingsAssetIDLeftArm(value) {this.setProp("GameSettingsAssetIDLeftArm", DataType.Int64, value);}
    public get gameSettingsAssetIDLeftLeg() {return this.getProp("GameSettingsAssetIDLeftLeg", DataType.Int64);}
    public set gameSettingsAssetIDLeftLeg(value) {this.setProp("GameSettingsAssetIDLeftLeg", DataType.Int64, value);}
    public get gameSettingsAssetIDPants() {return this.getProp("GameSettingsAssetIDPants", DataType.Int64);}
    public set gameSettingsAssetIDPants(value) {this.setProp("GameSettingsAssetIDPants", DataType.Int64, value);}
    public get gameSettingsAssetIDRightArm() {return this.getProp("GameSettingsAssetIDRightArm", DataType.Int64);}
    public set gameSettingsAssetIDRightArm(value) {this.setProp("GameSettingsAssetIDRightArm", DataType.Int64, value);}
    public get gameSettingsAssetIDRightLeg() {return this.getProp("GameSettingsAssetIDRightLeg", DataType.Int64);}
    public set gameSettingsAssetIDRightLeg(value) {this.setProp("GameSettingsAssetIDRightLeg", DataType.Int64, value);}
    public get gameSettingsAssetIDShirt() {return this.getProp("GameSettingsAssetIDShirt", DataType.Int64);}
    public set gameSettingsAssetIDShirt(value) {this.setProp("GameSettingsAssetIDShirt", DataType.Int64, value);}
    public get gameSettingsAssetIDTeeShirt() {return this.getProp("GameSettingsAssetIDTeeShirt", DataType.Int64);}
    public set gameSettingsAssetIDTeeShirt(value) {this.setProp("GameSettingsAssetIDTeeShirt", DataType.Int64, value);}
    public get gameSettingsAssetIDTorso() {return this.getProp("GameSettingsAssetIDTorso", DataType.Int64);}
    public set gameSettingsAssetIDTorso(value) {this.setProp("GameSettingsAssetIDTorso", DataType.Int64, value);}
    public get gameSettingsAvatar() {return this.getProp("GameSettingsAvatar", DataType.Enum) as GameAvatarType | undefined;}
    public set gameSettingsAvatar(value) {this.setProp("GameSettingsAvatar", DataType.Enum, value);}
    public get gameSettingsR15Collision() {return this.getProp("GameSettingsR15Collision", DataType.Enum) as R15CollisionType | undefined;}
    public set gameSettingsR15Collision(value) {this.setProp("GameSettingsR15Collision", DataType.Enum, value);}
    public get gameSettingsScaleRangeBodyType() {return this.getProp("GameSettingsScaleRangeBodyType", DataType.NumberRange);}
    public set gameSettingsScaleRangeBodyType(value) {this.setProp("GameSettingsScaleRangeBodyType", DataType.NumberRange, value);}
    public get gameSettingsScaleRangeHead() {return this.getProp("GameSettingsScaleRangeHead", DataType.NumberRange);}
    public set gameSettingsScaleRangeHead(value) {this.setProp("GameSettingsScaleRangeHead", DataType.NumberRange, value);}
    public get gameSettingsScaleRangeHeight() {return this.getProp("GameSettingsScaleRangeHeight", DataType.NumberRange);}
    public set gameSettingsScaleRangeHeight(value) {this.setProp("GameSettingsScaleRangeHeight", DataType.NumberRange, value);}
    public get gameSettingsScaleRangeProportion() {return this.getProp("GameSettingsScaleRangeProportion", DataType.NumberRange);}
    public set gameSettingsScaleRangeProportion(value) {this.setProp("GameSettingsScaleRangeProportion", DataType.NumberRange, value);}
    public get gameSettingsScaleRangeWidth() {return this.getProp("GameSettingsScaleRangeWidth", DataType.NumberRange);}
    public set gameSettingsScaleRangeWidth(value) {this.setProp("GameSettingsScaleRangeWidth", DataType.NumberRange, value);}
    public get healthDisplayDistance() {return this.getProp("HealthDisplayDistance", DataType.Float32);}
    public set healthDisplayDistance(value) {this.setProp("HealthDisplayDistance", DataType.Float32, value);}
    public get loadCharacterAppearance() {return this.getProp("LoadCharacterAppearance", DataType.Bool);}
    public set loadCharacterAppearance(value) {this.setProp("LoadCharacterAppearance", DataType.Bool, value);}
    public get loadCharacterLayeredClothing() {return this.getProp("LoadCharacterLayeredClothing", DataType.Enum) as LoadCharacterLayeredClothing | undefined;}
    public set loadCharacterLayeredClothing(value) {this.setProp("LoadCharacterLayeredClothing", DataType.Enum, value);}
    public get luaCharacterController() {return this.getProp("LuaCharacterController", DataType.Enum) as CharacterControlMode | undefined;}
    public set luaCharacterController(value) {this.setProp("LuaCharacterController", DataType.Enum, value);}
    public get nameDisplayDistance() {return this.getProp("NameDisplayDistance", DataType.Float32);}
    public set nameDisplayDistance(value) {this.setProp("NameDisplayDistance", DataType.Float32, value);}
    public get userEmotesEnabled() {return this.getProp("UserEmotesEnabled", DataType.Bool);}
    public set userEmotesEnabled(value) {this.setProp("UserEmotesEnabled", DataType.Bool, value);}
}

export class StarterPlayerScripts extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "StarterPlayerScripts");}
    public static new() {return new StarterPlayerScripts();}
}

export class StarterCharacterScripts extends StarterPlayerScripts {
    protected constructor(className?: string) {super(className ?? "StarterCharacterScripts");}
    public static new() {return new StarterCharacterScripts();}
}

export class StartupMessageService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "StartupMessageService", true);}
    public static new() {return new StartupMessageService();}
}

export class Stats extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Stats", true);}
    public static new() {return new Stats();}
}

export abstract class StatsItem extends CoreInstance {
    protected constructor(className: string) {super(className);}
}

export class StopWatchReporter extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "StopWatchReporter", true);}
    public static new() {return new StopWatchReporter();}
}

export class StreamingService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "StreamingService", true);}
    public static new() {return new StreamingService();}
}

export class StudioAssetService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "StudioAssetService", true);}
    public static new() {return new StudioAssetService();}
}

export class StudioAttachment extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "StudioAttachment");}
    public static new() {return new StudioAttachment();}
    public get autoHideParent() {return this.getProp("AutoHideParent", DataType.Bool);}
    public set autoHideParent(value) {this.setProp("AutoHideParent", DataType.Bool, value);}
    public get isArrowVisible() {return this.getProp("IsArrowVisible", DataType.Bool);}
    public set isArrowVisible(value) {this.setProp("IsArrowVisible", DataType.Bool, value);}
    public get offset() {return this.getProp("Offset", DataType.Vector2);}
    public set offset(value) {this.setProp("Offset", DataType.Vector2, value);}
    public get sourceAnchorPoint() {return this.getProp("SourceAnchorPoint", DataType.Vector2);}
    public set sourceAnchorPoint(value) {this.setProp("SourceAnchorPoint", DataType.Vector2, value);}
    public get targetAnchorPoint() {return this.getProp("TargetAnchorPoint", DataType.Vector2);}
    public set targetAnchorPoint(value) {this.setProp("TargetAnchorPoint", DataType.Vector2, value);}
}

export class StudioCallout extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "StudioCallout");}
    public static new() {return new StudioCallout();}
}

export class StudioData extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "StudioData", true);}
    public static new() {return new StudioData();}
    public get enableScriptCollabByDefaultOnLoad() {return this.getProp("EnableScriptCollabByDefaultOnLoad", DataType.Bool);}
    public set enableScriptCollabByDefaultOnLoad(value) {this.setProp("EnableScriptCollabByDefaultOnLoad", DataType.Bool, value);}
}

export class StudioDeviceEmulatorService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "StudioDeviceEmulatorService", true);}
    public static new() {return new StudioDeviceEmulatorService();}
}

export abstract class StudioObjectBase extends CoreInstance {
    protected constructor(className: string) {super(className);}
}

export class StudioPublishService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "StudioPublishService", true);}
    public static new() {return new StudioPublishService();}
    public get publishLocked() {return this.getProp("PublishLocked", DataType.Bool);}
    public set publishLocked(value) {this.setProp("PublishLocked", DataType.Bool, value);}
}

export class StudioScriptDebugEventListener extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "StudioScriptDebugEventListener", true);}
    public static new() {return new StudioScriptDebugEventListener();}
}

export class StudioSdkService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "StudioSdkService", true);}
    public static new() {return new StudioSdkService();}
}

export class StudioService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "StudioService", true);}
    public static new() {return new StudioService();}
}

export class StudioWidgetsService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "StudioWidgetsService", true);}
    public static new() {return new StudioWidgetsService();}
}

export abstract class StyleBase extends CoreInstance {
    protected constructor(className: string) {super(className);}
}

export class StyleRule extends StyleBase {
    protected constructor(className?: string) {super(className ?? "StyleRule");}
    public static new() {return new StyleRule();}
    public get index() {return this.getProp("Index", DataType.Int32);}
    public set index(value) {this.setProp("Index", DataType.Int32, value);}
    public get propertiesSerialize() {return this.getProp("PropertiesSerialize", DataType.String);}
    public set propertiesSerialize(value) {this.setProp("PropertiesSerialize", DataType.String, value);}
    public get selector() {return this.getProp("Selector", DataType.String);}
    public set selector(value) {this.setProp("Selector", DataType.String, value);}
}

export class StyleSheet extends StyleBase {
    protected constructor(className?: string) {super(className ?? "StyleSheet");}
    public static new() {return new StyleSheet();}
}

export class StyleDerive extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "StyleDerive");}
    public static new() {return new StyleDerive();}
    public get index() {return this.getProp("Index", DataType.Int32);}
    public set index(value) {this.setProp("Index", DataType.Int32, value);}
    public get styleSheet() {return this.getProp("StyleSheet", DataType.Referent) as StyleSheet | undefined;}
    public set styleSheet(value) {this.setProp("StyleSheet", DataType.Referent, value);}
}

export class StyleLink extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "StyleLink");}
    public static new() {return new StyleLink();}
    public get styleSheet() {return this.getProp("StyleSheet", DataType.Referent) as StyleSheet | undefined;}
    public set styleSheet(value) {this.setProp("StyleSheet", DataType.Referent, value);}
}

export class StylingService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "StylingService", true);}
    public static new() {return new StylingService();}
}

export class SurfaceAppearance extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "SurfaceAppearance");}
    public static new() {return new SurfaceAppearance();}
    public get alphaMode() {return this.getProp("AlphaMode", DataType.Enum) as AlphaMode | undefined;}
    public set alphaMode(value) {this.setProp("AlphaMode", DataType.Enum, value);}
    public get colorMap() {return this.getProp("ColorMap", DataType.String);}
    public set colorMap(value) {this.setProp("ColorMap", DataType.String, value);}
    public get metalnessMap() {return this.getProp("MetalnessMap", DataType.String);}
    public set metalnessMap(value) {this.setProp("MetalnessMap", DataType.String, value);}
    public get normalMap() {return this.getProp("NormalMap", DataType.String);}
    public set normalMap(value) {this.setProp("NormalMap", DataType.String, value);}
    public get roughnessMap() {return this.getProp("RoughnessMap", DataType.String);}
    public set roughnessMap(value) {this.setProp("RoughnessMap", DataType.String, value);}
    public get texturePack() {return this.getProp("TexturePack", DataType.String);}
    public set texturePack(value) {this.setProp("TexturePack", DataType.String, value);}
}

export class TaskScheduler extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "TaskScheduler", true);}
    public static new() {return new TaskScheduler();}
    public get threadPoolConfig() {return this.getProp("ThreadPoolConfig", DataType.Enum) as ThreadPoolConfig | undefined;}
    public set threadPoolConfig(value) {this.setProp("ThreadPoolConfig", DataType.Enum, value);}
}

export class Team extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Team");}
    public static new() {return new Team();}
    public get autoAssignable() {return this.getProp("AutoAssignable", DataType.Bool);}
    public set autoAssignable(value) {this.setProp("AutoAssignable", DataType.Bool, value);}
    public get autoColorCharacters() {return this.getProp("AutoColorCharacters", DataType.Bool);}
    public set autoColorCharacters(value) {this.setProp("AutoColorCharacters", DataType.Bool, value);}
    public get score() {return this.getProp("Score", DataType.Int32);}
    public set score(value) {this.setProp("Score", DataType.Int32, value);}
    public get teamColor() {return this.getProp("TeamColor", DataType.BrickColor);}
    public set teamColor(value) {this.setProp("TeamColor", DataType.BrickColor, value);}
}

export class TeamCreateData extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "TeamCreateData", true);}
    public static new() {return new TeamCreateData();}
}

export class TeamCreatePublishService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "TeamCreatePublishService", true);}
    public static new() {return new TeamCreatePublishService();}
}

export class TeamCreateService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "TeamCreateService", true);}
    public static new() {return new TeamCreateService();}
}

export class Teams extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Teams", true);}
    public static new() {return new Teams();}
}

export class TeleportOptions extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "TeleportOptions");}
    public static new() {return new TeleportOptions();}
    public get reservedServerAccessCode() {return this.getProp("ReservedServerAccessCode", DataType.String);}
    public set reservedServerAccessCode(value) {this.setProp("ReservedServerAccessCode", DataType.String, value);}
    public get serverInstanceId() {return this.getProp("ServerInstanceId", DataType.String);}
    public set serverInstanceId(value) {this.setProp("ServerInstanceId", DataType.String, value);}
    public get shouldReserveServer() {return this.getProp("ShouldReserveServer", DataType.Bool);}
    public set shouldReserveServer(value) {this.setProp("ShouldReserveServer", DataType.Bool, value);}
}

export class TeleportService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "TeleportService", true);}
    public static new() {return new TeleportService();}
    public get customizedTeleportUI() {return this.getProp("CustomizedTeleportUI", DataType.Bool);}
    public set customizedTeleportUI(value) {this.setProp("CustomizedTeleportUI", DataType.Bool, value);}
}

export class TemporaryCageMeshProvider extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "TemporaryCageMeshProvider", true);}
    public static new() {return new TemporaryCageMeshProvider();}
}

export class TemporaryScriptService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "TemporaryScriptService", true);}
    public static new() {return new TemporaryScriptService();}
}

export class TerrainDetail extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "TerrainDetail");}
    public static new() {return new TerrainDetail();}
    public get colorMap() {return this.getProp("ColorMap", DataType.String);}
    public set colorMap(value) {this.setProp("ColorMap", DataType.String, value);}
    public get face() {return this.getProp("Face", DataType.Enum) as TerrainFace | undefined;}
    public set face(value) {this.setProp("Face", DataType.Enum, value);}
    public get materialPattern() {return this.getProp("MaterialPattern", DataType.Enum) as MaterialPattern | undefined;}
    public set materialPattern(value) {this.setProp("MaterialPattern", DataType.Enum, value);}
    public get metalnessMap() {return this.getProp("MetalnessMap", DataType.String);}
    public set metalnessMap(value) {this.setProp("MetalnessMap", DataType.String, value);}
    public get normalMap() {return this.getProp("NormalMap", DataType.String);}
    public set normalMap(value) {this.setProp("NormalMap", DataType.String, value);}
    public get roughnessMap() {return this.getProp("RoughnessMap", DataType.String);}
    public set roughnessMap(value) {this.setProp("RoughnessMap", DataType.String, value);}
    public get studsPerTile() {return this.getProp("StudsPerTile", DataType.Float32);}
    public set studsPerTile(value) {this.setProp("StudsPerTile", DataType.Float32, value);}
    public get texturePack() {return this.getProp("TexturePack", DataType.String);}
    public set texturePack(value) {this.setProp("TexturePack", DataType.String, value);}
}

export class TerrainRegion extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "TerrainRegion");}
    public static new() {return new TerrainRegion();}
    public get smoothGrid() {return this.getProp("SmoothGrid", DataType.String);}
    public set smoothGrid(value) {this.setProp("SmoothGrid", DataType.String, value);}
}

export class TestService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "TestService", true);}
    public static new() {return new TestService();}
    public get autoRuns() {return this.getProp("AutoRuns", DataType.Bool);}
    public set autoRuns(value) {this.setProp("AutoRuns", DataType.Bool, value);}
    public get description() {return this.getProp("Description", DataType.String);}
    public set description(value) {this.setProp("Description", DataType.String, value);}
    public get executeWithStudioRun() {return this.getProp("ExecuteWithStudioRun", DataType.Bool);}
    public set executeWithStudioRun(value) {this.setProp("ExecuteWithStudioRun", DataType.Bool, value);}
    public get isSleepAllowed() {return this.getProp("IsSleepAllowed", DataType.Bool);}
    public set isSleepAllowed(value) {this.setProp("IsSleepAllowed", DataType.Bool, value);}
    public get numberOfPlayers() {return this.getProp("NumberOfPlayers", DataType.Int32);}
    public set numberOfPlayers(value) {this.setProp("NumberOfPlayers", DataType.Int32, value);}
    public get simulateSecondsLag() {return this.getProp("SimulateSecondsLag", DataType.Float64);}
    public set simulateSecondsLag(value) {this.setProp("SimulateSecondsLag", DataType.Float64, value);}
    public get timeout() {return this.getProp("Timeout", DataType.Float64);}
    public set timeout(value) {this.setProp("Timeout", DataType.Float64, value);}
}

export class TextBoxService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "TextBoxService", true);}
    public static new() {return new TextBoxService();}
}

export class TextChannel extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "TextChannel");}
    public static new() {return new TextChannel();}
}

export class TextChatCommand extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "TextChatCommand");}
    public static new() {return new TextChatCommand();}
    public get autocompleteVisible() {return this.getProp("AutocompleteVisible", DataType.Bool);}
    public set autocompleteVisible(value) {this.setProp("AutocompleteVisible", DataType.Bool, value);}
    public get enabled() {return this.getProp("Enabled", DataType.Bool);}
    public set enabled(value) {this.setProp("Enabled", DataType.Bool, value);}
    public get primaryAlias() {return this.getProp("PrimaryAlias", DataType.String);}
    public set primaryAlias(value) {this.setProp("PrimaryAlias", DataType.String, value);}
    public get secondaryAlias() {return this.getProp("SecondaryAlias", DataType.String);}
    public set secondaryAlias(value) {this.setProp("SecondaryAlias", DataType.String, value);}
}

export abstract class TextChatConfigurations extends CoreInstance {
    protected constructor(className: string) {super(className);}
}

export class BubbleChatConfiguration extends TextChatConfigurations {
    protected constructor(className?: string) {super(className ?? "BubbleChatConfiguration");}
    public static new() {return new BubbleChatConfiguration();}
    public get adorneeName() {return this.getProp("AdorneeName", DataType.String);}
    public set adorneeName(value) {this.setProp("AdorneeName", DataType.String, value);}
    public get backgroundColor3() {return this.getProp("BackgroundColor3", DataType.Color3);}
    public set backgroundColor3(value) {this.setProp("BackgroundColor3", DataType.Color3, value);}
    public get backgroundTransparency() {return this.getProp("BackgroundTransparency", DataType.Float64);}
    public set backgroundTransparency(value) {this.setProp("BackgroundTransparency", DataType.Float64, value);}
    public get bubbleDuration() {return this.getProp("BubbleDuration", DataType.Float32);}
    public set bubbleDuration(value) {this.setProp("BubbleDuration", DataType.Float32, value);}
    public get bubblesSpacing() {return this.getProp("BubblesSpacing", DataType.Float32);}
    public set bubblesSpacing(value) {this.setProp("BubblesSpacing", DataType.Float32, value);}
    public get enabled() {return this.getProp("Enabled", DataType.Bool);}
    public set enabled(value) {this.setProp("Enabled", DataType.Bool, value);}
    public get font() {return this.getProp("Font", DataType.Enum) as Font | undefined;}
    public set font(value) {this.setProp("Font", DataType.Enum, value);}
    public get fontFace() {return this.getProp("FontFace", DataType.Font);}
    public set fontFace(value) {this.setProp("FontFace", DataType.Font, value);}
    public get localPlayerStudsOffset() {return this.getProp("LocalPlayerStudsOffset", DataType.Vector3);}
    public set localPlayerStudsOffset(value) {this.setProp("LocalPlayerStudsOffset", DataType.Vector3, value);}
    public get maxBubbles() {return this.getProp("MaxBubbles", DataType.Float32);}
    public set maxBubbles(value) {this.setProp("MaxBubbles", DataType.Float32, value);}
    public get maxDistance() {return this.getProp("MaxDistance", DataType.Float32);}
    public set maxDistance(value) {this.setProp("MaxDistance", DataType.Float32, value);}
    public get minimizeDistance() {return this.getProp("MinimizeDistance", DataType.Float32);}
    public set minimizeDistance(value) {this.setProp("MinimizeDistance", DataType.Float32, value);}
    public get tailVisible() {return this.getProp("TailVisible", DataType.Bool);}
    public set tailVisible(value) {this.setProp("TailVisible", DataType.Bool, value);}
    public get textColor3() {return this.getProp("TextColor3", DataType.Color3);}
    public set textColor3(value) {this.setProp("TextColor3", DataType.Color3, value);}
    public get textSize() {return this.getProp("TextSize", DataType.Int64);}
    public set textSize(value) {this.setProp("TextSize", DataType.Int64, value);}
    public get verticalStudsOffset() {return this.getProp("VerticalStudsOffset", DataType.Float32);}
    public set verticalStudsOffset(value) {this.setProp("VerticalStudsOffset", DataType.Float32, value);}
}

export class ChatInputBarConfiguration extends TextChatConfigurations {
    protected constructor(className?: string) {super(className ?? "ChatInputBarConfiguration");}
    public static new() {return new ChatInputBarConfiguration();}
    public get autocompleteEnabled() {return this.getProp("AutocompleteEnabled", DataType.Bool);}
    public set autocompleteEnabled(value) {this.setProp("AutocompleteEnabled", DataType.Bool, value);}
    public get backgroundColor3() {return this.getProp("BackgroundColor3", DataType.Color3);}
    public set backgroundColor3(value) {this.setProp("BackgroundColor3", DataType.Color3, value);}
    public get backgroundTransparency() {return this.getProp("BackgroundTransparency", DataType.Float64);}
    public set backgroundTransparency(value) {this.setProp("BackgroundTransparency", DataType.Float64, value);}
    public get enabled() {return this.getProp("Enabled", DataType.Bool);}
    public set enabled(value) {this.setProp("Enabled", DataType.Bool, value);}
    public get fontFace() {return this.getProp("FontFace", DataType.Font);}
    public set fontFace(value) {this.setProp("FontFace", DataType.Font, value);}
    public get keyboardKeyCode() {return this.getProp("KeyboardKeyCode", DataType.Enum) as KeyCode | undefined;}
    public set keyboardKeyCode(value) {this.setProp("KeyboardKeyCode", DataType.Enum, value);}
    public get placeholderColor3() {return this.getProp("PlaceholderColor3", DataType.Color3);}
    public set placeholderColor3(value) {this.setProp("PlaceholderColor3", DataType.Color3, value);}
    public get targetTextChannel() {return this.getProp("TargetTextChannel", DataType.Referent) as TextChannel | undefined;}
    public set targetTextChannel(value) {this.setProp("TargetTextChannel", DataType.Referent, value);}
    public get textColor3() {return this.getProp("TextColor3", DataType.Color3);}
    public set textColor3(value) {this.setProp("TextColor3", DataType.Color3, value);}
    public get textSize() {return this.getProp("TextSize", DataType.Int64);}
    public set textSize(value) {this.setProp("TextSize", DataType.Int64, value);}
    public get textStrokeColor3() {return this.getProp("TextStrokeColor3", DataType.Color3);}
    public set textStrokeColor3(value) {this.setProp("TextStrokeColor3", DataType.Color3, value);}
    public get textStrokeTransparency() {return this.getProp("TextStrokeTransparency", DataType.Float64);}
    public set textStrokeTransparency(value) {this.setProp("TextStrokeTransparency", DataType.Float64, value);}
}

export class ChatWindowConfiguration extends TextChatConfigurations {
    protected constructor(className?: string) {super(className ?? "ChatWindowConfiguration");}
    public static new() {return new ChatWindowConfiguration();}
    public get backgroundColor3() {return this.getProp("BackgroundColor3", DataType.Color3);}
    public set backgroundColor3(value) {this.setProp("BackgroundColor3", DataType.Color3, value);}
    public get backgroundTransparency() {return this.getProp("BackgroundTransparency", DataType.Float64);}
    public set backgroundTransparency(value) {this.setProp("BackgroundTransparency", DataType.Float64, value);}
    public get enabled() {return this.getProp("Enabled", DataType.Bool);}
    public set enabled(value) {this.setProp("Enabled", DataType.Bool, value);}
    public get fontFace() {return this.getProp("FontFace", DataType.Font);}
    public set fontFace(value) {this.setProp("FontFace", DataType.Font, value);}
    public get heightScale() {return this.getProp("HeightScale", DataType.Float32);}
    public set heightScale(value) {this.setProp("HeightScale", DataType.Float32, value);}
    public get horizontalAlignment() {return this.getProp("HorizontalAlignment", DataType.Enum) as HorizontalAlignment | undefined;}
    public set horizontalAlignment(value) {this.setProp("HorizontalAlignment", DataType.Enum, value);}
    public get textColor3() {return this.getProp("TextColor3", DataType.Color3);}
    public set textColor3(value) {this.setProp("TextColor3", DataType.Color3, value);}
    public get textSize() {return this.getProp("TextSize", DataType.Int64);}
    public set textSize(value) {this.setProp("TextSize", DataType.Int64, value);}
    public get textStrokeColor3() {return this.getProp("TextStrokeColor3", DataType.Color3);}
    public set textStrokeColor3(value) {this.setProp("TextStrokeColor3", DataType.Color3, value);}
    public get textStrokeTransparency() {return this.getProp("TextStrokeTransparency", DataType.Float64);}
    public set textStrokeTransparency(value) {this.setProp("TextStrokeTransparency", DataType.Float64, value);}
    public get verticalAlignment() {return this.getProp("VerticalAlignment", DataType.Enum) as VerticalAlignment | undefined;}
    public set verticalAlignment(value) {this.setProp("VerticalAlignment", DataType.Enum, value);}
    public get widthScale() {return this.getProp("WidthScale", DataType.Float32);}
    public set widthScale(value) {this.setProp("WidthScale", DataType.Float32, value);}
}

export class TextChatMessageProperties extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "TextChatMessageProperties");}
    public static new() {return new TextChatMessageProperties();}
}

export class TextChatService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "TextChatService", true);}
    public static new() {return new TextChatService();}
    public get chatTranslationFTUXShown() {return this.getProp("ChatTranslationFTUXShown", DataType.Bool);}
    public set chatTranslationFTUXShown(value) {this.setProp("ChatTranslationFTUXShown", DataType.Bool, value);}
    public get chatTranslationToggleEnabled() {return this.getProp("ChatTranslationToggleEnabled", DataType.Bool);}
    public set chatTranslationToggleEnabled(value) {this.setProp("ChatTranslationToggleEnabled", DataType.Bool, value);}
    public get chatVersion() {return this.getProp("ChatVersion", DataType.Enum) as ChatVersion | undefined;}
    public set chatVersion(value) {this.setProp("ChatVersion", DataType.Enum, value);}
    public get createDefaultCommands() {return this.getProp("CreateDefaultCommands", DataType.Bool);}
    public set createDefaultCommands(value) {this.setProp("CreateDefaultCommands", DataType.Bool, value);}
    public get createDefaultTextChannels() {return this.getProp("CreateDefaultTextChannels", DataType.Bool);}
    public set createDefaultTextChannels(value) {this.setProp("CreateDefaultTextChannels", DataType.Bool, value);}
}

export class TextService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "TextService", true);}
    public static new() {return new TextService();}
}

export class TextureGenerationService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "TextureGenerationService", true);}
    public static new() {return new TextureGenerationService();}
}

export class ThirdPartyUserService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ThirdPartyUserService", true);}
    public static new() {return new ThirdPartyUserService();}
}

export class TimerService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "TimerService", true);}
    public static new() {return new TimerService();}
}

export class ToastNotificationService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "ToastNotificationService", true);}
    public static new() {return new ToastNotificationService();}
}

export class TouchInputService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "TouchInputService", true);}
    public static new() {return new TouchInputService();}
}

export class TracerService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "TracerService", true);}
    public static new() {return new TracerService();}
}

export class TrackerStreamAnimation extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "TrackerStreamAnimation");}
    public static new() {return new TrackerStreamAnimation();}
}

export class Trail extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Trail");}
    public static new() {return new Trail();}
    public get attachment0() {return this.getProp("Attachment0", DataType.Referent) as Attachment | undefined;}
    public set attachment0(value) {this.setProp("Attachment0", DataType.Referent, value);}
    public get attachment1() {return this.getProp("Attachment1", DataType.Referent) as Attachment | undefined;}
    public set attachment1(value) {this.setProp("Attachment1", DataType.Referent, value);}
    public get brightness() {return this.getProp("Brightness", DataType.Float32);}
    public set brightness(value) {this.setProp("Brightness", DataType.Float32, value);}
    public get color() {return this.getProp("Color", DataType.ColorSequence);}
    public set color(value) {this.setProp("Color", DataType.ColorSequence, value);}
    public get enabled() {return this.getProp("Enabled", DataType.Bool);}
    public set enabled(value) {this.setProp("Enabled", DataType.Bool, value);}
    public get faceCamera() {return this.getProp("FaceCamera", DataType.Bool);}
    public set faceCamera(value) {this.setProp("FaceCamera", DataType.Bool, value);}
    public get lifetime() {return this.getProp("Lifetime", DataType.Float32);}
    public set lifetime(value) {this.setProp("Lifetime", DataType.Float32, value);}
    public get lightEmission() {return this.getProp("LightEmission", DataType.Float32);}
    public set lightEmission(value) {this.setProp("LightEmission", DataType.Float32, value);}
    public get lightInfluence() {return this.getProp("LightInfluence", DataType.Float32);}
    public set lightInfluence(value) {this.setProp("LightInfluence", DataType.Float32, value);}
    public get maxLength() {return this.getProp("MaxLength", DataType.Float32);}
    public set maxLength(value) {this.setProp("MaxLength", DataType.Float32, value);}
    public get minLength() {return this.getProp("MinLength", DataType.Float32);}
    public set minLength(value) {this.setProp("MinLength", DataType.Float32, value);}
    public get texture() {return this.getProp("Texture", DataType.String);}
    public set texture(value) {this.setProp("Texture", DataType.String, value);}
    public get textureLength() {return this.getProp("TextureLength", DataType.Float32);}
    public set textureLength(value) {this.setProp("TextureLength", DataType.Float32, value);}
    public get textureMode() {return this.getProp("TextureMode", DataType.Enum) as TextureMode | undefined;}
    public set textureMode(value) {this.setProp("TextureMode", DataType.Enum, value);}
    public get transparency() {return this.getProp("Transparency", DataType.NumberSequence);}
    public set transparency(value) {this.setProp("Transparency", DataType.NumberSequence, value);}
    public get widthScale() {return this.getProp("WidthScale", DataType.NumberSequence);}
    public set widthScale(value) {this.setProp("WidthScale", DataType.NumberSequence, value);}
}

export class TutorialService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "TutorialService", true);}
    public static new() {return new TutorialService();}
}

export abstract class TweenBase extends CoreInstance {
    protected constructor(className: string) {super(className);}
}

export class Tween extends TweenBase {
    protected constructor(className?: string) {super(className ?? "Tween");}
    public static new() {return new Tween();}
}

export class TweenService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "TweenService", true);}
    public static new() {return new TweenService();}
}

export class UGCAvatarService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "UGCAvatarService", true);}
    public static new() {return new UGCAvatarService();}
}

export class UGCValidationService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "UGCValidationService", true);}
    public static new() {return new UGCValidationService();}
}

export abstract class UIBase extends CoreInstance {
    protected constructor(className: string) {super(className);}
}

export abstract class UIComponent extends UIBase {
    protected constructor(className: string) {super(className);}
}

export abstract class UIConstraint extends UIComponent {
    protected constructor(className: string) {super(className);}
}

export class UIAspectRatioConstraint extends UIConstraint {
    protected constructor(className?: string) {super(className ?? "UIAspectRatioConstraint");}
    public static new() {return new UIAspectRatioConstraint();}
    public get aspectRatio() {return this.getProp("AspectRatio", DataType.Float32);}
    public set aspectRatio(value) {this.setProp("AspectRatio", DataType.Float32, value);}
    public get aspectType() {return this.getProp("AspectType", DataType.Enum) as AspectType | undefined;}
    public set aspectType(value) {this.setProp("AspectType", DataType.Enum, value);}
    public get dominantAxis() {return this.getProp("DominantAxis", DataType.Enum) as DominantAxis | undefined;}
    public set dominantAxis(value) {this.setProp("DominantAxis", DataType.Enum, value);}
}

export class UISizeConstraint extends UIConstraint {
    protected constructor(className?: string) {super(className ?? "UISizeConstraint");}
    public static new() {return new UISizeConstraint();}
    public get maxSize() {return this.getProp("MaxSize", DataType.Vector2);}
    public set maxSize(value) {this.setProp("MaxSize", DataType.Vector2, value);}
    public get minSize() {return this.getProp("MinSize", DataType.Vector2);}
    public set minSize(value) {this.setProp("MinSize", DataType.Vector2, value);}
}

export class UITextSizeConstraint extends UIConstraint {
    protected constructor(className?: string) {super(className ?? "UITextSizeConstraint");}
    public static new() {return new UITextSizeConstraint();}
    public get maxTextSize() {return this.getProp("MaxTextSize", DataType.Int32);}
    public set maxTextSize(value) {this.setProp("MaxTextSize", DataType.Int32, value);}
    public get minTextSize() {return this.getProp("MinTextSize", DataType.Int32);}
    public set minTextSize(value) {this.setProp("MinTextSize", DataType.Int32, value);}
}

export class UICorner extends UIComponent {
    protected constructor(className?: string) {super(className ?? "UICorner");}
    public static new() {return new UICorner();}
    public get cornerRadius() {return this.getProp("CornerRadius", DataType.UDim);}
    public set cornerRadius(value) {this.setProp("CornerRadius", DataType.UDim, value);}
}

export class UIFlexItem extends UIComponent {
    protected constructor(className?: string) {super(className ?? "UIFlexItem");}
    public static new() {return new UIFlexItem();}
    public get flexMode() {return this.getProp("FlexMode", DataType.Enum) as UIFlexMode | undefined;}
    public set flexMode(value) {this.setProp("FlexMode", DataType.Enum, value);}
    public get growRatio() {return this.getProp("GrowRatio", DataType.Float32);}
    public set growRatio(value) {this.setProp("GrowRatio", DataType.Float32, value);}
    public get itemLineAlignment() {return this.getProp("ItemLineAlignment", DataType.Enum) as ItemLineAlignment | undefined;}
    public set itemLineAlignment(value) {this.setProp("ItemLineAlignment", DataType.Enum, value);}
    public get shrinkRatio() {return this.getProp("ShrinkRatio", DataType.Float32);}
    public set shrinkRatio(value) {this.setProp("ShrinkRatio", DataType.Float32, value);}
}

export class UIGradient extends UIComponent {
    protected constructor(className?: string) {super(className ?? "UIGradient");}
    public static new() {return new UIGradient();}
    public get color() {return this.getProp("Color", DataType.ColorSequence);}
    public set color(value) {this.setProp("Color", DataType.ColorSequence, value);}
    public get enabled() {return this.getProp("Enabled", DataType.Bool);}
    public set enabled(value) {this.setProp("Enabled", DataType.Bool, value);}
    public get offset() {return this.getProp("Offset", DataType.Vector2);}
    public set offset(value) {this.setProp("Offset", DataType.Vector2, value);}
    public get rotation() {return this.getProp("Rotation", DataType.Float32);}
    public set rotation(value) {this.setProp("Rotation", DataType.Float32, value);}
    public get transparency() {return this.getProp("Transparency", DataType.NumberSequence);}
    public set transparency(value) {this.setProp("Transparency", DataType.NumberSequence, value);}
}

export abstract class UILayout extends UIComponent {
    protected constructor(className: string) {super(className);}
}

export abstract class UIGridStyleLayout extends UILayout {
    protected constructor(className: string) {super(className);}
    public get fillDirection() {return this.getProp("FillDirection", DataType.Enum) as FillDirection | undefined;}
    public set fillDirection(value) {this.setProp("FillDirection", DataType.Enum, value);}
    public get horizontalAlignment() {return this.getProp("HorizontalAlignment", DataType.Enum) as HorizontalAlignment | undefined;}
    public set horizontalAlignment(value) {this.setProp("HorizontalAlignment", DataType.Enum, value);}
    public get sortOrder() {return this.getProp("SortOrder", DataType.Enum) as SortOrder | undefined;}
    public set sortOrder(value) {this.setProp("SortOrder", DataType.Enum, value);}
    public get verticalAlignment() {return this.getProp("VerticalAlignment", DataType.Enum) as VerticalAlignment | undefined;}
    public set verticalAlignment(value) {this.setProp("VerticalAlignment", DataType.Enum, value);}
}

export class UIGridLayout extends UIGridStyleLayout {
    protected constructor(className?: string) {super(className ?? "UIGridLayout");}
    public static new() {return new UIGridLayout();}
    public get cellPadding() {return this.getProp("CellPadding", DataType.UDim2);}
    public set cellPadding(value) {this.setProp("CellPadding", DataType.UDim2, value);}
    public get cellSize() {return this.getProp("CellSize", DataType.UDim2);}
    public set cellSize(value) {this.setProp("CellSize", DataType.UDim2, value);}
    public get fillDirectionMaxCells() {return this.getProp("FillDirectionMaxCells", DataType.Int32);}
    public set fillDirectionMaxCells(value) {this.setProp("FillDirectionMaxCells", DataType.Int32, value);}
    public get startCorner() {return this.getProp("StartCorner", DataType.Enum) as StartCorner | undefined;}
    public set startCorner(value) {this.setProp("StartCorner", DataType.Enum, value);}
}

export class UIListLayout extends UIGridStyleLayout {
    protected constructor(className?: string) {super(className ?? "UIListLayout");}
    public static new() {return new UIListLayout();}
    public get horizontalFlex() {return this.getProp("HorizontalFlex", DataType.Enum) as UIFlexAlignment | undefined;}
    public set horizontalFlex(value) {this.setProp("HorizontalFlex", DataType.Enum, value);}
    public get itemLineAlignment() {return this.getProp("ItemLineAlignment", DataType.Enum) as ItemLineAlignment | undefined;}
    public set itemLineAlignment(value) {this.setProp("ItemLineAlignment", DataType.Enum, value);}
    public get padding() {return this.getProp("Padding", DataType.UDim);}
    public set padding(value) {this.setProp("Padding", DataType.UDim, value);}
    public get verticalFlex() {return this.getProp("VerticalFlex", DataType.Enum) as UIFlexAlignment | undefined;}
    public set verticalFlex(value) {this.setProp("VerticalFlex", DataType.Enum, value);}
    public get wraps() {return this.getProp("Wraps", DataType.Bool);}
    public set wraps(value) {this.setProp("Wraps", DataType.Bool, value);}
}

export class UIPageLayout extends UIGridStyleLayout {
    protected constructor(className?: string) {super(className ?? "UIPageLayout");}
    public static new() {return new UIPageLayout();}
    public get animated() {return this.getProp("Animated", DataType.Bool);}
    public set animated(value) {this.setProp("Animated", DataType.Bool, value);}
    public get circular() {return this.getProp("Circular", DataType.Bool);}
    public set circular(value) {this.setProp("Circular", DataType.Bool, value);}
    public get easingDirection() {return this.getProp("EasingDirection", DataType.Enum) as EasingDirection | undefined;}
    public set easingDirection(value) {this.setProp("EasingDirection", DataType.Enum, value);}
    public get easingStyle() {return this.getProp("EasingStyle", DataType.Enum) as EasingStyle | undefined;}
    public set easingStyle(value) {this.setProp("EasingStyle", DataType.Enum, value);}
    public get gamepadInputEnabled() {return this.getProp("GamepadInputEnabled", DataType.Bool);}
    public set gamepadInputEnabled(value) {this.setProp("GamepadInputEnabled", DataType.Bool, value);}
    public get padding() {return this.getProp("Padding", DataType.UDim);}
    public set padding(value) {this.setProp("Padding", DataType.UDim, value);}
    public get scrollWheelInputEnabled() {return this.getProp("ScrollWheelInputEnabled", DataType.Bool);}
    public set scrollWheelInputEnabled(value) {this.setProp("ScrollWheelInputEnabled", DataType.Bool, value);}
    public get touchInputEnabled() {return this.getProp("TouchInputEnabled", DataType.Bool);}
    public set touchInputEnabled(value) {this.setProp("TouchInputEnabled", DataType.Bool, value);}
    public get tweenTime() {return this.getProp("TweenTime", DataType.Float32);}
    public set tweenTime(value) {this.setProp("TweenTime", DataType.Float32, value);}
}

export class UITableLayout extends UIGridStyleLayout {
    protected constructor(className?: string) {super(className ?? "UITableLayout");}
    public static new() {return new UITableLayout();}
    public get fillEmptySpaceColumns() {return this.getProp("FillEmptySpaceColumns", DataType.Bool);}
    public set fillEmptySpaceColumns(value) {this.setProp("FillEmptySpaceColumns", DataType.Bool, value);}
    public get fillEmptySpaceRows() {return this.getProp("FillEmptySpaceRows", DataType.Bool);}
    public set fillEmptySpaceRows(value) {this.setProp("FillEmptySpaceRows", DataType.Bool, value);}
    public get majorAxis() {return this.getProp("MajorAxis", DataType.Enum) as TableMajorAxis | undefined;}
    public set majorAxis(value) {this.setProp("MajorAxis", DataType.Enum, value);}
    public get padding() {return this.getProp("Padding", DataType.UDim2);}
    public set padding(value) {this.setProp("Padding", DataType.UDim2, value);}
}

export class UIPadding extends UIComponent {
    protected constructor(className?: string) {super(className ?? "UIPadding");}
    public static new() {return new UIPadding();}
    public get paddingBottom() {return this.getProp("PaddingBottom", DataType.UDim);}
    public set paddingBottom(value) {this.setProp("PaddingBottom", DataType.UDim, value);}
    public get paddingLeft() {return this.getProp("PaddingLeft", DataType.UDim);}
    public set paddingLeft(value) {this.setProp("PaddingLeft", DataType.UDim, value);}
    public get paddingRight() {return this.getProp("PaddingRight", DataType.UDim);}
    public set paddingRight(value) {this.setProp("PaddingRight", DataType.UDim, value);}
    public get paddingTop() {return this.getProp("PaddingTop", DataType.UDim);}
    public set paddingTop(value) {this.setProp("PaddingTop", DataType.UDim, value);}
}

export class UIScale extends UIComponent {
    protected constructor(className?: string) {super(className ?? "UIScale");}
    public static new() {return new UIScale();}
    public get scale() {return this.getProp("Scale", DataType.Float32);}
    public set scale(value) {this.setProp("Scale", DataType.Float32, value);}
}

export class UIStroke extends UIComponent {
    protected constructor(className?: string) {super(className ?? "UIStroke");}
    public static new() {return new UIStroke();}
    public get applyStrokeMode() {return this.getProp("ApplyStrokeMode", DataType.Enum) as ApplyStrokeMode | undefined;}
    public set applyStrokeMode(value) {this.setProp("ApplyStrokeMode", DataType.Enum, value);}
    public get color() {return this.getProp("Color", DataType.Color3);}
    public set color(value) {this.setProp("Color", DataType.Color3, value);}
    public get enabled() {return this.getProp("Enabled", DataType.Bool);}
    public set enabled(value) {this.setProp("Enabled", DataType.Bool, value);}
    public get lineJoinMode() {return this.getProp("LineJoinMode", DataType.Enum) as LineJoinMode | undefined;}
    public set lineJoinMode(value) {this.setProp("LineJoinMode", DataType.Enum, value);}
    public get thickness() {return this.getProp("Thickness", DataType.Float32);}
    public set thickness(value) {this.setProp("Thickness", DataType.Float32, value);}
    public get transparency() {return this.getProp("Transparency", DataType.Float32);}
    public set transparency(value) {this.setProp("Transparency", DataType.Float32, value);}
}

export class UnvalidatedAssetService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "UnvalidatedAssetService", true);}
    public static new() {return new UnvalidatedAssetService();}
    public get cachedData() {return this.getProp("CachedData", DataType.String);}
    public set cachedData(value) {this.setProp("CachedData", DataType.String, value);}
}

export class UserInputService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "UserInputService", true);}
    public static new() {return new UserInputService();}
    public get legacyInputEventsEnabled() {return this.getProp("LegacyInputEventsEnabled", DataType.Bool);}
    public set legacyInputEventsEnabled(value) {this.setProp("LegacyInputEventsEnabled", DataType.Bool, value);}
    public get mouseBehavior() {return this.getProp("MouseBehavior", DataType.Enum) as MouseBehavior | undefined;}
    public set mouseBehavior(value) {this.setProp("MouseBehavior", DataType.Enum, value);}
    public get mouseIcon() {return this.getProp("MouseIcon", DataType.String);}
    public set mouseIcon(value) {this.setProp("MouseIcon", DataType.String, value);}
    public get mouseIconEnabled() {return this.getProp("MouseIconEnabled", DataType.Bool);}
    public set mouseIconEnabled(value) {this.setProp("MouseIconEnabled", DataType.Bool, value);}
}

export class UserService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "UserService", true);}
    public static new() {return new UserService();}
}

export class VRService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "VRService", true);}
    public static new() {return new VRService();}
    public get automaticScaling() {return this.getProp("AutomaticScaling", DataType.Enum) as VRScaling | undefined;}
    public set automaticScaling(value) {this.setProp("AutomaticScaling", DataType.Enum, value);}
    public get avatarGestures() {return this.getProp("AvatarGestures", DataType.Bool);}
    public set avatarGestures(value) {this.setProp("AvatarGestures", DataType.Bool, value);}
    public get fadeOutViewOnCollision() {return this.getProp("FadeOutViewOnCollision", DataType.Bool);}
    public set fadeOutViewOnCollision(value) {this.setProp("FadeOutViewOnCollision", DataType.Bool, value);}
}

export class VRStatusService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "VRStatusService", true);}
    public static new() {return new VRStatusService();}
}

export abstract class ValueBase extends CoreInstance {
    protected constructor(className: string) {super(className);}
}

export class BinaryStringValue extends ValueBase {
    protected constructor(className?: string) {super(className ?? "BinaryStringValue");}
    public static new() {return new BinaryStringValue();}
    public get value() {return this.getProp("Value", DataType.String);}
    public set value(value) {this.setProp("Value", DataType.String, value);}
}

export class BoolValue extends ValueBase {
    protected constructor(className?: string) {super(className ?? "BoolValue");}
    public static new() {return new BoolValue();}
    public get value() {return this.getProp("Value", DataType.Bool);}
    public set value(value) {this.setProp("Value", DataType.Bool, value);}
}

export class BrickColorValue extends ValueBase {
    protected constructor(className?: string) {super(className ?? "BrickColorValue");}
    public static new() {return new BrickColorValue();}
    public get value() {return this.getProp("Value", DataType.BrickColor);}
    public set value(value) {this.setProp("Value", DataType.BrickColor, value);}
}

export class CFrameValue extends ValueBase {
    protected constructor(className?: string) {super(className ?? "CFrameValue");}
    public static new() {return new CFrameValue();}
    public get value() {return this.getProp("Value", DataType.CFrame);}
    public set value(value) {this.setProp("Value", DataType.CFrame, value);}
}

export class Color3Value extends ValueBase {
    protected constructor(className?: string) {super(className ?? "Color3Value");}
    public static new() {return new Color3Value();}
    public get value() {return this.getProp("Value", DataType.Color3);}
    public set value(value) {this.setProp("Value", DataType.Color3, value);}
}

export class DoubleConstrainedValue extends ValueBase {
    protected constructor(className?: string) {super(className ?? "DoubleConstrainedValue");}
    public static new() {return new DoubleConstrainedValue();}
    public get maxValue() {return this.getProp("MaxValue", DataType.Float64);}
    public set maxValue(value) {this.setProp("MaxValue", DataType.Float64, value);}
    public get minValue() {return this.getProp("MinValue", DataType.Float64);}
    public set minValue(value) {this.setProp("MinValue", DataType.Float64, value);}
    public get value() {return this.getProp("value", DataType.Float64);}
    public set value(value) {this.setProp("value", DataType.Float64, value);}
}

export class IntConstrainedValue extends ValueBase {
    protected constructor(className?: string) {super(className ?? "IntConstrainedValue");}
    public static new() {return new IntConstrainedValue();}
    public get maxValue() {return this.getProp("MaxValue", DataType.Int64);}
    public set maxValue(value) {this.setProp("MaxValue", DataType.Int64, value);}
    public get minValue() {return this.getProp("MinValue", DataType.Int64);}
    public set minValue(value) {this.setProp("MinValue", DataType.Int64, value);}
    public get value() {return this.getProp("value", DataType.Int64);}
    public set value(value) {this.setProp("value", DataType.Int64, value);}
}

export class IntValue extends ValueBase {
    protected constructor(className?: string) {super(className ?? "IntValue");}
    public static new() {return new IntValue();}
    public get value() {return this.getProp("Value", DataType.Int64);}
    public set value(value) {this.setProp("Value", DataType.Int64, value);}
}

export class NumberValue extends ValueBase {
    protected constructor(className?: string) {super(className ?? "NumberValue");}
    public static new() {return new NumberValue();}
    public get value() {return this.getProp("Value", DataType.Float64);}
    public set value(value) {this.setProp("Value", DataType.Float64, value);}
}

export class ObjectValue extends ValueBase {
    protected constructor(className?: string) {super(className ?? "ObjectValue");}
    public static new() {return new ObjectValue();}
    public get value() {return this.getProp("Value", DataType.Referent) as CoreInstance | undefined;}
    public set value(value) {this.setProp("Value", DataType.Referent, value);}
}

export class RayValue extends ValueBase {
    protected constructor(className?: string) {super(className ?? "RayValue");}
    public static new() {return new RayValue();}
    public get value() {return this.getProp("Value", DataType.Ray);}
    public set value(value) {this.setProp("Value", DataType.Ray, value);}
}

export class StringValue extends ValueBase {
    protected constructor(className?: string) {super(className ?? "StringValue");}
    public static new() {return new StringValue();}
    public get value() {return this.getProp("Value", DataType.String);}
    public set value(value) {this.setProp("Value", DataType.String, value);}
}

export class Vector3Value extends ValueBase {
    protected constructor(className?: string) {super(className ?? "Vector3Value");}
    public static new() {return new Vector3Value();}
    public get value() {return this.getProp("Value", DataType.Vector3);}
    public set value(value) {this.setProp("Value", DataType.Vector3, value);}
}

export class Vector3Curve extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Vector3Curve");}
    public static new() {return new Vector3Curve();}
}

export class VersionControlService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "VersionControlService", true);}
    public static new() {return new VersionControlService();}
}

export class VideoCaptureService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "VideoCaptureService", true);}
    public static new() {return new VideoCaptureService();}
}

export class VideoDeviceInput extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "VideoDeviceInput");}
    public static new() {return new VideoDeviceInput();}
    public get active() {return this.getProp("Active", DataType.Bool);}
    public set active(value) {this.setProp("Active", DataType.Bool, value);}
    public get cameraId() {return this.getProp("CameraId", DataType.String);}
    public set cameraId(value) {this.setProp("CameraId", DataType.String, value);}
    public get captureQuality() {return this.getProp("CaptureQuality", DataType.Enum) as VideoDeviceCaptureQuality | undefined;}
    public set captureQuality(value) {this.setProp("CaptureQuality", DataType.Enum, value);}
}

export class VideoService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "VideoService", true);}
    public static new() {return new VideoService();}
}

export class VirtualInputManager extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "VirtualInputManager", true);}
    public static new() {return new VirtualInputManager();}
}

export class VirtualUser extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "VirtualUser", true);}
    public static new() {return new VirtualUser();}
}

export class VisibilityCheckDispatcher extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "VisibilityCheckDispatcher", true);}
    public static new() {return new VisibilityCheckDispatcher();}
}

export class Visit extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Visit", true);}
    public static new() {return new Visit();}
}

export class VisualizationMode extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "VisualizationMode");}
    public static new() {return new VisualizationMode();}
    public get enabled() {return this.getProp("Enabled", DataType.Bool);}
    public set enabled(value) {this.setProp("Enabled", DataType.Bool, value);}
    public get title() {return this.getProp("Title", DataType.String);}
    public set title(value) {this.setProp("Title", DataType.String, value);}
}

export class VisualizationModeCategory extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "VisualizationModeCategory");}
    public static new() {return new VisualizationModeCategory();}
    public get enabled() {return this.getProp("Enabled", DataType.Bool);}
    public set enabled(value) {this.setProp("Enabled", DataType.Bool, value);}
    public get title() {return this.getProp("Title", DataType.String);}
    public set title(value) {this.setProp("Title", DataType.String, value);}
}

export class VisualizationModeService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "VisualizationModeService", true);}
    public static new() {return new VisualizationModeService();}
}

export class VoiceChatInternal extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "VoiceChatInternal", true);}
    public static new() {return new VoiceChatInternal();}
}

export class VoiceChatService extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "VoiceChatService", true);}
    public static new() {return new VoiceChatService();}
    public get enableDefaultVoice() {return this.getProp("EnableDefaultVoice", DataType.Bool);}
    public set enableDefaultVoice(value) {this.setProp("EnableDefaultVoice", DataType.Bool, value);}
    public get useAudioApi() {return this.getProp("UseAudioApi", DataType.Enum) as AudioApiRollout | undefined;}
    public set useAudioApi(value) {this.setProp("UseAudioApi", DataType.Enum, value);}
}

export class WeldConstraint extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "WeldConstraint");}
    public static new() {return new WeldConstraint();}
    public get cFrame0() {return this.getProp("CFrame0", DataType.CFrame);}
    public set cFrame0(value) {this.setProp("CFrame0", DataType.CFrame, value);}
    public get part0Internal() {return this.getProp("Part0Internal", DataType.Referent) as BasePart | undefined;}
    public set part0Internal(value) {this.setProp("Part0Internal", DataType.Referent, value);}
    public get part1Internal() {return this.getProp("Part1Internal", DataType.Referent) as BasePart | undefined;}
    public set part1Internal(value) {this.setProp("Part1Internal", DataType.Referent, value);}
    public get state() {return this.getProp("State", DataType.Int32);}
    public set state(value) {this.setProp("State", DataType.Int32, value);}
}

export class Wire extends CoreInstance {
    protected constructor(className?: string) {super(className ?? "Wire");}
    public static new() {return new Wire();}
    public get sourceInstance() {return this.getProp("SourceInstance", DataType.Referent) as CoreInstance | undefined;}
    public set sourceInstance(value) {this.setProp("SourceInstance", DataType.Referent, value);}
    public get sourceName() {return this.getProp("SourceName", DataType.String);}
    public set sourceName(value) {this.setProp("SourceName", DataType.String, value);}
    public get targetInstance() {return this.getProp("TargetInstance", DataType.Referent) as CoreInstance | undefined;}
    public set targetInstance(value) {this.setProp("TargetInstance", DataType.Referent, value);}
    public get targetName() {return this.getProp("TargetName", DataType.String);}
    public set targetName(value) {this.setProp("TargetName", DataType.String, value);}
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

export class AvatarGenerationError extends EnumItem {
    public static readonly None = new AvatarGenerationError("None", 0);
    public static readonly Timeout = new AvatarGenerationError("Timeout", 1);
    public static readonly DownloadFailed = new AvatarGenerationError("DownloadFailed", 2);
    public static readonly Canceled = new AvatarGenerationError("Canceled", 3);
    public static readonly Unknown = new AvatarGenerationError("Unknown", 4);
    public static get items() {return [AvatarGenerationError.None, AvatarGenerationError.Timeout, AvatarGenerationError.DownloadFailed, AvatarGenerationError.Canceled, AvatarGenerationError.Unknown];}
    public static fromValue(value: number) {return AvatarGenerationError.items.find((item) => item._value === value);}
}

export class AvatarGenerationJobStatus extends EnumItem {
    public static readonly NotStarted = new AvatarGenerationJobStatus("NotStarted", 0);
    public static readonly InProgress = new AvatarGenerationJobStatus("InProgress", 1);
    public static readonly Completed = new AvatarGenerationJobStatus("Completed", 2);
    public static readonly Failed = new AvatarGenerationJobStatus("Failed", 3);
    public static get items() {return [AvatarGenerationJobStatus.NotStarted, AvatarGenerationJobStatus.InProgress, AvatarGenerationJobStatus.Completed, AvatarGenerationJobStatus.Failed];}
    public static fromValue(value: number) {return AvatarGenerationJobStatus.items.find((item) => item._value === value);}
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
