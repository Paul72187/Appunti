
class Biblioteca{

	constructor(storage){
	  this.storage = storage;
	}

	add(title, content){
		this.storage.setItem(title, content);
	}

	view(){
		
		let keys = Object.keys(localStorage)
		let notes = [];
		keys.forEach(key => {
			let value = localStorage.getItem(key);
			 notes.push([key, value]);
		});
		return notes;
		
	}

}