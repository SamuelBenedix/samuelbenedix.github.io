import React, { useState, useEffect, useRef } from 'react';
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
import { useForm } from '../../../utils';
import emailjs from '@emailjs/browser';

const ContactComp = () => {
  const [copied, setCopied] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const formRef = useRef();

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
      console.log(formRef.current);
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
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

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
        <form ref={formRef} className={styContactForm} onSubmit={onSubmit}>
          <h2>Send a Message</h2>
          <Input
            label="Name"
            value={form.name}
            onChange={(e) => {
              console.log(e.target.value);
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
            required
            error={message.errorEmail}
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
          <div className={styBtnWrapper}>
            <Button title="Send" type="submit" disabled={disabled} />
          </div>
        </form>
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
