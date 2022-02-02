import React from 'react';
import { IcBehance } from '../../../assets';
import { Instagram, Linkedin, GitHub, Dribbble } from 'react-feather';

import { styContainerSocmed, stySocmedList, styList } from './styles';

const Socmed = () => {
  return (
    <div className={styContainerSocmed}>
      <ul className={stySocmedList}>
        <li className={styList}>
          <a
            title="Github @samuelbenedix"
            target="_blank"
            href="https://github.com/SamuelBenedix"
            rel="noreferrer"
          >
            <GitHub color="#0088FF" size={24} />
          </a>
        </li>
        <li className={styList}>
          <a
            title="Instagram @samuelbenedix"
            target="_blank"
            href="https://www.instagram.com/samuelbenedix/"
            rel="noreferrer"
          >
            <Instagram color="#0088FF" size={24} />
          </a>
        </li>
        <li className={styList}>
          <a
            title="Behance @samuelben"
            target="_blank"
            href="https://www.behance.net/samuelben"
            rel="noreferrer"
          >
            <IcBehance />
          </a>
        </li>
        <li className={styList}>
          <a
            title="Dribbble @samuelben"
            target="_blank"
            href="https://dribbble.com/SamuelBen"
            rel="noreferrer"
          >
            <Dribbble color="#0088FF" size={24} />
          </a>
        </li>
        <li className={styList}>
          <a
            title="Linkedin @samuelbenedix"
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
