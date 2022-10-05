(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(note) {
          this.notes.push(note);
        }
        reset() {
          this.notes = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model2) {
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.inputValueEl = document.querySelector("#note-input");
          this.addNoteButtonEl = document.querySelector("#add-note-button");
          this.addNoteButtonEl.addEventListener("click", () => {
            this.model.addNote(this.inputValueEl.value);
            this.inputValueEl.value = "";
            this.displayNotes();
          });
        }
        displayNotes() {
          document.querySelectorAll("div.note").forEach((n) => n.remove());
          const notes = this.model.getNotes();
          notes.forEach((note) => {
            const newNote = document.createElement("div");
            newNote.innerHTML = note;
            newNote.className = "note";
            this.mainContainerEl.append(newNote);
          });
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var model = new NotesModel();
  model.addNote("This is an example note");
  var view = new NotesView(model);
  view.displayNotes();
})();
