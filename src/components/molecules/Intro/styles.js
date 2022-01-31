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
  @media screen and (max-width: 1024px) {
    text-align: center;
  }
`;
