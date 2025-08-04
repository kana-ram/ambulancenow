import React from 'react';
import '../styles.css';
const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="floating-icons">
        <div className="floating-icon"><i className="fas fa-ambulance"></i></div>
        <div className="floating-icon"><i className="fas fa-heartbeat"></i></div>
        <div className="floating-icon"><i className="fas fa-user-md"></i></div>
        <div className="floating-icon"><i className="fas fa-hospital"></i></div>
        <div className="floating-icon"><i className="fas fa-phone-alt"></i></div>
      </div>
      <div className="hero-content">
        <div className="coming-soon">
          <i className="fas fa-tools"></i> Service Coming Soon
        </div>
        <h1>Ambulance Now</h1>
        <p>Revolutionary emergency medical services with instant booking, real-time tracking, and minimum response time</p>
        <a
          href="#services"
          className="cta-button"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('services');
          }}
        >
          <i className="fas fa-rocket"></i> Discover Our Services
        </a>
      </div>
    </section>
  );
};

export default Hero;
