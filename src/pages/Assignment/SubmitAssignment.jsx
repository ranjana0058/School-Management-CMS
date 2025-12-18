import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { getAssignmentById, submitAssignment } from '../../Services/AssignmentService';

const SubmitAssignment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [assignment, setAssignment] = useState(null);
  const [formData, setFormData] = useState({
    studentName: '',
    submissionText: '',
    file: null
  });

  useEffect(() => {
    const assignmentData = getAssignmentById(id);
    setAssignment(assignmentData);
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.studentName || !formData.submissionText) {
      alert('Please fill all required fields!');
      return;
    }

    const submission = {
      assignmentId: parseInt(id),
      studentName: formData.studentName,
      submittedDate: new Date().toISOString().split('T')[0],
      submissionText: formData.submissionText,
      fileName: formData.file?.name || null,
      grade: null,
      feedback: null
    };

    submitAssignment(submission);
    alert('Assignment submitted successfully!');
    navigate(`/assignment/details/${id}`);
  };

  if (!assignment) {
    return (
      <div className="min-h-screen bg-gray-50">
        
        <div className="flex">
          
          <div className="flex-1 p-6">
            <div className="text-center">Assignment not found</div>
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
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Submit Assignment</h2>
              <button
                onClick={() => navigate(`/assignment/details/${id}`)}
                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
              >
                Back
              </button>
            </div>

            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-800">{assignment.title}</h3>
              <p className="text-blue-600">{assignment.subject} - {assignment.class}</p>
              <p className="text-sm text-blue-500">Due: {assignment.dueDate}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Student Name *
                </label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Submission Text *
                </label>
                <textarea
                  name="submissionText"
                  value={formData.submissionText}
                  onChange={handleChange}
                  rows="8"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your assignment submission..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Attach File (Optional)
                </label>
                <input
                  type="file"
                  name="file"
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  accept=".pdf,.doc,.docx,.txt,.jpg,.png"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Supported formats: PDF, DOC, DOCX, TXT, JPG, PNG
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
                >
                  Submit Assignment
                </button>
                <button
                  type="button"
                  onClick={() => navigate(`/assignment/details/${id}`)}
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

export default SubmitAssignment;