import React from 'react';
import stableunitLogo from '@assets/images/footer/stableunit-logo.svg';

import './Footer.css';

const Footer: React.FC = () => {
  return (
      <footer id="footer" className="footer">
        <div className="footer-content">
          <div className="footer-logo-section">
            <img src={stableunitLogo} alt="Stableunit" className="footer-logo"/>
            <p className="footer-description">
              Turn underutilized assets into active capital without selling, giving you more flexibility and value from
              your portfolio.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3>Community</h3>
              <ul>
                <li><a href="https://x.com/stableunitdao" target="_blank" rel="noopener noreferrer">X.com</a></li>
                <li><a href="https://discord.com/invite/WrCrCW6F4c" target="_blank" rel="noopener noreferrer">Discord</a></li>
                <li><a href="https://t.me/stableunit" target="_blank" rel="noopener noreferrer">Telegram</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Resources</h3>
              <ul>
                <li><a href="https://docs.stableunit.org/" target="_blank" rel="noopener noreferrer">Documentation</a></li>
                <li><a href="https://stableunit.gitbook.io/documentation/extras/resources-and-glossary/official-links-and-resources#audits" target="_blank" rel="noopener noreferrer">Audits</a></li>
                <li><a href="https://github.com/StableUnit" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-disclaimer">
          <p className="footer-reference">*Provided for reference; Future returns are not assured</p>
          <p style={{ maxWidth: '540px' }}>The suDAO token sale involves risk. It's an experimental asset that may lose all value. This is not investment advice or a promise of returns. Participate only if you meet legal requirements and can afford potential loss.</p>
        </div>
      </footer>
  );
};

export default Footer;