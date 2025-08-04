import React, { useEffect } from 'react';
import logo from '../assests/logo.png'; // Make sure this logo has transparent background

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    // Close the menu after clicking any link (especially on mobile)
    const navLinks = document.querySelector('.nav-links');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (navLinks && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
    if (mobileMenu && mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
    }
  };

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
        <a
          href="#home"
          className="logo"
          onClick={() => scrollToSection('home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            fontWeight: 'bold',
            color: 'red'
          }}
        >
          <img
            src={logo}
            alt="Ambulance Now Logo"
            style={{
              height: '40px',
              width: 'auto',
              marginRight: '10px',
              background: 'transparent',
              borderRadius: '5px',
              objectFit: 'contain'
            }}
          />
          Ambulance Now
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
