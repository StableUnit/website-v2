import React, { useState } from 'react';
import './LendingSection.css';
import lendingImage from '@assets/images/lending/lending.png';
import chainLogo from '@assets/images/lending/features/chain-icon.svg';
import securityLogo from '@assets/images/lending/features/security-icon.svg';
import desktopCheck from '@assets/images/lending/features/desktop-check-icon.svg';
import uniswapLogo from '@assets/images/lending/features/Uniswap.png';
import pendleLogo from '@assets/images/lending/features/pendle.png';
import auraLogo from '@assets/images/lending/features/aura.png';

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
      logos: [auraLogo, uniswapLogo, pendleLogo]
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
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="16" fill="white"/>
                    <path
                        d="M21.3418 18.7051C21.3418 18.915 21.2734 19.0908 21.1367 19.2324C21 19.3691 20.8364 19.4375 20.646 19.4375C20.4556 19.4375 20.292 19.3667 20.1553 19.2251C20.0234 19.0835 19.9575 18.9199 19.9575 18.7344V16.1562L20.082 13.124L18.9468 14.3984L12.2158 21.1294C12.0742 21.271 11.9106 21.3418 11.7251 21.3418C11.5933 21.3418 11.4736 21.3076 11.3662 21.2393C11.2588 21.1709 11.1709 21.083 11.1025 20.9756C11.0342 20.8633 11 20.7461 11 20.624C11 20.4434 11.0732 20.2773 11.2197 20.126L17.9434 13.395L19.2178 12.2744L16.0537 12.377H13.6074C13.4219 12.377 13.2583 12.311 13.1167 12.1792C12.9751 12.0425 12.9043 11.8813 12.9043 11.6958C12.9043 11.5103 12.9727 11.3491 13.1094 11.2124C13.2461 11.0708 13.4194 11 13.6294 11H20.5947C20.8242 11 21.0049 11.0708 21.1367 11.2124C21.2734 11.3491 21.3418 11.5273 21.3418 11.7471V18.7051Z"
                        fill="#4A4B4A"/>
                  </svg>
                </div>
                <span className="learn-more-text">Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="lending-content-section">
        <div className="lending-image">
          <img src={lendingImage} alt="Lending and Stablecoin platform"/>
        </div>

        <div className="lending-container">
          <div className="lending-features-grid">
            {features.map((feature, index) => (
                <div key={index} className={`lending-feature-card ${expandedCards.includes(index) ? 'expanded' : ''}`}>
                  <div className="lending-feature-header">
                    <img className="lending-feature-icon" src={feature.icon} alt=""/>
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
                            <img key={logoIndex} src={logo} alt="" className="protocol-logo"/>
                        ))}
                      </div>
                  )}
                  {feature.linkText && (
                      <a href="/explore" className="explore-link">
                        <span className="explore-link-arrow">
                          <svg width="33" height="32" viewBox="0 0 33 32" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" width="32" height="32" rx="16" fill="#F7F7F7"/>
                            <path
                                d="M18.3644 21.6908C18.216 21.8392 18.0433 21.9152 17.8465 21.9186C17.6532 21.9186 17.4892 21.8513 17.3545 21.7166C17.2199 21.582 17.1543 21.4163 17.1577 21.2195C17.1646 21.0261 17.2337 20.8638 17.3649 20.7326L19.1879 18.9096L21.4201 16.8536L19.7162 16.952H10.1972C9.9969 16.952 9.83117 16.8864 9.69997 16.7552C9.60674 16.6619 9.54632 16.5532 9.5187 16.4289C9.49108 16.3046 9.49108 16.1803 9.5187 16.056C9.54978 15.9282 9.60847 15.8212 9.69479 15.7349C9.82254 15.6072 9.99172 15.5416 10.2023 15.5381L19.7162 15.5329L21.4097 15.6417L19.0999 13.4769L17.3701 11.7471C17.2389 11.6159 17.1698 11.4536 17.1629 11.2602C17.1595 11.0634 17.2233 10.8994 17.3545 10.7682C17.4857 10.637 17.648 10.5714 17.8414 10.5714C18.0382 10.568 18.2108 10.6405 18.3593 10.789L23.2845 15.7142C23.4468 15.8765 23.5245 16.0543 23.5176 16.2476C23.5176 16.441 23.4399 16.6153 23.2845 16.7707L18.3644 21.6908Z"
                                fill="#00B786"/>
                          </svg>
                        </span>
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