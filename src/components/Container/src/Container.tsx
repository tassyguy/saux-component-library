import React from 'react';
import './Container.css';

export interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: string;
  backgroundColor?: string;
  borderRadius?: string;
  shadow?: 'small' | 'medium' | 'large' | 'none';
  fullHeight?: boolean;
  className?: string; // Allow users to apply margin and padding directly
}

const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = '1200px',
  backgroundColor = 'var(--background-color)',
  borderRadius = '0',
  shadow = 'none',
  fullHeight = false,
  className = '', // Default empty class
}) => {
  const boxShadowStyles = {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.15)',
    large: '0 6px 12px rgba(0, 0, 0, 0.2)',
    none: 'none',
  };

  return (
    <div
      className={`container ${className}`.trim()} // Ensuring className is properly applied
      style={{
        maxWidth,
        backgroundColor,
        borderRadius,
        boxShadow: boxShadowStyles[shadow],
        height: fullHeight ? '100vh' : 'auto',
      }}
    >
      {children}
    </div>
  );
};

export default Container;
