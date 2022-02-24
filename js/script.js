const cart = function() {
    const cartBtn = document.querySelector('.button-cart');
    const modalCart = document.getElementById('modal-cart');
    const modalClose = document.querySelector('.modal-close');

    cartBtn.addEventListener('click', function(){
        modalCart.style.display = 'flex';
    })
    modalClose.addEventListener('click', function(){
        modalCart.style.display = ''
    })

}

cart()