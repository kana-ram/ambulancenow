import React, { useState } from 'react';
import '../cssfiles/Help.css';

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

        <div className="help-search fade-in">
          <div className="search-wrapper">
            <div className="search-box">
              <input type="text" placeholder="Search for help..." className="search-input" />
              <i className="fas fa-search search-icon" />
            </div>
          </div>
        </div>

        <div className="help-categories">
          {/* FAQ Section */}
          <div className="help-category fade-in">
            <h3 className="category-title">
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
              <div key={index} className="faq-item">
                <h4 className="faq-question" onClick={() => toggleFAQ(index)}>
                  {faq.question}
                  <i className="fas fa-chevron-down" />
                </h4>
                {openFaqs[index] && <p className="faq-answer">{faq.answer}</p>}
              </div>
            ))}
          </div>

          {/* App Support */}
          <div className="help-category fade-in">
            <h3 className="category-title">
              <i className="fas fa-mobile-alt" /> App Support
            </h3>
            <ul className="support-list">
              {[
                { icon: 'download', text: 'How to download the app' },
                { icon: 'user-circle', text: 'Creating an account' },
                { icon: 'map-marker-alt', text: 'Location services setup' },
                { icon: 'bell', text: 'Notification settings' },
                { icon: 'bug', text: 'Troubleshooting common issues' },
              ].map((item, i) => (
                <li key={i} className="support-item">
                  <a href="#" onClick={showComingSoon}>
                    <i className={`fas fa-${item.icon}`} /> {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Support */}
          <div className="help-category fade-in">
            <h3 className="category-title">
              <i className="fas fa-headset" /> Contact Support
            </h3>
            <div className="contact-support">
              <p className="contact-desc">Need additional help? Our support team is here for you.</p>

              <div className="contact-method">
                <i className="fas fa-phone contact-icon" />
                <p className="method-title">Emergency Hotline</p>
                <p className="method-desc">Available 24/7 (Coming Soon)</p>
              </div>

              <div className="contact-method">
                <i className="fas fa-envelope contact-icon" />
                <p className="method-title">Email Support</p>
                <p className="method-desc">support@ambulancenow.com</p>
              </div>

              <button className="live-chat-button" onClick={showComingSoon}>
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
