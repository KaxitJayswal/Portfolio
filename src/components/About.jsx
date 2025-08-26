import React from 'react';
import './About.css';
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload } from 'react-icons/fa';

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
                I'm a passionate full-stack developer specializing in creating modern, 
                elegant, and high-performance web applications using the MERN stack. 
                With a strong foundation in both frontend and backend technologies, 
                I bring ideas to life through clean, maintainable code.
              </p>
              <div className="bio-stats animated animated-delay-1">
                <div className="bio-stat">
                  <span className="stat-number">1+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="bio-stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="bio-stat">
                  <span className="stat-number">2+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
              </div>
              <div className="profile-actions animated animated-delay-2">
                <a href="#contact" className="cta-button">Get In Touch</a>
                <a href="#" className="cta-button secondary">
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
         