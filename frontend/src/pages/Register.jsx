import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' }); // type can be 'success' or 'error'
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate inputs
    let hasErrors = false;
    const newErrors = { ...errors };
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
      hasErrors = true;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      hasErrors = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      hasErrors = true;
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
      hasErrors = true;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      hasErrors = true;
    }
    
    setErrors(newErrors);
    if (hasErrors) return;
    
    setLoading(true);
    setMessage({ text: '', type: '' });

    const userData = {
      username: formData.username,
      email: formData.email,
      password: formData.password
    };

    try {
     await axios.post('http://127.0.0.1:8000/api/register/', userData);
      setMessage({ text: 'Registration successful!', type: 'success' });
      setFormData({
        username: '',
        email: '',
        password: ''
      });
    } catch (error) {
      if (error.response) {
        // Handle server validation errors
        if (error.response.data) {
          const serverErrors = error.response.data;
          let errorMessage = 'Registration failed.';
          
          // Update field-specific errors if they exist in the response
          const updatedErrors = { ...errors };
          if (serverErrors.username) {
            updatedErrors.username = serverErrors.username.join(' ');
          }
          if (serverErrors.email) {
            updatedErrors.email = serverErrors.email.join(' ');
          }
          if (serverErrors.password) {
            updatedErrors.password = serverErrors.password.join(' ');
          }
          setErrors(updatedErrors);
          
          // Set generic error message
          if (serverErrors.non_field_errors) {
            errorMessage = serverErrors.non_field_errors.join(' ');
          }
          setMessage({ text: errorMessage, type: 'error' });
        } else {
          setMessage({ text: 'Registration failed. Please try again.', type: 'error' });
        }
      } else {
        setMessage({ text: error.message || 'An error occurred. Please try again.', type: 'error' });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      <form onSubmit={handleSubmit} style={{
        backgroundColor: '#111',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '400px'
      }}>
        <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '20px' }}>Register</h2>

        {/* Message display */}
        {message.text && (
          <div style={{
            padding: '10px',
            marginBottom: '15px',
            borderRadius: '4px',
            backgroundColor: message.type === 'success' ? '#4CAF50' : '#f44336',
            color: 'white'
          }}>
            {message.text}
          </div>
        )}

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          style={errors.username ? { ...inputStyle, border: '1px solid #f44336' } : inputStyle}
        />
        {errors.username && <span style={errorTextStyle}>{errors.username}</span>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={errors.email ? { ...inputStyle, border: '1px solid #f44336' } : inputStyle}
        />
        {errors.email && <span style={errorTextStyle}>{errors.email}</span>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={errors.password ? { ...inputStyle, border: '1px solid #f44336' } : inputStyle}
        />
        {errors.password && <span style={errorTextStyle}>{errors.password}</span>}

        <button 
          type="submit" 
          style={loading ? { ...buttonStyle, opacity: 0.7 } : buttonStyle}
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

// Reusable style objects
const inputStyle = {
  marginBottom: '5px',
  padding: '10px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#fff',
  color: '#000'
};

const buttonStyle = {
  padding: '10px',
  backgroundColor: '#e50914',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  fontWeight: 'bold',
  cursor: 'pointer',
  marginTop: '10px'
};

const errorTextStyle = {
  color: '#f44336',
  fontSize: '0.8rem',
  marginBottom: '10px',
  display: 'block'
};

export default Register;