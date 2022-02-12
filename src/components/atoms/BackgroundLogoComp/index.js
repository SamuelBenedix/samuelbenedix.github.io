import React from 'react';
import { styBackground } from './styles';
import { BackgroundLogo } from '../../../assets';

const BackgroundLogoComp = () => {
  return (
    <div className={styBackground}>
      <BackgroundLogo alt="Logo" />
    </div>
  );
};

export default BackgroundLogoComp;
