import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('Given the component Footer', () => {
  describe('When it is rendered', () => {
    render(<Footer></Footer>);
    test('The role address should be in the document', () => {
      const element = screen.getByRole('contentinfo');
      expect(element).toBeInTheDocument;
    });
  });
});
