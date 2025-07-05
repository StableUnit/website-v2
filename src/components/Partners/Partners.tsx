import React from 'react';
import './Partners.css';

const Partners: React.FC = () => {
  const partners = [
    { name: 'Gearbox', logo: '⚙️' },
    { name: 'Foundamental Labs', logo: '🏛️' },
    { name: '1inch', logo: '🦄' },
    { name: 'bitensor', logo: '🔗' },
    { name: 'DEXTools', logo: '📊' },
  ];

  return (
    <section className="partners">
      <div className="partners-container">
        <p className="partners-label">Backed by</p>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-item">
              <span className="partner-logo">{partner.logo}</span>
              <span className="partner-name">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;