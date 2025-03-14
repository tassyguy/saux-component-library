import React from 'react';
import Header, { HeaderProps } from './Header';

export interface H2Props extends Omit<HeaderProps, 'level'> {}

const H2: React.FC<H2Props> = (props) => {
  return <Header {...props} level={2} />;
};

export default H2;
