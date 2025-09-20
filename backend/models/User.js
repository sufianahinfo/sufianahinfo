const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String, // hashed
  isAdmin: { type: Boolean, default: false },
}, { timestamps: true });

// Check if model already exists to prevent overwrite error
module.exports = mongoose.models.User || mongoose.model('User', userSchema);
