import React from 'react';
import Header, { HeaderProps } from './Header';

export interface H1Props extends Omit<HeaderProps, 'level'> {}

const H1: React.FC<H1Props> = (props) => {
  return <Header {...props} level={1} />;
};

export default H1;
