import { css } from '@emotion/css';
import { colors } from '../../../assets';

export const styContainer = css`
  width: 100%;
`;

export const styLabel = css`
  text-decoration: none;
  margin-bottom: 10px;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
`;

export const styTextInput = (focusColor) => css`
  border-radius: 6px;
  font-size: 15px;
  background: #fbfbfb;
  border: 1px solid #ced4da;
  height: 30px;
  width: 100%;
  padding: 5px 0px 5px 8px;
  margin: 0 2px;
  box-shadow: 0 0 0 1px #dddddd, 0 2px 4px 0 rgb(0 0 0 / 7%),
    0 1px 1.5px 0 rgb(0 0 0 / 5%);
    
  :focus {
    border: 2px solid ${focusColor}};
    border-radius: 4px;
  } 
  &::placeholder{
    font-style:italic;
    font-size: 12px;
  }`;

export const styWrapper = css`
  display: flex;
  align-items: center;
`;

export const styErrorText = css`
  color: ${colors.primaryRed};
`;
