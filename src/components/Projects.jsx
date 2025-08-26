import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  // Sample project data with details
  const allProjects = [
    {
      title: "Campus Connect",
      description: "CampusConnect is a full-stack MERN event hub where Students can discover and save college events, while Organizers manage their own listings through private, role-based dashboards.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "Redux"],
      link: "https://campus-connect-online.vercel.app/",
      github: "https://github.com/KaxitJayswal/Campus_Connect-frontend",
      category: "fullstack"
    },
    {
      title: "Portfolio Website",
      description: "Modern, professional portfolio website showcasing skills, projects, and contact information with responsive design.",
      technologies: ["React", "CSS", "Vite"],
      link: "#",
      github: "#",
      category: "frontend"
    },
    {
      title: "VroomGo",
      description: "VroomGo is a web platform for renting cars, bikes, and SUVs. Built with HTML, CSS, and JavaScript, it uses Google's Firebase for its backend to manage user accounts and store data.",
      technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
      link: "https://vroom-go.vercel.app",
      github: "https://github.com/KaxitJayswal/VroomGo",
      category: "fullstack"
    }
  ];
  
  // Using all projects directly
  const projectsToShow = allProjects;

  return (
    <section id="projects">
      <div className="section-header">
        <h2><span className="section-number">04.</span> Projects</h2>
      </div>
      
      <div className="section-content">
        <div className="projects-container">
          {projectsToShow.map((project, index) => (
            <div key={index} className={`project-wrapper animated animated-delay-${index + 1}`}>
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
        
        {allProjects.length > 3 && (
          <div className="view-more animated animated-delay-2">
            <button className="view-more-btn">View More Projects</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
