sap.ui.define([
    "incentergy/ol/Feature",
    "incentergy/ol/style/Style",
    "incentergy/ol/geom/Circle",
    "incentergy/ol/layer/Vector",
    "sap/ui/thirdparty/sinon",
    "sap/ui/thirdparty/sinon-qunit"
], function(Feature, Style, Circle, Vector) {
    "use strict";
    QUnit.module("incentergy/ol/Feature", {
	    beforeEach: function() {
	        sinon.config.useFakeTimers = false;
	    },
	
	    afterEach: function() {
	    }
	});
	
	QUnit.test("Test constructor", function(assert) {
		expect(0);
		var oFeature = new Feature();
	});
	
	QUnit.test("Test setStyle", function(assert) {
		expect(0);
		var oFeature = new Feature();
		// WKT String with holes
		oFeature.setStyle(new Style());
	});
	
	QUnit.test("Test setGeometry", function(assert) {
		expect(0);
		var oFeature = new Feature();
		// WKT String with holes
		oFeature.setGeometry(new Circle());
	});
	
	QUnit.test("Test setParent", function(assert) {
		expect(0);
		var oFeature = new Feature();
		// WKT String with holes
		var oParent = new Vector();
		oFeature.setParent(oParent);
	});
	
	QUnit.test("Test setWkt", function(assert) {
		expect(0);
		var oFeature = new Feature();
		// WKT String with holes
		oFeature.setWkt("MULTIPOLYGON (((-50.5147241411058 -14.76820894437032, -50.5084281913105 -14.76969410570457, -50.5089563908716 -14.77095256961718, -50.5092842434474 -14.77078102806674, -50.5096987845903 -14.77141919060411, -50.5093615977826 -14.77180601087306, -50.5101977235204 -14.77389187031178, -50.5104891554799 -14.77417668164793, -50.5107104196384 -14.7741771506204, -50.5148848467906 -14.77156793348959, -50.5147241411058 -14.76820894437032), (-50.5120812096359 -14.77068361095411, -50.5121251927737 -14.77080427079737, -50.5120363425364 -14.77095909770338, -50.5117527631736 -14.77112212489323, -50.5114871728938 -14.77115601093933, -50.5114172544761 -14.77075971460211, -50.5120812096359 -14.77068361095411), (-50.5144813966472 -14.76991359585505, -50.5145697668199 -14.76997406509224, -50.5145604002522 -14.77020656742235, -50.514241728079 -14.7702317331807, -50.5142854445399 -14.77047295905158, -50.5141525734187 -14.77052435113058, -50.5134090037717 -14.7705830691949, -50.5132943507746 -14.77040197718469, -50.5139328633558 -14.7698263228438, -50.5144813966472 -14.76991359585505), (-50.5105046000432 -14.77123143772565, -50.5099826938793 -14.77110976404523, -50.5097448518303 -14.77060976787923, -50.5097897989383 -14.77029983413294, -50.5094539857121 -14.77007521118052, -50.5094897929607 -14.76989443689052, -50.5102066168498 -14.7699217939067, -50.5104452882934 -14.7700514787549, -50.5105591291493 -14.77059427110822, -50.5107710575802 -14.7708100181808, -50.5107082952206 -14.77117158592645, -50.5105046000432 -14.77123143772565)))");
	});
	
	QUnit.test("Test setWkt invalid", function(assert) {
		expect(0);
		var oFeature = new Feature();
		// WKT String with holes
		try {			
			oFeature.setWkt("asdölusfnödsznfdsof");
			assert.fail();
		} catch(e) {
			// Success
		}
	});
});