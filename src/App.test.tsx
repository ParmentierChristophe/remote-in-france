import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { container } from './core/infra/config/config';
import { Provider } from 'inversify-react';
import App from './App';

test('renders navigation, company list, and footer components', () => {
  render(
      <BrowserRouter>
        <Provider container={container} standalone={true}>
          <App />
        </Provider>
      </BrowserRouter>
  );

  const navigationElement = screen.getByTestId('navigation');
  const companyListElement = screen.getByTestId('company-list');
  const footerElement = screen.getByTestId('footer');

   expect(navigationElement).toBeInTheDocument();
   expect(companyListElement).toBeInTheDocument();
  expect(footerElement).toBeInTheDocument();
});
