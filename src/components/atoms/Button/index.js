import React from 'react';
import { styContainer, styIcon, styTitle } from './styles';
import { Mail } from 'react-feather';

const Button = ({ main, position, title, onClick }) => {
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
  return (
    <button type="button" className={styContainer(position)}>
      <p className={styTitle(position)}>Let's Talk</p>
    </button>
  );
};

export default Button;
