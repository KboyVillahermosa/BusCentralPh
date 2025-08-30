import { useState } from 'react'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { Homepage } from './components/Homepage'
import './App.css'

function AuthenticatedApp() {
  const { user, loading } = useAuth()
  const [isLoginMode, setIsLoginMode] = useState(true)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  if (user) {
    return <Homepage />
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {isLoginMode ? (
        <Login onToggleMode={() => setIsLoginMode(false)} />
      ) : (
        <Register onToggleMode={() => setIsLoginMode(true)} />
      )}
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <AuthenticatedApp />
    </AuthProvider>
  )
}

export default App
