import React from 'react';
import './CheckRadio.css';

/** Option for a checkbox or radio */
export interface CheckRadioOption {
  label: string;
  value: string;
}

/** Props for an individual checkbox or radio input */
export interface CheckRadioProps {
  type: 'checkbox' | 'radio';
  checked: boolean;
  indeterminate?: boolean;
  onChange: () => void;
  disabled?: boolean;
  label?: string;
  name?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  className?: string;
}

/**
 * Individual CheckRadio item (checkbox or radio)
 */
export const CheckRadioItem: React.FC<CheckRadioProps> = ({
  type,
  checked,
  indeterminate = false,
  onChange,
  disabled = false,
  label,
  name,
  size = 'medium',
  variant = 'primary',
  className = '',
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (type === 'checkbox' && inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const containerClasses = [
    'check-radio',
    `check-radio--${size}`,
    `check-radio--${variant}`,
    type === 'radio' ? 'check-radio--radio' : '',
    indeterminate ? 'check-radio--indeterminate' : '',
    disabled ? 'disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label className={containerClasses}>
      <input
        ref={inputRef}
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

/** Props for the CheckRadioGroup wrapper */
export interface CheckRadioGroupProps {
  type: 'checkbox' | 'radio';
  options: CheckRadioOption[];
  name?: string;
  selected?: string[]; // Initial selected values
  onChange?: (selectedValues: string[]) => void;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  className?: string;
}

/**
 * CheckRadioGroup component (renders a group of checkbox or radio items)
 */
export const CheckRadioGroup: React.FC<CheckRadioGroupProps> = ({
  type,
  options,
  name,
  selected = [],
  onChange,
  disabled = false,
  size = 'medium',
  variant = 'primary',
  className = '',
}) => {
  const [selectedValues, setSelectedValues] = React.useState<string[]>(selected);

  const handleChange = (value: string) => {
    let newSelected: string[];

    if (type === 'checkbox') {
      newSelected = selectedValues.includes(value)
        ? selectedValues.filter((v) => v !== value)
        : [...selectedValues, value];
    } else {
      newSelected = selectedValues[0] === value ? [] : [value];
    }

    setSelectedValues(newSelected);
    onChange?.(newSelected);
  };

  return (
    <div className={`check-radio-group ${className}`}>
      {options.map((option) => (
        <CheckRadioItem
          key={option.value}
          type={type}
          checked={selectedValues.includes(option.value)}
          onChange={() => handleChange(option.value)}
          label={option.label}
          name={name}
          disabled={disabled}
          size={size}
          variant={variant}
        />
      ))}
    </div>
  );
};

// Default export for the group component
export default CheckRadioGroup;
