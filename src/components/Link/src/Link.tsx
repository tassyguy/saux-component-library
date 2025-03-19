import React from 'react';
import { useTheme } from '../../Theme/src/ThemeProvider';
import './Link.css';

export interface LinkProps {
  label?: string;
  href: string;
  onClick?: () => void;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ariaLabel?: string;
}

const Link: React.FC<LinkProps> = ({
  label,
  href,
  onClick,
  target,
  rel,
  className = '',
  style,
  children,
  ariaLabel,
}) => {
  const theme = useTheme(); // Get theme values

  return (
    <a
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      className={`link ${className}`.trim()}
      style={style}
      aria-label={ariaLabel}
    >
      {children || label}
    </a>
  );
};

export default Link;
