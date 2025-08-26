import './theme.css'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Skills from './components/Skills'
import { FaGithub, FaLinkedinIn, FaDribbble, FaInstagram, FaBehance } from 'react-icons/fa'

function App() {
  return (
    <div className="app">
      <Navbar />
      
      {/* Social links on left side */}
      <div className="social-links-vertical left">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
      </div>
      
      <div className="main-content">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
