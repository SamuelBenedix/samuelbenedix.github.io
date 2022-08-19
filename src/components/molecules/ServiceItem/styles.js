import { css } from '@emotion/css';

export const styServicesItem = css`
  flex: 0 0 50%;
  max-width: 50%;

  @media (min-width: 576px) {
    max-width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 33.333333%;
  }

  @media (max-width: 480px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export const styWrapper = css`
  margin-bottom: 36px;
  @media (min-width: 768px) {
    margin-bottom: 72px;
  }
`;

export const styIcon = css`
  width: 77px;
  height: 77px;
  position: relative;
  margin: 0 auto;
`;

export const styText = css`
  text-align: center !important;
  width: 100%;
  max-width: 230px;
  margin: 16px auto 0;
  h3 {
    font-weight: 700;
    font-size: 19px;
  }

  p {
    display: block;
    margin-top: 15px;
    font-size: 15;
    line-height: 1.73;
    letter-spacing: 0.5px;
    color: #626881;
  }
  @media (min-width: 768px) {
    margin: 24px auto 0;
  }
`;

export const styIconCircle = css`
  width: 77px;
  height: 77px;
  border-radius: 50%;
  background: hsla(171, 87%, 67%, 1);

  background: linear-gradient(
    90deg,
    hsla(171, 87%, 67%, 1) 0%,
    hsla(236, 100%, 72%, 1) 100%
  );

  background: -moz-linear-gradient(
    90deg,
    hsla(171, 87%, 67%, 1) 0%,
    hsla(236, 100%, 72%, 1) 100%
  );

  background: -webkit-linear-gradient(
    90deg,
    hsla(171, 87%, 67%, 1) 0%,
    hsla(236, 100%, 72%, 1) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#61F4DE", endColorstr="#6E78FF", GradientType=1 );

  display: flex;
  justify-content: center;
  align-items: center;
`;
