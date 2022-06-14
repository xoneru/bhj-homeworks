const changeText = () => {
    const list = document.getElementsByClassName('rotator__case');

    const listArr = Array.from(list);

    setInterval(() => {
        let textActive = document.getElementsByClassName('rotator__case_active')[0]

        if (!textActive.nextElementSibling) {
            textActive.classList.remove('rotator__case_active')
            textActive = document.getElementsByClassName('rotator__case')[0];

        }

        textActive.classList.remove('rotator__case_active')

        textActive.nextElementSibling.classList.add('rotator__case_active')


    }, 1000)
}

changeText()