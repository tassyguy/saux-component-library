import React from 'react';
import './CheckRadio.css';

export interface CheckRadioProps {
  /** Type of control: "checkbox" or "radio" */
  type: 'checkbox' | 'radio';
  /** Whether the control is checked */
  checked: boolean;
  /** Callback triggered when the control changes */
  onChange: () => void;
  /** Optional flag to disable the control */
  disabled?: boolean;
  /** Optional label to display next to the control */
  label?: string;
  /** Name for radio group */
  name?: string;
  /** Size of the control: small, medium, large */
  size?: 'small' | 'medium' | 'large';
  /** Color variant of the control */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  /** Additional class name for custom styling */
  className?: string;
}

const CheckRadio: React.FC<CheckRadioProps> = ({
  type,
  checked,
  onChange,
  disabled = false,
  label,
  name,
  size = 'medium',
  variant = 'primary',
  className = '', // Allow className for custom styling
}) => {
  const containerClasses =
    [
      'check-radio',
      `check-radio--${size}`,
      `check-radio--${variant}`,
      type === 'radio' ? 'check-radio--radio' : '',
      disabled ? 'disabled' : '',
      className, // Apply custom className
    ]
      .filter(Boolean)
      .join(' ');

  return (
    <label className={containerClasses}>
      <input
        type={type}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        name={name}
        className="check-radio__input"
      />
      <span className="check-radio__box" aria-hidden="true" />
      {label && <span className="check-radio__label">{label}</span>}
    </label>
  );
};

export default CheckRadio;
