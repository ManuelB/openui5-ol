sap.ui.define([
    "incentergy/ol/style/Stroke",
    "sap/ui/thirdparty/sinon",
    "sap/ui/thirdparty/sinon-qunit"
], function(Stroke) {
    "use strict";
    QUnit.module("incentergy/ol/style/Stroke", {
	    beforeEach: function() {
	        sinon.config.useFakeTimers = false;
	    },
	
	    afterEach: function() {
	    }
	});
	
	QUnit.test("Test constructor", function(assert) {
		expect(0);
		var oStroke = new Stroke({"lineDash": "11,12", "color": "rgba(0,0,0, 0.5)"});
	});
});