import React from 'react';
import './HandCardsCTA.css';

interface HandCardsCTAProps {
    className?: string;
    buttonText?: string;
}

const HandCardsCTA: React.FC<HandCardsCTAProps> = ({ className = '', buttonText = 'Get USD Pro' }) => (
    <div className={`bottom-cta ${className}`}>
        <button className="get-usd-pro-btn">
            {buttonText}
            <svg className="btn-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    </div>
);

export default HandCardsCTA; 