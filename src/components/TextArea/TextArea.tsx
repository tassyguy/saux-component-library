import React from "react";
import "./TextArea.css";

export interface TextAreaProps {
  /** Optional label to display above the text area */
  label?: string;
  /** The current text value */
  value: string;
  /** Callback when the text changes */
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Number of rows for the text area */
  rows?: number;
  /** Disable the text area */
  disabled?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  value,
  onChange,
  placeholder = "",
  rows = 5,
  disabled = false,
}) => {
  return (
    <div className="textarea-container">
      {label && <label className="textarea-label">{label}</label>}
      <textarea
        className="textarea-input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
      />
    </div>
  );
};

export default TextArea;
