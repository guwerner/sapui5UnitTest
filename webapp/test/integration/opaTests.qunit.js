/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"de/test/gw/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});