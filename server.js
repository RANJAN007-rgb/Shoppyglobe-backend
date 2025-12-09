require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/cart', require('./routes/cart'));

// Basic health-check
app.get('/', (req, res) => res.send('ShoppyGlobe API running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server running on port', PORT);
});
