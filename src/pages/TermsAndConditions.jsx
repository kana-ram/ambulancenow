import React from 'react';
import '../Styles.css';
const TermsAndConditions = () => {
  return (
    <section
      id="terms-conditions"
      className="section"
      style={{
        background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
      }}
    >
      <div className="container">
        <h2 className="section-title fade-in">Terms and Conditions</h2>
        <div
          className="terms-content fade-in"
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

          <div className="terms-section" style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#007bff', marginBottom: '1rem' }}>
              <i className="fas fa-file-contract"></i> Acceptance of Terms
            </h3>
            <p style={{ lineHeight: 1.8, color: '#666' }}>
              By accessing and using AmbulanceNow’s services, you agree to be bound by these Terms
              and Conditions. If you do not agree with any part of the terms, you may not access
              the service.
            </p>
          </div>

          <div className="terms-section" style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#007bff', marginBottom: '1rem' }}>
              <i className="fas fa-user-clock"></i> Service Usage
            </h3>
            <p style={{ lineHeight: 1.8, color: '#666' }}>
              Our services are intended for emergency medical assistance and transport. Misuse of
              the platform, including false emergency calls, is strictly prohibited and may result
              in legal action.
            </p>
          </div>

          <div className="terms-section" style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#007bff', marginBottom: '1rem' }}>
              <i className="fas fa-shield-virus"></i> Medical Information
            </h3>
            <p style={{ lineHeight: 1.8, color: '#666' }}>
              You are responsible for providing accurate medical and emergency contact information.
              This data is used solely for delivering timely and appropriate care.
            </p>
          </div>

          <div className="terms-section" style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#007bff', marginBottom: '1rem' }}>
              <i className="fas fa-money-check-alt"></i> Payments
            </h3>
            <p style={{ lineHeight: 1.8, color: '#666' }}>
              Service charges apply and must be paid in accordance with the billing details
              provided during service use. Failure to make timely payments may result in service
              suspension.
            </p>
          </div>

          <div className="terms-section">
            <h3 style={{ color: '#007bff', marginBottom: '1rem' }}>
              <i className="fas fa-gavel"></i> Governing Law
            </h3>
            <p style={{ lineHeight: 1.8, color: '#666' }}>
              These terms shall be governed and construed in accordance with the laws of your
              jurisdiction. Disputes arising under these terms shall be subject to the exclusive
              jurisdiction of the courts located in your area.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
