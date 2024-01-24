// Get elements
const taskInput = document.getElementById('taskInput');
const tasksContainer = document.getElementById('tasks');

// Add task function
function addTask() {
    const taskText = taskInput.value;

    if (taskText.trim() !== '') {
        // Create task element
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.innerHTML = `
            <input type="checkbox" onchange="toggleTaskCompletion(this)">
            <span>${taskText}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;

        // Append task to tasks container
        tasksContainer.appendChild(taskElement);

        // Clear input
        taskInput.value = '';
    }
}

// Remove task function
function removeTask(button) {
    const taskElement = button.parentElement;
    tasksContainer.removeChild(taskElement);
}

// Toggle task completion function
function toggleTaskCompletion(checkbox) {
    const taskElement = checkbox.parentElement;
    taskElement.classList.toggle('completed', checkbox.checked);
}


// Toggle task completion function
function toggleTaskCompletion(checkbox) {
    const taskElement = checkbox.parentElement;
    taskElement.classList.toggle('completed', checkbox.checked);
}

// View completed tasks function
function viewCompletedTasks() {
    // Get all tasks
    const allTasks = document.querySelectorAll('.task');

    // Filter completed tasks
    const completedTasks = Array.from(allTasks).filter(task => task.classList.contains('completed'));

    // Store completed tasks in localStorage
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks.map(task => task.innerHTML)));

    // Redirect to completed_tasks.html
    window.location.href = 'completed_tasks.html';
}

