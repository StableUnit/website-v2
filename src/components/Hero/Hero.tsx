import React, { useState } from 'react';
import './Hero.css';
import heroImage from '@assets/images/hero/hero-main-screen.png';
import gearboxLogo from '@assets/images/hero/partners/GearBox.png';
import fundamentalLogo from '@assets/images/hero/partners/Fundamental.png';
import linchLogo from '@assets/images/hero/partners/linch.png';
import bittensorLogo from '@assets/images/hero/partners/bittensor.png';
import ngcLogo from '@assets/images/hero/partners/NGC.png';
import kucoinLogo from '@assets/images/hero/partners/Kucoin.png';
import mexcLogo from '@assets/images/hero/partners/Mexc.png';
import matterLabsLogo from '@assets/images/hero/partners/matter_labs.png';
import nxgenLogo from '@assets/images/hero/partners/NxGen.png';

const Hero: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Production-ready email submission
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        // Clear the form on successful submission
        setEmail('');
        // You could add a success notification here
      } else {
        // Handle error - you could show an error message to the user
        throw new Error('Failed to join waitlist');
      }
    } catch {
      // In production, you'd want to show a user-friendly error message
      // For now, we'll just silently fail
    }
  };

  const partners = [
    { name: 'Gearbox', logo: gearboxLogo },
    { name: 'Fundamental Labs', logo: fundamentalLogo },
    { name: '1inch', logo: linchLogo },
    { name: 'bittensor', logo: bittensorLogo },
    { name: 'NGC', logo: ngcLogo },
    { name: 'Kucoin', logo: kucoinLogo },
    { name: 'MEXC', logo: mexcLogo },
    { name: 'Matter Labs', logo: matterLabsLogo },
    { name: 'NxGen', logo: nxgenLogo },
  ];

  return (
    <section id="intro" className="hero">
      <div className="hero-wrapper">
        <div className="hero-container">
          <div className="hero-content">
            <h1>
              The first stablecoin backed by DeFi positions.
            </h1>
            <p>
              Borrow USD Pro against your LP positions from leading DEXs and yield protocols and keep earning fees.
            </p>
            <form onSubmit={handleSubmit} className="hero-form">
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Join waitlist</button>
            </form>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="StableVault platform" />
          </div>
        </div>
        
        <div className="hero-partners">
          <div className="partners-label">
            <span>Backed by</span>
          </div>
          <div className="partners-scroll-container">
            <div className="partners-track">
              <div className="partners-scroll">
                {partners.map((partner, index) => (
                  <div key={`first-${index}`} className="partner-item">
                    <img src={partner.logo} alt={partner.name} />
                  </div>
                ))}
              </div>
              <div className="partners-scroll" aria-hidden="true">
                {partners.map((partner, index) => (
                  <div key={`second-${index}`} className="partner-item">
                    <img src={partner.logo} alt={partner.name} />
                  </div>
                ))}
              </div>
              <div className="partners-scroll" aria-hidden="true">
                {partners.map((partner, index) => (
                  <div key={`third-${index}`} className="partner-item">
                    <img src={partner.logo} alt={partner.name} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;