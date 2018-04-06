var map, infowindow;
//const dataUrl = 'https://rawgit.com/srykov/AdventureMap/master/adventures.json';
const dataUrl = 'https://rawgit.com/srykov/e2c1a51c29d2f16dea77157f3fa73707/raw/027305baa18e8f5f1929dd1b1511984465382863/gistfile1.txt';

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
		map: map,
		animation: google.maps.Animation.DROP
	});

	marker.addListener('click', function() {
		infowindow.setContent(`${adventure.getAdventureType()}: ${adventure.description}`);
		infowindow.open(map, marker);
	});
};

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
  		center: {lat: 57.454166, lng: -96.921118},
  		zoom: 4
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