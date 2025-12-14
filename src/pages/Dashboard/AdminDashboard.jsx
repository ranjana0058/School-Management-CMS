import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'

const AdminDashboard = () => {
  const stats = [
    { title: 'Total Students', count: 1250, icon: '👨🎓', color: 'bg-blue-500' },
    { title: 'Total Teachers', count: 85, icon: '👨🏫', color: 'bg-green-500' },
    { title: 'Total Classes', count: 45, icon: '🏫', color: 'bg-purple-500' },
    { title: 'Total Revenue', count: '$125,000', icon: '💰', color: 'bg-yellow-500' }
  ]

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
          
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
              <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-gray-50 rounded">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>New student John Doe enrolled</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded">
                  <span className="text-blue-500 mr-3">📝</span>
                  <span>Math exam scheduled for Grade 10</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded">
                  <span className="text-purple-500 mr-3">👨🏫</span>
                  <span>New teacher Sarah Smith joined</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition-colors">
                  Add New Student
                </button>
                <button className="w-full bg-green-500 text-white p-3 rounded hover:bg-green-600 transition-colors">
                  Add New Teacher
                </button>
                <button className="w-full bg-purple-500 text-white p-3 rounded hover:bg-purple-600 transition-colors">
                  Create New Class
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard