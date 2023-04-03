-- SYSTEM ET package
-- date 2022-12-26T17:20:00
-- ====================================================================================================

description "imperial SMT SOT23 package"
appearance real
technology smt

[SILK_SCREEN BEGIN]
	[TOP BEGIN]
		[PLACEHOLDER BEGIN]
			meaning name
			position x 2 y -0.7 rotation 0.00
			size 1.200
			line_width 0.150
			alignment horizontal left vertical bottom
		[PLACEHOLDER END]
	[TOP END]
[SILK_SCREEN END]


[ASSEMBLY_DOCUMENTATION BEGIN]
	[TOP BEGIN]
		[LINE BEGIN]
			start x -1.43 y -0.67
			end   x  1.43 y -0.67
			width 0.150
		[LINE END]
		[LINE BEGIN]
			start x  1.43 y -0.67
			end   x  1.43 y  0.67
			width 0.150
		[LINE END]
		[LINE BEGIN]
			start x  1.43 y  0.67
			end   x -1.43 y  0.67
			width 0.150
		[LINE END]
		[LINE BEGIN]
			start x -1.43 y  0.67
			end   x -1.43 y -0.67
			width 0.150
		[LINE END]
		
		[PLACEHOLDER BEGIN]
			meaning value
			position x 2 y -2.4 rotation 0.00
			size 1.200
			line_width 0.150
			alignment horizontal left vertical bottom
		[PLACEHOLDER END]
	[TOP END]
[ASSEMBLY_DOCUMENTATION END]



[KEEPOUT BEGIN]
	[TOP BEGIN]
		[ZONE BEGIN]
			[CONTOURS BEGIN]
				[LINE BEGIN]
					start x -1.8 y -2.0
					end   x  1.8 y -2.0
				[LINE END]
				[LINE BEGIN]
					start x  1.8 y -2.0
					end   x  1.8 y  2.0
				[LINE END]
				[LINE BEGIN]
					start x  1.8 y  2.0
					end   x -1.8 y  2.0
				[LINE END]
				[LINE BEGIN]
					start x -1.8 y  2.0
					end   x -1.8 y -2.0
				[LINE END]
			[CONTOURS END]
		[ZONE END]
	[TOP END]
[KEEPOUT END]

[TERMINALS BEGIN]
	[TERMINAL BEGIN]
		name 1
		technology smt
		position x -0.95 y -1.1 rotation 0.00
		[PAD_CONTOURS_SMT BEGIN]
			[LINE BEGIN]
				start x -0.5 y -0.7
				end   x  0.5 y -0.7
			[LINE END]
			[LINE BEGIN]
				start x  0.5 y -0.7
				end   x  0.5 y  0.7
			[LINE END]
			[LINE BEGIN]
				start x  0.5 y  0.7
				end   x -0.5 y  0.7
			[LINE END]
			[LINE BEGIN]
				start x -0.5 y  0.7
				end   x -0.5 y -0.7
			[LINE END]
		[PAD_CONTOURS_SMT END]
		face top
		stop_mask_shape expand_pad
	[TERMINAL END]
	[TERMINAL BEGIN]
		name 2
		technology smt
		position x 0.95 y -1.1 rotation 0.00
		[PAD_CONTOURS_SMT BEGIN]
			[LINE BEGIN]
				start x -0.5 y -0.7
				end   x  0.5 y -0.7
			[LINE END]
			[LINE BEGIN]
				start x  0.5 y -0.7
				end   x  0.5 y  0.7
			[LINE END]
			[LINE BEGIN]
				start x  0.5 y  0.7
				end   x -0.5 y  0.7
			[LINE END]
			[LINE BEGIN]
				start x -0.5 y  0.7
				end   x -0.5 y -0.7
			[LINE END]
		[PAD_CONTOURS_SMT END]
		face top
		stop_mask_shape expand_pad
	[TERMINAL END]
	[TERMINAL BEGIN]
		name 3
		technology smt
		position x 0 y 1.1 rotation 0.00
		[PAD_CONTOURS_SMT BEGIN]
			[LINE BEGIN]
				start x -0.5 y -0.7
				end   x  0.5 y -0.7
			[LINE END]
			[LINE BEGIN]
				start x  0.5 y -0.7
				end   x  0.5 y  0.7
			[LINE END]
			[LINE BEGIN]
				start x  0.5 y  0.7
				end   x -0.5 y  0.7
			[LINE END]
			[LINE BEGIN]
				start x -0.5 y  0.7
				end   x -0.5 y -0.7
			[LINE END]
		[PAD_CONTOURS_SMT END]
		face top
		stop_mask_shape expand_pad
	[TERMINAL END]		
[TERMINALS END]

-- ====================================================================================================
-- package model file end

