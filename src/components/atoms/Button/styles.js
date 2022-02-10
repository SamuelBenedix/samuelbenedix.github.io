import { css } from '@emotion/css';
import { colors } from '../../../utils';

export const styContainer = (position) => css`
  height: ${position ? 64 : 50}px;
  width: ${position ? 64 : 220}px;
  padding: ${position ? '0' : '16px 50px'};
  font-weight: 700;
  font-size: 0.8rem;
  line-height: ${position ? 0 : 18}px;
  letter-spacing: 1.54px;
  text-transform: uppercase;
  border-radius: 2px;
  background-color: ${position ? '#ef4b6c' : colors.primary[900]};
  border: 0;
  color: ${colors.light[900]};
  transition: all 0.5s ease-in-out;
  border-radius: ${position ? '50%' : 0};
  transform: translateZ(0);

  width: ${position ? 40 : 0} px;
  position: ${position ? 'fixed' : 'relative'};
  bottom: ${position ? 'calc(100vh - 101vh)' : 'calc(100vh - 95vh)'};
  margin-bottom: ${position && '20px'};
  right: ${position ? 30 : 10}px;
  left: ${position ? 'calc(100% - 94px)' : 0};
  z-index: ${position ? 9 : 3};

  justify-content: center;
  align-items: center;
  display: ${position && 'flex'};

  &:hover {
    background-color: ${position
      ? 'rgba(239, 75, 108,.8)'
      : colors.primary[800]};
  }
`;

export const styIcon = (position) => css`
  visibility: ${position ? 'visibilty' : 'hidden'};
  display: ${position ? 'block' : 'none'};
`;

export const styTitle = (position) => css`
  visibility: ${position ? 'hidden' : 'visibilty'};
  display: ${position ? 'none' : 'inline-block'};
`;

export const styContainerSecondary = css`
  height: 50px;
  width: 220px;
  padding: 10px 20px;
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 18px;
  letter-spacing: 1.54px;
  text-transform: uppercase;
  border-radius: 2px;
  text-decoration: none;
  background-color: #ef4b6c;
  border: 0;
  color: ${colors.light[900]};
  transition: all 0.5s ease-in-out;
  border-radius: 0;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);

  p {
    margin-bottom: 0px;
  }

  &:hover {
    background-color: #ef4b6c;
    opacity: 0.8;
  }
`;

export const styTitleSecondary = css`
  display: inline-block;
  margin-bottom: 0rem;
`;

export const styMail = css`
  height: 64px;
  width: 64px;
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 0px;
  letter-spacing: 1.54px;
  text-transform: uppercase;
  border-radius: 2px;
  background-color: #ef4b6c;
  border: 0;
  color: ${colors.light[900]};
  transition: all 0.5s ease-in-out;
  border-radius: 50%;
  transform: translateZ(0);

  position: fixed;
  bottom: calc(100vh - 101vh);
  margin-bottom: 20px;
  right: 30px;
  left: calc(100% - 94px);
  z-index: 9;

  justify-content: center;
  align-items: center;
  display: flex;

  &:hover {
    background-color: rgba(239, 75, 108, 0.8);
  }
`;

export const styMailText = css`
  visibility: visibilty;
  display: block;
`;
