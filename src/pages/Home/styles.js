import { css } from '@emotion/css';

export const styMain = css`
  overflow: hidden;
  &::before {
    width: 100%;
    height: calc(100% - 640px);
    overflow: hidden;
    content: '';
    position: absolute;
    top: 640px;
    left: 0;
    background-image: linear-gradient(180deg, #fff, #f4f6fb, #fff);
  }
`;
