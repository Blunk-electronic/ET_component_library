-- SYSTEM ET package
-- date 2019-02-21T08:33:02
-- ====================================================================================================

description ""
appearance virtual
technology tht -- don't care here

[SILKSCREEN BEGIN]
	[TOP BEGIN]
		[PLACEHOLDER BEGIN]
			meaning name
			position x -1.000 y -3.0 rotation 0.00
			size 1.000
			linewidth 0.15
			alignment horizontal center vertical center
		[PLACEHOLDER END]
	[TOP END]
[SILKSCREEN END]

[KEEPOUT BEGIN]
	[TOP BEGIN]
		[ZONE BEGIN]
			[CONTOURS BEGIN]
				[CIRCLE BEGIN]
					center x 0 y 0
					radius 2.2
				[CIRCLE END]
			[CONTOURS END]
		[ZONE END]
	[TOP END]
	[BOTTOM BEGIN]
		[ZONE BEGIN]
			[CONTOURS BEGIN]
				[CIRCLE BEGIN]
					center x 0 y 0
					radius 2.2
				[CIRCLE END]
			[CONTOURS END]
		[ZONE END]
	[BOTTOM END]
[KEEPOUT END]


[ROUTE_RESTRICT BEGIN]
	[TOP BEGIN]
		[ZONE BEGIN]
			[CONTOURS BEGIN]
				[CIRCLE BEGIN]
					center x 0 y 0
					radius 2.4
				[CIRCLE END]
			[CONTOURS END]
		[ZONE END]
	[TOP END]
	[BOTTOM BEGIN]
		[ZONE BEGIN]
			[CONTOURS BEGIN]
				[CIRCLE BEGIN]
					center x 0 y 0
					radius 2.4
				[CIRCLE END]
			[CONTOURS END]
		[ZONE END]
	[BOTTOM END]
[ROUTE_RESTRICT END]


[VIA_RESTRICT BEGIN]
	[TOP BEGIN]
		[ZONE BEGIN]
			[CONTOURS BEGIN]
				[CIRCLE BEGIN]
					center x 0 y 0
					radius 2.4
				[CIRCLE END]
			[CONTOURS END]
		[ZONE END]
	[TOP END]
	[BOTTOM BEGIN]
		[ZONE BEGIN]
			[CONTOURS BEGIN]
				[CIRCLE BEGIN]
					center x 0 y 0
					radius 2.4
				[CIRCLE END]
			[CONTOURS END]
		[ZONE END]
	[BOTTOM END]
[VIA_RESTRICT END]


[STOP_MASK BEGIN]
	[TOP BEGIN]
		[ZONE BEGIN]
			[CONTOURS BEGIN]
				[CIRCLE BEGIN]
					center x 0 y 0
					radius 2.4
				[CIRCLE END]
			[CONTOURS END]
		[ZONE END]
	[TOP END]
[STOP_MASK END]


[CONDUCTOR BEGIN]
	[TOP BEGIN]
		[LINE BEGIN]
			start x -2 y 0
			end x 2 y 0
			width 0.15
		[LINE END]

		[LINE BEGIN]
			start x 0 y 2
			end x 0 y -2
			width 0.15
		[LINE END]
		
		[CIRCLE BEGIN]
			center x 0 y 0
			radius 1.5
			width 0.15
		[CIRCLE END]
	[TOP END]
	[BOTTOM BEGIN]
		[LINE BEGIN]
			start x -2 y 0
			end x 2 y 0
			width 0.15
		[LINE END]

		[LINE BEGIN]
			start x 0 y 2
			end x 0 y -2
			width 0.15
		[LINE END]
		
		[CIRCLE BEGIN]
			center x 0 y 0
			radius 1.5
			width 0.15
		[CIRCLE END]
	[BOTTOM END]
[CONDUCTOR END]

-- ====================================================================================================
-- package model file end

