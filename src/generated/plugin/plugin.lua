local Selection = game:GetService("Selection")
local ScriptEditorService = game:GetService("ScriptEditorService")

local toolbar = plugin:CreateToolbar("Custom Script Tools")
local newScriptButton = toolbar:CreateButton("Generate Types", "Generate Types", "rbxassetid://14978048121")
newScriptButton.ClickableWhenViewportHidden = true

local props = require(script.Props)
local PropTable = props.PropTable
local ClassTable = {
	GuiService = game.GuiService,
	StarterGui = game.StarterGui,
	Players = game.Players,
	Debris = game.Debris,
	UserInputService = game.UserInputService,
	ChatWindowConfiguration = game.TextChatService.ChatWindowConfiguration,
	BubbleChatConfiguration = game.TextChatService.BubbleChatConfiguration,
	TaskScheduler = game:GetService("TaskScheduler"),
	Workspace = workspace,
	TeleportService = game["Teleport Service"],
	RenderSettings = game:GetService("RenderSettings"),
	ChatInputBarConfiguration = game.TextChatService.ChatInputBarConfiguration,
	Terrain = workspace.Terrain,
	NetworkSettings = game:GetService("NetworkSettings"),
	GoogleAnalyticsConfiguration = game:GetService("GoogleAnalyticsConfiguration")
}

local output = ""

local function tryGet(obj, name)
	local valid, result = pcall(function()
		return obj[name]
	end)
	if valid then
		return result
	end
	return nil
end

local function tryCreate(class)
	local valid, result = pcall(function()
		return Instance.new(class)
	end)
	if valid then
		return result
	end
	return tryGet(ClassTable, class)
end

local classOutput = ""
local function writeClass(str)
	classOutput = classOutput .. str
end

local function write(str)
	output = output .. str
end

local function oneClass(class, obj, props)
	classOutput = ""
	local found = false
	writeClass("    {\n")
	writeClass("        \"Name\": \"")
	writeClass(class)
	writeClass("\",\n        \"Props\": [\n")
	for _, prop in props do
		local key = prop
		if prop == "Color3uint8" then
			key = "Color"
		end
		local value = tryGet(obj, key)
		if value ~= nil then
			found = true
			writeClass("            { \"Name\": \"")
			writeClass(prop)
			writeClass("\", \"Value\": \"")
			writeClass(tostring(value))
			writeClass("\" },\n")
		end
	end
	if found then
		classOutput = string.sub(classOutput, 1, -3)
		writeClass("\n        ]\n    },\n")
		write(classOutput)
	end
end

local function run()
	write("[\n")
	for class, props in PropTable do
		local obj = tryCreate(class)
		if obj ~= nil then
			oneClass(class, obj, props)
		else
			print(class)
		end
	end
	output = string.sub(output, 1, -3)
	write("\n]\n")
	
	local results = Instance.new("Script")
	results.Archivable = false
	results.Name = "Output"
	results.Parent = workspace
	ScriptEditorService:UpdateSourceAsync(results, function (old)
		return output
	end)

	Selection:Add({ results })
	plugin:OpenScript(results)
end

newScriptButton.Click:Connect(run)