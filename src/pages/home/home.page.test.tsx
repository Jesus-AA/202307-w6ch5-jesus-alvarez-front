import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './home.page';

describe('Given the component HomePage', () => {
  describe('When it is rendered', () => {
    let button: HTMLButtonElement;
    beforeEach(() => {
      render(
        <MemoryRouter>
          <HomePage></HomePage>
        </MemoryRouter>
      );
      button = screen.getByRole('button');
    });

    test('the component should be in the document', () => {
      expect(button).toBeInTheDocument();
    });
  });
});
