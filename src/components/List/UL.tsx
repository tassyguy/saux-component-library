// filepath: /c:/Users/simonp/Documents/Extra/saux-component-library/src/components/List/UL.tsx
import React from "react";
import List, { ListItem } from "./List";

export interface UnorderedListProps {
  items: ListItem[];
}

const UnorderedList: React.FC<UnorderedListProps> = ({ items }) => {
  return <List items={items} ordered={false} />;
};

export default UnorderedList;