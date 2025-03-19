import React from 'react';
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
  icon?: React.ReactNode;
  characterCount?: boolean;
  className?: string; // Allow users to apply spacing styles
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
  icon,
  characterCount = false,
  className = '',
}) => {
  return (
    <div
      className={`input-field-container ${fullWidth ? 'input-field--fullWidth' : ''} ${className}`.trim()}
    >
      {icon && <span className="input-field-icon">{icon}</span>}
      <input
        type={type}
        className={`input-field ${icon ? 'has-icon' : ''} ${error ? 'input-field--error' : ''}`.trim()}
        value={value}
        onChange={onChange}
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
      {error && <p className="input-field-error">{error}</p>}
    </div>
  );
};

export default InputField;
