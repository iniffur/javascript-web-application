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
        setNotes(notes) {
          this.notes = notes;
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
        constructor(model2, api2) {
          this.model = model2;
          this.api = api2;
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
        displayNotesFromApi(callback) {
          this.api.loadNotes((data) => {
            this.model.setNotes(data);
            this.displayNotes();
            callback();
          });
        }
      };
      module.exports = NotesView2;
    }
  });

  // notesApi.js
  var require_notesApi = __commonJS({
    "notesApi.js"(exports, module) {
      var NotesApi2 = class {
        loadNotes = (callback) => {
          fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => {
            callback(data);
          });
        };
      };
      module.exports = NotesApi2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var NotesApi = require_notesApi();
  var model = new NotesModel();
  var api = new NotesApi();
  var view = new NotesView(model, api);
  view.displayNotesFromApi();
})();
