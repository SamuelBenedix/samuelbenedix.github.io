import { css } from '@emotion/css';
import { colors } from '../../../utils';

export const stySection = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 25vh;
  padding-top: 0px;
  position: relative;
  margin-top: 20px;
  padding-bottom: 40px;
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

  align-items: center;

  @media screen and (max-width: 768px) {
    padding-right: var(--bs-gutter-x, 3rem);
    padding-left: var(--bs-gutter-x, 3rem);
    flex-direction: column-reverse;
  }
`;

export const styAbout = css`
  width: 50%;
  h2 {
    font-weight: 700;
    font-size: 35px;
  }
  a {
    color: ${colors.primary[900]};
    text-decoration: none;
    font-weight: 500;
    img {
      transition: all 0.5s;
    }
    &:hover {
      img {
        transform: translateX(10px);
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      text-align: center;
    }
    p {
      text-align: center;
    }
  }
`;

export const styWrapperCounter = css`
  width: 15%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  h2 {
    font-weight: 700;
    font-size: 80px;
    line-height: 80px;
  }
  p {
    font-size: 18px;
    line-height: 18px;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    width: 50%;
    margin-bottom: 20px;
  }
`;

export const styCounter = css`
  padding: 0 40px;
  @media screen and (max-width: 768px) {
    padding: 0 25px;
  }
`;
