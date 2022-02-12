import React, { useState, useEffect } from 'react';
import {
  styContent,
  stySection,
  styContactInfo,
  styContactForm,
  styClipBoard,
  styToolTip,
  styToolTipName,
  styBtnWrapper,
  stySocialMedia,
} from './styles';
import { FiCopy, FiCheck, FiPhone, FiArrowLeft } from 'react-icons/fi';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IoLocationOutline } from 'react-icons/io5';
import { Button, Input } from '../../atoms';

const ContactComp = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCopied(false), 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [copied]);

  return (
    <section className={stySection}>
      <div className={styContent}>
        <div className={styContactInfo}>
          <div>
            <h2>Contact Info</h2>
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
            <ul>
              <li>
                <IoLocationOutline size={25} />
                <span>West Jakarta, Indonesia</span>
              </li>
              <li>
                <FiPhone size={25} />
                <span>(+62) 888 0834 9231 </span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styContactForm}>
          <h2>Send a Message</h2>
          <Input label="Name" />
          <Input label="Email" />
          <Input label="Subject" />
          <Input inputArea={true} label="Message" />
          <div className={styBtnWrapper}>
            <Button title="Send" />
          </div>
        </div>
      </div>

      <div className={stySocialMedia}>
        <h5>
          <FiArrowLeft /> My Social Media
        </h5>
      </div>
    </section>
  );
};

export default ContactComp;
