sap.ui.define([
    "incentergy/ol/layer/Vector",
    "incentergy/ol/source/Vector",
    "sap/ui/thirdparty/sinon",
    "sap/ui/thirdparty/sinon-qunit"
], function(Vector, VectorSource) {
    "use strict";
    QUnit.module("incentergy/ol/layer/Vector", {
	    beforeEach: function() {
	        sinon.config.useFakeTimers = false;
	    },
	
	    afterEach: function() {
	    }
	});
	
	QUnit.test("Test constructor", function(assert) {
		expect(0);
		var oVector = new Vector();
	});
	
	QUnit.test("Test constructor with Source", function(assert) {
		expect(0);
		var oVector = new Vector({"source": new VectorSource()});
	});

});