import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import ExamList from '../../Components/exam/ExamList';
import { getExams, deleteExam } from '../../Services/examService';

const ExamListPage = () => {
  const [exams, setExams] = useState([]);
  const [filteredExams, setFilteredExams] = useState([]);
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    const examData = getExams();
    setExams(examData);
    setFilteredExams(examData);
  }, []);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredExams(exams);
    } else {
      setFilteredExams(exams.filter(exam => exam.status === filter));
    }
  }, [filter, exams]);

  const handleEdit = (exam) => {
    navigate(`/exams/edit/${exam.id}`);
  };

  const handleDelete = (examId) => {
    if (window.confirm('Are you sure you want to delete this exam?')) {
      deleteExam(examId);
      const updatedExams = getExams();
      setExams(updatedExams);
    }
  };

  const handleView = (exam) => {
    // For now, just show an alert with exam details
    alert(`Exam Details:\n${exam.title}\nSubject: ${exam.subject}\nClass: ${exam.class}\nDate: ${exam.date}`);
  };

  const getFilterCounts = () => {
    return {
      all: exams.length,
      scheduled: exams.filter(e => e.status === 'scheduled').length,
      completed: exams.filter(e => e.status === 'completed').length,
      cancelled: exams.filter(e => e.status === 'cancelled').length
    };
  };

  const counts = getFilterCounts();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Exams</h1>
                <p className="text-gray-600">Manage and schedule examinations</p>
              </div>
              <button
                onClick={() => navigate('/exams/add')}
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 flex items-center gap-2"
              >
                <span>➕</span>
                Add New Exam
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    filter === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Exams ({counts.all})
                </button>
                <button
                  onClick={() => setFilter('scheduled')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    filter === 'scheduled'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Scheduled ({counts.scheduled})
                </button>
                <button
                  onClick={() => setFilter('completed')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    filter === 'completed'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Completed ({counts.completed})
                </button>
              </div>
            </div>

            {/* Exam Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-blue-100 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{counts.all}</div>
                <div className="text-sm text-blue-700">Total Exams</div>
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600">{counts.scheduled}</div>
                <div className="text-sm text-yellow-700">Scheduled</div>
              </div>
              <div className="bg-green-100 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{counts.completed}</div>
                <div className="text-sm text-green-700">Completed</div>
              </div>
              <div className="bg-red-100 p-4 rounded-lg">
                <div className="text-2xl font-bold text-red-600">{counts.cancelled}</div>
                <div className="text-sm text-red-700">Cancelled</div>
              </div>
            </div>

            {/* Exam List */}
            <ExamList
              exams={filteredExams}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onView={handleView}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamListPage;