var projection = ol.proj.get('EPSG:4269');

var tgr2006se_bern_lka = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		params: {'LAYERS':'swest_workspace:tgr2006se_bern_lka_styled'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/swest_workspace/wms?',
		serverType: 'geoserver',
		projection: projection
	})
});

var A5 = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		params: {'LAYERS':'swest_workspace:35106-A5_styled'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/swest_workspace/wms?',
		serverType: 'geoserver',
		projection: projection
	})
});

var layeredMap = new ol.Map({
	target: 'layered_map',
	layers: [A5,tgr2006se_bern_lka],
	view: new ol.View({
		center: ol.proj.fromLonLat([-106.61,35.11]),
		zoom:12,
		projection: projection,
		})
	});

