import React from 'react';
import { formatExamDate, formatExamTime } from '../../utils/dateFormatter';

const ExamCard = ({ exam, onEdit, onDelete, onView }) => {
  const getStatusColor = (status) => {
    switch(status) {
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{exam.title}</h3>
          <p className="text-gray-600">{exam.subject} • Class {exam.class}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(exam.status)}`}>
          {exam.status.charAt(0).toUpperCase() + exam.status.slice(1)}
        </span>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <span className="mr-2">📅</span>
          <span>{formatExamDate(exam.date)}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <span className="mr-2">🕐</span>
          <span>{formatExamTime(exam.time)} • {exam.duration}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <span className="mr-2">📊</span>
          <span>Total Marks: {exam.totalMarks}</span>
        </div>
      </div>

      {exam.description && (
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{exam.description}</p>
      )}

      <div className="flex gap-2">
        <button
          onClick={() => onView(exam)}
          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 text-sm"
        >
          View Details
        </button>
        <button
          onClick={() => onEdit(exam)}
          className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 text-sm"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(exam.id)}
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ExamCard;