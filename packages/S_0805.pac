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
-- [KEEPOUT BEGIN]
-- 	[TOP BEGIN]
-- 		[LINE BEGIN]
-- 			start x -1.600 y -1.000
-- 			end x 1.600 y -1.000
-- 		[LINE END]
-- 		[LINE BEGIN]
-- 			start x -1.600 y 1.000
-- 			end x 1.600 y 1.000
-- 		[LINE END]
-- 		[LINE BEGIN]
-- 			start x -1.600 y -1.000
-- 			end x -1.600 y 1.000
-- 		[LINE END]
-- 		[LINE BEGIN]
-- 			start x 1.600 y -1.000
-- 			end x 1.600 y 1.000
-- 		[LINE END]
-- 	[TOP END]
-- 	[BOTTOM BEGIN]
-- 		[FILL_ZONE BEGIN]
-- 			filled yes
-- 			[CONTOURS BEGIN]
-- 				[LINE BEGIN]
-- 					start x 1.000 y 2.000
-- 					end x 3.000 y 4.000
-- 				[LINE END]
-- 				[ARC BEGIN]
-- 					center x 10.000 y 10.000
-- 					start x 10.000 y 0.000
-- 					end x 10.000 y 20.000
-- 				[ARC END]
-- 				[CIRCLE BEGIN]
-- 					center x 10.000 y 10.000
-- 					radius 20.000
-- 				[CIRCLE END]
-- 			[CONTOURS END]
-- 		[FILL_ZONE END]
-- 		[CUTOUT_ZONE BEGIN]
-- 			[CONTOURS BEGIN]
-- 				[LINE BEGIN]
-- 					start x 1.000 y 2.000
-- 					end x 3.000 y 4.000
-- 				[LINE END]
-- 				[ARC BEGIN]
-- 					center x 10.000 y 10.000
-- 					start x 10.000 y 0.000
-- 					end x 10.000 y 20.000
-- 				[ARC END]
-- 				[CIRCLE BEGIN]
-- 					center x 10.000 y 10.000
-- 					radius 20.000
-- 				[CIRCLE END]
-- 			[CONTOURS END]
-- 		[CUTOUT_ZONE END]
-- 	[BOTTOM END]
-- [KEEPOUT END]
-- [COPPER BEGIN]
-- 	[TOP BEGIN]
-- 		[FILL_ZONE BEGIN]
-- 			corner_easing fillet
-- 			easing_radius 1.000
-- 			min_width 0.050
-- 			isolation 0.050
-- 			fill_style solid
-- 			[CONTOURS BEGIN]
-- 				[LINE BEGIN]
-- 					start x 1.000 y 2.000
-- 					end x 3.000 y 4.000
-- 				[LINE END]
-- 				[ARC BEGIN]
-- 					center x 10.000 y 10.000
-- 					start x 10.000 y 0.000
-- 					end x 10.000 y 20.000
-- 					direction cw
-- 				[ARC END]
-- 				[CIRCLE BEGIN]
-- 					center x 10.000 y 10.000
-- 					radius 20.000
-- 				[CIRCLE END]
-- 			[CONTOURS END]
-- 		[FILL_ZONE END]
-- 	[TOP END]
-- 	[BOTTOM BEGIN]
-- 	[BOTTOM END]
-- [COPPER END]
-- [STOP_MASK BEGIN]
-- 	[TOP BEGIN]
-- 	[TOP END]
-- 	[BOTTOM BEGIN]
-- 	[BOTTOM END]
-- [STOP_MASK END]
-- [STENCIL BEGIN]
-- 	[TOP BEGIN]
-- 	[TOP END]
-- 	[BOTTOM BEGIN]
-- 	[BOTTOM END]
-- [STENCIL END]
-- [ROUTE_RESTRICT BEGIN]
-- [ROUTE_RESTRICT END]
-- [VIA_RESTRICT BEGIN]
-- [VIA_RESTRICT END]
-- [PCB_CONTOURS_NON_PLATED BEGIN]
-- 	[LINE BEGIN]
-- 		start x -0.350 y 0.650
-- 		end x -0.350 y -0.650
-- 	[LINE END]
-- 	[ARC BEGIN]
-- 		center x 150.000 y 75.000
-- 		start x 155.000 y 70.000
-- 		end x 0.000 y 210.000
-- 	[ARC END]
-- [PCB_CONTOURS_NON_PLATED END]
-- [TERMINALS BEGIN]
-- 	[TERMINAL BEGIN]
-- 		name 1
-- 		technology smt
-- 		position x -0.950 y 0.000 rotation 0.00
-- 		[PAD_CONTOURS_SMT BEGIN]
-- 			[LINE BEGIN]
-- 				start x -0.350 y 0.650
-- 				end x -0.350 y -0.650
-- 			[LINE END]
-- 			[LINE BEGIN]
-- 				start x 0.350 y 0.650
-- 				end x 0.350 y -0.650
-- 			[LINE END]
-- 			[LINE BEGIN]
-- 				start x -0.350 y 0.650
-- 				end x 0.350 y 0.650
-- 			[LINE END]
-- 			[LINE BEGIN]
-- 				start x -0.350 y -0.650
-- 				end x 0.350 y -0.650
-- 			[LINE END]
-- 		[PAD_CONTOURS_SMT END]
-- 		face top
-- 		stop_mask open
-- 		solder_paste applied
-- 	[TERMINAL END]
-- 	[TERMINAL BEGIN]
-- 		name 2
-- 		technology tht
-- 		position x 0.950 y 0.000 rotation 0.00
-- 		[PAD_CONTOURS_THT BEGIN]
-- 			[TOP BEGIN]
-- 				[LINE BEGIN]
-- 					start x -0.350 y 0.650
-- 					end x -0.350 y -0.650
-- 				[LINE END]
-- 				[LINE BEGIN]
-- 					start x 0.350 y 0.650
-- 					end x 0.350 y -0.650
-- 				[LINE END]
-- 				[LINE BEGIN]
-- 					start x -0.350 y 0.650
-- 					end x 0.350 y 0.650
-- 				[LINE END]
-- 				[LINE BEGIN]
-- 					start x -0.350 y -0.650
-- 					end x 0.350 y -0.650
-- 				[LINE END]
-- 			[TOP END]
-- 			[BOTTOM BEGIN]
-- 				[LINE BEGIN]
-- 					start x -0.350 y 0.650
-- 					end x -0.350 y -0.650
-- 				[LINE END]
-- 				[LINE BEGIN]
-- 					start x 0.350 y 0.650
-- 					end x 0.350 y -0.650
-- 				[LINE END]
-- 				[LINE BEGIN]
-- 					start x -0.350 y 0.650
-- 					end x 0.350 y 0.650
-- 				[LINE END]
-- 				[LINE BEGIN]
-- 					start x -0.350 y -0.650
-- 					end x 0.350 y -0.650
-- 				[LINE END]
-- 			[BOTTOM END]
-- 		[PAD_CONTOURS_THT END]
-- 		width_inner_layers 1.000
-- 		hole milled
-- 		[MILLINGS BEGIN]
-- 			[LINE BEGIN]
-- 				start x -0.400 y 1.200
-- 				end x -0.400 y -0.800
-- 			[LINE END]
-- 			[LINE BEGIN]
-- 				start x 0.600 y 1.200
-- 				end x 0.600 y -0.800
-- 			[LINE END]
-- 			[LINE BEGIN]
-- 				start x -0.400 y 1.200
-- 				end x 0.600 y 1.200
-- 			[LINE END]
-- 			[LINE BEGIN]
-- 				start x -0.400 y -0.800
-- 				end x 0.600 y -0.800
-- 			[LINE END]
-- 			[ARC BEGIN]
-- 				center x 0.100 y 1.200
-- 				start x -0.900 y 1.200
-- 				end x 1.100 y 1.200
-- 			[ARC END]
-- 			[CIRCLE BEGIN]
-- 				center x 45.000 y 4.200
-- 				radius 10.000
-- 			[CIRCLE END]
-- 		[MILLINGS END]
-- 	[TERMINAL END]
-- [TERMINALS END]

-- ====================================================================================================
-- package model file end

