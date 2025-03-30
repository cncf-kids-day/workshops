local boundary = workspace.Block

local function eat(part)
	local human = part.Parent:FindFirstChild("Humanoid")

	if human then
		local HumanoidRootPart = part.Parent:FindFirstChild("HumanoidRootPart")

		if human and HumanoidRootPart then

			HumanoidRootPart.CFrame = workspace["..."].Block.CFrame

		end
	end
		

end

boundary.Touched:Connect(eat)
