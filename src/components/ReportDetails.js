import React from 'react';
import './ReportDetails.css';

const ReportDetails = () => {
  return (
    <div className="report-details">
      <h4>Report details</h4>
      <div className="detail-buttons">
        <button>Total minutes for Late Coming</button>
        <button>Total minutes for Early Going</button>
        <button>Total minutes for Working Time</button>
        <button>Total minutes for Approved Personal Work Time</button>
        <button>Total minutes for Unapproved Personal Work Time</button>
      </div>
    </div>
  );
};

export default ReportDetails;
