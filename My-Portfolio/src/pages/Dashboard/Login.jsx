"use client"

import { useState } from "react"
import { FaSpinner } from "react-icons/fa"
import "./Login.css"

const Login = ({ onLogin, theme }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // Simple authentication for demo purposes
    // In a real app, you would validate against your backend
    setTimeout(() => {
      if (username === "admin" && password === "admin123") {
        // Store authentication in localStorage
        localStorage.setItem("dashboard_authenticated", "true")
        onLogin()
      } else {
        setError("Invalid username or password")
      }
      setLoading(false)
    }, 1000)
  }

  return (
    <div className={`login-container ${theme}`}>
      <div className="login-card">
        <div className="login-header">
          <h1>Dashboard Login</h1>
          <p>Enter your credentials to access the message dashboard</p>
        </div>

        {error && <div className="login-error">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              disabled={loading}
            />
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? (
              <>
                <FaSpinner className="spinner" /> Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <div className="login-help">
          <p>
            For demo purposes, use:
            <br />
            Username: admin
            <br />
            Password: admin123
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
