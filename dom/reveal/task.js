const isVisible = (elem) => {

    let coords = elem.getBoundingClientRect();

    let windowHeight = document.documentElement.clientHeight;

    let topVisible = coords.top > 0 && coords.top < windowHeight;
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

    return topVisible || bottomVisible;

}

const showText = () => {
    let reveals = document.getElementsByClassName('reveal')

    let revealsArr = Array.from(reveals)

    revealsArr.forEach(reveal => {
        if (isVisible(reveal)) {
            reveal.classList.add('reveal_active')
        } else {
            reveal.classList.remove('reveal_active')
        }
    })
}

document.addEventListener('scroll', () => {
    showText()
})