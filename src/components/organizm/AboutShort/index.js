import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { stySection, styContent, styAbout } from './styles';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Count } from '../../molecules';

const AboutShort = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: {
      opacity: 0,
      x: -150,
    },
  };

  return (
    <section className={stySection}>
      <div className={styContent}>
        <motion.div
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 2, ease: 'easeOut' }}
          ref={ref}
        >
          <div
            className={styAbout}
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 2, ease: 'easeOut' }}
            ref={ref}
          >
            <h2>About Me</h2>
            <p>
              I'm a passionate person who has a high entusiasm for learning
              especialy about technology. Mostly working with target, and strive
              for achievement.
            </p>
            <Link to="/about">
              Read more
              <FiArrowRight
                alt="Arrow"
                size={18}
                color="rgba(0, 136, 255, 1)"
              />
            </Link>
          </div>
        </motion.div>
        <Count />
      </div>
    </section>
  );
};

export default AboutShort;
