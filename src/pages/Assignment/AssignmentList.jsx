import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import { getAssignments, deleteAssignment } from '../../Services/AssignmentService';

const AssignmentList = () => {
  const [assignments, setAssignments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setAssignments(getAssignments());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this assignment?')) {
      deleteAssignment(id);
      setAssignments(getAssignments());
    }
  };

  const getStatusColor = (status) => {
    return status === 'active' ? 'text-green-600 bg-green-100' : 'text-gray-600 bg-gray-100';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Assignments</h2>
              <button
                onClick={() => navigate('/assignment/create')}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Create Assignment
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-4 py-3 text-left">Title</th>
                    <th className="border border-gray-200 px-4 py-3 text-left">Subject</th>
                    <th className="border border-gray-200 px-4 py-3 text-left">Class</th>
                    <th className="border border-gray-200 px-4 py-3 text-left">Due Date</th>
                    <th className="border border-gray-200 px-4 py-3 text-center">Status</th>
                    <th className="border border-gray-200 px-4 py-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {assignments.map(assignment => (
                    <tr key={assignment.id} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">{assignment.title}</td>
                      <td className="border border-gray-200 px-4 py-3">{assignment.subject}</td>
                      <td className="border border-gray-200 px-4 py-3">{assignment.class}</td>
                      <td className="border border-gray-200 px-4 py-3">{assignment.dueDate}</td>
                      <td className="border border-gray-200 px-4 py-3 text-center">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(assignment.status)}`}>
                          {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                        </span>
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center">
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => navigate(`/assignment/details/${assignment.id}`)}
                            className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                          >
                            View
                          </button>
                          <button
                            onClick={() => navigate(`/assignment/results/${assignment.id}`)}
                            className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
                          >
                            Results
                          </button>
                          <button
                            onClick={() => handleDelete(assignment.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {assignments.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No assignments found. Create your first assignment!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentList;