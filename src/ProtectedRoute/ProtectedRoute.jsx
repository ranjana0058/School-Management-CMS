import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'

const ProtectedRoute = ({ children, requiredRole }) => {
    const { user, loading } = useAuth()
    
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600">
                </div>
            </div>
        )
    }
    
    if (!user) {
        return <Navigate to="/login" replace />
    }
    
 
    if (requiredRole && user.role !== requiredRole) {
      
        return <Navigate to="/login" replace /> 
    }
    
   
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className='flex-1 flex flex-col'>
              <Navbar/>
           
          
            <main className="flex-1 overflow-y-auto">
                {children}
            </main>
        </div> </div>
    )
}

export default ProtectedRoute