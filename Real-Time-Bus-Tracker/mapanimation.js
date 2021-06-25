
mapboxgl.accessToken = 'pk.eyJ1Ijoidm90c2lzcCIsImEiOiJja3BvNHkwMngwaWFoMnBwNDQ4a2o2Z3FlIn0.GgZi0ivfLpIfLhw91F8byg';

let mapMarkers = [];
var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-71.104081, 42.365554],
        zoom: 14
});


async function run(){
    // get bus data    
	const locations = await getBusLocations();
	for(let i = 0; i < locations.length; i++) {
		var currentBus = locations[i];
		var getLongitude = currentBus.attributes.longitude;
		var getLatitude = currentBus.attributes.latitude;
		console.log(getLongitude , getLatitude)
		
		
		var marker = new mapboxgl.Marker({
			color: "red",
			scale: 2
		})
			 .setLngLat([getLongitude, getLatitude])
			 .addTo(map);
		
		mapMarkers.push(marker);
		
	}
	// timer
	//setTimeout(run, 15000);
}

setInterval(remove, 14999);
setInterval(run, 15000);

// Request bus data from MBTA
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
}
function remove() {
	mapMarkers.forEach((marker) => marker.remove())
	mapMarkers = [];
}

remove();
run();