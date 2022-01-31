import { css } from '@emotion/css';

export const styContainer = css`
  width: 100%;
  padding-right: var(--bs-gutter-x, 4rem);
  padding-left: var(--bs-gutter-x, 4rem);
  margin-right: auto;
  margin-left: auto;
  @media screen and (max-width: 768px) {
    padding-right: var(--bs-gutter-x, 0.75rem);
    padding-left: var(--bs-gutter-x, 0.75rem);
  }
`;
