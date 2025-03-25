import React from 'react';
import './SliderInput.css';

export interface SliderInputProps {
  label?: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  disabled?: boolean;
  showValue?: boolean; // Option to display the current value
  className?: string;
}

const SliderInput: React.FC<SliderInputProps> = ({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
  disabled = false,
  showValue = true,
  className = '',
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  return (
    <div className={`slider-input ${className}`.trim()}>
      {label && <label className="slider-input__label">{label}</label>}
      <div className="slider-input__container">
        <input
          type="range"
          className="slider-input__range"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={handleChange}
          disabled={disabled}
        />
        {showValue && <span className="slider-input__value">{value}</span>}
      </div>
    </div>
  );
};

export default SliderInput;
