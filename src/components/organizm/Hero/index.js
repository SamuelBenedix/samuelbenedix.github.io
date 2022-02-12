import React from 'react';
import { Intro, ProfileIntro } from '../../molecules';

import { styContent, stySection } from './styles';

const Hero = ({ onClick }) => {
  return (
    <section className={stySection}>
      <div className={styContent}>
        <Intro onClick={onClick} />
        <ProfileIntro />
      </div>
    </section>
  );
};

export default Hero;
