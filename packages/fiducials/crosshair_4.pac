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
			position x -1.000 y -3.0 rotation 0.00
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
[KEEPOUT END]

[STOP_MASK BEGIN]
	[TOP BEGIN]
		[CIRCLE BEGIN]
			center x 0 y 0
			radius 2.4
			filled yes
		[CIRCLE END]
	[TOP END]
[STOP_MASK END]


[COPPER BEGIN]
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
		[CIRCLE END]
	[TOP END]
[COPPER END]

-- ====================================================================================================
-- package model file end

