"use client"
import { FaEnvelope, FaEnvelopeOpen, FaReply } from "react-icons/fa"

const MessageList = ({ messages, loading, onSelectMessage, selectedId }) => {
  if (loading) {
    return (
      <div className="message-list-loading">
        <div className="spinner"></div>
        <p>Loading messages...</p>
      </div>
    )
  }

  if (messages.length === 0) {
    return (
      <div className="message-list-empty">
        <p>No messages found</p>
      </div>
    )
  }

  // Format date to readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString() + " " + date.toLocaleTimeString()
  }

  // Get status icon based on message status
  const getStatusIcon = (status) => {
    switch (status) {
      case "unread":
        return <FaEnvelope className="status-icon unread" />
      case "read":
        return <FaEnvelopeOpen className="status-icon read" />
      case "replied":
        return <FaReply className="status-icon replied" />
      default:
        return <FaEnvelope className="status-icon" />
    }
  }

  return (
    <div className="message-list">
      {messages.map((message) => (
        <div
          key={message._id}
          className={`message-item ${message.status} ${selectedId === message._id ? "selected" : ""}`}
          onClick={() => onSelectMessage(message)}
        >
          <div className="message-header">
            <div className="message-sender">{message.name}</div>
            <div className="message-status">{getStatusIcon(message.status)}</div>
          </div>
          <div className="message-email">{message.email}</div>
          <div className="message-preview">
            {message.message.substring(0, 60)}
            {message.message.length > 60 ? "..." : ""}
          </div>
          <div className="message-date">{formatDate(message.createdAt)}</div>
        </div>
      ))}
    </div>
  )
}

export default MessageList
