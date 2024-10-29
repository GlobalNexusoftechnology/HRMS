import React from 'react';
import './ShiftManagement.css';
import SideNav from './SideNav';

function ShiftManagement() {
  const shifts = [
    { name: "Evening shift", time: "4:00 PM - 6:00 PM" },
    { name: "Morning shift", time: "8:00 AM - 10:00 AM" },
    { name: "Mid morning shift", time: "10:00 AM - 12:00 PM" },
    { name: "Lunch shift", time: "12:00 PM - 2:00 PM" },
    { name: "Afternoon shift", time: "2:00 PM - 4:00 PM" },
  ];

  return (
    <div className="shift-management">
      <SideNav />
      <div className="for-margin">
        <div className="header">
          <h2>Shift Management</h2>
          <button className="new-shift-btn">New Shift</button>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search shifts..." />
        </div>

        <h4>All shifts</h4>

        <div className="shift-list">
          {shifts.map((shift, index) => (
            <div key={index} className="shift-item">
              <div className="shift-info">
                <span className="shift-name">{shift.name}</span>
                <span className="shift-time">{shift.time}</span>
              </div>
              <button className="edit-btn">Edit</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShiftManagement;
