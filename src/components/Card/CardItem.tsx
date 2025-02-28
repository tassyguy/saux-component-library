import React from "react";
import "./CardItem.css";

export interface CardItem {
  title: string;
  description: string;
  imageUrl?: string;
  onClick?: () => void;
}

interface CardListProps {
  items: CardItem[];
}

const CardList: React.FC<CardListProps> = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="card-list">
      {items.map((item, index) => (
        <div
          key={index}
          onClick={item.onClick}
          className={`card-item ${item.onClick ? "clickable" : ""}`}
        >
          {item.imageUrl && (
            <img
              src={item.imageUrl}
              alt={item.title}
            />
          )}
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;