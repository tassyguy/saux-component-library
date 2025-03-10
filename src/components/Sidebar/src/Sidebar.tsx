import React from "react";
import "./Sidebar.css";

export interface SidebarItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface SidebarProps {
  /** Optional title to display at the top of the sidebar */
  title?: string;
  /** Array of navigation items */
  items: SidebarItem[];
  /** Optional additional CSS classes */
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ title, items, className = "" }) => {
  return (
    <aside className={`sidebar ${className}`.trim()}>
      {title && <div className="sidebar__header">{title}</div>}
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          {items.map((item, index) => (
            <li key={index} className="sidebar__item">
              {item.href ? (
                <a
                  href={item.href}
                  className="sidebar__link"
                  onClick={item.onClick}
                >
                  {item.label}
                </a>
              ) : (
                <button className="sidebar__link" onClick={item.onClick}>
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
