import React from 'react';
import '../styles.css';
const Features = () => {
  return (
    <section id="features" className="section">
      <div className="container">
        <h2 className="section-title fade-in">Why Choose Ambulance Now?</h2>
        <div className="features-grid">
          <div className="feature-item fade-in">
            <div className="feature-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3>Instant Booking</h3>
            <p>
              Book an ambulance with just one tap. Our smart system dispatches the nearest
              available ambulance to your location immediately.
            </p>
          </div>
          <div className="feature-item fade-in">
            <div className="feature-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>Real-Time Tracking</h3>
            <p>
              Track your ambulance in real-time with GPS technology. Know exactly when help will
              arrive and share location with family.
            </p>
          </div>
          <div className="feature-item fade-in">
            <div className="feature-icon">
              <i className="fas fa-clock"></i>
            </div>
            <h3>Minimum Response Time</h3>
            <p>
              Our AI-powered dispatch system ensures the fastest response time by analyzing traffic,
              distance, and ambulance availability.
            </p>
          </div>
          <div className="feature-item fade-in">
            <div className="feature-icon">
              <i className="fas fa-hospital-alt"></i>
            </div>
            <h3>Hospital Pre-Alert</h3>
            <p>
              We notify hospitals about incoming patients with condition details, ensuring the
              medical team is prepared upon arrival.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
