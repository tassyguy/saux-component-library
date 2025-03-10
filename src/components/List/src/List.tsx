// filepath: /c:/Users/simonp/Documents/Extra/saux-component-library/src/components/List/List.tsx
import React from 'react';
import { useTheme } from '../../Theme/src/ThemeProvider';
import './List.css';

export interface ListItem {
  label: string;
}

export interface ListProps {
  items: ListItem[];
  ordered?: boolean;
}

const List: React.FC<ListProps> = ({ items, ordered = false }) => {
  const theme = useTheme(); // Get theme values

  if (!items || items.length === 0) return null;

  const ListTag = ordered ? 'ol' : 'ul';

  return (
    <ListTag className="list">
      {items.map((item, index) => (
        <li key={index}>{item.label}</li>
      ))}
    </ListTag>
  );
};

export default List;
