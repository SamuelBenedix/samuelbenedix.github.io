import { css } from '@emotion/css';

export const stySection = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding-top: 0px;
  position: relative;
  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }
`;

export const styContent = css`
  width: 100%;
  padding-right: var(--bs-gutter-x, 10rem);
  padding-left: var(--bs-gutter-x, 10rem);
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: space-between;

  flew-wrap: wrap;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding-right: var(--bs-gutter-x, 2rem);
    padding-left: var(--bs-gutter-x, 2rem);
    flex-direction: column-reverse;
  }

  @media screen and (max-width: 1024px) {
    padding-right: var(--bs-gutter-x, 2rem);
    padding-left: var(--bs-gutter-x, 2rem);
    flex-direction: column-reverse;
  }
`;

export const styBackground = css`
  position: absolute;
  margin-top: 30px;
  z-index: -1;
`;
