import React from "react";
import "./Form.css";

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ children, className, ...props }) => {
  return (
    <form {...props} className={`form ${className || ""}`}>
      {children}
    </form>
  );
};

export default Form;
