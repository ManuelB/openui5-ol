sap.ui.define([
    "incentergy/ol/layer/Layer",
    "sap/ui/thirdparty/sinon",
    "sap/ui/thirdparty/sinon-qunit"
], function(Layer) {
    "use strict";
    QUnit.module("incentergy/ol/layer/Layer", {
	    beforeEach: function() {
	        sinon.config.useFakeTimers = false;
	    },
	
	    afterEach: function() {
	    }
	});
	
	QUnit.test("Test constructor", function(assert) {
		expect(0);
		var oLayer = new Layer();
		
	});

});