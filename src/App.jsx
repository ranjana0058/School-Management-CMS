import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'
import Login from './pages/Login'
import StudentDashboard from './pages/Dashboard/StudentDashboard'

import ClassList from './pages/Class/ClassList'
import StudentList from './pages/Students/StudentList'
import AssignmentList from './pages/Assignment/AssignmentList'
import AssignmentDetails from './pages/Assignment/AssignmentDetails'
import SubmitAssignment from './pages/Assignment/SubmitAssignment'
import AssignmentResults from './pages/Assignment/AssignmentResults'
import CreateAssignment from './pages/Assignment/CreateAssignment'
import StudentProfile from './pages/Profile/StudentProfile'
import ProfileEdit from './pages/Profile/ProfileEdit'
import AttendanceSummary from './pages/Profile/AttendanceSummary'
import ResultSummary from './pages/Profile/ResultSummary'
import FeeSummary from './pages/Profile/FeeSummary'
import ParentInfo from './pages/Profile/ParentInfo'
import ExamListPage from './pages/Exams/ExamListPage'
import AddExamPage from './pages/Exams/AddExamPage'
import EditExamPage from './pages/Exams/EditExamPage'
import AddProfile from './pages/Profile/AddProfile'




function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
           
          
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
           
            <Route path="/Assignments" element={<AssignmentList/>} />
            <Route path="/assignments" element={<AssignmentList/>} />
            <Route path="/assignment/create" element={<CreateAssignment/>} />
            <Route path="/assignment/details/:id" element={<AssignmentDetails/>} />
            <Route path="/assignment/submit/:id" element={<SubmitAssignment/>} />
            <Route path="/assignment/results/:id" element={<AssignmentResults/>} />
            <Route path="/profile/:id" element={<StudentProfile/>} />
            <Route path="/profile/edit/:id" element={<ProfileEdit/>} />
            <Route path="/profile/attendance/:id" element={<AttendanceSummary/>} />
            <Route path="/profile/results/:id" element={<ResultSummary/>} />
            <Route path="/profile/fees/:id" element={<FeeSummary/>} />
            <Route path="/profile/parent/:id" element={<ParentInfo/>} />
            <Route path="/Profile" element={<StudentProfile/>} />
            <Route path="/marks/Results" element={<ResultSummary/>} />
            <Route path="/Exams" element={<ExamListPage/>} />
            <Route path="/exams" element={<ExamListPage/>} />
            <Route path="/exams/add" element={<AddExamPage/>} />
            <Route path="/exams/edit/:id" element={<EditExamPage/>} />
            <Route path="/profile/add" element={<AddProfile/>} />
        

            
         
           
          </Routes>

        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
