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
import { motion } from 'framer-motion';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <main className={styMain}>
        <Hero onClick={openModal} />
        <AboutShort />
        <Services />
        <Featured />
        <GetInTouch onClick={openModal} />
        <Modal setShowModal={setShowModal} showModal={showModal} />
      </main>
    </motion.div>
  );
};

export default Home;
