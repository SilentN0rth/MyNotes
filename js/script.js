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
	if ((categoryPanel.value == 0) & (textPanel.value == '')) {
		error.style.visibility = 'visible'
		error.textContent = 'Wypełnij brakujące pola!'
	} else if (categoryPanel.value == 0) {
		error.style.visibility = 'visible'
		error.textContent = 'Wybierz kategorię!'
	} else if (textPanel.value == '') {
		error.style.visibility = 'visible'
		error.textContent = 'Podaj treść notatki!'
	} else {
		createNote()
		error.style.visibility = 'hidden'
	}
}

const createNote = () => {
	const newNote = document.createElement('div')
	newNote.classList.add('note-area__note')
	newNote.setAttribute('id', cardID)
	noteArea.append(newNote)
	newNote.innerHTML = `
    <div class="note-area__header">
                <h3 class="note-area__header-title">${
									categoryPanel.options[categoryPanel.selectedIndex].text
								} #${cardID}</h3>
                <button class="note-area__header-delete">
                    <i class="fas fa-times icon"></i>
                </button>
            </div>
            <div class="note-area__body">
                <p>${textPanel.value}</p>
            </div>`
	cardID++
}

addBtn.addEventListener('click', openPanel)
cancelBtn.addEventListener('click', openPanel)
saveBtn.addEventListener('click', addNote)
