import React from 'react'

const StudentForm = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Student Management</h1>
      
      <div className="bg-white p-4 rounded shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-2">Add Student</h2>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-600">Name:</label>
          <input type="text" className="border rounded-md p-2 w-full" />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-600">Email:</label>
          <input type="email" className="border rounded-md p-2 w-full" />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-600">Course:</label>
          <input type="text" className="border rounded-md p-2 w-full" />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-600">Enrollment Number:</label>
          <input type="text" className="border rounded-md p-2 w-full" />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Student</button>
      </div>
        
    </div>
  )
   
    
}

export default StudentForm