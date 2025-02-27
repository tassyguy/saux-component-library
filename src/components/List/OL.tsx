import React from "react";

interface ListItem {
  label: string;
}

interface OrderedListProps {
  items: ListItem[];
}

const OrderedList: React.FC<OrderedListProps> = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <ol>
      {items.map((item, index) => (
        <li key={index}>{item.label}</li>
      ))}
    </ol>
  );
};

export default OrderedList;
