// filepath: /c:/Users/simonp/Documents/Extra/saux-component-library/src/components/Card/CardItem.tsx
import React from 'react';
import { useTheme } from '../../Theme/src/ThemeProvider';
import './Card.css';

export interface CardItem {
  title: string;
  description: string;
  imageUrl?: string;
  onClick?: () => void;
}

export interface CardProps {
  items: CardItem[];
}

const Card: React.FC<CardProps> = ({ items }) => {
  const theme = useTheme(); // Get theme values

  if (!items || items.length === 0) return null;

  return (
    <div className="card-list">
      {items.map((item, index) => (
        <div
          key={index}
          onClick={item.onClick}
          className={`card-item ${item.onClick ? 'clickable' : ''}`}
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
