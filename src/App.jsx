import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'
import Login from './pages/Login'
import AdminDashboard from './pages/Dashboard/AdminDashboard'
import TeacherDashboard from './pages/Dashboard/TeacherDashboard'
import StudentDashboard from './pages/Dashboard/StudentDashboard'

import ClassList from './pages/Class/ClassList'
import Fees from './pages/Fees/Fees'
import FeeList from './pages/Fees/FeesList'
import FeeForm from './pages/Fees/FeeForm'


function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin" element={
              <ProtectedRoute requiredRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/teacher" element={
              <ProtectedRoute requiredRole="teacher">
                <TeacherDashboard />
              </ProtectedRoute>
            } />
            <Route path="/student" element={
              <ProtectedRoute requiredRole="student">
                <StudentDashboard />
              </ProtectedRoute>
            } />
            <Route path="/classes" element={
              <ProtectedRoute>
                <ClassList />
              </ProtectedRoute>
            } />
            <Route path="/fees" element={
              <ProtectedRoute>
                <Fees />
              </ProtectedRoute>
            } />
          
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
