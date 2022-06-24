const saveText = () => {
    const textarea = document.getElementById('editor');

    if(localStorage.getItem('text')) {
        textarea.value = localStorage.getItem('text')
    }

    textarea.addEventListener('keydown', (event) => {

        localStorage.setItem('text', event.target.value)
    })
}

const clearText = () => {
    const button = document.getElementById('clearButton');

    button.addEventListener('click', ()=> {
        const textarea = document.getElementById('editor');
        textarea.value = '';
        localStorage.removeItem('text')
    })
}

saveText()
clearText()