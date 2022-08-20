import { css } from '@emotion/css';

export const styFeaturedItem = css`
  flex: 0 0 50%;
  max-width: 100%;
  position: relative;

  @media (min-width: 576px) {
    max-width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 33.333333%;
  }

  padding: 10px;
`;

export const styCoverWrapper = css`
  cursor: pointer;
  min-width: 400px;
  border-radius: 4px;
  display: block;
  padding-top: 78.22%;
  position: relative;
  width: 100%;
  background-color: #f2f2f2;
  margin-bottom: 25px;
`;

export const styTextOverlay = css`
  height: 100%;
  display: flex;

  @media (min-width: 576px) {
    padding-left: 20px;
  }
`;

export const styText = css`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 4;
  height: 100%;

  .overlay {
    opacity: 0;
    transition: all 1s;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.5) 90%
    );
    margin-top: auto;
    padding: 20px 15px 18px;
    border-radius: 0 0 4px 4px;
    flex-shrink: 0;
    display: flex;
    flex-wrap: nowrap;
    pointer-events: none;
    position: relative;
    width: 100%;
  }

  &:hover {
    .overlay {
      opacity: 1;
    }
  }
`;

export const styCover = css`
  border-radius: 4px;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const styDominant = css`
  background-color: rgb(242, 242, 242);
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const styImage = css`
  object-fit: cover;
  transition: opacity 0.15s linear;
  will-change: transform;
  will-change: auto;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  border-radius: 4px;
  display: block;
  overflow: hidden;
`;

export const styTextLabel = css`
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 0;

  &:hover {
    text-decoration: underline;
  }
`;
