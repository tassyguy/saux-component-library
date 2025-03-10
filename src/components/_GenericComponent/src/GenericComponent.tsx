import React from 'react';
import './GenericComponent.css';

export interface GenericComponentProps {
  title: string;
  description: string;
}

const GenericComponent: React.FC<GenericComponentProps> = ({
  title,
  description,
}) => {
  return (
    <div className="generic-component">
      <h1 className="generic-component-title">{title}</h1>
      <p className="generic-component-description">{description}</p>
    </div>
  );
};

export default GenericComponent;
