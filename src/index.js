import './style.css';
import { createTD, createProj, createNote } from './modules/create.js';
import list from './images/white-list.png';
import menu from './images/menu.png';
import addImg from './images/add.png';
import addRose from './images/add-rose.png';

createTD("Call Jake", "Give Jake a call back soon", "2023-07-29", "Low");
createTD("Go to HEB", "Need to buy dog food for next week", "2023-07-30", "Medium");
createNote("Lalala", "This &#013;&#010;is &#013;&#010;the &#013;&#010;song &#013;&#010;that &#013;&#010;never &#013;&#010;ends &#013;&#010;and &#013;&#010;it &#013;&#010;goes &#013;&#010;on &#013;&#010;and &#013;&#010;on &#013;&#010;my &#013;&#010;friends");
createNote("Editable text", "To edit your note, all you need to do is &#013;&#010;click &#013;&#010;inside &#013;&#010;the &#013;&#010;note &#013;&#010;and you can edit directly");
createNote("Columns", "Content &#013;&#010;arranged &#013;&#010;into &#013;&#010;columns &#013;&#010;that scroll horizontally");
createNote("New note goes first", "Each new note is added in front of the previous note, allowing you to keep tabs on what is most recent");

createProj("Finances", "Pay rent, bills, etc.");
document.querySelector(".home-div").style.display = "none";
document.querySelector(".finances-div").style.display = "block";
createTD("Pay rent", "Due on the 15th", "2023-08-15", "High");
document.querySelector(".proj-btn").classList.remove("active");
document.querySelector(".nav-proj-btn").classList.remove("active");
document.querySelector(".finances-div").style.display = "none";
document.querySelector(".home-div").style.display = "block";
document.querySelector(".r-col-header").textContent = "Home";

const add = document.querySelector(".add-btn");
const popupSelect = document.querySelector(".pop-up-select");
const popupTD = document.querySelector(".pop-up-td");
const popupProj = document.querySelector(".pop-up-proj");
const popupNote = document.querySelector(".pop-up-note");
const popupDetails = document.querySelector(".pop-up-details");
const home = document.querySelector(".home");
const navHome = document.querySelector(".nav-home");
home.classList.add("active");
navHome.classList.add("active");
const rColHeader = document.querySelector(".r-col-header");
const notes = document.querySelector(".notes");
const navNotes = document.querySelector(".nav-notes");
const low = document.querySelector(".low");
const medium = document.querySelector(".medium");
const high = document.querySelector(".high");
const h1 = document.querySelector("h1");

const headerIcon = document.createElement("img");
headerIcon.src = list;
headerIcon.classList.add("header-icon");
h1.appendChild(headerIcon);

const addIconMain = document.createElement("img");
addIconMain.src = addRose;
add.appendChild(addIconMain);

const addIcon = document.createElement("img");
addIcon.src = addImg;
addIcon.classList.add("nav-add");
addIcon.classList.add("nav-btn");
const header = document.querySelector(".header");
const navbar = document.querySelector(".navbar");
header.insertBefore(addIcon, navbar);

const dropBtn = document.querySelector(".drop-btn");
const menuImg = document.createElement("img");
menuImg.src = menu;
dropBtn.appendChild(menuImg);

const closeTd = document.querySelector(".close-td");
closeTd.addEventListener("click", () => popupTD.style.display = "none");

const closeProj = document.querySelector(".close-proj");
closeProj.addEventListener("click", () => popupProj.style.display = "none");

const closeNote = document.querySelector(".close-note");
closeNote.addEventListener("click", () => popupNote.style.display = "none");

document.addEventListener("click", (e) => {
  if (!(add.contains(e.target)) && !(addIcon.contains(e.target)) && !(popupSelect.contains(e.target))) popupSelect.style.display = "none";
});

add.addEventListener("click", () => {
  popupSelect.style.display = "grid";
  popupProj.style.display = "none";
  popupNote.style.display = "none";
  popupTD.style.display = "none";
  popupDetails.style.display = "none";
})
addIcon.addEventListener("click", () => {
    popupSelect.style.display = "grid";
    popupProj.style.display = "none";
    popupNote.style.display = "none";
    popupTD.style.display = "none";
    popupDetails.style.display = "none";
  })
const newTD = document.querySelector(".new-td");
newTD.addEventListener("click", () => {
  popupTD.style.display = "grid";
  popupSelect.style.display = "none";
  popupProj.style.display = "none";
  popupNote.style.display = "none";
  popupDetails.style.display = "none";
})
const newProj = document.querySelector(".new-proj");
newProj.addEventListener("click", () => {
  popupProj.style.display = "grid";
  popupSelect.style.display = "none";
  popupNote.style.display = "none";
  popupTD.style.display = "none";
  popupDetails.style.display = "none";
})
const newNote = document.querySelector(".new-note");
newNote.addEventListener("click", () => {
  popupNote.style.display = "grid";
  popupSelect.style.display = "none";
  popupTD.style.display = "none";
  popupProj.style.display = "none";
  popupDetails.style.display = "none";
})

