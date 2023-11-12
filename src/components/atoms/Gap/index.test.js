import { render, screen } from '@testing-library/react';
import Gap from '.';

test('Should render a Gap with height', () => {
  render(<Gap height={20} />);
  const gap = screen.getByTestId('gap');
  expect(gap).toHaveStyle('height:20px;');
});

test('Should render a Gap with width', () => {
  render(<Gap width={20} />);
  const gap = screen.getByTestId('gap');
  expect(gap).toHaveStyle('width:20px;');
});

test('Should render a Gap with width and height', () => {
  render(<Gap width={20} height={20} />);
  const gap = screen.getByTestId('gap');
  expect(gap).toHaveStyle('width:20px; height:20px;');
});
