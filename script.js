function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value;
    taskInput.value = "";

    if (taskText.trim() === "") {
        alert("Please enter a valid task.");
        return;
    }

    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.innerHTML = `
        ${taskText}
        <button onclick="removeTask(this)">Delete</button>
    `;
    taskList.appendChild(li);
}

function removeTask(button) {
    var taskList = document.getElementById("taskList");
    var li = button.parentElement;
    taskList.removeChild(li);
}
