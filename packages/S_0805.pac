-- SYSTEM ET package
-- date 2019-02-21T08:33:02
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
		[LINE BEGIN]
			start x -0.600 y -0.875
			end x 0.600 y -0.875
			width 0.150
		[LINE END]
		[PLACEHOLDER BEGIN]
			meaning name
			position x 0.000 y -2.100 rotation 0.00
			size width 1.000 height 1.000
			line_width 0.150
			alignment horizontal center vertical bottom
		[PLACEHOLDER END]
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
		[PLACEHOLDER BEGIN]
			meaning value
			position x 0.000 y 2.100 rotation 0.00
			size width 1.000 height 1.000
			line_width 0.150
			alignment horizontal center vertical bottom
		[PLACEHOLDER END]
	[TOP END]
	[BOTTOM BEGIN]
	[BOTTOM END]
[ASSEMBLY_DOCUMENTATION END]
[KEEPOUT BEGIN]
	[TOP BEGIN]
		[LINE BEGIN]
			start x -1.600 y -1.000
			end x 1.600 y -1.000
			width 0.150
		[LINE END]
		[LINE BEGIN]
			start x -1.600 y 1.000
			end x 1.600 y 1.000
			width 0.150
		[LINE END]
		[LINE BEGIN]
			start x -1.600 y -1.000
			end x -1.600 y 1.000
			width 0.150
		[LINE END]
		[LINE BEGIN]
			start x 1.600 y -1.000
			end x 1.600 y 1.000
			width 0.150
		[LINE END]
	[TOP END]
	[BOTTOM BEGIN]
		[FILL_ZONE BEGIN]
			filled yes
			[CONTOURS BEGIN]
				[LINE BEGIN]
					start x 1.000 y 2.000
					end x 3.000 y 4.000
				[LINE END]
				[ARC BEGIN]
					center x 10.000 y 10.000
					start x 10.000 y 0.000
					end x 10.000 y 20.000
				[ARC END]
				[CIRCLE BEGIN]
					center x 10.000 y 10.000
					radius 20
				[CIRCLE END]
			[CONTOURS END]				
		[FILL_ZONE END]

		[CUTOUT_ZONE BEGIN]
			[CONTOURS BEGIN]
				[LINE BEGIN]
					start x 1.000 y 2.000
					end x 3.000 y 4.000
				[LINE END]
				[ARC BEGIN]
					center x 10.000 y 10.000
					start x 10.000 y 0.000
					end x 10.000 y 20.000
				[ARC END]
				[CIRCLE BEGIN]
					center x 10.000 y 10.000
					radius 20
				[CIRCLE END]
			[CONTOURS END]				
		[CUTOUT_ZONE END]
		
	[BOTTOM END]
[KEEPOUT END]

[COPPER BEGIN]
	[TOP BEGIN]
		[FILL_ZONE BEGIN]
			fill_style solid
			hatching_line_width 0.508
			hatching_line_spacing 2.000
			corner_easing fillet
			easing_radius 1.000
			[CONTOURS BEGIN]
				[LINE BEGIN]
					start x 1.000 y 2.000
					end x 3.000 y 4.000
				[LINE END]
				[ARC BEGIN]
					center x 10.000 y 10.000
					start x 10.000 y 0.000
					end x 10.000 y 20.000
				[ARC END]
				[CIRCLE BEGIN]
					center x 10.000 y 10.000
					radius 20
				[CIRCLE END]
			[CONTOURS END]				
		[FILL_ZONE END]
	[TOP END]
	[BOTTOM BEGIN]
	[BOTTOM END]
[COPPER END]
[STOP_MASK BEGIN]
	[TOP BEGIN]
	[TOP END]
	[BOTTOM BEGIN]
	[BOTTOM END]
[STOP_MASK END]
[STENCIL BEGIN]
	[TOP BEGIN]
	[TOP END]
	[BOTTOM BEGIN]
	[BOTTOM END]
[STENCIL END]
[ROUTE_RESTRICT BEGIN]
[ROUTE_RESTRICT END]
[VIA_RESTRICT BEGIN]
[VIA_RESTRICT END]
[PCB_CONTOURS_NON_PLATED BEGIN]
[PCB_CONTOURS_NON_PLATED END]
[TERMINALS BEGIN]
	[TERMINAL BEGIN]
		name 1
		technology smt
		position x -0.950 y 0.000 rotation 0.00
		[PAD_CONTOURS_SMT BEGIN]
			[LINE BEGIN]
				start x -0.350 y 0.650
				end x -0.350 y -0.650
			[LINE END]
			[LINE BEGIN]
				start x 0.350 y 0.650
				end x 0.350 y -0.650
			[LINE END]
			[LINE BEGIN]
				start x -0.350 y 0.650
				end x 0.350 y 0.650
			[LINE END]
			[LINE BEGIN]
				start x -0.350 y -0.650
				end x 0.350 y -0.650
			[LINE END]
		[PAD_CONTOURS_SMT END]
		face top
		stop_mask open
		solder_paste applied
	[TERMINAL END]
	[TERMINAL BEGIN]
		name 2
		technology smt
		position x 0.950 y 0.000 rotation 0.00
		[PAD_CONTOURS_SMT BEGIN]
			[LINE BEGIN]
				start x -0.350 y 0.650
				end x -0.350 y -0.650
			[LINE END]
			[LINE BEGIN]
				start x 0.350 y 0.650
				end x 0.350 y -0.650
			[LINE END]
			[LINE BEGIN]
				start x -0.350 y 0.650
				end x 0.350 y 0.650
			[LINE END]
			[LINE BEGIN]
				start x -0.350 y -0.650
				end x 0.350 y -0.650
			[LINE END]
		[PAD_CONTOURS_SMT END]
		face top
		stop_mask open
		solder_paste applied
	[TERMINAL END]
[TERMINALS END]

-- ====================================================================================================
-- package model file end

