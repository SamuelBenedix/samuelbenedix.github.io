import React from 'react';
import { Featured } from '../../organizm';
import { styContent, stySection } from './styles';
import { Button } from '../../atoms';

const FeatureComp = ({ onClick }) => {
  return (
    <section className={stySection}>
      <div className={styContent}>
        <Featured />
      </div>
      <Button mail onClick={onClick} />
    </section>
  );
};

export default FeatureComp;
