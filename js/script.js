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

addBtn.addEventListener('click', openPanel)
cancelBtn.addEventListener('click', openPanel)
