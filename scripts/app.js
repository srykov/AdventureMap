var map, infowindow;
const dataUrl = 'https://cdn.rawgit.com/srykov/e90c49c118dcef6928c255d8dd01f6fb/raw/2d466766390cdfc8d453e5416a5553498cd53157/adventures.json';

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
  		center: {lat: 46.342982, lng: -72.542072},
  		zoom: 7
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