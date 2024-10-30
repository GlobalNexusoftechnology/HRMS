import React from 'react'
import { useState } from 'react'
import SideNav from './SideNav'
import './AttendanceSummary.css'

const AttendanceSummary = () => {
  const [employees, setEmployees] = useState('All employees');


  const attendanceData = [
    {
      EmployeeName: 'Alice Broom',
      TotalMinutesEarlyGoing: '10 minutes',
      TotalMinutesLateGoing: '20 minutes',
      TotalMinutesWorking: '500 minutes',
      TotalMinutesPersonalWork: '200 minutes'
    
    },
    {
      EmployeeName: 'Raily Gate',
      TotalMinutesEarlyGoing: '10 minutes',
      TotalMinutesLateGoing: '20 minutes',
      TotalMinutesWorking: '500 minutes',
      TotalMinutesPersonalWork: '200 minutes'
    },
    {
      EmployeeName: 'Ben 10',
      TotalMinutesEarlyGoing: '10 minutes',
      TotalMinutesLateGoing: '20 minutes',
      TotalMinutesWorking: '500 minutes',
      TotalMinutesPersonalWork: '200 minutes'
    },
    {
      EmployeeName: 'Rock Bottom',
      TotalMinutesEarlyGoing: '10 minutes',
      TotalMinutesLateGoing: '20 minutes',
      TotalMinutesWorking: '500 minutes',
      TotalMinutesPersonalWork: '200 minutes'
    },

  ];


  return (
    <>
      <SideNav />
      <div className='container'>
        <h1 className='container-title'>Attendance Summary</h1>

        <p>Start Date</p>
        <input className='input-tag'></input>
        <p>End Date</p>
        <input className='input-tag'></input>
        <p>Employees</p>
          <select className='employees input-tag' value={employees} onChange={(e) => setEmployees(e.target.value)}>
            <option>All employees</option>
            <option>Employee 1</option>
            <option>Employee 2</option>
          </select>

          <div className='btns'>
            <button className='btn1'>Export as PDF</button>
            <button className='btn2'>Export as CSV</button>
          </div>

          <div className='summary'>
            <div className='summary-time'>
              <h2>Summary</h2>
              <div className='time'>
                <span>Total minutes late coming </span>
                <span>30 minutes</span>
              </div>
              <div className='time'>
                <span>Total minutes late coming </span>
                <span>30 minutes</span>
              </div>
              <div className='time'>
                <span>Total minutes late coming </span>
                <span>30 minutes</span>
              </div>
              <div className='time'>
                <span>Total minutes late coming </span>
                <span>30 minutes</span>
              </div>

            </div>
          </div>

          <div>
            <h2>Details</h2>

            <div className="table-container">

          <table>
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Total Minutes Early Going</th>
                <th>Total Minutes Late Going</th>
                <th>Total Minutes Working</th>
                <th>Total minutes personal work</th>

              </tr>
            </thead>
            <tbody>
              {attendanceData.map((summary) => (
                <tr key={summary.EmployeeName}>
                  <td>{summary.EmployeeName}</td>
                  <td>{summary.TotalMinutesLateGoing}</td>
                  <td>{summary.TotalMinutesEarlyGoing}</td>
                  <td>{summary.TotalMinutesWorking}</td>
                  <td>{summary.TotalMinutesPersonalWork}</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
          </div>
      </div>
    </>
  )
}

export default AttendanceSummary