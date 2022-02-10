import React, { useState } from 'react';
import { ContactComp, Modal } from '../../components';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      <ContactComp onClick={openModal} />
      <Modal setShowModal={setShowModal} showModal={showModal} />
    </div>
  );
};

export default Contact;
