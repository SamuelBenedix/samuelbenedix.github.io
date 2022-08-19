import React from 'react';
import { FeaturedItem } from '../../molecules';

import { stySection, styContent, styFeatured, stySectionTitle } from './styles';

import { ProjectJson } from '../../../assets';

const Featured = () => {
  return (
    <section className={stySection}>
      <div className={styContent}>
        <div className={stySectionTitle}>
          <h2>Featured Projects</h2>
        </div>

        <div className={styFeatured}>
          {ProjectJson.data.map((item) => (
            <FeaturedItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
