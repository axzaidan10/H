var wms_layers = [];

var format_BuildingCategories_0 = new ol.format.GeoJSON();
var features_BuildingCategories_0 = format_BuildingCategories_0.readFeatures(json_BuildingCategories_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BuildingCategories_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BuildingCategories_0.addFeatures(features_BuildingCategories_0);
var lyr_BuildingCategories_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BuildingCategories_0, 
                style: style_BuildingCategories_0,
                interactive: true,
    title: 'Building Categories<br />\
    <img src="styles/legend/BuildingCategories_0_0.png" /> Residential<br />\
    <img src="styles/legend/BuildingCategories_0_1.png" /> Commercial<br />\
    <img src="styles/legend/BuildingCategories_0_2.png" /> Service<br />\
    <img src="styles/legend/BuildingCategories_0_3.png" /> Religious<br />\
    <img src="styles/legend/BuildingCategories_0_4.png" /> <br />'
        });
var format_RoadSystem_1 = new ol.format.GeoJSON();
var features_RoadSystem_1 = format_RoadSystem_1.readFeatures(json_RoadSystem_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadSystem_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadSystem_1.addFeatures(features_RoadSystem_1);
var lyr_RoadSystem_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RoadSystem_1, 
                style: style_RoadSystem_1,
                interactive: true,
    title: 'Road System<br />\
    <img src="styles/legend/RoadSystem_1_0.png" /> Main<br />\
    <img src="styles/legend/RoadSystem_1_1.png" /> Artirial<br />\
    <img src="styles/legend/RoadSystem_1_2.png" /> Local<br />'
        });
var format_MapSymbols_2 = new ol.format.GeoJSON();
var features_MapSymbols_2 = format_MapSymbols_2.readFeatures(json_MapSymbols_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MapSymbols_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MapSymbols_2.addFeatures(features_MapSymbols_2);
var lyr_MapSymbols_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MapSymbols_2, 
                style: style_MapSymbols_2,
                interactive: true,
    title: 'Map Symbols<br />\
    <img src="styles/legend/MapSymbols_2_0.png" /> Cafe<br />\
    <img src="styles/legend/MapSymbols_2_1.png" /> Gas Station<br />\
    <img src="styles/legend/MapSymbols_2_2.png" /> Mosque<br />\
    <img src="styles/legend/MapSymbols_2_3.png" /> Restaurant<br />\
    <img src="styles/legend/MapSymbols_2_4.png" /> Service<br />\
    <img src="styles/legend/MapSymbols_2_5.png" /> Sport Place<br />\
    <img src="styles/legend/MapSymbols_2_6.png" /> Store<br />'
        });

lyr_BuildingCategories_0.setVisible(true);lyr_RoadSystem_1.setVisible(true);lyr_MapSymbols_2.setVisible(true);
var layersList = [lyr_BuildingCategories_0,lyr_RoadSystem_1,lyr_MapSymbols_2];
lyr_BuildingCategories_0.set('fieldAliases', {'id': 'id', 'name1': 'name1', 'type': 'type', });
lyr_RoadSystem_1.set('fieldAliases', {'id': 'id', 'name1': 'name1', 'type': 'type', });
lyr_MapSymbols_2.set('fieldAliases', {'id': 'id', 'name1': 'name1', 'type': 'type', });
lyr_BuildingCategories_0.set('fieldImages', {'id': 'TextEdit', 'name1': 'TextEdit', 'type': 'TextEdit', });
lyr_RoadSystem_1.set('fieldImages', {'id': 'TextEdit', 'name1': 'TextEdit', 'type': 'TextEdit', });
lyr_MapSymbols_2.set('fieldImages', {'id': 'TextEdit', 'name1': 'TextEdit', 'type': 'TextEdit', });
lyr_BuildingCategories_0.set('fieldLabels', {'id': 'no label', 'name1': 'no label', 'type': 'no label', });
lyr_RoadSystem_1.set('fieldLabels', {'id': 'no label', 'name1': 'header label', 'type': 'no label', });
lyr_MapSymbols_2.set('fieldLabels', {'id': 'no label', 'name1': 'no label', 'type': 'inline label', });
lyr_MapSymbols_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});