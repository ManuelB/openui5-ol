sap.ui.define([
    "incentergy/ol/layer/Base",
    "incentergy/ol/Map",
    "sap/ui/thirdparty/sinon",
    "sap/ui/thirdparty/sinon-qunit"
], function(Base, Map) {
    "use strict";
    QUnit.module("incentergy/ol/layer/Base", {
	    beforeEach: function() {
	        sinon.config.useFakeTimers = false;
	    },
	
	    afterEach: function() {
	    }
	});
	
	QUnit.test("Test constructor", function(assert) {
		expect(0);
		var oBase = new Base();
	});
	
	QUnit.test("Test setParent", function(assert) {
		expect(0);
		var oBase = new Base();
		oBase.setParent(new Map());
	});
	
	QUnit.test("Test getExtent", function(assert) {
		expect(0);
		var oBase = new Base();
		oBase.getExtent();
	});

});