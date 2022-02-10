import { css } from '@emotion/css';

export const stySection = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100%;
  padding-top: 0px;
  position: relative;
  margin-bottom: 50px;
  overflow: hidden;
  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }
  @media screen and (max-width: 1024px) {
    margin-top: 50px;
  }
`;

export const styContent = css`
  width: 100%;
  margin-top: 150px;
  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
`;

export const styBackground = css`
  position: absolute;
  margin-top: 84px;
  top: 0;
  z-index: -1;
`;
