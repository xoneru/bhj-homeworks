const showContentTab = () => {
    const tabs = document.getElementsByClassName('tab')

    const tabsContent = document.getElementsByClassName('tab__content')

    const tabsArr = Array.from(tabs)
    const tabsContentArr = Array.from(tabsContent)
    console.log(tabsContentArr)

    tabsArr.forEach(item => {
        item.addEventListener('click', () => {
            for (let i = 0; i < tabsArr.length; i++) {
                tabsArr[i].classList.remove('tab_active')
            }
            item.classList.add('tab_active')

            let index = tabsArr.indexOf(document.getElementsByClassName('tab_active')[0])

            for (let i = 0; i < tabsArr.length; i++) {
                tabsContentArr[i].classList.remove('tab__content_active')
            }
            tabsContentArr[index].classList.add('tab__content_active')

        })
    })
}

showContentTab()