import React, { JSX } from 'react';
import './Header.css';

export interface HeaderProps {
  text: string;
  level: 1 | 2 | 3 | 4 | 5;
  color?: string;
  className?: string;
}

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
