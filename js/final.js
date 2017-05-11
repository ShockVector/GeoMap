var projection = ol.proj.get('EPSG:4269');

var A6_CONT = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		params: {'LAYERS':'swest_workspace:35106-A6_CONT'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/swest_workspace/wms?',
		serverType: 'geoserver',
		projection: projection
	})
});

var tgr2006se_bern_lka = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		params: {'LAYERS':'swest_workspace:tgr2006se_bern_lka'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/swest_workspace/wms?',
		serverType: 'geoserver',
		projection: projection
	})
});

var A5_CONT = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		params: {'LAYERS':'swest_workspace:35106-A5_CONT'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/swest_workspace/wms?',
		serverType: 'geoserver',
		projection: projection
	})
});

var A5 = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		params: {'LAYERS':'swest_workspace:35106-A5'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/swest_workspace/wms?',
		serverType: 'geoserver',
		projection: projection
	})
});

var A6 = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		params: {'LAYERS':'swest_workspace:35106-A6'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/swest_workspace/wms?',
		serverType: 'geoserver',
		projection: projection
	})
});

var layeredMap = new ol.Map({
	target: 'layered_map',
	layers: [A6,A5,A5_CONT,tgr2006se_bern_lka,A6_CONT],
	view: new ol.View({
		center: ol.proj.fromLonLat([-106.61,35.11]),
		zoom:12,
		projection: projection,
		})
	});

