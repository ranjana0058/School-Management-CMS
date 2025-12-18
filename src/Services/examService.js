// Exam Service
let exams = [
  {
    id: 1,
    title: "Mathematics Mid-Term",
    subject: "Mathematics",
    class: "10A",
    date: "2024-02-15",
    time: "09:00",
    duration: "2 hours",
    totalMarks: 100,
    status: "scheduled",
    description: "Mid-term examination covering chapters 1-5"
  },
  {
    id: 2,
    title: "Physics Final Exam",
    subject: "Physics", 
    class: "10B",
    date: "2024-02-20",
    time: "10:00",
    duration: "3 hours",
    totalMarks: 150,
    status: "scheduled",
    description: "Final examination covering all chapters"
  },
  {
    id: 3,
    title: "English Literature Test",
    subject: "English",
    class: "9A", 
    date: "2024-01-30",
    time: "11:00",
    duration: "1.5 hours",
    totalMarks: 80,
    status: "completed",
    description: "Test on Shakespeare's Romeo and Juliet"
  }
];

let nextId = 4;

export const getExams = () => {
  return [...exams];
};

export const getExamById = (id) => {
  return exams.find(exam => exam.id === parseInt(id));
};

export const addExam = (exam) => {
  const newExam = { ...exam, id: nextId++, status: "scheduled" };
  exams.push(newExam);
  return newExam;
};

export const updateExam = (id, updatedExam) => {
  const index = exams.findIndex(exam => exam.id === parseInt(id));
  if (index !== -1) {
    exams[index] = { ...exams[index], ...updatedExam };
    return exams[index];
  }
  return null;
};

export const deleteExam = (id) => {
  const index = exams.findIndex(exam => exam.id === parseInt(id));
  if (index !== -1) {
    exams.splice(index, 1);
    return true;
  }
  return false;
};