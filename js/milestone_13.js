var projection = ol.proj.get('EPSG:4269');
		
var PRISM_ppt_stable_4kmM2_1895_asc = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		params: {'LAYERS':'swest_workspace:PRISM_ppt_stable_4kmM2_1895_asc'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/swest_workspace/wms?',
		serverType: 'geoserver',
		projection: projection
	})
});

var PRISM_ppt_stable_4kmM3_2015_asc = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		params: {'LAYERS':'swest_workspace:PRISM_ppt_stable_4kmM3_2015_asc'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/swest_workspace/wms?',
		serverType: 'geoserver',
		projection: projection
	})
});

var PRISM_tdmean_stable_4kmM1_1895_asc = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		params: {'LAYERS':'swest_workspace:PRISM_tdmean_stable_4kmM1_1895_asc'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/swest_workspace/wms?',
		serverType: 'geoserver',
		projection: projection
	})
});

var PRISM_tdmean_stable_4kmM1_2015_asc = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		params: {'LAYERS':'swest_workspace:PRISM_tdmean_stable_4kmM1_2015_asc'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/swest_workspace/wms?',
		serverType: 'geoserver',
		projection: projection
	})
});

var PRISM_tmean_stable_4kmM2_1895_asc = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		params: {'LAYERS':'PRISM_tmean_stable_4kmM2_1895_asc'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/global/wms?',
		serverType: 'geoserver',
		projection: projection
	})
});

var PRISM_tmean_stable_4kmM2_2015_asc = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		params: {'LAYERS':'swest_workspace:PRISM_tmean_stable_4kmM2_2015_asc'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/global/wms?',
		serverType: 'geoserver',
		projection: projection
	})
});

var Layer_Stamen = new ol.layer.Group({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.Stamen({layer: 'toner_hybrid'})
        })
    ]
});

var layeredMap = new ol.Map({
	target: 'layered_map',
	layers: [PRISM_ppt_stable_4kmM2_1895_asc],
	view: new ol.View({
		center: ol.proj.fromLonLat([-98.5795,39.8282]),
		zoom:12,
		projection: projection
		})
	});
