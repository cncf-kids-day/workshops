local dialog = workspace["Phippy & Friends"]["Zee the Zebra"]["MeshPart"].Dialog
local ice = workspace.Ice

-- Check if player collides with the ice cube
local function superpower(part)
	print("The ".. part.Name .. " is touching the ice")
	
	local player = game.Players:GetPlayerFromCharacter(part.Parent)
	if player then
		ice:Destroy()
		dialog:Destroy()

		-- Don't tell Phippy about this >:)
		for i = 1, 10 do
			print("PLEASE CLICK: www.badgerhacks.com")
		end
	end
end

-- Connect the function to the object's Touched event
ice.Touched:Connect(superpower)
