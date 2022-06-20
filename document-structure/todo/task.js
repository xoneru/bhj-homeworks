const addTask = () => {
    const input = document.getElementById('task__input')
    const tasksList = document.getElementsByClassName('tasks__list')[0]

    input.addEventListener('keydown', (event) => {

        let divTask = document.createElement('div')
        divTask.classList.add('task')

        let divTitleTask = document.createElement('div')
        divTitleTask.classList.add('task__title')

        let link = document.createElement('a')
        link.setAttribute('href', '#')
        link.classList.add('task__remove')
        link.textContent = 'x';

        if (event.keyCode === 13) {
            event.preventDefault()
            divTitleTask.textContent = event.target.value

            tasksList.append(divTask);
            divTask.append(divTitleTask);
            divTask.append(link);

            link.addEventListener('click', (event) => {
                event.preventDefault();
                divTask.remove();
            })
        }
    })

    console.log(input)
}

addTask()