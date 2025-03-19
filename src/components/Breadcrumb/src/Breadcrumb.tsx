import React from 'react';
import './Breadcrumb.css';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: string;
  onClick?: (item: BreadcrumbItem) => void;
  truncate?: boolean;
  boldCurrent?: boolean;
  className?: string; // Allow className for custom styling
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = '/',
  onClick,
  truncate = false,
  boldCurrent = false,
  className = '', // Default empty class
}) => {
  return (
    <nav className={`breadcrumb ${className}`.trim()}>
      <ul className={`breadcrumb__list ${truncate ? 'breadcrumb--truncate' : ''}`.trim()}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="breadcrumb__item">
              {item.href && !isLast ? (
                <a
                  href={item.href}
                  className="breadcrumb__link"
                  onClick={(e) => {
                    e.preventDefault();
                    onClick?.(item);
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <span className={`breadcrumb__current ${boldCurrent ? 'breadcrumb--bold' : ''}`.trim()}>
                  {item.label}
                </span>
              )}
              {!isLast && <span className="breadcrumb__separator">{separator}</span>}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
