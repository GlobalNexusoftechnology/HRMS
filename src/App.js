import React from 'react';
import SideNav from './components/SideNav';
import './App.css'; // Ensure to import your CSS
// import ShiftManagement from './components/ShiftManagement';
// import AttendanceTable from './components/AttendanceTable';
// import Employee from './components/Employee'
import Reports from './components/Roprts'


function App() {
  return (
    <div>
      <SideNav  />
      <div style={{ marginLeft: '260px', padding: '20px',position:'sticky' }}>
        {/* <h1>Attendence</h1>
        <h4>filter by</h4> */}

        <form>
          
        </form>
        
        {/* Button container with four buttons */}
         {/* <div className="button-container">
          <button className="main-button">All</button>
          <button className="main-button">present</button>
          <button className="main-button">absent</button>
          <button className="main-button">leave</button>
        </div>  */}
        {/* <h2>
          Attendence Records
        </h2> */}
        {/* <AttendanceTable/> */}
        {/* <Employee/> */}
        {/* <ShiftManagement/> */}
        <Reports/>
        
      </div>
    </div>
  );
}

export default App;
