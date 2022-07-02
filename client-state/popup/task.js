const closeModal = () => {
    const modal = document.getElementById('subscribe-modal')
    

    if(document.cookie) {
        modal.classList.remove('modal_active');
    }

    if(localStorage.getItem('modal')) {
        modal.classList.remove('modal_active');
    }

    console.log(document.cookie)
    
    const buttonClose = document.getElementsByClassName('modal__close')[0]


    buttonClose.addEventListener('click', ()=> {
        modal.classList.remove('modal_active');
        document.cookie = 'modal=' + encodeURIComponent('close');
        localStorage.setItem('modal', 'closed')
        console.log(document.cookie)
    })
}

closeModal()