import React, { useState } from 'react';
import './DatePicker.css';

export interface DatePickerProps {
  label?: string;
  value: string; // Date in ISO format (e.g., "2025-03-25")
  onChange: (date: string) => void;
  minDate?: string; // Minimum selectable date in ISO format
  maxDate?: string; // Maximum selectable date in ISO format
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
  const [isOpen, setIsOpen] = useState(false);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={`date-picker ${className}`.trim()}>
      {label && <label className="date-picker__label">{label}</label>}
      <div className="date-picker__container">
        <input
          type="date"
          className="date-picker__input"
          value={value}
          onChange={handleDateChange}
          min={minDate}
          max={maxDate}
          disabled={disabled}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
        />
      </div>
    </div>
  );
};

export default DatePicker;
