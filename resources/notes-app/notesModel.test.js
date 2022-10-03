const NotesModel = require('./notesModel');

describe('notes model', () => {
    it('return empty array if no notes currently added', () =>{
        const model = new NotesModel();
        expect(model.getNotes()).toEqual([]);
    })

    it('adds new notes to all notes', () => {
        const model = new NotesModel();
        model.addNote('Walk the dog');
        model.addNote('Empty the bins');
        expect(model.getNotes().length).toEqual(2)
        expect(model.getNotes()).toEqual(['Walk the dog', 'Empty the bins']);
    })

    it('resets all notes', () => {
        const model = new NotesModel();
        model.addNote('Walk the dog');
        model.reset();
        expect(model.getNotes()).toEqual([]);
    })
})