import React from 'react';
import { render, screen, act } from '@testing-library/react';
import App from './App';
import user from '@testing-library/user-event';

test('renders learn react link', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
  act(() => user.click(screen.getAllByRole('button', { name: 'Add' })[0]));
  expect(container).toMatchSnapshot();
  act(() => user.click(screen.getAllByRole('button', { name: '+' })[0]));
  expect(container).toMatchSnapshot();
  act(() => user.click(screen.getAllByRole('button', { name: '-' })[0]));
  expect(container).toMatchSnapshot();
  act(() => user.click(screen.getAllByRole('button', { name: '-' })[0]));
  expect(container).toMatchSnapshot();
});
