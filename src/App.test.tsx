import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('renders the page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
});
