import React, { useState, useEffect } from 'react';
import './DatePicker.css';

export interface DatePickerProps {
  label?: string;
  value?: string;
  onChange?: (date: string) => void;
  minDate?: string;
  maxDate?: string;
  disabled?: boolean;
  isRequired?: boolean;
  errorMessage?: string;
  error?: string;
  className?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  value,
  onChange,
  minDate,
  maxDate,
  disabled = false,
  isRequired = false,
  errorMessage,
  error,
  className = '',
}) => {
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

    const date = new Date(val);
    const min = minDate ? new Date(minDate) : null;
    const max = maxDate ? new Date(maxDate) : null;

    if (min && date < min) {
      return `Date must be on or after ${minDate}`;
    }

    if (max && date > max) {
      return `Date must be on or before ${maxDate}`;
    }

    return '';
  };

  const handleBlur = () => {
    setTouched(true);
    const validationError = validate(internalValue);
    setInternalError(validationError);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value;
    setInternalValue(newDate);
    onChange?.(newDate);

    if (touched) {
      const validationError = validate(newDate);
      setInternalError(validationError);
    }
  };

  const showError = error || (touched && internalError);

  return (
    <div className={`date-picker ${className}`.trim()}>
      {label && (
        <label className="date-picker__label">
          {label} {isRequired && <span className="required">*</span>}
        </label>
      )}

      <div className="date-picker__container">
        <input
          type="date"
          className={`date-picker__input ${showError ? 'date-picker--error' : ''}`}
          value={internalValue}
          onChange={handleDateChange}
          onBlur={handleBlur}
          min={minDate}
          max={maxDate}
          disabled={disabled}
        />
        {showError && <p className="date-picker__error">{showError}</p>}
      </div>
    </div>
  );
};

export default DatePicker;
