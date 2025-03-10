import React, { useEffect } from 'react';
import { useTheme } from '../../Theme/src/ThemeProvider';
import './Alert.css';

export type AlertType = 'success' | 'error' | 'warning' | 'info';

export interface AlertProps {
  /** The alert message to display */
  message: string;
  /** The type of alert determines its styling (defaults to "info") */
  type?: AlertType;
  /** Whether the alert is dismissible (shows a close button) */
  dismissible?: boolean;
  /** Callback invoked when the alert is dismissed */
  onClose?: () => void;
  /** Optional icon to display in the alert */
  icon?: React.ReactNode;
  /** Custom class name for additional styling */
  className?: string;
  /** Inline styles for the alert */
  style?: React.CSSProperties;
  /** Optional title to display in the alert */
  title?: string;
  /** Duration in milliseconds to automatically dismiss the alert */
  duration?: number;
  /** Accessible label for the close button */
  ariaLabel?: string;
}

const Alert: React.FC<AlertProps> = ({
  message,
  type = 'info',
  dismissible = false,
  onClose,
  icon,
  className = '',
  style,
  title,
  duration,
  ariaLabel = 'Close alert',
}) => {
  const theme = useTheme(); // Get theme values

  useEffect(() => {
    if (duration && onClose) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  return (
    <div className={`alert alert--${type} ${className}`} style={style}>
      {icon && <span className="alert__icon">{icon}</span>}
      <div className="alert__content">
        {title && <strong className="alert__title">{title}</strong>}
        <span className="alert__message">{message}</span>
      </div>
      {dismissible && (
        <button
          className="alert__close"
          onClick={onClose}
          aria-label={ariaLabel}
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;
