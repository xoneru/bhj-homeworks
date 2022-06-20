const addItem = () => {
    const btnsDec = document.getElementsByClassName('product__quantity-control_dec');
    const btnsInc = document.getElementsByClassName('product__quantity-control_inc');

    const btnAddToCart = document.getElementsByClassName('product__add')

    const cart = document.getElementsByClassName('cart__products')[0]

    Array.from(btnsDec).forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.nextElementSibling.textContent.trim() === '1') {
                return
            }
            btn.nextElementSibling.textContent -= 1
        })
    })

    Array.from(btnsInc).forEach(btn => {
        btn.addEventListener('click', () => {
            btn.previousElementSibling.textContent = +btn.previousElementSibling.textContent + 1
        })
    })

    Array.from(btnAddToCart).forEach(btn => {
        btn.addEventListener('click', (event) => {
            const card = btn.closest('.product');

            let count = card.getElementsByClassName('product__quantity-value')[0].textContent;

            let src = card.getElementsByClassName('product__image')[0].getAttribute('src')

            let newCard = card.cloneNode(false);
            newCard.classList.remove('product')
            newCard.classList.add('cart__product')
            const div = document.createElement('div');
            const img = document.createElement('img');

            div.classList.add('cart__product-count');
            div.textContent = count;

            img.setAttribute('src', src);
            img.classList.add('cart__product-image');

            newCard.append(div);
            newCard.append(img);


            let cartItems = document.getElementsByClassName('cart__product')

            if (Array.from(cartItems).find(el => el.getAttribute('data-id') === newCard.getAttribute('data-id'))) {
                let cartItem = Array.from(cartItems).find(el => el.getAttribute('data-id') === newCard.getAttribute('data-id'));
                
                cartItem.remove()
            }

            cart.append(newCard)
        })
    })

}

addItem()