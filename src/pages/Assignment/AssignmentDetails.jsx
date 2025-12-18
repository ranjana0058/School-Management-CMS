import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { getAssignmentById } from '../../Services/AssignmentService';

const AssignmentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [assignment, setAssignment] = useState(null);

  useEffect(() => {
    const assignmentData = getAssignmentById(id);
    setAssignment(assignmentData);
  }, [id]);

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
              <h2 className="text-2xl font-bold">Assignment Details</h2>
              <button
                onClick={() => navigate('/assignments')}
                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
              >
                Back to List
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <div className="p-3 bg-gray-50 rounded-md">{assignment.title}</div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <div className="p-3 bg-gray-50 rounded-md">{assignment.subject}</div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Class</label>
                  <div className="p-3 bg-gray-50 rounded-md">{assignment.class}</div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                  <div className="p-3 bg-gray-50 rounded-md">{assignment.dueDate}</div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <div className="p-3 bg-gray-50 rounded-md">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      assignment.status === 'active' ? 'text-green-600 bg-green-100' : 'text-gray-600 bg-gray-100'
                    }`}>
                      {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <div className="p-3 bg-gray-50 rounded-md h-48 overflow-y-auto">
                  {assignment.description}
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <button
                onClick={() => navigate(`/assignment/results/${assignment.id}`)}
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
              >
                View Submissions
              </button>
              <button
                onClick={() => navigate(`/assignment/submit/${assignment.id}`)}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
              >
                Submit Assignment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;