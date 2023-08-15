
import trash from '../images/trash.svg';
import currentProject from '../index.js';
import edit from '../images/edit.svg';
import save from '../images/save.svg';

export let currentTD;

export let TDs = [];

export class TD {
  constructor (name, details, duedate, priority, id, project, checked) {
    this.name = name;
    this.details = details;
    this.duedate = duedate;
    this.priority = priority;
    this.id = id;
    this.project = project;
    this.checked = checked;
    this.class = "";
  }
}

export let projs = [];

export class Proj {
  constructor (name, details) {
    this.name = name;
    this.details = details;
  }
}

export let notes = [];

export class Note {
  constructor (name, details) {
    this.name = name;
    this.details = details;
  }
}

export const pageLoad = () => {

  let allProjs = JSON.parse(localStorage.getItem("allProjs"));
  if (allProjs === null) {
    return;
  } else {
    projs = allProjs;
    allProjs.forEach((proj) => {
    displayProj(proj.name, proj.details);
  })
  }

  let allTDs = JSON.parse(localStorage.getItem("allTDs"));
  if (allTDs === null) {
    return;
  } else {
    TDs = allTDs;
    TDs.forEach((todo) => {
    displayTD(todo.name, todo.details, todo.duedate, todo.priority, todo.id, todo.project);
    if (todo.checked === "checked") toggleChecked(todo.name);
  })
  }
  
  let allNotes = JSON.parse(localStorage.getItem("allNotes"));
  if (allNotes === null) {
    return;
  } else {
    notes = allNotes;
    allNotes.forEach((note) => {
    displayNote(note.name, note.details);
  })
  }
  
}

