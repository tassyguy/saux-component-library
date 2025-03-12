/*import React from 'react';
import { useTheme } from '../../Theme/src/ThemeProvider';
import './List.css';

export interface ListItem {
  key?: string | number;
  label: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
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

  if (!items || items.length === 0)
    return <p className="list-empty">{emptyMessage}</p>;

  const ListTag = ordered ? 'ol' : 'ul';

  return (
    <ListTag className={`list ${className}`} style={style}>
      {items.map((item, index) => (
        <li
          key={item.key || index}
          className={`list-item ${item.disabled ? 'list-item--disabled' : ''}`.trim()}
          onClick={!item.disabled ? item.onClick : undefined}
        >
          {item.icon && <span className="list-item-icon">{item.icon}</span>}
          {renderItem ? renderItem(item, index) : item.label}
        </li>
      ))}
    </ListTag>
  );
};

export default List;
*/

import React from 'react';
import { useTheme } from '../../Theme/src/ThemeProvider';
import './List.css';

export interface ListItem {
  key?: string | number;
  label: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
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

  if (!items || items.length === 0)
    return <p className="list-empty">{emptyMessage}</p>;

  const ListTag = ordered ? 'ol' : 'ul';

  return (
    <ListTag className={`list ${className}`} style={style}>
      {items.map((item, index) => (
        <li
          key={item.key || index}
          className={`list-item ${item.disabled ? 'list-item--disabled' : ''}`.trim()}
          onClick={!item.disabled ? item.onClick : undefined}
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }} // Ensure alignment
        >
          {/* Render a bullet for unordered lists if no icon is provided */}
          {!item.icon && !ordered && <span className="list-bullet">•</span>}
          {/* Render the number for ordered lists if no icon is provided */}
          {!item.icon && ordered && <span className="list-number">{index + 1}.</span>}
          {item.icon && <span className="list-item-icon">{item.icon}</span>}
          {renderItem ? renderItem(item, index) : item.label}
        </li>
      ))}
    </ListTag>
  );
};

export default List;
