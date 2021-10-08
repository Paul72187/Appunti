class Biblioteca {
	constructor(storage) {
		this.storage = storage;
	}
	add(title, content) {
		this.storage.setItem(title, content);
	}
	view() {
		let keys = Object.keys(localStorage)
		let notes = [];
		keys.forEach(key => {
			let value = localStorage.getItem(key);
			notes.push([key, value]);
		});
		return notes;
	}
	delete(key) {
		localStorage.removeItem(key);
	}
}

// class Emoji {
// 	constructor(text) {
// 		this.text = text
// 	}
// 	emoji(text) {
// 		fetch('https://makers-emojify.herokuapp.com/', 
// 		{
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json'
// 			},
// 			body: JSON.stringify({text: text})
// 		}).then(response => {
// 			response.json()
// 		}).then(data => console.log(data.emojified_text)).catch(error => 'ERROR')
// 	}
// }