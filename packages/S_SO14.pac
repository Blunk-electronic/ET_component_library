-- SYSTEM ET package
-- date 2019-02-21T08:33:02
-- ====================================================================================================

description ""
appearance real
technology smt
[SILKSCREEN BEGIN]
	[TOP BEGIN]
		[LINE BEGIN]
			start x -1.800 y -4.375
			end x -1.800 y 4.375
			width 0.150
		[LINE END]
		[LINE BEGIN]
			start x -1.800 y 4.375
			end x 1.800 y 4.375
			width 0.150
		[LINE END]
		[LINE BEGIN]
			start x 1.800 y 4.375
			end x 1.800 y -4.375
			width 0.150
		[LINE END]

		-- pin 1 mark
		[ARC BEGIN]
			start x 0.50 y 4.375
			center x 0 y 4.375
			end x -0.50 y 4.375
			width 0.150
		[ARC END]
			
		[LINE BEGIN]
			start x 1.800 y -4.375
			end x -1.800 y -4.375
			width 0.150
		[LINE END]
			
		[PLACEHOLDER BEGIN]
			meaning name
			position x -2.000 y -6.0 rotation 0.00
			size 1.000
			line_width 0.15
			alignment horizontal right vertical bottom
		[PLACEHOLDER END]

		[PLACEHOLDER BEGIN]
			meaning value
			position x -2.000 y -8.000 rotation 0.00
			size 1.000
			line_width 0.150
			alignment horizontal center vertical bottom
		[PLACEHOLDER END]

	[TOP END]
	[BOTTOM BEGIN]
	[BOTTOM END]
[SILKSCREEN END]

[ASSEMBLY_DOCUMENTATION BEGIN]
	[TOP BEGIN]
-- 		[PLACEHOLDER BEGIN]
-- 			meaning value
-- 			position x 0.000 y -5.000 rotation 90.00
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
	[TOP END]
	[BOTTOM BEGIN]
	[BOTTOM END]
[KEEPOUT END]
[CONDUCTOR BEGIN]
	[TOP BEGIN]
-- 		[LINE BEGIN]
-- 			start x -1.0 y 0
-- 			end x 1 y 0
-- 			width 0.150
-- 		[LINE END]

		[TEXT BEGIN]
			content "1"
			position x 0.000 y 2.0 rotation 45.00
			size 1.000
			line_width 0.15
			alignment horizontal left vertical bottom
		[TEXT END]
	[TOP END]
	[BOTTOM BEGIN]
		[TEXT BEGIN]
			content "L"
			position x 0.000 y 0.0 rotation 0.00
			size 1.000
			line_width 0.2
			alignment horizontal left vertical bottom
		[TEXT END]
	[BOTTOM END]
[CONDUCTOR END]
[STOPMASK BEGIN]
	[TOP BEGIN]
	[TOP END]
	[BOTTOM BEGIN]
	[BOTTOM END]
[STOPMASK END]
[STENCIL BEGIN]
	[TOP BEGIN]
	[TOP END]
	[BOTTOM BEGIN]
	[BOTTOM END]
[STENCIL END]

[ROUTE_RESTRICT BEGIN]
-- 	[LINE BEGIN]
-- 		start x -1.000 y -1.00
-- 		end x -1.000 y 1.00
-- 		layers 1
-- 	[LINE END]
[ROUTE_RESTRICT END]
	
[VIA_RESTRICT BEGIN]
[VIA_RESTRICT END]
[PCB_CONTOURS_NON_PLATED BEGIN]
[PCB_CONTOURS_NON_PLATED END]
[TERMINALS BEGIN]
	[TERMINAL BEGIN]
		name 1
		technology smt
		position x -2.925 y 3.810 rotation 0.00
		[PAD_CONTOURS_SMT BEGIN]
			[LINE BEGIN]
				start x -1.000 y -0.300
				end x 1.000 y -0.300
			[LINE END]
			[LINE BEGIN]
				start x 1.000 y -0.300
				end x 1.000 y 0.300
			[LINE END]
			[LINE BEGIN]
				start x 1.000 y 0.300
				end x -1.000 y 0.300
			[LINE END]
			[LINE BEGIN]
				start x -1.000 y 0.300
				end x -1.000 y -0.300
			[LINE END]
		[PAD_CONTOURS_SMT END]
		face top
		solder_paste_shape shrink_pad
		solder_paste_shrink_factor 0.8
	[TERMINAL END]

	[TERMINAL BEGIN]
		name 2
		technology smt
		position x -2.925 y 2.540 rotation 0.00
		[PAD_CONTOURS_SMT BEGIN]
			[LINE BEGIN]
				start x -1.000 y -0.300
				end x 1.000 y -0.300
			[LINE END]
			[LINE BEGIN]
				start x 1.000 y -0.300
				end x 1.000 y 0.300
			[LINE END]
			[LINE BEGIN]
				start x 1.000 y 0.300
				end x -1.000 y 0.300
			[LINE END]
			[LINE BEGIN]
				start x -1.000 y 0.300
				end x -1.000 y -0.300
			[LINE END]
		[PAD_CONTOURS_SMT END]
		face top
		
		solder_paste_shape user_specific
		[STENCIL_CONTOURS BEGIN]
			[LINE BEGIN]
				start x -0.600 y -0.200
				end x 0.600 y -0.200
			[LINE END]
			[LINE BEGIN]
				start x 0.600 y -0.200
				end x 0.600 y 0.200
			[LINE END]
			[LINE BEGIN]
				start x 0.600 y 0.200
				end x -0.600 y -0.200
			[LINE END]
