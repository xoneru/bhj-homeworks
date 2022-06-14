const getMenu = () => {

    let classValue = document.getElementsByClassName('dropdown__value')[0];
    let ul = document.getElementsByClassName('dropdown__list')[0];

classValue.addEventListener('click', (event) => {
        event.preventDefault()

        ul.classList.add('dropdown__list_active')
    })

    let items = document.getElementsByClassName('dropdown__item')

    let itemsArr = Array.from(items);

    itemsArr.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault()

            let itemText = item.textContent;
            classValue.textContent = itemText;

            ul.classList.remove('dropdown__list_active')
        })
    })

    console.log(ul)
}

getMenu()