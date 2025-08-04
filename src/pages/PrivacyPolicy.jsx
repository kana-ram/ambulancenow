import React from 'react';
import '../styles.css';
const PrivacyPolicy = () => {
  return (
    <section
      id="privacy-policy"
      className="section"
      style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      }}
    >
      <div className="container">
        <h2 className="section-title fade-in">Privacy Policy</h2>
        <div
          className="policy-content fade-in"
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            background: 'white',
            padding: '3rem',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          }}
        >
          <p
            style={{
              textAlign: 'center',
              color: '#666',
              marginBottom: '2rem',
              fontStyle: 'italic',
            }}
          >
            Last updated: Coming Soon | Effective Date: Upon Service Launch
          </p>

          <div className="policy-section" style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#e74c3c', marginBottom: '1rem' }}>
              <i className="fas fa-shield-alt"></i> Information We Collect
            </h3>
            <p style={{ lineHeight: 1.8, color: '#666', marginBottom: '1rem' }}>
              We collect information necessary to provide emergency medical services, including:
            </p>
            <ul style={{ color: '#666', lineHeight: 1.8, marginLeft: '1rem' }}>
              <li>Personal identification information (name, phone number, address)</li>
              <li>Medical information relevant to emergency care</li>
              <li>Location data for ambulance dispatch and navigation</li>
              <li>Emergency contact information</li>
              <li>Payment and billing information</li>
            </ul>
          </div>

          <div className="policy-section" style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#e74c3c', marginBottom: '1rem' }}>
              <i className="fas fa-user-shield"></i> How We Use Your Information
            </h3>
            <ul style={{ color: '#666', lineHeight: 1.8, marginLeft: '1rem' }}>
              <li>Dispatch ambulances to your location quickly and efficiently</li>
              <li>Provide appropriate medical care based on reported conditions</li>
              <li>Coordinate with hospitals and healthcare providers</li>
              <li>Process payments and maintain service records</li>
              <li>Improve our services and response times</li>
              <li>Comply with healthcare regulations and legal requirements</li>
            </ul>
          </div>

          <div className="policy-section" style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#e74c3c', marginBottom: '1rem' }}>
              <i className="fas fa-lock"></i> Data Security
            </h3>
            <p style={{ lineHeight: 1.8, color: '#666' }}>
              We implement industry-standard security measures to protect your personal and medical
              information. All data is encrypted in transit and at rest, and access is restricted to
              authorized personnel only. We are committed to HIPAA compliance and maintaining the
              highest standards of data protection.
            </p>
          </div>

          <div className="policy-section" style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#e74c3c', marginBottom: '1rem' }}>
              <i className="fas fa-share-alt"></i> Information Sharing
            </h3>
            <p style={{ lineHeight: 1.8, color: '#666' }}>
              We only share your information when necessary for emergency medical care, including
              with healthcare providers, hospitals, insurance companies (for billing), and
              emergency responders. We never sell or share your personal information for marketing
              purposes.
            </p>
          </div>

          <div className="policy-section">
            <h3 style={{ color: '#e74c3c', marginBottom: '1rem' }}>
              <i className="fas fa-envelope"></i> Contact Us
            </h3>
            <p style={{ lineHeight: 1.8, color: '#666' }}>
              If you have questions about this Privacy Policy, please contact us at
              privacy@ambulancenow.com or through our support channels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
