/**
 * @jest-environment jsdom
 */

const fs = require('fs')
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');

describe('Notes page view', () => {
    it('Displays a new note when added', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');
        const model = new NotesModel();
        const view = new NotesView(model);
        model.addNote('Walk the dog');
        view.displayNotes();
        expect(document.querySelectorAll('div.note').length).toEqual(1);
    })

    it('Adds note to page on click', () => {
        document.body.innerHTML = fs.readFileSync('./index.html')
        const model = new NotesModel();
        const view = new NotesView(model);
        const buttonEl = document.querySelector('#add-note-button')
        const inputEl = document.querySelector('#note-input')
        inputEl.value = 'Random text'
        buttonEl.click();
        expect(document.querySelectorAll('div.note').length).toEqual(1)
        expect(document.querySelectorAll('div.note')[0].innerHTML).toEqual('Random text');
    })

    it('shows correct number of notes when display notes called multiple times', () => {
        document.body.innerHTML = fs.readFileSync('./index.html')
        const model = new NotesModel();
        const view = new NotesView(model);
        const buttonEl = document.querySelector('#add-note-button')
        const inputEl = document.querySelector('#note-input')
        inputEl.value = 'Random text'
        buttonEl.click();
        buttonEl.click();
        expect(document.querySelectorAll('div.note').length).toEqual(2)
    })
})