const tdForm = document.querySelector("#addTD");
tdForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title-td").value;
  const details = document.getElementById("details-td").value;
  const duedate = document.getElementById("duedate").value;
  const selected = document.querySelector(".selected");
  const priority = selected.textContent;
  createTD(title, details, duedate, priority);
  popupTD.style.display = "none";
  let allInputs = document.querySelectorAll('.input');
  allInputs.forEach(singleInput => singleInput.value = '');
})

const closeBtn = document.getElementById("close-details");
closeBtn.addEventListener("click", () => popupDetails.style.display = "none")

const projForm = document.querySelector("#addProj");
projForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title-proj").value;
  const details = document.getElementById("details-proj").value;
  createProj(title, details);
  popupProj.style.display = "none";
  let allInputs = document.querySelectorAll('.input');
  allInputs.forEach(singleInput => singleInput.value = '');
})

const noteForm = document.querySelector("#addNote");
noteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title-note").value;
  const details = document.getElementById("details-note").value;
  createNote(title, details);
  popupNote.style.display = "none";
  let allInputs = document.querySelectorAll('.input');
  allInputs.forEach(singleInput => singleInput.value = '');
  const search = document.querySelector(".search");
    const children = search.children;
    for (let i=0; i < children.length; i++) {
      let child = children[i];
      if (!(child.style.display === "none")) child.style.display = "none";
    }
  const notesDiv = document.querySelector(".notes-div");
  notesDiv.style.display = "flex";
  rColHeader.textContent = "Notes";
  const navBtns = document.querySelectorAll(".nav-btn");
      for (const btn of navBtns) btn.classList.remove("active");
      notes.classList.add("active");
})

home.addEventListener("click", () => {
  const search = document.querySelector(".search");
  const children = search.children;
  for (let i=0; i < children.length; i++) {
    let child = children[i];
    if (!(child.style.display === "none")) child.style.display = "none";
  }
  const homeDiv = document.querySelector(".home-div");
  homeDiv.style.display = "block";
  rColHeader.textContent = "Home";
  const navBtns = document.querySelectorAll(".nav-btn");
      for (const btn of navBtns) btn.classList.remove("active");
      home.classList.add("active");
      navHome.classList.add("active");
})

navHome.addEventListener("click", () => {
    const search = document.querySelector(".search");
    const children = search.children;
    for (let i=0; i < children.length; i++) {
      let child = children[i];
      if (!(child.style.display === "none")) child.style.display = "none";
    }
    const homeDiv = document.querySelector(".home-div");
    homeDiv.style.display = "block";
    rColHeader.textContent = "Home";
    const navBtns = document.querySelectorAll(".nav-btn");
        for (const btn of navBtns) btn.classList.remove("active");
        navHome.classList.add("active");
        home.classList.add("active");
        
  })

notes.addEventListener("click", () => {
    const search = document.querySelector(".search");
    const children = search.children;
    for (let i=0; i < children.length; i++) {
      let child = children[i];
      if (!(child.style.display === "none")) child.style.display = "none";
    }
  const notesDiv = document.querySelector(".notes-div");
  notesDiv.style.display = "flex";
  rColHeader.textContent = "Notes";
  const navBtns = document.querySelectorAll(".nav-btn");
      for (const btn of navBtns) btn.classList.remove("active");
      notes.classList.add("active");
      navNotes.classList.add("active");
})

navNotes.addEventListener("click", () => {
    const search = document.querySelector(".search");
    const children = search.children;
    for (let i=0; i < children.length; i++) {
      let child = children[i];
      if (!(child.style.display === "none")) child.style.display = "none";
    }
  const notesDiv = document.querySelector(".notes-div");
  notesDiv.style.display = "flex";
  rColHeader.textContent = "Notes";
  const navBtns = document.querySelectorAll(".nav-btn");
      for (const btn of navBtns) btn.classList.remove("active");
      navNotes.classList.add("active");
      notes.classList.add("active");
})

low.addEventListener("click", () => {
  low.classList.add("selected");
  medium.classList.remove("selected");
  high.classList.remove("selected");
})

medium.addEventListener("click", () => {
    medium.classList.add("selected");
    low.classList.remove("selected");
    high.classList.remove("selected");
  })

  high.addEventListener("click", () => {
    high.classList.add("selected");
    medium.classList.remove("selected");
    low.classList.remove("selected");
  })
