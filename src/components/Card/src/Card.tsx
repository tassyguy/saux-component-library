import React from 'react';
import { useTheme } from '../../Theme/src/ThemeProvider';
import './Card.css';

export interface CardItem {
  title: string;
  description: string;
  imageUrl?: string;
  onClick?: () => void;
  className?: string; // Allow className for individual card items
}

export interface CardProps {
  items: CardItem[];
  className?: string; // Allow className for the entire card list
}

const Card: React.FC<CardProps> = ({ items, className = '' }) => {
  const theme = useTheme(); // Get theme values

  if (!items || items.length === 0) return null;

  return (
    <div className={`card-list ${className}`.trim()}>
      {items.map((item, index) => (
        <div
          key={index}
          onClick={item.onClick}
          className={`card-item ${item.onClick ? 'clickable' : ''} ${item.className || ''}`.trim()}
        >
          {item.imageUrl && <img src={item.imageUrl} alt={item.title} />}
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
