"use client";
import { FaUser, FaGlobe, FaUserCircle, FaHeart } from "react-icons/fa";
import "./About.css";

const About = ({ theme }) => {
  return (
    <div className={`about-container ${theme}`}>
      <div className="section-header">
        <div className="label">
          <FaUser className="label-icon" />
          <span>About me</span>
        </div>
        <h1 className="section-title">
          Full-Stack Developer | Odoo ERP Expert
          <br />
          Based in KP IT Board Strings Technologies.
        </h1>
        <div className="line"></div>
      </div>
      +
      <p className="about-description">
        I’m a Full-Stack Developer and Odoo ERP Specialist dedicated to building efficient, scalable solutions. My
        expertise spans the MERN Stack (MongoDB, Express, React, Node), Odoo customization, and Bot Development. I specialize in creating functional web
        applications, automating business processes, and developing intelligent bots (Discord/Python/JS) to streamline workflows.
        With a strong background in Web Scraping and Business Automation, I
        focus on writing clean, maintainable code that solves real-world
        problems. From designing responsive modern interfaces to creating robust
        APIs and managing databases, I enjoy building products end-to-end and
        collaborating to bring impactful projects to life.
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
  );
};

export default About;
