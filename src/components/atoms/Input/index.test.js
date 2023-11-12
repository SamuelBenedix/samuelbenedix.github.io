import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from '.';
import userEvent from '@testing-library/user-event';

test('Should render placeholder', () => {
  render(<Input placeHolder="First Name" />);
  const inputComponent = screen.getByPlaceholderText(/first name/i);

  expect(inputComponent).toBeInTheDocument();
});

test('Should input data', () => {
  const label = 'First Name';
  render(<Input placeHolder={label} value="label" />);

  expect(screen.getByDisplayValue('label')).toBeInTheDocument();
});

// test('Should input data find error', async () => {
//   const label = 'First Name';
//   const value = 'label!@^&*!sam';
//   render(<Input placeHolder={label} value={value} />);
//   const input = screen.getByTestId('input');
//   expect(input).not.toBe(null);
//   await userEvent.type(input, value);

//   expect(screen.getByDisplayValue(value)).toBeInTheDocument();
//   const error = screen.getByTestId('error');
//   expect(error).toBeInTheDocument();
// });
