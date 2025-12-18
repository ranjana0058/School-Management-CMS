import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import ProfileCard from '../../Components/profile/ProfileCard';
import InfoRow from '../../Components/profile/InfoRow';
import ProfileAvatar from '../../Components/profile/ProfileAvatar';
import { getStudentById } from '../../Services/studentService';

const ParentInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);

  const emergencyContacts = [
    { name: 'Dr. Sarah Doe', relation: 'Mother', phone: '123-456-7892', email: 'sarah.doe@email.com' },
    { name: 'Michael Doe', relation: 'Uncle', phone: '123-456-7893', email: 'michael.doe@email.com' }
  ];

  useEffect(() => {
    const studentData = getStudentById(id || 1);
    setStudent(studentData);
  }, [id]);

  if (!student) {
    return (
      <div className="min-h-screen bg-gray-50">
        
        <div className="flex">
    
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
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Parent Information</h1>
                <p className="text-gray-600">{student.name} - Class {student.class}</p>
              </div>
              <button
                onClick={() => navigate(`/profile/${id || 1}`)}
                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
              >
                Back to Profile
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Primary Guardian */}
              <ProfileCard title="Primary Guardian">
                <div className="text-center mb-6">
                  <ProfileAvatar name={student.parentName} size="medium" />
                  <h3 className="text-lg font-semibold mt-3">{student.parentName}</h3>
                  <p className="text-gray-600">Father</p>
                </div>
                
                <div className="space-y-1">
                  <InfoRow 
                    label="Phone" 
                    value={student.parentPhone}
                    icon="📞"
                  />
                  <InfoRow 
                    label="Email" 
                    value={student.parentEmail}
                    icon="📧"
                  />
                  <InfoRow 
                    label="Occupation" 
                    value="Software Engineer"
                    icon="💼"
                  />
                  <InfoRow 
                    label="Address" 
                    value={student.address}
                    icon="🏠"
                  />
                </div>
              </ProfileCard>

              {/* Emergency Contacts */}
              <ProfileCard title="Emergency Contacts">
                <div className="space-y-4">
                  {emergencyContacts.map((contact, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center mb-3">
                        <ProfileAvatar name={contact.name} size="small" />
                        <div className="ml-3">
                          <h4 className="font-semibold">{contact.name}</h4>
                          <p className="text-sm text-gray-600">{contact.relation}</p>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <InfoRow label="Phone" value={contact.phone} />
                        <InfoRow label="Email" value={contact.email} />
                      </div>
                    </div>
                  ))}
                </div>
              </ProfileCard>

              {/* Communication Preferences */}
              <ProfileCard title="Communication Preferences">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>SMS Notifications</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Enabled</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Email Updates</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Enabled</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Progress Reports</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Monthly</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Parent-Teacher Meetings</span>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Quarterly</span>
                  </div>
                </div>
              </ProfileCard>

              {/* Recent Communications */}
              <ProfileCard title="Recent Communications">
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="font-semibold text-sm">Monthly Progress Report</h5>
                        <p className="text-xs text-gray-600 mt-1">Sent via email</p>
                      </div>
                      <span className="text-xs text-gray-500">2 days ago</span>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="font-semibold text-sm">Parent-Teacher Meeting Reminder</h5>
                        <p className="text-xs text-gray-600 mt-1">Sent via SMS</p>
                      </div>
                      <span className="text-xs text-gray-500">1 week ago</span>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="font-semibold text-sm">Fee Payment Confirmation</h5>
                        <p className="text-xs text-gray-600 mt-1">Sent via email</p>
                      </div>
                      <span className="text-xs text-gray-500">2 weeks ago</span>
                    </div>
                  </div>
                </div>
              </ProfileCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentInfo;