import React, { useState } from 'react';
import { FeatureComp, Modal } from '../../components';
import { motion } from 'framer-motion';

const Project = () => {
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
      <FeatureComp onClick={openModal} />
      <Modal setShowModal={setShowModal} showModal={showModal} />
    </motion.div>
  );
};

export default Project;
