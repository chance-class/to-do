
import trash from '../images/trash.svg';

export const createTD = (name, details, duedate, priority) => {
  const li = document.createElement("li");
  const td = document.createElement("div");
  td.classList.add("td-li");
  li.appendChild(td);
  const tdName = document.createElement("p");
  tdName.textContent = name;
  const container = document.createElement("div");
  container.classList.add("container");
  const check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  container.appendChild(check);
  const checkmark = document.createElement("span");
  checkmark.classList.add("checkmark");
  container.appendChild(checkmark);
  td.appendChild(container);
  checkmark.addEventListener("click", () => {
    const allPs = document.querySelector(".td-li p");
    const allItems = document.querySelectorAll("li");
        for (const item of allItems) {
            item.classList.add("temp");
            const tempPs = document.querySelectorAll(".temp p");
            for (const p of tempPs) {
              if (p.textContent === tdName.textContent) {
                p.classList.toggle("checked");
                const tempCheck = document.querySelector(".temp .container .checkmark");
                tempCheck.classList.toggle("checked");
            }
          }
          item.classList.remove("temp");
        }
      });
  td.appendChild(tdName);
  const det = document.createElement("button");
  det.textContent = "Details";
  det.classList.add("li-details");
  det.addEventListener("click", () => {
    const popup = document.querySelector(".pop-up-details");
    const title = document.getElementById("pop-title");
    title.style.display = "block";
    title.textContent = `${name}`;
    const due = document.getElementById("pop-due");
    due.style.display = "block";
    due.textContent = `Due date: ${duedate}`;
    const info = document.getElementById("pop-details");
    info.textContent = `Details: ${details}`;
    const tdPriority = document.getElementById("priority");
    tdPriority.style.display = "block";
    tdPriority.textContent = `Priority: ${priority}`;
    popup.style.display = "flex";
    const popupTD = document.querySelector(".pop-up-td");
    popupTD.style.display = "none";
    const popupProj = document.querySelector(".pop-up-proj");
    popupProj.style.display = "none";
    const popupNote = document.querySelector(".pop-up-note");
    popupNote.style.display = "none";
    const popupSelect = document.querySelector(".pop-up-select");
    popupSelect.style.display = "none";
  })
  if (priority === "Low") li.classList.add("low-prio");
  else if (priority === "Medium") li.classList.add("med-prio");
  else if (priority === "High") li.classList.add("high-prio");
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
    if (!(child.style.display === "none")) {
      if (child.classList.contains("notes-div")) {
        continue;
      } else {
        child.appendChild(li);
      }
    }
  }
  const homeDiv = document.querySelector(".home-div");
  if (homeDiv.style.display === "none") {
    const homeDiv = document.querySelector(".home-div");
    const liHome = li.cloneNode(true);
    liHome.classList.add("li-home")
    homeDiv.appendChild(liHome);
    const checkboxes = document.querySelectorAll(".li-home .container .checkmark");
    const thisCheck = checkboxes[checkboxes.length - 1];
    const homePs = document.querySelectorAll(".li-home p");
    const thisP = homePs[homePs.length - 2];
    thisCheck.addEventListener("click", () => {
        const allPs = document.querySelector(".td-li p");
        const allItems = document.querySelectorAll("li");
            for (const item of allItems) {
                item.classList.add("temp");
                const tempPs = document.querySelectorAll(".temp p");
                for (const p of tempPs) {
                  if (p.textContent === thisP.textContent) {
                    p.classList.toggle("checked");
                    const tempCheck = document.querySelector(".temp .container .checkmark");
                    tempCheck.classList.toggle("checked");
                }
              }
              item.classList.remove("temp");
            }
          });
    const detBtns = document.querySelectorAll(".li-home button");
    console.log(detBtns);
    const thisBtn = detBtns[detBtns.length - 1];
    thisBtn.classList.add("chosen");
    thisBtn.addEventListener("click", () => {
      const popup = document.querySelector(".pop-up-details");
      const title = document.getElementById("pop-title");
      title.style.display = "block";
      title.textContent = `${name}`;
      const due = document.getElementById("pop-due");
      due.style.display = "block";
      due.textContent = `Due date: ${duedate}`;
      const info = document.getElementById("pop-details");
      info.textContent = `Details: ${details}`;
      const selected = document.querySelector(".selected");
      const tdPriority = document.getElementById("priority");
      tdPriority.textContent = `Priority: ${priority}`;
      tdPriority.style.display = "block";
      popup.style.display = "flex";
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
  const addedProjs = document.querySelector(".added-projs");
  const newProj = document.createElement("button");
  newProj.textContent = `${title}`;
  newProj.classList.add("proj-btn");
  newProj.classList.add("nav-btn");
  const navBtns = document.querySelectorAll(".nav-btn");
  for (const btn of navBtns) btn.classList.remove("active");
  newProj.classList.add("active");
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
    info.textContent = `${details}`;
    const projTitle = document.getElementById("pop-title");
    const duedate = document.getElementById("pop-due");
    const priority = document.getElementById("priority");
    priority.textContent = "";
    priority.style.display = "none";
    projTitle.textContent = `${title}`;
   // projTitle.style.display = "none";
    duedate.textContent = "";
    duedate.style.display = "none";
    popup.style.display = "flex";
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
  buttons.classList.add("proj-btns");
  newDiv.appendChild(buttons);
  buttons.appendChild(det);
  const projTrash = document.createElement("img");
  projTrash.src = trash;
  projTrash.setAttribute("height", "30px");
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
      }
      const navBtns = document.querySelectorAll(".nav-btn");
      for (const btn of navBtns) btn.classList.remove("active");
      newProj.classList.add("active");
    }
  })
}

let n = 1;

export const createNote = (name, details) => {
  const noteDiv = document.querySelector(".notes-div");
  const note = document.createElement("div");
  note.classList.add("added-note");
  note.style.order = `-${n}`;
  n++;
  const noteHeader = document.createElement("div");
  note.appendChild(noteHeader);
  noteHeader.classList.add("note-header");
  const noteName = document.createElement("p");
  noteName.textContent = name;
  noteName.style.fontWeight = "bold";
  noteHeader.appendChild(noteName);
  
  const noteDetails = document.createElement("p");
  noteDetails.textContent = details;
  note.appendChild(noteDetails);
  noteDiv.appendChild(note);
  const notePopup = note.cloneNode(true);
  notePopup.classList.add("pop-up-added-note");
  const x = document.createElement("span");
  x.classList.add("close");
  x.textContent = "X";
  x.style.paddingTop = "12px";
  x.addEventListener("click", () => notePopup.style.display = "none");
  const children = notePopup.children;
  for (const child of children) {
    if (child.classList.contains("note-header")) child.appendChild(x);
  }
  notePopup.style.height = "auto";
  notePopup.style.width = "400px";
  notePopup.style.display = "none";
  const content = document.querySelector(".content");
  content.appendChild(notePopup);
  const images = document.querySelectorAll(".pop-up-added-note img");
  for (const image of images) {
    image.remove();
  }
  note.addEventListener("click", () => notePopup.style.display = "block");
  const deleteNote = document.createElement("img");
  deleteNote.src = trash;
  deleteNote.style.paddingTop = "10px";
  deleteNote.setAttribute("height", "20px");
  deleteNote.addEventListener("click", () => {
    notePopup.remove();
    note.remove();
  });
  noteHeader.appendChild(deleteNote);
  const allBtns = document.querySelectorAll("button");
  for (const btn of allBtns) {
    document.addEventListener("click", (e) => {
      if (btn.contains(e.target)) notePopup.style.display = "none";
    })
  }
  
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