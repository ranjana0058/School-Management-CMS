import React from 'react'

const StudentList = () => {
  return (
    <div>
        <h1 className="text-2xl font-bold mb-4">Student List</h1>
        <div className="bg-white p-4 rounded shadow-md">
            <table className="min-w-full">
                <thead>
                    <tr>
                        <th className="border-b p-2">Name</th>
                        <th className="border-b p-2">Email</th>
                        <th className="border-b p-2">Course</th>
                        <th className="border-b p-2">Enrollment Number</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Sample data - in a real app, this would be dynamic */}
                    <tr>
                        <td className="border-b p-2">John Doe</td>
                        <td className="border-b p-2">john@example.com</td>
                        <td className="border-b p-2">Computer Science</td>
                        <td className="border-b p-2">1234567890</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
  )
  
}

export default StudentList