// User information and task list
let userName = "";
let userAge = 0;
let tasks = [];

// Check user age before allowing access
function checkUser() {
    userName = document.getElementById("userName").value;
    userAge = document.getElementById("userAge").value;

    if (userAge >= 18) {
        document.getElementById("userInfo").style.display = "none";
        document.getElementById("taskSection").style.display = "block";
        alert(`Welcome, ${userName}!`);
    } else {
        alert("You must be at least 18 years old to use this app.");
    }
}

// Add a new task
function addTask() {
    const taskName = document.getElementById("taskName").value;
    const dueDate = document.getElementById("dueDate").value;
    
    if (taskName && dueDate) {
        const newTask = { taskName, dueDate, completed: false };
        tasks.push(newTask);
        displayTasks();
    } else {
        alert("Please fill out all fields.");
    }
}

// Display tasks
function displayTasks() {
    const tasksList = document.getElementById("tasksList");
    tasksList.innerHTML = "";

    tasks.forEach((task, index) => {
        tasksList.innerHTML += `
            <div>
                <input type="checkbox" onclick="completeTask(${index})" ${task.completed ? 'checked' : ''}>
                ${task.taskName} - Due: ${task.dueDate} - ${task.completed ? "Completed" : "Pending"}
            </div>`;
    });
}

// Complete a task asynchronously
async function completeTask(index) {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        tasks[index].completed = true;
        displayTasks();
        alert(`Task "${tasks[index].taskName}" marked as completed.`);
    } catch (error) {
        console.error("Failed to mark task as completed.", error);
    }
}
