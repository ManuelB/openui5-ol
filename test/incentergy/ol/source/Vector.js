sap.ui.define([
    "incentergy/ol/source/Vector",
    "sap/ui/thirdparty/sinon",
    "sap/ui/thirdparty/sinon-qunit"
], function(Vector) {
    "use strict";
    QUnit.module("incentergy/ol/source/Vector", {
        beforeEach: function() {
            sinon.config.useFakeTimers = false;
        },

        afterEach: function() {}
    });

    QUnit.test("Test constructor", function(assert) {
        expect(0);
        var oVector = new Vector();
    });

    QUnit.test("Test getExtent", function(assert) {
        expect(1);
        var oVector = new Vector();
        var aMockedExtent = [0, 0, 10, 10];
        oVector._source = {
            "getExtent": sinon.stub().returns(aMockedExtent)
        };
        var aExtend = oVector.getExtent();
        assert.deepEqual(aMockedExtent, aExtend);
    });
});