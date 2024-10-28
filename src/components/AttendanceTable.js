import React from 'react';
import './AttendanceTable.css'; 

const AttendanceTable = () => {
    const attendanceData = [
        {
            id: 1,
            date: '2024-10-26',
            clockIn: '09:15 AM',
            clockOut: '06:15 PM',
            lateComing: '0 minutes',
            earlyGoing: '0 minutes',
            totalWorkingTime: 480, // in minutes
        },
        {
            id: 2,
            date: '2024-10-26',
            clockIn: '09:15 AM',
            clockOut: '06:15 PM',
            lateComing: '15 minutes',
            earlyGoing: '0 minutes',
            totalWorkingTime: 465,
        },
        {
            id: 3,
            date: '2024-10-26',
            clockIn: '09:15 AM',
            clockOut: '06:15 PM',
            lateComing: '0 minutes',
            earlyGoing: '15 minutes',
            totalWorkingTime: 450,
        },
        {
            id: 4,
            date: '2024-10-26',
            clockIn: '09:15 AM',
            clockOut: '06:15 PM',
            lateComing: '5 minutes',
            earlyGoing: '0 minutes',
            totalWorkingTime: 480,
        },
        {
            id: 5,
            date: '2024-10-26',
            clockIn: '09:15 AM',
            clockOut: '06:15 PM',
            lateComing: '5 minutes',
            earlyGoing: '0 minutes',
            totalWorkingTime: 480,
        },
    ];

    return (
        <div className="table-container">

            <table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Date</th>
                        <th>Clock In</th>
                        <th>Clock Out</th>
                        <th>Late Coming</th>
                        <th>Early Going</th>
                        <th>Total Working Time (min)</th>
                    </tr>
                </thead>
                <tbody>
                    {attendanceData.map((record) => (
                        <tr key={record.id}>
                            <td>{record.id}</td>
                            <td>{record.date}</td>
                            <td>{record.clockIn}</td>
                            <td>{record.clockOut}</td>
                            <td>{record.lateComing}</td>
                            <td>{record.earlyGoing}</td>
                            <td>{record.totalWorkingTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AttendanceTable;
