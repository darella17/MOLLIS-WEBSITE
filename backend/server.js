const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// In-memory products “database”
let products = [];

// Routes
app.get('/products', (req, res) => {
  res.json(products);
});

// Add product from admin
app.post('/add-product', (req, res) => {
  const { name, price, image } = req.body;

  if (!name || !price) {
    return res.status(400).json({
      success: false,
      message: 'Missing fields'
    });
  }

  const id = products.length + 1;

  products.push({
    id,
    name,
    price,
    image
  });

  console.log('New product added:', name);

  res.json({
    success: true,
    message: 'Product added successfully'
  });
});

// Preorder 
app.post('/preorder', (req, res) => {
  const { name, email, productId } = req.body;
  console.log(`New preorder: ${name}, ${email}, product ${productId}`);
  res.json({ success: true, message: 'Pre-order received!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
