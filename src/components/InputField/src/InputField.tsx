import React from "react";
import "./InputField.css";

export interface InputFieldProps {
  /** The current value of the input */
  value: string;
  /** Placeholder text for the input */
  placeholder?: string;
  /** Callback for handling changes in the input */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Optional flag to disable the input */
  disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  placeholder,
  onChange,
  disabled = false,
}) => {
  return (
    <input
      type="text"
      className={`input-field ${disabled ? "disabled" : ""}`}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default InputField;
