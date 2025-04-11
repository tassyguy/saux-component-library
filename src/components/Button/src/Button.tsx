import React, { useRef } from 'react';
import { useTheme } from '@saux/theme';
import './Button.css';

/**
 * Button component props
 */
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

/**
 * Button component
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
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseDown = () => {
    if (buttonRef.current) {
      buttonRef.current.classList.add('pressed');
    }
  };

  const handleMouseUpOrLeave = () => {
    const button = buttonRef.current;
    if (button) {
      button.classList.remove('pressed');
      button.classList.add('clicked');

      setTimeout(() => {
        button.classList.remove('clicked');
      }, 150);
    }
  };

  const handleClick = () => {
    if (disabled || loading) return;
    onClick?.();
  };

  return (
    <button
      ref={buttonRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUpOrLeave}
      onClick={handleClick}
      className={[
        'button',
        `button--${variant}`,
        `button--${size}`,
        fullWidth ? 'button--full-width' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
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
