import React, { useState, useEffect } from 'react';
import './InputField.css';

export interface InputFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  const [touched, setTouched] = useState(false);
  const [internalError, setInternalError] = useState('');

  const validate = (val: string) => {
    if (isRequired && !val.trim()) {
      return errorMessage || 'This field is required';
    }
    return '';
  };

  const handleBlur = () => {
    setTouched(true);
    const validationError = validate(value);
    setInternalError(validationError);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);

    // Validate live *if* the user has already interacted
    if (touched) {
      const validationError = validate(e.target.value);
      setInternalError(validationError);
    }
  };

  const showError = error || (touched && internalError);

  return (
    <div
      className={`input-field-container ${fullWidth ? 'input-field--fullWidth' : ''} ${className}`.trim()}
    >
      {icon && <span className="input-field-icon">{icon}</span>}

      <input
        type={type}
        className={`input-field ${icon ? 'has-icon' : ''} ${showError ? 'input-field--error' : ''}`.trim()}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        maxLength={maxLength}
        minLength={minLength}
        autoFocus={autoFocus}
      />

      {characterCount && maxLength && (
        <p className="input-field-char-count">
          {value.length}/{maxLength}
        </p>
      )}

      {showError && <p className="input-field-error">{showError}</p>}
    </div>
  );
};

export default InputField;
