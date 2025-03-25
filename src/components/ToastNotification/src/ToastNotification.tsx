import React, { useEffect } from 'react';
import './ToastNotification.css';

export interface ToastNotificationProps {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number; // Duration in milliseconds
  onClose: () => void;
}

const ToastNotification: React.FC<ToastNotificationProps> = ({
  message,
  type = 'info',
  duration = 3000,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [duration, onClose]);

  return (
    <div className={`toast-notification toast-notification--${type}`}>
      <span className="toast-notification__message">{message}</span>
      <button
        className="toast-notification__close"
        onClick={onClose}
        aria-label="Close notification"
      >
        &times;
      </button>
    </div>
  );
};

export default ToastNotification;
