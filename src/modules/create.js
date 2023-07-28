
displayTD = (name, details, duedate) => {
  const li = document.createElement("li");
  const td = document.createElement("div");
  li.appendChild(td);
  const tdName = document.createElement("p");
  tdName.textContent = name;
  td.appendChild(tdName);
  const det = document.createElement("button");
  det.textContent = "Details";
  det.addEventListener("click", () => {
    const popup = document.querySelector(".pop-up-details");
    const title = document.getElementById("title");
    title.textContent = name;
    const due = document.getElementById("due");
    due.textContent = duedate;
    const info = document.getElementById("details");
    info.textContent = details;
    popup.style.display = "grid";
  })
  td.appendChild(det);
  const tdDue = document.createElement("p");
  tdDue.textContent = duedate;
  td.appendChild(tdDue);
  currentProj.UL.appendChild(li);
}

class TD {
    constructor (name, details, duedate) {
      this.name = name;
      this.details = details;
      this.duedate = duedate;
    }
  }
  
  createTD = (name, details, duedate) => {
    currentProj.todos.push(new TD(name, details, duedate));
    displayTD(name, duedate);
  }
  
  class Proj {
    constructor (name, details) {
      this.name = name;
      this.details = details;
    }
    todos = [];
    UL = document.createElement("ul");
  }