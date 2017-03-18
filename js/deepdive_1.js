function initMap() {
	var shinjuku = new google.maps.LatLng(35.6906,139.6996);
	var ikebukuro = new google.maps.LatLng(35.7289,139.7103);
	var shibuya = new google.maps.LatLng(35.6580,139.7016);
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
		'<iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1487531967290!6m8!1m7!1sF%3A-UxdEtBGJtdk%2FV4Pz5Drq9FI%2FAAAAAAAAHU0%2FW6NANv5E8n0Kd2nOEBYqR2LZt2YQ0eNLACJkC!2m2!1d35.6910135!2d139.6999588!3f169.53866026825938!4f2.8006099434656875!5f0.4000000000000002" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>' +
		'</div>';
	var shinjukuInfoWindow = new google.maps.InfoWindow({
		content: shinjukuInfoContent
		});
	google.maps.event.addListener(shinjukuMarker, 'click', function() {
		shinjukuInfoWindow.open(map,shinjukuMarker);
		});
	var ikebukuroInfoContent = '<div class="infoBox">' +
		'<p>Ikebukuro Station: 2.71 million passengers carried daily</p>' +
		'<iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1487534643023!6m8!1m7!1sF%3A-28VdGxyzfQo%2FV_rjkW03tAI%2FAAAAAAAAECU%2FDwjpR0qKh88EuAGAdD9-KP1JBYYlY0C8gCLIB!2m2!1d35.728926!2d139.71038!3f246.1938678688391!4f8.823538732971969!5f0.4000000000000002" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>' +
		'</div>';
	var ikebukuroInfoWindow = new google.maps.InfoWindow({
		content: ikebukuroInfoContent
		});
	google.maps.event.addListener(ikebukuroMarker, 'click', function() {
		ikebukuroInfoWindow.open(map,ikebukuroMarker);
		});
	var shibuyaInfoContent = '<div class="infoBox">' +
		'<p>Shibuya Station: 2.18 million passengers carried daily</p>' +
		'<iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1487533341478!6m8!1m7!1sF%3A-t5o3NpVI1U0%2FWBaGeu_Cy6I%2FAAAAAAAA0-8%2FqT0DZwv9b9Umd2uH3paLvA45HW4CxdQ5QCLIB!2m2!1d35.6589024!2d139.7021999!3f165.74971368940396!4f-1.032108647626771!5f0.49427290972414983" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>' +
		'</div>';
	var shibuyaInfoWindow = new google.maps.InfoWindow({
		content: shibuyaInfoContent
		});
	google.maps.event.addListener(shibuyaMarker, 'click', function() {
		shibuyaInfoWindow.open(map,shibuyaMarker);
		});
	var tokyoInfoContent = '<div class="infoBox">' +
		'<p>Tokyo Station: 1.12 million passengers carried daily</p>' +
		'<iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1487535065981!6m8!1m7!1sF%3A-L77_RZFFFiM%2FVAsQ9LnuZNI%2FAAAAAAAAG_s%2FLW7B1GQh7hkU9Hk1bLUsBCQF5eDdCsMXwCLIB!2m2!1d35.68133487620521!2d139.7671021521091!3f326.07521945215234!4f-7.416637106752162!5f0.4000000000000002" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>' +
		'</div>';
	var tokyoInfoWindow = new google.maps.InfoWindow({
		content: tokyoInfoContent
		});
	google.maps.event.addListener(tokyoMarker, 'click', function() {
		tokyoInfoWindow.open(map,tokyoMarker);
		});
	var shinagawaInfoContent = '<div class="infoBox">' +
		'<p>Shinagawa Station: 0.91 million passengers carried daily</p>' +
		'<iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1487534223693!6m8!1m7!1sNXY-QAIUnfOz8Yul-S9NuA!2m2!1d35.62864862438551!2d139.738190701369!3f200.41779412393151!4f-9.564123708145019!5f0.7820865974627469" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>' +
		'</div>';
	var shinagawaInfoWindow = new google.maps.InfoWindow({
		content: shinagawaInfoContent
		});
	google.maps.event.addListener(shinagawaMarker, 'click', function() {
		shinagawaInfoWindow.open(map,shinagawaMarker);
		});
	var takadanobabaInfoContent = '<div class="infoBox">' +
		'<p>Takadanobaba Station: 0.90 million passengers carried daily</p>' +
		'<iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1487534526551!6m8!1m7!1sF%3A-P6_XH41_DYQ%2FVnvyNh5fQpI%2FAAAAAAAANnI%2FD-IFGZmgC8YEmxQd_IoTHOlXeRh3LH3wgCJkC!2m2!1d35.712285!2d139.703782!3f290.06384931797623!4f-4.4562176384700365!5f0.4000000000000002" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>' +
		'</div>';
	var takadanobabaInfoWindow = new google.maps.InfoWindow({
		content: takadanobabaInfoContent
		});
	google.maps.event.addListener(takadanobabaMarker, 'click', function() {
		takadanobabaInfoWindow.open(map,takadanobabaMarker);
		});
	var shimbashiInfoContent = '<div class="infoBox">' +
		'<p>Shimbashi Station: 0.85 million passengers carried daily</p>' +
		'<iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1487535662623!6m8!1m7!1s9GfCcYDMJlg7Q8Qyfm4jOA!2m2!1d35.66542767000327!2d139.7597185766043!3f298.85350094189766!4f5.161954812506764!5f0.5467035413140264" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>' +
		'</div>';
	var shimbashiInfoWindow = new google.maps.InfoWindow({
		content: shimbashiInfoContent
		});
	google.maps.event.addListener(shimbashiMarker, 'click', function() {
		shimbashiInfoWindow.open(map,shimbashiMarker);
		});
}