import React from 'react';
import './HandCard.css';

interface HandCardProps {
    title: string;
    description: string;
    image: string;
    alt: string;
    children?: React.ReactNode;
}

const HandCard: React.FC<HandCardProps> = ({
    title,
    description,
    image,
    alt,
    children,
}) => (
    <div className="hand-card" style={{ backgroundImage: `url(${image})` }}>
        <h3 className="hand-card-title">{title}</h3>
        <p className="hand-card-description">{description}</p>
        {children}
    </div>
);

export default HandCard; 