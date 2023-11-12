import { render, screen, within } from '@testing-library/react';
import ProfilePict from '.';

test('Should render list contact with name', () => {
  render(<ProfilePict firstName="samuel" />);
  const profilePictComponent = screen.getByTestId('profile-pict');

  expect(profilePictComponent).toBeInTheDocument();
});

test('should render with first letter name', () => {
  render(<ProfilePict firstName="samuel" />);

  const { getByText } = within(screen.getByTestId('profile-pict'));
  expect(getByText('S')).toBeInTheDocument();
});

test('Should render with round component', () => {
  render(<ProfilePict firstName="samuel" />);
  const profilePicture = screen.getByTestId('profile-pict-container');
  expect(profilePicture).toHaveStyle('border-radius:50%');
  expect(profilePicture).toBeInTheDocument();
});
