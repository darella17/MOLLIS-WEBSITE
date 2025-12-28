// Get cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Dummy product info (match your shop.js products)
const products = [
    { id: 1, name: 'Minimal Hoodie', price: 35000 },
    { id: 2, name: 'Basic Tee', price: 18000 },
    { id: 3, name: 'Classic Tank', price: 20000 }
];

// Display cart items
function displayCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';

    let total = 0;

    cart.forEach((item, index) => {
        const product = products.find(p => p.id === item.productId);
        total += product.price;

        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
            <p>${product.name} - Size: ${item.size}, Color: ${item.color} - ₦${product.price.toLocaleString()}</p>
            <button onclick="removeItem(${index})">Remove</button>
        `;
        cartItemsDiv.appendChild(div);
    });

    document.getElementById('cart-total').textContent = total.toLocaleString();
    document.getElementById('cart-count').textContent = cart.length;
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Checkout button
document.getElementById('checkout-btn').addEventListener('click', () => {
    alert("Checkout coming soon! We'll integrate Paystack next.");
});

displayCart();
