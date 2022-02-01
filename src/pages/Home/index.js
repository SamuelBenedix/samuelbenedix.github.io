import React from 'react';
import { Hero, AboutShort, Services } from '../../components';
import { styMain } from './styles';

const Home = () => {
  return (
    <main className={styMain}>
      <Hero />
      <AboutShort />
      <AboutShort />
      <AboutShort />
      <AboutShort />
      <AboutShort />
      <Services />
    </main>
  );
};

export default Home;
