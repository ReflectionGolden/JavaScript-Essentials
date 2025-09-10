const newTaskInput = document.querySelector("#newTask");
const addTaskButton = document.querySelector("button");
const taskContainer = document.querySelector("#taskContainer");
var taskNumber = 0;

function addTask() {
    let taskName = newTaskInput.value
    console.log("The new task, task" + taskNumber + " is: "+taskName)

    let newTaskElement = document.createElement("p");
    newTaskElement.innerText = taskName;
    newTaskElement.id = "task" + taskNumber;
    taskContainer.insertAdjacentElement("beforeend", newTaskElement);
    taskNumber++;
}

addTaskButton.addEventListener("click", addTask);