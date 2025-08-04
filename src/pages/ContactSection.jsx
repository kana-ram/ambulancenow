import React, { useState } from 'react';
import '../cssfiles/Contact.css';
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    contactName: '',
    contactEmail: '',
    contactSubject: '',
    contactMessage: '',
  });

  // ✅ Update formData when input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // ✅ Submit data to Firestore
  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await addDoc(collection(db, 'contact'), {
      contactName: formData.contactName,
      contactEmail: formData.contactEmail,
      contactSubject: formData.contactSubject,
      contactMessage: formData.contactMessage,
      timestamp: new Date()
    });
    alert('Message sent!');
  } catch (err) {
    console.error("Firestore Error:", err);
  }
};
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title fade-in" style={{
      
        marginTop:'-30%'
      }}>Get In Touch</h2>
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
                  value={formData.contactName}
                  onChange={handleChange}
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
                  value={formData.contactEmail}
                  onChange={handleChange}
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
                  value={formData.contactSubject}
                  onChange={handleChange}
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
                  value={formData.contactMessage}
                  onChange={handleChange}
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

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
