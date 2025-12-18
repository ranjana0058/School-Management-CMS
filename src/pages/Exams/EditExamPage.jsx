import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import ExamForm from '../../Components/exam/ExamForm';
import { getExamById, updateExam } from '../../Services/examService';

const EditExamPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [exam, setExam] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const examData = getExamById(id);
    if (examData) {
      setExam(examData);
    } else {
      alert('Exam not found!');
      navigate('/exams');
    }
    setLoading(false);
  }, [id, navigate]);

  const handleSubmit = (examData) => {
    try {
      updateExam(parseInt(id), examData);
      alert('Exam updated successfully!');
      navigate('/exams');
    } catch (error) {
      alert('Error updating exam. Please try again.');
    }
  };

  const handleCancel = () => {
    navigate('/exams');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-6">
            <div className="text-center">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  if (!exam) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-6">
            <div className="text-center">Exam not found</div>
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
                <h1 className="text-3xl font-bold text-gray-800">Edit Exam</h1>
                <p className="text-gray-600">Update examination details</p>
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
                exam={exam}
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

export default EditExamPage;