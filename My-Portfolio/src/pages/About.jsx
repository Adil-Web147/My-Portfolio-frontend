"use client"
import { FaUser, FaGlobe, FaUserCircle, FaHeart } from "react-icons/fa"
import "./About.css"

const About = ({ theme }) => {
  return (
    <div className={`about-container ${theme}`}>
      <div className="section-header">
        <div className="label">
          <FaUser className="label-icon" />
          <span>About me</span>
        </div>
        <h1 className="section-title">
          Front End Developer And Web
          <br />
          Developer, Based In ICP, Pakistan.
        </h1>
        <div className="line"></div>
      </div>

      <p className="about-description">
        I am a Front End Developer working on web applications and mobile applications. I have been developing
        professionally for 3 years but tinkering since a kid. I started in tech with internship, freelance services and
        part time positions during college. I have a bit off a diverse job history. I have been working on IOT's, Mobile
        App Development, System Engineer, graphic/web design, web app development and sysadmin/DevOps.
        <br />
        <br />I can help everywhere in the stack and I love wearing multiple hats to an extent. Although, I do think my
        strongest skills are in software engineering. Most of my positions utilized agile-like development processes
        using Jira. A day in my life may consist of: prepping web art, fixing some front-end bugs, adding an API
        endpoint, dockerizing an application, database design, configuring a library, setting up a build or deployment
        plan.
      </p>

      <div className="info-cards">
        <div className="info-card">
          <div className="info-card-header">
            <FaGlobe className="info-icon" />
            <h3>Language</h3>
          </div>
          <div className="info-line"></div>
          <div className="info-content">
            <span className="info-dot"></span>
            <span>English, Urdu, Hindi</span>
          </div>
        </div>

        <div className="info-card">
          <div className="info-card-header">
            <FaGlobe className="info-icon" />
            <h3>Nationality</h3>
          </div>
          <div className="info-line"></div>
          <div className="info-content">
            <span className="info-dot"></span>
            <span>Pakistani</span>
          </div>
        </div>

        <div className="info-card">
          <div className="info-card-header">
            <FaUserCircle className="info-icon" />
            <h3>Gender</h3>
          </div>
          <div className="info-line"></div>
          <div className="info-content">
            <span className="info-dot"></span>
            <span>Male</span>
          </div>
        </div>
      </div>

      <div className="hobbies-section">
        <div className="hobbies-header">
          <FaHeart className="hobbies-icon" />
          <h3>Hobbies</h3>
        </div>
        <div className="hobbies-line"></div>
        <div className="hobbies-list">
          <span className="hobby-item">Coding</span>
          <span className="hobby-item">Playing Games</span>
          <span className="hobby-item">Watching Actions</span>
          <span className="hobby-item">Developing Cool Projects</span>
        </div>
      </div>
    </div>
  )
}

export default About
