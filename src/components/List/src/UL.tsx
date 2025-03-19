import React from 'react';
import List, { ListProps } from './List';

export interface UnorderedListProps extends ListProps {
  className?: string; // Allow spacing classes
}

const UnorderedList: React.FC<UnorderedListProps> = ({ className = '', ...props }) => {
  return <List {...props} className={className} />;
};

export default UnorderedList;
