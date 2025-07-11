import React from 'react';
import './HandCardsCTA.css';

interface HandCardsCTAProps {
    className?: string;
    href: string;
    buttonText?: string;
}

const HandCardsCTA: React.FC<HandCardsCTAProps> = ({ className = '', href, buttonText = 'Get USD Pro' }) => (
    <div className={`bottom-cta ${className}`}>
        <a href={href} className="get-usd-pro-btn" target="_blank">
            {buttonText}
            <svg className="btn-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </a>
    </div>
);

export default HandCardsCTA; 