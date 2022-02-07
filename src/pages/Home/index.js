import React, { useState } from 'react';
import {
  Hero,
  AboutShort,
  Services,
  Featured,
  GetInTouch,
  Modal,
} from '../../components';
import { styMain } from './styles';
import ScrollAnimation from 'react-animate-on-scroll';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <main className={styMain}>
      <Hero onClick={openModal} />
      <ScrollAnimation animateIn="fadeIn">
        <AboutShort />
      </ScrollAnimation>
      <Services />
      <Featured />
      <GetInTouch onClick={openModal} />
      <Modal setShowModal={setShowModal} showModal={showModal} />
    </main>
  );
};

export default Home;
