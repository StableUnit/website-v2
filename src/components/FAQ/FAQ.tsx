import React, { useState, useRef } from 'react';
import './FAQ.css';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "What is StableUnit and USD Pro?",
      answer: <div>StableUnit is a next-generation decentralized stablecoin platform that lets users borrow a yield-bearing stablecoin against various crypto assets. Its primary stablecoin is <b>USD Pro</b>, which is pegged 1:1 to the US Dollar. Unlike centralized stablecoins (which are backed by cash reserves in banks), USD Pro is <b>over-collateralized</b> by crypto assets on-chain and cannot be frozen by any authority. The StableUnit protocol automatically distributes revenue (interest, yield, fees) to USD Pro holders, so your USD Pro balance grows over time in your wallet. In short, StableUnit offers a decentralized, transparent, and interest-bearing alternative to traditional stablecoins.</div>
    },
    {
      question: "Who is behind StableUnit?",
      answer: <div>StableUnit was created by a team of experienced DeFi builders and crypto industry veterans. The founding team includes smart contract engineers who have previously developed and launched DeFi protocols (including stablecoin platforms) that handled over $1 billion in stablecoin volume. Early contributors and advisors are alumni of top DeFi projects and are passionate about pushing the boundaries of stablecoin design. While the core development was initiated by this team (often referred to as the StableUnit core contributors), control of the project is handed off to the community via the StableUnitDAO. The team’s vision is to <b>“disrupt stablecoins and the future of money”</b> by delivering a stablecoin that is capital efficient, yield-generating, and censorship-resistant.</div>,
    },
    {
      question: "What blockchain networks will StableUnit operate on?",
      answer: <div>StableUnit is designed to be <b>multi-chain from day one</b>. The protocol can be deployed on any EVM-compatible blockchain. The governance and SuDAO token are initially launched on Polygon (an Ethereum sidechain) for efficiency, but USD Pro and the StableUnit smart contracts will also roll out on Ethereum mainnet and other popular chains (like Arbitrum, Optimism, BSC, etc.) based on community demand. Because each instance of StableUnit is over-collateralized on its native chain, USD Pro on different chains remains fully backed without relying on cross-chain bridges (no wrapped tokens needed). This native multi-chain support means users can access USD Pro and borrow against assets on the chain of their choice, while the peg and security are maintained independently on each network.</div>,
    },
    {
      question: "How USD Pro earn Yield?",
      answer: <div>
        When a user wants liquidity, they <b>deposit collateral</b> (e.g., ETH, USDC, or an LP token) into a StableUnit vault
        to <b>borrow USD Pro</b>.<br/>
        At that moment StableUnit offers a <b>“Boost collateral”</b> option. And If the user accepts, the
        protocol instantly routes the collateral into a high-grade, on-chain strategy (staking ETH, restaking, or
        farming an LP) so the collateral itself starts <b>earning extra yield.</b><br/>
        That is the first revenue stream of the StableUnit protocol: <b>Yield Spread</b> – the portion of strategy yield
        captured when users choose the Boosted path.<br/>
        The second one is <b>Stability Fees</b> – interest paid by all borrowers on their outstanding USD Pro debt.<br/>
        And the third is <b>Liquidation Surplus</b> – when a position is liquidated, any collateral left after repaying debt
        and fees is swept into protocol revenue.<br/>
        All revenue accumulates in real time and is <b>rebated to USD Pro holders</b> every block: the token’s supply (or
        per-token index) increases continuously, so simply holding USD Pro causes the balance in a user’s wallet to
        rise.
      </div>,
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    };
  };

  const handleTouchEnd = (e: React.TouchEvent, index: number) => {
    if (!touchStartRef.current) {
      toggleItem(index);
      return;
    }

    const touchEnd = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    };

    const deltaX = Math.abs(touchEnd.x - touchStartRef.current.x);
    const deltaY = Math.abs(touchEnd.y - touchStartRef.current.y);

    if (deltaX < 10 && deltaY < 10) {
      e.preventDefault();
      e.stopPropagation();
      toggleItem(index);
    }

    touchStartRef.current = null;
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently asked questions</h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <div 
                className="faq-question"
                onClick={() => toggleItem(index)}
                onTouchStart={handleTouchStart}
                onTouchEnd={(e) => handleTouchEnd(e, index)}
              >
                <span>{item.question}</span>
                <span className={`faq-icon ${openItems.includes(index) ? 'open' : ''}`}>
                  +
                </span>
              </div>
              <div className={`faq-answer ${openItems.includes(index) ? 'open' : ''}`}>
                <div className="faq-answer-content">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;