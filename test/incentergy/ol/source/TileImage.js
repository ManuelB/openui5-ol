sap.ui.define([
    "incentergy/ol/source/TileImage",
    "sap/ui/thirdparty/sinon",
    "sap/ui/thirdparty/sinon-qunit"
], function(TileImage) {
    "use strict";
    QUnit.module("incentergy/ol/source/TileImage", {
	    beforeEach: function() {
	        sinon.config.useFakeTimers = false;
	    },
	
	    afterEach: function() {
	    }
	});
	
	QUnit.test("Test constructor", function(assert) {
		expect(0);
		var oTileImage = new TileImage();
	});


});