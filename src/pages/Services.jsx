import React from 'react';
import '../styles.css';
const Services = () => {
  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title fade-in">Our Ambulance Services</h2>
        <div className="services-grid">
          <div className="service-card fade-in">
            <i className="service-icon fas fa-ambulance"></i>
            <h3>Basic Life Support (BLS)</h3>
            <p>
              Essential medical care with trained EMTs, oxygen support, and basic medical equipment
              for non-critical patients requiring transportation to healthcare facilities.
            </p>
          </div>
          <div className="service-card fade-in">
            <i className="service-icon fas fa-bolt"></i>
            <h3>Advanced Life Support (ALS)</h3>
            <p>
              Critical care ambulance with paramedics, advanced medical equipment, cardiac monitors,
              and life-saving medications for emergency situations.
            </p>
          </div>
          <div className="service-card fade-in">
            <i className="service-icon fas fa-hospital"></i>
            <h3>Critical Care Transport</h3>
            <p>
              Specialized intensive care unit on wheels with ventilators, advanced monitoring
              systems, and specialized medical team for critical patient transfers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
