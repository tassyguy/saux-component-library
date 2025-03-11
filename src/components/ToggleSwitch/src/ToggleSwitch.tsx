import React, { useState } from 'react';
import './ToggleSwitch.css';

export interface ToggleSwitchProps {
  /** Indicates whether the switch is on or off */
  isOn?: boolean;
  /** Callback triggered when the switch is toggled */
  onToggle?: (newState: boolean) => void;
  /** Optional flag to disable the switch */
  disabled?: boolean;
  /** Label text for accessibility */
  label?: string;
  /** Custom size: small, medium, large */
  size?: 'small' | 'medium' | 'large';
  /** Color variant: primary, secondary, success, warning, error */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  isOn = false,
  onToggle,
  disabled = false,
  label,
  size = 'medium',
  variant = 'primary',
}) => {
  const [toggled, setToggled] = useState(isOn);

  const handleToggle = () => {
    if (disabled) return;
    const newState = !toggled;
    setToggled(newState);
    onToggle?.(newState);
  };

  const buttonClasses =
    `toggle-switch toggle-switch--${size} toggle-switch--${variant} ${toggled ? 'on' : ''} ${
      disabled ? 'disabled' : ''
    }`.trim();

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={handleToggle}
      className={buttonClasses}
      aria-label={label || 'Toggle Switch'}
      aria-pressed={toggled}
    >
      <span className="toggle-switch__handle" />
    </button>
  );
};

export default ToggleSwitch;
