import React, { useState, useEffect } from 'react';
import './SelectInput.css';

export interface SelectInputOption {
  value: string;
  label: string;
}

export interface SelectInputProps {
  label?: string;
  options: SelectInputOption[];
  value?: string; // ✅ make this optional for uncontrolled mode
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  placeholder?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  className?: string;
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
  className = '',
}) => {
  const isControlled = typeof value === 'string';

  const [internalValue, setInternalValue] = useState<string>('');

  // Sync internal state if value is controlled
  useEffect(() => {
    if (isControlled) {
      setInternalValue(value!);
    }
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (!isControlled) {
      setInternalValue(event.target.value);
    }
    onChange?.(event);
  };

  const selectedValue = isControlled ? value! : internalValue;

  return (
    <div
      className={`select-input select-input--${size} select-input--${variant} ${className}`.trim()}
    >
      {label && <label className="select-input__label">{label}</label>}
      <select
        className="select-input__select"
        value={selectedValue}
        onChange={handleChange}
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
