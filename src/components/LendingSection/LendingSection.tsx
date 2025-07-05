import React, { useState } from 'react';
import './LendingSection.css';
import lendingImage from '@assets/images/lending/lending-main-image.png';
import chainLogo from '@assets/images/lending/features/chain-icon.svg';
import securityLogo from '@assets/images/lending/features/security-icon.svg';
import desktopCheck from '@assets/images/lending/features/desktop-check-icon.svg';
import uniswapLogo from '@assets/images/lending/features/uniswap-protocol-logo.png';
import pendleLogo from '@assets/images/lending/features/pendle-protocol-logo.png';
import auraLogo from '@assets/images/lending/features/aura-protocol-logo.png';

const LendingSection: React.FC = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const features = [
    {
      title: 'Seamless DeFi integrations.',
      description: 'Provide liquidity to your favorite pairs on top DEXs and yield protocols through StableUnit, all in one click.',
      icon: chainLogo,
      logos: [uniswapLogo, pendleLogo, auraLogo]
    },
    {
      title: 'Powered by capital-efficient liquidations.',
      description: 'StableUnit replaces auction-style liquidations with a deterministic, MEV-resistant system to boost capital efficiency.',
      icon: securityLogo,
      linkText: 'Explore Lending'
    },
    {
      title: 'Maximum composability in DeFi.',
      description: 'USD Pro uses a novel, non-rebasing yield model, avoiding common pitfalls and ensuring full DeFi compatibility like any ERC-20 token.',
      icon: desktopCheck,
      linkText: 'Explore USD Pro'
    }
  ];

  return (
    <section id="lending" className="lending-section">
      <div className="lending-header-section">
        <div className="lending-container">
          <div className="lending-header">
            <div className="lending-title">
              <h2>
                <span className="highlight">Lending</span> and <span className="highlight">Stablecoin</span>,
              </h2>
              <h2 className="subtitle">designed as one.</h2>
            </div>
            <div className="lending-description">
              <p>
                The battle-tested collateralized debt position model connects every layer of the system – collateral selection, loan issuance, and yield distribution – <span className="highlight-dao">allowing the DAO to grow both the lending protocol and the stablecoin, each reinforcing the other.</span>
              </p>
              <a href="/docs/lending" className="learn-more-link">
                <div className="learn-more-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 11.5L11.5 4.5M11.5 4.5H4.5M11.5 4.5V11.5" stroke="#232523" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="learn-more-text">Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="lending-content-section">
        <div className="lending-container">
          <div className="lending-image">
            <img src={lendingImage} alt="Lending and Stablecoin platform" />
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className={`feature-card ${expandedCards.includes(index) ? 'expanded' : ''}`}>
                <div className="feature-header">
                  <div className="feature-icon">
                    <img src={feature.icon} alt="" />
                  </div>
                  <h3>{feature.title}</h3>
                  <button 
                    className="mobile-toggle-btn" 
                    onClick={() => toggleCard(index)}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path 
                        d="M8 3v10M3 8h10" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
                <p>{feature.description}</p>
                {feature.logos && (
                  <div className="feature-logos">
                    {feature.logos.map((logo, logoIndex) => (
                      <img key={logoIndex} src={logo} alt="" className="protocol-logo" />
                    ))}
                  </div>
                )}
                {feature.linkText && (
                  <a href="/explore" className="explore-link">
                    <span className="explore-link-arrow">→</span>
                    <span className="explore-link-text">{feature.linkText}</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LendingSection;