import React from 'react';
import Header, { HeaderProps } from './Header';

export interface H4Props extends Omit<HeaderProps, 'level'> {}

const H4: React.FC<H4Props> = (props) => {
  return <Header {...props} level={4} />;
};

export default H4;
