import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5555/login', formData);
      alert(`Login successful as ${response.data.role}`);
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
