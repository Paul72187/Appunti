// class Biblioteca{

// 	constructor(){
// 	  this.storageArr = [];
// 	}

// 	add(title, content){
		
// 		this.storageArr = (JSON.parse(localStorage.getItem("My_Notes")));

// 		if(this.storageArr == null){
// 			this.storageArr = [];
// 		}

// 		this.storageArr.push({title: title, content: content});

// 		let storageJson = JSON.stringify(this.storageArr);
// 		localStorage.setItem("My_Notes", storageJson);

// 	}

// 	view(){
// 		this.storageArr = JSON.parse(localStorage.getItem("My_Notes"));

// 		return this.storageArr;
// 	}

// }

// class appunti{

// 	constructor(title, content){
// 		this.title = title;
// 		this.content = content;
// 	}

// }

class Biblioteca{

	constructor(storage){
	  this.storageArr = [];
	  this.storage = storage;
	}

	add(title, content){
		
		this.storageArr = (JSON.parse(this.storage.getItem("My_Notes")));

		if(this.storageArr == null){
			this.storageArr = [];
		}

		this.storageArr.push({title: title, content: content});

		let storageJson = JSON.stringify(this.storageArr);
		this.storage.setItem("My_Notes", storageJson);

	}

	view(){
		this.storageArr = JSON.parse(this.storage.getItem("My_Notes"));

		return this.storageArr;
	}

}