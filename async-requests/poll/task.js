const getAnswers = () => {
    return fetch('https://netology-slow-rest.herokuapp.com/poll.php')
        .then(responce => responce.json())
}

const addButtons = () => {
    let title = document.getElementById('poll__title');

    const anwers = document.getElementById('poll__answers')

    getAnswers().then(value => {
        title.textContent = value.data.title

        value.data.answers.forEach(item => {
            const button = document.createElement('button');
            button.classList.add('poll__answer');
            button.textContent = item;

            anwers.append(button)
        })
    })
        .then(value => {
            const buttons = document.getElementsByClassName('poll__answer')

            for (let i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener('click', () => {
                    alert('Ваш голос засчитан')
                })
            }
        })
}

addButtons()
