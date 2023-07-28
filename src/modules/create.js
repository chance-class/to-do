
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

  })
  td.appendChild(det);
  const tdDue = document.createElement("p");
  tdDue.textContent = duedate;
  td.appendChild(tdDue);
  currentProj.UL.appendChild(li);
}

