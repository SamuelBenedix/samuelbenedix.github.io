import React from 'react';

import {
  styFeaturedItem,
  styCoverWrapper,
  styText,
  styCover,
  styDominant,
  styImage,
  styTextOverlay,
  styTextLabel,
} from './styles';

const FeaturedItem = ({ item }) => {
  return (
    <div className={styFeaturedItem}>
      <a href={item.url} className={styCoverWrapper}>
        <div className={styCover}>
          <div className={styDominant} />
          <img
            src={item.image_src}
            alt={item.title}
            loading="lazy"
            className={styImage}
            draggable="false"
          />
        </div>
        <div className={styText}>
          <div className={styTextOverlay}>
            <div className="overlay">
              <p className={styTextLabel}>{item.title}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default FeaturedItem;
