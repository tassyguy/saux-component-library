import React from 'react';
import List, { ListProps } from './List';

export interface OrderedListProps extends ListProps {
  className?: string; // Allow spacing classes
}

const OrderedList: React.FC<OrderedListProps> = ({ className = '', ...props }) => {
  return <List {...props} ordered className={className} />;
};

export default OrderedList;
