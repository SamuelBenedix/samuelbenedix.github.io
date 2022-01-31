import React from 'react';
import { IcBehance, IcDribble, IcGithub, IcLinkedin } from '../../../assets';

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
            <img src={IcGithub} alt="Github" />
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
            <img src={IcLinkedin} alt="LinkedIn" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socmed;
