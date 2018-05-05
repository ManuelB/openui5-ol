sap.ui.define([
    "incentergy/ol/source/OSM",
    "sap/ui/thirdparty/sinon",
    "sap/ui/thirdparty/sinon-qunit"
], function(OSM) {
    "use strict";
    QUnit.module("incentergy/ol/source/OSM", {
	    beforeEach: function() {
	        sinon.config.useFakeTimers = false;
	    },
	
	    afterEach: function() {
	    }
	});
	
	QUnit.test("Test constructor", function(assert) {
		expect(0);
		var oOSM = new OSM();
	});


});