import React from 'react';

import { ContainerStyles } from './styles';

interface Props {
  children: JSX.Element[];
}

const Container: React.FC<Props> = ({ children }) => {
  return <ContainerStyles>{children}</ContainerStyles>;
};

export default Container;
