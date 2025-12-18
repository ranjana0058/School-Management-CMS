import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import ProfileCard from '../../Components/profile/ProfileCard';
import SummaryCard from '../../Components/profile/SummaryCard';
import { getStudentById, getStudentResults } from '../../Services/studentService';

const ResultSummary = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [results, setResults] = useState(null);

  const subjectResults = [
    { subject: 'Mathematics', marks: 85, grade: 'A', status: 'Pass' },
    { subject: 'Physics', marks: 78, grade: 'B+', status: 'Pass' },
    { subject: 'Chemistry', marks: 82, grade: 'A-', status: 'Pass' },
    { subject: 'Biology', marks: 90, grade: 'A+', status: 'Pass' },
    { subject: 'English', marks: 75, grade: 'B', status: 'Pass' },
    { subject: 'History', marks: 88, grade: 'A', status: 'Pass' }
  ];

  useEffect(() => {
    const studentData = getStudentById(id || 1);
    const resultsData = getStudentResults(id || 1);
    setStudent(studentData);
    setResults(resultsData);
  }, [id]);

  if (!student || !results) {
    return (
      <div className="min-h-screen bg-gray-50">
        
        <div className="flex">
         
          <div className="flex-1 p-6">
            <div className="text-center">Data not found</div>
          </div>
        </div>
      </div>
    );
  }

  const averageMarks = subjectResults.reduce((sum, subject) => sum + subject.marks, 0) / subjectResults.length;

  return (
    <div className="min-h-screen bg-gray-50">
     
      <div className="flex">
      
        <div className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Academic Results</h1>
                <p className="text-gray-600">{student.name} - Class {student.class}</p>
              </div>
              <button
                onClick={() => navigate(`/profile/${id || 1}`)}
                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
              >
                Back to Profile
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <SummaryCard
                title="GPA"
                value={results.gpa}
                subtitle="Grade Point Average"
                color="blue"
                icon="🎓"
              />
              <SummaryCard
                title="Average Marks"
                value={`${averageMarks.toFixed(1)}%`}
                subtitle="Overall percentage"
                color="green"
                icon="📈"
              />
              <SummaryCard
                title="Subjects Passed"
                value={`${results.passedSubjects}/${results.totalSubjects}`}
                subtitle="Pass rate"
                color="green"
                icon="✅"
              />
              <SummaryCard
                title="Rank"
                value="5th"
                subtitle="Class rank"
                color="yellow"
                icon="🏆"
              />
            </div>

            <ProfileCard title="Subject-wise Results">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Subject</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-700">Marks</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-700">Grade</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-700">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjectResults.map((subject, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">{subject.subject}</td>
                        <td className="py-3 px-4 text-center font-semibold">{subject.marks}%</td>
                        <td className="py-3 px-4 text-center">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            subject.grade.startsWith('A') 
                              ? 'bg-green-100 text-green-800'
                              : subject.grade.startsWith('B')
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {subject.grade}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            subject.status === 'Pass'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {subject.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ProfileCard>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProfileCard title="Performance Analysis">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Highest Score:</span>
                    <span className="font-semibold text-green-600">90% (Biology)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lowest Score:</span>
                    <span className="font-semibold text-yellow-600">75% (English)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Improvement Needed:</span>
                    <span className="font-semibold text-blue-600">English, Physics</span>
                  </div>
                </div>
              </ProfileCard>

              <ProfileCard title="Grade Distribution">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>A+ Grades:</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">1</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>A Grades:</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">2</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>B+ Grades:</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">1</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>B Grades:</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">1</span>
                  </div>
                </div>
              </ProfileCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultSummary;