local ServerStorage = game:GetService("ServerStorage")
local somethingCool = ServerStorage:WaitForChild("Mobile Phone")
local TweenService = game:GetService("TweenService")
local tube = workspace["Big City Models"]["Tube"]["MeshPart"]
local distance = 0

local function run()

	-- Set position to run 10 studs to the left
	local targetPosition = tube.Position - Vector3.new(100, 0, 0)

	-- Create TweenInfo
	local tweenInfo = TweenInfo.new(
		5, 						 -- Time (seconds)
		Enum.EasingStyle.Linear, -- Movement style
		Enum.EasingDirection.Out -- Movement direction
	)

	-- Create the animation
	local tween = TweenService:Create(tube, tweenInfo, {Position = targetPosition})

	-- Play the animation
	tween:Play()

	-- Wait for the animation to finish
	tween.Completed:Wait()
end

somethingCool.Parent = workspace
wait(3)

-- Begin the Tube
while true do
	wait(0.1)
	run()
	distance += 100

	-- Stop the train after specified distance is reached
	if (distance >= 10000) then
		break
	end
end
