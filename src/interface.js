const biblioteca = new Biblioteca(localStorage);
// const emoji = new Emoji();
// const biblioteca = new Biblioteca;


//get elements
let notesSection = document.getElementById("yourNotes");
let titleInput = document.getElementById("titleInput");
let contentInput = document.getElementById("contentInput");
let addNoteBtn = document.getElementById("addNoteBtn");
let noteBtn;



//element funtions
function displayNotes() {
	titleInput.value = "";
	contentInput.value = "";
	let notesList = biblioteca.view();
	let notesReverse = notesList.reverse();
	if (notesList != null) {
		notesReverse.forEach(note => {
			let card = document.createElement("card");
			let noteTitle = document.createElement("div");
			let noteCtnt = document.createElement("div");
			let title = document.createElement("h3");
			noteBtn = document.createElement("button")
			let trash = document.createElement("i")


			trash.className = "fas fa-trash-alt";
			noteTitle.className = "noteTitle";
			title.innerHTML = note[0];
			noteCtnt.innerHTML = note[1];
			noteBtn.id = note[0];


			notesSection.appendChild(card)
			card.appendChild(noteTitle)
			card.appendChild(noteCtnt)
			card.appendChild(noteBtn)
			noteTitle.appendChild(title)
			noteBtn.appendChild(trash)
			noteBtn.setAttribute("onclick", "deleteNote(this.id)")

		});
	} else {
		console.log("You should add some notes")
	}
}
function addNewNote() {
	biblioteca.add(titleInput.value, contentInput.value);
	location.reload();
}
function deleteNote(e) {
	console.log(this)
	biblioteca.delete(e);
	location.reload();
}

// document.querySelector("#emoji1").innerHTML = emoji.emoji(":speech_balloon:")

//event listeners
window.addEventListener("load", displayNotes)
addNoteBtn.addEventListener("click", addNewNote)