const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// Create blog
router.post('/', async (req, res) => {
  try {
    const { title, content } = req.body;
    const newBlog = new Blog({ title, content });
    await newBlog.save();
    res.json({ msg: 'Blog created successfully ✅' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating blog ❌' });
  }
});

// Get all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching blogs ❌' });
  }
});

// Update blog
router.put('/:id', async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    res.json(updatedBlog);
  } catch (error) {
    res.status(500).json({ error: 'Error updating blog ❌' });
  }
});

// Delete blog
router.delete('/:id', async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Blog deleted ✅' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting blog ❌' });
  }
});

module.exports = router;
