import React, { useState, useRef, useEffect } from 'react';
import './DropdownMenu.css';
import { UnorderedList } from '../../List';
import { ListItem } from '../../List';
import Button from '../../Button';

export interface DropdownMenuItem {
  value: string;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface DropdownMenuProps {
  label: string;
  items: DropdownMenuItem[];
  disabled?: boolean;
  align?: 'left' | 'right' | 'center';
  fullWidth?: boolean;
  className?: string; // Allow users to apply spacing styles
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  label,
  items,
  disabled = false,
  align = 'left',
  fullWidth = false,
  className = '',
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    if (!disabled) setOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleItemClick = (item: DropdownMenuItem) => {
    if (item.onClick && !item.disabled) item.onClick();
    setOpen(false);
  };

  const listItems: ListItem[] = items.map((item) => ({
    key: item.value,
    label: item.label,
    icon: item.icon,
    disabled: item.disabled,
    onClick: item.onClick,
  }));

  return (
    <div
      className={`dropdown-menu ${fullWidth ? 'dropdown-menu--fullWidth' : ''} ${className}`.trim()}
      ref={containerRef}
    >
      <Button
        label={label}
        onClick={toggleOpen}
        disabled={disabled}
        variant="primary"
        className="dropdown-menu__trigger"
        icon={<span className="dropdown-menu__arrow">{open ? '▲' : '▼'}</span>}
      />
      {open && (
        <UnorderedList
          className={`dropdown-menu__list dropdown-menu--${align}`.trim()}
          items={listItems}
        />
      )}
    </div>
  );
};

export default DropdownMenu;
