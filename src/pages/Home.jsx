import { Link } from "react-router-dom"
import { FaTwitter, FaLinkedin, FaEnvelope, FaSkype, FaExternalLinkAlt, FaGithub, FaDownload } from "react-icons/fa"
import { useEffect, useState } from "react"
import "./Home.css"
import profileImage from "../assets/logo.png"

const Home = ({ theme }) => {
  const [typedFirstName, setTypedFirstName] = useState(" ")
  const [typedLastName, setTypedLastName] = useState(" ")
  const [isTypingFirstName, setIsTypingFirstName] = useState(true)
  const [isTypingLastName, setIsTypingLastName] = useState(false)

  useEffect(() => {
    let currentIndex = 0
    let typingInterval

    const typeName = () => {
      typingInterval = setInterval(() => {
        if (isTypingFirstName && currentIndex <= "Muhammad".length) {
          setTypedFirstName("Muhammad".substring(0, currentIndex) || " ")
          currentIndex++
        }
        else if (isTypingFirstName && currentIndex > "Muhammad".length) {
          clearInterval(typingInterval)
          setIsTypingFirstName(false)
          setIsTypingLastName(true)
          currentIndex = 0
          setTimeout(() => {
            typeLastName()
          }, 500)
        }
      }, 150)
    }

    const typeLastName = () => {
      typingInterval = setInterval(() => {
        if (isTypingLastName && currentIndex <= "Adil.".length) {
          setTypedLastName("Adil.".substring(0, currentIndex) || " ")
          currentIndex++
        }
        else if (isTypingLastName && currentIndex > "Adil.".length) {
          clearInterval(typingInterval)
          setIsTypingLastName(false)
          setTimeout(() => {
            setTypedFirstName(" ")
            setTypedLastName(" ")
            setIsTypingFirstName(true)
          }, 5000)
        }
      }, 150)
    }

    if (isTypingFirstName) {
      typeName()
    } else if (isTypingLastName) {
      typeLastName()
    }

    return () => clearInterval(typingInterval)
  }, [isTypingFirstName, isTypingLastName])

  return (
    <div className={`home-container ${theme}`}>
      <div className="content-wrapper">
        <div className="text-content">
          <h3 className="subtitle">My Name is</h3>
          <div className="name-container">
            <h1 className="title">
              <span className="first-name">{typedFirstName}</span>
              <span className="last-name">{typedLastName}</span>
            </h1>
          </div>
          <div className="line"></div>
          <div className="description">
            Full-Stack Developer | Odoo ERP Expert | MERN Stack | Bot Development | Web Scraping & <span className="highlight">Business Automation</span>
          </div>

          <div className="social-links">
            <SocialIcon icon={<FaTwitter />} href="#" />
            <SocialIcon icon={<FaLinkedin />} href="https://www.linkedin.com/in/muhammad-adil222/" />
            <SocialIcon icon={<FaEnvelope />} href="mailto:muhammadadilhangu@gmail.com" />
            <SocialIcon icon={<FaSkype />} href="#" />
            <SocialIcon icon={<FaExternalLinkAlt />} href="#" />
          </div>

          <div className="buttons">
            <a href="/Muhammad_Adil_Resume1.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
              <FaDownload className="btn-icon" />
              Download Resume
            </a>

            <Link to="https://github.com/Adil-Web147" target="_blank" className="github-btn">
              <FaGithub className="btn-icon" />
              Github
            </Link>
          </div>
        </div>

        <div className="image-container">
          <img src={profileImage || "/placeholder.svg"} alt="Muhammad Adil" className="profile-image" />
        </div>
      </div>
    </div>
  )
}

const SocialIcon = ({ icon, href }) => {
  return (
    <a href={href} className="social-icon" target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  )
}

export default Home