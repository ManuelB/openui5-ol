sap.ui.define([
    "incentergy/ol/style/Style",
    "incentergy/ol/style/Fill",
    "sap/ui/thirdparty/sinon",
    "sap/ui/thirdparty/sinon-qunit"
], function(Style, Fill) {
    "use strict";
    QUnit.module("incentergy/ol/style/Style", {
	    beforeEach: function() {
	        sinon.config.useFakeTimers = false;
	    },
	
	    afterEach: function() {
	    }
	});
	
	QUnit.test("Test constructor", function(assert) {
		expect(0);
		var oStyle = new Style();
	});
	
	QUnit.test("Test setAggregation", function(assert) {
		expect(0);
		var oStyle = new Style();
		oStyle.setFill(new Fill());
	});
});