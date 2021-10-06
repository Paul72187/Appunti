class Biblioteca{

	constructor(){
	  this.storageObj = [];
	}

	add(title, content){
		this.storageObj = JSON.parse(localStorage.getItem("My_Notes"));
		this.storageObj.push({title: title, content: content});
		let storageJson = JSON.stringify(this.storageObj);
		localStorage.setItem("My_Notes", storageJson);
	}

	view(){
		this.storageObj = JSON.parse(localStorage.getItem("My_Notes"));
		return this.storageObj;
	}

}

class appunti{
	constructor(title, content){
		this.title = title;
		this.content = content;
	}
}