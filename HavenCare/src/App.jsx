import { useState } from 'react'
import LandingPage from './components/LandingPage'
import Register from './components/Register'
import Login from './components/Login'
import AppointmentList from './components/AppointmentList'

import Departments from './components/Departments'
import AddDoctor from './components/Doctors'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Aboutus from './components/Aboutus'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Appointmentlist' element={<AppointmentList/>}/>
        <Route path='/departments' element={<Departments/>}/>
        <Route path='/add-doctors' element={<AddDoctor/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
      </Routes>
      <Dashboard/>
    </Router>

    </>
  )
}

export default App
