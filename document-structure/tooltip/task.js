const showText = () => {
    const elements = document.getElementsByClassName('has-tooltip')

    const arrElements = Array.from(elements)

    let div = document.createElement('div');
    div.classList.add('tooltip')

    arrElements.forEach(el => {
        el.addEventListener('click', (event) => {
            event.preventDefault();
            div.textContent = el.title
            el.append(div)
            div.classList.add('tooltip_active')
        })
    })
}

showText()