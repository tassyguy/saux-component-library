import React from "react";
import "./Alert.css";

export type AlertType = "success" | "error" | "warning" | "info";

export interface AlertProps {
  /** The alert message to display */
  message: string;
  /** The type of alert determines its styling (defaults to "info") */
  type?: AlertType;
  /** Whether the alert is dismissible (shows a close button) */
  dismissible?: boolean;
  /** Callback invoked when the alert is dismissed */
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({
  message,
  type = "info",
  dismissible = false,
  onClose,
}) => {
  return (
    <div className={`alert alert--${type}`}>
      <span className="alert__message">{message}</span>
      {dismissible && (
        <button
          className="alert__close"
          onClick={onClose}
          aria-label="Close alert"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;
