-- SYSTEM ET package
-- date 2022-12-26T17:20:00
-- ====================================================================================================

description "imperial THT TO220 horizontal"
appearance real
technology tht

[SILKSCREEN BEGIN]
	[TOP BEGIN]
		[PLACEHOLDER BEGIN]
			meaning name
			position x 0 y -5.5 rotation 0.00
			size 1.500
			linewidth 0.150
			alignment horizontal center vertical bottom
		[PLACEHOLDER END]
	[TOP END]
[SILKSCREEN END]


[ASSEMBLY_DOCUMENTATION BEGIN]
	[TOP BEGIN]
		[LINE BEGIN]
			start x -7    y -4
			end   x  7    y -4
			width 0.2
		[LINE END]
		[LINE BEGIN]
			start x  7    y -4
			end   x  7    y  22
			width 0.2
		[LINE END]
		[LINE BEGIN]
			start x  7    y  22  
			end   x -7    y  22
			width 0.2
		[LINE END]
		[LINE BEGIN]
			start x -7    y  22
			end   x -7    y -4
			width 0.2
		[LINE END]
		
		[PLACEHOLDER BEGIN]
			meaning value
			position x 0 y -7.5 rotation 0.00
			size 1.500
			linewidth 0.150
			alignment horizontal center vertical bottom
		[PLACEHOLDER END]
	[TOP END]
[ASSEMBLY_DOCUMENTATION END]



-- [SILKSCREEN BEGIN]
-- 	[TOP BEGIN]
-- 		[ZONE BEGIN]
-- 			[CONTOURS BEGIN]
-- 				[LINE BEGIN]
-- 					start x -8    y -5
-- 					end   x  8    y -5
-- 				[LINE END]
-- 				[LINE BEGIN]
-- 					start x  8    y -5
-- 					end   x  8    y  24
-- 				[LINE END]
-- 				[LINE BEGIN]
-- 					start x  8    y  24  
-- 					end   x -8    y  24
-- 				[LINE END]
-- 				[LINE BEGIN]
-- 					start x -8    y  24
-- 					end   x -8    y -5
-- 				[LINE END]
-- 			[CONTOURS END]
-- 		[ZONE END]
-- 	[TOP END]
-- [SILKSCREEN END]


[KEEPOUT BEGIN]
	[TOP BEGIN]
		[ZONE BEGIN]
			[CONTOURS BEGIN]
				[LINE BEGIN]
					start x -8    y -5
					end   x  8    y -5
				[LINE END]
				[LINE BEGIN]
					start x  8    y -5
					end   x  8    y  24
				[LINE END]
				[LINE BEGIN]
					start x  8    y  24  
					end   x -8    y  24
				[LINE END]
				[LINE BEGIN]
					start x -8    y  24
					end   x -8    y -5
				[LINE END]
			[CONTOURS END]
		[ZONE END]
	[TOP END]
[KEEPOUT END]

[TERMINALS BEGIN]
	[TERMINAL BEGIN]
		name 1
		technology tht
		position x -2.54 y 0 rotation 0.00
		[PAD_CONTOURS_THT BEGIN]
			[TOP BEGIN]
				[CIRCLE BEGIN]
					center x 0 y 0
					radius 1.0
				[CIRCLE END]
			[TOP END]
			[BOTTOM BEGIN]
				[CIRCLE BEGIN]
					center x 0 y 0
					radius 1.0
				[CIRCLE END]
			[BOTTOM END]
		[PAD_CONTOURS_THT END]
		width_inner_layers 1.500
		hole drilled
		drill_size 0.8
	[TERMINAL END]

	[TERMINAL BEGIN]
		name 2
		technology tht
		position x 0 y 0 rotation 0.00
		[PAD_CONTOURS_THT BEGIN]
			[TOP BEGIN]
				[LINE BEGIN]
					start x  -5   y  5
					end   x  -0.8 y  5
				[LINE END]
				[LINE BEGIN]
					start x  -0.8 y  5
					end   x  -0.8 y -1
				[LINE END]
				[LINE BEGIN]
					start x  -0.8 y -1
					end   x   0.8 y -1
				[LINE END]
				[LINE BEGIN]
					start x   0.8 y -1
					end   x   0.8 y  5
				[LINE END]
				[LINE BEGIN]
					start x   0.8 y  5
					end   x   5   y  5
				[LINE END]
				
				
				[LINE BEGIN]
					start x   5 y  5
					end   x   5 y 20
				[LINE END]
				[LINE BEGIN]
					start x   5 y 20
					end   x  -5 y 20
				[LINE END]
				[LINE BEGIN]
					start x  -5 y 20
					end   x  -5 y  5
				[LINE END]				
			[TOP END]
			[BOTTOM BEGIN]
				[CIRCLE BEGIN]
					center x 0 y 0
					radius 1.0
				[CIRCLE END]
			[BOTTOM END]
		[PAD_CONTOURS_THT END]
		width_inner_layers 1.500
		hole drilled
		drill_size 0.8
	[TERMINAL END]

	
	[TERMINAL BEGIN]
		name 3
		technology tht
		position x 2.54 y 0 rotation 0.00
		[PAD_CONTOURS_THT BEGIN]
			[TOP BEGIN]
				[CIRCLE BEGIN]
					center x 0 y 0
					radius 1.0
				[CIRCLE END]
			[TOP END]
			[BOTTOM BEGIN]
				[CIRCLE BEGIN]
					center x 0 y 0
					radius 1.0
				[CIRCLE END]
			[BOTTOM END]
		[PAD_CONTOURS_THT END]
		width_inner_layers 1.500
		hole drilled
		drill_size 0.8
	[TERMINAL END]

	
[TERMINALS END]

-- ====================================================================================================
-- package model file end

