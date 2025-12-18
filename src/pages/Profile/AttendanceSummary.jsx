import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import ProfileCard from '../../Components/profile/ProfileCard';
import SummaryCard from '../../Components/profile/SummaryCard';
import { getStudentById, getStudentAttendance } from '../../Services/studentService';

const AttendanceSummary = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [attendance, setAttendance] = useState(null);

  const monthlyAttendance = [
    { month: 'January', present: 20, total: 22, percentage: 91 },
    { month: 'February', present: 18, total: 20, percentage: 90 },
    { month: 'March', present: 19, total: 23, percentage: 83 },
    { month: 'April', present: 21, total: 21, percentage: 100 },
    { month: 'May', present: 17, total: 20, percentage: 85 }
  ];

  useEffect(() => {
    const studentData = getStudentById(id || 1);
    const attendanceData = getStudentAttendance(id || 1);
    setStudent(studentData);
    setAttendance(attendanceData);
  }, [id]);

  if (!student || !attendance) {
    return (
      <div className="min-h-screen bg-gray-50">
      
        <div className="flex">
          
          <div className="flex-1 p-6">
            <div className="text-center">Data not found</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
    
      <div className="flex">
    
        <div className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Attendance Summary</h1>
                <p className="text-gray-600">{student.name} - Class {student.class}</p>
              </div>
              <button
                onClick={() => navigate(`/profile/${id || 1}`)}
                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
              >
                Back to Profile
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <SummaryCard
                title="Overall Attendance"
                value={`${attendance.percentage}%`}
                subtitle={`${attendance.present} out of ${attendance.total} days`}
                color="blue"
                icon="📊"
              />
              <SummaryCard
                title="Present Days"
                value={attendance.present}
                subtitle="Total present days"
                color="green"
                icon="✅"
              />
              <SummaryCard
                title="Absent Days"
                value={attendance.total - attendance.present}
                subtitle="Total absent days"
                color="red"
                icon="❌"
              />
            </div>

            <ProfileCard title="Monthly Attendance Breakdown">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Month</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-700">Present</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-700">Total</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-700">Percentage</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-700">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {monthlyAttendance.map((month, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4">{month.month}</td>
                        <td className="py-3 px-4 text-center">{month.present}</td>
                        <td className="py-3 px-4 text-center">{month.total}</td>
                        <td className="py-3 px-4 text-center font-semibold">{month.percentage}%</td>
                        <td className="py-3 px-4 text-center">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            month.percentage >= 90 
                              ? 'bg-green-100 text-green-800'
                              : month.percentage >= 75
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {month.percentage >= 90 ? 'Excellent' : month.percentage >= 75 ? 'Good' : 'Poor'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ProfileCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceSummary;