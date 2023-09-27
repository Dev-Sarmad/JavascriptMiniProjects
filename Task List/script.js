const form = document.querySelector("form");
const inputTask = document.getElementById("task-name");
const selection = document.getElementById("select");
const description = document.getElementById("description");
const editBtn = document.querySelector(".edit");
const clearAll = document.querySelector(".clear-all");
const filter = document.getElementById("filter");
const container = document.getElementsByClassName("tasks")[0];
const formBtn = form.querySelector("button");
let editMode = false;

function createTask(e) {
  e.preventDefault();
  let input = inputTask.value;
  let option = selection.value;
  let detail = description.value;
  if (input === "" || option === "" || detail === "") {
    alert("please fill the inputs");
    return;
  }
  let taskName = document.createElement("h4");
  taskName.appendChild(document.createTextNode(input));
  let taskCategory = document.createElement("h3");
  taskCategory.appendChild(document.createTextNode(option));
  let taskDescription = document.createElement("textarea");
  taskDescription.innerHTML = detail;
  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "delete";
  deleteBtn.classList.add("delete");
  let editBtn = document.createElement("button");
  editBtn.innerHTML = "edit";
  editBtn.classList.add("edit");
  let completeTask = document.createElement("div");
  completeTask.classList.add("task");
  completeTask.appendChild(taskName);
  completeTask.appendChild(taskCategory);
  completeTask.appendChild(taskDescription);
  completeTask.appendChild(deleteBtn);
  completeTask.appendChild(editBtn);
  // completeTask.appendChild(editButtton);
  container.appendChild(completeTask);
  UI();
  inputTask.value = "";
  selection.value = "";
  description.value = "";
}
function deleteTask(e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    UI();
  }
}

function editItems(e){
  if(e.target.classList.contains("edit")){
    editMode = true;
    formBtn.innerHTML = "Update Task";
    formBtn.style.color = "green";
    
    const task = e.target.parentElement;
    const taskName = task.querySelector("h4").textContent;
    const taskCategory = task.querySelector("h3").textContent;
    const taskDescription = task.querySelector("textarea").value;

    // Set the task details in the input fields for editing
    inputTask.value = taskName;
    selection.value = taskCategory;
    description.value = taskDescription;
  }
  
}
function clearAllTasks() {
  // first loop throughtasklist which is container remove all the task present
  // in the container.
  while (container.firstChild) {
    container.removeChild(container.firstChild);
    UI();
  }
}

function filterItems(e) {
  let items = container.querySelectorAll(".task");
  // store the search result and make it in lowercase
  let search = e.target.value.toLowerCase();
  items.forEach((item) => {
    // item.firstChild.textContent.toLocaleLowerCase() is name
    // of the item from the task list;
    let itemName = item.firstChild.textContent.toLocaleLowerCase();
    // indexOf matches the itemName from the task list and search if
    // not equal to -1 then it will show the item otherwise hide it .
    if (itemName.indexOf(search) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";

      // let message = document.createElement("p");
      // message.innerHTML = "Not Match Found;";
      // container.appendChild(message);
    }
  });
}
function UI() {
  // checking all the tasks in the container
  let items = container.querySelectorAll(".task");
  if (items.length === 0) {
    clearAll.style.display = "none";
    filter.style.display = "none";
  } else {
    clearAll.style.display = "block";
    filter.style.display = "block";
  }
}
form.addEventListener("submit", createTask);
container.addEventListener("click", deleteTask);
container.addEventListener("click", editItems);
clearAll.addEventListener("click", clearAllTasks);
filter.addEventListener("input", filterItems);
UI();
