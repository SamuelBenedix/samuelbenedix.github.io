import { css } from '@emotion/css';

export const styContainer = css`
  overflow: scroll;
  height: calc(100vh - 250px);
  width: 100%;
  margin-bottom: 10px;
`;

export const styListGroup = css`
  font-size: 18px;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  background-color: #d9d9d9;
  padding: 5px 30px;
  position: sticky;
  top: 0px;
`;

export const styContainerSearch = css`
  padding: 0 30px;
`;

export const styTitle = css`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 30px;
`;

export const styWrapperHeader = css`
  padding: 10px 20px 10px 20px;
  border-bottom: 1px solid #808080;
`;

export const styWrapperBtn = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7px;
`;
