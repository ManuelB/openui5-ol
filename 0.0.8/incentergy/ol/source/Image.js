/*!
 * ${copyright}
 */

sap.ui.define(['ol', './Source'],
    function(ol, Source) {
        "use strict";
        var Image = Source.extend("incentergy.ol.source.Image", {
            metadata: {
                library: "incentergy.ol",
                "abstract": true,
            }
        });
        return Image;
    }, /* bExport= */ true);