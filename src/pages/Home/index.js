import React from 'react';
import { Hero, AboutShort, Services, Featured } from '../../components';
import { styMain } from './styles';

const Home = () => {
  return (
    <main className={styMain}>
      <Hero />
      <AboutShort />
      <Services />
      <Featured />
    </main>
  );
};

export default Home;
