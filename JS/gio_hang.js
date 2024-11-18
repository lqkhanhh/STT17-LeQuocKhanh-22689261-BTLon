const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById('cart-list');
    let totalPrice = 0;

    cart.forEach((item, index) => {
        if (item.checked === undefined) {
            item.checked = true; 
        }

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <input type="checkbox" ${item.checked ? 'checked' : ''} onchange="toggleItem(${index}, this.checked)">
            <img src="${item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>Size: <span>${item.color}</span></p>
            <p>$${item.price} x <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)"></p>
            <span class="remove-item" onclick="removeItem(${index})">&times;</span>
        `;
        cartList.appendChild(cartItem);
        if (item.checked) {
            totalPrice += item.price * item.quantity;
        }
    });
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
    function updateQuantity(index, quantity) {
        cart[index].quantity = parseInt(quantity);
        localStorage.setItem('cart', JSON.stringify(cart));
        calculateTotal(); 
    }
    function removeItem(index) {
        cart.splice(index, 1); 
        localStorage.setItem('cart', JSON.stringify(cart));
        location.reload();
    }
    function toggleItem(index, isChecked) {
        cart[index].checked = isChecked; 
        localStorage.setItem('cart', JSON.stringify(cart));
        calculateTotal();
    }
    function calculateTotal() {
        totalPrice = 0;
        cart.forEach((item) => {
            if (item.checked) { 
                totalPrice += item.price * item.quantity;
            }
        });
        document.getElementById('total-price').innerText = totalPrice.toFixed(2); 
    }