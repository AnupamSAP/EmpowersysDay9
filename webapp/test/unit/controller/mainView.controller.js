/*global QUnit*/

sap.ui.define([
	"comemp/empproject9/controller/mainView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("mainView Controller");

	QUnit.test("I should test the mainView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
