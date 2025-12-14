import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'

const TeacherDashboard = () => {
  const stats = [
    { title: 'My Students', count: 120, icon: '👨🎓', color: 'bg-blue-500' },
    { title: 'My Classes', count: 5, icon: '🏫', color: 'bg-green-500' },
    { title: 'Assignments', count: 15, icon: '📝', color: 'bg-purple-500' },
    { title: 'Pending Grades', count: 8, icon: '📊', color: 'bg-yellow-500' }
  ]

  const upcomingClasses = [
    { subject: 'Mathematics', time: '09:00 AM', class: 'Grade 10A' },
    { subject: 'Physics', time: '11:00 AM', class: 'Grade 11B' },
    { subject: 'Chemistry', time: '02:00 PM', class: 'Grade 12A' }
  ]

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Teacher Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <div className={`${stat.color} text-white p-3 rounded-full text-2xl mr-4`}>
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.count}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Today's Classes</h3>
              <div className="space-y-3">
                {upcomingClasses.map((cls, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <p className="font-medium">{cls.subject}</p>
                      <p className="text-sm text-gray-600">{cls.class}</p>
                    </div>
                    <span className="text-blue-600 font-medium">{cls.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-gray-50 rounded">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Graded Math Assignment #5</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded">
                  <span className="text-blue-500 mr-3">📝</span>
                  <span>Created Physics Quiz</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded">
                  <span className="text-purple-500 mr-3">📊</span>
                  <span>Updated attendance records</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherDashboard