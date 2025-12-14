const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'
const IS_DEVELOPMENT = !import.meta.env.MODE || import.meta.env.MODE === 'development'

const DEMO_USERS = {
  'admin@school.com': { name: 'Admin User', role: 'admin', id: '1' },
  'teacher@school.com': { name: 'John Teacher', role: 'teacher', id: '2' },
  'student@school.com': { name: 'Jane Student', role: 'student', id: '3' }
}

const DEMO_PASSWORDS = {
  'admin@school.com': 'admin123',
  'teacher@school.com': 'teacher123',
  'student@school.com': 'student123'
}

export const authService = {
  async login(email, password) {
    try {
      if (IS_DEVELOPMENT) {
        return await this.demoLogin(email, password)
      }
      
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      
      if (!response.ok) {
        throw new Error('Invalid credentials')
      }
      
      const data = await response.json()
      this.setAuthData(data)
      return data
    } catch (error) {
      throw new Error(error.message || 'Login failed')
    }
  },

  async demoLogin(email, password) {
    await new Promise(resolve => setTimeout(resolve, 800))
    
    const user = DEMO_USERS[email]
    if (!user || DEMO_PASSWORDS[email] !== password) {
      throw new Error('Invalid credentials')
    }
    
    const authData = {
      user: { ...user, email },
      token: `demo-token-${Date.now()}`
    }
    
    this.setAuthData(authData)
    return authData
  },

  logout() {
    localStorage.removeItem('authToken')
    localStorage.removeItem('currentUser')
  },

  getCurrentUser() {
    const user = localStorage.getItem('currentUser')
    return user ? JSON.parse(user) : null
  },

  getToken() {
    return localStorage.getItem('authToken')
  },

  isAuthenticated() {
    return !!this.getToken()
  },

  setAuthData(data) {
    localStorage.setItem('authToken', data.token)
    localStorage.setItem('currentUser', JSON.stringify(data.user))
  }
}