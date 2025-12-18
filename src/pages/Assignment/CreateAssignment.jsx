import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { addAssignment } from '../../Services/AssignmentService';


const CreateAssignment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    class: '',
    dueDate: '',
    description: ''
  });

  const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'History', 'Geography'];
  const classes = ['10A', '10B', '9A', '9B', '8A', '8B', '7A', '7B'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.subject || !formData.class || !formData.dueDate || !formData.description) {
      alert('Please fill all fields!');
      return;
    }

    addAssignment(formData);
    alert('Assignment created successfully!');
    navigate('/assignments');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="flex">
        
        <div className="flex-1 p-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Create New Assignment</h2>
              <button
                onClick={() => navigate('/assignments')}
                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
              >
                Back to List
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Assignment Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter assignment title"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Subject</option>
                    {subjects.map(subject => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>

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
                    Due Date *
                  </label>
                  <input
                    type="date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Assignment Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="6"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter detailed assignment description, instructions, and requirements..."
                  required
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
                >
                  Create Assignment
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/assignments')}
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

export default CreateAssignment;