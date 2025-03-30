local tool = workspace.WeatherController
local cloud = workspace:WaitForChild("Cloud")
local atmosphere = game.Lighting:FindFirstChild("Atmosphere")

-- Makes it rain when the Tool is activated (player clicks)
local function onToolActivated()
	tool.Handle.Anchored = false
	cloud.Transparency = 0
	cloud.Rain.Enabled = true
	atmosphere.Haze = 10
end

-- Connect the function to the Tool's Activated event
tool.Activated:Connect(onToolActivated)

