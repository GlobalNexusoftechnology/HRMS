import React from 'react';
import './Employee.css';
import SideNav from './SideNav';

function EmployeeDetails() {
  const attendanceData = [
    {
      startTime: '08:00 AM',
      EndTime: '04:00 AM',
      BreakTime: '1 hour',
      OverTime: 'N/A',
      TotalTime: '480',
      Action: 'Edit'
      // totalWorkingTime: 480, // in minutes
    },
    {
      startTime: '07:00 AM',
      EndTime: '04:00 AM',
      BreakTime: '1 hour',
      OverTime: 'N/A',
      TotalTime: '480',
      Action: 'Edit'
    },
    {
      startTime: '09:00 AM',
      EndTime: '04:00 AM',
      BreakTime: '1 hour',
      OverTime: 'N/A',
      TotalTime: '480',
      Action: 'Edit'
    },
    {
      startTime: '10:00 AM',
      EndTime: '04:00 AM',
      BreakTime: '1 hour',
      OverTime: 'N/A',
      TotalTime: '480',
      Action: 'Edit'
    },

  ];

  return (
    
    <div className="container">

      <SideNav />

      <div className="employee-details">
        <h2>Alison Smith</h2>
        <h4>Employee details</h4>
        <div className="details-container">
          <div className="details-row">
            <div className="details-item">
              <span className="label">Name</span>
              <span className="value">Alison Smith</span>
            </div>
            <div className="details-item">
              <span className="label">Employee ID</span>
              <span className="value">001</span>
            </div>
          </div>
          <div className="details-row">
            <div className="details-item">
              <span className="label">Assigned Shift</span>
              <span className="value">8:00 AM - 4:00 PM</span>
            </div>
            <div className="details-item">
              <span className="label">Buffer Time</span>
              <span className="value">15 minutes</span>
            </div>
          </div>
          <div className="details-item full-width">
            <span className="label">Applied Personal Work Time</span>
            <span className="value">2 hours</span>
          </div>
        </div>
        <div className="table-container">

          <table>
            <thead>
              <tr>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Break Time</th>
                <th>Over Time</th>
                <th>Total Time</th>
                <th>Actions</th>

              </tr>
            </thead>
            <tbody>
              {attendanceData.map((employee) => (
                <tr key={employee.startTime}>
                  <td>{employee.EndTime}</td>
                  <td>{employee.BreakTime}</td>
                  <td>{employee.OverTime}</td>
                  <td>{employee.TotalTime}</td>
                  <td>{employee.lateComing}</td>
                  <td>{employee.Action}</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
}

export default EmployeeDetails;
