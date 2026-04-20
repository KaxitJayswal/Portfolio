import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const Projects = () => {
  // Sample project data with details
  const [show, setShow] = useState(true);
  const allProjects = [
    {
      title: "Campus Connect",
      description:
        "CampusConnect is a full-stack MERN event hub where Students can discover and save college events, while Organizers manage their own listings through private, role-based dashboards.",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      link: "https://campus-connect-online.vercel.app/",
      github: "https://github.com/KaxitJayswal/Campus_Connect-frontend",
      category: "fullstack",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern, professional portfolio website showcasing skills, projects, and contact information with responsive design.",
      technologies: ["React", "CSS", "Vite"],
      link: "#",
      github: "https://github.com/KaxitJayswal/Portfolio",
      category: "frontend",
    },
    {
      title: "VroomGo",
      description:
        "VroomGo is a web platform for renting cars, bikes, and SUVs. Built with HTML, CSS, and JavaScript, it uses Google's Firebase for its backend to manage user accounts and store data.",
      technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
      link: "https://vroom-go.vercel.app",
      github: "https://github.com/KaxitJayswal/VroomGo",
      category: "fullstack",
    },
    {
      title: "Restro POS",
      description:
        "Restro POS is restaurant Point of Sale (POS) system to manage orders, billing, and menu items. it containe features like order tracking and table managment",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      link: "",
      github: "",
      category: "fullstack",
    },
    {
      title: "ShopSphere",
      description:
        "ShopSphere is e-commerce platform with product browsing and cart features.Implemented search, filter, and sorting for efficient product discovery ",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      link: "",
      github: "",
      category: "fullstack",
    },
  ];
  const [projectsToShow, setProjectToShow] = useState(allProjects.slice(0, 3));
  return (
    <section id="projects">
      <div className="section-header">
        <h2>
          <span className="section-number">04.</span> Projects
        </h2>
      </div>

      <div className="section-content">
        <div className="projects-container">
          {projectsToShow.map((project, index) => (
            <div
              key={index}
              className={`project-wrapper animated animated-delay-${index + 1}`}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                link={project.link}
                github={project.github}
              />
            </div>
          ))}
        </div>

        {show ? (
          <div className="view-more animated animated-delay-2">
            <button
              className="view-more-btn"
              onClick={() => {
                setProjectToShow(allProjects);
                setShow(false);
              }}
            >
              View More Projects
            </button>
          </div>
        ) : (
          <div className="view-more animated animated-delay-2">
            <button
              className="view-more-btn"
              onClick={() => {
                setProjectToShow(allProjects.slice(0, 3));
                setShow(true);
              }}
            >
              View less Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
