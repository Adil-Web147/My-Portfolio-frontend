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
           MERN Stack Developer 
          <br />
          Based In ICP, Pakistan.
        </h1>
        <div className="line"></div>
      </div>

      <p className="about-description">
        I’m a MERN Stack Developer who enjoys turning ideas into functional web
        applications. My core skills are in MongoDB, Express.js, React.js, and
        Node.js, and I focus on writing clean, efficient, and maintainable code.
        I started my journey in tech during my studies, building projects and
        experimenting with different tools. Over time, I’ve grown comfortable
        working on both frontend and backend, from designing responsive
        interfaces to creating APIs and managing databases. Beyond coding, I’m
        interested in how products are built end-to-end — from user experience
        to deployment. I enjoy problem-solving, learning new technologies, and
        collaborating with others to bring projects to life. Right now, I’m
        focused on strengthening my expertise and contributing to impactful
        projects where I can continue to grow as a developer.
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
