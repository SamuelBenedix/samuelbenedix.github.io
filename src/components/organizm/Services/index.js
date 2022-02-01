import React from 'react';
import { Link } from 'react-router-dom';
import { IcArrow } from '../../../assets';
import CountUp from 'react-countup';

import {
  stySection,
  styContent,
  styWrapperCounter,
  styAbout,
  styCounter,
  styBackground,
} from './styles';

const Services = () => {
  return (
    <section className={stySection}>
      <div className={styContent}>
        <div className={styAbout}>
          <h2>About Me</h2>
          <p>Samuel is Developer and Designer based in Jakarta, Indonesia</p>
          <Link to="/about">
            Read more <img src={IcArrow} alt="Arrow" />
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
      <h1 className={styBackground}>Services</h1>
    </section>
  );
};

export default Services;
