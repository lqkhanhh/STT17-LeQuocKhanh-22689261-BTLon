const cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartList = document.getElementById('cart-list');
let totalPrice = 0;

function renderCart() {
    cartList.innerHTML = '';
    totalPrice = 0;

    const selectedItems = cart.filter(item => item.checked); 

    if (selectedItems.length === 0) {
        cartList.innerHTML = '<p>No items in your order.</p>';
        return;
    }

    selectedItems.forEach((item) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = 
            `<img src="${item.image}" alt="${item.name}" style="width: 50px; height: auto;">
            <h2>${item.name}</h2>
            <p>$${item.price} x ${item.quantity}</p>`;
        cartList.appendChild(cartItem);
        totalPrice += item.price * item.quantity;
    });

    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
}

renderCart();

document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;

    const checkoutButton = document.querySelector('button[type="submit"]');
    checkoutButton.innerText = 'Processing your order';
    checkoutButton.disabled = true; 

    const remainingItems = cart.filter(item => !item.checked);
    localStorage.setItem('cart', JSON.stringify(remainingItems)); 

    setTimeout(() => {
        window.location.href = 'home.html'; 
    }, 1000); 
});