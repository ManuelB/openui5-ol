/*!
 * ${copyright}
 */

// Provides the base class for all layers.
sap.ui.define(['ol', 'sap/ui/base/Object', 'sap/ui/core/Element'],
    function(ol, BaseObject, Element) {
        "use strict";
        var Base = Element.extend("incentergy.ol.layer.Base", {
            metadata: {
                "abstract": true,
            },
            constructor: function() {
                var me = this;
                this.pMapSet = new Promise(function(resolve, reject) {
                    me.fnMapSet = resolve;
                });
                Element.apply(this, arguments);
            },
            setParent: function(oParent) {
                var me = this;
                oParent._rendered().then(function() {
                    oParent._map.addLayer(me._layer);
                });
                var retVal = Element.prototype.setParent.apply(this, arguments);
                this.fnMapSet();
                return retVal;
            },
            mapSet: function() {
                return this.pMapSet;
            },
            getExtent: function() {
                if(this._layer) {
                    return this._layer.getExtent();
                } else {
                    return undefined;
                }
            }
        });
        return Base;
    }, /* bExport= */ true);
