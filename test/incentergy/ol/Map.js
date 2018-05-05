sap.ui.define([
    "incentergy/ol/Map",
    "sap/ui/thirdparty/sinon",
    "sap/ui/thirdparty/sinon-qunit"
], function(Map) {
    "use strict";
    QUnit.module("incentergy/ol/Map", {
	    beforeEach: function() {
	        sinon.config.useFakeTimers = false;
	    },
	
	    afterEach: function() {
	    }
	});
	
	QUnit.test("Test constructor", function(assert) {
		assert.ok(new Map());
	});
	
	QUnit.test("Test renderer", function(assert) {
		var oMap = new Map();
		var sRendererHtml = "";
		oMap.getMetadata().getRenderer().render({
			"write": function (sHtml) {
				sRendererHtml += sHtml;
			},
			"writeControlData": function () {
				
			}
		}, oMap);
		
		assert.equal(sRendererHtml, "<div style=\"height: 100%\" ></div>");
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