let formEl = document.querySelector("#task-form")
let tasksToDoEl = document.querySelector("#tasks-to-do");


let createFormHandler = function(event) {

    event.preventDefault();

    let taskNameInput = document.querySelector("input[name='task-name']").value;

    let taskTypeInput = document.querySelector("select[name='task-type']").value;

    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }

    formEl.reset();

    let taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };
   
  createTaskEl(taskDataObj);

};

let createTaskEl = function(taskDataObj) {
      
    let listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    let taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class ='task-name'>" + taskDataObj.name + "</h3><span class='taks-type'>" + taskDataObj.type + "</span>";

    listItemEl.appendChild(taskInfoEl);

    tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", createFormHandler);