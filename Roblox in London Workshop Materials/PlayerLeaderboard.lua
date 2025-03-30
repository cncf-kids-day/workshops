-- Creates a customized leaderboard for the player
---> Store in ServerScriptService

local function onPlayerJoin(player)
	local leaderstats = Instance.new("Folder")
	leaderstats.Name = "leaderstats"
	leaderstats.Parent = player


	local gold = Instance.new("IntValue")
	gold.Name = "Pounds"
	gold.Value = 0
	gold.Parent = leaderstats

end


-- Run onPlayerJoin when the PlayerAdded event fires
Players.PlayerAdded:Connect(onPlayerJoin)