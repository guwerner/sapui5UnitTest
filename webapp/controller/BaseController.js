sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("de.test.gw.controller.BaseController", {
		
		
		onInit: function () {

		},
		
		sayHello: function(msg,dauer){
			
			MessageToast.show(msg,{duration: dauer});
		}
		
	});
});