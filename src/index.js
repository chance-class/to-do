import './style.css';

const add = document.querySelector(".add-btn");
const popupToDo = document.querySelector(".pop-up-td");
add.addEventListener("click", () => {
  popupToDo.classList.add("display");
})