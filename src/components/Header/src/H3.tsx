import React from 'react';
import Header, { HeaderProps } from './Header';

export interface H3Props extends Omit<HeaderProps, 'level'> {}

const H3: React.FC<H3Props> = (props) => {
  return <Header {...props} level={3} />;
};

export default H3;
