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
  margin-top: 100px;
  padding-bottom: 40px;
  @media (max-width: 480px) {
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
  flex-direction: column;
  justify-content: center;

  align-items: center;

  @media screen and (max-width: 768px) {
    padding-right: var(--bs-gutter-x, 3rem);
    padding-left: var(--bs-gutter-x, 3rem);
    flex-direction: column;
  }
`;

export const stySectionTitle = css`
  position: relative;
  padding: 0 0 5px;

  h2 {
    font-weight: 700;
    font-size: 35px;
  }

  &::before {
    width: 40px;
    height: 2px;
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    background-color: ${colors.primary[900]};
    transform: translateX(-50%);
  }

  @media (max-width: 480px) {
    text-align: center;
    h2 {
      font-weight: 700;
      font-size: 30px;
    }
  }
`;

export const styServicesContainer = css`
  margin-top: 32px;
  max-width: 600px;
  margin-bottom: 100px;
  text-align: center;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    margin-bottom: 65px;
  }
`;
