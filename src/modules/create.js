
import trash from '../images/trash.svg';

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
  const tdTrash = document.createElement("img");
  tdTrash.src = trash;
  tdTrash.setAttribute("height", "20px");
  tdTrash.addEventListener("click", () => {
    li.remove();
    const homeLIs = document.querySelectorAll(".li-home");
        for (const chosen of homeLIs) {
          chosen.classList.add("current");
          const homePs = document.querySelectorAll(".current p");
          for (const item of homePs) {
            if (item.textContent === name) chosen.remove();
          }
          chosen.classList.remove("current");
        }
  })
  td.appendChild(tdTrash);
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
    liHome.classList.add("li-home")
    homeDiv.appendChild(liHome);
    const detBtns = document.querySelectorAll(".li-home button");
    console.log(detBtns);
    const thisBtn = detBtns[detBtns.length - 1];
    thisBtn.classList.add("chosen");
    thisBtn.addEventListener("click", () => {
      const popup = document.querySelector(".pop-up-details");
      const title = document.getElementById("pop-title");
      title.textContent = `Title: ${name}`;
      const due = document.getElementById("pop-due");
      due.textContent = `Due date: ${duedate}`;
      const info = document.getElementById("pop-details");
      info.textContent = `Details: ${details}`;
      const selected = document.querySelector(".selected");
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
    const images = document.querySelectorAll(".li-home img");
    const thisImg = images[images.length - 1];
    thisImg.addEventListener("click", () => {
      const homePs = document.querySelectorAll(".li-home p");
      const thisP = homePs[homePs.length - 2];
      console.log(thisP);
      const allItems = document.querySelectorAll("li");
        for (const item of allItems) {
          item.classList.add("temp");
          const tempP = document.querySelector(".temp p");
          if (tempP.textContent === thisP.textContent) item.remove();
          item.classList.remove("temp");
        }
      liHome.remove();
    })
  }
}

export const createProj = (title, details) => {
  const header = document.querySelector(".proj-header");
  header.textContent = `${title}`;
  const addedProjs = document.querySelector(".added-projs");
  const newProj = document.createElement("button");
  newProj.textContent = `${title}`;
  newProj.classList.add("proj-btn");
  addedProjs.appendChild(newProj);
  const search = document.querySelector(".search");
  const children = search.children;
  for (let i=0; i < children.length; i++) {
    let child = children[i];
    if (!(child.style.display === "none")) child.style.display = "none";
  }
  const newDiv = document.createElement("div");
  const newName = new String(title);
  const className = newName.replace(/\s+/g, '-').toLowerCase();
  newDiv.classList.add(`${className}-div`);
  search.appendChild(newDiv);
  const det = document.createElement("button");
  det.textContent = "Details";
  det.classList.add("proj-det");
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
  const buttons = document.createElement("div");
  newDiv.appendChild(buttons);
  buttons.appendChild(det);
  const projTrash = document.createElement("img");
  projTrash.src = trash;
  projTrash.setAttribute("height", "20px");
  projTrash.addEventListener("click", () => {
    const projLIs = document.querySelectorAll(`.${className}-div li`);
    console.log(projLIs);
    const homeLIs = document.querySelectorAll(".li-home");
        for (const chosen of homeLIs) {
          chosen.classList.add("current");
          const homePs = document.querySelectorAll(".current p");
          for (const nextP of homePs) {
            for (const projItem of projLIs) {
              projItem.classList.add("p-item");
              const projPs = document.querySelectorAll(".p-item p");
              for (const item of projPs) {
                if (nextP.textContent === item.textContent) chosen.remove();
              }
              projItem.classList.remove("p-item");
            }
          }
          chosen.classList.remove("current");
        }
    newDiv.remove();
    header.textContent = "Home";
    const home = document.querySelector(".home-div");
    home.style.display = "block";
    newProj.remove();
  })
  buttons.appendChild(projTrash);
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