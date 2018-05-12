sap.ui.define([
    "incentergy/ol/Map",
    "incentergy/ol/layer/Vector",
    "incentergy/ol/layer/Tile",
    "incentergy/ol/source/Vector",
    "incentergy/ol/source/TileImage",
    "incentergy/ol/interaction/Interaction",
    "sap/ui/model/json/JSONModel",
    "sap/ui/thirdparty/sinon",
    "sap/ui/thirdparty/sinon-qunit"
], function(Map, Vector, Tile, VectorSource, TileImage, Interaction, JSONModel) {
    "use strict";
    QUnit.module("incentergy/ol/Map", {
        beforeEach: function() {
            sinon.config.useFakeTimers = false;
        },

        afterEach: function() {}
    });

    QUnit.test("Test constructor", function(assert) {
        assert.ok(new Map());
    });

    QUnit.test("Test renderer", function(assert) {
        var oMap = new Map();
        var sRendererHtml = "";
        oMap.getMetadata().getRenderer().render({
            "write": function(sHtml) {
                sRendererHtml += sHtml;
            },
            "writeControlData": function() {

            }
        }, oMap);

        assert.equal(sRendererHtml, "<div style=\"height: 100%\" ></div>");
    });

    QUnit.test("Test binding of layers", function(assert) {
        var oModel = new JSONModel([{
            "type": "WFS",
            "url": "https://www.example.com/WFS"
        }, {
            "type": "WMS",
            "url": "https://www.example.com/WMS"
        }]);
        var oMap = new Map();
        oMap.bindLayers({
            path: "/",
            factory: function(oLayerConfig) {
                var oLayer;
                if (oLayerConfig.type == "WFS") {
                    oLayer = new Vector({
                        "source": new VectorSource({
                            "url": oLayerConfig.url
                        })
                    });
                } else {
                    oLayer = new Tile({
                        "source": new TileImage({
                            "url": oLayerConfig.url
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

    QUnit.test("Test setCenter", function(assert) {
        expect(1);
        var done = assert.async();
        var oMap = new Map();
        oMap._rendered = sinon.stub().returns(Promise.resolve());
        oMap._map = {
            "getView": sinon.stub().returns({
                "setCenter": sinon.stub()
            })
        };
        oMap.setCenter("10,10");
        oMap._rendered().then(function() {
            assert.deepEqual([10, 10], oMap._map.getView().setCenter.getCall(0).args[0]);
            done();
        });
    });

    QUnit.test("Test setZoom", function(assert) {
        expect(1);
        var done = assert.async();
        var oMap = new Map();
        oMap._rendered = sinon.stub().returns(Promise.resolve());
        oMap._map = {
            "getView": sinon.stub().returns({
                "setZoom": sinon.stub()
            })
        };
        oMap.setZoom(10);
        oMap._rendered().then(function() {
            assert.equal(10, oMap._map.getView().setZoom.getCall(0).args[0]);
            done();
        });
    });

    QUnit.test("Test addInteraction", function(assert) {
        expect(1);
        var done = assert.async();
        var oMap = new Map();
        oMap._rendered = sinon.stub().returns(Promise.resolve());
        oMap._map = {
            "addInteraction": sinon.stub()
        };
        var oInteraction = new Interaction();
        oMap.addInteraction(oInteraction);
        oMap._rendered().then(function() {
            assert.equal(oInteraction, oMap._map.addInteraction.getCall(0).args[0]);
            done();
        });
    });

});