import React from "react";

interface CardItem {
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
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      {items.map((item, index) => (
        <div
          key={index}
          onClick={item.onClick}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
            width: "300px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            cursor: item.onClick ? "pointer" : "default",
          }}
        >
          {item.imageUrl && (
            <img
              src={item.imageUrl}
              alt={item.title}
              style={{ width: "100%", borderRadius: "4px", marginBottom: "8px" }}
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
