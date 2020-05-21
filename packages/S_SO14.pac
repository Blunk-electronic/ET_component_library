-- SYSTEM ET package
-- date 2019-02-21T08:33:02
-- ====================================================================================================

description ""
appearance real
technology smt
[SILK_SCREEN BEGIN]
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
			position x 0.000 y -5.225 rotation 0.00
			size 1.000
			line_width 0.150
			alignment horizontal center vertical bottom
		[PLACEHOLDER END]
	[TOP END]
	[BOTTOM BEGIN]
	[BOTTOM END]
[SILK_SCREEN END]
[ASSEMBLY_DOCUMENTATION BEGIN]
	[TOP BEGIN]
		[PLACEHOLDER BEGIN]
			meaning value
			position x 0.000 y 0.000 rotation 90.00
			size 1.000
			line_width 0.150
			alignment horizontal center vertical bottom
		[PLACEHOLDER END]
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
[COPPER BEGIN]
	[TOP BEGIN]
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
		stop_mask open
		solder_paste applied
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
		stop_mask open
		solder_paste applied
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
		stop_mask open
		solder_paste applied
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
		stop_mask open
		solder_paste applied
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
		stop_mask open
		solder_paste applied
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
		stop_mask open
		solder_paste applied
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
		stop_mask open
		solder_paste applied
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
		stop_mask open
		solder_paste applied
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
		stop_mask open
		solder_paste applied
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
		stop_mask open
		solder_paste applied
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
		stop_mask open
		solder_paste applied
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
		stop_mask open
		solder_paste applied
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
		stop_mask open
		solder_paste applied
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
		stop_mask open
		solder_paste applied
	[TERMINAL END]

	
[TERMINALS END]

-- ====================================================================================================
-- package model file end

