import React, { useEffect } from 'react';
import '../Styles.css';
const Navbar = () => {
  // Scroll to section smoothly
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Optional: Toggle mobile menu if you plan to implement responsive navbar
  useEffect(() => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    const toggleMenu = () => {
      navLinks.classList.toggle('active');
      mobileMenu.classList.toggle('open');
    };

    if (mobileMenu) {
      mobileMenu.addEventListener('click', toggleMenu);
    }

    return () => {
      if (mobileMenu) {
        mobileMenu.removeEventListener('click', toggleMenu);
      }
    };
  }, []);

  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <a href="#home" className="logo">
          <i className="fas fa-ambulance"></i> Ambulance Now
        </a>
        <ul className="nav-links">
          <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a href="#services" onClick={() => scrollToSection('services')}>Services</a></li>
          <li><a href="#features" onClick={() => scrollToSection('features')}>Features</a></li>
          <li><a href="#apps" onClick={() => scrollToSection('apps')}>Apps</a></li>
          <li><a href="#benefits" onClick={() => scrollToSection('benefits')}>Benefits</a></li>
          <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
          <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
        <div className="mobile-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
