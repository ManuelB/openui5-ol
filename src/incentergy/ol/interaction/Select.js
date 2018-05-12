/*!
 * ${copyright}
 */

sap.ui.define(['ol', './Interaction'],
    function(ol, Interaction) {
        "use strict";
        var Select = Interaction.extend("incentergy.ol.interaction.Select", {
            metadata: {
                library: "incentergy.ol",
                properties: {
                    "condition": {
                        "type": "string",
                        "defaultValue": null
                    }
                },
                events: {
                    "select": {
                        "selected": {

                        },
                        "deselected": {

                        },
                        "selectedOlFeatures": {

                        },
                        "deselectedOlFeatures": {

                        },
                        "nativeEvent": {

                        }
                    }
                }
            },
            constructor: function(mParameters) {
                this._interaction = new ol.interaction.Select({});
                Interaction.apply(this, arguments);
                var me = this;
                this._interaction.on('select', function(e) {
                    me.fireSelect({
                        "nativeEvent": e,
                        "selectedOlFeatures": e.selected,
                        "deselectedOlFeatures": e.deselected,
                        "selected": e.selected.map(function(f) {
                            return f.get("__ui5control");
                        }),
                        "deselected": e.deselected.map(function(f) {
                            return f.get("__ui5control");
                        })
                    });
                });
            },
            _translateStringToOlCondition: function(sCondition) {
                return ol.events.condition[sCondition];
            },
            setCondition: function(sCondition) {
                if (sCondition) {
                    this._interaction.setCondition(this._translateStringToOlCondition(mParameters.condition));
                }
                return this.setProperty("condition", sCondition);
            }
        });
        return Select;
    }, /* bExport= */ true);