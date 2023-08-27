import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import HomePage from './home.page';

describe('Given the component HomePage', () => {
  describe('When it is rendered', () => {
    render(<HomePage></HomePage>);
    test('The string Top Players List should be in the document', () => {
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    });
  });
});
