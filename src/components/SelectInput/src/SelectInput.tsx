import React from 'react';
import './SelectInput.css';

export interface SelectInputOption {
  value: string;
  label: string;
}

export interface SelectInputProps {
  /** Optional label to display above the select */
  label?: string;
  /** Options for the dropdown */
  options: SelectInputOption[];
  /** Currently selected value */
  value: string;
  /** Callback triggered on change */
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  /** Disable the select */
  disabled?: boolean;
  /** Placeholder text for the select */
  placeholder?: string;
  /** Size of the select input */
  size?: 'small' | 'medium' | 'large';
  /** Color variant of the select input */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  options,
  value,
  onChange,
  disabled = false,
  placeholder = 'Select an option...',
  size = 'medium',
  variant = 'primary',
}) => {
  return (
    <div
      className={`select-input select-input--${size} select-input--${variant}`.trim()}
    >
      {label && <label className="select-input__label">{label}</label>}
      <select
        className="select-input__select"
        value={value}
        onChange={onChange}
        disabled={disabled}
        aria-label={label}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
