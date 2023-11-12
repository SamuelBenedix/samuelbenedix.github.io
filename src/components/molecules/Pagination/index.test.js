import { render, screen } from '@testing-library/react';
import Pagination from '.';

test('Should render Pagination', () => {
  render(<Pagination page={20} length={20} />);
  const pagination = screen.getByTestId('pagination-left');
  const paginationRight = screen.getByTestId('pagination-right');
  expect(pagination).toBeInTheDocument();
  expect(paginationRight).toBeInTheDocument();
});

test('should render only left Pagination', () => {
  render(<Pagination page={2} length={20} />);
  const pagination = screen.getByTestId('pagination-left');
  const paginationRight = screen.queryByTestId('pagination-right');
  expect(pagination).toBeInTheDocument();
  expect(paginationRight).not.toBeInTheDocument();
});

test('should render only right Pagination', () => {
  render(<Pagination page={0} length={20} />);
  const pagination = screen.queryByTestId('pagination-left');
  const paginationRight = screen.getByTestId('pagination-right');
  expect(pagination).not.toBeInTheDocument();
  expect(paginationRight).toBeInTheDocument();
});
