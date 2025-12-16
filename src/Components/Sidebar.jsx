import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Sidebar = () => {
  const { user } = useAuth()
  const location = useLocation()

  const menuItems = {
    admin: [
      { path: '/admin', label: 'Dashboard', icon: '📊' },
      { path: '/students', label: 'Students', icon: '🎓' },
      { path: '/teachers', label: 'Teachers', icon: '🧑🏻‍🏫' },
      {path: '/Fees', label: 'Fees', icon: '💰'},
      {path: '/Account', label: 'Account', icon: '💼'},
      { path: '/classes', label: 'Classes', icon: '🏫' },
      {path: '/Setting', label: 'Setting', icon: '⚙️'}
    ],
    teacher: [
      { path: '/teacher', label: 'Dashboard', icon: '📊' },
      { path: '/students', label: 'My Students', icon: '👨🎓' },
      { path: '/classes', label: 'My Classes', icon: '🏫' },
    ],
    student: [
      { path: '/student', label: 'Dashboard', icon: '📊' },
      { path: '/classes', label: 'My Classes', icon: '🏫' },
    ]
  }

  const items = menuItems[user?.role] || []

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Navigation</h2>
        <nav>
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 p-3 rounded-lg mb-2 transition-colors ${
                location.pathname === item.path
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-700'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Sidebar