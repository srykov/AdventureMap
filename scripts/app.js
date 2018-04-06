var map, infowindow;
const dataUrl = 'https://rawgit.com/srykov/AdventureMap/master/adventures.json';

//parse JSON results and return a matching array of Adventure objects
function getAdventures(data){
	var adventures = [];
	data.results.forEach(function(result){
		let adventure = new Adventure(result.title, result.lat, result.long, result.activity, result.description);
		adventures.push(adventure);
	});
	return adventures;
};

//create a google maps marker for a given Adventure object
function createAdventureMarker(adventure){
	var marker = new google.maps.Marker({
		position: {lat: adventure.lat, lng: adventure.long},
		title: adventure.title,
		icon: adventure.getIcon(),
		map: map
	});

	marker.addListener('click', function() {
		infowindow.setContent(`${adventure.getAdventureType()}: ${adventure.description}`);
		infowindow.open(map, marker);
	});
};

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
  		center: {lat: 57.454166, lng: -96.921118},
  		zoom: 6
	});

  	infowindow = new google.maps.InfoWindow({
		content: 'Best adventure ever'
	});

	fetch(dataUrl)
	.then(function(response){
		return response.json();
	}).then(function(data){
		getAdventures(data).forEach(function(adventure){
			createAdventureMarker(adventure);
		});
	});
};