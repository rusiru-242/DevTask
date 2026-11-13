function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    if (task.length < 3) {
        alert("Task must contain at least 3 characters!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = task;

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}