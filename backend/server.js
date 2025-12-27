const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Products “database”
let products = [
  { id: 1, name: 'Minimal Hoodie', price: 35000 },
  { id: 2, name: 'Basic Tee', price: 18000 },
  { id: 3, name: 'Classic Tank', price: 20000 }
];

// Routes
app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/preorder', (req, res) => {
  const { name, email, productId } = req.body;
  console.log(`New preorder: ${name}, ${email}, product ${productId}`);
  res.json({ success: true, message: 'Pre-order received!' });
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
