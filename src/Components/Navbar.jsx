
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [selectedLanguage, setSelectedLanguage] = useState('EN')
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const notifications = [
    { id: 1, message: 'New assignment posted', time: '2 min ago' },
    { id: 2, message: 'Fee payment reminder', time: '1 hour ago' },
    { id: 3, message: 'Parent-teacher meeting scheduled', time: '2 hours ago' }
  ]

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">School Management System</h1>
        
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <div className="relative">
            <select 
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="bg-blue-500 text-white px-2 py-1 rounded text-sm border-none outline-none cursor-pointer"
            >
              <option value="EN">EN</option>
              <option value="ES">ES</option>
              <option value="FR">FR</option>
              <option value="DE">DE</option>
            </select>
          </div>

          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 hover:bg-blue-500 rounded transition-colors"
            >
              <span className="text-xl">🔔</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {notifications.length}
              </span>
            </button>
            
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white text-gray-800 rounded-lg shadow-lg z-50">
                <div className="p-4 border-b">
                  <h3 className="font-semibold">Notifications</h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {notifications.map(notification => (
                    <div key={notification.id} className="p-3 border-b hover:bg-gray-50">
                      <p className="text-sm">{notification.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                  ))}
                </div>
                <div className="p-3 text-center">
                  <button className="text-blue-600 text-sm hover:underline">View All</button>
                </div>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative">
            <button 
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center space-x-2 hover:bg-blue-500 px-2 py-1 rounded transition-colors"
            >
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-sm font-semibold">
                {user?.name?.charAt(0)?.toUpperCase() || 'U'}
              </div>
              <span className="capitalize hidden md:block">{user?.name}</span>
              <span className="text-sm">▼</span>
            </button>
            
            {showProfile && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg z-50">
               
                <div className="py-2">
                  <button 
                    onClick={() => navigate('/Profile')}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    👤 View Profile
                  </button>
                  <button 
                    onClick={() => navigate('/settings')}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    ⚙️ Settings
                  </button>
                  <hr className="my-2" />
                  <button 
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-600"
                  >
                    🚪 Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar