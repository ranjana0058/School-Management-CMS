
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
     const { user, logout } = useAuth()
      const navigate = useNavigate() 
      const handleLogout = () => {
           logout()  
    navigate('/login')
} 
return (
<nav className="bg-blue-600 text-white p-4 shadow-lg">      
<div className="flex justify-between items-center">
<h1 className="text-xl font-bold\">School Management System</h1>
<div className="flex items-center space-x-4">
            <span className="capitalize">{user?.name}</span>
            <span className="bg-blue-500 px-2 py-1 rounded text-sm capitalize">{user?.role}</span>
            <button onClick={handleLogout}className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded transition-colors">Logout</button>
            </div>    
            </div>  
            </nav> 
            )}
            export default Navbar