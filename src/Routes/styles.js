import { css } from '@emotion/css';

export const styContainer = css`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 0px;
  background: #93caed;
  backdrop-filter: saturate(180%) blur(10px);
`;

export const styMobileView = css`
  width: 480px;
  background-color: #fff;
  backdrop-filter: saturate(180%) blur(10px);
  height: 100%;
  border-radius: 12px;
  height: calc(100vh - 40px);
  overflow: hidden;
`;

export const styMobileContainer = css`
  padding: 5px 0px 0px 0px;
`;
export const styTitle = css`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 35px;
  padding: 0 30px;
`;
