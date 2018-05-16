var map;

function onGoogleMapResponse(){
	map = new google.maps.Map(document.getElementById('googleMapContainer'), {
		zoom: 10
	});

	var country = "New York";
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode( { 'address' : country}, function(results, status){
		if(status == google.maps.GeocoderStatus.OK){
			map.setCenter(results[0].geometry.location);
		};
	});
}