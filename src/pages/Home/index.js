import React from 'react';
import {
  Hero,
  AboutShort,
  Services,
  Featured,
  GetInTouch,
} from '../../components';
import { styMain } from './styles';

const Home = () => {
  return (
    <main className={styMain}>
      <Hero />
      <AboutShort />
      <Services />
      <Featured />
      <GetInTouch />
    </main>
  );
};

export default Home;
