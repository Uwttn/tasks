// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
// 'Math.random()' generates a random floating-point number between 0 & 1 exclusively
// `.toString(36)` is a string of 36 characters'
// `substring` extracts from base 36-base string; starting from 2-9
// `task-` prefix the unique string with task
function generateTaskId() {
    return 'task-' + Math.random().toString(36).substring(2, 9);
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    const modal = document.getElementById('formModal')
    const task = modal.querySelector('#task').value;
    const date = modal.querySelector('#date').value;
    const description = modal.querySelector('#description').value;

    const card = createTask(task, date, description);
    document.getElementsByClassName('card-body').appendchild('todo-cards');
    // const info = {
    //     task: task.val.trim(),
    //     date: date.val.trim(),
    //     text: text.val.trim(),
    // };
    // localStorage.setItem('info', JSON.stringify(info));
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

    // var elem =document.createElement("span")
    // $(elem).data("task");
    // $(elem).data("date");
    // $(elem).data("text");
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
    event.preventDefault();
});
