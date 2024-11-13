import React from 'react';
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import { IconButton } from '@mui/material';
function Navbar() {
  return (
    <div className='navigation-bar'>
      <div className='nav-container'>
        
        <nav>

        <Link to='/dashboard'>
        <IconButton className='sidebar-icon'>
        <BsLayoutTextSidebarReverse /> 
        </IconButton>
        </Link>
          <ul className='nav-items'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/aboutus'>About us</Link>
            </li>
            <li>
            <Link to='/departments'>Departments</Link>
            </li>
            <li>
              <Link to='register'><CiUser /></Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
