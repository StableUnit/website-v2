import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HandCards.css';
import handImage from '@assets/images/hand-cards/hand-holding-coin.png';
import foxImage from '@assets/images/hand-cards/wallet-fox-earning.png';
import waterfallImage from '@assets/images/hand-cards/revenue-streams-waterfall.png';
import lockImage from '@assets/images/hand-cards/censorship-resistant-lock.png';
import pyramidImage from '@assets/images/hand-cards/yield-forwarding-pyramids.png';

gsap.registerPlugin(ScrollTrigger);

const HandCards: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 968);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 968);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    const section = sectionRef.current;
    const cardsContainer = cardsContainerRef.current;

    const calculateScrollDistance = () => {
      if (isMobile || !cardsContainer) {
        return 0;
      }

      const containerHeight = window.visualViewport?.height || window.innerHeight;
      const cardsHeight = cardsContainer.scrollHeight;

      // Add extra space to show the full last card and button
      return Math.max(cardsHeight - containerHeight + 250, 100);
    };

    const scrollDistance = calculateScrollDistance();

    const usdProLabel = section?.querySelector('.usd-pro-label');

    if (!isMobile && scrollDistance > 0 && usdProLabel) {
      gsap.set(cardsContainer, {
        y: 0,
        force3D: true
      });

      ScrollTrigger.create({
        trigger: usdProLabel,
        start: 'top-=124 top',
        end: () => `+=${scrollDistance}`,
        pin: section,
        pinSpacing: true,
        scrub: true,
        preventOverlaps: true,
        invalidateOnRefresh: true,
        animation: gsap.to(cardsContainer, { y: -scrollDistance })
      });

    }

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    window.addEventListener('orientationchange', () => {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [isMobile]);

  return (
    <section id="usdpro" ref={sectionRef} className="hand-cards-section">
      <div className="hand-fixed">
        <div className="hand-content">
          <span className="usd-pro-label">USD Pro</span>
          <h2>The ultimate stablecoin.</h2>
        </div>
        <img src={handImage} alt="Hand holding coin" className="hand-img" />
      </div>
      
      <div className="hand-cards-wrapper">
        <div className="cards-scroll-container">
          <div ref={cardsContainerRef}>
            <div className="scroll-card earn-card">
              <div className="earn-header">
                <h3>Earn just by holding.</h3>
                <p>Get rewards directly in your wallet and in real time, simply by holding USD Pro.</p>
              </div>
              <div className="wallet-container">
                <img src={foxImage} alt="Earn rewards wallet preview" className="wallet-image" />
                <div className="balance-overlay">
                  <span className="balance-amount" data-value="5000.02441">0.00000</span>
                  <span className="balance-currency">USD Pro</span>
                </div>
              </div>
            </div>
            <div className="scroll-card revenue-card">
              <div className="revenue-content">
                <h3>Multiple revenue streams.</h3>
                <p>USD Pro yield comes from borrowing fees, liquidations, and conversion fees when non-yield-bearing assets are seamlessly converted into DeFi positions in one click.</p>
              </div>
              <div className="revenue-visual">
                <img src={waterfallImage} alt="Revenue streams visualization" className="waterfall-image" />
              </div>
            </div>
            <div className="scroll-card censorship-card">
              <div className="censorship-content">
                <h3>Censorship resistant.</h3>
                <p>No one can freeze your USD Pro, ensuring true financial sovereignty and censorship resistance.</p>
              </div>
              <div className="censorship-visual">
                <img src={lockImage} alt="Censorship resistance lock" className="lock-image" />
              </div>
            </div>
            <div className="scroll-card yield-card">
              <div className="yield-content">
                <h3>Yield forwarding.</h3>
                <p>Forward your yield to any address to maintain a clear separation of revenue streams, for compliance, treasury management, or any custom setup.</p>
              </div>
              <div className="yield-visual">
                <img src={pyramidImage} alt="Yield forwarding visualization" className="yield-image" />
              </div>
            </div>
            <div className="bottom-cta">
              <button className="get-usd-pro-btn">
                Get USD Pro
                <svg className="btn-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HandCards;