import React, { useState } from 'react';
import './Tokenomics.css';
import handImage from '@assets/images/tokenomics/hand-holding-sudao.png';
import approvedPersonIcon from '@assets/images/tokenomics/liquidation-participation-icon.svg';
import speedIcon from '@assets/images/tokenomics/gauge-voting-icon.svg';
import securityIcon from '@assets/images/tokenomics/governance-staking-icon.svg';

const Tokenomics: React.FC = () => {
  const [expandedCards, setExpandedCards] = useState<{ [key: number]: boolean }>({});

  const toggleCard = (cardIndex: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardIndex]: !prev[cardIndex]
    }));
  };

  return (
    <section id="dao" className="tokenomics">
      <div className="tokenomics-container">
        <div className="tokenomics-header">
          <span className="tokenomics-label">Tokenomics</span>
          <h2 className="tokenomics-title">The ultimate governance token.</h2>
        </div>
        
        <div className="tokenomics-content">
          <div className="tokenomics-background">
            <div className="hand-background">
              <img src={handImage} alt="Governance Token" />
            </div>
            <div className="content-overlay">
              <div className="tokenomics-features">
                <div className={`tokenomics-feature ${expandedCards[0] ? 'expanded' : ''}`}>
                  <div className="feature-content">
                    <div className="feature-header">
                      <h3><img src={approvedPersonIcon} alt="User" /> Liquidation Participation</h3>
                      <button 
                        className="expand-btn mobile-only" 
                        onClick={() => toggleCard(0)}
                        aria-label="Toggle card details"
                      >
                        {expandedCards[0] ? '−' : '+'}
                      </button>
                    </div>
                    <p className={`feature-description ${expandedCards[0] ? 'visible' : ''}`}>
                      Liquidators are deterministically selected from the top 21 SuDAO stakers (or delegates) who opt in to participate and earn a commission from performing liquidations.
                    </p>
                  </div>
                </div>
                
                <div className={`tokenomics-feature ${expandedCards[1] ? 'expanded' : ''}`}>
                  <div className="feature-content">
                    <div className="feature-header">
                      <h3><img src={speedIcon} alt="Speed" className="speed-icon" /> Gauge system to vote for pool incentive</h3>
                      <button 
                        className="expand-btn mobile-only" 
                        onClick={() => toggleCard(1)}
                        aria-label="Toggle card details"
                      >
                        {expandedCards[1] ? '−' : '+'}
                      </button>
                    </div>
                    <p className={`feature-description ${expandedCards[1] ? 'visible' : ''}`}>
                      Projects or users staking SuDAO can direct incentives toward specific collateral tokens to encourage their use as collateral on StableUnit.
                    </p>
                  </div>
                </div>
                
                <div className={`tokenomics-feature ${expandedCards[2] ? 'expanded' : ''}`}>
                  <div className="feature-content">
                    <div className="feature-header">
                      <h3><img src={securityIcon} alt="Security" /> Governance Through Staking</h3>
                      <button 
                        className="expand-btn mobile-only" 
                        onClick={() => toggleCard(2)}
                        aria-label="Toggle card details"
                      >
                        {expandedCards[2] ? '−' : '+'}
                      </button>
                    </div>
                    <p className={`feature-description ${expandedCards[2] ? 'visible' : ''}`}>
                      Stake using the vote escrow model to vote on interest rates, collateral onboarding, and buyback mechanisms. The longer users stake, the greater their governance power.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="tokenomics-cta">
                <button 
                  className="get-involved-btn"
                  onClick={() => {
                    const daoSection = document.getElementById('dao');
                    if (daoSection) {
                      daoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  Get involved <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;