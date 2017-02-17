function initialize() {
	var seattle = new google.maps.LatLng(47.6062,-122.3321);
	var redmond = new google.maps.LatLng(47.6740,-122.1215);	
	var map = new google.maps.Map(
		document.getElementById("map_canvas"),{
		zoom: 9,
		center: seattle,
		mapTypeId: google.maps.MapTypeId.HYBRID
	});

	var redmondMarker = new google.maps.Marker({
		position: redmond,
		title:"My Birth City"
		});
	redmondMarker.setMap(map);
}
