import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Blog.css';


const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', content: '' });

  const fetchBlogs = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/blogs');
      setBlogs(res.data);
    } catch (err) {
      alert("Error fetching blogs");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      fetchBlogs();
    } catch (err) {
      alert("Error deleting blog");
    }
  };

  const startEdit = (blog) => {
    setEditId(blog._id);
    setEditForm({ title: blog.title, content: blog.content });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/blogs/${editId}`, editForm);
      setEditId(null);
      setEditForm({ title: '', content: '' });
      fetchBlogs();
    } catch (err) {
      alert("Error updating blog");
    }
  };

  return (
    <div className="blog-list">
  <h3>Blog List</h3>
  {blogs.map(blog => (
    <div key={blog._id} className="blog-list-item">
      {editId === blog._id ? (
        <form onSubmit={handleEditSubmit} className="edit-blog-form">
          <input
            name="title"
            value={editForm.title}
            onChange={handleEditChange}
            placeholder="Title"
            required
          />
          <textarea
            name="content"
            value={editForm.content}
            onChange={handleEditChange}
            placeholder="Content"
            required
          />
          <div className="blog-buttons">
            <button type="submit" className="btn save-btn">Save</button>
            <button type="button" className="btn cancel-btn" onClick={() => setEditId(null)}>Cancel</button>
          </div>
        </form>
      ) : (
        <>
          <h4>{blog.title}</h4>
          <p>{blog.content}</p>
          <div className="blog-buttons">
            <button className="btn edit-btn" onClick={() => startEdit(blog)}>Edit</button>
            <button className="btn delete-btn" onClick={() => handleDelete(blog._id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  ))}
</div>

  );
};

export default BlogList;
