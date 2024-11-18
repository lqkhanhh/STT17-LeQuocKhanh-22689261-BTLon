function openModal(button) {
    const productItem = button.closest('.product-item');
    const name = productItem.getAttribute('data-name');
    const price = parseFloat(productItem.getAttribute('data-price')); 
    const imageSrc = productItem.querySelector('.main-img').src;
    const description = productItem.querySelector('.chi_tiet_sp').innerText;

    document.querySelector('.modal-product-name').innerText = name; /* lây thông tin tên sản phẩm */
    document.querySelector('.modal-product-price').innerText = `$${price.toFixed(2)}`;
    document.querySelector('.modal-product-image').src = imageSrc;
   //  document.querySelector('.modal-product-description').innerText = description; /* mô tả chi tiết sp */

   // Ẩn thông tin trong modal
    document.querySelector('.modal-product-name').style.display = 'none';
    document.querySelector('.modal-product-price').style.display = 'none';


    // Lấy các màu sắc từ select của sản phẩm
    const colorSelect = productItem.querySelector('select');
    const modalColorSelect = document.getElementById('modal-color-select');

    // Xóa các tùy chọn cũ trong modal
    modalColorSelect.innerHTML = '';

    // Thêm các tùy chọn màu sắc từ sản phẩm vào modal
    Array.from(colorSelect.options).forEach(option => {
        const newOption = document.createElement('option');
        newOption.value = option.value;
        newOption.textContent = option.textContent;
        newOption.setAttribute('data-image', option.getAttribute('data-image') || imageSrc); // Thêm thuộc tính data-image nếu có
        modalColorSelect.appendChild(newOption);
    });

    updateTotalPrice(price);
    document.getElementById('productModal').style.display = 'block';
}

function updateTotalPrice(price) {
    const quantity = document.getElementById('quantity-select').value;
    const totalPrice = (price * quantity).toFixed(2);
    document.getElementById('total-price').innerHTML = `Total: $<span>${totalPrice}</span>`;
}

document.getElementById('quantity-select').addEventListener('change', function() {
    const price = parseFloat(document.querySelector('.modal-product-price').innerText.replace('$', ''));
    updateTotalPrice(price);
});

function closeModal() {
    document.getElementById('productModal').style.display = 'none'; 
    document.querySelector('.modal-product-name').innerText = '';
    document.querySelector('.modal-product-price').innerText = '';
    document.querySelector('.modal-product-image').src = '';
    document.getElementById('quantity-select').value = 1; 
    document.getElementById('total-price').innerHTML = 'Tổng tiền: $<span>0.00</span>'; 
    const addButton = document.querySelector('.add-to-cart-btn');
    addButton.textContent = 'Thêm vào giỏ hàng';
    addButton.disabled = false;
}