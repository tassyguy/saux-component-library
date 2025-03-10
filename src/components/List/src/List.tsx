import React from 'react';
import { useTheme } from '../../Theme/src/ThemeProvider';
import './List.css';

export interface ListItem {
  label: string;
  key?: string | number;
}

export interface ListProps {
  items: ListItem[];
  ordered?: boolean;
  className?: string;
  style?: React.CSSProperties;
  renderItem?: (item: ListItem, index: number) => React.ReactNode;
  emptyMessage?: string;
}

const List: React.FC<ListProps> = ({
  items,
  ordered = false,
  className = '',
  style,
  renderItem,
  emptyMessage = 'No items available',
}) => {
  const theme = useTheme(); // Get theme values

  if (!items || items.length === 0) return <p>{emptyMessage}</p>;

  const ListTag = ordered ? 'ol' : 'ul';

  return (
    <ListTag className={`list ${className}`} style={style}>
      {items.map((item, index) => (
        <li key={item.key || index}>
          {renderItem ? renderItem(item, index) : item.label}
        </li>
      ))}
    </ListTag>
  );
};

export default List;
