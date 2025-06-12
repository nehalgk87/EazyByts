const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    // ✅ Check if username exists
    const exists = await User.findOneAndDelete({ username });
    if (exists) return res.status(400).json({ msg: 'User already exists' });

    // ✅ Hash password
    const hashed = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashed });
    await newUser.save();

    res.json({ msg: 'User registered successfully ✅' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.login = async (req, res) => {
  try {
// authController.js (or routes)
const { username, password } = req.body;
const user = await User.findOne({ username });
if (!user) return res.status(400).json({ msg: 'No user found' });

const isMatch = await bcrypt.compare(password, user.password);
if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
res.json({ token, user: { id: user._id, username: user.username } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

