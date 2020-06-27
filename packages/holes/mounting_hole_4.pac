-- SYSTEM ET package
-- date 2019-02-21T08:33:02
-- ====================================================================================================

description ""
appearance virtual
technology tht -- don't care here

[SILK_SCREEN BEGIN]
	[TOP BEGIN]
		[PLACEHOLDER BEGIN]
			meaning name
			position x 0.000 y -3.0 rotation 0.00
			size 1.000
			line_width 0.15
			alignment horizontal center vertical center
		[PLACEHOLDER END]
	[TOP END]
[SILK_SCREEN END]

[KEEPOUT BEGIN]
	[TOP BEGIN]
		[CIRCLE BEGIN]
			center x 0 y 0
			radius 2.4
		[CIRCLE END]
	[TOP END]
	[BOTTOM BEGIN]
		[CIRCLE BEGIN]
			center x 0 y 0
			radius 2.4
		[CIRCLE END]
	[BOTTOM END]
[KEEPOUT END]

[ROUTE_RESTRICT BEGIN]
	[CIRCLE BEGIN]
		center x 0 y 0
		radius 4.5
		layers 1 2 3 4
	[CIRCLE END]
[ROUTE_RESTRICT END]

[VIA_RESTRICT BEGIN]
	[CIRCLE BEGIN]
		center x 0 y 0
		radius 4.5
		layers 1 2 3 4
	[CIRCLE END]
[VIA_RESTRICT END]

[STOP_MASK BEGIN]
	[TOP BEGIN]
		[CIRCLE BEGIN]
			center x 0 y 0
			radius 3.4
			width 1.9
		[CIRCLE END]
	[TOP END]
	[BOTTOM BEGIN]
		[CIRCLE BEGIN]
			center x 0 y 0
			radius 3.4
			width 1.9
		[CIRCLE END]
	[BOTTOM END]
[STOP_MASK END]


[COPPER BEGIN]
	[TOP BEGIN]
		[CIRCLE BEGIN]
			center x 0 y 0
			radius 3.3
			width 1.8
		[CIRCLE END]
	[TOP END]
[COPPER END]

[PCB_CONTOURS_NON_PLATED BEGIN]
	[CIRCLE BEGIN]
		center x 0 y 0
		radius 2.1
	[CIRCLE END]
[PCB_CONTOURS_NON_PLATED END]
	

-- ====================================================================================================
-- package model file end

