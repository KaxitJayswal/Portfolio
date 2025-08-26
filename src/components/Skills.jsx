import React from 'react';
import './Skills.css';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaNpm } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiExpress, SiWebpack, SiTypescript, SiNextdotjs, SiRedux } from 'react-icons/si';
import { BiCodeAlt } from 'react-icons/bi';
import { MdDesignServices } from 'react-icons/md';
import { VscDebugAll } from 'react-icons/vsc';

const Skills = () => {
  const skillsWithIcons = [
    { name: "React", icon: <FaReact /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Webpack", icon: <SiWebpack /> },
    { name: "npm", icon: <FaNpm /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "RESTful APIs", icon: <BiCodeAlt /> },
    { name: "UI/UX Design", icon: <MdDesignServices /> },
    { name: "Problem Solving", icon: <VscDebugAll /> },
  ];

  return (
    <section id="skills" style={{ minHeight: "0", paddingBottom: "0" }}>
      <div className="section-header">
        <h2><span className="section-number">03.</span> Skills & Expertise</h2>
      </div>
      
      <div className="section-content">
        <div className="skills-scroll-container animated">
          <div className="skills-scroll-track">
            {/* Duplicate the skills to create continuous scrolling effect */}
            {[...skillsWithIcons, ...skillsWithIcons].map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
