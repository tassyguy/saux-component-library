import React, { useState, useEffect } from 'react';
import './InputField.css';

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
  maxLength?: number;
  minLength?: number;
  autoFocus?: boolean;
  fullWidth?: boolean;
  error?: string;
  errorMessage?: string;
  reqIncludes?: string[]; // ✅ NEW
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
  reqIncludes,
  icon,
  characterCount = false,
  isRequired = false,
  className = '',
}) => {
  const isControlled = typeof value === 'string';
  const [internalValue, setInternalValue] = useState(value ?? '');
  const [touched, setTouched] = useState(false);
  const [internalError, setInternalError] = useState('');

  // Keep internal state in sync with external value
  useEffect(() => {
    if (isControlled && value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const validate = (val: string) => {
    if (isRequired && !val.trim()) {
      return errorMessage || 'This field is required';
    }

    if (reqIncludes && reqIncludes.length > 0) {
      const missing = reqIncludes.filter((str) => !val.includes(str));
      if (missing.length > 0) {
        return `Must include: ${missing.join(', ')}`;
      }
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

    setInternalValue(newValue);
    onChange?.(e);

    if (touched) {
      const validationError = validate(newValue);
      setInternalError(validationError);
    }
  };

  const currentValue = internalValue;
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
        aria-invalid={!!showError}
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
