sap.ui.define([
    "incentergy/ol/source/BingMaps",
    "sap/ui/thirdparty/sinon",
    "sap/ui/thirdparty/sinon-qunit"
], function(BingMaps) {
    "use strict";
    QUnit.module("incentergy/ol/source/BingMaps", {
	    beforeEach: function() {
	        sinon.config.useFakeTimers = false;
	    },
	
	    afterEach: function() {
	    }
	});
	
	QUnit.test("Test constructor", function(assert) {
		expect(0);
		var oBingMaps = new BingMaps();
	});


});