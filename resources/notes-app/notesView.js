class NotesView{
    constructor(model, api){
        this.model = model;
        this.api = api;
        this.mainContainerEl = document.querySelector('#main-container');
        this.inputValueEl = document.querySelector('#note-input')
        this.addNoteButtonEl = document.querySelector('#add-note-button');

        this.addNoteButtonEl.addEventListener('click', () =>{
            this.model.addNote(this.inputValueEl.value);
            this.inputValueEl.value = ''
            this.displayNotes();
        })

    }

    displayNotes(){
        document.querySelectorAll('div.note').forEach(n => n.remove());
        const notes = this.model.getNotes();
        notes.forEach((note) => {
            const newNote = document.createElement('div');
            newNote.innerHTML = note;
            newNote.className = 'note'
            this.mainContainerEl.append(newNote);
        });
    }

    displayNotesFromApi(callback) {
        this.api.loadNotes((data) => {
          this.model.setNotes(data);
          this.displayNotes();
          callback();
        })
      };
}

module.exports = NotesView;