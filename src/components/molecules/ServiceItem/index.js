import React from 'react';
import { Code, Smartphone, Image } from 'react-feather';
import {
  styServicesItem,
  styWrapper,
  styIcon,
  styText,
  styIconCircle,
} from './styles';
import { useInView } from 'react-intersection-observer';
import ScrollAnimation from 'react-animate-on-scroll';
import { motion } from 'framer-motion';

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

  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: {
      opacity: 0,
      y: 150,
    },
  };

  return (
    <motion.div
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 2, ease: 'easeOut' }}
      ref={ref}
    >
      <div className={styServicesItem}>
        <ScrollAnimation animateIn="rubberBand">
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
        </ScrollAnimation>
      </div>
    </motion.div>
  );
};

export default ServiceItem;
