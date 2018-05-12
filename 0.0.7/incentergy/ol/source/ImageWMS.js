/*!
 * ${copyright}
 */

sap.ui.define(['ol', './Image'],
    function(ol, Image) {
        "use strict";
        var ImageWMS = Image.extend("incentergy.ol.source.ImageWMS", {
            metadata: {
                library: "incentergy.ol",
            }
        });
        return ImageWMS;
    }, /* bExport= */ true);