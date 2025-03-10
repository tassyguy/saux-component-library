import React, { useState, useRef, useEffect } from "react";
import "./DropdownMenu.css";

export interface DropdownMenuItem {
  value: string;
  label: string;
  onClick?: () => void;
}

export interface DropdownMenuProps {
  /** The text to display on the trigger button */
  label: string;
  /** Array of menu items */
  items: DropdownMenuItem[];
  /** Disable the menu */
  disabled?: boolean;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  label,
  items,
  disabled = false,
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    if (!disabled) setOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleItemClick = (item: DropdownMenuItem) => {
    if (item.onClick) item.onClick();
    setOpen(false);
  };

  return (
    <div className="dropdown-menu" ref={containerRef}>
      <button
        type="button"
        className="dropdown-menu__trigger"
        onClick={toggleOpen}
        disabled={disabled}
      >
        {label}
        <span className="dropdown-menu__arrow">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <ul className="dropdown-menu__list">
          {items.map((item) => (
            <li
              key={item.value}
              className="dropdown-menu__item"
              onClick={() => handleItemClick(item)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
