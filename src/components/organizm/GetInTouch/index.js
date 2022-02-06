import React from 'react';
import { Button } from '../../atoms';
import {
  stySection,
  styContent,
  stySectionTitle,
  styServicesContainer,
} from './styles';

const GetInTouch = ({ onClick }) => {
  return (
    <section className={stySection}>
      <div className={styContent}>
        <div className={stySectionTitle}>
          <h2>Get In Touch</h2>
        </div>
        <div className={styServicesContainer}>
          <p>
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <Button title="Say Hello" onClick={onClick} />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
