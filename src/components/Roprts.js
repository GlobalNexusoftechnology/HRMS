// components/EmployeeReportForm.jsx
import React, { useState } from 'react';
import ReportDetails from './ReportDetails.js';
import './Reports.css';

const EmployeeReportForm = () => {
  const [employees, setEmployees] = useState('All employees');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [approvedTime, setApprovedTime] = useState(false);
  const [unapprovedTime, setUnapprovedTime] = useState(false);

  const generateReport = () => {
    alert('Report Generated!');
  };

  return (
    <main className="content">
      <h1>Generate attendance reports</h1>

      <div className="form-group">
        <label >Select employees</label>
        <select className='employees' value={employees} onChange={(e) => setEmployees(e.target.value)}>
          <option>All employees</option>
          <option>Employee 1</option>
          <option>Employee 2</option>
        </select>
      </div>

      <div className="form-group">
        <label>Select date range</label>
        <div className="date-inputs">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>

      <div className="form-group">
        <label>Include personal work time</label>
        <div className="buttons">
          <button
            className={approvedTime ? 'active' : ''}
            onClick={() => setApprovedTime(!approvedTime)}
          >
            Include approved time off
          </button>
          <button
            className={unapprovedTime ? 'active' : ''}
            onClick={() => setUnapprovedTime(!unapprovedTime)}
          >
            Include unapproved time off
          </button>
        </div>
      </div>

      <ReportDetails />
      <div className="action">
      <button className='Create'>Create Report</button>
      </div>
      <div className="actions">
        
        <button className="cancel">Cancel</button>
        <button className="generate" onClick={generateReport}>
          Generate report
        </button>
      </div>
    </main>
  );
};

export default EmployeeReportForm;
