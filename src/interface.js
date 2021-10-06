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
		let noteBtn = document.createElement("div")
    let title = document.createElement("h3")

		title.innerHTML = note.title
		noteCtnt.innerHTML = note.content

		notesSection.appendChild(card)
		card.appendChild(noteTitle)
		card.appendChild(noteCtnt)
		card.appendChild(noteBtn)
		noteTitle.appendChild(title)
	})
} 




//event listeners
window.addEventListener("load", displayNotes)
