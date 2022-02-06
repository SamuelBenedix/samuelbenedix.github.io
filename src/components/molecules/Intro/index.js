/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState, useRef } from 'react';
import { Button, Modal } from '../../atoms';
import {
  styIntro,
  styName,
  styDot,
  styTitle,
  styBtnPosition,
  styWrapper,
} from './styles';

const Intro = () => {
  const [elementPosition, setElementPosition] = useState();
  const [showModal, setShowModal] = useState(false);

  const btnPosition = useRef();

  const onScroll = () => {
    let offsetTop = btnPosition.current.getBoundingClientRect().top;
    console.log(offsetTop);
    if (offsetTop < 50) {
      setElementPosition(true);
    }
    if (offsetTop > 50) {
      setElementPosition(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      <p className={styIntro}>Hello, my name is</p>
      <h1 className={styName}>
        Samuel B<span className={styDot}>.</span>
      </h1>
      <h3 className={styTitle}>
        Designer
        <span className={styDot}> // </span>
        Developer
      </h3>
      <div className={styWrapper}>
        <div className={styWrapper} ref={btnPosition}>
          <div className={styBtnPosition(elementPosition)}>
            <Button
              main={true}
              position={elementPosition}
              onClick={openModal}
            />
          </div>
        </div>
      </div>
      <Modal setShowModal={setShowModal} showModal={showModal} />
    </div>
  );
};

export default Intro;
