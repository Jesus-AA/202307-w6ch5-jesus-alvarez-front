import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Header } from './header';

describe('Given the component Header', () => {
  describe('When it is Rendered', () => {
    render(<Header></Header>);
    test('the heading Champions should be in the document', () => {
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    });
  });
});
