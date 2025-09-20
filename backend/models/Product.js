const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  longDescription: String,
  price: { type: Number, required: true },
  originalPrice: Number, // For sale prices
  images: [String], // cloudinary urls
  category: { 
    type: String, 
    required: true,
    enum: ['Men', 'Women', 'Unisex']
  },
  sizes: [String], // Available sizes like ['30ml', '50ml', '100ml']
  stock: { type: Number, default: 0 },
  isOnSale: { type: Boolean, default: false },
  isFeatured: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
  
  // Fragrance specific fields
  fragranceNotes: {
    top: [String], // Top notes
    middle: [String], // Middle notes  
    base: [String] // Base notes
  },
  concentration: {
    type: String,
    enum: ['Eau de Cologne', 'Eau de Toilette', 'Eau de Parfum', 'Parfum'],
    default: 'Eau de Parfum'
  },
  volume: String, // e.g., '50ml', '100ml'
  brand: { type: String, default: 'Sufianah' },
  
  // SEO fields
  metaTitle: String,
  metaDescription: String,
  
  // Timestamps
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Update the updatedAt field before saving
productSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Index for better search performance
productSchema.index({ title: 'text', description: 'text' });
productSchema.index({ category: 1 });
productSchema.index({ isActive: 1, isFeatured: 1 });
productSchema.index({ price: 1 });

// Check if model already exists to prevent overwrite error
module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);
