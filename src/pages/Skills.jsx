"use client"
import { FaLightbulb } from "react-icons/fa"
import "./Skills.css"

// Import skill images
import reactImg from "../assets/react.png"
import javaImg from "../assets/java.png"
import cppImg from "../assets/c++.png"
import jsImg from "../assets/js.png"
import htmlImg from "../assets/html5.png"
import cssImg from "../assets/css.png"
import gitImg from "../assets/git.svg"
import githubImg from "../assets/gitHub.png"
import mongoImg from "../assets/mongo.png"
import vscodeImg from "../assets/vscode.png"
import tailwindImg from "../assets/tailwind.png"
import nodejsImg from "../assets/nodejs.png"
import expressImg from "../assets/express-js.png"
import uxuiImg from "../assets/uxui.png"
import nextjsImg from "../assets/nextjs.png"

const Skills = ({ theme }) => {
  const skills = [
    { name: "React", image: reactImg },
    { name: "Java", image: javaImg },
    { name: "C++", image: cppImg },
    { name: "JavaScript", image: jsImg },
    { name: "HTML5", image: htmlImg },
    { name: "CSS", image: cssImg },
    { name: "Git", image: gitImg },
    { name: "GitHub", image: githubImg },
    { name: "MongoDB", image: mongoImg },
    { name: "VSCode", image: vscodeImg },
    { name: "Tailwind CSS", image: tailwindImg },
    { name: "Node.js", image: nodejsImg },
    { name: "Express.js", image: expressImg },
    { name: "UX/UI Design", image: uxuiImg },
    { name: "Next.js", image: nextjsImg },
    
    


  ]

  return (
    <div className={`skills-container ${theme}`}>
      <div className="section-header">
        <div className="label">
          <FaLightbulb className="label-icon" />
          <span>My Skills</span>
        </div>
        <h1 className="section-title">My Technical Experience/Skills.</h1>
        <div className="line"></div>
      </div>

      <p className="section-description">
        My exceptional skills in Front End Development, React, and Node.js drive the creation of high-quality software
        solutions, delivering outstanding performance, reliability, and cutting-edge responsive UIs.
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">
            <div className="skill-image-container">
              <img src={skill.image || "/placeholder.svg"} alt={skill.name} className="skill-image" />
            </div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
