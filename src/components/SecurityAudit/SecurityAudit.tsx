import React from 'react';
import './SecurityAudit.css';
import arbitrumLogo from '@assets/images/security-audit/arbitrum-logo.svg';
import stablecoinLogo from '@assets/images/security-audit/stablecoin-logo.svg';
import decurity from '@assets/images/security-audit/decurity-logo.png';
import sherlock from '@assets/images/security-audit/sherlock-logo.png';

const SecurityAudit: React.FC = () => {
  return (
    <section className="security-audit-section">
      <div className="security-container">
        <div className="security-header">
          <span className="security-label">Security First</span>
          <h2 className="security-title">Top audits and a bug-bounty pool.</h2>
        </div>

        <div className="security-content">
          <div className="security-card safety-card">
            <div className="safety-section">
              <div className="safety-text-content">
                <h3 className="safety-title">We're serious about safety</h3>
                <p className="safety-description">
                  StableUnit protects your capital with a live{' '}
                  <span className="highlight-green">$500k</span> bug-bounty pool and independent audits
                  giving you layered, 360 security.
                </p>
              </div>
              <a href="/security" className="learn-more-link">
                <div className="arrow-circle">
                  <svg className="arrow-icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M12 20L20 12M20 12H14M20 12V18" stroke="#232523" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Learn more</span>
              </a>
            </div>

          </div>

          <div className="security-right">
            <div className="security-card bounty-card">
              <div className="bounty-section">
                <h3 className="bounty-title">Live $500k bounty</h3>
                
                <div className="bounty-items">
                  <div className="bounty-item">
                    <span className="bounty-amount">$200k</span>
                    <div className="bounty-detail">
                      <div className="arbitrum-icon">
                        <img src={arbitrumLogo} alt="Arbitrum" />
                      </div>
                      <span className="bounty-text">Arbitrum-grant prepayment</span>
                    </div>
                  </div>
                  
                  <div className="bounty-item">
                    <span className="bounty-amount">$300k</span>
                    <div className="bounty-detail">
                      <div className="sudao-icon">
                        <img src={stablecoinLogo} alt="Stablecoin" />
                      </div>
                      <span className="bounty-text">in SuDAO tokens</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="security-card audit-card">
              <div className="audit-section">
                <h4 className="audit-title">Audited by:</h4>
                <p className="audit-description">
                  StableUnit's smart contract suite has passed an in-depth <a href="/audits/decurity" className="audit-link">Decurity</a> audit, with a <a href="/audits/sherlock" className="audit-link">Sherlock</a> review set to commence. These independent checks highlight strong safeguards and offer transparent third-party validation.
                </p>
                
                <div className="audit-logos">
                  <div className="audit-logo decurity">
                    <img src={decurity} alt="Decurity" />
                  </div>
                  <div className="audit-logo sherlock">
                    <img src={sherlock} alt="Sherlock" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityAudit;