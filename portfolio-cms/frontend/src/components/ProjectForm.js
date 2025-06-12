// 3. frontend/src/components/ProjectForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Project.css';

const ProjectForm = ({ selectedProject, setSelectedProject, onProjectChange }) => {
  const [formData, setFormData] = useState({ title: '', description: '' });

  useEffect(() => {
    if (selectedProject) {
      setFormData({
        title: selectedProject.title,
        description: selectedProject.description
      });
    }
  }, [selectedProject]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      if (selectedProject) {
        await axios.put(`http://localhost:5000/api/projects/${selectedProject._id}`, formData);
        alert('Project updated');
        setSelectedProject(null);
      } else {
        await axios.post('http://localhost:5000/api/projects', formData);
        alert('Project created');
      }
      setFormData({ title: '', description: '' });
      onProjectChange();
    } catch (err) {
      alert('Error saving project');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="project-form">
  <input
    name="title"
    value={formData.title}
    onChange={handleChange}
    placeholder="Title"
    required
  />
  <input
    name="description"
    value={formData.description}
    onChange={handleChange}
    placeholder="Description"
    required
  />
  <button type="submit">
    {selectedProject ? 'Update' : 'Create'} Project
  </button>
</form>
  );
};

export default ProjectForm;
