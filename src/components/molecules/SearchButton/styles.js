import { css } from '@emotion/css';
import { colors } from '../../../assets';

export const styWrapper = css`
  width: 100%;
  margin-right: 60px;
  display: flex;
  align-items: center;
`;

export const styButtonSearch = css`
  display: inline-block;
  outline: none;
  cursor: pointer;
  padding: 3px 10px;
  border: 1px solid #222222;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s,
    -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s;
  background: #fff;
  color: #222222;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border: 2px solid #dee1e2;
  background: #dee1e2;
  height: 36px;
`;

export const styContainer = css`
  font-size: 14px;
  border-radius: 6px;
  line-height: 1.5;
  padding: 0px 15px;

  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border: 2px solid #dee1e2;
  background: ${colors.primaryWhite};
  display: block;
  height: 32px;
  width: 100%;
  align-items: center;
  :hover {
    opacity: 0.6;
  }
  :focus {
    background: #fff;
    border: 2px solid #dee1e2;
  }
`;
