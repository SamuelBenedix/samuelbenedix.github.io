import { css } from '@emotion/css';
import { colors } from '../../../utils';

export const styBackdrop = (showModal) => css`
 visibility: ${showModal ? 'visible' : 'hidden'};
 display:${showModal ? 'block' : 'none'}
 transition: all 0.5s;
 background-color: rgba(0, 0, 0, 0.6);
 position: fixed;
 height: 100vh;
 width: 100%;
 z-index: 1100;
 top: 0;
 right: 0;
`;

export const styModalContent = css`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const styWrapper = (showModal) => css`
  max-width: 600px;
  min-height: calc(100% - 4.5rem);
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  position: relative;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease-in-out;
  transition-delay: 0.15s;
  overflow-x: hidden;
  overflow-y: auto;
  margin: 1.75rem auto;
  cursor: default;
  padding: 20px;
  overflow-y: auto;

  top: ${showModal ? 0 : '-800px'};
  opacity: ${showModal ? 1 : 0};

  @media screen and (max-width: 768px) {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    overflow-y: hidden;
    border-radius: 0;
    overflow-y: auto;
  }

  @media (min-width: 576px) {
    min-height: calc(100% - 3.5rem);
  }

  @media (max-width: 480px) {
    padding: 0px;
  }
`;

export const styModalClose = css`
  margin-left: auto;
  cursor: pointer;
  svg {
    transition: all 2s;
  }

  &:hover {
    svg {
      stroke: ${colors.primary[900]};
    }
  }

  @media (max-width: 480px) {
    padding: 10px 25px;
  }
`;

export const styContent = css`
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-weight: 700;
    line-height: 1.2;
  }
  p {
    margin: 9px 0 10px;
    font-size: 12px;
    line-height: 2;
    color: #757c98;
    max-width: 70%;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 25px 0px;
  }
`;

export const styBtnWrapper = css`
  margin: 20px auto 10px;
`;

export const styToolTip = css`
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const styClipBoard = (copy) => css`
  cursor: pointer;
  margin-bottom: 10px;
  transition: all 0.5s ease-in-out;
  transition-delay: 0.15s;

  svg {
    transition: all 0.5s ease-in-out;
    transition-delay: 0.15s;
    margin-left: 7px;
  }

  opacity: ${copy ? '0' : '1'};
  &:hover {
    color: ${colors.primary[900]};
    svg {
      stroke: ${colors.primary[900]};
    }
  }
`;

export const styToolTipName = (copy) => css`
  position: absolute;
  top: ${copy ? '0px' : '-50px'};
  opacity: ${copy ? 1 : 0};
  transition: all 0.5s ease-in-out;
  transition-delay: 0.15s;
  color: ${copy ? colors.status.success : '#000'};
  cursor: default;
  svg {
    transition: all 0.5s ease-in-out;
    transition-delay: 0.15s;
    margin-left: 7px;
    stroke: ${copy ? colors.status.success : '#000'};
  }
`;
