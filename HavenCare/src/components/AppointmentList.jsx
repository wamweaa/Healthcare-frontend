import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({ patient_id: '', doctor_id: '', appointment_date: '' });
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchAppointments();
    fetchDoctors();
  }, []);

  const fetchAppointments = async () => {
    const response = await axios.get('http://127.0.0.1:5555/appointments');
    setAppointments(response.data);
  };

  const fetchDoctors = async () => {
    const response = await axios.get('http://127.0.0.1:5555/doctors');
    setDoctors(response.data);
  };

  const addAppointment = async () => {
    await axios.post('http://127.0.0.1:5555/appointments', formData);
    fetchAppointments();
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <h2>Appointments</h2>
      <input type="text" name="patient_id" placeholder="Patient ID" onChange={handleChange} />
      <select name="doctor_id" onChange={handleChange}>
        <option value="">Select Doctor</option>
        {doctors.map(doc => <option key={doc.id} value={doc.id}>{doc.name}</option>)}
      </select>
      <input type="datetime-local" name="appointment_date" onChange={handleChange} />
      <button onClick={addAppointment}>Add Appointment</button>
      <ul>
        {appointments.map(appt => (
          <li key={appt.id}>
            Appointment with Dr. {appt.doctor_name} on {appt.appointment_date} - {appt.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Appointments;
