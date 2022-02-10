import { css } from '@emotion/css';
import { colors } from '../../../utils';

export const stySection = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100%;
  padding-top: 0px;
  position: relative;
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
    flex-direction: column;
  }

  @media screen and (max-width: 1024px) {
    padding-right: var(--bs-gutter-x, 2rem);
    padding-left: var(--bs-gutter-x, 2rem);
    flex-direction: column;
  }
`;

export const styBackground = css`
  position: absolute;
  margin-top: 30px;
  z-index: 0;
`;

export const styProfileWrapper = css`
  position: relative;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 50px;
  }
`;

export const styProfilePict = css`
  overflow: hidden;
  border: 5px solid #fff;
  border-radius: 50%;

  background-color: ${colors.primary[900]};
  margin-right: 20px;
  display: flex;
  justify-content: center;
  max-width: 400px;
  max-height: 400px;
  margin-bottom: 10px;

  img {
    display: block;
    width: 100%;
    max-width: 400px;
  }

  @media screen and (max-width: 768px) {
    margin-right: 0px;
    margin-bottom: 20px;

    img {
      display: block;
      width: 100%;
      max-width: 250px;
    }
  }

  @media screen and (max-width: 1024px) {
    margin-right: 0px;
    margin-bottom: 10px;

    img {
      display: block;
      width: 100%;
      max-width: 300px;
    }
  }
`;

export const stySectionAbout = css`
  max-width: 50%;

  h3 {
    font-weight: 700;
    font-size: 32px;
    transition: all 2s;
    position: relative;
  }

  @media screen and (max-width: 1024px) {
    max-width: 100%;
    padding: 0px 100px;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    padding: 0px;
  }
`;

export const styProfileName = css`
  text-align: center;

  color: #000;
  width: 100%;
  h3 {
    font-size: 25px;
    font-weight: 700;
  }
  h5 {
    font-size: 20px;
    font-weight: 500;
  }

  span {
    color: ${colors.primary[900]};
    font-weight: 700;
  }
`;

export const styInfo = css`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  padding: 0;
  li {
    flex: 0 0 50%;
    max-width: 50%;
    display: block;
    label {
      color: ${colors.primary[900]};
      margin-right: 5px;
    }
  }
`;
