import React from 'react';
import { styContainer, styIcon, styTitle } from './styles';
import { Mail } from 'react-feather';

const Button = ({ main, position, title }) => {
  if (main) {
    return (
      <button type="button" className={styContainer(position)}>
        <Mail className={styIcon(position)} color="#fff" size={30} />
        <p className={styTitle(position)}>Let's Talk</p>
      </button>
    );
  }
  return (
    <button type="button" className={styContainer(position)}>
      <p className={styTitle(position)}>Let's Talk</p>
    </button>
  );
};

export default Button;
