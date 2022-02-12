import React, { useState } from 'react';
import { AboutComp, Modal } from '../../components';
import { motion } from 'framer-motion';

const About = () => {
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
      <AboutComp onClick={openModal} />
      <Modal setShowModal={setShowModal} showModal={showModal} />
    </motion.div>
  );
};

export default About;
