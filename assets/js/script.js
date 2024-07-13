$(document).ready(function () {
    // Initialization for localStorage
    if (!localStorage.getItem("tasks")) {
        localStorage.setItem("tasks", JSON.stringify([]));
    }
    if (!localStorage.getItem("nextId")) {
        localStorage.setItem("nextId", JSON.stringify(0));
    }

    // Retrieve tasks and nextId from localStorage
    let taskList = JSON.parse(localStorage.getItem("tasks"));
    let nextId = JSON.parse(localStorage.getItem("nextId"));

    // Function to generate a unique task id
    function generateTaskId() {
        nextId++;
        localStorage.setItem("nextId", JSON.stringify(nextId));
        return nextId;
    }

    // Function to create a task card
    function createTaskCard(task) {
        let taskCard = $('<div></div>').addClass('task-card').attr('id', 'task-' + task.id);
        let taskTitle = $('<h3></h3>').text(task.title);
        let taskDescription = $('<p></p>').text(task.description);
        let taskDueDate = $('<p></p>').text('Due Date: ' + task.dueDate);
        let deleteButton = $('<button></button>').addClass('btn btn-danger').text('Delete').on('click', handleDeleteTask);

        taskCard.append(taskTitle, taskDescription, taskDueDate, deleteButton);
        taskCard.draggable({                    // Make the task card draggable
            revert: "invalid",
            zIndex: 1000 // Ensures the task card is on top while being draggeble
        });

        return taskCard;
    }

    // Function to render the task list and make cards draggable
    function renderTaskList() {
        $('#todo-cards').empty(); // Clears existing tasks
        taskList.forEach(task => {
            let taskCard = createTaskCard(task);
            $('#todo-cards').append(taskCard);
        });
    }

    // Call renderTaskList to render tasks on page load
    renderTaskList();

    // Function to handle adding a new task
    function handleAddTask(event) {
        let taskTitle = $('#task').val();
        let taskDueDate = $('#date').val();
        let taskDescription = $('#text').val();

        if (!taskTitle || !taskDueDate || !taskDescription) {
            alert("Please fill in all fields");
            return;
        }

        let newTask = {
            id: generateTaskId(),
            title: taskTitle,
            description: taskDescription,
            dueDate: taskDueDate
        };

        taskList.push(newTask);
        localStorage.setItem("tasks", JSON.stringify(taskList));

        let newTaskCard = createTaskCard(newTask);
        $('#todo-cards').append(newTaskCard);

        // Clear the form fields after adding the task
        $('#task').val('');
        $('#date').val('');
        $('#text').val('');
    }

    // Function to handle deleting a task
    function handleDeleteTask(event) {
        let taskId = $(event.target).closest('.task-card').attr('id').split('-')[1];

        taskList = taskList.filter(task => task.id != taskId);
        localStorage.setItem("tasks", JSON.stringify(taskList));

        $(event.target).closest('.task-card').remove();
    }

    // Event listener for the Save button
    $('#save').on('click', handleAddTask);

    // Function to handle drop event
    function handleDrop(event, ui) {
        let taskId = ui.helper.attr('id').split('-')[1];
        let targetListId = $(event.target).attr('id');

        // Find the task in taskList and update its status
        taskList = taskList.map(task => {
            if (task.id == taskId) {
                task.status = targetListId; //Update the status property
            }
            return task;
        });

       // Update localStorage
       localStorage.setItem("tasks", JSON.stringify(taskList));

       // Append the task card to the new list
       ui.helper.appendTo($(this)).css({ top: '0px', left: '0px' });
   }

   // Make the drop areas droppable
   $('#todo-cards, #in-progress-cards, #done-cards').droppable({
       accept: ".task-card",
       drop: handleDrop
   });
});