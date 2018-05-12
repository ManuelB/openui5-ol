sap.ui.define([
    "incentergy/ol/interaction/Select",
    "sap/ui/thirdparty/sinon",
    "sap/ui/thirdparty/sinon-qunit"
], function(Select) {
    "use strict";
    QUnit.module("incentergy/ol/interaction/Select", {
        beforeEach: function() {
            sinon.config.useFakeTimers = false;
        },

        afterEach: function() {}
    });

    QUnit.test("Test constructor", function(assert) {
        expect(0);
        var oSelect = new Select();
    });

    QUnit.test("Test event throwing", function(assert) {

        var oSelect = new Select();
        var oMockUi5Control = {};
        var oMockedFeature = {
            "getId": sinon.stub().returns(1),
            "addEventListener": sinon.stub(),
            "getGeometry": sinon.stub(),
            "get": sinon.stub().returns(oMockUi5Control)
        };
        oSelect.attachSelect(function(oEvent) {
            assert.deepEqual([oMockedFeature], oEvent.getParameter("selectedOlFeatures"));
            assert.deepEqual([oMockUi5Control], oEvent.getParameter("selected"));
            assert.deepEqual([], oEvent.getParameter("deselectedOlFeatures"));
            assert.ok(oEvent.getParameter("nativeEvent"));
        });
        oSelect._interaction.handleEvent({
            "type": ol.MapBrowserEventType.SINGLECLICK,
            "map": {
                "forEachFeatureAtPixel": sinon.stub().callsArgWith(1, oMockedFeature, { "layer": "layer" })
            },
            "originalEvent": {

            },
            "pixel": {

            }
        });
    });
});