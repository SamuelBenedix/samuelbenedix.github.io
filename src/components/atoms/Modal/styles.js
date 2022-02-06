import { css } from '@emotion/css';
import { colors } from '../../../utils';

export const styBackdrop = css`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 11;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  max-height: 100%;
  @media screen and (max-width: 768px) {
    overflow-y: hidden;
  }
`;

export const styModalContent = css`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const styWrapper = css`
  max-width: 742px;
  min-height: calc(100% - 2.5rem);
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  position: relative;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-out;
  overflow-x: hidden;
  overflow-y: auto;
  margin: 1.75rem auto;
  cursor: default;
  padding: 20px;
  overflow-y: auto;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
    height: 100%;
    overflow-y: hidden;
    border-radius: 0;
    overflow-y: auto;
  }

  @media (min-width: 576px) {
    min-height: calc(100% - 3.5rem);
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
    margin: 9px 0 20px;
    font-size: 12px;
    line-height: 2;
    color: #757c98;
    max-width: 70%;
    text-align: center;
  }
`;

export const styBtnWrapper = css`
  margin: 20px auto 10px;
`;
