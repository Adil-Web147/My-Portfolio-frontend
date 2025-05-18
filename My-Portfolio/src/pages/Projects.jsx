"use client"
import { FaBoxOpen, FaExternalLinkAlt } from "react-icons/fa"
import "./Projects.css"

const Projects = ({ theme }) => {
  const projects = [
    {
      title: "News App - News Update",
      description:
        "This is News App in this app you can see everything about world means top-headlines news like Sports, business, technology, entertainment.",
      technologies: [
        { name: "React.js", bgColor: "rgba(213, 208, 200, 0.345)", textColor: "rgb(16, 16, 17)" },
        { name: "Html", bgColor: "cadetblue", textColor: "black" },
        { name: "Css", bgColor: "rgba(137, 43, 226, 0.313)", textColor: "black" },
        { name: "JavaScript", bgColor: "rgba(251, 0, 255, 0.186)", textColor: "red" },
      ],
      link: "https://adil-web147.github.io/News/",
    },
    {
      title: "iNootBook - Save Your Notes",
      description:
        "This is iNootBook App in this app you can save your Notes about yourself which contain tag, title, and description also login and signup",
      technologies: [
        { name: "React.js", bgColor: "rgba(213, 208, 200, 0.345)", textColor: "rgb(16, 16, 17)" },
        { name: "Html", bgColor: "cadetblue", textColor: "black" },
        { name: "MongoDB", bgColor: "rgba(137, 43, 226, 0.313)", textColor: "black" },
        { name: "JavaScript", bgColor: "rgba(251, 0, 255, 0.186)", textColor: "red" },
      ],
      link: "https://adil-web147.github.io/iNootbook/",
    },
    {
      title: "Amazon clone - cool clone",
      description:
        "This is Amazon clone in this clone you will see everything about Amazon shopping, products like Sports, business, technology.",
      technologies: [
        { name: "React.js", bgColor: "rgba(213, 208, 200, 0.345)", textColor: "rgb(16, 16, 17)" },
        { name: "Html", bgColor: "cadetblue", textColor: "black" },
        { name: "Css", bgColor: "rgba(137, 43, 226, 0.313)", textColor: "black" },
        { name: "JavaScript", bgColor: "rgba(251, 0, 255, 0.186)", textColor: "red" },
      ],
      link: "https://adil-web147.github.io/Amazon-clone/",
    },
  ]

  return (
    <div className={`projects-container ${theme}`}>
      <div className="section-header">
        <div className="label">
          <FaBoxOpen className="label-icon" />
          <span>Projects</span>
        </div>
        <h1 className="section-title">My Projects</h1>
        <div className="line"></div>
      </div>

      <p className="section-description">
        I love to Build Cool Projects. Here, you'll find a curated collection of my creative endeavors and technical
        projects. Each piece represents a journey of invention, problem-solving, and continuous learning. Feel free to
        explore this showcase of my passion and expertise in action.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="tech-tags">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="tech-tag"
                  style={{
                    backgroundColor: tech.bgColor,
                    color: tech.textColor,
                  }}
                >
                  {tech.name}
                </span>
              ))}
            </div>

            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              Visit Project <FaExternalLinkAlt className="link-icon" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
