const notes = [
    { body: "Note 1" },
    { body: "Note 2" },
    { body: "Note 3" },
    { body: "Note 4" },
  ];
  
  function deleteNote(note) {
    const noteIndex = notes.indexOf(note);
    notes.splice(noteIndex, 1);
    renderNotes();
  }
  
  function buildNote(note) {
    const div = document.createElement("div");
    div.className = "note";
  
    const p = document.createElement("p");
    p.textContent = note.body;
  
    const button = document.createElement("button");
    button.textContent = "Delete";
    button.addEventListener("click", (_event) => deleteNote(note));
  
    div.append(p, button);
  
    return div;
  }
  
  function renderNotes() {
    const notesContainer = document.querySelector(".notes-container");
    notesContainer.innerHTML = "";
  
    notes.forEach((note) => {
      const noteEl = buildNote(note);
      notesContainer.append(noteEl);
    });
  }
  
  function createNote(body) {
    notes.push({ body });
  }
  
  function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const body = form.elements.note.value;
    createNote(body);
    renderNotes();
    form.reset();
  }
  
  const form = document.querySelector("form");
  form.addEventListener("submit", onSubmit);
  
  renderNotes();
  