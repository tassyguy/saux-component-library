import React, { useState, useEffect } from 'react';
import './SliderInput.css';

export interface SliderInputProps {
  label?: string;
  value?: number; // optional for uncontrolled
  min: number;
  max: number;
  step?: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
  showValue?: boolean;
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
  const isControlled = typeof value === 'number';
  const [internalValue, setInternalValue] = useState(value ?? min);

  // Keep internal value in sync when controlled externally
  useEffect(() => {
    if (isControlled) {
      setInternalValue(value!);
    }
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const currentValue = isControlled ? value! : internalValue;

  return (
    <div className={`slider-input ${className}`.trim()}>
      {label && <label className="slider-input__label">{label}</label>}
      <div className="slider-input__container">
        <input
          type="range"
          className="slider-input__range"
          value={currentValue}
          min={min}
          max={max}
          step={step}
          onChange={handleChange}
          disabled={disabled}
        />
        {showValue && <span className="slider-input__value">{currentValue}</span>}
      </div>
    </div>
  );
};

export default SliderInput;
