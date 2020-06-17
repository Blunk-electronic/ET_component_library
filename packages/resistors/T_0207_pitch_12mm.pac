-- SYSTEM ET package
-- date 2019-02-21T08:33:02
-- ====================================================================================================

description ""
appearance real
technology tht
[SILK_SCREEN BEGIN]
	[TOP BEGIN]
		[LINE BEGIN]
			start x -4 y -2
			end x -4 y 2
			width 0.150
		[LINE END]
		[LINE BEGIN]
			start x 4 y -2
			end x 4 y 2
			width 0.150
		[LINE END]
		[LINE BEGIN]
			start x -4 y -2
			end x 4 y -2
			width 0.150
		[LINE END]
		[LINE BEGIN]
			start x -4 y 2
			end x 4 y 2
			width 0.150
		[LINE END]
			
		[PLACEHOLDER BEGIN]
			meaning name
			position x -0.000 y -3.0 rotation 0.00
			size 1.000
			line_width 0.15
			alignment horizontal left vertical center
		[PLACEHOLDER END]

		[PLACEHOLDER BEGIN]
			meaning value
			position x -0.000 y -4.5 rotation 0.00
			size 1.000
			line_width 0.15
			alignment horizontal left vertical center
		[PLACEHOLDER END]

		[PLACEHOLDER BEGIN]
			meaning purpose
			position x -0.000 y -6.0 rotation 0.00
			size 1.000
			line_width 0.15
			alignment horizontal left vertical center
		[PLACEHOLDER END]
	[TOP END]
	[BOTTOM BEGIN]
	[BOTTOM END]
[SILK_SCREEN END]

[ASSEMBLY_DOCUMENTATION BEGIN]
	[TOP BEGIN]
		[LINE BEGIN]
			start x -4 y 0
			end x -6 y 0
			width 0.30
		[LINE END]
		[LINE BEGIN]
			start x 4 y 0
			end x 6 y 0
			width 0.30
		[LINE END]
	[TOP END]
	[BOTTOM BEGIN]
	[BOTTOM END]
[ASSEMBLY_DOCUMENTATION END]

[KEEPOUT BEGIN]
	[TOP BEGIN]
		[LINE BEGIN]
			start x -7 y -3
			end x -7 y 3
		[LINE END]
		[LINE BEGIN]
			start x 7 y -3
			end x 7 y 3
		[LINE END]
		[LINE BEGIN]
			start x -7 y -3
			end x 7 y -3
		[LINE END]
		[LINE BEGIN]
			start x -7 y 3
			end x 7 y 3
		[LINE END]
	[TOP END]
[KEEPOUT END]

[TERMINALS BEGIN]
	[TERMINAL BEGIN]
		name 1
		technology tht
		position x -6 y 0 rotation 0.00
		[PAD_CONTOURS_THT BEGIN]
			[TOP BEGIN]
				[CIRCLE BEGIN]
					center x 0 y 0
					radius 1.5
				[CIRCLE END]
			[TOP END]
			[BOTTOM BEGIN]
				[CIRCLE BEGIN]
					center x -0 y 0
					radius 1.5
				[CIRCLE END]
			[BOTTOM END]
		[PAD_CONTOURS_THT END]
			
		width_inner_layers 0.500
		hole drilled
		drill_size 0.8
	[TERMINAL END]

	[TERMINAL BEGIN]
		name 2
		technology tht
		position x 6 y 0 rotation 0.00
		[PAD_CONTOURS_THT BEGIN]
			[TOP BEGIN]
				[CIRCLE BEGIN]
					center x 0 y 0
					radius 1.5
				[CIRCLE END]
			[TOP END]
			[BOTTOM BEGIN]
				[CIRCLE BEGIN]
					center x -0 y 0
					radius 1.5
				[CIRCLE END]
			[BOTTOM END]
		[PAD_CONTOURS_THT END]
			
		width_inner_layers 0.500
		hole drilled
		drill_size 1.0
	[TERMINAL END]

	
[TERMINALS END]

-- ====================================================================================================
-- package model file end

