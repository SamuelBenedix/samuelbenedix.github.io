import React from 'react';
import { Code, Smartphone, Image } from 'react-feather';

import {
  styServicesItem,
  styWrapper,
  styIcon,
  styText,
  styIconCircle,
} from './styles';

const ServiceItem = ({ title, desc }) => {
  const Icon = () => {
    switch (title) {
      case 'Web Development':
        return <Code color="#fff" strokeWidth="3" size={30} />;
      case 'Mobile Application':
        return <Smartphone color="#fff" strokeWidth="2" size={30} />;
      case 'UI/UX':
        return <Image color="#fff" strokeWidth="2" size={30} />;

      default:
        break;
    }
  };

  return (
    <div className={styServicesItem}>
      <div className={styWrapper}>
        <div className={styIcon}>
          <div className={styIconCircle}>
            <Icon />
          </div>
        </div>
        <div className={styText}>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
