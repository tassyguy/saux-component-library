import React from 'react';
import List, { ListProps } from './List';

export interface OrderedListProps extends ListProps {}

const OrderedList: React.FC<OrderedListProps> = (props) => {
  return <List {...props} ordered />;
};

export default OrderedList;
