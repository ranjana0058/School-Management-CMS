import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../../Components/profile/ProfileCard';

const AddProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    class: '',
    rollNo: '',
    dateOfBirth: '',
    address: '',
    parentName: '',
    parentPhone: '',
    parentEmail: ''
  });

  const classes = ['10A', '10B', '9A', '9B', '8A', '8B', '7A', '7B'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.class || !formData.rollNo) {
      alert('Please fill all required fields!');
      return;
    }

    // Here you would typically call an API to create the profile
    console.log('Creating new profile:', formData);
    alert('Profile created successfully!');
    navigate('/students');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <div className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Add New Profile</h1>
                <p className="text-gray-600">Create a new student profile</p>
              </div>
              <button
                onClick={() => navigate('/students')}
                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
              >
                Back to Students
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Student Information */}
                <ProfileCard title="Student Information">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter student's full name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter email address"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter phone number"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Class *
                        </label>
                        <select
                          name="class"
                          value={formData.class}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="">Select Class</option>
                          {classes.map(cls => (
                            <option key={cls} value={cls}>{cls}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Roll Number *
                        </label>
                        <input
                          type="text"
                          name="rollNo"
                          value={formData.rollNo}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter roll number"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address
                      </label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        rows="3"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter complete address"
                      />
                    </div>
                  </div>
                </ProfileCard>

                {/* Parent Information */}
                <ProfileCard title="Parent/Guardian Information">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Parent/Guardian Name
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter parent's name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Parent Phone
                      </label>
                      <input
                        type="tel"
                        name="parentPhone"
                        value={formData.parentPhone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter parent's phone"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Parent Email
                      </label>
                      <input
                        type="email"
                        name="parentEmail"
                        value={formData.parentEmail}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter parent's email"
                      />
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Default Settings</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Initial attendance: 0%</li>
                        <li>• Fee status: Pending</li>
                        <li>• Academic status: Active</li>
                        <li>• Login credentials will be generated</li>
                      </ul>
                    </div>
                  </div>
                </ProfileCard>
              </div>

              <div className="mt-8 flex gap-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 font-semibold"
                >
                  Create Profile
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/students')}
                  className="bg-gray-500 text-white px-8 py-3 rounded-md hover:bg-gray-600 font-semibold"
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

export default AddProfile;