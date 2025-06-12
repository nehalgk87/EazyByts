// 2. backend/routes/authRoutes.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// backend/routes/authRoutes.js
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // 💡 1. Validate inputs
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    // 💡 2. Check if user exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // 💡 3. Hash and save
    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashed });
    await user.save();

    return res.json({ msg: 'User registered successfully ✅' });

  } catch (err) {
    // ✅ This now logs and returns the real cause
    console.error('Registration Error:', err);
    return res.status(500).json({ error: err.message || 'Registration failed ❌' });
  }
});



// LOGIN
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ error: 'Invalid credentials' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id }, 'secret123', { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;