
const StudentDashboard = () => {
      const stats = [
        { title: 'Classes', count: 6, icon: '🏫', color: 'bg-blue-500' },
     { title: 'Assignments', count: 12, icon: '📝', color: 'bg-green-500' },
     { title: 'Completed', count: 8, icon: '✅', color: 'bg-purple-500' },
      { title: 'Grade Average', count: 'A-', icon: '📊', color: 'bg-yellow-500' }
     ]
      const assignments = [{ 
    subject: 'Mathematics', title: 'Algebra Problems', due: '2024-01-15', status: 'pending' },
    
{ subject: 'Physics', title: 'Lab Report', due: '2024-01-18', status: 'submitted' },
{ subject: 'English', title: 'Essay Writing', due: '2024-01-20', status: 'pending' }
]
 return (
 <div className="flex">
 
 <div className="flex-1">
 <div className="p-6">
    <h1 className="text-2xl font-bold mb-6">Student Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        
{stats.map((stat, index) => (
    <div key={index} className="bg-white rounded-lg shadow-md p-6">
<div className="flex items-center">
 <div className={`${stat.color} text-white p-3 rounded-full text-2xl mr-4`}>
     {stat.icon}
     </div><div>
    <p className="text-gray-600 text-sm">{stat.title}</p>
    <p className="text-2xl font-bold">{stat.count}</p>
    </div>
    </div>
    </div>
    ))}
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6\">
 <div className="bg-white rounded-lg shadow-md p-6\">
<h3 className="text-lg font-semibold mb-4">Upcoming Assignments</h3>
<div className="space-y-3">{assignments.map((assignment, index) => (
<div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
    <div>
<p className="font-medium">{assignment.title}</p>
<p className="text-sm text-gray-600">{assignment.subject}</p>
</div>
<div className="text-right">
<p className="text-sm text-gray-600">Due: {assignment.due}</p>
<span className={`px-2 py-1 rounded text-xs ${assignment.status === 'submitted' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'

}`}>{assignment.status}</span>
</div>
</div>
))}
</div>
</div>
<div className="bg-white rounded-lg shadow-md p-6">
<h3 className="text-lg font-semibold mb-4">Recent Grades</h3>
<div className="space-y-3">
<div className="flex justify-between items-center p-3 bg-gray-50 rounded">
<span>Mathematics Quiz</span>
<span className="font-bold text-green-600\">A</span>
</div>
<div className="flex justify-between items-center p-3 bg-gray-50 rounded">
<span>Physics Lab</span>
 <span className="font-bold text-blue-600">B+</span>
 </div>
  <div className="flex justify-between items-center p-3 bg-gray-50 rounded\">
    <span>English Essay</span>
    <span className="font-bold text-green-600\">A-</span>
    </div>
    </div>
    </div></div></div></div></div>
    )}
    export default StudentDashboard



