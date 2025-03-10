import React from "react";
import "./Breadcrumb.css";

export interface BreadcrumbItem {
  /** The text to display for this breadcrumb */
  label: string;
  /** Optional URL for navigation */
  href?: string;
}

export interface BreadcrumbProps {
  /** Array of breadcrumb items */
  items?: BreadcrumbItem[];
  /** Optional additional CSS class */
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = "" }) => {
  return (
    <nav className={`breadcrumb ${className}`} aria-label="Breadcrumb">
      <ol className="breadcrumb__list">
        {items?.map((item, index) => (
          <li key={index} className="breadcrumb__item">
            {item.href ? (
              <a href={item.href} className="breadcrumb__link">
                {item.label}
              </a>
            ) : (
              <span className="breadcrumb__current">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className="breadcrumb__separator">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
