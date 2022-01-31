import React from 'react';
import { BgLogo } from '../../../assets';
import { Intro, ProfileIntro } from '../../molecules';

import { styContent, stySection, styBackground } from './styles';

const Hero = () => {
  return (
    <section className={stySection}>
      <div className={styContent}>
        <Intro />
        <ProfileIntro />
      </div>

      <img className={styBackground} src={BgLogo} alt="Logo" />
    </section>
  );
};

export default Hero;
