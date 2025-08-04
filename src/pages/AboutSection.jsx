import React from 'react';
// import '../Styles.css';
import '../cssfiles/About.css'
const AboutSection = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title fade-in">Ambulance Now</h2>

        <div className="about-content">
          <div className="about-text fade-in slide-in-left">
            <h3 className="about-subtitle">
              <i className="fas fa-heart"></i> Our Mission
            </h3>
            <p className="about-paragraph">
              At Ambulance Now, we believe that every second counts in an
              emergency. Our mission is to revolutionize emergency medical
              services by leveraging cutting-edge technology to provide the
              fastest, most reliable ambulance services when you need them most.
            </p>
            <p className="about-paragraph">
              Founded with the vision of bridging the gap between emergency
              situations and medical care, we are committed to saving lives
              through innovation, compassion, and unwavering dedication to
              excellence.
            </p>
          </div>

          <div className="about-stats fade-in slide-in-right">
            <div className="vision-box">
              <h3 className="vision-title">
                <i className="fas fa-chart-line"></i> Our Vision
              </h3>
              <div className="vision-grid">
                <div>
                  <h4 className="vision-number">24/7</h4>
                  <p>Emergency Response</p>
                </div>
                <div>
                  <h4 className="vision-number">&lt;5min</h4>
                  <p>Average Response Time</p>
                </div>
                <div>
                  <h4 className="vision-number">100%</h4>
                  <p>Commitment to Care</p>
                </div>
                <div>
                  <h4 className="vision-number">∞</h4>
                  <p>Lives to Save</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h3 className="team-title">
            <i className="fas fa-users"></i> Our Leadership Team
          </h3>
          <div className="team-grid">
            {/* Team Cards */}
            {[
              {
                name: 'Dr. Sarah Johnson',
                title: 'Chief Executive Officer',
                desc: '20+ years in emergency medicine and healthcare innovation',
                icon: 'fas fa-user-tie',
              },
              {
                name: 'Michael Chen',
                title: 'Chief Technology Officer',
                desc: 'Expert in AI-powered dispatch systems and mobile technology',
                icon: 'fas fa-laptop-code',
              },
              {
                name: 'Dr. Emily Rodriguez',
                title: 'Chief Medical Officer',
                desc:
                  'Board-certified emergency physician with expertise in pre-hospital care',
                icon: 'fas fa-heartbeat',
              },
            ].map((member, index) => (
              <div className="team-card fade-in" key={index}>
                <div className="team-icon">
                  <i className={member.icon}></i>
                </div>
                <h4>{member.name}</h4>
                <p className="team-role">{member.title}</p>
                <p className="team-desc">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
