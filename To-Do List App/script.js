function addTask() {

    let taskInput = document.getElementById("taskInput");

    let task = taskInput.value;

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span onclick="completeTask(this)">${task}</span>
        <button class="delete-btn" onclick="deleteTask(this)">
            Delete
        </button>
    `;

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";

    saveTasks();
}


// Complete Task

function completeTask(task) {

    task.style.textDecoration = "line-through";

    task.style.color = "gray";

    saveTasks();
}


// Delete Task

function deleteTask(button) {

    button.parentElement.remove();

    saveTasks();
}


// Save Tasks

function saveTasks() {

    let tasks = document.getElementById("taskList").innerHTML;

    localStorage.setItem("tasks", tasks);
}


// Load Tasks

function loadTasks() {

    let savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
        document.getElementById("taskList").innerHTML = savedTasks;
    }
}


// Load saved tasks when page opens

loadTasks();