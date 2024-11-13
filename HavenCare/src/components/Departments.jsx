// Departments.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography } from '@mui/material';
import DepartmentCard from './DepartmentCard';

function Departments() {
  const [departments, setDepartments] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    const response = await axios.get('http://127.0.0.1:5555/departments');
    setDepartments(response.data);
  };

  const addDepartment = async () => {
    await axios.post('http://127.0.0.1:5555/departments', { name });
    fetchDepartments();
    setName('');
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>Departments</Typography>
      <Box display="flex" alignItems="center" gap={2} marginBottom={3}>
        <TextField
          label="Department Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={addDepartment}>
          Add Department
        </Button>
      </Box>
      <Box>
        {departments.map(dept => (
          <DepartmentCard key={dept.id} department={dept} />
        ))}
      </Box>
    </Box>
  );
}

export default Departments;
