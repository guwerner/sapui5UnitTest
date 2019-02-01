sap.ui.define([
    "de/test/gw/controller/BaseController",
    "de/test/gw/helper/Zusatz"
], function (BaseController , Zusatz) {
	"use strict";
	return BaseController.extend("de.test.gw.controller.View1", {
		onInit: function () {
			this.sayHello("Hallo",6000);
		
			this.sayHello(Zusatz.customMethod(), 2000);
		},
		
		getNumber: function () {
			return 5;
		},
		
		multiple7: function (val1) {
			return (val1 * 7); 
		}
		
	});
});