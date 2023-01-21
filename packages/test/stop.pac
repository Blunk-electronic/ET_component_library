-- SYSTEM ET package
-- date 2022-12-26T17:20:00
-- ====================================================================================================

description "dummy test package"
appearance real
technology smt


[STOP_MASK BEGIN]
	[TOP BEGIN]
		[LINE BEGIN]
			start x -3.0 y -0.0
			end   x  3.0 y -0.0
			width 1.0
		[LINE END]

		[ARC BEGIN]
			start x -3.0 y -0.0
			end   x  3.0 y -0.0
			center x 0 y 0
			direction CCW
			width 0.3
		[ARC END]

		[CIRCLE BEGIN]
			center x 0 y 0
			radius 5
			width 1.0
		[CIRCLE END]
		
		[ZONE BEGIN]
			[CONTOURS BEGIN]
				[LINE BEGIN]
					start x -1.0 y -2.0
					end   x  1.0 y -2.0
				[LINE END]
				[LINE BEGIN]
					start x  1.0 y -2.0
					end   x  1.0 y  2.0
				[LINE END]
				[LINE BEGIN]
					start x  1.0 y  2.0
					end   x -1.0 y  2.0
				[LINE END]
				[LINE BEGIN]
					start x -1.0 y  2.0
					end   x -1.0 y -2.0
				[LINE END]
			[CONTOURS END]
		[ZONE END]
	[TOP END]
[STOP_MASK END]


-- ====================================================================================================
-- package model file end

