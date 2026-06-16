import React, { useEffect, useId, useState } from 'react';
import './InputField.css';

export interface InputFieldProps {
  /** Visible label rendered above the input. Strongly preferred over `ariaLabel`. */
  label?: string;
  /** Accessible name for the input when no visible `label` is rendered. */
  ariaLabel?: string;
  /** Optional input id. Auto-generated if not provided. */
  id?: string;
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
  reqIncludes?: string[];
  icon?: React.ReactNode;
  characterCount?: boolean;
  isRequired?: boolean;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  ariaLabel,
  id,
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
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;

  const isControlled = typeof value === 'string';
  const [internalValue, setInternalValue] = useState(value ?? '');
  const [touched, setTouched] = useState(false);
  const [internalError, setInternalError] = useState('');

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
    setInternalError(validate(internalValue));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    onChange?.(e);
    if (touched) {
      setInternalError(validate(newValue));
    }
  };

  const showError = error || (touched && internalError);

  return (
    <div
      className={`input-field-container ${fullWidth ? 'input-field--fullWidth' : ''} ${className}`.trim()}
    >
      {label && (
        <label htmlFor={inputId} className="input-field-label">
          {label}
          {isRequired && (
            <span className="input-field-required" aria-hidden="true">
              {' '}
              *
            </span>
          )}
        </label>
      )}

      <div className="input-field-wrapper">
        {icon && (
          <span className="input-field-icon" aria-hidden="true">
            {icon}
          </span>
        )}
        <input
          id={inputId}
          type={type}
          className={`input-field ${icon ? 'has-icon' : ''} ${showError ? 'input-field--error' : ''}`.trim()}
          value={internalValue}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          maxLength={maxLength}
          minLength={minLength}
          autoFocus={autoFocus}
          required={isRequired}
          aria-label={!label ? ariaLabel : undefined}
          aria-invalid={!!showError}
          aria-describedby={showError ? errorId : undefined}
        />
      </div>

      {characterCount && maxLength && (
        <p className="input-field-char-count">
          {internalValue.length}/{maxLength}
        </p>
      )}

      {showError && (
        <p id={errorId} className="input-field-error">
          {showError}
        </p>
      )}
    </div>
  );
};

export default InputField;
