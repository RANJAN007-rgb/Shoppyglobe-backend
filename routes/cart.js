const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const CartItem = require('../models/CartItem');
const Product = require('../models/Product');

// POST /api/cart - add to cart (protected)
router.post('/', [
  auth,
  body('productId').isMongoId(),
  body('quantity').isInt({ min: 1 })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { productId, quantity } = req.body;
  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    if (product.countInStock < quantity) return res.status(400).json({ message: 'Not enough stock' });

    // Check if exists - update quantity
    let item = await CartItem.findOne({ user: req.user.id, product: productId });
    if (item) {
      item.quantity += quantity;
      await item.save();
      return res.json(item);
    }
    item = new CartItem({ user: req.user.id, product: productId, quantity });
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// PUT /api/cart/:itemId - update quantity (protected)
router.put('/:itemId', [
  auth,
  body('quantity').isInt({ min: 1 })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  try {
    const item = await CartItem.findById(req.params.itemId);
    if (!item) return res.status(404).json({ message: 'Cart item not found' });
    if (item.user.toString() !== req.user.id) return res.status(403).json({ message: 'Not authorized' });

    const product = await Product.findById(item.product);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    if (product.countInStock < req.body.quantity) return res.status(400).json({ message: 'Not enough stock' });

    item.quantity = req.body.quantity;
    await item.save();
    res.json(item);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// DELETE /api/cart/:itemId - remove cart item (protected)
router.delete('/:itemId', auth, async (req, res) => {
  try {
    const item = await CartItem.findById(req.params.itemId);
    if (!item) return res.status(404).json({ message: 'Cart item not found' });
    if (item.user.toString() !== req.user.id) return res.status(403).json({ message: 'Not authorized' });

    await item.remove();
    res.json({ message: 'Removed' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
