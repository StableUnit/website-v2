import React, { useState, useEffect } from 'react';
import './LendingFeatures.css';
import chainLogo from '@assets/images/lending/features/chain-icon.svg';
import securityLogo from '@assets/images/lending/features/security-icon.svg';
import desktopCheck from '@assets/images/lending/features/desktop-check-icon.svg';
import uniswapLogo from '@assets/images/lending/features/uniswap-protocol-logo.png';
import pendleLogo from '@assets/images/lending/features/pendle-protocol-logo.png';
import auraLogo from '@assets/images/lending/features/aura-protocol-logo.png';

const LendingFeatures: React.FC = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const features = [
    {
      icon: "data:image/svg+xml,%3csvg%20width='216'%20height='297'%20viewBox='0%200%20216%20297'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_ddddi_3013_186898)'%3e%3crect%20x='48'%20y='9'%20width='120'%20height='120'%20rx='30'%20fill='%2300CC96'%20fill-opacity='0.08'/%3e%3crect%20x='49.5'%20y='10.5'%20width='117'%20height='117'%20rx='28.5'%20stroke='%2300C492'%20stroke-opacity='0.2'%20stroke-width='3'/%3e%3c/g%3e%3cpath%20d='M103.3827%2070.651C107.8533%2076.951%20117.259%2075.8448%20121.868%2070.651L131.035%2061.4337C136.215%2055.7742%20136.399%2048.465%20131.035%2042.999C125.799%2037.6671%20117.836%2037.6671%20112.6%2042.999L103.383%2052.2165'%20stroke='%2312AB84'%20stroke-width='6'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M112.606%2066.363C108.136%2060.063%2098.7804%2060.8463%2094.1719%2066.0402L84.9546%2075.1422C79.7745%2080.8017%2079.59%2088.2261%2084.9546%2093.6921C90.1899%2099.024%2098.1537%2099.024%20103.389%2093.6921L112.606%2084.4746'%20stroke='%2312AB84'%20stroke-width='6'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cdefs%3e%3cfilter%20id='filter0_ddddi_3013_186898'%20x='0'%20y='0'%20width='216'%20height='297'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='6'/%3e%3cfeGaussianBlur%20stdDeviation='7.5'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.376471%200%200%200%200%200.792157%200%200%200%200%200.646667%200%200%200%200.1%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_3013_186898'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='30'/%3e%3cfeGaussianBlur%20stdDeviation='15'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.376471%200%200%200%200%200.792157%200%200%200%200%200.70902%200%200%200%200.09%200'/%3e%3cfeBlend%20mode='normal'%20in2='effect1_dropShadow_3013_186898'%20result='effect2_dropShadow_3013_186898'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='66'/%3e%3cfeGaussianBlur%20stdDeviation='19.5'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.376471%200%200%200%200%200.792157%200%200%200%200%200.674379%200%200%200%200.05%200'/%3e%3cfeBlend%20mode='normal'%20in2='effect2_dropShadow_3013_186898'%20result='effect3_dropShadow_3013_186898'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='120'/%3e%3cfeGaussianBlur%20stdDeviation='24'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.376471%200%200%200%200%200.792157%200%200%200%200%200.695163%200%200%200%200.01%200'/%3e%3cfeBlend%20mode='normal'%20in2='effect3_dropShadow_3013_186898'%20result='effect4_dropShadow_3013_186898'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect4_dropShadow_3013_186898'%20result='shape'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='12'/%3e%3cfeGaussianBlur%20stdDeviation='18'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='arithmetic'%20k2='-1'%20k3='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.05%200'/%3e%3cfeBlend%20mode='normal'%20in2='shape'%20result='effect5_innerShadow_3013_186898'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",
      title: 'Seamless DeFI integrations.',
      description: 'Provide liquidity to your favorite pairs on top DEXs and yield protocols through StableUnit, all in one click.',
      logos: [uniswapLogo, pendleLogo, auraLogo]
    },
    {
      icon: securityLogo,
      title: 'Powered by capital-efficient liquidations.',
      mobileTitle: 'Capital-efficient liquidations.',
      description: 'StableUnit replaces discounted liquidations with a deterministic system that eliminates MEV and boosts capital efficiency.',
      linkText: 'Explore Lending',
    },
    {
      icon: "data:image/svg+xml,%3csvg%20width='216'%20height='297'%20viewBox='0%200%20216%20297'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_ddddi_3013_186901)'%3e%3crect%20x='48'%20y='9'%20width='120'%20height='120'%20rx='30'%20fill='%2300CC96'%20fill-opacity='0.08'/%3e%3crect%20x='49.5'%20y='10.5'%20width='117'%20height='117'%20rx='28.5'%20stroke='%2300C492'%20stroke-opacity='0.2'%20stroke-width='3'/%3e%3c/g%3e%3cpath%20d='M99%2069L105%2075L117%2063'%20stroke='%2312AB84'%20stroke-width='6'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M138%2090H78M87%2054C87%2050.7%2089.7%2048%2093%2048H123C124.591%2048%20126.117%2048.6321%20127.243%2049.7574C128.368%2050.8827%20129%2052.409%20129%2054V90H87V54Z'%20stroke='%2312AB84'%20stroke-width='6'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cdefs%3e%3cfilter%20id='filter0_ddddi_3013_186901'%20x='0'%20y='0'%20width='216'%20height='297'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='6'/%3e%3cfeGaussianBlur%20stdDeviation='7.5'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.376471%200%200%200%200%200.792157%200%200%200%200%200.646667%200%200%200%200.1%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_3013_186901'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='30'/%3e%3cfeGaussianBlur%20stdDeviation='15'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.376471%200%200%200%200%200.792157%200%200%200%200%200.70902%200%200%200%200.09%200'/%3e%3cfeBlend%20mode='normal'%20in2='effect1_dropShadow_3013_186901'%20result='effect2_dropShadow_3013_186901'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='66'/%3e%3cfeGaussianBlur%20stdDeviation='19.5'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.376471%200%200%200%200%200.792157%200%200%200%200%200.674379%200%200%200%200.05%200'/%3e%3cfeBlend%20mode='normal'%20in2='effect2_dropShadow_3013_186901'%20result='effect3_dropShadow_3013_186901'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='120'/%3e%3cfeGaussianBlur%20stdDeviation='24'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.376471%200%200%200%200%200.792157%200%200%200%200%200.695163%200%200%200%200.01%200'/%3e%3cfeBlend%20mode='normal'%20in2='effect3_dropShadow_3013_186901'%20result='effect4_dropShadow_3013_186901'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect4_dropShadow_3013_186901'%20result='shape'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='12'/%3e%3cfeGaussianBlur%20stdDeviation='18'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='arithmetic'%20k2='-1'%20k3='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.05%200'/%3e%3cfeBlend%20mode='normal'%20in2='shape'%20result='effect5_innerShadow_3013_186901'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",
      title: 'Maximum composability in DeFi.',
      description: 'USD Pro uses a novel, non-rebasing yield model, avoiding common pitfalls and ensuring full DeFi compatibility like any ERC-20 token.',
      linkText: 'Explore USD Pro',
      linkIcon: '→'
    }
  ];

  return (
    <section className="lending-features">
      <div className="lending-features-container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className={`feature-card ${expandedCards.includes(index) ? 'expanded' : ''}`}>
              <div className="feature-header">
                <div className="feature-icon">
                  <img src={feature.icon} alt="" />
                </div>
                <h3>
                  {index === 1 ? (
                    <>
                      <span className="desktop-only">{feature.title}</span>
                      <span className="mobile-only">Capital-efficient liquidations.</span>
                    </>
                  ) : (
                    feature.title
                  )}
                </h3>
                <button 
                  className="mobile-toggle-btn"
                  onClick={() => toggleCard(index)}
                  aria-label={expandedCards.includes(index) ? "Collapse" : "Expand"}
                >
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none"
                    className={expandedCards.includes(index) ? 'rotated' : ''}
                  >
                    <path 
                      d="M8 3v10M3 8h10" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
              <div className={`feature-content ${expandedCards.includes(index) ? 'open' : ''}`}>
                <div className="feature-content-inner">
                  <p>{feature.description}</p>
                  {feature.logos && (
                    <div className="feature-logos">
                      {feature.logos.map((logo, logoIndex) => (
                        <img key={logoIndex} src={logo} alt="" className="protocol-logo" />
                      ))}
                    </div>
                  )}
                  {feature.linkText && (
                    <a href="/learn-more" className="feature-link">
                      {feature.linkText} <span className="arrow">{feature.linkIcon}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LendingFeatures;