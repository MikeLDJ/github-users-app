import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './Home';

test('renders learn react link', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const linkElement = getByText(/github/i);
  expect(linkElement).toBeInTheDocument();
});
