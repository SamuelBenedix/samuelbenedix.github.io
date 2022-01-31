/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { styIntro, styName, styDot, styTitle } from './styles';

const Intro = () => {
  return (
    <div>
      <p className={styIntro}>Hello, my name is</p>
      <h1 className={styName}>
        Samuel B<span className={styDot}>.</span>
      </h1>
      <h3 className={styTitle}>
        Designer
        <span className={styDot}> // </span>
        Developer
      </h3>
    </div>
  );
};

export default Intro;
