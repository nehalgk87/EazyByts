// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setSuccess('');
      await axios.post('http://localhost:5000/api/auth/register', formData);
      setSuccess('Registered successfully ✅');
      setTimeout(() => navigate('/'), 1500); // redirect to login
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed ❌');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="p-5 bg-light rounded shadow" style={{ maxWidth: 400, width: '100%' }}>
        <h2 className="mb-4 text-center">Register</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            className="form-control mb-3"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="form-control mb-3"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            className="form-control mb-3"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn-success w-100">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
