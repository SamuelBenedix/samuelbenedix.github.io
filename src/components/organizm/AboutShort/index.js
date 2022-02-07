import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import {
  stySection,
  styContent,
  styWrapperCounter,
  styAbout,
  styCounter,
} from './styles';
import CountUp from 'react-countup';

const AboutShort = () => {
  return (
    <section className={stySection}>
      <div className={styContent}>
        <div className={styAbout}>
          <h2>About Me</h2>
          <p>
            I'm a passionate person who has a high entusiasm for learning
            especialy about technology. Mostly working with target, and strive
            for achievement.
          </p>
          <Link to="/about">
            Read more
            <FiArrowRight alt="Arrow" size={18} color="rgba(0, 136, 255, 1)" />
          </Link>
        </div>
        <div className={styWrapperCounter}>
          <div className={styCounter}>
            <h2>
              <CountUp end={17} />
            </h2>
            <p>Projects</p>
          </div>
          <div className={styCounter}>
            <h2>
              <CountUp end={17} />
            </h2>
            <p>Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutShort;
