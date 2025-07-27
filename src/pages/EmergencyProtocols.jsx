import React from 'react';
import '../Styles.css';
const EmergencyProtocols = () => {
  return (
    <section
      id="emergency-protocols"
      className="section"
      style={{
        background: 'linear-gradient(135deg, #e74c3c 0%, #f39c12 100%)',
        color: 'white',
      }}
    >
      <div className="container">
        <h2 className="section-title fade-in" style={{ color: 'white' }}>
          Emergency Protocols
        </h2>

        <div
          className="protocols-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '4rem',
          }}
        >
          {[
            {
              icon: 'fas fa-heartbeat',
              title: 'Cardiac Emergency',
              steps: [
                'Call 911 immediately for life-threatening situations',
                'Begin CPR if the person is unresponsive and not breathing',
                'Use AED if available and follow voice prompts',
                'Book ALS ambulance through our app for advanced cardiac care',
              ],
            },
            {
              icon: 'fas fa-lungs',
              title: 'Breathing Emergency',
              steps: [
                'Ensure airway is clear of obstructions',
                'Position patient in recovery position if conscious',
                'Administer rescue breathing if trained',
                'Request BLS or ALS ambulance based on severity',
              ],
            },
            {
              icon: 'fas fa-band-aid',
              title: 'Trauma/Injury',
              steps: [
                'Ensure scene safety before approaching',
                'Control severe bleeding with direct pressure',
                'Stabilize head and neck if spinal injury suspected',
                'Request appropriate ambulance service level',
              ],
            },
            {
              icon: 'fas fa-brain',
              title: 'Stroke/Neurological',
              steps: [
                'Recognize FAST signs: Face, Arms, Speech, Time',
                'Note exact time symptoms began',
                'Keep patient calm and comfortable',
                'Request ALS ambulance for immediate transport',
              ],
            },
            {
              icon: 'fas fa-child',
              title: 'Pediatric Emergency',
              steps: [
                'Stay calm to keep the child calm',
                'Check for responsiveness and breathing',
                'Use age-appropriate first aid techniques',
                'Request pediatric-equipped ALS ambulance',
              ],
            },
            {
              icon: 'fas fa-mobile-alt',
              title: 'Using Our App',
              steps: [
                'Open app and tap "Emergency" for immediate help',
                'Select appropriate service type (BLS/ALS/Critical)',
                'Provide clear description of patient condition',
                'Track ambulance arrival in real-time',
              ],
            },
          ].map((protocol, index) => (
            <div
              key={index}
              className="protocol-card fade-in"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                padding: '2rem',
                borderRadius: '15px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <h3
                style={{
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <i className={protocol.icon} style={{ color: '#fff', fontSize: '1.5rem' }}></i>
                {protocol.title}
              </h3>
              <div className="protocol-steps">
                {protocol.steps.map((step, stepIndex) => (
                  <div
                    key={stepIndex}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      marginBottom: stepIndex < protocol.steps.length - 1 ? '1rem' : '0',
                    }}
                  >
                    <span
                      style={{
                        background: '#fff',
                        color: '#e74c3c',
                        width: '25px',
                        height: '25px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontSize: '0.9rem',
                        flexShrink: 0,
                      }}
                    >
                      {stepIndex + 1}
                    </span>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="emergency-contacts fade-in"
          style={{
            textAlign: 'center',
            marginTop: '4rem',
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '15px',
            backdropFilter: 'blur(10px)',
          }}
        >
          <h3 style={{ marginBottom: '2rem', fontSize: '2rem' }}>
            <i className="fas fa-phone-alt"></i> Emergency Contacts
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
                label: 'Life-Threatening Emergency',
                number: '911',
                desc: 'Call immediately',
                size: '1.5rem',
              },
              {
                label: 'Ambulance Now Dispatch',
                number: 'Coming Soon',
                desc: '24/7 Service',
                size: '1.2rem',
              },
              {
                label: 'Poison Control',
                number: '1-800-222-1222',
                desc: '24/7 Hotline',
                size: '1.2rem',
              },
              {
                label: 'Mental Health Crisis',
                number: '988',
                desc: 'Suicide & Crisis Lifeline',
                size: '1.2rem',
              },
            ].map((contact, i) => (
              <div key={i}>
                <h4 style={{ marginBottom: '0.5rem' }}>{contact.label}</h4>
                <p style={{ fontSize: contact.size, fontWeight: 'bold' }}>{contact.number}</p>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{contact.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyProtocols;
