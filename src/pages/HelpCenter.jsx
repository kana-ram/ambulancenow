import React, { useState } from 'react';
import '../styles.css';
const HelpCenter = () => {
  const [openFaqs, setOpenFaqs] = useState({});

  const toggleFAQ = (index) => {
    setOpenFaqs((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const showComingSoon = (e) => {
    e.preventDefault();
    alert('This feature is coming soon!');
  };

  return (
    <section id="help-center" className="section">
      <div className="container">
        <h2 className="section-title fade-in">Help Center</h2>

        <div className="help-search fade-in" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="Search for help..."
                style={{
                  width: '100%',
                  padding: '1rem 3rem 1rem 1rem',
                  border: '2px solid #e9ecef',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  background: '#f8f9fa',
                }}
              />
              <i
                className="fas fa-search"
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#999',
                  fontSize: '1.2rem',
                }}
              />
            </div>
          </div>
        </div>

        <div
          className="help-categories"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          {/* FAQ Section */}
          <div
            className="help-category fade-in"
            style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
            }}
          >
            <h3 style={{ color: '#e74c3c', marginBottom: '1.5rem' }}>
              <i className="fas fa-question-circle" /> Frequently Asked Questions
            </h3>

            {[
              {
                question: 'How do I book an ambulance?',
                answer:
                  'You can book an ambulance through our mobile app (coming soon) or by calling our emergency hotline...',
              },
              {
                question: 'What types of ambulances are available?',
                answer:
                  'We offer three types: Basic Life Support (BLS), Advanced Life Support (ALS), and Critical Care Transport...',
              },
              {
                question: 'How long does it take for an ambulance to arrive?',
                answer:
                  'Our AI-powered dispatch system aims for an average response time of under 5 minutes in urban areas...',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="faq-item"
                style={{
                  marginBottom: '1rem',
                  paddingBottom: '1rem',
                  borderBottom: index < 2 ? '1px solid #eee' : 'none',
                }}
              >
                <h4
                  style={{
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <i className="fas fa-chevron-down" />
                </h4>
                {openFaqs[index] && (
                  <p style={{ marginTop: '0.5rem', color: '#666' }}>{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

          {/* App Support */}
          <div
            className="help-category fade-in"
            style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
            }}
          >
            <h3 style={{ color: '#e74c3c', marginBottom: '1.5rem' }}>
              <i className="fas fa-mobile-alt" /> App Support
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                { icon: 'download', text: 'How to download the app' },
                { icon: 'user-circle', text: 'Creating an account' },
                { icon: 'map-marker-alt', text: 'Location services setup' },
                { icon: 'bell', text: 'Notification settings' },
                { icon: 'bug', text: 'Troubleshooting common issues' },
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    marginBottom: i < 4 ? '1rem' : 0,
                    padding: '0.5rem 0',
                    borderBottom: i < 4 ? '1px solid #eee' : 'none',
                  }}
                >
                  <a
                    href="#"
                    onClick={showComingSoon}
                    style={{
                      textDecoration: 'none',
                      color: '#333',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <i className={`fas fa-${item.icon}`} /> {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Support */}
          <div
            className="help-category fade-in"
            style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
            }}
          >
            <h3 style={{ color: '#e74c3c', marginBottom: '1.5rem' }}>
              <i className="fas fa-headset" /> Contact Support
            </h3>
            <div style={{ textAlign: 'center' }}>
              <p style={{ marginBottom: '2rem', color: '#666' }}>
                Need additional help? Our support team is here for you.
              </p>

              <div style={{ marginBottom: '1.5rem' }}>
                <i className="fas fa-phone" style={{ color: '#e74c3c', fontSize: '1.5rem' }} />
                <p style={{ fontWeight: 'bold' }}>Emergency Hotline</p>
                <p style={{ color: '#666' }}>Available 24/7 (Coming Soon)</p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <i className="fas fa-envelope" style={{ color: '#e74c3c', fontSize: '1.5rem' }} />
                <p style={{ fontWeight: 'bold' }}>Email Support</p>
                <p style={{ color: '#666' }}>support@ambulancenow.com</p>
              </div>

              <button
                onClick={showComingSoon}
                style={{
                  background: 'linear-gradient(45deg, #e74c3c, #f39c12)',
                  color: 'white',
                  border: 'none',
                  padding: '0.8rem 1.5rem',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                }}
              >
                Start Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpCenter;
