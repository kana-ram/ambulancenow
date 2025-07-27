import React from 'react';
import '../Styles.css';
const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add custom form handling logic here (e.g., Firebase, EmailJS, etc.)
    alert("Message sent (form handling not implemented yet).");
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title fade-in">Get In Touch</h2>
        <div className="contact-grid">

          <div className="contact-form fade-in slide-in-left">
            <h3 style={{ marginBottom: '2rem' }}>
              <i className="fas fa-envelope"></i> Send us a Message
            </h3>
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contactName">Full Name</label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactEmail">Email Address</label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  placeholder="Your email address"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactSubject">Subject</label>
                <input
                  type="text"
                  id="contactSubject"
                  name="contactSubject"
                  placeholder="Message subject"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactMessage">Message</label>
                <textarea
                  id="contactMessage"
                  name="contactMessage"
                  rows="5"
                  placeholder="Your message..."
                  required
                  style={{ resize: 'vertical' }}
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
            </form>
          </div>

          <div className="contact-info fade-in slide-in-right">
            <h3 style={{ marginBottom: '2rem' }}>
              <i className="fas fa-info-circle"></i> Contact Information
            </h3>
            <div className="contact-item">
              <i className="fas fa-phone-alt"></i>
              <div>
                <h4>Emergency Hotline</h4>
                <p>Coming Soon</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email Support</h4>
                <p>info@ambulancenow.com</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Service Area</h4>
                <p>Launching Soon</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <div>
                <h4>Operating Hours</h4>
                <p>24/7 Emergency Service</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
