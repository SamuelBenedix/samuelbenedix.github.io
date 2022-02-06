import React from 'react';
import {
  styBackdrop,
  styWrapper,
  styModalClose,
  styModalContent,
  styContent,
} from './styles';
import { FiX } from 'react-icons/fi';

const Modal = ({ showModal, setShowModal }) => {
  return (
    <React.Fragment>
      {showModal ? (
        <div className={styBackdrop}>
          <div className={styModalContent}>
            <form className={styWrapper}>
              <div className={styModalClose}>
                <FiX
                  onClick={(prev) => {
                    setShowModal(!prev);
                  }}
                  size={35}
                  color="#000"
                  alt="Close"
                />
              </div>

              <form className={styContent}>
                <h1>Let's Talk</h1>
                <p>
                  We will get back to you within one to two days through email.
                  Also please don't forget to check your spam account just in
                  case!
                </p>
                <div>
                  <div>Name*</div>
                  <div>
                    <input />
                  </div>
                </div>
              </form>
            </form>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default Modal;
