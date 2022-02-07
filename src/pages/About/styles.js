import { css } from '@emotion/css';

export const styContainer = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transfrom: (-50%, -50%);
`;

export const styLogo = css`
  width: 200px;
  path {
    fill: transparent;
    stroke: 10;
    stroke: red;
    stroke-dasharray: 50;
    stroke-dashoffset: 100;
  }
`;
