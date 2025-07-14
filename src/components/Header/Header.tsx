import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '@assets/images/header/stableunit-logo.svg';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuClosing, setIsMobileMenuClosing] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuClosing(true);
    
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflowY = '';
    
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsMobileMenuClosing(false);
    }, 300);
  };

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    } else {
      setIsMobileMenuOpen(true);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      const scrollY = window.scrollY;
      
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflowY = 'scroll';
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflowY = '';
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflowY = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    if (isMobileMenuOpen) {
      const scrollY = document.body.style.top;
      const storedScrollY = scrollY ? parseInt(scrollY || '0') * -1 : 0;
      
      setIsMobileMenuOpen(false);
      setIsMobileMenuClosing(false);
      
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflowY = '';
      
      window.scrollTo(0, storedScrollY);
      
      setTimeout(() => {
        performScroll(sectionId);
      }, 50);
    } else {
      performScroll(sectionId);
    }
  };

  const performScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    
    if (element) {
      let targetPosition: number;
      
      if (sectionId === 'usdpro') {
        const isMobile = window.innerWidth <= 1024;
        
        if (isMobile) {
          targetPosition = element.getBoundingClientRect().top + window.scrollY - 64;
        } else {
          const firstCard = element.querySelector('.scroll-card.earn-card');
          if (firstCard) {
            targetPosition = firstCard.getBoundingClientRect().top + window.scrollY - 104;
          } else {
            targetPosition = element.getBoundingClientRect().top + window.scrollY - 64;
          }
        }
      } else {
        targetPosition = element.getBoundingClientRect().top + window.scrollY - 64;
      }
      
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const absDistance = Math.abs(distance);
      const isMobile = window.innerWidth <= 768;
      
      if (absDistance < 5) {
        window.scrollTo(0, targetPosition);
        return;
      }
      
      let speed: number;
      const isScrollingUp = distance < 0;
      
      if (isMobile) {
        if (absDistance < 500) {
          speed = isScrollingUp ? 2500 : 2000;
        } else if (absDistance < 1500) {
          speed = isScrollingUp ? 2200 : 1800;
        } else {
          speed = isScrollingUp ? 1800 : 1500;
        }
      } else {
        if (absDistance < 500) {
          speed = 8000;
        } else if (absDistance < 1500) {
          speed = 6000;
        } else {
          speed = 4000;
        }
      }
      
      const minDuration = isMobile ? 200 : 150;
      const maxDuration = isMobile ? 1200 : 800;
      const duration = Math.min(Math.max(absDistance / speed * 1000, minDuration), maxDuration);
      let startTime: number | null = null;
      
      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };
      
      const animateScroll = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easedProgress = easeInOutCubic(progress);
        const newPosition = startPosition + distance * easedProgress;
        window.scrollTo(0, newPosition);
        
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };
      
      requestAnimationFrame(animateScroll);
    }
  };

  return (
    <>
      <header className="header">
        <div className="header-container desktop-header">
          <div className="logo">
            <img src={logo} alt="StableVault" />
          </div>
          <nav className="nav">
            <button onClick={() => scrollToSection('intro')}>Intro</button>
            <button onClick={() => scrollToSection('lending')}>Lending</button>
            <button onClick={() => scrollToSection('usdpro')}>USDPro</button>
            <button onClick={() => scrollToSection('dao')}>DAO</button>
            <button onClick={() => scrollToSection('faq')}>FAQ</button>
            <div className="nav-dropdown">
              <span>Community <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg></span>
            </div>
          </nav>
          <a href="https://forms.gle/MriJYcF6zUEGLbzh7" target="_blank" className="join-btn">
            Join Public Sale
          </a>
        </div>

        <div className="header-container mobile-header">
          <div className="logo">
            <img src={logo} alt="StableVault" />
          </div>
          <div className="mobile-actions">
            <a href="https://forms.gle/MriJYcF6zUEGLbzh7" target="_blank" className="join-btn mobile-join-btn">
              Join waitlist
            </a>
            <button 
              className={`hamburger-btn ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div 
            className={`mobile-menu-overlay ${isMobileMenuClosing ? 'closing' : ''}`} 
            onClick={closeMobileMenu}
          >
            <nav className={`mobile-nav ${isMobileMenuClosing ? 'closing' : ''}`}>
              <button onClick={() => scrollToSection('intro')}>Intro</button>
              <button onClick={() => scrollToSection('lending')}>Lending</button>
              <button onClick={() => scrollToSection('usdpro')}>USDPro</button>
              <button onClick={() => scrollToSection('dao')}>DAO</button>
              <button onClick={() => scrollToSection('faq')}>FAQ</button>
              <div className="nav-dropdown" onClick={closeMobileMenu}>
                <span>Community <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg></span>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;