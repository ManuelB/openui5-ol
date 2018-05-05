sap.ui.define([
    "incentergy/ol/source/Source",
    "sap/ui/thirdparty/sinon",
    "sap/ui/thirdparty/sinon-qunit"
], function(Source) {
    "use strict";
    QUnit.module("incentergy/ol/source/Source", {
	    beforeEach: function() {
	        sinon.config.useFakeTimers = false;
	    },
	
	    afterEach: function() {
	    }
	});
	
	QUnit.test("Test constructor", function(assert) {
		expect(0);
		var oSource = new Source();
	});


});