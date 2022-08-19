import React from 'react';
import { ServiceItem } from '../../molecules';

import { stySection, styContent, styServices, stySectionTitle } from './styles';

const Services = () => {
  return (
    <section className={stySection}>
      <div className={styContent}>
        <div className={stySectionTitle}>
          <h2>My Services</h2>
        </div>
        <div className={styServices}>
          <ServiceItem
            title={'UI/UX'}
            desc={
              'Landing Pages, User Flow, Wireframing, Prototyping, Mobile App Design, Web App'
            }
          />
          <ServiceItem
            title={'Web Development'}
            desc={'HTML/CSS, Responsive Website'}
          />
          <ServiceItem
            title={'Mobile Application'}
            desc={'IOS App, Android App'}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
