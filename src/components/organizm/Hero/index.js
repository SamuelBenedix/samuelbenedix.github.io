import React from 'react';
import { BackgroundLogo } from '../../../assets';
import { Intro, ProfileIntro } from '../../molecules';

import { styContent, stySection, styBackground } from './styles';

const Hero = ({ onClick }) => {
  return (
    <section className={stySection}>
      <div className={styContent}>
        <Intro onClick={onClick} />
        <ProfileIntro />
      </div>

      <div className={styBackground}>
        <BackgroundLogo alt="Logo" />
      </div>
    </section>
  );
};

export default Hero;
