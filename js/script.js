// Top menu
const addBtn = document.querySelector('.menu__buttons-add')
const deleteBtn = document.querySelector('.menu__buttons-delete')
// Note
const noteArea = document.querySelector('.note-area')
const deleteNoteBtn = noteArea.getElementsByClassName('note-area__header-delete')
// Note panel
const notePanel = document.querySelector('.note__panel')
const saveBtn = notePanel.querySelector('.save')
const cancelBtn = notePanel.querySelector('.cancel')

const categoryPanel = notePanel.querySelector('#category')
const textPanel = notePanel.querySelector('#text')
const error = notePanel.querySelector('.note__panel-error')

let selectedValue;
let cardID = 0;