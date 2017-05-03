var projection = ol.proj.get('EPSG:3857');

var bp_fill_color = [0,204,255,153]
var bp_line_color = [0,204,255,153]

var bs_fill_color = [0,0,0,0]
var bs_line_color = [0,0,0,0]


var cyclecaveCoord = [-106.58,35.108881]
var bikecoopCoord = [-106.621927,35.079465]
var sandiacyclesCoord = [-106.515278,35.129491]
var REICoord = [-106.607316,35.135265]
var NEcycleryCoord = [-106.551858,35.109417]

var cyclecavePoint = new ol.geom.Point(ol.proj.fromLonLat(cyclecaveCoord, projection));
var bikecoopPoint = new ol.geom.Point(ol.proj.fromLonLat(bikecoopCoord, projection));
var sandiacyclesPoint = new ol.geom.Point(ol.proj.fromLonLat(sandiacyclesCoord, projection));
var REIPoint = new ol.geom.Point(ol.proj.fromLonLat(REICoord, projection));
var NEcycleryPoint = new ol.geom.Point(ol.proj.fromLonLat(NEcycleryCoord, projection));

var cyclecaveFeature = new ol.Feature({
	geometry: cyclecavePoint
})
var bikecoopFeature = new ol.Feature({
	geometry: bikecoopPoint
})
var sandiacyclesFeature = new ol.Feature({
	geometry: sandiacyclesPoint
})
var REIFeature = new ol.Feature({
	geometry: REIPoint
})
var NEcycleryFeature = new ol.Feature({
	geometry: NEcycleryPoint
})

var bp_style = new ol.style.Style({
	fill: new ol.style.Fill({
	  color: bp_fill_color,
	}),
	stroke: new ol.style.Stroke({
	  color: bp_line_color,
	  width: 1.5
	}),
});

var bs_style = new ol.style.Style({
        image: new ol.style.Circle({
          radius: 6,
          stroke: new ol.style.Stroke({
            color: 'black',
            width: 2
          }),
          fill: new ol.style.Fill({
            color: 'yellow'
          })
        })
});

var bern_bp_kml = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'https://stephenwest470.github.io/portfolio/bike_paths.kml',
		projection: projection,
        format: new ol.format.KML({
            extractStyles: false,
            extractAttributes: false,
		})
	}),
	style: bp_style
});

var bs_points= new ol.layer.Vector({
	source: new ol.source.Vector({
		projection: projection,
		features: [cyclecaveFeature,bikecoopFeature,sandiacyclesFeature,REIFeature,NEcycleryFeature]
	}),
	style: bs_style
});

var basemap_bern_tiled = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: 'USGS'
		}),
		params: {'LAYERS':'0'},
		url: 'https://isse.cr.usgs.gov/arcgis/services/Orthoimagery/USGS_EROS_Ortho_1Foot/ImageServer/WMSServer?',
		serverType: 'geoserver',
		projection: projection
	})
});

var Layer_Stamen_Labels = new ol.layer.Group({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.Stamen({layer: 'toner-labels'})
        })
    ],
	view: new ol.View({
		 extent: ol.proj.get("EPSG:3857").getExtent(-141.0019800197021,25.837059996654943,-66.88541567953746,69.64661461419676),
	})
});



var layeredMap = new ol.Map({
	target: 'layered_map',
	layers: [basemap_bern_tiled,bern_bp_kml,bs_points,Layer_Stamen_Labels],
	view: new ol.View({
		center: ol.proj.fromLonLat([-106.61,35.11]),
		zoom:12,
		projection: projection
		})
	});

