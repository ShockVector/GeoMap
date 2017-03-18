function initialize() {
	var bonito = new google.maps.LatLng(36.060574, -107.961692);
	var map = new google.maps.Map(
		document.getElementById("map_canvas"),{
		zoom: 18,
		center: bonito,
		mapTypeId: google.maps.MapTypeId.HYBRID
	});

	var bonitoMarker = new google.maps.Marker({
		position: bonito,
		title:"Pueblo Bonito"
		});
	bonitoMarker.setMap(map);
	
	var bonitoInfoContent = '<div class="infoBox">' +
		'<p>Pueblo Bonito, Chaco Canyon</p>' +
		'<iframe src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Pueblo_Bonito_Cliff_View.jpg/220px-Pueblo_Bonito_Cliff_View.jpg" width="250" height="200" frameborder="0" style="border:0" allowfullscreen></iframe>' +
		'</div>';
	var bonitoInfoWindow = new google.maps.InfoWindow({
		content: bonitoInfoContent
		});
	google.maps.event.addListener(bonitoMarker, 'click', function() {
		bonitoInfoWindow.open(map,bonitoMarker);
		});
}
