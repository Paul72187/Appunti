const biblioteca = new Biblioteca;

//get elements
let notesSection = document.getElementById("yourNotes");


//element funtions
function displayNotes() {
  let notesList = biblioteca.view()   
	notesList.forEach(note => {
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
	})
} 




//event listeners
window.addEventListener("load", displayNotes)
