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
            <img src={PictWebDev} alt="Website Developer" />
          </Tilt>
        </div>
        <div className={styPictDesignDev}>
          <Tilt>
            <img src={PicUiDesignerTitle} alt="Design UI" />
          </Tilt>
        </div>
        <div className={styPictAndroidDev}>
          <Tilt>
            <img src={PictTitleAndroidDev} alt="Android Developer" />
          </Tilt>
        </div>
        <div className={styPictIosDev}>
          <Tilt>
            <img src={PictIosDevTitle} alt="IOS Developer" />
          </Tilt>
        </div>
      </div>
      <div className={styLine} />
      <img src={PictProfile} className={styPict2} alt="Profile" />
    </div>
  );
};

export default ProfileIntro;
