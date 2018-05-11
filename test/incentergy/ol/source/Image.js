sap.ui.define([
    "incentergy/ol/source/Image",
    "sap/ui/thirdparty/sinon",
    "sap/ui/thirdparty/sinon-qunit"
], function(Image) {
    "use strict";
    QUnit.module("incentergy/ol/source/Image", {
	    beforeEach: function() {
	        sinon.config.useFakeTimers = false;
	    },
	
	    afterEach: function() {
	    }
	});
	
	QUnit.test("Test constructor", function(assert) {
		expect(0);
		var oImage = new Image();
	});


});