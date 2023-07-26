import './style.css';

const add = document.querySelector(".add-btn");
const popupTD = document.querySelector(".pop-up-td");
const popupProj = document.querySelector(".pop-up-proj");
const popupNote = document.querySelector(".pop-up-note");
add.addEventListener("click", () => {
  popupTD.style.display = "block";
  popupProj.style.display = "none";
  popupNote.style.display = "none";
})
const addTD = document.querySelector(".add-td");
addTD.addEventListener("click", () => {
    popupTD.style.display = "block";
  popupProj.style.display = "none";
  popupNote.style.display = "none";
})
const addProj = document.querySelector(".add-proj");
addProj.addEventListener("click", () => {
    popupProj.style.display = "block";
  popupNote.style.display = "none";
  popupTD.style.display = "none";
})
const addNote = document.querySelector(".add-note");
addNote.addEventListener("click", () => {
    popupNote.style.display = "block";
  popupTD.style.display = "none";
  popupProj.style.display = "none";
})