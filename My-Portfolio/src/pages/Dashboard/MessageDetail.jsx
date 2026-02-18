"use client"

import { useState } from "react"
import { FaUser, FaEnvelope, FaClock, FaTrash, FaReply } from "react-icons/fa"

const MessageDetail = ({ message, onReply, onDelete, onUpdateStatus }) => {
  const [replyText, setReplyText] = useState("")
  const [isReplying, setIsReplying] = useState(false)
  const [sendingReply, setSendingReply] = useState(false)
  const [replyError, setReplyError] = useState("")

  // Format date to readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString() + " " + date.toLocaleTimeString()
  }

  // Handle status change
  const handleStatusChange = (e) => {
    onUpdateStatus(message._id, e.target.value)
  }

  // Handle reply submission
  const handleReplySubmit = async (e) => {
    e.preventDefault()
    if (!replyText.trim()) return

    setSendingReply(true)
    setReplyError("")

    try {
      // Send the reply to the backend
      const response = await fetch(`http://localhost:5000/api/contact/${message._id}/reply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ replyText }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to send reply")
      }

      // Call the onReply function to update UI
      onReply(message._id, replyText)
      setReplyText("")
      setIsReplying(false)
    } catch (error) {
      setReplyError(error.message || "Failed to send reply. Please try again.")
    } finally {
      setSendingReply(false)
    }
  }

  return (
    <div className="message-detail">
      <div className="detail-header">
        <h2>Message Details</h2>
        <div className="detail-actions">
          <select value={message.status} onChange={handleStatusChange} className={`status-select ${message.status}`}>
            <option value="unread">Unread</option>
            <option value="read">Read</option>
            <option value="replied">Replied</option>
          </select>
          <button className="delete-btn" onClick={onDelete}>
            <FaTrash />
          </button>
        </div>
      </div>

      <div className="detail-content">
        <div className="detail-field">
          <div className="field-icon">
            <FaUser />
          </div>
          <div className="field-content">
            <div className="field-label">From</div>
            <div className="field-value">{message.name}</div>
          </div>
        </div>

        <div className="detail-field">
          <div className="field-icon">
            <FaEnvelope />
          </div>
          <div className="field-content">
            <div className="field-label">Email</div>
            <div className="field-value">{message.email}</div>
          </div>
        </div>

        <div className="detail-field">
          <div className="field-icon">
            <FaClock />
          </div>
          <div className="field-content">
            <div className="field-label">Date</div>
            <div className="field-value">{formatDate(message.createdAt)}</div>
          </div>
        </div>

        <div className="message-body">
          <div className="field-label">Message</div>
          <div className="message-text">{message.message}</div>
        </div>

        {!isReplying ? (
          <button className="reply-btn" onClick={() => setIsReplying(true)}>
            <FaReply /> Reply to this message
          </button>
        ) : (
          <div className="reply-form-container">
            <h3>Reply to {message.name}</h3>
            {replyError && <div className="reply-error">{replyError}</div>}
            <form onSubmit={handleReplySubmit} className="reply-form">
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Type your reply here..."
                required
                disabled={sendingReply}
              ></textarea>
              <div className="reply-actions">
                <button type="submit" className="send-reply-btn" disabled={sendingReply}>
                  {sendingReply ? (
                    <>
                      <span className="spinner"></span> Sending...
                    </>
                  ) : (
                    <>
                      <FaReply /> Send Reply
                    </>
                  )}
                </button>
                <button
                  type="button"
                  className="cancel-reply-btn"
                  onClick={() => {
                    setIsReplying(false)
                    setReplyText("")
                    setReplyError("")
                  }}
                  disabled={sendingReply}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default MessageDetail
