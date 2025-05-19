"use client"

import { useState } from "react"
import { FaPhone, FaPaperPlane, FaSpinner, FaCheck, FaExclamationTriangle } from "react-icons/fa"
import axios from "axios"
import "./Contact.css"

// API base URL - change this to your backend URL
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      // Send data to backend API
      const response = await axios.post(`${API_URL}/contact`, formData)

      // Handle success
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    } catch (error) {
      // Handle error
      setIsSubmitting(false)

      if (error.response && error.response.data) {
        setSubmitError(error.response.data.message || "Failed to send message. Please try again.")
      } else {
        setSubmitError("Network error. Please check your connection and try again.")
      }
    }
  }

  return (
    <div className={`contact-container ${theme}`}>
      <div className="section-header">
        <div className="label">
          <FaPhone className="label-icon" />
          <span>Contact</span>
        </div>
        <h1 className="section-title">Contact me</h1>
        <div className="line"></div>
      </div>

      <div className="contact-content">
        <div className="contact-form-container">
          <div className="form-header">
            <h2>Send a message</h2>
            <p>I'll get back to you as soon as possible.</p>
          </div>

          {submitSuccess && (
            <div className="success-message">
              <FaCheck className="message-icon" />
              Your message has been sent successfully! I'll get back to you soon.
            </div>
          )}

          {submitError && (
            <div className="error-message">
              <FaExclamationTriangle className="message-icon" />
              {submitError}
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows="4"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <FaSpinner className="spinner" />
                  Sending...
                </>
              ) : (
                <>
                  Submit <FaPaperPlane className="btn-icon" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
