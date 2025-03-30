-- Only humans can pass...
local donut = workspace["Crosstown Donut"].Body
local secretObject = game:GetService("ServerStorage"):WaitForChild("...")

-- Player shrinks after eating Crosstown Donut
local function eat(part)
	local human = part.Parent:FindFirstChild("Humanoid")

	if human then
		donut:Destroy()
		task.wait(1)

		human.WalkSpeed = 100
		human.UseJumpPower = true
		human.JumpPower = 150
		
		for _, part in ipairs(human:GetChildren()) do 	
			if part:IsA("NumberValue") then
				part.Value *= 0.5
			end
		end
		
		secretObject.Parent = workspace
	end

end

donut.Touched:Connect(eat)
