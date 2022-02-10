import React, { useState } from 'react';
import { AboutComp, Modal } from '../../components';

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      <AboutComp onClick={openModal} />
      <Modal setShowModal={setShowModal} showModal={showModal} />
    </div>
  );
};

export default About;
