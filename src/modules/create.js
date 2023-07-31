
export const createTD = (name, details, duedate, priority) => {
  const li = document.createElement("li");
  const td = document.createElement("div");
  td.classList.add("td-li");
  li.appendChild(td);
  const tdName = document.createElement("p");
  tdName.textContent = name;
  td.appendChild(tdName);
  const det = document.createElement("button");
  det.textContent = "Details";
  det.classList.add("li-details");
  det.addEventListener("click", () => {
    const popup = document.querySelector(".pop-up-details");
    const title = document.getElementById("pop-title");
    title.textContent = `Title: ${name}`;
    const due = document.getElementById("pop-due");
    due.textContent = `Due date: ${duedate}`;
    const info = document.getElementById("pop-details");
    info.textContent = `Details: ${details}`;
    const tdPriority = document.getElementById("priority");
    tdPriority.textContent = `Priority: ${priority}`;
    popup.style.display = "grid";
    const popupTD = document.querySelector(".pop-up-td");
    popupTD.style.display = "none";
    const popupProj = document.querySelector(".pop-up-proj");
    popupProj.style.display = "none";
    const popupNote = document.querySelector(".pop-up-note");
    popupNote.style.display = "none";
    const popupSelect = document.querySelector(".pop-up-select");
    popupSelect.style.display = "none";
  })
  td.appendChild(det);
  const tdDue = document.createElement("p");
  tdDue.textContent = duedate;
  td.appendChild(tdDue);
  const search = document.querySelector(".search");
  const children = search.children;
  for (let i=0; i < children.length; i++) {
    let child = children[i];
    if (!(child.style.display === "none")) child.appendChild(li);
  }
  const header = document.querySelector(".proj-header");
  if (!(header.textContent === "Home")) {
    const homeDiv = document.querySelector(".home-div");
    const liHome = li.cloneNode(true);
    liHome.addEventListener("click", () => {
      const popup = document.querySelector(".pop-up-details");
      const title = document.getElementById("pop-title");
      title.textContent = `Title: ${name}`;
      const due = document.getElementById("pop-due");
      due.textContent = `Due date: ${duedate}`;
      const info = document.getElementById("pop-details");
      info.textContent = `Details: ${details}`;
      const selected = document.querySelector(".selected");
      const priority = document.getElementById("priority");
      priority.textContent = `Priority: ${selected.textContent}`;
      popup.style.display = "grid";
      const popupTD = document.querySelector(".pop-up-td");
      popupTD.style.display = "none";
      const popupProj = document.querySelector(".pop-up-proj");
      popupProj.style.display = "none";
      const popupNote = document.querySelector(".pop-up-note");
      popupNote.style.display = "none";
      const popupSelect = document.querySelector(".pop-up-select");
      popupSelect.style.display = "none";
    })
    homeDiv.appendChild(liHome);
  }
}

export const createProj = (title, details) => {
  const header = document.querySelector(".proj-header");
  header.textContent = `${title}`;
  const addedProjs = document.querySelector(".added-projs");
  const newProj = document.createElement("button");
  newProj.textContent = `${title}`;
  addedProjs.appendChild(newProj);
  const search = document.querySelector(".search");
  const children = search.children;
  for (let i=0; i < children.length; i++) {
    let child = children[i];
    if (!(child.style.display === "none")) child.style.display = "none";
  }
  const div = document.createElement("div");
  const newName = new String(title);
  const className = newName.replace(/\s+/g, '-').toLowerCase();
  div.classList.add(`${className}-div`);
  search.appendChild(div);
  const det = document.createElement("button");
  det.textContent = "Details";
  det.addEventListener("click", () => {
    const popup = document.querySelector(".pop-up-details");
    const info = document.getElementById("pop-details");
    info.textContent = `Details: ${details}`;
    const title = document.getElementById("pop-title");
    const duedate = document.getElementById("pop-due");
    title.textContent = "";
    duedate.textContent = "";
    popup.style.display = "grid";
    const popupTD = document.querySelector(".pop-up-td");
    popupTD.style.display = "none";
    const popupProj = document.querySelector(".pop-up-proj");
    popupProj.style.display = "none";
    const popupNote = document.querySelector(".pop-up-note");
    popupNote.style.display = "none";
    const popupSelect = document.querySelector(".pop-up-select");
    popupSelect.style.display = "none";
  })
  div.appendChild(det);
  newProj.addEventListener("click", () => {
    const search = document.querySelector(".search");
    const children = search.children;
    for (let i=0; i < children.length; i++) {
      let child = children[i];
      if (!(child.style.display === "none")) child.style.display = "none";
      if (child.classList.contains(`${className}-div`)) {
        child.style.display = "block";
        header.textContent = `${title}`;
      }
    }
  })
}


export const createNote = (name, details) => {
  const noteDiv = document.querySelector(".notes-div");
  const note = document.createElement("div");
  note.classList.add("added-note");
  const noteName = document.createElement("p");
  noteName.textContent = name;
  note.appendChild(noteName)
  const noteDetails = document.createElement("p");
  noteDetails.textContent = details;
  note.appendChild(noteDetails);
  noteDiv.appendChild(note);
}


// Drafts:
  
const draftTD = (name, details, duedate) => {
//  currentProj.todos.push(new TD(name, details, duedate));
  createTD(name, details, duedate);
}
  
class Proj {
  constructor (name, details) {
    this.name = name;
    this.details = details;
  }
  todos = [];
  UL = document.createElement("ul");
}

//const createProj = (name, details) => {
  //new Proj(name, details);
//}