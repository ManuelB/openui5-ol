/*!
 * ${copyright}
 */
sap.ui.define(['ol', 'sap/ui/base/ManagedObject'],
    function(ol, ManagedObject) {
        "use strict";
        var format = new ol.format.WKT();

        var Feature = ManagedObject.extend("incentergy.ol.Feature", {
            metadata: {
                library: "incentergy.ol",
                properties: {
                    "wkt": {
                        type: "string",
                        defaultValue: null
                    }
                }
            },
            constructor: function() {
                this._feature = new ol.Feature();
                var me = this;
                this._pLayerSet = new Promise(function(resolve, reject) {
                    me._fnLayerSet = resolve;
                });
                ManagedObject.apply(this, arguments);
            },
            setParent: function(oParent) {
                var me = this;
                oParent.mapSet().then(
                    function() {
                        var oVectorLayer = oParent.getParent();
                        oVectorLayer.mapSet().then(function() {
                            oParent._source.addFeature(me._feature);
                        });
                        me._fnLayerSet();
                    }
                )
                var retVal = ManagedObject.prototype.setParent.apply(this, arguments);
                return retVal;
            },
            _layerSet: function() {
                return this._pLayerSet;
            },
            setWkt: function(wkt) {
                var me = this;
                this._layerSet().then(function() {
                    var oSource = me.getParent();
                    oSource.mapSet().then(function() {
                        // Map
                        var oVectorLayer = oSource.getParent();
                        oVectorLayer.mapSet().then(function() {
                            oSource._source.removeFeature(me._feature);
                            me._feature = format.readFeature(wkt, {
                                dataProjection: 'EPSG:4326',
                                featureProjection: 'EPSG:3857'
                            });
                            oSource._source.addFeature(me._feature);
                        })
                    })
                })
                this.setProperty("wkt", wkt);
            }
        });
        return Feature;
    }, /* bExport= */ true);