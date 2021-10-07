const biblioteca = new Biblioteca;

//get elements
let notesSection = document.getElementById("yourNotes");
let titleInput = document.getElementById("titleInput");
let contentInput = document.getElementById("contentInput")
let addNoteBtn = document.getElementById("addNoteBtn");


//element funtions
function displayNotes() {
	let notesList = biblioteca.view();
	let notesReverse = notesList.reverse();
	if (notesList != null) {
		notesReverse.forEach(note => {
			let card = document.createElement("card");
			let noteTitle = document.createElement("div")
			let noteCtnt = document.createElement("div")
			let noteBtn = document.createElement("button")
			let title = document.createElement("h3")
			let trash = document.createElement("i")

			trash.className = "fas fa-trash-alt";
			noteTitle.className = "noteTitle";
			title.innerHTML = note.title;
			noteCtnt.innerHTML = note.content;

			notesSection.appendChild(card)
			card.appendChild(noteTitle)
			card.appendChild(noteCtnt)
			card.appendChild(noteBtn)
			noteTitle.appendChild(title)
			noteBtn.appendChild(trash)
		});
	}else{
		console.log("You should add some notes")
	}

}
function addNewNote() {
	biblioteca.add(titleInput.value, contentInput.value);
	location.reload();
}



//event listeners
window.addEventListener("load", displayNotes)
addNoteBtn.addEventListener("click", addNewNote)