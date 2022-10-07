/**
 * @jest-environment jsdom
 */

const fs = require('fs')
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');
const NotesApi = require('./notesApi');
require('jest-fetch-mock').enableMocks()
jest.mock('./notesApi');

describe('Notes page view', () => {

    beforeEach(() => {
        NotesApi.mockClear();
        document.body.innerHTML = fs.readFileSync('./index.html');
      });

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

    it ('loads notes from an api', (done) => {
        document.body.innerHTML = fs.readFileSync('./index.html');
        const model = new NotesModel();
    
        const api = {
          loadNotes: () => {
            model.setNotes(['Random Text']);
            view.displayNotes();
          }
        }
    
        const view = new NotesView(model, api);
    
        view.displayNotesFromApi();
        expect(document.querySelectorAll('div.note').length).toBe(1);
        expect(document.querySelector('div.note').textContent).toEqual('Random text');
        done();
    });
})
