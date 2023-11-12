import { css, keyframes } from '@emotion/css';
import { colors } from '../../../assets';

export const styContainer = css`
  display: flex;
  justify-content: center;
  align-item: center;
`;

const Animation = keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`;

export const styLabel = css`
  font-weight: 600;
  font-size: 50px;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  background: none;
  font-family: 'Poppins', sans-serif;
  border-radius: 50%;
  color: ${colors.primaryWhite};
  background: linear-gradient(270deg, #0000ff, #ff0000);
  background-size: 400% 400%;

  -webkit-animation: ${Animation} 3s ease infinite;
  -moz-animation: ${Animation} 3s ease infinite;
  animation: ${Animation} 3s ease infinite;
`;
