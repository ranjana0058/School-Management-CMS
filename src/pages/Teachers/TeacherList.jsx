import { useState } from 'react'
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'
const TeacherList = () => {
    const [teachers] = useState([
 { id: 1, name: 'Dr. Smith Johnson',email: 'smith@school.com', subject: 'Mathematics', experience: '10 years', status: 'Active' },
 { id: 2, name: 'Prof. Emily Davis', email: 'emily@school.com', subject: 'Physics', experience: '8 years', status: 'Active' },
{ id: 3, name: 'Mr. Robert Wilson', email: 'robert@school.com', subject: 'Chemistry', experience: '12 years', status: 'Active' },
{ id: 4, name: 'Ms. Lisa Brown', email: 'lisa@school.com', subject: 'English', experience: '6 years', status: 'Active' },
{ id: 5, name: 'Dr. Michael Lee', email: 'michael@school.com', subject: 'Biology', experience: '15 years', status: 'Inactive' }
])
return (
<div className="flex">
<Sidebar />
<div className="flex-1">
<Navbar />
<div className="p-6">
<div className="flex justify-between items-center mb-6">
<h1 className="text-2xl font-bold\">Teachers</h1>
<button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">Add New Teacher</button>
</div>
<div className="bg-white rounded-lg shadow-md overflow-hidden\">
<table className="w-full">
<thead className="bg-gray-50">
<tr>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider\">Name</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider\">Email</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider\">Subject</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider\">Experience</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider\">Status</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider\">Actions</th>
</tr>
</thead>
<tbody className="bg-white divide-y divide-gray-200\">{teachers.map((teacher) => (
    <tr key={teacher.id}>
    <td className="px-6 py-4 whitespace-nowrap">
    <div className="text-sm font-medium text-gray-900">{teacher.name}
    </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
    <div className="text-sm text-gray-900">{teacher.email}
    </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap\">
    <div className="text-sm text-gray-900\">{teacher.subject}
    </div> 
    </td>
    <td className="px-6 py-4 whitespace-nowrap\">
 <div className="text-sm text-gray-900\">{teacher.experience}
    </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap\">
     <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${ 
     teacher.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{teacher.status}</span>
      </td>
     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium\">
    <button className="text-blue-600 hover:text-blue-900 mr-3\">Edit</button>
    <button className="text-red-600 hover:text-red-900\">Delete</button>
    </td>
    </tr>
))} </tbody>
</table>
</div>
</div>
</div>
</div>
)}
    export default TeacherList