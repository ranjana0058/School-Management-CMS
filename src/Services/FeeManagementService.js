// Fee Management Service
let feeStructures = [
  { id: 1, name: "Tuition Fee", amount: 5000, type: "Monthly", class: "10A" },
  { id: 2, name: "Library Fee", amount: 500, type: "Annual", class: "All" },
  { id: 3, name: "Lab Fee", amount: 1000, type: "Semester", class: "10B" }
];

let studentFees = [
  { id: 1, studentId: 1, studentName: "John Doe", class: "10A", totalAmount: 5500, paidAmount: 3000, dueAmount: 2500, status: "Partial" },
  { id: 2, studentId: 2, studentName: "Jane Smith", class: "10B", totalAmount: 6000, paidAmount: 6000, dueAmount: 0, status: "Paid" }
];

let payments = [
  { id: 1, studentId: 1, amount: 3000, date: "2024-01-15", method: "Cash", receiptNo: "RCP001" },
  { id: 2, studentId: 2, amount: 6000, date: "2024-01-10", method: "Online", receiptNo: "RCP002" }
];

let nextId = 4;

export const getFeeStructures = () => [...feeStructures];
export const addFeeStructure = (structure) => {
  const newStructure = { ...structure, id: nextId++ };
  feeStructures.push(newStructure);
  return newStructure;
};

export const getStudentFees = () => [...studentFees];
export const addPayment = (payment) => {
  const newPayment = { ...payment, id: nextId++, receiptNo: `RCP${String(nextId).padStart(3, '0')}` };
  payments.push(newPayment);
  return newPayment;
};

export const getPayments = () => [...payments];
export const getPaymentsByStudent = (studentId) => payments.filter(p => p.studentId === studentId);

export const updateFeeStructure = (id, updatedStructure) => {
  const index = feeStructures.findIndex(structure => structure.id === id);
  if (index !== -1) {
    feeStructures[index] = { ...feeStructures[index], ...updatedStructure };
    return feeStructures[index];
  }
  return null;
};

export const deleteFeeStructure = (id) => {
  const index = feeStructures.findIndex(structure => structure.id === id);
  if (index !== -1) {
    feeStructures.splice(index, 1);
    return true;
  }
  return false;
};