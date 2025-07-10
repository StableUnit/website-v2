import React, { useState, useEffect } from 'react';
import './LendingProtocol.css';
import complexAssetsImage from '@assets/images/lending-protocol/complex-assets-pyramid.png';
import liquidationImage from '@assets/images/lending-protocol/liquidation-thresholds-stairs.png';
import incentivesImage from '@assets/images/lending-protocol/incentives-redirect-balls.png';
import maximizeYieldImage from '@assets/images/lending-protocol/maximize-yield-spin.png';

const LendingProtocol: React.FC = () => {
  const features = [
    {
      title: 'Borrow against your complex, underutilized assets',
      description: 'Through DeFI adapters, StableUnit supports positions from leading DEXs and yield protocols  as collateral as well as blue-chip crypto assets.',
      image: complexAssetsImage,
      imageAlt: 'Complex underutilized assets',
      imagePosition: 50,
    },
    {
      title: 'Liquidation Insurance: Borrow without the fear',
      description: 'Liquidations hurt. Add optional insurance: if the price dips below your liquidation point but rebounds within two months, your position is restored as if no liquidation had ever happened.',
      image: liquidationImage,
      imageAlt: 'Higher liquidation thresholds',
      imagePosition: 90,
    },
    {
      title: 'Redirect incentives to your collateral',
      description: 'Use your voting power to steer protocol rewards toward the assets you choose. This lets you boost your yield and actively shape how rewards are distributed across the platform.',
      image: incentivesImage,
      imageAlt: 'Redirect incentives',
      imagePosition: 50,
    },
    {
      title: 'Make the collateral earn with StableUnit',
      description: 'StableUnit can turn plain crypto into yield-bearing assets. Deposit once and the protocol auto-routes funds into top DeFi strategies to maximize safe returns.',
      image: maximizeYieldImage,
      imageAlt: 'Maximize yield with SuDAO',
      imagePosition: 90,
    }
  ];

  return (
    <section className="lending-protocol" id="lending-protocol">
      <div className="lending-protocol-container">
        <div className="lending-protocol-header">
          <div>
            <div className="section-label">Stableunit</div>
            <h2>The efficient lending protocol</h2>
          </div>
          <a href="/app" className="borrow-link borrow-link-desktop">
            Borrow now
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 7H12M12 7L6 1M12 7L6 13" stroke="#00B786" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="protocol-features">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className='protocol-feature-item'
              style={{ backgroundImage: `url(${feature.image})`, backgroundPositionX: `${feature.imagePosition}%`}}
            >
              <div className="protocol-feature-content">
                <h3 className="protocol-feature-title">{feature.title}</h3>
                <p className="protocol-feature-description"> {feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mobile-borrow-container">
          <a href="/app" className="borrow-link borrow-link-mobile">
            Borrow now
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 7H12M12 7L6 1M12 7L6 13" stroke="#00B786" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LendingProtocol;