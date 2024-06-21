document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    const addTask = (event) => {
        event.preventDefault();

        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const taskItem = document.createElement('li');
        const taskCheckbox = document.createElement('input');
        const taskLabel = document.createElement('label');
        const deleteButton = document.createElement('button');

        taskCheckbox.type = 'checkbox';
        taskCheckbox.addEventListener('change', () => {
            if (taskCheckbox.checked) {
                taskLabel.classList.add('completed');
            } else {
                taskLabel.classList.remove('completed');
            }
        });

        taskLabel.textContent = taskText;
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(taskCheckbox);
        taskItem.appendChild(taskLabel);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);

        taskInput.value = '';
        taskInput.focus();
    };

    taskForm.addEventListener('submit', addTask);
});
