const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { protect, admin } = require('../middleware/authMiddleware');
const asyncHandler = require('express-async-handler');

// Get all products with filtering and pagination
router.get('/', asyncHandler(async (req, res) => {
  const { 
    category, 
    search, 
    featured, 
    onSale, 
    page = 1, 
    limit = 12,
    sort = 'createdAt',
    order = 'desc'
  } = req.query;

  // Build filter object
  const filter = { isActive: true };
  
  if (category && category !== 'all') {
    filter.category = category;
  }
  
  if (featured === 'true') {
    filter.isFeatured = true;
  }
  
  if (onSale === 'true') {
    filter.isOnSale = true;
  }
  
  if (search) {
    filter.$text = { $search: search };
  }

  // Build sort object
  const sortObj = {};
  sortObj[sort] = order === 'desc' ? -1 : 1;

  // Calculate pagination
  const skip = (parseInt(page) - 1) * parseInt(limit);

  const products = await Product.find(filter)
    .sort(sortObj)
    .skip(skip)
    .limit(parseInt(limit));

  const total = await Product.countDocuments(filter);

  res.json({
    products,
    pagination: {
      currentPage: parseInt(page),
      totalPages: Math.ceil(total / parseInt(limit)),
      totalProducts: total,
      hasNext: skip + products.length < total,
      hasPrev: parseInt(page) > 1
    }
  });
}));

// Get product by slug
router.get('/slug/:slug', asyncHandler(async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug, isActive: true });
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
}));

// Get product by ID
router.get('/:id', asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
}));

// Get featured products
router.get('/featured/list', asyncHandler(async (req, res) => {
  const products = await Product.find({ 
    isFeatured: true, 
    isActive: true 
  }).limit(6);
  res.json(products);
}));

// Get products on sale
router.get('/sale/list', asyncHandler(async (req, res) => {
  const products = await Product.find({ 
    isOnSale: true, 
    isActive: true 
  }).limit(8);
  res.json(products);
}));

// Create product (admin)
router.post('/', protect, admin, asyncHandler(async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
}));

// Update product (admin)
router.put('/:id', protect, admin, asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
}));

// Delete product (admin)
router.delete('/:id', protect, admin, asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json({ message: 'Product deleted successfully' });
}));

module.exports = router;
