const closeModal = () => {
    const modal = document.getElementById('subscribe-modal')

    if(document.cookie) {
        modal.classList.remove('modal_active');
    }
    
    const buttonClose = document.getElementsByClassName('modal__close')[0]


    buttonClose.addEventListener('click', ()=> {
        modal.classList.remove('modal_active');
        document.cookie = 'modal=close';
        console.log(document.cookie)
    })
}

closeModal()