import React, { useState, useEffect } from 'react';
import './TextArea.css';

export interface TextAreaProps {
  label?: string;
  value?: string; // ✅ Now optional
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void; // ✅ Now optional
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  maxLength?: number;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  autoFocus?: boolean;
  fullWidth?: boolean;
  error?: string; // external error (optional)
  errorMessage?: string; // ✅ NEW: custom required error
  characterCount?: boolean;
  isRequired?: boolean; // ✅ NEW
  className?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  value,
  onChange,
  placeholder = '',
  rows = 5,
  disabled = false,
  maxLength,
  resize = 'vertical',
  autoFocus = false,
  fullWidth = false,
  error,
  errorMessage,
  characterCount = false,
  isRequired = false,
  className = '',
}) => {
  const isControlled = typeof value === 'string';
  const [internalValue, setInternalValue] = useState(value ?? '');
  const [touched, setTouched] = useState(false);
  const [internalError, setInternalError] = useState('');

  // Sync controlled value into internal state
  useEffect(() => {
    if (isControlled && value !== undefined) {
      setInternalValue(value);
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

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;

    setInternalValue(newValue);
    onChange?.(event);

    if (touched) {
      const validationError = validate(newValue);
      setInternalError(validationError);
    }
  };

  const currentValue = internalValue;
  const showError = error || (touched && internalError);

  return (
    <div className={`textarea-container ${fullWidth ? 'textarea--fullWidth' : ''} ${className}`.trim()}>
      {label && <label className="textarea-label">{label}</label>}

      <textarea
        className={`textarea-input ${showError ? 'textarea--error' : ''}`.trim()}
        value={currentValue}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        maxLength={maxLength}
        autoFocus={autoFocus}
        style={{ resize }}
      />

      {characterCount && maxLength && (
        <p className="textarea-char-count">
          {currentValue.length}/{maxLength} characters
        </p>
      )}

      {showError && <p className="textarea-error">{showError}</p>}
    </div>
  );
};

export default TextArea;
