import React, { JSX } from 'react';
import './Header.css';

/**
 * Props for the `Header` component.
 *
 * Configure the heading level, text content, color, and styling.
 */
export interface HeaderProps {
  /** The text content displayed in the header. */
  text: string;
  /**
   * HTML heading level (1-5).
   * - 1 = h1 (largest, typically page title)
   * - 5 = h5 (smallest)
   */
  level: 1 | 2 | 3 | 4 | 5;
  /** Text color as a CSS value. Defaults to 'var(--text-color)'. */
  color?: string;
  /** Additional class name(s) for custom styling. */
  className?: string;
}

/**
 * `Header` — semantic heading element with configurable level, color, and styling.
 *
 * Renders the appropriate HTML heading tag (h1–h5) based on the `level` prop.
 * Accepts a `HeaderProps` object to customize text, color, and CSS class.
 */
const Header: React.FC<HeaderProps> = ({
  text,
  level,
  color = 'var(--text-color)',
  className = '',
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`header ${className}`.trim()} style={{ color }}>
      {text}
    </Tag>
  );
};

export default Header;
