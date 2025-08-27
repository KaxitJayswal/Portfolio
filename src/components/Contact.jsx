import React, { useState } from 'react';
import './Contact.css';
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaTwitter, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaUser, 
  FaPaperPlane,
  FaCheck,
  FaExclamationCircle
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  
  const [fieldErrors, setFieldErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        return !/^\S+@\S+\.\S+$/.test(value) ? 'Please enter a valid email address' : '';
      case 'subject':
        return value.length < 3 ? 'Subject must be at least 3 characters' : '';
      case 'message':
        return value.length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    
    // Validate on change
    setFieldErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const errors = {};
    let hasErrors = false;
    
    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field]);
      errors[field] = error;
      if (error) hasErrors = true;
    });
    
    setFieldErrors(errors);
    
    if (hasErrors) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Please correct the errors in the form.'
      });
      return;
    }
    
    // For now, this is just a mock submission
    // Later, you'll connect this to your backend
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thanks for your message! I\'ll get back to you soon.'
    });
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setFormStatus({
        submitted: false,
        error: false,
        message: ''
      });
    }, 5000);
  };

  return (
    <section id="contact">
      <div className="section-header">
        <h2><span className="section-number">05.</span> Contact</h2>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>I'm currently looking for new opportunities. Whether you have a question or just want to say hello, I'll do my best to get back to you!</p>
          
          <div className="contact-details">
            <div className="contact-detail-item">
              <FaEnvelope className="detail-icon" />
              <a href="mailto:kaxitjayswal185@gmail.com" className="contact-link">
                <span className="detail-text"><span className="highlight">kaxitjayswal185@gmail.com</span></span>
              </a>
            </div>
            <div className="contact-detail-item">
              <FaPhone className="detail-icon" />
              <a href="tel:+917046126912" className="contact-link">
                <span className="detail-text"><span className="highlight">+91 7046126912</span></span>
              </a>
            </div>
            <div className="contact-detail-item">
              <FaMapMarkerAlt className="detail-icon" />
              <a href="https://maps.google.com/?q=Ahemdabad,Gujarat" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="detail-text"><span className="highlight">Ahemdabad, Gujarat</span></span>
              </a>
            </div>
          </div>
          
          <p>Feel free to connect with me on social media.</p>
        </div>
        
        <div className="contact-form">
          <h3>Send a Message</h3>
          {formStatus.submitted && (
            <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
              {formStatus.error ? <FaExclamationCircle className="message-icon" /> : <FaCheck className="message-icon" />}
              {formStatus.message}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className={`form-group ${fieldErrors.name ? 'error' : formData.name ? 'success' : ''}`}>
              <label htmlFor="name">01. Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
              {fieldErrors.name && <div className="error-message">{fieldErrors.name}</div>}
              {!fieldErrors.name && formData.name && <FaUser className="input-icon" />}
            </div>
            
            <div className={`form-group ${fieldErrors.email ? 'error' : formData.email ? 'success' : ''}`}>
              <label htmlFor="email">02. Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
              {fieldErrors.email && <div className="error-message">{fieldErrors.email}</div>}
              {!fieldErrors.email && formData.email && <FaEnvelope className="input-icon" />}
            </div>
            
            <div className={`form-group ${fieldErrors.subject ? 'error' : formData.subject ? 'success' : ''}`}>
              <label htmlFor="subject">03. Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Job opportunity, Project collaboration, etc."
                required
              />
              {fieldErrors.subject && <div className="error-message">{fieldErrors.subject}</div>}
            </div>
            
            <div className={`form-group ${fieldErrors.message ? 'error' : formData.message ? 'success' : ''}`}>
              <label htmlFor="message">04. Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your message here..."
                required
              ></textarea>
              {fieldErrors.message && <div className="error-message">{fieldErrors.message}</div>}
            </div>
            
            <button type="submit" className="submit-btn">
              Send Message <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
