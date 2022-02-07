import React, { useEffect, useState } from 'react';
import {
  styBackdrop,
  styWrapper,
  styModalClose,
  styModalContent,
  styContent,
  styBtnWrapper,
  styClipBoard,
  styToolTip,
  styToolTipName,
} from './styles';
import { FiX, FiCopy, FiCheck } from 'react-icons/fi';
import Input from '../Input';
import Button from '../Button';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Modal = ({ showModal, setShowModal }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    }

    if (!showModal) {
      document.body.style.overflow = 'scroll';
    }
  }, [showModal]);

  useEffect(() => {
    const timer = setTimeout(() => setCopied(false), 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [copied]);

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
              <CopyToClipboard
                text="samuelbenedictx@gmail.com"
                onCopy={() => setCopied(true)}
              >
                <div className={styToolTip}>
                  <span className={styToolTipName(copied)}>
                    Copied to Clipboard
                    <FiCheck size={15} color="#212529" alt="Done" />
                  </span>
                  <span className={styClipBoard(copied)}>
                    samuelbenedictx@gmail.com
                    <FiCopy size={15} color="#212529" alt="Clipboard" />
                  </span>
                </div>
              </CopyToClipboard>
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
