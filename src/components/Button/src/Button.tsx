import React from 'react';
import { useTheme } from '../../Theme/src/ThemeProvider';
import './Button.css';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  disabled = false,
  size = 'medium',
  type = 'button',
  icon,
  fullWidth = false,
  className = '',
  style,
}) => {
  const { theme } = useTheme();

  return (
    <button
      onClick={onClick}
      className={`button ${variant} ${size} ${fullWidth ? 'full-width' : ''} ${className}`}
      disabled={disabled}
      type={type}
      style={style}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
