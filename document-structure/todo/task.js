const tasksInput = document.getElementById('task__input');
const tasksAdd = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

const taskListAdd = (text) => {
    tasksList.insertAdjacentHTML('beforeend', `<div class="task">
        <div class="task__title">
        ${text}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>`);
    tasksInput.value = '';
    const task = Array.from(document.querySelectorAll('.task'));
    const taskRemove = Array.from(document.querySelectorAll('.task__remove'));
    let taskId = task.length - 1;
    taskRemove[taskId].addEventListener('click', (e) => {
        e.preventDefault();
        task[taskId].remove();
    });
}

tasksAdd.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.currentTarget && tasksInput.value.trim().length !== 0) {
        taskListAdd(tasksInput.value);
    } else if(e.currentTarget) {
        tasksInput.value = '';
    }
});

tasksInput.addEventListener('keyup', (e) => {
    e.preventDefault();
    if(e.key === 'Enter' && tasksInput.value.trim().length !== 0) {   
        taskListAdd(tasksInput.value);
    } else if(e.key === 'Enter') {
        tasksInput.value = '';
    }
});