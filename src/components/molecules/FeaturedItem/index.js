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

const FeaturedItem = () => {
  return (
    <div className={styFeaturedItem}>
      <a
        href="https://www.behance.net/gallery/94823367/Laundry-Guide-Outline-Icon-Set"
        className={styCoverWrapper}
      >
        <div className={styCover}>
          <div className={styDominant} />
          <img
            sizes="404px"
            src="https://mir-s3-cdn-cf.behance.net/projects/404/96715a94823367.5e8869f748f94.png"
            alt="Laundry Guide | Outline Icon Set"
            loading="lazy"
            class={styImage}
            draggable="false"
          />
        </div>
        <div className={styText}>
          <div className={styTextOverlay}>
            <div className="overlay">
              <p className={styTextLabel}>Laundry Guide | Outline Icon Set</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default FeaturedItem;
