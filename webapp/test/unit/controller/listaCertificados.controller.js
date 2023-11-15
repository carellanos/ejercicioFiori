/*global QUnit*/

sap.ui.define([
	"ejerfiori/certificaciones1/controller/listaCertificados.controller"
], function (Controller) {
	"use strict";

	QUnit.module("listaCertificados Controller");

	QUnit.test("I should test the listaCertificados controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
