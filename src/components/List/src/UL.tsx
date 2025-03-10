import React from 'react';
import List, { ListProps } from './List';

export interface UnorderedListProps extends ListProps {}

const UnorderedList: React.FC<UnorderedListProps> = (props) => {
  return <List {...props} />;
};

export default UnorderedList;
