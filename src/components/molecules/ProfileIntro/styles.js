import { css } from '@emotion/css';
import { colors } from '../../../utils';

export const styContainerPict = css`
  position: relative;
`;

export const styPict = css`
  top: 50%;
  transform: translate(-100%, -50%);
  position: absolute;
  z-index: 3;
  left: 0;
`;

export const styPict2 = css`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-100%, -50%);
  z-index: 2;
`;

export const styPictIosDev = css`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-110%, 250%);
`;

export const styPictAndroidDev = css`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-320%, 230%);
`;

export const styPictWebDev = css`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-70%, -350%);
`;

export const styPictDesignDev = css`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-360%, -200%);
`;

export const styLinkWrapper = css`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-360%, -200%);
`;

export const styLine = css`
  position: absolute;
  height: 50px;
  background-color: ${colors.primary[900]};
  width: 100vh;
  transform: translate(-70%, 580%);
`;
