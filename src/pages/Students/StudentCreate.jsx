import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'
const StudentCreate = () => {
const [formData, setFormData] = useState({
name: '', email: '', phone: '',
class: '',  address: '', parentName: '',parentPhone: ''
 })
 const navigate = useNavigate()
 const handleSubmit = (e) => {e.preventDefault()
// Simulate API call\n    
console.log('Creating student:', formData)
alert('Student created successfully!')
navigate('/students') }
const handleChange = (e) => {setFormData({...formData,[e.target.name]: e.target.value

})}
return (
<div className="flex">
    <Sidebar />
    <div className="flex-1">
<Navbar />
<div className="p-6">
<h1 className="text-2xl font-bold mb-6">Add New Student</h1>
<div className="bg-white rounded-lg shadow-md p-6\">
<form onSubmit={handleSubmit} className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6\">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
<input type="text"name="name\" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500\"
 value={formData.name}onChange={handleChange}/>
 </div>
 <div>
<label className="block text-sm font-medium text-gray-700 mb-2\">Email</label>
<input type="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
value={formData.email}onChange={handleChange}/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2"> Phone</label>
<input type="tel"name="phone"className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500\"
value={formData.phone}onChange={handleChange}/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2\">Class</label>
<select name="class"required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500\"
 value={formData.class}onChange={handleChange}>
<option value="\">Select Class</option>
<option value="Grade 9A">Grade 9A</option>
<option value="Grade 9B">Grade 9B</option>
<option value="Grade 10A">Grade 10A</option>
<option value="Grade 10B\">Grade 10B</option>
<option value="Grade 11A\">Grade 11A</option>
<option value="Grade 11B\">Grade 11B</option>
<option value="Grade 12A\">Grade 12A</option>
<option value="Grade 12B\">Grade 12B</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2\"> Parent Name</label>
<input type="text"name="parentName"className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500\"value={formData.parentName}onChange={handleChange}/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2\">Parent Phone</label>
<input type="tel\"name="parentPhone\"className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500\"value={formData.parentPhone}
onChange={handleChange}/>
</div></div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
<textarea name="address"rows={3}className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500\"value={formData.address}
onChange={handleChange}/>
</div>
<div className="flex justify-end space-x-4">            
<button type="button"onClick ={() => navigate('/students')} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50\">Cancel</button>
<button type="submit"className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600\" >Create Student</button>
</div>
</form>
    </div>
    </div></div></div> 
)}
export default StudentCreate