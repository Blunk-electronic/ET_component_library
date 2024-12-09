-- SYSTEM ET package
-- date 2019-02-21T08:33:02
-- ====================================================================================================

description ""
appearance real
technology tht -- don't care here

[KEEPOUT BEGIN]
	[TOP BEGIN]
		[ZONE BEGIN]
			[CONTOURS BEGIN]
				[CIRCLE BEGIN]
					center x 0 y 0
					radius 4.5
				[CIRCLE END]
			[CONTOURS END]
		[ZONE END]
	[TOP END]
	[BOTTOM BEGIN]
		[ZONE BEGIN]
			[CONTOURS BEGIN]
				[CIRCLE BEGIN]
					center x 0 y 0
					radius 4.5
				[CIRCLE END]
			[CONTOURS END]
		[ZONE END]
	[BOTTOM END]
[KEEPOUT END]


[ROUTE_RESTRICT BEGIN]
	[TOP BEGIN]
		[CIRCLE BEGIN]
			center x 0 y 0
			radius 3.3
			width 2.4
		[CIRCLE END]
	[TOP END]
	[BOTTOM BEGIN]
		[CIRCLE BEGIN]
			center x 0 y 0
			radius 3.3
			width 2.4
		[CIRCLE END]
	[BOTTOM END]
[ROUTE_RESTRICT END]

[VIA_RESTRICT BEGIN]
[VIA_RESTRICT END]

[STOPMASK BEGIN]
	[TOP BEGIN]
		[ZONE BEGIN]
			[CONTOURS BEGIN]
				[CIRCLE BEGIN]
					center x 0 y 0
					radius 4.1
				[CIRCLE END]
			[CONTOURS END]
		[ZONE END]
	[TOP END]
	[BOTTOM BEGIN]
		[ZONE BEGIN]
			[CONTOURS BEGIN]
				[CIRCLE BEGIN]
					center x 0 y 0
					radius 4.1
				[CIRCLE END]
			[CONTOURS END]
		[ZONE END]
	[BOTTOM END]
[STOPMASK END]


[CONDUCTOR BEGIN]
	[TOP BEGIN]
		[CIRCLE BEGIN]
			center x 0 y 0
			radius 3.3
			width 1.8
		[CIRCLE END]
	[TOP END]
	[BOTTOM BEGIN]
		[CIRCLE BEGIN]
			center x 0 y 0
			radius 3.3
			width 1.8
		[CIRCLE END]
	[BOTTOM END]	
[CONDUCTOR END]


[PCB_CONTOURS_NON_PLATED BEGIN]
	[HOLE BEGIN]
		[CIRCLE BEGIN]
			center x 0 y 0
			radius 2.1
		[CIRCLE END]
	[HOLE END]
[PCB_CONTOURS_NON_PLATED END]
	

-- ====================================================================================================
-- package model file end

