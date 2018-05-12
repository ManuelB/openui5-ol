sap.ui.define(["ol", "sap/ui/core/Control", "sap/ui/core/ResizeHandler"], function(ol, Control, ResizeHandler) {
    "use strict";
    /**
     * Constructor for a new Map.
     * 
     * Wraps ol.Map from openlayers:
     * http://www.openlayers.org
     */
    var Map = Control.extend("incentergy.ol.Map", /** @lends incentergy.ol.Map.prototype */ {
        metadata: {
            library: "incentergy.ol",
            properties: {
                "zoom": {
                    type: "int",
                    defaultValue: null
                },
                "center": {
                    type: "String",
                    defaultValue: null
                }
            },
            defaultAggregation: "layers",
            aggregations: {
                interactions: {
                    type: "incentergy.ol.interaction.Interaction",
                    multiple: true,
                    singularName: "interaction"
                },
                layers: {
                    type: "incentergy.ol.layer.Base",
                    multiple: true,
                    singularName: "layer",
                    bindable: true
                }
            }
        },
        init: function() {
            var me = this;
            // Create a promise so other controls can
            // attach actions when this map gets rendered
            this._pRendered = new Promise(function(resolve, reject) {
                me._fnRendered = resolve;
            });
            // When the theme changes we update the size
            // of the map if it is already there
            sap.ui.getCore().attachThemeChanged(function() {
                if (me._map) {
                    me._map.updateSize();
                }
            });
        },
        /**
         * Create a renderer that just renders a div
         * for placing the map on the screen.
         * 
         * @param {RenderManager} oRM
         * @param {Map} oControl
         * @private
         */
        renderer: function(oRM, oControl) {
            oRM.write("<div style=\"height: 100%\" ");
            oRM.writeControlData(oControl);
            oRM.write(">");
            oRM.write("</div>");
        },
        invalidate: function() {
            // do not invalidate this component.
            // We will care for all the updates
            // that would require rerendering
        },
        /**
         * After the rendering create an openlayers
         * map and place if in the generated div container.
         */
        onAfterRendering: function() {
            this._fnRendered();
            this._map = new ol.Map({
                view: new ol.View({
                    center: this.getCenter() ? this.parseFloatArray(this.getCenter()) : [0, 0],
                    zoom: 1
                }),
                target: this.getId()
            });
            try {
                ResizeHandler.register(this.getDomRef(), jQuery.proxy(this.onresize, this));
            } catch (e) {
                jQuery.sap.log.error("Could not attach resize handler: " + e);
            }
        },
        parseFloatArray: function(sTwoFloats) {
            try {
                return sTwoFloats.split(/,/).map(function(s) { return parseFloat(s); });
            } catch (e) {
                jQuery.sap.log.error("Tried to parse: " + sTwoFloats + " but failed. Working example: '10,11'. Details: " + e);
            }
        },
        /**
         * When the control is resized, update the map size.
         */
        onresize: function() {
            this._map.updateSize();
        },
        /**
         * Returns a promise if this map was already
         * rendered.
         * @private
         */
        _rendered: function() {
            return this._pRendered;
        },
        /**
         * Sets the view extend of the map to the given extent
         * @param {Array} aExtent
         * @param {Boolean} bAnimate should it be animated
         */
        viewFit: function(aExtent, bAnimate) {
            var me = this;
            this._rendered().then(function() {
                var oOptions = {};
                if (bAnimate) {
                    oOptions["duration"] = 500;
                }
                me._map.getView().fit(aExtent, oOptions);
            });
        },
        /**
         * Center on coordinate and view position.
         * @param {ol.Coordinate} coordinate Coordinate.
         * @param {ol.Size} size Box pixel size.
         * @param {ol.Pixel} position Position on the view to center on.
         */
        centerOn: function(coordinate, size, position) {
            var me = this;
            this._rendered().then(function() {
                me._map.getView().centerOn(coordinate, size, position);
            });
        },
        /**
         * Set the center of the current view.
         * @param {ol.Coordinate|String|undefined} center The center of the view.
         * @observable
         * @api
         */
        setCenter: function(center) {
            var me = this;
            if (typeof center == "string") {
                center = this.parseFloatArray(center);
            }
            this._rendered().then(function() {
                me._map.getView().setCenter(center);
            });
            return this.setProperty("center", center ? (center[0] + "," + center[1]) : undefined);
        },
        /**
         * Set the zoom of the current view.
         * @param {int} center The zoom level
         * @observable
         * @api
         */
        setZoom: function(zoom) {
            var me = this;
            this._rendered().then(function() {
                me._map.getView().setZoom(zoom);
            });
            return this.setProperty("zoom", zoom);
        },
        /**
         * Adds the interaction to the map.
         */
        addInteraction: function(oInteraction) {
            var me = this;
            this._rendered().then(function() {
                me._map.addInteraction(oInteraction);
            })
            return this.addAggregation("interactions", oInteraction);
        }
    });
    return Map;
}, /* bExport= */ true);