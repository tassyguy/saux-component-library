import React from 'react';
import './TextArea.css';

export interface TextAreaProps {
  label?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  maxLength?: number;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  autoFocus?: boolean;
  fullWidth?: boolean;
  error?: string;
  characterCount?: boolean;
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
  characterCount = false,
}) => {
  return (
    <div
      className={`textarea-container ${fullWidth ? 'textarea--fullWidth' : ''}`.trim()}
    >
      {label && <label className="textarea-label">{label}</label>}
      <textarea
        className={`textarea-input ${error ? 'textarea--error' : ''}`.trim()}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        maxLength={maxLength}
        autoFocus={autoFocus}
        style={{ resize }}
      />
      {characterCount && maxLength && (
        <p className="textarea-char-count">
          {value.length}/{maxLength} characters
        </p>
      )}
      {error && <p className="textarea-error">{error}</p>}
    </div>
  );
};

export default TextArea;
