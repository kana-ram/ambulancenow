import React from 'react';
import '../Styles.css';
const AboutSection = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title fade-in">About Ambulance Now</h2>
        <div
          className="about-content"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
            marginTop: '4rem',
          }}
        >
          <div className="about-text fade-in slide-in-left">
            <h3
              style={{
                fontSize: '2rem',
                color: '#e74c3c',
                marginBottom: '1rem',
              }}
            >
              <i className="fas fa-heart"></i> Our Mission
            </h3>
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                marginBottom: '2rem',
              }}
            >
              At Ambulance Now, we believe that every second counts in an
              emergency. Our mission is to revolutionize emergency medical
              services by leveraging cutting-edge technology to provide the
              fastest, most reliable ambulance services when you need them most.
            </p>
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                marginBottom: '2rem',
              }}
            >
              Founded with the vision of bridging the gap between emergency
              situations and medical care, we are committed to saving lives
              through innovation, compassion, and unwavering dedication to
              excellence.
            </p>
          </div>

          <div className="about-stats fade-in slide-in-right">
            <div
              style={{
                background: 'linear-gradient(135deg, #e74c3c, #f39c12)',
                padding: '2rem',
                borderRadius: '20px',
                color: 'white',
              }}
            >
              <h3 style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <i className="fas fa-chart-line"></i> Our Vision
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '2rem',
                  textAlign: 'center',
                }}
              >
                <div>
                  <h4 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                    24/7
                  </h4>
                  <p>Emergency Response</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                    &lt;5min
                  </h4>
                  <p>Average Response Time</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                    100%
                  </h4>
                  <p>Commitment to Care</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                    ∞
                  </h4>
                  <p>Lives to Save</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="team-section" style={{ marginTop: '6rem' }}>
          <h3
            style={{
              textAlign: 'center',
              fontSize: '2.5rem',
              marginBottom: '3rem',
              color: '#333',
            }}
          >
            <i className="fas fa-users"></i> Our Leadership Team
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
            }}
          >
            {/* Team Card 1 */}
            <div
              className="team-card fade-in"
              style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'white',
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
              }}
            >
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  background: 'linear-gradient(45deg, #e74c3c, #f39c12)',
                  borderRadius: '50%',
                  margin: '0 auto 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <i className="fas fa-user-tie" style={{ fontSize: '2.5rem', color: 'white' }}></i>
              </div>
              <h4 style={{ marginBottom: '0.5rem' }}>Dr. Sarah Johnson</h4>
              <p style={{ color: '#e74c3c', marginBottom: '1rem' }}>Chief Executive Officer</p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>
                20+ years in emergency medicine and healthcare innovation
              </p>
            </div>

            {/* Team Card 2 */}
            <div
              className="team-card fade-in"
              style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'white',
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
              }}
            >
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  background: 'linear-gradient(45deg, #e74c3c, #f39c12)',
                  borderRadius: '50%',
                  margin: '0 auto 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <i className="fas fa-laptop-code" style={{ fontSize: '2.5rem', color: 'white' }}></i>
              </div>
              <h4 style={{ marginBottom: '0.5rem' }}>Michael Chen</h4>
              <p style={{ color: '#e74c3c', marginBottom: '1rem' }}>Chief Technology Officer</p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>
                Expert in AI-powered dispatch systems and mobile technology
              </p>
            </div>

            {/* Team Card 3 */}
            <div
              className="team-card fade-in"
              style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'white',
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
              }}
            >
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  background: 'linear-gradient(45deg, #e74c3c, #f39c12)',
                  borderRadius: '50%',
                  margin: '0 auto 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <i className="fas fa-heartbeat" style={{ fontSize: '2.5rem', color: 'white' }}></i>
              </div>
              <h4 style={{ marginBottom: '0.5rem' }}>Dr. Emily Rodriguez</h4>
              <p style={{ color: '#e74c3c', marginBottom: '1rem' }}>Chief Medical Officer</p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>
                Board-certified emergency physician with expertise in pre-hospital care
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
