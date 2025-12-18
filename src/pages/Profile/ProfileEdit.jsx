import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import ProfileCard from '../../Components/profile/ProfileCard';
import { getStudentById, updateStudent } from '../../Services/studentService';

const ProfileEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    parentName: '',
    parentPhone: '',
    parentEmail: ''
  });

  useEffect(() => {
    const student = getStudentById(id || 1);
    if (student) {
      setFormData({
        name: student.name,
        email: student.email,
        phone: student.phone,
        dateOfBirth: student.dateOfBirth,
        address: student.address,
        parentName: student.parentName,
        parentPhone: student.parentPhone,
        parentEmail: student.parentEmail
      });
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateStudent(id || 1, formData);
    alert('Profile updated successfully!');
    navigate(`/profile/${id || 1}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="flex">
  
        <div className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-gray-800">Edit Profile</h1>
              <button
                onClick={() => navigate(`/profile/${id || 1}`)}
                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Personal Information */}
                <ProfileCard title="Personal Information">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        rows="3"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </ProfileCard>

                {/* Parent Information */}
                <ProfileCard title="Parent/Guardian Information">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Parent Name</label>
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Parent Phone</label>
                      <input
                        type="tel"
                        name="parentPhone"
                        value={formData.parentPhone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Parent Email</label>
                      <input
                        type="email"
                        name="parentEmail"
                        value={formData.parentEmail}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </ProfileCard>
              </div>

              <div className="mt-6 flex gap-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => navigate(`/profile/${id || 1}`)}
                  className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;