import React from "react";
import "./FormGroup.css";

export interface FormGroupProps {
  /** The label text for the form group */
  label: string;
  /** The form controls (input, select, etc.) */
  children: React.ReactNode;
}

const FormGroup: React.FC<FormGroupProps> = ({ label, children }) => {
  return (
    <div className="form-group">
      <label className="form-group__label">{label}</label>
      <div className="form-group__control">{children}</div>
    </div>
  );
};

export default FormGroup;
