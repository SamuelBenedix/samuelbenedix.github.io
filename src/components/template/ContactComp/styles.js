import { css, keyframes } from '@emotion/css';
import { colors } from '../../../utils';

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(-20px, 0px, 0);
  }

  70% {
    transform: translate3d(-10px, 0, 0);
  }

  90% {
    transform: translate3d(-4px,0,0);
  }
`;

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
  margin-right: auto;
  margin-left: auto;
  position: relative;
  background-color: #fff;
  z-index: 1;
  min-width: 1000px;
  min-height: 550px;
  margin-top: 30px;
  display: flex;
  box-shadow: 25px 25px 50px ${colors.primary[200]},
    -15px -15px 35px ${colors.primary[200]};
  border-radius: 25px;

  @media screen and (max-width: 1600px) {
    width: calc(100% - 650px);
  }

  @media screen and (max-width: 1400px) {
    width: calc(100% - 800px);
    min-width: 850px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    min-width: 200px;
    width: calc(100% - 50px);
  }
`;

export const styBackground = css`
  position: absolute;
  margin-top: 30px;
  z-index: -1;
`;

export const styContactInfo = css`
  position: absolute;
  top: 120px;
  left: -80px;
  width: 350px;
  height: calc(100% - 80px);
  background: ${colors.primary[900]};
  z-index: 2;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.12);
  padding: 40px 25px 15px 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-weight: 700;
    line-height: 1.2;
    color: #fff;
    text-align: center;
  }

  p {
    margin: 9px 0 10px;
    font-size: 12px;
    line-height: 1.4;
    color: #757c98;
    max-width: 100%;
    text-align: center;
    color: rgba(256, 256, 256, 0.7);
  }

  ul {
    list-style: none;
    padding-left: 0;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 10px;
    li {
      padding-top: 10px;
      color: #fff;
      font-size: 17px;
      span {
        margin-left: 10px;
      }
    }
  }

  @media screen and (max-width: 1400px) {
    top: 140px;
    left: -10px;
    width: 300px;
    h2 {
      font-size: 25px;
    }
  }

  @media screen and (max-width: 768px) {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin-top: 50px;
  }
`;

export const styContactForm = css`
  position: absolute;
  padding: 40px 20px 0px 40px;
  padding-left: 220px;
  margin-left: 150px;
  width: calc(100% - 150px);

  h2 {
    font-weight: 700;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    position: relative;
    padding: 30px 30px;
    margin: 0;
    width: 100%;
  }
`;

export const styClipBoard = (copy) => css`
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
  transition: all 0.5s ease-in-out;
  transition-delay: 0.15s;
  color: #fff;
  font-weight: 500;
  font-size: 16px;

  svg {
    transition: all 0.5s ease-in-out;
    transition-delay: 0.15s;
    margin-left: 7px;
    stroke: #fff;
  }

  opacity: ${copy ? '0' : '1'};
  &:hover {
    color: rgba(256, 256, 256, 0.7);
    svg {
      stroke: rgba(256, 256, 256, 0.7);
    }
  }
`;

export const styToolTipName = (copy) => css`
  position: absolute;
  top: ${copy ? '0px' : '-50px'};
  opacity: ${copy ? 1 : 0};
  transition: all 0.5s ease-in-out;
  transition-delay: 0.15s;
  color: #fff;
  cursor: default;
  svg {
    transition: all 0.5s ease-in-out;
    transition-delay: 0.15s;
    margin-left: 7px;
    stroke: #fff;
  }
`;

export const styToolTip = css`
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const styBtnWrapper = css`
  position: relative;
  margin-top: 20px;

  button {
    padding: 0;
    bottom: 0;
    p {
      color: #fff;
      margin: 0;
      padding: 0;
    }
  }
`;

export const stySocialMedia = css`
  position: absolute;
  bottom: 10px;
  left: 10%;

  h5 {
    font-size: 16px;
    color: ${colors.primary[900]};
    font-weight: 500;
    svg {
      animation: ${bounce} 1s ease infinite;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
