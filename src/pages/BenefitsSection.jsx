import React from 'react';
import '../styles.css';
const BenefitsSection = () => {
  return (
    <section id="benefits" className="section benefits">
      <div className="container">
        <h2 className="section-title fade-in">Benefits of Our Service</h2>
        <div className="benefits-list">

          <div className="benefit-item fade-in">
            <div className="benefit-icon">
              <i className="fas fa-dollar-sign"></i>
            </div>
            <div>
              <h4>Cost-Effective</h4>
              <p>Transparent pricing with no hidden charges. Pay only for the service you need.</p>
            </div>
          </div>

          <div className="benefit-item fade-in">
            <div className="benefit-icon">
              <i className="fas fa-hospital"></i>
            </div>
            <div>
              <h4>Hospital Network</h4>
              <p>Connected with major hospitals for seamless patient transfer and treatment continuity.</p>
            </div>
          </div>

          <div className="benefit-item fade-in">
            <div className="benefit-icon">
              <i className="fas fa-user-md"></i>
            </div>
            <div>
              <h4>Qualified Staff</h4>
              <p>Certified paramedics and EMTs with extensive training in emergency medical care.</p>
            </div>
          </div>

          <div className="benefit-item fade-in">
            <div className="benefit-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <div>
              <h4>Data Security</h4>
              <p>Your medical information is protected with enterprise-grade security and HIPAA compliance.</p>
            </div>
          </div>

          <div className="benefit-item fade-in">
            <div className="benefit-icon">
              <i className="fas fa-globe"></i>
            </div>
            <div>
              <h4>Wide Coverage</h4>
              <p>Expanding service area to cover urban and rural regions with strategic ambulance placement.</p>
            </div>
          </div>

          <div className="benefit-item fade-in">
            <div className="benefit-icon">
              <i className="fas fa-headset"></i>
            </div>
            <div>
              <h4>24/7 Support</h4>
              <p>Round-the-clock emergency response and customer support for any medical emergency.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
