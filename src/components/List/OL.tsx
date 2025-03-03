// filepath: /c:/Users/simonp/Documents/Extra/saux-component-library/src/components/List/OL.tsx
import React from "react";
import List, { ListItem } from "./List";

export interface OrderedListProps {
  items: ListItem[];
}

const OrderedList: React.FC<OrderedListProps> = ({ items }) => {
  return <List items={items} ordered={true} />;
};

export default OrderedList;