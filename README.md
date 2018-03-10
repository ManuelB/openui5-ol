# openui5-ol
This repository contains the openui5 custom control library openui5-ol.

![Screenshot](https://raw.github.com/ManuelB/openui5-ol/master/docs/OpenUI5-OpenLayers-Integration.png "Screenshot")

# Maven Coordinates

If you are using Maven to bundle your webapp you can consume this library as a jar having the resource in META-INF/resources:

```
<dependency>
    <groupId>de.incentergy.openui5</groupId>
    <artifactId>ol</artifactId>
    <version>0.0.1</version>
</dependency>
```

Afterwards you can consume it with the following include:

```
<script id='sap-ui-bootstrap'
	src='https://openui5.hana.ondemand.com/1.52.5/resources/sap-ui-core.js'
	data-sap-ui-resourceroots='{
        "incentergy": "./incentergy",
        "ol": "https://cdnjs.cloudflare.com/ajax/libs/ol3/4.1.0/ol"}'
	data-sap-ui-theme='sap_belize' data-sap-ui-libs='sap.m,sap.ui.layout,incentergy.ol'
	data-sap-ui-compatVersion='edge' data-sap-ui-preload='async'
	data-sap-xx-bindingSyntax='complex'>
</script>
```

# CDN Coordinates

If you directly want to access it via CDN:

```
<script id='sap-ui-bootstrap'
	src='https://openui5.hana.ondemand.com/1.52.5/resources/sap-ui-core.js'
	data-sap-ui-resourceroots='{
        "incentergy.ol": "https://ManuelB.github.com/openui5-ol/0.0.1/incentergy/ol",
        "ol": "https://cdnjs.cloudflare.com/ajax/libs/ol3/4.1.0/ol"}'
	data-sap-ui-theme='sap_belize' data-sap-ui-libs='sap.m,sap.ui.layout,incentergy.ol'
	data-sap-ui-compatVersion='edge' data-sap-ui-preload='async'
	data-sap-xx-bindingSyntax='complex'>
</script>
```
