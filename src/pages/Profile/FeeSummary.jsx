import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProfileCard from '../../Components/profile/ProfileCard';
import SummaryCard from '../../Components/profile/SummaryCard';
import { getStudentById, getStudentFees } from '../../Services/studentService';

const FeeSummary = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [fees, setFees] = useState(null);

  const feeBreakdown = [
    { type: 'Tuition Fee', amount: 3000, paid: 3000, due: 0, status: 'Paid' },
    { type: 'Library Fee', amount: 500, paid: 0, due: 500, status: 'Due' },
    { type: 'Lab Fee', amount: 1000, paid: 0, due: 1000, status: 'Due' },
    { type: 'Sports Fee', amount: 500, paid: 0, due: 500, status: 'Due' }
  ];

  const paymentHistory = [
    { date: '2024-01-15', amount: 3000, type: 'Tuition Fee', method: 'Online', receipt: 'RCP001' },
    { date: '2024-01-10', amount: 500, type: 'Registration', method: 'Cash', receipt: 'RCP002' }
  ];

  useEffect(() => {
    const studentData = getStudentById(id || 1);
    const feesData = getStudentFees(id || 1);
    setStudent(studentData);
    setFees(feesData);
  }, [id]);

  if (!student || !fees) {
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Fee Summary</h1>
                <p className="text-gray-600">{student.name} - Class {student.class}</p>
              </div>
              <button
                onClick={() => navigate(`/profile/${id || 1}`)}
                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
              >
                Back to Profile
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <SummaryCard
                title="Total Amount"
                value={`₹${fees.totalAmount}`}
                subtitle="Annual fee structure"
                color="blue"
                icon="💰"
              />
              <SummaryCard
                title="Paid Amount"
                value={`₹${fees.paidAmount}`}
                subtitle="Amount paid so far"
                color="green"
                icon="✅"
              />
              <SummaryCard
                title="Due Amount"
                value={`₹${fees.dueAmount}`}
                subtitle="Remaining balance"
                color="red"
                icon="⏰"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <ProfileCard title="Fee Breakdown">
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 px-3 font-semibold text-gray-700 text-sm">Fee Type</th>
                        <th className="text-center py-2 px-3 font-semibold text-gray-700 text-sm">Amount</th>
                        <th className="text-center py-2 px-3 font-semibold text-gray-700 text-sm">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {feeBreakdown.map((fee, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-2 px-3 text-sm">{fee.type}</td>
                          <td className="py-2 px-3 text-center text-sm font-semibold">₹{fee.amount}</td>
                          <td className="py-2 px-3 text-center">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              fee.status === 'Paid'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {fee.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </ProfileCard>

              <ProfileCard title="Payment History">
                <div className="space-y-3">
                  {paymentHistory.map((payment, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-semibold text-sm">{payment.type}</div>
                        <div className="text-xs text-gray-600">{payment.date} • {payment.method}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-green-600">₹{payment.amount}</div>
                        <div className="text-xs text-gray-500">{payment.receipt}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </ProfileCard>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProfileCard title="Payment Status">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Payment Progress:</span>
                    <span className="font-semibold">{((fees.paidAmount / fees.totalAmount) * 100).toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: `${(fees.paidAmount / fees.totalAmount) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-600">
                    {fees.dueAmount > 0 ? `₹${fees.dueAmount} remaining to be paid` : 'All fees paid'}
                  </div>
                </div>
              </ProfileCard>

              <ProfileCard title="Quick Actions">
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 text-sm">
                    Make Payment
                  </button>
                  <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 text-sm">
                    Download Receipt
                  </button>
                  <button className="w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 text-sm">
                    Payment History
                  </button>
                </div>
              </ProfileCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeSummary;