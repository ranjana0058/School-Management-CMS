import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { getAssignmentById, getSubmissionsByAssignment, gradeSubmission } from '../../Services/AssignmentService';

const AssignmentResults = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [assignment, setAssignment] = useState(null);
  const [submissions, setSubmissions] = useState([]);
  const [gradingSubmission, setGradingSubmission] = useState(null);
  const [gradeForm, setGradeForm] = useState({ grade: '', feedback: '' });

  useEffect(() => {
    const assignmentData = getAssignmentById(id);
    const submissionsData = getSubmissionsByAssignment(id);
    setAssignment(assignmentData);
    setSubmissions(submissionsData);
  }, [id]);

  const handleGradeSubmit = (e) => {
    e.preventDefault();
    if (!gradeForm.grade) {
      alert('Please enter a grade!');
      return;
    }

    gradeSubmission(gradingSubmission.id, gradeForm.grade, gradeForm.feedback);
    setSubmissions(getSubmissionsByAssignment(id));
    setGradingSubmission(null);
    setGradeForm({ grade: '', feedback: '' });
    alert('Grade submitted successfully!');
  };

  const openGradingModal = (submission) => {
    setGradingSubmission(submission);
    setGradeForm({ grade: submission.grade || '', feedback: submission.feedback || '' });
  };

  const getGradeColor = (grade) => {
    if (!grade) return 'text-gray-500';
    const gradeValue = grade.charAt(0);
    switch(gradeValue) {
      case 'A': return 'text-green-600';
      case 'B': return 'text-blue-600';
      case 'C': return 'text-yellow-600';
      case 'D': return 'text-orange-600';
      case 'F': return 'text-red-600';
      default: return 'text-gray-600';
    }
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
              <div>
                <h2 className="text-2xl font-bold">Assignment Results</h2>
                <p className="text-gray-600">{assignment.title} - {assignment.class}</p>
              </div>
              <button
                onClick={() => navigate('/assignments')}
                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
              >
                Back to List
              </button>
            </div>

            <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-100 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600">{submissions.length}</div>
                <div className="text-sm text-blue-700">Total Submissions</div>
              </div>
              <div className="bg-green-100 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600">
                  {submissions.filter(s => s.grade).length}
                </div>
                <div className="text-sm text-green-700">Graded</div>
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-yellow-600">
                  {submissions.filter(s => !s.grade).length}
                </div>
                <div className="text-sm text-yellow-700">Pending</div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-4 py-3 text-left">Student Name</th>
                    <th className="border border-gray-200 px-4 py-3 text-left">Submitted Date</th>
                    <th className="border border-gray-200 px-4 py-3 text-center">Grade</th>
                    <th className="border border-gray-200 px-4 py-3 text-left">Feedback</th>
                    <th className="border border-gray-200 px-4 py-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map(submission => (
                    <tr key={submission.id} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">{submission.studentName}</td>
                      <td className="border border-gray-200 px-4 py-3">{submission.submittedDate}</td>
                      <td className="border border-gray-200 px-4 py-3 text-center">
                        <span className={`font-semibold ${getGradeColor(submission.grade)}`}>
                          {submission.grade || 'Not Graded'}
                        </span>
                      </td>
                      <td className="border border-gray-200 px-4 py-3">
                        {submission.feedback || 'No feedback'}
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-center">
                        <button
                          onClick={() => openGradingModal(submission)}
                          className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                        >
                          {submission.grade ? 'Edit Grade' : 'Grade'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {submissions.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No submissions yet for this assignment.
              </div>
            )}
          </div>

          {/* Grading Modal */}
          {gradingSubmission && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <h3 className="text-lg font-bold mb-4">
                  Grade Submission - {gradingSubmission.studentName}
                </h3>
                <form onSubmit={handleGradeSubmit}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Grade</label>
                    <select
                      value={gradeForm.grade}
                      onChange={(e) => setGradeForm({...gradeForm, grade: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-md"
                      required
                    >
                      <option value="">Select Grade</option>
                      <option value="A+">A+</option>
                      <option value="A">A</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B">B</option>
                      <option value="B-">B-</option>
                      <option value="C+">C+</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="F">F</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Feedback</label>
                    <textarea
                      value={gradeForm.feedback}
                      onChange={(e) => setGradeForm({...gradeForm, feedback: e.target.value})}
                      rows="4"
                      className="w-full p-3 border border-gray-300 rounded-md"
                      placeholder="Enter feedback for the student..."
                    />
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    >
                      Submit Grade
                    </button>
                    <button
                      type="button"
                      onClick={() => setGradingSubmission(null)}
                      className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssignmentResults;