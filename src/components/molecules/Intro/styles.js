import { css } from '@emotion/css';
import { colors } from '../../../utils';

export const styIntro = css`
  color: ${colors.dark[700]};
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 0rem;
  line-height: 20px;
  @media screen and (max-width: 1024px) {
    text-align: center;
  }
`;

export const styName = css`
  font-size: 90px;
  line-height: 90px;
  font-weight: 700;
  @media screen and (max-width: 1024px) {
    text-align: center;
  }
`;

export const styDot = css`
  color: ${colors.primary[900]};
`;

export const styTitle = css`
  font-weight: 600;
  margin-bottom: 20px;
  @media screen and (max-width: 1024px) {
    text-align: center;
  }
`;

export const styWrapper = css`
  position: relative;
  height: 170px;
  padding: 40px 0 80px;
`;

export const styBtnPosition = (position = false) => css`
  transition: all 1s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 1024px) {
    justify-content: center;
    align-items: center;
    display: flex;
  }
`;

// width: ${position ? 40 : 0} 40px;
// position: ${position ? 'fixed' : 'relative'};
// bottom: ${position && 20}px;
// right: ${position && 130}px;
// left: ${position && 'auto'};
// z-index: ${position && 10};
