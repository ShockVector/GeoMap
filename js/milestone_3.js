function initialize() {
	var seattle = new google.maps.LatLng(47.6062,-122.3321);
	var mapOptions = {
		zoom: 9,
		center: seattle,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	var map = new google.maps.Map(
		document.getElementById("map_canvas"),
		mapOptions);
}
