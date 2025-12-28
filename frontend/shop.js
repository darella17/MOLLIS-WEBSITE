// Get products from localStorage or fallback to default
let products = JSON.parse(localStorage.getItem('products')) || [
    { id: 1, name: 'Minimal Hoodie', price: 35000, image: 'https://via.placeholder.com/200x200.png?text=Hoodie' },
    { id: 2, name: 'Basic Tee', price: 18000, image: 'https://via.placeholder.com/200x200.png?text=Tee' },
    { id: 3, name: 'Classic Tank', price: 20000, image: 'https://via.placeholder.com/200x200.png?text=Tank+Top' }
];

const shopDiv = document.querySelector('.shop-products');
shopDiv.innerHTML = '';

// Display all products
products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₦${product.price.toLocaleString()}</p>

        <label>Size:</label>
        <select class="size">
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
        </select>

        <label>Color:</label>
        <select class="color">
            <option value="Black">Black</option>
            <option value="White">White</option>
        </select>

        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    shopDiv.appendChild(card);
});

// Add to Cart function
function addToCart(productId) {
    const productCard = event.target.closest('.product-card');
    const size = productCard.querySelector('.size').value;
    const color = productCard.querySelector('.color').value;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ productId, size, color });
    localStorage.setItem('cart', JSON.stringify(cart));

    alert("Added to cart!");
}
