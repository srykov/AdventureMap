//This class parses represents an individual adventure. Used to encapsulate data from JSON file.
class Adventure {
	constructor(title, lat, long, type, description){
		this.title = title;
		this.lat = lat;
		this.long = long;
		this.type = type;
		this.description = description;
	}
	getIcon(){
		switch(this.type){
			case 0:
				return 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png';
			case 1:
				return 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
			case 2:
				return 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
			case 3:
				return 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png';
			case 4:
				return 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
		}
	}
	getAdventureType(){
		switch(this.type){
			case 0:
				return 'Backcountry Skiing';
			case 1:
				return 'Hiking';
			case 2:
				return 'Climbing';
			case 3:
				return 'Cycling';
			case 4:
				return 'Paddling';
		}
	}
}