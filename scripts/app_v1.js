var map;

var boltonValley = new adventureLocation('Bolton Valley Nordic Backcountry', 44.42099, -72.8525117, 0,'Awesome ski resort in Vermont with 100km of ungroomed backcountry terrain.');
var charlevoixTraverse = new adventureLocation('Charlevoix Traverse', 47.601, -70.536, 0,  'A 100km hut to hut ski tour in the rugged Charlevoix region.');
var cascadeMtn = new adventureLocation('Cascade Mountain Hike', 44.219, -73.862, 1, 'A classic Adirondack hike. Close to the road, lots of people, beautiful views.');
var montagneDargent = new adventureLocation('Montagne D\'Argent', 46.132,-74.677, 2,'Beautiful climbing area in the Laurentians. ');
var calabogie = new adventureLocation('Calabogie', 45.273,-76.811, 2,  'Local climbing crag.');
var luskCaves = new adventureLocation('Lusk Caves', 45.6175,-76.013, 1, 'A Gatineau park hike with underground caves. Bring a headlamp and a towel.');


var adventures = [boltonValley, charlevoixTraverse, cascadeMtn, montagneDargent, calabogie, luskCaves];

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
  		center: {lat: 45.558, lng: -73.870},
  		zoom: 7
	});

  	var infowindow = new google.maps.InfoWindow({
		content: 'Best adventure ever'
	});

	adventures.forEach(function(adventure){
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
	});
};