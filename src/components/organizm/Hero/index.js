import React from 'react';
import { Intro, ProfileIntro } from '../../molecules';

import { styContent, stySection } from './styles';

const Hero = ({ onClick }) => {
  return (
    <React.StrictMode>
      <section className={stySection}>
        <div className={styContent}>
          <Intro onClick={onClick} />
          <ProfileIntro />
        </div>
      </section>
    </React.StrictMode>
  );
};

export default Hero;
