/*!
 * ${copyright}
 */

sap.ui.define(['ol', './TileImage'],
    function(ol, TileImage) {
        "use strict";
        var TileWMS = TileImage.extend("incentergy.ol.source.TileWMS", {
            metadata: {
                library: "incentergy.ol",
                properties: {
                	"params": {
                        type: "string",
                        defaultValue: undefined
                    },
                }
            },
            constructor : function(mParameters) {
    			TileImage.apply(this, arguments);

    			if (mParameters == undefined) {
    				mParameters = {};
    			}
    			if(!mParameters.params) {
    				jQuery.log.warning("TileWMS called without params");
    				return;
    			}
    			try {    				
    				this._source = new ol.source.TileWMS({
    					params : JSON.parse("{"+mParameters.params+"}"),
    					url : "url" in mParameters ? mParameters.url : undefined,
    							strategy : ol.loadingstrategy.bbox
    				});
    			} catch(e) {
    				jQuery.sap.log.error(e);
    			}
    		}
        });
        return TileWMS;
    }, /* bExport= */ true);