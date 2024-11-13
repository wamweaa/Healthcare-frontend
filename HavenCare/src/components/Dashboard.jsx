import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, TextField, Paper, List, ListItem, ListItemText, Divider, AppBar, Toolbar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const navItems = {
  home: 'Home',
  incoming: 'Incoming Appointments',
  outgoing: 'Outgoing Appointments',
  notifications: 'Notifications',
  settings: 'Settings',
};

function Dashboard() {
  const [activePanel, setActivePanel] = useState('incoming');
  const [appointments, setAppointments] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, [activePanel]);

  const fetchAppointments = async () => {
    try {
      const endpoint = activePanel === 'incoming' ? '/appointments/upcoming' : '/appointments/past';
      const response = await axios.get(`http://127.0.0.1:5555${endpoint}`);
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const fetchNotifications = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5555/notifications');
      setNotifications(response.data);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  useEffect(() => {
    if (activePanel === 'notifications') {
      fetchNotifications();
    }
  }, [activePanel]);

  return (
    <Box display="flex" height="100vh">
      {/* Sidebar */}
      <Box width="250px" bgcolor="primary.main" color="white" p={2}>
        <Box mb={4} textAlign="center">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/planner_dashboard_logo.svg" alt="Logo" style={{ width: '100%' }} />
        </Box>
        <List>
          {Object.entries(navItems).map(([key, label]) => (
            <ListItem button key={key} selected={activePanel === key} onClick={() => setActivePanel(key)}>
              <ListItemText primary={label} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Main Content */}
      <Box flexGrow={1} bgcolor="background.default">
        <AppBar position="static" color="default">
          <Toolbar>
            <TextField
              variant="outlined"
              placeholder="Search..."
              InputProps={{
                startAdornment: <SearchIcon position="start" />,
              }}
              style={{ width: '100%' }}
            />
          </Toolbar>
        </AppBar>

        <Box p={3}>
          <Typography variant="h5" gutterBottom>
            {navItems[activePanel]}
          </Typography>
          <Divider />

          {/* Content Panel */}
          <Box mt={2}>
            {activePanel === 'incoming' || activePanel === 'outgoing'
              ? appointments.map((appointment) => (
                  <Paper key={appointment.id} variant="outlined" sx={{ p: 2, mb: 2 }}>
                    <Typography variant="h6">Appointment ID: {appointment.id}</Typography>
                    <Typography variant="body2">{appointment.appointment_date}</Typography>
                  </Paper>
                ))
              : activePanel === 'notifications' &&
                notifications.map((notification, index) => (
                  <Paper key={index} variant="outlined" sx={{ p: 2, mb: 2 }}>
                    <Typography variant="body1">{notification.message}</Typography>
                  </Paper>
                ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
