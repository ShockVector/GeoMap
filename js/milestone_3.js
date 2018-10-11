function initialize() {
	var student1 = new google.maps.LatLng(47.6062,-122.3321);
	var student2 = new google.maps.LatLng(47.6740,-122.1215);	
	var map = new google.maps.Map(
		document.getElementById("map_canvas"),{
		zoom: 1,
		mapTypeId: google.maps.MapTypeId.HYBRID
	});

	var student1Marker = new google.maps.Marker({
		position: redmond,
		title:"My Birth City"
		});
	redmondMarker.setMap(map);
}
