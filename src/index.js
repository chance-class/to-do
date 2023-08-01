import './style.css';
import { createTD, createProj, createNote } from './modules/create.js';

createTD("Call Mom", "Give Mom a call back soon", "2023-07-29", "Low");
createTD("Go to HEB", "Need to buy dog food", "2023-07-30", "Medium");

const add = document.querySelector(".add-btn");
const popupSelect = document.querySelector(".pop-up-select");
const popupTD = document.querySelector(".pop-up-td");
const popupProj = document.querySelector(".pop-up-proj");
const popupNote = document.querySelector(".pop-up-note");
const popupDetails = document.querySelector(".pop-up-details");
const home = document.querySelector(".home");
const notes = document.querySelector(".notes");
const low = document.getElementById("low");
const medium = document.getElementById("medium");
const high = document.getElementById("high");

add.addEventListener("click", () => {
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
})

notes.addEventListener("click", () => {
    const search = document.querySelector(".search");
    const children = search.children;
    for (let i=0; i < children.length; i++) {
      let child = children[i];
      if (!(child.style.display === "none")) child.style.display = "none";
    }
  const notesDiv = document.querySelector(".notes-div");
  notesDiv.style.display = "block";
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
