import { css } from '@emotion/css';

export const styWrapperCounter = css`
  width: 15%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  h2 {
    font-weight: 700;
    font-size: 80px;
    line-height: 80px;
  }
  p {
    font-size: 18px;
    line-height: 18px;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    width: 50%;
    margin-bottom: 20px;
  }
`;
