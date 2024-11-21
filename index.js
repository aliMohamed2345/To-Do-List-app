const InputTask = document.getElementById("addTask");
const AddTask = document.getElementById("sendTask");
const Tasks = document.querySelector(".taskList .tasks");
let TaskOrder = 1;
let checkCount = 1;
let ex = "d";
// Checking if the input field is empty

function DesignButtons(DivButtons, checkButton, DeleteButton) {
  DivButtons.classList.add(`options`);
  // Adding check button
  checkButton.classList.add("check");
  checkButton.innerHTML = "Check";
  DivButtons.appendChild(checkButton);
  // Adding delete button
  DeleteButton.classList.add("delete");
  DeleteButton.innerHTML = "Delete";
  DivButtons.appendChild(DeleteButton);
}
function DesignElement(Element, ElementName) {
  Element.classList.add(`task`);
  Element.appendChild(ElementName);
}
// Event listener for adding a task
AddTask.addEventListener("click", (e) => {
  if (!InputTask.value.trim()) {
    alert(`please input any task`);
    return;
  }
  // Creating elements for the task
  const task = document.createElement("div");
  const taskName = document.createElement("p");
  const options = document.createElement("div");
  const checkButton = document.createElement("button");
  const DeleteButton = document.createElement("button");
  // Adding classes and ids to elements
  task.id = `task ${TaskOrder}`;
  // Appending task to the task list
  Tasks.appendChild(task);
  // Adding task name
  taskName.innerHTML = InputTask.value;
  InputTask.value = "";
  DesignElement(task, taskName);
  DesignButtons(options, checkButton, DeleteButton);
  task.appendChild(options);
  // Incrementing task order
  TaskOrder++;
  // Event listener for delete button
  DeleteButton.addEventListener("click", () => {
    task.remove();
  });
  // Event listener for check button
  checkButton.addEventListener("click", () => {
    // Toggle text decoration on click
    if (checkCount % 2 === 0) {
      task.style.textDecoration = "none";
    } else {
      task.style.textDecoration = `line-through 3px black`;
    }
    checkCount++;
  });
});
