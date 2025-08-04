import React, { useState } from 'react';
import '../cssfiles/Application.css';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const App = () => {
  const [formData, setFormData] = useState({
    userName: '',
    phoneNumber: '',
    pickupLocation: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    emergencyDetails: '',
  });

  const showComingSoon = () => {
    alert('App download feature coming soon!');
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'bookings'), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      alert('Booking request submitted successfully!');
      setFormData({
        userName: '',
        phoneNumber: '',
        pickupLocation: '',
        serviceType: '',
        preferredDate: '',
        preferredTime: '',
        emergencyDetails: '',
      });
    } catch (error) {
      console.error('Error submitting booking: ', error);
      alert('Error submitting booking. Please try again.');
    }
  };
  return (
    <>
      {/* Apps Section */}
      <section id="apps" className="section apps">
        <div className="apps-content">
          <div className="container">
            <h2 className="section-title fade-in" style={{marginTop:'-10%'}}>Our Mobile Applications</h2>
            <div className="apps-grid">
              <div className="app-card fade-in slide-in-left">
                <i className="app-icon fas fa-user"></i>
                <h3>Patient App</h3>
                <p>Easy-to-use interface for patients and families to:</p>
                <ul style={{ textAlign: 'left', marginTop: '1rem', lineHeight: 2 }}>
                  <li><i className="fas fa-check"></i> Book ambulances instantly</li>
                  <li><i className="fas fa-check"></i> Share patient condition and symptoms</li>
                  <li><i className="fas fa-check"></i> Track ambulance in real-time</li>
                  <li><i className="fas fa-check"></i> Access medical history and allergies</li>
                  <li><i className="fas fa-check"></i> Emergency contacts notification</li>
                </ul>
              </div>
             
            </div>

            <div className="download-section fade-in">
              <h3 style={{ marginBottom: '1rem', fontSize: '2rem' }}>Download Our Apps</h3>
              <p style={{ marginBottom: '2rem', opacity: 0.9 }}>Get instant access to emergency medical services</p>
              <div className="download-buttons">
                <a href="https://drive.google.com/file/d/1tLXM53Go98oAU7YkNUV5sQNfGIRP-yTY/view?usp=sharing" className="download-btn" onClick={showComingSoon}>
                  <i className="fab fa-google-play"></i>
                  <div>
                    <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Download for</div>
                    <div>Driver App </div>
                  </div>
                </a>
                <a style={{marginBottom:'40px'}} href="https://drive.google.com/file/d/1HMpKmJ0SPXe5rtLtSrGmIS8j2jkKZ_B0/view?usp=sharing" className="download-btn" onClick={showComingSoon}>
                  <i className="fab fa-google-play"></i>
                  <div>
                    <div style={{ fontSize: '0.8rem', opacity: 0.8 , }}>Download for</div>
                    <div >User App </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Booking Form Section */}
      <section className="app-form-section">
        <div className="container">
          <h2 className="section-title fade-in"style={{
      
        marginTop:'-12%'
      }}>Book Emergency Service</h2>
          <div className="form-container fade-in">
            <form id="bookingForm" onSubmit={handleSubmit}>
              <div className="form-grid">
                {[
                  { label: 'Full Name', name: 'userName', type: 'text', icon: 'fa-user' },
                  { label: 'Phone Number', name: 'phoneNumber', type: 'tel', icon: 'fa-phone' },
                  { label: 'Pickup Location', name: 'pickupLocation', type: 'text', icon: 'fa-map-marker-alt' },
                ].map((field, i) => (
                  <div className="form-group" key={i}>
                    <label htmlFor={field.name}>
                      <i className={`fas ${field.icon}`}></i> {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                    />
                  </div>
                ))}

                <div className="form-group">
                  <label htmlFor="serviceType">
                    <i className="fas fa-ambulance"></i> Service Type
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select service type</option>
                    <option value="bls">Basic Life Support (BLS)</option>
                    <option value="als">Advanced Life Support (ALS)</option>
                    <option value="critical">Critical Care Transport</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="preferredDate">
                    <i className="fas fa-calendar-alt"></i> Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="preferredTime">
                    <i className="fas fa-clock"></i> Preferred Time
                  </label>
                  <input
                    type="time"
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="emergencyDetails">
                  <i className="fas fa-notes-medical"></i> Emergency Details / Patient Condition
                </label>
                <textarea
                  id="emergencyDetails"
                  name="emergencyDetails"
                  rows="4"
                  value={formData.emergencyDetails}
                  onChange={handleChange}
                  placeholder="Describe the patient's condition..."
                  style={{ resize: 'vertical' }}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <i className="fas fa-paper-plane"></i> Submit Booking Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;