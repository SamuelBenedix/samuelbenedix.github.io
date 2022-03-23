import React from 'react';
import {
  styContainer,
  styContainerDisabled,
  styIcon,
  styTitle,
  styContainerSecondary,
  styMail,
  styMailText,
} from './styles';
import { Mail } from 'react-feather';

const Button = ({
  main,
  position,
  title = "Let's Talk",
  onClick,
  secondary,
  mail,
  type = 'button',
  disabled,
}) => {
  if (secondary) {
    return (
      <button type={type} className={styContainerSecondary(disabled)} onClick={onClick}>
        <p className={styTitle(position)}>{title}</p>
      </button>
    );
  }

  if (disabled) {
    return (
      <button
        type={type}
        className={styContainerDisabled}
        onClick={onClick}
        disabled
      >
        <p className={styTitle(position)}>{title}</p>
      </button>
    );
  }

  if (main) {
    return (
      <React.Fragment>
        <button
          type={type}
          onClick={onClick}
          className={styContainer(position)}
        >
          <Mail className={styIcon(position)} color="#fff" size={30} />
          <p className={styTitle(position)}>Let's Talk</p>
        </button>
      </React.Fragment>
    );
  }

  if (mail) {
    return (
      <button type={type} className={styMail} onClick={onClick}>
        <Mail className={styMailText} color="#fff" size={30} />
      </button>
    );
  }

  return (
    <button type={type} className={styContainer(position)} onClick={onClick}>
      <p className={styTitle(position)}>{title}</p>
    </button>
  );
};

export default Button;
