/*!
 * ${copyright}
 */

sap.ui.define(['ol', './Source'],
    function(ol, Source) {
        "use strict";
        var Vector = Source.extend("incentergy.ol.source.Vector", {
            metadata: {
                library: "incentergy.ol",
                properties: {
                    "url": {
                        /**
                         * The url from where the Tiles should
                         */
                        type: "string",
                        group: "Misc",
                        defaultValue: null
                    },
                    "format": {
                        type: "string",
                        group: "Misc",
                        defaultValue: "GeoJSON"
                    },
                    "crs": {
                        type: "string",
                        group: "Misc",
                        defaultValue: "EPSG:3857"
                    }
                },
                aggregations: {
                    "features": {
                        type: "incentergy.ol.Feature",
                        multiple: true,
                        singularName: "feature",
                        bindable: true
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
                this._source.on("addfeature", function() {
                    me.fireAddfeature();
                });
            },
            setUrl: function(sUrl) {
                var me = this;
                var retVal = this.setProperty("url", sUrl);
                try {
                    if (this._source) {
                        this._source.setUrl(me._getUrlFunction());
                    }
                } catch (e) {
                    jQuery.sap.log.error(e);
                }

                return retVal;
            },
            setFormat: function(format) {
                this._source.setFormat(new ol.format[format]());
                return this.setProperty("format", format);
            },
            _getUrlFunction: function() {
                var me = this;
                return function(extent) {
                    return me.getUrl() +
                        (extent ? 'bbox=' + extent.join(',') + ',' : '') +
                        '&' + me.getCrs();
                };
            }
        });
        return Vector;
    }, /* bExport= */ true);