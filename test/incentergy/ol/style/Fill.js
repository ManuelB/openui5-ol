sap.ui.define([
    "incentergy/ol/style/Fill",
    "sap/ui/thirdparty/sinon",
    "sap/ui/thirdparty/sinon-qunit"
], function(Fill) {
    "use strict";
    QUnit.module("incentergy/ol/style/Fill", {
	    beforeEach: function() {
	        sinon.config.useFakeTimers = false;
	    },
	
	    afterEach: function() {
	    }
	});
	
	QUnit.test("Test constructor", function(assert) {
		expect(0);
		var oFill = new Fill();
	});
	
	QUnit.test("Test setColor", function(assert) {
		expect(0);
		var oFill = new Fill();
		oFill.setColor("rgba(255,255,255,0.2)");
	});
});