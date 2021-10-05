class Biblioteca{

	constructor(){
	  this.storageObj = [];
	}

	add(title, content){
		let element = {};
		element.title = title;
		element.content = content;
    	this.storageObj.push(element)
	}

}