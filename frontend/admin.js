const form = document.getElementById('product-form');
const successMsg = document.getElementById('success-msg');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const price = parseInt(document.getElementById('price').value);
    const imageFile = document.getElementById('image').files[0];

    if(imageFile) {
        const reader = new FileReader();
        reader.onload = function() {
            const imageBase64 = reader.result;
            saveProduct(imageBase64);
        }
        reader.readAsDataURL(imageFile);
    } else {
        const placeholder = `https://via.placeholder.com/200x200.png?text=${encodeURIComponent(name)}`;
        saveProduct(placeholder);
    }
});

// Helper function to save product and show success
function saveProduct(imageSrc) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    const id = products.length ? products[products.length - 1].id + 1 : 1;

    products.push({ id, name, price, image: imageSrc });
    localStorage.setItem('products', JSON.stringify(products));

    form.reset();
    successMsg.textContent = `${name} added successfully!`;
}


