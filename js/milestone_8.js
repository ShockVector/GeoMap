var Layer_Stamen_paper = new ol.layer.Group({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.Stamen({layer: 'toner-hybrid'})
        })
    ]
});

var Layer_Stamen_terrain = new ol.layer.Group({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.Stamen({layer: 'terrain'})
        })
    ]
});

var Layer_Bing_aerial_labels = new ol.layer.Group({
    layers: [
		new ol.layer.Tile({
			source: new ol.source.BingMaps({
				key: 'AgQRwdWCKHZjOU-fQDBXp1sy8t3AJcjhvGeI4FCBMomdQ8wHBHnGsFdhZLD24cUR',
				imagerySet: 'AerialWithLabels'
			})
		})
    ]
});

var myMap = new ol.Map({
	target: 'map_canvas',
	view: new ol.View({
		center: ol.proj.fromLonLat([-106.61,35.110833]),
		zoom: 11
		})
	});

function setMapType(newType) {
    if(newType == 'OSM') {
    } else if (newType == 'STAMEN_paper') {
        myMap.setLayerGroup(Layer_Stamen_paper);
    } else if (newType == 'STAMEN_Terrain') {
        myMap.setLayerGroup(Layer_Stamen_terrain);
    } else if (newType == 'Bing_AerialWlabels') {
        myMap.setLayerGroup(Layer_Bing_aerial_labels);
    }
}
setMapType('STAMEN_Terrain')