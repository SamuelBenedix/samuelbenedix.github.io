import React, { useEffect, useState, useRef } from 'react';
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
import { useForm } from '../../../utils';
import emailjs from '@emailjs/browser';

const Modal = ({ showModal, setShowModal }) => {
  const [copied, setCopied] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const formRef = useRef();

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

  const [form, setForm] = useForm({
    name: '',
    subject: '',
    email: '',
    message: '',
  });

  const [message, setMessage] = useForm({
    errorName: '',
    errorSubject: '',
    errorEmail: '',
    errorMessage: '',
  });

  useEffect(() => {
    if (
      form.name.length > 0 &&
      form.subject.length > 0 &&
      form.email.length &&
      form.message.length > 0
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [form]);

  function isEmail(val) {
    const emailRegex = /\S+@\S+\.\S+/;

    if (emailRegex.test(val)) {
      setMessage('errorEmail', '');
      return true;
    } else {
      setMessage('errorEmail', 'Please enter a valid email!');
      return false;
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => setCopied(false), 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [copied]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (isEmail(form.email)) {
      emailjs
        .sendForm(
          'gmail',
          'portofolio_template',
          formRef.current,
          'user_it9YxYoR0VTpq4zLL2mcw'
        )
        .then(
          (result) => {
            console.log(result.text);
            setForm('reset');
            setShowModal((e) => !e);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className={styBackdrop(showModal)}>
      <div className={styModalContent}>
        <form
          className={styWrapper(showModal)}
          ref={formRef}
          onSubmit={onSubmit}
        >
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
              We will get back to you within one to two days through email. Also
              please don't forget to check your spam account just in case!
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
            <Input
              label="Name"
              value={form.name}
              onChange={(e) => {
                setForm('name', e.target.value);
              }}
              required
            />
            <Input
              label="Email"
              value={form.email}
              onChange={(e) => {
                setForm('email', e.target.value);
              }}
              error={message.errorEmail}
              required
            />
            <Input
              label="Subject"
              value={form.subject}
              onChange={(e) => {
                setForm('subject', e.target.value);
              }}
              required
            />
            <Input
              inputArea={true}
              label="Message"
              value={form.message}
              onChange={(e) => {
                setForm('message', e.target.value);
              }}
              required
            />
          </div>
          <div className={styBtnWrapper}>
            <Button
              secondary={true}
              title="Send Request"
              disabled={disabled}
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
