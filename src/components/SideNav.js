import React from 'react';
import './SideNav.css';

const SideNav = () => {
  return (
    <div className="sidenav">
      <ul>
        <li><a href="#home">HR Management </a></li>
        <li><a href="#about">Dashboard</a></li>
        <li><a href="#services" className='active'>Employee management</a></li>
        <li><a href="#contact">shift management</a></li>
        <li><a className='Attendence' href="#contact">Attendence </a></li>
        <li><a className='reports'  href="#contact">reports</a></li>
      </ul>
    </div>
  );
};

export default SideNav;
