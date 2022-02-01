import { css } from '@emotion/css';
import { colors } from '../../../utils';

export const styContainerPict = css`
  position: relative;
  transition: all 0.5s;
  @media screen and (max-width: 1024px) {
    margin-bottom: 30px;
  }
`;

export const styPict = css`
  top: 50%;
  transition: all 0.5s;
  transform: translate(-100%, -50%);
  position: absolute;
  z-index: 3;
  left: 0;
`;

export const styPict2 = css`
  position: relative;
  transition: all 0.5s;
  @media screen and (max-width: 1024px) {
    width: 400px;
  }
  @media screen and (max-width: 1400px) {
    width: 400px;
  }
`;

export const styPictIosDev = css`
  position: absolute;
  top: 140px;
  left: 380px;
  transition: all 0.5s;
  @media screen and (max-width: 1024px) {
    top: 80px;
    left: 280px;
    img {
      width: 120px;
    }
  }
  @media screen and (max-width: 1400px) {
    top: 80px;
    left: 280px;
    img {
      width: 130px;
    }
  }
`;

export const styPictAndroidDev = css`
  position: absolute;
  top: 80px;
  left: -40px;
  transition: all 0.5s;
  @media screen and (max-width: 1024px) {
    img {
      width: 120px;
    }
  }
  @media screen and (max-width: 1400px) {
    img {
      width: 150px;
    }
  }
`;

export const styPictWebDev = css`
  position: absolute;
  top: -180px;
  left: 420px;
  transition: all 0.5s;
  @media screen and (max-width: 1024px) {
    top: -150px;
    left: 320px;
    img {
      width: 120px;
    }
  }
  @media screen and (max-width: 1400px) {
    top: -150px;
    left: 320px;
    img {
      width: 150px;
    }
  }
`;

export const styPictDesignDev = css`
  position: absolute;
  top: -120px;
  left: -30px;
  transition: all 0.5s;
  @media screen and (max-width: 1024px) {
    img {
      width: 120px;
    }
  }
  @media screen and (max-width: 1400px) {
    img {
      width: 130px;
    }
  }
`;

export const styLine = css`
  position: absolute;
  height: 50px;
  background-color: ${colors.primary[900]};
  width: 100vh;
  left: 0;
  bottom: 0;
  transition: all 0.5s;
  @media screen and (max-width: 1400px) {
  }
`;
