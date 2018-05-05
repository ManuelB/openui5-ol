/*!
 * ${copyright}
 */

sap.ui.define(['ol', 'sap/ui/core/Element'],
    function(ol, Element) {
        "use strict";
        var Source = Element.extend("incentergy.ol.source.Source", {
            metadata: {
                library: "incentergy.ol",
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
                var retVal = Element.prototype.setParent.apply(this, arguments);
                oParent.mapSet().then(function() {
                    me.fnMapSet();
                });
                return retVal;
            },
            mapSet: function() {
                return this.pMapSet;
            }
        });
        return Source;
    }, /* bExport= */ true);