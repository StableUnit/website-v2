import React, { useState, useEffect } from 'react';
import './LendingProtocol.css';
import complexAssetsImage from '@assets/images/lending-protocol/complex-assets-pyramid.png';
import liquidationImage from '@assets/images/lending-protocol/liquidation-thresholds-stairs.png';
import incentivesImage from '@assets/images/lending-protocol/incentives-redirect-balls.png';
import maximizeYieldImage from '@assets/images/lending-protocol/maximize-yield-spin.png';

const LendingProtocol: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 968);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const features = [
    {
      title: 'Borrow against your complex underutilized assets.',
      description: 'Through DeFI adapters, StableUnit supports positions from leading DEXs and yield protocols as collateral to borrow USD Pro.',
      image: complexAssetsImage,
      imageAlt: 'Complex underutilized assets'
    },
    {
      title: 'Higher liquidation thresholds on your borrows.',
      description: 'Unlike models requiring large liquidator discounts, StableUnit uses an async, MEV-resistant system assigning CDPs to the top 21 stakers and delegates, who opt-in, deterministically. Lowering the cost of liquidations.',
      image: liquidationImage,
      imageAlt: 'Higher liquidation thresholds'
    },
    {
      title: 'Redirect incentives to your collateral.',
      description: 'Use your voting power to steer protocol rewards toward the assets you\'ve used as collateral. You can supercharge your yield and play an active role in influencing how rewards are distributed.',
      image: incentivesImage,
      imageAlt: 'Redirect incentives'
    },
    {
      title: 'Maximize your yield by locking SuDAO.',
      description: 'Boost your earnings by locking your SuDAO! SuDAO uses a vote-escrow model, meaning the longer you commit your tokens, the greater the incentive boost you\'ll receive.',
      image: maximizeYieldImage,
      imageAlt: 'Maximize yield with SuDAO'
    }
  ];

  return (
    <section className="lending-protocol">
      <div className="lending-protocol-container">
        <div className="lending-protocol-header">
          <div>
            <div className="section-label">Stableunit</div>
            <h2>The ultimate lending protocol.</h2>
          </div>
          <a href="/app" className="borrow-link borrow-link-desktop">
            Borrow now
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 7H12M12 7L6 1M12 7L6 13" stroke="#00B786" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="features-container">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-item feature-item-${index + 1}`}
              style={isMobile ? { backgroundImage: `url(${feature.image})` } : undefined}
            >
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
              <div className="feature-image">
                <img src={feature.image} alt={feature.imageAlt} />
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