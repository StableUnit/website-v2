import React from 'react';
import './MarketStatistics.css';
import chartImage from '@assets/images/market-statistics/market-growth-chart.jpg';

const MarketStatistics: React.FC = () => {
  return (
    <section className="market-statistics">
      <div className="market-statistics-container">
          <div className="market-header">
            <h2>Join growing market</h2>
            <div className="market-content">
              <p>
                Over <span className="highlight">30% of ETH</span> is staked, with{' '}
                <span className="highlight">roughly half</span> of it via yield-bearing tokens (LSTs).
                In contrast, under <b>5%</b> of stablecoins earn yield. With projections from <span className="highlight">Goldman
                Sachs</span> and <span className="highlight">Citi</span> expecting
                stablecoins to surpass <b>$1T</b> in five years, the market for yield-bearing assets is set to grow rapidly.
              </p>
              <a href="#dao" className="get-involved-link desktop-button">
                Get involved 
                <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="#00B786" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="chart-section">
            <div className="chart-container">
              <img src={chartImage} alt="Market growth chart" className="chart-image" />
            </div>
            <a href="#dao" className="get-involved-link mobile-button">
              Get involved 
              <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="#00B786" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <div className="chart-legend">
              <div className="legend-item">
                <span className="legend-line"></span>
                <span className="legend-text">Proportion of yield bearing stablecoins out of all stablecoins</span>
              </div>
              <div className="legend-item">
                <div className="legend-lines">
                  <span className="legend-line"></span>
                  <span className="legend-line"></span>
                </div>
                <span className="legend-text">Project based on the growth of the proportion of ETH in liquid staking protocols</span>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default MarketStatistics;