import React from 'react';
import { ServiceItem, FeaturedItem } from '../../molecules';

import {
  stySection,
  styContent,
  styFeatured,
  stySectionTitle,
  styServicesContainer,
} from './styles';

const Featured = () => {
  return (
    <section className={stySection}>
      <div className={styContent}>
        <div className={stySectionTitle}>
          <h2>Featured Projects</h2>
        </div>

        <div className={styServicesContainer}>
          <div className={styFeatured}>
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
