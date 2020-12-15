import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders input for a song name', () => {
  const { getByPlaceholderText } = render(<App />);
  const songInputElement = getByPlaceholderText(/Search for a song../i);
  expect(songInputElement).toBeInTheDocument();
});
