const newTaskInput = document.querySelector("#newTask");
const addTaskButton = document.querySelector("button");
const taskContainer = document.querySelector("#taskContainer");
var taskNumber = 0;
const buttonClass = "m-1 p-1 rounded-md bg-blue-600 hover:bg-blue-500 active:bg-blue-700";

function addTask() {
    let taskName = newTaskInput.value
    console.log("The new task, task" + taskNumber + " is: "+taskName)

    let newTaskElement = document.createElement("p");
    newTaskElement.innerText = taskName;
    newTaskElement.id = "task" + taskNumber;

    let newTaskRemover = document.createElement("button");
    newTaskRemover.className = buttonClass;
    newTaskRemover.textContent = "Delete Task";

    newTaskElement.appendChild(newTaskRemover);
    taskContainer.insertAdjacentElement("beforeend", newTaskElement);
    newTaskRemover.addEventListener("click", function () {
        newTaskElement.remove();
        console.log(newTaskElement.id + " Deleted.");
    });
    taskNumber++;
}

addTaskButton.addEventListener("click", addTask);