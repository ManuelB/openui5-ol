sap.ui.define(["ol", "sap/ui/core/Control"], function(ol, Control) {
    "use strict";
    /**
     * Constructor for a new Map.
     */
    var Map = Control.extend("incentergy.ol.Map", /** @lends incentergy.ol.Map.prototype */ {
        metadata: {
            library: "incentergy.ol",
            properties: {},
            defaultAggregation: "layers",
            aggregations: {
                layers: {
                    type: "incentergy.ol.layer.Base",
                    multiple: true,
                    singularName: "layer"
                }
            }
        },
        init: function() {
            var me = this;
            this._pRendered = new Promise(function(resolve, reject) {
                me._fnRendered = resolve;
            });
        },
        renderer: function(oRM, oControl) {
            oRM.write("<div style=\"height: 100%\" ");
            oRM.writeControlData(oControl);
            oRM.write(">");
            oRM.write("</div>");
        },
        onAfterRendering: function() {
            this._fnRendered();
            this._map = new ol.Map({
                view: new ol.View({
                    center: [0, 0],
                    zoom: 1
                }),
                target: this.getId()
            });
        },
        _rendered: function() {
            return this._pRendered;
        }
    });
    return Map;
}, /* bExport= */ true);