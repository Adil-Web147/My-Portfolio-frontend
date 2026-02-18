"use client"

import { useState, useEffect } from "react"
import Dashboard from "./Dashboard"
import Login from "./Login"

const DashboardApp = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check if user is already authenticated
    const authStatus = localStorage.getItem("isAuthenticated")
    if (authStatus === "true") {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    setIsAuthenticated(false)
  }

  return (
    <div className="dashboard-app">
      {isAuthenticated ? (
        <>
          <nav className="dashboard-nav">
            <div className="nav-brand">Contact Dashboard</div>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </nav>
          <Dashboard />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  )
}

export default DashboardApp
