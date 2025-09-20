import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  // Check if user is authenticated
  const token = localStorage.getItem('token')
  
  if (!token) {
    return <Navigate to="/admin/login" replace />
  }
  
  return children
}

export default ProtectedRoute