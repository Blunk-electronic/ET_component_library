-- SYSTEM ET package
-- date 2022-12-26T17:20:00
-- ====================================================================================================

description "imperial SMT 0805 package"
appearance real
technology smt

[SILKSCREEN BEGIN]
	[TOP BEGIN]
		[PLACEHOLDER BEGIN]
			meaning name
			position x 2.200 y 0.0 rotation 90.00
			size 1.200
			linewidth 0.150
			alignment horizontal center vertical bottom
		[PLACEHOLDER END]
	[TOP END]
[SILKSCREEN END]


[ASSEMBLY_DOCUMENTATION BEGIN]
	[TOP BEGIN]
		[LINE BEGIN]
			start x -0.6 y -1.1
			end   x  0.6 y -1.1
			width 0.150
		[LINE END]
		[LINE BEGIN]
			start x  0.6 y -1.1
			end   x  0.6 y  1.1
			width 0.150
		[LINE END]
		[LINE BEGIN]
			start x  0.6 y  1.1
			end   x -0.6 y  1.1
			width 0.150
		[LINE END]
		[LINE BEGIN]
			start x -0.6 y  1.1
			end   x -0.6 y -1.1
			width 0.150
		[LINE END]
		
		[PLACEHOLDER BEGIN]
			meaning value
			position x 3.800 y 0.0 rotation 90.00
			size 1.200
			linewidth 0.150
			alignment horizontal center vertical bottom
		[PLACEHOLDER END]
	[TOP END]
[ASSEMBLY_DOCUMENTATION END]



[KEEPOUT BEGIN]
	[TOP BEGIN]
		[ZONE BEGIN]
			[CONTOURS BEGIN]
				[LINE BEGIN]
					start x -1.0 y -2.0
					end   x  1.0 y -2.0
				[LINE END]
				[LINE BEGIN]
					start x  1.0 y -2.0
					end   x  1.0 y  2.0
				[LINE END]
				[LINE BEGIN]
					start x  1.0 y  2.0
					end   x -1.0 y  2.0
				[LINE END]
				[LINE BEGIN]
					start x -1.0 y  2.0
					end   x -1.0 y -2.0
				[LINE END]
			[CONTOURS END]
		[ZONE END]
	[TOP END]
[KEEPOUT END]

[TERMINALS BEGIN]
	[TERMINAL BEGIN]
		name 1
		technology smt
		position x 0 y 0.95 rotation 0.00
		[PAD_CONTOURS_SMT BEGIN]
			[LINE BEGIN]
				start x -0.75 y -0.65
				end   x  0.75 y -0.65
			[LINE END]
			[LINE BEGIN]
				start x  0.75 y -0.65
				end   x  0.75 y  0.65
			[LINE END]
			[LINE BEGIN]
				start x  0.75 y  0.65
				end   x -0.75 y  0.65
			[LINE END]
			[LINE BEGIN]
				start x -0.75 y  0.65
				end   x -0.75 y -0.65
			[LINE END]
		[PAD_CONTOURS_SMT END]
		face top
		stop_mask_shape expand_pad
	[TERMINAL END]
	[TERMINAL BEGIN]
		name 2
		technology smt
		position x 0 y -0.95 rotation 0.00
		[PAD_CONTOURS_SMT BEGIN]
			[LINE BEGIN]
				start x -0.75 y -0.65
				end   x  0.75 y -0.65
			[LINE END]
			[LINE BEGIN]
				start x  0.75 y -0.65
				end   x  0.75 y  0.65
			[LINE END]
			[LINE BEGIN]
				start x  0.75 y  0.65
				end   x -0.75 y  0.65
			[LINE END]
			[LINE BEGIN]
				start x -0.75 y  0.65
				end   x -0.75 y -0.65
			[LINE END]
		[PAD_CONTOURS_SMT END]
		face top
		stop_mask_shape expand_pad
	[TERMINAL END]	
[TERMINALS END]

-- ====================================================================================================
-- package model file end

