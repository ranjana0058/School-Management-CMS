import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import ProfileCard from '../../Components/profile/ProfileCard';
import ProfileAvatar from '../../Components/profile/ProfileAvatar';
import InfoRow from '../../Components/profile/InfoRow';
import { getStudentById } from '../../Services/studentService';
import { formatDate, calculateAge } from '../../utils/formatDate';

const StudentProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const studentData = getStudentById(id || 1);
    setStudent(studentData);
  }, [id]);

  if (!student) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-6">
            <div className="text-center">Student not found</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Student Profile</h2>
              <div className="flex gap-3">
                <button
                  onClick={() => navigate('/profile/add')}
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center gap-2"
                >
                  <span>➕</span>
                  Add Profile
                </button>
                <button
                  onClick={() => navigate(`/profile/edit/${student.id}`)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Edit Profile
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Profile Overview */}
              <div className="lg:col-span-1">
                <ProfileCard title="Profile Overview">
                  <div className="text-center mb-6">
                    <ProfileAvatar name={student.name} avatar={student.avatar} size="large" />
                    <h2 className="text-xl font-semibold mt-4">{student.name}</h2>
                    <p className="text-gray-600">Class {student.class} • Roll No: {student.rollNo}</p>
                  </div>
                  
                  <div className="space-y-1">
                    <InfoRow label="Email" value={student.email} />
                    <InfoRow label="Phone" value={student.phone} />
                    <InfoRow label="Date of Birth" value={formatDate(student.dateOfBirth)} />
                    <InfoRow label="Age" value={`${calculateAge(student.dateOfBirth)} years`} />
                    <InfoRow label="Address" value={student.address} />
                  </div>
                </ProfileCard>
              </div>

              {/* Quick Stats & Navigation */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div 
                    className="bg-blue-100 p-4 rounded-lg cursor-pointer hover:bg-blue-200 transition-colors"
                    onClick={() => navigate(`/profile/attendance/${student.id}`)}
                  >
                    <h3 className="text-sm font-medium text-blue-800">Attendance</h3>
                    <p className="text-2xl font-bold text-blue-600">{student.attendance.percentage}%</p>
                    <p className="text-sm text-blue-700">{student.attendance.present}/{student.attendance.total} days</p>
                  </div>

                  <div 
                    className="bg-green-100 p-4 rounded-lg cursor-pointer hover:bg-green-200 transition-colors"
                    onClick={() => navigate(`/profile/results/${student.id}`)}
                  >
                    <h3 className="text-sm font-medium text-green-800">Academic Results</h3>
                    <p className="text-2xl font-bold text-green-600">{student.results.gpa}</p>
                    <p className="text-sm text-green-700">GPA • {student.results.passedSubjects}/{student.results.totalSubjects} subjects</p>
                  </div>

                  <div 
                    className="bg-yellow-100 p-4 rounded-lg cursor-pointer hover:bg-yellow-200 transition-colors"
                    onClick={() => navigate(`/profile/fees/${student.id}`)}
                  >
                    <h3 className="text-sm font-medium text-yellow-800">Fee Status</h3>
                    <p className="text-2xl font-bold text-yellow-600">₹{student.fees.dueAmount}</p>
                    <p className="text-sm text-yellow-700">Due Amount</p>
                  </div>
                </div>

                {/* Parent Information */}
                <ProfileCard title="Parent/Guardian Information">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InfoRow label="Parent Name" value={student.parentName} />
                    <InfoRow label="Parent Phone" value={student.parentPhone} />
                    <InfoRow label="Parent Email" value={student.parentEmail} />
                  </div>
                </ProfileCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;