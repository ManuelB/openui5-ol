sap.ui.define([
    "incentergy/ol/source/XYZ",
    "sap/ui/thirdparty/sinon",
    "sap/ui/thirdparty/sinon-qunit"
], function(XYZ) {
    "use strict";
    QUnit.module("incentergy/ol/source/XYZ", {
	    beforeEach: function() {
	        sinon.config.useFakeTimers = false;
	    },
	
	    afterEach: function() {
	    }
	});
	
	QUnit.test("Test constructor", function(assert) {
		expect(0);
		var oXYZ = new XYZ();
	});


});