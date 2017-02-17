function initMap() {
	var shinjuku = new google.maps.LatLng(35.6906,139.6996);
	var ikebukuro = new google.maps.LatLng(35.7289,139.7103);
	var shibuya = new google.maps.LatLng(35.6580,139.7016);
	var yokohama = new google.maps.LatLng(35.4658,139.6223);
	var tokyo = new google.maps.LatLng(35.680833,139.766944);
	var shinagawa = new google.maps.LatLng(35.6285,139.7388);
	var takadanobaba = new google.maps.LatLng(35.7134,139.7041);
	var shimbashi = new google.maps.LatLng(35.6661,139.7584);
    var map = new google.maps.Map(document.getElementById('map_canvas'), {
        center: {lat: 35.6895, lng: 139.6917},
        zoom: 12,
		mapTypeId: google.maps.MapTypeId.TERRAIN,
		disableDefaultUI: true,
		panControl: true,
		scaleControl: true,
        styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#616161"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#acacac"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#ffffff"
      },
      {
        "visibility": "on"
      },
      {
        "weight": 1
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      },
      {
        "weight": 1
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      },
      {
        "weight": 0.5
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      },
      {
        "weight": 0.5
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ff0000"
      },
      {
        "visibility": "on"
      },
      {
        "weight": 0.5
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ffff80"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#181818"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "transit.station.airport",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#80ffff"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "transit.station.airport",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "transit.station.rail",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ffff80"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "transit.station.rail",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#07033f"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
]
});

	var shinjukuMarker = new google.maps.Marker({
		position: shinjuku,
		title:"Shinjuku Station: 3.64 million passengers carried daily"
		});
	shinjukuMarker.setMap(map);
	var ikebukuroMarker = new google.maps.Marker({
		position: ikebukuro,
		title:"Ikebukuro Station: 2.71 million passengers carried daily"
		});
	ikebukuroMarker.setMap(map);
	var shibuyaMarker = new google.maps.Marker({
		position: shibuya,
		title:"Shibuya Station: 2.18 million passengers carried daily"
		});
	shibuyaMarker.setMap(map);
	var yokohamaMarker = new google.maps.Marker({
		position: yokohama,
		title:"Yokohama Station: 2.09 million passengers carried daily"
		});
	yokohamaMarker.setMap(map);
	var tokyoMarker = new google.maps.Marker({
		position: tokyo,
		title:"Tokyo Station: 1.12 million passengers carried daily"
		});
	tokyoMarker.setMap(map);
	var shinagawaMarker = new google.maps.Marker({
		position: shinagawa,
		title:"Shinagawa Station: 0.91 million passengers carried daily"
		});
	shinagawaMarker.setMap(map);
	var takadanobabaMarker = new google.maps.Marker({
		position: takadanobaba,
		title:"Takadanobaba Station: 0.90 million passengers carried daily"
		});
	takadanobabaMarker.setMap(map);
	var shimbashiMarker = new google.maps.Marker({
		position: shimbashi,
		title:"Shimbashi Station: 0.85 million passengers carried daily"
		});
	shimbashiMarker.setMap(map);


	var shinjukuInfoContent = '<div class="infoBox">' +
		'<p>Shinjuku Station: 3.64 million passengers carried daily</p>' +
		'</div>'
	var shinjukuInfoWindow = new google.maps.InfoWindow({
		content: shinjukuInfoContent
		});
	google.maps.event.addListener(shinjukuMarker, 'click', function() {
		classInfoWindow.open(map,shinjukuMarker);
		});
	var ikebukuroInfoContent = '<div class="infoBox">' +
		'<p>Ikebukuro Station: 2.71 million passengers carried daily</p>' +
		'<iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1486322485343!6m8!1m7!1sneDc4DwioOJ-TytixzvJEg!2m2!1d35.08459518161192!2d-106.6243050674837!3f207.5327084691508!4f-4.850942482843806!5f0.7820865974627469" width="300" height="225" frameborder="0" style="border:0" allowfullscreen></iframe>' +
		'</div>'
	var ikebukuroInfoWindow = new google.maps.InfoWindow({
		content: ikebukuroInfoContent
		});
	google.maps.event.addListener(ikebukuroMarker, 'click', function() {
		classInfoWindow.open(map,ikebukuroMarker);
		});
}