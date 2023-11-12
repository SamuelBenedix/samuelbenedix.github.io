import { css } from '@emotion/css';
import { colors } from '../../../assets';

export const styButton = css`
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  text-decoration-thickness: auto;
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;
  width: 100%;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 600;
  color: ${colors.primaryWhite};
  height: 46px;
  display: block;
  border: none;
`;

export const styPrimaryColor = css`
  background-color: ${colors.primaryColor};
  box-shadow: 0 1px 2px 0 ${colors.boxShadow};
  &:hover {
    background-color: ${colors.primaryColorHover};
  }
`;

export const styIconBig = css`
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 2px 0 ${colors.boxShadow};
`;

export const stySecondaryColor = css`
  background-color: ${colors.primaryWhite};
  color: ${colors.secondaryColor};
  border: 1px solid ${colors.secondaryColor};
  &:hover {
    background-color: ${colors.secondaryColor};
    color: ${colors.primaryWhite};
  }
`;

export const styBtnIcon = css`
  background-color: ${colors.primaryWhite};
  border: 0px solid rgb(209, 213, 219);
  box-sizing: border-box;
  padding: 8px;
  text-align: center;
  text-decoration: none #d1d5db solid;
  text-decoration-thickness: auto;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 36px;
  height: 36px;

  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);
  transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
  :hover {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 6px 20px rgb(93 93 93 / 23%);
  }

  &:hover {
    background-color: rgb(249, 250, 251);
  }
`;

export const styBtnDanger = css`
  background-color: ${colors.primaryRed};
  border: 0px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 10px;
  text-decoration: none #d1d5db solid;
  box-shadow: 0 1px 2px 0 ${colors.boxShadow};
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.primaryWhite}
  &:hover {
    background-color: #ff3d3d;
  }
`;

export const styBtnDelete = css`
  border: 1px solid rgb(209, 213, 219);
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
  text-decoration: none #d1d5db solid;
  text-decoration-thickness: auto;
  box-shadow: 0 1px 2px 0 ${colors.boxShadow};
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 600;
  color: ${colors.dangerColor};
  height: 46px;
  border: 1px solid ${colors.dangerColor};
  background-color: ${colors.primaryWhite};

  &:hover {
    color: ${colors.primaryWhite};
    background-color: ${colors.dangerColorHover};
  }
`;

export const styBtnDeleteReverse = css`
  border: 1px solid rgb(209, 213, 219);
  color: ${colors.primaryWhite};
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
  text-decoration: none #d1d5db solid;
  text-decoration-thickness: auto;
  box-shadow: 0 1px 2px 0 ${colors.boxShadow};
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 600;
  height: 46px;
  border: 1px solid ${colors.dangerColorHover};
  background-color: ${colors.dangerColorHover};
  &:hover {
    background-color: ${colors.dangerColor};
  }
`;

export const styButtonSecondary = css`
  border: 1px solid rgb(209, 213, 219);
  color: ${colors.primaryWhite};
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
  text-decoration: none #d1d5db solid;
  text-decoration-thickness: auto;
  box-shadow: 0 1px 2px 0 ${colors.boxShadow};
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 600;
  height: 46px;
  background-color: #808080;
  &:hover {
    background-color: #80808f;
  }
`;
