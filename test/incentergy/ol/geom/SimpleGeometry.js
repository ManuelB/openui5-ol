sap.ui.define([
    "incentergy/ol/geom/SimpleGeometry",
    "sap/ui/thirdparty/sinon",
    "sap/ui/thirdparty/sinon-qunit"
], function(SimpleGeometry) {
    "use strict";
    QUnit.module("incentergy/ol/geom/SimpleGeometry", {
	    beforeEach: function() {
	        sinon.config.useFakeTimers = false;
	    },
	
	    afterEach: function() {
	    }
	});
	
	QUnit.test("Test constructor", function(assert) {
		expect(0);
		var oSimpleGeometry = new SimpleGeometry();
		
	});

});