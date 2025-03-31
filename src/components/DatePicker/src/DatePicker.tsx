import React, { useState, useEffect } from 'react';
import './DatePicker.css';

export interface DatePickerProps {
  label?: string;
  value?: string; // Optional now
  onChange?: (date: string) => void;
  minDate?: string;
  maxDate?: string;
  disabled?: boolean;
  className?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  value,
  onChange,
  minDate,
  maxDate,
  disabled = false,
  className = '',
}) => {
  const isControlled = typeof value === 'string';
  const [internalValue, setInternalValue] = useState(value ?? '');

  useEffect(() => {
    if (isControlled && value !== internalValue) {
      setInternalValue(value!);
    }
  }, [value]);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value;
    if (!isControlled) {
      setInternalValue(newDate);
    }
    onChange?.(newDate);
  };

  return (
    <div className={`date-picker ${className}`.trim()}>
      {label && <label className="date-picker__label">{label}</label>}
      <div className="date-picker__container">
        <input
          type="date"
          className="date-picker__input"
          value={internalValue}
          onChange={handleDateChange}
          min={minDate}
          max={maxDate}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default DatePicker;
