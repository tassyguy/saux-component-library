import React from 'react';
import { useTheme } from '../../Theme/src/ThemeProvider';
import './Button.css';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary'; // Add variant prop
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
}) => {
  const { theme } = useTheme(); // Get theme values

  return (
    <button
      onClick={onClick}
      className={`button ${variant}`} // Apply variant class
    >
      {label}
    </button>
  );
};

export default Button;
