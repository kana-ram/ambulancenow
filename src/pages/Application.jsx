import React from 'react';
import '../Styles.css';
const App = () => {
  const showComingSoon = () => {
    alert('App download feature coming soon!');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking request submitted!');
  };

  return (
    <>
      {/* Apps Section */}
      <section id="apps" className="section apps">
        <div className="apps-content">
          <div className="container">
            <h2 className="section-title fade-in">Our Mobile Applications</h2>
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
              <div className="app-card fade-in slide-in-right">
                <i className="app-icon fas fa-car"></i>
                <h3>Driver App</h3>
                <p>Professional interface for ambulance drivers featuring:</p>
                <ul style={{ textAlign: 'left', marginTop: '1rem', lineHeight: 2 }}>
                  <li><i className="fas fa-check"></i> Receive emergency requests</li>
                  <li><i className="fas fa-check"></i> GPS navigation to patient location</li>
                  <li><i className="fas fa-check"></i> Patient condition information</li>
                  <li><i className="fas fa-check"></i> Hospital destination updates</li>
                  <li><i className="fas fa-check"></i> Communication with dispatch center</li>
                </ul>
              </div>
            </div>

            <div className="download-section fade-in">
              <h3 style={{ marginBottom: '1rem', fontSize: '2rem' }}>Download Our Apps</h3>
              <p style={{ marginBottom: '2rem', opacity: 0.9 }}>Get instant access to emergency medical services</p>
              <div className="download-buttons">
                <a href="#" className="download-btn" onClick={showComingSoon}>
                  <i className="fab fa-apple"></i>
                  <div>
                    <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Download for</div>
                    <div>User App - iOS</div>
                  </div>
                </a>
                <a href="#" className="download-btn" onClick={showComingSoon}>
                  <i className="fab fa-google-play"></i>
                  <div>
                    <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Download for</div>
                    <div>User App - Android</div>
                  </div>
                </a>
                <a href="#" className="download-btn" onClick={showComingSoon}>
                  <i className="fas fa-steering-wheel"></i>
                  <div>
                    <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Download</div>
                    <div>Driver App</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Booking Form Section */}
      <section className="app-form-section">
        <div className="container">
          <h2 className="section-title fade-in">Book Emergency Service</h2>
          <div className="form-container fade-in">
            <form id="bookingForm" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="userName">
                    <i className="fas fa-user"></i> Full Name
                  </label>
                  <input type="text" id="userName" name="userName" placeholder="Enter your full name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber">
                    <i className="fas fa-phone"></i> Phone Number
                  </label>
                  <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number" required />
                </div>
                <div className="form-group">
                  <label htmlFor="pickupLocation">
                    <i className="fas fa-map-marker-alt"></i> Pickup Location
                  </label>
                  <input type="text" id="pickupLocation" name="pickupLocation" placeholder="Enter pickup address" required />
                </div>
                <div className="form-group">
                  <label htmlFor="serviceType">
                    <i className="fas fa-ambulance"></i> Service Type
                  </label>
                  <select id="serviceType" name="serviceType" required>
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
                  <input type="date" id="preferredDate" name="preferredDate" required />
                </div>
                <div className="form-group">
                  <label htmlFor="preferredTime">
                    <i className="fas fa-clock"></i> Preferred Time
                  </label>
                  <input type="time" id="preferredTime" name="preferredTime" required />
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
                  placeholder="Please describe the patient's condition and any relevant medical information..."
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
