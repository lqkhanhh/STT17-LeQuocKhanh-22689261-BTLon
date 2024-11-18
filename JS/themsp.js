let cart = [];

function addToCart(button) {
    const productItem = button.parentElement;
    const name = productItem.getAttribute('data-name');
    const price = parseFloat(productItem.getAttribute('data-price'));
    const image = productItem.getAttribute('data-image');

    const product = { name, price, image, quantity: 1 };

    const existingProduct = cart.find(item => item.name === product.name);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push(product);
    }
}

document.getElementById('giohang').addEventListener('click', function(event) {
    event.preventDefault();
    localStorage.setItem('cart', JSON.stringify(cart)); 
    window.location.href = 'Bag.html'; 
});
