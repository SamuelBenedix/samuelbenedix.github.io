import React from 'react';
import { Featured } from '../../organizm';
import { styContent, stySection, styBackground } from './styles';
import { Button } from '../../atoms';
import { BackgroundLogo } from '../../../assets';

const FeatureComp = ({ onClick }) => {
  return (
    <section className={stySection}>
      <div className={styContent}>
        <Featured />
      </div>
      <div className={styBackground}>
        <BackgroundLogo alt="Logo" />
      </div>
      <Button mail onClick={onClick} />
    </section>
  );
};

export default FeatureComp;
