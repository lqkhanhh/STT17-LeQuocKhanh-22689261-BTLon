function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
  }
  function addToCartFromModal() {
    const productName = document.querySelector('.modal-product-name').innerText;
    const productPrice = parseFloat(document.querySelector('.modal-product-price').innerText.replace('$', ''));
    const productImage = document.querySelector('.modal-product-image').src;
    const quantity = parseInt(document.getElementById('quantity-select').value);
    const color = document.getElementById('modal-color-select').value;
  
    const product = { name: productName, price: productPrice, image: productImage, quantity: quantity, color: color };
    const existingProduct = cart.find(item => item.name === product.name && item.color === product.color);
  
    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push(product);
    }
    saveCart();
  
    const addButton = document.querySelector('.add-to-cart-btn');
    addButton.textContent = 'Đã thêm vào giỏ hàng'; 
    addButton.disabled = true; 
  
    closeModal();
  }
  loadCart();