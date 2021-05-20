import React from 'react';
import { render, screen } from './utils/test-utils';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  const linkElement = screen.getByText(/查看仓库列表/i);
  expect(linkElement).toBeInTheDocument();
});
