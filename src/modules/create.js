
export const createTD = (name, details, duedate) => {
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
    title.textContent = name;
    const due = document.getElementById("pop-due");
    due.textContent = duedate;
    const info = document.getElementById("pop-details");
    info.textContent = details;
    popup.style.display = "grid";
  })
  td.appendChild(det);
  const tdDue = document.createElement("p");
  tdDue.textContent = duedate;
  td.appendChild(tdDue);
  const rCol = document.querySelector(".r-col");
  rCol.appendChild(li);
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

const createProj = (name, details) => {
  new Proj(name, details);
}