import React from 'react';
import './Chip.css';

export interface ChipProps {
  label: string;
  onRemove?: () => void; // Optional callback for removable chips
  icon?: React.ReactNode; // Optional icon to display
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  className?: string;
}

const Chip: React.FC<ChipProps> = ({
  label,
  onRemove,
  icon,
  variant = 'default',
  className = '',
}) => {
  return (
    <div className={`chip chip--${variant} ${className}`.trim()}>
      {icon && <span className="chip__icon">{icon}</span>}
      <span className="chip__label">{label}</span>
      {onRemove && (
        <button
          className="chip__remove"
          onClick={onRemove}
          aria-label={`Remove ${label}`}
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default Chip;
