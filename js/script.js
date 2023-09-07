// Top menu
const menu = document.querySelector('.menu') // main
const addBtn = menu.querySelector('.menu__buttons-add')
const deleteAllBtn = menu.querySelector('.menu__buttons-delete')
// Note
const noteArea = document.querySelector('.note-area') // main
const deleteNoteBtn = noteArea.getElementsByClassName('note-area__header-delete')
// Note panel
const notePanel = document.querySelector('.note__panel') // main
const saveBtn = notePanel.querySelector('.save')
const cancelBtn = notePanel.querySelector('.cancel')

const categoryPanel = notePanel.querySelector('#category')
const textPanel = notePanel.querySelector('#text')
const error = notePanel.querySelector('.note__panel-error')

let selectedValue
let cardID = 0

const openPanel = () => {
	if (notePanel.style.display === 'flex') {
		closePanel()
	} else {
		notePanel.style.display = 'flex'
	}
}

const closePanel = () => {
	notePanel.style.display = 'none'
	textPanel.value = ''
	error.style.visibility = 'hidden'
	category.selectedIndex = 0
}

const addNote = () => {
	error.style.visibility = 'visible'

	if ((categoryPanel.value == 0) & (textPanel.value == '')) {
		error.textContent = 'Wypełnij brakujące pola!'
	} else if (categoryPanel.value == 0) {
		error.textContent = 'Wybierz kategorię!'
	} else if (textPanel.value == '') {
		error.textContent = 'Podaj treść notatki!'
	} else {
		createNote()
		closePanel()
	}
}

const createNote = () => {
	const newNote = document.createElement('div')
	newNote.classList.add('note-area__note')
	newNote.setAttribute('id', cardID)
	noteArea.append(newNote)
	newNote.innerHTML = `
            <div class="note-area__header">
                <h3 class="note-area__header-title">${selectedValue} #${cardID}</h3>
                <button class="note-area__header-delete" onclick="deleteNote(${cardID})">
                    <i class="fas fa-times icon"></i>
                </button>
            </div>
            <div class="note-area__body">
                <p>${textPanel.value}</p>
            </div>`
	cardID++
	checkColor(newNote)
}

const selectValue = () => {
	selectedValue = categoryPanel.options[categoryPanel.selectedIndex].text
}

const checkColor = note => {
	switch (selectedValue) {
		case 'Zakupy':
			note.style.backgroundColor = 'rgb(72,255,0)'
			break
		case 'Praca':
			note.style.backgroundColor = 'rgb(255,243,0)'
			break
		case 'Inne':
			note.style.backgroundColor = 'rgb(0,170,255)'
			break
	}
}

const deleteNote = id => {
	const noteToDelete = document.getElementById(id)
	noteArea.removeChild(noteToDelete)
}

const deleteAllNotes = () => {
	noteArea.textContent = ''
	cardID = 0
}

addBtn.addEventListener('click', openPanel)
cancelBtn.addEventListener('click', openPanel)
saveBtn.addEventListener('click', addNote)
deleteAllBtn.addEventListener('click', deleteAllNotes)
