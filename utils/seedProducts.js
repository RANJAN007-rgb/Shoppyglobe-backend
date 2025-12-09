/**
 * Simple seed script to create sample products in the database.
 * Run with: npm run seed
 */
require('dotenv').config();
const connectDB = require('../config/db');
const Product = require('../models/Product');

const products = [
  { name: 'Wireless Headphones', description: 'Comfortable, long battery life', price: 59.99, countInStock: 25 },
  { name: 'Gaming Mouse', description: 'High DPI, ergonomic', price: 34.99, countInStock: 50 },
  { name: 'Mechanical Keyboard', description: 'RGB, tactile switches', price: 89.99, countInStock: 20 },
  { name: 'Smartphone Stand', description: 'Adjustable and portable', price: 12.50, countInStock: 100 }
];

const run = async () => {
  await connectDB();
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log('Seeded products');
  process.exit(0);
};

run().catch(err => { console.error(err); process.exit(1); });
