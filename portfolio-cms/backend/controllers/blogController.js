const Blog = require('../models/Blog');

// Create Blog
const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const blog = new Blog({ title, content });
    await blog.save();
    res.json({ msg: "Blog created successfully ✅" });
  } catch (err) {
    res.status(500).json({ error: "Error creating blog" });
  }
};

// Get All Blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: "Error fetching blogs" });
  }
};

// Update Blog
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    await Blog.findByIdAndUpdate(id, { title, content });
    res.json({ msg: "Blog updated successfully ✅" });
  } catch (err) {
    res.status(500).json({ error: "Error updating blog" });
  }
};

// Delete Blog
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);
    res.json({ msg: "Blog deleted successfully 🗑️" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting blog" });
  }
};

module.exports = { createBlog, getBlogs, updateBlog, deleteBlog };
