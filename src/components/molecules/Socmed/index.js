import React from 'react';
import { IcBehance, IcDribble } from '../../../assets';
import { Instagram, Linkedin, GitHub } from 'react-feather';

import { styContainerSocmed, stySocmedList, styList } from './styles';

const Socmed = () => {
  return (
    <div className={styContainerSocmed}>
      <ul className={stySocmedList}>
        <li className={styList}>
          <a
            target="_blank"
            href="https://github.com/SamuelBenedix"
            rel="noreferrer"
          >
            <GitHub color="#0088FF" size={24} />
          </a>
        </li>
        <li className={styList}>
          <a
            target="_blank"
            href="https://www.instagram.com/samuelbenedix/"
            rel="noreferrer"
          >
            <Instagram color="#0088FF" size={24} />
          </a>
        </li>
        <li className={styList}>
          <a
            target="_blank"
            href="https://www.behance.net/samuelben"
            rel="noreferrer"
          >
            <img src={IcBehance} alt="Behance" />
          </a>
        </li>
        <li className={styList}>
          <a
            target="_blank"
            href="https://dribbble.com/SamuelBen"
            rel="noreferrer"
          >
            <img src={IcDribble} alt="Dribble" />
          </a>
        </li>
        <li className={styList}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/samuelbenedix/"
            rel="noreferrer"
          >
            <Linkedin color="#0088FF" size={24} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socmed;
