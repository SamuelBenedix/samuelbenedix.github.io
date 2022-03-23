import React from 'react';
import { styWrapperCounter } from './styles';

import { CounterElement } from '../../atoms';

const Count = () => {
  return (
    <div className={styWrapperCounter}>
      <CounterElement title="Project" max={4} />
      <CounterElement title="Client" max={1} />
    </div>
  );
};

export default Count;
