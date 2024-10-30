import React from 'react';
import './SideNav.css';
import { Link } from 'react-router-dom';

// import DeleteIcon from '@mui/icons-material/Delete';


const SideNav = () => {
  return (
    <div className="sidenav">
      <ul>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <li><a>Dashboard</a></li>
        </Link>
        <li><a href="/employee">Employee management</a></li>
        <li><a href="/shiftmanagement" className='active'>Shift management</a></li>
        <li><a className='Attendence' href="/attendance">Attendence </a></li>
        <li><a className='reports' href="/dashboard">Reports</a></li>
      </ul>
    </div>
  );
};

export default SideNav;
