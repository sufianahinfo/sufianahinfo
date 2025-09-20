const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    title: String,
    qty: Number,
    price: Number
  }],
  total: Number,
  status: { type: String, default: 'pending' }, // pending, paid, shipped
  shippingAddress: Object,
  paymentIntentId: String, // stripe
}, { timestamps: true });
// Check if model already exists to prevent overwrite error
module.exports = mongoose.models.Order || mongoose.model('Order', orderSchema);