export const displayTD = (name, details, duedate, priority, id, project) => {
  const li = document.createElement("li");
  const td = document.createElement("div");
  td.classList.add("td-li");
  li.appendChild(td);
  let tdName = document.createElement("p");
  tdName.textContent = name;
  tdName.classList.add("td-name");
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
    toggleChecked(name);
    TDs.forEach((item) => {
      if (item.name === name) {
        if (item.class = "item") return;
        else if (item.checked === "unchecked") { 
          item.checked = "checked";
          item.class = "item";
        }
        else if (item.checked === "checked") {
          item.checked = "unchecked";
          item.class = "item";
        }
        else console.log("error");
      }
    })
    TDs.forEach((item) => item.class = "");
    localStorage.setItem("allTDs", JSON.stringify(TDs));
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
  let tdDue = document.createElement("p");
  tdDue.textContent = duedate;
  tdDue.classList.add("tdDue")
  td.appendChild(tdDue);

  const editTD = document.createElement("img");
editTD.src = edit;
editTD.setAttribute("height", "20px");
editTD.addEventListener("click", () => createEditTD(id));
td.appendChild(editTD);

  const tdTrash = document.createElement("img");
  tdTrash.src = trash;
  tdTrash.setAttribute("height", "20px");
  tdTrash.addEventListener("click", () => {
    li.remove();
    let i = 0;
    for (const item of TDs) {
      if (item.name === name) TDs.splice(i, 1);
      i++;
    }
    localStorage.setItem("allTDs", JSON.stringify(TDs));
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

  const current = document.querySelector(`.${project}`);
  current.appendChild(li);

  // const search = document.querySelector(".search");
  // const children = search.children;
  // for (let i=0; i < children.length; i++) {
  //   let child = children[i];
  //   if (!(child.style.display === "none")) {
  //     if (child.classList.contains("notes-div")) {
  //       continue;
  //     } else {
  //       child.appendChild(li);
  //     }
  //   }
  // }
  if (!(project === "home-div")) {
    const homeDiv = document.querySelector(".home-div");
    const liHome = li.cloneNode(true);
    liHome.classList.add("li-home")
    homeDiv.appendChild(liHome);
    const checkboxes = document.querySelectorAll(".li-home .container .checkmark");
    const thisCheck = checkboxes[checkboxes.length - 1];
    const homePs = document.querySelectorAll(".li-home p");
    const thisP = homePs[homePs.length - 2];
    thisCheck.addEventListener("click", () => {
      toggleChecked(name);
      TDs.forEach((item) => {
        if (item.name === name) {
          if (item.class = "item") return;
          else if (item.checked === "unchecked") { 
            item.checked = "checked";
            item.class = "item";
          }
          else if (item.checked === "checked") {
            item.checked = "unchecked";
            item.class = "item";
          }
          else console.log("error");
        }
      })
      TDs.forEach((item) => item.class = "");
      localStorage.setItem("allTDs", JSON.stringify(TDs));
    });
    const detBtns = document.querySelectorAll(".li-home button");
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
    const editTD = images[images.length - 2];
    editTD.addEventListener("click", () => createEditTD(id));
    
    const thisImg = images[images.length - 1];
    thisImg.addEventListener("click", () => {
      const homePs = document.querySelectorAll(".li-home p");
      const thisP = homePs[homePs.length - 2];
      const allItems = document.querySelectorAll("li");
        for (const item of allItems) {
          item.classList.add("temp");
          const tempP = document.querySelector(".temp p");
          if (tempP.textContent === thisP.textContent) {
            item.remove();
          }
          let i = 0;
            for (const object of TDs) {
            if (object.name == thisP.textContent) TDs.splice(i, 1);
            i++;
            }
          item.classList.remove("temp");
        }
      liHome.remove();
      localStorage.setItem("allTDs", JSON.stringify(TDs));
    })
  }
  localStorage.setItem("allTDs", JSON.stringify(TDs));
}

const toggleChecked = (name) => {
    const allItems = document.querySelectorAll("li");
    for (const item of allItems) {
        item.classList.add("temp");
        const tempPs = document.querySelectorAll(".temp p");
        for (const p of tempPs) {
          if (p.textContent === `${name}`) {
            if (p.classList.contains("tempitem")) return;
            else if (p.classList.contains("checked")) {
              p.classList.add("tempitem")
              p.classList.remove("checked");
              const tempCheck = document.querySelector(".temp .container .checkmark");
              tempCheck.classList.remove("checked");
              TDs.forEach((item) => {
                if (item.name === name) item.checked = "unchecked"
              });
            } else if (!(p.classList.contains("checked"))) {
              p.classList.add("tempitem");
              p.classList.add("checked");
              const tempCheck = document.querySelector(".temp .container .checkmark");
              tempCheck.classList.add("checked");
              TDs.forEach((item) => {
                if (item.name === name) item.checked = "checked"
              });
            } else console.log("error2");
        }
        for (const p of tempPs) p.classList.remove("tempitem");
      }
      item.classList.remove("temp");
    }
  }


const createEditTD = (id) => {
  let i = 0;
  for (const item of TDs) {
    if (item.id === id) {
      console.log(item);
      currentTD = item;
    }
    i++;
  }
  const content = document.querySelector(".content");
    const popupEdit = document.createElement("div");
    popupEdit.classList.add("pop-up-edit-td");
    content.appendChild(popupEdit);
    const pHead = document.createElement("div");
    pHead.classList.add("p-head");
    popupEdit.appendChild(pHead);
    const h2 = document.createElement("h2");
    h2.textContent = "Edit To-Do";
    pHead.appendChild(h2);
    const close = document.createElement("span");
    close.classList.add("close-edit-td");
    close.textContent = "X";
    close.addEventListener("click", () => popupEdit.remove());
    pHead.appendChild(close);
    const edTitle = document.createElement("input");
    edTitle.setAttribute("type", "text");
    edTitle.setAttribute("id", "ed-title-td");
    edTitle.value = currentTD.name;
    edTitle.setAttribute("maxlength", "45");
    edTitle.setAttribute("required", true);
    popupEdit.appendChild(edTitle);
    const edDetails = document.createElement("textarea");
    edDetails.setAttribute("id", "ed-details-td");
    edDetails.textContent = currentTD.details;
    popupEdit.appendChild(edDetails);
    const edDue = document.createElement("div");
    edDue.classList.add("due");
    popupEdit.appendChild(edDue);
    const p = document.createElement("p");
    p.textContent = "Due date: ";
    edDue.appendChild(p);
    const edDate = document.createElement("input");
    edDate.setAttribute("type", "date");
    edDate.setAttribute("id", "ed-duedate");
    edDate.value = currentTD.duedate;
    edDate.setAttribute("required", true);
    edDue.appendChild(edDate);
    const footer = document.createElement("div");
    footer.classList.add("footer");
    popupEdit.appendChild(footer);
    const edPriority = document.createElement("div");
    edPriority.classList.add("priority");
    footer.appendChild(edPriority);
    const p2 = document.createElement("p");
    p2.textContent = "Priority: ";
    edPriority.appendChild(p2);
    const edLow = document.createElement("button");
    edLow.textContent = "Low";
    edLow.setAttribute("type", "button");
    edLow.classList.add("ed-low");
    edLow.classList.add("ed-selected");
    edPriority.appendChild(edLow);
    const edMed = document.createElement("button");
    edMed.textContent = "Medium";
    edMed.setAttribute("type", "button");
    edMed.classList.add("ed-medium");
    edPriority.appendChild(edMed);
    const edHigh = document.createElement("button");
    edHigh.textContent = "High";
    edHigh.setAttribute("type", "button");
    edHigh.classList.add("ed-high");
    edPriority.appendChild(edHigh);
    edLow.addEventListener("click", () => {
      edLow.classList.add("ed-selected");
      edMed.classList.remove("ed-selected");
      edHigh.classList.remove("ed-selected");
    })
    
    edMed.addEventListener("click", () => {
        edMed.classList.add("ed-selected");
        edLow.classList.remove("ed-selected");
        edHigh.classList.remove("ed-selected");
      })
    
      edHigh.addEventListener("click", () => {
        edHigh.classList.add("ed-selected");
        edMed.classList.remove("ed-selected");
        edLow.classList.remove("ed-selected");
      })
    const submit = document.createElement("button");
    submit.classList.add("edit-td");
    submit.textContent = "Save to-do";
    footer.appendChild(submit);
    
    submit.addEventListener("click", (e) => {
        let newName = edTitle.value;
        let newDetails = edDetails.value;
        let newDuedate = edDate.value;
        const edSelected = document.querySelector(".ed-selected");
        let newPriority = edSelected.textContent;
        const newId = Math.random().toString(16).slice(2);
        let i = 0;
        for (const item of TDs) {
          if (item.id === id) {
            console.log(item);
            item.name = newName;
            item.details = newDetails;
            item.duedate = newDuedate;
            item.priority = newPriority;
            item.id = newId;
          }
          i++;
        }
        localStorage.setItem("allTDs", JSON.stringify(TDs));
        console.log(TDs);
        popupEdit.remove();
        location.reload();
      })
    
}


export const displayProj = (title, details) => {
  const addedProjs = document.querySelector(".added-projs");
  const newProj = document.createElement("button");
  newProj.textContent = `${title}`;
  newProj.classList.add("proj-btn");
  newProj.classList.add("nav-btn");
  const newNavProj = document.createElement("button");
  newNavProj.classList.add("nav-proj-btn");
  newNavProj.classList.add("nav-btn");
  newNavProj.textContent = `${title}`;
  const navBtns = document.querySelectorAll(".nav-btn");
  for (const btn of navBtns) btn.classList.remove("active");
  newProj.classList.add("active");
  newNavProj.classList.add("active");
  addedProjs.appendChild(newProj);
  const addedNavProjs = document.querySelector(".nav-added-projs");
  addedNavProjs.appendChild(newNavProj);
  const search = document.querySelector(".search");
  const children = search.children;
  for (let i=0; i < children.length; i++) {
    let child = children[i];
    if (!(child.style.display === "none")) child.style.display = "none";
  }
  const rColHeader = document.querySelector(".r-col-header");
  rColHeader.textContent = `${title}`;
  const newDiv = document.createElement("div");
  const newName = new String(title);
  const newName2 = newName.replace(/\s+/g, '-').toLowerCase();
  const className = newName2.replace(/'/,'');
  newDiv.classList.add(`${className}-div`);
  currentProject = `${className}-div`;
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
    let i = 0;
    for (const item of projs) {
      if (item.name === title) projs.splice(i, 1);
      i++;
    }
    localStorage.setItem("allProjs", JSON.stringify(projs));
    const projLIs = document.querySelectorAll(`.${className}-div li`);
    const homeLIs = document.querySelectorAll(".li-home");
        for (const chosen of homeLIs) {
          chosen.classList.add("current");
          const homePs = document.querySelectorAll(".current p");
          for (const nextP of homePs) {
            for (const projItem of projLIs) {
              projItem.classList.add("p-item");
              const projPs = document.querySelectorAll(".p-item p");
              for (const item of projPs) {
                if (nextP.textContent === item.textContent) {
                  chosen.remove();
                  i = 0;
                  for (const item of TDs) {
                    if (nextP.textContent === item.name)  TDs.splice(i, 1);
                    i++;
                  }
                } 
              }
              projItem.classList.remove("p-item");
            }
          }
          chosen.classList.remove("current");
        }
        localStorage.setItem("allTDs", JSON.stringify(TDs));
    newDiv.remove();
    const homeDiv = document.querySelector(".home-div");
    homeDiv.style.display = "block";
    const header = document.querySelector(".r-col-header");
    header.textContent = "Home";
    const home = document.querySelector(".home");
    home.classList.add("active");
    const navHome = document.querySelector(".nav-home");
    navHome.classList.add("active");
    newProj.remove();
    newNavProj.remove();
  })
  buttons.appendChild(projTrash);
  buttons.style.marginBottom = "15px";
  newProj.addEventListener("click", () => {
    const search = document.querySelector(".search");
    const children = search.children;
    for (let i=0; i < children.length; i++) {
      let child = children[i];
      if (!(child.style.display === "none")) child.style.display = "none";
      if (child.classList.contains(`${className}-div`)) {
        child.style.display = "block";
        rColHeader.textContent = `${title}`;
      }
      const navBtns = document.querySelectorAll(".nav-btn");
      for (const btn of navBtns) btn.classList.remove("active");
      newProj.classList.add("active");
      newNavProj.classList.add("active");
    }
  })
  newNavProj.addEventListener("click", () => {
    const search = document.querySelector(".search");
    const children = search.children;
    for (let i=0; i < children.length; i++) {
      let child = children[i];
      if (!(child.style.display === "none")) child.style.display = "none";
      if (child.classList.contains(`${className}-div`)) {
        child.style.display = "block";
        rColHeader.textContent = `${title}`;
      }
      const navBtns = document.querySelectorAll(".nav-btn");
      for (const btn of navBtns) btn.classList.remove("active");
      newNavProj.classList.add("active");
      newProj.classList.add("active");
    }
  })
  localStorage.setItem("allProjs", JSON.stringify(projs));
}

let n = 1;

export const displayNote = (name, details) => {
  const noteDiv = document.querySelector(".notes-div");
  const note = document.createElement("div");
  note.classList.add("added-note");
  note.style.order = `-${n}`;
  n++;
  const noteHeader = document.createElement("div");
  note.appendChild(noteHeader);
  noteHeader.classList.add("note-header");
  let noteName = document.createElement("p");
  noteName.textContent = name;
  noteName.style.fontWeight = "bold";
  noteName.style.marginRight = "auto";
  noteHeader.appendChild(noteName);
  
  let noteDetails = document.createElement("p");
  noteDetails.innerHTML = details;
  note.appendChild(noteDetails);
  noteDiv.appendChild(note);
  const saveNote = document.createElement("img");
  saveNote.src = save;
  saveNote.classList.add("save-note");
  saveNote.style.paddingTop = "10px";
  saveNote.setAttribute("height", "24px");
  saveNote.style.display = "none";
  noteHeader.appendChild(saveNote);
  const editNote = document.createElement("img");
  editNote.src = edit;
  editNote.classList.add("edit-note");
  editNote.style.paddingTop = "10px";
  editNote.setAttribute("height", "24px");
  noteHeader.appendChild(editNote);
  saveNote.addEventListener("click", (e) => {
      noteName.innerHTML = `${noteName.innerHTML}`;
      noteDetails.innerHTML = `${noteDetails.innerHTML}`;
      let i = 0;
      for (const item of notes) {
         if (item.name === name) {
          item.name = noteName.innerHTML;
          item.details = noteDetails.innerHTML;
         }
         i++;
       }
      localStorage.setItem("allNotes", JSON.stringify(notes));
      noteName.contentEditable = "false";
      noteDetails.contentEditable = "false";
      saveNote.style.display = "none";
      editNote.style.display = "flex";
  })
  editNote.addEventListener("click", (e) => {
    noteName.contentEditable = !noteName.isContentEditable;
    noteDetails.contentEditable = !noteDetails.isContentEditable;
    editNote.style.display = "none";
    saveNote.style.display = "flex";
  })
  const deleteNote = document.createElement("img");
  deleteNote.src = trash;
  deleteNote.classList.add("delete-note");
  deleteNote.style.paddingTop = "10px";
  deleteNote.setAttribute("height", "24px");
  deleteNote.addEventListener("click", () => {
    note.remove();
    let i = 0;
    for (const item of notes) {
      if (item.name === name) notes.splice(i, 1);
      i++;
    }
    localStorage.setItem("allNotes", JSON.stringify(notes));
  })
  noteHeader.appendChild(deleteNote);
  localStorage.setItem("allNotes", JSON.stringify(notes));
}



