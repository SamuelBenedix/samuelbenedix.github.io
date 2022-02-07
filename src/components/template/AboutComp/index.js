/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { BackgroundLogo, PictProfile } from '../../../assets';
import {
  styContent,
  stySection,
  styBackground,
  styProfilePict,
  stySectionAbout,
  styProfileWrapper,
  styProfileName,
  styInfo,
} from './styles';
import { FiChevronRight } from 'react-icons/fi';

const AboutComp = () => {
  return (
    <section className={stySection}>
      <div className={styContent}>
        <div className={styProfileWrapper}>
          <div className={styProfilePict}>
            <img src={PictProfile} alt="Profile" />
          </div>
          <div className={styProfileName}>
            <h3>Samuel Benedict Putra Teguh</h3>
            <h5>
              Developer <span>//</span> Designer
            </h5>
          </div>
        </div>
        <div className={stySectionAbout}>
          <div>
            <h3>About Me</h3>
          </div>
          <div>
            <p>
              Hello! My name is Samuel and I enjoy creating things that
              relationship with technology. My interest in technology especialy
              web development started back in 2018 when I decided to try editing
              custom Wordpress Theme taught me a lot about HTML & CSS!.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <div>
              <ul class={styInfo}>
                <li>
                  <label>
                    <FiChevronRight />
                  </label>
                  <span>JavaScript (ES6+).</span>
                </li>
                <li>
                  <label>
                    <FiChevronRight />
                  </label>
                  <span>React</span>
                </li>
                <li>
                  <label>
                    <FiChevronRight />
                  </label>
                  <span>React Native</span>
                </li>
                <li>
                  <label>
                    <FiChevronRight />
                  </label>
                  <span>Node.js</span>
                </li>
                <li>
                  <label>
                    <FiChevronRight />
                  </label>
                  <span>Laravel</span>
                </li>
                <li>
                  <label>
                    <FiChevronRight />
                  </label>
                  <span>Deep Learning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styBackground}>
        <BackgroundLogo alt="Logo" />
      </div>
    </section>
  );
};

export default AboutComp;
