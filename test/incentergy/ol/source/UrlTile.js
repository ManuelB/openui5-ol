sap.ui.define([
    "incentergy/ol/source/UrlTile",
    "sap/ui/thirdparty/sinon",
    "sap/ui/thirdparty/sinon-qunit"
], function(UrlTile) {
    "use strict";
    QUnit.module("incentergy/ol/source/UrlTile", {
	    beforeEach: function() {
	        sinon.config.useFakeTimers = false;
	    },
	
	    afterEach: function() {
	    }
	});
	
	QUnit.test("Test constructor", function(assert) {
		expect(0);
		var oUrlTile = new UrlTile();
	});


});