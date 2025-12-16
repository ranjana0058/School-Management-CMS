import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'
import Login from './pages/Login'
import AdminDashboard from './pages/Dashboard/AdminDashboard'
import TeacherDashboard from './pages/Dashboard/TeacherDashboard'
import StudentDashboard from './pages/Dashboard/StudentDashboard'

import ClassList from './pages/Class/ClassList'
import StudentList from './pages/Students/StudentList'

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
            <Route path="/students" element={
              <ProtectedRoute>
                <StudentList />
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
