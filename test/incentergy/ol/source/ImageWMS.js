sap.ui.define([
    "incentergy/ol/source/ImageWMS",
    "sap/ui/thirdparty/sinon",
    "sap/ui/thirdparty/sinon-qunit"
], function(ImageWMS) {
    "use strict";
    QUnit.module("incentergy/ol/source/ImageWMS", {
	    beforeEach: function() {
	        sinon.config.useFakeTimers = false;
	    },
	
	    afterEach: function() {
	    }
	});
	
	QUnit.test("Test constructor", function(assert) {
		expect(0);
		var oImageWMS = new ImageWMS();
	});


});