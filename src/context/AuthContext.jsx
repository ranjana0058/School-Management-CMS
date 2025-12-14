import { createContext, useContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const token = Cookies.get('token')
    const userData = Cookies.get('user')
    
    if (token && userData) {
      setUser(JSON.parse(userData))
    }
    setLoading(false)
  }, [])
  
  const login = (userData, token) => {
    setUser(userData)
    Cookies.set('token', token, { expires: 7 })
    Cookies.set('user', JSON.stringify(userData), { expires: 7 })
  }
  
  const logout = () => {
    setUser(null)
    Cookies.remove('token')
    Cookies.remove('user')
  }
  
  const value = { user, login, logout, loading }
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}