import React from 'react';
import { styCounter } from './styles';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import VisibilitySensor from 'react-visibility-sensor';
import { useInView } from 'react-intersection-observer';

const CounterElement = ({ title, max }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const variants = {
    visible: { opacity: 1 },
    hidden: {
      opacity: 0,
    },
  };
  return (
    <motion.div
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 2, ease: 'easeOut' }}
      ref={ref}
    >
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <div className={styCounter}>
            <React.Fragment>
              {isVisible ? (
                <h2>
                  <CountUp end={max} />
                </h2>
              ) : (
                <h2>0</h2>
              )}
            </React.Fragment>

            <p>{title}</p>
          </div>
        )}
      </VisibilitySensor>
    </motion.div>
  );
};

export default CounterElement;
