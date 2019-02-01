/*global QUnit*/

sap.ui.define([
	"de/test/gw/controller/View1.controller"
], function (View1) {
	"use strict";

	QUnit.module("View1.controller Controller");

	QUnit.test("I should test the View1 controller", function (assert) {
		var oAppController = new View1();
		oAppController.onInit();
		assert.ok(oAppController);
	});
	
	function getNumberValueTestCase(assert,  fExpectedNumber) {
		var oAppController = new View1();
		var fNumber = oAppController.getNumber();

		// Assert
		assert.strictEqual(fNumber, fExpectedNumber, "Die Nummer ist Korrekt");
	}

	QUnit.test("Give 5 back", function (assert) {
		getNumberValueTestCase.call(this, assert,  5);
	});

	function multiple7ValueTestCase(assert, val1, fExpectedNumber) {
		var oAppController = new View1();
		var fNumber = oAppController.multiple7(val1) 

		// Assert
		assert.strictEqual(fNumber, fExpectedNumber, "Die Nummer ist Korrekt");
	}
	
	QUnit.test("Give 49 back", function (assert) {
		multiple7ValueTestCase.call(this,  assert, 7, 49);
	});
	
	function multiple7ValueTestCaseNot(assert, val1, fExpectedNumber) {
		var oAppController = new View1();
		var fNumber = oAppController.multiple7(val1) 

		// Assert
		assert.notStrictEqual(fNumber, fExpectedNumber, "Die Nummer ist  inkorrekt");
	}
	
	QUnit.test("Give not 7 * 7 != 50 back", function (assert) {
		multiple7ValueTestCaseNot.call(this,  assert, 7, 50);
	});
	
});