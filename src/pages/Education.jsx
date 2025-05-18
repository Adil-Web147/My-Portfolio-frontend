"use client"
import { FaGraduationCap } from "react-icons/fa"
import "./Education.css"

const Education = ({ theme }) => {
  return (
    <div className={`education-container ${theme}`}>
      <div className="section-header">
        <div className="label">
          <FaGraduationCap className="label-icon" />
          <span>Education</span>
        </div>
        <h1 className="section-title">My Education</h1>
        <div className="line"></div>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-date">Sep 2021-2025</div>
          <div className="timeline-line">
            <div className="timeline-dot"></div>
          </div>
          <div className="timeline-content">
            <h2 className="timeline-title">
              Bachelor of Computer Science,
              <br />
              Islamia University Peshawer
            </h2>
            <p className="timeline-description">Continue my Bachelor degree in Computer Science.</p>
          </div>
        </div>

        {/* You can add more education items here */}
      </div>
    </div>
  )
}

export default Education
