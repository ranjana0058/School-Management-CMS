import { useState } from 'react'
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'

const ClassList = () => {
  const [classes] = useState([
    { id: 1, name: 'Grade 9A', teacher: 'Dr. Smith Johnson', subject: 'Mathematics', students: 30, schedule: 'Mon, Wed, Fri - 9:00 AM' },
    { id: 2, name: 'Grade 10B', teacher: 'Prof. Emily Davis', subject: 'Physics', students: 28, schedule: 'Tue, Thu - 10:00 AM' },
    { id: 3, name: 'Grade 11A', teacher: 'Mr. Robert Wilson', subject: 'Chemistry', students: 25, schedule: 'Mon, Wed, Fri - 11:00 AM' },
    { id: 4, name: 'Grade 12A', teacher: 'Ms. Lisa Brown', subject: 'English', students: 32, schedule: 'Daily - 2:00 PM' },
    { id: 5, name: 'Grade 9B', teacher: 'Dr. Michael Lee', subject: 'Biology', students: 29, schedule: 'Tue, Thu, Sat - 1:00 PM' }
  ])

  return (
    <div className="flex">
        <Sidebar />
        <div className="flex-1">
            <Navbar />
            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Classes</h1>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                        Create New Class
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {classes.map((classItem) => (
                        <div key={classItem.id} className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-lg font-semibold text-gray-900">{classItem.name}</h3>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                    {classItem.students} students
                                </span>
                            </div>
                            
                            <div className="space-y-2 mb-4">
                                <p className="text-sm text-gray-600">
                                    <span className="font-medium">Subject:</span> {classItem.subject}
                                </p>
                                <p className="text-sm text-gray-600">
                                    <span className="font-medium">Teacher:</span> {classItem.teacher}
                                </p>
                                <p className="text-sm text-gray-600">
                                    <span className="font-medium">Schedule:</span> {classItem.schedule}
                                </p>
                            </div>

                            <div className="flex space-x-2">
                                <button className="flex-1 bg-blue-500 text-white py-2 px-3 rounded text-sm hover:bg-blue-600 transition-colors">
                                    View Details
                                </button>
                                <button className="flex-1 bg-gray-500 text-white py-2 px-3 rounded text-sm hover:bg-gray-600 transition-colors">
                                    Edit
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ClassList
