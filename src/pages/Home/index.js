import React from 'react';
import { Hero } from '../../components';
import { styMain } from './styles';

const Home = () => {
  return (
    <main className={styMain}>
      <Hero />
    </main>
  );
};

export default Home;
