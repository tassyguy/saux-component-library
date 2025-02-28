import React from "react";

export interface ListItem {
  label: string;
}

export interface UnorderedListProps {
  items: ListItem[];
}

const UnorderedList: React.FC<UnorderedListProps> = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item.label}</li>
      ))}
    </ul>
  );
};

export default UnorderedList;
