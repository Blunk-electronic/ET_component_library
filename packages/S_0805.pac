-- SYSTEM ET package
-- date 2019-10-21T11:44:48
-- ====================================================================================================

description ""
appearance real
technology smt
[SILK_SCREEN BEGIN]
	[TOP BEGIN]
		[LINE BEGIN]
			start x 0.600 y 0.875
			end x -0.600 y 0.875
			width 0.150
		[LINE END]
		[ARC BEGIN]
			center x 0 y -1
			start x -1 y -1
			end x 1 y -1
			width 0.150
		[ARC END]
		[CIRCLE BEGIN]
			center x 1 y -3
			radius 1
			width 0.15
		[CIRCLE END]

		[FILL_ZONE BEGIN]
			fill_style solid
-- 			fill_style hatched
-- 			hatching_line_width 0.15
			[CONTOURS BEGIN]
				[LINE BEGIN]
					start x -1.000 y -4.000
					end x 1.000 y -4.000
				[LINE END]
				[LINE BEGIN]
					start x 1.000 y -4.000
					end x 1.000 y -2.000
				[LINE END]
				[LINE BEGIN]
					start x 1.000 y -2.000
					end x -1.000 y -2.000
				[LINE END]
				[ARC BEGIN]
					start x -1.000 y -2.000
					center x -1.000 y -3.000
					end x -1.000 y -4.000
					direction CCW
				[ARC END]
				[CIRCLE BEGIN]
					center x -1.000 y -4.000
					radius 1.000
				[CIRCLE END]
			[CONTOURS END]
		[FILL_ZONE END]
		
		[CUTOUT_ZONE BEGIN]
			[CONTOURS BEGIN]
				[LINE BEGIN]
					start x -1.000 y -3.000
					end x 0.000 y -3.000
				[LINE END]
				[LINE BEGIN]
					start x 0.000 y -3.000
					end x 0.000 y -2.000
				[LINE END]
				[LINE BEGIN]
					start x 0.000 y -2.000
					end x -1.000 y -2.000
				[LINE END]
				[ARC BEGIN]
					start x -1.000 y -2.000
					center x -1.000 y -2.500
					end x -1.000 y -3.000
					direction CCW
				[ARC END]
			[CONTOURS END]
		[CUTOUT_ZONE END]

		
		-- 		[LINE BEGIN]
-- 			start x -0.600 y -0.875
-- 			end x 0.600 y -0.875
-- 			width 0.150
-- 		[LINE END]
-- 		[PLACEHOLDER BEGIN]
-- 			meaning name
-- 			position x 0.000 y -2.100 rotation 0.00
-- 			size 1.000
-- 			line_width 0.150
-- 			alignment horizontal center vertical bottom
-- 		[PLACEHOLDER END]
	[TOP END]
	[BOTTOM BEGIN]
	[BOTTOM END]
[SILK_SCREEN END]
[ASSEMBLY_DOCUMENTATION BEGIN]
	[TOP BEGIN]
		[LINE BEGIN]
			start x -1.000 y 0.625
			end x -1.000 y -0.625
			width 0.150
		[LINE END]
		[LINE BEGIN]
			start x 1.000 y 0.625
			end x -1.000 y 0.625
			width 0.150
		[LINE END]
		[LINE BEGIN]
			start x 1.000 y -0.625
			end x 1.000 y 0.625
			width 0.150
		[LINE END]
		[LINE BEGIN]
			start x -1.000 y -0.625
			end x 1.000 y -0.625
			width 0.150
		[LINE END]
		[CIRCLE BEGIN]
			center x 0 y -3
			radius 1
			width 0.15
		[CIRCLE END]
-- 		[PLACEHOLDER BEGIN]
-- 			meaning value
-- 			position x 0.000 y 2.100 rotation 0.00
-- 			size 1.000
-- 			line_width 0.150
-- 			alignment horizontal center vertical bottom
-- 		[PLACEHOLDER END]
	[TOP END]
	[BOTTOM BEGIN]
	[BOTTOM END]
[ASSEMBLY_DOCUMENTATION END]
[KEEPOUT BEGIN]
	[TOP BEGIN]
		[LINE BEGIN]
			start x -1.600 y -1.000
			end x 1.600 y -1.000
		[LINE END]
		[LINE BEGIN]
			start x -1.600 y 1.000
			end x 1.600 y 1.000
		[LINE END]
		[LINE BEGIN]
			start x -1.600 y -1.000
			end x -1.600 y 1.000
		[LINE END]
		[LINE BEGIN]
			start x 1.600 y -1.000
			end x 1.600 y 1.000
		[LINE END]

		[CIRCLE BEGIN]
			center x 7.000 y 0.000
			radius 2.000
			filled no
		[CIRCLE END]


