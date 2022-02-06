import React from 'react';
import {
  styContainer,
  styIcon,
  styTitle,
  styContainerSecondary,
} from './styles';
import { Mail } from 'react-feather';

const Button = ({ main, position, title, onClick, secondary }) => {
  if (main) {
    return (
      <React.Fragment>
        <button
          type="button"
          onClick={onClick}
          className={styContainer(position)}
        >
          <Mail className={styIcon(position)} color="#fff" size={30} />
          <p className={styTitle(position)}>Let's Talk</p>
        </button>
      </React.Fragment>
    );
  }

  if (secondary) {
    return (
      <button type="button" className={styContainerSecondary} onClick={onClick}>
        <p className={styTitle(position)}>{title}</p>
      </button>
    );
  }

  return (
    <button type="button" className={styContainer(position)} onClick={onClick}>
      <p className={styTitle(position)}>Let's Talk</p>
    </button>
  );
};

export default Button;
