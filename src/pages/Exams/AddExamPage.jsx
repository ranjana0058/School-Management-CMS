import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import ExamForm from '../../Components/exam/ExamForm';
import { addExam } from '../../Services/examService';

const AddExamPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (examData) => {
    try {
      addExam(examData);
      alert('Exam created successfully!');
      navigate('/exams');
    } catch (error) {
      alert('Error creating exam. Please try again.');
    }
  };

  const handleCancel = () => {
    navigate('/exams');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Add New Exam</h1>
                <p className="text-gray-600">Create a new examination schedule</p>
              </div>
              <button
                onClick={() => navigate('/exams')}
                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
              >
                Back to Exams
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <ExamForm
                onSubmit={handleSubmit}
                onCancel={handleCancel}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExamPage;