sap.ui.define([
    "incentergy/ol/geom/Geometry",
    "sap/ui/thirdparty/sinon",
    "sap/ui/thirdparty/sinon-qunit"
], function(Geometry) {
    "use strict";
    QUnit.module("incentergy/ol/geom/Geometry", {
	    beforeEach: function() {
	        sinon.config.useFakeTimers = false;
	    },
	
	    afterEach: function() {
	    }
	});
	
	QUnit.test("Test constructor", function(assert) {
		expect(0);
		var oGeometry = new Geometry();
		
	});

});