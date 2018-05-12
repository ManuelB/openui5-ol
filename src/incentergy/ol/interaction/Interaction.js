/*!
 * ${copyright}
 */

sap.ui.define(['ol', 'sap/ui/base/ManagedObject'],
    function(ol, ManagedObject) {
        "use strict";
        var Interaction = ManagedObject.extend("incentergy.ol.interaction.Interaction", {
            metadata: {
                library: "incentergy.ol",
                properties: {

                },
                events: {},
                abstract: true
            },
            constructor: function(mParameters) {
                var me = this;
                this._pMapSetAndRendered = new Promise(function(resolve, reject) {
                    me.fnMapSetAndRendered = resolve;
                });
                ManagedObject.apply(this, arguments);
            },
            setParent: function(oParent) {
                var me = this;
                var retVal = ManagedObject.prototype.setParent.apply(this, arguments);
                oParent._rendered().then(function() {
                    me.fnMapSetAndRendered();
                });
                return retVal;
            },
        });
        return Interaction;
    }, /* bExport= */ true);