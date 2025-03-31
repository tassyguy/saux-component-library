import React, { useState, useRef, useEffect } from 'react';
import './DropdownMenu.css';

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
  className?: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  label,
  items,
  disabled = false,
  align = 'left',
  fullWidth = false,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    if (!disabled) {
      if (isOpen) {
        setIsAnimating(true); // Start fade-out animation
        setTimeout(() => {
          setIsOpen(false);
          setIsAnimating(false); // Reset animation state
        }, 300); // Match the animation duration
      } else {
        setIsOpen(true);
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        if (isOpen) {
          toggleOpen();
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div
      className={`dropdown-menu ${fullWidth ? 'dropdown-menu--fullWidth' : ''}`}
      ref={containerRef}
    >
      <button
        className="dropdown-menu__trigger"
        onClick={toggleOpen}
        disabled={disabled}
      >
        {label}
        <span className="dropdown-menu__arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <ul
          className={`dropdown-menu__list ${
            isAnimating
              ? 'dropdown-menu__list--hiding'
              : 'dropdown-menu__list--visible'
          } dropdown-menu--${align}`}
        >
          {items.map((item) => (
            <li
              key={item.value}
              className={`dropdown-menu__item ${
                item.disabled ? 'dropdown-menu__item--disabled' : ''
              }`}
              onClick={!item.disabled ? item.onClick : undefined}
            >
              {item.icon && (
                <span className="dropdown-menu__icon">{item.icon}</span>
              )}
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
