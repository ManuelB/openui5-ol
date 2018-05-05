/*!
 * ${copyright}
 */

sap.ui.define(['ol', './Source'],
    function(ol, Source) {
        "use strict";
        var Vector = Source.extend("incentergy.ol.source.Vector", {
            metadata: {
                library: "incentergy.ol",
                aggregations: {
                    "features": {
                        type: "incentergy.ol.Feature",
                        multiple: true,
                        singularName: "feature"
                    }
                },
                defaultAggregation: "features",
                events: {
                    addfeature: {}
                }
            },
            constructor: function() {
                Source.apply(this, arguments);
                this._source = new ol.source.Vector();
                var me = this;
                this._source.on("addfeature", function(){
                    me.fireAddfeature();
                });
            },
            getExtent: function() {
                return this._source.getExtent();
            }
        });
        return Vector;
    }, /* bExport= */ true);