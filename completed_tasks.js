document.addEventListener('DOMContentLoaded', function () {
    // Get completed tasks from localStorage
    const completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];

    // Display completed tasks
    const completedTasksContainer = document.getElementById('completed-tasks');
    completedTasksContainer.innerHTML = completedTasks.map(task => `<div class="completed-task">${task}</div>`).join('');
});
