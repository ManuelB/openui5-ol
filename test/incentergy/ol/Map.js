sap.ui.define([
	"incentergy/ol/Map",
	"incentergy/ol/layer/Vector",
	"incentergy/ol/layer/Tile",
	"incentergy/ol/source/Vector",
	"incentergy/ol/source/TileImage",
	"sap/ui/model/json/JSONModel",
	"sap/ui/thirdparty/sinon",
		"sap/ui/thirdparty/sinon-qunit" ], function(Map, Vector, Tile, VectorSource, TileImage, JSONModel) {
	"use strict";
	QUnit.module("incentergy/ol/Map", {
		beforeEach : function() {
			sinon.config.useFakeTimers = false;
		},

		afterEach : function() {
		}
	});

	QUnit.test("Test constructor", function(assert) {
		assert.ok(new Map());
	});

	QUnit.test("Test renderer", function(assert) {
		var oMap = new Map();
		var sRendererHtml = "";
		oMap.getMetadata().getRenderer().render({
			"write" : function(sHtml) {
				sRendererHtml += sHtml;
			},
			"writeControlData" : function() {

			}
		}, oMap);

		assert.equal(sRendererHtml, "<div style=\"height: 100%\" ></div>");
	});

	QUnit.test("Test binding of layers", function(assert) {
		var oModel = new JSONModel([ {
			"type" : "WFS",
			"url" : "https://www.example.com/WFS"
		}, {
			"type" : "WMS",
			"url" : "https://www.example.com/WMS"
		} ]);
		var oMap = new Map();
		oMap.bindLayers({
			path : "/",
			factory : function(oLayerConfig) {
				var oLayer;
				if (oLayerConfig.type == "WFS") {
					oLayer = new Vector({
						"source" : new VectorSource({
							"url" : oLayerConfig.url
						})
					});
				} else {
					oLayer = new Tile({
						"source" : new TileImage({
							"url" : oLayerConfig.url
						})
					});
				}
				return oLayer;
			}
		});
		oMap.setModel(oModel);
		assert.equal(oMap.getLayers().length, 2);
		oModel.setProperty("/", []);
		assert.equal(oMap.getLayers().length, 0);
	});

	QUnit.test("Test onAfterRendering", function(assert) {
		expect(0);
		var oMap = new Map();
		oMap.onAfterRendering();
	});

	QUnit.test("Test viewFit", function(assert) {
		expect(0);
		var oMap = new Map();
		oMap.viewFit();
	});

	QUnit.test("Test centerOn", function(assert) {
		expect(0);
		var oMap = new Map();
		oMap.centerOn();
	});

	QUnit.test("Test setCenter", function(assert) {
		expect(0);
		var oMap = new Map();
		oMap.setCenter();
	});

});