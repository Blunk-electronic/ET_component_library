-- SYSTEM ET package
-- date 2019-10-21T11:44:48
-- ====================================================================================================

description ""
bom_relevant yes
technology tht

[PCB_CONTOURS_NON_PLATED BEGIN]
	[HOLE BEGIN]
		[CIRCLE BEGIN]
			center x -2 y 3
			radius 1
		[CIRCLE END]	
	[HOLE END]
	
	[HOLE BEGIN]
		[CIRCLE BEGIN]
			center x -2 y -3
			radius 1
		[CIRCLE END]	
	[HOLE END]	
[PCB_CONTOURS_NON_PLATED END]

[SILKSCREEN BEGIN]
	[TOP BEGIN]
		[LINE BEGIN]
			start x -3 y 1.5
			end x 3 y 1.5
			width 0.150
		[LINE END]
		[LINE BEGIN]
			start x -3 y -1.5
			end x 3 y -1.5
			width 0.150
		[LINE END]
		[LINE BEGIN]
			start x -3 y 1.5
			end x -3 y -1.5
			width 0.150
		[LINE END]
		[LINE BEGIN]
			start x 3 y 1.5
			end x 3 y -1.5
			width 0.150
		[LINE END]
		[PLACEHOLDER BEGIN]
			meaning name
			position x 4 y 1.5 rotation 0.00
			size 1.500
			linewidth 0.150
			alignment horizontal left vertical center
		[PLACEHOLDER END]
		[PLACEHOLDER BEGIN]
			meaning purpose
			position x 4 y -1.5 rotation 0.00
			size 1.500
			linewidth 0.150
			alignment horizontal left vertical center
		[PLACEHOLDER END]
	[TOP END]
	[BOTTOM BEGIN]
	[BOTTOM END]
[SILKSCREEN END]

[ASSEMBLY_DOCUMENTATION BEGIN]
	[TOP BEGIN]
		[LINE BEGIN]
			start x -10 y 0
			end x 1 y 0
			width 1
		[LINE END]
	[TOP END]
[ASSEMBLY_DOCUMENTATION END]

[KEEPOUT BEGIN]
	[TOP BEGIN]		
	[TOP END]
[KEEPOUT END]

[TERMINALS BEGIN]
	[TERMINAL BEGIN]
		name 1
		technology tht
		position x 0 y 0 rotation 0.00
		[PAD_CONTOURS_THT BEGIN]
			[TOP BEGIN]
				[LINE BEGIN]
					start x -1.5 y -1.0
					end x 1.5 y -1.0
				[LINE END]
				[LINE BEGIN]
					start x 1.5 y -1.0
					end x 1.5 y 1.0
				[LINE END]
				[LINE BEGIN]
					start x 1.5 y 1.0
					end x -1.5 y 1.0
				[LINE END]
				[LINE BEGIN]
					start x -1.5 y 1.0
					end x -1.5 y -1.0
				[LINE END]
			[TOP END]
			[BOTTOM BEGIN]
				[LINE BEGIN]
					start x -1.5 y -1.0
					end x 1.5 y -1.0
				[LINE END]
				[ARC BEGIN]
					start x 1.5 y -1.0
					center x 1.5 y 0
					end x 1.5 y 1.0
					direction ccw
				[ARC END]
				[LINE BEGIN]
					start x 1.5 y 1.0
					end x -1.5 y 1.0
				[LINE END]
				[ARC BEGIN]
					start x -1.5 y 1.0
					center x -1.5 y 0
					end x -1.5 y -1.0
					direction ccw
				[ARC END]
			[BOTTOM END]
		[PAD_CONTOURS_THT END]

		stop_mask_shape_top expand_pad -- as_pad -- as_pad, expand_pad, user_specific
		stop_mask_shape_bottom expand_pad -- as_pad, expand_pad, user_specific
			
		width_inner_layers 0.500
		hole milled
		[MILLINGS BEGIN]
			[LINE BEGIN]
				start x -1.00 y -0.5
				end x 1.00 y -0.5
			[LINE END]
			[LINE BEGIN]
				start x 1.00 y -0.5
				end x 1.00 y 0.5
			[LINE END]
			[LINE BEGIN]
				start x 1.00 y 0.5
				end x -1.00 y 0.5
			[LINE END]
			[LINE BEGIN]
				start x -1.00 y 0.5
				end x -1.00 y -0.5
			[LINE END]

-- 			[ARC BEGIN]
-- 				start x -1.00 y -0.5
-- 				center x -1.0 y 0.00
-- 				end x -1.00 y 0.50
-- 				direction CCW
-- 			[ARC END]
-- 			[ARC BEGIN]
-- 				start x 1.00 y -0.5
-- 				center x 1.0 y 0.00
-- 				end x 1.00 y 0.50
-- 				direction CW
-- 			[ARC END]
		[MILLINGS END]
	[TERMINAL END]
	
[TERMINALS END]

-- ====================================================================================================
-- package model file end

