import React from 'react';
import ExamCard from './ExamCard';

const ExamList = ({ exams, onEdit, onDelete, onView }) => {
  if (!exams || exams.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📝</div>
        <h3 className="text-lg font-semibold text-gray-600 mb-2">No Exams Found</h3>
        <p className="text-gray-500">There are no exams scheduled at the moment.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {exams.map(exam => (
        <ExamCard
          key={exam.id}
          exam={exam}
          onEdit={onEdit}
          onDelete={onDelete}
          onView={onView}
        />
      ))}
    </div>
  );
};

export default ExamList;