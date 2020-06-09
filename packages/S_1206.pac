-- SYSTEM ET package
-- date 2019-10-21T11:44:48
-- ====================================================================================================

description ""
appearance real
technology smt
[SILK_SCREEN BEGIN]
	[TOP BEGIN]
		[LINE BEGIN]
			start x -3 y 2
			end x 3 y 2
			width 0.150
		[LINE END]
		[LINE BEGIN]
			start x -3 y -2
			end x 3 y -2
			width 0.150
		[LINE END]
		[LINE BEGIN]
			start x -3 y 2
			end x -3 y -2
			width 0.150
		[LINE END]
		[LINE BEGIN]
			start x 3 y 2
			end x 3 y -2
			width 0.150
		[LINE END]
		
		[PLACEHOLDER BEGIN]
			meaning name
			position x 0.000 y -3.700 rotation 0.00
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
	[TOP END]
	[BOTTOM BEGIN]
	[BOTTOM END]
[ASSEMBLY_DOCUMENTATION END]

[KEEPOUT BEGIN]
	[TOP BEGIN]
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
	[TOP END]
[KEEPOUT END]

[TERMINALS BEGIN]
	[TERMINAL BEGIN]
		name 1
		technology smt
		position x -2.0 y -0.000 rotation 0.00
		[PAD_CONTOURS_SMT BEGIN]
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
		[PAD_CONTOURS_SMT END]
		face top
		stop_mask open
		solder_paste applied
	[TERMINAL END]

	[TERMINAL BEGIN]
		name 2
		technology smt
		position x 2.0 y -0.000 rotation 0.00
		[PAD_CONTOURS_SMT BEGIN]
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
		[PAD_CONTOURS_SMT END]
		face top
		stop_mask open
		solder_paste applied
	[TERMINAL END]

	
[TERMINALS END]

-- ====================================================================================================
-- package model file end

