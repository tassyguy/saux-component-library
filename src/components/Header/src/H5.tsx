import React from 'react';
import Header, { HeaderProps } from './Header';

export interface H5Props extends Omit<HeaderProps, 'level'> {}

const H5: React.FC<H5Props> = (props) => {
  return <Header {...props} level={5} />;
};

export default H5;
