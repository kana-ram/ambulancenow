import React from 'react';
import '../styles.css';
const showComingSoon = (message) => {
  alert(message); // You can replace this with a custom toast later
};

const CareersSection = () => {
  return (
    <section
      id="careers"
      className="section"
      style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      }}
    >
      <div className="container">
        <h2 className="section-title fade-in">Join Our Team</h2>
        <div
          className="careers-intro fade-in"
          style={{
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 4rem',
          }}
        >
          <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#666' }}>
            Be part of a revolutionary team that's changing emergency medical
            services. We're looking for passionate individuals who want to make
            a difference in saving lives.
          </p>
        </div>

        <div
          className="job-openings"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
          }}
        >
          {/* Job Card Template */}
          {[
            {
              icon: 'fas fa-user-md',
              title: 'Emergency Medical Technicians',
              desc: 'Join our fleet of certified EMTs providing life-saving care in emergency situations.',
              items: [
                'EMT certification required',
                'Competitive salary and benefits',
                'Flexible scheduling options',
                'Continuous training provided',
              ],
            },
            {
              icon: 'fas fa-stethoscope',
              title: 'Paramedics',
              desc: 'Advanced life support professionals for critical care situations.',
              items: [
                'Paramedic certification required',
                'Advanced life support experience',
                'Leadership opportunities',
                'Premium compensation package',
              ],
            },
            {
              icon: 'fas fa-headset',
              title: 'Dispatch Operators',
              desc: 'Be the first point of contact for emergency situations, coordinating rapid response.',
              items: [
                'Emergency dispatch training',
                'Excellent communication skills',
                '24/7 shift availability',
                'Critical decision-making role',
              ],
            },
            {
              icon: 'fas fa-code',
              title: 'Software Developers',
              desc: 'Build the technology that saves lives - mobile apps, dispatch systems, and AI algorithms.',
              items: [
                'Mobile app development experience',
                'Real-time systems knowledge',
                'Healthcare tech interest',
                'Remote work options',
              ],
            },
          ].map((job, idx) => (
            <div
              key={idx}
              className="job-card fade-in"
              style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                borderLeft: '4px solid #e74c3c',
                transition: 'all 0.3s ease',
              }}
            >
              <h3 style={{ color: '#e74c3c', marginBottom: '1rem' }}>
                <i className={job.icon}></i> {job.title}
              </h3>
              <p style={{ marginBottom: '1rem', color: '#666' }}>{job.desc}</p>
              <ul style={{ color: '#666', marginBottom: '1.5rem' }}>
                {job.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
              <button
                onClick={() =>
                  showComingSoon('Job applications will be available when we launch!')
                }
                style={{
                  background: 'linear-gradient(45deg, #e74c3c, #f39c12)',
                  color: 'white',
                  border: 'none',
                  padding: '0.8rem 1.5rem',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                }}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>

        <div
          className="benefits-section"
          style={{ marginTop: '4rem', textAlign: 'center' }}
        >
          <h3
            style={{
              fontSize: '2rem',
              marginBottom: '2rem',
              color: '#333',
            }}
          >
            <i className="fas fa-gift"></i> Why Work With Us?
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              {
                icon: 'fas fa-heart',
                title: 'Make a Difference',
                desc: 'Save lives and impact communities every day',
              },
              {
                icon: 'fas fa-graduation-cap',
                title: 'Continuous Learning',
                desc: 'Advanced training and skill development',
              },
              {
                icon: 'fas fa-balance-scale',
                title: 'Work-Life Balance',
                desc: 'Flexible schedules and comprehensive benefits',
              },
              {
                icon: 'fas fa-rocket',
                title: 'Innovation',
                desc: 'Work with cutting-edge technology',
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="benefit-box fade-in"
                style={{
                  padding: '1.5rem',
                  background: 'rgba(231, 76, 60, 0.1)',
                  borderRadius: '10px',
                }}
              >
                <i
                  className={benefit.icon}
                  style={{
                    fontSize: '2rem',
                    color: '#e74c3c',
                    marginBottom: '1rem',
                  }}
                ></i>
                <h4>{benefit.title}</h4>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
