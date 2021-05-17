import React from 'react';
import { render, screen } from './util/test-utils';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  const linkElement = screen.getByText(/lei的公共仓库/i);
  expect(linkElement).toBeInTheDocument();
});
