"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import MessageList from "./MessageList"
import MessageDetail from "./MessageDetail"
import "./Dashboard.css"

// API base URL - change this to your backend URL
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const Dashboard = () => {
  const [messages, setMessages] = useState([])
  const [selectedMessage, setSelectedMessage] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [stats, setStats] = useState({
    total: 0,
    unread: 0,
    read: 0,
    replied: 0,
  })

  // Fetch all messages
  const fetchMessages = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${API_URL}/contact`)

      if (response.data.success) {
        setMessages(response.data.data)

        // Calculate stats
        const total = response.data.data.length
        const unread = response.data.data.filter((msg) => msg.status === "unread").length
        const read = response.data.data.filter((msg) => msg.status === "read").length
        const replied = response.data.data.filter((msg) => msg.status === "replied").length

        setStats({ total, unread, read, replied })
      }
      setLoading(false)
    } catch (error) {
      console.error("Error fetching messages:", error)
      setError("Failed to load messages. Please try again.")
      setLoading(false)
    }
  }

  // Update message status
  const updateMessageStatus = async (id, status) => {
    try {
      const response = await axios.put(`${API_URL}/contact/${id}`, { status })

      if (response.data.success) {
        // Update messages list
        setMessages(messages.map((msg) => (msg._id === id ? { ...msg, status } : msg)))

        // Update selected message if it's the one being updated
        if (selectedMessage && selectedMessage._id === id) {
          setSelectedMessage({ ...selectedMessage, status })
        }

        // Recalculate stats
        const total = messages.length
        const unread = messages.filter((msg) => (msg._id === id ? status === "unread" : msg.status === "unread")).length
        const read = messages.filter((msg) => (msg._id === id ? status === "read" : msg.status === "read")).length
        const replied = messages.filter((msg) =>
          msg._id === id ? status === "replied" : msg.status === "replied",
        ).length

        setStats({ total, unread, read, replied })
      }
    } catch (error) {
      console.error("Error updating message status:", error)
      setError("Failed to update message status. Please try again.")
    }
  }

  // Delete a message
  const deleteMessage = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return

    try {
      const response = await axios.delete(`${API_URL}/contact/${id}`)

      if (response.data.success) {
        // Remove from messages list
        const updatedMessages = messages.filter((msg) => msg._id !== id)
        setMessages(updatedMessages)

        // Clear selected message if it's the one being deleted
        if (selectedMessage && selectedMessage._id === id) {
          setSelectedMessage(null)
        }

        // Recalculate stats
        const total = updatedMessages.length
        const unread = updatedMessages.filter((msg) => msg.status === "unread").length
        const read = updatedMessages.filter((msg) => msg.status === "read").length
        const replied = updatedMessages.filter((msg) => msg.status === "replied").length

        setStats({ total, unread, read, replied })
      }
    } catch (error) {
      console.error("Error deleting message:", error)
      setError("Failed to delete message. Please try again.")
    }
  }

  // Handle message selection
  const handleSelectMessage = async (message) => {
    setSelectedMessage(message)

    // If message is unread, mark it as read
    if (message.status === "unread") {
      await updateMessageStatus(message._id, "read")
    }
  }

  // Handle message reply
  const handleReply = async (messageId, replyText) => {
    // In a real app, you would send the reply via email here
    // For now, we'll just mark the message as replied
    await updateMessageStatus(messageId, "replied")
    alert(`Reply sent: ${replyText}`)
  }

  // Load messages on component mount
  useEffect(() => {
    fetchMessages()
  }, [])

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Message Dashboard</h1>
        <div className="stats-container">
          <div className="stat-box">
            <span className="stat-value">{stats.total}</span>
            <span className="stat-label">Total</span>
          </div>
          <div className="stat-box unread">
            <span className="stat-value">{stats.unread}</span>
            <span className="stat-label">Unread</span>
          </div>
          <div className="stat-box read">
            <span className="stat-value">{stats.read}</span>
            <span className="stat-label">Read</span>
          </div>
          <div className="stat-box replied">
            <span className="stat-value">{stats.replied}</span>
            <span className="stat-label">Replied</span>
          </div>
        </div>
      </div>

      {error && <div className="error-alert">{error}</div>}

      <div className="dashboard-content">
        <div className="messages-panel">
          <div className="panel-header">
            <h2>Messages</h2>
            <button className="refresh-btn" onClick={fetchMessages}>
              Refresh
            </button>
          </div>
          <MessageList
            messages={messages}
            loading={loading}
            onSelectMessage={handleSelectMessage}
            selectedId={selectedMessage?._id}
          />
        </div>

        <div className="detail-panel">
          {selectedMessage ? (
            <MessageDetail
              message={selectedMessage}
              onReply={handleReply}
              onDelete={() => deleteMessage(selectedMessage._id)}
              onUpdateStatus={updateMessageStatus}
            />
          ) : (
            <div className="no-selection">
              <p>Select a message to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
