const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const genToken = require('../utils/generateTokens');
const asyncHandler = require('express-async-handler');

// Admin login (or normal login)
router.post('/login', asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    return res.json({ token: genToken(user), user: { name: user.name, email: user.email, isAdmin: user.isAdmin } });
  }
  res.status(401).json({ message: 'Invalid credentials' });
}));

// (Optional) route to create admin user (once)
router.post('/seed-admin', asyncHandler(async (req,res) => {
  const { name, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed, isAdmin: true });
  res.json({ user });
}));

module.exports = router;
