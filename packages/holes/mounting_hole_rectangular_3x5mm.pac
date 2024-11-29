-- SYSTEM ET package
-- date 2019-02-21T08:33:02
-- ====================================================================================================

description ""
appearance real
technology tht -- don't care here

--[SILKSCREEN BEGIN]
	--[TOP BEGIN]
		--[PLACEHOLDER BEGIN]
			--meaning name
			--position x 0.000 y -3.0 rotation 0.00
			--size 1.000
			--line_width 0.15
			--alignment horizontal center vertical center
		--[PLACEHOLDER END]
	--[TOP END]
--[SILKSCREEN END]

[KEEPOUT BEGIN]
	[TOP BEGIN]
		[ZONE BEGIN]
			[CONTOURS BEGIN]
				[LINE BEGIN]
					start x -2.5 y -3.5
					end   x  2.5 y -3.5
				[LINE END]
				[LINE BEGIN]
					start x  2.5 y -3.5
					end   x  2.5 y  3.5
				[LINE END]
				[LINE BEGIN]
					start x  2.5 y  3.5
					end   x -2.5 y  3.5
				[LINE END]
				[LINE BEGIN]
					start x -2.5 y  3.5
					end   x -2.5 y -3.5
				[LINE END]
			[CONTOURS END]
		[ZONE END]
	[TOP END]
	[BOTTOM BEGIN]
		[ZONE BEGIN]
			[CONTOURS BEGIN]
				[LINE BEGIN]
					start x -2.5 y -3.5
					end   x  2.5 y -3.5
				[LINE END]
				[LINE BEGIN]
					start x  2.5 y -3.5
					end   x  2.5 y  3.5
				[LINE END]
				[LINE BEGIN]
					start x  2.5 y  3.5
					end   x -2.5 y  3.5
				[LINE END]
				[LINE BEGIN]
					start x -2.5 y  3.5
					end   x -2.5 y -3.5
				[LINE END]
			[CONTOURS END]
		[ZONE END]
	[BOTTOM END]
[KEEPOUT END]

[ROUTE_RESTRICT BEGIN]
	[TOP BEGIN]
		[LINE BEGIN]
			start x -2.0 y -3.0
			end   x  2.0 y -3.0
			width 1.0
		[LINE END]
		[LINE BEGIN]
			start x  2.0 y -3.0
			end   x  2.0 y  3.0
			width 1.0
		[LINE END]
		[LINE BEGIN]
			start x  2.0 y  3.0
			end   x -2.0 y  3.0
			width 1.0
		[LINE END]
		[LINE BEGIN]
			start x -2.0 y  3.0
			end   x -2.0 y -3.0
			width 1.0
		[LINE END]
	[TOP END]
	[BOTTOM BEGIN]
		[LINE BEGIN]
			start x -2.0 y -3.0
			end   x  2.0 y -3.0
			width 1.0
		[LINE END]
		[LINE BEGIN]
			start x  2.0 y -3.0
			end   x  2.0 y  3.0
			width 1.0
		[LINE END]
		[LINE BEGIN]
			start x  2.0 y  3.0
			end   x -2.0 y  3.0
			width 1.0
		[LINE END]
		[LINE BEGIN]
			start x -2.0 y  3.0
			end   x -2.0 y -3.0
			width 1.0
		[LINE END]
	[BOTTOM END]
[ROUTE_RESTRICT END]

[VIA_RESTRICT BEGIN]
	[TOP BEGIN]
		[LINE BEGIN]
			start x -2.0 y -3.0
			end   x  2.0 y -3.0
			width 1.0
		[LINE END]
		[LINE BEGIN]
			start x  2.0 y -3.0
			end   x  2.0 y  3.0
			width 1.0
		[LINE END]
		[LINE BEGIN]
			start x  2.0 y  3.0
			end   x -2.0 y  3.0
			width 1.0
		[LINE END]
		[LINE BEGIN]
			start x -2.0 y  3.0
			end   x -2.0 y -3.0
			width 1.0
		[LINE END]
	[TOP END]
	[BOTTOM BEGIN]
		[LINE BEGIN]
			start x -2.0 y -3.0
			end   x  2.0 y -3.0
			width 1.0
		[LINE END]
		[LINE BEGIN]
			start x  2.0 y -3.0
			end   x  2.0 y  3.0
			width 1.0
		[LINE END]
		[LINE BEGIN]
			start x  2.0 y  3.0
			end   x -2.0 y  3.0
			width 1.0
		[LINE END]
		[LINE BEGIN]
			start x -2.0 y  3.0
			end   x -2.0 y -3.0
			width 1.0
		[LINE END]
	[BOTTOM END]
[VIA_RESTRICT END]


[PCB_CONTOURS_NON_PLATED BEGIN]
	[HOLE BEGIN]
		[LINE BEGIN]
			start x -1.5 y -2.5
			end   x  1.5 y -2.5
		[LINE END]
		[LINE BEGIN]
			start x  1.5 y -2.5
			end   x  1.5 y  2.5
		[LINE END]
		[LINE BEGIN]
			start x  1.5 y  2.5
			end   x -1.5 y  2.5
		[LINE END]
		[LINE BEGIN]
			start x -1.5 y  2.5
			end   x -1.5 y -2.5
		[LINE END]
	[HOLE END]
[PCB_CONTOURS_NON_PLATED END]
	

-- ====================================================================================================
-- package model file end

