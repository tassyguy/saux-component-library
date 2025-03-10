import React from 'react';
import './ToggleSwitch.css';

export interface ToggleSwitchProps {
  /** Indicates whether the switch is on or off */
  isOn: boolean;
  /** Callback triggered when the switch is toggled */
  onToggle: () => void;
  /** Optional flag to disable the switch */
  disabled?: boolean;
  label?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  isOn,
  onToggle,
  disabled = false,
  label,
}) => {
  const buttonClasses = `toggle-switch ${isOn ? 'on' : ''} ${
    disabled ? 'disabled' : ''
  }`.trim();

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onToggle}
      className={buttonClasses}
      aria-label={label || 'Toggle Switch'}
      aria-pressed={isOn}
    >
      <span className="toggle-switch__handle" />
    </button>
  );
};

export default ToggleSwitch;
