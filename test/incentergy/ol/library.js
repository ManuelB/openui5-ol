sap.ui.define([
    "incentergy/ol/library",
    "sap/ui/thirdparty/sinon",
    "sap/ui/thirdparty/sinon-qunit"
], function(library) {
    "use strict";
    QUnit.module("incentergy/ol/library", {
	    beforeEach: function() {
	        sinon.config.useFakeTimers = false;
	    },
	
	    afterEach: function() {
	    }
	});
	
	QUnit.test("Test constructor", function(assert) {
		assert.ok(library);
	});
	
});