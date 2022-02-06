import React, { useEffect } from 'react';
import {
  styBackdrop,
  styWrapper,
  styModalClose,
  styModalContent,
  styContent,
  styBtnWrapper,
} from './styles';
import { FiX } from 'react-icons/fi';
import Input from '../Input';
import Button from '../Button';

const Modal = ({ showModal, setShowModal }) => {
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    }

    if (!showModal) {
      document.body.style.overflow = 'scroll';
    }
  }, [showModal]);

  return (
    <React.Fragment>
      <div className={styBackdrop(showModal)}>
        <div className={styModalContent}>
          <form className={styWrapper(showModal)}>
            <div className={styModalClose}>
              <FiX
                onClick={(prev) => {
                  setShowModal(!prev);
                }}
                size={30}
                color="#212529"
                alt="Close"
              />
            </div>

            <div className={styContent}>
              <h1>Let's Talk</h1>
              <p>
                We will get back to you within one to two days through email.
                Also please don't forget to check your spam account just in
                case!
              </p>
              <Input label="Name" />
              <Input label="Email" />
              <Input label="Subject" />
              <Input inputArea={true} label="Message" />
            </div>
            <div className={styBtnWrapper}>
              <Button secondary={true} title="Send Request" />
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
