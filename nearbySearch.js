var map;
var infowindow;

function initMap(latitude, longitude) {

  var pyrmont = {lat: latitude, lng: longitude};
  map = mapa;
  infowindow = new google.maps.InfoWindow();  
  console.log("lat + long: " + latitude + longitude);

 var request = {
    location: pyrmont,
    radius: '50000',
    types: ['hospital']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
 }

function callback(results, status) {
   if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}
