import React, { useState, useEffect } from 'react';
import './InputField.css';

export interface InputFieldProps {
  value?: string; // ✅ now optional
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // ✅ now optional
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
  maxLength?: number;
  minLength?: number;
  autoFocus?: boolean;
  fullWidth?: boolean;
  error?: string;
  errorMessage?: string;
  icon?: React.ReactNode;
  characterCount?: boolean;
  isRequired?: boolean;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  placeholder,
  type = 'text',
  maxLength,
  minLength,
  autoFocus = false,
  fullWidth = false,
  error,
  errorMessage,
  icon,
  characterCount = false,
  isRequired = false,
  className = '',
}) => {
  const isControlled = typeof value === 'string';
  const [internalValue, setInternalValue] = useState(value ?? '');
  const [touched, setTouched] = useState(false);
  const [internalError, setInternalError] = useState('');

  // Keep internal value in sync with controlled value (if present)
  useEffect(() => {
    if (isControlled) {
      setInternalValue(value!);
    }
  }, [value]);

  const validate = (val: string) => {
    if (isRequired && !val.trim()) {
      return errorMessage || 'This field is required';
    }
    return '';
  };

  const handleBlur = () => {
    setTouched(true);
    const validationError = validate(internalValue);
    setInternalError(validationError);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (!isControlled) {
      setInternalValue(newValue);
    }

    onChange?.(e);

    if (touched) {
      const validationError = validate(newValue);
      setInternalError(validationError);
    }
  };

  const currentValue = isControlled ? value! : internalValue;
  const showError = error || (touched && internalError);

  return (
    <div
      className={`input-field-container ${fullWidth ? 'input-field--fullWidth' : ''} ${className}`.trim()}
    >
      {icon && <span className="input-field-icon">{icon}</span>}

      <input
        type={type}
        className={`input-field ${icon ? 'has-icon' : ''} ${showError ? 'input-field--error' : ''}`.trim()}
        value={currentValue}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        maxLength={maxLength}
        minLength={minLength}
        autoFocus={autoFocus}
      />

      {characterCount && maxLength && (
        <p className="input-field-char-count">
          {currentValue.length}/{maxLength}
        </p>
      )}

      {showError && <p className="input-field-error">{showError}</p>}
    </div>
  );
};

export default InputField;
