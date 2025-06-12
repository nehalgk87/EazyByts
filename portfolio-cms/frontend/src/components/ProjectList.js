// 4. frontend/src/components/ProjectList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Project.css';

const ProjectList = ({ selectedProject, setSelectedProject, refreshProjects }) => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/projects');
      setProjects(res.data);
    } catch (err) {
      alert('Failed to load projects');
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [refreshProjects]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/projects/${id}`);
      fetchProjects();
    } catch (err) {
      alert('Error deleting project');
    }
  };

  return (
    <div className="project-list">
      <h3>Project List</h3>
  <ul>
    {projects.map(p => (
      <li key={p._id}>
        <strong>{p.title}</strong>: {p.description}
        <div>
          <button onClick={() => setSelectedProject(p)}>Edit</button>
          <button onClick={() => handleDelete(p._id)}>Delete</button>
        </div>
      </li>
    ))}
  </ul>
</div>

  );
};

export default ProjectList;
