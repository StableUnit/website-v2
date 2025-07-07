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
                  <svg className="arrow-icon" width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.46875" width="32" height="32" rx="16" fill="white"/>
                    <path
                        d="M21.3418 19.1738C21.3418 19.3838 21.2734 19.5596 21.1367 19.7012C21 19.8379 20.8364 19.9062 20.646 19.9062C20.4556 19.9062 20.292 19.8354 20.1553 19.6938C20.0234 19.5522 19.9575 19.3887 19.9575 19.2031V16.625L20.082 13.5928L18.9468 14.8672L12.2158 21.5981C12.0742 21.7397 11.9106 21.8105 11.7251 21.8105C11.5933 21.8105 11.4736 21.7764 11.3662 21.708C11.2588 21.6396 11.1709 21.5518 11.1025 21.4443C11.0342 21.332 11 21.2148 11 21.0928C11 20.9121 11.0732 20.7461 11.2197 20.5947L17.9434 13.8638L19.2178 12.7432L16.0537 12.8457H13.6074C13.4219 12.8457 13.2583 12.7798 13.1167 12.6479C12.9751 12.5112 12.9043 12.3501 12.9043 12.1646C12.9043 11.979 12.9727 11.8179 13.1094 11.6812C13.2461 11.5396 13.4194 11.4688 13.6294 11.4688H20.5947C20.8242 11.4688 21.0049 11.5396 21.1367 11.6812C21.2734 11.8179 21.3418 11.9961 21.3418 12.2158V19.1738Z"
                        fill="#4A4B4A"/>
                  </svg>
                </div>
                <span>Learn more</span>
              </a>
            </div>

          </div>

          <div className="security-right">
            <div className="security-card bounty-card">
              <div className="bounty-section">
                <h3 className="bounty-title">$500k bounty</h3>

                <div className="bounty-items">
                  <div className="bounty-item">
                    <span className="bounty-amount">$200k</span>
                    <div className="bounty-detail">
                      <div className="arbitrum-icon">
                        <img src={arbitrumLogo} alt="Arbitrum"/>
                      </div>
                      <span className="bounty-text">Arbitrum security grant </span>
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