-- 		[FILL_ZONE BEGIN]
-- 			[CONTOURS BEGIN]
-- 				[LINE BEGIN]
-- 					start x -2.000 y -2.000
-- 					end x -1.000 y -2.000
-- 				[LINE END]
-- 				[ARC BEGIN]
-- 					center x -1.5 y -2.000
-- 					start x -2.000 y -2.000
-- 					end x -1.000 y -2.000
-- 				[ARC END]
-- 			[CONTOURS END]
-- 		[FILL_ZONE END]
	[TOP END]
[KEEPOUT END]

[STOP_MASK BEGIN]
	[TOP BEGIN]
		[LINE BEGIN]
			start x -2.600 y -1.000
			end x 2.600 y -1.000
		[LINE END]
		[LINE BEGIN]
			start x -2.600 y 1.000
			end x 2.600 y 1.000
		[LINE END]
		[LINE BEGIN]
			start x -2.600 y -1.000
			end x -2.600 y 1.000
		[LINE END]
		[LINE BEGIN]
			start x 2.600 y -1.000
			end x 2.600 y 1.000
		[LINE END]

-- 		[FILL_ZONE BEGIN]
-- 			[CONTOURS BEGIN]
-- 				[LINE BEGIN]
-- 					start x -3.000 y -2.000
-- 					end x -2.000 y -2.000
-- 				[LINE END]
-- 				[ARC BEGIN]
-- 					center x -2.5 y -2.000
-- 					start x -3.000 y -2.000
-- 					end x -2.000 y -2.000
-- 				[ARC END]
-- 			[CONTOURS END]
-- 		[FILL_ZONE END]
	[TOP END]
[STOP_MASK END]

[STENCIL BEGIN]
	[TOP BEGIN]
		[LINE BEGIN]
			start x -2.600 y -2.000
			end x 2.600 y -2.000
		[LINE END]
		[LINE BEGIN]
			start x -2.600 y 2.000
			end x 2.600 y 2.000
		[LINE END]
		[LINE BEGIN]
			start x -2.600 y -2.000
			end x -2.600 y 2.000
		[LINE END]
		[LINE BEGIN]
			start x 2.600 y -2.000
			end x 2.600 y 2.000
		[LINE END]

-- 		[FILL_ZONE BEGIN]
-- 			[CONTOURS BEGIN]
-- 				[LINE BEGIN]
-- 					start x -3.000 y -3.000
-- 					end x -2.000 y -3.000
-- 				[LINE END]
-- 				[ARC BEGIN]
-- 					center x -2.5 y -3.000
-- 					start x -3.000 y -3.000
-- 					end x -2.000 y -3.000
-- 				[ARC END]
-- 			[CONTOURS END]
-- 		[FILL_ZONE END]
	[TOP END]
[STENCIL END]

[CONDUCTOR BEGIN]
	[TOP BEGIN]
		[FILL_ZONE BEGIN]
			corner_easing fillet
			easing_radius 1.000
			min_width 0.050
			isolation 0.050
			fill_style solid
			[CONTOURS BEGIN]
				[LINE BEGIN]
					start x -5.000 y -5.000
					end x 0.000 y -5.000
				[LINE END]
				[ARC BEGIN]
					center x -2.500 y -5.000
					start x 0.000 y -5.000
					end x -5.000 y -5.000
					direction ccw
				[ARC END]
			[CONTOURS END]
		[FILL_ZONE END]
	[TOP END]
	[BOTTOM BEGIN]
	[BOTTOM END]
[CONDUCTOR END]

[ROUTE_RESTRICT BEGIN]
	[LINE BEGIN]
		start x -3.000 y -2.000
		end x 3.000 y -2.000
		layers 1
	[LINE END]
[ROUTE_RESTRICT END]
	
[VIA_RESTRICT BEGIN]
	[LINE BEGIN]
		start x -3.000 y -3.000
		end x 3.000 y -3.000
		layers 1
	[LINE END]
[VIA_RESTRICT END]

[PCB_CONTOURS_NON_PLATED BEGIN]
	[LINE BEGIN]
		start x 5 y 1
		end x 6 y 2
	[LINE END]
	[LINE BEGIN]
		start x 6 y 2
		end x 6 y 3
	[LINE END]
	[LINE BEGIN]
		start x 6 y 3
		end x 5 y 1
	[LINE END]
	[CIRCLE BEGIN]
		center x -1.000 y 3.000
		radius 2.000
	[CIRCLE END]
[PCB_CONTOURS_NON_PLATED END]

[TERMINALS BEGIN]
	[TERMINAL BEGIN]
		name 1
		technology smt
		position x 3.0 y -1.000 rotation 20.00
		[PAD_CONTOURS_SMT BEGIN]
			[LINE BEGIN]
				start x -0.4 y -0.7
				end x 0.4 y -0.7
			[LINE END]
			[LINE BEGIN]
				start x 0.4 y -0.7
				end x 0.4 y 0.70
			[LINE END]
			[LINE BEGIN]
				start x 0.4 y 0.7
				end x -0.4 y 0.7
			[LINE END]
			[LINE BEGIN]
				start x -0.4 y 0.7
				end x -0.4 y -0.7
			[LINE END]
		[PAD_CONTOURS_SMT END]
		face top
		stop_mask open
		solder_paste applied
	[TERMINAL END]
	[TERMINAL BEGIN]
		name 2
		technology tht
		position x -3.0 y -1.000 rotation 0.00
		[PAD_CONTOURS_THT BEGIN]
			[TOP BEGIN]
				[LINE BEGIN]
					start x -2.0 y -2.0
					end x 2.0 y -2.0
				[LINE END]
				[LINE BEGIN]
					start x 2.0 y -2.0
					end x 2.0 y 2.0
				[LINE END]
				[LINE BEGIN]
					start x 2.0 y 2.0
					end x -2.0 y 2.0
				[LINE END]
				[LINE BEGIN]
					start x -2 y 2
					end x -2 y -2
				[LINE END]
			[TOP END]
			[BOTTOM BEGIN]
				[LINE BEGIN]
					start x -2.0 y -2.0
					end x 2.0 y -2.0
				[LINE END]
				[LINE BEGIN]
					start x 2.0 y -2.0
					end x 2.0 y 2.0
				[LINE END]
				[LINE BEGIN]
					start x 2.0 y 2.0
					end x -2.0 y 2.0
				[LINE END]
				[ARC BEGIN]
					start x -2 y 2
					center x -2 y 0
					end x -2 y -2
					direction CCW
				[ARC END]
			[BOTTOM END]
		[PAD_CONTOURS_THT END]

		stop_mask_shape_top user_specific -- as_pad -- as_pad, expand_pad, user_specific
		stop_mask_shape_bottom as_pad -- as_pad, expand_pad, user_specific
		
		[STOP_MASK_CONTOURS_THT BEGIN]

			[TOP BEGIN]
				[LINE BEGIN]
					start x -1 y -1
					end x 1 y -1
				[LINE END]
				[LINE BEGIN]
					start x 1 y -1
					end x 1 y 1
				[LINE END]
				[LINE BEGIN]
					start x 1 y 1
					end x -1 y 1
				[LINE END]
				[LINE BEGIN]
					start x -1 y 1
					end x -1 y -1
				[LINE END]
			[TOP END]

			[BOTTOM BEGIN]
				[LINE BEGIN]
					start x -1 y -1
					end x 1 y -1
				[LINE END]
				[LINE BEGIN]
					start x 1 y -1
					end x 1 y 1
				[LINE END]
				[LINE BEGIN]
					start x 1 y 1
					end x -1 y 1
				[LINE END]
				[LINE BEGIN]
					start x -1 y 1
					end x -1 y -1
				[LINE END]
			[BOTTOM END]			
		[STOP_MASK_CONTOURS_THT END]
			
		width_inner_layers 1.000
		hole milled
		[MILLINGS BEGIN]
			[LINE BEGIN]
				start x -1.00 y -1.00
				end x 1.00 y -1.00
			[LINE END]
			[LINE BEGIN]
				start x 1.00 y -1.00
				end x 1.00 y 1.00
			[LINE END]
			[LINE BEGIN]
				start x 1.00 y 1.00
				end x -1.00 y 1.00
			[LINE END]
			[ARC BEGIN]
				start x -1.00 y 1.00
				center x -1.0 y 0.00
				end x -1.00 y -1.00
				direction CCW
			[ARC END]
		[MILLINGS END]
	[TERMINAL END]

	[TERMINAL BEGIN]
		name 3
		technology tht
		position x 0.2 y -4.000 rotation 0.00
		[PAD_CONTOURS_THT BEGIN]
			[TOP BEGIN]
				[LINE BEGIN]
					start x -2.0 y -2.0
					end x 2.0 y -2.0
				[LINE END]
				[LINE BEGIN]
					start x 2.0 y -2.0
					end x 2.0 y 2.0
				[LINE END]
				[LINE BEGIN]
					start x 2.0 y 2.0
					end x -2.0 y 2.0
				[LINE END]
				[LINE BEGIN]
					start x -2 y 2
					end x -2 y -2
				[LINE END]
			[TOP END]
			[BOTTOM BEGIN]
				[LINE BEGIN]
					start x -2.0 y -2.0
					end x 2.0 y -2.0
				[LINE END]
				[LINE BEGIN]
					start x 2.0 y -2.0
					end x 2.0 y 2.0
				[LINE END]
				[LINE BEGIN]
					start x 2.0 y 2.0
					end x -2.0 y 2.0
				[LINE END]
				[ARC BEGIN]
					start x -2 y 2
					center x -2 y 0
					end x -2 y -2
					direction CCW
				[ARC END]
			[BOTTOM END]
		[PAD_CONTOURS_THT END]
		width_inner_layers 1.000
		hole drilled
		drill_size 1.0
	[TERMINAL END]

	
[TERMINALS END]

-- ====================================================================================================
-- package model file end

