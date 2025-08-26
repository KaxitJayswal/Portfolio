import React from 'react';
import './Home.css';
import { FaChevronDown } from 'react-icons/fa';

const Home = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home">
      <div className="home-container">
        <p className="small-heading animated">Hi, my name is</p>
        <h1 className="main-heading animated animated-delay-1">Kaxit Jayswal.</h1>
        <h2 className="secondary-heading animated animated-delay-1">I build things for the web.</h2>
        <p className="hero-description animated animated-delay-2">
          I'm a full-stack developer specializing in building exceptional digital experiences. 
          Currently, I'm focused on building accessible, human-centered products at Company Name.
        </p>
        <div className="cta-container animated animated-delay-2">
          <a href="#projects" className="hero-cta-button">Check out my work</a>
          <a href="#contact" className="hero-cta-button secondary">Get in touch</a>
        </div>
      </div>
      
      <div className="scroll-down" onClick={scrollToAbout}>
        <span>Scroll Down</span>
        <FaChevronDown />
      </div>
    </section>
  );
};

export default Home;
