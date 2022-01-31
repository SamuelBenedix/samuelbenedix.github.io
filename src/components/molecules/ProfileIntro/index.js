import React from 'react';
import {
  PictIosDevTitle,
  PictProfile,
  PictTitleAndroidDev,
  PictWebDev,
  PicUiDesignerTitle,
} from '../../../assets';
import {
  styContainerPict,
  styPict2,
  styPictIosDev,
  styPictDesignDev,
  styPictWebDev,
  styPictAndroidDev,
  styPict,
  styLine,
} from './styles';

import Tilt from 'react-parallax-tilt';

const ProfileIntro = () => {
  return (
    <div className={styContainerPict}>
      <div className={styPict}>
        <div className={styPictWebDev}>
          <Tilt>
            <img src={PictWebDev} alt="Logo" />
          </Tilt>
        </div>
        <div className={styPictDesignDev}>
          <Tilt>
            <img src={PicUiDesignerTitle} alt="Logo" />
          </Tilt>
        </div>
        <div className={styPictAndroidDev}>
          <Tilt>
            <img src={PictTitleAndroidDev} alt="Logo" />
          </Tilt>
        </div>
        <div className={styPictIosDev}>
          <Tilt>
            <img src={PictIosDevTitle} alt="Logo" />
          </Tilt>
        </div>
      </div>
      <img src={PictProfile} className={styPict2} alt="Logo" />
      <div className={styLine} />
    </div>
  );
};

export default ProfileIntro;
