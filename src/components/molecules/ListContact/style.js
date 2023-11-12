import { css } from '@emotion/css';
import { colors } from '../../../assets';

export const styContainer = css`
  border-bottom: 1px solid #808080;
  cursor: pointer;
  position: relative;
  display: flex;
  align-item: center;
  transition: all 400ms cubic-bezier(0.47, 1.64, 0.41, 0.8);
  min-height: 50px;
  height: 100%;
`;

export const styWrapper = css`
  display: flex;
  width: 100%;
`;

export const styContainerDetailContact = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  padding: 5px 5px;
  transition: 1s;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
`;

export const styFlexCenter = css`
  heigth: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const styBtnFav = css`
  heigth: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
  transition: all 400ms cubic-bezier(0.47, 1.64, 0.41, 0.8);
  &:hover {
    transform: scale(1.2);
  }
`;

export const styBtnEdit = css`
  &:hover {
    background-color: #fffaaa;
  }
`;

export const styName = css`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 17px;
  margin-bottom: 2px;
  max-width: 250px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const styPhoneNumber = css`
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 300;
  font-color: #f9f8fe;
`;

export const styIconWrapper = (isDelete) => css`
  display: flex;
  flex-direction: row;
  transition: 0.4s linear;
  position: absolute;
  width: ${isDelete ? '100%' : '22%'};
  min-width: 50px;
  right: 0;
  bottom: 0;
  top: 0;
`;

export const styIcon = css`
  width: 20px;
`;

export const styIconEdit = css`
  heigth: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
  background-color: ${colors.editColor};

  &:hover svg {
    transform: scale(1.2);
  }

  &:hover {
    background-color: ${colors.editColorHover};
  }
`;

export const styIconDelete = css`
  heigth: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 15px;
  background-color: ${colors.deleteColor};

  &:hover svg {
    transform: scale(1.2);
  }

  &:hover {
    background-color: ${colors.deleteColorHover};
  }
`;
