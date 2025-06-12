// src/components/BlogForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlogForm = ({ selectedBlog, setSelectedBlog, onBlogChange }) => {
  const [formData, setFormData] = useState({ title: '', content: '' });

  useEffect(() => {
    if (selectedBlog) {
      setFormData({
        title: selectedBlog.title,
        content: selectedBlog.content,
      });
    }
  }, [selectedBlog]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (selectedBlog) {
        await axios.put(`http://localhost:5000/api/blogs/${selectedBlog._id}`, formData);
        alert('Blog updated');
        setSelectedBlog(null);
      } else {
        await axios.post('http://localhost:5000/api/blogs', formData);
        alert('Blog created');
      }

      setFormData({ title: '', content: '' });
      onBlogChange();
    } catch (err) {
      alert('Error saving blog');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: '#fff',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        maxWidth: '500px',
        marginBottom: '30px'
      }}
    >
      <h3 style={{ marginBottom: '10px' }}>{selectedBlog ? 'Edit Blog' : 'Create Blog'}</h3>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '10px',
          border: '1px solid #ccc',
          borderRadius: '6px'
        }}
      />
      <textarea
        name="content"
        placeholder="Content"
        value={formData.content}
        onChange={handleChange}
        required
        rows="4"
        style={{
          width: '100%',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '6px',
          marginBottom: '10px'
        }}
      />
      <button
        type="submit"
        style={{
          background: '#007bff',
          color: '#fff',
          padding: '10px 16px',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        {selectedBlog ? 'Update Blog' : 'Create Blog'}
      </button>
    </form>
  );
};

export default BlogForm;
