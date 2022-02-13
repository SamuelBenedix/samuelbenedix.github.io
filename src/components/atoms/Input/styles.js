import { css } from '@emotion/css';
import { colors } from '../../../utils';

export const styWrapper = css`
  position: relative;
  overflow: visible;
  padding-top: 20px;
  display: inline-block;
  width: 80%;
  margin-bottom: 20px;
  transition: all 0.1s ease;
  cursor: unset;
  vertical-align: top;
`;

export const styLabel = (focus) => css`
  position: absolute;
  z-index: 0;
  top: ${focus ? 6 : 23}px;
  margin: 0;
  font-size: ${focus ? 9 : 14}px;
  line-height: 1;
  letter-spacing: 0.5px;
  color: #757c98;
  transition: all 0.5s ease;
  font-weight: 400;
  display: block;
`;

export const styIndicator = css`
  display: inline;
  color: #ef4b6c;
  margin-left: 1px;
`;

export const styContainer = css`
  position: relative;
  display: block;
`;

export const styInputElement = (focus) => css`
  position: relative;
  z-index: 1;
  height: 32px;
  padding: 0 0 12px;
  font-size: 14px;
  position: relative;
  height: 32px !important;
  padding: 0 0 12px !important;
  font-size: 14px !important;
  line-height: 1 !important;
  letter-spacing: 0.5px;
  color: #1b2025;
  background-color: transparent;
  transition: all 0.25s ease;
  border: none !important;
  border-bottom: ${focus ? 1.4 : 1}px solid
    ${focus ? colors.primary[900] : 'rgba(190, 190, 190, 0.4)'} !important;
  border-radius: 0 !important;
  background: transparent;
  display: block;
  width: 100%;
  margin: 0 !important;
  outline: none;
  cursor: text;
`;

export const styTextArea = (focus) => css`
  position: relative;
  z-index: 1;
  overflow: hidden;
  word-wrap: break-word;
  height: 100px;
  max-height: 100px;
  line-height: 1.5;
  padding-top: 0 !important;
  transition: all 0.25s ease;
  padding: 16px 0 !important;
  border: none !important;
  border-bottom: ${focus ? 1.4 : 1}px solid
    ${focus ? colors.primary[900] : 'rgba(190, 190, 190, 0.4)'} !important;
  border-radius: 0 !important;
  color: inherit;
  background: transparent;
  display: block;
  width: 100%;
  outline: none;
  font-size: 15px;
  font-family: inherit;
  resize: none;
  outline: none;
  cursor: text;
`;

export const styError = (error) => css`
  display: inline;
  color: #ef4b6c;
  margin-left: 1px;
  line-height: 0px;
  font-size: 12px;
`;
