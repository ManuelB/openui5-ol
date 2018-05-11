sap.ui.define([
    "incentergy/ol/source/TileWMS",
    "sap/ui/thirdparty/sinon",
    "sap/ui/thirdparty/sinon-qunit"
], function(TileWMS) {
    "use strict";
    QUnit.module("incentergy/ol/source/TileWMS", {
	    beforeEach: function() {
	        sinon.config.useFakeTimers = false;
	    },
	
	    afterEach: function() {
	    }
	});
	
	QUnit.test("Test constructor", function(assert) {
		expect(2);
		var oParams = {"FORMAT": "image/png", "VERSION": "1.1.1", "tiled": true, "STYLES": "", "LAYERS": "workspace:timelogentry", tilesOrigin: "8.20078659057617,52.5090637207031"};
		var sParams = JSON.stringify(oParams);
		var oTileWMS = new TileWMS({
			"url": "http://localhost:8080/geoserver/workspace/wms",
			"params": sParams.replace(/[\{\}]/g, '')
		});
		
		assert.deepEqual(oTileWMS._source.getUrls(), ["http://localhost:8080/geoserver/workspace/wms"]);
		assert.deepEqual(oTileWMS._source.getParams(), oParams);
	});


});