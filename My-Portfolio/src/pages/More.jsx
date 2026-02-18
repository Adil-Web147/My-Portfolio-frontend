"use client"
import { FaPlus, FaExternalLinkAlt } from "react-icons/fa"
import "./More.css"

const More = ({ theme }) => {
  return (
    <div className={`more-container ${theme}`}>
      <div className="section-header">
        <div className="label">
          <FaPlus className="label-icon" />
          <span>More</span>
        </div>
        <h1 className="section-title">More</h1>
        <div className="line"></div>
      </div>

      <div className="more-cards">
        <div className="more-card">
          <h3 className="more-card-title">Medium</h3>
          <p className="more-card-description">
            I write blogs on web development, trending tech stacks or javascript guide or tips in Medium
          </p>
          <a href="#" className="more-card-link">
            Visit Blog <FaExternalLinkAlt className="link-icon" />
          </a>
        </div>

        <div className="more-card">
          <h3 className="more-card-title">Buy Me a coffee</h3>
          <p className="more-card-description">
            Your support goes a long way in helping me maintain the quality of content, explore new topics, and dedicate
            more time to creating valuable projects.
          </p>
          <a href="#" className="more-card-link">
            Support Me <FaExternalLinkAlt className="link-icon" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default More
