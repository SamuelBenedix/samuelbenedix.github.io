import { render, screen } from '@testing-library/react';
import HeaderNavigation from '.';
import { MemoryRouter } from 'react-router-dom';

test('Should render list Header Navigation with label', () => {
  const { container } = render(
    <MemoryRouter>
      <HeaderNavigation isEditBtn label="test" />
    </MemoryRouter>
  );
  expect(screen.getByText(/test/i)).toBeInTheDocument();
  expect(container).toBeInTheDocument();
});

test('Should render list Header Navigation with edit', () => {
  render(
    <MemoryRouter>
      <HeaderNavigation isEditBtn />
    </MemoryRouter>
  );
  const headerNavigation = screen.getByTestId('header-edit');
  expect(headerNavigation).toBeInTheDocument();
});

test('Should render list Header Navigation with back button', () => {
  render(
    <MemoryRouter>
      <HeaderNavigation isEditBtn label="test" />
    </MemoryRouter>
  );
  const headerNavigation = screen.getByTestId('header-button');
  expect(headerNavigation).toBeInTheDocument();
});
