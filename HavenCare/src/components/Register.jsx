import React, { useState } from 'react';
import axios from 'axios';


function Register() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', role: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:5555/register', formData);
      alert('User registered successfully');
    } catch (error) {
      alert('Error registering user');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <h2>Register</h2>
      <input type="text" name="username" placeholder="Username" onChange={handleChange} className="form-input" />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} className="form-input" />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} className="form-input" />
      <select name="role" onChange={handleChange} className="form-input">
        <option value="">Select Role</option>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit" className="form-button">Register</button>
    </form>
  );
}

export default Register;
