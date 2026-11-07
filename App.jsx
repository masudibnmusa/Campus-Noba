import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './Login.jsx'
import Register from './Register.jsx'
import { useAuth } from './AuthContext.jsx'
import StudentDashboard from './StudentDashboard.jsx'
import FacultyDashboard from './FacultyDashboard.jsx'
import ClubDashboard from './ClubDashboard.jsx'
import PartnerDashboard from './PartnerDashboard.jsx'
import UniAdminDashboard from './UniAdminDashboard.jsx'
import SysAdminDashboard from './SysAdminDashboard.jsx'

function RoleRouter() {
  const { currentUser } = useAuth()
  switch (currentUser.role) {
    case 'student': return <StudentDashboard />
    case 'faculty': return <FacultyDashboard />
    case 'club': return <ClubDashboard />
    case 'partner': return <PartnerDashboard />
    case 'uni_admin': return <UniAdminDashboard />
    case 'sys_admin': return <SysAdminDashboard />
    default: return <Navigate to="/" replace />
  }
}

function ProtectedRoute({ children }) {
  const { currentUser } = useAuth()
  if (!currentUser) return <Navigate to="/" replace />
  return children
}

export default function App() {
  const { currentUser } = useAuth()
  return (
    <Routes>
      <Route path="/" element={currentUser ? <Navigate to="/app" replace /> : <Login />} />
      <Route path="/register" element={currentUser ? <Navigate to="/app" replace /> : <Register />} />
      <Route path="/app" element={<ProtectedRoute><RoleRouter /></ProtectedRoute>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
