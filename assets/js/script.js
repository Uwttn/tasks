// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
const task = $("#task");
const date = $("#date");
const text = $("#text");
const save = $("#save");

// Todo: create a function to generate a unique task id
function generateTaskId() {
    return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    const info = {
        task: task.val.trim(),
        date: date.val.trim(),
        text: text.val.trim(),
    };
    localStorage.setItem('info', JSON.stringify(info));
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    const taskList = JSON.parse(localStorage.getItem('info'));
    if (taskList === null) {
        $("task") = info.task,
        $("date") = info.date,
        $("text") = info.text,
}
}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {

}

// Todo: create a function to handle dropping a task into a new status lane
// #to-do, #in-progress, #done
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function (event) {
    event.isDefaultPrevented();
    saveTask();
    renderTaskList();
});
