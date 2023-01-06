-- SYSTEM ET package
-- date 2019-02-21T08:33:02
-- ====================================================================================================

description ""
appearance real
technology tht -- don't care here

[SILK_SCREEN BEGIN]
	[TOP BEGIN]
		[PLACEHOLDER BEGIN]
			meaning name
			position x 0.000 y -6.0 rotation 0.00
			size 1.000
			line_width 0.15
			alignment horizontal left vertical bottom
		[PLACEHOLDER END]
	[TOP END]
[SILK_SCREEN END]


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
[VIA_RESTRICT END]

[STOP_MASK BEGIN]
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
[STOP_MASK END]


[TERMINALS BEGIN]
	[TERMINAL BEGIN]
		name 1
		technology tht
		position x -0 y 0 rotation 0.00
		[PAD_CONTOURS_THT BEGIN]
			[TOP BEGIN]
				[CIRCLE BEGIN]
					center x 0 y 0
					radius 4
				[CIRCLE END]
			[TOP END]
			[BOTTOM BEGIN]
				[CIRCLE BEGIN]
					center x -0 y 0
					radius 4
				[CIRCLE END]
			[BOTTOM END]
		[PAD_CONTOURS_THT END]
			
		width_inner_layers 1
		hole drilled
		drill_size 4.1
	[TERMINAL END]
[TERMINALS END]

-- ====================================================================================================
-- package model file end

