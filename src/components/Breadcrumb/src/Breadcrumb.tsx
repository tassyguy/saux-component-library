import React from 'react';
import './Breadcrumb.css';

/**
 * Represents a single breadcrumb entry.
 * - `label`: Visible text for the breadcrumb.
 * - `href`: Optional URL. If provided and the item is not the last one,
 *   the item will be rendered as a link and `onClick` will be called
 *   instead of performing default navigation.
 */
export interface BreadcrumbItem {
  /** Visible text for the breadcrumb item */
  label: string;
  /** Optional link destination for this item */
  href?: string;
}

/**
 * Props for the `Breadcrumb` component.
 *
 * - `items`: Ordered list of breadcrumb items (first -> current/last).
 * - `separator`: Text or symbol displayed between items (defaults to `/`).
 * - `onClick`: Optional click handler called with the clicked item; the
 *   component prevents default navigation for link items so consumers can
 *   handle routing themselves.
 * - `truncate`: When true, applies truncation styles for long breadcrumb lists.
 * - `boldCurrent`: When true, renders the current (last) item with stronger weight.
 * - `className`: Additional class names to apply to the root `nav` element.
 */
export interface BreadcrumbProps {
  /** Ordered list of breadcrumb items (first -> last/current) */
  items: BreadcrumbItem[];
  /** Separator string shown between items (default: '/') */
  separator?: string;
  /** Click handler for link items; receives the clicked `BreadcrumbItem` */
  onClick?: (item: BreadcrumbItem) => void;
  /** Apply truncation styling when space is limited (default: false) */
  truncate?: boolean;
  /** Render the current (last) item in bold (default: false) */
  boldCurrent?: boolean;
  /** Additional className(s) applied to the root element */
  className?: string;
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
