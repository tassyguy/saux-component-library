import React from 'react';
import './ProgressBar.css';

export interface ProgressBarProps {
  value: number; // Current progress value (0-100)
  max?: number; // Maximum progress value (default is 100)
  label?: string; // Optional label to display
  variant?: 'primary' | 'success' | 'warning' | 'error'; // Style variants
  striped?: boolean; // Whether the progress bar is striped
  animated?: boolean; // Whether the progress bar is animated
  className?: string; // Additional custom class names
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  label,
  variant = 'primary',
  striped = false,
  animated = false,
  className = '',
}) => {
  const percentage = Math.min((value / max) * 100, 100); // Ensure percentage doesn't exceed 100

  return (
    <div className={`progress-bar ${className}`.trim()}>
      <div
        className={`progress-bar__fill progress-bar--${variant} ${
          striped ? 'progress-bar--striped' : ''
        } ${animated ? 'progress-bar--animated' : ''}`.trim()}
        style={{ width: `${percentage}%` }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        {label && <span className="progress-bar__label">{label}</span>}
      </div>
    </div>
  );
};

export default ProgressBar;
