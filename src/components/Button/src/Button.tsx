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
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  className?: string;
  style?: React.CSSProperties;
  loading?: boolean;
  tooltip?: string;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  disabled = false,
  size = 'medium',
  type = 'button',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  className = '',
  style,
  loading = false,
  tooltip,
  ariaLabel,
}) => {
  const { theme } = useTheme();

  return (
    <button
      onClick={onClick}
      className={`button ${variant} ${size} ${fullWidth ? 'full-width' : ''} ${className}`}
      disabled={disabled || loading}
      type={type}
      style={style}
      aria-label={ariaLabel}
      title={tooltip}
    >
      {loading ? (
        <span className="button-spinner">Loading...</span>
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <span className="button-icon">{icon}</span>
          )}
          {label}
          {icon && iconPosition === 'right' && (
            <span className="button-icon">{icon}</span>
          )}
        </>
      )}
    </button>
  );
};

export default Button;
