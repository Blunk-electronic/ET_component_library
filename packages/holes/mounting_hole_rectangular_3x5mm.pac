-- SYSTEM ET package
-- date 2019-02-21T08:33:02
-- ====================================================================================================

description ""
appearance real
technology tht -- don't care here

--[SILK_SCREEN BEGIN]
	--[TOP BEGIN]
		--[PLACEHOLDER BEGIN]
			--meaning name
			--position x 0.000 y -3.0 rotation 0.00
			--size 1.000
			--line_width 0.15
			--alignment horizontal center vertical center
		--[PLACEHOLDER END]
	--[TOP END]
--[SILK_SCREEN END]

--[KEEPOUT BEGIN]
	--[TOP BEGIN]
		--[CIRCLE BEGIN]
			--center x 0 y 0
			--radius 4
		--[CIRCLE END]
	--[TOP END]
	--[BOTTOM BEGIN]
		--[CIRCLE BEGIN]
			--center x 0 y 0
			--radius 4
		--[CIRCLE END]
	--[BOTTOM END]
--[KEEPOUT END]

--[ROUTE_RESTRICT BEGIN]
	--[TOP BEGIN]
		--[CIRCLE BEGIN]
			--center x 0 y 0
			--radius 4.5
		--[CIRCLE END]
	--[TOP END]
	--[BOTTOM BEGIN]
		--[CIRCLE BEGIN]
			--center x 0 y 0
			--radius 4.5
		--[CIRCLE END]
	--[BOTTOM END]
--[ROUTE_RESTRICT END]

--[VIA_RESTRICT BEGIN]
	--[TOP BEGIN]
		--[CIRCLE BEGIN]
			--center x 0 y 0
			--radius 4.5
		--[CIRCLE END]
	--[TOP END]
	--[BOTTOM BEGIN]
		--[CIRCLE BEGIN]
			--center x 0 y 0
			--radius 4.5
		--[CIRCLE END]
	--[BOTTOM END]
--[VIA_RESTRICT END]


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

