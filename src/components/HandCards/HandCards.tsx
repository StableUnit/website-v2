import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import handImage from '@assets/images/hand-cards/hand-holding-coin.png';
import foxImage from '@assets/images/hand-cards/wallet-fox-earning.jpg';
import waterfallImage from '@assets/images/hand-cards/revenue-streams-waterfall.png';
import lockImage from '@assets/images/hand-cards/censorship-resistant-lock.png';
import pyramidImage from '@assets/images/hand-cards/yield-forwarding-pyramids.png';
import HandCard from './__supportComponents/HandCard/HandCard';
import HandCardsCTA from './__supportComponents/HandCardsCTA/HandCardsCTA';
import AnimatedBalance from './__supportComponents/AnimatedBalance/AnimatedBalance';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import './HandCards.css';

gsap.registerPlugin(ScrollTrigger);

const HandCards: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 968);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 968);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cards = [
    <HandCard
      key="earn"
      title="Earn just by holding"
      description="Receive rewards in real time. No staking or claiming needed. Compatible with any browser, mobile or hardware wallet."
      image={foxImage}
      alt="Earn rewards wallet preview"
    >
      <AnimatedBalance startValue={5000.02441} />
    </HandCard>,
    <HandCard
      key="revenue"
      title="Multiple revenue streams"
      description="USD Pro’s yield comes from multiple sources: borrowing fees, liquidation gains, and conversion fees when non-yield assets are converted into DeFi positions in one click."
      image={waterfallImage}
      alt="Revenue streams visualization"
    />,
    <HandCard
      key="censorship"
      title="Censorship resistant"
      description="No one can freeze your USD Pro, ensuring true financial sovereignty and censorship resistance."
      image={lockImage}
      alt="Censorship resistance lock"
    />,
    <HandCard
      key="yield"
      title="Yield forwarding"
      description="Forward your yield to any address to maintain a clear separation of revenue streams, for compliance, treasury management, or any custom setup."
      image={pyramidImage}
      alt="Yield forwarding visualization"
    />,
  ];

  // keen-slider only for mobile
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 'auto', // use actual slide width
      spacing: 16,
    },
    loop: false,
    mode: 'snap',
    rubberband: false,
  });

  return (
    <section id="usdpro" className="hand-cards-section">
      <div className="hand-cards-content">
        <div className="hand-fixed">
          <div className="hand-content">
            <span className="usd-pro-label">USD Pro</span>
            <h2 className="hand-content-title">The ultimate stablecoin</h2>
          </div>
          <img src={handImage} alt="Hand holding coin" className="hand-img" />
        </div>
        <div className="hand-cards-wrapper">
          <div className="cards-scroll-container">
            {isMobile ? (
              <div ref={sliderRef} className="keen-slider cards-inner">
                {cards.map((card, idx) => (
                  <div
                    className="keen-slider__slide"
                    key={idx}
                    style={{ width: 335, minWidth: 335 }}
                  >
                    {card}
                  </div>
                ))}
              </div>
            ) : (
              <div className="cards-inner">
                {cards}
              </div>
            )}
          </div>
          <div key="cta"><HandCardsCTA /></div>
        </div>
      </div>
    </section>
  );
};

export default HandCards;