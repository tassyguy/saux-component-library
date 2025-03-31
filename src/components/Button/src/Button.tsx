import React, { useRef } from 'react';
import { useTheme } from '../../Theme/src/ThemeProvider';
import './Button.css';

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

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;

    const button = buttonRef.current;
    if (button) {
      button.classList.add('clicked');
      setTimeout(() => button.classList.remove('clicked'), 150);
    }

    onClick?.();
  };

  const classNames = [
    'button',
    `button--${variant}`,
    `button--${size}`,
    fullWidth ? 'button--full-width' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={classNames}
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
          {icon && iconPosition === 'left' && <span className="button-icon">{icon}</span>}
          {label}
          {icon && iconPosition === 'right' && <span className="button-icon">{icon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
