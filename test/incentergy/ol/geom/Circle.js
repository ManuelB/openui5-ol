sap.ui.define([
    "incentergy/ol/geom/Circle",
    "sap/ui/thirdparty/sinon",
    "sap/ui/thirdparty/sinon-qunit"
], function(Circle) {
    "use strict";
    QUnit.module("incentergy/ol/geom/Circle", {
	    beforeEach: function() {
	        sinon.config.useFakeTimers = false;
	    },
	
	    afterEach: function() {
	    }
	});
	
	QUnit.test("Test constructor", function(assert) {
		expect(0);
		var oCircle = new Circle();
		
	});
	
	QUnit.test("Test setRadius", function(assert) {
		expect(0);
		var oCircle = new Circle();
		oCircle.setRadius(5);
	});

	QUnit.test("Test setCenter", function(assert) {
		expect(0);
		var oCircle = new Circle();
		oCircle.setCenter("5 5");
		oCircle.setCenter([5, 5]);
	});
});