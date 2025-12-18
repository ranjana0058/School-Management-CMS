// Student Service
const students = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@school.com",
    phone: "123-456-7890",
    class: "10A",
    rollNo: "001",
    dateOfBirth: "2008-05-15",
    address: "123 Main St, City",
    parentName: "Robert Doe",
    parentPhone: "123-456-7891",
    parentEmail: "robert.doe@email.com",
    avatar: null,
    attendance: { present: 85, total: 100, percentage: 85 },
    results: { totalSubjects: 6, passedSubjects: 6, gpa: 3.8 },
    fees: { totalAmount: 5000, paidAmount: 3000, dueAmount: 2000 }
  }
];

export const getStudentById = (id) => {
  return students.find(student => student.id === parseInt(id));
};

export const updateStudent = (id, updatedData) => {
  const index = students.findIndex(student => student.id === parseInt(id));
  if (index !== -1) {
    students[index] = { ...students[index], ...updatedData };
    return students[index];
  }
  return null;
};

export const getStudentAttendance = (id) => {
  const student = getStudentById(id);
  return student ? student.attendance : null;
};

export const getStudentResults = (id) => {
  const student = getStudentById(id);
  return student ? student.results : null;
};

export const getStudentFees = (id) => {
  const student = getStudentById(id);
  return student ? student.fees : null;
};