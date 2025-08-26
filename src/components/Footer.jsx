import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedinIn, FaDribbble, FaInstagram, FaBehance, FaHeart, FaCode } from 'react-icons/fa';

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-content" >
        <div className="footer-info" >
          <h3>About This Site</h3>
          <p >A modern portfolio showcasing my work, skills, and experience as a developer. Built with a focus on clean design and smooth interactions.</p>
          <div className="footer-social">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
           
          </div>
        </div>
        
        <div className="footer-nav">
          <h3>Quick Links</h3>
          <div className="footer-nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        
        <div className="footer-credits">
          <h3>Built With</h3>
          <p><span className="highlight">React</span> for the frontend</p>
          <p><span className="highlight">Vite</span> as the build tool</p>
          <p><span className="highlight">React Icons</span> for iconography</p>
          <p>Deployed with <span className="highlight">Vercel</span></p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {getCurrentYear()} Kaxit Jayswal. All rights reserved.</p>
        <p>Designed and built with <FaHeart style={{ color: 'var(--accent-primary)' }} /> and <FaCode style={{ color: 'var(--accent-primary)' }} /></p>
      </div>
    </footer>
  );
};

export default Footer;
