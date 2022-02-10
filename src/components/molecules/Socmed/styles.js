import { css } from '@emotion/css';
import { colors } from '../../../utils';

export const styContainerSocmed = css`
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 50px;
  right: auto;
  z-index: 10;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const stySocmedList = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0px;
  padding-top: 0px;
  list-style-type: none;
  list-style-position: initial;
  list-style-image: initial;

  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin-top: 0px;
    margin-right: auto;
    background-color: ${colors.primary[900]};
  }
`;

export const styList = css`
  padding: 14px;
  transition: all 0.5s;
  svg {
    transition: all 2s;
    path {
      transition: all 2s;
    }
  }
  &:hover {
    color: #ef4b6c;
    transform: translateY(-15px);
    svg {
      color: #ef4b6c;
      stroke: #ef4b6c;
    }
  }
`;
