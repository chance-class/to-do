import './style.css';

const add = document.querySelector(".add-btn");
const popupSelect = document.querySelector(".pop-up-select");
const popupTD = document.querySelector(".pop-up-td");
const popupProj = document.querySelector(".pop-up-proj");
const popupNote = document.querySelector(".pop-up-note");
add.addEventListener("click", () => {
  popupSelect.style.display = "grid";
  popupProj.style.display = "none";
  popupNote.style.display = "none";
  popupTD.style.display = "none";
})
const addTD = document.querySelector(".add-td");
addTD.addEventListener("click", () => {
  popupTD.style.display = "grid";
  popupSelect.style.display = "none";
  popupProj.style.display = "none";
  popupNote.style.display = "none";
})
const addProj = document.querySelector(".add-proj");
addProj.addEventListener("click", () => {
  popupProj.style.display = "grid";
  popupSelect.style.display = "none";
  popupNote.style.display = "none";
  popupTD.style.display = "none";
})
const addNote = document.querySelector(".add-note");
addNote.addEventListener("click", () => {
  popupNote.style.display = "grid";
  popupSelect.style.display = "none";
  popupTD.style.display = "none";
  popupProj.style.display = "none";
})