import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Register from './components/Register';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated
              ? <Navigate to="/dashboard" />
              : <Login onLogin={handleLogin} />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            isAuthenticated
              ? <Dashboard />
              : <Navigate to="/" />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
