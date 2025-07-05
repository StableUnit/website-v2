import React from 'react';
import './Footer.css';
import stableunitLogo from '@assets/images/footer/stableunit-logo.svg';

const Footer: React.FC = () => {
  return (
    <footer id="jobs" className="footer">
      <div className="footer-content">
        <div className="footer-logo-section">
          <img src={stableunitLogo} alt="Stableunit" className="footer-logo" />
          <p className="footer-description">
            Turn underutilized assets into active capital without selling, giving you more flexibility and value from your portfolio.
          </p>
        </div>
        
        <div className="footer-links">
          <div className="footer-column">
            <h3>Community</h3>
            <ul>
              <li><a href="https://x.com/stableunit" target="_blank" rel="noopener noreferrer">X.com</a></li>
              <li><a href="https://discord.gg/stableunit" target="_blank" rel="noopener noreferrer">Discord</a></li>
              <li><a href="https://t.me/stableunit" target="_blank" rel="noopener noreferrer">Telegram</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li><a href="/documentation" target="_blank" rel="noopener noreferrer">Documentation</a></li>
              <li><a href="/audits" target="_blank" rel="noopener noreferrer">Audits</a></li>
              <li><a href="/brand" target="_blank" rel="noopener noreferrer">Brand Guides</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="/about" target="_blank" rel="noopener noreferrer">About us</a></li>
              <li><a href="/jobs" target="_blank" rel="noopener noreferrer">Jobs</a></li>
              <li><a href="/support" target="_blank" rel="noopener noreferrer">Help & Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-disclaimer">
          <p>The suDAO token sale involves risk. It's an experimental asset that may lose all value. This is not investment advice or a promise of returns. Participate only if you meet legal requirements and can afford potential loss.</p>
          <p className="footer-reference">*Provided for reference; Future returns are not assured</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;