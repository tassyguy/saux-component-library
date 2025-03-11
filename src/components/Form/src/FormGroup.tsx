import React from 'react';
import './FormGroup.css';

export interface FormGroupProps {
  label?: string;
  children: React.ReactNode;
  htmlFor?: string;
  required?: boolean;
  description?: string;
  error?: string;
  inline?: boolean;
}

const FormGroup: React.FC<FormGroupProps> = ({
  label,
  children,
  htmlFor,
  required,
  description,
  error,
  inline,
}) => {
  return (
    <div className={`form-group ${inline ? 'form-group--inline' : ''}`.trim()}>
      {label && (
        <label htmlFor={htmlFor} className="form-group__label">
          {label} {required && <span className="form-group__required">*</span>}
        </label>
      )}
      <div className="form-group__control">{children}</div>
      {description && <p className="form-group__description">{description}</p>}
      {error && <p className="form-group__error">{error}</p>}
    </div>
  );
};

export default FormGroup;
