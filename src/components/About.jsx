import React from 'react';
import './About.css';
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload } from 'react-icons/fa';
import resumePDF from '../assets/resume.pdf';

const About = () => {
  return (
    <section id="about">
      <div className="section-header">
        <h2><span className="section-number">02.</span> About Me</h2>
      </div>
      <div className="section-content">
        <div className="about-container">
          <div className="profile-section animated">
            <div className="profile-picture">
              <div className="profile-placeholder">
                <img src="https://via.placeholder.com/300x300" alt="Kaxit Jayswal" />
              </div>
            </div>
            <div className="profile-details">
              <h3>Hi, I'm <span className="highlight">Kaxit Jayswal</span></h3>
              <h4>MERN Stack Developer</h4>
              <p className="bio">
                I'm an enthusiastic full-stack developer specializing in building modern, 
                elegant, and responsive web applications using the MERN stack. 
                Recently graduated and eager to apply my skills, I combine strong theoretical knowledge
                with practical project experience to create clean, maintainable code.
              </p>
              <div className="profile-actions animated animated-delay-2">
                <a href="#contact" className="cta-button">Get In Touch</a>
                <a href={resumePDF} download className="cta-button secondary">
                  <FaFileDownload style={{ marginRight: '8px' }} />
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
         