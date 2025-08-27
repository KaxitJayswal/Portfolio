import React from 'react';
import './Skills.css';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaNpm, FaFigma } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiFirebase } from 'react-icons/si';
import { MdDesignServices } from 'react-icons/md';
import { VscDebugAll } from 'react-icons/vsc';
import { TbBrandVscode } from 'react-icons/tb';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Firebase", icon: <SiFirebase /> },
      ]
    },
    {
      category: "Tools & Skills",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "npm", icon: <FaNpm /> },
        { name: "VS Code", icon: <TbBrandVscode /> },
        { name: "Figma", icon: <FaFigma /> },
        { name: "UI/UX Design", icon: <MdDesignServices /> },
      ]
    }
  ];

  // Create a flat list of all skills for the scrolling banner
  const allSkills = skillCategories.flatMap(category => category.skills);

  return (
    <section id="skills">
      <div className="section-header">
        <h2><span className="section-number">03.</span> Skills & Expertise</h2>
      </div>
      
      <div className="section-content">
        {/* Keep the scrolling skills container for visual appeal */}
        <div className="skills-scroll-container animated">
          <div className="skills-scroll-track">
            {[...allSkills, ...allSkills].map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Add categorized skills section */}
        <div className="skills-categories-container">
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>
              <h3 className="category-title">{category.category}</h3>
              <div className="category-skills">
                {category.skills.map((skill, skillIndex) => (
                  <div className="category-skill-item" key={skillIndex}>
                    <div className="category-skill-icon">{skill.icon}</div>
                    <div className="category-skill-name">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
