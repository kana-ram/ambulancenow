import React from 'react';
import '../Styles.css';
const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">

          <div className="footer-section">
            <h3><i className="fas fa-ambulance"></i> Ambulance Now</h3>
            <p>
              Revolutionizing emergency medical services with technology,
              compassion, and speed. Every second counts when lives are at stake.
            </p>
          </div>

          <div className="footer-section">
            <h3><i className="fas fa-cogs"></i> Services</h3>
            <ul style={{ listStyle: 'none' }}>
              <li><a href="#services">Basic Life Support</a></li>
              <li><a href="#services">Advanced Life Support</a></li>
              <li><a href="#services">Critical Care Transport</a></li>
              <li><a href="#apps">Mobile Applications</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3><i className="fas fa-building"></i> Company</h3>
            <ul style={{ listStyle: 'none' }}>
              <li><a href="#about" onClick={() => scrollToSection('about')}>About Us</a></li>
              <li><a href="#benefits" onClick={() => scrollToSection('benefits')}>Why Choose Us</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
              <li><a href="#careers" onClick={() => scrollToSection('careers')}>Careers</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3><i className="fas fa-life-ring"></i> Support</h3>
            <ul style={{ listStyle: 'none' }}>
              <li><a href="#help-center" onClick={() => scrollToSection('help-center')}>Help Center</a></li>
              <li><a href="#privacy-policy" onClick={() => scrollToSection('privacy-policy')}>Privacy Policy</a></li>
              <li><a href="#terms-of-service" onClick={() => scrollToSection('terms-of-service')}>Terms of Service</a></li>
              <li><a href="#emergency-protocols" onClick={() => scrollToSection('emergency-protocols')}>Emergency Protocols</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Ambulance Now. All rights reserved. | Saving lives, one call at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