-- 			[LINE BEGIN]
-- 				start x -0.600 y 0.200
-- 				end x -0.600 y -0.200
-- 			[LINE END]
		[STENCIL_CONTOURS END]

	[TERMINAL END]

	[TERMINAL BEGIN]
		name 3
		technology smt
		position x -2.925 y 1.270 rotation 0.00
		[PAD_CONTOURS_SMT BEGIN]
			[LINE BEGIN]
				start x -1.000 y -0.300
				end x 1.000 y -0.300
			[LINE END]
			[LINE BEGIN]
				start x 1.000 y -0.300
				end x 1.000 y 0.300
			[LINE END]
			[LINE BEGIN]
				start x 1.000 y 0.300
				end x -1.000 y 0.300
			[LINE END]
			[LINE BEGIN]
				start x -1.000 y 0.300
				end x -1.000 y -0.300
			[LINE END]
		[PAD_CONTOURS_SMT END]
		face top
	[TERMINAL END]

	[TERMINAL BEGIN]
		name 4
		technology smt
		position x -2.925 y 0.000 rotation 0.00
		[PAD_CONTOURS_SMT BEGIN]
			[LINE BEGIN]
				start x -1.000 y -0.300
				end x 1.000 y -0.300
			[LINE END]
			[LINE BEGIN]
				start x 1.000 y -0.300
				end x 1.000 y 0.300
			[LINE END]
			[LINE BEGIN]
				start x 1.000 y 0.300
				end x -1.000 y 0.300
			[LINE END]
			[LINE BEGIN]
				start x -1.000 y 0.300
				end x -1.000 y -0.300
			[LINE END]
		[PAD_CONTOURS_SMT END]
		face top
	[TERMINAL END]

	[TERMINAL BEGIN]
		name 5
		technology smt
		position x -2.925 y -1.270 rotation 0.00
		[PAD_CONTOURS_SMT BEGIN]
			[LINE BEGIN]
				start x -1.000 y -0.300
				end x 1.000 y -0.300
			[LINE END]
			[LINE BEGIN]
				start x 1.000 y -0.300
				end x 1.000 y 0.300
			[LINE END]
			[LINE BEGIN]
				start x 1.000 y 0.300
				end x -1.000 y 0.300
			[LINE END]
			[LINE BEGIN]
				start x -1.000 y 0.300
				end x -1.000 y -0.300
			[LINE END]
		[PAD_CONTOURS_SMT END]
		face top
	[TERMINAL END]

	[TERMINAL BEGIN]
		name 6
		technology smt
		position x -2.925 y -2.540 rotation 0.00
		[PAD_CONTOURS_SMT BEGIN]
			[LINE BEGIN]
				start x -1.000 y -0.300
				end x 1.000 y -0.300
			[LINE END]
			[LINE BEGIN]
				start x 1.000 y -0.300
				end x 1.000 y 0.300
			[LINE END]
			[LINE BEGIN]
				start x 1.000 y 0.300
				end x -1.000 y 0.300
			[LINE END]
			[LINE BEGIN]
				start x -1.000 y 0.300
				end x -1.000 y -0.300
			[LINE END]
		[PAD_CONTOURS_SMT END]
		face top
	[TERMINAL END]
	
	[TERMINAL BEGIN]
		name 7
		technology smt
		position x -2.925 y -3.810 rotation 0.00
		[PAD_CONTOURS_SMT BEGIN]
			[LINE BEGIN]
				start x -1.000 y -0.300
				end x 1.000 y -0.300
			[LINE END]
			[LINE BEGIN]
				start x 1.000 y -0.300
				end x 1.000 y 0.300
			[LINE END]
			[LINE BEGIN]
				start x 1.000 y 0.300
				end x -1.000 y 0.300
			[LINE END]
			[LINE BEGIN]
				start x -1.000 y 0.300
				end x -1.000 y -0.300
			[LINE END]
		[PAD_CONTOURS_SMT END]
		face top
	[TERMINAL END]

	[TERMINAL BEGIN]
		name 8
		technology smt
		position x 2.925 y -3.810 rotation 0.00
		[PAD_CONTOURS_SMT BEGIN]
			[LINE BEGIN]
				start x -1.000 y -0.300
				end x 1.000 y -0.300
			[LINE END]
			[LINE BEGIN]
				start x 1.000 y -0.300
				end x 1.000 y 0.300
			[LINE END]
			[LINE BEGIN]
				start x 1.000 y 0.300
				end x -1.000 y 0.300
			[LINE END]
			[LINE BEGIN]
				start x -1.000 y 0.300
				end x -1.000 y -0.300
			[LINE END]
		[PAD_CONTOURS_SMT END]
		face top
	[TERMINAL END]

	[TERMINAL BEGIN]
		name 9
		technology smt
		position x 2.925 y -2.540 rotation 0.00
		[PAD_CONTOURS_SMT BEGIN]
			[LINE BEGIN]
				start x -1.000 y -0.300
				end x 1.000 y -0.300
			[LINE END]
			[LINE BEGIN]
				start x 1.000 y -0.300
				end x 1.000 y 0.300
			[LINE END]
			[LINE BEGIN]
				start x 1.000 y 0.300
				end x -1.000 y 0.300
			[LINE END]
			[LINE BEGIN]
				start x -1.000 y 0.300
				end x -1.000 y -0.300
			[LINE END]
		[PAD_CONTOURS_SMT END]
		face top
	[TERMINAL END]

	[TERMINAL BEGIN]
		name 10
		technology smt
		position x 2.925 y -1.270 rotation 0.00
		[PAD_CONTOURS_SMT BEGIN]
			[LINE BEGIN]
				start x -1.000 y -0.300
				end x 1.000 y -0.300
			[LINE END]
			[LINE BEGIN]
				start x 1.000 y -0.300
				end x 1.000 y 0.300
			[LINE END]
			[LINE BEGIN]
				start x 1.000 y 0.300
				end x -1.000 y 0.300
			[LINE END]
			[LINE BEGIN]
				start x -1.000 y 0.300
				end x -1.000 y -0.300
			[LINE END]
		[PAD_CONTOURS_SMT END]
		face top
	[TERMINAL END]

	[TERMINAL BEGIN]
		name 11
		technology smt
		position x 2.925 y 0 rotation 0.00
		[PAD_CONTOURS_SMT BEGIN]
			[LINE BEGIN]
				start x -1.000 y -0.300
				end x 1.000 y -0.300
			[LINE END]
			[LINE BEGIN]
				start x 1.000 y -0.300
				end x 1.000 y 0.300
			[LINE END]
			[LINE BEGIN]
				start x 1.000 y 0.300
				end x -1.000 y 0.300
			[LINE END]
			[LINE BEGIN]
				start x -1.000 y 0.300
				end x -1.000 y -0.300
			[LINE END]
		[PAD_CONTOURS_SMT END]
		face top
	[TERMINAL END]

	[TERMINAL BEGIN]
		name 12
		technology smt
		position x 2.925 y 1.27 rotation 0.00
		[PAD_CONTOURS_SMT BEGIN]
			[LINE BEGIN]
				start x -1.000 y -0.300
				end x 1.000 y -0.300
			[LINE END]
			[LINE BEGIN]
				start x 1.000 y -0.300
				end x 1.000 y 0.300
			[LINE END]
			[LINE BEGIN]
				start x 1.000 y 0.300
				end x -1.000 y 0.300
			[LINE END]
			[LINE BEGIN]
				start x -1.000 y 0.300
				end x -1.000 y -0.300
			[LINE END]
		[PAD_CONTOURS_SMT END]
		face top
	[TERMINAL END]

	[TERMINAL BEGIN]
		name 13
		technology smt
		position x 2.925 y 2.54 rotation 0.00
		[PAD_CONTOURS_SMT BEGIN]
			[LINE BEGIN]
				start x -1.000 y -0.300
				end x 1.000 y -0.300
			[LINE END]
			[LINE BEGIN]
				start x 1.000 y -0.300
				end x 1.000 y 0.300
			[LINE END]
			[LINE BEGIN]
				start x 1.000 y 0.300
				end x -1.000 y 0.300
			[LINE END]
			[LINE BEGIN]
				start x -1.000 y 0.300
				end x -1.000 y -0.300
			[LINE END]
		[PAD_CONTOURS_SMT END]
		face top
	[TERMINAL END]

	[TERMINAL BEGIN]
		name 14
		technology smt
		position x 2.925 y 3.81 rotation 0.00
		[PAD_CONTOURS_SMT BEGIN]
			[LINE BEGIN]
				start x -1.000 y -0.300
				end x 1.000 y -0.300
			[LINE END]
			[LINE BEGIN]
				start x 1.000 y -0.300
				end x 1.000 y 0.300
			[LINE END]
			[LINE BEGIN]
				start x 1.000 y 0.300
				end x -1.000 y 0.300
			[LINE END]
			[LINE BEGIN]
				start x -1.000 y 0.300
				end x -1.000 y -0.300
			[LINE END]
		[PAD_CONTOURS_SMT END]
		face top
	[TERMINAL END]

	
[TERMINALS END]

-- ====================================================================================================
-- package model file end

