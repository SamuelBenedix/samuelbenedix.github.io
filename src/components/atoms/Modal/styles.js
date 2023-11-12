import { css } from '@emotion/css';

export const styModal = (show) => css`
  position: fixed;
  display: ${show ? 'block' : 'none'};
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 990;
`;

export const styOverlay = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 995;
  background: rgba(0, 0, 0, 0.6);
`;

export const styModalContent = css`
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 46%;
  transform: translate(-50%, -50%);
  max-height: 90%;
  overflow: auto;
  background: #fff;
  box-sizing: border-box;
  padding: 20px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  min-height: 250px;
  width: 400px; /* This just a default width */
  margin: 0 20px;
`;

export const styModalTitle = css`
  font-size: 28px;
  font-weight: 200;
  margin: 20px 0 40px;
  text-align: center;
`;

export const styButtonWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;

export const styModalClose = css`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  opacity: 0.5;
  background: none;
  border: none;
  transition: opacity 0.2s ease;
  &:hover: {
    opacity: 0.9;
  }
`;

export const styMidIcon = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const textDetail = css`
  font-family: 'Poppins', sans-serif;
  text-align: center;
  font-weight: 400;
  font-size: 14px;
`;
