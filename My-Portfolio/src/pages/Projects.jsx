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
      title: "Amazon Clone - Cool Clone",
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
    {
      title: "Blog Application",
      description:
        "A full-stack Blog App where users can write, edit, and share blogs. Includes authentication and a modern responsive UI.",
      technologies: [
        { name: "React.js", bgColor: "rgba(213,208,200,0.345)", textColor: "black" },
        { name: "Node.js", bgColor: "lightyellow", textColor: "black" },
        { name: "MongoDB", bgColor: "lightgreen", textColor: "black" },
      ],
      link: "https://blog-app-inky-eight.vercel.app/", 
    },
    {
      title: "To-Do Task Application",
      description:
        "A simple To-Do app to create, manage, and track daily tasks. Built with React and local storage for persistence.",
      technologies: [
        { name: "React.js", bgColor: "rgba(213,208,200,0.345)", textColor: "black" },
        { name: "Html", bgColor: "cadetblue", textColor: "black" },
        { name: "Css", bgColor: "plum", textColor: "black" },
      ],
      link: "https://to-do-app-drab-ten.vercel.app/", 
    },
    {
      title: "CV Builder",
      description:
        "A web app that allows users to create professional CVs by filling out forms. Exports resume in a clean design.",
      technologies: [
        { name: "React.js", bgColor: "rgba(213,208,200,0.345)", textColor: "black" },
        { name: "JavaScript", bgColor: "mistyrose", textColor: "red" },
        { name: "Css", bgColor: "lightblue", textColor: "black" },
      ],
      link: "https://cv-builder-jet.vercel.app/",
    },
    {
      title: "Memory Card App",
      description:
        "A fun memory game where users test their memory by matching pairs of cards. Interactive and responsive design.",
      technologies: [
        { name: "React.js", bgColor: "rgba(213,208,200,0.345)", textColor: "black" },
        { name: "Html", bgColor: "cadetblue", textColor: "black" },
        { name: "Css", bgColor: "lightcoral", textColor: "black" },
        { name: "JavaScript", bgColor: "rgba(251,0,255,0.186)", textColor: "red" },
      ],
      link: "https://memory-card-app-psi.vercel.app/", 
    },
     {
      title: "Task-Nova ToDo App",
      description:
        "A modern task management app with categories, deadlines, and progress tracking features.",
      technologies: [
        { name: "React.js", bgColor: "rgba(213,208,200,0.345)", textColor: "black" },
        { name: "Node.js", bgColor: "lightyellow", textColor: "black" },
        { name: "MongoDB", bgColor: "lightgreen", textColor: "black" },
      ],
      link: "https://task-nova-todo-list.vercel.app/",
    },
    {
      title: "Age Calculator",
      description:
        "A lightweight app that calculates exact age in years, months, and days based on user input.",
      technologies: [
        { name: "Html", bgColor: "cadetblue", textColor: "black" },
        { name: "Css", bgColor: "lightblue", textColor: "black" },
        { name: "JavaScript", bgColor: "mistyrose", textColor: "red" },
      ],
      link: "https://age-calculator-olive-six.vercel.app/",
    },
    {
      title: "Premium Shopping Bag (Backend with EJS)",
      description:
        "A backend project built with Node.js and EJS templates for managing a shopping bag system.",
      technologies: [
        { name: "Node.js", bgColor: "lightyellow", textColor: "black" },
        { name: "EJS", bgColor: "lavender", textColor: "black" },
        { name: "MongoDB", bgColor: "lightgreen", textColor: "black" },
      ],
      link: "#",
    },
    {
      title: "Booking Appointment App",
      description:
        "A web app to book and manage appointments. Includes calendar integration and CRUD functionality.",
      technologies: [
        { name: "Next.js", bgColor: "rgba(213,208,200,0.345)", textColor: "black" },
        { name: "Node.js", bgColor: "lightyellow", textColor: "black" },
        { name: "MongoDB", bgColor: "lightgreen", textColor: "black" },
        { name: "Shadcn Ui", bgColor: "lightgreen", textColor: "black" },
      ],
      link: "#",
    },
    {
      title: "Food Delivery App",
      description:
        "An app for browsing restaurants, ordering food online, and tracking deliveries.",
      technologies: [
        { name: "React.js", bgColor: "rgba(213,208,200,0.345)", textColor: "black" },
        { name: "Node.js", bgColor: "lightyellow", textColor: "black" },
        { name: "MongoDB", bgColor: "lightgreen", textColor: "black" },
      ],
      link: "#",
    },
    {
      title: "Car Workshop Project - ODOO ERP",
      description:
        "ODOO ERP customization for job card management. Includes Contact, Sale, Purchase, Inventory, Employee, Accounting, Attendance, and WhatsApp integration modules.",
      technologies: [
        { name: "Python", bgColor: "rgba(55, 118, 171, 0.2)", textColor: "#3776ab" },
        { name: "Odoo", bgColor: "rgba(135, 90, 123, 0.2)", textColor: "#875a7b" },
        { name: "PostgreSQL", bgColor: "rgba(51, 103, 145, 0.2)", textColor: "#336791" },
      ],
      link: "#",
    },
    {
      title: "Pak Charity Project - Odoo ERP",
      description:
        "A comprehensive ERP solution for charity management featuring CRM, Project Management, HR, Finance modules, and a Dashboard for overseas donors and local beneficiaries.",
      technologies: [
        { name: "Odoo", bgColor: "rgba(135, 90, 123, 0.2)", textColor: "#875a7b" },
        { name: "Python", bgColor: "rgba(55, 118, 171, 0.2)", textColor: "#3776ab" },
        { name: "XML", bgColor: "rgba(255, 102, 0, 0.1)", textColor: "#ff6600" },
      ],
      link: "#",
    },
    {
      title: "Client Portfolio - MERN Stack",
      description:
        "A professional portfolio website built for a client using the MERN stack, TypeScript, and Tailwind CSS for a modern, responsive design.",
      technologies: [
        { name: "MongoDB", bgColor: "lightgreen", textColor: "black" },
        { name: "Express.js", bgColor: "rgba(0, 0, 0, 0.1)", textColor: "black" },
        { name: "React.js", bgColor: "rgba(213, 208, 200, 0.345)", textColor: "rgb(16, 16, 17)" },
        { name: "Node.js", bgColor: "lightyellow", textColor: "black" },
        { name: "TypeScript", bgColor: "rgba(49, 120, 198, 0.2)", textColor: "#3178c6" },
        { name: "Tailwind CSS", bgColor: "rgba(56, 189, 248, 0.2)", textColor: "#38bdf8" },
      ],
      link: "#",
    },
    {
      title: "CEO Portfolio & Dashboard",
      description:
        "A full-stack MERN application featuring a CEO portfolio and a dedicated administrative dashboard for content management.",
      technologies: [
        { name: "MongoDB", bgColor: "lightgreen", textColor: "black" },
        { name: "Express.js", bgColor: "rgba(0, 0, 0, 0.1)", textColor: "black" },
        { name: "React.js", bgColor: "rgba(213, 208, 200, 0.345)", textColor: "rgb(16, 16, 17)" },
        { name: "Node.js", bgColor: "lightyellow", textColor: "black" },
      ],
      link: "#",
    },
    {
      title: "Check-in-out Bot - Discord",
      description:
        "A Discord bot developed for Strings Technologies to manage employee check-in and check-out processes using JavaScript.",
      technologies: [
        { name: "JavaScript", bgColor: "rgba(251, 0, 255, 0.186)", textColor: "red" },
        { name: "Discord.js", bgColor: "rgba(88, 101, 242, 0.2)", textColor: "#5865f2" },
        { name: "Node.js", bgColor: "lightyellow", textColor: "black" },
      ],
      link: "#",
    },
    {
      title: "Task Manager Bot - Discord",
      description:
        "A Python-based Discord bot for Strings Technologies designed to streamline task management and team coordination.",
      technologies: [
        { name: "Python", bgColor: "rgba(55, 118, 171, 0.2)", textColor: "#3776ab" },
        { name: "Discord.py", bgColor: "rgba(88, 101, 242, 0.2)", textColor: "#5865f2" },
      ],
      link: "#",
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
