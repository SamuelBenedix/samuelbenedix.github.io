import { css } from '@emotion/css';
import { colors } from '../../../utils';

export const styContainer = (position) => css`
  height: ${position ? 64 : 50}px;
  width: ${position ? 64 : 220}px;
  padding: ${position ? '0' : '16px 50px'};
  font-weight: 700;
  font-size: 0.8rem;
  line-height: ${position ? 0 : 18}px;
  letter-spacing: 1.54px;
  text-transform: uppercase;
  border-radius: 2px;
  tex-decoration: none;
  background-color: ${position ? '#ef4b6c' : colors.primary[900]};
  border: 0;
  color: ${colors.light[900]};
  transition: all 0.5s ease-in-out;
  border-radius: ${position ? '50%' : 0};
  transform: translateZ(0);

  position: ${position ? 'fixed' : 'absolute'};

  width: ${position ? 40 : 0} 40px;
  position: ${position ? 'fixed' : 'relative'};
  bottom: ${position ? 'calc(100vh - 101vh)' : 'calc(100vh - 95vh)'};
  margin-bottom: ${position && '20px'};
  right: ${position ? 30 : 10}px;
  left: ${position ? 'calc(100% - 94px)' : 0};
  z-index: ${position ? 10 : 3};

  justify-content: center;
  align-items: center;
  display: ${position && 'flex'};

  &:hover {
    background-color: ${colors.primary[800]};
  }
`;

export const styIcon = (position) => css`
  visibility: ${position ? 'visibilty' : 'hidden'};
  display: ${position ? 'block' : 'none'};
`;

export const styTitle = (position) => css`
  visibility: ${position ? 'hidden' : 'visibilty'};
  display: ${position ? 'none' : 'inline-block'};
`;
