sap.ui.define([
    "incentergy/ol/source/Tile",
    "sap/ui/thirdparty/sinon",
    "sap/ui/thirdparty/sinon-qunit"
], function(Tile) {
    "use strict";
    QUnit.module("incentergy/ol/source/Tile", {
	    beforeEach: function() {
	        sinon.config.useFakeTimers = false;
	    },
	
	    afterEach: function() {
	    }
	});
	
	QUnit.test("Test constructor", function(assert) {
		expect(0);
		var oTile = new Tile();
	});


});