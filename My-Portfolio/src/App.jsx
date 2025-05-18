"use client"

import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Education from "./pages/Education"
import Projects from "./pages/Projects"
import More from "./pages/More"
import Contact from "./pages/Contact"
import Dashboard from "./pages/Dashboard" // Import the Dashboard component
import ParticlesBackground from "./components/ParticlesBackground"
import "./App.css"

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme")
    return savedTheme || "light"
  })

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  useEffect(() => {
    localStorage.setItem("theme", theme)
    document.body.className = theme
  }, [theme])

  return (
    <Router>
      <div className={`app ${theme}`}>
        <ParticlesBackground theme={theme} />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/about" element={<About theme={theme} />} />
          <Route path="/skills" element={<Skills theme={theme} />} />
          <Route path="/education" element={<Education theme={theme} />} />
          <Route path="/projects" element={<Projects theme={theme} />} />
          <Route path="/more" element={<More theme={theme} />} />
          <Route path="/contact" element={<Contact theme={theme} />} />
          <Route path="/dashboard" element={<Dashboard theme={theme} />} /> {/* Add Dashboard route */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
