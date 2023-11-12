import { css } from '@emotion/css';
import { colors } from '../../assets';

export const styContainer = css`
  margin: 0 50px 0 30px;
  overflow: scroll;
  margin-bottom: 40px;
`;

export const styContainerPhone = css`
  position: relative;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: scroll;
`;

export const styWrapper = css`
  padding: 0 30px;
  bottom: 0;
`;

export const styAddButton = css`
  border: 0px;
  box-sizing: border-box;
  text-align: center;
  text-decoration: none #d1d5db solid;
  background-color: transparent;
  padding: 0;
  margin: 0;
  text-decoration-thickness: auto;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: 1s ease;
  &:hover {
    opacity: 0.5;
  }
`;

export const styAddIcon = css`
  padding: 0;
`;

export const styBtnAdd = css`
  border-radius: 6px;
  font-size: 15px;
  background: #fbfbfb;
  border: 1px solid #ced4da;
  height: 30px;
  width: 100%;
  padding: 5px 0px 5px 8px;
  display: flex;
  align-items: center;
  box-shadow: 0 0 0 1px #dddddd, 0 2px 4px 0 rgb(0 0 0 / 7%),
    0 1px 1.5px 0 rgb(0 0 0 / 5%);
`;

export const styTextBtn = css`
  color: ${colors.secondaryColor};
  font-size: 15px;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
`;
