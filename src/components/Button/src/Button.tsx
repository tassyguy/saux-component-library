import React from 'react';
import { useTheme } from '../../Theme/src/ThemeProvider';
import './Button.css';

/**
 * Button component props
 */
export interface ButtonProps {
  /** The text to display inside the button */
  label: string;
  /** Callback function to handle button click */
  onClick?: () => void;
  /** The variant of the button */
  variant?: 'primary' | 'secondary';
  /** Whether the button is disabled */
  disabled?: boolean;
  /** The size of the button */
  size?: 'small' | 'medium' | 'large';
  /** The type of the button */
  type?: 'button' | 'submit' | 'reset';
  /** Optional icon to display inside the button */
  icon?: React.ReactNode;
  /** The position of the icon inside the button */
  iconPosition?: 'left' | 'right';
  /** Whether the button should take up the full width of its container */
  fullWidth?: boolean;
  /** Additional class name for custom styling */
  className?: string;
  /** Inline styles for the button */
  style?: React.CSSProperties;
  /** Whether the button is in a loading state */
  loading?: boolean;
  /** Tooltip text to display on hover */
  tooltip?: string;
  /** Accessible label for the button */
  ariaLabel?: string;
}

/**
 * Button component
 *
 * @param {ButtonProps} props - The props for the Button component
 * @returns {JSX.Element} The rendered Button component
 */
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
