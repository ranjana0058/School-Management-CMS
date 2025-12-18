import React, { useState, useEffect } from 'react';

const ExamForm = ({ exam, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    class: '',
    date: '',
    time: '',
    duration: '',
    totalMarks: '',
    description: ''
  });

  const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'History', 'Geography'];
  const classes = ['10A', '10B', '9A', '9B', '8A', '8B'];

  useEffect(() => {
    if (exam) {
      setFormData(exam);
    }
  }, [exam]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.subject || !formData.class || !formData.date || !formData.time) {
      alert('Please fill all required fields!');
      return;
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Exam Title *
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Enter exam title"
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
            Date *
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Time *
          </label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Duration
          </label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 2 hours"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Total Marks
          </label>
          <input
            type="number"
            name="totalMarks"
            value={formData.totalMarks}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Enter total marks"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          placeholder="Enter exam description or instructions..."
        />
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
        >
          {exam ? 'Update Exam' : 'Create Exam'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExamForm;