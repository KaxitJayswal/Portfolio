import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaFileDownload } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background change on scroll
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Handle active section highlight based on scroll position
      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    document.addEventListener('scroll', handleScroll);
    
    // Add overflow hidden to body when menu is open
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
    };
  }, [scrolled, activeSection, menuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Add offset for navbar height
      const navbarHeight = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(targetId);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-content">
        <div className="navbar-logo">
          <a 
            href="#home" 
          >
            {"Kaxit"}
          </a>
        </div>
        <button
          className={`navbar-toggle ${menuOpen ? 'active' : ''}`}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="hamburger"></span>
        </button>
        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={activeSection === link.href.substring(1) ? 'active' : ''}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                <span className="nav-number">0{index + 1}.</span>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>}
      </div>
    </nav>
  );
};

export default Navbar;
