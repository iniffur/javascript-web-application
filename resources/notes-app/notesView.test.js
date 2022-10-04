/**
 * @jest-environment jsdom
 */

const fs = require('fs')
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');

describe('Notes page view', () => {
    it('Displays a new note when added', () =>{
        document.body.innerHTML = fs.readFileSync('./index.html');
        const model = new NotesModel();
        const view = new NotesView(model);
        model.addNote('Walk the dog');
        view.displayNotes();
        expect(document.querySelectorAll('div.note').length).toEqual(1);
    })
})
