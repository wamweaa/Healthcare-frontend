// src/components/Doctors.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [formData, setFormData] = useState({ name: '', department_id: '', user_id: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchDoctors();
    fetchDepartments();
  }, []);

  // Fetch doctors from the backend
  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5555/doctors');
      setDoctors(response.data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  // Fetch departments from the backend
  const fetchDepartments = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5555/departments');
      setDepartments(response.data);
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  };

  // Handle form data change
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Add new doctor to the backend
  const addDoctor = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:5555/doctors', formData);
      setMessage('Doctor added successfully');
      setFormData({ name: '', department_id: '', user_id: '' }); // Reset form
      fetchDoctors(); // Refresh doctors list
    } catch (error) {
      console.error('Error adding doctor:', error);
      setMessage('Failed to add doctor');
    }
  };

  return (
    <div className="doctors-container">
      <h2>Doctors</h2>
      
      {/* Add Doctor Form */}
      <div className="add-doctor-form">
        <h3>Add a New Doctor</h3>
        <form onSubmit={addDoctor}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Department:</label>
            <select
              name="department_id"
              value={formData.department_id}
              onChange={handleChange}
              required
            >
              <option value="">Select Department</option>
              {departments.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>User ID:</label>
            <input
              type="text"
              name="user_id"
              value={formData.user_id}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Add Doctor</button>
        </form>
        {message && <p>{message}</p>}
      </div>
      
      {/* Doctors List */}
      <div className="doctor-list">
        <h3>Doctor List</h3>
        <ul>
          {doctors.map((doctor) => (
            <li key={doctor.id}>
              {doctor.name} - {doctor.department_name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Doctors;
