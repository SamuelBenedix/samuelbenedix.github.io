import { css } from '@emotion/css';
import { colors } from '../../../utils';

export const styMainMenu = css`
  width: 100%;
  position: absolute;
  z-index: 10;
  top: 0;
`;

export const styNavbarWrapper = css`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px;
  }
`;

export const styNavbarToggle = css`
  visibility: hidden;
  display: none;
  @media screen and (max-width: 768px) {
    visibility: visible;
    display: block;
    left: 0;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    border: none;
    margin: 0;
  }
`;

export const styShowSidebar = css`
  @media screen and (max-width: 768px) {
    visibility: visible;
    filter: blur(4px);
    background: rgba(0, 0, 0, 0.6);
  }
`;

export const styMobileNavLinks = css`
  @media screen and (max-width: 768px) {
    left: 0;
  }
`;

export const styLinkWrapper = (toggle) => css`
  position: relative;
  @media screen and (max-width: 768px) {
    visibility: ${toggle ? 'visible' : 'hidden'};
    display:${toggle ? 'block' : 'none'}
    transition: all 0.5s;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    height: 100vh;
    width: 100%;
    z-index: 1100;
    top: 0;
    right: 0;
  }
`;

export const styNavLinks = (toggle) => css`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0;
  padding-left: 0;
  @media screen and (max-width: 768px) {
    display: block;
    position: fixed;
    height: 100vh;
    width: 420px;
    max-width: calc(100% - 30px);
    z-index: 1101;
    top: 0;
    right: ${!toggle ? -420 : 0}px;
    transition: all 0.5s;
    background-color: #fff;
  }
`;

export const styNavLink = css`
  list-style: none;
  padding: 30px 25px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
    padding: 0;
  }
`;

export const styNavItem = (active) => css`
  text-decoration: none;
  position: relative;
  font-size: 18px;
  font-weight: 600;
  color: ${active ? colors.primary[900] : '#333333'};
  &:hover {
    color: ${colors.primary[900]};
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 20px 25px;
    display: block;
    font-size: 22px;
    letter-spacing: 1px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.18);
  }
`;

export const styCloseSidebar = css`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    margin: 22px 30px 0px auto;
    font-size: 27px;
    cursor: pointer;
    &:hover {
      color: #b09774;
    }
  }
`;

export const styIndicator = (width, left) => css`
  position: absolute;
  bottom: 25px;
  width: ${width / 2}px;
  left: ${left}px;
  height: 3.5px;
  background: ${colors.primary[900]};
  transition: all 0.5s ease-in-out;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
