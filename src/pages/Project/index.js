import React, { useState } from 'react';
import { FeatureComp, Modal } from '../../components';

const Project = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <React.Fragment>
      <FeatureComp onClick={openModal} />
      <Modal setShowModal={setShowModal} showModal={showModal} />
    </React.Fragment>
  );
};

export default Project;
