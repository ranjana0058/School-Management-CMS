// Mock data for assignments
let assignments = [
  { 
    id: 1, 
    title: "Math Homework - Chapter 5", 
    subject: "Mathematics", 
    class: "10A", 
    dueDate: "2024-01-25", 
    description: "Complete exercises 1-20 from chapter 5",
    status: "active"
  },
  { 
    id: 2, 
    title: "Science Project", 
    subject: "Physics", 
    class: "10B", 
    dueDate: "2024-01-30", 
    description: "Create a model of solar system",
    status: "active"
  },
  { 
    id: 3, 
    title: "English Essay", 
    subject: "English", 
    class: "9A", 
    dueDate: "2024-01-28", 
    description: "Write 500 words on climate change",
    status: "completed"
  }
];

let submissions = [
  { id: 1, assignmentId: 1, studentName: "John Doe", submittedDate: "2024-01-20", grade: "A", feedback: "Excellent work!" },
  { id: 2, assignmentId: 1, studentName: "Jane Smith", submittedDate: "2024-01-22", grade: "B+", feedback: "Good effort" },
  { id: 3, assignmentId: 2, studentName: "Mike Johnson", submittedDate: "2024-01-25", grade: "A-", feedback: "Creative approach" }
];

let nextId = 4;
let nextSubmissionId = 4;

export const getAssignments = () => {
  return [...assignments];
};

export const getAssignmentById = (id) => {
  return assignments.find(assignment => assignment.id === parseInt(id));
};

export const addAssignment = (assignment) => {
  const newAssignment = { ...assignment, id: nextId++, status: "active" };
  assignments.push(newAssignment);
  return newAssignment;
};

export const updateAssignment = (id, updatedAssignment) => {
  const index = assignments.findIndex(assignment => assignment.id === id);
  if (index !== -1) {
    assignments[index] = { ...assignments[index], ...updatedAssignment };
    return assignments[index];
  }
  return null;
};

export const deleteAssignment = (id) => {
  const index = assignments.findIndex(assignment => assignment.id === id);
  if (index !== -1) {
    assignments.splice(index, 1);
    return true;
  }
  return false;
};

export const getSubmissionsByAssignment = (assignmentId) => {
  return submissions.filter(submission => submission.assignmentId === parseInt(assignmentId));
};

export const submitAssignment = (submission) => {
  const newSubmission = { ...submission, id: nextSubmissionId++ };
  submissions.push(newSubmission);
  return newSubmission;
};

export const gradeSubmission = (submissionId, grade, feedback) => {
  const index = submissions.findIndex(submission => submission.id === submissionId);
  if (index !== -1) {
    submissions[index] = { ...submissions[index], grade, feedback };
    return submissions[index];
  }
  return null;
};