import React from 'react';
import { Featured } from '../..';
import { BackgroundLogo } from '../../../assets';
import { styContent, stySection, styBackground } from './styles';

const FeatureComp = () => {
  return (
    <section className={stySection}>
      <div className={styContent}>
        <Featured />
      </div>
      <div className={styBackground}>
        <BackgroundLogo alt="Logo" />
      </div>
    </section>
  );
};

export default FeatureComp;
