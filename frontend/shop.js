// Fetch products from backend and display them
fetch('http://localhost:5000/products')
  .then(res => res.json())
  .then(products => {
    const shopDiv = document.querySelector('.shop-products');
    shopDiv.innerHTML = ''; // clear placeholders

    products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');

      card.innerHTML = `
        <img src="https://via.placeholder.com/200x200.png?text=${encodeURIComponent(product.name)}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₦${product.price.toLocaleString()}</p>
        <button onclick="preorder(${product.id})">Pre-order</button>
      `;

      shopDiv.appendChild(card);
    });
  });

// Handle pre-order button clicks
function preorder(productId) {
  const name = prompt("Enter your name:");
  const email = prompt("Enter your email:");

  fetch('http://localhost:5000/preorder', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, productId })
  })
  .then(res => res.json())
  .then(data => alert(data.message))
  .catch(err => alert("Error placing pre-order"));
}
